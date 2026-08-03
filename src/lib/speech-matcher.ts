import { type TextElement, tokenize } from "./word-tokenizer"
import { levenshteinDistance } from "./levenshtein"

// You cannot have consumed (many) more reference words than words you actually
// spoke — this caps how far a single recognition result may advance the position,
// so an ad-lib can never fling the prompter a sentence ahead.
const MAX_SLACK_TOKENS = 4

// If even the best candidate differs from what was heard by more than this
// fraction of its length, what was heard is not the script (an ad-lib, a retake
// marker, a cough). Hold position instead of moving to a bad match — tracking
// resumes as soon as the reading returns to the script.
const MAX_NORMALIZED_DISTANCE = 0.5

// The reading may resume up to this many reference words PAST the current
// position: words the recognizer missed, or words the reader decided to drop.
// Candidates that skip words carry a small penalty so that plain continuation
// wins whenever it matches equally well.
const MAX_SKIP_TOKENS = 6
const SKIP_PENALTY_PER_TOKEN = 2

// This is the "secret sauce" of this whole project: a robust algorithm to match
// the reference text and the speech recognized text using the levenshtein distance.
export const computeSpeechRecognitionTokenIndex = (
  recognized: string,
  reference: TextElement[],
  lastRecognizedTokenIndex: number,
) => {
  // Tokenize the recognized input:
  const recognized_tokens = tokenize(recognized).filter(
    element => element.type === "TOKEN",
  )

  // Convert the tokens back to a string:
  const comparison_string = recognized_tokens
    .reduce(
      (accumulator, currentToken) => accumulator + " " + currentToken.value,
      "",
    )
    .replace(/\s+/, " ")
    .trim()

  if (lastRecognizedTokenIndex < 0) {
    lastRecognizedTokenIndex = 0
  }

  // The next reference tokens, starting at the last recognized index. Sliced
  // generously (the slice is over elements, which interleave tokens and
  // delimiters) and wide enough to allow both skipped words and reading slack:
  const window_tokens = reference
    .slice(
      lastRecognizedTokenIndex,
      lastRecognizedTokenIndex +
        (recognized_tokens.length + MAX_SKIP_TOKENS + MAX_SLACK_TOKENS) * 2 +
        10,
    )
    .filter(element => element.type === "TOKEN")

  // Try candidate stretches starting 0..MAX_SKIP_TOKENS words past the current
  // position (skipped words = missed by the recognizer, or dropped by the
  // reader), each extending at most as far as could plausibly have been read
  // aloud in this result. Best (distance + skip penalty) wins.
  let bestScore = Infinity
  let bestDistance = Infinity
  let bestSubstringLength = 0
  let bestToken: TextElement | null = null

  for (let skip = 0; skip <= MAX_SKIP_TOKENS; skip++) {
    const candidate_tokens = window_tokens.slice(
      skip,
      skip + recognized_tokens.length + MAX_SLACK_TOKENS,
    )

    let i = 0
    while (++i <= candidate_tokens.length) {
      const reference_substring = candidate_tokens
        .slice(0, i)
        .reduce(
          (accumulator, currentToken) => accumulator + " " + currentToken.value,
          "",
        )
        .replace(/\s+/, " ")
        .trim()
      const distance = levenshteinDistance(
        comparison_string,
        reference_substring,
      )
      const score = distance + skip * SKIP_PENALTY_PER_TOKEN
      if (score < bestScore) {
        bestScore = score
        bestDistance = distance
        bestSubstringLength = reference_substring.length
        bestToken = candidate_tokens[i - 1]
      }
    }
  }

  if (bestToken) {
    // Quality gate: only move if what was heard actually resembles the script.
    const denominator = Math.max(
      comparison_string.length,
      bestSubstringLength,
      1,
    )
    if (bestDistance / denominator > MAX_NORMALIZED_DISTANCE) {
      return lastRecognizedTokenIndex
    }
    return bestToken.index
  }

  return lastRecognizedTokenIndex
}
