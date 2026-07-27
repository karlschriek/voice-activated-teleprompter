(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function c(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(d){if(d.ep)return;d.ep=!0;const h=c(d);fetch(d.href,h)}})();function xg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ho={exports:{}},Wl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function Ug(){if(Jh)return Wl;Jh=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(s,d,h){var g=null;if(h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),"key"in d){h={};for(var w in d)w!=="key"&&(h[w]=d[w])}else h=d;return d=h.ref,{$$typeof:i,type:s,key:g,ref:d!==void 0?d:null,props:h}}return Wl.Fragment=r,Wl.jsx=c,Wl.jsxs=c,Wl}var Ih;function Bg(){return Ih||(Ih=1,ho.exports=Ug()),ho.exports}var se=Bg(),po={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function qg(){if(Wh)return ye;Wh=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),g=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),T=Symbol.iterator;function E(v){return v===null||typeof v!="object"?null:(v=T&&v[T]||v["@@iterator"],typeof v=="function"?v:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,Y={};function C(v,L,te){this.props=v,this.context=L,this.refs=Y,this.updater=te||j}C.prototype.isReactComponent={},C.prototype.setState=function(v,L){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,L,"setState")},C.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function z(){}z.prototype=C.prototype;function Q(v,L,te){this.props=v,this.context=L,this.refs=Y,this.updater=te||j}var b=Q.prototype=new z;b.constructor=Q,H(b,C.prototype),b.isPureReactComponent=!0;var _=Array.isArray,R={H:null,A:null,T:null,S:null,V:null},J=Object.prototype.hasOwnProperty;function G(v,L,te,F,ie,oe){return te=oe.ref,{$$typeof:i,type:v,key:L,ref:te!==void 0?te:null,props:oe}}function W(v,L){return G(v.type,L,void 0,void 0,void 0,v.props)}function $(v){return typeof v=="object"&&v!==null&&v.$$typeof===i}function Z(v){var L={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(te){return L[te]})}var N=/\/+/g;function q(v,L){return typeof v=="object"&&v!==null&&v.key!=null?Z(""+v.key):L.toString(36)}function k(){}function ee(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(k,k):(v.status="pending",v.then(function(L){v.status==="pending"&&(v.status="fulfilled",v.value=L)},function(L){v.status==="pending"&&(v.status="rejected",v.reason=L)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function ne(v,L,te,F,ie){var oe=typeof v;(oe==="undefined"||oe==="boolean")&&(v=null);var le=!1;if(v===null)le=!0;else switch(oe){case"bigint":case"string":case"number":le=!0;break;case"object":switch(v.$$typeof){case i:case r:le=!0;break;case S:return le=v._init,ne(le(v._payload),L,te,F,ie)}}if(le)return ie=ie(v),le=F===""?"."+q(v,0):F,_(ie)?(te="",le!=null&&(te=le.replace(N,"$&/")+"/"),ne(ie,L,te,"",function(me){return me})):ie!=null&&($(ie)&&(ie=W(ie,te+(ie.key==null||v&&v.key===ie.key?"":(""+ie.key).replace(N,"$&/")+"/")+le)),L.push(ie)),1;le=0;var pe=F===""?".":F+":";if(_(v))for(var ce=0;ce<v.length;ce++)F=v[ce],oe=pe+q(F,ce),le+=ne(F,L,te,oe,ie);else if(ce=E(v),typeof ce=="function")for(v=ce.call(v),ce=0;!(F=v.next()).done;)F=F.value,oe=pe+q(F,ce++),le+=ne(F,L,te,oe,ie);else if(oe==="object"){if(typeof v.then=="function")return ne(ee(v),L,te,F,ie);throw L=String(v),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return le}function D(v,L,te){if(v==null)return v;var F=[],ie=0;return ne(v,F,"","",function(oe){return L.call(te,oe,ie++)}),F}function I(v){if(v._status===-1){var L=v._result;L=L(),L.then(function(te){(v._status===0||v._status===-1)&&(v._status=1,v._result=te)},function(te){(v._status===0||v._status===-1)&&(v._status=2,v._result=te)}),v._status===-1&&(v._status=0,v._result=L)}if(v._status===1)return v._result.default;throw v._result}var P=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function ae(){}return ye.Children={map:D,forEach:function(v,L,te){D(v,function(){L.apply(this,arguments)},te)},count:function(v){var L=0;return D(v,function(){L++}),L},toArray:function(v){return D(v,function(L){return L})||[]},only:function(v){if(!$(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ye.Component=C,ye.Fragment=c,ye.Profiler=d,ye.PureComponent=Q,ye.StrictMode=s,ye.Suspense=y,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,ye.__COMPILER_RUNTIME={__proto__:null,c:function(v){return R.H.useMemoCache(v)}},ye.cache=function(v){return function(){return v.apply(null,arguments)}},ye.cloneElement=function(v,L,te){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var F=H({},v.props),ie=v.key,oe=void 0;if(L!=null)for(le in L.ref!==void 0&&(oe=void 0),L.key!==void 0&&(ie=""+L.key),L)!J.call(L,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&L.ref===void 0||(F[le]=L[le]);var le=arguments.length-2;if(le===1)F.children=te;else if(1<le){for(var pe=Array(le),ce=0;ce<le;ce++)pe[ce]=arguments[ce+2];F.children=pe}return G(v.type,ie,void 0,void 0,oe,F)},ye.createContext=function(v){return v={$$typeof:g,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:h,_context:v},v},ye.createElement=function(v,L,te){var F,ie={},oe=null;if(L!=null)for(F in L.key!==void 0&&(oe=""+L.key),L)J.call(L,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(ie[F]=L[F]);var le=arguments.length-2;if(le===1)ie.children=te;else if(1<le){for(var pe=Array(le),ce=0;ce<le;ce++)pe[ce]=arguments[ce+2];ie.children=pe}if(v&&v.defaultProps)for(F in le=v.defaultProps,le)ie[F]===void 0&&(ie[F]=le[F]);return G(v,oe,void 0,void 0,null,ie)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(v){return{$$typeof:w,render:v}},ye.isValidElement=$,ye.lazy=function(v){return{$$typeof:S,_payload:{_status:-1,_result:v},_init:I}},ye.memo=function(v,L){return{$$typeof:p,type:v,compare:L===void 0?null:L}},ye.startTransition=function(v){var L=R.T,te={};R.T=te;try{var F=v(),ie=R.S;ie!==null&&ie(te,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ae,P)}catch(oe){P(oe)}finally{R.T=L}},ye.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},ye.use=function(v){return R.H.use(v)},ye.useActionState=function(v,L,te){return R.H.useActionState(v,L,te)},ye.useCallback=function(v,L){return R.H.useCallback(v,L)},ye.useContext=function(v){return R.H.useContext(v)},ye.useDebugValue=function(){},ye.useDeferredValue=function(v,L){return R.H.useDeferredValue(v,L)},ye.useEffect=function(v,L,te){var F=R.H;if(typeof te=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return F.useEffect(v,L)},ye.useId=function(){return R.H.useId()},ye.useImperativeHandle=function(v,L,te){return R.H.useImperativeHandle(v,L,te)},ye.useInsertionEffect=function(v,L){return R.H.useInsertionEffect(v,L)},ye.useLayoutEffect=function(v,L){return R.H.useLayoutEffect(v,L)},ye.useMemo=function(v,L){return R.H.useMemo(v,L)},ye.useOptimistic=function(v,L){return R.H.useOptimistic(v,L)},ye.useReducer=function(v,L,te){return R.H.useReducer(v,L,te)},ye.useRef=function(v){return R.H.useRef(v)},ye.useState=function(v){return R.H.useState(v)},ye.useSyncExternalStore=function(v,L,te){return R.H.useSyncExternalStore(v,L,te)},ye.useTransition=function(){return R.H.useTransition()},ye.version="19.1.1",ye}var Fh;function Xu(){return Fh||(Fh=1,po.exports=qg()),po.exports}var Me=Xu();const jg=xg(Me);var yo={exports:{}},Fl={},mo={exports:{}},go={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function Hg(){return $h||($h=1,(function(i){function r(D,I){var P=D.length;D.push(I);e:for(;0<P;){var ae=P-1>>>1,v=D[ae];if(0<d(v,I))D[ae]=I,D[P]=v,P=ae;else break e}}function c(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var I=D[0],P=D.pop();if(P!==I){D[0]=P;e:for(var ae=0,v=D.length,L=v>>>1;ae<L;){var te=2*(ae+1)-1,F=D[te],ie=te+1,oe=D[ie];if(0>d(F,P))ie<v&&0>d(oe,F)?(D[ae]=oe,D[ie]=P,ae=ie):(D[ae]=F,D[te]=P,ae=te);else if(ie<v&&0>d(oe,P))D[ae]=oe,D[ie]=P,ae=ie;else break e}}return I}function d(D,I){var P=D.sortIndex-I.sortIndex;return P!==0?P:D.id-I.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var g=Date,w=g.now();i.unstable_now=function(){return g.now()-w}}var y=[],p=[],S=1,T=null,E=3,j=!1,H=!1,Y=!1,C=!1,z=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;function _(D){for(var I=c(p);I!==null;){if(I.callback===null)s(p);else if(I.startTime<=D)s(p),I.sortIndex=I.expirationTime,r(y,I);else break;I=c(p)}}function R(D){if(Y=!1,_(D),!H)if(c(y)!==null)H=!0,J||(J=!0,q());else{var I=c(p);I!==null&&ne(R,I.startTime-D)}}var J=!1,G=-1,W=5,$=-1;function Z(){return C?!0:!(i.unstable_now()-$<W)}function N(){if(C=!1,J){var D=i.unstable_now();$=D;var I=!0;try{e:{H=!1,Y&&(Y=!1,Q(G),G=-1),j=!0;var P=E;try{t:{for(_(D),T=c(y);T!==null&&!(T.expirationTime>D&&Z());){var ae=T.callback;if(typeof ae=="function"){T.callback=null,E=T.priorityLevel;var v=ae(T.expirationTime<=D);if(D=i.unstable_now(),typeof v=="function"){T.callback=v,_(D),I=!0;break t}T===c(y)&&s(y),_(D)}else s(y);T=c(y)}if(T!==null)I=!0;else{var L=c(p);L!==null&&ne(R,L.startTime-D),I=!1}}break e}finally{T=null,E=P,j=!1}I=void 0}}finally{I?q():J=!1}}}var q;if(typeof b=="function")q=function(){b(N)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,ee=k.port2;k.port1.onmessage=N,q=function(){ee.postMessage(null)}}else q=function(){z(N,0)};function ne(D,I){G=z(function(){D(i.unstable_now())},I)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return E},i.unstable_next=function(D){switch(E){case 1:case 2:case 3:var I=3;break;default:I=E}var P=E;E=I;try{return D()}finally{E=P}},i.unstable_requestPaint=function(){C=!0},i.unstable_runWithPriority=function(D,I){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var P=E;E=D;try{return I()}finally{E=P}},i.unstable_scheduleCallback=function(D,I,P){var ae=i.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ae+P:ae):P=ae,D){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=P+v,D={id:S++,callback:I,priorityLevel:D,startTime:P,expirationTime:v,sortIndex:-1},P>ae?(D.sortIndex=P,r(p,D),c(y)===null&&D===c(p)&&(Y?(Q(G),G=-1):Y=!0,ne(R,P-ae))):(D.sortIndex=v,r(y,D),H||j||(H=!0,J||(J=!0,q()))),D},i.unstable_shouldYield=Z,i.unstable_wrapCallback=function(D){var I=E;return function(){var P=E;E=I;try{return D.apply(this,arguments)}finally{E=P}}}})(go)),go}var Ph;function Qg(){return Ph||(Ph=1,mo.exports=Hg()),mo.exports}var vo={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function Yg(){if(ep)return tt;ep=1;var i=Xu();function r(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(y,p,S){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:T==null?null:""+T,children:y,containerInfo:p,implementation:S}}var g=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,tt.createPortal=function(y,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return h(y,p,null,S)},tt.flushSync=function(y){var p=g.T,S=s.p;try{if(g.T=null,s.p=2,y)return y()}finally{g.T=p,s.p=S,s.d.f()}},tt.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(y,p))},tt.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},tt.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var S=p.as,T=w(S,p.crossOrigin),E=typeof p.integrity=="string"?p.integrity:void 0,j=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?s.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:T,integrity:E,fetchPriority:j}):S==="script"&&s.d.X(y,{crossOrigin:T,integrity:E,fetchPriority:j,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},tt.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=w(p.as,p.crossOrigin);s.d.M(y,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(y)},tt.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,T=w(S,p.crossOrigin);s.d.L(y,S,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},tt.preloadModule=function(y,p){if(typeof y=="string")if(p){var S=w(p.as,p.crossOrigin);s.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(y)},tt.requestFormReset=function(y){s.d.r(y)},tt.unstable_batchedUpdates=function(y,p){return y(p)},tt.useFormState=function(y,p,S){return g.H.useFormState(y,p,S)},tt.useFormStatus=function(){return g.H.useHostTransitionStatus()},tt.version="19.1.1",tt}var tp;function kg(){if(tp)return vo.exports;tp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),vo.exports=Yg(),vo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function Lg(){if(np)return Fl;np=1;var i=Qg(),r=Xu(),c=kg();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(h(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return w(l),e;if(u===a)return w(l),t;u=u.sibling}throw Error(s(188))}if(n.return!==a.return)n=l,a=u;else{for(var o=!1,f=l.child;f;){if(f===n){o=!0,n=l,a=u;break}if(f===a){o=!0,a=l,n=u;break}f=f.sibling}if(!o){for(f=u.child;f;){if(f===n){o=!0,n=u,a=l;break}if(f===a){o=!0,a=u,n=l;break}f=f.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,T=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),Q=Symbol.for("react.consumer"),b=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var k=Symbol.for("react.client.reference");function ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===k?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case C:return"Profiler";case Y:return"StrictMode";case R:return"Suspense";case J:return"SuspenseList";case $:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case b:return(e.displayName||"Context")+".Provider";case Q:return(e._context.displayName||"Context")+".Consumer";case _:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}var ne=Array.isArray,D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ae=[],v=-1;function L(e){return{current:e}}function te(e){0>v||(e.current=ae[v],ae[v]=null,v--)}function F(e,t){v++,ae[v]=e.current,e.current=t}var ie=L(null),oe=L(null),le=L(null),pe=L(null);function ce(e,t){switch(F(le,t),F(oe,e),F(ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ah(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ah(t),e=wh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}te(ie),F(ie,e)}function me(){te(ie),te(oe),te(le)}function Ye(e){e.memoizedState!==null&&F(pe,e);var t=ie.current,n=wh(t,e.type);t!==n&&(F(oe,e),F(ie,n))}function Nt(e){oe.current===e&&(te(ie),te(oe)),pe.current===e&&(te(pe),Vl._currentValue=P)}var St=Object.prototype.hasOwnProperty,jt=i.unstable_scheduleCallback,at=i.unstable_cancelCallback,Ht=i.unstable_shouldYield,qn=i.unstable_requestPaint,lt=i.unstable_now,er=i.unstable_getCurrentPriorityLevel,$a=i.unstable_ImmediatePriority,yi=i.unstable_UserBlockingPriority,mi=i.unstable_NormalPriority,py=i.unstable_LowPriority,ac=i.unstable_IdlePriority,yy=i.log,my=i.unstable_setDisableYieldValue,Pa=null,ft=null;function on(e){if(typeof yy=="function"&&my(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(Pa,e)}catch{}}var dt=Math.clz32?Math.clz32:by,gy=Math.log,vy=Math.LN2;function by(e){return e>>>=0,e===0?32:31-(gy(e)/vy|0)|0}var gi=256,vi=4194304;function jn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,u=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~u,a!==0?l=jn(a):(o&=f,o!==0?l=jn(o):n||(n=f&~e,n!==0&&(l=jn(n))))):(f=a&~u,f!==0?l=jn(f):o!==0?l=jn(o):n||(n=a&~e,n!==0&&(l=jn(n)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:l}function el(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Sy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lc(){var e=gi;return gi<<=1,(gi&4194048)===0&&(gi=256),e}function ic(){var e=vi;return vi<<=1,(vi&62914560)===0&&(vi=4194304),e}function tr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ty(e,t,n,a,l,u){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var f=e.entanglements,m=e.expirationTimes,x=e.hiddenUpdates;for(n=o&~n;0<n;){var X=31-dt(n),K=1<<X;f[X]=0,m[X]=-1;var U=x[X];if(U!==null)for(x[X]=null,X=0;X<U.length;X++){var B=U[X];B!==null&&(B.lane&=-536870913)}n&=~K}a!==0&&uc(e,a,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(o&~t))}function uc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-dt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function rc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-dt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function nr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ar(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sc(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:Lh(e.type))}function Ay(e,t){var n=I.p;try{return I.p=e,t()}finally{I.p=n}}var cn=Math.random().toString(36).slice(2),Pe="__reactFiber$"+cn,it="__reactProps$"+cn,ra="__reactContainer$"+cn,lr="__reactEvents$"+cn,wy="__reactListeners$"+cn,Ey="__reactHandles$"+cn,oc="__reactResources$"+cn,nl="__reactMarker$"+cn;function ir(e){delete e[Pe],delete e[it],delete e[lr],delete e[wy],delete e[Ey]}function sa(e){var t=e[Pe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ra]||n[Pe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rh(e);e!==null;){if(n=e[Pe])return n;e=Rh(e)}return t}e=n,n=e.parentNode}return null}function oa(e){if(e=e[Pe]||e[ra]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function al(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function ca(e){var t=e[oc];return t||(t=e[oc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ge(e){e[nl]=!0}var cc=new Set,fc={};function Hn(e,t){fa(e,t),fa(e+"Capture",t)}function fa(e,t){for(fc[e]=t,e=0;e<t.length;e++)cc.add(t[e])}var _y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dc={},hc={};function Oy(e){return St.call(hc,e)?!0:St.call(dc,e)?!1:_y.test(e)?hc[e]=!0:(dc[e]=!0,!1)}function Si(e,t,n){if(Oy(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ti(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Vt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var ur,pc;function da(e){if(ur===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ur=t&&t[1]||"",pc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ur+e+pc}var rr=!1;function sr(e,t){if(!e||rr)return"";rr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(B){var U=B}Reflect.construct(e,[],K)}else{try{K.call()}catch(B){U=B}e.call(K.prototype)}}else{try{throw Error()}catch(B){U=B}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(B){if(B&&U&&typeof B.stack=="string")return[B.stack,U.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),o=u[0],f=u[1];if(o&&f){var m=o.split(`
`),x=f.split(`
`);for(l=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;if(a===m.length||l===x.length)for(a=m.length-1,l=x.length-1;1<=a&&0<=l&&m[a]!==x[l];)l--;for(;1<=a&&0<=l;a--,l--)if(m[a]!==x[l]){if(a!==1||l!==1)do if(a--,l--,0>l||m[a]!==x[l]){var X=`
`+m[a].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=a&&0<=l);break}}}finally{rr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?da(n):""}function Ry(e){switch(e.tag){case 26:case 27:case 5:return da(e.type);case 16:return da("Lazy");case 13:return da("Suspense");case 19:return da("SuspenseList");case 0:case 15:return sr(e.type,!1);case 11:return sr(e.type.render,!1);case 1:return sr(e.type,!0);case 31:return da("Activity");default:return""}}function yc(e){try{var t="";do t+=Ry(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dy(e){var t=mc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){a=""+o,u.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ai(e){e._valueTracker||(e._valueTracker=Dy(e))}function gc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=mc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var My=/[\n"\\]/g;function At(e){return e.replace(My,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function or(e,t,n,a,l,u,o,f){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?cr(e,o,Tt(t)):n!=null?cr(e,o,Tt(n)):a!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Tt(f):e.removeAttribute("name")}function vc(e,t,n,a,l,u,o,f){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;n=n!=null?""+Tt(n):"",t=t!=null?""+Tt(t):n,f||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function cr(e,t,n){t==="number"&&wi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ha(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function bc(e,t,n){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Tt(n):""}function Sc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(ne(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Tt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function pa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||zy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ac(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&Tc(e,l,a)}else for(var u in t)t.hasOwnProperty(u)&&Tc(e,u,t[u])}function fr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ny=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ei(e){return Cy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var dr=null;function hr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ya=null,ma=null;function wc(e){var t=oa(e);if(t&&(e=t.stateNode)){var n=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(or(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+At(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[it]||null;if(!l)throw Error(s(90));or(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&gc(a)}break e;case"textarea":bc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ha(e,!!n.multiple,t,!1)}}}var pr=!1;function Ec(e,t,n){if(pr)return e(t,n);pr=!0;try{var a=e(t);return a}finally{if(pr=!1,(ya!==null||ma!==null)&&(ou(),ya&&(t=ya,e=ma,ma=ya=null,wc(t),e)))for(t=0;t<e.length;t++)wc(e[t])}}function ll(e,t){var n=e.stateNode;if(n===null)return null;var a=n[it]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yr=!1;if(Zt)try{var il={};Object.defineProperty(il,"passive",{get:function(){yr=!0}}),window.addEventListener("test",il,il),window.removeEventListener("test",il,il)}catch{yr=!1}var fn=null,mr=null,_i=null;function _c(){if(_i)return _i;var e,t=mr,n=t.length,a,l="value"in fn?fn.value:fn.textContent,u=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===l[u-a];a++);return _i=l.slice(e,1<a?1-a:void 0)}function Oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function Oc(){return!1}function ut(e){function t(n,a,l,u,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=u,this.target=o,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(u):u[f]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ri:Oc,this.isPropagationStopped=Oc,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Di=ut(Qn),ul=S({},Qn,{view:0,detail:0}),xy=ut(ul),gr,vr,rl,Mi=S({},ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rl&&(rl&&e.type==="mousemove"?(gr=e.screenX-rl.screenX,vr=e.screenY-rl.screenY):vr=gr=0,rl=e),gr)},movementY:function(e){return"movementY"in e?e.movementY:vr}}),Rc=ut(Mi),Uy=S({},Mi,{dataTransfer:0}),By=ut(Uy),qy=S({},ul,{relatedTarget:0}),br=ut(qy),jy=S({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Hy=ut(jy),Qy=S({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yy=ut(Qy),ky=S({},Qn,{data:0}),Dc=ut(ky),Ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xy[e])?!!t[e]:!1}function Sr(){return Vy}var Zy=S({},ul,{key:function(e){if(e.key){var t=Ly[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(e){return e.type==="keypress"?Oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ky=ut(Zy),Jy=S({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=ut(Jy),Iy=S({},ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr}),Wy=ut(Iy),Fy=S({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$y=ut(Fy),Py=S({},Mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),em=ut(Py),tm=S({},Qn,{newState:0,oldState:0}),nm=ut(tm),am=[9,13,27,32],Tr=Zt&&"CompositionEvent"in window,sl=null;Zt&&"documentMode"in document&&(sl=document.documentMode);var lm=Zt&&"TextEvent"in window&&!sl,zc=Zt&&(!Tr||sl&&8<sl&&11>=sl),Nc=" ",Cc=!1;function xc(e,t){switch(e){case"keyup":return am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ga=!1;function im(e,t){switch(e){case"compositionend":return Uc(t);case"keypress":return t.which!==32?null:(Cc=!0,Nc);case"textInput":return e=t.data,e===Nc&&Cc?null:e;default:return null}}function um(e,t){if(ga)return e==="compositionend"||!Tr&&xc(e,t)?(e=_c(),_i=mr=fn=null,ga=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zc&&t.locale!=="ko"?null:t.data;default:return null}}var rm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rm[e.type]:t==="textarea"}function qc(e,t,n,a){ya?ma?ma.push(a):ma=[a]:ya=a,t=yu(t,"onChange"),0<t.length&&(n=new Di("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ol=null,cl=null;function sm(e){gh(e,0)}function zi(e){var t=al(e);if(gc(t))return e}function jc(e,t){if(e==="change")return t}var Hc=!1;if(Zt){var Ar;if(Zt){var wr="oninput"in document;if(!wr){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),wr=typeof Qc.oninput=="function"}Ar=wr}else Ar=!1;Hc=Ar&&(!document.documentMode||9<document.documentMode)}function Yc(){ol&&(ol.detachEvent("onpropertychange",kc),cl=ol=null)}function kc(e){if(e.propertyName==="value"&&zi(cl)){var t=[];qc(t,cl,e,hr(e)),Ec(sm,t)}}function om(e,t,n){e==="focusin"?(Yc(),ol=t,cl=n,ol.attachEvent("onpropertychange",kc)):e==="focusout"&&Yc()}function cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zi(cl)}function fm(e,t){if(e==="click")return zi(t)}function dm(e,t){if(e==="input"||e==="change")return zi(t)}function hm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:hm;function fl(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!St.call(t,l)||!ht(e[l],t[l]))return!1}return!0}function Lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gc(e,t){var n=Lc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lc(n)}}function Xc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wi(e.document)}return t}function Er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var pm=Zt&&"documentMode"in document&&11>=document.documentMode,va=null,_r=null,dl=null,Or=!1;function Zc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Or||va==null||va!==wi(a)||(a=va,"selectionStart"in a&&Er(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),dl&&fl(dl,a)||(dl=a,a=yu(_r,"onSelect"),0<a.length&&(t=new Di("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=va)))}function Yn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ba={animationend:Yn("Animation","AnimationEnd"),animationiteration:Yn("Animation","AnimationIteration"),animationstart:Yn("Animation","AnimationStart"),transitionrun:Yn("Transition","TransitionRun"),transitionstart:Yn("Transition","TransitionStart"),transitioncancel:Yn("Transition","TransitionCancel"),transitionend:Yn("Transition","TransitionEnd")},Rr={},Kc={};Zt&&(Kc=document.createElement("div").style,"AnimationEvent"in window||(delete ba.animationend.animation,delete ba.animationiteration.animation,delete ba.animationstart.animation),"TransitionEvent"in window||delete ba.transitionend.transition);function kn(e){if(Rr[e])return Rr[e];if(!ba[e])return e;var t=ba[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kc)return Rr[e]=t[n];return e}var Jc=kn("animationend"),Ic=kn("animationiteration"),Wc=kn("animationstart"),ym=kn("transitionrun"),mm=kn("transitionstart"),gm=kn("transitioncancel"),Fc=kn("transitionend"),$c=new Map,Dr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dr.push("scrollEnd");function Ct(e,t){$c.set(e,t),Hn(t,[e])}var Pc=new WeakMap;function wt(e,t){if(typeof e=="object"&&e!==null){var n=Pc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:yc(t)},Pc.set(e,t),t)}return{value:e,source:t,stack:yc(t)}}var Et=[],Sa=0,Mr=0;function Ni(){for(var e=Sa,t=Mr=Sa=0;t<e;){var n=Et[t];Et[t++]=null;var a=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var u=Et[t];if(Et[t++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}u!==0&&ef(n,l,u)}}function Ci(e,t,n,a){Et[Sa++]=e,Et[Sa++]=t,Et[Sa++]=n,Et[Sa++]=a,Mr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function zr(e,t,n,a){return Ci(e,t,n,a),xi(e)}function Ta(e,t){return Ci(e,null,null,t),xi(e)}function ef(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,u=e.return;u!==null;)u.childLanes|=n,a=u.alternate,a!==null&&(a.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-dt(n),e=u.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),u):null}function xi(e){if(50<jl)throw jl=0,qs=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Aa={};function vm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,a){return new vm(e,t,n,a)}function Nr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function tf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ui(e,t,n,a,l,u){var o=0;if(a=e,typeof e=="function")Nr(e)&&(o=1);else if(typeof e=="string")o=Sg(e,n,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case $:return e=pt(31,n,t,l),e.elementType=$,e.lanes=u,e;case H:return Ln(n.children,l,u,t);case Y:o=8,l|=24;break;case C:return e=pt(12,n,t,l|2),e.elementType=C,e.lanes=u,e;case R:return e=pt(13,n,t,l),e.elementType=R,e.lanes=u,e;case J:return e=pt(19,n,t,l),e.elementType=J,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:case b:o=10;break e;case Q:o=9;break e;case _:o=11;break e;case G:o=14;break e;case W:o=16,a=null;break e}o=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=pt(o,n,t,l),t.elementType=e,t.type=a,t.lanes=u,t}function Ln(e,t,n,a){return e=pt(7,e,a,t),e.lanes=n,e}function Cr(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function xr(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wa=[],Ea=0,Bi=null,qi=0,_t=[],Ot=0,Gn=null,Jt=1,It="";function Xn(e,t){wa[Ea++]=qi,wa[Ea++]=Bi,Bi=e,qi=t}function nf(e,t,n){_t[Ot++]=Jt,_t[Ot++]=It,_t[Ot++]=Gn,Gn=e;var a=Jt;e=It;var l=32-dt(a)-1;a&=~(1<<l),n+=1;var u=32-dt(t)+l;if(30<u){var o=l-l%5;u=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Jt=1<<32-dt(t)+l|n<<l|a,It=u+e}else Jt=1<<u|n<<l|a,It=e}function Ur(e){e.return!==null&&(Xn(e,1),nf(e,1,0))}function Br(e){for(;e===Bi;)Bi=wa[--Ea],wa[Ea]=null,qi=wa[--Ea],wa[Ea]=null;for(;e===Gn;)Gn=_t[--Ot],_t[Ot]=null,It=_t[--Ot],_t[Ot]=null,Jt=_t[--Ot],_t[Ot]=null}var nt=null,Ue=null,we=!1,Vn=null,Qt=!1,qr=Error(s(519));function Zn(e){var t=Error(s(418,""));throw yl(wt(t,e)),qr}function af(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Pe]=e,t[it]=a,n){case"dialog":Se("cancel",t),Se("close",t);break;case"iframe":case"object":case"embed":Se("load",t);break;case"video":case"audio":for(n=0;n<Ql.length;n++)Se(Ql[n],t);break;case"source":Se("error",t);break;case"img":case"image":case"link":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"input":Se("invalid",t),vc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Ai(t);break;case"select":Se("invalid",t);break;case"textarea":Se("invalid",t),Sc(t,a.value,a.defaultValue,a.children),Ai(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Th(t.textContent,n)?(a.popover!=null&&(Se("beforetoggle",t),Se("toggle",t)),a.onScroll!=null&&Se("scroll",t),a.onScrollEnd!=null&&Se("scrollend",t),a.onClick!=null&&(t.onclick=mu),t=!0):t=!1,t||Zn(e)}function lf(e){for(nt=e.return;nt;)switch(nt.tag){case 5:case 13:Qt=!1;return;case 27:case 3:Qt=!0;return;default:nt=nt.return}}function hl(e){if(e!==nt)return!1;if(!we)return lf(e),we=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||$s(e.type,e.memoizedProps)),n=!n),n&&Ue&&Zn(e),lf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ue=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ue=null}}else t===27?(t=Ue,Rn(e.type)?(e=no,no=null,Ue=e):Ue=t):Ue=nt?Ut(e.stateNode.nextSibling):null;return!0}function pl(){Ue=nt=null,we=!1}function uf(){var e=Vn;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),Vn=null),e}function yl(e){Vn===null?Vn=[e]:Vn.push(e)}var jr=L(null),Kn=null,Wt=null;function dn(e,t,n){F(jr,t._currentValue),t._currentValue=n}function Ft(e){e._currentValue=jr.current,te(jr)}function Hr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Qr(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var o=l.child;u=u.firstContext;e:for(;u!==null;){var f=u;u=l;for(var m=0;m<t.length;m++)if(f.context===t[m]){u.lanes|=n,f=u.alternate,f!==null&&(f.lanes|=n),Hr(u.return,n,e),a||(o=null);break e}u=f.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(s(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Hr(o,n,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function ml(e,t,n,a){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var f=l.type;ht(l.pendingProps.value,o.value)||(e!==null?e.push(f):e=[f])}}else if(l===pe.current){if(o=l.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Vl):e=[Vl])}l=l.return}e!==null&&Qr(t,e,n,a),t.flags|=262144}function ji(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Jn(e){Kn=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return rf(Kn,e)}function Hi(e,t){return Kn===null&&Jn(e),rf(e,t)}function rf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Wt===null){if(e===null)throw Error(s(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return n}var bm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Sm=i.unstable_scheduleCallback,Tm=i.unstable_NormalPriority,ke={$$typeof:b,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yr(){return{controller:new bm,data:new Map,refCount:0}}function gl(e){e.refCount--,e.refCount===0&&Sm(Tm,function(){e.controller.abort()})}var vl=null,kr=0,_a=0,Oa=null;function Am(e,t){if(vl===null){var n=vl=[];kr=0,_a=Gs(),Oa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return kr++,t.then(sf,sf),t}function sf(){if(--kr===0&&vl!==null){Oa!==null&&(Oa.status="fulfilled");var e=vl;vl=null,_a=0,Oa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function wm(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var of=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Am(e,t),of!==null&&of(e,t)};var In=L(null);function Lr(){var e=In.current;return e!==null?e:Ne.pooledCache}function Qi(e,t){t===null?F(In,In.current):F(In,t.pool)}function cf(){var e=Lr();return e===null?null:{parent:ke._currentValue,pool:e}}var bl=Error(s(460)),ff=Error(s(474)),Yi=Error(s(542)),Gr={then:function(){}};function df(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ki(){}function hf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ki,ki),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,yf(e),e;default:if(typeof t.status=="string")t.then(ki,ki);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,yf(e),e}throw Sl=t,bl}}var Sl=null;function pf(){if(Sl===null)throw Error(s(459));var e=Sl;return Sl=null,e}function yf(e){if(e===bl||e===Yi)throw Error(s(483))}var hn=!1;function Xr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ee&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=xi(e),ef(e,null,n),t}return Ci(e,a,t,n),xi(e)}function Tl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,rc(e,n)}}function Zr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?l=u=o:u=u.next=o,n=n.next}while(n!==null);u===null?l=u=t:u=u.next=t}else l=u=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Kr=!1;function Al(){if(Kr){var e=Oa;if(e!==null)throw e}}function wl(e,t,n,a){Kr=!1;var l=e.updateQueue;hn=!1;var u=l.firstBaseUpdate,o=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var m=f,x=m.next;m.next=null,o===null?u=x:o.next=x,o=m;var X=e.alternate;X!==null&&(X=X.updateQueue,f=X.lastBaseUpdate,f!==o&&(f===null?X.firstBaseUpdate=x:f.next=x,X.lastBaseUpdate=m))}if(u!==null){var K=l.baseState;o=0,X=x=m=null,f=u;do{var U=f.lane&-536870913,B=U!==f.lane;if(B?(Te&U)===U:(a&U)===U){U!==0&&U===_a&&(Kr=!0),X!==null&&(X=X.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var he=e,fe=f;U=t;var De=n;switch(fe.tag){case 1:if(he=fe.payload,typeof he=="function"){K=he.call(De,K,U);break e}K=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=fe.payload,U=typeof he=="function"?he.call(De,K,U):he,U==null)break e;K=S({},K,U);break e;case 2:hn=!0}}U=f.callback,U!==null&&(e.flags|=64,B&&(e.flags|=8192),B=l.callbacks,B===null?l.callbacks=[U]:B.push(U))}else B={lane:U,tag:f.tag,payload:f.payload,callback:f.callback,next:null},X===null?(x=X=B,m=K):X=X.next=B,o|=U;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;B=f,f=B.next,B.next=null,l.lastBaseUpdate=B,l.shared.pending=null}}while(!0);X===null&&(m=K),l.baseState=m,l.firstBaseUpdate=x,l.lastBaseUpdate=X,u===null&&(l.shared.lanes=0),wn|=o,e.lanes=o,e.memoizedState=K}}function mf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function gf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)mf(n[e],t)}var Ra=L(null),Li=L(0);function vf(e,t){e=ln,F(Li,e),F(Ra,t),ln=e|t.baseLanes}function Jr(){F(Li,ln),F(Ra,Ra.current)}function Ir(){ln=Li.current,te(Ra),te(Li)}var mn=0,ge=null,Oe=null,He=null,Gi=!1,Da=!1,Wn=!1,Xi=0,El=0,Ma=null,Em=0;function qe(){throw Error(s(321))}function Wr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Fr(e,t,n,a,l,u){return mn=u,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?td:nd,Wn=!1,u=n(a,l),Wn=!1,Da&&(u=Sf(t,n,a,l)),bf(e),u}function bf(e){D.H=Wi;var t=Oe!==null&&Oe.next!==null;if(mn=0,He=Oe=ge=null,Gi=!1,El=0,Ma=null,t)throw Error(s(300));e===null||Xe||(e=e.dependencies,e!==null&&ji(e)&&(Xe=!0))}function Sf(e,t,n,a){ge=e;var l=0;do{if(Da&&(Ma=null),El=0,Da=!1,25<=l)throw Error(s(301));if(l+=1,He=Oe=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}D.H=Nm,u=t(n,a)}while(Da);return u}function _m(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?_l(t):t,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(ge.flags|=1024),t}function $r(){var e=Xi!==0;return Xi=0,e}function Pr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function es(e){if(Gi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Gi=!1}mn=0,He=Oe=ge=null,Da=!1,El=Xi=0,Ma=null}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?ge.memoizedState=He=e:He=He.next=e,He}function Qe(){if(Oe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=He===null?ge.memoizedState:He.next;if(t!==null)He=t,Oe=e;else{if(e===null)throw ge.alternate===null?Error(s(467)):Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},He===null?ge.memoizedState=He=e:He=He.next=e}return He}function ts(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _l(e){var t=El;return El+=1,Ma===null&&(Ma=[]),e=hf(Ma,e,t),t=ge,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?td:nd),e}function Vi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _l(e);if(e.$$typeof===b)return et(e)}throw Error(s(438,String(e)))}function ns(e){var t=null,n=ge.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ge.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ts(),ge.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Z;return t.index++,n}function $t(e,t){return typeof t=="function"?t(e):t}function Zi(e){var t=Qe();return as(t,Oe,e)}function as(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=e.baseQueue,u=a.pending;if(u!==null){if(l!==null){var o=l.next;l.next=u.next,u.next=o}t.baseQueue=l=u,a.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var f=o=null,m=null,x=t,X=!1;do{var K=x.lane&-536870913;if(K!==x.lane?(Te&K)===K:(mn&K)===K){var U=x.revertLane;if(U===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),K===_a&&(X=!0);else if((mn&U)===U){x=x.next,U===_a&&(X=!0);continue}else K={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},m===null?(f=m=K,o=u):m=m.next=K,ge.lanes|=U,wn|=U;K=x.action,Wn&&n(u,K),u=x.hasEagerState?x.eagerState:n(u,K)}else U={lane:K,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},m===null?(f=m=U,o=u):m=m.next=U,ge.lanes|=K,wn|=K;x=x.next}while(x!==null&&x!==t);if(m===null?o=u:m.next=f,!ht(u,e.memoizedState)&&(Xe=!0,X&&(n=Oa,n!==null)))throw n;e.memoizedState=u,e.baseState=o,e.baseQueue=m,a.lastRenderedState=u}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ls(e){var t=Qe(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,u=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do u=e(u,o.action),o=o.next;while(o!==l);ht(u,t.memoizedState)||(Xe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,a]}function Tf(e,t,n){var a=ge,l=Qe(),u=we;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!ht((Oe||l).memoizedState,n);o&&(l.memoizedState=n,Xe=!0),l=l.queue;var f=Ef.bind(null,a,l,e);if(Ol(2048,8,f,[e]),l.getSnapshot!==t||o||He!==null&&He.memoizedState.tag&1){if(a.flags|=2048,za(9,Ki(),wf.bind(null,a,l,n,t),null),Ne===null)throw Error(s(349));u||(mn&124)!==0||Af(a,t,n)}return n}function Af(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t=ts(),ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wf(e,t,n,a){t.value=n,t.getSnapshot=a,_f(t)&&Of(e)}function Ef(e,t,n){return n(function(){_f(t)&&Of(e)})}function _f(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function Of(e){var t=Ta(e,2);t!==null&&bt(t,e,2)}function is(e){var t=rt();if(typeof e=="function"){var n=e;if(e=n(),Wn){on(!0);try{n()}finally{on(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:e},t}function Rf(e,t,n,a){return e.baseState=n,as(e,Oe,typeof a=="function"?a:$t)}function Om(e,t,n,a,l){if(Ii(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){u.listeners.push(o)}};D.T!==null?n(!0):u.isTransition=!1,a(u),n=t.pending,n===null?(u.next=t.pending=u,Df(t,u)):(u.next=n.next,t.pending=n.next=u)}}function Df(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var u=D.T,o={};D.T=o;try{var f=n(l,a),m=D.S;m!==null&&m(o,f),Mf(e,t,f)}catch(x){us(e,t,x)}finally{D.T=u}}else try{u=n(l,a),Mf(e,t,u)}catch(x){us(e,t,x)}}function Mf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){zf(e,t,a)},function(a){return us(e,t,a)}):zf(e,t,n)}function zf(e,t,n){t.status="fulfilled",t.value=n,Nf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Df(e,n)))}function us(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Nf(t),t=t.next;while(t!==a)}e.action=null}function Nf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Cf(e,t){return t}function xf(e,t){if(we){var n=Ne.formState;if(n!==null){e:{var a=ge;if(we){if(Ue){t:{for(var l=Ue,u=Qt;l.nodeType!==8;){if(!u){l=null;break t}if(l=Ut(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Ue=Ut(l.nextSibling),a=l.data==="F!";break e}}Zn(a)}a=!1}a&&(t=n[0])}}return n=rt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cf,lastRenderedState:t},n.queue=a,n=$f.bind(null,ge,a),a.dispatch=n,a=is(!1),u=fs.bind(null,ge,!1,a.queue),a=rt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=Om.bind(null,ge,l,u,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Uf(e){var t=Qe();return Bf(t,Oe,e)}function Bf(e,t,n){if(t=as(e,t,Cf)[0],e=Zi($t)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=_l(t)}catch(o){throw o===bl?Yi:o}else a=t;t=Qe();var l=t.queue,u=l.dispatch;return n!==t.memoizedState&&(ge.flags|=2048,za(9,Ki(),Rm.bind(null,l,n),null)),[a,u,e]}function Rm(e,t){e.action=t}function qf(e){var t=Qe(),n=Oe;if(n!==null)return Bf(t,n,e);Qe(),t=t.memoizedState,n=Qe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function za(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ge.updateQueue,t===null&&(t=ts(),ge.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Ki(){return{destroy:void 0,resource:void 0}}function jf(){return Qe().memoizedState}function Ji(e,t,n,a){var l=rt();a=a===void 0?null:a,ge.flags|=e,l.memoizedState=za(1|t,Ki(),n,a)}function Ol(e,t,n,a){var l=Qe();a=a===void 0?null:a;var u=l.memoizedState.inst;Oe!==null&&a!==null&&Wr(a,Oe.memoizedState.deps)?l.memoizedState=za(t,u,n,a):(ge.flags|=e,l.memoizedState=za(1|t,u,n,a))}function Hf(e,t){Ji(8390656,8,e,t)}function Qf(e,t){Ol(2048,8,e,t)}function Yf(e,t){return Ol(4,2,e,t)}function kf(e,t){return Ol(4,4,e,t)}function Lf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gf(e,t,n){n=n!=null?n.concat([e]):null,Ol(4,4,Lf.bind(null,t,e),n)}function rs(){}function Xf(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Wr(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Vf(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Wr(t,a[1]))return a[0];if(a=e(),Wn){on(!0);try{e()}finally{on(!1)}}return n.memoizedState=[a,t],a}function ss(e,t,n){return n===void 0||(mn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Jd(),ge.lanes|=e,wn|=e,n)}function Zf(e,t,n,a){return ht(n,t)?n:Ra.current!==null?(e=ss(e,n,a),ht(e,t)||(Xe=!0),e):(mn&42)===0?(Xe=!0,e.memoizedState=n):(e=Jd(),ge.lanes|=e,wn|=e,t)}function Kf(e,t,n,a,l){var u=I.p;I.p=u!==0&&8>u?u:8;var o=D.T,f={};D.T=f,fs(e,!1,t,n);try{var m=l(),x=D.S;if(x!==null&&x(f,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var X=wm(m,a);Rl(e,t,X,vt(e))}else Rl(e,t,a,vt(e))}catch(K){Rl(e,t,{then:function(){},status:"rejected",reason:K},vt())}finally{I.p=u,D.T=o}}function Dm(){}function os(e,t,n,a){if(e.tag!==5)throw Error(s(476));var l=Jf(e).queue;Kf(e,l,t,P,n===null?Dm:function(){return If(e),n(a)})}function Jf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function If(e){var t=Jf(e).next.queue;Rl(e,t,{},vt())}function cs(){return et(Vl)}function Wf(){return Qe().memoizedState}function Ff(){return Qe().memoizedState}function Mm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=vt();e=pn(n);var a=yn(t,e,n);a!==null&&(bt(a,t,n),Tl(a,t,n)),t={cache:Yr()},e.payload=t;return}t=t.return}}function zm(e,t,n){var a=vt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Ii(e)?Pf(t,n):(n=zr(e,t,n,a),n!==null&&(bt(n,e,a),ed(n,t,a)))}function $f(e,t,n){var a=vt();Rl(e,t,n,a)}function Rl(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ii(e))Pf(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var o=t.lastRenderedState,f=u(o,n);if(l.hasEagerState=!0,l.eagerState=f,ht(f,o))return Ci(e,t,l,0),Ne===null&&Ni(),!1}catch{}finally{}if(n=zr(e,t,l,a),n!==null)return bt(n,e,a),ed(n,t,a),!0}return!1}function fs(e,t,n,a){if(a={lane:2,revertLane:Gs(),action:a,hasEagerState:!1,eagerState:null,next:null},Ii(e)){if(t)throw Error(s(479))}else t=zr(e,n,a,2),t!==null&&bt(t,e,2)}function Ii(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Pf(e,t){Da=Gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ed(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,rc(e,n)}}var Wi={readContext:et,use:Vi,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe},td={readContext:et,use:Vi,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Hf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ji(4194308,4,Lf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ji(4194308,4,e,t)},useInsertionEffect:function(e,t){Ji(4,2,e,t)},useMemo:function(e,t){var n=rt();t=t===void 0?null:t;var a=e();if(Wn){on(!0);try{e()}finally{on(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=rt();if(n!==void 0){var l=n(t);if(Wn){on(!0);try{n(t)}finally{on(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=zm.bind(null,ge,e),[a.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:function(e){e=is(e);var t=e.queue,n=$f.bind(null,ge,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:rs,useDeferredValue:function(e,t){var n=rt();return ss(n,e,t)},useTransition:function(){var e=is(!1);return e=Kf.bind(null,ge,e.queue,!0,!1),rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ge,l=rt();if(we){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ne===null)throw Error(s(349));(Te&124)!==0||Af(a,t,n)}l.memoizedState=n;var u={value:n,getSnapshot:t};return l.queue=u,Hf(Ef.bind(null,a,u,e),[e]),a.flags|=2048,za(9,Ki(),wf.bind(null,a,u,n,t),null),n},useId:function(){var e=rt(),t=Ne.identifierPrefix;if(we){var n=It,a=Jt;n=(a&~(1<<32-dt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=Xi++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Em++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:cs,useFormState:xf,useActionState:xf,useOptimistic:function(e){var t=rt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fs.bind(null,ge,!0,n),n.dispatch=t,[e,t]},useMemoCache:ns,useCacheRefresh:function(){return rt().memoizedState=Mm.bind(null,ge)}},nd={readContext:et,use:Vi,useCallback:Xf,useContext:et,useEffect:Qf,useImperativeHandle:Gf,useInsertionEffect:Yf,useLayoutEffect:kf,useMemo:Vf,useReducer:Zi,useRef:jf,useState:function(){return Zi($t)},useDebugValue:rs,useDeferredValue:function(e,t){var n=Qe();return Zf(n,Oe.memoizedState,e,t)},useTransition:function(){var e=Zi($t)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:_l(e),t]},useSyncExternalStore:Tf,useId:Wf,useHostTransitionStatus:cs,useFormState:Uf,useActionState:Uf,useOptimistic:function(e,t){var n=Qe();return Rf(n,Oe,e,t)},useMemoCache:ns,useCacheRefresh:Ff},Nm={readContext:et,use:Vi,useCallback:Xf,useContext:et,useEffect:Qf,useImperativeHandle:Gf,useInsertionEffect:Yf,useLayoutEffect:kf,useMemo:Vf,useReducer:ls,useRef:jf,useState:function(){return ls($t)},useDebugValue:rs,useDeferredValue:function(e,t){var n=Qe();return Oe===null?ss(n,e,t):Zf(n,Oe.memoizedState,e,t)},useTransition:function(){var e=ls($t)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:_l(e),t]},useSyncExternalStore:Tf,useId:Wf,useHostTransitionStatus:cs,useFormState:qf,useActionState:qf,useOptimistic:function(e,t){var n=Qe();return Oe!==null?Rf(n,Oe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ns,useCacheRefresh:Ff},Na=null,Dl=0;function Fi(e){var t=Dl;return Dl+=1,Na===null&&(Na=[]),hf(Na,e,t)}function Ml(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $i(e,t){throw t.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ad(e){var t=e._init;return t(e._payload)}function ld(e){function t(O,A){if(e){var M=O.deletions;M===null?(O.deletions=[A],O.flags|=16):M.push(A)}}function n(O,A){if(!e)return null;for(;A!==null;)t(O,A),A=A.sibling;return null}function a(O){for(var A=new Map;O!==null;)O.key!==null?A.set(O.key,O):A.set(O.index,O),O=O.sibling;return A}function l(O,A){return O=Kt(O,A),O.index=0,O.sibling=null,O}function u(O,A,M){return O.index=M,e?(M=O.alternate,M!==null?(M=M.index,M<A?(O.flags|=67108866,A):M):(O.flags|=67108866,A)):(O.flags|=1048576,A)}function o(O){return e&&O.alternate===null&&(O.flags|=67108866),O}function f(O,A,M,V){return A===null||A.tag!==6?(A=Cr(M,O.mode,V),A.return=O,A):(A=l(A,M),A.return=O,A)}function m(O,A,M,V){var ue=M.type;return ue===H?X(O,A,M.props.children,V,M.key):A!==null&&(A.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===W&&ad(ue)===A.type)?(A=l(A,M.props),Ml(A,M),A.return=O,A):(A=Ui(M.type,M.key,M.props,null,O.mode,V),Ml(A,M),A.return=O,A)}function x(O,A,M,V){return A===null||A.tag!==4||A.stateNode.containerInfo!==M.containerInfo||A.stateNode.implementation!==M.implementation?(A=xr(M,O.mode,V),A.return=O,A):(A=l(A,M.children||[]),A.return=O,A)}function X(O,A,M,V,ue){return A===null||A.tag!==7?(A=Ln(M,O.mode,V,ue),A.return=O,A):(A=l(A,M),A.return=O,A)}function K(O,A,M){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Cr(""+A,O.mode,M),A.return=O,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case E:return M=Ui(A.type,A.key,A.props,null,O.mode,M),Ml(M,A),M.return=O,M;case j:return A=xr(A,O.mode,M),A.return=O,A;case W:var V=A._init;return A=V(A._payload),K(O,A,M)}if(ne(A)||q(A))return A=Ln(A,O.mode,M,null),A.return=O,A;if(typeof A.then=="function")return K(O,Fi(A),M);if(A.$$typeof===b)return K(O,Hi(O,A),M);$i(O,A)}return null}function U(O,A,M,V){var ue=A!==null?A.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return ue!==null?null:f(O,A,""+M,V);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case E:return M.key===ue?m(O,A,M,V):null;case j:return M.key===ue?x(O,A,M,V):null;case W:return ue=M._init,M=ue(M._payload),U(O,A,M,V)}if(ne(M)||q(M))return ue!==null?null:X(O,A,M,V,null);if(typeof M.then=="function")return U(O,A,Fi(M),V);if(M.$$typeof===b)return U(O,A,Hi(O,M),V);$i(O,M)}return null}function B(O,A,M,V,ue){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return O=O.get(M)||null,f(A,O,""+V,ue);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return O=O.get(V.key===null?M:V.key)||null,m(A,O,V,ue);case j:return O=O.get(V.key===null?M:V.key)||null,x(A,O,V,ue);case W:var ve=V._init;return V=ve(V._payload),B(O,A,M,V,ue)}if(ne(V)||q(V))return O=O.get(M)||null,X(A,O,V,ue,null);if(typeof V.then=="function")return B(O,A,M,Fi(V),ue);if(V.$$typeof===b)return B(O,A,M,Hi(A,V),ue);$i(A,V)}return null}function he(O,A,M,V){for(var ue=null,ve=null,re=A,de=A=0,Ze=null;re!==null&&de<M.length;de++){re.index>de?(Ze=re,re=null):Ze=re.sibling;var Ae=U(O,re,M[de],V);if(Ae===null){re===null&&(re=Ze);break}e&&re&&Ae.alternate===null&&t(O,re),A=u(Ae,A,de),ve===null?ue=Ae:ve.sibling=Ae,ve=Ae,re=Ze}if(de===M.length)return n(O,re),we&&Xn(O,de),ue;if(re===null){for(;de<M.length;de++)re=K(O,M[de],V),re!==null&&(A=u(re,A,de),ve===null?ue=re:ve.sibling=re,ve=re);return we&&Xn(O,de),ue}for(re=a(re);de<M.length;de++)Ze=B(re,O,de,M[de],V),Ze!==null&&(e&&Ze.alternate!==null&&re.delete(Ze.key===null?de:Ze.key),A=u(Ze,A,de),ve===null?ue=Ze:ve.sibling=Ze,ve=Ze);return e&&re.forEach(function(Cn){return t(O,Cn)}),we&&Xn(O,de),ue}function fe(O,A,M,V){if(M==null)throw Error(s(151));for(var ue=null,ve=null,re=A,de=A=0,Ze=null,Ae=M.next();re!==null&&!Ae.done;de++,Ae=M.next()){re.index>de?(Ze=re,re=null):Ze=re.sibling;var Cn=U(O,re,Ae.value,V);if(Cn===null){re===null&&(re=Ze);break}e&&re&&Cn.alternate===null&&t(O,re),A=u(Cn,A,de),ve===null?ue=Cn:ve.sibling=Cn,ve=Cn,re=Ze}if(Ae.done)return n(O,re),we&&Xn(O,de),ue;if(re===null){for(;!Ae.done;de++,Ae=M.next())Ae=K(O,Ae.value,V),Ae!==null&&(A=u(Ae,A,de),ve===null?ue=Ae:ve.sibling=Ae,ve=Ae);return we&&Xn(O,de),ue}for(re=a(re);!Ae.done;de++,Ae=M.next())Ae=B(re,O,de,Ae.value,V),Ae!==null&&(e&&Ae.alternate!==null&&re.delete(Ae.key===null?de:Ae.key),A=u(Ae,A,de),ve===null?ue=Ae:ve.sibling=Ae,ve=Ae);return e&&re.forEach(function(Cg){return t(O,Cg)}),we&&Xn(O,de),ue}function De(O,A,M,V){if(typeof M=="object"&&M!==null&&M.type===H&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case E:e:{for(var ue=M.key;A!==null;){if(A.key===ue){if(ue=M.type,ue===H){if(A.tag===7){n(O,A.sibling),V=l(A,M.props.children),V.return=O,O=V;break e}}else if(A.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===W&&ad(ue)===A.type){n(O,A.sibling),V=l(A,M.props),Ml(V,M),V.return=O,O=V;break e}n(O,A);break}else t(O,A);A=A.sibling}M.type===H?(V=Ln(M.props.children,O.mode,V,M.key),V.return=O,O=V):(V=Ui(M.type,M.key,M.props,null,O.mode,V),Ml(V,M),V.return=O,O=V)}return o(O);case j:e:{for(ue=M.key;A!==null;){if(A.key===ue)if(A.tag===4&&A.stateNode.containerInfo===M.containerInfo&&A.stateNode.implementation===M.implementation){n(O,A.sibling),V=l(A,M.children||[]),V.return=O,O=V;break e}else{n(O,A);break}else t(O,A);A=A.sibling}V=xr(M,O.mode,V),V.return=O,O=V}return o(O);case W:return ue=M._init,M=ue(M._payload),De(O,A,M,V)}if(ne(M))return he(O,A,M,V);if(q(M)){if(ue=q(M),typeof ue!="function")throw Error(s(150));return M=ue.call(M),fe(O,A,M,V)}if(typeof M.then=="function")return De(O,A,Fi(M),V);if(M.$$typeof===b)return De(O,A,Hi(O,M),V);$i(O,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,A!==null&&A.tag===6?(n(O,A.sibling),V=l(A,M),V.return=O,O=V):(n(O,A),V=Cr(M,O.mode,V),V.return=O,O=V),o(O)):n(O,A)}return function(O,A,M,V){try{Dl=0;var ue=De(O,A,M,V);return Na=null,ue}catch(re){if(re===bl||re===Yi)throw re;var ve=pt(29,re,null,O.mode);return ve.lanes=V,ve.return=O,ve}finally{}}}var Ca=ld(!0),id=ld(!1),Rt=L(null),Yt=null;function gn(e){var t=e.alternate;F(Le,Le.current&1),F(Rt,e),Yt===null&&(t===null||Ra.current!==null||t.memoizedState!==null)&&(Yt=e)}function ud(e){if(e.tag===22){if(F(Le,Le.current),F(Rt,e),Yt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Yt=e)}}else vn()}function vn(){F(Le,Le.current),F(Rt,Rt.current)}function Pt(e){te(Rt),Yt===e&&(Yt=null),te(Le)}var Le=L(0);function Pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||to(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ds(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=vt(),l=pn(a);l.payload=t,n!=null&&(l.callback=n),t=yn(e,l,a),t!==null&&(bt(t,e,a),Tl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=vt(),l=pn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=yn(e,l,a),t!==null&&(bt(t,e,a),Tl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vt(),a=pn(n);a.tag=2,t!=null&&(a.callback=t),t=yn(e,a,n),t!==null&&(bt(t,e,n),Tl(t,e,n))}};function rd(e,t,n,a,l,u,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,o):t.prototype&&t.prototype.isPureReactComponent?!fl(n,a)||!fl(l,u):!0}function sd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function Fn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var eu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function od(e){eu(e)}function cd(e){console.error(e)}function fd(e){eu(e)}function tu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function dd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ps(e,t,n){return n=pn(n),n.tag=3,n.payload={element:null},n.callback=function(){tu(e,t)},n}function hd(e){return e=pn(e),e.tag=3,e}function pd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var u=a.value;e.payload=function(){return l(u)},e.callback=function(){dd(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){dd(t,n,a),typeof l!="function"&&(En===null?En=new Set([this]):En.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function Cm(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ml(t,n,l,!0),n=Rt.current,n!==null){switch(n.tag){case 13:return Yt===null?Hs():n.alternate===null&&Be===0&&(Be=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Gr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Ys(e,a,l)),!1;case 22:return n.flags|=65536,a===Gr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Ys(e,a,l)),!1}throw Error(s(435,n.tag))}return Ys(e,a,l),Hs(),!1}if(we)return t=Rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==qr&&(e=Error(s(422),{cause:a}),yl(wt(e,n)))):(a!==qr&&(t=Error(s(423),{cause:a}),yl(wt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=wt(a,n),l=ps(e.stateNode,a,l),Zr(e,l),Be!==4&&(Be=2)),!1;var u=Error(s(520),{cause:a});if(u=wt(u,n),ql===null?ql=[u]:ql.push(u),Be!==4&&(Be=2),t===null)return!0;a=wt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=ps(n.stateNode,a,e),Zr(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(En===null||!En.has(u))))return n.flags|=65536,l&=-l,n.lanes|=l,l=hd(l),pd(l,e,n,a),Zr(n,l),!1}n=n.return}while(n!==null);return!1}var yd=Error(s(461)),Xe=!1;function Ke(e,t,n,a){t.child=e===null?id(t,null,n,a):Ca(t,e.child,n,a)}function md(e,t,n,a,l){n=n.render;var u=t.ref;if("ref"in a){var o={};for(var f in a)f!=="ref"&&(o[f]=a[f])}else o=a;return Jn(t),a=Fr(e,t,n,o,u,l),f=$r(),e!==null&&!Xe?(Pr(e,t,l),en(e,t,l)):(we&&f&&Ur(t),t.flags|=1,Ke(e,t,a,l),t.child)}function gd(e,t,n,a,l){if(e===null){var u=n.type;return typeof u=="function"&&!Nr(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,vd(e,t,u,a,l)):(e=Ui(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!As(e,l)){var o=u.memoizedProps;if(n=n.compare,n=n!==null?n:fl,n(o,a)&&e.ref===t.ref)return en(e,t,l)}return t.flags|=1,e=Kt(u,a),e.ref=t.ref,e.return=t,t.child=e}function vd(e,t,n,a,l){if(e!==null){var u=e.memoizedProps;if(fl(u,a)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=a=u,As(e,l))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,en(e,t,l)}return ys(e,t,n,a,l)}function bd(e,t,n){var a=t.pendingProps,l=a.children,u=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=u!==null?u.baseLanes|n:n,e!==null){for(l=t.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;t.childLanes=u&~a}else t.childLanes=0,t.child=null;return Sd(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qi(t,u!==null?u.cachePool:null),u!==null?vf(t,u):Jr(),ud(t);else return t.lanes=t.childLanes=536870912,Sd(e,t,u!==null?u.baseLanes|n:n,n)}else u!==null?(Qi(t,u.cachePool),vf(t,u),vn(),t.memoizedState=null):(e!==null&&Qi(t,null),Jr(),vn());return Ke(e,t,l,n),t.child}function Sd(e,t,n,a){var l=Lr();return l=l===null?null:{parent:ke._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Qi(t,null),Jr(),ud(t),e!==null&&ml(e,t,a,!0),null}function nu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ys(e,t,n,a,l){return Jn(t),n=Fr(e,t,n,a,void 0,l),a=$r(),e!==null&&!Xe?(Pr(e,t,l),en(e,t,l)):(we&&a&&Ur(t),t.flags|=1,Ke(e,t,n,l),t.child)}function Td(e,t,n,a,l,u){return Jn(t),t.updateQueue=null,n=Sf(t,a,n,l),bf(e),a=$r(),e!==null&&!Xe?(Pr(e,t,u),en(e,t,u)):(we&&a&&Ur(t),t.flags|=1,Ke(e,t,n,u),t.child)}function Ad(e,t,n,a,l){if(Jn(t),t.stateNode===null){var u=Aa,o=n.contextType;typeof o=="object"&&o!==null&&(u=et(o)),u=new n(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=hs,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},Xr(t),o=n.contextType,u.context=typeof o=="object"&&o!==null?et(o):Aa,u.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ds(t,n,o,a),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(o=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),o!==u.state&&hs.enqueueReplaceState(u,u.state,null),wl(t,a,u,l),Al(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var f=t.memoizedProps,m=Fn(n,f);u.props=m;var x=u.context,X=n.contextType;o=Aa,typeof X=="object"&&X!==null&&(o=et(X));var K=n.getDerivedStateFromProps;X=typeof K=="function"||typeof u.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,X||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f||x!==o)&&sd(t,u,a,o),hn=!1;var U=t.memoizedState;u.state=U,wl(t,a,u,l),Al(),x=t.memoizedState,f||U!==x||hn?(typeof K=="function"&&(ds(t,n,K,a),x=t.memoizedState),(m=hn||rd(t,n,m,a,U,x,o))?(X||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=x),u.props=a,u.state=x,u.context=o,a=m):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,Vr(e,t),o=t.memoizedProps,X=Fn(n,o),u.props=X,K=t.pendingProps,U=u.context,x=n.contextType,m=Aa,typeof x=="object"&&x!==null&&(m=et(x)),f=n.getDerivedStateFromProps,(x=typeof f=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o!==K||U!==m)&&sd(t,u,a,m),hn=!1,U=t.memoizedState,u.state=U,wl(t,a,u,l),Al();var B=t.memoizedState;o!==K||U!==B||hn||e!==null&&e.dependencies!==null&&ji(e.dependencies)?(typeof f=="function"&&(ds(t,n,f,a),B=t.memoizedState),(X=hn||rd(t,n,X,a,U,B,m)||e!==null&&e.dependencies!==null&&ji(e.dependencies))?(x||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,B,m),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,B,m)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||o===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=B),u.props=a,u.state=B,u.context=m,a=X):(typeof u.componentDidUpdate!="function"||o===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,nu(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=Ca(t,e.child,null,l),t.child=Ca(t,null,n,l)):Ke(e,t,n,l),t.memoizedState=u.state,e=t.child):e=en(e,t,l),e}function wd(e,t,n,a){return pl(),t.flags|=256,Ke(e,t,n,a),t.child}var ms={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gs(e){return{baseLanes:e,cachePool:cf()}}function vs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Dt),e}function Ed(e,t,n){var a=t.pendingProps,l=!1,u=(t.flags&128)!==0,o;if((o=u)||(o=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(we){if(l?gn(t):vn(),we){var f=Ue,m;if(m=f){e:{for(m=f,f=Qt;m.nodeType!==8;){if(!f){f=null;break e}if(m=Ut(m.nextSibling),m===null){f=null;break e}}f=m}f!==null?(t.memoizedState={dehydrated:f,treeContext:Gn!==null?{id:Jt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},m=pt(18,null,null,0),m.stateNode=f,m.return=t,t.child=m,nt=t,Ue=null,m=!0):m=!1}m||Zn(t)}if(f=t.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return to(f)?t.lanes=32:t.lanes=536870912,null;Pt(t)}return f=a.children,a=a.fallback,l?(vn(),l=t.mode,f=au({mode:"hidden",children:f},l),a=Ln(a,l,n,null),f.return=t,a.return=t,f.sibling=a,t.child=f,l=t.child,l.memoizedState=gs(n),l.childLanes=vs(e,o,n),t.memoizedState=ms,a):(gn(t),bs(t,f))}if(m=e.memoizedState,m!==null&&(f=m.dehydrated,f!==null)){if(u)t.flags&256?(gn(t),t.flags&=-257,t=Ss(e,t,n)):t.memoizedState!==null?(vn(),t.child=e.child,t.flags|=128,t=null):(vn(),l=a.fallback,f=t.mode,a=au({mode:"visible",children:a.children},f),l=Ln(l,f,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,Ca(t,e.child,null,n),a=t.child,a.memoizedState=gs(n),a.childLanes=vs(e,o,n),t.memoizedState=ms,t=l);else if(gn(t),to(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var x=o.dgst;o=x,a=Error(s(419)),a.stack="",a.digest=o,yl({value:a,source:null,stack:null}),t=Ss(e,t,n)}else if(Xe||ml(e,t,n,!1),o=(n&e.childLanes)!==0,Xe||o){if(o=Ne,o!==null&&(a=n&-n,a=(a&42)!==0?1:nr(a),a=(a&(o.suspendedLanes|n))!==0?0:a,a!==0&&a!==m.retryLane))throw m.retryLane=a,Ta(e,a),bt(o,e,a),yd;f.data==="$?"||Hs(),t=Ss(e,t,n)}else f.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,Ue=Ut(f.nextSibling),nt=t,we=!0,Vn=null,Qt=!1,e!==null&&(_t[Ot++]=Jt,_t[Ot++]=It,_t[Ot++]=Gn,Jt=e.id,It=e.overflow,Gn=t),t=bs(t,a.children),t.flags|=4096);return t}return l?(vn(),l=a.fallback,f=t.mode,m=e.child,x=m.sibling,a=Kt(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,x!==null?l=Kt(x,l):(l=Ln(l,f,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,f=e.child.memoizedState,f===null?f=gs(n):(m=f.cachePool,m!==null?(x=ke._currentValue,m=m.parent!==x?{parent:x,pool:x}:m):m=cf(),f={baseLanes:f.baseLanes|n,cachePool:m}),l.memoizedState=f,l.childLanes=vs(e,o,n),t.memoizedState=ms,a):(gn(t),n=e.child,e=n.sibling,n=Kt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function bs(e,t){return t=au({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function au(e,t){return e=pt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ss(e,t,n){return Ca(t,e.child,null,n),e=bs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _d(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Hr(e.return,t,n)}function Ts(e,t,n,a,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=n,u.tailMode=l)}function Od(e,t,n){var a=t.pendingProps,l=a.revealOrder,u=a.tail;if(Ke(e,t,a.children,n),a=Le.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_d(e,n,t);else if(e.tag===19)_d(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(F(Le,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Pi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ts(t,!1,l,n,u);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Pi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ts(t,!0,n,null,u);break;case"together":Ts(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ml(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function As(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ji(e)))}function xm(e,t,n){switch(t.tag){case 3:ce(t,t.stateNode.containerInfo),dn(t,ke,e.memoizedState.cache),pl();break;case 27:case 5:Ye(t);break;case 4:ce(t,t.stateNode.containerInfo);break;case 10:dn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ed(e,t,n):(gn(t),e=en(e,t,n),e!==null?e.sibling:null);gn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(ml(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Od(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(Le,Le.current),a)break;return null;case 22:case 23:return t.lanes=0,bd(e,t,n);case 24:dn(t,ke,e.memoizedState.cache)}return en(e,t,n)}function Rd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!As(e,n)&&(t.flags&128)===0)return Xe=!1,xm(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,we&&(t.flags&1048576)!==0&&nf(t,qi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")Nr(a)?(e=Fn(a,e),t.tag=1,t=Ad(null,t,a,e,n)):(t.tag=0,t=ys(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===_){t.tag=11,t=md(null,t,a,e,n);break e}else if(l===G){t.tag=14,t=gd(null,t,a,e,n);break e}}throw t=ee(a)||a,Error(s(306,t,""))}}return t;case 0:return ys(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Fn(a,t.pendingProps),Ad(e,t,a,l,n);case 3:e:{if(ce(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var u=t.memoizedState;l=u.element,Vr(e,t),wl(t,a,null,n);var o=t.memoizedState;if(a=o.cache,dn(t,ke,a),a!==u.cache&&Qr(t,[ke],n,!0),Al(),a=o.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=wd(e,t,a,n);break e}else if(a!==l){l=wt(Error(s(424)),t),yl(l),t=wd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Ut(e.firstChild),nt=t,we=!0,Vn=null,Qt=!0,n=id(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(pl(),a===l){t=en(e,t,n);break e}Ke(e,t,a,n)}t=t.child}return t;case 26:return nu(e,t),e===null?(n=Nh(t.type,null,t.pendingProps,null))?t.memoizedState=n:we||(n=t.type,e=t.pendingProps,a=gu(le.current).createElement(n),a[Pe]=t,a[it]=e,Ie(a,n,e),Ge(a),t.stateNode=a):t.memoizedState=Nh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ye(t),e===null&&we&&(a=t.stateNode=Dh(t.type,t.pendingProps,le.current),nt=t,Qt=!0,l=Ue,Rn(t.type)?(no=l,Ue=Ut(a.firstChild)):Ue=l),Ke(e,t,t.pendingProps.children,n),nu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&we&&((l=a=Ue)&&(a=rg(a,t.type,t.pendingProps,Qt),a!==null?(t.stateNode=a,nt=t,Ue=Ut(a.firstChild),Qt=!1,l=!0):l=!1),l||Zn(t)),Ye(t),l=t.type,u=t.pendingProps,o=e!==null?e.memoizedProps:null,a=u.children,$s(l,u)?a=null:o!==null&&$s(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=Fr(e,t,_m,null,null,n),Vl._currentValue=l),nu(e,t),Ke(e,t,a,n),t.child;case 6:return e===null&&we&&((e=n=Ue)&&(n=sg(n,t.pendingProps,Qt),n!==null?(t.stateNode=n,nt=t,Ue=null,e=!0):e=!1),e||Zn(t)),null;case 13:return Ed(e,t,n);case 4:return ce(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ca(t,null,a,n):Ke(e,t,a,n),t.child;case 11:return md(e,t,t.type,t.pendingProps,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,dn(t,t.type,a.value),Ke(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Jn(t),l=et(l),a=a(l),t.flags|=1,Ke(e,t,a,n),t.child;case 14:return gd(e,t,t.type,t.pendingProps,n);case 15:return vd(e,t,t.type,t.pendingProps,n);case 19:return Od(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=au(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Kt(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return bd(e,t,n);case 24:return Jn(t),a=et(ke),e===null?(l=Lr(),l===null&&(l=Ne,u=Yr(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=n),l=u),t.memoizedState={parent:a,cache:l},Xr(t),dn(t,ke,l)):((e.lanes&n)!==0&&(Vr(e,t),wl(t,null,null,n),Al()),l=e.memoizedState,u=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),dn(t,ke,a)):(a=u.cache,dn(t,ke,a),a!==l.cache&&Qr(t,[ke],n,!0))),Ke(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function tn(e){e.flags|=4}function Dd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qh(t)){if(t=Rt.current,t!==null&&((Te&4194048)===Te?Yt!==null:(Te&62914560)!==Te&&(Te&536870912)===0||t!==Yt))throw Sl=Gr,ff;e.flags|=8192}}function lu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ic():536870912,e.lanes|=t,qa|=t)}function zl(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Um(e,t,n){var a=t.pendingProps;switch(Br(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return xe(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(ke),me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(hl(t)?tn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,uf())),xe(t),null;case 26:return n=t.memoizedState,e===null?(tn(t),n!==null?(xe(t),Dd(t,n)):(xe(t),t.flags&=-16777217)):n?n!==e.memoizedState?(tn(t),xe(t),Dd(t,n)):(xe(t),t.flags&=-16777217):(e.memoizedProps!==a&&tn(t),xe(t),t.flags&=-16777217),null;case 27:Nt(t),n=le.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&tn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return xe(t),null}e=ie.current,hl(t)?af(t):(e=Dh(l,a,n),t.stateNode=e,tn(t))}return xe(t),null;case 5:if(Nt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&tn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return xe(t),null}if(e=ie.current,hl(t))af(t);else{switch(l=gu(le.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[Pe]=t,e[it]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Ie(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&tn(t)}}return xe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&tn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=le.current,hl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=nt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Th(e.nodeValue,n)),e||Zn(t)}else e=gu(e).createTextNode(a),e[Pe]=t,t.stateNode=e}return xe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=hl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Pe]=t}else pl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),l=!1}else l=uf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Pt(t),t):(Pt(t),null)}if(Pt(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var u=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),lu(t,t.updateQueue),xe(t),null;case 4:return me(),e===null&&Ks(t.stateNode.containerInfo),xe(t),null;case 10:return Ft(t.type),xe(t),null;case 19:if(te(Le),l=t.memoizedState,l===null)return xe(t),null;if(a=(t.flags&128)!==0,u=l.rendering,u===null)if(a)zl(l,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Pi(e),u!==null){for(t.flags|=128,zl(l,!1),e=u.updateQueue,t.updateQueue=e,lu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)tf(n,e),n=n.sibling;return F(Le,Le.current&1|2),t.child}e=e.sibling}l.tail!==null&&lt()>ru&&(t.flags|=128,a=!0,zl(l,!1),t.lanes=4194304)}else{if(!a)if(e=Pi(u),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,lu(t,e),zl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!we)return xe(t),null}else 2*lt()-l.renderingStartTime>ru&&n!==536870912&&(t.flags|=128,a=!0,zl(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(e=l.last,e!==null?e.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=lt(),t.sibling=null,e=Le.current,F(Le,a?e&1|2:e&1),t):(xe(t),null);case 22:case 23:return Pt(t),Ir(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),n=t.updateQueue,n!==null&&lu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&te(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ft(ke),xe(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Bm(e,t){switch(Br(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(ke),me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Nt(t),null;case 13:if(Pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));pl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(Le),null;case 4:return me(),null;case 10:return Ft(t.type),null;case 22:case 23:return Pt(t),Ir(),e!==null&&te(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(ke),null;case 25:return null;default:return null}}function Md(e,t){switch(Br(t),t.tag){case 3:Ft(ke),me();break;case 26:case 27:case 5:Nt(t);break;case 4:me();break;case 13:Pt(t);break;case 19:te(Le);break;case 10:Ft(t.type);break;case 22:case 23:Pt(t),Ir(),e!==null&&te(In);break;case 24:Ft(ke)}}function Nl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var u=n.create,o=n.inst;a=u(),o.destroy=a}n=n.next}while(n!==l)}}catch(f){ze(t,t.return,f)}}function bn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&e)===e){var o=a.inst,f=o.destroy;if(f!==void 0){o.destroy=void 0,l=t;var m=n,x=f;try{x()}catch(X){ze(l,m,X)}}}a=a.next}while(a!==u)}}catch(X){ze(t,t.return,X)}}function zd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{gf(t,n)}catch(a){ze(e,e.return,a)}}}function Nd(e,t,n){n.props=Fn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ze(e,t,a)}}function Cl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){ze(e,t,l)}}function kt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){ze(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){ze(e,t,l)}else n.current=null}function Cd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){ze(e,e.return,l)}}function ws(e,t,n){try{var a=e.stateNode;ng(a,e.type,n,t),a[it]=t}catch(l){ze(e,e.return,l)}}function xd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Rn(e.type)||e.tag===4}function Es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Rn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _s(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mu));else if(a!==4&&(a===27&&Rn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(_s(e,t,n),e=e.sibling;e!==null;)_s(e,t,n),e=e.sibling}function iu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Rn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}function Ud(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ie(t,a,n),t[Pe]=e,t[it]=n}catch(u){ze(e,e.return,u)}}var nn=!1,je=!1,Os=!1,Bd=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function qm(e,t){if(e=e.containerInfo,Ws=wu,e=Vc(e),Er(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var o=0,f=-1,m=-1,x=0,X=0,K=e,U=null;t:for(;;){for(var B;K!==n||l!==0&&K.nodeType!==3||(f=o+l),K!==u||a!==0&&K.nodeType!==3||(m=o+a),K.nodeType===3&&(o+=K.nodeValue.length),(B=K.firstChild)!==null;)U=K,K=B;for(;;){if(K===e)break t;if(U===n&&++x===l&&(f=o),U===u&&++X===a&&(m=o),(B=K.nextSibling)!==null)break;K=U,U=K.parentNode}K=B}n=f===-1||m===-1?null:{start:f,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fs={focusedElem:e,selectionRange:n},wu=!1,Ve=t;Ve!==null;)if(t=Ve,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ve=e;else for(;Ve!==null;){switch(t=Ve,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,l=u.memoizedProps,u=u.memoizedState,a=n.stateNode;try{var he=Fn(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(he,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(fe){ze(n,n.return,fe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)eo(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":eo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ve=e;break}Ve=t.return}}function qd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Sn(e,n),a&4&&Nl(5,n);break;case 1:if(Sn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){ze(n,n.return,o)}else{var l=Fn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ze(n,n.return,o)}}a&64&&zd(n),a&512&&Cl(n,n.return);break;case 3:if(Sn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{gf(e,t)}catch(o){ze(n,n.return,o)}}break;case 27:t===null&&a&4&&Ud(n);case 26:case 5:Sn(e,n),t===null&&a&4&&Cd(n),a&512&&Cl(n,n.return);break;case 12:Sn(e,n);break;case 13:Sn(e,n),a&4&&Qd(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Vm.bind(null,n),og(e,n))));break;case 22:if(a=n.memoizedState!==null||nn,!a){t=t!==null&&t.memoizedState!==null||je,l=nn;var u=je;nn=a,(je=t)&&!u?Tn(e,n,(n.subtreeFlags&8772)!==0):Sn(e,n),nn=l,je=u}break;case 30:break;default:Sn(e,n)}}function jd(e){var t=e.alternate;t!==null&&(e.alternate=null,jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ir(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,st=!1;function an(e,t,n){for(n=n.child;n!==null;)Hd(e,t,n),n=n.sibling}function Hd(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Pa,n)}catch{}switch(n.tag){case 26:je||kt(n,t),an(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:je||kt(n,t);var a=Ce,l=st;Rn(n.type)&&(Ce=n.stateNode,st=!1),an(e,t,n),kl(n.stateNode),Ce=a,st=l;break;case 5:je||kt(n,t);case 6:if(a=Ce,l=st,Ce=null,an(e,t,n),Ce=a,st=l,Ce!==null)if(st)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode)}catch(u){ze(n,t,u)}else try{Ce.removeChild(n.stateNode)}catch(u){ze(n,t,u)}break;case 18:Ce!==null&&(st?(e=Ce,Oh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Il(e)):Oh(Ce,n.stateNode));break;case 4:a=Ce,l=st,Ce=n.stateNode.containerInfo,st=!0,an(e,t,n),Ce=a,st=l;break;case 0:case 11:case 14:case 15:je||bn(2,n,t),je||bn(4,n,t),an(e,t,n);break;case 1:je||(kt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Nd(n,t,a)),an(e,t,n);break;case 21:an(e,t,n);break;case 22:je=(a=je)||n.memoizedState!==null,an(e,t,n),je=a;break;default:an(e,t,n)}}function Qd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Il(e)}catch(n){ze(t,t.return,n)}}function jm(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bd),t;default:throw Error(s(435,e.tag))}}function Rs(e,t){var n=jm(e);t.forEach(function(a){var l=Zm.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function yt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],u=e,o=t,f=o;e:for(;f!==null;){switch(f.tag){case 27:if(Rn(f.type)){Ce=f.stateNode,st=!1;break e}break;case 5:Ce=f.stateNode,st=!1;break e;case 3:case 4:Ce=f.stateNode.containerInfo,st=!0;break e}f=f.return}if(Ce===null)throw Error(s(160));Hd(u,o,l),Ce=null,st=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Yd(t,e),t=t.sibling}var xt=null;function Yd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yt(t,e),mt(e),a&4&&(bn(3,e,e.return),Nl(3,e),bn(5,e,e.return));break;case 1:yt(t,e),mt(e),a&512&&(je||n===null||kt(n,n.return)),a&64&&nn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=xt;if(yt(t,e),mt(e),a&512&&(je||n===null||kt(n,n.return)),a&4){var u=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":u=l.getElementsByTagName("title")[0],(!u||u[nl]||u[Pe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(a),l.head.insertBefore(u,l.querySelector("head > title"))),Ie(u,a,n),u[Pe]=e,Ge(u),a=u;break e;case"link":var o=Uh("link","href",l).get(a+(n.href||""));if(o){for(var f=0;f<o.length;f++)if(u=o[f],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(f,1);break t}}u=l.createElement(a),Ie(u,a,n),l.head.appendChild(u);break;case"meta":if(o=Uh("meta","content",l).get(a+(n.content||""))){for(f=0;f<o.length;f++)if(u=o[f],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(f,1);break t}}u=l.createElement(a),Ie(u,a,n),l.head.appendChild(u);break;default:throw Error(s(468,a))}u[Pe]=e,Ge(u),a=u}e.stateNode=a}else Bh(l,e.type,e.stateNode);else e.stateNode=xh(l,a,e.memoizedProps);else u!==a?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,a===null?Bh(l,e.type,e.stateNode):xh(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ws(e,e.memoizedProps,n.memoizedProps)}break;case 27:yt(t,e),mt(e),a&512&&(je||n===null||kt(n,n.return)),n!==null&&a&4&&ws(e,e.memoizedProps,n.memoizedProps);break;case 5:if(yt(t,e),mt(e),a&512&&(je||n===null||kt(n,n.return)),e.flags&32){l=e.stateNode;try{pa(l,"")}catch(B){ze(e,e.return,B)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,ws(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Os=!0);break;case 6:if(yt(t,e),mt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(B){ze(e,e.return,B)}}break;case 3:if(Su=null,l=xt,xt=vu(t.containerInfo),yt(t,e),xt=l,mt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Il(t.containerInfo)}catch(B){ze(e,e.return,B)}Os&&(Os=!1,kd(e));break;case 4:a=xt,xt=vu(e.stateNode.containerInfo),yt(t,e),mt(e),xt=a;break;case 12:yt(t,e),mt(e);break;case 13:yt(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(xs=lt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Rs(e,a)));break;case 22:l=e.memoizedState!==null;var m=n!==null&&n.memoizedState!==null,x=nn,X=je;if(nn=x||l,je=X||m,yt(t,e),je=X,nn=x,mt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||m||nn||je||$n(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){m=n=t;try{if(u=m.stateNode,l)o=u.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{f=m.stateNode;var K=m.memoizedProps.style,U=K!=null&&K.hasOwnProperty("display")?K.display:null;f.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(B){ze(m,m.return,B)}}}else if(t.tag===6){if(n===null){m=t;try{m.stateNode.nodeValue=l?"":m.memoizedProps}catch(B){ze(m,m.return,B)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Rs(e,n))));break;case 19:yt(t,e),mt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Rs(e,a)));break;case 30:break;case 21:break;default:yt(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(xd(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,u=Es(e);iu(e,u,l);break;case 5:var o=n.stateNode;n.flags&32&&(pa(o,""),n.flags&=-33);var f=Es(e);iu(e,f,o);break;case 3:case 4:var m=n.stateNode.containerInfo,x=Es(e);_s(e,x,m);break;default:throw Error(s(161))}}catch(X){ze(e,e.return,X)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)qd(e,t.alternate,t),t=t.sibling}function $n(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:bn(4,t,t.return),$n(t);break;case 1:kt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Nd(t,t.return,n),$n(t);break;case 27:kl(t.stateNode);case 26:case 5:kt(t,t.return),$n(t);break;case 22:t.memoizedState===null&&$n(t);break;case 30:$n(t);break;default:$n(t)}e=e.sibling}}function Tn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,u=t,o=u.flags;switch(u.tag){case 0:case 11:case 15:Tn(l,u,n),Nl(4,u);break;case 1:if(Tn(l,u,n),a=u,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(x){ze(a,a.return,x)}if(a=u,l=a.updateQueue,l!==null){var f=a.stateNode;try{var m=l.shared.hiddenCallbacks;if(m!==null)for(l.shared.hiddenCallbacks=null,l=0;l<m.length;l++)mf(m[l],f)}catch(x){ze(a,a.return,x)}}n&&o&64&&zd(u),Cl(u,u.return);break;case 27:Ud(u);case 26:case 5:Tn(l,u,n),n&&a===null&&o&4&&Cd(u),Cl(u,u.return);break;case 12:Tn(l,u,n);break;case 13:Tn(l,u,n),n&&o&4&&Qd(l,u);break;case 22:u.memoizedState===null&&Tn(l,u,n),Cl(u,u.return);break;case 30:break;default:Tn(l,u,n)}t=t.sibling}}function Ds(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&gl(n))}function Ms(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gl(e))}function Lt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ld(e,t,n,a),t=t.sibling}function Ld(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,n,a),l&2048&&Nl(9,t);break;case 1:Lt(e,t,n,a);break;case 3:Lt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gl(e)));break;case 12:if(l&2048){Lt(e,t,n,a),e=t.stateNode;try{var u=t.memoizedProps,o=u.id,f=u.onPostCommit;typeof f=="function"&&f(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){ze(t,t.return,m)}}else Lt(e,t,n,a);break;case 13:Lt(e,t,n,a);break;case 23:break;case 22:u=t.stateNode,o=t.alternate,t.memoizedState!==null?u._visibility&2?Lt(e,t,n,a):xl(e,t):u._visibility&2?Lt(e,t,n,a):(u._visibility|=2,xa(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&Ds(o,t);break;case 24:Lt(e,t,n,a),l&2048&&Ms(t.alternate,t);break;default:Lt(e,t,n,a)}}function xa(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,o=t,f=n,m=a,x=o.flags;switch(o.tag){case 0:case 11:case 15:xa(u,o,f,m,l),Nl(8,o);break;case 23:break;case 22:var X=o.stateNode;o.memoizedState!==null?X._visibility&2?xa(u,o,f,m,l):xl(u,o):(X._visibility|=2,xa(u,o,f,m,l)),l&&x&2048&&Ds(o.alternate,o);break;case 24:xa(u,o,f,m,l),l&&x&2048&&Ms(o.alternate,o);break;default:xa(u,o,f,m,l)}t=t.sibling}}function xl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:xl(n,a),l&2048&&Ds(a.alternate,a);break;case 24:xl(n,a),l&2048&&Ms(a.alternate,a);break;default:xl(n,a)}t=t.sibling}}var Ul=8192;function Ua(e){if(e.subtreeFlags&Ul)for(e=e.child;e!==null;)Gd(e),e=e.sibling}function Gd(e){switch(e.tag){case 26:Ua(e),e.flags&Ul&&e.memoizedState!==null&&Ag(xt,e.memoizedState,e.memoizedProps);break;case 5:Ua(e);break;case 3:case 4:var t=xt;xt=vu(e.stateNode.containerInfo),Ua(e),xt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ul,Ul=16777216,Ua(e),Ul=t):Ua(e));break;default:Ua(e)}}function Xd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ve=a,Zd(a,e)}Xd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vd(e),e=e.sibling}function Vd(e){switch(e.tag){case 0:case 11:case 15:Bl(e),e.flags&2048&&bn(9,e,e.return);break;case 3:Bl(e);break;case 12:Bl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,uu(e)):Bl(e);break;default:Bl(e)}}function uu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ve=a,Zd(a,e)}Xd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:bn(8,t,t.return),uu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,uu(t));break;default:uu(t)}e=e.sibling}}function Zd(e,t){for(;Ve!==null;){var n=Ve;switch(n.tag){case 0:case 11:case 15:bn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:gl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ve=a;else e:for(n=e;Ve!==null;){a=Ve;var l=a.sibling,u=a.return;if(jd(a),a===n){Ve=null;break e}if(l!==null){l.return=u,Ve=l;break e}Ve=u}}}var Hm={getCacheForType:function(e){var t=et(ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Qm=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Ne=null,be=null,Te=0,_e=0,gt=null,An=!1,Ba=!1,zs=!1,ln=0,Be=0,wn=0,Pn=0,Ns=0,Dt=0,qa=0,ql=null,ot=null,Cs=!1,xs=0,ru=1/0,su=null,En=null,Je=0,_n=null,ja=null,Ha=0,Us=0,Bs=null,Kd=null,jl=0,qs=null;function vt(){if((Ee&2)!==0&&Te!==0)return Te&-Te;if(D.T!==null){var e=_a;return e!==0?e:Gs()}return sc()}function Jd(){Dt===0&&(Dt=(Te&536870912)===0||we?lc():536870912);var e=Rt.current;return e!==null&&(e.flags|=32),Dt}function bt(e,t,n){(e===Ne&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(Qa(e,0),On(e,Te,Dt,!1)),tl(e,n),((Ee&2)===0||e!==Ne)&&(e===Ne&&((Ee&2)===0&&(Pn|=n),Be===4&&On(e,Te,Dt,!1)),Gt(e))}function Id(e,t,n){if((Ee&6)!==0)throw Error(s(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||el(e,t),l=a?Lm(e,t):Qs(e,t,!0),u=a;do{if(l===0){Ba&&!a&&On(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!Ym(n)){l=Qs(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var f=e;l=ql;var m=f.current.memoizedState.isDehydrated;if(m&&(Qa(f,o).flags|=256),o=Qs(f,o,!1),o!==2){if(zs&&!m){f.errorRecoveryDisabledLanes|=u,Pn|=u,l=4;break e}u=ot,ot=l,u!==null&&(ot===null?ot=u:ot.push.apply(ot,u))}l=o}if(u=!1,l!==2)continue}}if(l===1){Qa(e,0),On(e,t,0,!0);break}e:{switch(a=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:On(a,t,Dt,!An);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=xs+300-lt(),10<l)){if(On(a,t,Dt,!An),bi(a,0,!0)!==0)break e;a.timeoutHandle=Eh(Wd.bind(null,a,n,ot,su,Cs,t,Dt,Pn,qa,An,u,2,-0,0),l);break e}Wd(a,n,ot,su,Cs,t,Dt,Pn,qa,An,u,0,-0,0)}}break}while(!0);Gt(e)}function Wd(e,t,n,a,l,u,o,f,m,x,X,K,U,B){if(e.timeoutHandle=-1,K=t.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(Xl={stylesheets:null,count:0,unsuspend:Tg},Gd(t),K=wg(),K!==null)){e.cancelPendingCommit=K(ah.bind(null,e,t,u,n,a,l,o,f,m,X,1,U,B)),On(e,u,o,!x);return}ah(e,t,u,n,a,l,o,f,m)}function Ym(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],u=l.getSnapshot;l=l.value;try{if(!ht(u(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function On(e,t,n,a){t&=~Ns,t&=~Pn,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var u=31-dt(l),o=1<<u;a[u]=-1,l&=~o}n!==0&&uc(e,n,t)}function ou(){return(Ee&6)===0?(Hl(0),!1):!0}function js(){if(be!==null){if(_e===0)var e=be.return;else e=be,Wt=Kn=null,es(e),Na=null,Dl=0,e=be;for(;e!==null;)Md(e.alternate,e),e=e.return;be=null}}function Qa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,lg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),js(),Ne=e,be=n=Kt(e.current,null),Te=t,_e=0,gt=null,An=!1,Ba=el(e,t),zs=!1,qa=Dt=Ns=Pn=wn=Be=0,ot=ql=null,Cs=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-dt(a),u=1<<l;t|=e[l],a&=~u}return ln=t,Ni(),n}function Fd(e,t){ge=null,D.H=Wi,t===bl||t===Yi?(t=pf(),_e=3):t===ff?(t=pf(),_e=4):_e=t===yd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gt=t,be===null&&(Be=1,tu(e,wt(t,e.current)))}function $d(){var e=D.H;return D.H=Wi,e===null?Wi:e}function Pd(){var e=D.A;return D.A=Hm,e}function Hs(){Be=4,An||(Te&4194048)!==Te&&Rt.current!==null||(Ba=!0),(wn&134217727)===0&&(Pn&134217727)===0||Ne===null||On(Ne,Te,Dt,!1)}function Qs(e,t,n){var a=Ee;Ee|=2;var l=$d(),u=Pd();(Ne!==e||Te!==t)&&(su=null,Qa(e,t)),t=!1;var o=Be;e:do try{if(_e!==0&&be!==null){var f=be,m=gt;switch(_e){case 8:js(),o=6;break e;case 3:case 2:case 9:case 6:Rt.current===null&&(t=!0);var x=_e;if(_e=0,gt=null,Ya(e,f,m,x),n&&Ba){o=0;break e}break;default:x=_e,_e=0,gt=null,Ya(e,f,m,x)}}km(),o=Be;break}catch(X){Fd(e,X)}while(!0);return t&&e.shellSuspendCounter++,Wt=Kn=null,Ee=a,D.H=l,D.A=u,be===null&&(Ne=null,Te=0,Ni()),o}function km(){for(;be!==null;)eh(be)}function Lm(e,t){var n=Ee;Ee|=2;var a=$d(),l=Pd();Ne!==e||Te!==t?(su=null,ru=lt()+500,Qa(e,t)):Ba=el(e,t);e:do try{if(_e!==0&&be!==null){t=be;var u=gt;t:switch(_e){case 1:_e=0,gt=null,Ya(e,t,u,1);break;case 2:case 9:if(df(u)){_e=0,gt=null,th(t);break}t=function(){_e!==2&&_e!==9||Ne!==e||(_e=7),Gt(e)},u.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:df(u)?(_e=0,gt=null,th(t)):(_e=0,gt=null,Ya(e,t,u,7));break;case 5:var o=null;switch(be.tag){case 26:o=be.memoizedState;case 5:case 27:var f=be;if(!o||qh(o)){_e=0,gt=null;var m=f.sibling;if(m!==null)be=m;else{var x=f.return;x!==null?(be=x,cu(x)):be=null}break t}}_e=0,gt=null,Ya(e,t,u,5);break;case 6:_e=0,gt=null,Ya(e,t,u,6);break;case 8:js(),Be=6;break e;default:throw Error(s(462))}}Gm();break}catch(X){Fd(e,X)}while(!0);return Wt=Kn=null,D.H=a,D.A=l,Ee=n,be!==null?0:(Ne=null,Te=0,Ni(),Be)}function Gm(){for(;be!==null&&!Ht();)eh(be)}function eh(e){var t=Rd(e.alternate,e,ln);e.memoizedProps=e.pendingProps,t===null?cu(e):be=t}function th(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Td(n,t,t.pendingProps,t.type,void 0,Te);break;case 11:t=Td(n,t,t.pendingProps,t.type.render,t.ref,Te);break;case 5:es(t);default:Md(n,t),t=be=tf(t,ln),t=Rd(n,t,ln)}e.memoizedProps=e.pendingProps,t===null?cu(e):be=t}function Ya(e,t,n,a){Wt=Kn=null,es(t),Na=null,Dl=0;var l=t.return;try{if(Cm(e,l,t,n,Te)){Be=1,tu(e,wt(n,e.current)),be=null;return}}catch(u){if(l!==null)throw be=l,u;Be=1,tu(e,wt(n,e.current)),be=null;return}t.flags&32768?(we||a===1?e=!0:Ba||(Te&536870912)!==0?e=!1:(An=e=!0,(a===2||a===9||a===3||a===6)&&(a=Rt.current,a!==null&&a.tag===13&&(a.flags|=16384))),nh(t,e)):cu(t)}function cu(e){var t=e;do{if((t.flags&32768)!==0){nh(t,An);return}e=t.return;var n=Um(t.alternate,t,ln);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Be===0&&(Be=5)}function nh(e,t){do{var n=Bm(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);Be=6,be=null}function ah(e,t,n,a,l,u,o,f,m){e.cancelPendingCommit=null;do fu();while(Je!==0);if((Ee&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=Mr,Ty(e,n,u,o,f,m),e===Ne&&(be=Ne=null,Te=0),ja=t,_n=e,Ha=n,Us=u,Bs=l,Kd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Km(mi,function(){return sh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null,l=I.p,I.p=2,o=Ee,Ee|=4;try{qm(e,t,n)}finally{Ee=o,I.p=l,D.T=a}}Je=1,lh(),ih(),uh()}}function lh(){if(Je===1){Je=0;var e=_n,t=ja,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var a=I.p;I.p=2;var l=Ee;Ee|=4;try{Yd(t,e);var u=Fs,o=Vc(e.containerInfo),f=u.focusedElem,m=u.selectionRange;if(o!==f&&f&&f.ownerDocument&&Xc(f.ownerDocument.documentElement,f)){if(m!==null&&Er(f)){var x=m.start,X=m.end;if(X===void 0&&(X=x),"selectionStart"in f)f.selectionStart=x,f.selectionEnd=Math.min(X,f.value.length);else{var K=f.ownerDocument||document,U=K&&K.defaultView||window;if(U.getSelection){var B=U.getSelection(),he=f.textContent.length,fe=Math.min(m.start,he),De=m.end===void 0?fe:Math.min(m.end,he);!B.extend&&fe>De&&(o=De,De=fe,fe=o);var O=Gc(f,fe),A=Gc(f,De);if(O&&A&&(B.rangeCount!==1||B.anchorNode!==O.node||B.anchorOffset!==O.offset||B.focusNode!==A.node||B.focusOffset!==A.offset)){var M=K.createRange();M.setStart(O.node,O.offset),B.removeAllRanges(),fe>De?(B.addRange(M),B.extend(A.node,A.offset)):(M.setEnd(A.node,A.offset),B.addRange(M))}}}}for(K=[],B=f;B=B.parentNode;)B.nodeType===1&&K.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<K.length;f++){var V=K[f];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}wu=!!Ws,Fs=Ws=null}finally{Ee=l,I.p=a,D.T=n}}e.current=t,Je=2}}function ih(){if(Je===2){Je=0;var e=_n,t=ja,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var a=I.p;I.p=2;var l=Ee;Ee|=4;try{qd(e,t.alternate,t)}finally{Ee=l,I.p=a,D.T=n}}Je=3}}function uh(){if(Je===4||Je===3){Je=0,qn();var e=_n,t=ja,n=Ha,a=Kd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,ja=_n=null,rh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(En=null),ar(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Pa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=D.T,l=I.p,I.p=2,D.T=null;try{for(var u=e.onRecoverableError,o=0;o<a.length;o++){var f=a[o];u(f.value,{componentStack:f.stack})}}finally{D.T=t,I.p=l}}(Ha&3)!==0&&fu(),Gt(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===qs?jl++:(jl=0,qs=e):jl=0,Hl(0)}}function rh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,gl(t)))}function fu(e){return lh(),ih(),uh(),sh()}function sh(){if(Je!==5)return!1;var e=_n,t=Us;Us=0;var n=ar(Ha),a=D.T,l=I.p;try{I.p=32>n?32:n,D.T=null,n=Bs,Bs=null;var u=_n,o=Ha;if(Je=0,ja=_n=null,Ha=0,(Ee&6)!==0)throw Error(s(331));var f=Ee;if(Ee|=4,Vd(u.current),Ld(u,u.current,o,n),Ee=f,Hl(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Pa,u)}catch{}return!0}finally{I.p=l,D.T=a,rh(e,t)}}function oh(e,t,n){t=wt(n,t),t=ps(e.stateNode,t,2),e=yn(e,t,2),e!==null&&(tl(e,2),Gt(e))}function ze(e,t,n){if(e.tag===3)oh(e,e,n);else for(;t!==null;){if(t.tag===3){oh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(En===null||!En.has(a))){e=wt(n,e),n=hd(2),a=yn(t,n,2),a!==null&&(pd(n,a,t,e),tl(a,2),Gt(a));break}}t=t.return}}function Ys(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Qm;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(zs=!0,l.add(n),e=Xm.bind(null,e,t,n),t.then(e,e))}function Xm(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ne===e&&(Te&n)===n&&(Be===4||Be===3&&(Te&62914560)===Te&&300>lt()-xs?(Ee&2)===0&&Qa(e,0):Ns|=n,qa===Te&&(qa=0)),Gt(e)}function ch(e,t){t===0&&(t=ic()),e=Ta(e,t),e!==null&&(tl(e,t),Gt(e))}function Vm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ch(e,n)}function Zm(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),ch(e,n)}function Km(e,t){return jt(e,t)}var du=null,ka=null,ks=!1,hu=!1,Ls=!1,ea=0;function Gt(e){e!==ka&&e.next===null&&(ka===null?du=ka=e:ka=ka.next=e),hu=!0,ks||(ks=!0,Im())}function Hl(e,t){if(!Ls&&hu){Ls=!0;do for(var n=!1,a=du;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var u=0;else{var o=a.suspendedLanes,f=a.pingedLanes;u=(1<<31-dt(42|e)+1)-1,u&=l&~(o&~f),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,ph(a,u))}else u=Te,u=bi(a,a===Ne?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||el(a,u)||(n=!0,ph(a,u));a=a.next}while(n);Ls=!1}}function Jm(){fh()}function fh(){hu=ks=!1;var e=0;ea!==0&&(ag()&&(e=ea),ea=0);for(var t=lt(),n=null,a=du;a!==null;){var l=a.next,u=dh(a,t);u===0?(a.next=null,n===null?du=l:n.next=l,l===null&&(ka=n)):(n=a,(e!==0||(u&3)!==0)&&(hu=!0)),a=l}Hl(e)}function dh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var o=31-dt(u),f=1<<o,m=l[o];m===-1?((f&n)===0||(f&a)!==0)&&(l[o]=Sy(f,t)):m<=t&&(e.expiredLanes|=f),u&=~f}if(t=Ne,n=Te,n=bi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&at(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||el(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&at(a),ar(n)){case 2:case 8:n=yi;break;case 32:n=mi;break;case 268435456:n=ac;break;default:n=mi}return a=hh.bind(null,e),n=jt(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&at(a),e.callbackPriority=2,e.callbackNode=null,2}function hh(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(fu()&&e.callbackNode!==n)return null;var a=Te;return a=bi(e,e===Ne?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Id(e,a,t),dh(e,lt()),e.callbackNode!=null&&e.callbackNode===n?hh.bind(null,e):null)}function ph(e,t){if(fu())return null;Id(e,t,!0)}function Im(){ig(function(){(Ee&6)!==0?jt($a,Jm):fh()})}function Gs(){return ea===0&&(ea=lc()),ea}function yh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ei(""+e)}function mh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Wm(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var u=yh((l[it]||null).action),o=a.submitter;o&&(t=(t=o[it]||null)?yh(t.formAction):o.getAttribute("formAction"),t!==null&&(u=t,o=null));var f=new Di("action","action",null,a,l);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ea!==0){var m=o?mh(l,o):new FormData(l);os(n,{pending:!0,data:m,method:l.method,action:u},null,m)}}else typeof u=="function"&&(f.preventDefault(),m=o?mh(l,o):new FormData(l),os(n,{pending:!0,data:m,method:l.method,action:u},u,m))},currentTarget:l}]})}}for(var Xs=0;Xs<Dr.length;Xs++){var Vs=Dr[Xs],Fm=Vs.toLowerCase(),$m=Vs[0].toUpperCase()+Vs.slice(1);Ct(Fm,"on"+$m)}Ct(Jc,"onAnimationEnd"),Ct(Ic,"onAnimationIteration"),Ct(Wc,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(ym,"onTransitionRun"),Ct(mm,"onTransitionStart"),Ct(gm,"onTransitionCancel"),Ct(Fc,"onTransitionEnd"),fa("onMouseEnter",["mouseout","mouseover"]),fa("onMouseLeave",["mouseout","mouseover"]),fa("onPointerEnter",["pointerout","pointerover"]),fa("onPointerLeave",["pointerout","pointerover"]),Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ql));function gh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var o=a.length-1;0<=o;o--){var f=a[o],m=f.instance,x=f.currentTarget;if(f=f.listener,m!==u&&l.isPropagationStopped())break e;u=f,l.currentTarget=x;try{u(l)}catch(X){eu(X)}l.currentTarget=null,u=m}else for(o=0;o<a.length;o++){if(f=a[o],m=f.instance,x=f.currentTarget,f=f.listener,m!==u&&l.isPropagationStopped())break e;u=f,l.currentTarget=x;try{u(l)}catch(X){eu(X)}l.currentTarget=null,u=m}}}}function Se(e,t){var n=t[lr];n===void 0&&(n=t[lr]=new Set);var a=e+"__bubble";n.has(a)||(vh(t,e,2,!1),n.add(a))}function Zs(e,t,n){var a=0;t&&(a|=4),vh(n,e,a,t)}var pu="_reactListening"+Math.random().toString(36).slice(2);function Ks(e){if(!e[pu]){e[pu]=!0,cc.forEach(function(n){n!=="selectionchange"&&(Pm.has(n)||Zs(n,!1,e),Zs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pu]||(t[pu]=!0,Zs("selectionchange",!1,t))}}function vh(e,t,n,a){switch(Lh(t)){case 2:var l=Og;break;case 8:l=Rg;break;default:l=ro}n=l.bind(null,t,n,e),l=void 0,!yr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Js(e,t,n,a,l){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var f=a.stateNode.containerInfo;if(f===l)break;if(o===4)for(o=a.return;o!==null;){var m=o.tag;if((m===3||m===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;f!==null;){if(o=sa(f),o===null)return;if(m=o.tag,m===5||m===6||m===26||m===27){a=u=o;continue e}f=f.parentNode}}a=a.return}Ec(function(){var x=u,X=hr(n),K=[];e:{var U=$c.get(e);if(U!==void 0){var B=Di,he=e;switch(e){case"keypress":if(Oi(n)===0)break e;case"keydown":case"keyup":B=Ky;break;case"focusin":he="focus",B=br;break;case"focusout":he="blur",B=br;break;case"beforeblur":case"afterblur":B=br;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=By;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Wy;break;case Jc:case Ic:case Wc:B=Hy;break;case Fc:B=$y;break;case"scroll":case"scrollend":B=xy;break;case"wheel":B=em;break;case"copy":case"cut":case"paste":B=Yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Mc;break;case"toggle":case"beforetoggle":B=nm}var fe=(t&4)!==0,De=!fe&&(e==="scroll"||e==="scrollend"),O=fe?U!==null?U+"Capture":null:U;fe=[];for(var A=x,M;A!==null;){var V=A;if(M=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||M===null||O===null||(V=ll(A,O),V!=null&&fe.push(Yl(A,V,M))),De)break;A=A.return}0<fe.length&&(U=new B(U,he,null,n,X),K.push({event:U,listeners:fe}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",U&&n!==dr&&(he=n.relatedTarget||n.fromElement)&&(sa(he)||he[ra]))break e;if((B||U)&&(U=X.window===X?X:(U=X.ownerDocument)?U.defaultView||U.parentWindow:window,B?(he=n.relatedTarget||n.toElement,B=x,he=he?sa(he):null,he!==null&&(De=h(he),fe=he.tag,he!==De||fe!==5&&fe!==27&&fe!==6)&&(he=null)):(B=null,he=x),B!==he)){if(fe=Rc,V="onMouseLeave",O="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Mc,V="onPointerLeave",O="onPointerEnter",A="pointer"),De=B==null?U:al(B),M=he==null?U:al(he),U=new fe(V,A+"leave",B,n,X),U.target=De,U.relatedTarget=M,V=null,sa(X)===x&&(fe=new fe(O,A+"enter",he,n,X),fe.target=M,fe.relatedTarget=De,V=fe),De=V,B&&he)t:{for(fe=B,O=he,A=0,M=fe;M;M=La(M))A++;for(M=0,V=O;V;V=La(V))M++;for(;0<A-M;)fe=La(fe),A--;for(;0<M-A;)O=La(O),M--;for(;A--;){if(fe===O||O!==null&&fe===O.alternate)break t;fe=La(fe),O=La(O)}fe=null}else fe=null;B!==null&&bh(K,U,B,fe,!1),he!==null&&De!==null&&bh(K,De,he,fe,!0)}}e:{if(U=x?al(x):window,B=U.nodeName&&U.nodeName.toLowerCase(),B==="select"||B==="input"&&U.type==="file")var ue=jc;else if(Bc(U))if(Hc)ue=dm;else{ue=cm;var ve=om}else B=U.nodeName,!B||B.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?x&&fr(x.elementType)&&(ue=jc):ue=fm;if(ue&&(ue=ue(e,x))){qc(K,ue,n,X);break e}ve&&ve(e,U,x),e==="focusout"&&x&&U.type==="number"&&x.memoizedProps.value!=null&&cr(U,"number",U.value)}switch(ve=x?al(x):window,e){case"focusin":(Bc(ve)||ve.contentEditable==="true")&&(va=ve,_r=x,dl=null);break;case"focusout":dl=_r=va=null;break;case"mousedown":Or=!0;break;case"contextmenu":case"mouseup":case"dragend":Or=!1,Zc(K,n,X);break;case"selectionchange":if(pm)break;case"keydown":case"keyup":Zc(K,n,X)}var re;if(Tr)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else ga?xc(e,n)&&(de="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(de="onCompositionStart");de&&(zc&&n.locale!=="ko"&&(ga||de!=="onCompositionStart"?de==="onCompositionEnd"&&ga&&(re=_c()):(fn=X,mr="value"in fn?fn.value:fn.textContent,ga=!0)),ve=yu(x,de),0<ve.length&&(de=new Dc(de,e,null,n,X),K.push({event:de,listeners:ve}),re?de.data=re:(re=Uc(n),re!==null&&(de.data=re)))),(re=lm?im(e,n):um(e,n))&&(de=yu(x,"onBeforeInput"),0<de.length&&(ve=new Dc("onBeforeInput","beforeinput",null,n,X),K.push({event:ve,listeners:de}),ve.data=re)),Wm(K,e,x,n,X)}gh(K,t)})}function Yl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yu(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=ll(e,n),l!=null&&a.unshift(Yl(e,l,u)),l=ll(e,t),l!=null&&a.push(Yl(e,l,u))),e.tag===3)return a;e=e.return}return[]}function La(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bh(e,t,n,a,l){for(var u=t._reactName,o=[];n!==null&&n!==a;){var f=n,m=f.alternate,x=f.stateNode;if(f=f.tag,m!==null&&m===a)break;f!==5&&f!==26&&f!==27||x===null||(m=x,l?(x=ll(n,u),x!=null&&o.unshift(Yl(n,x,m))):l||(x=ll(n,u),x!=null&&o.push(Yl(n,x,m)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var eg=/\r\n?/g,tg=/\u0000|\uFFFD/g;function Sh(e){return(typeof e=="string"?e:""+e).replace(eg,`
`).replace(tg,"")}function Th(e,t){return t=Sh(t),Sh(e)===t}function mu(){}function Re(e,t,n,a,l,u){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||pa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&pa(e,""+a);break;case"className":Ti(e,"class",a);break;case"tabIndex":Ti(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ti(e,n,a);break;case"style":Ac(e,a,u);break;case"data":if(t!=="object"){Ti(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ei(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Re(e,t,"name",l.name,l,null),Re(e,t,"formEncType",l.formEncType,l,null),Re(e,t,"formMethod",l.formMethod,l,null),Re(e,t,"formTarget",l.formTarget,l,null)):(Re(e,t,"encType",l.encType,l,null),Re(e,t,"method",l.method,l,null),Re(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ei(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=mu);break;case"onScroll":a!=null&&Se("scroll",e);break;case"onScrollEnd":a!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ei(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Si(e,"popover",a);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Si(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ny.get(n)||n,Si(e,n,a))}}function Is(e,t,n,a,l,u){switch(n){case"style":Ac(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?pa(e,a):(typeof a=="number"||typeof a=="bigint")&&pa(e,""+a);break;case"onScroll":a!=null&&Se("scroll",e);break;case"onScrollEnd":a!=null&&Se("scrollend",e);break;case"onClick":a!=null&&(e.onclick=mu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),u=e[it]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof a=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Si(e,n,a)}}}function Ie(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var a=!1,l=!1,u;for(u in n)if(n.hasOwnProperty(u)){var o=n[u];if(o!=null)switch(u){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Re(e,t,u,o,n,null)}}l&&Re(e,t,"srcSet",n.srcSet,n,null),a&&Re(e,t,"src",n.src,n,null);return;case"input":Se("invalid",e);var f=u=o=l=null,m=null,x=null;for(a in n)if(n.hasOwnProperty(a)){var X=n[a];if(X!=null)switch(a){case"name":l=X;break;case"type":o=X;break;case"checked":m=X;break;case"defaultChecked":x=X;break;case"value":u=X;break;case"defaultValue":f=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,t));break;default:Re(e,t,a,X,n,null)}}vc(e,u,f,m,x,o,l,!1),Ai(e);return;case"select":Se("invalid",e),a=o=u=null;for(l in n)if(n.hasOwnProperty(l)&&(f=n[l],f!=null))switch(l){case"value":u=f;break;case"defaultValue":o=f;break;case"multiple":a=f;default:Re(e,t,l,f,n,null)}t=u,n=o,e.multiple=!!a,t!=null?ha(e,!!a,t,!1):n!=null&&ha(e,!!a,n,!0);return;case"textarea":Se("invalid",e),u=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(f=n[o],f!=null))switch(o){case"value":a=f;break;case"defaultValue":l=f;break;case"children":u=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:Re(e,t,o,f,n,null)}Sc(e,a,l,u),Ai(e);return;case"option":for(m in n)if(n.hasOwnProperty(m)&&(a=n[m],a!=null))switch(m){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Re(e,t,m,a,n,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(a=0;a<Ql.length;a++)Se(Ql[a],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in n)if(n.hasOwnProperty(x)&&(a=n[x],a!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Re(e,t,x,a,n,null)}return;default:if(fr(t)){for(X in n)n.hasOwnProperty(X)&&(a=n[X],a!==void 0&&Is(e,t,X,a,n,void 0));return}}for(f in n)n.hasOwnProperty(f)&&(a=n[f],a!=null&&Re(e,t,f,a,n,null))}function ng(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,o=null,f=null,m=null,x=null,X=null;for(B in n){var K=n[B];if(n.hasOwnProperty(B)&&K!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":m=K;default:a.hasOwnProperty(B)||Re(e,t,B,null,a,K)}}for(var U in a){var B=a[U];if(K=n[U],a.hasOwnProperty(U)&&(B!=null||K!=null))switch(U){case"type":u=B;break;case"name":l=B;break;case"checked":x=B;break;case"defaultChecked":X=B;break;case"value":o=B;break;case"defaultValue":f=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:B!==K&&Re(e,t,U,B,a,K)}}or(e,o,f,m,x,X,u,l);return;case"select":B=o=f=U=null;for(u in n)if(m=n[u],n.hasOwnProperty(u)&&m!=null)switch(u){case"value":break;case"multiple":B=m;default:a.hasOwnProperty(u)||Re(e,t,u,null,a,m)}for(l in a)if(u=a[l],m=n[l],a.hasOwnProperty(l)&&(u!=null||m!=null))switch(l){case"value":U=u;break;case"defaultValue":f=u;break;case"multiple":o=u;default:u!==m&&Re(e,t,l,u,a,m)}t=f,n=o,a=B,U!=null?ha(e,!!n,U,!1):!!a!=!!n&&(t!=null?ha(e,!!n,t,!0):ha(e,!!n,n?[]:"",!1));return;case"textarea":B=U=null;for(f in n)if(l=n[f],n.hasOwnProperty(f)&&l!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Re(e,t,f,null,a,l)}for(o in a)if(l=a[o],u=n[o],a.hasOwnProperty(o)&&(l!=null||u!=null))switch(o){case"value":U=l;break;case"defaultValue":B=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Re(e,t,o,l,a,u)}bc(e,U,B);return;case"option":for(var he in n)if(U=n[he],n.hasOwnProperty(he)&&U!=null&&!a.hasOwnProperty(he))switch(he){case"selected":e.selected=!1;break;default:Re(e,t,he,null,a,U)}for(m in a)if(U=a[m],B=n[m],a.hasOwnProperty(m)&&U!==B&&(U!=null||B!=null))switch(m){case"selected":e.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:Re(e,t,m,U,a,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in n)U=n[fe],n.hasOwnProperty(fe)&&U!=null&&!a.hasOwnProperty(fe)&&Re(e,t,fe,null,a,U);for(x in a)if(U=a[x],B=n[x],a.hasOwnProperty(x)&&U!==B&&(U!=null||B!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,t));break;default:Re(e,t,x,U,a,B)}return;default:if(fr(t)){for(var De in n)U=n[De],n.hasOwnProperty(De)&&U!==void 0&&!a.hasOwnProperty(De)&&Is(e,t,De,void 0,a,U);for(X in a)U=a[X],B=n[X],!a.hasOwnProperty(X)||U===B||U===void 0&&B===void 0||Is(e,t,X,U,a,B);return}}for(var O in n)U=n[O],n.hasOwnProperty(O)&&U!=null&&!a.hasOwnProperty(O)&&Re(e,t,O,null,a,U);for(K in a)U=a[K],B=n[K],!a.hasOwnProperty(K)||U===B||U==null&&B==null||Re(e,t,K,U,a,B)}var Ws=null,Fs=null;function gu(e){return e.nodeType===9?e:e.ownerDocument}function Ah(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ps=null;function ag(){var e=window.event;return e&&e.type==="popstate"?e===Ps?!1:(Ps=e,!0):(Ps=null,!1)}var Eh=typeof setTimeout=="function"?setTimeout:void 0,lg=typeof clearTimeout=="function"?clearTimeout:void 0,_h=typeof Promise=="function"?Promise:void 0,ig=typeof queueMicrotask=="function"?queueMicrotask:typeof _h<"u"?function(e){return _h.resolve(null).then(e).catch(ug)}:Eh;function ug(e){setTimeout(function(){throw e})}function Rn(e){return e==="head"}function Oh(e,t){var n=t,a=0,l=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<a&&8>a){n=a;var o=e.ownerDocument;if(n&1&&kl(o.documentElement),n&2&&kl(o.body),n&4)for(n=o.head,kl(n),o=n.firstChild;o;){var f=o.nextSibling,m=o.nodeName;o[nl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=f}}if(l===0){e.removeChild(u),Il(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=u}while(n);Il(t)}function eo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":eo(n),ir(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function rg(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[nl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ut(e.nextSibling),e===null)break}return null}function sg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ut(e.nextSibling),e===null))return null;return e}function to(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function og(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var no=null;function Rh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Dh(e,t,n){switch(t=gu(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function kl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ir(e)}var Mt=new Map,Mh=new Set;function vu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var un=I.d;I.d={f:cg,r:fg,D:dg,C:hg,L:pg,m:yg,X:gg,S:mg,M:vg};function cg(){var e=un.f(),t=ou();return e||t}function fg(e){var t=oa(e);t!==null&&t.tag===5&&t.type==="form"?If(t):un.r(e)}var Ga=typeof document>"u"?null:document;function zh(e,t,n){var a=Ga;if(a&&typeof t=="string"&&t){var l=At(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Mh.has(l)||(Mh.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Ie(t,"link",e),Ge(t),a.head.appendChild(t)))}}function dg(e){un.D(e),zh("dns-prefetch",e,null)}function hg(e,t){un.C(e,t),zh("preconnect",e,t)}function pg(e,t,n){un.L(e,t,n);var a=Ga;if(a&&e&&t){var l='link[rel="preload"][as="'+At(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+At(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+At(n.imageSizes)+'"]')):l+='[href="'+At(e)+'"]';var u=l;switch(t){case"style":u=Xa(e);break;case"script":u=Va(e)}Mt.has(u)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mt.set(u,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Ll(u))||t==="script"&&a.querySelector(Gl(u))||(t=a.createElement("link"),Ie(t,"link",e),Ge(t),a.head.appendChild(t)))}}function yg(e,t){un.m(e,t);var n=Ga;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+At(a)+'"][href="'+At(e)+'"]',u=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Va(e)}if(!Mt.has(u)&&(e=S({rel:"modulepreload",href:e},t),Mt.set(u,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Gl(u)))return}a=n.createElement("link"),Ie(a,"link",e),Ge(a),n.head.appendChild(a)}}}function mg(e,t,n){un.S(e,t,n);var a=Ga;if(a&&e){var l=ca(a).hoistableStyles,u=Xa(e);t=t||"default";var o=l.get(u);if(!o){var f={loading:0,preload:null};if(o=a.querySelector(Ll(u)))f.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mt.get(u))&&ao(e,n);var m=o=a.createElement("link");Ge(m),Ie(m,"link",e),m._p=new Promise(function(x,X){m.onload=x,m.onerror=X}),m.addEventListener("load",function(){f.loading|=1}),m.addEventListener("error",function(){f.loading|=2}),f.loading|=4,bu(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:f},l.set(u,o)}}}function gg(e,t){un.X(e,t);var n=Ga;if(n&&e){var a=ca(n).hoistableScripts,l=Va(e),u=a.get(l);u||(u=n.querySelector(Gl(l)),u||(e=S({src:e,async:!0},t),(t=Mt.get(l))&&lo(e,t),u=n.createElement("script"),Ge(u),Ie(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(l,u))}}function vg(e,t){un.M(e,t);var n=Ga;if(n&&e){var a=ca(n).hoistableScripts,l=Va(e),u=a.get(l);u||(u=n.querySelector(Gl(l)),u||(e=S({src:e,async:!0,type:"module"},t),(t=Mt.get(l))&&lo(e,t),u=n.createElement("script"),Ge(u),Ie(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(l,u))}}function Nh(e,t,n,a){var l=(l=le.current)?vu(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Xa(n.href),n=ca(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Xa(n.href);var u=ca(l).hoistableStyles,o=u.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,o),(u=l.querySelector(Ll(e)))&&!u._p&&(o.instance=u,o.state.loading=5),Mt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mt.set(e,n),u||bg(l,e,n,o.state))),t&&a===null)throw Error(s(528,""));return o}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Va(n),n=ca(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Xa(e){return'href="'+At(e)+'"'}function Ll(e){return'link[rel="stylesheet"]['+e+"]"}function Ch(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function bg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ie(t,"link",n),Ge(t),e.head.appendChild(t))}function Va(e){return'[src="'+At(e)+'"]'}function Gl(e){return"script[async]"+e}function xh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+At(n.href)+'"]');if(a)return t.instance=a,Ge(a),a;var l=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ge(a),Ie(a,"style",l),bu(a,n.precedence,e),t.instance=a;case"stylesheet":l=Xa(n.href);var u=e.querySelector(Ll(l));if(u)return t.state.loading|=4,t.instance=u,Ge(u),u;a=Ch(n),(l=Mt.get(l))&&ao(a,l),u=(e.ownerDocument||e).createElement("link"),Ge(u);var o=u;return o._p=new Promise(function(f,m){o.onload=f,o.onerror=m}),Ie(u,"link",a),t.state.loading|=4,bu(u,n.precedence,e),t.instance=u;case"script":return u=Va(n.src),(l=e.querySelector(Gl(u)))?(t.instance=l,Ge(l),l):(a=n,(l=Mt.get(u))&&(a=S({},n),lo(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ge(l),Ie(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,bu(a,n.precedence,e));return t.instance}function bu(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,u=l,o=0;o<a.length;o++){var f=a[o];if(f.dataset.precedence===t)u=f;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ao(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function lo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Su=null;function Uh(e,t,n){if(Su===null){var a=new Map,l=Su=new Map;l.set(n,a)}else l=Su,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var u=n[l];if(!(u[nl]||u[Pe]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var o=u.getAttribute(t)||"";o=e+o;var f=a.get(o);f?f.push(u):a.set(o,[u])}}return a}function Bh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Sg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function qh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Xl=null;function Tg(){}function Ag(e,t,n){if(Xl===null)throw Error(s(475));var a=Xl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Xa(n.href),u=e.querySelector(Ll(l));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Tu.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=u,Ge(u);return}u=e.ownerDocument||e,n=Ch(n),(l=Mt.get(l))&&ao(n,l),u=u.createElement("link"),Ge(u);var o=u;o._p=new Promise(function(f,m){o.onload=f,o.onerror=m}),Ie(u,"link",n),t.instance=u}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Tu.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function wg(){if(Xl===null)throw Error(s(475));var e=Xl;return e.stylesheets&&e.count===0&&io(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&io(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Tu(){if(this.count--,this.count===0){if(this.stylesheets)io(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Au=null;function io(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Au=new Map,t.forEach(Eg,e),Au=null,Tu.call(e))}function Eg(e,t){if(!(t.state.loading&4)){var n=Au.get(e);if(n)var a=n.get(null);else{n=new Map,Au.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var o=l[u];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=t.instance,o=l.getAttribute("data-precedence"),u=n.get(o)||a,u===a&&n.set(null,l),n.set(o,l),this.count++,a=Tu.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Vl={$$typeof:b,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function _g(e,t,n,a,l,u,o,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tr(0),this.hiddenUpdates=tr(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function jh(e,t,n,a,l,u,o,f,m,x,X,K){return e=new _g(e,t,n,o,f,m,x,K),t=1,u===!0&&(t|=24),u=pt(3,null,null,t),e.current=u,u.stateNode=e,t=Yr(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:n,cache:t},Xr(u),e}function Hh(e){return e?(e=Aa,e):Aa}function Qh(e,t,n,a,l,u){l=Hh(l),a.context===null?a.context=l:a.pendingContext=l,a=pn(t),a.payload={element:n},u=u===void 0?null:u,u!==null&&(a.callback=u),n=yn(e,a,t),n!==null&&(bt(n,e,t),Tl(n,e,t))}function Yh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uo(e,t){Yh(e,t),(e=e.alternate)&&Yh(e,t)}function kh(e){if(e.tag===13){var t=Ta(e,67108864);t!==null&&bt(t,e,67108864),uo(e,67108864)}}var wu=!0;function Og(e,t,n,a){var l=D.T;D.T=null;var u=I.p;try{I.p=2,ro(e,t,n,a)}finally{I.p=u,D.T=l}}function Rg(e,t,n,a){var l=D.T;D.T=null;var u=I.p;try{I.p=8,ro(e,t,n,a)}finally{I.p=u,D.T=l}}function ro(e,t,n,a){if(wu){var l=so(a);if(l===null)Js(e,t,a,Eu,n),Gh(e,a);else if(Mg(l,e,t,n,a))a.stopPropagation();else if(Gh(e,a),t&4&&-1<Dg.indexOf(e)){for(;l!==null;){var u=oa(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var o=jn(u.pendingLanes);if(o!==0){var f=u;for(f.pendingLanes|=2,f.entangledLanes|=2;o;){var m=1<<31-dt(o);f.entanglements[1]|=m,o&=~m}Gt(u),(Ee&6)===0&&(ru=lt()+500,Hl(0))}}break;case 13:f=Ta(u,2),f!==null&&bt(f,u,2),ou(),uo(u,2)}if(u=so(a),u===null&&Js(e,t,a,Eu,n),u===l)break;l=u}l!==null&&a.stopPropagation()}else Js(e,t,a,null,n)}}function so(e){return e=hr(e),oo(e)}var Eu=null;function oo(e){if(Eu=null,e=sa(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Eu=e,null}function Lh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(er()){case $a:return 2;case yi:return 8;case mi:case py:return 32;case ac:return 268435456;default:return 32}default:return 32}}var co=!1,Dn=null,Mn=null,zn=null,Zl=new Map,Kl=new Map,Nn=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gh(e,t){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Zl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kl.delete(t.pointerId)}}function Jl(e,t,n,a,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:u,targetContainers:[l]},t!==null&&(t=oa(t),t!==null&&kh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Mg(e,t,n,a,l){switch(t){case"focusin":return Dn=Jl(Dn,e,t,n,a,l),!0;case"dragenter":return Mn=Jl(Mn,e,t,n,a,l),!0;case"mouseover":return zn=Jl(zn,e,t,n,a,l),!0;case"pointerover":var u=l.pointerId;return Zl.set(u,Jl(Zl.get(u)||null,e,t,n,a,l)),!0;case"gotpointercapture":return u=l.pointerId,Kl.set(u,Jl(Kl.get(u)||null,e,t,n,a,l)),!0}return!1}function Xh(e){var t=sa(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,Ay(e.priority,function(){if(n.tag===13){var a=vt();a=nr(a);var l=Ta(n,a);l!==null&&bt(l,n,a),uo(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _u(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=so(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);dr=a,n.target.dispatchEvent(a),dr=null}else return t=oa(n),t!==null&&kh(t),e.blockedOn=n,!1;t.shift()}return!0}function Vh(e,t,n){_u(e)&&n.delete(t)}function zg(){co=!1,Dn!==null&&_u(Dn)&&(Dn=null),Mn!==null&&_u(Mn)&&(Mn=null),zn!==null&&_u(zn)&&(zn=null),Zl.forEach(Vh),Kl.forEach(Vh)}function Ou(e,t){e.blockedOn===t&&(e.blockedOn=null,co||(co=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,zg)))}var Ru=null;function Zh(e){Ru!==e&&(Ru=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Ru===e&&(Ru=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(oo(a||n)===null)continue;break}var u=oa(n);u!==null&&(e.splice(t,3),t-=3,os(u,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Il(e){function t(m){return Ou(m,e)}Dn!==null&&Ou(Dn,e),Mn!==null&&Ou(Mn,e),zn!==null&&Ou(zn,e),Zl.forEach(t),Kl.forEach(t);for(var n=0;n<Nn.length;n++){var a=Nn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)Xh(n),n.blockedOn===null&&Nn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],u=n[a+1],o=l[it]||null;if(typeof u=="function")o||Zh(n);else if(o){var f=null;if(u&&u.hasAttribute("formAction")){if(l=u,o=u[it]||null)f=o.formAction;else if(oo(l)!==null)continue}else f=o.action;typeof f=="function"?n[a+1]=f:(n.splice(a,3),a-=3),Zh(n)}}}function fo(e){this._internalRoot=e}Du.prototype.render=fo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=vt();Qh(n,a,e,t,null,null)},Du.prototype.unmount=fo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qh(e.current,2,null,e,null,null),ou(),t[ra]=null}};function Du(e){this._internalRoot=e}Du.prototype.unstable_scheduleHydration=function(e){if(e){var t=sc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nn.length&&t!==0&&t<Nn[n].priority;n++);Nn.splice(n,0,e),n===0&&Xh(e)}};var Kh=r.version;if(Kh!=="19.1.1")throw Error(s(527,Kh,"19.1.1"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Ng={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Pa=Mu.inject(Ng),ft=Mu}catch{}}return Fl.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,a="",l=od,u=cd,o=fd,f=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(f=t.unstable_transitionCallbacks)),t=jh(e,1,!1,null,null,n,a,l,u,o,f,null),e[ra]=t.current,Ks(e),new fo(t)},Fl.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var a=!1,l="",u=od,o=cd,f=fd,m=null,x=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(f=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(m=n.unstable_transitionCallbacks),n.formState!==void 0&&(x=n.formState)),t=jh(e,1,!0,t,n??null,a,l,u,o,f,m,x),t.context=Hh(null),n=t.current,a=vt(),a=nr(a),l=pn(a),l.callback=null,yn(n,l,a),n=a,t.current.lanes=n,tl(t,n),Gt(t),e[ra]=t.current,Ks(e),new Du(t)},Fl.version="19.1.1",Fl}var ap;function Gg(){if(ap)return yo.exports;ap=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),yo.exports=Lg(),yo.exports}var Xg=Gg(),bo={exports:{}},So={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function Vg(){if(lp)return So;lp=1;var i=Xu();function r(y,p){return y===p&&(y!==0||1/y===1/p)||y!==y&&p!==p}var c=typeof Object.is=="function"?Object.is:r,s=i.useSyncExternalStore,d=i.useRef,h=i.useEffect,g=i.useMemo,w=i.useDebugValue;return So.useSyncExternalStoreWithSelector=function(y,p,S,T,E){var j=d(null);if(j.current===null){var H={hasValue:!1,value:null};j.current=H}else H=j.current;j=g(function(){function C(R){if(!z){if(z=!0,Q=R,R=T(R),E!==void 0&&H.hasValue){var J=H.value;if(E(J,R))return b=J}return b=R}if(J=b,c(Q,R))return J;var G=T(R);return E!==void 0&&E(J,G)?(Q=R,J):(Q=R,b=G)}var z=!1,Q,b,_=S===void 0?null:S;return[function(){return C(p())},_===null?void 0:function(){return C(_())}]},[p,S,T,E]);var Y=s(y,j[0],j[1]);return h(function(){H.hasValue=!0,H.value=Y},[Y]),w(Y),Y},So}var ip;function Zg(){return ip||(ip=1,bo.exports=Vg()),bo.exports}var Kg=Zg();function Jg(i){i()}function Ig(){let i=null,r=null;return{clear(){i=null,r=null},notify(){Jg(()=>{let c=i;for(;c;)c.callback(),c=c.next})},get(){const c=[];let s=i;for(;s;)c.push(s),s=s.next;return c},subscribe(c){let s=!0;const d=r={callback:c,next:null,prev:r};return d.prev?d.prev.next=d:i=d,function(){!s||i===null||(s=!1,d.next?d.next.prev=d.prev:r=d.prev,d.prev?d.prev.next=d.next:i=d.next)}}}}var up={notify(){},get:()=>[]};function Wg(i,r){let c,s=up,d=0,h=!1;function g(Y){S();const C=s.subscribe(Y);let z=!1;return()=>{z||(z=!0,C(),T())}}function w(){s.notify()}function y(){H.onStateChange&&H.onStateChange()}function p(){return h}function S(){d++,c||(c=i.subscribe(y),s=Ig())}function T(){d--,c&&d===0&&(c(),c=void 0,s.clear(),s=up)}function E(){h||(h=!0,S())}function j(){h&&(h=!1,T())}const H={addNestedSub:g,notifyNestedSubs:w,handleChangeWrapper:y,isSubscribed:p,trySubscribe:E,tryUnsubscribe:j,getListeners:()=>s};return H}var Fg=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$g=Fg(),Pg=()=>typeof navigator<"u"&&navigator.product==="ReactNative",ev=Pg(),tv=()=>$g||ev?Me.useLayoutEffect:Me.useEffect,nv=tv(),av=Symbol.for("react-redux-context"),lv=typeof globalThis<"u"?globalThis:{};function iv(){if(!Me.createContext)return{};const i=lv[av]??=new Map;let r=i.get(Me.createContext);return r||(r=Me.createContext(null),i.set(Me.createContext,r)),r}var Un=iv();function uv(i){const{children:r,context:c,serverState:s,store:d}=i,h=Me.useMemo(()=>{const y=Wg(d);return{store:d,subscription:y,getServerState:s?()=>s:void 0}},[d,s]),g=Me.useMemo(()=>d.getState(),[d]);nv(()=>{const{subscription:y}=h;return y.onStateChange=y.notifyNestedSubs,y.trySubscribe(),g!==d.getState()&&y.notifyNestedSubs(),()=>{y.tryUnsubscribe(),y.onStateChange=void 0}},[h,g]);const w=c||Un;return Me.createElement(w.Provider,{value:h},r)}var rv=uv;function Vo(i=Un){return function(){return Me.useContext(i)}}var qp=Vo();function jp(i=Un){const r=i===Un?qp:Vo(i),c=()=>{const{store:s}=r();return s};return Object.assign(c,{withTypes:()=>c}),c}var sv=jp();function ov(i=Un){const r=i===Un?sv:jp(i),c=()=>r().dispatch;return Object.assign(c,{withTypes:()=>c}),c}var cv=ov(),fv=(i,r)=>i===r;function dv(i=Un){const r=i===Un?qp:Vo(i),c=(s,d={})=>{const{equalityFn:h=fv}=typeof d=="function"?{equalityFn:d}:d,g=r(),{store:w,subscription:y,getServerState:p}=g;Me.useRef(!0);const S=Me.useCallback({[s.name](E){return s(E)}}[s.name],[s]),T=Kg.useSyncExternalStoreWithSelector(y.addNestedSub,w.getState,p||w.getState,S,h);return Me.useDebugValue(T),T};return Object.assign(c,{withTypes:()=>c}),c}var hv=dv();const Hp=cv.withTypes(),Fe=hv.withTypes();function We(i){return`Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `}var pv=typeof Symbol=="function"&&Symbol.observable||"@@observable",rp=pv,To=()=>Math.random().toString(36).substring(7).split("").join("."),yv={INIT:`@@redux/INIT${To()}`,REPLACE:`@@redux/REPLACE${To()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${To()}`},qu=yv;function Ia(i){if(typeof i!="object"||i===null)return!1;let r=i;for(;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(i)===r||Object.getPrototypeOf(i)===null}function Qp(i,r,c){if(typeof i!="function")throw new Error(We(2));if(typeof r=="function"&&typeof c=="function"||typeof c=="function"&&typeof arguments[3]=="function")throw new Error(We(0));if(typeof r=="function"&&typeof c>"u"&&(c=r,r=void 0),typeof c<"u"){if(typeof c!="function")throw new Error(We(1));return c(Qp)(i,r)}let s=i,d=r,h=new Map,g=h,w=0,y=!1;function p(){g===h&&(g=new Map,h.forEach((C,z)=>{g.set(z,C)}))}function S(){if(y)throw new Error(We(3));return d}function T(C){if(typeof C!="function")throw new Error(We(4));if(y)throw new Error(We(5));let z=!0;p();const Q=w++;return g.set(Q,C),function(){if(z){if(y)throw new Error(We(6));z=!1,p(),g.delete(Q),h=null}}}function E(C){if(!Ia(C))throw new Error(We(7));if(typeof C.type>"u")throw new Error(We(8));if(typeof C.type!="string")throw new Error(We(17));if(y)throw new Error(We(9));try{y=!0,d=s(d,C)}finally{y=!1}return(h=g).forEach(Q=>{Q()}),C}function j(C){if(typeof C!="function")throw new Error(We(10));s=C,E({type:qu.REPLACE})}function H(){const C=T;return{subscribe(z){if(typeof z!="object"||z===null)throw new Error(We(11));function Q(){const _=z;_.next&&_.next(S())}return Q(),{unsubscribe:C(Q)}},[rp](){return this}}}return E({type:qu.INIT}),{dispatch:E,subscribe:T,getState:S,replaceReducer:j,[rp]:H}}function mv(i){Object.keys(i).forEach(r=>{const c=i[r];if(typeof c(void 0,{type:qu.INIT})>"u")throw new Error(We(12));if(typeof c(void 0,{type:qu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(We(13))})}function Zo(i){const r=Object.keys(i),c={};for(let h=0;h<r.length;h++){const g=r[h];typeof i[g]=="function"&&(c[g]=i[g])}const s=Object.keys(c);let d;try{mv(c)}catch(h){d=h}return function(g={},w){if(d)throw d;let y=!1;const p={};for(let S=0;S<s.length;S++){const T=s[S],E=c[T],j=g[T],H=E(j,w);if(typeof H>"u")throw w&&w.type,new Error(We(14));p[T]=H,y=y||H!==j}return y=y||s.length!==Object.keys(g).length,y?p:g}}function ju(...i){return i.length===0?r=>r:i.length===1?i[0]:i.reduce((r,c)=>(...s)=>r(c(...s)))}function gv(...i){return r=>(c,s)=>{const d=r(c,s);let h=()=>{throw new Error(We(15))};const g={getState:d.getState,dispatch:(y,...p)=>h(y,...p)},w=i.map(y=>y(g));return h=ju(...w)(d.dispatch),{...d,dispatch:h}}}function Yp(i){return Ia(i)&&"type"in i&&typeof i.type=="string"}var Ko=Symbol.for("immer-nothing"),ai=Symbol.for("immer-draftable"),ct=Symbol.for("immer-state");function $e(i,...r){throw new Error(`[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`)}var la=Object.getPrototypeOf;function Xt(i){return!!i&&!!i[ct]}function qt(i){return i?kp(i)||Array.isArray(i)||!!i[ai]||!!i.constructor?.[ai]||Fa(i)||di(i):!1}var vv=Object.prototype.constructor.toString();function kp(i){if(!i||typeof i!="object")return!1;const r=la(i);if(r===null)return!0;const c=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return c===Object?!0:typeof c=="function"&&Function.toString.call(c)===vv}function bv(i){return Xt(i)||$e(15,i),i[ct].base_}function ii(i,r){ia(i)===0?Reflect.ownKeys(i).forEach(c=>{r(c,i[c],i)}):i.forEach((c,s)=>r(s,c,i))}function ia(i){const r=i[ct];return r?r.type_:Array.isArray(i)?1:Fa(i)?2:di(i)?3:0}function ui(i,r){return ia(i)===2?i.has(r):Object.prototype.hasOwnProperty.call(i,r)}function Ao(i,r){return ia(i)===2?i.get(r):i[r]}function Lp(i,r,c){const s=ia(i);s===2?i.set(r,c):s===3?i.add(c):i[r]=c}function Sv(i,r){return i===r?i!==0||1/i===1/r:i!==i&&r!==r}function Fa(i){return i instanceof Map}function di(i){return i instanceof Set}function aa(i){return i.copy_||i.base_}function zo(i,r){if(Fa(i))return new Map(i);if(di(i))return new Set(i);if(Array.isArray(i))return Array.prototype.slice.call(i);const c=kp(i);if(r===!0||r==="class_only"&&!c){const s=Object.getOwnPropertyDescriptors(i);delete s[ct];let d=Reflect.ownKeys(s);for(let h=0;h<d.length;h++){const g=d[h],w=s[g];w.writable===!1&&(w.writable=!0,w.configurable=!0),(w.get||w.set)&&(s[g]={configurable:!0,writable:!0,enumerable:w.enumerable,value:i[g]})}return Object.create(la(i),s)}else{const s=la(i);if(s!==null&&c)return{...i};const d=Object.create(s);return Object.assign(d,i)}}function Jo(i,r=!1){return Vu(i)||Xt(i)||!qt(i)||(ia(i)>1&&Object.defineProperties(i,{set:{value:zu},add:{value:zu},clear:{value:zu},delete:{value:zu}}),Object.freeze(i),r&&Object.values(i).forEach(c=>Jo(c,!0))),i}function zu(){$e(2)}function Vu(i){return Object.isFrozen(i)}var No={};function ua(i){const r=No[i];return r||$e(0,i),r}function Tv(i,r){No[i]||(No[i]=r)}var ri;function Gp(){return ri}function Av(i,r){return{drafts_:[],parent_:i,immer_:r,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function sp(i,r){r&&(ua("Patches"),i.patches_=[],i.inversePatches_=[],i.patchListener_=r)}function Co(i){xo(i),i.drafts_.forEach(wv),i.drafts_=null}function xo(i){i===ri&&(ri=i.parent_)}function op(i){return ri=Av(ri,i)}function wv(i){const r=i[ct];r.type_===0||r.type_===1?r.revoke_():r.revoked_=!0}function cp(i,r){r.unfinalizedDrafts_=r.drafts_.length;const c=r.drafts_[0];return i!==void 0&&i!==c?(c[ct].modified_&&(Co(r),$e(4)),qt(i)&&(i=Hu(r,i),r.parent_||Qu(r,i)),r.patches_&&ua("Patches").generateReplacementPatches_(c[ct].base_,i,r.patches_,r.inversePatches_)):i=Hu(r,c,[]),Co(r),r.patches_&&r.patchListener_(r.patches_,r.inversePatches_),i!==Ko?i:void 0}function Hu(i,r,c){if(Vu(r))return r;const s=r[ct];if(!s)return ii(r,(d,h)=>fp(i,s,r,d,h,c)),r;if(s.scope_!==i)return r;if(!s.modified_)return Qu(i,s.base_,!0),s.base_;if(!s.finalized_){s.finalized_=!0,s.scope_.unfinalizedDrafts_--;const d=s.copy_;let h=d,g=!1;s.type_===3&&(h=new Set(d),d.clear(),g=!0),ii(h,(w,y)=>fp(i,s,d,w,y,c,g)),Qu(i,d,!1),c&&i.patches_&&ua("Patches").generatePatches_(s,c,i.patches_,i.inversePatches_)}return s.copy_}function fp(i,r,c,s,d,h,g){if(Xt(d)){const w=h&&r&&r.type_!==3&&!ui(r.assigned_,s)?h.concat(s):void 0,y=Hu(i,d,w);if(Lp(c,s,y),Xt(y))i.canAutoFreeze_=!1;else return}else g&&c.add(d);if(qt(d)&&!Vu(d)){if(!i.immer_.autoFreeze_&&i.unfinalizedDrafts_<1)return;Hu(i,d),(!r||!r.scope_.parent_)&&typeof s!="symbol"&&(Fa(c)?c.has(s):Object.prototype.propertyIsEnumerable.call(c,s))&&Qu(i,d)}}function Qu(i,r,c=!1){!i.parent_&&i.immer_.autoFreeze_&&i.canAutoFreeze_&&Jo(r,c)}function Ev(i,r){const c=Array.isArray(i),s={type_:c?1:0,scope_:r?r.scope_:Gp(),modified_:!1,finalized_:!1,assigned_:{},parent_:r,base_:i,draft_:null,copy_:null,revoke_:null,isManual_:!1};let d=s,h=Io;c&&(d=[s],h=si);const{revoke:g,proxy:w}=Proxy.revocable(d,h);return s.draft_=w,s.revoke_=g,w}var Io={get(i,r){if(r===ct)return i;const c=aa(i);if(!ui(c,r))return _v(i,c,r);const s=c[r];return i.finalized_||!qt(s)?s:s===wo(i.base_,r)?(Eo(i),i.copy_[r]=Bo(s,i)):s},has(i,r){return r in aa(i)},ownKeys(i){return Reflect.ownKeys(aa(i))},set(i,r,c){const s=Xp(aa(i),r);if(s?.set)return s.set.call(i.draft_,c),!0;if(!i.modified_){const d=wo(aa(i),r),h=d?.[ct];if(h&&h.base_===c)return i.copy_[r]=c,i.assigned_[r]=!1,!0;if(Sv(c,d)&&(c!==void 0||ui(i.base_,r)))return!0;Eo(i),Uo(i)}return i.copy_[r]===c&&(c!==void 0||r in i.copy_)||Number.isNaN(c)&&Number.isNaN(i.copy_[r])||(i.copy_[r]=c,i.assigned_[r]=!0),!0},deleteProperty(i,r){return wo(i.base_,r)!==void 0||r in i.base_?(i.assigned_[r]=!1,Eo(i),Uo(i)):delete i.assigned_[r],i.copy_&&delete i.copy_[r],!0},getOwnPropertyDescriptor(i,r){const c=aa(i),s=Reflect.getOwnPropertyDescriptor(c,r);return s&&{writable:!0,configurable:i.type_!==1||r!=="length",enumerable:s.enumerable,value:c[r]}},defineProperty(){$e(11)},getPrototypeOf(i){return la(i.base_)},setPrototypeOf(){$e(12)}},si={};ii(Io,(i,r)=>{si[i]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}});si.deleteProperty=function(i,r){return si.set.call(this,i,r,void 0)};si.set=function(i,r,c){return Io.set.call(this,i[0],r,c,i[0])};function wo(i,r){const c=i[ct];return(c?aa(c):i)[r]}function _v(i,r,c){const s=Xp(r,c);return s?"value"in s?s.value:s.get?.call(i.draft_):void 0}function Xp(i,r){if(!(r in i))return;let c=la(i);for(;c;){const s=Object.getOwnPropertyDescriptor(c,r);if(s)return s;c=la(c)}}function Uo(i){i.modified_||(i.modified_=!0,i.parent_&&Uo(i.parent_))}function Eo(i){i.copy_||(i.copy_=zo(i.base_,i.scope_.immer_.useStrictShallowCopy_))}var Ov=class{constructor(i){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(r,c,s)=>{if(typeof r=="function"&&typeof c!="function"){const h=c;c=r;const g=this;return function(y=h,...p){return g.produce(y,S=>c.call(this,S,...p))}}typeof c!="function"&&$e(6),s!==void 0&&typeof s!="function"&&$e(7);let d;if(qt(r)){const h=op(this),g=Bo(r,void 0);let w=!0;try{d=c(g),w=!1}finally{w?Co(h):xo(h)}return sp(h,s),cp(d,h)}else if(!r||typeof r!="object"){if(d=c(r),d===void 0&&(d=r),d===Ko&&(d=void 0),this.autoFreeze_&&Jo(d,!0),s){const h=[],g=[];ua("Patches").generateReplacementPatches_(r,d,h,g),s(h,g)}return d}else $e(1,r)},this.produceWithPatches=(r,c)=>{if(typeof r=="function")return(g,...w)=>this.produceWithPatches(g,y=>r(y,...w));let s,d;return[this.produce(r,c,(g,w)=>{s=g,d=w}),s,d]},typeof i?.autoFreeze=="boolean"&&this.setAutoFreeze(i.autoFreeze),typeof i?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(i.useStrictShallowCopy)}createDraft(i){qt(i)||$e(8),Xt(i)&&(i=Rv(i));const r=op(this),c=Bo(i,void 0);return c[ct].isManual_=!0,xo(r),c}finishDraft(i,r){const c=i&&i[ct];(!c||!c.isManual_)&&$e(9);const{scope_:s}=c;return sp(s,r),cp(void 0,s)}setAutoFreeze(i){this.autoFreeze_=i}setUseStrictShallowCopy(i){this.useStrictShallowCopy_=i}applyPatches(i,r){let c;for(c=r.length-1;c>=0;c--){const d=r[c];if(d.path.length===0&&d.op==="replace"){i=d.value;break}}c>-1&&(r=r.slice(c+1));const s=ua("Patches").applyPatches_;return Xt(i)?s(i,r):this.produce(i,d=>s(d,r))}};function Bo(i,r){const c=Fa(i)?ua("MapSet").proxyMap_(i,r):di(i)?ua("MapSet").proxySet_(i,r):Ev(i,r);return(r?r.scope_:Gp()).drafts_.push(c),c}function Rv(i){return Xt(i)||$e(10,i),Vp(i)}function Vp(i){if(!qt(i)||Vu(i))return i;const r=i[ct];let c;if(r){if(!r.modified_)return r.base_;r.finalized_=!0,c=zo(i,r.scope_.immer_.useStrictShallowCopy_)}else c=zo(i,!0);return ii(c,(s,d)=>{Lp(c,s,Vp(d))}),r&&(r.finalized_=!1),c}function Dv(){const r="replace",s="remove";function d(E,j,H,Y){switch(E.type_){case 0:case 2:return g(E,j,H,Y);case 1:return h(E,j,H,Y);case 3:return w(E,j,H,Y)}}function h(E,j,H,Y){let{base_:C,assigned_:z}=E,Q=E.copy_;Q.length<C.length&&([C,Q]=[Q,C],[H,Y]=[Y,H]);for(let b=0;b<C.length;b++)if(z[b]&&Q[b]!==C[b]){const _=j.concat([b]);H.push({op:r,path:_,value:T(Q[b])}),Y.push({op:r,path:_,value:T(C[b])})}for(let b=C.length;b<Q.length;b++){const _=j.concat([b]);H.push({op:"add",path:_,value:T(Q[b])})}for(let b=Q.length-1;C.length<=b;--b){const _=j.concat([b]);Y.push({op:s,path:_})}}function g(E,j,H,Y){const{base_:C,copy_:z}=E;ii(E.assigned_,(Q,b)=>{const _=Ao(C,Q),R=Ao(z,Q),J=b?ui(C,Q)?r:"add":s;if(_===R&&J===r)return;const G=j.concat(Q);H.push(J===s?{op:J,path:G}:{op:J,path:G,value:R}),Y.push(J==="add"?{op:s,path:G}:J===s?{op:"add",path:G,value:T(_)}:{op:r,path:G,value:T(_)})})}function w(E,j,H,Y){let{base_:C,copy_:z}=E,Q=0;C.forEach(b=>{if(!z.has(b)){const _=j.concat([Q]);H.push({op:s,path:_,value:b}),Y.unshift({op:"add",path:_,value:b})}Q++}),Q=0,z.forEach(b=>{if(!C.has(b)){const _=j.concat([Q]);H.push({op:"add",path:_,value:b}),Y.unshift({op:s,path:_,value:b})}Q++})}function y(E,j,H,Y){H.push({op:r,path:[],value:j===Ko?void 0:j}),Y.push({op:r,path:[],value:E})}function p(E,j){return j.forEach(H=>{const{path:Y,op:C}=H;let z=E;for(let R=0;R<Y.length-1;R++){const J=ia(z);let G=Y[R];typeof G!="string"&&typeof G!="number"&&(G=""+G),(J===0||J===1)&&(G==="__proto__"||G==="constructor")&&$e(19),typeof z=="function"&&G==="prototype"&&$e(19),z=Ao(z,G),typeof z!="object"&&$e(18,Y.join("/"))}const Q=ia(z),b=S(H.value),_=Y[Y.length-1];switch(C){case r:switch(Q){case 2:return z.set(_,b);case 3:$e(16);default:return z[_]=b}case"add":switch(Q){case 1:return _==="-"?z.push(b):z.splice(_,0,b);case 2:return z.set(_,b);case 3:return z.add(b);default:return z[_]=b}case s:switch(Q){case 1:return z.splice(_,1);case 2:return z.delete(_);case 3:return z.delete(H.value);default:return delete z[_]}default:$e(17,C)}}),E}function S(E){if(!qt(E))return E;if(Array.isArray(E))return E.map(S);if(Fa(E))return new Map(Array.from(E.entries()).map(([H,Y])=>[H,S(Y)]));if(di(E))return new Set(Array.from(E).map(S));const j=Object.create(la(E));for(const H in E)j[H]=S(E[H]);return ui(E,ai)&&(j[ai]=E[ai]),j}function T(E){return Xt(E)?S(E):E}Tv("Patches",{applyPatches_:p,generatePatches_:d,generateReplacementPatches_:y})}var oi=new Ov,hi=oi.produce,Zp=oi.produceWithPatches.bind(oi),dp=oi.applyPatches.bind(oi);function Mv(i,r=`expected a function, instead received ${typeof i}`){if(typeof i!="function")throw new TypeError(r)}function zv(i,r=`expected an object, instead received ${typeof i}`){if(typeof i!="object")throw new TypeError(r)}function Nv(i,r="expected all items to be functions, instead received the following types: "){if(!i.every(c=>typeof c=="function")){const c=i.map(s=>typeof s=="function"?`function ${s.name||"unnamed"}()`:typeof s).join(", ");throw new TypeError(`${r}[${c}]`)}}var hp=i=>Array.isArray(i)?i:[i];function Cv(i){const r=Array.isArray(i[0])?i[0]:i;return Nv(r,"createSelector expects all input-selectors to be functions, but received the following types: "),r}function xv(i,r){const c=[],{length:s}=i;for(let d=0;d<s;d++)c.push(i[d].apply(null,r));return c}var Uv=class{constructor(i){this.value=i}deref(){return this.value}},Bv=typeof WeakRef<"u"?WeakRef:Uv,qv=0,pp=1;function Nu(){return{s:qv,v:void 0,o:null,p:null}}function Yu(i,r={}){let c=Nu();const{resultEqualityCheck:s}=r;let d,h=0;function g(){let w=c;const{length:y}=arguments;for(let T=0,E=y;T<E;T++){const j=arguments[T];if(typeof j=="function"||typeof j=="object"&&j!==null){let H=w.o;H===null&&(w.o=H=new WeakMap);const Y=H.get(j);Y===void 0?(w=Nu(),H.set(j,w)):w=Y}else{let H=w.p;H===null&&(w.p=H=new Map);const Y=H.get(j);Y===void 0?(w=Nu(),H.set(j,w)):w=Y}}const p=w;let S;if(w.s===pp)S=w.v;else if(S=i.apply(null,arguments),h++,s){const T=d?.deref?.()??d;T!=null&&s(T,S)&&(S=T,h!==0&&h--),d=typeof S=="object"&&S!==null||typeof S=="function"?new Bv(S):S}return p.s=pp,p.v=S,S}return g.clearCache=()=>{c=Nu(),g.resetResultsCount()},g.resultsCount=()=>h,g.resetResultsCount=()=>{h=0},g}function jv(i,...r){const c=typeof i=="function"?{memoize:i,memoizeOptions:r}:i,s=(...d)=>{let h=0,g=0,w,y={},p=d.pop();typeof p=="object"&&(y=p,p=d.pop()),Mv(p,`createSelector expects an output function after the inputs, but received: [${typeof p}]`);const S={...c,...y},{memoize:T,memoizeOptions:E=[],argsMemoize:j=Yu,argsMemoizeOptions:H=[]}=S,Y=hp(E),C=hp(H),z=Cv(d),Q=T(function(){return h++,p.apply(null,arguments)},...Y),b=j(function(){g++;const R=xv(z,arguments);return w=Q.apply(null,R),w},...C);return Object.assign(b,{resultFunc:p,memoizedResultFunc:Q,dependencies:z,dependencyRecomputations:()=>g,resetDependencyRecomputations:()=>{g=0},lastResult:()=>w,recomputations:()=>h,resetRecomputations:()=>{h=0},memoize:T,argsMemoize:j})};return Object.assign(s,{withTypes:()=>s}),s}var Kp=jv(Yu),Hv=Object.assign((i,r=Kp)=>{zv(i,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof i}`);const c=Object.keys(i),s=c.map(h=>i[h]);return r(s,(...h)=>h.reduce((g,w,y)=>(g[c[y]]=w,g),{}))},{withTypes:()=>Hv});function Jp(i){return({dispatch:c,getState:s})=>d=>h=>typeof h=="function"?h(c,s,i):d(h)}var Qv=Jp(),Yv=Jp,kv=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ju:ju.apply(null,arguments)},Lv=i=>i&&typeof i.match=="function";function Bt(i,r){function c(...s){if(r){let d=r(...s);if(!d)throw new Error(zt(0));return{type:i,payload:d.payload,..."meta"in d&&{meta:d.meta},..."error"in d&&{error:d.error}}}return{type:i,payload:s[0]}}return c.toString=()=>`${i}`,c.type=i,c.match=s=>Yp(s)&&s.type===i,c}var Ip=class ti extends Array{constructor(...r){super(...r),Object.setPrototypeOf(this,ti.prototype)}static get[Symbol.species](){return ti}concat(...r){return super.concat.apply(this,r)}prepend(...r){return r.length===1&&Array.isArray(r[0])?new ti(...r[0].concat(this)):new ti(...r.concat(this))}};function yp(i){return qt(i)?hi(i,()=>{}):i}function ni(i,r,c){return i.has(r)?i.get(r):i.set(r,c(r)).get(r)}function Gv(i){return typeof i=="boolean"}var Xv=()=>function(r){const{thunk:c=!0,immutableCheck:s=!0,serializableCheck:d=!0,actionCreatorCheck:h=!0}=r??{};let g=new Ip;return c&&(Gv(c)?g.push(Qv):g.push(Yv(c.extraArgument))),g},Zu="RTK_autoBatch",$l=()=>i=>({payload:i,meta:{[Zu]:!0}}),mp=i=>r=>{setTimeout(r,i)},Vv=(i={type:"raf"})=>r=>(...c)=>{const s=r(...c);let d=!0,h=!1,g=!1;const w=new Set,y=i.type==="tick"?queueMicrotask:i.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:mp(10):i.type==="callback"?i.queueNotification:mp(i.timeout),p=()=>{g=!1,h&&(h=!1,w.forEach(S=>S()))};return Object.assign({},s,{subscribe(S){const T=()=>d&&S(),E=s.subscribe(T);return w.add(S),()=>{E(),w.delete(S)}},dispatch(S){try{return d=!S?.meta?.[Zu],h=!d,h&&(g||(g=!0,y(p))),s.dispatch(S)}finally{d=!0}}})},Zv=i=>function(c){const{autoBatch:s=!0}=c??{};let d=new Ip(i);return s&&d.push(Vv(typeof s=="object"?s:void 0)),d};function Kv(i){const r=Xv(),{reducer:c=void 0,middleware:s,devTools:d=!0,preloadedState:h=void 0,enhancers:g=void 0}=i||{};let w;if(typeof c=="function")w=c;else if(Ia(c))w=Zo(c);else throw new Error(zt(1));let y;typeof s=="function"?y=s(r):y=r();let p=ju;d&&(p=kv({trace:!1,...typeof d=="object"&&d}));const S=gv(...y),T=Zv(S);let E=typeof g=="function"?g(T):T();const j=p(...E);return Qp(w,h,j)}function Wp(i){const r={},c=[];let s;const d={addCase(h,g){const w=typeof h=="string"?h:h.type;if(!w)throw new Error(zt(28));if(w in r)throw new Error(zt(29));return r[w]=g,d},addAsyncThunk(h,g){return g.pending&&(r[h.pending.type]=g.pending),g.rejected&&(r[h.rejected.type]=g.rejected),g.fulfilled&&(r[h.fulfilled.type]=g.fulfilled),g.settled&&c.push({matcher:h.settled,reducer:g.settled}),d},addMatcher(h,g){return c.push({matcher:h,reducer:g}),d},addDefaultCase(h){return s=h,d}};return i(d),[r,c,s]}function Jv(i){return typeof i=="function"}function Iv(i,r){let[c,s,d]=Wp(r),h;if(Jv(i))h=()=>yp(i());else{const w=yp(i);h=()=>w}function g(w=h(),y){let p=[c[y.type],...s.filter(({matcher:S})=>S(y)).map(({reducer:S})=>S)];return p.filter(S=>!!S).length===0&&(p=[d]),p.reduce((S,T)=>{if(T)if(Xt(S)){const j=T(S,y);return j===void 0?S:j}else{if(qt(S))return hi(S,E=>T(E,y));{const E=T(S,y);if(E===void 0){if(S===null)return S;throw Error("A case reducer on a non-draftable value must not return undefined")}return E}}return S},w)}return g.getInitialState=h,g}var Fp=(i,r)=>Lv(i)?i.match(r):i(r);function sn(...i){return r=>i.some(c=>Fp(c,r))}function li(...i){return r=>i.every(c=>Fp(c,r))}function Ku(i,r){if(!i||!i.meta)return!1;const c=typeof i.meta.requestId=="string",s=r.indexOf(i.meta.requestStatus)>-1;return c&&s}function pi(i){return typeof i[0]=="function"&&"pending"in i[0]&&"fulfilled"in i[0]&&"rejected"in i[0]}function Wo(...i){return i.length===0?r=>Ku(r,["pending"]):pi(i)?sn(...i.map(r=>r.pending)):Wo()(i[0])}function Wa(...i){return i.length===0?r=>Ku(r,["rejected"]):pi(i)?sn(...i.map(r=>r.rejected)):Wa()(i[0])}function Ju(...i){const r=c=>c&&c.meta&&c.meta.rejectedWithValue;return i.length===0?li(Wa(...i),r):pi(i)?li(Wa(...i),r):Ju()(i[0])}function Bn(...i){return i.length===0?r=>Ku(r,["fulfilled"]):pi(i)?sn(...i.map(r=>r.fulfilled)):Bn()(i[0])}function qo(...i){return i.length===0?r=>Ku(r,["pending","fulfilled","rejected"]):pi(i)?sn(...i.flatMap(r=>[r.pending,r.rejected,r.fulfilled])):qo()(i[0])}var Wv="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Iu=(i=21)=>{let r="",c=i;for(;c--;)r+=Wv[Math.random()*64|0];return r},Fv=["name","message","stack","code"],_o=class{constructor(i,r){this.payload=i,this.meta=r}_type},gp=class{constructor(i,r){this.payload=i,this.meta=r}_type},$v=i=>{if(typeof i=="object"&&i!==null){const r={};for(const c of Fv)typeof i[c]=="string"&&(r[c]=i[c]);return r}return{message:String(i)}},vp="External signal was aborted",jo=(()=>{function i(r,c,s){const d=Bt(r+"/fulfilled",(y,p,S,T)=>({payload:y,meta:{...T||{},arg:S,requestId:p,requestStatus:"fulfilled"}})),h=Bt(r+"/pending",(y,p,S)=>({payload:void 0,meta:{...S||{},arg:p,requestId:y,requestStatus:"pending"}})),g=Bt(r+"/rejected",(y,p,S,T,E)=>({payload:T,error:(s&&s.serializeError||$v)(y||"Rejected"),meta:{...E||{},arg:S,requestId:p,rejectedWithValue:!!T,requestStatus:"rejected",aborted:y?.name==="AbortError",condition:y?.name==="ConditionError"}}));function w(y,{signal:p}={}){return(S,T,E)=>{const j=s?.idGenerator?s.idGenerator(y):Iu(),H=new AbortController;let Y,C;function z(b){C=b,H.abort()}p&&(p.aborted?z(vp):p.addEventListener("abort",()=>z(vp),{once:!0}));const Q=(async function(){let b;try{let R=s?.condition?.(y,{getState:T,extra:E});if(e0(R)&&(R=await R),R===!1||H.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const J=new Promise((G,W)=>{Y=()=>{W({name:"AbortError",message:C||"Aborted"})},H.signal.addEventListener("abort",Y)});S(h(j,y,s?.getPendingMeta?.({requestId:j,arg:y},{getState:T,extra:E}))),b=await Promise.race([J,Promise.resolve(c(y,{dispatch:S,getState:T,extra:E,requestId:j,signal:H.signal,abort:z,rejectWithValue:(G,W)=>new _o(G,W),fulfillWithValue:(G,W)=>new gp(G,W)})).then(G=>{if(G instanceof _o)throw G;return G instanceof gp?d(G.payload,j,y,G.meta):d(G,j,y)})])}catch(R){b=R instanceof _o?g(null,j,y,R.payload,R.meta):g(R,j,y)}finally{Y&&H.signal.removeEventListener("abort",Y)}return s&&!s.dispatchConditionRejection&&g.match(b)&&b.meta.condition||S(b),b})();return Object.assign(Q,{abort:z,requestId:j,arg:y,unwrap(){return Q.then(Pv)}})}}return Object.assign(w,{pending:h,rejected:g,fulfilled:d,settled:sn(g,d),typePrefix:r})}return i.withTypes=()=>i,i})();function Pv(i){if(i.meta&&i.meta.rejectedWithValue)throw i.payload;if(i.error)throw i.error;return i.payload}function e0(i){return i!==null&&typeof i=="object"&&typeof i.then=="function"}var $p=Symbol.for("rtk-slice-createasyncthunk"),t0={[$p]:jo};function n0(i,r){return`${i}/${r}`}function Pp({creators:i}={}){const r=i?.asyncThunk?.[$p];return function(s){const{name:d,reducerPath:h=d}=s;if(!d)throw new Error(zt(11));const g=(typeof s.reducers=="function"?s.reducers(l0()):s.reducers)||{},w=Object.keys(g),y={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},p={addCase(b,_){const R=typeof b=="string"?b:b.type;if(!R)throw new Error(zt(12));if(R in y.sliceCaseReducersByType)throw new Error(zt(13));return y.sliceCaseReducersByType[R]=_,p},addMatcher(b,_){return y.sliceMatchers.push({matcher:b,reducer:_}),p},exposeAction(b,_){return y.actionCreators[b]=_,p},exposeCaseReducer(b,_){return y.sliceCaseReducersByName[b]=_,p}};w.forEach(b=>{const _=g[b],R={reducerName:b,type:n0(d,b),createNotation:typeof s.reducers=="function"};u0(_)?s0(R,_,p,r):i0(R,_,p)});function S(){const[b={},_=[],R=void 0]=typeof s.extraReducers=="function"?Wp(s.extraReducers):[s.extraReducers],J={...b,...y.sliceCaseReducersByType};return Iv(s.initialState,G=>{for(let W in J)G.addCase(W,J[W]);for(let W of y.sliceMatchers)G.addMatcher(W.matcher,W.reducer);for(let W of _)G.addMatcher(W.matcher,W.reducer);R&&G.addDefaultCase(R)})}const T=b=>b,E=new Map,j=new WeakMap;let H;function Y(b,_){return H||(H=S()),H(b,_)}function C(){return H||(H=S()),H.getInitialState()}function z(b,_=!1){function R(G){let W=G[b];return typeof W>"u"&&_&&(W=ni(j,R,C)),W}function J(G=T){const W=ni(E,_,()=>new WeakMap);return ni(W,G,()=>{const $={};for(const[Z,N]of Object.entries(s.selectors??{}))$[Z]=a0(N,G,()=>ni(j,G,C),_);return $})}return{reducerPath:b,getSelectors:J,get selectors(){return J(R)},selectSlice:R}}const Q={name:d,reducer:Y,actions:y.actionCreators,caseReducers:y.sliceCaseReducersByName,getInitialState:C,...z(h),injectInto(b,{reducerPath:_,...R}={}){const J=_??h;return b.inject({reducerPath:J,reducer:Y},R),{...Q,...z(J,!0)}}};return Q}}function a0(i,r,c,s){function d(h,...g){let w=r(h);return typeof w>"u"&&s&&(w=c()),i(w,...g)}return d.unwrapped=i,d}var Za=Pp();function l0(){function i(r,c){return{_reducerDefinitionType:"asyncThunk",payloadCreator:r,...c}}return i.withTypes=()=>i,{reducer(r){return Object.assign({[r.name](...c){return r(...c)}}[r.name],{_reducerDefinitionType:"reducer"})},preparedReducer(r,c){return{_reducerDefinitionType:"reducerWithPrepare",prepare:r,reducer:c}},asyncThunk:i}}function i0({type:i,reducerName:r,createNotation:c},s,d){let h,g;if("reducer"in s){if(c&&!r0(s))throw new Error(zt(17));h=s.reducer,g=s.prepare}else h=s;d.addCase(i,h).exposeCaseReducer(r,h).exposeAction(r,g?Bt(i,g):Bt(i))}function u0(i){return i._reducerDefinitionType==="asyncThunk"}function r0(i){return i._reducerDefinitionType==="reducerWithPrepare"}function s0({type:i,reducerName:r},c,s,d){if(!d)throw new Error(zt(18));const{payloadCreator:h,fulfilled:g,pending:w,rejected:y,settled:p,options:S}=c,T=d(i,h,S);s.exposeAction(r,T),g&&s.addCase(T.fulfilled,g),w&&s.addCase(T.pending,w),y&&s.addCase(T.rejected,y),p&&s.addMatcher(T.settled,p),s.exposeCaseReducer(r,{fulfilled:g||Cu,pending:w||Cu,rejected:y||Cu,settled:p||Cu})}function Cu(){}var o0=i=>"reducerPath"in i&&typeof i.reducerPath=="string",c0=i=>i.flatMap(r=>o0(r)?[[r.reducerPath,r.reducer]]:Object.entries(r)),Fo=Symbol.for("rtk-state-proxy-original"),f0=i=>!!i&&!!i[Fo],d0=new WeakMap,h0=(i,r,c)=>ni(d0,i,()=>new Proxy(i,{get:(s,d,h)=>{if(d===Fo)return s;const g=Reflect.get(s,d,h);if(typeof g>"u"){const w=c[d];if(typeof w<"u")return w;const y=r[d];if(y){const p=y(void 0,{type:Iu()});if(typeof p>"u")throw new Error(zt(24));return c[d]=p,p}}return g}})),p0=i=>{if(!f0(i))throw new Error(zt(25));return i[Fo]},y0={},m0=(i=y0)=>i;function g0(...i){const r=Object.fromEntries(c0(i)),c=()=>Object.keys(r).length?Zo(r):m0;let s=c();function d(y,p){return s(y,p)}d.withLazyLoadedSlices=()=>d;const h={},g=(y,p={})=>{const{reducerPath:S,reducer:T}=y,E=r[S];return!p.overrideExisting&&E&&E!==T||(p.overrideExisting&&E!==T&&delete h[S],r[S]=T,s=c()),d},w=Object.assign(function(p,S){return function(E,...j){return p(h0(S?S(E,...j):E,r,h),...j)}},{original:p0});return Object.assign(d,{inject:g,selector:w})}function zt(i){return`Minified Redux Toolkit error #${i}; visit https://redux-toolkit.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `}const ey=Pp({creators:{asyncThunk:t0}}),Ho={"nl-NL":"Dutch (Netherlands)","en-US":"English (USA)","fr-FR":"French (France)","de-DE":"German (Germany)","it-IT":"Italian (Italy)","pt-BR":"Portuguese (Brazil)","es-ES":"Spanish (Spain)"},v0=()=>{const i=localStorage.getItem("teleprompter-language");return i||(Ho.hasOwnProperty(navigator.language)?navigator.language:"en-US")},xu=(i,r)=>{const c=localStorage.getItem(i);if(c===null)return r;const s=parseInt(c,10);return Number.isFinite(s)?s:r},bp=(i,r)=>{const c=localStorage.getItem(i);return c===null?r:c==="true"},b0={status:"stopped",horizontallyFlipped:bp("teleprompter-flip-h",!1),verticallyFlipped:bp("teleprompter-flip-v",!1),fontSize:xu("teleprompter-font-size",90),margin:xu("teleprompter-margin",240),opacity:xu("teleprompter-opacity",100),scrollOffset:xu("teleprompter-scroll-offset",400),language:v0()},$o=ey({name:"navbar",initialState:b0,reducers:i=>({toggleEdit:i.reducer(r=>{r.status==="editing"?r.status="stopped":r.status="editing"}),start:i.reducer(r=>{r.status="started"}),stop:i.reducer(r=>{r.status="stopped"}),flipHorizontally:i.reducer(r=>{r.horizontallyFlipped=!r.horizontallyFlipped,localStorage.setItem("teleprompter-flip-h",String(r.horizontallyFlipped))}),flipVertically:i.reducer(r=>{r.verticallyFlipped=!r.verticallyFlipped,localStorage.setItem("teleprompter-flip-v",String(r.verticallyFlipped))}),setFontSize:i.reducer((r,c)=>{r.fontSize=c.payload,localStorage.setItem("teleprompter-font-size",String(c.payload))}),setMargin:i.reducer((r,c)=>{r.margin=c.payload,localStorage.setItem("teleprompter-margin",String(c.payload))}),setOpacity:i.reducer((r,c)=>{r.opacity=c.payload,localStorage.setItem("teleprompter-opacity",String(c.payload))}),setScrollOffset:i.reducer((r,c)=>{r.scrollOffset=c.payload,localStorage.setItem("teleprompter-scroll-offset",String(c.payload))}),setLanguage:i.reducer((r,c)=>{r.language=c.payload,localStorage.setItem("teleprompter-language",c.payload)})}),selectors:{selectStatus:i=>i.status,selectFontSize:i=>i.fontSize,selectMargin:i=>i.margin,selectHorizontallyFlipped:i=>i.horizontallyFlipped,selectVerticallyFlipped:i=>i.verticallyFlipped,selectOpacity:i=>i.opacity,selectScrollOffset:i=>i.scrollOffset,selectLanguage:i=>i.language}}),{toggleEdit:ty,start:S0,stop:T0,flipHorizontally:Bb,flipVertically:qb,setFontSize:A0,setMargin:w0,setOpacity:E0,setScrollOffset:_0,setLanguage:O0}=$o.actions,{selectStatus:ny,selectFontSize:ay,selectMargin:ly,selectHorizontallyFlipped:R0,selectVerticallyFlipped:D0,selectOpacity:iy,selectScrollOffset:uy,selectLanguage:M0}=$o.selectors,ku=i=>{const r=[];if(i===null)return r;let c=null,s=0;for(;s<i.length;){let d=i[s],h;if(d==="["){const g=i.substring(s).indexOf("]");d=g>0?i.substring(s,s+g+1):d.substring(s),h=!1}else h=/[A-Za-zÀ-ÿА-Яа-я0-9_]/.test(d);if(c===null)c={type:h?"TOKEN":"DELIMITER",value:d,index:0};else if(c.type==="TOKEN"&&h||c.type==="DELIMITER"&&!h)c.value+=d;else if(c.type==="TOKEN"&&!h||c.type==="DELIMITER"&&h){let g=c.index;r.push(c),c={type:h?"TOKEN":"DELIMITER",value:d,index:g+1}}s+=d.length}return c!==null&&r.push(c),r},Sp=`[LOOK AT LENS]

This is Snap CD, an open-source deployment orchestrator that manages the dependencies between your Terraform and OpenTofu state files.

[pause — let the name land]

If you've run Terraform at any real scale, you know this pattern. You start with one state file. It works great. Then it grows. And grows.

[now go off script and say anything — the scroll should keep following you]

The tooling that made this easy at the start is what makes it hard now.

[end of test — press Escape to stop, or the Edit button to paste your own script]`,z0={rawText:Sp,textElements:ku(Sp),finalTranscriptIndex:-1,interimTranscriptIndex:-1},Po=ey({name:"content",initialState:z0,reducers:i=>({setContent:i.reducer((r,c)=>{r.rawText=c.payload,r.textElements=ku(c.payload),r.finalTranscriptIndex=-1,r.interimTranscriptIndex=-1}),setFinalTranscriptIndex:i.reducer((r,c)=>{r.finalTranscriptIndex=c.payload}),setInterimTranscriptIndex:i.reducer((r,c)=>{r.interimTranscriptIndex=c.payload}),resetTranscriptionIndices:i.reducer(r=>{r.finalTranscriptIndex=-1,r.interimTranscriptIndex=-1})}),extraReducers:i=>i.addCase(ty,r=>{r.textElements=ku(r.rawText)}),selectors:{selectRawText:i=>i.rawText,selectTextElements:i=>i.textElements,selectFinalTranscriptIndex:i=>i.finalTranscriptIndex,selectInterimTranscriptIndex:i=>i.interimTranscriptIndex}}),{setContent:ry,setFinalTranscriptIndex:Ka,setInterimTranscriptIndex:Ja,resetTranscriptionIndices:N0}=Po.actions,{selectRawText:C0,selectTextElements:x0,selectFinalTranscriptIndex:U0,selectInterimTranscriptIndex:B0}=Po.selectors;class q0{recognizer;subscribers=[];shouldListen=!1;constructor(r="en-US"){this.recognizer=new webkitSpeechRecognition,this.recognizer.lang=r,this.recognizer.continuous=!0,this.recognizer.interimResults=!0,this.recognizer.onresult=c=>{let s="",d="";for(let h=c.resultIndex;h<c.results.length;++h){const g=c.results[h],w=g[0].transcript;g.isFinal?s+=w:d+=w}for(let h of this.subscribers)h(s,d)},this.recognizer.onend=()=>{this.shouldListen&&this.recognizer.start()}}start(){this.shouldListen=!0,this.recognizer.start()}stop(){this.shouldListen=!1,this.recognizer.stop()}onresult(r){this.subscribers.push(r)}setLanguage(r){const c=this.shouldListen;c&&this.stop(),this.recognizer.lang=r,c&&this.start()}}const j0=(function(){function i(r,c,s,d,h){return r<c||s<c?r>s?s+1:r+1:d===h?c:c+1}return function(r,c){if(r===c)return 0;if(r.length>c.length){let R=r;r=c,c=R}let s=r.length,d=c.length;for(;s>0&&r.charCodeAt(s-1)===c.charCodeAt(d-1);)s--,d--;let h=0;for(;h<s&&r.charCodeAt(h)===c.charCodeAt(h);)h++;if(s-=h,d-=h,s===0||d<3)return d;let g=0,w,y,p,S,T,E=0,j,H,Y,C,z,Q,b=[];for(w=0;w<s;w++)b.push(w+1),b.push(r.charCodeAt(h+w));let _=b.length-1;for(;g<d-3;)for(Y=c.charCodeAt(h+(y=g)),C=c.charCodeAt(h+(p=g+1)),z=c.charCodeAt(h+(S=g+2)),Q=c.charCodeAt(h+(T=g+3)),E=g+=4,w=0;w<_;w+=2)j=b[w],H=b[w+1],y=i(j,y,p,Y,H),p=i(y,p,S,C,H),S=i(p,S,T,z,H),E=i(S,T,E,Q,H),b[w]=E,T=S,S=p,p=y,y=j;for(;g<d;)for(Y=c.charCodeAt(h+(y=g)),E=++g,w=0;w<_;w+=2)j=b[w],b[w]=E=i(j,y,E,Y,b[w+1]),y=j;return E}})(),Tp=(i,r,c)=>{const s=ku(i).filter(S=>S.type==="TOKEN"),d=s.reduce((S,T)=>S+" "+T.value,"").replace(/\s+/," ").trim();c<0&&(c=0);const h=r.slice(c,c+s.length*2+10).filter(S=>S.type==="TOKEN"),g=[];let w=0;for(;++w<=h.length;){const S=h.slice(0,w).reduce((T,E)=>T+" "+E.value,"").replace(/\s+/," ").trim();g.push(j0(d,S))}const y=g.indexOf(Math.min(...g)),p=h[y];return p?p.index:c};let xn=null;const sy=()=>(i,r)=>{i(S0());const{language:c}=r().navbar;xn=new q0(c),xn.onresult((s,d)=>{const{textElements:h,finalTranscriptIndex:g,interimTranscriptIndex:w}=r().content;if(s!==""){const y=Tp(s,h,g);i(Ka(y))}if(d!==""){const y=Tp(d,h,g);i(Ja(y))}}),xn.start()},Qo=()=>i=>{xn!==null&&(xn.stop(),xn=null),i(T0())},H0=i=>r=>{xn!==null&&xn.setLanguage(i)},Q0=`# Ep. 00 — Voiceover script

**Plan:** [\`plan.md\`](./plan.md) · **Source:** \`snapcd-docs/content/quickstart/self-hosted/\`

**557 words · ~4:13** at a 135 wpm speaking pace — a
walkthrough runs slower than an argument.

> Budgets are measured from the script below, not estimated. The cut in \`Ep00.tsx\` is a
> timing skeleton; \`BEATS\` gets re-timed to your actual recording.

## Beat budgets

| # | Beat | Camera | Re-time to | Frames | Words |
|---|---|---|---|---|---|
| 1 | Intro (silent) | — (card) | 3s | 90 | — (silent) |
| 2 | Hook | **full frame** | 10s | 300 | 22 |
| 3 | Prerequisites | voice only | 12s | 360 | 26 |
| 4 | Clone | bubble | 11s | 330 | 24 |
| 5 | Compose up | bubble | 30s | 900 | 67 |
| 6 | What started | voice only | 33s | 990 | 75 |
| 7 | First login | bubble | 16s | 480 | 35 |
| 8 | The basics | voice only | 29s | 870 | 65 |
| 9 | Deploy the sample | bubble | 27s | 810 | 61 |
| 10 | A job runs | bubble | 26s | 780 | 58 |
| 11 | The graph | bubble | 17s | 510 | 38 |
| 12 | Secure it | voice only | 20s | 600 | 44 |
| 13 | Next | **full frame** | 12s | 360 | 27 |
| 14 | Outro | — (card) | 7s | 210 | 15 |
| | | | **4:13** | **7590** | **557** |

## How to record

- OBS "SnapCD Webcam+Voice" profile — webcam and mic in one file, 48 kHz.
- Record the whole thing on camera even though only beats 2 and 13 are seen full-frame.
- \`/\` marks a breath. **Bold** marks the stressed word.
- This one is a walkthrough, not an argument. Warmer, slower, less rhetorical than Ep. 01.

---

## 1 — Intro (silent)

---

## 2 — Hook  ·  *10s*  ·  **ON CAMERA, full frame**

> Snap CD, running on your machine, / in about five minutes. / One command, / nothing to
> sign up for, / no cloud account. / Let's go.

---

## 3 — Prerequisites  ·  *12s*

> You need **Docker**. / That's the whole list.
>
> Everything else — / the server, a runner, an agent, / the database, / the cache — / comes
> up in containers.

---

## 4 — Clone  ·  *11s*

> Start by cloning the deployment repo. / It's a handful of Compose files: / one per
> component, / plus a top-level one that brings up the lot.

---

## 5 — Compose up  ·  *30s*

> And then / that's it. / \`docker compose up -d\`.
>
> That's starting **three** Snap CD components. / The **Server** — / the control plane, /
> the dashboard, the API. / A **Runner** — / the thing that actually executes Terraform. /
> And an **Agent**, / for the AI missions.
>
> Plus SQL Server and Redis behind them.
>
> Give it a minute. / You can tail the server logs / if you want to watch it come up.

---

## 6 — What started  ·  *33s*

> Worth knowing what you just started, / because these three are the whole architecture.
>
> The **Server** coordinates. / It holds your module definitions and your job history, / and
> it never runs Terraform itself.
>
> The **Runner** does. / It connects back to the server / and executes the real commands.
>
> The **Agent** handles the AI side — / diagnosing failures, summarising jobs.
>
> In this deployment / all three are on your laptop. / In production / you'd put the runners
> wherever your credentials live.

---

## 7 — First login  ·  *16s*

> The dashboard is on **localhost, port 5000**. /
>
> Log in with the pre-configured account, / and there it is. / Completely empty — / no
> stacks, no modules, nothing. / That's expected. / We haven't told it about anything yet.

---

## 8 — The basics  ·  *29s*

> Before we do, / three words worth knowing.
>
> A **Module** is one Terraform deployment. / Its own code, / its own state file, / its own
> lifecycle. / It's the unit of everything here.
>
> A **Namespace** groups related modules. / Networking. / Data. / Applications. / Usually one
> team's worth.
>
> And a **Stack** is a hard boundary. / Prod. / Dev. / Staging. / Things in different stacks /
> don't touch each other.
>
> Stack, / namespace, / module. / That's the hierarchy.

---

## 9 — Deploy the sample  ·  *27s*

> Rather than build something from scratch, / there's a sample project / that sets up a
> realistic little stack for you.
>
> Clone it, / \`terraform init\`, / \`terraform apply\`.
>
> And notice what's happening here: / you're configuring Snap CD **with Terraform**. / The
> stack, the namespace, the modules, / the wiring between them — / all of it is HCL, / same
> as the infrastructure it deploys.

---

## 10 — A job runs  ·  *26s*

> Go back to the dashboard / and it's no longer empty.
>
> Snap CD has picked up the modules, / worked out what depends on what, / and started
> deploying them / in the right order.
>
> Click into a job / and you get the live log — / streamed straight off the runner as
> Terraform runs. / Same output you'd see in your own terminal.

---

## 11 — The graph  ·  *17s*

> And this is the bit worth pausing on.
>
> Nobody drew this graph. / Snap CD worked it out / from the fact that one module consumes
> another module's outputs. / That's the whole idea, / and there's a whole episode on it.

---

## 12 — Secure it  ·  *20s*

> One thing before you trust this with anything real.
>
> The deployment ships with **pre-configured keys and credentials** / so it works out of the
> box. / Swap them for your own / before you point it at production. / The docs say it
> louder than I just did.

---

## 13 — Next  ·  *12s*  ·  **ON CAMERA, full frame**

> That's it. / Running locally, / sample deployed, / a job you watched execute.
>
> If you want the *why* — / why any of this exists — / that's the next episode.

---

## 14 — Outro  ·  *7s*

> Everything's at **docs.snapcd.io**, / including a cloud quickstart / if you'd rather not
> host it yourself.

---

## Notes

- **Port 5000**, not 20002. The Docker deployment is 5000; 20002 is the C# project. People
  will type what you say.
- Beat 8 is descriptive, not persuasive — the viewer is here to *install* it. The argument
  is Ep. 01's job.
- Beat 12 isn't optional. A quickstart that skips it teaches people to ship the defaults.
- Beat 11 is the only place this episode gestures at the bigger idea. One sentence, then
  move — resist re-making Ep. 01.
- The sample is \`snapcd-samples/sample-deployment\` (small, 4 modules), not the 35-module
  \`sample-modules\` fixture.
`,Y0=`# Ep. 01 — Voiceover script

**Plan:** [\`plan.md\`](./plan.md) · **Article:** \`why-snapcd/introducing-snapcd.md\`

## How to record

- OBS "SnapCD Webcam+Voice" profile — webcam and mic in one file, 48 kHz.
- **Narrate while watching the rough cut** so your pacing tracks the visuals.
- One beat per take is fine. Takes are cheap; I stitch them.
- \`/\` marks a breath. **Bold** marks the word that carries the sentence.
- Don't perform it. This is you explaining a thing you built to someone who'd get it.

**Record the whole thing on camera**, even the voice-only beats — it's one continuous
take, and it costs nothing to have the video. I use the picture on beats 2 and 8b, take
just the audio for the rest, and can reach for the footage later if a beat wants a face.

The two beats that will actually be seen full-frame are **2** and **8b**. Those are worth
the lighting and framing effort (\`INIT_PLAN.md\` Phase 1) — the rest is audio.

## Beat budgets

Word counts are measured from the script below; \`Re-time to\` is that count at 140 wpm.
These are the values \`BEATS\` in \`Ep01.tsx\` becomes once you've narrated — but the
recording is the source of truth, so I'll set them from your actual takes, not from this
table.

| #  | Beat          | Camera         | Re-time to | Frames    | Words      |
|----|---------------|----------------|------------|-----------|------------|
| 1  | Intro         | —              | 3s         | 90        | — (silent) |
| 2  | Thesis        | **full frame** | 7s         | 210       | 15         |
| 3a | Growth        | voice only     | 21s        | 630       | 48         |
| 3b | Contention    | voice only     | 11s        | 330       | 26         |
| 3c | Stall         | voice only     | 13s        | 390       | 30         |
| 3d | Blast radius  | voice only     | 18s        | 540       | 41         |
| 4  | Split         | voice only     | 24s        | 720       | 55         |
| 5  | Broken        | voice only     | 104s       | 3120      | 243        |
| 6  | Across states | voice only     | 10s        | 300       | 23         |
| 7  | Seven wants   | voice only     | 75s        | 2250      | 174        |
| 8a | Verdict       | voice only     | 4s         | 120       | 10         |
| 8b | So I built it | **full frame** | 25s        | 750       | 59         |
| 9  | Architecture  | voice only     | 54s        | 1620      | 127        |
| 10 | Resolved      | voice only     | 16s        | 480       | 37         |
| 11 | **HCL**       | bubble         | 24s        | 720       | 56         |
| 12 | **Graph**     | bubble         | 21s        | 630       | 48         |
| 13 | **Cascade**   | bubble         | 25s        | 750       | 59         |
| 14 | Job           | bubble         | 11s        | 330       | 25         |
| 15 | Outro         | — (card)       | 13s        | 390       | 31         |
|    |               |                | **7:59**   | **14370** | **1107**   |

**Beats 11–14 are the product section** — four clips, and they need footage with headroom.
Record each ~40s and I'll trim to the narration; the article's own raw captures were 45s
and 73s for the same flows, so don't try to hit the budget in-camera.

---

## 1 — Intro (silent)

Let the card play. No narration.

---

## 2 — Thesis  ·  *7s*  ·  **ON CAMERA, full frame**

> This is **Snap CD**, / an open-source deployment orchestrator / that manages
> the dependencies / **between your state files**.

*One sentence, name first. Land "Snap CD" and take the comma as a real pause — the name
and the claim compete otherwise, and "between your state files" is the half that has to
survive. "Orchestrator" means nothing to the viewer yet; don't lean on it, it's just the
bridge to the clause that follows. Nothing here argues for the claim. Beat 3 does that.*

---

## 3 — Monolith  ·  *63s*  ·  four movements

*One resource list, four things going wrong on it. The visual holds across all four —
the argument is that a single thing became unmanageable, not that four separate things
broke.*

**3a — Growth** *(21s)*

> If you've run Terraform or OpenTofu at any real scale, / you know this pattern.
>
> You start with one state file. It works great. / Then it grows. / And grows. / Maybe the
> company grows too, / you need more and more infrastructure / and have multiple teams responsible for it.
>
> The tooling that made this easy at the start / is what is making it hard now.

*The resource count and the plan time climb together on screen, and the timer goes red on
its own. Don't narrate either — the graphic already says "this got slow", so the words are
free to say why that matters. The last line is the turn: nothing was done wrong, the tool
just stopped fitting. Say it flatly.*

**3b — Contention** *(11s)*

> A single change refreshes hundreds of resources. / You've got three concerns, / but one
> state file. / So the networking team's DNS change / blocks the application team's
> deployment.

*The three team labels appear down the left — networking, platform, application — then
networking takes the lock and the other two grey out. Land "blocks" as the lock drops.
These are the same three the split lands on at beat 4, so the viewer has been looking at
the boundary for 40 seconds before you draw it.*

**3c — Stall** *(13s)*

> All you want to do / is add a tag to a storage account. / But the plan won't run
> through, / because one fringe resource has stale credentials / and the refresh fails.

*The refresh sweeps down the list and dies on \`azurerm_role_assignment.legacy_batch\` — a
resource you've never touched and don't own. Your \`+ tags\` is on the row directly above
it, never reached. Pause after "fails" and let the dead list sit.*

**3d — Blast radius** *(18s)*

> Or the refresh *does* run through — / and it comes back with a dozen changes / you knew
> nothing about. / Things that drifted. / Console edits by other teams, / stuff that
> changed months ago. / And your plan / is going to put it **all** back.

*The screen rewinds — "same change, the other way" — and takes the other branch. Hit
"**or**" hard: this isn't what happens next, it's the other way the same afternoon goes.
The plan lands as eleven changes that aren't yours, with your one tag lost in them —
those eleven are the drift, and the \`~\` marks are Terraform proposing to revert it.
Land "**all**" as the plan summary appears; that's the threat, not the count. This is the
note beat 3 ends on, and beat 4's "break it up" is the answer to it.*

---

## 4 — Split  ·  *24s*

> So the answer everyone arrives at / is the same one. / **Break it up.**
>
> Split the monolith into smaller, focused state files. / Networking in one. / The
> platform in another — / your clusters, / your registry, / the shared pieces everything
> runs on. / Application infrastructure in a third. / Different teams own different
> pieces.
>
> And that works. / It's the right call.

*The list is already on screen, colour-coded by team since beat 3b — the split is drawn
through it, not introduced fresh. Naming the cluster here is load-bearing: beat 5's
propagation example is about that cluster missing an availability zone, and it only lands
if the viewer already knows the platform state file is what builds it.*

---

## 5 — Broken  ·  *104s*

> But the moment you do it, / you inherit a new set of problems.
>
> The dependencies between those pieces / are **no longer enforced**, / and **no longer
> visible**.
>
> Your platform module needs the \`subnet_id\` from networking. / Your application module
> needs the cluster ID from platform. / So you start stitching. / \`terraform_remote_state\`
> data sources. / Wrapper scripts. / CI pipelines with the dependency chain hard-coded into
> them. /
>
> And then you just / **hope** / nobody deploys a networking change / that deletes
> something your platform is standing on.
>
> The other thing is that nothing propagates. / When networking adds a subnet / for a new
> availability zone, / nobody downstream finds out. / The platform state file / never
> re-runs. / So your cluster keeps running / in two zones / instead of three. / Somebody
> has to **know** / to re-run what consumed it, / in the right order. / That's not
> automation. / That's a runbook.

> Then there's who owns what. / You split it up precisely **so** / different teams could
> own different pieces. / But how do put RBAC in place that properly supports that goal?

> You might be tempted to use AI Agents / to solve this for you. But without proper
> guardrails / this would be the biggest mistake you could make!

*Five movements, and each one is a want being set up before you name it: wiring (1),
propagation (2), credentials (3), ownership (4), wrappers (5–6). Don't state the wants
here — beat 7 does that. Land each movement, take the breath, move on. If this drags in
the edit, the credentials movement is the one to cut; Ep. 04 owns that argument properly.*

*The propagation example is deliberately **additive** — a new subnet, not a changed one.
A changed subnet ID breaks downstream at runtime, and the viewer's answer is "the pager
would tell me", which is the opposite of the point. Adding a zone breaks nothing: the
cluster stays up, silently running in two zones instead of the three you paid for, and
there is no signal at all until it matters. Keep any replacement example in that shape —
config goes stale, nothing goes down. Say "zones" rather than "AZs" — this is Azure, and
the graphics say \`azurerm_\` throughout. Land "two zones / instead of three" flatly; the
understatement is what makes it land.*

*It runs networking → platform → cluster on purpose. That's the same chain as the
\`subnet_id\` / cluster ID stitching two paragraphs up, the same three state files beat 4
splits into, and the same \`network\` → \`cluster\` pair the screencast demonstrates at beat 11.
One example carried the length of the episode beats four unrelated ones.*

---

## 6 — Across states  ·  *10s*

> In short, the dependency graph that tools like Terraform handles **well** / *within* a single state /
> becomes your manual responsibility / deal with **across** states.

*Beat. This is the turn — let the card sit before moving on.*

---

## 7 — Seven wants  ·  *75s*

*Each want lands as you say it. Pace to the animation — roughly 11 seconds each.*

> So I wrote down what I actually wanted.
>
> **One.** / Break infrastructure into small, focused modules. / Each with its own state, /
> its own lifecycle, / its own blast radius. / And outputs from any module / automatically
> available as inputs to another.
>
> **Two.** / Changes propagate on their own. / When my VPC module produces a new subnet
> ID, / everything downstream re-plans / without me touching anything.
>
> **Three.** / Cloud credentials stay **out** of the control plane. / The orchestrator
> coordinates work. / It doesn't execute it. / Execution happens on runners I deploy, /
> in my own infrastructure.
>
> **Four.** / Granular access control. / Roles at every level — / stacks, namespaces,
> modules — / for people and for machines.
>
> **Five.** / Non-invasive. / No proprietary runtime. / Runners execute standard
> commands / in a normal shell. / If I want to SSH in and run \`plan\` myself, / I can.
>
> **Six.** / Everything as code. / A Terraform provider for the orchestrator itself, / so
> the whole configuration lives in version control.
>
> **Seven.** / Let AI agents participate — / safely. / Scoped permissions, / runner
> restrictions, / approval gates. / Because handing an agent unrestricted \`apply\` / is a
> recipe for an outage.

---

## 8a — Verdict  ·  *5s*  ·  on the list

> None of the existing tools / delivered on all of these.

*Stays on the seven — "all of these" needs its referent on screen.*

---

## 8b — So I built it  ·  *25s*  ·  **ON CAMERA, full frame**

> So I built it.
>
> **I'm Karl, by the way. / Twenty years of software engineering, / and this one tapped
> every bit of it.**
>
> About six months to lay down the bare bones, / then another eighteen / of iteration and
> testing / against genuinely serious production infrastructure. / I rewrote some of the
> core systems / more than once.
>
> Honestly? / Best project of my career.

*The article's most human passage, and the only place you talk about yourself. Don't rush
it, don't oversell it. The name card fades in under you — you don't need to spell your
name.*

---

## 9 — Architecture  ·  *54s*

> Snap CD has three components.
>
> The **Server** is the control plane. / Everything talks to it. / It hosts the dashboard,
> the API, and the hubs that runners and agents connect to. / It manages the resource
> catalog and job history, / handles authentication, / and orchestrates each deployment
> through its stages — / get source, / init, / plan, / approve, / apply, / capture
> outputs.
>
> What it does **not** do / is run Terraform. / It delegates that.
>
> The **Runner** is the self-hosted process that does the actual work. / It connects to the
> server over an authenticated WebSocket, / runs the real commands, / streams the logs
> back / and reports what happened.
>
> The **Agent** is the self-hosted process for AI. / It receives missions from the server /
> and hands the AI work to a sidecar.
>
> Server coordinates. / Runner executes. / Agent assists.

*Descriptive. The argument for the split is Ep. 04 — don't make the credentials case here.*

---

## 10 — Resolved  ·  *16s*

> Which brings us back to want number one.
>
> No \`terraform_remote_state\`. / No parameter store. / No CI glue. / You declare what a
> module produces / and what it consumes — / and the wiring / is the system's problem, /
> not yours.

---

## 11 — HCL  ·  *24s*  ·  bubble

*The declaration on screen. This is the beat the episode has been building to — the claim
in beat 10 is abstract until you see the actual resource.*

> Here's what that actually looks like.
>
> This is the \`cluster\` module. / It needs a subnet to deploy into. / And this / is the
> whole dependency.
>
> One resource. / The \`network\` module produces an output called \`aks_subnet_id\`. / The
> \`cluster\` module wants a variable called \`deploy_to_subnet_id\`. / I say which is which, /
> and that's it. /
>
> **That's the dependency declared.**

*Module names have to match what you actually record — \`network\` and \`cluster\`, Azure,
consistent with the \`networking\` and \`platform\` state files from beat 4. Don't record a
\`vpc\` module; the episode has spent six minutes on Azure by this point.*

---

## 12 — Graph  ·  *21s*  ·  bubble

> And this is what Snap CD does with it.
>
> It read that one resource / and worked out that \`cluster\` depends on \`network\`. / So
> \`network\` goes in stage one. / \`cluster\` in stage two. / Nothing here was drawn by hand —
> / **the graph is derived from the configuration itself.**

---

## 13 — Cascade  ·  *25s*  ·  bubble

> And once it knows the graph, / it can act on it.
>
> When \`network\` applies / and \`aks_subnet_id\` comes out different, / Snap CD knows exactly
> which modules consumed that value. / So they re-plan. / On their own. / And if their
> outputs change, / whatever depends on *them* re-plans too.
>
> That's want number two. / I'll come back to it properly / in the next episode.
let
---

## 14 — Job  ·  *11s*  ·  bubble

> And this is one of those deployments actually running. / Standard Terraform, / on a
> runner in my own infrastructure, / streaming its logs back / as it goes.

---

## 15 — Outro  ·  *13s*

> It's all source-available on GitHub. / There's a quickstart at **docs.snapcd.io** / that
> takes you end to end.
>
> Over the next few episodes / I'll take each of those seven / one at a time.

---

## Notes

- **Stay inside this article.** Beat 9 describes the Server; it does not argue that keeping
  credentials off it is a security win — that's \`runner-isolation.md\` → Ep. 04. Same for
  "plan → approve → apply" as a *lifecycle argument* → Ep. 03. Naming the stages in passing
  (as beat 9 does) is fine; building a case on them is not.
- Beat 8's "best project of my career" is the only place you talk about yourself. It's the
  most human line in the article and it's worth keeping — but it dies if it sounds like
  marketing. Say it once, flatly, and move.
- Beat 7 is 100 seconds of list. It's the spine, but it's also where attention goes to die
  — keep the pace up and let the animation carry the structure. If it drags in the edit,
  cut the \`detail\` lines, not the wants.
- "Terraform and OpenTofu" on first mention (beat 2); "Terraform" thereafter is fine.
- Pronounce it "Snap C-D".
`,k0=`# Ep. 02 — Voiceover script

**Plan:** [\`plan.md\`](./plan.md) · **Article:** \`why-snapcd/modular-deployments.md\`

**495 words · ~3:35** at a 140 wpm speaking pace.

> Budgets are measured from the script below, not estimated. The cut in \`Ep02.tsx\` is a
> timing skeleton; \`BEATS\` gets re-timed to your actual recording.

## Beat budgets

| # | Beat | Camera | Re-time to | Frames | Words |
|---|---|---|---|---|---|
| 1 | Intro (silent) | — (card) | 3s | 90 | — (silent) |
| 2 | The setup | voice only | 15s | 450 | 36 |
| 3 | The alternatives | voice only | 28s | 840 | 66 |
| 4 | The hierarchy | **full frame** | 32s | 960 | 75 |
| 5 | What a module is | voice only | 15s | 450 | 34 |
| 6 | Inputs | voice only | 39s | 1170 | 91 |
| 7 | Inheritance | voice only | 18s | 540 | 42 |
| 8 | The cascade | voice only | 31s | 930 | 72 |
| 9 | In the product | bubble | 12s | 360 | 28 |
| 10 | The payoff | voice only | 15s | 450 | 34 |
| 11 | Outro | — (card) | 7s | 210 | 17 |
| | | | **3:35** | **6450** | **495** |

## How to record

- OBS "SnapCD Webcam+Voice" profile — webcam and mic in one file, 48 kHz.
- \`/\` marks a breath. **Bold** marks the stressed word.
- Ep. 01 was the pitch. This is the first real explainer — you're teaching a model, not
  making a case. Slower, more concrete, fewer rhetorical turns.

---

## 1 — Intro (silent)

---

## 2 — The setup  ·  *15s*

> Last episode: / you split the monolith, / and the dependencies between the pieces / became
> your problem.
>
> So let's fix that properly. / Your compute module needs the \`vpc_id\` / that your networking
> module produces. / How does it get it?

---

## 3 — The alternatives  ·  *28s*

> There are four answers people reach for, / and they all half-work.
>
> \`terraform_remote_state\` / couples you to the other module's backend. / A parameter store
> means writing and reading by hand, / with nothing checking you did. / Wrapper scripts, /
> and now ordering lives in bash. / Terragrunt / does ordering well / but doesn't detect that
> an upstream *changed*.
>
> Every one of them / leaves a gap in change detection, / ordering, / or visibility.

---

## 4 — The hierarchy  ·  *32s*  ·  **ON CAMERA, full frame**

> Snap CD organises infrastructure in three levels.
>
> A **Stack** is a hard boundary. / Production. / Staging. / An environment, usually. /
> Nothing in one stack touches another.
>
> A **Namespace** groups related modules inside it. / Networking. / Data platform. /
> Frontend. / Usually one team's worth of things.
>
> And a **Module** is one Terraform root. / One deployment. / This is the unit that
> matters — / everything else is organisation.
>
> Permissions, / secrets, / and default inputs / can be set at any level / and inherit
> downward.

---

## 5 — What a module is  ·  *15s*

> So a module is: / a Git repo, / at a revision, / with its own state file, / its own runner,
> / and its own lifecycle.
>
> Independent. / That's the point. / Its blast radius stops at its own edges.

---

## 6 — Inputs  ·  *39s*

> Modules get their values through **inputs**, / and there are four kinds.
>
> **From another module's output.** / This is the important one. / Networking produces
> \`vpc_id\`; / compute declares that it consumes it. / That single declaration / is the
> dependency.
>
> **From a literal** — / a static value. / A region, / a replica count.
>
> **From a secret** — / stored encrypted in Snap CD, / injected at runtime, / never in your
> state file.
>
> And **from a definition** — / Snap CD's own metadata. / The module's name, / its stack, /
> its revision. / Useful for tagging things with where they came from.

---

## 7 — Inheritance  ·  *18s*

> And you don't repeat yourself.
>
> If every module in a namespace needs the same subscription ID, / set it once / at the
> namespace. / Every module gets it by default. / Any one of them can override it.
>
> Same for secrets. / Same for approval policy.

---

## 8 — The cascade  ·  *31s*

> Here's what that buys you.
>
> Networking applies, / and \`vpc_id\` comes out different. / Snap CD knows exactly which
> modules consumed that value, / so **compute** and **database** re-plan. / On their own. /
> In parallel — / they don't depend on each other.
>
> Compute's outputs change too, / so **application** re-plans after it.
>
> But watch this: / if compute's outputs come back **unchanged**, / application is skipped
> entirely. / It doesn't re-plan everything every time. / It re-plans what actually changed.

---

## 9 — In the product  ·  *12s*  ·  bubble

> And this is it running. / The stages are computed, not configured. / Nothing in the
> repository says "networking first" — / that fell out of one module consuming another's
> output.

---

## 10 — The payoff  ·  *15s*

> No \`terraform_remote_state\`. / No parameter store. / No wrapper scripts. / No CI pipeline
> with the order hard-coded into it.
>
> You declare what a module produces / and what it consumes. / The graph is the system's
> problem.

---

## 11 — Outro  ·  *7s*

> There's a lot more in the article — / input kinds, / namespace inheritance, / the full
> comparison. / **docs.snapcd.io**.

---

## Notes

- **Stay inside this article.** The credential story is Ep. 04, the trigger model is
  Ep. 03. This episode owns the *hierarchy* and the *input system* — that's it.
- Beat 6 is the episode. If you cut anything, cut beat 3 or 7, never 6.
- Show real HCL on screen for beat 6 — \`snapcd_module_input_from_output\` with
  \`output_name\`/\`name\` visible. That resource *is* the concept, and it's the one place
  code beats a diagram.
- The cascade example (\`networking → compute/database → application\`) is the article's,
  verbatim. Ep. 03 uses the same topology — same component, deliberately.
- Beat 8's "skipped entirely" is the answer to the obvious objection ("so it re-plans
  everything constantly?"). Don't drop it.
`,L0=`# Ep. 03 — Voiceover script

**Plan:** [\`plan.md\`](./plan.md) · **Article:** \`why-snapcd/event-driven-cd.md\`

**508 words · ~3:52** at a 140 wpm speaking pace.

> Budgets are measured from the script below, not estimated. The cut in \`Ep03.tsx\` is a
> timing skeleton; \`BEATS\` gets re-timed to your actual recording.

## Beat budgets

| # | Beat | Camera | Re-time to | Frames | Words |
|---|---|---|---|---|---|
| 1 | Intro (silent) | — (card) | 3s | 90 | — (silent) |
| 2 | The manual era | voice only | 24s | 720 | 56 |
| 3 | CI pipelines | voice only | 37s | 1110 | 86 |
| 4 | GitOps operators | voice only | 25s | 750 | 58 |
| 5 | The realisation | **full frame** | 12s | 360 | 27 |
| 6 | Three triggers | voice only | 34s | 1020 | 79 |
| 7 | The cascade | voice only | 18s | 540 | 42 |
| 8 | Approval gates | voice only | 26s | 780 | 60 |
| 9 | Events out | voice only | 11s | 330 | 26 |
| 10 | A job running | bubble | 14s | 420 | 18 |
| 11 | When you don't need this | voice only | 20s | 600 | 46 |
| 12 | Outro | — (card) | 8s | 240 | 10 |
| | | | **3:52** | **6960** | **508** |

## How to record

- OBS "SnapCD Webcam+Voice" profile — webcam and mic in one file, 48 kHz.
- \`/\` marks a breath. **Bold** marks the stressed word.
- This one is an escalation. Each rung should sound reasonable when you say it — the
  viewer is meant to recognise themselves before they see the crack.

---

## 1 — Intro (silent)

---

## 2 — The manual era  ·  *24s*

> Every Terraform project starts the same way. / \`plan\`, / read the output, / \`apply\`. /
> Someone's laptop.
>
> And it's fine. / Genuinely fine — / small team, / handful of resources.
>
> Until: / who applied what, when? / Does networking need to go before compute? / That's in
> someone's head. / And you planned at two / and applied at five, / and the world moved.

---

## 3 — CI pipelines  ·  *37s*

> So you put it in CI. / Obvious next step, / and it fixes real things — / you get an audit
> trail, / cron catches drift.
>
> But now. / Networking's pipeline runs on a path filter. / Compute doesn't know networking's
> outputs changed. / So you write glue: / "after networking, trigger compute, then DNS."
>
> Your cron runs every fifteen minutes / and produces an empty plan almost every time.
>
> And \`-auto-approve\`? / A bad commit ships instantly. / Without it, / someone has to watch
> and click. / You've automated the \`plan\` / and not the decision.

---

## 4 — GitOps operators  ·  *25s*

> Atlantis, / and things like it. / Better again — / the plan shows up in the pull request, /
> approval happens in review. / That's a real improvement.
>
> But it works within **one state**. / It doesn't model the relationship / between your
> networking state / and your compute state. / When networking's outputs move, / nothing tells
> the compute operator. / So: / webhooks. / Scripts. / Manual coordination.

---

## 5 — The realisation  ·  *12s*  ·  **ON CAMERA, full frame**

> And this is the bit worth stopping on.
>
> The CI config you've been maintaining for two years? / That's a deployment orchestrator. /
> You built one. / By accident. / Badly.

---

## 6 — Three triggers  ·  *34s*

> So model it properly.
>
> Snap CD deploys on **three** kinds of event.
>
> **Source changes.** / A commit lands on the branch you're tracking, / or a new version tag
> appears. / It picks it up. / No webhook. / No path filter.
>
> **Upstream output changes.** / A dependency's outputs move, / and everything that consumed
> them re-plans.
>
> And **definition changes.** / You edit the module's config — / an input, / a runner, / a
> hook — / and that triggers a deployment too. / Your Terraform provider code / is the
> trigger.

---

## 7 — The cascade  ·  *18s*

> And it's transitive.
>
> Networking applies. / Compute and database re-plan — / in parallel, / they're independent. /
> Compute's outputs change, / so DNS re-plans after it.
>
> No webhook chain. / No ordering in YAML. / The graph came from your config, / and the
> ordering came from the graph.

---

## 8 — Approval gates  ·  *26s*

> Not everything should just ship, / so plans and applies are separate decisions.
>
> Set a threshold on a module: / apply needs one approval, / destroy needs two. / Or set it
> on the namespace / and every module inherits it.
>
> The plan still runs automatically. / You just don't apply / until someone says so. / A
> monitoring module might need nobody; / a database might need two.

---

## 9 — Events out  ·  *11s*

> And these events aren't only internal. / Push them to Slack — / any failed job in the
> production stack, / say. / Scoped the same way everything else is.

---

## 10 — A job running  ·  *14s*  ·  bubble

> Here it is. / A plan, / an approval gate, / an apply. / Logs streaming off the runner as it
> goes.

---

## 11 — When you don't need this  ·  *20s*

> Worth being honest about the other side.
>
> One state, / one team? / A CI pipeline is fine. / You don't need an orchestrator.
>
> Multiple states, / multiple teams? / That's where this pays for itself. / The graph is
> explicit, / ordering is automatic, / and each team controls its own blast radius.

---

## 12 — Outro  ·  *8s*

> Next time: / where your cloud credentials actually live. / **docs.snapcd.io**.

---

## Notes

- **The ladder is the episode.** Beats 2–5. If it works, everything after is downhill; if
  it drags, nothing else lands.
- Beat 5 is the emotional turn — the viewer realising they built an orchestrator by
  accident. Give it air. Don't rush to the solution.
- **Amber trap:** approval-pending is a *warning* state, and warning **IS** the accent
  (ember). There is no separate amber in the brand. Don't invent one for the gate.
- Use the article's real numbers: \`apply_approval_threshold = 1\`,
  \`destroy_approval_threshold = 2\`.
- Beat 11 is the article's §"When to use what" and it stays. Being honest that you don't
  always need this is credibility, and it costs 24 seconds.
- Same cascade topology as Ep. 02 — same component, deliberately. It should be the same
  picture in both.
`,G0=`# Ep. 04 — Voiceover script

**Plan:** [\`plan.md\`](./plan.md) · **Article:** \`why-snapcd/runner-isolation.md\`

**498 words · ~3:48** at a 140 wpm speaking pace.

> Budgets are measured from the script below, not estimated. The cut in \`Ep04.tsx\` is a
> timing skeleton; \`BEATS\` gets re-timed to your actual recording.

## Beat budgets

| # | Beat | Camera | Re-time to | Frames | Words |
|---|---|---|---|---|---|
| 1 | Intro (silent) | — (card) | 3s | 90 | — (silent) |
| 2 | One runner, every credential | voice only | 23s | 690 | 53 |
| 3 | Blast radius | voice only | 25s | 750 | 58 |
| 4 | The auditor | voice only | 15s | 450 | 36 |
| 5 | How teams cope | voice only | 21s | 630 | 50 |
| 6 | Split it | voice only | 27s | 810 | 63 |
| 7 | The claim | **full frame** | 16s | 480 | 38 |
| 8 | Runner Supply | voice only | 37s | 1110 | 87 |
| 9 | Patterns | voice only | 23s | 690 | 54 |
| 10 | Runners in the product | bubble | 14s | 420 | 13 |
| 11 | The point | voice only | 16s | 480 | 37 |
| 12 | Outro | — (card) | 8s | 240 | 9 |
| | | | **3:48** | **6840** | **498** |

## How to record

- OBS "SnapCD Webcam+Voice" profile — webcam and mic in one file, 48 kHz.
- \`/\` marks a breath. **Bold** marks the stressed word.
- This is the security episode. Flatter and more matter-of-fact than Ep. 03 — the facts are
  alarming enough without help.

---

## 1 — Intro (silent)

---

## 2 — One runner, every credential  ·  *23s*

> Most teams run Terraform from a CI pipeline. / That pipeline has credentials.
>
> It deploys networking in production. / It spins up a dev cluster. / It manages DNS. / It
> provisions a staging database.
>
> Which means it holds credentials / for **all** of that. / Often across several clouds and
> several accounts. / One machine. / One set of keys.

---

## 3 — Blast radius  ·  *25s*

> And every credential on that runner / is available to **every job** that runs on it.
>
> A misconfigured dev pipeline / can reach production keys. / Not because anyone allowed
> it — / the runner just doesn't know the difference. / It runs what Terraform tells it, /
> with whatever it's holding.
>
> The blast radius of a compromised runner / is everything it can touch.

---

## 4 — The auditor  ·  *15s*

> There's a version of this conversation / with an auditor in it.
>
> "Who can reach production?" / "Well… / our CI runner can reach everything."
>
> That's not a good answer. / And you can't fix it with a policy document.

---

## 5 — How teams cope  ·  *21s*

> People do solve this, / partially.
>
> Separate CI projects per environment. / Now you maintain four pipelines / that drift apart.
>
> Vault, issuing short-lived credentials. / Architecturally right, / operationally a whole
> other system to run. / And the runner still executes everything.
>
> Runner groups and tags. / Good isolation, / and now you're managing runner fleets yourself.

---

## 6 — Split it  ·  *27s*

> Snap CD's answer is structural.
>
> The system that **coordinates** deployments / should not be the system that **executes**
> them.
>
> So the Server holds module definitions, / the dependency graph, / job history, / approval
> gates. / It watches your repos. / It decides what should happen.
>
> And the Runner does it. / Connects out to the server, / picks up a job, / clones the code, /
> runs the real commands, / reports back.

---

## 7 — The claim  ·  *16s*  ·  **ON CAMERA, full frame**

> Which gives you the line this whole episode is for.
>
> **A compromise of the Snap CD Server / does not expose your cloud credentials.**
>
> It never had them. / It knows what your infrastructure *is*. / It cannot touch it.

---

## 8 — Runner Supply  ·  *37s*

> The other half is deciding / which modules can use which runner.
>
> That's a **Supply**. / A runner supplies itself to a scope, / and without one, / a module
> doesn't execute. / Full stop. / The server checks / before it dispatches anything.
>
> Usually you supply at the **stack** level. / Stacks are environments, / so that's
> per-environment credential isolation / in one resource.
>
> You can go finer. / A namespace — / say a data platform team / that needs production
> database access / and nobody else does. / Or a single module, / for something like a key
> vault.

---

## 9 — Patterns  ·  *23s*

> In practice it's one of three shapes.
>
> One runner per environment — / dev, staging, prod. / The common one.
>
> One per cloud, / if you're multi-cloud / and the boundary that matters is Azure versus AWS.
>
> Or both dimensions at once, / if you're big enough to need it.
>
> Each runner holds exactly what it needs. / Nothing else.

---

## 10 — Runners in the product  ·  *14s*  ·  bubble

> Here's a runner connected, / its supplies, / and a job being handed to it.

---

## 11 — The point  ·  *16s*

> A compromised dev runner / cannot reach production. / Not because of a policy — / because
> it doesn't have the keys, / and the server won't dispatch prod work to it.
>
> That's the difference / between a rule / and a boundary.

---

## 12 — Outro  ·  *8s*

> Next: / who's allowed to press the button. / **docs.snapcd.io**.

---

## Notes

- **Beat 7 is the episode.** *"A compromise of the Snap CD server does not expose your
  cloud credentials"* — it's the strongest single line in the whole series. Full frame, and
  don't hurry it.
- Supply scopes: module / namespace / stack / organization. Lead with **stack** — the
  article says that's the common case (stacks = environments = credential boundaries).
- *"The boundary is enforced by the server before a job is dispatched"* — worth showing,
  not just saying. A module without a supply simply doesn't run.
- **Don't imply the Server is untrusted.** It holds definitions and history, which matter.
  The claim is narrower and stronger: it holds no *cloud* credentials.
- Red is the error colour and it belongs on the shared-runner blast radius. Don't use it
  for ambience elsewhere.
`,X0=`# Ep. 05 — Voiceover script

**Plan:** [\`plan.md\`](./plan.md) · **Article:** \`why-snapcd/permission-system.md\`

**490 words · ~3:46** at a 140 wpm speaking pace.

> Budgets are measured from the script below, not estimated. The cut in \`Ep05.tsx\` is a
> timing skeleton; \`BEATS\` gets re-timed to your actual recording.

## Beat budgets

| # | Beat | Camera | Re-time to | Frames | Words |
|---|---|---|---|---|---|
| 1 | Intro (silent) | — (card) | 3s | 90 | — (silent) |
| 2 | CI gating | voice only | 24s | 720 | 55 |
| 3 | The backdoor | **full frame** | 20s | 600 | 47 |
| 4 | Cloud IAM | voice only | 32s | 960 | 74 |
| 5 | The gap | voice only | 15s | 450 | 35 |
| 6 | Principals | voice only | 12s | 360 | 28 |
| 7 | Roles | voice only | 27s | 810 | 62 |
| 8 | Scope | voice only | 26s | 780 | 60 |
| 9 | A worked example | voice only | 29s | 870 | 67 |
| 10 | No unenforced path | voice only | 16s | 480 | 38 |
| 11 | In the product | bubble | 14s | 420 | 13 |
| 12 | Outro | — (card) | 8s | 240 | 11 |
| | | | **3:46** | **6780** | **490** |

## How to record

- OBS "SnapCD Webcam+Voice" profile — webcam and mic in one file, 48 kHz.
- \`/\` marks a breath. **Bold** marks the stressed word.
- Beat 3 is the hook and it's a confession — everyone watching has done it. Say it like
  that, not like an accusation.

---

## 1 — Intro (silent)

---

## 2 — CI gating  ·  *24s*

> Where do infrastructure permissions live? / Usually one of two places.
>
> First: / the CI layer. / Who can trigger the pipeline?
>
> Which is binary. / You have write access to the repo / or you don't. / There's no "this
> person can deploy networking / but not the database". / No "can approve / but not apply". /
> CI doesn't model any of that.

---

## 3 — The backdoor  ·  *20s*  ·  **ON CAMERA, full frame**

> And there's a bigger hole.
>
> Protection rules only apply / to **CI-triggered runs**.
>
> Anyone with the credentials / can run \`terraform apply\` from their laptop / and walk
> straight past every gate you built. / You know this. / You've probably done it. / At two in
> the morning, / to fix something.

---

## 4 — Cloud IAM  ·  *32s*

> The other place is cloud IAM. / Azure RBAC, / AWS IAM.
>
> These are sophisticated. / But they're the wrong **abstraction**.
>
> IAM doesn't know / that your VPC and subnets and route tables / are one logical thing that
> one team owns. / It doesn't know compute depends on networking. / It can tell you whether a
> service principal may create an instance. / It cannot tell you / whether a **person** should
> be allowed to approve the plan / that creates it.

---

## 5 — The gap  ·  *15s*

> So here's the shape of the problem.
>
> The system that understands your infrastructure topology / has no permission model. / And
> the system with the permission model / doesn't understand your topology.
>
> Snap CD sits in that gap.

---

## 6 — Principals  ·  *12s*

> Three things can hold a permission.
>
> **Users** — / people. / **Service principals** — / machines, pipelines, integrations. / And
> **groups**, / so you're not doing this one human at a time.

---

## 7 — Roles  ·  *27s*

> Roles are what you can do.
>
> **Owner** — / full control, / including handing out access.
> **Contributor** — / create and update things, / but not delete the resource / and not
> manage who else gets in.
> **Reader** — / look, don't touch.
>
> Plus the specific ones. / **Approver**, / which is just approving. / **JobManager**, / cancel
> and retry. / **IdentityAccessManager**, / manage access / without having Owner over
> everything else.

---

## 8 — Scope  ·  *26s*

> And **where** you can do it / is the hierarchy from episode two.
>
> Organization, / stack, / namespace, / module. / A role assigned high up / flows down.
>
> So you can say both things at once. / "The platform team reads everything in production" —
> / that's Reader at the stack. / "…except they own networking" — / that's Owner on one
> namespace. / Broad policy, / narrow exception. / Two lines.

---

## 9 — A worked example  ·  *29s*

> Concretely.
>
> Platform team: / Reader on the prod stack, / Owner on prod/networking. / They see
> everything, / change one thing.
>
> Junior engineer: / Contributor on test — / plan, approve, deploy, / all of it. / Reader on
> prod. / They can watch, / and that's all.
>
> And the CI service principal for the API gateway: / Contributor on **one module**. / If that
> pipeline is compromised, / the blast radius is one module. / Not the estate.

---

## 10 — No unenforced path  ·  *16s*

> And this is the part that matters.
>
> The dashboard, / the REST API, / the Terraform provider — / same permission model. / Same
> checks.
>
> There's no laptop bypass, / because there's no path / that skips the server. / **There is no
> unenforced path.**

---

## 11 — In the product  ·  *14s*  ·  bubble

> Assigning a group Reader at the stack, / Owner on a namespace. / Two resources.

---

## 12 — Outro  ·  *8s*

> Next: / how it runs your Terraform / without owning it. / **docs.snapcd.io**.

---

## Notes

- **Beat 3 is the hook.** The laptop backdoor is the thing every viewer has quietly done.
  It's a confession, not an accusation — land it that way.
- **Chips must be uniform white with Ink text.** Do NOT colour-code roles by severity: it
  implies a hierarchy of danger that the model doesn't have. This bit us on the marketing
  site.
- Prefix scopes when they're on screen: \`stack:prod\`, \`namespace:prod/networking\`,
  \`module:prod/networking/vpc\`. Mono — they name system objects.
- The three worked examples are the article's, verbatim. They're concrete and already
  right; don't invent new ones.
- Roles worth naming on camera: Owner, Contributor, Reader, Approver. Show the rest
  (IdentityAccessManager, JobManager, StackCreator/NamespaceCreator/ModuleCreator,
  SourceChangeNotifier) — don't read the list.
- Beat 10's *"There is no unenforced path"* is the article's own phrase and the answer to
  beat 3. Pair them.
`,V0=`# Ep. 06 — Voiceover script

**Plan:** [\`plan.md\`](./plan.md) · **Article:** \`why-snapcd/non-invasive-orchestration.md\`

**464 words · ~3:31** at a 140 wpm speaking pace.

> Budgets are measured from the script below, not estimated. The cut in \`Ep06.tsx\` is a
> timing skeleton; \`BEATS\` gets re-timed to your actual recording.

## Beat budgets

| # | Beat | Camera | Re-time to | Frames | Words |
|---|---|---|---|---|---|
| 1 | Intro (silent) | — (card) | 3s | 90 | — (silent) |
| 2 | The lock-in pattern | voice only | 47s | 1410 | 110 |
| 3 | Each one is a dependency | voice only | 11s | 330 | 26 |
| 4 | Your code doesn't know | **full frame** | 19s | 570 | 45 |
| 5 | What actually happens | voice only | 42s | 1260 | 98 |
| 6 | Ordinary files | voice only | 18s | 540 | 42 |
| 7 | The escape hatch | bubble | 26s | 780 | 49 |
| 8 | Engines | voice only | 17s | 510 | 39 |
| 9 | Leaving | voice only | 20s | 600 | 46 |
| 10 | Outro | — (card) | 8s | 240 | 9 |
| | | | **3:31** | **6330** | **464** |

## How to record

- OBS "SnapCD Webcam+Voice" profile — webcam and mic in one file, 48 kHz.
- \`/\` marks a breath. **Bold** marks the stressed word.
- Shortest episode in the series, and that's right. One idea, proved once. Don't pad it.

---

## 1 — Intro (silent)

---

## 2 — The lock-in pattern  ·  *47s*

> Most infrastructure CD tools / ask you to change how you write Terraform.
>
> A **wrapper CLI** — / you run \`toolname plan\` / instead of \`terraform plan\`. / Now your CI,
> your laptop, / and your 3am debugging session / all need the wrapper.
>
> A **proprietary plan format** — / they parse Terraform's output / into their own thing. /
> Terraform changes it across major versions, / and now you're waiting on a vendor / before
> you can upgrade.
>
> An **opinionated directory layout**. / A **custom state backend**, / holding your state
> somewhere you can't easily leave. / Or a **DSL** / that generates Terraform for you — / at
> which point you're not writing Terraform, / you're writing input to a code generator.

---

## 3 — Each one is a dependency  ·  *11s*

> And every one of those / is a hook.
>
> The trade is always the same. / You get orchestration, / and your code now only works /
> inside that tool.

---

## 4 — Your code doesn't know  ·  *19s*  ·  **ON CAMERA, full frame**

> Snap CD's version of this / is the opposite.
>
> **Your Terraform doesn't know Snap CD exists.**
>
> There's no \`snapcd\` block. / No annotation. / No metadata. / The orchestration config —
> which runner, / which inputs, / which outputs go where — / lives in Snap CD. / Not in your
> infrastructure code.

---

## 5 — What actually happens  ·  *42s*

> So what does a deployment actually do?
>
> **One.** / The runner clones your repo / into a working directory. / Same code you'd check
> out yourself.
>
> **Two.** / It writes your inputs / using mechanisms Terraform already has. / A \`.tfvars\`
> file. / An \`.env\` file. / Shell scripts / that wrap the commands with the right flags.
>
> **Three.** / It runs \`terraform init\`. / Then \`plan\`. / Then, after approval, / \`apply\`. /
> Real binaries. / Not a wrapper, / not a shim. / The logs stream back / but the commands
> aren't intercepted.
>
> **Four.** / After a successful apply, / \`terraform output -json\`, / and the results go back
> for the dependency wiring.

---

## 6 — Ordinary files  ·  *18s*

> And the files it writes / are just files.
>
> \`inputs.tfvars\` / is a Terraform variable file. / \`snapcd.env\` / is environment variables. /
> \`plan.sh\` / is a shell script.
>
> You can open them. / Read them. / Pass them to \`terraform apply -var-file=\` / yourself.
> Nothing is encoded, / nothing is proprietary.

---

## 7 — The escape hatch  ·  *26s*  ·  bubble

> Which means you can do this.
>
> SSH into the runner. / \`cd\` into the module's working directory. / And there it is — / your
> code, / your tfvars, / exactly as Snap CD prepared it.
>
> And you can just… / run \`terraform plan\`. / Yourself. / By hand. / It works, / because
> nothing magic is happening.

---

## 8 — Engines  ·  *17s*

> Same reason engines are swappable.
>
> OpenTofu by default. / Terraform — / up to 1.5.7, / the last MPL release. / Pulumi, / in
> preview.
>
> Upgrading is updating a binary on your runner. / There's no intermediary / that needs to
> understand the new plan format.

---

## 9 — Leaving  ·  *20s*

> And the real test of lock-in / is what happens when you leave.
>
> If Snap CD isn't right for you: / your code doesn't change. / Not one line. / Your state
> files are where they've always been. / You stop pointing it at them.
>
> That's it. / That's the whole exit.

---

## 10 — Outro  ·  *8s*

> Next: / managing all of this as code. / **docs.snapcd.io**.

---

## Notes

- **Beat 7 is the money shot** — and the only place in the series where a screencast beats
  a diagram outright. Give it room. It's the claim *proved* rather than asserted.
- Real paths, real filenames: working dir is
  \`~/.snapcd/runner/<stack>/<namespace>/<module>\`, files are \`.snapcd/inputs.tfvars\`,
  \`snapcd.env\`, \`init.sh\`, \`plan.sh\`, \`apply.sh\`. Getting these wrong destroys exactly the
  credibility this episode trades on.
- Mono for every file path and command — brand rule, they name system objects.
- **Terraform support caps at 1.5.7** (the last MPL release) and **Pulumi is preview**. Both
  facts, both on screen, both easy to overstate.
- Don't reach for the credential argument (Ep. 04) or the graph (Ep. 02). This episode owns
  one idea: your code doesn't know it exists.
`,Z0=`# Ep. 07 — Voiceover script

**Plan:** [\`plan.md\`](./plan.md) · **Article:** \`why-snapcd/supporting-toolset.md\`

**326 words · ~2:38** at a 140 wpm speaking pace.

> Budgets are measured from the script below, not estimated. The cut in \`Ep07.tsx\` is a
> timing skeleton; \`BEATS\` gets re-timed to your actual recording.

## Beat budgets

| # | Beat | Camera | Re-time to | Frames | Words |
|---|---|---|---|---|---|
| 1 | Intro (silent) | — (card) | 3s | 90 | — (silent) |
| 2 | Clicks don't diff | voice only | 25s | 750 | 58 |
| 3 | Terraform managing Terraform | **full frame** | 19s | 570 | 44 |
| 4 | Everything | voice only | 21s | 630 | 50 |
| 5 | Diff your access policy | voice only | 21s | 630 | 48 |
| 6 | New environments | voice only | 10s | 300 | 24 |
| 7 | The provider | bubble | 12s | 360 | 11 |
| 8 | The rest of the kit | voice only | 25s | 750 | 59 |
| 9 | The sample | bubble | 14s | 420 | 19 |
| 10 | Outro | — (card) | 8s | 240 | 13 |
| | | | **2:38** | **4740** | **326** |

## How to record

- OBS "SnapCD Webcam+Voice" profile — webcam and mic in one file, 48 kHz.
- \`/\` marks a breath. **Bold** marks the stressed word.
- **The risk here is that this becomes a list.** A list isn't an argument. The script is
  built to spend its time on the *idea* (beats 2–5) and keep the inventory to a fast
  montage (beat 8). If it drags, cut beat 8, not beats 3–5.

---

## 1 — Intro (silent)

---

## 2 — Clicks don't diff  ·  *25s*

> Here's a question. / Who has Owner on production, / and when did that change?
>
> If the answer lives in a dashboard, / you can't answer it. / You can look at it **now**. /
> You can't diff it. / You can't review it. / You can't see who changed it last Tuesday / and
> why.
>
> Clicks don't leave a trail / you can reason about.

---

## 3 — Terraform managing Terraform  ·  *19s*  ·  **ON CAMERA, full frame**

> So: / almost everything in Snap CD / is managed by its own **Terraform provider**.
>
> Which sounds recursive, / and it is. / You use Terraform / to manage the system / that
> manages your Terraform.
>
> Stacks. / Namespaces. / Modules. / Runners. / Agents. / Role assignments. / Missions. / All
> of it in HCL.

---

## 4 — Everything  ·  *21s*

> And I mean everything, / which is the part that matters.
>
> Not just the infrastructure — / the **governance**. / Who can deploy what. / Which runner a
> module is allowed to use. / Which missions an agent runs. / What needs approving.
>
> All of that is code, / in version control, / next to everything else.

---

## 5 — Diff your access policy  ·  *21s*

> Which gives you this.
>
> A pull request / that changes who can deploy to production. / With a diff. / With a
> reviewer. / With a date and a name on it.
>
> You can diff your access control policy / the same way you diff a network ACL. / Because
> it **is** just code.

---

## 6 — New environments  ·  *10s*

> And setting up a new environment / stops being a sequence of clicks / that someone
> half-remembers.
>
> It's copying a Terraform module / and changing the variables.

---

## 7 — The provider  ·  *12s*  ·  bubble

> The provider's on the Terraform Registry. / Every resource documented, / versioned, /
> pinnable.

---

## 8 — The rest of the kit  ·  *25s*

> Quickly, / what else is there.
>
> **Docs** at docs.snapcd.io — / quickstarts, / a reference page per resource, / component
> architecture.
>
> **Deployment repos** — / local, / Docker Compose, / Kubernetes. / Ready to run.
>
> A **sample deployment** / that stands up a real stack with dependencies, / which is the
> fastest way to see the shape of it.
>
> And a **migration tool**, / for getting existing state in.

---

## 9 — The sample  ·  *14s*  ·  bubble

> This is the sample. / A stack, / a namespace, / modules with real dependencies between
> them. / Clone it and apply it.

---

## 10 — Outro  ·  *8s*

> Last one next: / letting AI near your infrastructure / without regretting it. /
> **docs.snapcd.io**.

---

## Notes

- **This episode's risk is being a list.** Beats 2–5 are the argument (governance as code,
  diffable); beat 8 is inventory. If the cut drags, cut 8 to a montage — or fold the whole
  episode into Ep. 02, which the plan flags as a live option. **Decide before building.**
- The strongest concrete beat is 5 — *"diff your access control policy the same way you
  diff a network ACL"*. Everything else is support for that sentence.
- **Only show what's public.** snapcd-brand and snapcd-videos are private repos. Docs, the
  provider, the deployment repos and the samples are public. Don't put a private repo on
  screen.
- The sample for beat 9 is \`snapcd-samples/sample-deployment\`, the small one.
- Don't oversell the migration tool — it's one line in the article. One line here.
`,K0=`# Ep. 08 — Voiceover script

**Plan:** [\`plan.md\`](./plan.md) · **Article:** \`why-snapcd/ai-on-a-leash.md\`

> ## ⚠️ Before you record this
>
> **Never say "an AI agent is just another service principal."** It isn't, and the script
> is written to avoid it. See the plan's warning: the leash is **reactive-by-construction
> _plus_ RBAC _plus_ supply _plus_ approval gates** — collapsing that to "just another SP"
> throws away the design and overstates the safety. Re-read the article before narrating.

**581 words · ~4:24** at a 140 wpm speaking pace.

> Budgets are measured from the script below, not estimated. The cut in \`Ep08.tsx\` is a
> timing skeleton; \`BEATS\` gets re-timed to your actual recording.

## Beat budgets

| # | Beat | Camera | Re-time to | Frames | Words |
|---|---|---|---|---|---|
| 1 | Intro (silent) | — (card) | 3s | 90 | — (silent) |
| 2 | What AI could do here | voice only | 21s | 630 | 48 |
| 3 | One flag | **full frame** | 12s | 360 | 28 |
| 4 | The crude mitigations | voice only | 27s | 810 | 64 |
| 5 | Layer one: it reacts | voice only | 48s | 1440 | 111 |
| 6 | Layer two: it's a principal | voice only | 27s | 810 | 62 |
| 7 | Supply | voice only | 22s | 660 | 51 |
| 8 | Approval gates | voice only | 16s | 480 | 38 |
| 9 | The sidecar | voice only | 22s | 660 | 52 |
| 10 | AutoFix, end to end | bubble | 20s | 600 | 28 |
| 11 | The audit trail | voice only | 18s | 540 | 42 |
| 12 | The point | voice only | 19s | 570 | 44 |
| 13 | Outro | — (card) | 9s | 270 | 13 |
| | | | **4:24** | **7920** | **581** |

## How to record

- OBS "SnapCD Webcam+Voice" profile — webcam and mic in one file, 48 kHz.
- \`/\` marks a breath. **Bold** marks the stressed word.
- The temptation here is to sound either breathless about AI or dismissive of it. Neither.
  The upside is real and the danger is real — say both flatly.

---

## 1 — Intro (silent)

---

## 2 — What AI could do here  ·  *21s*

> An AI agent can genuinely help with infrastructure.
>
> It can read a failed \`apply\` / and tell you why. / It can summarise what changed / across a
> dozen modules overnight. / It can look at a plan / and tell you whether it looks safe.
>
> The toil it could remove / is real.

---

## 3 — One flag  ·  *12s*  ·  **ON CAMERA, full frame**

> And so is the other thing.
>
> The gap between "run this command" / and "**destroy this resource**" / is one flag.
>
> That's the whole problem / in one sentence.

---

## 4 — The crude mitigations  ·  *27s*

> So people mitigate, / and the mitigations are blunt.
>
> Read-only API keys. / Now it can diagnose / and it can't do anything about it.
>
> Wrapper scripts with allow-lists. / Fragile, / and you're maintaining a parser.
>
> Or a separate CI pipeline, / which adds latency / and cuts the agent out of the approval
> loop / entirely.
>
> None of these give you a **spectrum** of trust. / They're all on / or off.

---

## 5 — Layer one: it reacts  ·  *48s*

> Snap CD's answer is two layers, / and the first one is the important one.
>
> The **Agent** is its own component, / and it is **reactive**. / It doesn't wander around
> your API deciding things. / It waits for a Job event, / and it runs a **Mission**.
>
> Each mission type / is bound to a specific trigger. / A job fails, / that can fire
> **AutoDiagnose** — / a root-cause hypothesis with the relevant logs. / Or **AutoFix**, /
> which attempts a fix and retries.
>
> A job reaches approval-required, / and **ApprovalRecommend** looks at the plan / and gives
> an opinion.
>
> A job succeeds, / **SummarizeJob** writes up what changed.
>
> That's the whole surface. / Four missions, / four triggers. / Reactive by construction.

---

## 6 — Layer two: it's a principal  ·  *27s*

> Then the second layer.
>
> An Agent is backed by a **service principal**. / Which means / everything from episode five
> applies to it / unchanged. / Roles, / scopes, / the hierarchy.
>
> Give it Reader on prod / and it can diagnose but not touch. / Contributor on test / and it
> can actually fix things there.
>
> The agent isn't outside the permission system. / It's *in* it, / like everyone else.

---

## 7 — Supply  ·  *22s*

> Third leash, / same model as runners.
>
> An agent is **supplied** to the scopes it serves. / Supply it to the test stack / and it
> gets missions in test.
>
> Without a supply covering prod, / it will never receive a mission there — / even if
> somebody accidentally creates one. / The dispatch just doesn't happen.

---

## 8 — Approval gates  ·  *16s*

> And the fourth. / The gates from episode three / don't care that it's an AI.
>
> If a module needs an approval before apply, / it needs an approval. / An agent's fix /
> waits in the same queue / as everyone else's change.

---

## 9 — The sidecar  ·  *22s*

> One more piece.
>
> The Agent doesn't do AI work itself. / It supervises a **Sidecar** — / the bundled Claude
> one, / or your own — / and routes missions to it.
>
> Which means the Agent holds **no AI provider keys**. / Those live on the sidecar. / Same
> shape as the server holding no cloud credentials.

---

## 10 — AutoFix, end to end  ·  *20s*  ·  bubble

> So: / a job fails. / AutoDiagnose posts a hypothesis. / AutoFix attempts a change / and
> retries. / And if that module needs approval, / it stops and waits, / like anything else
> would.

---

## 11 — The audit trail  ·  *18s*

> And every action / is attributed to the agent's service principal.
>
> Which gives you something you don't usually get with AI in a pipeline: / you can tell,
> afterwards, / exactly which changes were made by a human / and which were made by a model.

---

## 12 — The point  ·  *19s*

> Four leashes, / and they compose.
>
> It only reacts to events. / It only has the roles you gave it. / It only serves the scopes
> you supplied it to. / And it waits at the same gates you do.
>
> That's a spectrum of trust. / Not a switch.

---

## 13 — Outro  ·  *9s*

> That's the seven. / Everything's at **docs.snapcd.io** — / and the whole thing's on GitHub.

---

## Notes

- **The correctness trap:** never "just another service principal". The SP is the *identity*
  layer and it's real — but the Agent is a distinct component with a deliberately narrow
  reactive surface. Both layers, always. Beat 5 before beat 6, in that order.
- The BYO path (article §"Bring your own AI") *is* a plain SP hitting the REST API. That's
  the contrast that makes the distinction real — worth a line if the episode has room, but
  don't confuse it with the Missions framework.
- Mission types and triggers, exactly: \`AutoDiagnose\` + \`AutoFix\` (job fails),
  \`ApprovalRecommend\` (approval-required), \`SummarizeJob\` (job succeeds).
- The Agent holds **no AI provider keys** — the sidecar does. Draw the parallel to Ep. 04's
  server-holds-no-cloud-creds out loud; it shows the design is consistent rather than
  ad hoc.
- The agent still needs the RBAC role for the action: \`Contributor\` to auto-fix, \`Reader\`
  to diagnose. Both leashes, not one.
- Good closer for the series: it's the newest idea, and it only works because eps 02–07
  were load-bearing.
`,J0=/^##\s+(.+?)\s*$/,I0=/^\*\*\s*([0-9]+[a-z]?\s*[—-].+?)\s*\*\*/,Ap=i=>i.split("·")[0].replace(/\*\*/g,"").replace(/\*/g,"").trim(),W0=i=>{const r=i.match(J0);if(r)return Ap(r[1]);const c=i.match(I0);return c?Ap(c[1]):null},F0=(i,r)=>{const c=r.split(`
`),s=[];let d=null,h=[];const g=()=>{if(d!==null){const y=h.join(`
`).replace(/\n{3,}/g,`

`).trim();y.length>0&&s.push({label:d,text:y})}h=[]};for(const y of c){const p=W0(y);if(p!==null){g(),d=p;continue}const S=y.match(/^>\s?(.*)$/);S&&d!==null&&h.push(S[1])}g();const w=i.replace(/^(ep\d+)-/,"$1 · ").replace(/-/g," ");return{id:i,label:w,beats:s}},$0=Object.assign({"../snapcd-videos/episodes/ep00-getting-started/script.md":Q0,"../snapcd-videos/episodes/ep01-introducing-snapcd/script.md":Y0,"../snapcd-videos/episodes/ep02-modular-deployments/script.md":k0,"../snapcd-videos/episodes/ep03-event-driven-cd/script.md":L0,"../snapcd-videos/episodes/ep04-runner-isolation/script.md":G0,"../snapcd-videos/episodes/ep05-permission-system/script.md":X0,"../snapcd-videos/episodes/ep06-non-invasive-orchestration/script.md":V0,"../snapcd-videos/episodes/ep07-supporting-toolset/script.md":Z0,"../snapcd-videos/episodes/ep08-ai-on-a-leash/script.md":K0}),P0=()=>Object.entries($0).map(([i,r])=>{const c=i.match(/episodes\/([^/]+)\/script\.md$/),s=c?c[1]:i;return F0(s,r)}).filter(i=>i.beats.length>0).sort((i,r)=>i.id.localeCompare(r.id)),Pl=P0(),Oo={backgroundColor:"#1a1a1a",color:"#fff",borderColor:"#333"},eb=()=>{const i=Hp(),r=Fe(ny),c=Fe(ay),s=Fe(ly),d=Fe(iy),h=Fe(uy),g=Fe(M0),[w,y]=Me.useState(Pl[0]?.id??""),p=Pl.find(T=>T.id===w)??Pl[0],S=T=>{const E=p?.beats[T];E&&i(ry(E.text))};return se.jsxs("nav",{className:"navbar is-black has-text-light is-unselectable",role:"navigation","aria-label":"main navigation",children:[se.jsx("div",{className:"navbar-brand",children:r==="stopped"?se.jsxs("div",{className:"navbar-item",style:{gap:"0.5rem"},children:[Pl.length>0?se.jsxs(se.Fragment,{children:[se.jsx("div",{className:"select is-small is-dark",children:se.jsx("select",{value:w,onChange:T=>y(T.currentTarget.value),title:"Select Episode",style:Oo,children:Pl.map(T=>se.jsx("option",{value:T.id,children:T.label},T.id))})}),se.jsx("div",{className:"select is-small is-dark",children:se.jsxs("select",{defaultValue:"",onChange:T=>{const E=parseInt(T.currentTarget.value,10);Number.isNaN(E)||S(E)},title:"Select Beat",style:Oo,children:[se.jsx("option",{value:"",disabled:!0,children:"Beat…"}),p?.beats.map((T,E)=>se.jsx("option",{value:E,children:T.label},E))]})})]}):null,se.jsx("div",{className:"select is-small is-dark",children:se.jsx("select",{value:g,onChange:T=>{const E=T.currentTarget.value;i(O0(E)),i(H0(E))},title:"Select Language",style:Oo,children:Object.keys(Ho).map(T=>{const E=Ho[T];return se.jsx("option",{value:T,children:E},T)})})})]}):null}),se.jsx("div",{className:"navbar-menu is-active",children:se.jsxs("div",{className:"navbar-end",children:[r==="stopped"?se.jsxs(se.Fragment,{children:[se.jsxs("div",{className:"navbar-item slider",children:[se.jsx("span",{children:"Font size:"}),se.jsx("input",{type:"range",step:"5",min:"10",max:"200",value:c,onChange:T=>i(A0(parseInt(T.currentTarget.value,10)))})]}),se.jsxs("div",{className:"navbar-item slider",children:[se.jsx("span",{children:"Margin:"}),se.jsx("input",{type:"range",step:"10",min:"0",max:"500",value:s,onChange:T=>i(w0(parseInt(T.currentTarget.value,10)))})]}),se.jsxs("div",{className:"navbar-item slider",children:[se.jsx("span",{children:"Brightness:"}),se.jsx("input",{type:"range",step:"10",min:"0",max:"100",value:d,onChange:T=>i(E0(parseInt(T.currentTarget.value,10)))})]}),se.jsxs("div",{className:"navbar-item slider",children:[se.jsx("span",{children:"Line position:"}),se.jsx("input",{type:"range",step:"10",min:"0",max:"1000",value:h,onChange:T=>i(_0(parseInt(T.currentTarget.value,10)))})]})]}):null,se.jsxs("div",{className:"buttons navbar-item",children:[r!=="started"?se.jsxs(se.Fragment,{children:[se.jsx("button",{className:`button is-info ${r==="editing"?"editing":""}`,onClick:()=>i(ty()),title:"Edit",children:se.jsx("span",{className:"icon is-small",children:se.jsx("i",{className:"fa-solid fa-pencil"})})}),se.jsx("button",{className:"button is-info",disabled:r!=="stopped",onClick:()=>i(N0()),title:"Restart from the beginning",children:se.jsx("span",{className:"icon is-small",children:se.jsx("i",{className:"fa-solid fa-arrows-rotate"})})})]}):null,se.jsx("button",{className:"button is-info",disabled:r==="editing",onClick:()=>i(r==="stopped"?sy():Qo()),title:r==="stopped"||r==="editing"?"Start":"Stop",children:se.jsx("span",{className:"icon is-small",children:se.jsx("i",{className:`fa-solid ${r==="stopped"||r==="editing"?"fa-play":"fa-stop"}`})})})]})]})})]})},{replace:tb}="",nb=/[&<>'"]/g,ab={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},lb=i=>ab[i],ib=i=>tb.call(i,nb,lb),ub=()=>{const i=Hp(),r=Fe(ny),c=Fe(ay),s=Fe(ly),d=Fe(iy),h=Fe(uy),g=Fe(R0),w=Fe(D0),y=Fe(C0),p=Fe(x0),S=Fe(U0),T=Fe(B0),E={fontSize:`${c}px`,padding:`0 ${s}px`},j=Me.useRef(null),H=Me.useRef(null),Y=Me.useRef(null),C=Me.useRef(null),z=T>0?Math.min(T+2,p.length-1):-1,Q=p.findIndex((N,q)=>q>z&&N.value.startsWith("[")),b=Me.useRef(0),_=Me.useRef(0),R=Me.useRef(0),J=Me.useRef(null),G=Me.useRef(null),W=.06,$=1.6,Z=4;return Me.useEffect(()=>{j.current&&(b.current=H.current?Math.max(H.current.offsetTop-h,0):0)},[T,S,h]),Me.useEffect(()=>{const N=q=>{const k=j.current,ee=G.current;G.current=q;const ne=ee===null?0:Math.min((q-ee)/1e3,.1);if(k&&ne>0){let D=b.current;const I=Y.current;I&&(D=Math.min(D,I.offsetTop));const P=(D-_.current)/ne;_.current=D,R.current+=(P-R.current)*W;const ae=D-k.scrollTop,v=Z*Math.abs(R.current)+60,L=Math.max(-v,Math.min(v,ae*$)),te=Math.max(0,R.current+L),F=k.scrollTop+te*ne;k.scrollTop=Math.abs(ae)<.5&&Math.abs(R.current)<1?D:F}J.current=requestAnimationFrame(N)};return J.current=requestAnimationFrame(N),()=>{J.current!==null&&cancelAnimationFrame(J.current)}},[]),Me.useLayoutEffect(()=>{if(!j.current||!C.current)return;const N=j.current.clientHeight;C.current.style.height=`${h+N}px`},[h,p.length]),Me.useEffect(()=>{const N=q=>{if(r==="editing")return;const k=p.length-1;q.code==="Escape"?(q.preventDefault(),i(Qo())):q.code==="Space"?(q.preventDefault(),r==="stopped"?i(sy()):r==="started"&&i(Qo())):q.code==="ArrowUp"?(q.preventDefault(),i(Ka(Math.max(-1,S-15))),i(Ja(Math.max(-1,T-15)))):q.code==="ArrowLeft"?(q.preventDefault(),i(Ka(Math.max(-1,S-5))),i(Ja(Math.max(-1,T-5)))):q.code==="ArrowDown"?(q.preventDefault(),i(Ka(Math.min(k,S+15))),i(Ja(Math.min(k,T+15)))):q.code==="ArrowRight"&&(q.preventDefault(),i(Ka(Math.min(k,S+5))),i(Ja(Math.min(k,T+5))))};return window.addEventListener("keydown",N),()=>{window.removeEventListener("keydown",N)}}),se.jsx("main",{className:"content-area",children:r==="editing"?se.jsx("textarea",{className:"content",style:E,value:y,onChange:N=>i(ry(N.target.value||""))}):se.jsxs("div",{className:"content",ref:j,style:{...E,opacity:d/100,transform:`scale(${g?"-1":"1"}, ${w?"-1":"1"})`},children:[p.map((N,q,k)=>{const ee=T>0?Math.min(T+2,k.length-1):-1,ne=q>ee&&N.value.startsWith("["),D=q===ee?{ref:H}:ne&&q===Q?{ref:Y}:{};return se.jsx("span",{onClick:()=>{i(Ka(q-1)),i(Ja(q-1))},className:S>0&&N.index<=S+1?"final-transcript":T>0&&N.index<=T+1?"interim-transcript":"has-text-white",...D,dangerouslySetInnerHTML:{__html:ib(N.value).replace(/\n/g,"<br>")}},N.index)}),se.jsx("div",{"aria-hidden":"true",ref:C,style:{height:0,flexShrink:0}})]})})},rb=()=>se.jsxs("div",{className:"app",children:[se.jsx(eb,{}),se.jsx(ub,{})]});var sb=class extends Error{issues;constructor(i){super(i[0].message),this.name="SchemaError",this.issues=i}};function wp(i){return{status:i,isUninitialized:i==="uninitialized",isLoading:i==="pending",isSuccess:i==="fulfilled",isError:i==="rejected"}}var Ep=Ia;function oy(i,r){if(i===r||!(Ep(i)&&Ep(r)||Array.isArray(i)&&Array.isArray(r)))return r;const c=Object.keys(r),s=Object.keys(i);let d=c.length===s.length;const h=Array.isArray(r)?[]:{};for(const g of c)h[g]=oy(i[g],r[g]),d&&(d=i[g]===h[g]);return d?i:h}function Ro(i){let r=0;for(const c in i)r++;return r}var _p=i=>[].concat(...i);function ob(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function Lu(i){return i!=null}function cb(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}function fb(i,r,c){return i.has(r)?i.get(r):i.set(r,c).get(r)}function Yo(i,r,c){return i.has(r)?i.get(r):i.set(r,c(r)).get(r)}var ko=()=>new Map,Op=class{constructor(i,r=void 0){this.value=i,this.meta=r}},Wu=Bt("__rtkq/focused"),ec=Bt("__rtkq/unfocused"),Fu=Bt("__rtkq/online"),tc=Bt("__rtkq/offline"),Do=!1;function db(i,r){function c(){const s=()=>i(Wu()),d=()=>i(ec()),h=()=>i(Fu()),g=()=>i(tc()),w=()=>{window.document.visibilityState==="visible"?s():d()};return Do||typeof window<"u"&&window.addEventListener&&(window.addEventListener("visibilitychange",w,!1),window.addEventListener("focus",s,!1),window.addEventListener("online",h,!1),window.addEventListener("offline",g,!1),Do=!0),()=>{window.removeEventListener("focus",s),window.removeEventListener("visibilitychange",w),window.removeEventListener("online",h),window.removeEventListener("offline",g),Do=!1}}return c()}function $u(i){return i.type==="query"}function hb(i){return i.type==="mutation"}function Pu(i){return i.type==="infinitequery"}function Gu(i){return $u(i)||Pu(i)}function nc(i,r,c,s,d,h){return pb(i)?i(r,c,s,d).filter(Lu).map(Lo).map(h):Array.isArray(i)?i.map(Lo).map(h):[]}function pb(i){return typeof i=="function"}function Lo(i){return typeof i=="string"?{type:i}:i}function yb(i,r){return i.catch(r)}var ci=Symbol("forceQueryFn"),Go=i=>typeof i[ci]=="function";function mb({serializeQueryArgs:i,queryThunk:r,infiniteQueryThunk:c,mutationThunk:s,api:d,context:h,internalState:g}){const{runningQueries:w,runningMutations:y}=g,{unsubscribeQueryResult:p,removeMutationResult:S,updateSubscriptionOptions:T}=d.internalActions;return{buildInitiateQuery:z,buildInitiateInfiniteQuery:Q,buildInitiateMutation:b,getRunningQueryThunk:E,getRunningMutationThunk:j,getRunningQueriesThunk:H,getRunningMutationsThunk:Y};function E(_,R){return J=>{const G=h.endpointDefinitions[_],W=i({queryArgs:R,endpointDefinition:G,endpointName:_});return w.get(J)?.[W]}}function j(_,R){return J=>y.get(J)?.[R]}function H(){return _=>Object.values(w.get(_)||{}).filter(Lu)}function Y(){return _=>Object.values(y.get(_)||{}).filter(Lu)}function C(_,R){const J=(G,{subscribe:W=!0,forceRefetch:$,subscriptionOptions:Z,[ci]:N,...q}={})=>(k,ee)=>{const ne=i({queryArgs:G,endpointDefinition:R,endpointName:_});let D;const I={...q,type:"query",subscribe:W,forceRefetch:$,subscriptionOptions:Z,endpointName:_,originalArgs:G,queryCacheKey:ne,[ci]:N};if($u(R))D=r(I);else{const{direction:pe,initialPageParam:ce}=q;D=c({...I,direction:pe,initialPageParam:ce})}const P=d.endpoints[_].select(G),ae=k(D),v=P(ee()),{requestId:L,abort:te}=ae,F=v.requestId!==L,ie=w.get(k)?.[ne],oe=()=>P(ee()),le=Object.assign(N?ae.then(oe):F&&!ie?Promise.resolve(v):Promise.all([ie,ae]).then(oe),{arg:G,requestId:L,subscriptionOptions:Z,queryCacheKey:ne,abort:te,async unwrap(){const pe=await le;if(pe.isError)throw pe.error;return pe.data},refetch:()=>k(J(G,{subscribe:!1,forceRefetch:!0})),unsubscribe(){W&&k(p({queryCacheKey:ne,requestId:L}))},updateSubscriptionOptions(pe){le.subscriptionOptions=pe,k(T({endpointName:_,requestId:L,queryCacheKey:ne,options:pe}))}});if(!ie&&!F&&!N){const pe=fb(w,k,{});pe[ne]=le,le.then(()=>{delete pe[ne],Ro(pe)||w.delete(k)})}return le};return J}function z(_,R){return C(_,R)}function Q(_,R){return C(_,R)}function b(_){return(R,{track:J=!0,fixedCacheKey:G}={})=>(W,$)=>{const Z=s({type:"mutation",endpointName:_,originalArgs:R,track:J,fixedCacheKey:G}),N=W(Z),{requestId:q,abort:k,unwrap:ee}=N,ne=yb(N.unwrap().then(ae=>({data:ae})),ae=>({error:ae})),D=()=>{W(S({requestId:q,fixedCacheKey:G}))},I=Object.assign(ne,{arg:N.arg,requestId:q,abort:k,unwrap:ee,reset:D}),P=y.get(W)||{};return y.set(W,P),P[q]=I,I.then(()=>{delete P[q],Ro(P)||y.delete(W)}),G&&(P[G]=I,I.then(()=>{P[G]===I&&(delete P[G],Ro(P)||y.delete(W))})),I}}}var cy=class extends sb{constructor(i,r,c,s){super(i),this.value=r,this.schemaName=c,this._bqMeta=s}},ta=(i,r)=>Array.isArray(i)?i.includes(r):!!i;async function na(i,r,c,s){const d=await i["~standard"].validate(r);if(d.issues)throw new cy(d.issues,r,c,s);return d.value}function Rp(i){return i}var ei=(i={})=>({...i,[Zu]:!0});function gb({reducerPath:i,baseQuery:r,context:{endpointDefinitions:c},serializeQueryArgs:s,api:d,assertTagType:h,selectors:g,onSchemaFailure:w,catchSchemaFailure:y,skipSchemaValidation:p}){const S=(N,q,k,ee)=>(ne,D)=>{const I=c[N],P=s({queryArgs:q,endpointDefinition:I,endpointName:N});if(ne(d.internalActions.queryResultPatched({queryCacheKey:P,patches:k})),!ee)return;const ae=d.endpoints[N].select(q)(D()),v=nc(I.providesTags,ae.data,void 0,q,{},h);ne(d.internalActions.updateProvidedBy([{queryCacheKey:P,providedTags:v}]))};function T(N,q,k=0){const ee=[q,...N];return k&&ee.length>k?ee.slice(0,-1):ee}function E(N,q,k=0){const ee=[...N,q];return k&&ee.length>k?ee.slice(1):ee}const j=(N,q,k,ee=!0)=>(ne,D)=>{const P=d.endpoints[N].select(q)(D()),ae={patches:[],inversePatches:[],undo:()=>ne(d.util.patchQueryData(N,q,ae.inversePatches,ee))};if(P.status==="uninitialized")return ae;let v;if("data"in P)if(qt(P.data)){const[L,te,F]=Zp(P.data,k);ae.patches.push(...te),ae.inversePatches.push(...F),v=L}else v=k(P.data),ae.patches.push({op:"replace",path:[],value:v}),ae.inversePatches.push({op:"replace",path:[],value:P.data});return ae.patches.length===0||ne(d.util.patchQueryData(N,q,ae.patches,ee)),ae},H=(N,q,k)=>ee=>ee(d.endpoints[N].initiate(q,{subscribe:!1,forceRefetch:!0,[ci]:()=>({data:k})})),Y=(N,q)=>N.query&&N[q]?N[q]:Rp,C=async(N,{signal:q,abort:k,rejectWithValue:ee,fulfillWithValue:ne,dispatch:D,getState:I,extra:P})=>{const ae=c[N.endpointName],{metaSchema:v,skipSchemaValidation:L=p}=ae;try{let te=Rp;const F={signal:q,abort:k,dispatch:D,getState:I,extra:P,endpoint:N.endpointName,type:N.type,forced:N.type==="query"?z(N,I()):void 0,queryCacheKey:N.type==="query"?N.queryCacheKey:void 0},ie=N.type==="query"?N[ci]:void 0;let oe;const le=async(ce,me,Ye,Nt)=>{if(me==null&&ce.pages.length)return Promise.resolve({data:ce});const St={queryArg:N.originalArgs,pageParam:me},jt=await pe(St),at=Nt?T:E;return{data:{pages:at(ce.pages,jt.data,Ye),pageParams:at(ce.pageParams,me,Ye)},meta:jt.meta}};async function pe(ce){let me;const{extraOptions:Ye,argSchema:Nt,rawResponseSchema:St,responseSchema:jt}=ae;if(Nt&&!ta(L,"arg")&&(ce=await na(Nt,ce,"argSchema",{})),ie?me=ie():ae.query?(te=Y(ae,"transformResponse"),me=await r(ae.query(ce),F,Ye)):me=await ae.queryFn(ce,F,Ye,qn=>r(qn,F,Ye)),typeof process<"u",me.error)throw new Op(me.error,me.meta);let{data:at}=me;St&&!ta(L,"rawResponse")&&(at=await na(St,me.data,"rawResponseSchema",me.meta));let Ht=await te(at,me.meta,ce);return jt&&!ta(L,"response")&&(Ht=await na(jt,Ht,"responseSchema",me.meta)),{...me,data:Ht}}if(N.type==="query"&&"infiniteQueryOptions"in ae){const{infiniteQueryOptions:ce}=ae,{maxPages:me=1/0}=ce;let Ye;const Nt={pages:[],pageParams:[]},St=g.selectQueryEntry(I(),N.queryCacheKey)?.data,at=z(N,I())&&!N.direction||!St?Nt:St;if("direction"in N&&N.direction&&at.pages.length){const Ht=N.direction==="backward",lt=(Ht?fy:Xo)(ce,at,N.originalArgs);Ye=await le(at,lt,me,Ht)}else{const{initialPageParam:Ht=ce.initialPageParam}=N,qn=St?.pageParams??[],lt=qn[0]??Ht,er=qn.length;Ye=await le(at,lt,me),ie&&(Ye={data:Ye.data.pages[0]});for(let $a=1;$a<er;$a++){const yi=Xo(ce,Ye.data,N.originalArgs);Ye=await le(Ye.data,yi,me)}}oe=Ye}else oe=await pe(N.originalArgs);return v&&!ta(L,"meta")&&oe.meta&&(oe.meta=await na(v,oe.meta,"metaSchema",oe.meta)),ne(oe.data,ei({fulfilledTimeStamp:Date.now(),baseQueryMeta:oe.meta}))}catch(te){let F=te;if(F instanceof Op){let ie=Y(ae,"transformErrorResponse");const{rawErrorResponseSchema:oe,errorResponseSchema:le}=ae;let{value:pe,meta:ce}=F;try{oe&&!ta(L,"rawErrorResponse")&&(pe=await na(oe,pe,"rawErrorResponseSchema",ce)),v&&!ta(L,"meta")&&(ce=await na(v,ce,"metaSchema",ce));let me=await ie(pe,ce,N.originalArgs);return le&&!ta(L,"errorResponse")&&(me=await na(le,me,"errorResponseSchema",ce)),ee(me,ei({baseQueryMeta:ce}))}catch(me){F=me}}try{if(F instanceof cy){const ie={endpoint:N.endpointName,arg:N.originalArgs,type:N.type,queryCacheKey:N.type==="query"?N.queryCacheKey:void 0};ae.onSchemaFailure?.(F,ie),w?.(F,ie);const{catchSchemaFailure:oe=y}=ae;if(oe)return ee(oe(F,ie),ei({baseQueryMeta:F._bqMeta}))}}catch(ie){F=ie}throw console.error(F),F}};function z(N,q){const k=g.selectQueryEntry(q,N.queryCacheKey),ee=g.selectConfig(q).refetchOnMountOrArgChange,ne=k?.fulfilledTimeStamp,D=N.forceRefetch??(N.subscribe&&ee);return D?D===!0||(Number(new Date)-Number(ne))/1e3>=D:!1}const Q=()=>jo(`${i}/executeQuery`,C,{getPendingMeta({arg:q}){const k=c[q.endpointName];return ei({startedTimeStamp:Date.now(),...Pu(k)?{direction:q.direction}:{}})},condition(q,{getState:k}){const ee=k(),ne=g.selectQueryEntry(ee,q.queryCacheKey),D=ne?.fulfilledTimeStamp,I=q.originalArgs,P=ne?.originalArgs,ae=c[q.endpointName],v=q.direction;return Go(q)?!0:ne?.status==="pending"?!1:z(q,ee)||$u(ae)&&ae?.forceRefetch?.({currentArg:I,previousArg:P,endpointState:ne,state:ee})?!0:!(D&&!v)},dispatchConditionRejection:!0}),b=Q(),_=Q(),R=jo(`${i}/executeMutation`,C,{getPendingMeta(){return ei({startedTimeStamp:Date.now()})}}),J=N=>"force"in N,G=N=>"ifOlderThan"in N,W=(N,q,k)=>(ee,ne)=>{const D=J(k)&&k.force,I=G(k)&&k.ifOlderThan,P=(v=!0)=>{const L={forceRefetch:v,isPrefetch:!0};return d.endpoints[N].initiate(q,L)},ae=d.endpoints[N].select(q)(ne());if(D)ee(P());else if(I){const v=ae?.fulfilledTimeStamp;if(!v){ee(P());return}(Number(new Date)-Number(new Date(v)))/1e3>=I&&ee(P())}else ee(P(!1))};function $(N){return q=>q?.meta?.arg?.endpointName===N}function Z(N,q){return{matchPending:li(Wo(N),$(q)),matchFulfilled:li(Bn(N),$(q)),matchRejected:li(Wa(N),$(q))}}return{queryThunk:b,mutationThunk:R,infiniteQueryThunk:_,prefetch:W,updateQueryData:j,upsertQueryData:H,patchQueryData:S,buildMatchThunkActions:Z}}function Xo(i,{pages:r,pageParams:c},s){const d=r.length-1;return i.getNextPageParam(r[d],r,c[d],c,s)}function fy(i,{pages:r,pageParams:c},s){return i.getPreviousPageParam?.(r[0],r,c[0],c,s)}function dy(i,r,c,s){return nc(c[i.meta.arg.endpointName][r],Bn(i)?i.payload:void 0,Ju(i)?i.payload:void 0,i.meta.arg.originalArgs,"baseQueryMeta"in i.meta?i.meta.baseQueryMeta:void 0,s)}function Uu(i,r,c){const s=i[r];s&&c(s)}function fi(i){return("arg"in i?i.arg.fixedCacheKey:i.fixedCacheKey)??i.requestId}function Dp(i,r,c){const s=i[fi(r)];s&&c(s)}var Bu={};function vb({reducerPath:i,queryThunk:r,mutationThunk:c,serializeQueryArgs:s,context:{endpointDefinitions:d,apiUid:h,extractRehydrationInfo:g,hasRehydrationInfo:w},assertTagType:y,config:p}){const S=Bt(`${i}/resetApiState`);function T($,Z,N,q){$[Z.queryCacheKey]??={status:"uninitialized",endpointName:Z.endpointName},Uu($,Z.queryCacheKey,k=>{k.status="pending",k.requestId=N&&k.requestId?k.requestId:q.requestId,Z.originalArgs!==void 0&&(k.originalArgs=Z.originalArgs),k.startedTimeStamp=q.startedTimeStamp;const ee=d[q.arg.endpointName];Pu(ee)&&"direction"in Z&&(k.direction=Z.direction)})}function E($,Z,N,q){Uu($,Z.arg.queryCacheKey,k=>{if(k.requestId!==Z.requestId&&!q)return;const{merge:ee}=d[Z.arg.endpointName];if(k.status="fulfilled",ee)if(k.data!==void 0){const{fulfilledTimeStamp:ne,arg:D,baseQueryMeta:I,requestId:P}=Z;let ae=hi(k.data,v=>ee(v,N,{arg:D.originalArgs,baseQueryMeta:I,fulfilledTimeStamp:ne,requestId:P}));k.data=ae}else k.data=N;else k.data=d[Z.arg.endpointName].structuralSharing??!0?oy(Xt(k.data)?bv(k.data):k.data,N):N;delete k.error,k.fulfilledTimeStamp=Z.fulfilledTimeStamp})}const j=Za({name:`${i}/queries`,initialState:Bu,reducers:{removeQueryResult:{reducer($,{payload:{queryCacheKey:Z}}){delete $[Z]},prepare:$l()},cacheEntriesUpserted:{reducer($,Z){for(const N of Z.payload){const{queryDescription:q,value:k}=N;T($,q,!0,{arg:q,requestId:Z.meta.requestId,startedTimeStamp:Z.meta.timestamp}),E($,{arg:q,requestId:Z.meta.requestId,fulfilledTimeStamp:Z.meta.timestamp,baseQueryMeta:{}},k,!0)}},prepare:$=>({payload:$.map(q=>{const{endpointName:k,arg:ee,value:ne}=q,D=d[k];return{queryDescription:{type:"query",endpointName:k,originalArgs:q.arg,queryCacheKey:s({queryArgs:ee,endpointDefinition:D,endpointName:k})},value:ne}}),meta:{[Zu]:!0,requestId:Iu(),timestamp:Date.now()}})},queryResultPatched:{reducer($,{payload:{queryCacheKey:Z,patches:N}}){Uu($,Z,q=>{q.data=dp(q.data,N.concat())})},prepare:$l()}},extraReducers($){$.addCase(r.pending,(Z,{meta:N,meta:{arg:q}})=>{const k=Go(q);T(Z,q,k,N)}).addCase(r.fulfilled,(Z,{meta:N,payload:q})=>{const k=Go(N.arg);E(Z,N,q,k)}).addCase(r.rejected,(Z,{meta:{condition:N,arg:q,requestId:k},error:ee,payload:ne})=>{Uu(Z,q.queryCacheKey,D=>{if(!N){if(D.requestId!==k)return;D.status="rejected",D.error=ne??ee}})}).addMatcher(w,(Z,N)=>{const{queries:q}=g(N);for(const[k,ee]of Object.entries(q))(ee?.status==="fulfilled"||ee?.status==="rejected")&&(Z[k]=ee)})}}),H=Za({name:`${i}/mutations`,initialState:Bu,reducers:{removeMutationResult:{reducer($,{payload:Z}){const N=fi(Z);N in $&&delete $[N]},prepare:$l()}},extraReducers($){$.addCase(c.pending,(Z,{meta:N,meta:{requestId:q,arg:k,startedTimeStamp:ee}})=>{k.track&&(Z[fi(N)]={requestId:q,status:"pending",endpointName:k.endpointName,startedTimeStamp:ee})}).addCase(c.fulfilled,(Z,{payload:N,meta:q})=>{q.arg.track&&Dp(Z,q,k=>{k.requestId===q.requestId&&(k.status="fulfilled",k.data=N,k.fulfilledTimeStamp=q.fulfilledTimeStamp)})}).addCase(c.rejected,(Z,{payload:N,error:q,meta:k})=>{k.arg.track&&Dp(Z,k,ee=>{ee.requestId===k.requestId&&(ee.status="rejected",ee.error=N??q)})}).addMatcher(w,(Z,N)=>{const{mutations:q}=g(N);for(const[k,ee]of Object.entries(q))(ee?.status==="fulfilled"||ee?.status==="rejected")&&k!==ee?.requestId&&(Z[k]=ee)})}}),Y={tags:{},keys:{}},C=Za({name:`${i}/invalidation`,initialState:Y,reducers:{updateProvidedBy:{reducer($,Z){for(const{queryCacheKey:N,providedTags:q}of Z.payload){z($,N);for(const{type:k,id:ee}of q){const ne=($.tags[k]??={})[ee||"__internal_without_id"]??=[];ne.includes(N)||ne.push(N)}$.keys[N]=q}},prepare:$l()}},extraReducers($){$.addCase(j.actions.removeQueryResult,(Z,{payload:{queryCacheKey:N}})=>{z(Z,N)}).addMatcher(w,(Z,N)=>{const{provided:q}=g(N);for(const[k,ee]of Object.entries(q.tags??{}))for(const[ne,D]of Object.entries(ee)){const I=(Z.tags[k]??={})[ne||"__internal_without_id"]??=[];for(const P of D)I.includes(P)||I.push(P),Z.keys[P]=q.keys[P]}}).addMatcher(sn(Bn(r),Ju(r)),(Z,N)=>{Q(Z,[N])}).addMatcher(j.actions.cacheEntriesUpserted.match,(Z,N)=>{const q=N.payload.map(({queryDescription:k,value:ee})=>({type:"UNKNOWN",payload:ee,meta:{requestStatus:"fulfilled",requestId:"UNKNOWN",arg:k}}));Q(Z,q)})}});function z($,Z){const N=$.keys[Z]??[];for(const q of N){const k=q.type,ee=q.id??"__internal_without_id",ne=$.tags[k]?.[ee];ne&&($.tags[k][ee]=ne.filter(D=>D!==Z))}delete $.keys[Z]}function Q($,Z){const N=Z.map(q=>{const k=dy(q,"providesTags",d,y),{queryCacheKey:ee}=q.meta.arg;return{queryCacheKey:ee,providedTags:k}});C.caseReducers.updateProvidedBy($,C.actions.updateProvidedBy(N))}const b=Za({name:`${i}/subscriptions`,initialState:Bu,reducers:{updateSubscriptionOptions($,Z){},unsubscribeQueryResult($,Z){},internal_getRTKQSubscriptions(){}}}),_=Za({name:`${i}/internalSubscriptions`,initialState:Bu,reducers:{subscriptionsUpdated:{reducer($,Z){return dp($,Z.payload)},prepare:$l()}}}),R=Za({name:`${i}/config`,initialState:{online:cb(),focused:ob(),middlewareRegistered:!1,...p},reducers:{middlewareRegistered($,{payload:Z}){$.middlewareRegistered=$.middlewareRegistered==="conflict"||h!==Z?"conflict":!0}},extraReducers:$=>{$.addCase(Fu,Z=>{Z.online=!0}).addCase(tc,Z=>{Z.online=!1}).addCase(Wu,Z=>{Z.focused=!0}).addCase(ec,Z=>{Z.focused=!1}).addMatcher(w,Z=>({...Z}))}}),J=Zo({queries:j.reducer,mutations:H.reducer,provided:C.reducer,subscriptions:_.reducer,config:R.reducer}),G=($,Z)=>J(S.match(Z)?void 0:$,Z),W={...R.actions,...j.actions,...b.actions,..._.actions,...H.actions,...C.actions,resetApiState:S};return{reducer:G,actions:W}}var Mo=Symbol.for("RTKQ/skipToken"),hy={status:"uninitialized"},Mp=hi(hy,()=>{}),zp=hi(hy,()=>{});function bb({serializeQueryArgs:i,reducerPath:r,createSelector:c}){const s=b=>Mp,d=b=>zp;return{buildQuerySelector:E,buildInfiniteQuerySelector:j,buildMutationSelector:H,selectInvalidatedBy:Y,selectCachedArgsForQuery:C,selectApiState:g,selectQueries:w,selectMutations:p,selectQueryEntry:y,selectConfig:S};function h(b){return{...b,...wp(b.status)}}function g(b){return b[r]}function w(b){return g(b)?.queries}function y(b,_){return w(b)?.[_]}function p(b){return g(b)?.mutations}function S(b){return g(b)?.config}function T(b,_,R){return J=>{if(J===Mo)return c(s,R);const G=i({queryArgs:J,endpointDefinition:_,endpointName:b});return c($=>y($,G)??Mp,R)}}function E(b,_){return T(b,_,h)}function j(b,_){const{infiniteQueryOptions:R}=_;function J(G){const W={...G,...wp(G.status)},{isLoading:$,isError:Z,direction:N}=W,q=N==="forward",k=N==="backward";return{...W,hasNextPage:z(R,W.data,W.originalArgs),hasPreviousPage:Q(R,W.data,W.originalArgs),isFetchingNextPage:$&&q,isFetchingPreviousPage:$&&k,isFetchNextPageError:Z&&q,isFetchPreviousPageError:Z&&k}}return T(b,_,J)}function H(){return b=>{let _;return typeof b=="object"?_=fi(b)??Mo:_=b,c(_===Mo?d:G=>g(G)?.mutations?.[_]??zp,h)}}function Y(b,_){const R=b[r],J=new Set;for(const G of _.filter(Lu).map(Lo)){const W=R.provided.tags[G.type];if(!W)continue;let $=(G.id!==void 0?W[G.id]:_p(Object.values(W)))??[];for(const Z of $)J.add(Z)}return _p(Array.from(J.values()).map(G=>{const W=R.queries[G];return W?[{queryCacheKey:G,endpointName:W.endpointName,originalArgs:W.originalArgs}]:[]}))}function C(b,_){return Object.values(w(b)).filter(R=>R?.endpointName===_&&R.status!=="uninitialized").map(R=>R.originalArgs)}function z(b,_,R){return _?Xo(b,_,R)!=null:!1}function Q(b,_,R){return!_||!b.getPreviousPageParam?!1:fy(b,_,R)!=null}}var Np=WeakMap?new WeakMap:void 0,Cp=({endpointName:i,queryArgs:r})=>{let c="";const s=Np?.get(r);if(typeof s=="string")c=s;else{const d=JSON.stringify(r,(h,g)=>(g=typeof g=="bigint"?{$bigint:g.toString()}:g,g=Ia(g)?Object.keys(g).sort().reduce((w,y)=>(w[y]=g[y],w),{}):g,g));Ia(r)&&Np?.set(r,d),c=d}return`${i}(${c})`};function Sb(...i){return function(c){const s=Yu(p=>c.extractRehydrationInfo?.(p,{reducerPath:c.reducerPath??"api"})),d={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...c,extractRehydrationInfo:s,serializeQueryArgs(p){let S=Cp;if("serializeQueryArgs"in p.endpointDefinition){const T=p.endpointDefinition.serializeQueryArgs;S=E=>{const j=T(E);return typeof j=="string"?j:Cp({...E,queryArgs:j})}}else c.serializeQueryArgs&&(S=c.serializeQueryArgs);return S(p)},tagTypes:[...c.tagTypes||[]]},h={endpointDefinitions:{},batch(p){p()},apiUid:Iu(),extractRehydrationInfo:s,hasRehydrationInfo:Yu(p=>s(p)!=null)},g={injectEndpoints:y,enhanceEndpoints({addTagTypes:p,endpoints:S}){if(p)for(const T of p)d.tagTypes.includes(T)||d.tagTypes.push(T);if(S)for(const[T,E]of Object.entries(S))typeof E=="function"?E(h.endpointDefinitions[T]):Object.assign(h.endpointDefinitions[T]||{},E);return g}},w=i.map(p=>p.init(g,d,h));function y(p){const S=p.endpoints({query:T=>({...T,type:"query"}),mutation:T=>({...T,type:"mutation"}),infiniteQuery:T=>({...T,type:"infinitequery"})});for(const[T,E]of Object.entries(S)){if(p.overrideExisting!==!0&&T in h.endpointDefinitions){if(p.overrideExisting==="throw")throw new Error(zt(39));continue}h.endpointDefinitions[T]=E;for(const j of w)j.injectEndpoint(T,E)}return g}return g.injectEndpoints({endpoints:c.endpoints})}}function rn(i,...r){return Object.assign(i,...r)}var Tb=({api:i,queryThunk:r,internalState:c,mwApi:s})=>{const d=`${i.reducerPath}/subscriptions`;let h=null,g=null;const{updateSubscriptionOptions:w,unsubscribeQueryResult:y}=i.internalActions,p=(Y,C)=>{if(w.match(C)){const{queryCacheKey:Q,requestId:b,options:_}=C.payload,R=Y.get(Q);return R?.has(b)&&R.set(b,_),!0}if(y.match(C)){const{queryCacheKey:Q,requestId:b}=C.payload,_=Y.get(Q);return _&&_.delete(b),!0}if(i.internalActions.removeQueryResult.match(C))return Y.delete(C.payload.queryCacheKey),!0;if(r.pending.match(C)){const{meta:{arg:Q,requestId:b}}=C,_=Yo(Y,Q.queryCacheKey,ko);return Q.subscribe&&_.set(b,Q.subscriptionOptions??_.get(b)??{}),!0}let z=!1;if(r.rejected.match(C)){const{meta:{condition:Q,arg:b,requestId:_}}=C;if(Q&&b.subscribe){const R=Yo(Y,b.queryCacheKey,ko);R.set(_,b.subscriptionOptions??R.get(_)??{}),z=!0}}return z},S=()=>c.currentSubscriptions,j={getSubscriptions:S,getSubscriptionCount:Y=>S().get(Y)?.size??0,isRequestSubscribed:(Y,C)=>!!S()?.get(Y)?.get(C)};function H(Y){return JSON.parse(JSON.stringify(Object.fromEntries([...Y].map(([C,z])=>[C,Object.fromEntries(z)]))))}return(Y,C)=>{if(h||(h=H(c.currentSubscriptions)),i.util.resetApiState.match(Y))return h={},c.currentSubscriptions.clear(),g=null,[!0,!1];if(i.internalActions.internal_getRTKQSubscriptions.match(Y))return[!1,j];const z=p(c.currentSubscriptions,Y);let Q=!0;if(z){g||(g=setTimeout(()=>{const R=H(c.currentSubscriptions),[,J]=Zp(h,()=>R);C.next(i.internalActions.subscriptionsUpdated(J)),h=R,g=null},500));const b=typeof Y.type=="string"&&!!Y.type.startsWith(d),_=r.rejected.match(Y)&&Y.meta.condition&&!!Y.meta.arg.subscribe;Q=!b&&!_}return[Q,!1]}},Ab=2147483647/1e3-1,wb=({reducerPath:i,api:r,queryThunk:c,context:s,internalState:d,selectors:{selectQueryEntry:h,selectConfig:g},getRunningQueryThunk:w,mwApi:y})=>{const{removeQueryResult:p,unsubscribeQueryResult:S,cacheEntriesUpserted:T}=r.internalActions,E=d.runningQueries.get(y.dispatch),j=sn(S.match,c.fulfilled,c.rejected,T.match);function H(b){const _=d.currentSubscriptions.get(b);if(!_)return!1;const R=_.size>0,J=E?.[b]!==void 0;return R||J}const Y={},C=(b,_,R)=>{const J=_.getState(),G=g(J);if(j(b)){let W;if(T.match(b))W=b.payload.map($=>$.queryDescription.queryCacheKey);else{const{queryCacheKey:$}=S.match(b)?b.payload:b.meta.arg;W=[$]}z(W,_,G)}if(r.util.resetApiState.match(b))for(const[W,$]of Object.entries(Y))$&&clearTimeout($),delete Y[W];if(s.hasRehydrationInfo(b)){const{queries:W}=s.extractRehydrationInfo(b);z(Object.keys(W),_,G)}};function z(b,_,R){const J=_.getState();for(const G of b){const W=h(J,G);W?.endpointName&&Q(G,W.endpointName,_,R)}}function Q(b,_,R,J){const W=s.endpointDefinitions[_]?.keepUnusedDataFor??J.keepUnusedDataFor;if(W===1/0)return;const $=Math.max(0,Math.min(W,Ab));if(!H(b)){const Z=Y[b];Z&&clearTimeout(Z),Y[b]=setTimeout(()=>{if(!H(b)){const N=h(R.getState(),b);N?.endpointName&&R.dispatch(w(N.endpointName,N.originalArgs))?.abort(),R.dispatch(p({queryCacheKey:b}))}delete Y[b]},$*1e3)}}return C},xp=new Error("Promise never resolved before cacheEntryRemoved."),Eb=({api:i,reducerPath:r,context:c,queryThunk:s,mutationThunk:d,internalState:h,selectors:{selectQueryEntry:g,selectApiState:w}})=>{const y=qo(s),p=qo(d),S=Bn(s,d),T={};function E(z,Q,b){const _=T[z];_?.valueResolved&&(_.valueResolved({data:Q,meta:b}),delete _.valueResolved)}function j(z){const Q=T[z];Q&&(delete T[z],Q.cacheEntryRemoved())}const H=(z,Q,b)=>{const _=Y(z);function R(J,G,W,$){const Z=g(b,G),N=g(Q.getState(),G);!Z&&N&&C(J,$,G,Q,W)}if(s.pending.match(z))R(z.meta.arg.endpointName,_,z.meta.requestId,z.meta.arg.originalArgs);else if(i.internalActions.cacheEntriesUpserted.match(z))for(const{queryDescription:J,value:G}of z.payload){const{endpointName:W,originalArgs:$,queryCacheKey:Z}=J;R(W,Z,z.meta.requestId,$),E(Z,G,{})}else if(d.pending.match(z))Q.getState()[r].mutations[_]&&C(z.meta.arg.endpointName,z.meta.arg.originalArgs,_,Q,z.meta.requestId);else if(S(z))E(_,z.payload,z.meta.baseQueryMeta);else if(i.internalActions.removeQueryResult.match(z)||i.internalActions.removeMutationResult.match(z))j(_);else if(i.util.resetApiState.match(z))for(const J of Object.keys(T))j(J)};function Y(z){return y(z)?z.meta.arg.queryCacheKey:p(z)?z.meta.arg.fixedCacheKey??z.meta.requestId:i.internalActions.removeQueryResult.match(z)?z.payload.queryCacheKey:i.internalActions.removeMutationResult.match(z)?fi(z.payload):""}function C(z,Q,b,_,R){const J=c.endpointDefinitions[z],G=J?.onCacheEntryAdded;if(!G)return;const W={},$=new Promise(ne=>{W.cacheEntryRemoved=ne}),Z=Promise.race([new Promise(ne=>{W.valueResolved=ne}),$.then(()=>{throw xp})]);Z.catch(()=>{}),T[b]=W;const N=i.endpoints[z].select(Gu(J)?Q:b),q=_.dispatch((ne,D,I)=>I),k={..._,getCacheEntry:()=>N(_.getState()),requestId:R,extra:q,updateCachedData:Gu(J)?ne=>_.dispatch(i.util.updateQueryData(z,Q,ne)):void 0,cacheDataLoaded:Z,cacheEntryRemoved:$},ee=G(Q,k);Promise.resolve(ee).catch(ne=>{if(ne!==xp)throw ne})}return H},_b=({api:i,context:{apiUid:r},reducerPath:c})=>(s,d)=>{i.util.resetApiState.match(s)&&d.dispatch(i.internalActions.middlewareRegistered(r))},Ob=({reducerPath:i,context:r,context:{endpointDefinitions:c},mutationThunk:s,queryThunk:d,api:h,assertTagType:g,refetchQuery:w,internalState:y})=>{const{removeQueryResult:p}=h.internalActions,S=sn(Bn(s),Ju(s)),T=sn(Bn(s,d),Wa(s,d));let E=[];const j=(C,z)=>{S(C)?Y(dy(C,"invalidatesTags",c,g),z):T(C)?Y([],z):h.util.invalidateTags.match(C)&&Y(nc(C.payload,void 0,void 0,void 0,void 0,g),z)};function H(C){const{queries:z,mutations:Q}=C;for(const b of[z,Q])for(const _ in b)if(b[_]?.status==="pending")return!0;return!1}function Y(C,z){const Q=z.getState(),b=Q[i];if(E.push(...C),b.config.invalidationBehavior==="delayed"&&H(b))return;const _=E;if(E=[],_.length===0)return;const R=h.util.selectInvalidatedBy(Q,_);r.batch(()=>{const J=Array.from(R.values());for(const{queryCacheKey:G}of J){const W=b.queries[G],$=Yo(y.currentSubscriptions,G,ko);W&&($.size===0?z.dispatch(p({queryCacheKey:G})):W.status!=="uninitialized"&&z.dispatch(w(W)))}})}return j},Rb=({reducerPath:i,queryThunk:r,api:c,refetchQuery:s,internalState:d})=>{const{currentPolls:h,currentSubscriptions:g}=d,w=new Set;let y=null;const p=(C,z)=>{(c.internalActions.updateSubscriptionOptions.match(C)||c.internalActions.unsubscribeQueryResult.match(C))&&S(C.payload.queryCacheKey,z),(r.pending.match(C)||r.rejected.match(C)&&C.meta.condition)&&S(C.meta.arg.queryCacheKey,z),(r.fulfilled.match(C)||r.rejected.match(C)&&!C.meta.condition)&&T(C.meta.arg,z),c.util.resetApiState.match(C)&&(H(),y&&(clearTimeout(y),y=null),w.clear())};function S(C,z){w.add(C),y||(y=setTimeout(()=>{for(const Q of w)E({queryCacheKey:Q},z);w.clear(),y=null},0))}function T({queryCacheKey:C},z){const Q=z.getState()[i],b=Q.queries[C],_=g.get(C);if(!b||b.status==="uninitialized")return;const{lowestPollingInterval:R,skipPollingIfUnfocused:J}=Y(_);if(!Number.isFinite(R))return;const G=h.get(C);G?.timeout&&(clearTimeout(G.timeout),G.timeout=void 0);const W=Date.now()+R;h.set(C,{nextPollTimestamp:W,pollingInterval:R,timeout:setTimeout(()=>{(Q.config.focused||!J)&&z.dispatch(s(b)),T({queryCacheKey:C},z)},R)})}function E({queryCacheKey:C},z){const b=z.getState()[i].queries[C],_=g.get(C);if(!b||b.status==="uninitialized")return;const{lowestPollingInterval:R}=Y(_);if(!Number.isFinite(R)){j(C);return}const J=h.get(C),G=Date.now()+R;(!J||G<J.nextPollTimestamp)&&T({queryCacheKey:C},z)}function j(C){const z=h.get(C);z?.timeout&&clearTimeout(z.timeout),h.delete(C)}function H(){for(const C of h.keys())j(C)}function Y(C=new Map){let z=!1,Q=Number.POSITIVE_INFINITY;for(const b of C.values())b.pollingInterval&&(Q=Math.min(b.pollingInterval,Q),z=b.skipPollingIfUnfocused||z);return{lowestPollingInterval:Q,skipPollingIfUnfocused:z}}return p},Db=({api:i,context:r,queryThunk:c,mutationThunk:s})=>{const d=Wo(c,s),h=Wa(c,s),g=Bn(c,s),w={};return(p,S)=>{if(d(p)){const{requestId:T,arg:{endpointName:E,originalArgs:j}}=p.meta,H=r.endpointDefinitions[E],Y=H?.onQueryStarted;if(Y){const C={},z=new Promise((R,J)=>{C.resolve=R,C.reject=J});z.catch(()=>{}),w[T]=C;const Q=i.endpoints[E].select(Gu(H)?j:T),b=S.dispatch((R,J,G)=>G),_={...S,getCacheEntry:()=>Q(S.getState()),requestId:T,extra:b,updateCachedData:Gu(H)?R=>S.dispatch(i.util.updateQueryData(E,j,R)):void 0,queryFulfilled:z};Y(j,_)}}else if(g(p)){const{requestId:T,baseQueryMeta:E}=p.meta;w[T]?.resolve({data:p.payload,meta:E}),delete w[T]}else if(h(p)){const{requestId:T,rejectedWithValue:E,baseQueryMeta:j}=p.meta;w[T]?.reject({error:p.payload??p.error,isUnhandledError:!E,meta:j}),delete w[T]}}},Mb=({reducerPath:i,context:r,api:c,refetchQuery:s,internalState:d})=>{const{removeQueryResult:h}=c.internalActions,g=(y,p)=>{Wu.match(y)&&w(p,"refetchOnFocus"),Fu.match(y)&&w(p,"refetchOnReconnect")};function w(y,p){const S=y.getState()[i],T=S.queries,E=d.currentSubscriptions;r.batch(()=>{for(const j of E.keys()){const H=T[j],Y=E.get(j);if(!Y||!H)continue;const C=[...Y.values()];(C.some(Q=>Q[p]===!0)||C.every(Q=>Q[p]===void 0)&&S.config[p])&&(Y.size===0?y.dispatch(h({queryCacheKey:j})):H.status!=="uninitialized"&&y.dispatch(s(H)))}})}return g};function zb(i){const{reducerPath:r,queryThunk:c,api:s,context:d,internalState:h}=i,{apiUid:g}=d,w={invalidateTags:Bt(`${r}/invalidateTags`)},y=E=>E.type.startsWith(`${r}/`),p=[_b,wb,Ob,Rb,Eb,Db];return{middleware:E=>{let j=!1;const H={...i,internalState:h,refetchQuery:T,isThisApiSliceAction:y,mwApi:E},Y=p.map(Q=>Q(H)),C=Tb(H),z=Mb(H);return Q=>b=>{if(!Yp(b))return Q(b);j||(j=!0,E.dispatch(s.internalActions.middlewareRegistered(g)));const _={...E,next:Q},R=E.getState(),[J,G]=C(b,_,R);let W;if(J?W=Q(b):W=G,E.getState()[r]&&(z(b,_,R),y(b)||d.hasRehydrationInfo(b)))for(const $ of Y)$(b,_,R);return W}},actions:w};function T(E){return i.api.endpoints[E.endpointName].initiate(E.originalArgs,{subscribe:!1,forceRefetch:!0})}}var Up=Symbol(),Nb=({createSelector:i=Kp}={})=>({name:Up,init(r,{baseQuery:c,tagTypes:s,reducerPath:d,serializeQueryArgs:h,keepUnusedDataFor:g,refetchOnMountOrArgChange:w,refetchOnFocus:y,refetchOnReconnect:p,invalidationBehavior:S,onSchemaFailure:T,catchSchemaFailure:E,skipSchemaValidation:j},H){Dv();const Y=le=>le;Object.assign(r,{reducerPath:d,endpoints:{},internalActions:{onOnline:Fu,onOffline:tc,onFocus:Wu,onFocusLost:ec},util:{}});const C=bb({serializeQueryArgs:h,reducerPath:d,createSelector:i}),{selectInvalidatedBy:z,selectCachedArgsForQuery:Q,buildQuerySelector:b,buildInfiniteQuerySelector:_,buildMutationSelector:R}=C;rn(r.util,{selectInvalidatedBy:z,selectCachedArgsForQuery:Q});const{queryThunk:J,infiniteQueryThunk:G,mutationThunk:W,patchQueryData:$,updateQueryData:Z,upsertQueryData:N,prefetch:q,buildMatchThunkActions:k}=gb({baseQuery:c,reducerPath:d,context:H,api:r,serializeQueryArgs:h,assertTagType:Y,selectors:C,onSchemaFailure:T,catchSchemaFailure:E,skipSchemaValidation:j}),{reducer:ee,actions:ne}=vb({context:H,queryThunk:J,mutationThunk:W,serializeQueryArgs:h,reducerPath:d,assertTagType:Y,config:{refetchOnFocus:y,refetchOnReconnect:p,refetchOnMountOrArgChange:w,keepUnusedDataFor:g,reducerPath:d,invalidationBehavior:S}});rn(r.util,{patchQueryData:$,updateQueryData:Z,upsertQueryData:N,prefetch:q,resetApiState:ne.resetApiState,upsertQueryEntries:ne.cacheEntriesUpserted}),rn(r.internalActions,ne);const D={currentSubscriptions:new Map,currentPolls:new Map,runningQueries:new Map,runningMutations:new Map},{buildInitiateQuery:I,buildInitiateInfiniteQuery:P,buildInitiateMutation:ae,getRunningMutationThunk:v,getRunningMutationsThunk:L,getRunningQueriesThunk:te,getRunningQueryThunk:F}=mb({queryThunk:J,mutationThunk:W,infiniteQueryThunk:G,api:r,serializeQueryArgs:h,context:H,internalState:D});rn(r.util,{getRunningMutationThunk:v,getRunningMutationsThunk:L,getRunningQueryThunk:F,getRunningQueriesThunk:te});const{middleware:ie,actions:oe}=zb({reducerPath:d,context:H,queryThunk:J,mutationThunk:W,infiniteQueryThunk:G,api:r,assertTagType:Y,selectors:C,getRunningQueryThunk:F,internalState:D});return rn(r.util,oe),rn(r,{reducer:ee,middleware:ie}),{name:Up,injectEndpoint(le,pe){const ce=r,me=ce.endpoints[le]??={};$u(pe)&&rn(me,{name:le,select:b(le,pe),initiate:I(le,pe)},k(J,le)),hb(pe)&&rn(me,{name:le,select:R(),initiate:ae(le)},k(W,le)),Pu(pe)&&rn(me,{name:le,select:_(le,pe),initiate:P(le,pe)},k(J,le))}}}});Nb();const Cb=g0($o,Po),xb=i=>{const r=Kv({reducer:Cb,preloadedState:i});return db(r.dispatch),r},Ub=xb(),Bp=document.getElementById("root");if(Bp)Xg.createRoot(Bp).render(se.jsx(jg.StrictMode,{children:se.jsx(rv,{store:Ub,children:se.jsx(rb,{})})}));else throw new Error("Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.");
