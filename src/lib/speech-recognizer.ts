type SubscriberFunction = (
  final_transcript: string,
  interim_transcript: string,
) => void

// Chrome 139+ exposes on-device speech recognition on the unprefixed
// `SpeechRecognition` via static `available()` / `install()` and a per-instance
// `processLocally` flag. TypeScript's DOM lib doesn't know these yet.
type Availability = "available" | "downloadable" | "downloading" | "unavailable"

interface SpeechRecognitionStatic {
  new (): SpeechRecognition
  available?: (opts: {
    langs: string[]
    processLocally?: boolean
  }) => Promise<Availability>
  install?: (opts: { langs: string[]; processLocally?: boolean }) => Promise<boolean>
}

interface LocalSpeechRecognition extends SpeechRecognition {
  processLocally?: boolean
}

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionStatic
    webkitSpeechRecognition: SpeechRecognitionStatic
  }
}

export default class SpeechRecognizer {
  private recognizer: LocalSpeechRecognition
  private subscribers: SubscriberFunction[] = []
  private shouldListen: Boolean = false
  /** Resolves once the on-device upgrade attempt has finished (success or fallback). */
  private ready: Promise<void>
  /** True once on-device recognition is confirmed active (else cloud). */
  public isLocal: boolean = false

  constructor(language: string = "en-US") {
    this.recognizer = new webkitSpeechRecognition()
    this.configure(language)
    this.ready = this.tryEnableLocal(language)
  }

  /** Attempt to switch to Chrome's on-device engine; fall back to cloud otherwise. */
  private async tryEnableLocal(language: string): Promise<void> {
    const Ctor = window.SpeechRecognition
    if (!Ctor || !Ctor.available || !Ctor.install) {
      console.warn("[teleprompter] on-device API missing; using cloud")
      return
    }

    try {
      const status = await Ctor.available({
        langs: [language],
        processLocally: true,
      })
      console.info("[teleprompter] on-device availability:", status)
      if (status === "unavailable") return

      if (status !== "available") {
        const ok = await Ctor.install({ langs: [language], processLocally: true })
        if (!ok) return
      }

      const wasListening = this.shouldListen
      if (wasListening) this.recognizer.stop()

      const local = new Ctor() as LocalSpeechRecognition
      local.processLocally = true
      this.recognizer = local
      this.configure(language)
      this.isLocal = true
      console.info("[teleprompter] on-device speech recognition active (offline)")

      if (wasListening) this.recognizer.start()
    } catch (err) {
      console.warn("[teleprompter] on-device setup failed; using cloud:", err)
    }
  }

  private configure(language: string): void {
    this.recognizer.lang = language
    this.recognizer.continuous = true
    this.recognizer.interimResults = true

    this.recognizer.onresult = e => {
      let final_transcript = ""
      let interim_transcript = ""

      for (let i = e.resultIndex; i < e.results.length; ++i) {
        const result = e.results[i]
        const transcript = result[0].transcript

        if (result.isFinal) {
          final_transcript += transcript
        } else {
          interim_transcript += transcript
        }
      }

      for (let subscriber of this.subscribers) {
        subscriber(final_transcript, interim_transcript)
      }
    }

    this.recognizer.onend = () => {
      if (this.shouldListen) {
        this.recognizer.start()
      }
    }
  }

  start(): void {
    this.shouldListen = true
    // Wait for the on-device upgrade before starting, so the local engine (if
    // available) is the one started rather than racing the cloud engine in first.
    this.ready.then(() => {
      if (this.shouldListen) this.recognizer.start()
    })
  }

  stop(): void {
    this.shouldListen = false
    this.recognizer.stop()
  }

  onresult(subscriber: SubscriberFunction): void {
    this.subscribers.push(subscriber)
  }

  setLanguage(language: string): void {
    const wasListening = this.shouldListen
    if (wasListening) {
      this.stop()
    }
    this.recognizer.lang = language
    if (wasListening) {
      this.start()
    }
  }
}
