(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Cd={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function eb(){if(k_)return El;k_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return El.Fragment=t,El.jsx=n,El.jsxs=n,El}var U_;function nb(){return U_||(U_=1,Cd.exports=eb()),Cd.exports}var J=nb(),Dd={exports:{}},wt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function ib(){if(L_)return wt;L_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=w&&D[w]||D["@@iterator"],typeof D=="function"?D:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,et={};function $(D,Z,rt){this.props=D,this.context=Z,this.refs=et,this.updater=rt||j}$.prototype.isReactComponent={},$.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},$.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function st(){}st.prototype=$.prototype;function ut(D,Z,rt){this.props=D,this.context=Z,this.refs=et,this.updater=rt||j}var it=ut.prototype=new st;it.constructor=ut,X(it,$.prototype),it.isPureReactComponent=!0;var mt=Array.isArray,ht={H:null,A:null,T:null,S:null,V:null},Lt=Object.prototype.hasOwnProperty;function O(D,Z,rt,W,gt,It){return rt=It.ref,{$$typeof:r,type:D,key:Z,ref:rt!==void 0?rt:null,props:It}}function S(D,Z){return O(D.type,Z,void 0,void 0,void 0,D.props)}function I(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function V(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(rt){return Z[rt]})}var M=/\/+/g;function x(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?V(""+D.key):Z.toString(36)}function R(){}function ke(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(R,R):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ae(D,Z,rt,W,gt){var It=typeof D;(It==="undefined"||It==="boolean")&&(D=null);var At=!1;if(D===null)At=!0;else switch(It){case"bigint":case"string":case"number":At=!0;break;case"object":switch(D.$$typeof){case r:case t:At=!0;break;case E:return At=D._init,ae(At(D._payload),Z,rt,W,gt)}}if(At)return gt=gt(D),At=W===""?"."+x(D,0):W,mt(gt)?(rt="",At!=null&&(rt=At.replace(M,"$&/")+"/"),ae(gt,Z,rt,"",function(Kn){return Kn})):gt!=null&&(I(gt)&&(gt=S(gt,rt+(gt.key==null||D&&D.key===gt.key?"":(""+gt.key).replace(M,"$&/")+"/")+At)),Z.push(gt)),1;At=0;var De=W===""?".":W+":";if(mt(D))for(var Jt=0;Jt<D.length;Jt++)W=D[Jt],It=De+x(W,Jt),At+=ae(W,Z,rt,It,gt);else if(Jt=C(D),typeof Jt=="function")for(D=Jt.call(D),Jt=0;!(W=D.next()).done;)W=W.value,It=De+x(W,Jt++),At+=ae(W,Z,rt,It,gt);else if(It==="object"){if(typeof D.then=="function")return ae(ke(D),Z,rt,W,gt);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return At}function H(D,Z,rt){if(D==null)return D;var W=[],gt=0;return ae(D,W,"","",function(It){return Z.call(rt,It,gt++)}),W}function nt(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(rt){(D._status===0||D._status===-1)&&(D._status=1,D._result=rt)},function(rt){(D._status===0||D._status===-1)&&(D._status=2,D._result=rt)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var ft=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Bt(){}return wt.Children={map:H,forEach:function(D,Z,rt){H(D,function(){Z.apply(this,arguments)},rt)},count:function(D){var Z=0;return H(D,function(){Z++}),Z},toArray:function(D){return H(D,function(Z){return Z})||[]},only:function(D){if(!I(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},wt.Component=$,wt.Fragment=n,wt.Profiler=o,wt.PureComponent=ut,wt.StrictMode=s,wt.Suspense=y,wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ht,wt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ht.H.useMemoCache(D)}},wt.cache=function(D){return function(){return D.apply(null,arguments)}},wt.cloneElement=function(D,Z,rt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var W=X({},D.props),gt=D.key,It=void 0;if(Z!=null)for(At in Z.ref!==void 0&&(It=void 0),Z.key!==void 0&&(gt=""+Z.key),Z)!Lt.call(Z,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&Z.ref===void 0||(W[At]=Z[At]);var At=arguments.length-2;if(At===1)W.children=rt;else if(1<At){for(var De=Array(At),Jt=0;Jt<At;Jt++)De[Jt]=arguments[Jt+2];W.children=De}return O(D.type,gt,void 0,void 0,It,W)},wt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},wt.createElement=function(D,Z,rt){var W,gt={},It=null;if(Z!=null)for(W in Z.key!==void 0&&(It=""+Z.key),Z)Lt.call(Z,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(gt[W]=Z[W]);var At=arguments.length-2;if(At===1)gt.children=rt;else if(1<At){for(var De=Array(At),Jt=0;Jt<At;Jt++)De[Jt]=arguments[Jt+2];gt.children=De}if(D&&D.defaultProps)for(W in At=D.defaultProps,At)gt[W]===void 0&&(gt[W]=At[W]);return O(D,It,void 0,void 0,null,gt)},wt.createRef=function(){return{current:null}},wt.forwardRef=function(D){return{$$typeof:m,render:D}},wt.isValidElement=I,wt.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:nt}},wt.memo=function(D,Z){return{$$typeof:p,type:D,compare:Z===void 0?null:Z}},wt.startTransition=function(D){var Z=ht.T,rt={};ht.T=rt;try{var W=D(),gt=ht.S;gt!==null&&gt(rt,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(Bt,ft)}catch(It){ft(It)}finally{ht.T=Z}},wt.unstable_useCacheRefresh=function(){return ht.H.useCacheRefresh()},wt.use=function(D){return ht.H.use(D)},wt.useActionState=function(D,Z,rt){return ht.H.useActionState(D,Z,rt)},wt.useCallback=function(D,Z){return ht.H.useCallback(D,Z)},wt.useContext=function(D){return ht.H.useContext(D)},wt.useDebugValue=function(){},wt.useDeferredValue=function(D,Z){return ht.H.useDeferredValue(D,Z)},wt.useEffect=function(D,Z,rt){var W=ht.H;if(typeof rt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(D,Z)},wt.useId=function(){return ht.H.useId()},wt.useImperativeHandle=function(D,Z,rt){return ht.H.useImperativeHandle(D,Z,rt)},wt.useInsertionEffect=function(D,Z){return ht.H.useInsertionEffect(D,Z)},wt.useLayoutEffect=function(D,Z){return ht.H.useLayoutEffect(D,Z)},wt.useMemo=function(D,Z){return ht.H.useMemo(D,Z)},wt.useOptimistic=function(D,Z){return ht.H.useOptimistic(D,Z)},wt.useReducer=function(D,Z,rt){return ht.H.useReducer(D,Z,rt)},wt.useRef=function(D){return ht.H.useRef(D)},wt.useState=function(D){return ht.H.useState(D)},wt.useSyncExternalStore=function(D,Z,rt){return ht.H.useSyncExternalStore(D,Z,rt)},wt.useTransition=function(){return ht.H.useTransition()},wt.version="19.1.1",wt}var z_;function Em(){return z_||(z_=1,Dd.exports=ib()),Dd.exports}var Tt=Em(),Nd={exports:{}},Al={},Od={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function rb(){return B_||(B_=1,(function(r){function t(H,nt){var ft=H.length;H.push(nt);t:for(;0<ft;){var Bt=ft-1>>>1,D=H[Bt];if(0<o(D,nt))H[Bt]=nt,H[ft]=D,ft=Bt;else break t}}function n(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var nt=H[0],ft=H.pop();if(ft!==nt){H[0]=ft;t:for(var Bt=0,D=H.length,Z=D>>>1;Bt<Z;){var rt=2*(Bt+1)-1,W=H[rt],gt=rt+1,It=H[gt];if(0>o(W,ft))gt<D&&0>o(It,W)?(H[Bt]=It,H[gt]=ft,Bt=gt):(H[Bt]=W,H[rt]=ft,Bt=rt);else if(gt<D&&0>o(It,ft))H[Bt]=It,H[gt]=ft,Bt=gt;else break t}}return nt}function o(H,nt){var ft=H.sortIndex-nt.sortIndex;return ft!==0?ft:H.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var y=[],p=[],E=1,w=null,C=3,j=!1,X=!1,et=!1,$=!1,st=typeof setTimeout=="function"?setTimeout:null,ut=typeof clearTimeout=="function"?clearTimeout:null,it=typeof setImmediate<"u"?setImmediate:null;function mt(H){for(var nt=n(p);nt!==null;){if(nt.callback===null)s(p);else if(nt.startTime<=H)s(p),nt.sortIndex=nt.expirationTime,t(y,nt);else break;nt=n(p)}}function ht(H){if(et=!1,mt(H),!X)if(n(y)!==null)X=!0,Lt||(Lt=!0,x());else{var nt=n(p);nt!==null&&ae(ht,nt.startTime-H)}}var Lt=!1,O=-1,S=5,I=-1;function V(){return $?!0:!(r.unstable_now()-I<S)}function M(){if($=!1,Lt){var H=r.unstable_now();I=H;var nt=!0;try{t:{X=!1,et&&(et=!1,ut(O),O=-1),j=!0;var ft=C;try{e:{for(mt(H),w=n(y);w!==null&&!(w.expirationTime>H&&V());){var Bt=w.callback;if(typeof Bt=="function"){w.callback=null,C=w.priorityLevel;var D=Bt(w.expirationTime<=H);if(H=r.unstable_now(),typeof D=="function"){w.callback=D,mt(H),nt=!0;break e}w===n(y)&&s(y),mt(H)}else s(y);w=n(y)}if(w!==null)nt=!0;else{var Z=n(p);Z!==null&&ae(ht,Z.startTime-H),nt=!1}}break t}finally{w=null,C=ft,j=!1}nt=void 0}}finally{nt?x():Lt=!1}}}var x;if(typeof it=="function")x=function(){it(M)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,ke=R.port2;R.port1.onmessage=M,x=function(){ke.postMessage(null)}}else x=function(){st(M,0)};function ae(H,nt){O=st(function(){H(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_next=function(H){switch(C){case 1:case 2:case 3:var nt=3;break;default:nt=C}var ft=C;C=nt;try{return H()}finally{C=ft}},r.unstable_requestPaint=function(){$=!0},r.unstable_runWithPriority=function(H,nt){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ft=C;C=H;try{return nt()}finally{C=ft}},r.unstable_scheduleCallback=function(H,nt,ft){var Bt=r.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?Bt+ft:Bt):ft=Bt,H){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ft+D,H={id:E++,callback:nt,priorityLevel:H,startTime:ft,expirationTime:D,sortIndex:-1},ft>Bt?(H.sortIndex=ft,t(p,H),n(y)===null&&H===n(p)&&(et?(ut(O),O=-1):et=!0,ae(ht,ft-Bt))):(H.sortIndex=D,t(y,H),X||j||(X=!0,Lt||(Lt=!0,x()))),H},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(H){var nt=C;return function(){var ft=C;C=nt;try{return H.apply(this,arguments)}finally{C=ft}}}})(Vd)),Vd}var q_;function sb(){return q_||(q_=1,Od.exports=rb()),Od.exports}var Md={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function ab(){if(j_)return Ke;j_=1;var r=Em();function t(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(y,p,E){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:y,containerInfo:p,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ke.createPortal=function(y,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(y,p,null,E)},Ke.flushSync=function(y){var p=f.T,E=s.p;try{if(f.T=null,s.p=2,y)return y()}finally{f.T=p,s.p=E,s.d.f()}},Ke.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(y,p))},Ke.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Ke.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var E=p.as,w=m(E,p.crossOrigin),C=typeof p.integrity=="string"?p.integrity:void 0,j=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?s.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:w,integrity:C,fetchPriority:j}):E==="script"&&s.d.X(y,{crossOrigin:w,integrity:C,fetchPriority:j,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ke.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=m(p.as,p.crossOrigin);s.d.M(y,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(y)},Ke.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,w=m(E,p.crossOrigin);s.d.L(y,E,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ke.preloadModule=function(y,p){if(typeof y=="string")if(p){var E=m(p.as,p.crossOrigin);s.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(y)},Ke.requestFormReset=function(y){s.d.r(y)},Ke.unstable_batchedUpdates=function(y,p){return y(p)},Ke.useFormState=function(y,p,E){return f.H.useFormState(y,p,E)},Ke.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ke.version="19.1.1",Ke}var H_;function ob(){if(H_)return Md.exports;H_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Md.exports=ab(),Md.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function lb(){if(F_)return Al;F_=1;var r=sb(),t=Em(),n=ob();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function y(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),e;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var E=Object.assign,w=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),st=Symbol.for("react.provider"),ut=Symbol.for("react.consumer"),it=Symbol.for("react.context"),mt=Symbol.for("react.forward_ref"),ht=Symbol.for("react.suspense"),Lt=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function x(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var R=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case $:return"Profiler";case et:return"StrictMode";case ht:return"Suspense";case Lt:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case it:return(e.displayName||"Context")+".Provider";case ut:return(e._context.displayName||"Context")+".Consumer";case mt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:ke(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return ke(e(i))}catch{}}return null}var ae=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},Bt=[],D=-1;function Z(e){return{current:e}}function rt(e){0>D||(e.current=Bt[D],Bt[D]=null,D--)}function W(e,i){D++,Bt[D]=e.current,e.current=i}var gt=Z(null),It=Z(null),At=Z(null),De=Z(null);function Jt(e,i){switch(W(At,i),W(It,e),W(gt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?c_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=c_(i),e=h_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(gt),W(gt,e)}function Kn(){rt(gt),rt(It),rt(At)}function er(e){e.memoizedState!==null&&W(De,e);var i=gt.current,a=h_(i,e.type);i!==a&&(W(It,e),W(gt,a))}function Ai(e){It.current===e&&(rt(gt),rt(It)),De.current===e&&(rt(De),pl._currentValue=ft)}var Gr=Object.prototype.hasOwnProperty,Qr=r.unstable_scheduleCallback,Kr=r.unstable_cancelCallback,fo=r.unstable_shouldYield,eu=r.unstable_requestPaint,_n=r.unstable_now,Ih=r.unstable_getCurrentPriorityLevel,mo=r.unstable_ImmediatePriority,Ys=r.unstable_UserBlockingPriority,Yr=r.unstable_NormalPriority,Ch=r.unstable_LowPriority,Xs=r.unstable_IdlePriority,go=r.log,nu=r.unstable_setDisableYieldValue,oe=null,Ft=null;function ln(e){if(typeof go=="function"&&nu(e),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(oe,e)}catch{}}var Ge=Math.clz32?Math.clz32:Xr,iu=Math.log,Dh=Math.LN2;function Xr(e){return e>>>=0,e===0?32:31-(iu(e)/Dh|0)|0}var $r=256,Zr=4194304;function Pn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $s(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Pn(l):(v&=T,v!==0?h=Pn(v):a||(a=T&~e,a!==0&&(h=Pn(a))))):(T=l&~d,T!==0?h=Pn(T):v!==0?h=Pn(v):a||(a=l&~e,a!==0&&(h=Pn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function Jr(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function po(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yo(){var e=$r;return $r<<=1,($r&4194048)===0&&($r=256),e}function _o(){var e=Zr;return Zr<<=1,(Zr&62914560)===0&&(Zr=4194304),e}function Si(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function bi(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vo(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,b=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var F=31-Ge(a),K=1<<F;T[F]=0,b[F]=-1;var z=L[F];if(z!==null)for(L[F]=null,F=0;F<z.length;F++){var B=z[F];B!==null&&(B.lane&=-536870913)}a&=~K}l!==0&&Yn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Yn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ge(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function To(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Ge(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function nr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ir(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:N_(e.type))}function ru(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var ne=Math.random().toString(36).slice(2),Se="__reactFiber$"+ne,pe="__reactProps$"+ne,vn="__reactContainer$"+ne,Eo="__reactEvents$"+ne,Nh="__reactListeners$"+ne,rr="__reactHandles$"+ne,su="__reactResources$"+ne,Wr="__reactMarker$"+ne;function sr(e){delete e[Se],delete e[pe],delete e[Eo],delete e[Nh],delete e[rr]}function wi(e){var i=e[Se];if(i)return i;for(var a=e.parentNode;a;){if(i=a[vn]||a[Se]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=g_(e);e!==null;){if(a=e[Se])return a;e=g_(e)}return i}e=a,a=e.parentNode}return null}function Xn(e){if(e=e[Se]||e[vn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function $n(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Je(e){var i=e[su];return i||(i=e[su]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function he(e){e[Wr]=!0}var Ao=new Set,Js={};function xn(e,i){Ri(e,i),Ri(e+"Capture",i)}function Ri(e,i){for(Js[e]=i,e=0;e<i.length;e++)Ao.add(i[e])}var au=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ou={},ts={};function lu(e){return Gr.call(ts,e)?!0:Gr.call(ou,e)?!1:au.test(e)?ts[e]=!0:(ou[e]=!0,!1)}function ar(e,i,a){if(lu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Zn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Ue(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var es,uu;function Ii(e){if(es===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);es=i&&i[1]||"",uu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+es+e+uu}var Ws=!1;function ta(e,i){if(!e||Ws)return"";Ws=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(B){var z=B}Reflect.construct(e,[],K)}else{try{K.call()}catch(B){z=B}e.call(K.prototype)}}else{try{throw Error()}catch(B){z=B}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var b=v.split(`
`),L=T.split(`
`);for(h=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===b.length||h===L.length)for(l=b.length-1,h=L.length-1;1<=l&&0<=h&&b[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(b[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||b[l]!==L[h]){var F=`
`+b[l].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=l&&0<=h);break}}}finally{Ws=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ii(a):""}function So(e){switch(e.tag){case 26:case 27:case 5:return Ii(e.type);case 16:return Ii("Lazy");case 13:return Ii("Suspense");case 19:return Ii("SuspenseList");case 0:case 15:return ta(e.type,!1);case 11:return ta(e.type.render,!1);case 1:return ta(e.type,!0);case 31:return Ii("Activity");default:return""}}function ea(e){try{var i="";do i+=So(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function We(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bo(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Oh(e){var i=bo(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function na(e){e._valueTracker||(e._valueTracker=Oh(e))}function wo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=bo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vh=/[\n"\\]/g;function ye(e){return e.replace(Vh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function un(e,i,a,l,h,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+We(i)):e.value!==""+We(i)&&(e.value=""+We(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?or(e,v,We(i)):a!=null?or(e,v,We(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+We(T):e.removeAttribute("name")}function is(e,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+We(a):"",i=i!=null?""+We(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function or(e,i,a){i==="number"&&ns(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ci(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+We(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Kt(e,i,a){if(i!=null&&(i=""+We(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+We(a):""}function rs(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(ae(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=We(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Tn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var ss=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cu(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||ss.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Ro(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&cu(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&cu(e,d,i[d])}function Io(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ph=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ia(e){return Ph.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Di=null;function En(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ni=null,Oi=null;function Co(e){var i=Xn(e);if(i&&(e=i.stateNode)){var a=e[pe]||null;t:switch(e=i.stateNode,i.type){case"input":if(un(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ye(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[pe]||null;if(!h)throw Error(s(90));un(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&wo(l)}break t;case"textarea":Kt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Ci(e,!!a.multiple,i,!1)}}}var Jn=!1;function hu(e,i,a){if(Jn)return e(i,a);Jn=!0;try{var l=e(i);return l}finally{if(Jn=!1,(Ni!==null||Oi!==null)&&(rc(),Ni&&(i=Ni,e=Oi,Oi=Ni=null,Co(i),e)))for(i=0;i<e.length;i++)Co(e[i])}}function as(e,i){var a=e.stateNode;if(a===null)return null;var l=a[pe]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),An=!1;if(kn)try{var os={};Object.defineProperty(os,"passive",{get:function(){An=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{An=!1}var Wn=null,lr=null,Vi=null;function Do(){if(Vi)return Vi;var e,i=lr,a=i.length,l,h="value"in Wn?Wn.value:Wn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Vi=h.slice(e,1<l?1-l:void 0)}function ti(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ei(){return!0}function No(){return!1}function Ne(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ei:No,this.isPropagationStopped=No,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),i}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ra=Ne(jt),ls=E({},jt,{view:0,detail:0}),fu=Ne(ls),sa,aa,ni,us=E({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ni&&(ni&&e.type==="mousemove"?(sa=e.screenX-ni.screenX,aa=e.screenY-ni.screenY):aa=sa=0,ni=e),sa)},movementY:function(e){return"movementY"in e?e.movementY:aa}}),Sn=Ne(us),du=E({},us,{dataTransfer:0}),xh=Ne(du),cs=E({},ls,{relatedTarget:0}),oa=Ne(cs),Oo=E({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),la=Ne(Oo),mu=E({},jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ua=Ne(mu),kh=E({},jt,{data:0}),Vo=Ne(kh),hs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mo(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=pu[e])?!!i[e]:!1}function fs(){return Mo}var yu=E({},ls,{key:function(e){if(e.key){var i=hs[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fs,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ca=Ne(yu),_u=E({},us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Po=Ne(_u),Mi=E({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fs}),vu=Ne(Mi),Tu=E({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eu=Ne(Tu),Au=E({},us,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ha=Ne(Au),tn=E({},jt,{newState:0,oldState:0}),Su=Ne(tn),bu=[9,13,27,32],ii=kn&&"CompositionEvent"in window,c=null;kn&&"documentMode"in document&&(c=document.documentMode);var g=kn&&"TextEvent"in window&&!c,_=kn&&(!ii||c&&8<c&&11>=c),A=" ",k=!1;function q(e,i){switch(e){case"keyup":return bu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pt=!1;function be(e,i){switch(e){case"compositionend":return tt(i);case"keypress":return i.which!==32?null:(k=!0,A);case"textInput":return e=i.data,e===A&&k?null:e;default:return null}}function xt(e,i){if(Pt)return e==="compositionend"||!ii&&q(e,i)?(e=Do(),Vi=lr=Wn=null,Pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Oe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function we(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Oe[e.type]:i==="textarea"}function Pi(e,i,a,l){Ni?Oi?Oi.push(l):Oi=[l]:Ni=l,i=cc(i,"onChange"),0<i.length&&(a=new ra("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var Le=null,ri=null;function xo(e){s_(e,0)}function wu(e){var i=$n(e);if(wo(i))return e}function Rg(e,i){if(e==="change")return i}var Ig=!1;if(kn){var Uh;if(kn){var Lh="oninput"in document;if(!Lh){var Cg=document.createElement("div");Cg.setAttribute("oninput","return;"),Lh=typeof Cg.oninput=="function"}Uh=Lh}else Uh=!1;Ig=Uh&&(!document.documentMode||9<document.documentMode)}function Dg(){Le&&(Le.detachEvent("onpropertychange",Ng),ri=Le=null)}function Ng(e){if(e.propertyName==="value"&&wu(ri)){var i=[];Pi(i,ri,e,En(e)),hu(xo,i)}}function OA(e,i,a){e==="focusin"?(Dg(),Le=i,ri=a,Le.attachEvent("onpropertychange",Ng)):e==="focusout"&&Dg()}function VA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wu(ri)}function MA(e,i){if(e==="click")return wu(i)}function PA(e,i){if(e==="input"||e==="change")return wu(i)}function xA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var cn=typeof Object.is=="function"?Object.is:xA;function ko(e,i){if(cn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Gr.call(i,h)||!cn(e[h],i[h]))return!1}return!0}function Og(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vg(e,i){var a=Og(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Og(a)}}function Mg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Mg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Pg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ns(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ns(e.document)}return i}function zh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var kA=kn&&"documentMode"in document&&11>=document.documentMode,fa=null,Bh=null,Uo=null,qh=!1;function xg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qh||fa==null||fa!==ns(l)||(l=fa,"selectionStart"in l&&zh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Uo&&ko(Uo,l)||(Uo=l,l=cc(Bh,"onSelect"),0<l.length&&(i=new ra("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=fa)))}function ds(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var da={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionrun:ds("Transition","TransitionRun"),transitionstart:ds("Transition","TransitionStart"),transitioncancel:ds("Transition","TransitionCancel"),transitionend:ds("Transition","TransitionEnd")},jh={},kg={};kn&&(kg=document.createElement("div").style,"AnimationEvent"in window||(delete da.animationend.animation,delete da.animationiteration.animation,delete da.animationstart.animation),"TransitionEvent"in window||delete da.transitionend.transition);function ms(e){if(jh[e])return jh[e];if(!da[e])return e;var i=da[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in kg)return jh[e]=i[a];return e}var Ug=ms("animationend"),Lg=ms("animationiteration"),zg=ms("animationstart"),UA=ms("transitionrun"),LA=ms("transitionstart"),zA=ms("transitioncancel"),Bg=ms("transitionend"),qg=new Map,Hh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hh.push("scrollEnd");function Un(e,i){qg.set(e,i),xn(i,[e])}var jg=new WeakMap;function bn(e,i){if(typeof e=="object"&&e!==null){var a=jg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:ea(i)},jg.set(e,i),i)}return{value:e,source:i,stack:ea(i)}}var wn=[],ma=0,Fh=0;function Ru(){for(var e=ma,i=Fh=ma=0;i<e;){var a=wn[i];wn[i++]=null;var l=wn[i];wn[i++]=null;var h=wn[i];wn[i++]=null;var d=wn[i];if(wn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Hg(a,h,d)}}function Iu(e,i,a,l){wn[ma++]=e,wn[ma++]=i,wn[ma++]=a,wn[ma++]=l,Fh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Gh(e,i,a,l){return Iu(e,i,a,l),Cu(e)}function ga(e,i){return Iu(e,null,null,i),Cu(e)}function Hg(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Ge(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Cu(e){if(50<ll)throw ll=0,Jf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var pa={};function BA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,i,a,l){return new BA(e,i,a,l)}function Qh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xi(e,i){var a=e.alternate;return a===null?(a=hn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Fg(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Du(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")Qh(e)&&(v=1);else if(typeof e=="string")v=jS(e,a,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case I:return e=hn(31,a,i,h),e.elementType=I,e.lanes=d,e;case X:return gs(a.children,h,d,i);case et:v=8,h|=24;break;case $:return e=hn(12,a,i,h|2),e.elementType=$,e.lanes=d,e;case ht:return e=hn(13,a,i,h),e.elementType=ht,e.lanes=d,e;case Lt:return e=hn(19,a,i,h),e.elementType=Lt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case st:case it:v=10;break t;case ut:v=9;break t;case mt:v=11;break t;case O:v=14;break t;case S:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=hn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function gs(e,i,a,l){return e=hn(7,e,l,i),e.lanes=a,e}function Kh(e,i,a){return e=hn(6,e,null,i),e.lanes=a,e}function Yh(e,i,a){return i=hn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var ya=[],_a=0,Nu=null,Ou=0,Rn=[],In=0,ps=null,ki=1,Ui="";function ys(e,i){ya[_a++]=Ou,ya[_a++]=Nu,Nu=e,Ou=i}function Gg(e,i,a){Rn[In++]=ki,Rn[In++]=Ui,Rn[In++]=ps,ps=e;var l=ki;e=Ui;var h=32-Ge(l)-1;l&=~(1<<h),a+=1;var d=32-Ge(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,ki=1<<32-Ge(i)+h|a<<h|l,Ui=d+e}else ki=1<<d|a<<h|l,Ui=e}function Xh(e){e.return!==null&&(ys(e,1),Gg(e,1,0))}function $h(e){for(;e===Nu;)Nu=ya[--_a],ya[_a]=null,Ou=ya[--_a],ya[_a]=null;for(;e===ps;)ps=Rn[--In],Rn[In]=null,Ui=Rn[--In],Rn[In]=null,ki=Rn[--In],Rn[In]=null}var en=null,le=null,qt=!1,_s=null,si=!1,Zh=Error(s(519));function vs(e){var i=Error(s(418,""));throw Bo(bn(i,e)),Zh}function Qg(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[Se]=e,i[pe]=l,a){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(a=0;a<cl.length;a++)Nt(cl[a],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":Nt("invalid",i),is(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),na(i);break;case"select":Nt("invalid",i);break;case"textarea":Nt("invalid",i),rs(i,l.value,l.defaultValue,l.children),na(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||u_(i.textContent,a)?(l.popover!=null&&(Nt("beforetoggle",i),Nt("toggle",i)),l.onScroll!=null&&Nt("scroll",i),l.onScrollEnd!=null&&Nt("scrollend",i),l.onClick!=null&&(i.onclick=hc),i=!0):i=!1,i||vs(e)}function Kg(e){for(en=e.return;en;)switch(en.tag){case 5:case 13:si=!1;return;case 27:case 3:si=!0;return;default:en=en.return}}function Lo(e){if(e!==en)return!1;if(!qt)return Kg(e),qt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||md(e.type,e.memoizedProps)),a=!a),a&&le&&vs(e),Kg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){le=zn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}le=null}}else i===27?(i=le,br(e.type)?(e=_d,_d=null,le=e):le=i):le=en?zn(e.stateNode.nextSibling):null;return!0}function zo(){le=en=null,qt=!1}function Yg(){var e=_s;return e!==null&&(sn===null?sn=e:sn.push.apply(sn,e),_s=null),e}function Bo(e){_s===null?_s=[e]:_s.push(e)}var Jh=Z(null),Ts=null,Li=null;function ur(e,i,a){W(Jh,i._currentValue),i._currentValue=a}function zi(e){e._currentValue=Jh.current,rt(Jh)}function Wh(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function tf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var b=0;b<i.length;b++)if(T.context===i[b]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Wh(d.return,a,e),l||(v=null);break t}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Wh(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function qo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;cn(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===De.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(pl):e=[pl])}h=h.return}e!==null&&tf(i,e,a,l),i.flags|=262144}function Vu(e){for(e=e.firstContext;e!==null;){if(!cn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Es(e){Ts=e,Li=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return Xg(Ts,e)}function Mu(e,i){return Ts===null&&Es(e),Xg(e,i)}function Xg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Li===null){if(e===null)throw Error(s(308));Li=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Li=Li.next=i;return a}var qA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},jA=r.unstable_scheduleCallback,HA=r.unstable_NormalPriority,Re={$$typeof:it,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ef(){return{controller:new qA,data:new Map,refCount:0}}function jo(e){e.refCount--,e.refCount===0&&jA(HA,function(){e.controller.abort()})}var Ho=null,nf=0,va=0,Ta=null;function FA(e,i){if(Ho===null){var a=Ho=[];nf=0,va=sd(),Ta={status:"pending",value:void 0,then:function(l){a.push(l)}}}return nf++,i.then($g,$g),i}function $g(){if(--nf===0&&Ho!==null){Ta!==null&&(Ta.status="fulfilled");var e=Ho;Ho=null,va=0,Ta=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function GA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Zg=H.S;H.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&FA(e,i),Zg!==null&&Zg(e,i)};var As=Z(null);function rf(){var e=As.current;return e!==null?e:Wt.pooledCache}function Pu(e,i){i===null?W(As,As.current):W(As,i.pool)}function Jg(){var e=rf();return e===null?null:{parent:Re._currentValue,pool:e}}var Fo=Error(s(460)),Wg=Error(s(474)),xu=Error(s(542)),sf={then:function(){}};function tp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ku(){}function ep(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(ku,ku),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ip(e),e;default:if(typeof i.status=="string")i.then(ku,ku);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ip(e),e}throw Go=i,Fo}}var Go=null;function np(){if(Go===null)throw Error(s(459));var e=Go;return Go=null,e}function ip(e){if(e===Fo||e===xu)throw Error(s(483))}var cr=!1;function af(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function hr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Gt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Cu(e),Hg(e,null,a),i}return Iu(e,l,i,a),Cu(e)}function Qo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,To(e,a)}}function lf(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var uf=!1;function Ko(){if(uf){var e=Ta;if(e!==null)throw e}}function Yo(e,i,a,l){uf=!1;var h=e.updateQueue;cr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var b=T,L=b.next;b.next=null,v===null?d=L:v.next=L,v=b;var F=e.alternate;F!==null&&(F=F.updateQueue,T=F.lastBaseUpdate,T!==v&&(T===null?F.firstBaseUpdate=L:T.next=L,F.lastBaseUpdate=b))}if(d!==null){var K=h.baseState;v=0,F=L=b=null,T=d;do{var z=T.lane&-536870913,B=z!==T.lane;if(B?(kt&z)===z:(l&z)===z){z!==0&&z===va&&(uf=!0),F!==null&&(F=F.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var vt=e,pt=T;z=i;var $t=a;switch(pt.tag){case 1:if(vt=pt.payload,typeof vt=="function"){K=vt.call($t,K,z);break t}K=vt;break t;case 3:vt.flags=vt.flags&-65537|128;case 0:if(vt=pt.payload,z=typeof vt=="function"?vt.call($t,K,z):vt,z==null)break t;K=E({},K,z);break t;case 2:cr=!0}}z=T.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},F===null?(L=F=B,b=K):F=F.next=B,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;B=T,T=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);F===null&&(b=K),h.baseState=b,h.firstBaseUpdate=L,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),Tr|=v,e.lanes=v,e.memoizedState=K}}function rp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function sp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)rp(a[e],i)}var Ea=Z(null),Uu=Z(0);function ap(e,i){e=Qi,W(Uu,e),W(Ea,i),Qi=e|i.baseLanes}function cf(){W(Uu,Qi),W(Ea,Ea.current)}function hf(){Qi=Uu.current,rt(Ea),rt(Uu)}var dr=0,Rt=null,Yt=null,_e=null,Lu=!1,Aa=!1,Ss=!1,zu=0,Xo=0,Sa=null,QA=0;function fe(){throw Error(s(321))}function ff(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!cn(e[a],i[a]))return!1;return!0}function df(e,i,a,l,h,d){return dr=d,Rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?Hp:Fp,Ss=!1,d=a(l,h),Ss=!1,Aa&&(d=lp(i,a,l,h)),op(e),d}function op(e){H.H=Gu;var i=Yt!==null&&Yt.next!==null;if(dr=0,_e=Yt=Rt=null,Lu=!1,Xo=0,Sa=null,i)throw Error(s(300));e===null||Ve||(e=e.dependencies,e!==null&&Vu(e)&&(Ve=!0))}function lp(e,i,a,l){Rt=e;var h=0;do{if(Aa&&(Sa=null),Xo=0,Aa=!1,25<=h)throw Error(s(301));if(h+=1,_e=Yt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=WA,d=i(a,l)}while(Aa);return d}function KA(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?$o(i):i,e=e.useState()[0],(Yt!==null?Yt.memoizedState:null)!==e&&(Rt.flags|=1024),i}function mf(){var e=zu!==0;return zu=0,e}function gf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function pf(e){if(Lu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Lu=!1}dr=0,_e=Yt=Rt=null,Aa=!1,Xo=zu=0,Sa=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Rt.memoizedState=_e=e:_e=_e.next=e,_e}function ve(){if(Yt===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=Yt.next;var i=_e===null?Rt.memoizedState:_e.next;if(i!==null)_e=i,Yt=e;else{if(e===null)throw Rt.alternate===null?Error(s(467)):Error(s(310));Yt=e,e={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},_e===null?Rt.memoizedState=_e=e:_e=_e.next=e}return _e}function yf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(e){var i=Xo;return Xo+=1,Sa===null&&(Sa=[]),e=ep(Sa,e,i),i=Rt,(_e===null?i.memoizedState:_e.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?Hp:Fp),e}function Bu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $o(e);if(e.$$typeof===it)return Qe(e)}throw Error(s(438,String(e)))}function _f(e){var i=null,a=Rt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Rt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=yf(),Rt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=V;return i.index++,a}function Bi(e,i){return typeof i=="function"?i(e):i}function qu(e){var i=ve();return vf(i,Yt,e)}function vf(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=v=null,b=null,L=i,F=!1;do{var K=L.lane&-536870913;if(K!==L.lane?(kt&K)===K:(dr&K)===K){var z=L.revertLane;if(z===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),K===va&&(F=!0);else if((dr&z)===z){L=L.next,z===va&&(F=!0);continue}else K={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},b===null?(T=b=K,v=d):b=b.next=K,Rt.lanes|=z,Tr|=z;K=L.action,Ss&&a(d,K),d=L.hasEagerState?L.eagerState:a(d,K)}else z={lane:K,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},b===null?(T=b=z,v=d):b=b.next=z,Rt.lanes|=K,Tr|=K;L=L.next}while(L!==null&&L!==i);if(b===null?v=d:b.next=T,!cn(d,e.memoizedState)&&(Ve=!0,F&&(a=Ta,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=b,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Tf(e){var i=ve(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);cn(d,i.memoizedState)||(Ve=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function up(e,i,a){var l=Rt,h=ve(),d=qt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!cn((Yt||h).memoizedState,a);v&&(h.memoizedState=a,Ve=!0),h=h.queue;var T=fp.bind(null,l,h,e);if(Zo(2048,8,T,[e]),h.getSnapshot!==i||v||_e!==null&&_e.memoizedState.tag&1){if(l.flags|=2048,ba(9,ju(),hp.bind(null,l,h,a,i),null),Wt===null)throw Error(s(349));d||(dr&124)!==0||cp(l,i,a)}return a}function cp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Rt.updateQueue,i===null?(i=yf(),Rt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function hp(e,i,a,l){i.value=a,i.getSnapshot=l,dp(i)&&mp(e)}function fp(e,i,a){return a(function(){dp(i)&&mp(e)})}function dp(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!cn(e,a)}catch{return!0}}function mp(e){var i=ga(e,2);i!==null&&pn(i,e,2)}function Ef(e){var i=nn();if(typeof e=="function"){var a=e;if(e=a(),Ss){ln(!0);try{a()}finally{ln(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:e},i}function gp(e,i,a,l){return e.baseState=a,vf(e,Yt,typeof l=="function"?l:Bi)}function YA(e,i,a,l,h){if(Fu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};H.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,pp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function pp(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=H.T,v={};H.T=v;try{var T=a(h,l),b=H.S;b!==null&&b(v,T),yp(e,i,T)}catch(L){Af(e,i,L)}finally{H.T=d}}else try{d=a(h,l),yp(e,i,d)}catch(L){Af(e,i,L)}}function yp(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){_p(e,i,l)},function(l){return Af(e,i,l)}):_p(e,i,a)}function _p(e,i,a){i.status="fulfilled",i.value=a,vp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,pp(e,a)))}function Af(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,vp(i),i=i.next;while(i!==l)}e.action=null}function vp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Tp(e,i){return i}function Ep(e,i){if(qt){var a=Wt.formState;if(a!==null){t:{var l=Rt;if(qt){if(le){e:{for(var h=le,d=si;h.nodeType!==8;){if(!d){h=null;break e}if(h=zn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){le=zn(h.nextSibling),l=h.data==="F!";break t}}vs(l)}l=!1}l&&(i=a[0])}}return a=nn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tp,lastRenderedState:i},a.queue=l,a=Bp.bind(null,Rt,l),l.dispatch=a,l=Ef(!1),d=If.bind(null,Rt,!1,l.queue),l=nn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=YA.bind(null,Rt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function Ap(e){var i=ve();return Sp(i,Yt,e)}function Sp(e,i,a){if(i=vf(e,i,Tp)[0],e=qu(Bi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=$o(i)}catch(v){throw v===Fo?xu:v}else l=i;i=ve();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Rt.flags|=2048,ba(9,ju(),XA.bind(null,h,a),null)),[l,d,e]}function XA(e,i){e.action=i}function bp(e){var i=ve(),a=Yt;if(a!==null)return Sp(i,a,e);ve(),i=i.memoizedState,a=ve();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function ba(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Rt.updateQueue,i===null&&(i=yf(),Rt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function ju(){return{destroy:void 0,resource:void 0}}function wp(){return ve().memoizedState}function Hu(e,i,a,l){var h=nn();l=l===void 0?null:l,Rt.flags|=e,h.memoizedState=ba(1|i,ju(),a,l)}function Zo(e,i,a,l){var h=ve();l=l===void 0?null:l;var d=h.memoizedState.inst;Yt!==null&&l!==null&&ff(l,Yt.memoizedState.deps)?h.memoizedState=ba(i,d,a,l):(Rt.flags|=e,h.memoizedState=ba(1|i,d,a,l))}function Rp(e,i){Hu(8390656,8,e,i)}function Ip(e,i){Zo(2048,8,e,i)}function Cp(e,i){return Zo(4,2,e,i)}function Dp(e,i){return Zo(4,4,e,i)}function Np(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Op(e,i,a){a=a!=null?a.concat([e]):null,Zo(4,4,Np.bind(null,i,e),a)}function Sf(){}function Vp(e,i){var a=ve();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&ff(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Mp(e,i){var a=ve();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&ff(i,l[1]))return l[0];if(l=e(),Ss){ln(!0);try{e()}finally{ln(!1)}}return a.memoizedState=[l,i],l}function bf(e,i,a){return a===void 0||(dr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=ky(),Rt.lanes|=e,Tr|=e,a)}function Pp(e,i,a,l){return cn(a,i)?a:Ea.current!==null?(e=bf(e,a,l),cn(e,i)||(Ve=!0),e):(dr&42)===0?(Ve=!0,e.memoizedState=a):(e=ky(),Rt.lanes|=e,Tr|=e,i)}function xp(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=H.T,T={};H.T=T,If(e,!1,i,a);try{var b=h(),L=H.S;if(L!==null&&L(T,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var F=GA(b,l);Jo(e,i,F,gn(e))}else Jo(e,i,l,gn(e))}catch(K){Jo(e,i,{then:function(){},status:"rejected",reason:K},gn())}finally{nt.p=d,H.T=v}}function $A(){}function wf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=kp(e).queue;xp(e,h,i,ft,a===null?$A:function(){return Up(e),a(l)})}function kp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:ft},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Up(e){var i=kp(e).next.queue;Jo(e,i,{},gn())}function Rf(){return Qe(pl)}function Lp(){return ve().memoizedState}function zp(){return ve().memoizedState}function ZA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=gn();e=hr(a);var l=fr(i,e,a);l!==null&&(pn(l,i,a),Qo(l,i,a)),i={cache:ef()},e.payload=i;return}i=i.return}}function JA(e,i,a){var l=gn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Fu(e)?qp(i,a):(a=Gh(e,i,a,l),a!==null&&(pn(a,e,l),jp(a,i,l)))}function Bp(e,i,a){var l=gn();Jo(e,i,a,l)}function Jo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))qp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,cn(T,v))return Iu(e,i,h,0),Wt===null&&Ru(),!1}catch{}finally{}if(a=Gh(e,i,h,l),a!==null)return pn(a,e,l),jp(a,i,l),!0}return!1}function If(e,i,a,l){if(l={lane:2,revertLane:sd(),action:l,hasEagerState:!1,eagerState:null,next:null},Fu(e)){if(i)throw Error(s(479))}else i=Gh(e,a,l,2),i!==null&&pn(i,e,2)}function Fu(e){var i=e.alternate;return e===Rt||i!==null&&i===Rt}function qp(e,i){Aa=Lu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function jp(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,To(e,a)}}var Gu={readContext:Qe,use:Bu,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe},Hp={readContext:Qe,use:Bu,useCallback:function(e,i){return nn().memoizedState=[e,i===void 0?null:i],e},useContext:Qe,useEffect:Rp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Hu(4194308,4,Np.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Hu(4194308,4,e,i)},useInsertionEffect:function(e,i){Hu(4,2,e,i)},useMemo:function(e,i){var a=nn();i=i===void 0?null:i;var l=e();if(Ss){ln(!0);try{e()}finally{ln(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=nn();if(a!==void 0){var h=a(i);if(Ss){ln(!0);try{a(i)}finally{ln(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=JA.bind(null,Rt,e),[l.memoizedState,e]},useRef:function(e){var i=nn();return e={current:e},i.memoizedState=e},useState:function(e){e=Ef(e);var i=e.queue,a=Bp.bind(null,Rt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Sf,useDeferredValue:function(e,i){var a=nn();return bf(a,e,i)},useTransition:function(){var e=Ef(!1);return e=xp.bind(null,Rt,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Rt,h=nn();if(qt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Wt===null)throw Error(s(349));(kt&124)!==0||cp(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Rp(fp.bind(null,l,d,e),[e]),l.flags|=2048,ba(9,ju(),hp.bind(null,l,d,a,i),null),a},useId:function(){var e=nn(),i=Wt.identifierPrefix;if(qt){var a=Ui,l=ki;a=(l&~(1<<32-Ge(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=zu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=QA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Rf,useFormState:Ep,useActionState:Ep,useOptimistic:function(e){var i=nn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=If.bind(null,Rt,!0,a),a.dispatch=i,[e,i]},useMemoCache:_f,useCacheRefresh:function(){return nn().memoizedState=ZA.bind(null,Rt)}},Fp={readContext:Qe,use:Bu,useCallback:Vp,useContext:Qe,useEffect:Ip,useImperativeHandle:Op,useInsertionEffect:Cp,useLayoutEffect:Dp,useMemo:Mp,useReducer:qu,useRef:wp,useState:function(){return qu(Bi)},useDebugValue:Sf,useDeferredValue:function(e,i){var a=ve();return Pp(a,Yt.memoizedState,e,i)},useTransition:function(){var e=qu(Bi)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:$o(e),i]},useSyncExternalStore:up,useId:Lp,useHostTransitionStatus:Rf,useFormState:Ap,useActionState:Ap,useOptimistic:function(e,i){var a=ve();return gp(a,Yt,e,i)},useMemoCache:_f,useCacheRefresh:zp},WA={readContext:Qe,use:Bu,useCallback:Vp,useContext:Qe,useEffect:Ip,useImperativeHandle:Op,useInsertionEffect:Cp,useLayoutEffect:Dp,useMemo:Mp,useReducer:Tf,useRef:wp,useState:function(){return Tf(Bi)},useDebugValue:Sf,useDeferredValue:function(e,i){var a=ve();return Yt===null?bf(a,e,i):Pp(a,Yt.memoizedState,e,i)},useTransition:function(){var e=Tf(Bi)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:$o(e),i]},useSyncExternalStore:up,useId:Lp,useHostTransitionStatus:Rf,useFormState:bp,useActionState:bp,useOptimistic:function(e,i){var a=ve();return Yt!==null?gp(a,Yt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:_f,useCacheRefresh:zp},wa=null,Wo=0;function Qu(e){var i=Wo;return Wo+=1,wa===null&&(wa=[]),ep(wa,e,i)}function tl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ku(e,i){throw i.$$typeof===w?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Gp(e){var i=e._init;return i(e._payload)}function Qp(e){function i(P,N){if(e){var U=P.deletions;U===null?(P.deletions=[N],P.flags|=16):U.push(N)}}function a(P,N){if(!e)return null;for(;N!==null;)i(P,N),N=N.sibling;return null}function l(P){for(var N=new Map;P!==null;)P.key!==null?N.set(P.key,P):N.set(P.index,P),P=P.sibling;return N}function h(P,N){return P=xi(P,N),P.index=0,P.sibling=null,P}function d(P,N,U){return P.index=U,e?(U=P.alternate,U!==null?(U=U.index,U<N?(P.flags|=67108866,N):U):(P.flags|=67108866,N)):(P.flags|=1048576,N)}function v(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function T(P,N,U,G){return N===null||N.tag!==6?(N=Kh(U,P.mode,G),N.return=P,N):(N=h(N,U),N.return=P,N)}function b(P,N,U,G){var lt=U.type;return lt===X?F(P,N,U.props.children,G,U.key):N!==null&&(N.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===S&&Gp(lt)===N.type)?(N=h(N,U.props),tl(N,U),N.return=P,N):(N=Du(U.type,U.key,U.props,null,P.mode,G),tl(N,U),N.return=P,N)}function L(P,N,U,G){return N===null||N.tag!==4||N.stateNode.containerInfo!==U.containerInfo||N.stateNode.implementation!==U.implementation?(N=Yh(U,P.mode,G),N.return=P,N):(N=h(N,U.children||[]),N.return=P,N)}function F(P,N,U,G,lt){return N===null||N.tag!==7?(N=gs(U,P.mode,G,lt),N.return=P,N):(N=h(N,U),N.return=P,N)}function K(P,N,U){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Kh(""+N,P.mode,U),N.return=P,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case C:return U=Du(N.type,N.key,N.props,null,P.mode,U),tl(U,N),U.return=P,U;case j:return N=Yh(N,P.mode,U),N.return=P,N;case S:var G=N._init;return N=G(N._payload),K(P,N,U)}if(ae(N)||x(N))return N=gs(N,P.mode,U,null),N.return=P,N;if(typeof N.then=="function")return K(P,Qu(N),U);if(N.$$typeof===it)return K(P,Mu(P,N),U);Ku(P,N)}return null}function z(P,N,U,G){var lt=N!==null?N.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return lt!==null?null:T(P,N,""+U,G);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case C:return U.key===lt?b(P,N,U,G):null;case j:return U.key===lt?L(P,N,U,G):null;case S:return lt=U._init,U=lt(U._payload),z(P,N,U,G)}if(ae(U)||x(U))return lt!==null?null:F(P,N,U,G,null);if(typeof U.then=="function")return z(P,N,Qu(U),G);if(U.$$typeof===it)return z(P,N,Mu(P,U),G);Ku(P,U)}return null}function B(P,N,U,G,lt){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return P=P.get(U)||null,T(N,P,""+G,lt);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case C:return P=P.get(G.key===null?U:G.key)||null,b(N,P,G,lt);case j:return P=P.get(G.key===null?U:G.key)||null,L(N,P,G,lt);case S:var Ct=G._init;return G=Ct(G._payload),B(P,N,U,G,lt)}if(ae(G)||x(G))return P=P.get(U)||null,F(N,P,G,lt,null);if(typeof G.then=="function")return B(P,N,U,Qu(G),lt);if(G.$$typeof===it)return B(P,N,U,Mu(N,G),lt);Ku(N,G)}return null}function vt(P,N,U,G){for(var lt=null,Ct=null,ct=N,yt=N=0,Pe=null;ct!==null&&yt<U.length;yt++){ct.index>yt?(Pe=ct,ct=null):Pe=ct.sibling;var zt=z(P,ct,U[yt],G);if(zt===null){ct===null&&(ct=Pe);break}e&&ct&&zt.alternate===null&&i(P,ct),N=d(zt,N,yt),Ct===null?lt=zt:Ct.sibling=zt,Ct=zt,ct=Pe}if(yt===U.length)return a(P,ct),qt&&ys(P,yt),lt;if(ct===null){for(;yt<U.length;yt++)ct=K(P,U[yt],G),ct!==null&&(N=d(ct,N,yt),Ct===null?lt=ct:Ct.sibling=ct,Ct=ct);return qt&&ys(P,yt),lt}for(ct=l(ct);yt<U.length;yt++)Pe=B(ct,P,yt,U[yt],G),Pe!==null&&(e&&Pe.alternate!==null&&ct.delete(Pe.key===null?yt:Pe.key),N=d(Pe,N,yt),Ct===null?lt=Pe:Ct.sibling=Pe,Ct=Pe);return e&&ct.forEach(function(Dr){return i(P,Dr)}),qt&&ys(P,yt),lt}function pt(P,N,U,G){if(U==null)throw Error(s(151));for(var lt=null,Ct=null,ct=N,yt=N=0,Pe=null,zt=U.next();ct!==null&&!zt.done;yt++,zt=U.next()){ct.index>yt?(Pe=ct,ct=null):Pe=ct.sibling;var Dr=z(P,ct,zt.value,G);if(Dr===null){ct===null&&(ct=Pe);break}e&&ct&&Dr.alternate===null&&i(P,ct),N=d(Dr,N,yt),Ct===null?lt=Dr:Ct.sibling=Dr,Ct=Dr,ct=Pe}if(zt.done)return a(P,ct),qt&&ys(P,yt),lt;if(ct===null){for(;!zt.done;yt++,zt=U.next())zt=K(P,zt.value,G),zt!==null&&(N=d(zt,N,yt),Ct===null?lt=zt:Ct.sibling=zt,Ct=zt);return qt&&ys(P,yt),lt}for(ct=l(ct);!zt.done;yt++,zt=U.next())zt=B(ct,P,yt,zt.value,G),zt!==null&&(e&&zt.alternate!==null&&ct.delete(zt.key===null?yt:zt.key),N=d(zt,N,yt),Ct===null?lt=zt:Ct.sibling=zt,Ct=zt);return e&&ct.forEach(function(tb){return i(P,tb)}),qt&&ys(P,yt),lt}function $t(P,N,U,G){if(typeof U=="object"&&U!==null&&U.type===X&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case C:t:{for(var lt=U.key;N!==null;){if(N.key===lt){if(lt=U.type,lt===X){if(N.tag===7){a(P,N.sibling),G=h(N,U.props.children),G.return=P,P=G;break t}}else if(N.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===S&&Gp(lt)===N.type){a(P,N.sibling),G=h(N,U.props),tl(G,U),G.return=P,P=G;break t}a(P,N);break}else i(P,N);N=N.sibling}U.type===X?(G=gs(U.props.children,P.mode,G,U.key),G.return=P,P=G):(G=Du(U.type,U.key,U.props,null,P.mode,G),tl(G,U),G.return=P,P=G)}return v(P);case j:t:{for(lt=U.key;N!==null;){if(N.key===lt)if(N.tag===4&&N.stateNode.containerInfo===U.containerInfo&&N.stateNode.implementation===U.implementation){a(P,N.sibling),G=h(N,U.children||[]),G.return=P,P=G;break t}else{a(P,N);break}else i(P,N);N=N.sibling}G=Yh(U,P.mode,G),G.return=P,P=G}return v(P);case S:return lt=U._init,U=lt(U._payload),$t(P,N,U,G)}if(ae(U))return vt(P,N,U,G);if(x(U)){if(lt=x(U),typeof lt!="function")throw Error(s(150));return U=lt.call(U),pt(P,N,U,G)}if(typeof U.then=="function")return $t(P,N,Qu(U),G);if(U.$$typeof===it)return $t(P,N,Mu(P,U),G);Ku(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,N!==null&&N.tag===6?(a(P,N.sibling),G=h(N,U),G.return=P,P=G):(a(P,N),G=Kh(U,P.mode,G),G.return=P,P=G),v(P)):a(P,N)}return function(P,N,U,G){try{Wo=0;var lt=$t(P,N,U,G);return wa=null,lt}catch(ct){if(ct===Fo||ct===xu)throw ct;var Ct=hn(29,ct,null,P.mode);return Ct.lanes=G,Ct.return=P,Ct}finally{}}}var Ra=Qp(!0),Kp=Qp(!1),Cn=Z(null),ai=null;function mr(e){var i=e.alternate;W(Ie,Ie.current&1),W(Cn,e),ai===null&&(i===null||Ea.current!==null||i.memoizedState!==null)&&(ai=e)}function Yp(e){if(e.tag===22){if(W(Ie,Ie.current),W(Cn,e),ai===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ai=e)}}else gr()}function gr(){W(Ie,Ie.current),W(Cn,Cn.current)}function qi(e){rt(Cn),ai===e&&(ai=null),rt(Ie)}var Ie=Z(0);function Yu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||yd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Cf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Df={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=gn(),h=hr(l);h.payload=i,a!=null&&(h.callback=a),i=fr(e,h,l),i!==null&&(pn(i,e,l),Qo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=gn(),h=hr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=fr(e,h,l),i!==null&&(pn(i,e,l),Qo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=gn(),l=hr(a);l.tag=2,i!=null&&(l.callback=i),i=fr(e,l,a),i!==null&&(pn(i,e,a),Qo(i,e,a))}};function Xp(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!ko(a,l)||!ko(h,d):!0}function $p(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Df.enqueueReplaceState(i,i.state,null)}function bs(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=E({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Xu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Zp(e){Xu(e)}function Jp(e){console.error(e)}function Wp(e){Xu(e)}function $u(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function ty(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Nf(e,i,a){return a=hr(a),a.tag=3,a.payload={element:null},a.callback=function(){$u(e,i)},a}function ey(e){return e=hr(e),e.tag=3,e}function ny(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){ty(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){ty(i,a,l),typeof h!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function tS(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&qo(i,a,h,!0),a=Cn.current,a!==null){switch(a.tag){case 13:return ai===null?td():a.alternate===null&&ue===0&&(ue=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===sf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),nd(e,l,h)),!1;case 22:return a.flags|=65536,l===sf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),nd(e,l,h)),!1}throw Error(s(435,a.tag))}return nd(e,l,h),td(),!1}if(qt)return i=Cn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Zh&&(e=Error(s(422),{cause:l}),Bo(bn(e,a)))):(l!==Zh&&(i=Error(s(423),{cause:l}),Bo(bn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=bn(l,a),h=Nf(e.stateNode,l,h),lf(e,h),ue!==4&&(ue=2)),!1;var d=Error(s(520),{cause:l});if(d=bn(d,a),ol===null?ol=[d]:ol.push(d),ue!==4&&(ue=2),i===null)return!0;l=bn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Nf(a.stateNode,l,e),lf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Er===null||!Er.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=ey(h),ny(h,e,a,l),lf(a,h),!1}a=a.return}while(a!==null);return!1}var iy=Error(s(461)),Ve=!1;function ze(e,i,a,l){i.child=e===null?Kp(i,null,a,l):Ra(i,e.child,a,l)}function ry(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Es(i),l=df(e,i,a,v,d,h),T=mf(),e!==null&&!Ve?(gf(e,i,h),ji(e,i,h)):(qt&&T&&Xh(i),i.flags|=1,ze(e,i,l,h),i.child)}function sy(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Qh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,ay(e,i,d,l,h)):(e=Du(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Lf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:ko,a(v,l)&&e.ref===i.ref)return ji(e,i,h)}return i.flags|=1,e=xi(d,l),e.ref=i.ref,e.return=i,i.child=e}function ay(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(ko(d,l)&&e.ref===i.ref)if(Ve=!1,i.pendingProps=l=d,Lf(e,h))(e.flags&131072)!==0&&(Ve=!0);else return i.lanes=e.lanes,ji(e,i,h)}return Of(e,i,a,l,h)}function oy(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return ly(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pu(i,d!==null?d.cachePool:null),d!==null?ap(i,d):cf(),Yp(i);else return i.lanes=i.childLanes=536870912,ly(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Pu(i,d.cachePool),ap(i,d),gr(),i.memoizedState=null):(e!==null&&Pu(i,null),cf(),gr());return ze(e,i,h,a),i.child}function ly(e,i,a,l){var h=rf();return h=h===null?null:{parent:Re._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Pu(i,null),cf(),Yp(i),e!==null&&qo(e,i,l,!0),null}function Zu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Of(e,i,a,l,h){return Es(i),a=df(e,i,a,l,void 0,h),l=mf(),e!==null&&!Ve?(gf(e,i,h),ji(e,i,h)):(qt&&l&&Xh(i),i.flags|=1,ze(e,i,a,h),i.child)}function uy(e,i,a,l,h,d){return Es(i),i.updateQueue=null,a=lp(i,l,a,h),op(e),l=mf(),e!==null&&!Ve?(gf(e,i,d),ji(e,i,d)):(qt&&l&&Xh(i),i.flags|=1,ze(e,i,a,d),i.child)}function cy(e,i,a,l,h){if(Es(i),i.stateNode===null){var d=pa,v=a.contextType;typeof v=="object"&&v!==null&&(d=Qe(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Df,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},af(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Qe(v):pa,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Cf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Df.enqueueReplaceState(d,d.state,null),Yo(i,l,d,h),Ko(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,b=bs(a,T);d.props=b;var L=d.context,F=a.contextType;v=pa,typeof F=="object"&&F!==null&&(v=Qe(F));var K=a.getDerivedStateFromProps;F=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||L!==v)&&$p(i,d,l,v),cr=!1;var z=i.memoizedState;d.state=z,Yo(i,l,d,h),Ko(),L=i.memoizedState,T||z!==L||cr?(typeof K=="function"&&(Cf(i,a,K,l),L=i.memoizedState),(b=cr||Xp(i,a,b,l,z,L,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=b):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,of(e,i),v=i.memoizedProps,F=bs(a,v),d.props=F,K=i.pendingProps,z=d.context,L=a.contextType,b=pa,typeof L=="object"&&L!==null&&(b=Qe(L)),T=a.getDerivedStateFromProps,(L=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==K||z!==b)&&$p(i,d,l,b),cr=!1,z=i.memoizedState,d.state=z,Yo(i,l,d,h),Ko();var B=i.memoizedState;v!==K||z!==B||cr||e!==null&&e.dependencies!==null&&Vu(e.dependencies)?(typeof T=="function"&&(Cf(i,a,T,l),B=i.memoizedState),(F=cr||Xp(i,a,F,l,z,B,b)||e!==null&&e.dependencies!==null&&Vu(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,B,b),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,B,b)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=B),d.props=l,d.state=B,d.context=b,l=F):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Zu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ra(i,e.child,null,h),i.child=Ra(i,null,a,h)):ze(e,i,a,h),i.memoizedState=d.state,e=i.child):e=ji(e,i,h),e}function hy(e,i,a,l){return zo(),i.flags|=256,ze(e,i,a,l),i.child}var Vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(e){return{baseLanes:e,cachePool:Jg()}}function Pf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Dn),e}function fy(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(qt){if(h?mr(i):gr(),qt){var T=le,b;if(b=T){t:{for(b=T,T=si;b.nodeType!==8;){if(!T){T=null;break t}if(b=zn(b.nextSibling),b===null){T=null;break t}}T=b}T!==null?(i.memoizedState={dehydrated:T,treeContext:ps!==null?{id:ki,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},b=hn(18,null,null,0),b.stateNode=T,b.return=i,i.child=b,en=i,le=null,b=!0):b=!1}b||vs(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return yd(T)?i.lanes=32:i.lanes=536870912,null;qi(i)}return T=l.children,l=l.fallback,h?(gr(),h=i.mode,T=Ju({mode:"hidden",children:T},h),l=gs(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=Mf(a),h.childLanes=Pf(e,v,a),i.memoizedState=Vf,l):(mr(i),xf(i,T))}if(b=e.memoizedState,b!==null&&(T=b.dehydrated,T!==null)){if(d)i.flags&256?(mr(i),i.flags&=-257,i=kf(e,i,a)):i.memoizedState!==null?(gr(),i.child=e.child,i.flags|=128,i=null):(gr(),h=l.fallback,T=i.mode,l=Ju({mode:"visible",children:l.children},T),h=gs(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ra(i,e.child,null,a),l=i.child,l.memoizedState=Mf(a),l.childLanes=Pf(e,v,a),i.memoizedState=Vf,i=h);else if(mr(i),yd(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,Bo({value:l,source:null,stack:null}),i=kf(e,i,a)}else if(Ve||qo(e,i,a,!1),v=(a&e.childLanes)!==0,Ve||v){if(v=Wt,v!==null&&(l=a&-a,l=(l&42)!==0?1:nr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==b.retryLane))throw b.retryLane=l,ga(e,l),pn(v,e,l),iy;T.data==="$?"||td(),i=kf(e,i,a)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=b.treeContext,le=zn(T.nextSibling),en=i,qt=!0,_s=null,si=!1,e!==null&&(Rn[In++]=ki,Rn[In++]=Ui,Rn[In++]=ps,ki=e.id,Ui=e.overflow,ps=i),i=xf(i,l.children),i.flags|=4096);return i}return h?(gr(),h=l.fallback,T=i.mode,b=e.child,L=b.sibling,l=xi(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&65011712,L!==null?h=xi(L,h):(h=gs(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=Mf(a):(b=T.cachePool,b!==null?(L=Re._currentValue,b=b.parent!==L?{parent:L,pool:L}:b):b=Jg(),T={baseLanes:T.baseLanes|a,cachePool:b}),h.memoizedState=T,h.childLanes=Pf(e,v,a),i.memoizedState=Vf,l):(mr(i),a=e.child,e=a.sibling,a=xi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function xf(e,i){return i=Ju({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Ju(e,i){return e=hn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function kf(e,i,a){return Ra(i,e.child,null,a),e=xf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function dy(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Wh(e.return,i,a)}function Uf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function my(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(ze(e,i,l.children,a),l=Ie.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dy(e,a,i);else if(e.tag===19)dy(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(W(Ie,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Yu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Uf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Yu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Uf(i,!0,a,null,d);break;case"together":Uf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ji(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Tr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(qo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=xi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=xi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Lf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Vu(e)))}function eS(e,i,a){switch(i.tag){case 3:Jt(i,i.stateNode.containerInfo),ur(i,Re,e.memoizedState.cache),zo();break;case 27:case 5:er(i);break;case 4:Jt(i,i.stateNode.containerInfo);break;case 10:ur(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(mr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?fy(e,i,a):(mr(i),e=ji(e,i,a),e!==null?e.sibling:null);mr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(qo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return my(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),W(Ie,Ie.current),l)break;return null;case 22:case 23:return i.lanes=0,oy(e,i,a);case 24:ur(i,Re,e.memoizedState.cache)}return ji(e,i,a)}function gy(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ve=!0;else{if(!Lf(e,a)&&(i.flags&128)===0)return Ve=!1,eS(e,i,a);Ve=(e.flags&131072)!==0}else Ve=!1,qt&&(i.flags&1048576)!==0&&Gg(i,Ou,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Qh(l)?(e=bs(l,e),i.tag=1,i=cy(null,i,l,e,a)):(i.tag=0,i=Of(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===mt){i.tag=11,i=ry(null,i,l,e,a);break t}else if(h===O){i.tag=14,i=sy(null,i,l,e,a);break t}}throw i=ke(l)||l,Error(s(306,i,""))}}return i;case 0:return Of(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=bs(l,i.pendingProps),cy(e,i,l,h,a);case 3:t:{if(Jt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,of(e,i),Yo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,ur(i,Re,l),l!==d.cache&&tf(i,[Re],a,!0),Ko(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=hy(e,i,l,a);break t}else if(l!==h){h=bn(Error(s(424)),i),Bo(h),i=hy(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(le=zn(e.firstChild),en=i,qt=!0,_s=null,si=!0,a=Kp(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(zo(),l===h){i=ji(e,i,a);break t}ze(e,i,l,a)}i=i.child}return i;case 26:return Zu(e,i),e===null?(a=v_(i.type,null,i.pendingProps,null))?i.memoizedState=a:qt||(a=i.type,e=i.pendingProps,l=fc(At.current).createElement(a),l[Se]=i,l[pe]=e,qe(l,a,e),he(l),i.stateNode=l):i.memoizedState=v_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return er(i),e===null&&qt&&(l=i.stateNode=p_(i.type,i.pendingProps,At.current),en=i,si=!0,h=le,br(i.type)?(_d=h,le=zn(l.firstChild)):le=h),ze(e,i,i.pendingProps.children,a),Zu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&qt&&((h=l=le)&&(l=DS(l,i.type,i.pendingProps,si),l!==null?(i.stateNode=l,en=i,le=zn(l.firstChild),si=!1,h=!0):h=!1),h||vs(i)),er(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,md(h,d)?l=null:v!==null&&md(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=df(e,i,KA,null,null,a),pl._currentValue=h),Zu(e,i),ze(e,i,l,a),i.child;case 6:return e===null&&qt&&((e=a=le)&&(a=NS(a,i.pendingProps,si),a!==null?(i.stateNode=a,en=i,le=null,e=!0):e=!1),e||vs(i)),null;case 13:return fy(e,i,a);case 4:return Jt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ra(i,null,l,a):ze(e,i,l,a),i.child;case 11:return ry(e,i,i.type,i.pendingProps,a);case 7:return ze(e,i,i.pendingProps,a),i.child;case 8:return ze(e,i,i.pendingProps.children,a),i.child;case 12:return ze(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,ur(i,i.type,l.value),ze(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Es(i),h=Qe(h),l=l(h),i.flags|=1,ze(e,i,l,a),i.child;case 14:return sy(e,i,i.type,i.pendingProps,a);case 15:return ay(e,i,i.type,i.pendingProps,a);case 19:return my(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=Ju(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=xi(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return oy(e,i,a);case 24:return Es(i),l=Qe(Re),e===null?(h=rf(),h===null&&(h=Wt,d=ef(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},af(i),ur(i,Re,h)):((e.lanes&a)!==0&&(of(e,i),Yo(i,null,null,a),Ko()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),ur(i,Re,l)):(l=d.cache,ur(i,Re,l),l!==h.cache&&tf(i,[Re],a,!0))),ze(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Hi(e){e.flags|=4}function py(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!b_(i)){if(i=Cn.current,i!==null&&((kt&4194048)===kt?ai!==null:(kt&62914560)!==kt&&(kt&536870912)===0||i!==ai))throw Go=sf,Wg;e.flags|=8192}}function Wu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?_o():536870912,e.lanes|=i,Na|=i)}function el(e,i){if(!qt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function re(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function nS(e,i,a){var l=i.pendingProps;switch($h(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(i),null;case 1:return re(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),zi(Re),Kn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Lo(i)?Hi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Yg())),re(i),null;case 26:return a=i.memoizedState,e===null?(Hi(i),a!==null?(re(i),py(i,a)):(re(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Hi(i),re(i),py(i,a)):(re(i),i.flags&=-16777217):(e.memoizedProps!==l&&Hi(i),re(i),i.flags&=-16777217),null;case 27:Ai(i),a=At.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Hi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return re(i),null}e=gt.current,Lo(i)?Qg(i):(e=p_(h,l,a),i.stateNode=e,Hi(i))}return re(i),null;case 5:if(Ai(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Hi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return re(i),null}if(e=gt.current,Lo(i))Qg(i);else{switch(h=fc(At.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[Se]=i,e[pe]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(qe(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Hi(i)}}return re(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Hi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=At.current,Lo(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=en,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Se]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||u_(e.nodeValue,a)),e||vs(i)}else e=fc(e).createTextNode(l),e[Se]=i,i.stateNode=e}return re(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Lo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Se]=i}else zo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;re(i),h=!1}else h=Yg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(qi(i),i):(qi(i),null)}if(qi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Wu(i,i.updateQueue),re(i),null;case 4:return Kn(),e===null&&ud(i.stateNode.containerInfo),re(i),null;case 10:return zi(i.type),re(i),null;case 19:if(rt(Ie),h=i.memoizedState,h===null)return re(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)el(h,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Yu(e),d!==null){for(i.flags|=128,el(h,!1),e=d.updateQueue,i.updateQueue=e,Wu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Fg(a,e),a=a.sibling;return W(Ie,Ie.current&1|2),i.child}e=e.sibling}h.tail!==null&&_n()>nc&&(i.flags|=128,l=!0,el(h,!1),i.lanes=4194304)}else{if(!l)if(e=Yu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Wu(i,e),el(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!qt)return re(i),null}else 2*_n()-h.renderingStartTime>nc&&a!==536870912&&(i.flags|=128,l=!0,el(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=_n(),i.sibling=null,e=Ie.current,W(Ie,l?e&1|2:e&1),i):(re(i),null);case 22:case 23:return qi(i),hf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(re(i),i.subtreeFlags&6&&(i.flags|=8192)):re(i),a=i.updateQueue,a!==null&&Wu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&rt(As),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),zi(Re),re(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function iS(e,i){switch($h(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return zi(Re),Kn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ai(i),null;case 13:if(qi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));zo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return rt(Ie),null;case 4:return Kn(),null;case 10:return zi(i.type),null;case 22:case 23:return qi(i),hf(),e!==null&&rt(As),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return zi(Re),null;case 25:return null;default:return null}}function yy(e,i){switch($h(i),i.tag){case 3:zi(Re),Kn();break;case 26:case 27:case 5:Ai(i);break;case 4:Kn();break;case 13:qi(i);break;case 19:rt(Ie);break;case 10:zi(i.type);break;case 22:case 23:qi(i),hf(),e!==null&&rt(As);break;case 24:zi(Re)}}function nl(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Zt(i,i.return,T)}}function pr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var b=a,L=T;try{L()}catch(F){Zt(h,b,F)}}}l=l.next}while(l!==d)}}catch(F){Zt(i,i.return,F)}}function _y(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{sp(i,a)}catch(l){Zt(e,e.return,l)}}}function vy(e,i,a){a.props=bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Zt(e,i,l)}}function il(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Zt(e,i,h)}}function oi(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Zt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Zt(e,i,h)}else a.current=null}function Ty(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Zt(e,e.return,h)}}function zf(e,i,a){try{var l=e.stateNode;bS(l,e.type,a,i),l[pe]=i}catch(h){Zt(e,e.return,h)}}function Ey(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&br(e.type)||e.tag===4}function Bf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ey(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&br(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=hc));else if(l!==4&&(l===27&&br(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(qf(e,i,a),e=e.sibling;e!==null;)qf(e,i,a),e=e.sibling}function tc(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&br(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(tc(e,i,a),e=e.sibling;e!==null;)tc(e,i,a),e=e.sibling}function Ay(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);qe(i,l,a),i[Se]=e,i[pe]=a}catch(d){Zt(e,e.return,d)}}var Fi=!1,de=!1,jf=!1,Sy=typeof WeakSet=="function"?WeakSet:Set,Me=null;function rS(e,i){if(e=e.containerInfo,fd=_c,e=Pg(e),zh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,b=-1,L=0,F=0,K=e,z=null;e:for(;;){for(var B;K!==a||h!==0&&K.nodeType!==3||(T=v+h),K!==d||l!==0&&K.nodeType!==3||(b=v+l),K.nodeType===3&&(v+=K.nodeValue.length),(B=K.firstChild)!==null;)z=K,K=B;for(;;){if(K===e)break e;if(z===a&&++L===h&&(T=v),z===d&&++F===l&&(b=v),(B=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=B}a=T===-1||b===-1?null:{start:T,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(dd={focusedElem:e,selectionRange:a},_c=!1,Me=i;Me!==null;)if(i=Me,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Me=e;else for(;Me!==null;){switch(i=Me,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var vt=bs(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(vt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(pt){Zt(a,a.return,pt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)pd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Me=e;break}Me=i.return}}function by(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:yr(e,a),l&4&&nl(5,a);break;case 1:if(yr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Zt(a,a.return,v)}else{var h=bs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Zt(a,a.return,v)}}l&64&&_y(a),l&512&&il(a,a.return);break;case 3:if(yr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{sp(e,i)}catch(v){Zt(a,a.return,v)}}break;case 27:i===null&&l&4&&Ay(a);case 26:case 5:yr(e,a),i===null&&l&4&&Ty(a),l&512&&il(a,a.return);break;case 12:yr(e,a);break;case 13:yr(e,a),l&4&&Iy(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=dS.bind(null,a),OS(e,a))));break;case 22:if(l=a.memoizedState!==null||Fi,!l){i=i!==null&&i.memoizedState!==null||de,h=Fi;var d=de;Fi=l,(de=i)&&!d?_r(e,a,(a.subtreeFlags&8772)!==0):yr(e,a),Fi=h,de=d}break;case 30:break;default:yr(e,a)}}function wy(e){var i=e.alternate;i!==null&&(e.alternate=null,wy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&sr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ie=null,rn=!1;function Gi(e,i,a){for(a=a.child;a!==null;)Ry(e,i,a),a=a.sibling}function Ry(e,i,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(oe,a)}catch{}switch(a.tag){case 26:de||oi(a,i),Gi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:de||oi(a,i);var l=ie,h=rn;br(a.type)&&(ie=a.stateNode,rn=!1),Gi(e,i,a),fl(a.stateNode),ie=l,rn=h;break;case 5:de||oi(a,i);case 6:if(l=ie,h=rn,ie=null,Gi(e,i,a),ie=l,rn=h,ie!==null)if(rn)try{(ie.nodeType===9?ie.body:ie.nodeName==="HTML"?ie.ownerDocument.body:ie).removeChild(a.stateNode)}catch(d){Zt(a,i,d)}else try{ie.removeChild(a.stateNode)}catch(d){Zt(a,i,d)}break;case 18:ie!==null&&(rn?(e=ie,m_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tl(e)):m_(ie,a.stateNode));break;case 4:l=ie,h=rn,ie=a.stateNode.containerInfo,rn=!0,Gi(e,i,a),ie=l,rn=h;break;case 0:case 11:case 14:case 15:de||pr(2,a,i),de||pr(4,a,i),Gi(e,i,a);break;case 1:de||(oi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&vy(a,i,l)),Gi(e,i,a);break;case 21:Gi(e,i,a);break;case 22:de=(l=de)||a.memoizedState!==null,Gi(e,i,a),de=l;break;default:Gi(e,i,a)}}function Iy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tl(e)}catch(a){Zt(i,i.return,a)}}function sS(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Sy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Sy),i;default:throw Error(s(435,e.tag))}}function Hf(e,i){var a=sS(e);i.forEach(function(l){var h=mS.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function fn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(br(T.type)){ie=T.stateNode,rn=!1;break t}break;case 5:ie=T.stateNode,rn=!1;break t;case 3:case 4:ie=T.stateNode.containerInfo,rn=!0;break t}T=T.return}if(ie===null)throw Error(s(160));Ry(d,v,h),ie=null,rn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Cy(i,e),i=i.sibling}var Ln=null;function Cy(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fn(i,e),dn(e),l&4&&(pr(3,e,e.return),nl(3,e),pr(5,e,e.return));break;case 1:fn(i,e),dn(e),l&512&&(de||a===null||oi(a,a.return)),l&64&&Fi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Ln;if(fn(i,e),dn(e),l&512&&(de||a===null||oi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Wr]||d[Se]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),qe(d,l,a),d[Se]=e,he(d),l=d;break t;case"link":var v=A_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=h.createElement(l),qe(d,l,a),h.head.appendChild(d);break;case"meta":if(v=A_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=h.createElement(l),qe(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Se]=e,he(d),l=d}e.stateNode=l}else S_(h,e.type,e.stateNode);else e.stateNode=E_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?S_(h,e.type,e.stateNode):E_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&zf(e,e.memoizedProps,a.memoizedProps)}break;case 27:fn(i,e),dn(e),l&512&&(de||a===null||oi(a,a.return)),a!==null&&l&4&&zf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(fn(i,e),dn(e),l&512&&(de||a===null||oi(a,a.return)),e.flags&32){h=e.stateNode;try{Tn(h,"")}catch(B){Zt(e,e.return,B)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,zf(e,h,a!==null?a.memoizedProps:h)),l&1024&&(jf=!0);break;case 6:if(fn(i,e),dn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(B){Zt(e,e.return,B)}}break;case 3:if(gc=null,h=Ln,Ln=dc(i.containerInfo),fn(i,e),Ln=h,dn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Tl(i.containerInfo)}catch(B){Zt(e,e.return,B)}jf&&(jf=!1,Dy(e));break;case 4:l=Ln,Ln=dc(e.stateNode.containerInfo),fn(i,e),dn(e),Ln=l;break;case 12:fn(i,e),dn(e);break;case 13:fn(i,e),dn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xf=_n()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hf(e,l)));break;case 22:h=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,L=Fi,F=de;if(Fi=L||h,de=F||b,fn(i,e),de=F,Fi=L,dn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||b||Fi||de||ws(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){b=a=i;try{if(d=b.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=b.stateNode;var K=b.memoizedProps.style,z=K!=null&&K.hasOwnProperty("display")?K.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){Zt(b,b.return,B)}}}else if(i.tag===6){if(a===null){b=i;try{b.stateNode.nodeValue=h?"":b.memoizedProps}catch(B){Zt(b,b.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Hf(e,a))));break;case 19:fn(i,e),dn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hf(e,l)));break;case 30:break;case 21:break;default:fn(i,e),dn(e)}}function dn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(Ey(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Bf(e);tc(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(Tn(v,""),a.flags&=-33);var T=Bf(e);tc(e,T,v);break;case 3:case 4:var b=a.stateNode.containerInfo,L=Bf(e);qf(e,L,b);break;default:throw Error(s(161))}}catch(F){Zt(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Dy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Dy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function yr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)by(e,i.alternate,i),i=i.sibling}function ws(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:pr(4,i,i.return),ws(i);break;case 1:oi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&vy(i,i.return,a),ws(i);break;case 27:fl(i.stateNode);case 26:case 5:oi(i,i.return),ws(i);break;case 22:i.memoizedState===null&&ws(i);break;case 30:ws(i);break;default:ws(i)}e=e.sibling}}function _r(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:_r(h,d,a),nl(4,d);break;case 1:if(_r(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Zt(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var b=h.shared.hiddenCallbacks;if(b!==null)for(h.shared.hiddenCallbacks=null,h=0;h<b.length;h++)rp(b[h],T)}catch(L){Zt(l,l.return,L)}}a&&v&64&&_y(d),il(d,d.return);break;case 27:Ay(d);case 26:case 5:_r(h,d,a),a&&l===null&&v&4&&Ty(d),il(d,d.return);break;case 12:_r(h,d,a);break;case 13:_r(h,d,a),a&&v&4&&Iy(h,d);break;case 22:d.memoizedState===null&&_r(h,d,a),il(d,d.return);break;case 30:break;default:_r(h,d,a)}i=i.sibling}}function Ff(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&jo(a))}function Gf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&jo(e))}function li(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ny(e,i,a,l),i=i.sibling}function Ny(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:li(e,i,a,l),h&2048&&nl(9,i);break;case 1:li(e,i,a,l);break;case 3:li(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&jo(e)));break;case 12:if(h&2048){li(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Zt(i,i.return,b)}}else li(e,i,a,l);break;case 13:li(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?li(e,i,a,l):rl(e,i):d._visibility&2?li(e,i,a,l):(d._visibility|=2,Ia(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Ff(v,i);break;case 24:li(e,i,a,l),h&2048&&Gf(i.alternate,i);break;default:li(e,i,a,l)}}function Ia(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,T=a,b=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:Ia(d,v,T,b,h),nl(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&2?Ia(d,v,T,b,h):rl(d,v):(F._visibility|=2,Ia(d,v,T,b,h)),h&&L&2048&&Ff(v.alternate,v);break;case 24:Ia(d,v,T,b,h),h&&L&2048&&Gf(v.alternate,v);break;default:Ia(d,v,T,b,h)}i=i.sibling}}function rl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:rl(a,l),h&2048&&Ff(l.alternate,l);break;case 24:rl(a,l),h&2048&&Gf(l.alternate,l);break;default:rl(a,l)}i=i.sibling}}var sl=8192;function Ca(e){if(e.subtreeFlags&sl)for(e=e.child;e!==null;)Oy(e),e=e.sibling}function Oy(e){switch(e.tag){case 26:Ca(e),e.flags&sl&&e.memoizedState!==null&&FS(Ln,e.memoizedState,e.memoizedProps);break;case 5:Ca(e);break;case 3:case 4:var i=Ln;Ln=dc(e.stateNode.containerInfo),Ca(e),Ln=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=sl,sl=16777216,Ca(e),sl=i):Ca(e));break;default:Ca(e)}}function Vy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function al(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Me=l,Py(l,e)}Vy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)My(e),e=e.sibling}function My(e){switch(e.tag){case 0:case 11:case 15:al(e),e.flags&2048&&pr(9,e,e.return);break;case 3:al(e);break;case 12:al(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ec(e)):al(e);break;default:al(e)}}function ec(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Me=l,Py(l,e)}Vy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:pr(8,i,i.return),ec(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ec(i));break;default:ec(i)}e=e.sibling}}function Py(e,i){for(;Me!==null;){var a=Me;switch(a.tag){case 0:case 11:case 15:pr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:jo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Me=l;else t:for(a=e;Me!==null;){l=Me;var h=l.sibling,d=l.return;if(wy(l),l===a){Me=null;break t}if(h!==null){h.return=d,Me=h;break t}Me=d}}}var aS={getCacheForType:function(e){var i=Qe(Re),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},oS=typeof WeakMap=="function"?WeakMap:Map,Gt=0,Wt=null,Dt=null,kt=0,Qt=0,mn=null,vr=!1,Da=!1,Qf=!1,Qi=0,ue=0,Tr=0,Rs=0,Kf=0,Dn=0,Na=0,ol=null,sn=null,Yf=!1,Xf=0,nc=1/0,ic=null,Er=null,Be=0,Ar=null,Oa=null,Va=0,$f=0,Zf=null,xy=null,ll=0,Jf=null;function gn(){if((Gt&2)!==0&&kt!==0)return kt&-kt;if(H.T!==null){var e=va;return e!==0?e:sd()}return ir()}function ky(){Dn===0&&(Dn=(kt&536870912)===0||qt?yo():536870912);var e=Cn.current;return e!==null&&(e.flags|=32),Dn}function pn(e,i,a){(e===Wt&&(Qt===2||Qt===9)||e.cancelPendingCommit!==null)&&(Ma(e,0),Sr(e,kt,Dn,!1)),bi(e,a),((Gt&2)===0||e!==Wt)&&(e===Wt&&((Gt&2)===0&&(Rs|=a),ue===4&&Sr(e,kt,Dn,!1)),ui(e))}function Uy(e,i,a){if((Gt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Jr(e,i),h=l?cS(e,i):ed(e,i,!0),d=l;do{if(h===0){Da&&!l&&Sr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!lS(a)){h=ed(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=ol;var b=T.current.memoizedState.isDehydrated;if(b&&(Ma(T,v).flags|=256),v=ed(T,v,!1),v!==2){if(Qf&&!b){T.errorRecoveryDisabledLanes|=d,Rs|=d,h=4;break t}d=sn,sn=h,d!==null&&(sn===null?sn=d:sn.push.apply(sn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Ma(e,0),Sr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Sr(l,i,Dn,!vr);break t;case 2:sn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Xf+300-_n(),10<h)){if(Sr(l,i,Dn,!vr),$s(l,0,!0)!==0)break t;l.timeoutHandle=f_(Ly.bind(null,l,a,sn,ic,Yf,i,Dn,Rs,Na,vr,d,2,-0,0),h);break t}Ly(l,a,sn,ic,Yf,i,Dn,Rs,Na,vr,d,0,-0,0)}}break}while(!0);ui(e)}function Ly(e,i,a,l,h,d,v,T,b,L,F,K,z,B){if(e.timeoutHandle=-1,K=i.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(gl={stylesheets:null,count:0,unsuspend:HS},Oy(i),K=GS(),K!==null)){e.cancelPendingCommit=K(Gy.bind(null,e,i,d,a,l,h,v,T,b,F,1,z,B)),Sr(e,d,v,!L);return}Gy(e,i,d,a,l,h,v,T,b)}function lS(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!cn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Sr(e,i,a,l){i&=~Kf,i&=~Rs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Ge(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Yn(e,a,i)}function rc(){return(Gt&6)===0?(ul(0),!1):!0}function Wf(){if(Dt!==null){if(Qt===0)var e=Dt.return;else e=Dt,Li=Ts=null,pf(e),wa=null,Wo=0,e=Dt;for(;e!==null;)yy(e.alternate,e),e=e.return;Dt=null}}function Ma(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,RS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wf(),Wt=e,Dt=a=xi(e.current,null),kt=i,Qt=0,mn=null,vr=!1,Da=Jr(e,i),Qf=!1,Na=Dn=Kf=Rs=Tr=ue=0,sn=ol=null,Yf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ge(l),d=1<<h;i|=e[h],l&=~d}return Qi=i,Ru(),a}function zy(e,i){Rt=null,H.H=Gu,i===Fo||i===xu?(i=np(),Qt=3):i===Wg?(i=np(),Qt=4):Qt=i===iy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mn=i,Dt===null&&(ue=1,$u(e,bn(i,e.current)))}function By(){var e=H.H;return H.H=Gu,e===null?Gu:e}function qy(){var e=H.A;return H.A=aS,e}function td(){ue=4,vr||(kt&4194048)!==kt&&Cn.current!==null||(Da=!0),(Tr&134217727)===0&&(Rs&134217727)===0||Wt===null||Sr(Wt,kt,Dn,!1)}function ed(e,i,a){var l=Gt;Gt|=2;var h=By(),d=qy();(Wt!==e||kt!==i)&&(ic=null,Ma(e,i)),i=!1;var v=ue;t:do try{if(Qt!==0&&Dt!==null){var T=Dt,b=mn;switch(Qt){case 8:Wf(),v=6;break t;case 3:case 2:case 9:case 6:Cn.current===null&&(i=!0);var L=Qt;if(Qt=0,mn=null,Pa(e,T,b,L),a&&Da){v=0;break t}break;default:L=Qt,Qt=0,mn=null,Pa(e,T,b,L)}}uS(),v=ue;break}catch(F){zy(e,F)}while(!0);return i&&e.shellSuspendCounter++,Li=Ts=null,Gt=l,H.H=h,H.A=d,Dt===null&&(Wt=null,kt=0,Ru()),v}function uS(){for(;Dt!==null;)jy(Dt)}function cS(e,i){var a=Gt;Gt|=2;var l=By(),h=qy();Wt!==e||kt!==i?(ic=null,nc=_n()+500,Ma(e,i)):Da=Jr(e,i);t:do try{if(Qt!==0&&Dt!==null){i=Dt;var d=mn;e:switch(Qt){case 1:Qt=0,mn=null,Pa(e,i,d,1);break;case 2:case 9:if(tp(d)){Qt=0,mn=null,Hy(i);break}i=function(){Qt!==2&&Qt!==9||Wt!==e||(Qt=7),ui(e)},d.then(i,i);break t;case 3:Qt=7;break t;case 4:Qt=5;break t;case 7:tp(d)?(Qt=0,mn=null,Hy(i)):(Qt=0,mn=null,Pa(e,i,d,7));break;case 5:var v=null;switch(Dt.tag){case 26:v=Dt.memoizedState;case 5:case 27:var T=Dt;if(!v||b_(v)){Qt=0,mn=null;var b=T.sibling;if(b!==null)Dt=b;else{var L=T.return;L!==null?(Dt=L,sc(L)):Dt=null}break e}}Qt=0,mn=null,Pa(e,i,d,5);break;case 6:Qt=0,mn=null,Pa(e,i,d,6);break;case 8:Wf(),ue=6;break t;default:throw Error(s(462))}}hS();break}catch(F){zy(e,F)}while(!0);return Li=Ts=null,H.H=l,H.A=h,Gt=a,Dt!==null?0:(Wt=null,kt=0,Ru(),ue)}function hS(){for(;Dt!==null&&!fo();)jy(Dt)}function jy(e){var i=gy(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,i===null?sc(e):Dt=i}function Hy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=uy(a,i,i.pendingProps,i.type,void 0,kt);break;case 11:i=uy(a,i,i.pendingProps,i.type.render,i.ref,kt);break;case 5:pf(i);default:yy(a,i),i=Dt=Fg(i,Qi),i=gy(a,i,Qi)}e.memoizedProps=e.pendingProps,i===null?sc(e):Dt=i}function Pa(e,i,a,l){Li=Ts=null,pf(i),wa=null,Wo=0;var h=i.return;try{if(tS(e,h,i,a,kt)){ue=1,$u(e,bn(a,e.current)),Dt=null;return}}catch(d){if(h!==null)throw Dt=h,d;ue=1,$u(e,bn(a,e.current)),Dt=null;return}i.flags&32768?(qt||l===1?e=!0:Da||(kt&536870912)!==0?e=!1:(vr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Cn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Fy(i,e)):sc(i)}function sc(e){var i=e;do{if((i.flags&32768)!==0){Fy(i,vr);return}e=i.return;var a=nS(i.alternate,i,Qi);if(a!==null){Dt=a;return}if(i=i.sibling,i!==null){Dt=i;return}Dt=i=e}while(i!==null);ue===0&&(ue=5)}function Fy(e,i){do{var a=iS(e.alternate,e);if(a!==null){a.flags&=32767,Dt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Dt=e;return}Dt=e=a}while(e!==null);ue=6,Dt=null}function Gy(e,i,a,l,h,d,v,T,b){e.cancelPendingCommit=null;do ac();while(Be!==0);if((Gt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Fh,vo(e,a,d,v,T,b),e===Wt&&(Dt=Wt=null,kt=0),Oa=i,Ar=e,Va=a,$f=d,Zf=h,xy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gS(Yr,function(){return $y(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,h=nt.p,nt.p=2,v=Gt,Gt|=4;try{rS(e,i,a)}finally{Gt=v,nt.p=h,H.T=l}}Be=1,Qy(),Ky(),Yy()}}function Qy(){if(Be===1){Be=0;var e=Ar,i=Oa,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var l=nt.p;nt.p=2;var h=Gt;Gt|=4;try{Cy(i,e);var d=dd,v=Pg(e.containerInfo),T=d.focusedElem,b=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&Mg(T.ownerDocument.documentElement,T)){if(b!==null&&zh(T)){var L=b.start,F=b.end;if(F===void 0&&(F=L),"selectionStart"in T)T.selectionStart=L,T.selectionEnd=Math.min(F,T.value.length);else{var K=T.ownerDocument||document,z=K&&K.defaultView||window;if(z.getSelection){var B=z.getSelection(),vt=T.textContent.length,pt=Math.min(b.start,vt),$t=b.end===void 0?pt:Math.min(b.end,vt);!B.extend&&pt>$t&&(v=$t,$t=pt,pt=v);var P=Vg(T,pt),N=Vg(T,$t);if(P&&N&&(B.rangeCount!==1||B.anchorNode!==P.node||B.anchorOffset!==P.offset||B.focusNode!==N.node||B.focusOffset!==N.offset)){var U=K.createRange();U.setStart(P.node,P.offset),B.removeAllRanges(),pt>$t?(B.addRange(U),B.extend(N.node,N.offset)):(U.setEnd(N.node,N.offset),B.addRange(U))}}}}for(K=[],B=T;B=B.parentNode;)B.nodeType===1&&K.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<K.length;T++){var G=K[T];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}_c=!!fd,dd=fd=null}finally{Gt=h,nt.p=l,H.T=a}}e.current=i,Be=2}}function Ky(){if(Be===2){Be=0;var e=Ar,i=Oa,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var l=nt.p;nt.p=2;var h=Gt;Gt|=4;try{by(e,i.alternate,i)}finally{Gt=h,nt.p=l,H.T=a}}Be=3}}function Yy(){if(Be===4||Be===3){Be=0,eu();var e=Ar,i=Oa,a=Va,l=xy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Be=5:(Be=0,Oa=Ar=null,Xy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Er=null),Zs(a),i=i.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(oe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=H.T,h=nt.p,nt.p=2,H.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{H.T=i,nt.p=h}}(Va&3)!==0&&ac(),ui(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===Jf?ll++:(ll=0,Jf=e):ll=0,ul(0)}}function Xy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,jo(i)))}function ac(e){return Qy(),Ky(),Yy(),$y()}function $y(){if(Be!==5)return!1;var e=Ar,i=$f;$f=0;var a=Zs(Va),l=H.T,h=nt.p;try{nt.p=32>a?32:a,H.T=null,a=Zf,Zf=null;var d=Ar,v=Va;if(Be=0,Oa=Ar=null,Va=0,(Gt&6)!==0)throw Error(s(331));var T=Gt;if(Gt|=4,My(d.current),Ny(d,d.current,v,a),Gt=T,ul(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(oe,d)}catch{}return!0}finally{nt.p=h,H.T=l,Xy(e,i)}}function Zy(e,i,a){i=bn(a,i),i=Nf(e.stateNode,i,2),e=fr(e,i,2),e!==null&&(bi(e,2),ui(e))}function Zt(e,i,a){if(e.tag===3)Zy(e,e,a);else for(;i!==null;){if(i.tag===3){Zy(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Er===null||!Er.has(l))){e=bn(a,e),a=ey(2),l=fr(i,a,2),l!==null&&(ny(a,l,i,e),bi(l,2),ui(l));break}}i=i.return}}function nd(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new oS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Qf=!0,h.add(a),e=fS.bind(null,e,i,a),i.then(e,e))}function fS(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(kt&a)===a&&(ue===4||ue===3&&(kt&62914560)===kt&&300>_n()-Xf?(Gt&2)===0&&Ma(e,0):Kf|=a,Na===kt&&(Na=0)),ui(e)}function Jy(e,i){i===0&&(i=_o()),e=ga(e,i),e!==null&&(bi(e,i),ui(e))}function dS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Jy(e,a)}function mS(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Jy(e,a)}function gS(e,i){return Qr(e,i)}var oc=null,xa=null,id=!1,lc=!1,rd=!1,Is=0;function ui(e){e!==xa&&e.next===null&&(xa===null?oc=xa=e:xa=xa.next=e),lc=!0,id||(id=!0,yS())}function ul(e,i){if(!rd&&lc){rd=!0;do for(var a=!1,l=oc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Ge(42|e)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,n_(l,d))}else d=kt,d=$s(l,l===Wt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Jr(l,d)||(a=!0,n_(l,d));l=l.next}while(a);rd=!1}}function pS(){Wy()}function Wy(){lc=id=!1;var e=0;Is!==0&&(wS()&&(e=Is),Is=0);for(var i=_n(),a=null,l=oc;l!==null;){var h=l.next,d=t_(l,i);d===0?(l.next=null,a===null?oc=h:a.next=h,h===null&&(xa=a)):(a=l,(e!==0||(d&3)!==0)&&(lc=!0)),l=h}ul(e)}function t_(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ge(d),T=1<<v,b=h[v];b===-1?((T&a)===0||(T&l)!==0)&&(h[v]=po(T,i)):b<=i&&(e.expiredLanes|=T),d&=~T}if(i=Wt,a=kt,a=$s(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Qt===2||Qt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Kr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jr(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Kr(l),Zs(a)){case 2:case 8:a=Ys;break;case 32:a=Yr;break;case 268435456:a=Xs;break;default:a=Yr}return l=e_.bind(null,e),a=Qr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Kr(l),e.callbackPriority=2,e.callbackNode=null,2}function e_(e,i){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ac()&&e.callbackNode!==a)return null;var l=kt;return l=$s(e,e===Wt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Uy(e,l,i),t_(e,_n()),e.callbackNode!=null&&e.callbackNode===a?e_.bind(null,e):null)}function n_(e,i){if(ac())return null;Uy(e,i,!0)}function yS(){IS(function(){(Gt&6)!==0?Qr(mo,pS):Wy()})}function sd(){return Is===0&&(Is=yo()),Is}function i_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ia(""+e)}function r_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function _S(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=i_((h[pe]||null).action),v=l.submitter;v&&(i=(i=v[pe]||null)?i_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new ra("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Is!==0){var b=v?r_(h,v):new FormData(h);wf(a,{pending:!0,data:b,method:h.method,action:d},null,b)}}else typeof d=="function"&&(T.preventDefault(),b=v?r_(h,v):new FormData(h),wf(a,{pending:!0,data:b,method:h.method,action:d},d,b))},currentTarget:h}]})}}for(var ad=0;ad<Hh.length;ad++){var od=Hh[ad],vS=od.toLowerCase(),TS=od[0].toUpperCase()+od.slice(1);Un(vS,"on"+TS)}Un(Ug,"onAnimationEnd"),Un(Lg,"onAnimationIteration"),Un(zg,"onAnimationStart"),Un("dblclick","onDoubleClick"),Un("focusin","onFocus"),Un("focusout","onBlur"),Un(UA,"onTransitionRun"),Un(LA,"onTransitionStart"),Un(zA,"onTransitionCancel"),Un(Bg,"onTransitionEnd"),Ri("onMouseEnter",["mouseout","mouseover"]),Ri("onMouseLeave",["mouseout","mouseover"]),Ri("onPointerEnter",["pointerout","pointerover"]),Ri("onPointerLeave",["pointerout","pointerover"]),xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl));function s_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],b=T.instance,L=T.currentTarget;if(T=T.listener,b!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(F){Xu(F)}h.currentTarget=null,d=b}else for(v=0;v<l.length;v++){if(T=l[v],b=T.instance,L=T.currentTarget,T=T.listener,b!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(F){Xu(F)}h.currentTarget=null,d=b}}}}function Nt(e,i){var a=i[Eo];a===void 0&&(a=i[Eo]=new Set);var l=e+"__bubble";a.has(l)||(a_(i,e,2,!1),a.add(l))}function ld(e,i,a){var l=0;i&&(l|=4),a_(a,e,l,i)}var uc="_reactListening"+Math.random().toString(36).slice(2);function ud(e){if(!e[uc]){e[uc]=!0,Ao.forEach(function(a){a!=="selectionchange"&&(ES.has(a)||ld(a,!1,e),ld(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[uc]||(i[uc]=!0,ld("selectionchange",!1,i))}}function a_(e,i,a,l){switch(N_(i)){case 2:var h=YS;break;case 8:h=XS;break;default:h=Sd}a=h.bind(null,i,a,e),h=void 0,!An||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function cd(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var b=v.tag;if((b===3||b===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=wi(T),v===null)return;if(b=v.tag,b===5||b===6||b===26||b===27){l=d=v;continue t}T=T.parentNode}}l=l.return}hu(function(){var L=d,F=En(a),K=[];t:{var z=qg.get(e);if(z!==void 0){var B=ra,vt=e;switch(e){case"keypress":if(ti(a)===0)break t;case"keydown":case"keyup":B=ca;break;case"focusin":vt="focus",B=oa;break;case"focusout":vt="blur",B=oa;break;case"beforeblur":case"afterblur":B=oa;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=xh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=vu;break;case Ug:case Lg:case zg:B=la;break;case Bg:B=Eu;break;case"scroll":case"scrollend":B=fu;break;case"wheel":B=ha;break;case"copy":case"cut":case"paste":B=ua;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Po;break;case"toggle":case"beforetoggle":B=Su}var pt=(i&4)!==0,$t=!pt&&(e==="scroll"||e==="scrollend"),P=pt?z!==null?z+"Capture":null:z;pt=[];for(var N=L,U;N!==null;){var G=N;if(U=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||U===null||P===null||(G=as(N,P),G!=null&&pt.push(hl(N,G,U))),$t)break;N=N.return}0<pt.length&&(z=new B(z,vt,null,a,F),K.push({event:z,listeners:pt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&a!==Di&&(vt=a.relatedTarget||a.fromElement)&&(wi(vt)||vt[vn]))break t;if((B||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,B?(vt=a.relatedTarget||a.toElement,B=L,vt=vt?wi(vt):null,vt!==null&&($t=u(vt),pt=vt.tag,vt!==$t||pt!==5&&pt!==27&&pt!==6)&&(vt=null)):(B=null,vt=L),B!==vt)){if(pt=Sn,G="onMouseLeave",P="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(pt=Po,G="onPointerLeave",P="onPointerEnter",N="pointer"),$t=B==null?z:$n(B),U=vt==null?z:$n(vt),z=new pt(G,N+"leave",B,a,F),z.target=$t,z.relatedTarget=U,G=null,wi(F)===L&&(pt=new pt(P,N+"enter",vt,a,F),pt.target=U,pt.relatedTarget=$t,G=pt),$t=G,B&&vt)e:{for(pt=B,P=vt,N=0,U=pt;U;U=ka(U))N++;for(U=0,G=P;G;G=ka(G))U++;for(;0<N-U;)pt=ka(pt),N--;for(;0<U-N;)P=ka(P),U--;for(;N--;){if(pt===P||P!==null&&pt===P.alternate)break e;pt=ka(pt),P=ka(P)}pt=null}else pt=null;B!==null&&o_(K,z,B,pt,!1),vt!==null&&$t!==null&&o_(K,$t,vt,pt,!0)}}t:{if(z=L?$n(L):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var lt=Rg;else if(we(z))if(Ig)lt=PA;else{lt=VA;var Ct=OA}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&Io(L.elementType)&&(lt=Rg):lt=MA;if(lt&&(lt=lt(e,L))){Pi(K,lt,a,F);break t}Ct&&Ct(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&or(z,"number",z.value)}switch(Ct=L?$n(L):window,e){case"focusin":(we(Ct)||Ct.contentEditable==="true")&&(fa=Ct,Bh=L,Uo=null);break;case"focusout":Uo=Bh=fa=null;break;case"mousedown":qh=!0;break;case"contextmenu":case"mouseup":case"dragend":qh=!1,xg(K,a,F);break;case"selectionchange":if(kA)break;case"keydown":case"keyup":xg(K,a,F)}var ct;if(ii)t:{switch(e){case"compositionstart":var yt="onCompositionStart";break t;case"compositionend":yt="onCompositionEnd";break t;case"compositionupdate":yt="onCompositionUpdate";break t}yt=void 0}else Pt?q(e,a)&&(yt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(_&&a.locale!=="ko"&&(Pt||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Pt&&(ct=Do()):(Wn=F,lr="value"in Wn?Wn.value:Wn.textContent,Pt=!0)),Ct=cc(L,yt),0<Ct.length&&(yt=new Vo(yt,e,null,a,F),K.push({event:yt,listeners:Ct}),ct?yt.data=ct:(ct=tt(a),ct!==null&&(yt.data=ct)))),(ct=g?be(e,a):xt(e,a))&&(yt=cc(L,"onBeforeInput"),0<yt.length&&(Ct=new Vo("onBeforeInput","beforeinput",null,a,F),K.push({event:Ct,listeners:yt}),Ct.data=ct)),_S(K,e,L,a,F)}s_(K,i)})}function hl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function cc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=as(e,a),h!=null&&l.unshift(hl(e,h,d)),h=as(e,i),h!=null&&l.push(hl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function ka(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function o_(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,b=T.alternate,L=T.stateNode;if(T=T.tag,b!==null&&b===l)break;T!==5&&T!==26&&T!==27||L===null||(b=L,h?(L=as(a,d),L!=null&&v.unshift(hl(a,L,b))):h||(L=as(a,d),L!=null&&v.push(hl(a,L,b)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var AS=/\r\n?/g,SS=/\u0000|\uFFFD/g;function l_(e){return(typeof e=="string"?e:""+e).replace(AS,`
`).replace(SS,"")}function u_(e,i){return i=l_(i),l_(e)===i}function hc(){}function Xt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Tn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Tn(e,""+l);break;case"className":Zn(e,"class",l);break;case"tabIndex":Zn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(e,a,l);break;case"style":Ro(e,l,d);break;case"data":if(i!=="object"){Zn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ia(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xt(e,i,"name",h.name,h,null),Xt(e,i,"formEncType",h.formEncType,h,null),Xt(e,i,"formMethod",h.formMethod,h,null),Xt(e,i,"formTarget",h.formTarget,h,null)):(Xt(e,i,"encType",h.encType,h,null),Xt(e,i,"method",h.method,h,null),Xt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ia(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=hc);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ia(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Nt("beforetoggle",e),Nt("toggle",e),ar(e,"popover",l);break;case"xlinkActuate":Ue(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ue(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ue(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ue(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ue(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ue(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ar(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mh.get(a)||a,ar(e,a,l))}}function hd(e,i,a,l,h,d){switch(a){case"style":Ro(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Tn(e,l):(typeof l=="number"||typeof l=="bigint")&&Tn(e,""+l);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=hc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Js.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[pe]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ar(e,a,l)}}}function qe(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",e),Nt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,d,v,a,null)}}h&&Xt(e,i,"srcSet",a.srcSet,a,null),l&&Xt(e,i,"src",a.src,a,null);return;case"input":Nt("invalid",e);var T=d=v=h=null,b=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var F=a[l];if(F!=null)switch(l){case"name":h=F;break;case"type":v=F;break;case"checked":b=F;break;case"defaultChecked":L=F;break;case"value":d=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:Xt(e,i,l,F,a,null)}}is(e,d,T,b,L,v,h,!1),na(e);return;case"select":Nt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Xt(e,i,h,T,a,null)}i=d,a=v,e.multiple=!!l,i!=null?Ci(e,!!l,i,!1):a!=null&&Ci(e,!!l,a,!0);return;case"textarea":Nt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xt(e,i,v,T,a,null)}rs(e,l,h,d),na(e);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xt(e,i,b,l,a,null)}return;case"dialog":Nt("beforetoggle",e),Nt("toggle",e),Nt("cancel",e),Nt("close",e);break;case"iframe":case"object":Nt("load",e);break;case"video":case"audio":for(l=0;l<cl.length;l++)Nt(cl[l],e);break;case"image":Nt("error",e),Nt("load",e);break;case"details":Nt("toggle",e);break;case"embed":case"source":case"link":Nt("error",e),Nt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,L,l,a,null)}return;default:if(Io(i)){for(F in a)a.hasOwnProperty(F)&&(l=a[F],l!==void 0&&hd(e,i,F,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Xt(e,i,T,l,a,null))}function bS(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,b=null,L=null,F=null;for(B in a){var K=a[B];if(a.hasOwnProperty(B)&&K!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":b=K;default:l.hasOwnProperty(B)||Xt(e,i,B,null,l,K)}}for(var z in l){var B=l[z];if(K=a[z],l.hasOwnProperty(z)&&(B!=null||K!=null))switch(z){case"type":d=B;break;case"name":h=B;break;case"checked":L=B;break;case"defaultChecked":F=B;break;case"value":v=B;break;case"defaultValue":T=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==K&&Xt(e,i,z,B,l,K)}}un(e,v,T,b,L,F,d,h);return;case"select":B=v=T=z=null;for(d in a)if(b=a[d],a.hasOwnProperty(d)&&b!=null)switch(d){case"value":break;case"multiple":B=b;default:l.hasOwnProperty(d)||Xt(e,i,d,null,l,b)}for(h in l)if(d=l[h],b=a[h],l.hasOwnProperty(h)&&(d!=null||b!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==b&&Xt(e,i,h,d,l,b)}i=T,a=v,l=B,z!=null?Ci(e,!!a,z,!1):!!l!=!!a&&(i!=null?Ci(e,!!a,i,!0):Ci(e,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xt(e,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xt(e,i,v,h,l,d)}Kt(e,z,B);return;case"option":for(var vt in a)if(z=a[vt],a.hasOwnProperty(vt)&&z!=null&&!l.hasOwnProperty(vt))switch(vt){case"selected":e.selected=!1;break;default:Xt(e,i,vt,null,l,z)}for(b in l)if(z=l[b],B=a[b],l.hasOwnProperty(b)&&z!==B&&(z!=null||B!=null))switch(b){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Xt(e,i,b,z,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pt in a)z=a[pt],a.hasOwnProperty(pt)&&z!=null&&!l.hasOwnProperty(pt)&&Xt(e,i,pt,null,l,z);for(L in l)if(z=l[L],B=a[L],l.hasOwnProperty(L)&&z!==B&&(z!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Xt(e,i,L,z,l,B)}return;default:if(Io(i)){for(var $t in a)z=a[$t],a.hasOwnProperty($t)&&z!==void 0&&!l.hasOwnProperty($t)&&hd(e,i,$t,void 0,l,z);for(F in l)z=l[F],B=a[F],!l.hasOwnProperty(F)||z===B||z===void 0&&B===void 0||hd(e,i,F,z,l,B);return}}for(var P in a)z=a[P],a.hasOwnProperty(P)&&z!=null&&!l.hasOwnProperty(P)&&Xt(e,i,P,null,l,z);for(K in l)z=l[K],B=a[K],!l.hasOwnProperty(K)||z===B||z==null&&B==null||Xt(e,i,K,z,l,B)}var fd=null,dd=null;function fc(e){return e.nodeType===9?e:e.ownerDocument}function c_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function h_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function md(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gd=null;function wS(){var e=window.event;return e&&e.type==="popstate"?e===gd?!1:(gd=e,!0):(gd=null,!1)}var f_=typeof setTimeout=="function"?setTimeout:void 0,RS=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,IS=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(e){return d_.resolve(null).then(e).catch(CS)}:f_;function CS(e){setTimeout(function(){throw e})}function br(e){return e==="head"}function m_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&fl(v.documentElement),a&2&&fl(v.body),a&4)for(a=v.head,fl(a),v=a.firstChild;v;){var T=v.nextSibling,b=v.nodeName;v[Wr]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){e.removeChild(d),Tl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Tl(i)}function pd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pd(a),sr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function DS(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=zn(e.nextSibling),e===null)break}return null}function NS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zn(e.nextSibling),e===null))return null;return e}function yd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function OS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var _d=null;function g_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function p_(e,i,a){switch(i=fc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function fl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);sr(e)}var Nn=new Map,y_=new Set;function dc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ki=nt.d;nt.d={f:VS,r:MS,D:PS,C:xS,L:kS,m:US,X:zS,S:LS,M:BS};function VS(){var e=Ki.f(),i=rc();return e||i}function MS(e){var i=Xn(e);i!==null&&i.tag===5&&i.type==="form"?Up(i):Ki.r(e)}var Ua=typeof document>"u"?null:document;function __(e,i,a){var l=Ua;if(l&&typeof i=="string"&&i){var h=ye(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),y_.has(h)||(y_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),qe(i,"link",e),he(i),l.head.appendChild(i)))}}function PS(e){Ki.D(e),__("dns-prefetch",e,null)}function xS(e,i){Ki.C(e,i),__("preconnect",e,i)}function kS(e,i,a){Ki.L(e,i,a);var l=Ua;if(l&&e&&i){var h='link[rel="preload"][as="'+ye(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+ye(a.imageSizes)+'"]')):h+='[href="'+ye(e)+'"]';var d=h;switch(i){case"style":d=La(e);break;case"script":d=za(e)}Nn.has(d)||(e=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Nn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(dl(d))||i==="script"&&l.querySelector(ml(d))||(i=l.createElement("link"),qe(i,"link",e),he(i),l.head.appendChild(i)))}}function US(e,i){Ki.m(e,i);var a=Ua;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ye(l)+'"][href="'+ye(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=za(e)}if(!Nn.has(d)&&(e=E({rel:"modulepreload",href:e},i),Nn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ml(d)))return}l=a.createElement("link"),qe(l,"link",e),he(l),a.head.appendChild(l)}}}function LS(e,i,a){Ki.S(e,i,a);var l=Ua;if(l&&e){var h=Je(l).hoistableStyles,d=La(e);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(dl(d)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Nn.get(d))&&vd(e,a);var b=v=l.createElement("link");he(b),qe(b,"link",e),b._p=new Promise(function(L,F){b.onload=L,b.onerror=F}),b.addEventListener("load",function(){T.loading|=1}),b.addEventListener("error",function(){T.loading|=2}),T.loading|=4,mc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function zS(e,i){Ki.X(e,i);var a=Ua;if(a&&e){var l=Je(a).hoistableScripts,h=za(e),d=l.get(h);d||(d=a.querySelector(ml(h)),d||(e=E({src:e,async:!0},i),(i=Nn.get(h))&&Td(e,i),d=a.createElement("script"),he(d),qe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function BS(e,i){Ki.M(e,i);var a=Ua;if(a&&e){var l=Je(a).hoistableScripts,h=za(e),d=l.get(h);d||(d=a.querySelector(ml(h)),d||(e=E({src:e,async:!0,type:"module"},i),(i=Nn.get(h))&&Td(e,i),d=a.createElement("script"),he(d),qe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function v_(e,i,a,l){var h=(h=At.current)?dc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=La(a.href),a=Je(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=La(a.href);var d=Je(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(dl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Nn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Nn.set(e,a),d||qS(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=za(a),a=Je(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function La(e){return'href="'+ye(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function T_(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function qS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),qe(i,"link",a),he(i),e.head.appendChild(i))}function za(e){return'[src="'+ye(e)+'"]'}function ml(e){return"script[async]"+e}function E_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ye(a.href)+'"]');if(l)return i.instance=l,he(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),he(l),qe(l,"style",h),mc(l,a.precedence,e),i.instance=l;case"stylesheet":h=La(a.href);var d=e.querySelector(dl(h));if(d)return i.state.loading|=4,i.instance=d,he(d),d;l=T_(a),(h=Nn.get(h))&&vd(l,h),d=(e.ownerDocument||e).createElement("link"),he(d);var v=d;return v._p=new Promise(function(T,b){v.onload=T,v.onerror=b}),qe(d,"link",l),i.state.loading|=4,mc(d,a.precedence,e),i.instance=d;case"script":return d=za(a.src),(h=e.querySelector(ml(d)))?(i.instance=h,he(h),h):(l=a,(h=Nn.get(d))&&(l=E({},a),Td(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),he(h),qe(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,mc(l,a.precedence,e));return i.instance}function mc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function vd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Td(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var gc=null;function A_(e,i,a){if(gc===null){var l=new Map,h=gc=new Map;h.set(a,l)}else h=gc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[Wr]||d[Se]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function S_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function jS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function b_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var gl=null;function HS(){}function FS(e,i,a){if(gl===null)throw Error(s(475));var l=gl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=La(a.href),d=e.querySelector(dl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=pc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,he(d);return}d=e.ownerDocument||e,a=T_(a),(h=Nn.get(h))&&vd(a,h),d=d.createElement("link"),he(d);var v=d;v._p=new Promise(function(T,b){v.onload=T,v.onerror=b}),qe(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=pc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function GS(){if(gl===null)throw Error(s(475));var e=gl;return e.stylesheets&&e.count===0&&Ed(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Ed(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function pc(){if(this.count--,this.count===0){if(this.stylesheets)Ed(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yc=null;function Ed(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yc=new Map,i.forEach(QS,e),yc=null,pc.call(e))}function QS(e,i){if(!(i.state.loading&4)){var a=yc.get(e);if(a)var l=a.get(null);else{a=new Map,yc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=pc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var pl={$$typeof:it,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function KS(e,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Si(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Si(0),this.hiddenUpdates=Si(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function w_(e,i,a,l,h,d,v,T,b,L,F,K){return e=new KS(e,i,a,v,T,b,L,K),i=1,d===!0&&(i|=24),d=hn(3,null,null,i),e.current=d,d.stateNode=e,i=ef(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},af(d),e}function R_(e){return e?(e=pa,e):pa}function I_(e,i,a,l,h,d){h=R_(h),l.context===null?l.context=h:l.pendingContext=h,l=hr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=fr(e,l,i),a!==null&&(pn(a,e,i),Qo(a,e,i))}function C_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Ad(e,i){C_(e,i),(e=e.alternate)&&C_(e,i)}function D_(e){if(e.tag===13){var i=ga(e,67108864);i!==null&&pn(i,e,67108864),Ad(e,67108864)}}var _c=!0;function YS(e,i,a,l){var h=H.T;H.T=null;var d=nt.p;try{nt.p=2,Sd(e,i,a,l)}finally{nt.p=d,H.T=h}}function XS(e,i,a,l){var h=H.T;H.T=null;var d=nt.p;try{nt.p=8,Sd(e,i,a,l)}finally{nt.p=d,H.T=h}}function Sd(e,i,a,l){if(_c){var h=bd(l);if(h===null)cd(e,i,l,vc,a),O_(e,l);else if(ZS(h,e,i,a,l))l.stopPropagation();else if(O_(e,l),i&4&&-1<$S.indexOf(e)){for(;h!==null;){var d=Xn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Pn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var b=1<<31-Ge(v);T.entanglements[1]|=b,v&=~b}ui(d),(Gt&6)===0&&(nc=_n()+500,ul(0))}}break;case 13:T=ga(d,2),T!==null&&pn(T,d,2),rc(),Ad(d,2)}if(d=bd(l),d===null&&cd(e,i,l,vc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else cd(e,i,l,null,a)}}function bd(e){return e=En(e),wd(e)}var vc=null;function wd(e){if(vc=null,e=wi(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return vc=e,null}function N_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ih()){case mo:return 2;case Ys:return 8;case Yr:case Ch:return 32;case Xs:return 268435456;default:return 32}default:return 32}}var Rd=!1,wr=null,Rr=null,Ir=null,yl=new Map,_l=new Map,Cr=[],$S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function O_(e,i){switch(e){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":yl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(i.pointerId)}}function vl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Xn(i),i!==null&&D_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function ZS(e,i,a,l,h){switch(i){case"focusin":return wr=vl(wr,e,i,a,l,h),!0;case"dragenter":return Rr=vl(Rr,e,i,a,l,h),!0;case"mouseover":return Ir=vl(Ir,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return yl.set(d,vl(yl.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,_l.set(d,vl(_l.get(d)||null,e,i,a,l,h)),!0}return!1}function V_(e){var i=wi(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,ru(e.priority,function(){if(a.tag===13){var l=gn();l=nr(l);var h=ga(a,l);h!==null&&pn(h,a,l),Ad(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=bd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Di=l,a.target.dispatchEvent(l),Di=null}else return i=Xn(a),i!==null&&D_(i),e.blockedOn=a,!1;i.shift()}return!0}function M_(e,i,a){Tc(e)&&a.delete(i)}function JS(){Rd=!1,wr!==null&&Tc(wr)&&(wr=null),Rr!==null&&Tc(Rr)&&(Rr=null),Ir!==null&&Tc(Ir)&&(Ir=null),yl.forEach(M_),_l.forEach(M_)}function Ec(e,i){e.blockedOn===i&&(e.blockedOn=null,Rd||(Rd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,JS)))}var Ac=null;function P_(e){Ac!==e&&(Ac=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ac===e&&(Ac=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(wd(l||a)===null)continue;break}var d=Xn(a);d!==null&&(e.splice(i,3),i-=3,wf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Tl(e){function i(b){return Ec(b,e)}wr!==null&&Ec(wr,e),Rr!==null&&Ec(Rr,e),Ir!==null&&Ec(Ir,e),yl.forEach(i),_l.forEach(i);for(var a=0;a<Cr.length;a++){var l=Cr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Cr.length&&(a=Cr[0],a.blockedOn===null);)V_(a),a.blockedOn===null&&Cr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[pe]||null;if(typeof d=="function")v||P_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[pe]||null)T=v.formAction;else if(wd(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),P_(a)}}}function Id(e){this._internalRoot=e}Sc.prototype.render=Id.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=gn();I_(a,l,e,i,null,null)},Sc.prototype.unmount=Id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;I_(e.current,2,null,e,null,null),rc(),i[vn]=null}};function Sc(e){this._internalRoot=e}Sc.prototype.unstable_scheduleHydration=function(e){if(e){var i=ir();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Cr.length&&i!==0&&i<Cr[a].priority;a++);Cr.splice(a,0,e),a===0&&V_(e)}};var x_=t.version;if(x_!=="19.1.1")throw Error(s(527,x_,"19.1.1"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var WS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{oe=bc.inject(WS),Ft=bc}catch{}}return Al.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=Zp,d=Jp,v=Wp,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=w_(e,1,!1,null,null,a,l,h,d,v,T,null),e[vn]=i.current,ud(e),new Id(i)},Al.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=Zp,v=Jp,T=Wp,b=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=w_(e,1,!0,i,a??null,l,h,d,v,T,b,L),i.context=R_(null),a=i.current,l=gn(),l=nr(l),h=hr(l),h.callback=null,fr(a,h,l),a=l,i.current.lanes=a,bi(i,a),ui(i),e[vn]=i.current,ud(e),new Sc(i)},Al.version="19.1.1",Al}var G_;function ub(){if(G_)return Nd.exports;G_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Nd.exports=lb(),Nd.exports}var cb=ub();const hb=()=>{};var Q_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},fb=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],y=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(y>>10)),t[s++]=String.fromCharCode(56320+(y&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},OT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,y=o+2<r.length,p=y?r[o+2]:0,E=u>>2,w=(u&3)<<4|m>>4;let C=(m&15)<<2|p>>6,j=p&63;y||(j=64,f||(C=64)),s.push(n[E],n[w],n[C],n[j])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(NT(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):fb(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const p=o<r.length?n[r.charAt(o)]:64;++o;const w=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||p==null||w==null)throw new db;const C=u<<2|m>>4;if(s.push(C),p!==64){const j=m<<4&240|p>>2;if(s.push(j),w!==64){const X=p<<6&192|w;s.push(X)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class db extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mb=function(r){const t=NT(r);return OT.encodeByteArray(t,!0)},qc=function(r){return mb(r).replace(/\./g,"")},VT=function(r){try{return OT.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=()=>gb().__FIREBASE_DEFAULTS__,yb=()=>{if(typeof process>"u"||typeof Q_>"u")return;const r=Q_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},_b=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&VT(r[1]);return t&&JSON.parse(t)},lh=()=>{try{return hb()||pb()||yb()||_b()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},MT=r=>lh()?.emulatorHosts?.[r],vb=r=>{const t=MT(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},PT=()=>lh()?.config,xT=r=>lh()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kT(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[qc(JSON.stringify(n)),qc(JSON.stringify(f)),""].join(".")}const Il={};function Ab(){const r={prod:[],emulator:[]};for(const t of Object.keys(Il))Il[t]?r.emulator.push(t):r.prod.push(t);return r}function Sb(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let K_=!1;function UT(r,t){if(typeof window>"u"||typeof document>"u"||!ro(window.location.host)||Il[r]===t||Il[r]||K_)return;Il[r]=t;function n(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=Ab().prod.length>0;function f(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function y(C,j){C.setAttribute("width","24"),C.setAttribute("id",j),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function p(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{K_=!0,f()},C}function E(C,j){C.setAttribute("id",j),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function w(){const C=Sb(s),j=n("text"),X=document.getElementById(j)||document.createElement("span"),et=n("learnmore"),$=document.getElementById(et)||document.createElement("a"),st=n("preprendIcon"),ut=document.getElementById(st)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const it=C.element;m(it),E($,et);const mt=p();y(ut,st),it.append(ut,X,$,mt),document.body.appendChild(it)}u?(X.innerText="Preview backend disconnected.",ut.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ut.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,X.innerText="Preview backend running in this workspace."),X.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function wb(){const r=lh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function LT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Ib(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cb(){const r=Ze();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Db(){return!wb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zT(){try{return typeof indexedDB=="object"}catch{return!1}}function BT(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(n){t(n)}})}function Nb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="FirebaseError";class Qn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Ob,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,js.prototype.create)}}class js{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?Vb(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Qn(o,m,s)}}function Vb(r,t){return r.replace(Mb,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const Mb=/\{\$([^}]+)}/g;function Pb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Lr(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(Y_(u)&&Y_(f)){if(!Lr(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Y_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function xb(r,t){const n=new kb(r,t);return n.subscribe.bind(n)}class kb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ub(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Pd),o.error===void 0&&(o.error=Pd),o.complete===void 0&&(o.complete=Pd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ub(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Pd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=1e3,zb=2,Bb=14400*1e3,qb=.5;function X_(r,t=Lb,n=zb){const s=t*Math.pow(n,r),o=Math.round(qb*s*(Math.random()-.5)*2);return Math.min(Bb,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(r){return r&&r._delegate?r._delegate:r}class Fn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Tb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fb(t))try{this.getOrInitializeService({instanceIdentifier:Cs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Cs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Cs){return this.instances.has(t)}getOptions(t=Cs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Hb(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Cs){return this.component?this.component.multipleInstances?t:Cs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hb(r){return r===Cs?void 0:r}function Fb(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new jb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ot||(Ot={}));const Qb={debug:Ot.DEBUG,verbose:Ot.VERBOSE,info:Ot.INFO,warn:Ot.WARN,error:Ot.ERROR,silent:Ot.SILENT},Kb=Ot.INFO,Yb={[Ot.DEBUG]:"log",[Ot.VERBOSE]:"log",[Ot.INFO]:"info",[Ot.WARN]:"warn",[Ot.ERROR]:"error"},Xb=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=Yb[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class uh{constructor(t){this.name=t,this._logLevel=Kb,this._logHandler=Xb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ot))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ot.DEBUG,...t),this._logHandler(this,Ot.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ot.VERBOSE,...t),this._logHandler(this,Ot.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ot.INFO,...t),this._logHandler(this,Ot.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ot.WARN,...t),this._logHandler(this,Ot.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ot.ERROR,...t),this._logHandler(this,Ot.ERROR,...t)}}const $b=(r,t)=>t.some(n=>r instanceof n);let $_,Z_;function Zb(){return $_||($_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jb(){return Z_||(Z_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qT=new WeakMap,Xd=new WeakMap,jT=new WeakMap,xd=new WeakMap,Am=new WeakMap;function Wb(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(xr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&qT.set(n,r)}).catch(()=>{}),Am.set(t,r),t}function t1(r){if(Xd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Xd.set(r,t)}let $d={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Xd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||jT.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function e1(r){$d=r($d)}function n1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(kd(this),t,...n);return jT.set(s,t.sort?t.sort():[t]),xr(s)}:Jb().includes(r)?function(...t){return r.apply(kd(this),t),xr(qT.get(this))}:function(...t){return xr(r.apply(kd(this),t))}}function i1(r){return typeof r=="function"?n1(r):(r instanceof IDBTransaction&&t1(r),$b(r,Zb())?new Proxy(r,$d):r)}function xr(r){if(r instanceof IDBRequest)return Wb(r);if(xd.has(r))return xd.get(r);const t=i1(r);return t!==r&&(xd.set(r,t),Am.set(t,r)),t}const kd=r=>Am.get(r);function HT(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),m=xr(f);return s&&f.addEventListener("upgradeneeded",y=>{s(xr(f.result),y.oldVersion,y.newVersion,xr(f.transaction),y)}),n&&f.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),m}const r1=["get","getKey","getAll","getAllKeys","count"],s1=["put","add","delete","clear"],Ud=new Map;function J_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Ud.get(t))return Ud.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=s1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||r1.includes(n)))return;const u=async function(f,...m){const y=this.transaction(f,o?"readwrite":"readonly");let p=y.store;return s&&(p=p.index(m.shift())),(await Promise.all([p[n](...m),o&&y.done]))[0]};return Ud.set(t,u),u}e1(r=>({...r,get:(t,n,s)=>J_(t,n)||r.get(t,n,s),has:(t,n)=>!!J_(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(o1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function o1(r){return r.getComponent()?.type==="VERSION"}const Zd="@firebase/app",W_="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new uh("@firebase/app"),l1="@firebase/app-compat",u1="@firebase/analytics-compat",c1="@firebase/analytics",h1="@firebase/app-check-compat",f1="@firebase/app-check",d1="@firebase/auth",m1="@firebase/auth-compat",g1="@firebase/database",p1="@firebase/data-connect",y1="@firebase/database-compat",_1="@firebase/functions",v1="@firebase/functions-compat",T1="@firebase/installations",E1="@firebase/installations-compat",A1="@firebase/messaging",S1="@firebase/messaging-compat",b1="@firebase/performance",w1="@firebase/performance-compat",R1="@firebase/remote-config",I1="@firebase/remote-config-compat",C1="@firebase/storage",D1="@firebase/storage-compat",N1="@firebase/firestore",O1="@firebase/ai",V1="@firebase/firestore-compat",M1="firebase",P1="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="[DEFAULT]",x1={[Zd]:"fire-core",[l1]:"fire-core-compat",[c1]:"fire-analytics",[u1]:"fire-analytics-compat",[f1]:"fire-app-check",[h1]:"fire-app-check-compat",[d1]:"fire-auth",[m1]:"fire-auth-compat",[g1]:"fire-rtdb",[p1]:"fire-data-connect",[y1]:"fire-rtdb-compat",[_1]:"fire-fn",[v1]:"fire-fn-compat",[T1]:"fire-iid",[E1]:"fire-iid-compat",[A1]:"fire-fcm",[S1]:"fire-fcm-compat",[b1]:"fire-perf",[w1]:"fire-perf-compat",[R1]:"fire-rc",[I1]:"fire-rc-compat",[C1]:"fire-gcs",[D1]:"fire-gcs-compat",[N1]:"fire-fst",[V1]:"fire-fst-compat",[O1]:"fire-vertex","fire-js":"fire-js",[M1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=new Map,k1=new Map,Wd=new Map;function tv(r,t){try{r.container.addComponent(t)}catch(n){Zi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function _i(r){const t=r.name;if(Wd.has(t))return Zi.debug(`There were multiple attempts to register component ${t}.`),!1;Wd.set(t,r);for(const n of jc.values())tv(n,r);for(const n of k1.values())tv(n,r);return!0}function Hs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Bn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kr=new js("app","Firebase",U1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=P1;function FT(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s={name:Jd,automaticDataCollectionEnabled:!0,...t},o=s.name;if(typeof o!="string"||!o)throw kr.create("bad-app-name",{appName:String(o)});if(n||(n=PT()),!n)throw kr.create("no-options");const u=jc.get(o);if(u){if(Lr(n,u.options)&&Lr(s,u.config))return u;throw kr.create("duplicate-app",{appName:o})}const f=new Gb(o);for(const y of Wd.values())f.addComponent(y);const m=new L1(n,s,f);return jc.set(o,m),m}function Sm(r=Jd){const t=jc.get(r);if(!t&&r===Jd&&PT())return FT();if(!t)throw kr.create("no-app",{appName:r});return t}function Mn(r,t,n){let s=x1[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${t}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zi.warn(f.join(" "));return}_i(new Fn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1="firebase-heartbeat-database",B1=1,Pl="firebase-heartbeat-store";let Ld=null;function GT(){return Ld||(Ld=HT(z1,B1,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Pl)}catch(n){console.warn(n)}}}}).catch(r=>{throw kr.create("idb-open",{originalErrorMessage:r.message})})),Ld}async function q1(r){try{const n=(await GT()).transaction(Pl),s=await n.objectStore(Pl).get(QT(r));return await n.done,s}catch(t){if(t instanceof Qn)Zi.warn(t.message);else{const n=kr.create("idb-get",{originalErrorMessage:t?.message});Zi.warn(n.message)}}}async function ev(r,t){try{const s=(await GT()).transaction(Pl,"readwrite");await s.objectStore(Pl).put(t,QT(r)),await s.done}catch(n){if(n instanceof Qn)Zi.warn(n.message);else{const s=kr.create("idb-set",{originalErrorMessage:n?.message});Zi.warn(s.message)}}}function QT(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=1024,H1=30;class F1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Q1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>H1){const o=K1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Zi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nv(),{heartbeatsToSend:n,unsentEntries:s}=G1(this._heartbeatsCache.heartbeats),o=qc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Zi.warn(t),""}}}function nv(){return new Date().toISOString().substring(0,10)}function G1(r,t=j1){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),iv(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),iv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Q1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zT()?BT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await q1(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return ev(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return ev(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function iv(r){return qc(JSON.stringify({version:2,heartbeats:r})).length}function K1(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(r){_i(new Fn("platform-logger",t=>new a1(t),"PRIVATE")),_i(new Fn("heartbeat",t=>new F1(t),"PRIVATE")),Mn(Zd,W_,r),Mn(Zd,W_,"esm2020"),Mn("fire-js","")}Y1("");var X1="firebase",$1="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn(X1,$1,"app");var rv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,KT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(O,S){function I(){}I.prototype=S.prototype,O.D=S.prototype,O.prototype=new I,O.prototype.constructor=O,O.C=function(V,M,x){for(var R=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)R[ke-2]=arguments[ke];return S.prototype[M].apply(V,R)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(O,S,I){I||(I=0);var V=Array(16);if(typeof S=="string")for(var M=0;16>M;++M)V[M]=S.charCodeAt(I++)|S.charCodeAt(I++)<<8|S.charCodeAt(I++)<<16|S.charCodeAt(I++)<<24;else for(M=0;16>M;++M)V[M]=S[I++]|S[I++]<<8|S[I++]<<16|S[I++]<<24;S=O.g[0],I=O.g[1],M=O.g[2];var x=O.g[3],R=S+(x^I&(M^x))+V[0]+3614090360&4294967295;S=I+(R<<7&4294967295|R>>>25),R=x+(M^S&(I^M))+V[1]+3905402710&4294967295,x=S+(R<<12&4294967295|R>>>20),R=M+(I^x&(S^I))+V[2]+606105819&4294967295,M=x+(R<<17&4294967295|R>>>15),R=I+(S^M&(x^S))+V[3]+3250441966&4294967295,I=M+(R<<22&4294967295|R>>>10),R=S+(x^I&(M^x))+V[4]+4118548399&4294967295,S=I+(R<<7&4294967295|R>>>25),R=x+(M^S&(I^M))+V[5]+1200080426&4294967295,x=S+(R<<12&4294967295|R>>>20),R=M+(I^x&(S^I))+V[6]+2821735955&4294967295,M=x+(R<<17&4294967295|R>>>15),R=I+(S^M&(x^S))+V[7]+4249261313&4294967295,I=M+(R<<22&4294967295|R>>>10),R=S+(x^I&(M^x))+V[8]+1770035416&4294967295,S=I+(R<<7&4294967295|R>>>25),R=x+(M^S&(I^M))+V[9]+2336552879&4294967295,x=S+(R<<12&4294967295|R>>>20),R=M+(I^x&(S^I))+V[10]+4294925233&4294967295,M=x+(R<<17&4294967295|R>>>15),R=I+(S^M&(x^S))+V[11]+2304563134&4294967295,I=M+(R<<22&4294967295|R>>>10),R=S+(x^I&(M^x))+V[12]+1804603682&4294967295,S=I+(R<<7&4294967295|R>>>25),R=x+(M^S&(I^M))+V[13]+4254626195&4294967295,x=S+(R<<12&4294967295|R>>>20),R=M+(I^x&(S^I))+V[14]+2792965006&4294967295,M=x+(R<<17&4294967295|R>>>15),R=I+(S^M&(x^S))+V[15]+1236535329&4294967295,I=M+(R<<22&4294967295|R>>>10),R=S+(M^x&(I^M))+V[1]+4129170786&4294967295,S=I+(R<<5&4294967295|R>>>27),R=x+(I^M&(S^I))+V[6]+3225465664&4294967295,x=S+(R<<9&4294967295|R>>>23),R=M+(S^I&(x^S))+V[11]+643717713&4294967295,M=x+(R<<14&4294967295|R>>>18),R=I+(x^S&(M^x))+V[0]+3921069994&4294967295,I=M+(R<<20&4294967295|R>>>12),R=S+(M^x&(I^M))+V[5]+3593408605&4294967295,S=I+(R<<5&4294967295|R>>>27),R=x+(I^M&(S^I))+V[10]+38016083&4294967295,x=S+(R<<9&4294967295|R>>>23),R=M+(S^I&(x^S))+V[15]+3634488961&4294967295,M=x+(R<<14&4294967295|R>>>18),R=I+(x^S&(M^x))+V[4]+3889429448&4294967295,I=M+(R<<20&4294967295|R>>>12),R=S+(M^x&(I^M))+V[9]+568446438&4294967295,S=I+(R<<5&4294967295|R>>>27),R=x+(I^M&(S^I))+V[14]+3275163606&4294967295,x=S+(R<<9&4294967295|R>>>23),R=M+(S^I&(x^S))+V[3]+4107603335&4294967295,M=x+(R<<14&4294967295|R>>>18),R=I+(x^S&(M^x))+V[8]+1163531501&4294967295,I=M+(R<<20&4294967295|R>>>12),R=S+(M^x&(I^M))+V[13]+2850285829&4294967295,S=I+(R<<5&4294967295|R>>>27),R=x+(I^M&(S^I))+V[2]+4243563512&4294967295,x=S+(R<<9&4294967295|R>>>23),R=M+(S^I&(x^S))+V[7]+1735328473&4294967295,M=x+(R<<14&4294967295|R>>>18),R=I+(x^S&(M^x))+V[12]+2368359562&4294967295,I=M+(R<<20&4294967295|R>>>12),R=S+(I^M^x)+V[5]+4294588738&4294967295,S=I+(R<<4&4294967295|R>>>28),R=x+(S^I^M)+V[8]+2272392833&4294967295,x=S+(R<<11&4294967295|R>>>21),R=M+(x^S^I)+V[11]+1839030562&4294967295,M=x+(R<<16&4294967295|R>>>16),R=I+(M^x^S)+V[14]+4259657740&4294967295,I=M+(R<<23&4294967295|R>>>9),R=S+(I^M^x)+V[1]+2763975236&4294967295,S=I+(R<<4&4294967295|R>>>28),R=x+(S^I^M)+V[4]+1272893353&4294967295,x=S+(R<<11&4294967295|R>>>21),R=M+(x^S^I)+V[7]+4139469664&4294967295,M=x+(R<<16&4294967295|R>>>16),R=I+(M^x^S)+V[10]+3200236656&4294967295,I=M+(R<<23&4294967295|R>>>9),R=S+(I^M^x)+V[13]+681279174&4294967295,S=I+(R<<4&4294967295|R>>>28),R=x+(S^I^M)+V[0]+3936430074&4294967295,x=S+(R<<11&4294967295|R>>>21),R=M+(x^S^I)+V[3]+3572445317&4294967295,M=x+(R<<16&4294967295|R>>>16),R=I+(M^x^S)+V[6]+76029189&4294967295,I=M+(R<<23&4294967295|R>>>9),R=S+(I^M^x)+V[9]+3654602809&4294967295,S=I+(R<<4&4294967295|R>>>28),R=x+(S^I^M)+V[12]+3873151461&4294967295,x=S+(R<<11&4294967295|R>>>21),R=M+(x^S^I)+V[15]+530742520&4294967295,M=x+(R<<16&4294967295|R>>>16),R=I+(M^x^S)+V[2]+3299628645&4294967295,I=M+(R<<23&4294967295|R>>>9),R=S+(M^(I|~x))+V[0]+4096336452&4294967295,S=I+(R<<6&4294967295|R>>>26),R=x+(I^(S|~M))+V[7]+1126891415&4294967295,x=S+(R<<10&4294967295|R>>>22),R=M+(S^(x|~I))+V[14]+2878612391&4294967295,M=x+(R<<15&4294967295|R>>>17),R=I+(x^(M|~S))+V[5]+4237533241&4294967295,I=M+(R<<21&4294967295|R>>>11),R=S+(M^(I|~x))+V[12]+1700485571&4294967295,S=I+(R<<6&4294967295|R>>>26),R=x+(I^(S|~M))+V[3]+2399980690&4294967295,x=S+(R<<10&4294967295|R>>>22),R=M+(S^(x|~I))+V[10]+4293915773&4294967295,M=x+(R<<15&4294967295|R>>>17),R=I+(x^(M|~S))+V[1]+2240044497&4294967295,I=M+(R<<21&4294967295|R>>>11),R=S+(M^(I|~x))+V[8]+1873313359&4294967295,S=I+(R<<6&4294967295|R>>>26),R=x+(I^(S|~M))+V[15]+4264355552&4294967295,x=S+(R<<10&4294967295|R>>>22),R=M+(S^(x|~I))+V[6]+2734768916&4294967295,M=x+(R<<15&4294967295|R>>>17),R=I+(x^(M|~S))+V[13]+1309151649&4294967295,I=M+(R<<21&4294967295|R>>>11),R=S+(M^(I|~x))+V[4]+4149444226&4294967295,S=I+(R<<6&4294967295|R>>>26),R=x+(I^(S|~M))+V[11]+3174756917&4294967295,x=S+(R<<10&4294967295|R>>>22),R=M+(S^(x|~I))+V[2]+718787259&4294967295,M=x+(R<<15&4294967295|R>>>17),R=I+(x^(M|~S))+V[9]+3951481745&4294967295,O.g[0]=O.g[0]+S&4294967295,O.g[1]=O.g[1]+(M+(R<<21&4294967295|R>>>11))&4294967295,O.g[2]=O.g[2]+M&4294967295,O.g[3]=O.g[3]+x&4294967295}s.prototype.u=function(O,S){S===void 0&&(S=O.length);for(var I=S-this.blockSize,V=this.B,M=this.h,x=0;x<S;){if(M==0)for(;x<=I;)o(this,O,x),x+=this.blockSize;if(typeof O=="string"){for(;x<S;)if(V[M++]=O.charCodeAt(x++),M==this.blockSize){o(this,V),M=0;break}}else for(;x<S;)if(V[M++]=O[x++],M==this.blockSize){o(this,V),M=0;break}}this.h=M,this.o+=S},s.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var S=1;S<O.length-8;++S)O[S]=0;var I=8*this.o;for(S=O.length-8;S<O.length;++S)O[S]=I&255,I/=256;for(this.u(O),O=Array(16),S=I=0;4>S;++S)for(var V=0;32>V;V+=8)O[I++]=this.g[S]>>>V&255;return O};function u(O,S){var I=m;return Object.prototype.hasOwnProperty.call(I,O)?I[O]:I[O]=S(O)}function f(O,S){this.h=S;for(var I=[],V=!0,M=O.length-1;0<=M;M--){var x=O[M]|0;V&&x==S||(I[M]=x,V=!1)}this.g=I}var m={};function y(O){return-128<=O&&128>O?u(O,function(S){return new f([S|0],0>S?-1:0)}):new f([O|0],0>O?-1:0)}function p(O){if(isNaN(O)||!isFinite(O))return w;if(0>O)return $(p(-O));for(var S=[],I=1,V=0;O>=I;V++)S[V]=O/I|0,I*=4294967296;return new f(S,0)}function E(O,S){if(O.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(O.charAt(0)=="-")return $(E(O.substring(1),S));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=p(Math.pow(S,8)),V=w,M=0;M<O.length;M+=8){var x=Math.min(8,O.length-M),R=parseInt(O.substring(M,M+x),S);8>x?(x=p(Math.pow(S,x)),V=V.j(x).add(p(R))):(V=V.j(I),V=V.add(p(R)))}return V}var w=y(0),C=y(1),j=y(16777216);r=f.prototype,r.m=function(){if(et(this))return-$(this).m();for(var O=0,S=1,I=0;I<this.g.length;I++){var V=this.i(I);O+=(0<=V?V:4294967296+V)*S,S*=4294967296}return O},r.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(X(this))return"0";if(et(this))return"-"+$(this).toString(O);for(var S=p(Math.pow(O,6)),I=this,V="";;){var M=mt(I,S).g;I=st(I,M.j(S));var x=((0<I.g.length?I.g[0]:I.h)>>>0).toString(O);if(I=M,X(I))return x+V;for(;6>x.length;)x="0"+x;V=x+V}},r.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function X(O){if(O.h!=0)return!1;for(var S=0;S<O.g.length;S++)if(O.g[S]!=0)return!1;return!0}function et(O){return O.h==-1}r.l=function(O){return O=st(this,O),et(O)?-1:X(O)?0:1};function $(O){for(var S=O.g.length,I=[],V=0;V<S;V++)I[V]=~O.g[V];return new f(I,~O.h).add(C)}r.abs=function(){return et(this)?$(this):this},r.add=function(O){for(var S=Math.max(this.g.length,O.g.length),I=[],V=0,M=0;M<=S;M++){var x=V+(this.i(M)&65535)+(O.i(M)&65535),R=(x>>>16)+(this.i(M)>>>16)+(O.i(M)>>>16);V=R>>>16,x&=65535,R&=65535,I[M]=R<<16|x}return new f(I,I[I.length-1]&-2147483648?-1:0)};function st(O,S){return O.add($(S))}r.j=function(O){if(X(this)||X(O))return w;if(et(this))return et(O)?$(this).j($(O)):$($(this).j(O));if(et(O))return $(this.j($(O)));if(0>this.l(j)&&0>O.l(j))return p(this.m()*O.m());for(var S=this.g.length+O.g.length,I=[],V=0;V<2*S;V++)I[V]=0;for(V=0;V<this.g.length;V++)for(var M=0;M<O.g.length;M++){var x=this.i(V)>>>16,R=this.i(V)&65535,ke=O.i(M)>>>16,ae=O.i(M)&65535;I[2*V+2*M]+=R*ae,ut(I,2*V+2*M),I[2*V+2*M+1]+=x*ae,ut(I,2*V+2*M+1),I[2*V+2*M+1]+=R*ke,ut(I,2*V+2*M+1),I[2*V+2*M+2]+=x*ke,ut(I,2*V+2*M+2)}for(V=0;V<S;V++)I[V]=I[2*V+1]<<16|I[2*V];for(V=S;V<2*S;V++)I[V]=0;return new f(I,0)};function ut(O,S){for(;(O[S]&65535)!=O[S];)O[S+1]+=O[S]>>>16,O[S]&=65535,S++}function it(O,S){this.g=O,this.h=S}function mt(O,S){if(X(S))throw Error("division by zero");if(X(O))return new it(w,w);if(et(O))return S=mt($(O),S),new it($(S.g),$(S.h));if(et(S))return S=mt(O,$(S)),new it($(S.g),S.h);if(30<O.g.length){if(et(O)||et(S))throw Error("slowDivide_ only works with positive integers.");for(var I=C,V=S;0>=V.l(O);)I=ht(I),V=ht(V);var M=Lt(I,1),x=Lt(V,1);for(V=Lt(V,2),I=Lt(I,2);!X(V);){var R=x.add(V);0>=R.l(O)&&(M=M.add(I),x=R),V=Lt(V,1),I=Lt(I,1)}return S=st(O,M.j(S)),new it(M,S)}for(M=w;0<=O.l(S);){for(I=Math.max(1,Math.floor(O.m()/S.m())),V=Math.ceil(Math.log(I)/Math.LN2),V=48>=V?1:Math.pow(2,V-48),x=p(I),R=x.j(S);et(R)||0<R.l(O);)I-=V,x=p(I),R=x.j(S);X(x)&&(x=C),M=M.add(x),O=st(O,R)}return new it(M,O)}r.A=function(O){return mt(this,O).h},r.and=function(O){for(var S=Math.max(this.g.length,O.g.length),I=[],V=0;V<S;V++)I[V]=this.i(V)&O.i(V);return new f(I,this.h&O.h)},r.or=function(O){for(var S=Math.max(this.g.length,O.g.length),I=[],V=0;V<S;V++)I[V]=this.i(V)|O.i(V);return new f(I,this.h|O.h)},r.xor=function(O){for(var S=Math.max(this.g.length,O.g.length),I=[],V=0;V<S;V++)I[V]=this.i(V)^O.i(V);return new f(I,this.h^O.h)};function ht(O){for(var S=O.g.length+1,I=[],V=0;V<S;V++)I[V]=O.i(V)<<1|O.i(V-1)>>>31;return new f(I,O.h)}function Lt(O,S){var I=S>>5;S%=32;for(var V=O.g.length-I,M=[],x=0;x<V;x++)M[x]=0<S?O.i(x+I)>>>S|O.i(x+I+1)<<32-S:O.i(x+I);return new f(M,O.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,KT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=p,f.fromString=E,Ur=f}).apply(typeof rv<"u"?rv:typeof self<"u"?self:typeof window<"u"?window:{});var wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var YT,Sl,XT,Oc,tm,$T,ZT,JT;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof wc=="object"&&wc];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)t:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var k=c[A];if(!(k in _))break t;_=_[k]}c=c[c.length-1],A=_[c],g=g(A),g!=A&&g!=null&&t(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,A=!1,k={next:function(){if(!A&&_<c.length){var q=_++;return{value:g(q,c[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function y(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function p(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,_){return c.call.apply(c.bind,arguments)}function w(c,g,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,A),c.apply(g,k)}}return function(){return c.apply(g,arguments)}}function C(c,g,_){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:w,C.apply(null,arguments)}function j(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function X(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,k,q){for(var tt=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)tt[Pt-2]=arguments[Pt];return g.prototype[k].apply(A,tt)}}function et(c){const g=c.length;if(0<g){const _=Array(g);for(let A=0;A<g;A++)_[A]=c[A];return _}return[]}function $(c,g){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(y(A)){const k=c.length||0,q=A.length||0;c.length=k+q;for(let tt=0;tt<q;tt++)c[k+tt]=A[tt]}else c.push(A)}}class st{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function ut(c){return/^[\s\xa0]*$/.test(c)}function it(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function mt(c){return mt[" "](c),c}mt[" "]=function(){};var ht=it().indexOf("Gecko")!=-1&&!(it().toLowerCase().indexOf("webkit")!=-1&&it().indexOf("Edge")==-1)&&!(it().indexOf("Trident")!=-1||it().indexOf("MSIE")!=-1)&&it().indexOf("Edge")==-1;function Lt(c,g,_){for(const A in c)g.call(_,c[A],A,c)}function O(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function S(c){const g={};for(const _ in c)g[_]=c[_];return g}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(c,g){let _,A;for(let k=1;k<arguments.length;k++){A=arguments[k];for(_ in A)c[_]=A[_];for(let q=0;q<I.length;q++)_=I[q],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function M(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function x(c){m.setTimeout(()=>{throw c},0)}function R(){var c=Bt;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class ke{constructor(){this.h=this.g=null}add(g,_){const A=ae.get();A.set(g,_),this.h?this.h.next=A:this.g=A,this.h=A}}var ae=new st(()=>new H,c=>c.reset());class H{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,ft=!1,Bt=new ke,D=()=>{const c=m.Promise.resolve(void 0);nt=()=>{c.then(Z)}};var Z=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(_){x(_)}var g=ae;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ft=!1};function rt(){this.s=this.s,this.C=this.C}rt.prototype.s=!1,rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var gt=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c})();function It(c,g){if(W.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(ht){t:{try{mt(g.nodeName);var k=!0;break t}catch{}k=!1}k||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:At[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&It.aa.h.call(this)}}X(It,W);var At={2:"touch",3:"pen",4:"mouse"};It.prototype.h=function(){It.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Jt=0;function Kn(c,g,_,A,k){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!A,this.ha=k,this.key=++Jt,this.da=this.fa=!1}function er(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ai(c){this.src=c,this.g={},this.h=0}Ai.prototype.add=function(c,g,_,A,k){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var tt=Qr(c,g,A,k);return-1<tt?(g=c[tt],_||(g.fa=!1)):(g=new Kn(g,this.src,q,!!A,k),g.fa=_,c.push(g)),g};function Gr(c,g){var _=g.type;if(_ in c.g){var A=c.g[_],k=Array.prototype.indexOf.call(A,g,void 0),q;(q=0<=k)&&Array.prototype.splice.call(A,k,1),q&&(er(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Qr(c,g,_,A){for(var k=0;k<c.length;++k){var q=c[k];if(!q.da&&q.listener==g&&q.capture==!!_&&q.ha==A)return k}return-1}var Kr="closure_lm_"+(1e6*Math.random()|0),fo={};function eu(c,g,_,A,k){if(Array.isArray(g)){for(var q=0;q<g.length;q++)eu(c,g[q],_,A,k);return null}return _=nu(_),c&&c[De]?c.K(g,_,p(A)?!!A.capture:!1,k):_n(c,g,_,!1,A,k)}function _n(c,g,_,A,k,q){if(!g)throw Error("Invalid event type");var tt=p(k)?!!k.capture:!!k,Pt=Xs(c);if(Pt||(c[Kr]=Pt=new Ai(c)),_=Pt.add(g,_,A,tt,q),_.proxy)return _;if(A=Ih(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)gt||(k=tt),k===void 0&&(k=!1),c.addEventListener(g.toString(),A,k);else if(c.attachEvent)c.attachEvent(Yr(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ih(){function c(_){return g.call(c.src,c.listener,_)}const g=Ch;return c}function mo(c,g,_,A,k){if(Array.isArray(g))for(var q=0;q<g.length;q++)mo(c,g[q],_,A,k);else A=p(A)?!!A.capture:!!A,_=nu(_),c&&c[De]?(c=c.i,g=String(g).toString(),g in c.g&&(q=c.g[g],_=Qr(q,_,A,k),-1<_&&(er(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete c.g[g],c.h--)))):c&&(c=Xs(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Qr(g,_,A,k)),(_=-1<c?g[c]:null)&&Ys(_))}function Ys(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[De])Gr(g.i,c);else{var _=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(_,A,c.capture):g.detachEvent?g.detachEvent(Yr(_),A):g.addListener&&g.removeListener&&g.removeListener(A),(_=Xs(g))?(Gr(_,c),_.h==0&&(_.src=null,g[Kr]=null)):er(c)}}}function Yr(c){return c in fo?fo[c]:fo[c]="on"+c}function Ch(c,g){if(c.da)c=!0;else{g=new It(g,this);var _=c.listener,A=c.ha||c.src;c.fa&&Ys(c),c=_.call(A,g)}return c}function Xs(c){return c=c[Kr],c instanceof Ai?c:null}var go="__closure_events_fn_"+(1e9*Math.random()>>>0);function nu(c){return typeof c=="function"?c:(c[go]||(c[go]=function(g){return c.handleEvent(g)}),c[go])}function oe(){rt.call(this),this.i=new Ai(this),this.M=this,this.F=null}X(oe,rt),oe.prototype[De]=!0,oe.prototype.removeEventListener=function(c,g,_,A){mo(this,c,g,_,A)};function Ft(c,g){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new W(g,c);else if(g instanceof W)g.target=g.target||c;else{var k=g;g=new W(A,c),V(g,k)}if(k=!0,_)for(var q=_.length-1;0<=q;q--){var tt=g.g=_[q];k=ln(tt,A,!0,g)&&k}if(tt=g.g=c,k=ln(tt,A,!0,g)&&k,k=ln(tt,A,!1,g)&&k,_)for(q=0;q<_.length;q++)tt=g.g=_[q],k=ln(tt,A,!1,g)&&k}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],A=0;A<_.length;A++)er(_[A]);delete c.g[g],c.h--}}this.F=null},oe.prototype.K=function(c,g,_,A){return this.i.add(String(c),g,!1,_,A)},oe.prototype.L=function(c,g,_,A){return this.i.add(String(c),g,!0,_,A)};function ln(c,g,_,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var k=!0,q=0;q<g.length;++q){var tt=g[q];if(tt&&!tt.da&&tt.capture==_){var Pt=tt.listener,be=tt.ha||tt.src;tt.fa&&Gr(c.i,tt),k=Pt.call(be,A)!==!1&&k}}return k&&!A.defaultPrevented}function Ge(c,g,_){if(typeof c=="function")_&&(c=C(c,_));else if(c&&typeof c.handleEvent=="function")c=C(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function iu(c){c.g=Ge(()=>{c.g=null,c.i&&(c.i=!1,iu(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Dh extends rt{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:iu(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(c){rt.call(this),this.h=c,this.g={}}X(Xr,rt);var $r=[];function Zr(c){Lt(c.g,function(g,_){this.g.hasOwnProperty(_)&&Ys(g)},c),c.g={}}Xr.prototype.N=function(){Xr.aa.N.call(this),Zr(this)},Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pn=m.JSON.stringify,$s=m.JSON.parse,Jr=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function po(){}po.prototype.h=null;function yo(c){return c.h||(c.h=c.i())}function _o(){}var Si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bi(){W.call(this,"d")}X(bi,W);function vo(){W.call(this,"c")}X(vo,W);var Yn={},To=null;function nr(){return To=To||new oe}Yn.La="serverreachability";function Zs(c){W.call(this,Yn.La,c)}X(Zs,W);function ir(c){const g=nr();Ft(g,new Zs(g))}Yn.STAT_EVENT="statevent";function ru(c,g){W.call(this,Yn.STAT_EVENT,c),this.stat=g}X(ru,W);function ne(c){const g=nr();Ft(g,new ru(g,c))}Yn.Ma="timingevent";function Se(c,g){W.call(this,Yn.Ma,c),this.size=g}X(Se,W);function pe(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function vn(){this.g=!0}vn.prototype.xa=function(){this.g=!1};function Eo(c,g,_,A,k,q){c.info(function(){if(c.g)if(q)for(var tt="",Pt=q.split("&"),be=0;be<Pt.length;be++){var xt=Pt[be].split("=");if(1<xt.length){var Oe=xt[0];xt=xt[1];var we=Oe.split("_");tt=2<=we.length&&we[1]=="type"?tt+(Oe+"="+xt+"&"):tt+(Oe+"=redacted&")}}else tt=null;else tt=q;return"XMLHTTP REQ ("+A+") [attempt "+k+"]: "+g+`
`+_+`
`+tt})}function Nh(c,g,_,A,k,q,tt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+k+"]: "+g+`
`+_+`
`+q+" "+tt})}function rr(c,g,_,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Wr(c,_)+(A?" "+A:"")})}function su(c,g){c.info(function(){return"TIMEOUT: "+g})}vn.prototype.info=function(){};function Wr(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var k=A[1];if(Array.isArray(k)&&!(1>k.length)){var q=k[0];if(q!="noop"&&q!="stop"&&q!="close")for(var tt=1;tt<k.length;tt++)k[tt]=""}}}}return Pn(_)}catch{return g}}var sr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xn;function $n(){}X($n,po),$n.prototype.g=function(){return new XMLHttpRequest},$n.prototype.i=function(){return{}},Xn=new $n;function Je(c,g,_,A){this.j=c,this.i=g,this.l=_,this.R=A||1,this.U=new Xr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new he}function he(){this.i=null,this.g="",this.h=!1}var Ao={},Js={};function xn(c,g,_){c.L=1,c.v=rs(un(g)),c.m=_,c.P=!0,Ri(c,null)}function Ri(c,g){c.F=Date.now(),ts(c),c.A=un(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Co(_.i,"t",A),c.C=0,_=c.j.J,c.h=new he,c.g=Eu(c.j,_?g:null,!c.m),0<c.O&&(c.M=new Dh(C(c.Y,c,c.g),c.O)),g=c.U,_=c.g,A=c.ca;var k="readystatechange";Array.isArray(k)||(k&&($r[0]=k.toString()),k=$r);for(var q=0;q<k.length;q++){var tt=eu(_,k[q],A||g.handleEvent,!1,g.h||g);if(!tt)break;g.g[tt.key]=tt}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),ir(),Eo(c.i,c.u,c.A,c.l,c.R,c.m)}Je.prototype.ca=function(c){c=c.target;const g=this.M;g&&Sn(c)==3?g.j():this.Y(c)},Je.prototype.Y=function(c){try{if(c==this.g)t:{const we=Sn(this.g);var g=this.g.Ba();const Pi=this.g.Z();if(!(3>we)&&(we!=3||this.g&&(this.h.h||this.g.oa()||du(this.g)))){this.J||we!=4||g==7||(g==8||0>=Pi?ir(3):ir(2)),ar(this);var _=this.g.Z();this.X=_;e:if(au(this)){var A=du(this.g);c="";var k=A.length,q=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ue(this),Zn(this);var tt="";break e}this.h.i=new m.TextDecoder}for(g=0;g<k;g++)this.h.h=!0,c+=this.h.i.decode(A[g],{stream:!(q&&g==k-1)});A.length=0,this.h.g+=c,this.C=0,tt=this.h.g}else tt=this.g.oa();if(this.o=_==200,Nh(this.i,this.u,this.A,this.l,this.R,we,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Pt,be=this.g;if((Pt=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ut(Pt)){var xt=Pt;break e}}xt=null}if(_=xt)rr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,es(this,_);else{this.o=!1,this.s=3,ne(12),Ue(this),Zn(this);break t}}if(this.P){_=!0;let Le;for(;!this.J&&this.C<tt.length;)if(Le=ou(this,tt),Le==Js){we==4&&(this.s=4,ne(14),_=!1),rr(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==Ao){this.s=4,ne(15),rr(this.i,this.l,tt,"[Invalid Chunk]"),_=!1;break}else rr(this.i,this.l,Le,null),es(this,Le);if(au(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||tt.length!=0||this.h.h||(this.s=1,ne(16),_=!1),this.o=this.o&&_,!_)rr(this.i,this.l,tt,"[Invalid Chunked Response]"),Ue(this),Zn(this);else if(0<tt.length&&!this.W){this.W=!0;var Oe=this.j;Oe.g==this&&Oe.ba&&!Oe.M&&(Oe.j.info("Great, no buffering proxy detected. Bytes received: "+tt.length),fs(Oe),Oe.M=!0,ne(11))}}else rr(this.i,this.l,tt,null),es(this,tt);we==4&&Ue(this),this.o&&!this.J&&(we==4?_u(this.j,this):(this.o=!1,ts(this)))}else xh(this.g),_==400&&0<tt.indexOf("Unknown SID")?(this.s=3,ne(12)):(this.s=0,ne(13)),Ue(this),Zn(this)}}}catch{}finally{}};function au(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function ou(c,g){var _=c.C,A=g.indexOf(`
`,_);return A==-1?Js:(_=Number(g.substring(_,A)),isNaN(_)?Ao:(A+=1,A+_>g.length?Js:(g=g.slice(A,A+_),c.C=A+_,g)))}Je.prototype.cancel=function(){this.J=!0,Ue(this)};function ts(c){c.S=Date.now()+c.I,lu(c,c.I)}function lu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=pe(C(c.ba,c),g)}function ar(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Je.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(su(this.i,this.A),this.L!=2&&(ir(),ne(17)),Ue(this),this.s=2,Zn(this)):lu(this,this.S-c)};function Zn(c){c.j.G==0||c.J||_u(c.j,c)}function Ue(c){ar(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Zr(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function es(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||So(_.h,c))){if(!c.K&&So(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var k=A;if(k[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)ca(_),la(_);else break t;Mo(_),ne(18)}}else _.za=k[1],0<_.za-_.T&&37500>k[2]&&_.F&&_.v==0&&!_.C&&(_.C=pe(C(_.Za,_),6e3));if(1>=ta(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Mi(_,11)}else if((c.K||_.g==c)&&ca(_),!ut(g))for(k=_.Da.g.parse(g),g=0;g<k.length;g++){let xt=k[g];if(_.T=xt[0],xt=xt[1],_.G==2)if(xt[0]=="c"){_.K=xt[1],_.ia=xt[2];const Oe=xt[3];Oe!=null&&(_.la=Oe,_.j.info("VER="+_.la));const we=xt[4];we!=null&&(_.Aa=we,_.j.info("SVER="+_.Aa));const Pi=xt[5];Pi!=null&&typeof Pi=="number"&&0<Pi&&(A=1.5*Pi,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Le=c.g;if(Le){const ri=Le.g?Le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ri){var q=A.h;q.g||ri.indexOf("spdy")==-1&&ri.indexOf("quic")==-1&&ri.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(ea(q,q.h),q.h=null))}if(A.D){const xo=Le.g?Le.g.getResponseHeader("X-HTTP-Session-Id"):null;xo&&(A.ya=xo,Kt(A.I,A.D,xo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var tt=c;if(A.qa=Tu(A,A.J?A.ia:null,A.W),tt.K){We(A.h,tt);var Pt=tt,be=A.L;be&&(Pt.I=be),Pt.B&&(ar(Pt),ts(Pt)),A.g=tt}else pu(A);0<_.i.length&&ua(_)}else xt[0]!="stop"&&xt[0]!="close"||Mi(_,7);else _.G==3&&(xt[0]=="stop"||xt[0]=="close"?xt[0]=="stop"?Mi(_,7):Oo(_):xt[0]!="noop"&&_.l&&_.l.ta(xt),_.v=0)}}ir(4)}catch{}}var uu=class{constructor(c,g){this.g=c,this.map=g}};function Ii(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ws(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ta(c){return c.h?1:c.g?c.g.size:0}function So(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function ea(c,g){c.g?c.g.add(g):c.h=g}function We(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Ii.prototype.cancel=function(){if(this.i=bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function bo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return et(c.i)}function Oh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(y(c)){for(var g=[],_=c.length,A=0;A<_;A++)g.push(c[A]);return g}g=[],_=0;for(A in c)g[_++]=c[A];return g}function na(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(y(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const A in c)g[_++]=A;return g}}}function wo(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(y(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=na(c),A=Oh(c),k=A.length,q=0;q<k;q++)g.call(void 0,A[q],_&&_[q],c)}var ns=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vh(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),k=null;if(0<=A){var q=c[_].substring(0,A);k=c[_].substring(A+1)}else q=c[_];g(q,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function ye(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ye){this.h=c.h,is(this,c.j),this.o=c.o,this.g=c.g,or(this,c.s),this.l=c.l;var g=c.i,_=new Di;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),Ci(this,_),this.m=c.m}else c&&(g=String(c).match(ns))?(this.h=!1,is(this,g[1]||"",!0),this.o=Tn(g[2]||""),this.g=Tn(g[3]||"",!0),or(this,g[4]),this.l=Tn(g[5]||"",!0),Ci(this,g[6]||"",!0),this.m=Tn(g[7]||"")):(this.h=!1,this.i=new Di(null,this.h))}ye.prototype.toString=function(){var c=[],g=this.j;g&&c.push(ss(g,Ro,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(ss(g,Ro,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(ss(_,_.charAt(0)=="/"?Mh:Io,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",ss(_,ia)),c.join("")};function un(c){return new ye(c)}function is(c,g,_){c.j=_?Tn(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function or(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Ci(c,g,_){g instanceof Di?(c.i=g,hu(c.i,c.h)):(_||(g=ss(g,Ph)),c.i=new Di(g,c.h))}function Kt(c,g,_){c.i.set(g,_)}function rs(c){return Kt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Tn(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ss(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,cu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function cu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ro=/[#\/\?@]/g,Io=/[#\?:]/g,Mh=/[#\?]/g,Ph=/[#\?@]/g,ia=/#/g;function Di(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function En(c){c.g||(c.g=new Map,c.h=0,c.i&&Vh(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=Di.prototype,r.add=function(c,g){En(this),this.i=null,c=Jn(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function Ni(c,g){En(c),g=Jn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Oi(c,g){return En(c),g=Jn(c,g),c.g.has(g)}r.forEach=function(c,g){En(this),this.g.forEach(function(_,A){_.forEach(function(k){c.call(g,k,A,this)},this)},this)},r.na=function(){En(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let A=0;A<g.length;A++){const k=c[A];for(let q=0;q<k.length;q++)_.push(g[A])}return _},r.V=function(c){En(this);let g=[];if(typeof c=="string")Oi(this,c)&&(g=g.concat(this.g.get(Jn(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},r.set=function(c,g){return En(this),this.i=null,c=Jn(this,c),Oi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Co(c,g,_){Ni(c,g),0<_.length&&(c.i=null,c.g.set(Jn(c,g),et(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var A=g[_];const q=encodeURIComponent(String(A)),tt=this.V(A);for(A=0;A<tt.length;A++){var k=q;tt[A]!==""&&(k+="="+encodeURIComponent(String(tt[A]))),c.push(k)}}return this.i=c.join("&")};function Jn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function hu(c,g){g&&!c.j&&(En(c),c.i=null,c.g.forEach(function(_,A){var k=A.toLowerCase();A!=k&&(Ni(this,A),Co(this,k,_))},c)),c.j=g}function as(c,g){const _=new vn;if(m.Image){const A=new Image;A.onload=j(An,_,"TestLoadImage: loaded",!0,g,A),A.onerror=j(An,_,"TestLoadImage: error",!1,g,A),A.onabort=j(An,_,"TestLoadImage: abort",!1,g,A),A.ontimeout=j(An,_,"TestLoadImage: timeout",!1,g,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function kn(c,g){const _=new vn,A=new AbortController,k=setTimeout(()=>{A.abort(),An(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(q=>{clearTimeout(k),q.ok?An(_,"TestPingServer: ok",!0,g):An(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(k),An(_,"TestPingServer: error",!1,g)})}function An(c,g,_,A,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),A(_)}catch{}}function os(){this.g=new Jr}function Wn(c,g,_){const A=_||"";try{wo(c,function(k,q){let tt=k;p(k)&&(tt=Pn(k)),g.push(A+q+"="+encodeURIComponent(tt))})}catch(k){throw g.push(A+"type="+encodeURIComponent("_badmap")),k}}function lr(c){this.l=c.Ub||null,this.j=c.eb||!1}X(lr,po),lr.prototype.g=function(){return new Vi(this.l,this.j)},lr.prototype.i=(function(c){return function(){return c}})({});function Vi(c,g){oe.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}X(Vi,oe),r=Vi.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,ei(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Do(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Do(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?ti(this):ei(this),this.readyState==3&&Do(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ti(this))},r.Qa=function(c){this.g&&(this.response=c,ti(this))},r.ga=function(){this.g&&ti(this)};function ti(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ei(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function ei(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function No(c){let g="";return Lt(c,function(_,A){g+=A,g+=":",g+=_,g+=`\r
`}),g}function Ne(c,g,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=No(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Kt(c,g,_))}function jt(c){oe.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}X(jt,oe);var ra=/^https?$/i,ls=["POST","PUT"];r=jt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xn.g(),this.v=this.o?yo(this.o):yo(Xn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(q){fu(this,q);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var k in A)_.set(k,A[k]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())_.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),k=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ls,g,void 0))||A||k||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,tt]of _)this.g.setRequestHeader(q,tt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{us(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){fu(this,q)}};function fu(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,sa(c),ni(c)}function sa(c){c.A||(c.A=!0,Ft(c,"complete"),Ft(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ft(this,"complete"),Ft(this,"abort"),ni(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ni(this,!0)),jt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?aa(this):this.bb())},r.bb=function(){aa(this)};function aa(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Sn(c)!=4||c.Z()!=2)){if(c.u&&Sn(c)==4)Ge(c.Ea,0,c);else if(Ft(c,"readystatechange"),Sn(c)==4){c.h=!1;try{const tt=c.Z();t:switch(tt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var _;if(!(_=g)){var A;if(A=tt===0){var k=String(c.D).match(ns)[1]||null;!k&&m.self&&m.self.location&&(k=m.self.location.protocol.slice(0,-1)),A=!ra.test(k?k.toLowerCase():"")}_=A}if(_)Ft(c,"complete"),Ft(c,"success");else{c.m=6;try{var q=2<Sn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",sa(c)}}finally{ni(c)}}}}function ni(c,g){if(c.g){us(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ft(c,"ready");try{_.onreadystatechange=A}catch{}}}function us(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Sn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),$s(g)}};function du(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function xh(c){const g={};c=(c.g&&2<=Sn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(ut(c[A]))continue;var _=M(c[A]);const k=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=g[k]||[];g[k]=q,q.push(_)}O(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function oa(c){this.Aa=0,this.i=[],this.j=new vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cs("baseRetryDelayMs",5e3,c),this.cb=cs("retryDelaySeedMs",1e4,c),this.Wa=cs("forwardChannelMaxRetries",2,c),this.wa=cs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ii(c&&c.concurrentRequestLimit),this.Da=new os,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=oa.prototype,r.la=8,r.G=1,r.connect=function(c,g,_,A){ne(0),this.W=c,this.H=g||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=Tu(this,null,this.W),ua(this)};function Oo(c){if(mu(c),c.G==3){var g=c.U++,_=un(c.I);if(Kt(_,"SID",c.K),Kt(_,"RID",g),Kt(_,"TYPE","terminate"),hs(c,_),g=new Je(c,c.j,g),g.L=2,g.v=rs(un(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=Eu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),ts(g)}vu(c)}function la(c){c.g&&(fs(c),c.g.cancel(),c.g=null)}function mu(c){la(c),c.u&&(m.clearTimeout(c.u),c.u=null),ca(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ua(c){if(!Ws(c.h)&&!c.s){c.s=!0;var g=c.Ga;nt||D(),ft||(nt(),ft=!0),Bt.add(g,c),c.B=0}}function kh(c,g){return ta(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=pe(C(c.Ga,c,g),Po(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const k=new Je(this,this.j,c);let q=this.o;if(this.S&&(q?(q=S(q),V(q,this.S)):q=this.S),this.m!==null||this.O||(k.H=q,q=null),this.P)t:{for(var g=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=_;break t}if(g===4096||_===this.i.length-1){g=_+1;break t}}g=1e3}else g=1e3;g=gu(this,k,g),_=un(this.I),Kt(_,"RID",c),Kt(_,"CVER",22),this.D&&Kt(_,"X-HTTP-Session-Id",this.D),hs(this,_),q&&(this.O?g="headers="+encodeURIComponent(String(No(q)))+"&"+g:this.m&&Ne(_,this.m,q)),ea(this.h,k),this.Ua&&Kt(_,"TYPE","init"),this.P?(Kt(_,"$req",g),Kt(_,"SID","null"),k.T=!0,xn(k,_,null)):xn(k,_,g),this.G=2}}else this.G==3&&(c?Vo(this,c):this.i.length==0||Ws(this.h)||Vo(this))};function Vo(c,g){var _;g?_=g.l:_=c.U++;const A=un(c.I);Kt(A,"SID",c.K),Kt(A,"RID",_),Kt(A,"AID",c.T),hs(c,A),c.m&&c.o&&Ne(A,c.m,c.o),_=new Je(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=gu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ea(c.h,_),xn(_,A,g)}function hs(c,g){c.H&&Lt(c.H,function(_,A){Kt(g,A,_)}),c.l&&wo({},function(_,A){Kt(g,A,_)})}function gu(c,g,_){_=Math.min(c.i.length,_);var A=c.l?C(c.l.Na,c.l,c):null;t:{var k=c.i;let q=-1;for(;;){const tt=["count="+_];q==-1?0<_?(q=k[0].g,tt.push("ofs="+q)):q=0:tt.push("ofs="+q);let Pt=!0;for(let be=0;be<_;be++){let xt=k[be].g;const Oe=k[be].map;if(xt-=q,0>xt)q=Math.max(0,k[be].g-100),Pt=!1;else try{Wn(Oe,tt,"req"+xt+"_")}catch{A&&A(Oe)}}if(Pt){A=tt.join("&");break t}}}return c=c.i.splice(0,_),g.D=c,A}function pu(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;nt||D(),ft||(nt(),ft=!0),Bt.add(g,c),c.v=0}}function Mo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=pe(C(c.Fa,c),Po(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,yu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=pe(C(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ne(10),la(this),yu(this))};function fs(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function yu(c){c.g=new Je(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=un(c.qa);Kt(g,"RID","rpc"),Kt(g,"SID",c.K),Kt(g,"AID",c.T),Kt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Kt(g,"TO",c.ja),Kt(g,"TYPE","xmlhttp"),hs(c,g),c.m&&c.o&&Ne(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=rs(un(g)),_.m=null,_.P=!0,Ri(_,c)}r.Za=function(){this.C!=null&&(this.C=null,la(this),Mo(this),ne(19))};function ca(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function _u(c,g){var _=null;if(c.g==g){ca(c),fs(c),c.g=null;var A=2}else if(So(c.h,g))_=g.D,We(c.h,g),A=1;else return;if(c.G!=0){if(g.o)if(A==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var k=c.B;A=nr(),Ft(A,new Se(A,_)),ua(c)}else pu(c);else if(k=g.s,k==3||k==0&&0<g.X||!(A==1&&kh(c,g)||A==2&&Mo(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),k){case 1:Mi(c,5);break;case 4:Mi(c,10);break;case 3:Mi(c,6);break;default:Mi(c,2)}}}function Po(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Mi(c,g){if(c.j.info("Error code "+g),g==2){var _=C(c.fb,c),A=c.Xa;const k=!A;A=new ye(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||is(A,"https"),rs(A),k?as(A.toString(),_):kn(A.toString(),_)}else ne(2);c.G=0,c.l&&c.l.sa(g),vu(c),mu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ne(2)):(this.j.info("Failed to ping google.com"),ne(1))};function vu(c){if(c.G=0,c.ka=[],c.l){const g=bo(c.h);(g.length!=0||c.i.length!=0)&&($(c.ka,g),$(c.ka,c.i),c.h.i.length=0,et(c.i),c.i.length=0),c.l.ra()}}function Tu(c,g,_){var A=_ instanceof ye?un(_):new ye(_);if(A.g!="")g&&(A.g=g+"."+A.g),or(A,A.s);else{var k=m.location;A=k.protocol,g=g?g+"."+k.hostname:k.hostname,k=+k.port;var q=new ye(null);A&&is(q,A),g&&(q.g=g),k&&or(q,k),_&&(q.l=_),A=q}return _=c.D,g=c.ya,_&&g&&Kt(A,_,g),Kt(A,"VER",c.la),hs(c,A),A}function Eu(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new jt(new lr({eb:_})):new jt(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Au(){}r=Au.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ha(){}ha.prototype.g=function(c,g){return new tn(c,g)};function tn(c,g){oe.call(this),this.g=new oa(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!ut(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!ut(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new ii(this)}X(tn,oe),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Oo(this.g)},tn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Pn(c),c=_);g.i.push(new uu(g.Ya++,c)),g.G==3&&ua(g)},tn.prototype.N=function(){this.g.l=null,delete this.j,Oo(this.g),delete this.g,tn.aa.N.call(this)};function Su(c){bi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){t:{for(const _ in g){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}X(Su,bi);function bu(){vo.call(this),this.status=1}X(bu,vo);function ii(c){this.g=c}X(ii,Au),ii.prototype.ua=function(){Ft(this.g,"a")},ii.prototype.ta=function(c){Ft(this.g,new Su(c))},ii.prototype.sa=function(c){Ft(this.g,new bu)},ii.prototype.ra=function(){Ft(this.g,"b")},ha.prototype.createWebChannel=ha.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,JT=function(){return new ha},ZT=function(){return nr()},$T=Yn,tm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sr.NO_ERROR=0,sr.TIMEOUT=8,sr.HTTP_ERROR=6,Oc=sr,wi.COMPLETE="complete",XT=wi,_o.EventType=Si,Si.OPEN="a",Si.CLOSE="b",Si.ERROR="c",Si.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Sl=_o,jt.prototype.listenOnce=jt.prototype.L,jt.prototype.getLastError=jt.prototype.Ka,jt.prototype.getLastErrorCode=jt.prototype.Ba,jt.prototype.getStatus=jt.prototype.Z,jt.prototype.getResponseJson=jt.prototype.Oa,jt.prototype.getResponseText=jt.prototype.oa,jt.prototype.send=jt.prototype.ea,jt.prototype.setWithCredentials=jt.prototype.Ha,YT=jt}).apply(typeof wc<"u"?wc:typeof self<"u"?self:typeof window<"u"?window:{});const sv="@firebase/firestore",av="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new uh("@firebase/firestore");function Ba(){return ks.logLevel}function ot(r,...t){if(ks.logLevel<=Ot.DEBUG){const n=t.map(bm);ks.debug(`Firestore (${ao}): ${r}`,...n)}}function Ji(r,...t){if(ks.logLevel<=Ot.ERROR){const n=t.map(bm);ks.error(`Firestore (${ao}): ${r}`,...n)}}function Za(r,...t){if(ks.logLevel<=Ot.WARN){const n=t.map(bm);ks.warn(`Firestore (${ao}): ${r}`,...n)}}function bm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,WT(r,s,n)}function WT(r,t,n){let s=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Ji(s),new Error(s)}function Ht(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||WT(t,o,s)}function bt(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class at extends Qn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Z1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(Xe.UNAUTHENTICATED)))}shutdown(){}}class J1{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class W1{constructor(t){this.t=t,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ht(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let u=new Vs;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Vs,t.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const y=u;t.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{ot("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ot("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Vs)}}),0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==t?(ot("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ht(typeof s.accessToken=="string",31837,{l:s}),new tE(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ht(t===null||typeof t=="string",2055,{h:t}),new Xe(t)}}class tw{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ew{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new tw(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(Xe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ov{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nw{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Ht(this.o===void 0,3512);const s=u=>{u.error!=null&&ot("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,ot("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>s(u)))};const o=u=>{ot("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ot("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ov(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(Ht(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ov(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=iw(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function Vt(r,t){return r<t?-1:r>t?1:0}function em(r,t){const n=Math.min(r.length,t.length);for(let s=0;s<n;s++){const o=r.charAt(s),u=t.charAt(s);if(o!==u)return zd(o)===zd(u)?Vt(o,u):zd(o)?1:-1}return Vt(r.length,t.length)}const rw=55296,sw=57343;function zd(r){const t=r.charCodeAt(0);return t>=rw&&t<=sw}function Ja(r,t,n){return r.length===t.length&&r.every(((s,o)=>n(s,t[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="__name__";class ci{constructor(t,n,s){n===void 0?n=0:n>t.length&&_t(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&_t(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ci.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ci?t.forEach((s=>{n.push(s)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=ci.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return Vt(t.length,n.length)}static compareSegments(t,n){const s=ci.isNumericId(t),o=ci.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?ci.extractNumericId(t).compare(ci.extractNumericId(n)):em(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ur.fromString(t.substring(4,t.length-2))}}class te extends ci{construct(t,n,s){return new te(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new at(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new te(n)}static emptyPath(){return new te([])}}const aw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends ci{construct(t,n,s){return new He(t,n,s)}static isValidIdentifier(t){return aw.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lv}static keyField(){return new He([lv])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new at(Q.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new at(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const y=t[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new at(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=y,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new at(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.path=t}static fromPath(t){return new dt(te.fromString(t))}static fromName(t){return new dt(te.fromString(t).popFirst(5))}static empty(){return new dt(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&te.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return te.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new dt(new te(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(r,t,n){if(!n)throw new at(Q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function ow(r,t,n,s){if(t===!0&&s===!0)throw new at(Q.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function uv(r){if(!dt.isDocumentKey(r))throw new at(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function cv(r){if(dt.isDocumentKey(r))throw new at(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function nE(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function ch(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(s){return s.constructor?s.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":_t(12329,{type:typeof r})}function Ms(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new at(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ch(r);throw new at(Q.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(r,t){const n={typeString:r};return t&&(n.value=t),n}function Ql(r,t){if(!nE(r))throw new at(Q.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const o=t[s].typeString,u="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new at(Q.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=-62135596800,fv=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(t){return ee.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*fv);return new ee(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new at(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new at(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<hv)throw new at(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new at(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fv}_compareTo(t){return this.seconds===t.seconds?Vt(this.nanoseconds,t.nanoseconds):Vt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Ql(t,ee._jsonSchema))return new ee(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-hv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:Ae("string",ee._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{static fromTimestamp(t){return new St(t)}static min(){return new St(new ee(0,0))}static max(){return new St(new ee(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=-1;function lw(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=St.fromTimestamp(s===1e9?new ee(n+1,0):new ee(n,s));return new zr(o,dt.empty(),t)}function uw(r){return new zr(r.readTime,r.key,xl)}class zr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new zr(St.min(),dt.empty(),xl)}static max(){return new zr(St.max(),dt.empty(),xl)}}function cw(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=dt.comparator(r.documentKey,t.documentKey),n!==0?n:Vt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(r){if(r.code!==Q.FAILED_PRECONDITION||r.message!==hw)throw r;ot("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&_t(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Y(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):Y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):Y.reject(n)}static resolve(t){return new Y(((n,s)=>{n(t)}))}static reject(t){return new Y(((n,s)=>{s(t)}))}static waitFor(t){return new Y(((n,s)=>{let o=0,u=0,f=!1;t.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&n()}),(y=>s(y)))})),f=!0,u===o&&n()}))}static or(t){let n=Y.resolve(!1);for(const s of t)n=n.next((o=>o?Y.resolve(o):s()));return n}static forEach(t,n){const s=[];return t.forEach(((o,u)=>{s.push(n.call(this,o,u))})),this.waitFor(s)}static mapArray(t,n){return new Y(((s,o)=>{const u=t.length,f=new Array(u);let m=0;for(let y=0;y<u;y++){const p=y;n(t[p]).next((E=>{f[p]=E,++m,m===u&&s(f)}),(E=>o(E)))}}))}static doWhile(t,n){return new Y(((s,o)=>{const u=()=>{t()===!0?n().next((()=>{u()}),o):s()};u()}))}}function dw(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function lo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}hh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=-1;function fh(r){return r==null}function Hc(r){return r===0&&1/r==-1/0}function mw(r){return typeof r=="number"&&Number.isInteger(r)&&!Hc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="";function gw(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=dv(t)),t=pw(r.get(n),t);return dv(t)}function pw(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case iE:n+="";break;default:n+=u}}return n}function dv(r){return r+iE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Fs(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function rE(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n){this.comparator=t,this.root=n||je.EMPTY}insert(t,n){return new se(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(t){return new se(this.comparator,this.root.remove(t,this.comparator).copy(null,null,je.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,s)=>(t(n,s),!1)))}toString(){const t=[];return this.inorderTraversal(((n,s)=>(t.push(`${n}:${s}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Rc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Rc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Rc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Rc(this.root,t,this.comparator,!0)}}class Rc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class je{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??je.RED,this.left=o??je.EMPTY,this.right=u??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new je(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return je.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _t(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _t(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw _t(27949);return t+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw _t(57766)}get value(){throw _t(16141)}get color(){throw _t(16727)}get left(){throw _t(29726)}get right(){throw _t(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new je(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.comparator=t,this.data=new se(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,s)=>(t(n),!1)))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new gv(this.data.getIterator())}getIteratorFrom(t){return new gv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((s=>{n=n.add(s)})),n}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new Ce(this.comparator);return n.data=t,n}}class gv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t){this.fields=t,t.sort(He.comparator)}static empty(){return new qn([])}unionWith(t){let n=new Ce(He.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new qn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ja(this.fields,t.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new sE("Invalid base64 string: "+u):u}})(t);return new Fe(n)}static fromUint8Array(t){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(t);return new Fe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Vt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const yw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(r){if(Ht(!!r,39018),typeof r=="string"){let t=0;const n=yw.exec(r);if(Ht(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:me(r.seconds),nanos:me(r.nanos)}}function me(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function qr(r){return typeof r=="string"?Fe.fromBase64String(r):Fe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="server_timestamp",oE="__type__",lE="__previous_value__",uE="__local_write_time__";function Im(r){return(r?.mapValue?.fields||{})[oE]?.stringValue===aE}function dh(r){const t=r.mapValue.fields[lE];return Im(t)?dh(t):t}function kl(r){const t=Br(r.mapValue.fields[uE].timestampValue);return new ee(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(t,n,s,o,u,f,m,y,p,E){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=p,this.isUsingEmulator=E}}const Fc="(default)";class Ul{constructor(t,n){this.projectId=t,this.database=n||Fc}static empty(){return new Ul("","")}get isDefaultDatabase(){return this.database===Fc}isEqual(t){return t instanceof Ul&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="__type__",vw="__max__",Ic={mapValue:{}},hE="__vector__",Gc="value";function jr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Im(r)?4:Ew(r)?9007199254740991:Tw(r)?10:11:_t(28295,{value:r})}function vi(r,t){if(r===t)return!0;const n=jr(r);if(n!==jr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return kl(r).isEqual(kl(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Br(o.timestampValue),m=Br(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(o,u){return qr(o.bytesValue).isEqual(qr(u.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(o,u){return me(o.geoPointValue.latitude)===me(u.geoPointValue.latitude)&&me(o.geoPointValue.longitude)===me(u.geoPointValue.longitude)})(r,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return me(o.integerValue)===me(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=me(o.doubleValue),m=me(u.doubleValue);return f===m?Hc(f)===Hc(m):isNaN(f)&&isNaN(m)}return!1})(r,t);case 9:return Ja(r.arrayValue.values||[],t.arrayValue.values||[],vi);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(mv(f)!==mv(m))return!1;for(const y in f)if(f.hasOwnProperty(y)&&(m[y]===void 0||!vi(f[y],m[y])))return!1;return!0})(r,t);default:return _t(52216,{left:r})}}function Ll(r,t){return(r.values||[]).find((n=>vi(n,t)))!==void 0}function Wa(r,t){if(r===t)return 0;const n=jr(r),s=jr(t);if(n!==s)return Vt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Vt(r.booleanValue,t.booleanValue);case 2:return(function(u,f){const m=me(u.integerValue||u.doubleValue),y=me(f.integerValue||f.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(r,t);case 3:return pv(r.timestampValue,t.timestampValue);case 4:return pv(kl(r),kl(t));case 5:return em(r.stringValue,t.stringValue);case 6:return(function(u,f){const m=qr(u),y=qr(f);return m.compareTo(y)})(r.bytesValue,t.bytesValue);case 7:return(function(u,f){const m=u.split("/"),y=f.split("/");for(let p=0;p<m.length&&p<y.length;p++){const E=Vt(m[p],y[p]);if(E!==0)return E}return Vt(m.length,y.length)})(r.referenceValue,t.referenceValue);case 8:return(function(u,f){const m=Vt(me(u.latitude),me(f.latitude));return m!==0?m:Vt(me(u.longitude),me(f.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return yv(r.arrayValue,t.arrayValue);case 10:return(function(u,f){const m=u.fields||{},y=f.fields||{},p=m[Gc]?.arrayValue,E=y[Gc]?.arrayValue,w=Vt(p?.values?.length||0,E?.values?.length||0);return w!==0?w:yv(p,E)})(r.mapValue,t.mapValue);case 11:return(function(u,f){if(u===Ic.mapValue&&f===Ic.mapValue)return 0;if(u===Ic.mapValue)return 1;if(f===Ic.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),p=f.fields||{},E=Object.keys(p);y.sort(),E.sort();for(let w=0;w<y.length&&w<E.length;++w){const C=em(y[w],E[w]);if(C!==0)return C;const j=Wa(m[y[w]],p[E[w]]);if(j!==0)return j}return Vt(y.length,E.length)})(r.mapValue,t.mapValue);default:throw _t(23264,{he:n})}}function pv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Vt(r,t);const n=Br(r),s=Br(t),o=Vt(n.seconds,s.seconds);return o!==0?o:Vt(n.nanos,s.nanos)}function yv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=Wa(n[o],s[o]);if(u)return u}return Vt(n.length,s.length)}function to(r){return nm(r)}function nm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=Br(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return qr(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return dt.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=nm(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${nm(n.fields[f])}`;return o+"}"})(r.mapValue):_t(61005,{value:r})}function Vc(r){switch(jr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=dh(r);return t?16+Vc(t):16;case 5:return 2*r.stringValue.length;case 6:return qr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Vc(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Fs(s.fields,((u,f)=>{o+=u.length+Vc(f)})),o})(r.mapValue);default:throw _t(13486,{value:r})}}function _v(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function im(r){return!!r&&"integerValue"in r}function Cm(r){return!!r&&"arrayValue"in r}function vv(r){return!!r&&"nullValue"in r}function Tv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Mc(r){return!!r&&"mapValue"in r}function Tw(r){return(r?.mapValue?.fields||{})[cE]?.stringValue===hE}function Cl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Fs(r.mapValue.fields,((n,s)=>t.mapValue.fields[n]=Cl(s))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Cl(r.arrayValue.values[n]);return t}return{...r}}function Ew(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===vw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t){this.value=t}static empty(){return new On({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Mc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Cl(n)}setAll(t){let n=He.emptyPath(),s={},o=[];t.forEach(((f,m)=>{if(!n.isImmediateParentOf(m)){const y=this.getFieldsMap(n);this.applyChanges(y,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Cl(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());Mc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return vi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Mc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Fs(n,((o,u)=>t[o]=u));for(const o of s)delete t[o]}clone(){return new On(Cl(this.value))}}function fE(r){const t=[];return Fs(r.fields,((n,s)=>{const o=new He([n]);if(Mc(s)){const u=fE(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)})),new qn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n,s,o,u,f,m){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new $e(t,0,St.min(),St.min(),St.min(),On.empty(),0)}static newFoundDocument(t,n,s,o){return new $e(t,1,n,St.min(),s,o,0)}static newNoDocument(t,n){return new $e(t,2,n,St.min(),St.min(),On.empty(),0)}static newUnknownDocument(t,n){return new $e(t,3,n,St.min(),St.min(),On.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(St.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=On.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=On.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=St.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof $e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t,n){this.position=t,this.inclusive=n}}function Ev(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=dt.comparator(dt.fromName(f.referenceValue),n.key):s=Wa(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Av(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!vi(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,n="asc"){this.field=t,this.dir=n}}function Aw(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{}class Ee extends dE{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new bw(t,n,s):n==="array-contains"?new Iw(t,s):n==="in"?new Cw(t,s):n==="not-in"?new Dw(t,s):n==="array-contains-any"?new Nw(t,s):new Ee(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new ww(t,s):new Rw(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Wa(n,this.value)):n!==null&&jr(this.value)===jr(n)&&this.matchesComparison(Wa(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return _t(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gn extends dE{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new Gn(t,n)}matches(t){return mE(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function mE(r){return r.op==="and"}function gE(r){return Sw(r)&&mE(r)}function Sw(r){for(const t of r.filters)if(t instanceof Gn)return!1;return!0}function rm(r){if(r instanceof Ee)return r.field.canonicalString()+r.op.toString()+to(r.value);if(gE(r))return r.filters.map((t=>rm(t))).join(",");{const t=r.filters.map((n=>rm(n))).join(",");return`${r.op}(${t})`}}function pE(r,t){return r instanceof Ee?(function(s,o){return o instanceof Ee&&s.op===o.op&&s.field.isEqual(o.field)&&vi(s.value,o.value)})(r,t):r instanceof Gn?(function(s,o){return o instanceof Gn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,m)=>u&&pE(f,o.filters[m])),!0):!1})(r,t):void _t(19439)}function yE(r){return r instanceof Ee?(function(n){return`${n.field.canonicalString()} ${n.op} ${to(n.value)}`})(r):r instanceof Gn?(function(n){return n.op.toString()+" {"+n.getFilters().map(yE).join(" ,")+"}"})(r):"Filter"}class bw extends Ee{constructor(t,n,s){super(t,n,s),this.key=dt.fromName(s.referenceValue)}matches(t){const n=dt.comparator(t.key,this.key);return this.matchesComparison(n)}}class ww extends Ee{constructor(t,n){super(t,"in",n),this.keys=_E("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class Rw extends Ee{constructor(t,n){super(t,"not-in",n),this.keys=_E("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function _E(r,t){return(t.arrayValue?.values||[]).map((n=>dt.fromName(n.referenceValue)))}class Iw extends Ee{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Cm(n)&&Ll(n.arrayValue,this.value)}}class Cw extends Ee{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ll(this.value.arrayValue,n)}}class Dw extends Ee{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ll(this.value.arrayValue,n)}}class Nw extends Ee{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Cm(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Ll(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(t,n=null,s=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function Sv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new Ow(r,t,n,s,o,u,f)}function Dm(r){const t=bt(r);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((s=>rm(s))).join(","),n+="|ob:",n+=t.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),fh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>to(s))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>to(s))).join(",")),t.Te=n}return t.Te}function Nm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!Aw(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!pE(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Av(r.startAt,t.startAt)&&Av(r.endAt,t.endAt)}function sm(r){return dt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,n=null,s=[],o=[],u=null,f="F",m=null,y=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Vw(r,t,n,s,o,u,f,m){return new uo(r,t,n,s,o,u,f,m)}function Om(r){return new uo(r)}function bv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function vE(r){return r.collectionGroup!==null}function Dl(r){const t=bt(r);if(t.Ie===null){t.Ie=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Ce(He.comparator);return f.filters.forEach((y=>{y.getFlattenedFilters().forEach((p=>{p.isInequality()&&(m=m.add(p.field))}))})),m})(t).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new zl(u,s))})),n.has(He.keyField().canonicalString())||t.Ie.push(new zl(He.keyField(),s))}return t.Ie}function hi(r){const t=bt(r);return t.Ee||(t.Ee=Mw(t,Dl(r))),t.Ee}function Mw(r,t){if(r.limitType==="F")return Sv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new zl(o.field,u)}));const n=r.endAt?new Qc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Qc(r.startAt.position,r.startAt.inclusive):null;return Sv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function am(r,t){const n=r.filters.concat([t]);return new uo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function Kc(r,t,n){return new uo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function Kl(r,t){return Nm(hi(r),hi(t))&&r.limitType===t.limitType}function TE(r){return`${Dm(hi(r))}|lt:${r.limitType}`}function qa(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>yE(o))).join(", ")}]`),fh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>to(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>to(o))).join(",")),`Target(${s})`})(hi(r))}; limitType=${r.limitType})`}function mh(r,t){return t.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):dt.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,t)&&(function(s,o){for(const u of Dl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,t)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,t)&&(function(s,o){return!(s.startAt&&!(function(f,m,y){const p=Ev(f,m,y);return f.inclusive?p<=0:p<0})(s.startAt,Dl(s),o)||s.endAt&&!(function(f,m,y){const p=Ev(f,m,y);return f.inclusive?p>=0:p>0})(s.endAt,Dl(s),o))})(r,t)}function Pw(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function EE(r){return(t,n)=>{let s=!1;for(const o of Dl(r)){const u=xw(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function xw(r,t,n){const s=r.field.isKeyField()?dt.comparator(t.key,n.key):(function(u,f,m){const y=f.data.field(u),p=m.data.field(u);return y!==null&&p!==null?Wa(y,p):_t(42886)})(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _t(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Fs(this.inner,((n,s)=>{for(const[o,u]of s)t(o,u)}))}isEmpty(){return rE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=new se(dt.comparator);function Wi(){return kw}const AE=new se(dt.comparator);function bl(...r){let t=AE;for(const n of r)t=t.insert(n.key,n);return t}function SE(r){let t=AE;return r.forEach(((n,s)=>t=t.insert(n,s.overlayedDocument))),t}function Ds(){return Nl()}function bE(){return Nl()}function Nl(){return new Gs((r=>r.toString()),((r,t)=>r.isEqual(t)))}const Uw=new se(dt.comparator),Lw=new Ce(dt.comparator);function Mt(...r){let t=Lw;for(const n of r)t=t.add(n);return t}const zw=new Ce(Vt);function Bw(){return zw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hc(t)?"-0":t}}function wE(r){return{integerValue:""+r}}function qw(r,t){return mw(t)?wE(t):Vm(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this._=void 0}}function jw(r,t,n){return r instanceof Bl?(function(o,u){const f={fields:{[oE]:{stringValue:aE},[uE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Im(u)&&(u=dh(u)),u&&(f.fields[lE]=u),{mapValue:f}})(n,t):r instanceof ql?IE(r,t):r instanceof jl?CE(r,t):(function(o,u){const f=RE(o,u),m=wv(f)+wv(o.Ae);return im(f)&&im(o.Ae)?wE(m):Vm(o.serializer,m)})(r,t)}function Hw(r,t,n){return r instanceof ql?IE(r,t):r instanceof jl?CE(r,t):n}function RE(r,t){return r instanceof Yc?(function(s){return im(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(t)?t:{integerValue:0}:null}class Bl extends gh{}class ql extends gh{constructor(t){super(),this.elements=t}}function IE(r,t){const n=DE(t);for(const s of r.elements)n.some((o=>vi(o,s)))||n.push(s);return{arrayValue:{values:n}}}class jl extends gh{constructor(t){super(),this.elements=t}}function CE(r,t){let n=DE(t);for(const s of r.elements)n=n.filter((o=>!vi(o,s)));return{arrayValue:{values:n}}}class Yc extends gh{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function wv(r){return me(r.integerValue||r.doubleValue)}function DE(r){return Cm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(t,n){this.field=t,this.transform=n}}function Gw(r,t){return r.field.isEqual(t.field)&&(function(s,o){return s instanceof ql&&o instanceof ql||s instanceof jl&&o instanceof jl?Ja(s.elements,o.elements,vi):s instanceof Yc&&o instanceof Yc?vi(s.Ae,o.Ae):s instanceof Bl&&o instanceof Bl})(r.transform,t.transform)}class Qw{constructor(t,n){this.version=t,this.transformResults=n}}class fi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new fi}static exists(t){return new fi(void 0,t)}static updateTime(t){return new fi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ph{}function NE(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new VE(r.key,fi.none()):new Yl(r.key,r.data,fi.none());{const n=r.data,s=On.empty();let o=new Ce(He.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Qs(r.key,s,new qn(o.toArray()),fi.none())}}function Kw(r,t,n){r instanceof Yl?(function(o,u,f){const m=o.value.clone(),y=Iv(o.fieldTransforms,u,f.transformResults);m.setAll(y),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(r,t,n):r instanceof Qs?(function(o,u,f){if(!Pc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=Iv(o.fieldTransforms,u,f.transformResults),y=u.data;y.setAll(OE(o)),y.setAll(m),u.convertToFoundDocument(f.version,y).setHasCommittedMutations()})(r,t,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,n)}function Ol(r,t,n,s){return r instanceof Yl?(function(u,f,m,y){if(!Pc(u.precondition,f))return m;const p=u.value.clone(),E=Cv(u.fieldTransforms,y,f);return p.setAll(E),f.convertToFoundDocument(f.version,p).setHasLocalMutations(),null})(r,t,n,s):r instanceof Qs?(function(u,f,m,y){if(!Pc(u.precondition,f))return m;const p=Cv(u.fieldTransforms,y,f),E=f.data;return E.setAll(OE(u)),E.setAll(p),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((w=>w.field)))})(r,t,n,s):(function(u,f,m){return Pc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(r,t,n)}function Yw(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=RE(s.transform,o||null);u!=null&&(n===null&&(n=On.empty()),n.set(s.field,u))}return n||null}function Rv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ja(s,o,((u,f)=>Gw(u,f)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Yl extends ph{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Qs extends ph{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function OE(r){const t=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}})),t}function Iv(r,t,n){const s=new Map;Ht(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=t.data.field(u.field);s.set(u.field,Hw(f,m,n[o]))}return s}function Cv(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,jw(u,f,t))}return s}class VE extends ph{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xw extends ph{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&Kw(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Ol(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Ol(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=bE();return this.mutations.forEach((o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const y=NE(f,m);y!==null&&s.set(o.key,y),f.isValidDocument()||f.convertToNoDocument(St.min())})),s}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),Mt())}isEqual(t){return this.batchId===t.batchId&&Ja(this.mutations,t.mutations,((n,s)=>Rv(n,s)))&&Ja(this.baseMutations,t.baseMutations,((n,s)=>Rv(n,s)))}}class Mm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Ht(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let o=(function(){return Uw})();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Mm(t,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,Ut;function Ww(r){switch(r){case Q.OK:return _t(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return _t(15467,{code:r})}}function ME(r){if(r===void 0)return Ji("GRPC error has no .code"),Q.UNKNOWN;switch(r){case Te.OK:return Q.OK;case Te.CANCELLED:return Q.CANCELLED;case Te.UNKNOWN:return Q.UNKNOWN;case Te.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case Te.INTERNAL:return Q.INTERNAL;case Te.UNAVAILABLE:return Q.UNAVAILABLE;case Te.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case Te.NOT_FOUND:return Q.NOT_FOUND;case Te.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case Te.ABORTED:return Q.ABORTED;case Te.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case Te.DATA_LOSS:return Q.DATA_LOSS;default:return _t(39323,{code:r})}}(Ut=Te||(Te={}))[Ut.OK=0]="OK",Ut[Ut.CANCELLED=1]="CANCELLED",Ut[Ut.UNKNOWN=2]="UNKNOWN",Ut[Ut.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ut[Ut.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ut[Ut.NOT_FOUND=5]="NOT_FOUND",Ut[Ut.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ut[Ut.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ut[Ut.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ut[Ut.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ut[Ut.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ut[Ut.ABORTED=10]="ABORTED",Ut[Ut.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ut[Ut.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ut[Ut.INTERNAL=13]="INTERNAL",Ut[Ut.UNAVAILABLE=14]="UNAVAILABLE",Ut[Ut.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=new Ur([4294967295,4294967295],0);function Dv(r){const t=tR().encode(r),n=new KT;return n.update(t),new Uint8Array(n.digest())}function Nv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Ur([n,s],0),new Ur([o,u],0)]}class Pm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new wl(`Invalid padding: ${n}`);if(s<0)throw new wl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new wl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new wl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Ur.fromNumber(this.ge)}ye(t,n,s){let o=t.add(n.multiply(Ur.fromNumber(s)));return o.compare(eR)===1&&(o=new Ur([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=Dv(t),[s,o]=Nv(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Pm(u,o,n);return s.forEach((m=>f.insert(m))),f}insert(t){if(this.ge===0)return;const n=Dv(t),[s,o]=Nv(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class wl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Xl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new yh(St.min(),o,new se(Vt),Wi(),Mt())}}class Xl{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Xl(s,n,Mt(),Mt(),Mt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,n,s,o){this.be=t,this.removedTargetIds=n,this.key=s,this.De=o}}class PE{constructor(t,n){this.targetId=t,this.Ce=n}}class xE{constructor(t,n,s=Fe.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Ov{constructor(){this.ve=0,this.Fe=Vv(),this.Me=Fe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Mt(),n=Mt(),s=Mt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:_t(38017,{changeType:u})}})),new Xl(this.Me,this.xe,t,n,s)}qe(){this.Oe=!1,this.Fe=Vv()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ht(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class nR{constructor(t){this.Ge=t,this.ze=new Map,this.je=Wi(),this.Je=Cc(),this.He=Cc(),this.Ye=new se(Vt)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const s=this.nt(n);switch(t.state){case 0:this.rt(n)&&s.Le(t.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(t.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(t.resumeToken));break;default:_t(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(t){const n=t.targetId,s=t.Ce.count,o=this.ot(n);if(o){const u=o.target;if(sm(u))if(s===0){const f=new dt(u.path);this.et(n,f,$e.newNoDocument(f,St.min()))}else Ht(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(t),y=m?this.ct(m,t,f):1;if(y!==0){this.it(n);const p=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,p)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=qr(s).toUint8Array()}catch(y){if(y instanceof sE)return Za("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Pm(f,o,u)}catch(y){return Za(y instanceof wl?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(t,n,s){return n.Ce.count===s-this.Pt(t,n.targetId)?0:2}Pt(t,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.et(n,u,null),o++)})),o}Tt(t){const n=new Map;this.ze.forEach(((u,f)=>{const m=this.ot(f);if(m){if(u.current&&sm(m.target)){const y=new dt(m.target.path);this.It(y).has(f)||this.Et(f,y)||this.et(f,y,$e.newNoDocument(y,t))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let s=Mt();this.He.forEach(((u,f)=>{let m=!0;f.forEachWhile((y=>{const p=this.ot(y);return!p||p.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const o=new yh(t,n,this.Ye,this.je,s);return this.je=Wi(),this.Je=Cc(),this.He=Cc(),this.Ye=new se(Vt),o}Xe(t,n){if(!this.rt(t))return;const s=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,s){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),s&&(this.je=this.je.insert(n,s))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new Ov,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new Ce(Vt),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new Ce(Vt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||ot("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Ov),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Cc(){return new se(dt.comparator)}function Vv(){return new se(dt.comparator)}const iR={asc:"ASCENDING",desc:"DESCENDING"},rR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sR={and:"AND",or:"OR"};class aR{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function om(r,t){return r.useProto3Json||fh(t)?t:{value:t}}function Xc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kE(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function oR(r,t){return Xc(r,t.toTimestamp())}function di(r){return Ht(!!r,49232),St.fromTimestamp((function(n){const s=Br(n);return new ee(s.seconds,s.nanos)})(r))}function xm(r,t){return lm(r,t).canonicalString()}function lm(r,t){const n=(function(o){return new te(["projects",o.projectId,"databases",o.database])})(r).child("documents");return t===void 0?n:n.child(t)}function UE(r){const t=te.fromString(r);return Ht(jE(t),10190,{key:t.toString()}),t}function um(r,t){return xm(r.databaseId,t.path)}function Bd(r,t){const n=UE(t);if(n.get(1)!==r.databaseId.projectId)throw new at(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new at(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new dt(zE(n))}function LE(r,t){return xm(r.databaseId,t)}function lR(r){const t=UE(r);return t.length===4?te.emptyPath():zE(t)}function cm(r){return new te(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function zE(r){return Ht(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Mv(r,t,n){return{name:um(r,t),fields:n.value.mapValue.fields}}function uR(r,t){let n;if("targetChange"in t){t.targetChange;const s=(function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:_t(39313,{state:p})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(p,E){return p.useProto3Json?(Ht(E===void 0||typeof E=="string",58123),Fe.fromBase64String(E||"")):(Ht(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Fe.fromUint8Array(E||new Uint8Array))})(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&(function(p){const E=p.code===void 0?Q.UNKNOWN:ME(p.code);return new at(E,p.message||"")})(f);n=new xE(s,o,u,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Bd(r,s.document.name),u=di(s.document.updateTime),f=s.document.createTime?di(s.document.createTime):St.min(),m=new On({mapValue:{fields:s.document.fields}}),y=$e.newFoundDocument(o,u,f,m),p=s.targetIds||[],E=s.removedTargetIds||[];n=new xc(p,E,y.key,y)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Bd(r,s.document),u=s.readTime?di(s.readTime):St.min(),f=$e.newNoDocument(o,u),m=s.removedTargetIds||[];n=new xc([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Bd(r,s.document),u=s.removedTargetIds||[];n=new xc([],u,o,null)}else{if(!("filter"in t))return _t(11601,{Rt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new Jw(o,u),m=s.targetId;n=new PE(m,f)}}return n}function cR(r,t){let n;if(t instanceof Yl)n={update:Mv(r,t.key,t.value)};else if(t instanceof VE)n={delete:um(r,t.key)};else if(t instanceof Qs)n={update:Mv(r,t.key,t.data),updateMask:vR(t.fieldMask)};else{if(!(t instanceof Xw))return _t(16599,{Vt:t.type});n={verify:um(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((s=>(function(u,f){const m=f.transform;if(m instanceof Bl)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof ql)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof jl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Yc)return{fieldPath:f.field.canonicalString(),increment:m.Ae};throw _t(20930,{transform:f.transform})})(0,s)))),t.precondition.isNone||(n.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:oR(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_t(27497)})(r,t.precondition)),n}function hR(r,t){return r&&r.length>0?(Ht(t!==void 0,14353),r.map((n=>(function(o,u){let f=o.updateTime?di(o.updateTime):di(u);return f.isEqual(St.min())&&(f=di(u)),new Qw(f,o.transformResults||[])})(n,t)))):[]}function fR(r,t){return{documents:[LE(r,t.path)]}}function dR(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=LE(r,o);const u=(function(p){if(p.length!==0)return qE(Gn.create(p,"and"))})(t.filters);u&&(n.structuredQuery.where=u);const f=(function(p){if(p.length!==0)return p.map((E=>(function(C){return{field:ja(C.field),direction:pR(C.dir)}})(E)))})(t.orderBy);f&&(n.structuredQuery.orderBy=f);const m=om(r,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=(function(p){return{before:p.inclusive,values:p.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(p){return{before:!p.inclusive,values:p.position}})(t.endAt)),{ft:n,parent:o}}function mR(r){let t=lR(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ht(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=(function(w){const C=BE(w);return C instanceof Gn&&gE(C)?C.getFilters():[C]})(n.where));let f=[];n.orderBy&&(f=(function(w){return w.map((C=>(function(X){return new zl(Ha(X.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(X.direction))})(C)))})(n.orderBy));let m=null;n.limit&&(m=(function(w){let C;return C=typeof w=="object"?w.value:w,fh(C)?null:C})(n.limit));let y=null;n.startAt&&(y=(function(w){const C=!!w.before,j=w.values||[];return new Qc(j,C)})(n.startAt));let p=null;return n.endAt&&(p=(function(w){const C=!w.before,j=w.values||[];return new Qc(j,C)})(n.endAt)),Vw(t,o,f,u,m,"F",y,p)}function gR(r,t){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _t(28987,{purpose:o})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function BE(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ha(n.unaryFilter.field);return Ee.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ha(n.unaryFilter.field);return Ee.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ha(n.unaryFilter.field);return Ee.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ha(n.unaryFilter.field);return Ee.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _t(61313);default:return _t(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Ee.create(Ha(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _t(58110);default:return _t(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return Gn.create(n.compositeFilter.filters.map((s=>BE(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _t(1026)}})(n.compositeFilter.op))})(r):_t(30097,{filter:r})}function pR(r){return iR[r]}function yR(r){return rR[r]}function _R(r){return sR[r]}function ja(r){return{fieldPath:r.canonicalString()}}function Ha(r){return He.fromServerFormat(r.fieldPath)}function qE(r){return r instanceof Ee?(function(n){if(n.op==="=="){if(Tv(n.value))return{unaryFilter:{field:ja(n.field),op:"IS_NAN"}};if(vv(n.value))return{unaryFilter:{field:ja(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Tv(n.value))return{unaryFilter:{field:ja(n.field),op:"IS_NOT_NAN"}};if(vv(n.value))return{unaryFilter:{field:ja(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ja(n.field),op:yR(n.op),value:n.value}}})(r):r instanceof Gn?(function(n){const s=n.getFilters().map((o=>qE(o)));return s.length===1?s[0]:{compositeFilter:{op:_R(n.op),filters:s}}})(r):_t(54877,{filter:r})}function vR(r){const t=[];return r.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function jE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,n,s,o,u=St.min(),f=St.min(),m=Fe.EMPTY_BYTE_STRING,y=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(t){return new Pr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(t){this.yt=t}}function ER(r){const t=mR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Kc(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.Cn=new SR}addToCollectionParentIndex(t,n){return this.Cn.add(n),Y.resolve()}getCollectionParents(t,n){return Y.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return Y.resolve()}deleteFieldIndex(t,n){return Y.resolve()}deleteAllFieldIndexes(t){return Y.resolve()}createTargetIndexes(t,n){return Y.resolve()}getDocumentsMatchingTarget(t,n){return Y.resolve(null)}getIndexType(t,n){return Y.resolve(0)}getFieldIndexes(t,n){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,n){return Y.resolve(zr.min())}getMinOffsetFromCollectionGroup(t,n){return Y.resolve(zr.min())}updateCollectionGroup(t,n,s){return Y.resolve()}updateIndexEntries(t,n){return Y.resolve()}}class SR{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Ce(te.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Ce(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},HE=41943040;class an{static withCacheSize(t){return new an(t,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(HE,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new eo(0)}static cr(){return new eo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="LruGarbageCollector",bR=1048576;function kv([r,t],[n,s]){const o=Vt(r,n);return o===0?Vt(t,s):o}class wR{constructor(t){this.Ir=t,this.buffer=new Ce(kv),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();kv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class RR{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){ot(xv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){lo(n)?ot(xv,"Ignoring IndexedDB error during garbage collection: ",n):await oo(n)}await this.Vr(3e5)}))}}class IR{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(t,n){if(n===0)return Y.resolve(hh.ce);const s=new wR(n);return this.mr.forEachTarget(t,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(t,n,s){return this.mr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(ot("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(Pv)):this.getCacheSize(t).next((s=>s<this.params.cacheSizeCollectionThreshold?(ot("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pv):this.yr(t,n)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let s,o,u,f,m,y,p;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(ot("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,f=Date.now(),this.nthSequenceNumber(t,o)))).next((w=>(s=w,m=Date.now(),this.removeTargets(t,s,n)))).next((w=>(u=w,y=Date.now(),this.removeOrphanedDocuments(t,s)))).next((w=>(p=Date.now(),Ba()<=Ot.DEBUG&&ot("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${w} documents in `+(p-y)+`ms
Total Duration: ${p-E}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w}))))}}function CR(r,t){return new IR(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.changes=new Gs((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,$e.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(t,n)))).next((o=>(s!==null&&Ol(s.mutation,o,qn.empty(),ee.now()),o)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.getLocalViewOfDocuments(t,s,Mt()).next((()=>s))))}getLocalViewOfDocuments(t,n,s=Mt()){const o=Ds();return this.populateOverlays(t,o,n).next((()=>this.computeViews(t,n,o,s).next((u=>{let f=bl();return u.forEach(((m,y)=>{f=f.insert(m,y.overlayedDocument)})),f}))))}getOverlayedDocuments(t,n){const s=Ds();return this.populateOverlays(t,s,n).next((()=>this.computeViews(t,n,s,Mt())))}populateOverlays(t,n,s){const o=[];return s.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((f,m)=>{n.set(f,m)}))}))}computeViews(t,n,s,o){let u=Wi();const f=Nl(),m=(function(){return Nl()})();return n.forEach(((y,p)=>{const E=s.get(p.key);o.has(p.key)&&(E===void 0||E.mutation instanceof Qs)?u=u.insert(p.key,p):E!==void 0?(f.set(p.key,E.mutation.getFieldMask()),Ol(E.mutation,p,E.mutation.getFieldMask(),ee.now())):f.set(p.key,qn.empty())})),this.recalculateAndSaveOverlays(t,u).next((y=>(y.forEach(((p,E)=>f.set(p,E))),n.forEach(((p,E)=>m.set(p,new NR(E,f.get(p)??null)))),m)))}recalculateAndSaveOverlays(t,n){const s=Nl();let o=new se(((f,m)=>f-m)),u=Mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((f=>{for(const m of f)m.keys().forEach((y=>{const p=n.get(y);if(p===null)return;let E=s.get(y)||qn.empty();E=m.applyToLocalView(p,E),s.set(y,E);const w=(o.get(m.batchId)||Mt()).add(y);o=o.insert(m.batchId,w)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),p=y.key,E=y.value,w=bE();E.forEach((C=>{if(!u.has(C)){const j=NE(n.get(C),s.get(C));j!==null&&w.set(C,j),u=u.add(C)}})),f.push(this.documentOverlayCache.saveOverlays(t,p,w))}return Y.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.recalculateAndSaveOverlays(t,s)))}getDocumentsMatchingQuery(t,n,s,o){return(function(f){return dt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):vE(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):Y.resolve(Ds());let m=xl,y=u;return f.next((p=>Y.forEach(p,((E,w)=>(m<w.largestBatchId&&(m=w.largestBatchId),u.get(E)?Y.resolve():this.remoteDocumentCache.getEntry(t,E).next((C=>{y=y.insert(E,C)}))))).next((()=>this.populateOverlays(t,p,u))).next((()=>this.computeViews(t,y,p,Mt()))).next((E=>({batchId:m,changes:SE(E)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new dt(n)).next((s=>{let o=bl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=bl();return this.indexManager.getCollectionParents(t,u).next((m=>Y.forEach(m,(y=>{const p=(function(w,C){return new uo(C,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(n,y.child(u));return this.getDocumentsMatchingCollectionQuery(t,p,s,o).next((E=>{E.forEach(((w,C)=>{f=f.insert(w,C)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o)))).next((f=>{u.forEach(((y,p)=>{const E=p.getKey();f.get(E)===null&&(f=f.insert(E,$e.newInvalidDocument(E)))}));let m=bl();return f.forEach(((y,p)=>{const E=u.get(y);E!==void 0&&Ol(E.mutation,p,qn.empty(),ee.now()),mh(n,p)&&(m=m.insert(y,p))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return Y.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:di(o.createTime)}})(n)),Y.resolve()}getNamedQuery(t,n){return Y.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:ER(o.bundledQuery),readTime:di(o.readTime)}})(n)),Y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(){this.overlays=new se(dt.comparator),this.qr=new Map}getOverlay(t,n){return Y.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ds();return Y.forEach(n,(o=>this.getOverlay(t,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(t,n,s){return s.forEach(((o,u)=>{this.St(t,n,u)})),Y.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),Y.resolve()}getOverlaysForCollection(t,n,s){const o=Ds(),u=n.length+1,f=new dt(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const y=m.getNext().value,p=y.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return Y.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new se(((p,E)=>p-E));const f=this.overlays.getIterator();for(;f.hasNext();){const p=f.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>s){let E=u.get(p.largestBatchId);E===null&&(E=Ds(),u=u.insert(p.largestBatchId,E)),E.set(p.getKey(),p)}}const m=Ds(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((p,E)=>m.set(p,E))),!(m.size()>=o)););return Y.resolve(m)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new Zw(n,s));let u=this.qr.get(n);u===void 0&&(u=Mt(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(t){return Y.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,Y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this.Qr=new Ce(xe.$r),this.Ur=new Ce(xe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const s=new xe(t,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(t,n){t.forEach((s=>this.addReference(s,n)))}removeReference(t,n){this.Gr(new xe(t,n))}zr(t,n){t.forEach((s=>this.removeReference(s,n)))}jr(t){const n=new dt(new te([])),s=new xe(n,t),o=new xe(n,t+1),u=[];return this.Ur.forEachInRange([s,o],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new dt(new te([])),s=new xe(n,t),o=new xe(n,t+1);let u=Mt();return this.Ur.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(t){const n=new xe(t,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class xe{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return dt.comparator(t.key,n.key)||Vt(t.Yr,n.Yr)}static Kr(t,n){return Vt(t.Yr,n.Yr)||dt.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ce(xe.$r)}checkEmpty(t){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new $w(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new xe(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return Y.resolve(f)}lookupMutationBatch(t,n){return Y.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return Y.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?Rm:this.tr-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new xe(n,0),o=new xe(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(f=>{const m=this.Xr(f.Yr);u.push(m)})),Y.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Ce(Vt);return n.forEach((o=>{const u=new xe(o,0),f=new xe(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(m=>{s=s.add(m.Yr)}))})),Y.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;dt.isDocumentKey(u)||(u=u.child(""));const f=new xe(new dt(u),0);let m=new Ce(Vt);return this.Zr.forEachWhile((y=>{const p=y.key.path;return!!s.isPrefixOf(p)&&(p.length===o&&(m=m.add(y.Yr)),!0)}),f),Y.resolve(this.ti(m))}ti(t){const n=[];return t.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(t,n){Ht(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Y.forEach(n.mutations,(o=>{const u=new xe(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=s}))}ir(t){}containsKey(t,n){const s=new xe(n,0),o=this.Zr.firstAfterOrEqual(s);return Y.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(t){this.ri=t,this.docs=(function(){return new se(dt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(t,n){let s=Wi();return n.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():$e.newInvalidDocument(o))})),Y.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=Wi();const f=n.path,m=new dt(f.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:p,value:{document:E}}=y.getNext();if(!f.isPrefixOf(p.path))break;p.path.length>f.length+1||cw(uw(E),s)<=0||(o.has(E.key)||mh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return Y.resolve(u)}getAllFromCollectionGroup(t,n,s,o){_t(9500)}ii(t,n){return Y.forEach(this.docs,(s=>n(s)))}newChangeBuffer(t){return new UR(this)}getSize(t){return Y.resolve(this.size)}}class UR extends DR{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(s)})),Y.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(t){this.persistence=t,this.si=new Gs((n=>Dm(n)),Nm),this.lastRemoteSnapshotVersion=St.min(),this.highestTargetId=0,this.oi=0,this._i=new km,this.targetCount=0,this.ai=eo.ur()}forEachTarget(t,n){return this.si.forEach(((s,o)=>n(o))),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),Y.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new eo(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,Y.resolve()}updateTargetData(t,n){return this.Pr(n),Y.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.si.forEach(((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)})),Y.waitFor(u).next((()=>o))}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,n){const s=this.si.get(n)||null;return Y.resolve(s)}addMatchingKeys(t,n,s){return this._i.Wr(n,s),Y.resolve()}removeMatchingKeys(t,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(t,f))})),Y.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),Y.resolve()}getMatchingKeysForTargetId(t,n){const s=this._i.Hr(n);return Y.resolve(s)}containsKey(t,n){return Y.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(t,n){this.ui={},this.overlays={},this.ci=new hh(0),this.li=!1,this.li=!0,this.hi=new PR,this.referenceDelegate=t(this),this.Pi=new LR(this),this.indexManager=new AR,this.remoteDocumentCache=(function(o){return new kR(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new TR(n),this.Ii=new VR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new MR,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ui[t.toKey()];return s||(s=new xR(n,this.referenceDelegate),this.ui[t.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,s){ot("MemoryPersistence","Starting transaction:",t);const o=new zR(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,n){return Y.or(Object.values(this.ui).map((s=>()=>s.containsKey(t,n))))}}class zR extends fw{constructor(t){super(),this.currentSequenceNumber=t}}class Um{constructor(t){this.persistence=t,this.Ri=new km,this.Vi=null}static mi(t){return new Um(t)}get fi(){if(this.Vi)return this.Vi;throw _t(60996)}addReference(t,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),Y.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),Y.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(t,n)))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.fi,(s=>{const o=dt.fromPath(s);return this.gi(t,o).next((u=>{u||n.removeEntry(o,St.min())}))})).next((()=>(this.Vi=null,n.apply(t))))}updateLimboDocument(t,n){return this.gi(t,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(t){return 0}gi(t,n){return Y.or([()=>Y.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class $c{constructor(t,n){this.persistence=t,this.pi=new Gs((s=>gw(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=CR(this,n)}static mi(t,n){return new $c(t,n)}Ei(){}di(t){return Y.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((s=>n.next((o=>s+o))))}wr(t){let n=0;return this.pr(t,(s=>{n++})).next((()=>n))}pr(t,n){return Y.forEach(this.pi,((s,o)=>this.br(t,s,o).next((u=>u?Y.resolve():n(o)))))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(f=>this.br(t,f,n).next((m=>{m||(s++,u.removeEntry(f,St.min()))})))).next((()=>u.apply(t))).next((()=>s))}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),Y.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),Y.resolve()}removeReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),Y.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),Y.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Vc(t.data.value)),n}br(t,n,s){return Y.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.pi.get(n);return Y.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Es=s,this.ds=o}static As(t,n){let s=Mt(),o=Mt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Lm(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Db()?8:dw(Ze())>0?6:4})()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.ys(t,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(t,n,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new BR;return this.Ss(t,n,f).next((m=>{if(u.result=m,this.Vs)return this.bs(t,n,f,m.size)}))})).next((()=>u.result))}bs(t,n,s,o){return s.documentReadCount<this.fs?(Ba()<=Ot.DEBUG&&ot("QueryEngine","SDK will not create cache indexes for query:",qa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Y.resolve()):(Ba()<=Ot.DEBUG&&ot("QueryEngine","Query:",qa(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Ba()<=Ot.DEBUG&&ot("QueryEngine","The SDK decides to create cache indexes for query:",qa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,hi(n))):Y.resolve())}ys(t,n){if(bv(n))return Y.resolve(null);let s=hi(n);return this.indexManager.getIndexType(t,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=Kc(n,null,"F"),s=hi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next((u=>{const f=Mt(...u);return this.ps.getDocuments(t,f).next((m=>this.indexManager.getMinOffset(t,s).next((y=>{const p=this.Ds(n,m);return this.Cs(n,p,f,y.readTime)?this.ys(t,Kc(n,null,"F")):this.vs(t,p,n,y)}))))})))))}ws(t,n,s,o){return bv(n)||o.isEqual(St.min())?Y.resolve(null):this.ps.getDocuments(t,s).next((u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,o)?Y.resolve(null):(Ba()<=Ot.DEBUG&&ot("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),qa(n)),this.vs(t,f,n,lw(o,xl)).next((m=>m)))}))}Ds(t,n){let s=new Ce(EE(t));return n.forEach(((o,u)=>{mh(t,u)&&(s=s.add(u))})),s}Cs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,n,s){return Ba()<=Ot.DEBUG&&ot("QueryEngine","Using full collection scan to execute query:",qa(n)),this.ps.getDocumentsMatchingQuery(t,n,zr.min(),s)}vs(t,n,s,o){return this.ps.getDocumentsMatchingQuery(t,s,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="LocalStore",jR=3e8;class HR{constructor(t,n,s,o){this.persistence=t,this.Fs=n,this.serializer=o,this.Ms=new se(Vt),this.xs=new Gs((u=>Dm(u)),Nm),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(s)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new OR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.Ms)))}}function FR(r,t,n,s){return new HR(r,t,n,s)}async function GE(r,t){const n=bt(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,n.Bs(t),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],m=[];let y=Mt();for(const p of o){f.push(p.batchId);for(const E of p.mutations)y=y.add(E.key)}for(const p of u){m.push(p.batchId);for(const E of p.mutations)y=y.add(E.key)}return n.localDocuments.getDocuments(s,y).next((p=>({Ls:p,removedBatchIds:f,addedBatchIds:m})))}))}))}function GR(r,t){const n=bt(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=t.batch.keys(),u=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,p,E){const w=p.batch,C=w.keys();let j=Y.resolve();return C.forEach((X=>{j=j.next((()=>E.getEntry(y,X))).next((et=>{const $=p.docVersions.get(X);Ht($!==null,48541),et.version.compareTo($)<0&&(w.applyToRemoteDocument(et,p),et.isValidDocument()&&(et.setReadTime(p.commitVersion),E.addEntry(et)))}))})),j.next((()=>m.mutationQueue.removeMutationBatch(y,w)))})(n,s,t,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Mt();for(let p=0;p<m.mutationResults.length;++p)m.mutationResults[p].transformResults.length>0&&(y=y.add(m.batch.mutations[p].key));return y})(t)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function QE(r){const t=bt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.Pi.getLastRemoteSnapshotVersion(n)))}function QR(r,t){const n=bt(r),s=t.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const m=[];t.targetChanges.forEach(((E,w)=>{const C=o.get(w);if(!C)return;m.push(n.Pi.removeMatchingKeys(u,E.removedDocuments,w).next((()=>n.Pi.addMatchingKeys(u,E.addedDocuments,w))));let j=C.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(w)!==null?j=j.withResumeToken(Fe.EMPTY_BYTE_STRING,St.min()).withLastLimboFreeSnapshotVersion(St.min()):E.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(E.resumeToken,s)),o=o.insert(w,j),(function(et,$,st){return et.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-et.snapshotVersion.toMicroseconds()>=jR?!0:st.addedDocuments.size+st.modifiedDocuments.size+st.removedDocuments.size>0})(C,j,E)&&m.push(n.Pi.updateTargetData(u,j))}));let y=Wi(),p=Mt();if(t.documentUpdates.forEach((E=>{t.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(KR(u,f,t.documentUpdates).next((E=>{y=E.ks,p=E.qs}))),!s.isEqual(St.min())){const E=n.Pi.getLastRemoteSnapshotVersion(u).next((w=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return Y.waitFor(m).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,y,p))).next((()=>y))})).then((u=>(n.Ms=o,u)))}function KR(r,t,n){let s=Mt(),o=Mt();return n.forEach((u=>s=s.add(u))),t.getEntries(r,s).next((u=>{let f=Wi();return n.forEach(((m,y)=>{const p=u.get(m);y.isFoundDocument()!==p.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(St.min())?(t.removeEntry(m,y.readTime),f=f.insert(m,y)):!p.isValidDocument()||y.version.compareTo(p.version)>0||y.version.compareTo(p.version)===0&&p.hasPendingWrites?(t.addEntry(y),f=f.insert(m,y)):ot(zm,"Ignoring outdated watch update for ",m,". Current version:",p.version," Watch version:",y.version)})),{ks:f,qs:o}}))}function YR(r,t){const n=bt(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(t===void 0&&(t=Rm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t))))}function XR(r,t){const n=bt(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,t).next((u=>u?(o=u,Y.resolve(o)):n.Pi.allocateTargetId(s).next((f=>(o=new Pr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(t,s.targetId)),s}))}async function hm(r,t,n){const s=bt(r),o=s.Ms.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!lo(f))throw f;ot(zm,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ms=s.Ms.remove(t),s.xs.delete(o.target)}function Uv(r,t,n){const s=bt(r);let o=St.min(),u=Mt();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(y,p,E){const w=bt(y),C=w.xs.get(E);return C!==void 0?Y.resolve(w.Ms.get(C)):w.Pi.getTargetData(p,E)})(s,f,hi(t)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(f,t,n?o:St.min(),n?u:Mt()))).next((m=>($R(s,Pw(t),m),{documents:m,Qs:u})))))}function $R(r,t,n){let s=r.Os.get(t)||St.min();n.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Os.set(t,s)}class Lv{constructor(){this.activeTargetIds=Bw()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ZR{constructor(){this.Mo=new Lv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,s){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Lv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="ConnectivityMonitor";class Bv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ot(zv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){ot(zv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc=null;function fm(){return Dc===null?Dc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Dc++,"0x"+Dc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="RestConnection",WR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tI{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Fc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(t,n,s,o,u){const f=fm(),m=this.zo(t,n.toUriEncodedString());ot(qd,`Sending RPC '${t}' ${f}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:p}=new URL(m),E=ro(p);return this.Jo(t,m,y,s,E).then((w=>(ot(qd,`Received RPC '${t}' ${f}: `,w),w)),(w=>{throw Za(qd,`RPC '${t}' ${f} failed with error: `,w,"url: ",m,"request:",s),w}))}Ho(t,n,s,o,u,f){return this.Go(t,n,s,o,u)}jo(t,n,s){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ao})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>t[u]=o)),s&&s.headers.forEach(((o,u)=>t[u]=o))}zo(t,n){const s=WR[t];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class nI extends tI{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,o,u){const f=fm();return new Promise(((m,y)=>{const p=new YT;p.setWithCredentials(!0),p.listenOnce(XT.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case Oc.NO_ERROR:const w=p.getResponseJson();ot(Ye,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(w)),m(w);break;case Oc.TIMEOUT:ot(Ye,`RPC '${t}' ${f} timed out`),y(new at(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Oc.HTTP_ERROR:const C=p.getStatus();if(ot(Ye,`RPC '${t}' ${f} failed with status:`,C,"response text:",p.getResponseText()),C>0){let j=p.getResponseJson();Array.isArray(j)&&(j=j[0]);const X=j?.error;if(X&&X.status&&X.message){const et=(function(st){const ut=st.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(ut)>=0?ut:Q.UNKNOWN})(X.status);y(new at(et,X.message))}else y(new at(Q.UNKNOWN,"Server responded with status "+p.getStatus()))}else y(new at(Q.UNAVAILABLE,"Connection failed."));break;default:_t(9055,{l_:t,streamId:f,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{ot(Ye,`RPC '${t}' ${f} completed.`)}}));const E=JSON.stringify(o);ot(Ye,`RPC '${t}' ${f} sending request:`,o),p.send(n,"POST",E,s,15)}))}T_(t,n,s){const o=fm(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=JT(),m=ZT(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(y.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,n,s),y.encodeInitMessageHeaders=!0;const E=u.join("");ot(Ye,`Creating RPC '${t}' stream ${o}: ${E}`,y);const w=f.createWebChannel(E,y);this.I_(w);let C=!1,j=!1;const X=new eI({Yo:$=>{j?ot(Ye,`Not sending because RPC '${t}' stream ${o} is closed:`,$):(C||(ot(Ye,`Opening RPC '${t}' stream ${o} transport.`),w.open(),C=!0),ot(Ye,`RPC '${t}' stream ${o} sending:`,$),w.send($))},Zo:()=>w.close()}),et=($,st,ut)=>{$.listen(st,(it=>{try{ut(it)}catch(mt){setTimeout((()=>{throw mt}),0)}}))};return et(w,Sl.EventType.OPEN,(()=>{j||(ot(Ye,`RPC '${t}' stream ${o} transport opened.`),X.o_())})),et(w,Sl.EventType.CLOSE,(()=>{j||(j=!0,ot(Ye,`RPC '${t}' stream ${o} transport closed`),X.a_(),this.E_(w))})),et(w,Sl.EventType.ERROR,($=>{j||(j=!0,Za(Ye,`RPC '${t}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),X.a_(new at(Q.UNAVAILABLE,"The operation could not be completed")))})),et(w,Sl.EventType.MESSAGE,($=>{if(!j){const st=$.data[0];Ht(!!st,16349);const ut=st,it=ut?.error||ut[0]?.error;if(it){ot(Ye,`RPC '${t}' stream ${o} received error:`,it);const mt=it.status;let ht=(function(S){const I=Te[S];if(I!==void 0)return ME(I)})(mt),Lt=it.message;ht===void 0&&(ht=Q.INTERNAL,Lt="Unknown error status: "+mt+" with message "+it.message),j=!0,X.a_(new at(ht,Lt)),w.close()}else ot(Ye,`RPC '${t}' stream ${o} received:`,st),X.u_(st)}})),et(m,$T.STAT_EVENT,($=>{$.stat===tm.PROXY?ot(Ye,`RPC '${t}' stream ${o} detected buffering proxy`):$.stat===tm.NOPROXY&&ot(Ye,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{X.__()}),0),X}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((n=>n===t))}}function jd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(r){return new aR(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(t,n,s=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&ot("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv="PersistentStream";class YE{constructor(t,n,s,o,u,f,m,y){this.Mi=t,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new KE(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===Q.RESOURCE_EXHAUSTED?(Ji(n.toString()),Ji("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{t((()=>{const o=new at(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(t,n){const s=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return ot(qv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget((()=>this.D_===t?n():(ot(qv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iI extends YE{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=uR(this.serializer,t),s=(function(u){if(!("targetChange"in u))return St.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?St.min():f.readTime?di(f.readTime):St.min()})(t);return this.listener.H_(n,s)}Y_(t){const n={};n.database=cm(this.serializer),n.addTarget=(function(u,f){let m;const y=f.target;if(m=sm(y)?{documents:fR(u,y)}:{query:dR(u,y).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=kE(u,f.resumeToken);const p=om(u,f.expectedCount);p!==null&&(m.expectedCount=p)}else if(f.snapshotVersion.compareTo(St.min())>0){m.readTime=Xc(u,f.snapshotVersion.toTimestamp());const p=om(u,f.expectedCount);p!==null&&(m.expectedCount=p)}return m})(this.serializer,t);const s=gR(this.serializer,t);s&&(n.labels=s),this.q_(n)}Z_(t){const n={};n.database=cm(this.serializer),n.removeTarget=t,this.q_(n)}}class rI extends YE{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return Ht(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Ht(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Ht(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=hR(t.writeResults,t.commitTime),s=di(t.commitTime);return this.listener.na(s,n)}ra(){const t={};t.database=cm(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((s=>cR(this.serializer,s)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{}class aI extends sI{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new at(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Go(t,lm(n,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new at(Q.UNKNOWN,u.toString())}))}Ho(t,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.Ho(t,lm(n,s),o,f,m,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new at(Q.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class oI{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ji(n),this.aa=!1):ot("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="RemoteStore";class lI{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{s.enqueueAndForget((async()=>{Ks(this)&&(ot(Us,"Restarting streams for network reachability change."),await(async function(y){const p=bt(y);p.Ea.add(4),await $l(p),p.Ra.set("Unknown"),p.Ea.delete(4),await vh(p)})(this))}))})),this.Ra=new oI(s,o)}}async function vh(r){if(Ks(r))for(const t of r.da)await t(!0)}async function $l(r){for(const t of r.da)await t(!1)}function XE(r,t){const n=bt(r);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),Hm(n)?jm(n):co(n).O_()&&qm(n,t))}function Bm(r,t){const n=bt(r),s=co(n);n.Ia.delete(t),s.O_()&&$E(n,t),n.Ia.size===0&&(s.O_()?s.L_():Ks(n)&&n.Ra.set("Unknown"))}function qm(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(St.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}co(r).Y_(t)}function $E(r,t){r.Va.Ue(t),co(r).Z_(t)}function jm(r){r.Va=new nR({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),co(r).start(),r.Ra.ua()}function Hm(r){return Ks(r)&&!co(r).x_()&&r.Ia.size>0}function Ks(r){return bt(r).Ea.size===0}function ZE(r){r.Va=void 0}async function uI(r){r.Ra.set("Online")}async function cI(r){r.Ia.forEach(((t,n)=>{qm(r,t)}))}async function hI(r,t){ZE(r),Hm(r)?(r.Ra.ha(t),jm(r)):r.Ra.set("Unknown")}async function fI(r,t,n){if(r.Ra.set("Online"),t instanceof xE&&t.state===2&&t.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))})(r,t)}catch(s){ot(Us,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Zc(r,s)}else if(t instanceof xc?r.Va.Ze(t):t instanceof PE?r.Va.st(t):r.Va.tt(t),!n.isEqual(St.min()))try{const s=await QE(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach(((y,p)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.Ia.get(p);E&&u.Ia.set(p,E.withResumeToken(y.resumeToken,f))}})),m.targetMismatches.forEach(((y,p)=>{const E=u.Ia.get(y);if(!E)return;u.Ia.set(y,E.withResumeToken(Fe.EMPTY_BYTE_STRING,E.snapshotVersion)),$E(u,y);const w=new Pr(E.target,y,p,E.sequenceNumber);qm(u,w)})),u.remoteSyncer.applyRemoteEvent(m)})(r,n)}catch(s){ot(Us,"Failed to raise snapshot:",s),await Zc(r,s)}}async function Zc(r,t,n){if(!lo(t))throw t;r.Ea.add(1),await $l(r),r.Ra.set("Offline"),n||(n=()=>QE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ot(Us,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await vh(r)}))}function JE(r,t){return t().catch((n=>Zc(r,n,t)))}async function Th(r){const t=bt(r),n=Hr(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Rm;for(;dI(t);)try{const o=await YR(t.localStore,s);if(o===null){t.Ta.length===0&&n.L_();break}s=o.batchId,mI(t,o)}catch(o){await Zc(t,o)}WE(t)&&t0(t)}function dI(r){return Ks(r)&&r.Ta.length<10}function mI(r,t){r.Ta.push(t);const n=Hr(r);n.O_()&&n.X_&&n.ea(t.mutations)}function WE(r){return Ks(r)&&!Hr(r).x_()&&r.Ta.length>0}function t0(r){Hr(r).start()}async function gI(r){Hr(r).ra()}async function pI(r){const t=Hr(r);for(const n of r.Ta)t.ea(n.mutations)}async function yI(r,t,n){const s=r.Ta.shift(),o=Mm.from(s,t,n);await JE(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Th(r)}async function _I(r,t){t&&Hr(r).X_&&await(async function(s,o){if((function(f){return Ww(f)&&f!==Q.ABORTED})(o.code)){const u=s.Ta.shift();Hr(s).B_(),await JE(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Th(s)}})(r,t),WE(r)&&t0(r)}async function jv(r,t){const n=bt(r);n.asyncQueue.verifyOperationInProgress(),ot(Us,"RemoteStore received new credentials");const s=Ks(n);n.Ea.add(3),await $l(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await vh(n)}async function vI(r,t){const n=bt(r);t?(n.Ea.delete(2),await vh(n)):t||(n.Ea.add(2),await $l(n),n.Ra.set("Unknown"))}function co(r){return r.ma||(r.ma=(function(n,s,o){const u=bt(n);return u.sa(),new iI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:uI.bind(null,r),t_:cI.bind(null,r),r_:hI.bind(null,r),H_:fI.bind(null,r)}),r.da.push((async t=>{t?(r.ma.B_(),Hm(r)?jm(r):r.Ra.set("Unknown")):(await r.ma.stop(),ZE(r))}))),r.ma}function Hr(r){return r.fa||(r.fa=(function(n,s,o){const u=bt(n);return u.sa(),new rI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:gI.bind(null,r),r_:_I.bind(null,r),ta:pI.bind(null,r),na:yI.bind(null,r)}),r.da.push((async t=>{t?(r.fa.B_(),await Th(r)):(await r.fa.stop(),r.Ta.length>0&&(ot(Us,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,m=new Fm(t,n,f,o,u);return m.start(s),m}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new at(Q.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gm(r,t){if(Ji("AsyncQueue",`${t}: ${r}`),lo(r))return new at(Q.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{static emptySet(t){return new Qa(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||dt.comparator(n.key,s.key):(n,s)=>dt.comparator(n.key,s.key),this.keyedMap=bl(),this.sortedSet=new se(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,s)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Qa)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Qa;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.ga=new se(dt.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):_t(63341,{Rt:t,pa:s}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,s)=>{t.push(s)})),t}}class no{constructor(t,n,s,o,u,f,m,y,p){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=p}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach((m=>{f.push({type:0,doc:m})})),new no(t,n,Qa.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Kl(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class EI{constructor(){this.queries=Fv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=bt(n),u=o.queries;o.queries=Fv(),u.forEach(((f,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new at(Q.ABORTED,"Firestore shutting down"))}}function Fv(){return new Gs((r=>TE(r)),Kl)}async function AI(r,t){const n=bt(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.ba()&&t.Da()&&(s=2):(u=new TI,s=t.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=Gm(f,`Initialization of query '${qa(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.Sa.push(t),t.va(n.onlineState),u.wa&&t.Fa(u.wa)&&Qm(n)}async function SI(r,t){const n=bt(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function bI(r,t){const n=bt(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&Qm(n)}function wI(r,t,n){const s=bt(r),o=s.queries.get(t);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(t)}function Qm(r){r.Ca.forEach((t=>{t.next()}))}var dm,Gv;(Gv=dm||(dm={})).Ma="default",Gv.Cache="cache";class RI{constructor(t,n,s){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new no(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=no.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==dm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(t){this.key=t}}class n0{constructor(t){this.key=t}}class II{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Mt(),this.mutatedKeys=Mt(),this.eu=EE(t),this.tu=new Qa(this.eu)}get nu(){return this.Ya}ru(t,n){const s=n?n.iu:new Hv,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,p=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((E,w)=>{const C=o.get(E),j=mh(this.query,w)?w:null,X=!!C&&this.mutatedKeys.has(C.key),et=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let $=!1;C&&j?C.data.isEqual(j.data)?X!==et&&(s.track({type:3,doc:j}),$=!0):this.su(C,j)||(s.track({type:2,doc:j}),$=!0,(y&&this.eu(j,y)>0||p&&this.eu(j,p)<0)&&(m=!0)):!C&&j?(s.track({type:0,doc:j}),$=!0):C&&!j&&(s.track({type:1,doc:C}),$=!0,(y||p)&&(m=!0)),$&&(j?(f=f.add(j),u=et?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:f,iu:s,Cs:m,mutatedKeys:u}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((E,w)=>(function(j,X){const et=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _t(20277,{Rt:$})}};return et(j)-et(X)})(E.type,w.type)||this.eu(E.doc,w.doc))),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,p=y!==this.Za;return this.Za=y,f.length!==0||p?{snapshot:new no(this.query,t.tu,u,f,t.mutatedKeys,y===0,p,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Hv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Mt(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return t.forEach((s=>{this.Xa.has(s)||n.push(new n0(s))})),this.Xa.forEach((s=>{t.has(s)||n.push(new e0(s))})),n}cu(t){this.Ya=t.Qs,this.Xa=Mt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return no.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Km="SyncEngine";class CI{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class DI{constructor(t){this.key=t,this.hu=!1}}class NI{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new Gs((m=>TE(m)),Kl),this.Iu=new Map,this.Eu=new Set,this.du=new se(dt.comparator),this.Au=new Map,this.Ru=new km,this.Vu={},this.mu=new Map,this.fu=eo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function OI(r,t,n=!0){const s=l0(r);let o;const u=s.Tu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await i0(s,t,n,!0),o}async function VI(r,t){const n=l0(r);await i0(n,t,!0,!1)}async function i0(r,t,n,s){const o=await XR(r.localStore,hi(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await MI(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&XE(r.remoteStore,o),m}async function MI(r,t,n,s,o){r.pu=(w,C,j)=>(async function(et,$,st,ut){let it=$.view.ru(st);it.Cs&&(it=await Uv(et.localStore,$.query,!1).then((({documents:O})=>$.view.ru(O,it))));const mt=ut&&ut.targetChanges.get($.targetId),ht=ut&&ut.targetMismatches.get($.targetId)!=null,Lt=$.view.applyChanges(it,et.isPrimaryClient,mt,ht);return Kv(et,$.targetId,Lt.au),Lt.snapshot})(r,w,C,j);const u=await Uv(r.localStore,t,!0),f=new II(t,u.Qs),m=f.ru(u.documents),y=Xl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),p=f.applyChanges(m,r.isPrimaryClient,y);Kv(r,n,p.au);const E=new CI(t,n,f);return r.Tu.set(t,E),r.Iu.has(n)?r.Iu.get(n).push(t):r.Iu.set(n,[t]),p.snapshot}async function PI(r,t,n){const s=bt(r),o=s.Tu.get(t),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((f=>!Kl(f,t)))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await hm(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Bm(s.remoteStore,o.targetId),mm(s,o.targetId)})).catch(oo)):(mm(s,o.targetId),await hm(s.localStore,o.targetId,!0))}async function xI(r,t){const n=bt(r),s=n.Tu.get(t),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Bm(n.remoteStore,s.targetId))}async function kI(r,t,n){const s=HI(r);try{const o=await(function(f,m){const y=bt(f),p=ee.now(),E=m.reduce(((j,X)=>j.add(X.key)),Mt());let w,C;return y.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let X=Wi(),et=Mt();return y.Ns.getEntries(j,E).next(($=>{X=$,X.forEach(((st,ut)=>{ut.isValidDocument()||(et=et.add(st))}))})).next((()=>y.localDocuments.getOverlayedDocuments(j,X))).next(($=>{w=$;const st=[];for(const ut of m){const it=Yw(ut,w.get(ut.key).overlayedDocument);it!=null&&st.push(new Qs(ut.key,it,fE(it.value.mapValue),fi.exists(!0)))}return y.mutationQueue.addMutationBatch(j,p,st,m)})).next(($=>{C=$;const st=$.applyToLocalDocumentSet(w,et);return y.documentOverlayCache.saveOverlays(j,$.batchId,st)}))})).then((()=>({batchId:C.batchId,changes:SE(w)})))})(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),(function(f,m,y){let p=f.Vu[f.currentUser.toKey()];p||(p=new se(Vt)),p=p.insert(m,y),f.Vu[f.currentUser.toKey()]=p})(s,o.batchId,n),await Zl(s,o.changes),await Th(s.remoteStore)}catch(o){const u=Gm(o,"Failed to persist write");n.reject(u)}}async function r0(r,t){const n=bt(r);try{const s=await QR(n.localStore,t);t.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(Ht(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Ht(f.hu,14607):o.removedDocuments.size>0&&(Ht(f.hu,42227),f.hu=!1))})),await Zl(n,s,t)}catch(s){await oo(s)}}function Qv(r,t,n){const s=bt(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((u,f)=>{const m=f.view.va(t);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const y=bt(f);y.onlineState=m;let p=!1;y.queries.forEach(((E,w)=>{for(const C of w.Sa)C.va(m)&&(p=!0)})),p&&Qm(y)})(s.eventManager,t),o.length&&s.Pu.H_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function UI(r,t,n){const s=bt(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Au.get(t),u=o&&o.key;if(u){let f=new se(dt.comparator);f=f.insert(u,$e.newNoDocument(u,St.min()));const m=Mt().add(u),y=new yh(St.min(),new Map,new se(Vt),f,m);await r0(s,y),s.du=s.du.remove(u),s.Au.delete(t),Ym(s)}else await hm(s.localStore,t,!1).then((()=>mm(s,t,n))).catch(oo)}async function LI(r,t){const n=bt(r),s=t.batch.batchId;try{const o=await GR(n.localStore,t);a0(n,s,null),s0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Zl(n,o)}catch(o){await oo(o)}}async function zI(r,t,n){const s=bt(r);try{const o=await(function(f,m){const y=bt(f);return y.persistence.runTransaction("Reject batch","readwrite-primary",(p=>{let E;return y.mutationQueue.lookupMutationBatch(p,m).next((w=>(Ht(w!==null,37113),E=w.keys(),y.mutationQueue.removeMutationBatch(p,w)))).next((()=>y.mutationQueue.performConsistencyCheck(p))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(p,E,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,E))).next((()=>y.localDocuments.getDocuments(p,E)))}))})(s.localStore,t);a0(s,t,n),s0(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Zl(s,o)}catch(o){await oo(o)}}function s0(r,t){(r.mu.get(t)||[]).forEach((n=>{n.resolve()})),r.mu.delete(t)}function a0(r,t,n){const s=bt(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Vu[s.currentUser.toKey()]=o}}function mm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Iu.get(t))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach((s=>{r.Ru.containsKey(s)||o0(r,s)}))}function o0(r,t){r.Eu.delete(t.path.canonicalString());const n=r.du.get(t);n!==null&&(Bm(r.remoteStore,n),r.du=r.du.remove(t),r.Au.delete(n),Ym(r))}function Kv(r,t,n){for(const s of n)s instanceof e0?(r.Ru.addReference(s.key,t),BI(r,s)):s instanceof n0?(ot(Km,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,t),r.Ru.containsKey(s.key)||o0(r,s.key)):_t(19791,{wu:s})}function BI(r,t){const n=t.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(ot(Km,"New document in limbo: "+n),r.Eu.add(s),Ym(r))}function Ym(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const n=new dt(te.fromString(t)),s=r.fu.next();r.Au.set(s,new DI(n)),r.du=r.du.insert(n,s),XE(r.remoteStore,new Pr(hi(Om(n.path)),s,"TargetPurposeLimboResolution",hh.ce))}}async function Zl(r,t,n){const s=bt(r),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{f.push(s.pu(y,t,n).then((p=>{if((p||n)&&s.isPrimaryClient){const E=p?!p.fromCache:n?.targetChanges.get(y.targetId)?.current;s.sharedClientState.updateQueryState(y.targetId,E?"current":"not-current")}if(p){o.push(p);const E=Lm.As(y.targetId,p);u.push(E)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(y,p){const E=bt(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>Y.forEach(p,(C=>Y.forEach(C.Es,(j=>E.persistence.referenceDelegate.addReference(w,C.targetId,j))).next((()=>Y.forEach(C.ds,(j=>E.persistence.referenceDelegate.removeReference(w,C.targetId,j)))))))))}catch(w){if(!lo(w))throw w;ot(zm,"Failed to update sequence numbers: "+w)}for(const w of p){const C=w.targetId;if(!w.fromCache){const j=E.Ms.get(C),X=j.snapshotVersion,et=j.withLastLimboFreeSnapshotVersion(X);E.Ms=E.Ms.insert(C,et)}}})(s.localStore,u))}async function qI(r,t){const n=bt(r);if(!n.currentUser.isEqual(t)){ot(Km,"User change. New user:",t.toKey());const s=await GE(n.localStore,t);n.currentUser=t,(function(u,f){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new at(Q.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Zl(n,s.Ls)}}function jI(r,t){const n=bt(r),s=n.Au.get(t);if(s&&s.hu)return Mt().add(s.key);{let o=Mt();const u=n.Iu.get(t);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function l0(r){const t=bt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=r0.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=UI.bind(null,t),t.Pu.H_=bI.bind(null,t.eventManager),t.Pu.yu=wI.bind(null,t.eventManager),t}function HI(r){const t=bt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=LI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=zI.bind(null,t),t}class Jc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=_h(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return FR(this.persistence,new qR,t.initialUser,this.serializer)}Cu(t){return new FE(Um.mi,this.serializer)}Du(t){return new ZR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jc.provider={build:()=>new Jc};class FI extends Jc{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){Ht(this.persistence.referenceDelegate instanceof $c,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new RR(s,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new FE((s=>$c.mi(s,n)),this.serializer)}}class gm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qI.bind(null,this.syncEngine),await vI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new EI})()}createDatastore(t){const n=_h(t.databaseInfo.databaseId),s=(function(u){return new nI(u)})(t.databaseInfo);return(function(u,f,m,y){return new aI(u,f,m,y)})(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return(function(s,o,u,f,m){return new lI(s,o,u,f,m)})(this.localStore,this.datastore,t.asyncQueue,(n=>Qv(this.syncEngine,n,0)),(function(){return Bv.v()?new Bv:new JR})())}createSyncEngine(t,n){return(function(o,u,f,m,y,p,E){const w=new NI(o,u,f,m,y,p);return E&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=bt(n);ot(Us,"RemoteStore shutting down."),s.Ea.add(5),await $l(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}gm.provider={build:()=>new gm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Ji("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="FirestoreClient";class QI{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Xe.UNAUTHENTICATED,this.clientId=wm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{ot(Fr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(ot(Fr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Gm(n,"Failed to shutdown persistence");t.reject(s)}})),t.promise}}async function Hd(r,t){r.asyncQueue.verifyOperationInProgress(),ot(Fr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await GE(t.localStore,o),s=o)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function Yv(r,t){r.asyncQueue.verifyOperationInProgress();const n=await KI(r);ot(Fr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener((s=>jv(t.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>jv(t.remoteStore,o))),r._onlineComponents=t}async function KI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ot(Fr,"Using user provided OfflineComponentProvider");try{await Hd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;Za("Error using user provided cache. Falling back to memory cache: "+n),await Hd(r,new Jc)}}else ot(Fr,"Using default OfflineComponentProvider"),await Hd(r,new FI(void 0));return r._offlineComponents}async function u0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ot(Fr,"Using user provided OnlineComponentProvider"),await Yv(r,r._uninitializedComponentsProvider._online)):(ot(Fr,"Using default OnlineComponentProvider"),await Yv(r,new gm))),r._onlineComponents}function YI(r){return u0(r).then((t=>t.syncEngine))}async function Xv(r){const t=await u0(r),n=t.eventManager;return n.onListen=OI.bind(null,t.syncEngine),n.onUnlisten=PI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=VI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=xI.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="firestore.googleapis.com",Zv=!0;class Jv{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new at(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=h0,this.ssl=Zv}else this.host=t.host,this.ssl=t.ssl??Zv;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=HE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<bR)throw new at(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ow("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=c0(t.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new at(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new at(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new at(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Eh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new at(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new at(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Z1;switch(s.type){case"firstParty":return new ew(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new at(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=$v.get(n);s&&(ot("ComponentProvider","Removing Datastore"),$v.delete(n),s.terminate())})(this),Promise.resolve()}}function XI(r,t,n,s={}){r=Ms(r,Eh);const o=ro(t),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},m=`${t}:${n}`;o&&(kT(`https://${m}`),UT("Firestore",!0)),u.host!==h0&&u.host!==m&&Za("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!Lr(y,f)&&(r._setSettings(y),s.mockUserToken)){let p,E;if(typeof s.mockUserToken=="string")p=s.mockUserToken,E=Xe.MOCK_USER;else{p=Eb(s.mockUserToken,r._app?.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new at(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Xe(w)}r._authCredentials=new J1(new tE(p,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ti(this.firestore,t,this._query)}}class ce{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ce(this.firestore,t,this._key)}toJSON(){return{type:ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if(Ql(n,ce._jsonSchema))return new ce(t,s||null,new dt(te.fromString(n.referencePath)))}}ce._jsonSchemaVersion="firestore/documentReference/1.0",ce._jsonSchema={type:Ae("string",ce._jsonSchemaVersion),referencePath:Ae("string")};class mi extends Ti{constructor(t,n,s){super(t,n,Om(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ce(this.firestore,null,new dt(t))}withConverter(t){return new mi(this.firestore,t,this._path)}}function $I(r,t,...n){if(r=ge(r),eE("collection","path",t),r instanceof Eh){const s=te.fromString(t,...n);return cv(s),new mi(r,null,s)}{if(!(r instanceof ce||r instanceof mi))throw new at(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(te.fromString(t,...n));return cv(s),new mi(r.firestore,null,s)}}function Xm(r,t,...n){if(r=ge(r),arguments.length===1&&(t=wm.newId()),eE("doc","path",t),r instanceof Eh){const s=te.fromString(t,...n);return uv(s),new ce(r,null,new dt(s))}{if(!(r instanceof ce||r instanceof mi))throw new at(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(te.fromString(t,...n));return uv(s),new ce(r.firestore,r instanceof mi?r.converter:null,new dt(s))}}function ZI(r,t){return r=ge(r),t=ge(t),(r instanceof ce||r instanceof mi)&&(t instanceof ce||t instanceof mi)&&r.firestore===t.firestore&&r.path===t.path&&r.converter===t.converter}function JI(r,t){return r=ge(r),t=ge(t),r instanceof Ti&&t instanceof Ti&&r.firestore===t.firestore&&Kl(r._query,t._query)&&r.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="AsyncQueue";class tT{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new KE(this,"async_queue_retry"),this._c=()=>{const s=jd();s&&ot(Wv,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const n=jd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=jd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Vs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!lo(t))throw t;ot(Wv,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,Ji("INTERNAL UNHANDLED ERROR: ",eT(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(t,n,s){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const o=Fm.createAndSchedule(this,t,n,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&_t(47125,{Pc:eT(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function eT(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(r,["next","error","complete"])}class Hl extends Eh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new tT,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new tT(t),this._firestoreClient=void 0,await t}}}function WI(r,t){const n=typeof r=="object"?r:Sm(),s=typeof r=="string"?r:Fc,o=Hs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=vb("firestore");u&&XI(o,...u)}return o}function f0(r){if(r._terminated)throw new at(Q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||tC(r),r._firestoreClient}function tC(r){const t=r._freezeSettings(),n=(function(o,u,f,m){return new _w(o,u,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,c0(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new QI(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vn(Fe.fromBase64String(t))}catch(n){throw new at(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Vn(Fe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Ql(t,Vn._jsonSchema))return Vn.fromBase64String(t.bytes)}}Vn._jsonSchemaVersion="firestore/bytes/1.0",Vn._jsonSchema={type:Ae("string",Vn._jsonSchemaVersion),bytes:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new at(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new at(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new at(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Vt(this._lat,t._lat)||Vt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gi._jsonSchemaVersion}}static fromJSON(t){if(Ql(t,gi._jsonSchema))return new gi(t.latitude,t.longitude)}}gi._jsonSchemaVersion="firestore/geoPoint/1.0",gi._jsonSchema={type:Ae("string",gi._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:pi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Ql(t,pi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new pi(t.vectorValues);throw new at(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pi._jsonSchemaVersion="firestore/vectorValue/1.0",pi._jsonSchema={type:Ae("string",pi._jsonSchemaVersion),vectorValues:Ae("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=/^__.*__$/;class nC{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Qs(t,this.data,this.fieldMask,n,this.fieldTransforms):new Yl(t,this.data,n,this.fieldTransforms)}}function d0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _t(40011,{Ac:r})}}class Jm{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Jm({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.gc(t),s}yc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Wc(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(d0(this.Ac)&&eC.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class iC{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||_h(t)}Cc(t,n,s,o=!1){return new Jm({Ac:t,methodName:n,Dc:s,path:He.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wm(r){const t=r._freezeSettings(),n=_h(r._databaseId);return new iC(r._databaseId,!!t.ignoreUndefinedProperties,n)}function m0(r,t,n,s,o,u={}){const f=r.Cc(u.merge||u.mergeFields?2:0,t,n,o);y0("Data must be an object, but it was:",f,s);const m=g0(s,f);let y,p;if(u.merge)y=new qn(f.fieldMask),p=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const w of u.mergeFields){const C=sC(t,w,n);if(!f.contains(C))throw new at(Q.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);oC(E,C)||E.push(C)}y=new qn(E),p=f.fieldTransforms.filter((w=>y.covers(w.field)))}else y=null,p=f.fieldTransforms;return new nC(new On(m),y,p)}class tg extends Zm{_toFieldTransform(t){return new Fw(t.path,new Bl)}isEqual(t){return t instanceof tg}}function rC(r,t,n,s=!1){return eg(n,r.Cc(s?4:3,t))}function eg(r,t){if(p0(r=ge(r)))return y0("Unsupported field value:",t,r),g0(r,t);if(r instanceof Zm)return(function(s,o){if(!d0(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let f=0;for(const m of s){let y=eg(m,o.wc(f));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),f++}return{arrayValue:{values:u}}})(r,t)}return(function(s,o){if((s=ge(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return qw(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ee.fromDate(s);return{timestampValue:Xc(o.serializer,u)}}if(s instanceof ee){const u=new ee(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Xc(o.serializer,u)}}if(s instanceof gi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Vn)return{bytesValue:kE(o.serializer,s._byteString)};if(s instanceof ce){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:xm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof pi)return(function(f,m){return{mapValue:{fields:{[cE]:{stringValue:hE},[Gc]:{arrayValue:{values:f.toArray().map((p=>{if(typeof p!="number")throw m.Sc("VectorValues must only contain numeric values.");return Vm(m.serializer,p)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${ch(s)}`)})(r,t)}function g0(r,t){const n={};return rE(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Fs(r,((s,o)=>{const u=eg(o,t.mc(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function p0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ee||r instanceof gi||r instanceof Vn||r instanceof ce||r instanceof Zm||r instanceof pi)}function y0(r,t,n){if(!p0(n)||!nE(n)){const s=ch(n);throw s==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+s)}}function sC(r,t,n){if((t=ge(t))instanceof $m)return t._internalPath;if(typeof t=="string")return _0(r,t);throw Wc("Field path arguments must be of type string or ",r,!1,void 0,n)}const aC=new RegExp("[~\\*/\\[\\]]");function _0(r,t,n){if(t.search(aC)>=0)throw Wc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new $m(...t.split("."))._internalPath}catch{throw Wc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Wc(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||f)&&(y+=" (found",u&&(y+=` in field ${s}`),f&&(y+=` in document ${o}`),y+=")"),new at(Q.INVALID_ARGUMENT,m+r+y)}function oC(r,t){return r.some((n=>n.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new lC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ng("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lC extends v0{data(){return super.data()}}function ng(r,t){return typeof t=="string"?_0(r,t):t instanceof $m?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new at(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ig{}class rg extends ig{}function cC(r,t,...n){let s=[];t instanceof ig&&s.push(t),s=s.concat(n),(function(u){const f=u.filter((y=>y instanceof ag)).length,m=u.filter((y=>y instanceof sg)).length;if(f>1||f>0&&m>0)throw new at(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class sg extends rg{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new sg(t,n,s)}_apply(t){const n=this._parse(t);return T0(t._query,n),new Ti(t.firestore,t.converter,am(t._query,n))}_parse(t){const n=Wm(t.firestore);return(function(u,f,m,y,p,E,w){let C;if(p.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new at(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){rT(w,E);const X=[];for(const et of w)X.push(iT(y,u,et));C={arrayValue:{values:X}}}else C=iT(y,u,w)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||rT(w,E),C=rC(m,f,w,E==="in"||E==="not-in");return Ee.create(p,E,C)})(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class ag extends ig{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new ag(t,n)}_parse(t){const n=this._queryConstraints.map((s=>s._parse(t))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:Gn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:((function(o,u){let f=o;const m=u.getFlattenedFilters();for(const y of m)T0(f,y),f=am(f,y)})(t._query,n),new Ti(t.firestore,t.converter,am(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class og extends rg{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new og(t,n)}_apply(t){const n=(function(o,u,f){if(o.startAt!==null)throw new at(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new at(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zl(u,f)})(t._query,this._field,this._direction);return new Ti(t.firestore,t.converter,(function(o,u){const f=o.explicitOrderBy.concat([u]);return new uo(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(t._query,n))}}function hC(r,t="asc"){const n=t,s=ng("orderBy",r);return og._create(s,n)}class lg extends rg{constructor(t,n,s){super(),this.type=t,this._limit=n,this._limitType=s}static _create(t,n,s){return new lg(t,n,s)}_apply(t){return new Ti(t.firestore,t.converter,Kc(t._query,this._limit,this._limitType))}}function fC(r){return lg._create("limit",r,"F")}function iT(r,t,n){if(typeof(n=ge(n))=="string"){if(n==="")throw new at(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vE(t)&&n.indexOf("/")!==-1)throw new at(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(te.fromString(n));if(!dt.isDocumentKey(s))throw new at(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return _v(r,new dt(s))}if(n instanceof ce)return _v(r,n._key);throw new at(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ch(n)}.`)}function rT(r,t){if(!Array.isArray(r)||r.length===0)throw new at(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function T0(r,t){const n=(function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(n!==null)throw n===t.op?new at(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new at(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class dC{convertValue(t,n="none"){switch(jr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return me(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw _t(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Fs(t,((o,u)=>{s[o]=this.convertValue(u,n)})),s}convertVectorValue(t){const n=t.fields?.[Gc].arrayValue?.values?.map((s=>me(s.doubleValue)));return new pi(n)}convertGeoPoint(t){return new gi(me(t.latitude),me(t.longitude))}convertArray(t,n){return(t.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const s=dh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(kl(t));default:return null}}convertTimestamp(t){const n=Br(t);return new ee(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=te.fromString(t);Ht(jE(s),9688,{name:t});const o=new Ul(s.get(1),s.get(3)),u=new dt(s.popFirst(5));return o.isEqual(n)||Ji(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(r,t,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t,s}class Rl{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ps extends v0{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new kc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(ng("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new at(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Ps._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ps._jsonSchema={type:Ae("string",Ps._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class kc extends Ps{data(t={}){return super.data(t)}}class Ka{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Rl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((s=>{t.call(n,new kc(this._firestore,this._userDataWriter,s.key,s,new Rl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new at(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const y=new kc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Rl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new kc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Rl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let p=-1,E=-1;return m.type!==0&&(p=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:mC(m.type),doc:y,oldIndex:p,newIndex:E}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new at(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ka._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=wm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function mC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _t(61501,{type:r})}}Ka._jsonSchemaVersion="firestore/querySnapshot/1.0",Ka._jsonSchema={type:Ae("string",Ka._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class A0 extends dC{constructor(t){super(),this.firestore=t}convertBytes(t){return new Vn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ce(this.firestore,null,n)}}function gC(r,t,n){r=Ms(r,ce);const s=Ms(r.firestore,Hl),o=E0(r.converter,t,n);return S0(s,[m0(Wm(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,fi.none())])}function pC(r,t){const n=Ms(r.firestore,Hl),s=Xm(r),o=E0(r.converter,t);return S0(n,[m0(Wm(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,fi.exists(!1))]).then((()=>s))}function pm(r,...t){r=ge(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof t[s]!="object"||nT(t[s])||(n=t[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(nT(t[s])){const y=t[s];t[s]=y.next?.bind(y),t[s+1]=y.error?.bind(y),t[s+2]=y.complete?.bind(y)}let u,f,m;if(r instanceof ce)f=Ms(r.firestore,Hl),m=Om(r._key.path),u={next:y=>{t[s]&&t[s](yC(f,r,y))},error:t[s+1],complete:t[s+2]};else{const y=Ms(r,Ti);f=Ms(y.firestore,Hl),m=y._query;const p=new A0(f);u={next:E=>{t[s]&&t[s](new Ka(f,p,y,E))},error:t[s+1],complete:t[s+2]},uC(r._query)}return(function(p,E,w,C){const j=new GI(C),X=new RI(E,j,w);return p.asyncQueue.enqueueAndForget((async()=>AI(await Xv(p),X))),()=>{j.Nu(),p.asyncQueue.enqueueAndForget((async()=>SI(await Xv(p),X)))}})(f0(f),m,o,u)}function S0(r,t){return(function(s,o){const u=new Vs;return s.asyncQueue.enqueueAndForget((async()=>kI(await YI(s),o,u))),u.promise})(f0(r),t)}function yC(r,t,n){const s=n.docs.get(t._key),o=new A0(r);return new Ps(r,o,t._key,s,new Rl(n.hasPendingWrites,n.fromCache),t.converter)}function b0(){return new tg("serverTimestamp")}(function(t,n=!0){(function(o){ao=o})(so),_i(new Fn("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Hl(new W1(s.getProvider("auth-internal")),new nw(f,s.getProvider("app-check-internal")),(function(p,E){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new at(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ul(p.options.projectId,E)})(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Mn(sv,av,t),Mn(sv,av,"esm2020")})();function w0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _C=w0,R0=new js("auth","Firebase",w0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new uh("@firebase/auth");function vC(r,...t){th.logLevel<=Ot.WARN&&th.warn(`Auth (${so}): ${r}`,...t)}function Uc(r,...t){th.logLevel<=Ot.ERROR&&th.error(`Auth (${so}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(r,...t){throw cg(r,...t)}function Hn(r,...t){return cg(r,...t)}function ug(r,t,n){const s={..._C(),[t]:n};return new js("auth","Firebase",s).create(t,{appName:r.name})}function xs(r){return ug(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function TC(r,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&Ei(r,"argument-error"),ug(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cg(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return R0.create(r,...t)}function Et(r,t,...n){if(!r)throw cg(t,...n)}function Xi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Uc(t),new Error(t)}function tr(r,t){r||Xi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(){return typeof self<"u"&&self.location?.href||""}function EC(){return sT()==="http:"||sT()==="https:"}function sT(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EC()||LT()||"connection"in navigator)?navigator.onLine:!0}function SC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,n){this.shortDelay=t,this.longDelay=n,tr(n>t,"Short delay should be less than long delay!"),this.isMobile=bb()||Ib()}get(){return AC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(r,t){tr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],RC=new Jl(3e4,6e4);function fg(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function ho(r,t,n,s,o={}){return C0(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const m=Gl({key:r.config.apiKey,...f}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const p={method:t,headers:y,...u};return Rb()||(p.referrerPolicy="no-referrer"),r.emulatorConfig&&ro(r.emulatorConfig.host)&&(p.credentials="include"),I0.fetch()(await D0(r,r.config.apiHost,n,m),p)})}async function C0(r,t,n){r._canInitEmulator=!1;const s={...bC,...t};try{const o=new CC(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Nc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[y,p]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nc(r,"credential-already-in-use",f);if(y==="EMAIL_EXISTS")throw Nc(r,"email-already-in-use",f);if(y==="USER_DISABLED")throw Nc(r,"user-disabled",f);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw ug(r,E,p);Ei(r,E)}}catch(o){if(o instanceof Qn)throw o;Ei(r,"network-request-failed",{message:String(o)})}}async function IC(r,t,n,s,o={}){const u=await ho(r,t,n,s,o);return"mfaPendingCredential"in u&&Ei(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function D0(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?hg(r.config,o):`${r.config.apiScheme}://${o}`;return wC.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}class CC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Hn(this.auth,"network-request-failed")),RC.get())})}}function Nc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Hn(r,t,s);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(r,t){return ho(r,"POST","/v1/accounts:delete",t)}async function eh(r,t){return ho(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function NC(r,t=!1){const n=ge(r),s=await n.getIdToken(t),o=dg(s);Et(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:Vl(Fd(o.auth_time)),issuedAtTime:Vl(Fd(o.iat)),expirationTime:Vl(Fd(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Fd(r){return Number(r)*1e3}function dg(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Uc("JWT malformed, contained fewer than 3 sections"),null;try{const o=VT(n);return o?JSON.parse(o):(Uc("Failed to decode base64 JWT payload"),null)}catch(o){return Uc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function aT(r){const t=dg(r);return Et(t,"internal-error"),Et(typeof t.exp<"u","internal-error"),Et(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Qn&&OC(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function OC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vl(this.lastLoginAt),this.creationTime=Vl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nh(r){const t=r.auth,n=await r.getIdToken(),s=await Fl(r,eh(t,{idToken:n}));Et(s?.users.length,t,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=o.providerUserInfo?.length?N0(o.providerUserInfo):[],f=PC(r.providerData,u),m=r.isAnonymous,y=!(r.email&&o.passwordHash)&&!f?.length,p=m?y:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new _m(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(r,E)}async function MC(r){const t=ge(r);await nh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function PC(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function N0(r){return r.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(r,t){const n=await C0(r,{},async()=>{const s=Gl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await D0(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return r.emulatorConfig&&ro(r.emulatorConfig.host)&&(y.credentials="include"),I0.fetch()(f,y)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kC(r,t){return ho(r,"POST","/v2/accounts:revokeToken",fg(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Et(t.idToken,"internal-error"),Et(typeof t.idToken<"u","internal-error"),Et(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):aT(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Et(t.length!==0,"internal-error");const n=aT(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Et(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await xC(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Ya;return s&&(Et(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(Et(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(Et(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ya,this.toJSON())}_performRefresh(){return Xi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(r,t){Et(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class jn{constructor({uid:t,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new VC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new _m(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Fl(this,this.stsTokenManager.getToken(this.auth,t));return Et(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return NC(this,t)}reload(){return MC(this)}_assign(t){this!==t&&(Et(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new jn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){Et(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await nh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bn(this.auth.app))return Promise.reject(xs(this.auth));const t=await this.getIdToken();return await Fl(this,DC(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,y=n._redirectEventId??void 0,p=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:w,emailVerified:C,isAnonymous:j,providerData:X,stsTokenManager:et}=n;Et(w&&et,t,"internal-error");const $=Ya.fromJSON(this.name,et);Et(typeof w=="string",t,"internal-error"),Nr(s,t.name),Nr(o,t.name),Et(typeof C=="boolean",t,"internal-error"),Et(typeof j=="boolean",t,"internal-error"),Nr(u,t.name),Nr(f,t.name),Nr(m,t.name),Nr(y,t.name),Nr(p,t.name),Nr(E,t.name);const st=new jn({uid:w,auth:t,email:o,emailVerified:C,displayName:s,isAnonymous:j,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:$,createdAt:p,lastLoginAt:E});return X&&Array.isArray(X)&&(st.providerData=X.map(ut=>({...ut}))),y&&(st._redirectEventId=y),st}static async _fromIdTokenResponse(t,n,s=!1){const o=new Ya;o.updateFromServerResponse(n);const u=new jn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await nh(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];Et(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?N0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,m=new Ya;m.updateFromIdToken(s);const y=new jn({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:f}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new _m(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(y,p),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=new Map;function $i(r){tr(r instanceof Function,"Expected a class definition");let t=oT.get(r);return t?(tr(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,oT.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}O0.type="NONE";const lT=O0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(r,t,n){return`firebase:${r}:${t}:${n}`}class Xa{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Lc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Lc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await eh(this.auth,{idToken:t}).catch(()=>{});return n?jn._fromGetAccountInfoResponse(this.auth,n,t):null}return jn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Xa($i(lT),t,s);const o=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let u=o[0]||$i(lT);const f=Lc(s,t.config.apiKey,t.name);let m=null;for(const p of n)try{const E=await p._get(f);if(E){let w;if(typeof E=="string"){const C=await eh(t,{idToken:E}).catch(()=>{});if(!C)break;w=await jn._fromGetAccountInfoResponse(t,C,E)}else w=jn._fromJSON(t,E);p!==u&&(m=w),u=p;break}}catch{}const y=o.filter(p=>p._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new Xa(u,t,s):(u=y[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async p=>{if(p!==u)try{await p._remove(f)}catch{}})),new Xa(u,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(x0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(V0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(U0(t))return"Blackberry";if(L0(t))return"Webos";if(M0(t))return"Safari";if((t.includes("chrome/")||P0(t))&&!t.includes("edge/"))return"Chrome";if(k0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function V0(r=Ze()){return/firefox\//i.test(r)}function M0(r=Ze()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function P0(r=Ze()){return/crios\//i.test(r)}function x0(r=Ze()){return/iemobile/i.test(r)}function k0(r=Ze()){return/android/i.test(r)}function U0(r=Ze()){return/blackberry/i.test(r)}function L0(r=Ze()){return/webos/i.test(r)}function mg(r=Ze()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function UC(r=Ze()){return mg(r)&&!!window.navigator?.standalone}function LC(){return Cb()&&document.documentMode===10}function z0(r=Ze()){return mg(r)||k0(r)||L0(r)||U0(r)||/windows phone/i.test(r)||x0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(r,t=[]){let n;switch(r){case"Browser":n=uT(Ze());break;case"Worker":n=`${uT(Ze())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${so}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,m)=>{try{const y=t(u);f(y)}catch(y){m(y)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(r,t={}){return ho(r,"GET","/v2/passwordPolicy",fg(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=6;class jC{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??qC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cT(this),this.idTokenSubscription=new cT(this),this.beforeStateQueue=new zC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=R0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=$i(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Xa.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await eh(this,{idToken:t}),s=await jn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Bn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,f=s?._redirectEventId,m=await this.tryRedirectSignIn(t);(!u||u===f)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Et(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await nh(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=SC()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Bn(this.app))return Promise.reject(xs(this));const n=t?ge(t):null;return n&&Et(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Et(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Bn(this.app)?Promise.reject(xs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Bn(this.app)?Promise.reject(xs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($i(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await BC(this),n=new jC(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new js("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await kC(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&$i(t)||this._popupRedirectResolver;Et(n,this,"argument-error"),this.redirectPersistenceManager=await Xa.create(this,[$i(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Et(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const y=t.addObserver(n,s,o);return()=>{f=!0,y()}}else{const y=t.addObserver(n);return()=>{f=!0,y()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Et(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=B0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(Bn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&vC(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ah(r){return ge(r)}class cT{constructor(t){this.auth=t,this.observer=null,this.addObserver=xb(n=>this.observer=n)}get next(){return Et(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FC(r){gg=r}function GC(r){return gg.loadJS(r)}function QC(){return gg.gapiScript}function KC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(r,t){const n=Hs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Lr(u,t??{}))return o;Ei(o,"already-initialized")}return n.initialize({options:t})}function XC(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map($i);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function $C(r,t,n){const s=Ah(r);Et(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=q0(t),{host:f,port:m}=ZC(t),y=m===null?"":`:${m}`,p={url:`${u}//${f}${y}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Et(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Et(Lr(p,s.config.emulator)&&Lr(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=p,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,ro(f)?(kT(`${u}//${f}${y}`),UT("Auth",!0)):JC()}function q0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function ZC(r){const t=q0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:hT(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:hT(f)}}}function hT(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function JC(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Xi("not implemented")}_getIdTokenResponse(t){return Xi("not implemented")}_linkToIdToken(t,n){return Xi("not implemented")}_getReauthenticationResolver(t){return Xi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(r,t){return IC(r,"POST","/v1/accounts:signInWithIdp",fg(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="http://localhost";class Ls extends j0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ls(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ei("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new Ls(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return $a(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,$a(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,$a(t,n)}buildRequest(){const t={requestUri:WC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Gl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends pg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Wl{constructor(){super("facebook.com")}static credential(t){return Ls._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Or.credentialFromTaggedObject(t)}static credentialFromError(t){return Or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Or.credential(t.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends Wl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ls._fromParams({providerId:Yi.PROVIDER_ID,signInMethod:Yi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Yi.credentialFromTaggedObject(t)}static credentialFromError(t){return Yi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Yi.credential(n,s)}catch{return null}}}Yi.GOOGLE_SIGN_IN_METHOD="google.com";Yi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Wl{constructor(){super("github.com")}static credential(t){return Ls._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vr.credentialFromTaggedObject(t)}static credentialFromError(t){return Vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vr.credential(t.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Wl{constructor(){super("twitter.com")}static credential(t,n){return Ls._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Mr.credentialFromTaggedObject(t)}static credentialFromError(t){return Mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Mr.credential(n,s)}catch{return null}}}Mr.TWITTER_SIGN_IN_METHOD="twitter.com";Mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await jn._fromIdTokenResponse(t,s,o),f=fT(s);return new io({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=fT(s);return new io({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function fT(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih extends Qn{constructor(t,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ih.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new ih(t,n,s,o)}}function H0(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ih._fromErrorAndOperation(r,u,t,s):u})}async function t2(r,t,n=!1){const s=await Fl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return io._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e2(r,t,n=!1){const{auth:s}=r;if(Bn(s.app))return Promise.reject(xs(s));const o="reauthenticate";try{const u=await Fl(r,H0(s,o,t,r),n);Et(u.idToken,s,"internal-error");const f=dg(u.idToken);Et(f,s,"internal-error");const{sub:m}=f;return Et(r.uid===m,s,"user-mismatch"),io._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Ei(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(r,t,n=!1){if(Bn(r.app))return Promise.reject(xs(r));const s="signIn",o=await H0(r,s,t),u=await io._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}function i2(r,t,n,s){return ge(r).onIdTokenChanged(t,n,s)}function r2(r,t,n){return ge(r).beforeAuthStateChanged(t,n)}function s2(r,t,n,s){return ge(r).onAuthStateChanged(t,n,s)}function a2(r){return ge(r).signOut()}const rh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rh,"1"),this.storage.removeItem(rh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=1e3,l2=10;class G0 extends F0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=z0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,m,y)=>{this.notifyListeners(f,y)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);LC()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,l2):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},o2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}G0.type="LOCAL";const u2=G0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0 extends F0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Q0.type="SESSION";const K0=Q0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new Sh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async p=>p(n.origin,u)),y=await c2(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,y)=>{const p=yg("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(w){const C=w;if(C.data.eventId===p)switch(C.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(){return window}function f2(r){yi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(){return typeof yi().WorkerGlobalScope<"u"&&typeof yi().importScripts=="function"}async function d2(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function m2(){return navigator?.serviceWorker?.controller||null}function g2(){return Y0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="firebaseLocalStorageDb",p2=1,sh="firebaseLocalStorage",$0="fbase_key";class tu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bh(r,t){return r.transaction([sh],t?"readwrite":"readonly").objectStore(sh)}function y2(){const r=indexedDB.deleteDatabase(X0);return new tu(r).toPromise()}function vm(){const r=indexedDB.open(X0,p2);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(sh,{keyPath:$0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(sh)?t(s):(s.close(),await y2(),t(await vm()))})})}async function dT(r,t,n){const s=bh(r,!0).put({[$0]:t,value:n});return new tu(s).toPromise()}async function _2(r,t){const n=bh(r,!1).get(t),s=await new tu(n).toPromise();return s===void 0?null:s.value}function mT(r,t){const n=bh(r,!0).delete(t);return new tu(n).toPromise()}const v2=800,T2=3;class Z0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>T2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Y0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sh._getInstance(g2()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await d2(),!this.activeServiceWorker)return;this.sender=new h2(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||m2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await vm();return await dT(t,rh,"1"),await mT(t,rh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>dT(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>_2(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>mT(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=bh(o,!1).getAll();return new tu(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),v2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Z0.type="LOCAL";const E2=Z0;new Jl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(r,t){return t?$i(t):(Et(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g extends j0{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $a(t,this._buildIdpRequest())}_linkToIdToken(t,n){return $a(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return $a(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function A2(r){return n2(r.auth,new _g(r),r.bypassAuthState)}function S2(r){const{auth:t,user:n}=r;return Et(n,t,"internal-error"),e2(n,new _g(r),r.bypassAuthState)}async function b2(r){const{auth:t,user:n}=r;return Et(n,t,"internal-error"),t2(n,new _g(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=t;if(f){this.reject(f);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return A2;case"linkViaPopup":case"linkViaRedirect":return b2;case"reauthViaPopup":case"reauthViaRedirect":return S2;default:Ei(this.auth,"internal-error")}}resolve(t){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=new Jl(2e3,1e4);async function R2(r,t,n){if(Bn(r.app))return Promise.reject(Hn(r,"operation-not-supported-in-this-environment"));const s=Ah(r);TC(r,t,pg);const o=J0(s,n);return new Ns(s,"signInViaPopup",t,o).executeNotNull()}class Ns extends W0{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Et(t,this.auth,"internal-error"),t}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const t=yg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,w2.get())};t()}}Ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2="pendingRedirect",zc=new Map;class C2 extends W0{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=zc.get(this.auth._key());if(!t){try{const s=await D2(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}zc.set(this.auth._key(),t)}return this.bypassAuthState||zc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function D2(r,t){const n=V2(t),s=O2(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function N2(r,t){zc.set(r._key(),t)}function O2(r){return $i(r._redirectPersistence)}function V2(r){return Lc(I2,r.config.apiKey,r.name)}async function M2(r,t,n=!1){if(Bn(r.app))return Promise.reject(xs(r));const s=Ah(r),o=J0(s,t),f=await new C2(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=600*1e3;class x2{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!k2(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!tA(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";n.onError(Hn(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=P2&&this.cachedEventUids.clear(),this.cachedEventUids.has(gT(t))}saveEventToCache(t){this.cachedEventUids.add(gT(t)),this.lastProcessedEventTime=Date.now()}}function gT(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function tA({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function k2(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tA(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(r,t={}){return ho(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,z2=/^https?/;async function B2(r){if(r.config.emulator)return;const{authorizedDomains:t}=await U2(r);for(const n of t)try{if(q2(n))return}catch{}Ei(r,"unauthorized-domain")}function q2(r){const t=ym(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!z2.test(n))return!1;if(L2.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2=new Jl(3e4,6e4);function pT(){const r=yi().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function H2(r){return new Promise((t,n)=>{function s(){pT(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{pT(),n(Hn(r,"network-request-failed"))},timeout:j2.get()})}if(yi().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(yi().gapi?.load)s();else{const o=KC("iframefcb");return yi()[o]=()=>{gapi.load?s():n(Hn(r,"network-request-failed"))},GC(`${QC()}?onload=${o}`).catch(u=>n(u))}}).catch(t=>{throw Bc=null,t})}let Bc=null;function F2(r){return Bc=Bc||H2(r),Bc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=new Jl(5e3,15e3),Q2="__/auth/iframe",K2="emulator/auth/iframe",Y2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},X2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $2(r){const t=r.config;Et(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?hg(t,K2):`https://${r.config.authDomain}/${Q2}`,s={apiKey:t.apiKey,appName:r.name,v:so},o=X2.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Gl(s).slice(1)}`}async function Z2(r){const t=await F2(r),n=yi().gapi;return Et(n,r,"internal-error"),t.open({where:document.body,url:$2(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Y2,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Hn(r,"network-request-failed"),m=yi().setTimeout(()=>{u(f)},G2.get());function y(){yi().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W2=500,tD=600,eD="_blank",nD="http://localhost";class yT{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iD(r,t,n,s=W2,o=tD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...J2,width:s.toString(),height:o.toString(),top:u,left:f},p=Ze().toLowerCase();n&&(m=P0(p)?eD:n),V0(p)&&(t=t||nD,y.scrollbars="yes");const E=Object.entries(y).reduce((C,[j,X])=>`${C}${j}=${X},`,"");if(UC(p)&&m!=="_self")return rD(t||"",m),new yT(null);const w=window.open(t||"",m,E);Et(w,r,"popup-blocked");try{w.focus()}catch{}return new yT(w)}function rD(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD="__/auth/handler",aD="emulator/auth/handler",oD=encodeURIComponent("fac");async function _T(r,t,n,s,o,u){Et(r.config.authDomain,r,"auth-domain-config-required"),Et(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:so,eventId:o};if(t instanceof pg){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",Pb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,w]of Object.entries({}))f[E]=w}if(t instanceof Wl){const E=t.getScopes().filter(w=>w!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const y=await r._getAppCheckToken(),p=y?`#${oD}=${encodeURIComponent(y)}`:"";return`${lD(r)}?${Gl(m).slice(1)}${p}`}function lD({config:r}){return r.emulator?hg(r,aD):`https://${r.authDomain}/${sD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="webStorageSupport";class uD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=K0,this._completeRedirectFn=M2,this._overrideRedirectResult=N2}async _openPopup(t,n,s,o){tr(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const u=await _T(t,n,s,ym(),o);return iD(t,u,yg())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await _T(t,n,s,ym(),o);return f2(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(tr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await Z2(t),s=new x2(t);return n.register("authEvent",o=>(Et(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Gd,{type:Gd},o=>{const u=o?.[0]?.[Gd];u!==void 0&&n(!!u),Ei(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=B2(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return z0()||M0()||mg()}}const cD=uD;var vT="@firebase/auth",TT="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Et(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dD(r){_i(new Fn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;Et(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:B0(r)},p=new HC(s,o,u,y);return XC(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),_i(new Fn("auth-internal",t=>{const n=Ah(t.getProvider("auth").getImmediate());return(s=>new hD(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(vT,TT,fD(r)),Mn(vT,TT,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=300,gD=xT("authIdTokenMaxAge")||mD;let ET=null;const pD=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>gD)return;const o=n?.token;ET!==o&&(ET=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function yD(r=Sm()){const t=Hs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=YC(r,{popupRedirectResolver:cD,persistence:[E2,u2,K0]}),s=xT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=pD(u.toString());r2(n,f,()=>f(n.currentUser)),i2(n,m=>f(m))}}const o=MT("auth");return o&&$C(n,`http://${o}`),n}function _D(){return document.getElementsByTagName("head")?.[0]??document}FC({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=Hn("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",_D().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dD("Browser");const eA="@firebase/installations",vg="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=1e4,iA=`w:${vg}`,rA="FIS_v2",vD="https://firebaseinstallations.googleapis.com/v1",TD=3600*1e3,ED="installations",AD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},zs=new js(ED,AD,SD);function sA(r){return r instanceof Qn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA({projectId:r}){return`${vD}/projects/${r}/installations`}function oA(r){return{token:r.token,requestStatus:2,expiresIn:wD(r.expiresIn),creationTime:Date.now()}}async function lA(r,t){const s=(await t.json()).error;return zs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function uA({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function bD(r,{refreshToken:t}){const n=uA(r);return n.append("Authorization",RD(t)),n}async function cA(r){const t=await r();return t.status>=500&&t.status<600?r():t}function wD(r){return Number(r.replace("s","000"))}function RD(r){return`${rA} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ID({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=aA(r),o=uA(r),u=t.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={fid:n,authVersion:rA,appId:r.appId,sdkVersion:iA},m={method:"POST",headers:o,body:JSON.stringify(f)},y=await cA(()=>fetch(s,m));if(y.ok){const p=await y.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:oA(p.authToken)}}else throw await lA("Create Installation",y)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=/^[cdef][\w-]{21}$/,Tm="";function ND(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=OD(r);return DD.test(n)?n:Tm}catch{return Tm}}function OD(r){return CD(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=new Map;function dA(r,t){const n=wh(r);mA(n,t),VD(n,t)}function mA(r,t){const n=fA.get(r);if(n)for(const s of n)s(t)}function VD(r,t){const n=MD();n&&n.postMessage({key:r,fid:t}),PD()}let Os=null;function MD(){return!Os&&"BroadcastChannel"in self&&(Os=new BroadcastChannel("[Firebase] FID Change"),Os.onmessage=r=>{mA(r.data.key,r.data.fid)}),Os}function PD(){fA.size===0&&Os&&(Os.close(),Os=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD="firebase-installations-database",kD=1,Bs="firebase-installations-store";let Qd=null;function Tg(){return Qd||(Qd=HT(xD,kD,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Bs)}}})),Qd}async function ah(r,t){const n=wh(r),o=(await Tg()).transaction(Bs,"readwrite"),u=o.objectStore(Bs),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&dA(r,t.fid),t}async function gA(r){const t=wh(r),s=(await Tg()).transaction(Bs,"readwrite");await s.objectStore(Bs).delete(t),await s.done}async function Rh(r,t){const n=wh(r),o=(await Tg()).transaction(Bs,"readwrite"),u=o.objectStore(Bs),f=await u.get(n),m=t(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&dA(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(r){let t;const n=await Rh(r.appConfig,s=>{const o=UD(s),u=LD(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===Tm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function UD(r){const t=r||{fid:ND(),registrationStatus:0};return pA(t)}function LD(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(zs.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=zD(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:BD(r)}:{installationEntry:t}}async function zD(r,t){try{const n=await ID(r,t);return ah(r.appConfig,n)}catch(n){throw sA(n)&&n.customData.serverCode===409?await gA(r.appConfig):await ah(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function BD(r){let t=await AT(r.appConfig);for(;t.registrationStatus===1;)await hA(100),t=await AT(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Eg(r);return s||n}return t}function AT(r){return Rh(r,t=>{if(!t)throw zs.create("installation-not-found");return pA(t)})}function pA(r){return qD(r)?{fid:r.fid,registrationStatus:0}:r}function qD(r){return r.registrationStatus===1&&r.registrationTime+nA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD({appConfig:r,heartbeatServiceProvider:t},n){const s=HD(r,n),o=bD(r,n),u=t.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={installation:{sdkVersion:iA,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},y=await cA(()=>fetch(s,m));if(y.ok){const p=await y.json();return oA(p)}else throw await lA("Generate Auth Token",y)}function HD(r,{fid:t}){return`${aA(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(r,t=!1){let n;const s=await Rh(r.appConfig,u=>{if(!yA(u))throw zs.create("not-registered");const f=u.authToken;if(!t&&QD(f))return u;if(f.requestStatus===1)return n=FD(r,t),u;{if(!navigator.onLine)throw zs.create("app-offline");const m=YD(u);return n=GD(r,m),m}});return n?await n:s.authToken}async function FD(r,t){let n=await ST(r.appConfig);for(;n.authToken.requestStatus===1;)await hA(100),n=await ST(r.appConfig);const s=n.authToken;return s.requestStatus===0?Ag(r,t):s}function ST(r){return Rh(r,t=>{if(!yA(t))throw zs.create("not-registered");const n=t.authToken;return XD(n)?{...t,authToken:{requestStatus:0}}:t})}async function GD(r,t){try{const n=await jD(r,t),s={...t,authToken:n};return await ah(r.appConfig,s),n}catch(n){if(sA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await gA(r.appConfig);else{const s={...t,authToken:{requestStatus:0}};await ah(r.appConfig,s)}throw n}}function yA(r){return r!==void 0&&r.registrationStatus===2}function QD(r){return r.requestStatus===2&&!KD(r)}function KD(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+TD}function YD(r){const t={requestStatus:1,requestTime:Date.now()};return{...r,authToken:t}}function XD(r){return r.requestStatus===1&&r.requestTime+nA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $D(r){const t=r,{installationEntry:n,registrationPromise:s}=await Eg(t);return s?s.catch(console.error):Ag(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZD(r,t=!1){const n=r;return await JD(n),(await Ag(n,t)).token}async function JD(r){const{registrationPromise:t}=await Eg(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(r){if(!r||!r.options)throw Kd("App Configuration");if(!r.name)throw Kd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Kd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Kd(r){return zs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="installations",tN="installations-internal",eN=r=>{const t=r.getProvider("app").getImmediate(),n=WD(t),s=Hs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},nN=r=>{const t=r.getProvider("app").getImmediate(),n=Hs(t,_A).getImmediate();return{getId:()=>$D(n),getToken:o=>ZD(n,o)}};function iN(){_i(new Fn(_A,eN,"PUBLIC")),_i(new Fn(tN,nN,"PRIVATE"))}iN();Mn(eA,vg);Mn(eA,vg,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="analytics",rN="firebase_id",sN="origin",aN=60*1e3,oN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Sg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new uh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},yn=new js("analytics","Analytics",lN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(r){if(!r.startsWith(Sg)){const t=yn.create("invalid-gtag-resource",{gtagURL:r});return on.warn(t.message),""}return r}function vA(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function cN(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function hN(r,t){const n=cN("firebase-js-sdk-policy",{createScriptURL:uN}),s=document.createElement("script"),o=`${Sg}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function fN(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function dN(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const y=(await vA(n)).find(p=>p.measurementId===o);y&&await t[y.appId]}}catch(m){on.error(m)}r("config",o,u)}async function mN(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await vA(n);for(const y of f){const p=m.find(w=>w.measurementId===y),E=p&&t[p.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){on.error(u)}}function gN(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[m,y]=f;await mN(r,t,n,m,y)}else if(u==="config"){const[m,y]=f;await dN(r,t,n,s,m,y)}else if(u==="consent"){const[m,y]=f;r("consent",m,y)}else if(u==="get"){const[m,y,p]=f;r("get",m,y,p)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){on.error(m)}}return o}function pN(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=gN(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function yN(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Sg)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=30,vN=1e3;class TN{constructor(t={},n=vN){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const TA=new TN;function EN(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function AN(r){const{appId:t,apiKey:n}=r,s={method:"GET",headers:EN(n)},o=oN.replace("{app-id}",t),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();m.error?.message&&(f=m.error.message)}catch{}throw yn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function SN(r,t=TA,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw yn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw yn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new RN;return setTimeout(async()=>{m.abort()},aN),EA({appId:s,apiKey:o,measurementId:u},f,m,t)}async function EA(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=TA){const{appId:u,measurementId:f}=r;try{await bN(s,t)}catch(m){if(f)return on.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:u,measurementId:f};throw m}try{const m=await AN(r);return o.deleteThrottleMetadata(u),m}catch(m){const y=m;if(!wN(y)){if(o.deleteThrottleMetadata(u),f)return on.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:u,measurementId:f};throw m}const p=Number(y?.customData?.httpStatus)===503?X_(n,o.intervalMillis,_N):X_(n,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return o.setThrottleMetadata(u,E),on.debug(`Calling attemptFetch again in ${p} millis`),EA(r,E,s,o)}}function bN(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(yn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function wN(r){if(!(r instanceof Qn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class RN{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function IN(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f={...s,send_to:u};r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CN(){if(zT())try{await BT()}catch(r){return on.warn(yn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return on.warn(yn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function DN(r,t,n,s,o,u,f){const m=SN(r);m.then(C=>{n[C.measurementId]=C.appId,r.options.measurementId&&C.measurementId!==r.options.measurementId&&on.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>on.error(C)),t.push(m);const y=CN().then(C=>{if(C)return s.getId()}),[p,E]=await Promise.all([m,y]);yN(u)||hN(u,p.measurementId),o("js",new Date);const w=f?.config??{};return w[sN]="firebase",w.update=!0,E!=null&&(w[rN]=E),o("config",p.measurementId,w),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(t){this.app=t}_delete(){return delete Ml[this.app.options.appId],Promise.resolve()}}let Ml={},bT=[];const wT={};let Yd="dataLayer",ON="gtag",RT,AA,IT=!1;function VN(){const r=[];if(LT()&&r.push("This is a browser extension environment."),Nb()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=yn.create("invalid-analytics-context",{errorInfo:t});on.warn(n.message)}}function MN(r,t,n){VN();const s=r.options.appId;if(!s)throw yn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)on.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yn.create("no-api-key");if(Ml[s]!=null)throw yn.create("already-exists",{id:s});if(!IT){fN(Yd);const{wrappedGtag:u,gtagCore:f}=pN(Ml,bT,wT,Yd,ON);AA=u,RT=f,IT=!0}return Ml[s]=DN(r,bT,wT,t,RT,Yd,n),new NN(r)}function PN(r=Sm()){r=ge(r);const t=Hs(r,oh);return t.isInitialized()?t.getImmediate():xN(r)}function xN(r,t={}){const n=Hs(r,oh);if(n.isInitialized()){const o=n.getImmediate();if(Lr(t,n.getOptions()))return o;throw yn.create("already-initialized")}return n.initialize({options:t})}function kN(r,t,n,s){r=ge(r),IN(AA,Ml[r.app.options.appId],t,n,s).catch(o=>on.error(o))}const CT="@firebase/analytics",DT="0.10.18";function UN(){_i(new Fn(oh,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return MN(s,o,n)},"PUBLIC")),_i(new Fn("analytics-internal",r,"PRIVATE")),Mn(CT,DT),Mn(CT,DT,"esm2020");function r(t){try{const n=t.getProvider(oh).getImmediate();return{logEvent:(s,o,u)=>kN(n,s,o,u)}}catch(n){throw yn.create("interop-component-reg-failed",{reason:n})}}}UN();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function LN(r,t,n,s){function o(u){return u instanceof n?u:new n(function(f){f(u)})}return new(n||(n=Promise))(function(u,f){function m(E){try{p(s.next(E))}catch(w){f(w)}}function y(E){try{p(s.throw(E))}catch(w){f(w)}}function p(E){E.done?u(E.value):o(E.value).then(m,y)}p((s=s.apply(r,[])).next())})}function zN(r,t){var n={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},s,o,u,f;return f={next:m(0),throw:m(1),return:m(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function m(p){return function(E){return y([p,E])}}function y(p){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,o&&(u=p[0]&2?o.return:p[0]?o.throw||((u=o.return)&&u.call(o),0):o.next)&&!(u=u.call(o,p[1])).done)return u;switch(o=0,u&&(p=[p[0]&2,u.value]),p[0]){case 0:case 1:u=p;break;case 4:return n.label++,{value:p[1],done:!1};case 5:n.label++,o=p[1],p=[0];continue;case 7:p=n.ops.pop(),n.trys.pop();continue;default:if(u=n.trys,!(u=u.length>0&&u[u.length-1])&&(p[0]===6||p[0]===2)){n=0;continue}if(p[0]===3&&(!u||p[1]>u[0]&&p[1]<u[3])){n.label=p[1];break}if(p[0]===6&&n.label<u[1]){n.label=u[1],u=p;break}if(u&&n.label<u[2]){n.label=u[2],n.ops.push(p);break}u[2]&&n.ops.pop(),n.trys.pop();continue}p=t.call(r,n)}catch(E){p=[6,E],o=0}finally{s=u=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Fa=function(){return Fa=Object.assign||function(t){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},Fa.apply(this,arguments)},SA=function(r){return{loading:r==null,value:r}},BN=function(){return function(r,t){switch(t.type){case"error":return Fa(Fa({},r),{error:t.error,loading:!1,value:void 0});case"reset":return SA(t.defaultValue);case"value":return Fa(Fa({},r),{error:void 0,loading:!1,value:t.value});default:return r}}},qN=(function(r){var t=r?r():void 0,n=Tt.useReducer(BN(),SA(t)),s=n[0],o=n[1],u=Tt.useCallback(function(){var y=r?r():void 0;o({type:"reset",defaultValue:y})},[r]),f=Tt.useCallback(function(y){o({type:"error",error:y})},[]),m=Tt.useCallback(function(y){o({type:"value",value:y})},[]);return Tt.useMemo(function(){return{error:s.error,loading:s.loading,reset:u,setError:f,setValue:m,value:s.value}},[s.error,s.loading,u,f,m,s.value])}),bA=(function(r,t){var n=qN(function(){return r.currentUser}),s=n.error,o=n.loading,u=n.setError,f=n.setValue,m=n.value;return Tt.useEffect(function(){var y=s2(r,function(p){return LN(void 0,void 0,void 0,function(){var E;return zN(this,function(w){switch(w.label){case 0:return[3,4];case 1:return w.trys.push([1,3,,4]),[4,t.onUserChanged(p)];case 2:return w.sent(),[3,4];case 3:return E=w.sent(),u(E),[3,4];case 4:return f(p),[2]}})})},u);return function(){y()}},[r]),[m,o,s]});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ga=function(){return Ga=Object.assign||function(t){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},Ga.apply(this,arguments)},wA=function(r){return{loading:r==null,value:r}},jN=function(){return function(r,t){switch(t.type){case"error":return Ga(Ga({},r),{error:t.error,loading:!1,value:void 0});case"reset":return wA(t.defaultValue);case"value":return Ga(Ga({},r),{error:void 0,loading:!1,value:t.value});default:return r}}},RA=(function(r){var t=void 0,n=Tt.useReducer(jN(),wA(t)),s=n[0],o=n[1],u=Tt.useCallback(function(){var y=void 0;o({type:"reset",defaultValue:y})},[r]),f=Tt.useCallback(function(y){o({type:"error",error:y})},[]),m=Tt.useCallback(function(y){o({type:"value",value:y})},[]);return Tt.useMemo(function(){return{error:s.error,loading:s.loading,reset:u,setError:f,setValue:m,value:s.value}},[s.error,s.loading,u,f,m,s.value])}),IA=function(r,t,n){var s=Tt.useRef(r);return Tt.useEffect(function(){t(r,s.current)||(s.current=r,n&&n())}),s},HN=function(r,t){var n=!r&&!t,s=!!r&&!!t&&ZI(r,t);return n||s},FN=function(r,t){return IA(r,HN,t)},GN=function(r,t){var n=!r&&!t,s=!!r&&!!t&&JI(r,t);return n||s},QN=function(r,t){return IA(r,GN,t)},KN=function(r,t){var n=RA(),s=n.error,o=n.loading,u=n.reset,f=n.setError,m=n.setValue,y=n.value,p=QN(r,u);return Tt.useEffect(function(){if(!p.current){m(void 0);return}var E=t?.snapshotListenOptions?pm(p.current,t.snapshotListenOptions,m,f):pm(p.current,m,f);return function(){E()}},[p.current]),[y,o,s]},YN=function(r,t){var n=KN(r,t),s=n[0],o=n[1],u=n[2],f=XN(s,t?.snapshotOptions,t?.initialValue);return[f,o,u,s]},XN=function(r,t,n){return Tt.useMemo(function(){var s;return(s=r?.docs.map(function(o){return o.data(t)}))!==null&&s!==void 0?s:n},[r,t])},$N=function(r,t){var n=RA(),s=n.error,o=n.loading,u=n.reset,f=n.setError,m=n.setValue,y=n.value,p=FN(r,u);return Tt.useEffect(function(){if(!p.current){m(void 0);return}var E=pm(p.current,m,f);return function(){E()}},[p.current]),[y,o,s]};const ZN={apiKey:"AIzaSyBQSuvCd5mb-lbvoaZrwGl7fXhFRZWI0ZU",authDomain:"neshaybahs-chatroom.firebaseapp.com",projectId:"neshaybahs-chatroom",storageBucket:"neshaybahs-chatroom.firebasestorage.app",messagingSenderId:"120115708605",appId:"1:120115708605:web:b2956f68690d946f5badd4"},bg=FT(ZN),qs=yD(bg),wg=WI(bg);PN(bg);const JN="dssbbkavm",WN="chat_uploads",tO=()=>{const r=Tt.useRef(null),[t,n]=Tt.useState([]),[s,o]=Tt.useState(0),[u,f]=Tt.useState(!1),[m,y]=Tt.useState(0),[p,E]=Tt.useState(0),w=st=>{const it=st.replace(".mp3","").split(" - ");return`${(it.length>1?it[1]:it[0]).toLowerCase().replace(/'/g,"").replace(/[^a-z0-9\s]/g,"").replace(/\s+/g,"-").trim()}.png`};Tt.useEffect(()=>{const ut=["Jeff Buckley - Lover You Shouldve Come Over.mp3","wifiskeletton - Nope your too late i already died.mp3"].map(it=>{const[mt,ht]=it.replace(".mp3","").split(" - "),Lt=w(it);return{filename:it,artist:mt||"Unknown Artist",songName:ht||"Unknown Song",url:`/neshaybahs-chatroom/music/${encodeURIComponent(it)}`,albumCover:`/neshaybahs-chatroom/album-covers/${encodeURIComponent(Lt)}`}});n(ut)},[]),Tt.useEffect(()=>{const st=r.current;if(!st)return;const ut=()=>y(st.currentTime),it=()=>E(st.duration),mt=()=>j();return st.addEventListener("timeupdate",ut),st.addEventListener("durationchange",it),st.addEventListener("ended",mt),()=>{st.removeEventListener("timeupdate",ut),st.removeEventListener("durationchange",it),st.removeEventListener("ended",mt)}},[]),Tt.useEffect(()=>{t.length>0&&r.current&&(r.current.src=t[s]?.url)},[s,t]);const C=()=>{!r.current||t.length===0||(u?r.current.pause():r.current.play().catch(console.error),f(!u))},j=()=>{t.length!==0&&(o(st=>(st+1)%t.length),f(!0))},X=()=>{t.length!==0&&(o(st=>(st-1+t.length)%t.length),f(!0))},et=()=>t[s]||{artist:"No Artist",songName:"No Song",url:"",albumCover:"https://i.scdn.co/image/ab67616d0000b27398b1c6c0d05f8841f08a9eca"},$=st=>{r.current&&p&&(r.current.currentTime=st,y(st))};return{audioRef:r,playlist:t,currentTrack:et(),isPlaying:u,currentTime:m,duration:p,togglePlayPause:C,nextTrack:j,previousTrack:X,setCurrentTrackIndex:o,seekTo:$}},eO=async(r,t)=>{try{const n=Xm(wg,"userProfiles",r);return await gC(n,{...t,updatedAt:b0()},{merge:!0}),!0}catch(n){return console.error("Error updating user profile:",n),!1}},nO=(r,t)=>({displayName:r?.displayName||t?.displayName||"Anonymous",photoURL:r?.photoURL||t?.photoURL||null}),CA=r=>{const t=r?Xm(wg,"userProfiles",r.uid):null,[n,s,o]=$N(t),[u,f]=Tt.useState({displayName:"Anonymous",photoURL:null});Tt.useEffect(()=>{if(r){const y=n?.data(),p={displayName:r.displayName,photoURL:r.photoURL},E=nO(y,p);f(E)}},[r,n]);const m=async y=>r?await eO(r.uid,y):!1;return{customProfile:n?.data()||null,displayData:u,loading:s,error:o,updateProfile:m}},DA=async(r,t)=>{try{if(r.size>10*1024*1024)throw new Error("File size exceeds 10MB limit");if(!r.type.startsWith("image/"))throw new Error("File must be an image");const n=new FormData;n.append("file",r),n.append("upload_preset",WN);const s=t.replace(/[^a-zA-Z0-9]/g,"");n.append("folder",`chat_images/${s}`);const o=Date.now(),u=r.name.split(".")[0].replace(/[^a-zA-Z0-9]/g,"_");n.append("public_id",`${o}_${u}`);const f=await fetch(`https://api.cloudinary.com/v1_1/${JN}/image/upload`,{method:"POST",body:n}),m=await f.text();if(!f.ok){console.error(`HTTP error! status: ${f.status}, response: ${m}`);try{const p=JSON.parse(m);throw new Error(p.error?.message||`HTTP ${f.status}: ${m}`)}catch{throw new Error(`HTTP ${f.status}: ${m}`)}}const y=JSON.parse(m);if(y.secure_url)return{success:!0,url:y.secure_url,publicId:y.public_id,fileName:y.original_filename};throw new Error(y.error?.message||"Upload failed - no secure_url returned")}catch(n){return console.error("Error uploading image to Cloudinary:",n),n.message.includes("Invalid upload preset")?{success:!1,error:"Upload preset 'chat_uploads' not found or not configured properly in Cloudinary"}:n.message.includes("Invalid cloud name")?{success:!1,error:"Cloud name 'dssbbkavm' not found in Cloudinary"}:n.message.includes("Unauthorized")?{success:!1,error:"Upload preset is not configured for unsigned uploads"}:{success:!1,error:n.message||"Failed to upload image to Cloudinary"}}};function NA({file:r,onRemove:t}){const[n,s]=Tt.useState(null);return Tt.useEffect(()=>{if(r){const o=new FileReader;o.onloadend=()=>{s(o.result)},o.readAsDataURL(r)}return()=>{n&&URL.revokeObjectURL(n)}},[r]),n?J.jsxs("div",{className:"image-preview",children:[J.jsx("img",{src:n,alt:"Preview"}),J.jsx("button",{className:"remove-preview-btn",onClick:t,type:"button",children:J.jsx("i",{className:"bi bi-x"})})]}):null}function iO(){const[r]=bA(qs),[t,n]=Tt.useState(!1);return Tt.useEffect(()=>{const s=()=>{const o=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${o}px`)};return s(),window.addEventListener("resize",s),window.addEventListener("orientationchange",s),()=>{window.removeEventListener("resize",s),window.removeEventListener("orientationchange",s)}},[]),J.jsxs("div",{className:"App",children:[J.jsxs("header",{children:[J.jsxs("div",{className:"d-flex align-items-center",children:[J.jsx("img",{src:"/neshaybahs-chatroom/images/logo.png",alt:"Logo",style:{height:"40px",width:"auto",marginRight:"15px"},onError:s=>{s.target.style.display="none"}}),J.jsx("h1",{children:"NeshayBahs Chatroom"})]}),J.jsxs("div",{className:"d-flex gap-2",children:[r&&J.jsxs("button",{className:"btn btn-outline-light",onClick:()=>n(!0),children:[J.jsx("i",{className:"bi bi-gear me-2"}),"Settings"]}),J.jsx(aO,{})]})]}),J.jsx("div",{className:`chat-container container-fluid ${r?"has-user":""}`,children:r?J.jsx(lO,{}):J.jsx(sO,{})}),t&&J.jsxs(J.Fragment,{children:[J.jsx("div",{className:"settings-overlay",onClick:()=>n(!1)}),J.jsxs("div",{className:"settings-panel open",children:[J.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[J.jsx("h4",{children:"Settings"}),J.jsx("button",{className:"btn-close btn-close-white",onClick:()=>n(!1)})]}),r&&J.jsx(rO,{user:r,onClose:()=>n(!1)})]})]})]})}function rO({user:r,onClose:t}){const{customProfile:n,displayData:s,updateProfile:o}=CA(r),[u,f]=Tt.useState(!1),[m,y]=Tt.useState(""),[p,E]=Tt.useState(""),[w,C]=Tt.useState(null),[j,X]=Tt.useState(!1),et=Tt.useRef();Tt.useEffect(()=>{u&&(y(mt=>mt||n?.displayName||""),E(mt=>mt||n?.photoURL||""))},[u]);const $=mt=>{const ht=mt.target.files[0];if(ht){if(!ht.type.startsWith("image/")){alert("Please select an image file.");return}if(ht.size>10*1024*1024){alert("Image must be under 10MB.");return}C(ht)}},st=()=>{C(null),et.current&&(et.current.value="")},ut=async()=>{X(!0);try{let mt=p;if(w){const O=await DA(w,r.uid);if(O.success)mt=O.url;else{alert("Upload failed: "+O.error),X(!1);return}}const ht={};m.trim()&&(ht.displayName=m.trim()),mt&&(ht.photoURL=mt),await o(ht)?(f(!1),C(null)):alert("Failed to update profile. Please try again.")}finally{X(!1)}},it=async()=>{window.confirm("Reset to Google profile data?")&&(X(!0),await o({displayName:null,photoURL:null})&&(f(!1),C(null)),X(!1))};return u?J.jsx("div",{className:"profile-section",children:J.jsxs("div",{className:"profile-editor",children:[J.jsx("h5",{className:"mb-3",children:"Edit Profile"}),J.jsxs("div",{className:"mb-3",children:[J.jsx("label",{className:"form-label",children:"Display Name"}),J.jsx("input",{type:"text",className:"form-control",value:m,onChange:mt=>y(mt.target.value),placeholder:r?.displayName||"Enter display name"})]}),J.jsxs("div",{className:"mb-3",children:[J.jsx("label",{className:"form-label",children:"Profile Picture"}),J.jsx("input",{type:"url",className:"form-control mb-2",value:p,onChange:mt=>E(mt.target.value),placeholder:r?.photoURL||"Enter image URL"}),J.jsx("label",{className:"form-label",children:"Upload Profile"}),J.jsx("input",{type:"file",ref:et,accept:"image/*",onChange:$,className:"form-control"}),w&&J.jsx("div",{className:"mt-2",children:J.jsx(NA,{file:w,onRemove:st})})]}),J.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[J.jsx("button",{className:"btn btn-primary",onClick:ut,disabled:j,children:j?"Saving...":"Save"}),J.jsx("button",{className:"btn btn-secondary",onClick:()=>f(!1),disabled:j,children:"Cancel"}),n?.displayName&&J.jsx("button",{className:"btn btn-outline-warning",onClick:it,disabled:j,children:"Reset to Google"})]})]})}):J.jsx("div",{className:"profile-section",children:J.jsxs("div",{className:"profile-display",children:[J.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[J.jsx("img",{src:s.photoURL||`https://ui-avatars.com/api/?name=${encodeURIComponent(s.displayName)}`,alt:"Profile",className:"profile-avatar"}),J.jsxs("div",{children:[J.jsx("h5",{className:"mb-0",children:s.displayName}),J.jsx("small",{children:n?.displayName?"Custom Profile":"Using Google Profile"})]})]}),J.jsxs("button",{className:"btn btn-outline-light btn-sm",onClick:()=>f(!0),children:[J.jsx("i",{className:"bi bi-pencil me-2"}),"Edit Profile"]})]})})}function sO(){const r=async()=>{const t=new Yi;await R2(qs,t)};return J.jsxs("div",{className:"signin-container text-center mt-5",children:[J.jsxs("button",{className:"btn btn-outline-light",onClick:r,children:[J.jsx("i",{className:"bi bi-google me-2"})," Sign in with Google"]}),J.jsx("p",{className:"mt-2",children:"Made by NeshayBah w/ vibe coding"})]})}function aO(){return qs.currentUser&&J.jsxs("button",{className:"sign-out btn btn-outline-light",onClick:()=>a2(qs),children:[J.jsx("i",{className:"bi bi-box-arrow-right me-2"})," Sign Out"]})}function oO(){const{audioRef:r,currentTrack:t,isPlaying:n,togglePlayPause:s,nextTrack:o,previousTrack:u}=tO(),f="https://i.scdn.co/image/ab67616d0000b27398b1c6c0d05f8841f08a9eca",m=y=>{y.target.src=f};return J.jsxs("div",{className:"media-controls",children:[J.jsx("audio",{ref:r}),J.jsx("img",{src:t.albumCover,alt:"Album Cover",className:"album-cover",onError:m}),J.jsxs("div",{className:"media-text",children:[J.jsx("p",{className:"song-name",children:t.songName}),J.jsx("p",{className:"artist-name",children:t.artist})]}),J.jsxs("div",{className:"button-group",children:[J.jsx("button",{className:"skip-back",onClick:u,children:J.jsx("i",{className:"bi bi-skip-start"})}),J.jsx("button",{className:"play-pause",onClick:s,children:J.jsx("i",{className:`bi bi-${n?"pause":"play"}`})}),J.jsx("button",{className:"skip-forward",onClick:o,children:J.jsx("i",{className:"bi bi-skip-end"})})]})]})}function lO(){const r=Tt.useRef(),t=Tt.useRef(),n=$I(wg,"messages"),[s]=bA(qs),{displayData:o}=CA(s),u=cC(n,hC("createdAt"),fC(100)),[f]=YN(u,{}),[m,y]=Tt.useState(""),[p,E]=Tt.useState(null),[w,C]=Tt.useState(!1);Tt.useEffect(()=>{r.current&&r.current.scrollIntoView({behavior:"smooth"})},[f]);const j=$=>{const st=$.target.files[0];if(st){if(st.size>10*1024*1024){alert("File size too large. Please select an image under 10MB.");return}if(!st.type.startsWith("image/")){alert("Please select an image file.");return}E(st)}},X=()=>{E(null),t.current&&(t.current.value="")},et=async $=>{if($.preventDefault(),!m.trim()&&!p)return;C(!0);const{uid:st}=qs.currentUser;let ut=null;try{if(p){const mt=await DA(p,st);if(mt.success)ut=mt.url;else{alert("Failed to upload image: "+mt.error),C(!1);return}}const it={createdAt:b0(),uid:st,photoURL:o.photoURL||null,displayName:o.displayName||"Anonymous"};m.trim()&&(it.text=m.trim()),ut?(it.imageUrl=ut,it.messageType="image"):it.messageType="text",await pC(n,it),y(""),E(null),t.current&&(t.current.value="")}catch(it){console.error("Error sending message:",it),it.code==="permission-denied"?alert("Permission denied. Check your Firestore security rules."):it.code==="unavailable"?alert("Firestore is currently unavailable. Please try again."):alert(`Error: ${it.message}`)}finally{C(!1)}};return J.jsxs(J.Fragment,{children:[J.jsx(oO,{}),J.jsx("div",{className:"chat-panel d-flex flex-column",children:J.jsxs("div",{className:"messages-container flex-grow-1",children:[J.jsxs("main",{className:"messages-list",children:[f&&f.map($=>J.jsx(uO,{message:$},$.id)),J.jsx("span",{ref:r})]}),p&&J.jsx("div",{className:"image-preview-container",children:J.jsx(NA,{file:p,onRemove:X})}),J.jsxs("form",{onSubmit:et,className:"chat-form",children:[J.jsx("input",{value:m,onChange:$=>y($.target.value),placeholder:"Message something dude",disabled:w}),J.jsx("input",{type:"file",ref:t,onChange:j,accept:"image/*",style:{display:"none"}}),J.jsx("button",{type:"button",className:"image-upload-btn",onClick:()=>t.current?.click(),disabled:w,children:J.jsx("i",{className:"bi bi-image"})}),J.jsx("button",{type:"submit",disabled:!m.trim()&&!p||w,children:w?J.jsx("i",{className:"bi bi-hourglass-split"}):J.jsx("i",{className:"bi bi-send-fill"})})]})]})})]})}function uO({message:r}){const{text:t,uid:n,photoURL:s,displayName:o,createdAt:u,imageUrl:f,messageType:m}=r,y=n===qs.currentUser.uid?"sent":"received",[p,E]=Tt.useState(!0),[w,C]=Tt.useState(!1),j=$=>$?($.toDate?$.toDate():new Date($)).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"",X=()=>{E(!1)},et=()=>{E(!1),C(!0)};return J.jsxs("div",{className:`message ${y}`,children:[J.jsx("img",{src:s||"https://ui-avatars.com/api/?name="+encodeURIComponent(o||"User"),alt:"avatar",className:"user-avatar"}),J.jsxs("div",{className:"message-content",children:[J.jsxs("div",{className:"message-header",children:[J.jsx("span",{className:"message-timestamp",children:j(u)}),J.jsx("strong",{children:o||"Unknown"})]}),t&&J.jsx("p",{children:t}),f&&J.jsxs("div",{className:"message-image-container",children:[p&&J.jsxs("div",{className:"image-loading",children:[J.jsx("i",{className:"bi bi-hourglass-split"}),J.jsx("span",{children:"Loading image..."})]}),w?J.jsxs("div",{className:"image-error",children:[J.jsx("i",{className:"bi bi-exclamation-triangle"}),J.jsx("span",{children:"Failed to load image"})]}):J.jsx("img",{src:f,alt:"Shared image",className:"message-image",onLoad:X,onError:et,style:{display:p?"none":"block"}})]})]})]})}cb.createRoot(document.getElementById("root")).render(J.jsx(Tt.StrictMode,{children:J.jsx(iO,{})}));
