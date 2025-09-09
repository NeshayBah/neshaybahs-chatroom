(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var kd={exports:{}},Al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function ab(){if(q_)return Al;q_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Al.Fragment=t,Al.jsx=n,Al.jsxs=n,Al}var H_;function ob(){return H_||(H_=1,kd.exports=ab()),kd.exports}var H=ob(),Ud={exports:{}},Rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function lb(){if(F_)return Rt;F_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=b&&D[b]||D["@@iterator"],typeof D=="function"?D:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,et={};function J(D,Z,it){this.props=D,this.context=Z,this.refs=et,this.updater=it||q}J.prototype.isReactComponent={},J.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},J.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function st(){}st.prototype=J.prototype;function ut(D,Z,it){this.props=D,this.context=Z,this.refs=et,this.updater=it||q}var rt=ut.prototype=new st;rt.constructor=ut,K(rt,J.prototype),rt.isPureReactComponent=!0;var mt=Array.isArray,ht={H:null,A:null,T:null,S:null,V:null},Nt=Object.prototype.hasOwnProperty;function x(D,Z,it,W,ft,It){return it=It.ref,{$$typeof:r,type:D,key:Z,ref:it!==void 0?it:null,props:It}}function S(D,Z){return x(D.type,Z,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function M(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(it){return Z[it]})}var N=/\/+/g;function V(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?M(""+D.key):Z.toString(36)}function I(){}function Ft(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function Gt(D,Z,it,W,ft){var It=typeof D;(It==="undefined"||It==="boolean")&&(D=null);var At=!1;if(D===null)At=!0;else switch(It){case"bigint":case"string":case"number":At=!0;break;case"object":switch(D.$$typeof){case r:case t:At=!0;break;case E:return At=D._init,Gt(At(D._payload),Z,it,W,ft)}}if(At)return ft=ft(D),At=W===""?"."+V(D,0):W,mt(ft)?(it="",At!=null&&(it=At.replace(N,"$&/")+"/"),Gt(ft,Z,it,"",function(Yn){return Yn})):ft!=null&&(R(ft)&&(ft=S(ft,it+(ft.key==null||D&&D.key===ft.key?"":(""+ft.key).replace(N,"$&/")+"/")+At)),Z.push(ft)),1;At=0;var Ne=W===""?".":W+":";if(mt(D))for(var te=0;te<D.length;te++)W=D[te],It=Ne+V(W,te),At+=Gt(W,Z,it,It,ft);else if(te=C(D),typeof te=="function")for(D=te.call(D),te=0;!(W=D.next()).done;)W=W.value,It=Ne+V(W,te++),At+=Gt(W,Z,it,It,ft);else if(It==="object"){if(typeof D.then=="function")return Gt(Ft(D),Z,it,W,ft);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return At}function F(D,Z,it){if(D==null)return D;var W=[],ft=0;return Gt(D,W,"","",function(It){return Z.call(it,It,ft++)}),W}function nt(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(it){(D._status===0||D._status===-1)&&(D._status=1,D._result=it)},function(it){(D._status===0||D._status===-1)&&(D._status=2,D._result=it)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var ot=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function wt(){}return Rt.Children={map:F,forEach:function(D,Z,it){F(D,function(){Z.apply(this,arguments)},it)},count:function(D){var Z=0;return F(D,function(){Z++}),Z},toArray:function(D){return F(D,function(Z){return Z})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Rt.Component=J,Rt.Fragment=n,Rt.Profiler=o,Rt.PureComponent=ut,Rt.StrictMode=s,Rt.Suspense=y,Rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ht,Rt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ht.H.useMemoCache(D)}},Rt.cache=function(D){return function(){return D.apply(null,arguments)}},Rt.cloneElement=function(D,Z,it){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var W=K({},D.props),ft=D.key,It=void 0;if(Z!=null)for(At in Z.ref!==void 0&&(It=void 0),Z.key!==void 0&&(ft=""+Z.key),Z)!Nt.call(Z,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&Z.ref===void 0||(W[At]=Z[At]);var At=arguments.length-2;if(At===1)W.children=it;else if(1<At){for(var Ne=Array(At),te=0;te<At;te++)Ne[te]=arguments[te+2];W.children=Ne}return x(D.type,ft,void 0,void 0,It,W)},Rt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},Rt.createElement=function(D,Z,it){var W,ft={},It=null;if(Z!=null)for(W in Z.key!==void 0&&(It=""+Z.key),Z)Nt.call(Z,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ft[W]=Z[W]);var At=arguments.length-2;if(At===1)ft.children=it;else if(1<At){for(var Ne=Array(At),te=0;te<At;te++)Ne[te]=arguments[te+2];ft.children=Ne}if(D&&D.defaultProps)for(W in At=D.defaultProps,At)ft[W]===void 0&&(ft[W]=At[W]);return x(D,It,void 0,void 0,null,ft)},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(D){return{$$typeof:m,render:D}},Rt.isValidElement=R,Rt.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:nt}},Rt.memo=function(D,Z){return{$$typeof:p,type:D,compare:Z===void 0?null:Z}},Rt.startTransition=function(D){var Z=ht.T,it={};ht.T=it;try{var W=D(),ft=ht.S;ft!==null&&ft(it,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(wt,ot)}catch(It){ot(It)}finally{ht.T=Z}},Rt.unstable_useCacheRefresh=function(){return ht.H.useCacheRefresh()},Rt.use=function(D){return ht.H.use(D)},Rt.useActionState=function(D,Z,it){return ht.H.useActionState(D,Z,it)},Rt.useCallback=function(D,Z){return ht.H.useCallback(D,Z)},Rt.useContext=function(D){return ht.H.useContext(D)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(D,Z){return ht.H.useDeferredValue(D,Z)},Rt.useEffect=function(D,Z,it){var W=ht.H;if(typeof it=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(D,Z)},Rt.useId=function(){return ht.H.useId()},Rt.useImperativeHandle=function(D,Z,it){return ht.H.useImperativeHandle(D,Z,it)},Rt.useInsertionEffect=function(D,Z){return ht.H.useInsertionEffect(D,Z)},Rt.useLayoutEffect=function(D,Z){return ht.H.useLayoutEffect(D,Z)},Rt.useMemo=function(D,Z){return ht.H.useMemo(D,Z)},Rt.useOptimistic=function(D,Z){return ht.H.useOptimistic(D,Z)},Rt.useReducer=function(D,Z,it){return ht.H.useReducer(D,Z,it)},Rt.useRef=function(D){return ht.H.useRef(D)},Rt.useState=function(D){return ht.H.useState(D)},Rt.useSyncExternalStore=function(D,Z,it){return ht.H.useSyncExternalStore(D,Z,it)},Rt.useTransition=function(){return ht.H.useTransition()},Rt.version="19.1.1",Rt}var G_;function Nm(){return G_||(G_=1,Ud.exports=lb()),Ud.exports}var pt=Nm(),Ld={exports:{}},Sl={},zd={exports:{}},jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function ub(){return Q_||(Q_=1,(function(r){function t(F,nt){var ot=F.length;F.push(nt);t:for(;0<ot;){var wt=ot-1>>>1,D=F[wt];if(0<o(D,nt))F[wt]=nt,F[ot]=D,ot=wt;else break t}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var nt=F[0],ot=F.pop();if(ot!==nt){F[0]=ot;t:for(var wt=0,D=F.length,Z=D>>>1;wt<Z;){var it=2*(wt+1)-1,W=F[it],ft=it+1,It=F[ft];if(0>o(W,ot))ft<D&&0>o(It,W)?(F[wt]=It,F[ft]=ot,wt=ft):(F[wt]=W,F[it]=ot,wt=it);else if(ft<D&&0>o(It,ot))F[wt]=It,F[ft]=ot,wt=ft;else break t}}return nt}function o(F,nt){var ot=F.sortIndex-nt.sortIndex;return ot!==0?ot:F.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var y=[],p=[],E=1,b=null,C=3,q=!1,K=!1,et=!1,J=!1,st=typeof setTimeout=="function"?setTimeout:null,ut=typeof clearTimeout=="function"?clearTimeout:null,rt=typeof setImmediate<"u"?setImmediate:null;function mt(F){for(var nt=n(p);nt!==null;){if(nt.callback===null)s(p);else if(nt.startTime<=F)s(p),nt.sortIndex=nt.expirationTime,t(y,nt);else break;nt=n(p)}}function ht(F){if(et=!1,mt(F),!K)if(n(y)!==null)K=!0,Nt||(Nt=!0,V());else{var nt=n(p);nt!==null&&Gt(ht,nt.startTime-F)}}var Nt=!1,x=-1,S=5,R=-1;function M(){return J?!0:!(r.unstable_now()-R<S)}function N(){if(J=!1,Nt){var F=r.unstable_now();R=F;var nt=!0;try{t:{K=!1,et&&(et=!1,ut(x),x=-1),q=!0;var ot=C;try{e:{for(mt(F),b=n(y);b!==null&&!(b.expirationTime>F&&M());){var wt=b.callback;if(typeof wt=="function"){b.callback=null,C=b.priorityLevel;var D=wt(b.expirationTime<=F);if(F=r.unstable_now(),typeof D=="function"){b.callback=D,mt(F),nt=!0;break e}b===n(y)&&s(y),mt(F)}else s(y);b=n(y)}if(b!==null)nt=!0;else{var Z=n(p);Z!==null&&Gt(ht,Z.startTime-F),nt=!1}}break t}finally{b=null,C=ot,q=!1}nt=void 0}}finally{nt?V():Nt=!1}}}var V;if(typeof rt=="function")V=function(){rt(N)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Ft=I.port2;I.port1.onmessage=N,V=function(){Ft.postMessage(null)}}else V=function(){st(N,0)};function Gt(F,nt){x=st(function(){F(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_next=function(F){switch(C){case 1:case 2:case 3:var nt=3;break;default:nt=C}var ot=C;C=nt;try{return F()}finally{C=ot}},r.unstable_requestPaint=function(){J=!0},r.unstable_runWithPriority=function(F,nt){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ot=C;C=F;try{return nt()}finally{C=ot}},r.unstable_scheduleCallback=function(F,nt,ot){var wt=r.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?wt+ot:wt):ot=wt,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ot+D,F={id:E++,callback:nt,priorityLevel:F,startTime:ot,expirationTime:D,sortIndex:-1},ot>wt?(F.sortIndex=ot,t(p,F),n(y)===null&&F===n(p)&&(et?(ut(x),x=-1):et=!0,Gt(ht,ot-wt))):(F.sortIndex=D,t(y,F),K||q||(K=!0,Nt||(Nt=!0,V()))),F},r.unstable_shouldYield=M,r.unstable_wrapCallback=function(F){var nt=C;return function(){var ot=C;C=nt;try{return F.apply(this,arguments)}finally{C=ot}}}})(jd)),jd}var K_;function cb(){return K_||(K_=1,zd.exports=ub()),zd.exports}var Bd={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function hb(){if(Y_)return Ke;Y_=1;var r=Nm();function t(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(y,p,E){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:y,containerInfo:p,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ke.createPortal=function(y,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(y,p,null,E)},Ke.flushSync=function(y){var p=f.T,E=s.p;try{if(f.T=null,s.p=2,y)return y()}finally{f.T=p,s.p=E,s.d.f()}},Ke.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(y,p))},Ke.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Ke.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var E=p.as,b=m(E,p.crossOrigin),C=typeof p.integrity=="string"?p.integrity:void 0,q=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?s.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:C,fetchPriority:q}):E==="script"&&s.d.X(y,{crossOrigin:b,integrity:C,fetchPriority:q,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ke.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=m(p.as,p.crossOrigin);s.d.M(y,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(y)},Ke.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,b=m(E,p.crossOrigin);s.d.L(y,E,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ke.preloadModule=function(y,p){if(typeof y=="string")if(p){var E=m(p.as,p.crossOrigin);s.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(y)},Ke.requestFormReset=function(y){s.d.r(y)},Ke.unstable_batchedUpdates=function(y,p){return y(p)},Ke.useFormState=function(y,p,E){return f.H.useFormState(y,p,E)},Ke.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ke.version="19.1.1",Ke}var X_;function fb(){if(X_)return Bd.exports;X_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Bd.exports=hb(),Bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function db(){if($_)return Sl;$_=1;var r=cb(),t=Nm(),n=fb();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function y(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),e;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var E=Object.assign,b=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),st=Symbol.for("react.provider"),ut=Symbol.for("react.consumer"),rt=Symbol.for("react.context"),mt=Symbol.for("react.forward_ref"),ht=Symbol.for("react.suspense"),Nt=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function Ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case J:return"Profiler";case et:return"StrictMode";case ht:return"Suspense";case Nt:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case rt:return(e.displayName||"Context")+".Provider";case ut:return(e._context.displayName||"Context")+".Consumer";case mt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case x:return i=e.displayName||null,i!==null?i:Ft(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return Ft(e(i))}catch{}}return null}var Gt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},wt=[],D=-1;function Z(e){return{current:e}}function it(e){0>D||(e.current=wt[D],wt[D]=null,D--)}function W(e,i){D++,wt[D]=e.current,e.current=i}var ft=Z(null),It=Z(null),At=Z(null),Ne=Z(null);function te(e,i){switch(W(At,i),W(It,e),W(ft,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?p_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=p_(i),e=y_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(ft),W(ft,e)}function Yn(){it(ft),it(It),it(At)}function nr(e){e.memoizedState!==null&&W(Ne,e);var i=ft.current,a=y_(i,e.type);i!==a&&(W(It,e),W(ft,a))}function Si(e){It.current===e&&(it(ft),it(It)),Ne.current===e&&(it(Ne),yl._currentValue=ot)}var Xr=Object.prototype.hasOwnProperty,$r=r.unstable_scheduleCallback,Zr=r.unstable_cancelCallback,mo=r.unstable_shouldYield,ru=r.unstable_requestPaint,En=r.unstable_now,Ph=r.unstable_getCurrentPriorityLevel,go=r.unstable_ImmediatePriority,Xs=r.unstable_UserBlockingPriority,Jr=r.unstable_NormalPriority,kh=r.unstable_LowPriority,$s=r.unstable_IdlePriority,po=r.log,su=r.unstable_setDisableYieldValue,ce=null,Qt=null;function un(e){if(typeof po=="function"&&su(e),Qt&&typeof Qt.setStrictMode=="function")try{Qt.setStrictMode(ce,e)}catch{}}var Ge=Math.clz32?Math.clz32:Wr,au=Math.log,Uh=Math.LN2;function Wr(e){return e>>>=0,e===0?32:31-(au(e)/Uh|0)|0}var ts=256,es=4194304;function kn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zs(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=kn(l):(v&=T,v!==0?h=kn(v):a||(a=T&~e,a!==0&&(h=kn(a))))):(T=l&~d,T!==0?h=kn(T):v!==0?h=kn(v):a||(a=l&~e,a!==0&&(h=kn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function ns(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function yo(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _o(){var e=ts;return ts<<=1,(ts&4194048)===0&&(ts=256),e}function vo(){var e=es;return es<<=1,(es&62914560)===0&&(es=4194304),e}function bi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function wi(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Eo(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,w=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var G=31-Ge(a),X=1<<G;T[G]=0,w[G]=-1;var z=L[G];if(z!==null)for(L[G]=null,G=0;G<z.length;G++){var j=z[G];j!==null&&(j.lane&=-536870913)}a&=~X}l!==0&&Xn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Xn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ge(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function To(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Ge(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function ir(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Js(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rr(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:k_(e.type))}function ou(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var re=Math.random().toString(36).slice(2),be="__reactFiber$"+re,ye="__reactProps$"+re,Tn="__reactContainer$"+re,Ao="__reactEvents$"+re,Lh="__reactListeners$"+re,sr="__reactHandles$"+re,lu="__reactResources$"+re,is="__reactMarker$"+re;function ar(e){delete e[be],delete e[ye],delete e[Ao],delete e[Lh],delete e[sr]}function Ri(e){var i=e[be];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Tn]||a[be]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=T_(e);e!==null;){if(a=e[be])return a;e=T_(e)}return i}e=a,a=e.parentNode}return null}function $n(e){if(e=e[be]||e[Tn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Zn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Je(e){var i=e[lu];return i||(i=e[lu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function de(e){e[is]=!0}var So=new Set,Ws={};function Un(e,i){Ii(e,i),Ii(e+"Capture",i)}function Ii(e,i){for(Ws[e]=i,e=0;e<i.length;e++)So.add(i[e])}var uu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cu={},rs={};function hu(e){return Xr.call(rs,e)?!0:Xr.call(cu,e)?!1:uu.test(e)?rs[e]=!0:(cu[e]=!0,!1)}function or(e,i,a){if(hu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Jn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Ue(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var ss,fu;function Ci(e){if(ss===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ss=i&&i[1]||"",fu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ss+e+fu}var ta=!1;function ea(e,i){if(!e||ta)return"";ta=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(j){var z=j}Reflect.construct(e,[],X)}else{try{X.call()}catch(j){z=j}e.call(X.prototype)}}else{try{throw Error()}catch(j){z=j}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var w=v.split(`
`),L=T.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===L.length)for(l=w.length-1,h=L.length-1;1<=l&&0<=h&&w[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==L[h]){var G=`
`+w[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=h);break}}}finally{ta=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ci(a):""}function bo(e){switch(e.tag){case 26:case 27:case 5:return Ci(e.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 15:return ea(e.type,!1);case 11:return ea(e.type.render,!1);case 1:return ea(e.type,!0);case 31:return Ci("Activity");default:return""}}function na(e){try{var i="";do i+=bo(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function We(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wo(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function zh(e){var i=wo(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ia(e){e._valueTracker||(e._valueTracker=zh(e))}function Ro(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=wo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function as(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jh=/[\n"\\]/g;function _e(e){return e.replace(jh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function cn(e,i,a,l,h,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+We(i)):e.value!==""+We(i)&&(e.value=""+We(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?lr(e,v,We(i)):a!=null?lr(e,v,We(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+We(T):e.removeAttribute("name")}function os(e,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+We(a):"",i=i!=null?""+We(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function lr(e,i,a){i==="number"&&as(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Di(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+We(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Xt(e,i,a){if(i!=null&&(i=""+We(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+We(a):""}function ls(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Gt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=We(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function An(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var us=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function du(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||us.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Io(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&du(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&du(e,d,i[d])}function Co(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ra(e){return qh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ni=null;function Sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oi=null,Mi=null;function Do(e){var i=$n(e);if(i&&(e=i.stateNode)){var a=e[ye]||null;t:switch(e=i.stateNode,i.type){case"input":if(cn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_e(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[ye]||null;if(!h)throw Error(s(90));cn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&Ro(l)}break t;case"textarea":Xt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Di(e,!!a.multiple,i,!1)}}}var Wn=!1;function mu(e,i,a){if(Wn)return e(i,a);Wn=!0;try{var l=e(i);return l}finally{if(Wn=!1,(Oi!==null||Mi!==null)&&(oc(),Oi&&(i=Oi,e=Mi,Mi=Oi=null,Do(i),e)))for(i=0;i<e.length;i++)Do(e[i])}}function cs(e,i){var a=e.stateNode;if(a===null)return null;var l=a[ye]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bn=!1;if(Ln)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){bn=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{bn=!1}var ti=null,ur=null,Vi=null;function No(){if(Vi)return Vi;var e,i=ur,a=i.length,l,h="value"in ti?ti.value:ti.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Vi=h.slice(e,1<l?1-l:void 0)}function ei(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function Oo(){return!1}function Oe(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ni:Oo,this.isPropagationStopped=Oo,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),i}var qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sa=Oe(qt),fs=E({},qt,{view:0,detail:0}),gu=Oe(fs),aa,oa,ii,ds=E({},fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ii&&(ii&&e.type==="mousemove"?(aa=e.screenX-ii.screenX,oa=e.screenY-ii.screenY):oa=aa=0,ii=e),aa)},movementY:function(e){return"movementY"in e?e.movementY:oa}}),wn=Oe(ds),pu=E({},ds,{dataTransfer:0}),Hh=Oe(pu),ms=E({},fs,{relatedTarget:0}),la=Oe(ms),Mo=E({},qt,{animationName:0,elapsedTime:0,pseudoElement:0}),ua=Oe(Mo),yu=E({},qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ca=Oe(yu),Fh=E({},qt,{data:0}),Vo=Oe(Fh),gs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_u={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xo(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=vu[e])?!!i[e]:!1}function ps(){return xo}var Eu=E({},fs,{key:function(e){if(e.key){var i=gs[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_u[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ha=Oe(Eu),Tu=E({},ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Po=Oe(Tu),xi=E({},fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),Au=Oe(xi),Su=E({},qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),bu=Oe(Su),wu=E({},ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fa=Oe(wu),tn=E({},qt,{newState:0,oldState:0}),Ru=Oe(tn),Iu=[9,13,27,32],ri=Ln&&"CompositionEvent"in window,c=null;Ln&&"documentMode"in document&&(c=document.documentMode);var g=Ln&&"TextEvent"in window&&!c,_=Ln&&(!ri||c&&8<c&&11>=c),A=" ",k=!1;function B(e,i){switch(e){case"keyup":return Iu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kt=!1;function we(e,i){switch(e){case"compositionend":return tt(i);case"keypress":return i.which!==32?null:(k=!0,A);case"textInput":return e=i.data,e===A&&k?null:e;default:return null}}function Ut(e,i){if(kt)return e==="compositionend"||!ri&&B(e,i)?(e=No(),Vi=ur=ti=null,kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Me={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Re(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Me[e.type]:i==="textarea"}function Pi(e,i,a,l){Oi?Mi?Mi.push(l):Mi=[l]:Oi=l,i=dc(i,"onChange"),0<i.length&&(a=new sa("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var Le=null,si=null;function ko(e){h_(e,0)}function Cu(e){var i=Zn(e);if(Ro(i))return e}function Mg(e,i){if(e==="change")return i}var Vg=!1;if(Ln){var Gh;if(Ln){var Qh="oninput"in document;if(!Qh){var xg=document.createElement("div");xg.setAttribute("oninput","return;"),Qh=typeof xg.oninput=="function"}Gh=Qh}else Gh=!1;Vg=Gh&&(!document.documentMode||9<document.documentMode)}function Pg(){Le&&(Le.detachEvent("onpropertychange",kg),si=Le=null)}function kg(e){if(e.propertyName==="value"&&Cu(si)){var i=[];Pi(i,si,e,Sn(e)),mu(ko,i)}}function kA(e,i,a){e==="focusin"?(Pg(),Le=i,si=a,Le.attachEvent("onpropertychange",kg)):e==="focusout"&&Pg()}function UA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cu(si)}function LA(e,i){if(e==="click")return Cu(i)}function zA(e,i){if(e==="input"||e==="change")return Cu(i)}function jA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var hn=typeof Object.is=="function"?Object.is:jA;function Uo(e,i){if(hn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Xr.call(i,h)||!hn(e[h],i[h]))return!1}return!0}function Ug(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lg(e,i){var a=Ug(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ug(a)}}function zg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?zg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function jg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=as(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=as(e.document)}return i}function Kh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var BA=Ln&&"documentMode"in document&&11>=document.documentMode,da=null,Yh=null,Lo=null,Xh=!1;function Bg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xh||da==null||da!==as(l)||(l=da,"selectionStart"in l&&Kh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Lo&&Uo(Lo,l)||(Lo=l,l=dc(Yh,"onSelect"),0<l.length&&(i=new sa("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=da)))}function ys(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var ma={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},$h={},qg={};Ln&&(qg=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function _s(e){if($h[e])return $h[e];if(!ma[e])return e;var i=ma[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in qg)return $h[e]=i[a];return e}var Hg=_s("animationend"),Fg=_s("animationiteration"),Gg=_s("animationstart"),qA=_s("transitionrun"),HA=_s("transitionstart"),FA=_s("transitioncancel"),Qg=_s("transitionend"),Kg=new Map,Zh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zh.push("scrollEnd");function zn(e,i){Kg.set(e,i),Un(i,[e])}var Yg=new WeakMap;function Rn(e,i){if(typeof e=="object"&&e!==null){var a=Yg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:na(i)},Yg.set(e,i),i)}return{value:e,source:i,stack:na(i)}}var In=[],ga=0,Jh=0;function Du(){for(var e=ga,i=Jh=ga=0;i<e;){var a=In[i];In[i++]=null;var l=In[i];In[i++]=null;var h=In[i];In[i++]=null;var d=In[i];if(In[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Xg(a,h,d)}}function Nu(e,i,a,l){In[ga++]=e,In[ga++]=i,In[ga++]=a,In[ga++]=l,Jh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Wh(e,i,a,l){return Nu(e,i,a,l),Ou(e)}function pa(e,i){return Nu(e,null,null,i),Ou(e)}function Xg(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Ge(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Ou(e){if(50<ul)throw ul=0,ad=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ya={};function GA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(e,i,a,l){return new GA(e,i,a,l)}function tf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,i){var a=e.alternate;return a===null?(a=fn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $g(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Mu(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")tf(e)&&(v=1);else if(typeof e=="string")v=KS(e,a,ft.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=fn(31,a,i,h),e.elementType=R,e.lanes=d,e;case K:return vs(a.children,h,d,i);case et:v=8,h|=24;break;case J:return e=fn(12,a,i,h|2),e.elementType=J,e.lanes=d,e;case ht:return e=fn(13,a,i,h),e.elementType=ht,e.lanes=d,e;case Nt:return e=fn(19,a,i,h),e.elementType=Nt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case st:case rt:v=10;break t;case ut:v=9;break t;case mt:v=11;break t;case x:v=14;break t;case S:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=fn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function vs(e,i,a,l){return e=fn(7,e,l,i),e.lanes=a,e}function ef(e,i,a){return e=fn(6,e,null,i),e.lanes=a,e}function nf(e,i,a){return i=fn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var _a=[],va=0,Vu=null,xu=0,Cn=[],Dn=0,Es=null,Ui=1,Li="";function Ts(e,i){_a[va++]=xu,_a[va++]=Vu,Vu=e,xu=i}function Zg(e,i,a){Cn[Dn++]=Ui,Cn[Dn++]=Li,Cn[Dn++]=Es,Es=e;var l=Ui;e=Li;var h=32-Ge(l)-1;l&=~(1<<h),a+=1;var d=32-Ge(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Ui=1<<32-Ge(i)+h|a<<h|l,Li=d+e}else Ui=1<<d|a<<h|l,Li=e}function rf(e){e.return!==null&&(Ts(e,1),Zg(e,1,0))}function sf(e){for(;e===Vu;)Vu=_a[--va],_a[va]=null,xu=_a[--va],_a[va]=null;for(;e===Es;)Es=Cn[--Dn],Cn[Dn]=null,Li=Cn[--Dn],Cn[Dn]=null,Ui=Cn[--Dn],Cn[Dn]=null}var en=null,he=null,Bt=!1,As=null,ai=!1,af=Error(s(519));function Ss(e){var i=Error(s(418,""));throw Bo(Rn(i,e)),af}function Jg(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[be]=e,i[ye]=l,a){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(a=0;a<hl.length;a++)Mt(hl[a],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),os(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ia(i);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),ls(i,l.value,l.defaultValue,l.children),ia(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||g_(i.textContent,a)?(l.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),l.onScroll!=null&&Mt("scroll",i),l.onScrollEnd!=null&&Mt("scrollend",i),l.onClick!=null&&(i.onclick=mc),i=!0):i=!1,i||Ss(e)}function Wg(e){for(en=e.return;en;)switch(en.tag){case 5:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:en=en.return}}function zo(e){if(e!==en)return!1;if(!Bt)return Wg(e),Bt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ad(e.type,e.memoizedProps)),a=!a),a&&he&&Ss(e),Wg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){he=Bn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}he=null}}else i===27?(i=he,wr(e.type)?(e=Rd,Rd=null,he=e):he=i):he=en?Bn(e.stateNode.nextSibling):null;return!0}function jo(){he=en=null,Bt=!1}function tp(){var e=As;return e!==null&&(sn===null?sn=e:sn.push.apply(sn,e),As=null),e}function Bo(e){As===null?As=[e]:As.push(e)}var of=Z(null),bs=null,zi=null;function cr(e,i,a){W(of,i._currentValue),i._currentValue=a}function ji(e){e._currentValue=of.current,it(of)}function lf(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function uf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var w=0;w<i.length;w++)if(T.context===i[w]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),lf(d.return,a,e),l||(v=null);break t}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),lf(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function qo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;hn(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===Ne.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(yl):e=[yl])}h=h.return}e!==null&&uf(i,e,a,l),i.flags|=262144}function Pu(e){for(e=e.firstContext;e!==null;){if(!hn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ws(e){bs=e,zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return ep(bs,e)}function ku(e,i){return bs===null&&ws(e),ep(e,i)}function ep(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},zi===null){if(e===null)throw Error(s(308));zi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else zi=zi.next=i;return a}var QA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},KA=r.unstable_scheduleCallback,YA=r.unstable_NormalPriority,Ie={$$typeof:rt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new QA,data:new Map,refCount:0}}function Ho(e){e.refCount--,e.refCount===0&&KA(YA,function(){e.controller.abort()})}var Fo=null,hf=0,Ea=0,Ta=null;function XA(e,i){if(Fo===null){var a=Fo=[];hf=0,Ea=dd(),Ta={status:"pending",value:void 0,then:function(l){a.push(l)}}}return hf++,i.then(np,np),i}function np(){if(--hf===0&&Fo!==null){Ta!==null&&(Ta.status="fulfilled");var e=Fo;Fo=null,Ea=0,Ta=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function $A(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var ip=F.S;F.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&XA(e,i),ip!==null&&ip(e,i)};var Rs=Z(null);function ff(){var e=Rs.current;return e!==null?e:ee.pooledCache}function Uu(e,i){i===null?W(Rs,Rs.current):W(Rs,i.pool)}function rp(){var e=ff();return e===null?null:{parent:Ie._currentValue,pool:e}}var Go=Error(s(460)),sp=Error(s(474)),Lu=Error(s(542)),df={then:function(){}};function ap(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zu(){}function op(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(zu,zu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,up(e),e;default:if(typeof i.status=="string")i.then(zu,zu);else{if(e=ee,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,up(e),e}throw Qo=i,Go}}var Qo=null;function lp(){if(Qo===null)throw Error(s(459));var e=Qo;return Qo=null,e}function up(e){if(e===Go||e===Lu)throw Error(s(483))}var hr=!1;function mf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function dr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Kt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Ou(e),Xg(e,null,a),i}return Nu(e,l,i,a),Ou(e)}function Ko(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,To(e,a)}}function pf(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var yf=!1;function Yo(){if(yf){var e=Ta;if(e!==null)throw e}}function Xo(e,i,a,l){yf=!1;var h=e.updateQueue;hr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var w=T,L=w.next;w.next=null,v===null?d=L:v.next=L,v=w;var G=e.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==v&&(T===null?G.firstBaseUpdate=L:T.next=L,G.lastBaseUpdate=w))}if(d!==null){var X=h.baseState;v=0,G=L=w=null,T=d;do{var z=T.lane&-536870913,j=z!==T.lane;if(j?(Lt&z)===z:(l&z)===z){z!==0&&z===Ea&&(yf=!0),G!==null&&(G=G.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Et=e,yt=T;z=i;var Jt=a;switch(yt.tag){case 1:if(Et=yt.payload,typeof Et=="function"){X=Et.call(Jt,X,z);break t}X=Et;break t;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=yt.payload,z=typeof Et=="function"?Et.call(Jt,X,z):Et,z==null)break t;X=E({},X,z);break t;case 2:hr=!0}}z=T.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=h.callbacks,j===null?h.callbacks=[z]:j.push(z))}else j={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(L=G=j,w=X):G=G.next=j,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;j=T,T=j.next,j.next=null,h.lastBaseUpdate=j,h.shared.pending=null}}while(!0);G===null&&(w=X),h.baseState=w,h.firstBaseUpdate=L,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),Tr|=v,e.lanes=v,e.memoizedState=X}}function cp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function hp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)cp(a[e],i)}var Aa=Z(null),ju=Z(0);function fp(e,i){e=Ki,W(ju,e),W(Aa,i),Ki=e|i.baseLanes}function _f(){W(ju,Ki),W(Aa,Aa.current)}function vf(){Ki=ju.current,it(Aa),it(ju)}var mr=0,Ct=null,$t=null,ve=null,Bu=!1,Sa=!1,Is=!1,qu=0,$o=0,ba=null,ZA=0;function me(){throw Error(s(321))}function Ef(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!hn(e[a],i[a]))return!1;return!0}function Tf(e,i,a,l,h,d){return mr=d,Ct=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?Xp:$p,Is=!1,d=a(l,h),Is=!1,Sa&&(d=mp(i,a,l,h)),dp(e),d}function dp(e){F.H=Yu;var i=$t!==null&&$t.next!==null;if(mr=0,ve=$t=Ct=null,Bu=!1,$o=0,ba=null,i)throw Error(s(300));e===null||Ve||(e=e.dependencies,e!==null&&Pu(e)&&(Ve=!0))}function mp(e,i,a,l){Ct=e;var h=0;do{if(Sa&&(ba=null),$o=0,Sa=!1,25<=h)throw Error(s(301));if(h+=1,ve=$t=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=rS,d=i(a,l)}while(Sa);return d}function JA(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?Zo(i):i,e=e.useState()[0],($t!==null?$t.memoizedState:null)!==e&&(Ct.flags|=1024),i}function Af(){var e=qu!==0;return qu=0,e}function Sf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function bf(e){if(Bu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Bu=!1}mr=0,ve=$t=Ct=null,Sa=!1,$o=qu=0,ba=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?Ct.memoizedState=ve=e:ve=ve.next=e,ve}function Ee(){if($t===null){var e=Ct.alternate;e=e!==null?e.memoizedState:null}else e=$t.next;var i=ve===null?Ct.memoizedState:ve.next;if(i!==null)ve=i,$t=e;else{if(e===null)throw Ct.alternate===null?Error(s(467)):Error(s(310));$t=e,e={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},ve===null?Ct.memoizedState=ve=e:ve=ve.next=e}return ve}function wf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(e){var i=$o;return $o+=1,ba===null&&(ba=[]),e=op(ba,e,i),i=Ct,(ve===null?i.memoizedState:ve.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Xp:$p),e}function Hu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zo(e);if(e.$$typeof===rt)return Qe(e)}throw Error(s(438,String(e)))}function Rf(e){var i=null,a=Ct.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ct.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=wf(),Ct.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=M;return i.index++,a}function Bi(e,i){return typeof i=="function"?i(e):i}function Fu(e){var i=Ee();return If(i,$t,e)}function If(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=v=null,w=null,L=i,G=!1;do{var X=L.lane&-536870913;if(X!==L.lane?(Lt&X)===X:(mr&X)===X){var z=L.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),X===Ea&&(G=!0);else if((mr&z)===z){L=L.next,z===Ea&&(G=!0);continue}else X={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(T=w=X,v=d):w=w.next=X,Ct.lanes|=z,Tr|=z;X=L.action,Is&&a(d,X),d=L.hasEagerState?L.eagerState:a(d,X)}else z={lane:X,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(T=w=z,v=d):w=w.next=z,Ct.lanes|=X,Tr|=X;L=L.next}while(L!==null&&L!==i);if(w===null?v=d:w.next=T,!hn(d,e.memoizedState)&&(Ve=!0,G&&(a=Ta,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Cf(e){var i=Ee(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);hn(d,i.memoizedState)||(Ve=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function gp(e,i,a){var l=Ct,h=Ee(),d=Bt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!hn(($t||h).memoizedState,a);v&&(h.memoizedState=a,Ve=!0),h=h.queue;var T=_p.bind(null,l,h,e);if(Jo(2048,8,T,[e]),h.getSnapshot!==i||v||ve!==null&&ve.memoizedState.tag&1){if(l.flags|=2048,wa(9,Gu(),yp.bind(null,l,h,a,i),null),ee===null)throw Error(s(349));d||(mr&124)!==0||pp(l,i,a)}return a}function pp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Ct.updateQueue,i===null?(i=wf(),Ct.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function yp(e,i,a,l){i.value=a,i.getSnapshot=l,vp(i)&&Ep(e)}function _p(e,i,a){return a(function(){vp(i)&&Ep(e)})}function vp(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!hn(e,a)}catch{return!0}}function Ep(e){var i=pa(e,2);i!==null&&yn(i,e,2)}function Df(e){var i=nn();if(typeof e=="function"){var a=e;if(e=a(),Is){un(!0);try{a()}finally{un(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:e},i}function Tp(e,i,a,l){return e.baseState=a,If(e,$t,typeof l=="function"?l:Bi)}function WA(e,i,a,l,h){if(Ku(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};F.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Ap(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Ap(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=F.T,v={};F.T=v;try{var T=a(h,l),w=F.S;w!==null&&w(v,T),Sp(e,i,T)}catch(L){Nf(e,i,L)}finally{F.T=d}}else try{d=a(h,l),Sp(e,i,d)}catch(L){Nf(e,i,L)}}function Sp(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){bp(e,i,l)},function(l){return Nf(e,i,l)}):bp(e,i,a)}function bp(e,i,a){i.status="fulfilled",i.value=a,wp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Ap(e,a)))}function Nf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,wp(i),i=i.next;while(i!==l)}e.action=null}function wp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Rp(e,i){return i}function Ip(e,i){if(Bt){var a=ee.formState;if(a!==null){t:{var l=Ct;if(Bt){if(he){e:{for(var h=he,d=ai;h.nodeType!==8;){if(!d){h=null;break e}if(h=Bn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){he=Bn(h.nextSibling),l=h.data==="F!";break t}}Ss(l)}l=!1}l&&(i=a[0])}}return a=nn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rp,lastRenderedState:i},a.queue=l,a=Qp.bind(null,Ct,l),l.dispatch=a,l=Df(!1),d=Pf.bind(null,Ct,!1,l.queue),l=nn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=WA.bind(null,Ct,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function Cp(e){var i=Ee();return Dp(i,$t,e)}function Dp(e,i,a){if(i=If(e,i,Rp)[0],e=Fu(Bi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Zo(i)}catch(v){throw v===Go?Lu:v}else l=i;i=Ee();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Ct.flags|=2048,wa(9,Gu(),tS.bind(null,h,a),null)),[l,d,e]}function tS(e,i){e.action=i}function Np(e){var i=Ee(),a=$t;if(a!==null)return Dp(i,a,e);Ee(),i=i.memoizedState,a=Ee();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function wa(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Ct.updateQueue,i===null&&(i=wf(),Ct.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Gu(){return{destroy:void 0,resource:void 0}}function Op(){return Ee().memoizedState}function Qu(e,i,a,l){var h=nn();l=l===void 0?null:l,Ct.flags|=e,h.memoizedState=wa(1|i,Gu(),a,l)}function Jo(e,i,a,l){var h=Ee();l=l===void 0?null:l;var d=h.memoizedState.inst;$t!==null&&l!==null&&Ef(l,$t.memoizedState.deps)?h.memoizedState=wa(i,d,a,l):(Ct.flags|=e,h.memoizedState=wa(1|i,d,a,l))}function Mp(e,i){Qu(8390656,8,e,i)}function Vp(e,i){Jo(2048,8,e,i)}function xp(e,i){return Jo(4,2,e,i)}function Pp(e,i){return Jo(4,4,e,i)}function kp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Up(e,i,a){a=a!=null?a.concat([e]):null,Jo(4,4,kp.bind(null,i,e),a)}function Of(){}function Lp(e,i){var a=Ee();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Ef(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function zp(e,i){var a=Ee();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Ef(i,l[1]))return l[0];if(l=e(),Is){un(!0);try{e()}finally{un(!1)}}return a.memoizedState=[l,i],l}function Mf(e,i,a){return a===void 0||(mr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=qy(),Ct.lanes|=e,Tr|=e,a)}function jp(e,i,a,l){return hn(a,i)?a:Aa.current!==null?(e=Mf(e,a,l),hn(e,i)||(Ve=!0),e):(mr&42)===0?(Ve=!0,e.memoizedState=a):(e=qy(),Ct.lanes|=e,Tr|=e,i)}function Bp(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=F.T,T={};F.T=T,Pf(e,!1,i,a);try{var w=h(),L=F.S;if(L!==null&&L(T,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var G=$A(w,l);Wo(e,i,G,pn(e))}else Wo(e,i,l,pn(e))}catch(X){Wo(e,i,{then:function(){},status:"rejected",reason:X},pn())}finally{nt.p=d,F.T=v}}function eS(){}function Vf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=qp(e).queue;Bp(e,h,i,ot,a===null?eS:function(){return Hp(e),a(l)})}function qp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:ot},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Hp(e){var i=qp(e).next.queue;Wo(e,i,{},pn())}function xf(){return Qe(yl)}function Fp(){return Ee().memoizedState}function Gp(){return Ee().memoizedState}function nS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=pn();e=fr(a);var l=dr(i,e,a);l!==null&&(yn(l,i,a),Ko(l,i,a)),i={cache:cf()},e.payload=i;return}i=i.return}}function iS(e,i,a){var l=pn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ku(e)?Kp(i,a):(a=Wh(e,i,a,l),a!==null&&(yn(a,e,l),Yp(a,i,l)))}function Qp(e,i,a){var l=pn();Wo(e,i,a,l)}function Wo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ku(e))Kp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,hn(T,v))return Nu(e,i,h,0),ee===null&&Du(),!1}catch{}finally{}if(a=Wh(e,i,h,l),a!==null)return yn(a,e,l),Yp(a,i,l),!0}return!1}function Pf(e,i,a,l){if(l={lane:2,revertLane:dd(),action:l,hasEagerState:!1,eagerState:null,next:null},Ku(e)){if(i)throw Error(s(479))}else i=Wh(e,a,l,2),i!==null&&yn(i,e,2)}function Ku(e){var i=e.alternate;return e===Ct||i!==null&&i===Ct}function Kp(e,i){Sa=Bu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Yp(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,To(e,a)}}var Yu={readContext:Qe,use:Hu,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useLayoutEffect:me,useInsertionEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useSyncExternalStore:me,useId:me,useHostTransitionStatus:me,useFormState:me,useActionState:me,useOptimistic:me,useMemoCache:me,useCacheRefresh:me},Xp={readContext:Qe,use:Hu,useCallback:function(e,i){return nn().memoizedState=[e,i===void 0?null:i],e},useContext:Qe,useEffect:Mp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Qu(4194308,4,kp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Qu(4194308,4,e,i)},useInsertionEffect:function(e,i){Qu(4,2,e,i)},useMemo:function(e,i){var a=nn();i=i===void 0?null:i;var l=e();if(Is){un(!0);try{e()}finally{un(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=nn();if(a!==void 0){var h=a(i);if(Is){un(!0);try{a(i)}finally{un(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=iS.bind(null,Ct,e),[l.memoizedState,e]},useRef:function(e){var i=nn();return e={current:e},i.memoizedState=e},useState:function(e){e=Df(e);var i=e.queue,a=Qp.bind(null,Ct,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Of,useDeferredValue:function(e,i){var a=nn();return Mf(a,e,i)},useTransition:function(){var e=Df(!1);return e=Bp.bind(null,Ct,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Ct,h=nn();if(Bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),ee===null)throw Error(s(349));(Lt&124)!==0||pp(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Mp(_p.bind(null,l,d,e),[e]),l.flags|=2048,wa(9,Gu(),yp.bind(null,l,d,a,i),null),a},useId:function(){var e=nn(),i=ee.identifierPrefix;if(Bt){var a=Li,l=Ui;a=(l&~(1<<32-Ge(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=qu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=ZA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:xf,useFormState:Ip,useActionState:Ip,useOptimistic:function(e){var i=nn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Pf.bind(null,Ct,!0,a),a.dispatch=i,[e,i]},useMemoCache:Rf,useCacheRefresh:function(){return nn().memoizedState=nS.bind(null,Ct)}},$p={readContext:Qe,use:Hu,useCallback:Lp,useContext:Qe,useEffect:Vp,useImperativeHandle:Up,useInsertionEffect:xp,useLayoutEffect:Pp,useMemo:zp,useReducer:Fu,useRef:Op,useState:function(){return Fu(Bi)},useDebugValue:Of,useDeferredValue:function(e,i){var a=Ee();return jp(a,$t.memoizedState,e,i)},useTransition:function(){var e=Fu(Bi)[0],i=Ee().memoizedState;return[typeof e=="boolean"?e:Zo(e),i]},useSyncExternalStore:gp,useId:Fp,useHostTransitionStatus:xf,useFormState:Cp,useActionState:Cp,useOptimistic:function(e,i){var a=Ee();return Tp(a,$t,e,i)},useMemoCache:Rf,useCacheRefresh:Gp},rS={readContext:Qe,use:Hu,useCallback:Lp,useContext:Qe,useEffect:Vp,useImperativeHandle:Up,useInsertionEffect:xp,useLayoutEffect:Pp,useMemo:zp,useReducer:Cf,useRef:Op,useState:function(){return Cf(Bi)},useDebugValue:Of,useDeferredValue:function(e,i){var a=Ee();return $t===null?Mf(a,e,i):jp(a,$t.memoizedState,e,i)},useTransition:function(){var e=Cf(Bi)[0],i=Ee().memoizedState;return[typeof e=="boolean"?e:Zo(e),i]},useSyncExternalStore:gp,useId:Fp,useHostTransitionStatus:xf,useFormState:Np,useActionState:Np,useOptimistic:function(e,i){var a=Ee();return $t!==null?Tp(a,$t,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:Gp},Ra=null,tl=0;function Xu(e){var i=tl;return tl+=1,Ra===null&&(Ra=[]),op(Ra,e,i)}function el(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function $u(e,i){throw i.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Zp(e){var i=e._init;return i(e._payload)}function Jp(e){function i(P,O){if(e){var U=P.deletions;U===null?(P.deletions=[O],P.flags|=16):U.push(O)}}function a(P,O){if(!e)return null;for(;O!==null;)i(P,O),O=O.sibling;return null}function l(P){for(var O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function h(P,O){return P=ki(P,O),P.index=0,P.sibling=null,P}function d(P,O,U){return P.index=U,e?(U=P.alternate,U!==null?(U=U.index,U<O?(P.flags|=67108866,O):U):(P.flags|=67108866,O)):(P.flags|=1048576,O)}function v(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function T(P,O,U,Q){return O===null||O.tag!==6?(O=ef(U,P.mode,Q),O.return=P,O):(O=h(O,U),O.return=P,O)}function w(P,O,U,Q){var ct=U.type;return ct===K?G(P,O,U.props.children,Q,U.key):O!==null&&(O.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===S&&Zp(ct)===O.type)?(O=h(O,U.props),el(O,U),O.return=P,O):(O=Mu(U.type,U.key,U.props,null,P.mode,Q),el(O,U),O.return=P,O)}function L(P,O,U,Q){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=nf(U,P.mode,Q),O.return=P,O):(O=h(O,U.children||[]),O.return=P,O)}function G(P,O,U,Q,ct){return O===null||O.tag!==7?(O=vs(U,P.mode,Q,ct),O.return=P,O):(O=h(O,U),O.return=P,O)}function X(P,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=ef(""+O,P.mode,U),O.return=P,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case C:return U=Mu(O.type,O.key,O.props,null,P.mode,U),el(U,O),U.return=P,U;case q:return O=nf(O,P.mode,U),O.return=P,O;case S:var Q=O._init;return O=Q(O._payload),X(P,O,U)}if(Gt(O)||V(O))return O=vs(O,P.mode,U,null),O.return=P,O;if(typeof O.then=="function")return X(P,Xu(O),U);if(O.$$typeof===rt)return X(P,ku(P,O),U);$u(P,O)}return null}function z(P,O,U,Q){var ct=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ct!==null?null:T(P,O,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case C:return U.key===ct?w(P,O,U,Q):null;case q:return U.key===ct?L(P,O,U,Q):null;case S:return ct=U._init,U=ct(U._payload),z(P,O,U,Q)}if(Gt(U)||V(U))return ct!==null?null:G(P,O,U,Q,null);if(typeof U.then=="function")return z(P,O,Xu(U),Q);if(U.$$typeof===rt)return z(P,O,ku(P,U),Q);$u(P,U)}return null}function j(P,O,U,Q,ct){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return P=P.get(U)||null,T(O,P,""+Q,ct);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case C:return P=P.get(Q.key===null?U:Q.key)||null,w(O,P,Q,ct);case q:return P=P.get(Q.key===null?U:Q.key)||null,L(O,P,Q,ct);case S:var Dt=Q._init;return Q=Dt(Q._payload),j(P,O,U,Q,ct)}if(Gt(Q)||V(Q))return P=P.get(U)||null,G(O,P,Q,ct,null);if(typeof Q.then=="function")return j(P,O,U,Xu(Q),ct);if(Q.$$typeof===rt)return j(P,O,U,ku(O,Q),ct);$u(O,Q)}return null}function Et(P,O,U,Q){for(var ct=null,Dt=null,dt=O,_t=O=0,Pe=null;dt!==null&&_t<U.length;_t++){dt.index>_t?(Pe=dt,dt=null):Pe=dt.sibling;var jt=z(P,dt,U[_t],Q);if(jt===null){dt===null&&(dt=Pe);break}e&&dt&&jt.alternate===null&&i(P,dt),O=d(jt,O,_t),Dt===null?ct=jt:Dt.sibling=jt,Dt=jt,dt=Pe}if(_t===U.length)return a(P,dt),Bt&&Ts(P,_t),ct;if(dt===null){for(;_t<U.length;_t++)dt=X(P,U[_t],Q),dt!==null&&(O=d(dt,O,_t),Dt===null?ct=dt:Dt.sibling=dt,Dt=dt);return Bt&&Ts(P,_t),ct}for(dt=l(dt);_t<U.length;_t++)Pe=j(dt,P,_t,U[_t],Q),Pe!==null&&(e&&Pe.alternate!==null&&dt.delete(Pe.key===null?_t:Pe.key),O=d(Pe,O,_t),Dt===null?ct=Pe:Dt.sibling=Pe,Dt=Pe);return e&&dt.forEach(function(Nr){return i(P,Nr)}),Bt&&Ts(P,_t),ct}function yt(P,O,U,Q){if(U==null)throw Error(s(151));for(var ct=null,Dt=null,dt=O,_t=O=0,Pe=null,jt=U.next();dt!==null&&!jt.done;_t++,jt=U.next()){dt.index>_t?(Pe=dt,dt=null):Pe=dt.sibling;var Nr=z(P,dt,jt.value,Q);if(Nr===null){dt===null&&(dt=Pe);break}e&&dt&&Nr.alternate===null&&i(P,dt),O=d(Nr,O,_t),Dt===null?ct=Nr:Dt.sibling=Nr,Dt=Nr,dt=Pe}if(jt.done)return a(P,dt),Bt&&Ts(P,_t),ct;if(dt===null){for(;!jt.done;_t++,jt=U.next())jt=X(P,jt.value,Q),jt!==null&&(O=d(jt,O,_t),Dt===null?ct=jt:Dt.sibling=jt,Dt=jt);return Bt&&Ts(P,_t),ct}for(dt=l(dt);!jt.done;_t++,jt=U.next())jt=j(dt,P,_t,jt.value,Q),jt!==null&&(e&&jt.alternate!==null&&dt.delete(jt.key===null?_t:jt.key),O=d(jt,O,_t),Dt===null?ct=jt:Dt.sibling=jt,Dt=jt);return e&&dt.forEach(function(sb){return i(P,sb)}),Bt&&Ts(P,_t),ct}function Jt(P,O,U,Q){if(typeof U=="object"&&U!==null&&U.type===K&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case C:t:{for(var ct=U.key;O!==null;){if(O.key===ct){if(ct=U.type,ct===K){if(O.tag===7){a(P,O.sibling),Q=h(O,U.props.children),Q.return=P,P=Q;break t}}else if(O.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===S&&Zp(ct)===O.type){a(P,O.sibling),Q=h(O,U.props),el(Q,U),Q.return=P,P=Q;break t}a(P,O);break}else i(P,O);O=O.sibling}U.type===K?(Q=vs(U.props.children,P.mode,Q,U.key),Q.return=P,P=Q):(Q=Mu(U.type,U.key,U.props,null,P.mode,Q),el(Q,U),Q.return=P,P=Q)}return v(P);case q:t:{for(ct=U.key;O!==null;){if(O.key===ct)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){a(P,O.sibling),Q=h(O,U.children||[]),Q.return=P,P=Q;break t}else{a(P,O);break}else i(P,O);O=O.sibling}Q=nf(U,P.mode,Q),Q.return=P,P=Q}return v(P);case S:return ct=U._init,U=ct(U._payload),Jt(P,O,U,Q)}if(Gt(U))return Et(P,O,U,Q);if(V(U)){if(ct=V(U),typeof ct!="function")throw Error(s(150));return U=ct.call(U),yt(P,O,U,Q)}if(typeof U.then=="function")return Jt(P,O,Xu(U),Q);if(U.$$typeof===rt)return Jt(P,O,ku(P,U),Q);$u(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(a(P,O.sibling),Q=h(O,U),Q.return=P,P=Q):(a(P,O),Q=ef(U,P.mode,Q),Q.return=P,P=Q),v(P)):a(P,O)}return function(P,O,U,Q){try{tl=0;var ct=Jt(P,O,U,Q);return Ra=null,ct}catch(dt){if(dt===Go||dt===Lu)throw dt;var Dt=fn(29,dt,null,P.mode);return Dt.lanes=Q,Dt.return=P,Dt}finally{}}}var Ia=Jp(!0),Wp=Jp(!1),Nn=Z(null),oi=null;function gr(e){var i=e.alternate;W(Ce,Ce.current&1),W(Nn,e),oi===null&&(i===null||Aa.current!==null||i.memoizedState!==null)&&(oi=e)}function ty(e){if(e.tag===22){if(W(Ce,Ce.current),W(Nn,e),oi===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(oi=e)}}else pr()}function pr(){W(Ce,Ce.current),W(Nn,Nn.current)}function qi(e){it(Nn),oi===e&&(oi=null),it(Ce)}var Ce=Z(0);function Zu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||wd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function kf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Uf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=pn(),h=fr(l);h.payload=i,a!=null&&(h.callback=a),i=dr(e,h,l),i!==null&&(yn(i,e,l),Ko(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=pn(),h=fr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=dr(e,h,l),i!==null&&(yn(i,e,l),Ko(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=pn(),l=fr(a);l.tag=2,i!=null&&(l.callback=i),i=dr(e,l,a),i!==null&&(yn(i,e,a),Ko(i,e,a))}};function ey(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Uo(a,l)||!Uo(h,d):!0}function ny(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Uf.enqueueReplaceState(i,i.state,null)}function Cs(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=E({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Ju=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function iy(e){Ju(e)}function ry(e){console.error(e)}function sy(e){Ju(e)}function Wu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function ay(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Lf(e,i,a){return a=fr(a),a.tag=3,a.payload={element:null},a.callback=function(){Wu(e,i)},a}function oy(e){return e=fr(e),e.tag=3,e}function ly(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){ay(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){ay(i,a,l),typeof h!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function sS(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&qo(i,a,h,!0),a=Nn.current,a!==null){switch(a.tag){case 13:return oi===null?ld():a.alternate===null&&fe===0&&(fe=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===df?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),cd(e,l,h)),!1;case 22:return a.flags|=65536,l===df?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),cd(e,l,h)),!1}throw Error(s(435,a.tag))}return cd(e,l,h),ld(),!1}if(Bt)return i=Nn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==af&&(e=Error(s(422),{cause:l}),Bo(Rn(e,a)))):(l!==af&&(i=Error(s(423),{cause:l}),Bo(Rn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Rn(l,a),h=Lf(e.stateNode,l,h),pf(e,h),fe!==4&&(fe=2)),!1;var d=Error(s(520),{cause:l});if(d=Rn(d,a),ll===null?ll=[d]:ll.push(d),fe!==4&&(fe=2),i===null)return!0;l=Rn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Lf(a.stateNode,l,e),pf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ar===null||!Ar.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=oy(h),ly(h,e,a,l),pf(a,h),!1}a=a.return}while(a!==null);return!1}var uy=Error(s(461)),Ve=!1;function ze(e,i,a,l){i.child=e===null?Wp(i,null,a,l):Ia(i,e.child,a,l)}function cy(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return ws(i),l=Tf(e,i,a,v,d,h),T=Af(),e!==null&&!Ve?(Sf(e,i,h),Hi(e,i,h)):(Bt&&T&&rf(i),i.flags|=1,ze(e,i,l,h),i.child)}function hy(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!tf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,fy(e,i,d,l,h)):(e=Mu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Qf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Uo,a(v,l)&&e.ref===i.ref)return Hi(e,i,h)}return i.flags|=1,e=ki(d,l),e.ref=i.ref,e.return=i,i.child=e}function fy(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Uo(d,l)&&e.ref===i.ref)if(Ve=!1,i.pendingProps=l=d,Qf(e,h))(e.flags&131072)!==0&&(Ve=!0);else return i.lanes=e.lanes,Hi(e,i,h)}return zf(e,i,a,l,h)}function dy(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return my(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Uu(i,d!==null?d.cachePool:null),d!==null?fp(i,d):_f(),ty(i);else return i.lanes=i.childLanes=536870912,my(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Uu(i,d.cachePool),fp(i,d),pr(),i.memoizedState=null):(e!==null&&Uu(i,null),_f(),pr());return ze(e,i,h,a),i.child}function my(e,i,a,l){var h=ff();return h=h===null?null:{parent:Ie._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Uu(i,null),_f(),ty(i),e!==null&&qo(e,i,l,!0),null}function tc(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function zf(e,i,a,l,h){return ws(i),a=Tf(e,i,a,l,void 0,h),l=Af(),e!==null&&!Ve?(Sf(e,i,h),Hi(e,i,h)):(Bt&&l&&rf(i),i.flags|=1,ze(e,i,a,h),i.child)}function gy(e,i,a,l,h,d){return ws(i),i.updateQueue=null,a=mp(i,l,a,h),dp(e),l=Af(),e!==null&&!Ve?(Sf(e,i,d),Hi(e,i,d)):(Bt&&l&&rf(i),i.flags|=1,ze(e,i,a,d),i.child)}function py(e,i,a,l,h){if(ws(i),i.stateNode===null){var d=ya,v=a.contextType;typeof v=="object"&&v!==null&&(d=Qe(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Uf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},mf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Qe(v):ya,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(kf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Uf.enqueueReplaceState(d,d.state,null),Xo(i,l,d,h),Yo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,w=Cs(a,T);d.props=w;var L=d.context,G=a.contextType;v=ya,typeof G=="object"&&G!==null&&(v=Qe(G));var X=a.getDerivedStateFromProps;G=typeof X=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||L!==v)&&ny(i,d,l,v),hr=!1;var z=i.memoizedState;d.state=z,Xo(i,l,d,h),Yo(),L=i.memoizedState,T||z!==L||hr?(typeof X=="function"&&(kf(i,a,X,l),L=i.memoizedState),(w=hr||ey(i,a,w,l,z,L,v))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,gf(e,i),v=i.memoizedProps,G=Cs(a,v),d.props=G,X=i.pendingProps,z=d.context,L=a.contextType,w=ya,typeof L=="object"&&L!==null&&(w=Qe(L)),T=a.getDerivedStateFromProps,(L=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==X||z!==w)&&ny(i,d,l,w),hr=!1,z=i.memoizedState,d.state=z,Xo(i,l,d,h),Yo();var j=i.memoizedState;v!==X||z!==j||hr||e!==null&&e.dependencies!==null&&Pu(e.dependencies)?(typeof T=="function"&&(kf(i,a,T,l),j=i.memoizedState),(G=hr||ey(i,a,G,l,z,j,w)||e!==null&&e.dependencies!==null&&Pu(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,j,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,j,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=w,l=G):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,tc(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ia(i,e.child,null,h),i.child=Ia(i,null,a,h)):ze(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Hi(e,i,h),e}function yy(e,i,a,l){return jo(),i.flags|=256,ze(e,i,a,l),i.child}var jf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bf(e){return{baseLanes:e,cachePool:rp()}}function qf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=On),e}function _y(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Bt){if(h?gr(i):pr(),Bt){var T=he,w;if(w=T){t:{for(w=T,T=ai;w.nodeType!==8;){if(!T){T=null;break t}if(w=Bn(w.nextSibling),w===null){T=null;break t}}T=w}T!==null?(i.memoizedState={dehydrated:T,treeContext:Es!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},w=fn(18,null,null,0),w.stateNode=T,w.return=i,i.child=w,en=i,he=null,w=!0):w=!1}w||Ss(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return wd(T)?i.lanes=32:i.lanes=536870912,null;qi(i)}return T=l.children,l=l.fallback,h?(pr(),h=i.mode,T=ec({mode:"hidden",children:T},h),l=vs(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=Bf(a),h.childLanes=qf(e,v,a),i.memoizedState=jf,l):(gr(i),Hf(i,T))}if(w=e.memoizedState,w!==null&&(T=w.dehydrated,T!==null)){if(d)i.flags&256?(gr(i),i.flags&=-257,i=Ff(e,i,a)):i.memoizedState!==null?(pr(),i.child=e.child,i.flags|=128,i=null):(pr(),h=l.fallback,T=i.mode,l=ec({mode:"visible",children:l.children},T),h=vs(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ia(i,e.child,null,a),l=i.child,l.memoizedState=Bf(a),l.childLanes=qf(e,v,a),i.memoizedState=jf,i=h);else if(gr(i),wd(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,Bo({value:l,source:null,stack:null}),i=Ff(e,i,a)}else if(Ve||qo(e,i,a,!1),v=(a&e.childLanes)!==0,Ve||v){if(v=ee,v!==null&&(l=a&-a,l=(l&42)!==0?1:ir(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==w.retryLane))throw w.retryLane=l,pa(e,l),yn(v,e,l),uy;T.data==="$?"||ld(),i=Ff(e,i,a)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=w.treeContext,he=Bn(T.nextSibling),en=i,Bt=!0,As=null,ai=!1,e!==null&&(Cn[Dn++]=Ui,Cn[Dn++]=Li,Cn[Dn++]=Es,Ui=e.id,Li=e.overflow,Es=i),i=Hf(i,l.children),i.flags|=4096);return i}return h?(pr(),h=l.fallback,T=i.mode,w=e.child,L=w.sibling,l=ki(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,L!==null?h=ki(L,h):(h=vs(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=Bf(a):(w=T.cachePool,w!==null?(L=Ie._currentValue,w=w.parent!==L?{parent:L,pool:L}:w):w=rp(),T={baseLanes:T.baseLanes|a,cachePool:w}),h.memoizedState=T,h.childLanes=qf(e,v,a),i.memoizedState=jf,l):(gr(i),a=e.child,e=a.sibling,a=ki(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Hf(e,i){return i=ec({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function ec(e,i){return e=fn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ff(e,i,a){return Ia(i,e.child,null,a),e=Hf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function vy(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),lf(e.return,i,a)}function Gf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Ey(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(ze(e,i,l.children,a),l=Ce.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vy(e,a,i);else if(e.tag===19)vy(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(W(Ce,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Zu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Gf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Zu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Gf(i,!0,a,null,d);break;case"together":Gf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Hi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Tr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(qo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=ki(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=ki(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Qf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Pu(e)))}function aS(e,i,a){switch(i.tag){case 3:te(i,i.stateNode.containerInfo),cr(i,Ie,e.memoizedState.cache),jo();break;case 27:case 5:nr(i);break;case 4:te(i,i.stateNode.containerInfo);break;case 10:cr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(gr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?_y(e,i,a):(gr(i),e=Hi(e,i,a),e!==null?e.sibling:null);gr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(qo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Ey(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),W(Ce,Ce.current),l)break;return null;case 22:case 23:return i.lanes=0,dy(e,i,a);case 24:cr(i,Ie,e.memoizedState.cache)}return Hi(e,i,a)}function Ty(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ve=!0;else{if(!Qf(e,a)&&(i.flags&128)===0)return Ve=!1,aS(e,i,a);Ve=(e.flags&131072)!==0}else Ve=!1,Bt&&(i.flags&1048576)!==0&&Zg(i,xu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")tf(l)?(e=Cs(l,e),i.tag=1,i=py(null,i,l,e,a)):(i.tag=0,i=zf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===mt){i.tag=11,i=cy(null,i,l,e,a);break t}else if(h===x){i.tag=14,i=hy(null,i,l,e,a);break t}}throw i=Ft(l)||l,Error(s(306,i,""))}}return i;case 0:return zf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Cs(l,i.pendingProps),py(e,i,l,h,a);case 3:t:{if(te(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,gf(e,i),Xo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,cr(i,Ie,l),l!==d.cache&&uf(i,[Ie],a,!0),Yo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=yy(e,i,l,a);break t}else if(l!==h){h=Rn(Error(s(424)),i),Bo(h),i=yy(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(he=Bn(e.firstChild),en=i,Bt=!0,As=null,ai=!0,a=Wp(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(jo(),l===h){i=Hi(e,i,a);break t}ze(e,i,l,a)}i=i.child}return i;case 26:return tc(e,i),e===null?(a=w_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Bt||(a=i.type,e=i.pendingProps,l=gc(At.current).createElement(a),l[be]=i,l[ye]=e,Be(l,a,e),de(l),i.stateNode=l):i.memoizedState=w_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return nr(i),e===null&&Bt&&(l=i.stateNode=A_(i.type,i.pendingProps,At.current),en=i,ai=!0,h=he,wr(i.type)?(Rd=h,he=Bn(l.firstChild)):he=h),ze(e,i,i.pendingProps.children,a),tc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Bt&&((h=l=he)&&(l=xS(l,i.type,i.pendingProps,ai),l!==null?(i.stateNode=l,en=i,he=Bn(l.firstChild),ai=!1,h=!0):h=!1),h||Ss(i)),nr(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,Ad(h,d)?l=null:v!==null&&Ad(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Tf(e,i,JA,null,null,a),yl._currentValue=h),tc(e,i),ze(e,i,l,a),i.child;case 6:return e===null&&Bt&&((e=a=he)&&(a=PS(a,i.pendingProps,ai),a!==null?(i.stateNode=a,en=i,he=null,e=!0):e=!1),e||Ss(i)),null;case 13:return _y(e,i,a);case 4:return te(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ia(i,null,l,a):ze(e,i,l,a),i.child;case 11:return cy(e,i,i.type,i.pendingProps,a);case 7:return ze(e,i,i.pendingProps,a),i.child;case 8:return ze(e,i,i.pendingProps.children,a),i.child;case 12:return ze(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,cr(i,i.type,l.value),ze(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,ws(i),h=Qe(h),l=l(h),i.flags|=1,ze(e,i,l,a),i.child;case 14:return hy(e,i,i.type,i.pendingProps,a);case 15:return fy(e,i,i.type,i.pendingProps,a);case 19:return Ey(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=ec(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=ki(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return dy(e,i,a);case 24:return ws(i),l=Qe(Ie),e===null?(h=ff(),h===null&&(h=ee,d=cf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},mf(i),cr(i,Ie,h)):((e.lanes&a)!==0&&(gf(e,i),Xo(i,null,null,a),Yo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),cr(i,Ie,l)):(l=d.cache,cr(i,Ie,l),l!==h.cache&&uf(i,[Ie],a,!0))),ze(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Fi(e){e.flags|=4}function Ay(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!N_(i)){if(i=Nn.current,i!==null&&((Lt&4194048)===Lt?oi!==null:(Lt&62914560)!==Lt&&(Lt&536870912)===0||i!==oi))throw Qo=df,sp;e.flags|=8192}}function nc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?vo():536870912,e.lanes|=i,Oa|=i)}function nl(e,i){if(!Bt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function oe(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function oS(e,i,a){var l=i.pendingProps;switch(sf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(i),null;case 1:return oe(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ji(Ie),Yn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zo(i)?Fi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,tp())),oe(i),null;case 26:return a=i.memoizedState,e===null?(Fi(i),a!==null?(oe(i),Ay(i,a)):(oe(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Fi(i),oe(i),Ay(i,a)):(oe(i),i.flags&=-16777217):(e.memoizedProps!==l&&Fi(i),oe(i),i.flags&=-16777217),null;case 27:Si(i),a=At.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Fi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return oe(i),null}e=ft.current,zo(i)?Jg(i):(e=A_(h,l,a),i.stateNode=e,Fi(i))}return oe(i),null;case 5:if(Si(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Fi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return oe(i),null}if(e=ft.current,zo(i))Jg(i);else{switch(h=gc(At.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[be]=i,e[ye]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Be(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Fi(i)}}return oe(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Fi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=At.current,zo(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=en,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[be]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||g_(e.nodeValue,a)),e||Ss(i)}else e=gc(e).createTextNode(l),e[be]=i,i.stateNode=e}return oe(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=zo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[be]=i}else jo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;oe(i),h=!1}else h=tp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(qi(i),i):(qi(i),null)}if(qi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),nc(i,i.updateQueue),oe(i),null;case 4:return Yn(),e===null&&yd(i.stateNode.containerInfo),oe(i),null;case 10:return ji(i.type),oe(i),null;case 19:if(it(Ce),h=i.memoizedState,h===null)return oe(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)nl(h,!1);else{if(fe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Zu(e),d!==null){for(i.flags|=128,nl(h,!1),e=d.updateQueue,i.updateQueue=e,nc(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)$g(a,e),a=a.sibling;return W(Ce,Ce.current&1|2),i.child}e=e.sibling}h.tail!==null&&En()>sc&&(i.flags|=128,l=!0,nl(h,!1),i.lanes=4194304)}else{if(!l)if(e=Zu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,nc(i,e),nl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Bt)return oe(i),null}else 2*En()-h.renderingStartTime>sc&&a!==536870912&&(i.flags|=128,l=!0,nl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=En(),i.sibling=null,e=Ce.current,W(Ce,l?e&1|2:e&1),i):(oe(i),null);case 22:case 23:return qi(i),vf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(oe(i),i.subtreeFlags&6&&(i.flags|=8192)):oe(i),a=i.updateQueue,a!==null&&nc(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&it(Rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ji(Ie),oe(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function lS(e,i){switch(sf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ji(Ie),Yn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Si(i),null;case 13:if(qi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));jo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return it(Ce),null;case 4:return Yn(),null;case 10:return ji(i.type),null;case 22:case 23:return qi(i),vf(),e!==null&&it(Rs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ji(Ie),null;case 25:return null;default:return null}}function Sy(e,i){switch(sf(i),i.tag){case 3:ji(Ie),Yn();break;case 26:case 27:case 5:Si(i);break;case 4:Yn();break;case 13:qi(i);break;case 19:it(Ce);break;case 10:ji(i.type);break;case 22:case 23:qi(i),vf(),e!==null&&it(Rs);break;case 24:ji(Ie)}}function il(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Wt(i,i.return,T)}}function yr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var w=a,L=T;try{L()}catch(G){Wt(h,w,G)}}}l=l.next}while(l!==d)}}catch(G){Wt(i,i.return,G)}}function by(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{hp(i,a)}catch(l){Wt(e,e.return,l)}}}function wy(e,i,a){a.props=Cs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Wt(e,i,l)}}function rl(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Wt(e,i,h)}}function li(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Wt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Wt(e,i,h)}else a.current=null}function Ry(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Wt(e,e.return,h)}}function Kf(e,i,a){try{var l=e.stateNode;DS(l,e.type,a,i),l[ye]=i}catch(h){Wt(e,e.return,h)}}function Iy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wr(e.type)||e.tag===4}function Yf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Iy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=mc));else if(l!==4&&(l===27&&wr(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Xf(e,i,a),e=e.sibling;e!==null;)Xf(e,i,a),e=e.sibling}function ic(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&wr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ic(e,i,a),e=e.sibling;e!==null;)ic(e,i,a),e=e.sibling}function Cy(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Be(i,l,a),i[be]=e,i[ye]=a}catch(d){Wt(e,e.return,d)}}var Gi=!1,ge=!1,$f=!1,Dy=typeof WeakSet=="function"?WeakSet:Set,xe=null;function uS(e,i){if(e=e.containerInfo,Ed=Tc,e=jg(e),Kh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,w=-1,L=0,G=0,X=e,z=null;e:for(;;){for(var j;X!==a||h!==0&&X.nodeType!==3||(T=v+h),X!==d||l!==0&&X.nodeType!==3||(w=v+l),X.nodeType===3&&(v+=X.nodeValue.length),(j=X.firstChild)!==null;)z=X,X=j;for(;;){if(X===e)break e;if(z===a&&++L===h&&(T=v),z===d&&++G===l&&(w=v),(j=X.nextSibling)!==null)break;X=z,z=X.parentNode}X=j}a=T===-1||w===-1?null:{start:T,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(Td={focusedElem:e,selectionRange:a},Tc=!1,xe=i;xe!==null;)if(i=xe,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,xe=e;else for(;xe!==null;){switch(i=xe,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Et=Cs(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(Et,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(yt){Wt(a,a.return,yt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)bd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,xe=e;break}xe=i.return}}function Ny(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:_r(e,a),l&4&&il(5,a);break;case 1:if(_r(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Wt(a,a.return,v)}else{var h=Cs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Wt(a,a.return,v)}}l&64&&by(a),l&512&&rl(a,a.return);break;case 3:if(_r(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{hp(e,i)}catch(v){Wt(a,a.return,v)}}break;case 27:i===null&&l&4&&Cy(a);case 26:case 5:_r(e,a),i===null&&l&4&&Ry(a),l&512&&rl(a,a.return);break;case 12:_r(e,a);break;case 13:_r(e,a),l&4&&Vy(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=_S.bind(null,a),kS(e,a))));break;case 22:if(l=a.memoizedState!==null||Gi,!l){i=i!==null&&i.memoizedState!==null||ge,h=Gi;var d=ge;Gi=l,(ge=i)&&!d?vr(e,a,(a.subtreeFlags&8772)!==0):_r(e,a),Gi=h,ge=d}break;case 30:break;default:_r(e,a)}}function Oy(e){var i=e.alternate;i!==null&&(e.alternate=null,Oy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ar(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var se=null,rn=!1;function Qi(e,i,a){for(a=a.child;a!==null;)My(e,i,a),a=a.sibling}function My(e,i,a){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:ge||li(a,i),Qi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ge||li(a,i);var l=se,h=rn;wr(a.type)&&(se=a.stateNode,rn=!1),Qi(e,i,a),dl(a.stateNode),se=l,rn=h;break;case 5:ge||li(a,i);case 6:if(l=se,h=rn,se=null,Qi(e,i,a),se=l,rn=h,se!==null)if(rn)try{(se.nodeType===9?se.body:se.nodeName==="HTML"?se.ownerDocument.body:se).removeChild(a.stateNode)}catch(d){Wt(a,i,d)}else try{se.removeChild(a.stateNode)}catch(d){Wt(a,i,d)}break;case 18:se!==null&&(rn?(e=se,E_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tl(e)):E_(se,a.stateNode));break;case 4:l=se,h=rn,se=a.stateNode.containerInfo,rn=!0,Qi(e,i,a),se=l,rn=h;break;case 0:case 11:case 14:case 15:ge||yr(2,a,i),ge||yr(4,a,i),Qi(e,i,a);break;case 1:ge||(li(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&wy(a,i,l)),Qi(e,i,a);break;case 21:Qi(e,i,a);break;case 22:ge=(l=ge)||a.memoizedState!==null,Qi(e,i,a),ge=l;break;default:Qi(e,i,a)}}function Vy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tl(e)}catch(a){Wt(i,i.return,a)}}function cS(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Dy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Dy),i;default:throw Error(s(435,e.tag))}}function Zf(e,i){var a=cS(e);i.forEach(function(l){var h=vS.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function dn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(wr(T.type)){se=T.stateNode,rn=!1;break t}break;case 5:se=T.stateNode,rn=!1;break t;case 3:case 4:se=T.stateNode.containerInfo,rn=!0;break t}T=T.return}if(se===null)throw Error(s(160));My(d,v,h),se=null,rn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)xy(i,e),i=i.sibling}var jn=null;function xy(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dn(i,e),mn(e),l&4&&(yr(3,e,e.return),il(3,e),yr(5,e,e.return));break;case 1:dn(i,e),mn(e),l&512&&(ge||a===null||li(a,a.return)),l&64&&Gi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=jn;if(dn(i,e),mn(e),l&512&&(ge||a===null||li(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[is]||d[be]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Be(d,l,a),d[be]=e,de(d),l=d;break t;case"link":var v=C_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=h.createElement(l),Be(d,l,a),h.head.appendChild(d);break;case"meta":if(v=C_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=h.createElement(l),Be(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[be]=e,de(d),l=d}e.stateNode=l}else D_(h,e.type,e.stateNode);else e.stateNode=I_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?D_(h,e.type,e.stateNode):I_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Kf(e,e.memoizedProps,a.memoizedProps)}break;case 27:dn(i,e),mn(e),l&512&&(ge||a===null||li(a,a.return)),a!==null&&l&4&&Kf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(dn(i,e),mn(e),l&512&&(ge||a===null||li(a,a.return)),e.flags&32){h=e.stateNode;try{An(h,"")}catch(j){Wt(e,e.return,j)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Kf(e,h,a!==null?a.memoizedProps:h)),l&1024&&($f=!0);break;case 6:if(dn(i,e),mn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(j){Wt(e,e.return,j)}}break;case 3:if(_c=null,h=jn,jn=pc(i.containerInfo),dn(i,e),jn=h,mn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Tl(i.containerInfo)}catch(j){Wt(e,e.return,j)}$f&&($f=!1,Py(e));break;case 4:l=jn,jn=pc(e.stateNode.containerInfo),dn(i,e),mn(e),jn=l;break;case 12:dn(i,e),mn(e);break;case 13:dn(i,e),mn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(id=En()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zf(e,l)));break;case 22:h=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,L=Gi,G=ge;if(Gi=L||h,ge=G||w,dn(i,e),ge=G,Gi=L,mn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||Gi||ge||Ds(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=w.stateNode;var X=w.memoizedProps.style,z=X!=null&&X.hasOwnProperty("display")?X.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(j){Wt(w,w.return,j)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(j){Wt(w,w.return,j)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Zf(e,a))));break;case 19:dn(i,e),mn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zf(e,l)));break;case 30:break;case 21:break;default:dn(i,e),mn(e)}}function mn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(Iy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Yf(e);ic(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(An(v,""),a.flags&=-33);var T=Yf(e);ic(e,T,v);break;case 3:case 4:var w=a.stateNode.containerInfo,L=Yf(e);Xf(e,L,w);break;default:throw Error(s(161))}}catch(G){Wt(e,e.return,G)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Py(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Py(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function _r(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ny(e,i.alternate,i),i=i.sibling}function Ds(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:yr(4,i,i.return),Ds(i);break;case 1:li(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&wy(i,i.return,a),Ds(i);break;case 27:dl(i.stateNode);case 26:case 5:li(i,i.return),Ds(i);break;case 22:i.memoizedState===null&&Ds(i);break;case 30:Ds(i);break;default:Ds(i)}e=e.sibling}}function vr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:vr(h,d,a),il(4,d);break;case 1:if(vr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Wt(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)cp(w[h],T)}catch(L){Wt(l,l.return,L)}}a&&v&64&&by(d),rl(d,d.return);break;case 27:Cy(d);case 26:case 5:vr(h,d,a),a&&l===null&&v&4&&Ry(d),rl(d,d.return);break;case 12:vr(h,d,a);break;case 13:vr(h,d,a),a&&v&4&&Vy(h,d);break;case 22:d.memoizedState===null&&vr(h,d,a),rl(d,d.return);break;case 30:break;default:vr(h,d,a)}i=i.sibling}}function Jf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ho(a))}function Wf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ho(e))}function ui(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)ky(e,i,a,l),i=i.sibling}function ky(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ui(e,i,a,l),h&2048&&il(9,i);break;case 1:ui(e,i,a,l);break;case 3:ui(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ho(e)));break;case 12:if(h&2048){ui(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Wt(i,i.return,w)}}else ui(e,i,a,l);break;case 13:ui(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?ui(e,i,a,l):sl(e,i):d._visibility&2?ui(e,i,a,l):(d._visibility|=2,Ca(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Jf(v,i);break;case 24:ui(e,i,a,l),h&2048&&Wf(i.alternate,i);break;default:ui(e,i,a,l)}}function Ca(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,T=a,w=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:Ca(d,v,T,w,h),il(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&2?Ca(d,v,T,w,h):sl(d,v):(G._visibility|=2,Ca(d,v,T,w,h)),h&&L&2048&&Jf(v.alternate,v);break;case 24:Ca(d,v,T,w,h),h&&L&2048&&Wf(v.alternate,v);break;default:Ca(d,v,T,w,h)}i=i.sibling}}function sl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:sl(a,l),h&2048&&Jf(l.alternate,l);break;case 24:sl(a,l),h&2048&&Wf(l.alternate,l);break;default:sl(a,l)}i=i.sibling}}var al=8192;function Da(e){if(e.subtreeFlags&al)for(e=e.child;e!==null;)Uy(e),e=e.sibling}function Uy(e){switch(e.tag){case 26:Da(e),e.flags&al&&e.memoizedState!==null&&XS(jn,e.memoizedState,e.memoizedProps);break;case 5:Da(e);break;case 3:case 4:var i=jn;jn=pc(e.stateNode.containerInfo),Da(e),jn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=al,al=16777216,Da(e),al=i):Da(e));break;default:Da(e)}}function Ly(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ol(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];xe=l,jy(l,e)}Ly(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zy(e),e=e.sibling}function zy(e){switch(e.tag){case 0:case 11:case 15:ol(e),e.flags&2048&&yr(9,e,e.return);break;case 3:ol(e);break;case 12:ol(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,rc(e)):ol(e);break;default:ol(e)}}function rc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];xe=l,jy(l,e)}Ly(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:yr(8,i,i.return),rc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,rc(i));break;default:rc(i)}e=e.sibling}}function jy(e,i){for(;xe!==null;){var a=xe;switch(a.tag){case 0:case 11:case 15:yr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,xe=l;else t:for(a=e;xe!==null;){l=xe;var h=l.sibling,d=l.return;if(Oy(l),l===a){xe=null;break t}if(h!==null){h.return=d,xe=h;break t}xe=d}}}var hS={getCacheForType:function(e){var i=Qe(Ie),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},fS=typeof WeakMap=="function"?WeakMap:Map,Kt=0,ee=null,Ot=null,Lt=0,Yt=0,gn=null,Er=!1,Na=!1,td=!1,Ki=0,fe=0,Tr=0,Ns=0,ed=0,On=0,Oa=0,ll=null,sn=null,nd=!1,id=0,sc=1/0,ac=null,Ar=null,je=0,Sr=null,Ma=null,Va=0,rd=0,sd=null,By=null,ul=0,ad=null;function pn(){if((Kt&2)!==0&&Lt!==0)return Lt&-Lt;if(F.T!==null){var e=Ea;return e!==0?e:dd()}return rr()}function qy(){On===0&&(On=(Lt&536870912)===0||Bt?_o():536870912);var e=Nn.current;return e!==null&&(e.flags|=32),On}function yn(e,i,a){(e===ee&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)&&(xa(e,0),br(e,Lt,On,!1)),wi(e,a),((Kt&2)===0||e!==ee)&&(e===ee&&((Kt&2)===0&&(Ns|=a),fe===4&&br(e,Lt,On,!1)),ci(e))}function Hy(e,i,a){if((Kt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||ns(e,i),h=l?gS(e,i):ud(e,i,!0),d=l;do{if(h===0){Na&&!l&&br(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!dS(a)){h=ud(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=ll;var w=T.current.memoizedState.isDehydrated;if(w&&(xa(T,v).flags|=256),v=ud(T,v,!1),v!==2){if(td&&!w){T.errorRecoveryDisabledLanes|=d,Ns|=d,h=4;break t}d=sn,sn=h,d!==null&&(sn===null?sn=d:sn.push.apply(sn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){xa(e,0),br(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:br(l,i,On,!Er);break t;case 2:sn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=id+300-En(),10<h)){if(br(l,i,On,!Er),Zs(l,0,!0)!==0)break t;l.timeoutHandle=__(Fy.bind(null,l,a,sn,ac,nd,i,On,Ns,Oa,Er,d,2,-0,0),h);break t}Fy(l,a,sn,ac,nd,i,On,Ns,Oa,Er,d,0,-0,0)}}break}while(!0);ci(e)}function Fy(e,i,a,l,h,d,v,T,w,L,G,X,z,j){if(e.timeoutHandle=-1,X=i.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(pl={stylesheets:null,count:0,unsuspend:YS},Uy(i),X=$S(),X!==null)){e.cancelPendingCommit=X(Zy.bind(null,e,i,d,a,l,h,v,T,w,G,1,z,j)),br(e,d,v,!L);return}Zy(e,i,d,a,l,h,v,T,w)}function dS(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!hn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(e,i,a,l){i&=~ed,i&=~Ns,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Ge(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Xn(e,a,i)}function oc(){return(Kt&6)===0?(cl(0),!1):!0}function od(){if(Ot!==null){if(Yt===0)var e=Ot.return;else e=Ot,zi=bs=null,bf(e),Ra=null,tl=0,e=Ot;for(;e!==null;)Sy(e.alternate,e),e=e.return;Ot=null}}function xa(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,OS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),od(),ee=e,Ot=a=ki(e.current,null),Lt=i,Yt=0,gn=null,Er=!1,Na=ns(e,i),td=!1,Oa=On=ed=Ns=Tr=fe=0,sn=ll=null,nd=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ge(l),d=1<<h;i|=e[h],l&=~d}return Ki=i,Du(),a}function Gy(e,i){Ct=null,F.H=Yu,i===Go||i===Lu?(i=lp(),Yt=3):i===sp?(i=lp(),Yt=4):Yt=i===uy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,gn=i,Ot===null&&(fe=1,Wu(e,Rn(i,e.current)))}function Qy(){var e=F.H;return F.H=Yu,e===null?Yu:e}function Ky(){var e=F.A;return F.A=hS,e}function ld(){fe=4,Er||(Lt&4194048)!==Lt&&Nn.current!==null||(Na=!0),(Tr&134217727)===0&&(Ns&134217727)===0||ee===null||br(ee,Lt,On,!1)}function ud(e,i,a){var l=Kt;Kt|=2;var h=Qy(),d=Ky();(ee!==e||Lt!==i)&&(ac=null,xa(e,i)),i=!1;var v=fe;t:do try{if(Yt!==0&&Ot!==null){var T=Ot,w=gn;switch(Yt){case 8:od(),v=6;break t;case 3:case 2:case 9:case 6:Nn.current===null&&(i=!0);var L=Yt;if(Yt=0,gn=null,Pa(e,T,w,L),a&&Na){v=0;break t}break;default:L=Yt,Yt=0,gn=null,Pa(e,T,w,L)}}mS(),v=fe;break}catch(G){Gy(e,G)}while(!0);return i&&e.shellSuspendCounter++,zi=bs=null,Kt=l,F.H=h,F.A=d,Ot===null&&(ee=null,Lt=0,Du()),v}function mS(){for(;Ot!==null;)Yy(Ot)}function gS(e,i){var a=Kt;Kt|=2;var l=Qy(),h=Ky();ee!==e||Lt!==i?(ac=null,sc=En()+500,xa(e,i)):Na=ns(e,i);t:do try{if(Yt!==0&&Ot!==null){i=Ot;var d=gn;e:switch(Yt){case 1:Yt=0,gn=null,Pa(e,i,d,1);break;case 2:case 9:if(ap(d)){Yt=0,gn=null,Xy(i);break}i=function(){Yt!==2&&Yt!==9||ee!==e||(Yt=7),ci(e)},d.then(i,i);break t;case 3:Yt=7;break t;case 4:Yt=5;break t;case 7:ap(d)?(Yt=0,gn=null,Xy(i)):(Yt=0,gn=null,Pa(e,i,d,7));break;case 5:var v=null;switch(Ot.tag){case 26:v=Ot.memoizedState;case 5:case 27:var T=Ot;if(!v||N_(v)){Yt=0,gn=null;var w=T.sibling;if(w!==null)Ot=w;else{var L=T.return;L!==null?(Ot=L,lc(L)):Ot=null}break e}}Yt=0,gn=null,Pa(e,i,d,5);break;case 6:Yt=0,gn=null,Pa(e,i,d,6);break;case 8:od(),fe=6;break t;default:throw Error(s(462))}}pS();break}catch(G){Gy(e,G)}while(!0);return zi=bs=null,F.H=l,F.A=h,Kt=a,Ot!==null?0:(ee=null,Lt=0,Du(),fe)}function pS(){for(;Ot!==null&&!mo();)Yy(Ot)}function Yy(e){var i=Ty(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,i===null?lc(e):Ot=i}function Xy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=gy(a,i,i.pendingProps,i.type,void 0,Lt);break;case 11:i=gy(a,i,i.pendingProps,i.type.render,i.ref,Lt);break;case 5:bf(i);default:Sy(a,i),i=Ot=$g(i,Ki),i=Ty(a,i,Ki)}e.memoizedProps=e.pendingProps,i===null?lc(e):Ot=i}function Pa(e,i,a,l){zi=bs=null,bf(i),Ra=null,tl=0;var h=i.return;try{if(sS(e,h,i,a,Lt)){fe=1,Wu(e,Rn(a,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;fe=1,Wu(e,Rn(a,e.current)),Ot=null;return}i.flags&32768?(Bt||l===1?e=!0:Na||(Lt&536870912)!==0?e=!1:(Er=e=!0,(l===2||l===9||l===3||l===6)&&(l=Nn.current,l!==null&&l.tag===13&&(l.flags|=16384))),$y(i,e)):lc(i)}function lc(e){var i=e;do{if((i.flags&32768)!==0){$y(i,Er);return}e=i.return;var a=oS(i.alternate,i,Ki);if(a!==null){Ot=a;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);fe===0&&(fe=5)}function $y(e,i){do{var a=lS(e.alternate,e);if(a!==null){a.flags&=32767,Ot=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=a}while(e!==null);fe=6,Ot=null}function Zy(e,i,a,l,h,d,v,T,w){e.cancelPendingCommit=null;do uc();while(je!==0);if((Kt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Jh,Eo(e,a,d,v,T,w),e===ee&&(Ot=ee=null,Lt=0),Ma=i,Sr=e,Va=a,rd=d,sd=h,By=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ES(Jr,function(){return n_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=nt.p,nt.p=2,v=Kt,Kt|=4;try{uS(e,i,a)}finally{Kt=v,nt.p=h,F.T=l}}je=1,Jy(),Wy(),t_()}}function Jy(){if(je===1){je=0;var e=Sr,i=Ma,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=nt.p;nt.p=2;var h=Kt;Kt|=4;try{xy(i,e);var d=Td,v=jg(e.containerInfo),T=d.focusedElem,w=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&zg(T.ownerDocument.documentElement,T)){if(w!==null&&Kh(T)){var L=w.start,G=w.end;if(G===void 0&&(G=L),"selectionStart"in T)T.selectionStart=L,T.selectionEnd=Math.min(G,T.value.length);else{var X=T.ownerDocument||document,z=X&&X.defaultView||window;if(z.getSelection){var j=z.getSelection(),Et=T.textContent.length,yt=Math.min(w.start,Et),Jt=w.end===void 0?yt:Math.min(w.end,Et);!j.extend&&yt>Jt&&(v=Jt,Jt=yt,yt=v);var P=Lg(T,yt),O=Lg(T,Jt);if(P&&O&&(j.rangeCount!==1||j.anchorNode!==P.node||j.anchorOffset!==P.offset||j.focusNode!==O.node||j.focusOffset!==O.offset)){var U=X.createRange();U.setStart(P.node,P.offset),j.removeAllRanges(),yt>Jt?(j.addRange(U),j.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),j.addRange(U))}}}}for(X=[],j=T;j=j.parentNode;)j.nodeType===1&&X.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<X.length;T++){var Q=X[T];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Tc=!!Ed,Td=Ed=null}finally{Kt=h,nt.p=l,F.T=a}}e.current=i,je=2}}function Wy(){if(je===2){je=0;var e=Sr,i=Ma,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=nt.p;nt.p=2;var h=Kt;Kt|=4;try{Ny(e,i.alternate,i)}finally{Kt=h,nt.p=l,F.T=a}}je=3}}function t_(){if(je===4||je===3){je=0,ru();var e=Sr,i=Ma,a=Va,l=By;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?je=5:(je=0,Ma=Sr=null,e_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Ar=null),Js(a),i=i.stateNode,Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(ce,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=nt.p,nt.p=2,F.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{F.T=i,nt.p=h}}(Va&3)!==0&&uc(),ci(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===ad?ul++:(ul=0,ad=e):ul=0,cl(0)}}function e_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ho(i)))}function uc(e){return Jy(),Wy(),t_(),n_()}function n_(){if(je!==5)return!1;var e=Sr,i=rd;rd=0;var a=Js(Va),l=F.T,h=nt.p;try{nt.p=32>a?32:a,F.T=null,a=sd,sd=null;var d=Sr,v=Va;if(je=0,Ma=Sr=null,Va=0,(Kt&6)!==0)throw Error(s(331));var T=Kt;if(Kt|=4,zy(d.current),ky(d,d.current,v,a),Kt=T,cl(0,!1),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(ce,d)}catch{}return!0}finally{nt.p=h,F.T=l,e_(e,i)}}function i_(e,i,a){i=Rn(a,i),i=Lf(e.stateNode,i,2),e=dr(e,i,2),e!==null&&(wi(e,2),ci(e))}function Wt(e,i,a){if(e.tag===3)i_(e,e,a);else for(;i!==null;){if(i.tag===3){i_(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ar===null||!Ar.has(l))){e=Rn(a,e),a=oy(2),l=dr(i,a,2),l!==null&&(ly(a,l,i,e),wi(l,2),ci(l));break}}i=i.return}}function cd(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new fS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(td=!0,h.add(a),e=yS.bind(null,e,i,a),i.then(e,e))}function yS(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ee===e&&(Lt&a)===a&&(fe===4||fe===3&&(Lt&62914560)===Lt&&300>En()-id?(Kt&2)===0&&xa(e,0):ed|=a,Oa===Lt&&(Oa=0)),ci(e)}function r_(e,i){i===0&&(i=vo()),e=pa(e,i),e!==null&&(wi(e,i),ci(e))}function _S(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),r_(e,a)}function vS(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),r_(e,a)}function ES(e,i){return $r(e,i)}var cc=null,ka=null,hd=!1,hc=!1,fd=!1,Os=0;function ci(e){e!==ka&&e.next===null&&(ka===null?cc=ka=e:ka=ka.next=e),hc=!0,hd||(hd=!0,AS())}function cl(e,i){if(!fd&&hc){fd=!0;do for(var a=!1,l=cc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Ge(42|e)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,l_(l,d))}else d=Lt,d=Zs(l,l===ee?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||ns(l,d)||(a=!0,l_(l,d));l=l.next}while(a);fd=!1}}function TS(){s_()}function s_(){hc=hd=!1;var e=0;Os!==0&&(NS()&&(e=Os),Os=0);for(var i=En(),a=null,l=cc;l!==null;){var h=l.next,d=a_(l,i);d===0?(l.next=null,a===null?cc=h:a.next=h,h===null&&(ka=a)):(a=l,(e!==0||(d&3)!==0)&&(hc=!0)),l=h}cl(e)}function a_(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ge(d),T=1<<v,w=h[v];w===-1?((T&a)===0||(T&l)!==0)&&(h[v]=yo(T,i)):w<=i&&(e.expiredLanes|=T),d&=~T}if(i=ee,a=Lt,a=Zs(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Zr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ns(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Zr(l),Js(a)){case 2:case 8:a=Xs;break;case 32:a=Jr;break;case 268435456:a=$s;break;default:a=Jr}return l=o_.bind(null,e),a=$r(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Zr(l),e.callbackPriority=2,e.callbackNode=null,2}function o_(e,i){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(uc()&&e.callbackNode!==a)return null;var l=Lt;return l=Zs(e,e===ee?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Hy(e,l,i),a_(e,En()),e.callbackNode!=null&&e.callbackNode===a?o_.bind(null,e):null)}function l_(e,i){if(uc())return null;Hy(e,i,!0)}function AS(){MS(function(){(Kt&6)!==0?$r(go,TS):s_()})}function dd(){return Os===0&&(Os=_o()),Os}function u_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ra(""+e)}function c_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function SS(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=u_((h[ye]||null).action),v=l.submitter;v&&(i=(i=v[ye]||null)?u_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new sa("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Os!==0){var w=v?c_(h,v):new FormData(h);Vf(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(T.preventDefault(),w=v?c_(h,v):new FormData(h),Vf(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var md=0;md<Zh.length;md++){var gd=Zh[md],bS=gd.toLowerCase(),wS=gd[0].toUpperCase()+gd.slice(1);zn(bS,"on"+wS)}zn(Hg,"onAnimationEnd"),zn(Fg,"onAnimationIteration"),zn(Gg,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(qA,"onTransitionRun"),zn(HA,"onTransitionStart"),zn(FA,"onTransitionCancel"),zn(Qg,"onTransitionEnd"),Ii("onMouseEnter",["mouseout","mouseover"]),Ii("onMouseLeave",["mouseout","mouseover"]),Ii("onPointerEnter",["pointerout","pointerover"]),Ii("onPointerLeave",["pointerout","pointerover"]),Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Un("onBeforeInput",["compositionend","keypress","textInput","paste"]),Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function h_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],w=T.instance,L=T.currentTarget;if(T=T.listener,w!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(G){Ju(G)}h.currentTarget=null,d=w}else for(v=0;v<l.length;v++){if(T=l[v],w=T.instance,L=T.currentTarget,T=T.listener,w!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(G){Ju(G)}h.currentTarget=null,d=w}}}}function Mt(e,i){var a=i[Ao];a===void 0&&(a=i[Ao]=new Set);var l=e+"__bubble";a.has(l)||(f_(i,e,2,!1),a.add(l))}function pd(e,i,a){var l=0;i&&(l|=4),f_(a,e,l,i)}var fc="_reactListening"+Math.random().toString(36).slice(2);function yd(e){if(!e[fc]){e[fc]=!0,So.forEach(function(a){a!=="selectionchange"&&(RS.has(a)||pd(a,!1,e),pd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[fc]||(i[fc]=!0,pd("selectionchange",!1,i))}}function f_(e,i,a,l){switch(k_(i)){case 2:var h=WS;break;case 8:h=tb;break;default:h=Od}a=h.bind(null,i,a,e),h=void 0,!bn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function _d(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=Ri(T),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){l=d=v;continue t}T=T.parentNode}}l=l.return}mu(function(){var L=d,G=Sn(a),X=[];t:{var z=Kg.get(e);if(z!==void 0){var j=sa,Et=e;switch(e){case"keypress":if(ei(a)===0)break t;case"keydown":case"keyup":j=ha;break;case"focusin":Et="focus",j=la;break;case"focusout":Et="blur",j=la;break;case"beforeblur":case"afterblur":j=la;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=wn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Au;break;case Hg:case Fg:case Gg:j=ua;break;case Qg:j=bu;break;case"scroll":case"scrollend":j=gu;break;case"wheel":j=fa;break;case"copy":case"cut":case"paste":j=ca;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Po;break;case"toggle":case"beforetoggle":j=Ru}var yt=(i&4)!==0,Jt=!yt&&(e==="scroll"||e==="scrollend"),P=yt?z!==null?z+"Capture":null:z;yt=[];for(var O=L,U;O!==null;){var Q=O;if(U=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||U===null||P===null||(Q=cs(O,P),Q!=null&&yt.push(fl(O,Q,U))),Jt)break;O=O.return}0<yt.length&&(z=new j(z,Et,null,a,G),X.push({event:z,listeners:yt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&a!==Ni&&(Et=a.relatedTarget||a.fromElement)&&(Ri(Et)||Et[Tn]))break t;if((j||z)&&(z=G.window===G?G:(z=G.ownerDocument)?z.defaultView||z.parentWindow:window,j?(Et=a.relatedTarget||a.toElement,j=L,Et=Et?Ri(Et):null,Et!==null&&(Jt=u(Et),yt=Et.tag,Et!==Jt||yt!==5&&yt!==27&&yt!==6)&&(Et=null)):(j=null,Et=L),j!==Et)){if(yt=wn,Q="onMouseLeave",P="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(yt=Po,Q="onPointerLeave",P="onPointerEnter",O="pointer"),Jt=j==null?z:Zn(j),U=Et==null?z:Zn(Et),z=new yt(Q,O+"leave",j,a,G),z.target=Jt,z.relatedTarget=U,Q=null,Ri(G)===L&&(yt=new yt(P,O+"enter",Et,a,G),yt.target=U,yt.relatedTarget=Jt,Q=yt),Jt=Q,j&&Et)e:{for(yt=j,P=Et,O=0,U=yt;U;U=Ua(U))O++;for(U=0,Q=P;Q;Q=Ua(Q))U++;for(;0<O-U;)yt=Ua(yt),O--;for(;0<U-O;)P=Ua(P),U--;for(;O--;){if(yt===P||P!==null&&yt===P.alternate)break e;yt=Ua(yt),P=Ua(P)}yt=null}else yt=null;j!==null&&d_(X,z,j,yt,!1),Et!==null&&Jt!==null&&d_(X,Jt,Et,yt,!0)}}t:{if(z=L?Zn(L):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var ct=Mg;else if(Re(z))if(Vg)ct=zA;else{ct=UA;var Dt=kA}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&Co(L.elementType)&&(ct=Mg):ct=LA;if(ct&&(ct=ct(e,L))){Pi(X,ct,a,G);break t}Dt&&Dt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&lr(z,"number",z.value)}switch(Dt=L?Zn(L):window,e){case"focusin":(Re(Dt)||Dt.contentEditable==="true")&&(da=Dt,Yh=L,Lo=null);break;case"focusout":Lo=Yh=da=null;break;case"mousedown":Xh=!0;break;case"contextmenu":case"mouseup":case"dragend":Xh=!1,Bg(X,a,G);break;case"selectionchange":if(BA)break;case"keydown":case"keyup":Bg(X,a,G)}var dt;if(ri)t:{switch(e){case"compositionstart":var _t="onCompositionStart";break t;case"compositionend":_t="onCompositionEnd";break t;case"compositionupdate":_t="onCompositionUpdate";break t}_t=void 0}else kt?B(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(_&&a.locale!=="ko"&&(kt||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&kt&&(dt=No()):(ti=G,ur="value"in ti?ti.value:ti.textContent,kt=!0)),Dt=dc(L,_t),0<Dt.length&&(_t=new Vo(_t,e,null,a,G),X.push({event:_t,listeners:Dt}),dt?_t.data=dt:(dt=tt(a),dt!==null&&(_t.data=dt)))),(dt=g?we(e,a):Ut(e,a))&&(_t=dc(L,"onBeforeInput"),0<_t.length&&(Dt=new Vo("onBeforeInput","beforeinput",null,a,G),X.push({event:Dt,listeners:_t}),Dt.data=dt)),SS(X,e,L,a,G)}h_(X,i)})}function fl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function dc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=cs(e,a),h!=null&&l.unshift(fl(e,h,d)),h=cs(e,i),h!=null&&l.push(fl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Ua(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function d_(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,w=T.alternate,L=T.stateNode;if(T=T.tag,w!==null&&w===l)break;T!==5&&T!==26&&T!==27||L===null||(w=L,h?(L=cs(a,d),L!=null&&v.unshift(fl(a,L,w))):h||(L=cs(a,d),L!=null&&v.push(fl(a,L,w)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var IS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function m_(e){return(typeof e=="string"?e:""+e).replace(IS,`
`).replace(CS,"")}function g_(e,i){return i=m_(i),m_(e)===i}function mc(){}function Zt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||An(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&An(e,""+l);break;case"className":Jn(e,"class",l);break;case"tabIndex":Jn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,a,l);break;case"style":Io(e,l,d);break;case"data":if(i!=="object"){Jn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ra(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Zt(e,i,"name",h.name,h,null),Zt(e,i,"formEncType",h.formEncType,h,null),Zt(e,i,"formMethod",h.formMethod,h,null),Zt(e,i,"formTarget",h.formTarget,h,null)):(Zt(e,i,"encType",h.encType,h,null),Zt(e,i,"method",h.method,h,null),Zt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ra(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=mc);break;case"onScroll":l!=null&&Mt("scroll",e);break;case"onScrollEnd":l!=null&&Mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ra(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Mt("beforetoggle",e),Mt("toggle",e),or(e,"popover",l);break;case"xlinkActuate":Ue(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ue(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ue(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ue(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ue(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ue(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":or(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bh.get(a)||a,or(e,a,l))}}function vd(e,i,a,l,h,d){switch(a){case"style":Io(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?An(e,l):(typeof l=="number"||typeof l=="bigint")&&An(e,""+l);break;case"onScroll":l!=null&&Mt("scroll",e);break;case"onScrollEnd":l!=null&&Mt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=mc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ws.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[ye]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):or(e,a,l)}}}function Be(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",e),Mt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Zt(e,i,d,v,a,null)}}h&&Zt(e,i,"srcSet",a.srcSet,a,null),l&&Zt(e,i,"src",a.src,a,null);return;case"input":Mt("invalid",e);var T=d=v=h=null,w=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":v=G;break;case"checked":w=G;break;case"defaultChecked":L=G;break;case"value":d=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:Zt(e,i,l,G,a,null)}}os(e,d,T,w,L,v,h,!1),ia(e);return;case"select":Mt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Zt(e,i,h,T,a,null)}i=d,a=v,e.multiple=!!l,i!=null?Di(e,!!l,i,!1):a!=null&&Di(e,!!l,a,!0);return;case"textarea":Mt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Zt(e,i,v,T,a,null)}ls(e,l,h,d),ia(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Zt(e,i,w,l,a,null)}return;case"dialog":Mt("beforetoggle",e),Mt("toggle",e),Mt("cancel",e),Mt("close",e);break;case"iframe":case"object":Mt("load",e);break;case"video":case"audio":for(l=0;l<hl.length;l++)Mt(hl[l],e);break;case"image":Mt("error",e),Mt("load",e);break;case"details":Mt("toggle",e);break;case"embed":case"source":case"link":Mt("error",e),Mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Zt(e,i,L,l,a,null)}return;default:if(Co(i)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&vd(e,i,G,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Zt(e,i,T,l,a,null))}function DS(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,w=null,L=null,G=null;for(j in a){var X=a[j];if(a.hasOwnProperty(j)&&X!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":w=X;default:l.hasOwnProperty(j)||Zt(e,i,j,null,l,X)}}for(var z in l){var j=l[z];if(X=a[z],l.hasOwnProperty(z)&&(j!=null||X!=null))switch(z){case"type":d=j;break;case"name":h=j;break;case"checked":L=j;break;case"defaultChecked":G=j;break;case"value":v=j;break;case"defaultValue":T=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:j!==X&&Zt(e,i,z,j,l,X)}}cn(e,v,T,w,L,G,d,h);return;case"select":j=v=T=z=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":j=w;default:l.hasOwnProperty(d)||Zt(e,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==w&&Zt(e,i,h,d,l,w)}i=T,a=v,l=j,z!=null?Di(e,!!a,z,!1):!!l!=!!a&&(i!=null?Di(e,!!a,i,!0):Di(e,!!a,a?[]:"",!1));return;case"textarea":j=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Zt(e,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":j=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Zt(e,i,v,h,l,d)}Xt(e,z,j);return;case"option":for(var Et in a)if(z=a[Et],a.hasOwnProperty(Et)&&z!=null&&!l.hasOwnProperty(Et))switch(Et){case"selected":e.selected=!1;break;default:Zt(e,i,Et,null,l,z)}for(w in l)if(z=l[w],j=a[w],l.hasOwnProperty(w)&&z!==j&&(z!=null||j!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Zt(e,i,w,z,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var yt in a)z=a[yt],a.hasOwnProperty(yt)&&z!=null&&!l.hasOwnProperty(yt)&&Zt(e,i,yt,null,l,z);for(L in l)if(z=l[L],j=a[L],l.hasOwnProperty(L)&&z!==j&&(z!=null||j!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Zt(e,i,L,z,l,j)}return;default:if(Co(i)){for(var Jt in a)z=a[Jt],a.hasOwnProperty(Jt)&&z!==void 0&&!l.hasOwnProperty(Jt)&&vd(e,i,Jt,void 0,l,z);for(G in l)z=l[G],j=a[G],!l.hasOwnProperty(G)||z===j||z===void 0&&j===void 0||vd(e,i,G,z,l,j);return}}for(var P in a)z=a[P],a.hasOwnProperty(P)&&z!=null&&!l.hasOwnProperty(P)&&Zt(e,i,P,null,l,z);for(X in l)z=l[X],j=a[X],!l.hasOwnProperty(X)||z===j||z==null&&j==null||Zt(e,i,X,z,l,j)}var Ed=null,Td=null;function gc(e){return e.nodeType===9?e:e.ownerDocument}function p_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Ad(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Sd=null;function NS(){var e=window.event;return e&&e.type==="popstate"?e===Sd?!1:(Sd=e,!0):(Sd=null,!1)}var __=typeof setTimeout=="function"?setTimeout:void 0,OS=typeof clearTimeout=="function"?clearTimeout:void 0,v_=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof v_<"u"?function(e){return v_.resolve(null).then(e).catch(VS)}:__;function VS(e){setTimeout(function(){throw e})}function wr(e){return e==="head"}function E_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&dl(v.documentElement),a&2&&dl(v.body),a&4)for(a=v.head,dl(a),v=a.firstChild;v;){var T=v.nextSibling,w=v.nodeName;v[is]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){e.removeChild(d),Tl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Tl(i)}function bd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bd(a),ar(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function xS(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[is])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Bn(e.nextSibling),e===null)break}return null}function PS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Bn(e.nextSibling),e===null))return null;return e}function wd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function kS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Bn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Rd=null;function T_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function A_(e,i,a){switch(i=gc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function dl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ar(e)}var Mn=new Map,S_=new Set;function pc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yi=nt.d;nt.d={f:US,r:LS,D:zS,C:jS,L:BS,m:qS,X:FS,S:HS,M:GS};function US(){var e=Yi.f(),i=oc();return e||i}function LS(e){var i=$n(e);i!==null&&i.tag===5&&i.type==="form"?Hp(i):Yi.r(e)}var La=typeof document>"u"?null:document;function b_(e,i,a){var l=La;if(l&&typeof i=="string"&&i){var h=_e(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),S_.has(h)||(S_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Be(i,"link",e),de(i),l.head.appendChild(i)))}}function zS(e){Yi.D(e),b_("dns-prefetch",e,null)}function jS(e,i){Yi.C(e,i),b_("preconnect",e,i)}function BS(e,i,a){Yi.L(e,i,a);var l=La;if(l&&e&&i){var h='link[rel="preload"][as="'+_e(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+_e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+_e(a.imageSizes)+'"]')):h+='[href="'+_e(e)+'"]';var d=h;switch(i){case"style":d=za(e);break;case"script":d=ja(e)}Mn.has(d)||(e=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Mn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(ml(d))||i==="script"&&l.querySelector(gl(d))||(i=l.createElement("link"),Be(i,"link",e),de(i),l.head.appendChild(i)))}}function qS(e,i){Yi.m(e,i);var a=La;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+_e(l)+'"][href="'+_e(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ja(e)}if(!Mn.has(d)&&(e=E({rel:"modulepreload",href:e},i),Mn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gl(d)))return}l=a.createElement("link"),Be(l,"link",e),de(l),a.head.appendChild(l)}}}function HS(e,i,a){Yi.S(e,i,a);var l=La;if(l&&e){var h=Je(l).hoistableStyles,d=za(e);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(ml(d)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Mn.get(d))&&Id(e,a);var w=v=l.createElement("link");de(w),Be(w,"link",e),w._p=new Promise(function(L,G){w.onload=L,w.onerror=G}),w.addEventListener("load",function(){T.loading|=1}),w.addEventListener("error",function(){T.loading|=2}),T.loading|=4,yc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function FS(e,i){Yi.X(e,i);var a=La;if(a&&e){var l=Je(a).hoistableScripts,h=ja(e),d=l.get(h);d||(d=a.querySelector(gl(h)),d||(e=E({src:e,async:!0},i),(i=Mn.get(h))&&Cd(e,i),d=a.createElement("script"),de(d),Be(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function GS(e,i){Yi.M(e,i);var a=La;if(a&&e){var l=Je(a).hoistableScripts,h=ja(e),d=l.get(h);d||(d=a.querySelector(gl(h)),d||(e=E({src:e,async:!0,type:"module"},i),(i=Mn.get(h))&&Cd(e,i),d=a.createElement("script"),de(d),Be(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function w_(e,i,a,l){var h=(h=At.current)?pc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=za(a.href),a=Je(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=za(a.href);var d=Je(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(ml(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Mn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mn.set(e,a),d||QS(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ja(a),a=Je(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function za(e){return'href="'+_e(e)+'"'}function ml(e){return'link[rel="stylesheet"]['+e+"]"}function R_(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function QS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Be(i,"link",a),de(i),e.head.appendChild(i))}function ja(e){return'[src="'+_e(e)+'"]'}function gl(e){return"script[async]"+e}function I_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+_e(a.href)+'"]');if(l)return i.instance=l,de(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),de(l),Be(l,"style",h),yc(l,a.precedence,e),i.instance=l;case"stylesheet":h=za(a.href);var d=e.querySelector(ml(h));if(d)return i.state.loading|=4,i.instance=d,de(d),d;l=R_(a),(h=Mn.get(h))&&Id(l,h),d=(e.ownerDocument||e).createElement("link"),de(d);var v=d;return v._p=new Promise(function(T,w){v.onload=T,v.onerror=w}),Be(d,"link",l),i.state.loading|=4,yc(d,a.precedence,e),i.instance=d;case"script":return d=ja(a.src),(h=e.querySelector(gl(d)))?(i.instance=h,de(h),h):(l=a,(h=Mn.get(d))&&(l=E({},a),Cd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),de(h),Be(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,yc(l,a.precedence,e));return i.instance}function yc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Id(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Cd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var _c=null;function C_(e,i,a){if(_c===null){var l=new Map,h=_c=new Map;h.set(a,l)}else h=_c,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[is]||d[be]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function D_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function KS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function N_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var pl=null;function YS(){}function XS(e,i,a){if(pl===null)throw Error(s(475));var l=pl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=za(a.href),d=e.querySelector(ml(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=vc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,de(d);return}d=e.ownerDocument||e,a=R_(a),(h=Mn.get(h))&&Id(a,h),d=d.createElement("link"),de(d);var v=d;v._p=new Promise(function(T,w){v.onload=T,v.onerror=w}),Be(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=vc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function $S(){if(pl===null)throw Error(s(475));var e=pl;return e.stylesheets&&e.count===0&&Dd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Dd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function vc(){if(this.count--,this.count===0){if(this.stylesheets)Dd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ec=null;function Dd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ec=new Map,i.forEach(ZS,e),Ec=null,vc.call(e))}function ZS(e,i){if(!(i.state.loading&4)){var a=Ec.get(e);if(a)var l=a.get(null);else{a=new Map,Ec.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=vc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var yl={$$typeof:rt,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function JS(e,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.hiddenUpdates=bi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function O_(e,i,a,l,h,d,v,T,w,L,G,X){return e=new JS(e,i,a,v,T,w,L,X),i=1,d===!0&&(i|=24),d=fn(3,null,null,i),e.current=d,d.stateNode=e,i=cf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},mf(d),e}function M_(e){return e?(e=ya,e):ya}function V_(e,i,a,l,h,d){h=M_(h),l.context===null?l.context=h:l.pendingContext=h,l=fr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=dr(e,l,i),a!==null&&(yn(a,e,i),Ko(a,e,i))}function x_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Nd(e,i){x_(e,i),(e=e.alternate)&&x_(e,i)}function P_(e){if(e.tag===13){var i=pa(e,67108864);i!==null&&yn(i,e,67108864),Nd(e,67108864)}}var Tc=!0;function WS(e,i,a,l){var h=F.T;F.T=null;var d=nt.p;try{nt.p=2,Od(e,i,a,l)}finally{nt.p=d,F.T=h}}function tb(e,i,a,l){var h=F.T;F.T=null;var d=nt.p;try{nt.p=8,Od(e,i,a,l)}finally{nt.p=d,F.T=h}}function Od(e,i,a,l){if(Tc){var h=Md(l);if(h===null)_d(e,i,l,Ac,a),U_(e,l);else if(nb(h,e,i,a,l))l.stopPropagation();else if(U_(e,l),i&4&&-1<eb.indexOf(e)){for(;h!==null;){var d=$n(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=kn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var w=1<<31-Ge(v);T.entanglements[1]|=w,v&=~w}ci(d),(Kt&6)===0&&(sc=En()+500,cl(0))}}break;case 13:T=pa(d,2),T!==null&&yn(T,d,2),oc(),Nd(d,2)}if(d=Md(l),d===null&&_d(e,i,l,Ac,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else _d(e,i,l,null,a)}}function Md(e){return e=Sn(e),Vd(e)}var Ac=null;function Vd(e){if(Ac=null,e=Ri(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Ac=e,null}function k_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ph()){case go:return 2;case Xs:return 8;case Jr:case kh:return 32;case $s:return 268435456;default:return 32}default:return 32}}var xd=!1,Rr=null,Ir=null,Cr=null,_l=new Map,vl=new Map,Dr=[],eb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U_(e,i){switch(e){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":_l.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(i.pointerId)}}function El(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=$n(i),i!==null&&P_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function nb(e,i,a,l,h){switch(i){case"focusin":return Rr=El(Rr,e,i,a,l,h),!0;case"dragenter":return Ir=El(Ir,e,i,a,l,h),!0;case"mouseover":return Cr=El(Cr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return _l.set(d,El(_l.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,vl.set(d,El(vl.get(d)||null,e,i,a,l,h)),!0}return!1}function L_(e){var i=Ri(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,ou(e.priority,function(){if(a.tag===13){var l=pn();l=ir(l);var h=pa(a,l);h!==null&&yn(h,a,l),Nd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Md(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ni=l,a.target.dispatchEvent(l),Ni=null}else return i=$n(a),i!==null&&P_(i),e.blockedOn=a,!1;i.shift()}return!0}function z_(e,i,a){Sc(e)&&a.delete(i)}function ib(){xd=!1,Rr!==null&&Sc(Rr)&&(Rr=null),Ir!==null&&Sc(Ir)&&(Ir=null),Cr!==null&&Sc(Cr)&&(Cr=null),_l.forEach(z_),vl.forEach(z_)}function bc(e,i){e.blockedOn===i&&(e.blockedOn=null,xd||(xd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ib)))}var wc=null;function j_(e){wc!==e&&(wc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){wc===e&&(wc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Vd(l||a)===null)continue;break}var d=$n(a);d!==null&&(e.splice(i,3),i-=3,Vf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Tl(e){function i(w){return bc(w,e)}Rr!==null&&bc(Rr,e),Ir!==null&&bc(Ir,e),Cr!==null&&bc(Cr,e),_l.forEach(i),vl.forEach(i);for(var a=0;a<Dr.length;a++){var l=Dr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Dr.length&&(a=Dr[0],a.blockedOn===null);)L_(a),a.blockedOn===null&&Dr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[ye]||null;if(typeof d=="function")v||j_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[ye]||null)T=v.formAction;else if(Vd(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),j_(a)}}}function Pd(e){this._internalRoot=e}Rc.prototype.render=Pd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=pn();V_(a,l,e,i,null,null)},Rc.prototype.unmount=Pd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;V_(e.current,2,null,e,null,null),oc(),i[Tn]=null}};function Rc(e){this._internalRoot=e}Rc.prototype.unstable_scheduleHydration=function(e){if(e){var i=rr();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Dr.length&&i!==0&&i<Dr[a].priority;a++);Dr.splice(a,0,e),a===0&&L_(e)}};var B_=t.version;if(B_!=="19.1.1")throw Error(s(527,B_,"19.1.1"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var rb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{ce=Ic.inject(rb),Qt=Ic}catch{}}return Sl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=iy,d=ry,v=sy,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=O_(e,1,!1,null,null,a,l,h,d,v,T,null),e[Tn]=i.current,yd(e),new Pd(i)},Sl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=iy,v=ry,T=sy,w=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=O_(e,1,!0,i,a??null,l,h,d,v,T,w,L),i.context=M_(null),a=i.current,l=pn(),l=ir(l),h=fr(l),h.callback=null,dr(a,h,l),a=l,i.current.lanes=a,wi(i,a),ci(i),e[Tn]=i.current,yd(e),new Rc(i)},Sl.version="19.1.1",Sl}var Z_;function mb(){if(Z_)return Ld.exports;Z_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ld.exports=db(),Ld.exports}var gb=mb();const pb=()=>{};var J_={};/**
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
 */const kE=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},yb=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],y=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(y>>10)),t[s++]=String.fromCharCode(56320+(y&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},UE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,y=o+2<r.length,p=y?r[o+2]:0,E=u>>2,b=(u&3)<<4|m>>4;let C=(m&15)<<2|p>>6,q=p&63;y||(q=64,f||(C=64)),s.push(n[E],n[b],n[C],n[q])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(kE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):yb(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const p=o<r.length?n[r.charAt(o)]:64;++o;const b=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||p==null||b==null)throw new _b;const C=u<<2|m>>4;if(s.push(C),p!==64){const q=m<<4&240|p>>2;if(s.push(q),b!==64){const K=p<<6&192|b;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class _b extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vb=function(r){const t=kE(r);return UE.encodeByteArray(t,!0)},Fc=function(r){return vb(r).replace(/\./g,"")},LE=function(r){try{return UE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Eb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tb=()=>Eb().__FIREBASE_DEFAULTS__,Ab=()=>{if(typeof process>"u"||typeof J_>"u")return;const r=J_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Sb=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&LE(r[1]);return t&&JSON.parse(t)},hh=()=>{try{return pb()||Tb()||Ab()||Sb()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},zE=r=>hh()?.emulatorHosts?.[r],bb=r=>{const t=zE(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},jE=()=>hh()?.config,BE=r=>hh()?.[`_${r}`];/**
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
 */class wb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function so(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qE(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Rb(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Fc(JSON.stringify(n)),Fc(JSON.stringify(f)),""].join(".")}const Cl={};function Ib(){const r={prod:[],emulator:[]};for(const t of Object.keys(Cl))Cl[t]?r.emulator.push(t):r.prod.push(t);return r}function Cb(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let W_=!1;function HE(r,t){if(typeof window>"u"||typeof document>"u"||!so(window.location.host)||Cl[r]===t||Cl[r]||W_)return;Cl[r]=t;function n(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=Ib().prod.length>0;function f(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function y(C,q){C.setAttribute("width","24"),C.setAttribute("id",q),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function p(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{W_=!0,f()},C}function E(C,q){C.setAttribute("id",q),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function b(){const C=Cb(s),q=n("text"),K=document.getElementById(q)||document.createElement("span"),et=n("learnmore"),J=document.getElementById(et)||document.createElement("a"),st=n("preprendIcon"),ut=document.getElementById(st)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const rt=C.element;m(rt),E(J,et);const mt=p();y(ut,st),rt.append(ut,K,J,mt),document.body.appendChild(rt)}u?(K.innerText="Preview backend disconnected.",ut.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,K.innerText="Preview backend running in this workspace."),K.setAttribute("id",q)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Db(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function Nb(){const r=hh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ob(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function FE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Mb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vb(){const r=Ze();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function xb(){return!Nb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function GE(){try{return typeof indexedDB=="object"}catch{return!1}}function QE(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(n){t(n)}})}function Pb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const kb="FirebaseError";class Kn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=kb,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gs.prototype.create)}}class Gs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?Ub(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Kn(o,m,s)}}function Ub(r,t){return r.replace(Lb,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const Lb=/\{\$([^}]+)}/g;function zb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function zr(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(tv(u)&&tv(f)){if(!zr(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function tv(r){return r!==null&&typeof r=="object"}/**
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
 */function Kl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function jb(r,t){const n=new Bb(r,t);return n.subscribe.bind(n)}class Bb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");qb(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=qd),o.error===void 0&&(o.error=qd),o.complete===void 0&&(o.complete=qd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qb(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function qd(){}/**
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
 */const Hb=1e3,Fb=2,Gb=14400*1e3,Qb=.5;function ev(r,t=Hb,n=Fb){const s=t*Math.pow(n,r),o=Math.round(Qb*s*(Math.random()-.5)*2);return Math.min(Gb,s+o)}/**
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
 */function ae(r){return r&&r._delegate?r._delegate:r}class Gn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ms="[DEFAULT]";/**
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
 */class Kb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new wb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Xb(t))try{this.getOrInitializeService({instanceIdentifier:Ms})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Ms){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ms){return this.instances.has(t)}getOptions(t=Ms){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Yb(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ms){return this.component?this.component.multipleInstances?t:Ms:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yb(r){return r===Ms?void 0:r}function Xb(r){return r.instantiationMode==="EAGER"}/**
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
 */class $b{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Kb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Vt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Vt||(Vt={}));const Zb={debug:Vt.DEBUG,verbose:Vt.VERBOSE,info:Vt.INFO,warn:Vt.WARN,error:Vt.ERROR,silent:Vt.SILENT},Jb=Vt.INFO,Wb={[Vt.DEBUG]:"log",[Vt.VERBOSE]:"log",[Vt.INFO]:"info",[Vt.WARN]:"warn",[Vt.ERROR]:"error"},t1=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=Wb[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fh{constructor(t){this.name=t,this._logLevel=Jb,this._logHandler=t1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Vt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Zb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Vt.DEBUG,...t),this._logHandler(this,Vt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Vt.VERBOSE,...t),this._logHandler(this,Vt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Vt.INFO,...t),this._logHandler(this,Vt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Vt.WARN,...t),this._logHandler(this,Vt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Vt.ERROR,...t),this._logHandler(this,Vt.ERROR,...t)}}const e1=(r,t)=>t.some(n=>r instanceof n);let nv,iv;function n1(){return nv||(nv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function i1(){return iv||(iv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const KE=new WeakMap,im=new WeakMap,YE=new WeakMap,Hd=new WeakMap,Om=new WeakMap;function r1(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(kr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&KE.set(n,r)}).catch(()=>{}),Om.set(t,r),t}function s1(r){if(im.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});im.set(r,t)}let rm={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return im.get(r);if(t==="objectStoreNames")return r.objectStoreNames||YE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function a1(r){rm=r(rm)}function o1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Fd(this),t,...n);return YE.set(s,t.sort?t.sort():[t]),kr(s)}:i1().includes(r)?function(...t){return r.apply(Fd(this),t),kr(KE.get(this))}:function(...t){return kr(r.apply(Fd(this),t))}}function l1(r){return typeof r=="function"?o1(r):(r instanceof IDBTransaction&&s1(r),e1(r,n1())?new Proxy(r,rm):r)}function kr(r){if(r instanceof IDBRequest)return r1(r);if(Hd.has(r))return Hd.get(r);const t=l1(r);return t!==r&&(Hd.set(r,t),Om.set(t,r)),t}const Fd=r=>Om.get(r);function XE(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),m=kr(f);return s&&f.addEventListener("upgradeneeded",y=>{s(kr(f.result),y.oldVersion,y.newVersion,kr(f.transaction),y)}),n&&f.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),m}const u1=["get","getKey","getAll","getAllKeys","count"],c1=["put","add","delete","clear"],Gd=new Map;function rv(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Gd.get(t))return Gd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=c1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||u1.includes(n)))return;const u=async function(f,...m){const y=this.transaction(f,o?"readwrite":"readonly");let p=y.store;return s&&(p=p.index(m.shift())),(await Promise.all([p[n](...m),o&&y.done]))[0]};return Gd.set(t,u),u}a1(r=>({...r,get:(t,n,s)=>rv(t,n)||r.get(t,n,s),has:(t,n)=>!!rv(t,n)||r.has(t,n)}));/**
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
 */class h1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(f1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function f1(r){return r.getComponent()?.type==="VERSION"}const sm="@firebase/app",sv="0.14.2";/**
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
 */const Ji=new fh("@firebase/app"),d1="@firebase/app-compat",m1="@firebase/analytics-compat",g1="@firebase/analytics",p1="@firebase/app-check-compat",y1="@firebase/app-check",_1="@firebase/auth",v1="@firebase/auth-compat",E1="@firebase/database",T1="@firebase/data-connect",A1="@firebase/database-compat",S1="@firebase/functions",b1="@firebase/functions-compat",w1="@firebase/installations",R1="@firebase/installations-compat",I1="@firebase/messaging",C1="@firebase/messaging-compat",D1="@firebase/performance",N1="@firebase/performance-compat",O1="@firebase/remote-config",M1="@firebase/remote-config-compat",V1="@firebase/storage",x1="@firebase/storage-compat",P1="@firebase/firestore",k1="@firebase/ai",U1="@firebase/firestore-compat",L1="firebase",z1="12.2.0";/**
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
 */const am="[DEFAULT]",j1={[sm]:"fire-core",[d1]:"fire-core-compat",[g1]:"fire-analytics",[m1]:"fire-analytics-compat",[y1]:"fire-app-check",[p1]:"fire-app-check-compat",[_1]:"fire-auth",[v1]:"fire-auth-compat",[E1]:"fire-rtdb",[T1]:"fire-data-connect",[A1]:"fire-rtdb-compat",[S1]:"fire-fn",[b1]:"fire-fn-compat",[w1]:"fire-iid",[R1]:"fire-iid-compat",[I1]:"fire-fcm",[C1]:"fire-fcm-compat",[D1]:"fire-perf",[N1]:"fire-perf-compat",[O1]:"fire-rc",[M1]:"fire-rc-compat",[V1]:"fire-gcs",[x1]:"fire-gcs-compat",[P1]:"fire-fst",[U1]:"fire-fst-compat",[k1]:"fire-vertex","fire-js":"fire-js",[L1]:"fire-js-all"};/**
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
 */const Gc=new Map,B1=new Map,om=new Map;function av(r,t){try{r.container.addComponent(t)}catch(n){Ji.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function vi(r){const t=r.name;if(om.has(t))return Ji.debug(`There were multiple attempts to register component ${t}.`),!1;om.set(t,r);for(const n of Gc.values())av(n,r);for(const n of B1.values())av(n,r);return!0}function Qs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function qn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const q1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ur=new Gs("app","Firebase",q1);/**
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
 */class H1{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
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
 */const ao=z1;function $E(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s={name:am,automaticDataCollectionEnabled:!0,...t},o=s.name;if(typeof o!="string"||!o)throw Ur.create("bad-app-name",{appName:String(o)});if(n||(n=jE()),!n)throw Ur.create("no-options");const u=Gc.get(o);if(u){if(zr(n,u.options)&&zr(s,u.config))return u;throw Ur.create("duplicate-app",{appName:o})}const f=new $b(o);for(const y of om.values())f.addComponent(y);const m=new H1(n,s,f);return Gc.set(o,m),m}function Mm(r=am){const t=Gc.get(r);if(!t&&r===am&&jE())return $E();if(!t)throw Ur.create("no-app",{appName:r});return t}function xn(r,t,n){let s=j1[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${t}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ji.warn(f.join(" "));return}vi(new Gn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const F1="firebase-heartbeat-database",G1=1,kl="firebase-heartbeat-store";let Qd=null;function ZE(){return Qd||(Qd=XE(F1,G1,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(kl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Ur.create("idb-open",{originalErrorMessage:r.message})})),Qd}async function Q1(r){try{const n=(await ZE()).transaction(kl),s=await n.objectStore(kl).get(JE(r));return await n.done,s}catch(t){if(t instanceof Kn)Ji.warn(t.message);else{const n=Ur.create("idb-get",{originalErrorMessage:t?.message});Ji.warn(n.message)}}}async function ov(r,t){try{const s=(await ZE()).transaction(kl,"readwrite");await s.objectStore(kl).put(t,JE(r)),await s.done}catch(n){if(n instanceof Kn)Ji.warn(n.message);else{const s=Ur.create("idb-set",{originalErrorMessage:n?.message});Ji.warn(s.message)}}}function JE(r){return`${r.name}!${r.options.appId}`}/**
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
 */const K1=1024,Y1=30;class X1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Z1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>Y1){const o=J1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Ji.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lv(),{heartbeatsToSend:n,unsentEntries:s}=$1(this._heartbeatsCache.heartbeats),o=Fc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ji.warn(t),""}}}function lv(){return new Date().toISOString().substring(0,10)}function $1(r,t=K1){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),uv(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),uv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Z1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GE()?QE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Q1(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return ov(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return ov(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function uv(r){return Fc(JSON.stringify({version:2,heartbeats:r})).length}function J1(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function W1(r){vi(new Gn("platform-logger",t=>new h1(t),"PRIVATE")),vi(new Gn("heartbeat",t=>new X1(t),"PRIVATE")),xn(sm,sv,r),xn(sm,sv,"esm2020"),xn("fire-js","")}W1("");var tw="firebase",ew="12.2.1";/**
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
 */xn(tw,ew,"app");var cv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,WE;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(x,S){function R(){}R.prototype=S.prototype,x.D=S.prototype,x.prototype=new R,x.prototype.constructor=x,x.C=function(M,N,V){for(var I=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)I[Ft-2]=arguments[Ft];return S.prototype[N].apply(M,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,R){R||(R=0);var M=Array(16);if(typeof S=="string")for(var N=0;16>N;++N)M[N]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(N=0;16>N;++N)M[N]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=x.g[0],R=x.g[1],N=x.g[2];var V=x.g[3],I=S+(V^R&(N^V))+M[0]+3614090360&4294967295;S=R+(I<<7&4294967295|I>>>25),I=V+(N^S&(R^N))+M[1]+3905402710&4294967295,V=S+(I<<12&4294967295|I>>>20),I=N+(R^V&(S^R))+M[2]+606105819&4294967295,N=V+(I<<17&4294967295|I>>>15),I=R+(S^N&(V^S))+M[3]+3250441966&4294967295,R=N+(I<<22&4294967295|I>>>10),I=S+(V^R&(N^V))+M[4]+4118548399&4294967295,S=R+(I<<7&4294967295|I>>>25),I=V+(N^S&(R^N))+M[5]+1200080426&4294967295,V=S+(I<<12&4294967295|I>>>20),I=N+(R^V&(S^R))+M[6]+2821735955&4294967295,N=V+(I<<17&4294967295|I>>>15),I=R+(S^N&(V^S))+M[7]+4249261313&4294967295,R=N+(I<<22&4294967295|I>>>10),I=S+(V^R&(N^V))+M[8]+1770035416&4294967295,S=R+(I<<7&4294967295|I>>>25),I=V+(N^S&(R^N))+M[9]+2336552879&4294967295,V=S+(I<<12&4294967295|I>>>20),I=N+(R^V&(S^R))+M[10]+4294925233&4294967295,N=V+(I<<17&4294967295|I>>>15),I=R+(S^N&(V^S))+M[11]+2304563134&4294967295,R=N+(I<<22&4294967295|I>>>10),I=S+(V^R&(N^V))+M[12]+1804603682&4294967295,S=R+(I<<7&4294967295|I>>>25),I=V+(N^S&(R^N))+M[13]+4254626195&4294967295,V=S+(I<<12&4294967295|I>>>20),I=N+(R^V&(S^R))+M[14]+2792965006&4294967295,N=V+(I<<17&4294967295|I>>>15),I=R+(S^N&(V^S))+M[15]+1236535329&4294967295,R=N+(I<<22&4294967295|I>>>10),I=S+(N^V&(R^N))+M[1]+4129170786&4294967295,S=R+(I<<5&4294967295|I>>>27),I=V+(R^N&(S^R))+M[6]+3225465664&4294967295,V=S+(I<<9&4294967295|I>>>23),I=N+(S^R&(V^S))+M[11]+643717713&4294967295,N=V+(I<<14&4294967295|I>>>18),I=R+(V^S&(N^V))+M[0]+3921069994&4294967295,R=N+(I<<20&4294967295|I>>>12),I=S+(N^V&(R^N))+M[5]+3593408605&4294967295,S=R+(I<<5&4294967295|I>>>27),I=V+(R^N&(S^R))+M[10]+38016083&4294967295,V=S+(I<<9&4294967295|I>>>23),I=N+(S^R&(V^S))+M[15]+3634488961&4294967295,N=V+(I<<14&4294967295|I>>>18),I=R+(V^S&(N^V))+M[4]+3889429448&4294967295,R=N+(I<<20&4294967295|I>>>12),I=S+(N^V&(R^N))+M[9]+568446438&4294967295,S=R+(I<<5&4294967295|I>>>27),I=V+(R^N&(S^R))+M[14]+3275163606&4294967295,V=S+(I<<9&4294967295|I>>>23),I=N+(S^R&(V^S))+M[3]+4107603335&4294967295,N=V+(I<<14&4294967295|I>>>18),I=R+(V^S&(N^V))+M[8]+1163531501&4294967295,R=N+(I<<20&4294967295|I>>>12),I=S+(N^V&(R^N))+M[13]+2850285829&4294967295,S=R+(I<<5&4294967295|I>>>27),I=V+(R^N&(S^R))+M[2]+4243563512&4294967295,V=S+(I<<9&4294967295|I>>>23),I=N+(S^R&(V^S))+M[7]+1735328473&4294967295,N=V+(I<<14&4294967295|I>>>18),I=R+(V^S&(N^V))+M[12]+2368359562&4294967295,R=N+(I<<20&4294967295|I>>>12),I=S+(R^N^V)+M[5]+4294588738&4294967295,S=R+(I<<4&4294967295|I>>>28),I=V+(S^R^N)+M[8]+2272392833&4294967295,V=S+(I<<11&4294967295|I>>>21),I=N+(V^S^R)+M[11]+1839030562&4294967295,N=V+(I<<16&4294967295|I>>>16),I=R+(N^V^S)+M[14]+4259657740&4294967295,R=N+(I<<23&4294967295|I>>>9),I=S+(R^N^V)+M[1]+2763975236&4294967295,S=R+(I<<4&4294967295|I>>>28),I=V+(S^R^N)+M[4]+1272893353&4294967295,V=S+(I<<11&4294967295|I>>>21),I=N+(V^S^R)+M[7]+4139469664&4294967295,N=V+(I<<16&4294967295|I>>>16),I=R+(N^V^S)+M[10]+3200236656&4294967295,R=N+(I<<23&4294967295|I>>>9),I=S+(R^N^V)+M[13]+681279174&4294967295,S=R+(I<<4&4294967295|I>>>28),I=V+(S^R^N)+M[0]+3936430074&4294967295,V=S+(I<<11&4294967295|I>>>21),I=N+(V^S^R)+M[3]+3572445317&4294967295,N=V+(I<<16&4294967295|I>>>16),I=R+(N^V^S)+M[6]+76029189&4294967295,R=N+(I<<23&4294967295|I>>>9),I=S+(R^N^V)+M[9]+3654602809&4294967295,S=R+(I<<4&4294967295|I>>>28),I=V+(S^R^N)+M[12]+3873151461&4294967295,V=S+(I<<11&4294967295|I>>>21),I=N+(V^S^R)+M[15]+530742520&4294967295,N=V+(I<<16&4294967295|I>>>16),I=R+(N^V^S)+M[2]+3299628645&4294967295,R=N+(I<<23&4294967295|I>>>9),I=S+(N^(R|~V))+M[0]+4096336452&4294967295,S=R+(I<<6&4294967295|I>>>26),I=V+(R^(S|~N))+M[7]+1126891415&4294967295,V=S+(I<<10&4294967295|I>>>22),I=N+(S^(V|~R))+M[14]+2878612391&4294967295,N=V+(I<<15&4294967295|I>>>17),I=R+(V^(N|~S))+M[5]+4237533241&4294967295,R=N+(I<<21&4294967295|I>>>11),I=S+(N^(R|~V))+M[12]+1700485571&4294967295,S=R+(I<<6&4294967295|I>>>26),I=V+(R^(S|~N))+M[3]+2399980690&4294967295,V=S+(I<<10&4294967295|I>>>22),I=N+(S^(V|~R))+M[10]+4293915773&4294967295,N=V+(I<<15&4294967295|I>>>17),I=R+(V^(N|~S))+M[1]+2240044497&4294967295,R=N+(I<<21&4294967295|I>>>11),I=S+(N^(R|~V))+M[8]+1873313359&4294967295,S=R+(I<<6&4294967295|I>>>26),I=V+(R^(S|~N))+M[15]+4264355552&4294967295,V=S+(I<<10&4294967295|I>>>22),I=N+(S^(V|~R))+M[6]+2734768916&4294967295,N=V+(I<<15&4294967295|I>>>17),I=R+(V^(N|~S))+M[13]+1309151649&4294967295,R=N+(I<<21&4294967295|I>>>11),I=S+(N^(R|~V))+M[4]+4149444226&4294967295,S=R+(I<<6&4294967295|I>>>26),I=V+(R^(S|~N))+M[11]+3174756917&4294967295,V=S+(I<<10&4294967295|I>>>22),I=N+(S^(V|~R))+M[2]+718787259&4294967295,N=V+(I<<15&4294967295|I>>>17),I=R+(V^(N|~S))+M[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(N+(I<<21&4294967295|I>>>11))&4294967295,x.g[2]=x.g[2]+N&4294967295,x.g[3]=x.g[3]+V&4294967295}s.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var R=S-this.blockSize,M=this.B,N=this.h,V=0;V<S;){if(N==0)for(;V<=R;)o(this,x,V),V+=this.blockSize;if(typeof x=="string"){for(;V<S;)if(M[N++]=x.charCodeAt(V++),N==this.blockSize){o(this,M),N=0;break}}else for(;V<S;)if(M[N++]=x[V++],N==this.blockSize){o(this,M),N=0;break}}this.h=N,this.o+=S},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var R=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=R&255,R/=256;for(this.u(x),x=Array(16),S=R=0;4>S;++S)for(var M=0;32>M;M+=8)x[R++]=this.g[S]>>>M&255;return x};function u(x,S){var R=m;return Object.prototype.hasOwnProperty.call(R,x)?R[x]:R[x]=S(x)}function f(x,S){this.h=S;for(var R=[],M=!0,N=x.length-1;0<=N;N--){var V=x[N]|0;M&&V==S||(R[N]=V,M=!1)}this.g=R}var m={};function y(x){return-128<=x&&128>x?u(x,function(S){return new f([S|0],0>S?-1:0)}):new f([x|0],0>x?-1:0)}function p(x){if(isNaN(x)||!isFinite(x))return b;if(0>x)return J(p(-x));for(var S=[],R=1,M=0;x>=R;M++)S[M]=x/R|0,R*=4294967296;return new f(S,0)}function E(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return J(E(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=p(Math.pow(S,8)),M=b,N=0;N<x.length;N+=8){var V=Math.min(8,x.length-N),I=parseInt(x.substring(N,N+V),S);8>V?(V=p(Math.pow(S,V)),M=M.j(V).add(p(I))):(M=M.j(R),M=M.add(p(I)))}return M}var b=y(0),C=y(1),q=y(16777216);r=f.prototype,r.m=function(){if(et(this))return-J(this).m();for(var x=0,S=1,R=0;R<this.g.length;R++){var M=this.i(R);x+=(0<=M?M:4294967296+M)*S,S*=4294967296}return x},r.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(K(this))return"0";if(et(this))return"-"+J(this).toString(x);for(var S=p(Math.pow(x,6)),R=this,M="";;){var N=mt(R,S).g;R=st(R,N.j(S));var V=((0<R.g.length?R.g[0]:R.h)>>>0).toString(x);if(R=N,K(R))return V+M;for(;6>V.length;)V="0"+V;M=V+M}},r.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function K(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function et(x){return x.h==-1}r.l=function(x){return x=st(this,x),et(x)?-1:K(x)?0:1};function J(x){for(var S=x.g.length,R=[],M=0;M<S;M++)R[M]=~x.g[M];return new f(R,~x.h).add(C)}r.abs=function(){return et(this)?J(this):this},r.add=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],M=0,N=0;N<=S;N++){var V=M+(this.i(N)&65535)+(x.i(N)&65535),I=(V>>>16)+(this.i(N)>>>16)+(x.i(N)>>>16);M=I>>>16,V&=65535,I&=65535,R[N]=I<<16|V}return new f(R,R[R.length-1]&-2147483648?-1:0)};function st(x,S){return x.add(J(S))}r.j=function(x){if(K(this)||K(x))return b;if(et(this))return et(x)?J(this).j(J(x)):J(J(this).j(x));if(et(x))return J(this.j(J(x)));if(0>this.l(q)&&0>x.l(q))return p(this.m()*x.m());for(var S=this.g.length+x.g.length,R=[],M=0;M<2*S;M++)R[M]=0;for(M=0;M<this.g.length;M++)for(var N=0;N<x.g.length;N++){var V=this.i(M)>>>16,I=this.i(M)&65535,Ft=x.i(N)>>>16,Gt=x.i(N)&65535;R[2*M+2*N]+=I*Gt,ut(R,2*M+2*N),R[2*M+2*N+1]+=V*Gt,ut(R,2*M+2*N+1),R[2*M+2*N+1]+=I*Ft,ut(R,2*M+2*N+1),R[2*M+2*N+2]+=V*Ft,ut(R,2*M+2*N+2)}for(M=0;M<S;M++)R[M]=R[2*M+1]<<16|R[2*M];for(M=S;M<2*S;M++)R[M]=0;return new f(R,0)};function ut(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function rt(x,S){this.g=x,this.h=S}function mt(x,S){if(K(S))throw Error("division by zero");if(K(x))return new rt(b,b);if(et(x))return S=mt(J(x),S),new rt(J(S.g),J(S.h));if(et(S))return S=mt(x,J(S)),new rt(J(S.g),S.h);if(30<x.g.length){if(et(x)||et(S))throw Error("slowDivide_ only works with positive integers.");for(var R=C,M=S;0>=M.l(x);)R=ht(R),M=ht(M);var N=Nt(R,1),V=Nt(M,1);for(M=Nt(M,2),R=Nt(R,2);!K(M);){var I=V.add(M);0>=I.l(x)&&(N=N.add(R),V=I),M=Nt(M,1),R=Nt(R,1)}return S=st(x,N.j(S)),new rt(N,S)}for(N=b;0<=x.l(S);){for(R=Math.max(1,Math.floor(x.m()/S.m())),M=Math.ceil(Math.log(R)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),V=p(R),I=V.j(S);et(I)||0<I.l(x);)R-=M,V=p(R),I=V.j(S);K(V)&&(V=C),N=N.add(V),x=st(x,I)}return new rt(N,x)}r.A=function(x){return mt(this,x).h},r.and=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],M=0;M<S;M++)R[M]=this.i(M)&x.i(M);return new f(R,this.h&x.h)},r.or=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],M=0;M<S;M++)R[M]=this.i(M)|x.i(M);return new f(R,this.h|x.h)},r.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],M=0;M<S;M++)R[M]=this.i(M)^x.i(M);return new f(R,this.h^x.h)};function ht(x){for(var S=x.g.length+1,R=[],M=0;M<S;M++)R[M]=x.i(M)<<1|x.i(M-1)>>>31;return new f(R,x.h)}function Nt(x,S){var R=S>>5;S%=32;for(var M=x.g.length-R,N=[],V=0;V<M;V++)N[V]=0<S?x.i(V+R)>>>S|x.i(V+R+1)<<32-S:x.i(V+R);return new f(N,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,WE=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=p,f.fromString=E,Lr=f}).apply(typeof cv<"u"?cv:typeof self<"u"?self:typeof window<"u"?window:{});var Cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tT,bl,eT,xc,lm,nT,iT,rT;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cc=="object"&&Cc];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)t:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var k=c[A];if(!(k in _))break t;_=_[k]}c=c[c.length-1],A=_[c],g=g(A),g!=A&&g!=null&&t(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,A=!1,k={next:function(){if(!A&&_<c.length){var B=_++;return{value:g(B,c[B]),done:!1}}return A=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function y(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function p(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,_){return c.call.apply(c.bind,arguments)}function b(c,g,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,A),c.apply(g,k)}}return function(){return c.apply(g,arguments)}}function C(c,g,_){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:b,C.apply(null,arguments)}function q(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function K(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,k,B){for(var tt=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)tt[kt-2]=arguments[kt];return g.prototype[k].apply(A,tt)}}function et(c){const g=c.length;if(0<g){const _=Array(g);for(let A=0;A<g;A++)_[A]=c[A];return _}return[]}function J(c,g){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(y(A)){const k=c.length||0,B=A.length||0;c.length=k+B;for(let tt=0;tt<B;tt++)c[k+tt]=A[tt]}else c.push(A)}}class st{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function ut(c){return/^[\s\xa0]*$/.test(c)}function rt(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function mt(c){return mt[" "](c),c}mt[" "]=function(){};var ht=rt().indexOf("Gecko")!=-1&&!(rt().toLowerCase().indexOf("webkit")!=-1&&rt().indexOf("Edge")==-1)&&!(rt().indexOf("Trident")!=-1||rt().indexOf("MSIE")!=-1)&&rt().indexOf("Edge")==-1;function Nt(c,g,_){for(const A in c)g.call(_,c[A],A,c)}function x(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function S(c){const g={};for(const _ in c)g[_]=c[_];return g}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(c,g){let _,A;for(let k=1;k<arguments.length;k++){A=arguments[k];for(_ in A)c[_]=A[_];for(let B=0;B<R.length;B++)_=R[B],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function N(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function V(c){m.setTimeout(()=>{throw c},0)}function I(){var c=wt;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class Ft{constructor(){this.h=this.g=null}add(g,_){const A=Gt.get();A.set(g,_),this.h?this.h.next=A:this.g=A,this.h=A}}var Gt=new st(()=>new F,c=>c.reset());class F{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,ot=!1,wt=new Ft,D=()=>{const c=m.Promise.resolve(void 0);nt=()=>{c.then(Z)}};var Z=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(_){V(_)}var g=Gt;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ot=!1};function it(){this.s=this.s,this.C=this.C}it.prototype.s=!1,it.prototype.ma=function(){this.s||(this.s=!0,this.N())},it.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var ft=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c})();function It(c,g){if(W.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(ht){t:{try{mt(g.nodeName);var k=!0;break t}catch{}k=!1}k||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:At[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&It.aa.h.call(this)}}K(It,W);var At={2:"touch",3:"pen",4:"mouse"};It.prototype.h=function(){It.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ne="closure_listenable_"+(1e6*Math.random()|0),te=0;function Yn(c,g,_,A,k){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!A,this.ha=k,this.key=++te,this.da=this.fa=!1}function nr(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Si(c){this.src=c,this.g={},this.h=0}Si.prototype.add=function(c,g,_,A,k){var B=c.toString();c=this.g[B],c||(c=this.g[B]=[],this.h++);var tt=$r(c,g,A,k);return-1<tt?(g=c[tt],_||(g.fa=!1)):(g=new Yn(g,this.src,B,!!A,k),g.fa=_,c.push(g)),g};function Xr(c,g){var _=g.type;if(_ in c.g){var A=c.g[_],k=Array.prototype.indexOf.call(A,g,void 0),B;(B=0<=k)&&Array.prototype.splice.call(A,k,1),B&&(nr(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function $r(c,g,_,A){for(var k=0;k<c.length;++k){var B=c[k];if(!B.da&&B.listener==g&&B.capture==!!_&&B.ha==A)return k}return-1}var Zr="closure_lm_"+(1e6*Math.random()|0),mo={};function ru(c,g,_,A,k){if(Array.isArray(g)){for(var B=0;B<g.length;B++)ru(c,g[B],_,A,k);return null}return _=su(_),c&&c[Ne]?c.K(g,_,p(A)?!!A.capture:!1,k):En(c,g,_,!1,A,k)}function En(c,g,_,A,k,B){if(!g)throw Error("Invalid event type");var tt=p(k)?!!k.capture:!!k,kt=$s(c);if(kt||(c[Zr]=kt=new Si(c)),_=kt.add(g,_,A,tt,B),_.proxy)return _;if(A=Ph(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)ft||(k=tt),k===void 0&&(k=!1),c.addEventListener(g.toString(),A,k);else if(c.attachEvent)c.attachEvent(Jr(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ph(){function c(_){return g.call(c.src,c.listener,_)}const g=kh;return c}function go(c,g,_,A,k){if(Array.isArray(g))for(var B=0;B<g.length;B++)go(c,g[B],_,A,k);else A=p(A)?!!A.capture:!!A,_=su(_),c&&c[Ne]?(c=c.i,g=String(g).toString(),g in c.g&&(B=c.g[g],_=$r(B,_,A,k),-1<_&&(nr(B[_]),Array.prototype.splice.call(B,_,1),B.length==0&&(delete c.g[g],c.h--)))):c&&(c=$s(c))&&(g=c.g[g.toString()],c=-1,g&&(c=$r(g,_,A,k)),(_=-1<c?g[c]:null)&&Xs(_))}function Xs(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Ne])Xr(g.i,c);else{var _=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(_,A,c.capture):g.detachEvent?g.detachEvent(Jr(_),A):g.addListener&&g.removeListener&&g.removeListener(A),(_=$s(g))?(Xr(_,c),_.h==0&&(_.src=null,g[Zr]=null)):nr(c)}}}function Jr(c){return c in mo?mo[c]:mo[c]="on"+c}function kh(c,g){if(c.da)c=!0;else{g=new It(g,this);var _=c.listener,A=c.ha||c.src;c.fa&&Xs(c),c=_.call(A,g)}return c}function $s(c){return c=c[Zr],c instanceof Si?c:null}var po="__closure_events_fn_"+(1e9*Math.random()>>>0);function su(c){return typeof c=="function"?c:(c[po]||(c[po]=function(g){return c.handleEvent(g)}),c[po])}function ce(){it.call(this),this.i=new Si(this),this.M=this,this.F=null}K(ce,it),ce.prototype[Ne]=!0,ce.prototype.removeEventListener=function(c,g,_,A){go(this,c,g,_,A)};function Qt(c,g){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new W(g,c);else if(g instanceof W)g.target=g.target||c;else{var k=g;g=new W(A,c),M(g,k)}if(k=!0,_)for(var B=_.length-1;0<=B;B--){var tt=g.g=_[B];k=un(tt,A,!0,g)&&k}if(tt=g.g=c,k=un(tt,A,!0,g)&&k,k=un(tt,A,!1,g)&&k,_)for(B=0;B<_.length;B++)tt=g.g=_[B],k=un(tt,A,!1,g)&&k}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],A=0;A<_.length;A++)nr(_[A]);delete c.g[g],c.h--}}this.F=null},ce.prototype.K=function(c,g,_,A){return this.i.add(String(c),g,!1,_,A)},ce.prototype.L=function(c,g,_,A){return this.i.add(String(c),g,!0,_,A)};function un(c,g,_,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var k=!0,B=0;B<g.length;++B){var tt=g[B];if(tt&&!tt.da&&tt.capture==_){var kt=tt.listener,we=tt.ha||tt.src;tt.fa&&Xr(c.i,tt),k=kt.call(we,A)!==!1&&k}}return k&&!A.defaultPrevented}function Ge(c,g,_){if(typeof c=="function")_&&(c=C(c,_));else if(c&&typeof c.handleEvent=="function")c=C(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function au(c){c.g=Ge(()=>{c.g=null,c.i&&(c.i=!1,au(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Uh extends it{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:au(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(c){it.call(this),this.h=c,this.g={}}K(Wr,it);var ts=[];function es(c){Nt(c.g,function(g,_){this.g.hasOwnProperty(_)&&Xs(g)},c),c.g={}}Wr.prototype.N=function(){Wr.aa.N.call(this),es(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kn=m.JSON.stringify,Zs=m.JSON.parse,ns=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function yo(){}yo.prototype.h=null;function _o(c){return c.h||(c.h=c.i())}function vo(){}var bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wi(){W.call(this,"d")}K(wi,W);function Eo(){W.call(this,"c")}K(Eo,W);var Xn={},To=null;function ir(){return To=To||new ce}Xn.La="serverreachability";function Js(c){W.call(this,Xn.La,c)}K(Js,W);function rr(c){const g=ir();Qt(g,new Js(g))}Xn.STAT_EVENT="statevent";function ou(c,g){W.call(this,Xn.STAT_EVENT,c),this.stat=g}K(ou,W);function re(c){const g=ir();Qt(g,new ou(g,c))}Xn.Ma="timingevent";function be(c,g){W.call(this,Xn.Ma,c),this.size=g}K(be,W);function ye(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function Tn(){this.g=!0}Tn.prototype.xa=function(){this.g=!1};function Ao(c,g,_,A,k,B){c.info(function(){if(c.g)if(B)for(var tt="",kt=B.split("&"),we=0;we<kt.length;we++){var Ut=kt[we].split("=");if(1<Ut.length){var Me=Ut[0];Ut=Ut[1];var Re=Me.split("_");tt=2<=Re.length&&Re[1]=="type"?tt+(Me+"="+Ut+"&"):tt+(Me+"=redacted&")}}else tt=null;else tt=B;return"XMLHTTP REQ ("+A+") [attempt "+k+"]: "+g+`
`+_+`
`+tt})}function Lh(c,g,_,A,k,B,tt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+k+"]: "+g+`
`+_+`
`+B+" "+tt})}function sr(c,g,_,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+is(c,_)+(A?" "+A:"")})}function lu(c,g){c.info(function(){return"TIMEOUT: "+g})}Tn.prototype.info=function(){};function is(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var k=A[1];if(Array.isArray(k)&&!(1>k.length)){var B=k[0];if(B!="noop"&&B!="stop"&&B!="close")for(var tt=1;tt<k.length;tt++)k[tt]=""}}}}return kn(_)}catch{return g}}var ar={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ri={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$n;function Zn(){}K(Zn,yo),Zn.prototype.g=function(){return new XMLHttpRequest},Zn.prototype.i=function(){return{}},$n=new Zn;function Je(c,g,_,A){this.j=c,this.i=g,this.l=_,this.R=A||1,this.U=new Wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new de}function de(){this.i=null,this.g="",this.h=!1}var So={},Ws={};function Un(c,g,_){c.L=1,c.v=ls(cn(g)),c.m=_,c.P=!0,Ii(c,null)}function Ii(c,g){c.F=Date.now(),rs(c),c.A=cn(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Do(_.i,"t",A),c.C=0,_=c.j.J,c.h=new de,c.g=bu(c.j,_?g:null,!c.m),0<c.O&&(c.M=new Uh(C(c.Y,c,c.g),c.O)),g=c.U,_=c.g,A=c.ca;var k="readystatechange";Array.isArray(k)||(k&&(ts[0]=k.toString()),k=ts);for(var B=0;B<k.length;B++){var tt=ru(_,k[B],A||g.handleEvent,!1,g.h||g);if(!tt)break;g.g[tt.key]=tt}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),rr(),Ao(c.i,c.u,c.A,c.l,c.R,c.m)}Je.prototype.ca=function(c){c=c.target;const g=this.M;g&&wn(c)==3?g.j():this.Y(c)},Je.prototype.Y=function(c){try{if(c==this.g)t:{const Re=wn(this.g);var g=this.g.Ba();const Pi=this.g.Z();if(!(3>Re)&&(Re!=3||this.g&&(this.h.h||this.g.oa()||pu(this.g)))){this.J||Re!=4||g==7||(g==8||0>=Pi?rr(3):rr(2)),or(this);var _=this.g.Z();this.X=_;e:if(uu(this)){var A=pu(this.g);c="";var k=A.length,B=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ue(this),Jn(this);var tt="";break e}this.h.i=new m.TextDecoder}for(g=0;g<k;g++)this.h.h=!0,c+=this.h.i.decode(A[g],{stream:!(B&&g==k-1)});A.length=0,this.h.g+=c,this.C=0,tt=this.h.g}else tt=this.g.oa();if(this.o=_==200,Lh(this.i,this.u,this.A,this.l,this.R,Re,_),this.o){if(this.T&&!this.K){e:{if(this.g){var kt,we=this.g;if((kt=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ut(kt)){var Ut=kt;break e}}Ut=null}if(_=Ut)sr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ss(this,_);else{this.o=!1,this.s=3,re(12),Ue(this),Jn(this);break t}}if(this.P){_=!0;let Le;for(;!this.J&&this.C<tt.length;)if(Le=cu(this,tt),Le==Ws){Re==4&&(this.s=4,re(14),_=!1),sr(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==So){this.s=4,re(15),sr(this.i,this.l,tt,"[Invalid Chunk]"),_=!1;break}else sr(this.i,this.l,Le,null),ss(this,Le);if(uu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||tt.length!=0||this.h.h||(this.s=1,re(16),_=!1),this.o=this.o&&_,!_)sr(this.i,this.l,tt,"[Invalid Chunked Response]"),Ue(this),Jn(this);else if(0<tt.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+tt.length),ps(Me),Me.M=!0,re(11))}}else sr(this.i,this.l,tt,null),ss(this,tt);Re==4&&Ue(this),this.o&&!this.J&&(Re==4?Tu(this.j,this):(this.o=!1,rs(this)))}else Hh(this.g),_==400&&0<tt.indexOf("Unknown SID")?(this.s=3,re(12)):(this.s=0,re(13)),Ue(this),Jn(this)}}}catch{}finally{}};function uu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function cu(c,g){var _=c.C,A=g.indexOf(`
`,_);return A==-1?Ws:(_=Number(g.substring(_,A)),isNaN(_)?So:(A+=1,A+_>g.length?Ws:(g=g.slice(A,A+_),c.C=A+_,g)))}Je.prototype.cancel=function(){this.J=!0,Ue(this)};function rs(c){c.S=Date.now()+c.I,hu(c,c.I)}function hu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=ye(C(c.ba,c),g)}function or(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Je.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(lu(this.i,this.A),this.L!=2&&(rr(),re(17)),Ue(this),this.s=2,Jn(this)):hu(this,this.S-c)};function Jn(c){c.j.G==0||c.J||Tu(c.j,c)}function Ue(c){or(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,es(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function ss(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||bo(_.h,c))){if(!c.K&&bo(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var k=A;if(k[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)ha(_),ua(_);else break t;xo(_),re(18)}}else _.za=k[1],0<_.za-_.T&&37500>k[2]&&_.F&&_.v==0&&!_.C&&(_.C=ye(C(_.Za,_),6e3));if(1>=ea(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else xi(_,11)}else if((c.K||_.g==c)&&ha(_),!ut(g))for(k=_.Da.g.parse(g),g=0;g<k.length;g++){let Ut=k[g];if(_.T=Ut[0],Ut=Ut[1],_.G==2)if(Ut[0]=="c"){_.K=Ut[1],_.ia=Ut[2];const Me=Ut[3];Me!=null&&(_.la=Me,_.j.info("VER="+_.la));const Re=Ut[4];Re!=null&&(_.Aa=Re,_.j.info("SVER="+_.Aa));const Pi=Ut[5];Pi!=null&&typeof Pi=="number"&&0<Pi&&(A=1.5*Pi,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Le=c.g;if(Le){const si=Le.g?Le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(si){var B=A.h;B.g||si.indexOf("spdy")==-1&&si.indexOf("quic")==-1&&si.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(na(B,B.h),B.h=null))}if(A.D){const ko=Le.g?Le.g.getResponseHeader("X-HTTP-Session-Id"):null;ko&&(A.ya=ko,Xt(A.I,A.D,ko))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var tt=c;if(A.qa=Su(A,A.J?A.ia:null,A.W),tt.K){We(A.h,tt);var kt=tt,we=A.L;we&&(kt.I=we),kt.B&&(or(kt),rs(kt)),A.g=tt}else vu(A);0<_.i.length&&ca(_)}else Ut[0]!="stop"&&Ut[0]!="close"||xi(_,7);else _.G==3&&(Ut[0]=="stop"||Ut[0]=="close"?Ut[0]=="stop"?xi(_,7):Mo(_):Ut[0]!="noop"&&_.l&&_.l.ta(Ut),_.v=0)}}rr(4)}catch{}}var fu=class{constructor(c,g){this.g=c,this.map=g}};function Ci(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ta(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ea(c){return c.h?1:c.g?c.g.size:0}function bo(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function na(c,g){c.g?c.g.add(g):c.h=g}function We(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Ci.prototype.cancel=function(){if(this.i=wo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function wo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return et(c.i)}function zh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(y(c)){for(var g=[],_=c.length,A=0;A<_;A++)g.push(c[A]);return g}g=[],_=0;for(A in c)g[_++]=c[A];return g}function ia(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(y(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const A in c)g[_++]=A;return g}}}function Ro(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(y(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=ia(c),A=zh(c),k=A.length,B=0;B<k;B++)g.call(void 0,A[B],_&&_[B],c)}var as=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jh(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),k=null;if(0<=A){var B=c[_].substring(0,A);k=c[_].substring(A+1)}else B=c[_];g(B,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function _e(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof _e){this.h=c.h,os(this,c.j),this.o=c.o,this.g=c.g,lr(this,c.s),this.l=c.l;var g=c.i,_=new Ni;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),Di(this,_),this.m=c.m}else c&&(g=String(c).match(as))?(this.h=!1,os(this,g[1]||"",!0),this.o=An(g[2]||""),this.g=An(g[3]||"",!0),lr(this,g[4]),this.l=An(g[5]||"",!0),Di(this,g[6]||"",!0),this.m=An(g[7]||"")):(this.h=!1,this.i=new Ni(null,this.h))}_e.prototype.toString=function(){var c=[],g=this.j;g&&c.push(us(g,Io,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(us(g,Io,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(us(_,_.charAt(0)=="/"?Bh:Co,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",us(_,ra)),c.join("")};function cn(c){return new _e(c)}function os(c,g,_){c.j=_?An(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function lr(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Di(c,g,_){g instanceof Ni?(c.i=g,mu(c.i,c.h)):(_||(g=us(g,qh)),c.i=new Ni(g,c.h))}function Xt(c,g,_){c.i.set(g,_)}function ls(c){return Xt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function An(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function us(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,du),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function du(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Io=/[#\/\?@]/g,Co=/[#\?:]/g,Bh=/[#\?]/g,qh=/[#\?@]/g,ra=/#/g;function Ni(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Sn(c){c.g||(c.g=new Map,c.h=0,c.i&&jh(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=Ni.prototype,r.add=function(c,g){Sn(this),this.i=null,c=Wn(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function Oi(c,g){Sn(c),g=Wn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Mi(c,g){return Sn(c),g=Wn(c,g),c.g.has(g)}r.forEach=function(c,g){Sn(this),this.g.forEach(function(_,A){_.forEach(function(k){c.call(g,k,A,this)},this)},this)},r.na=function(){Sn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let A=0;A<g.length;A++){const k=c[A];for(let B=0;B<k.length;B++)_.push(g[A])}return _},r.V=function(c){Sn(this);let g=[];if(typeof c=="string")Mi(this,c)&&(g=g.concat(this.g.get(Wn(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},r.set=function(c,g){return Sn(this),this.i=null,c=Wn(this,c),Mi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Do(c,g,_){Oi(c,g),0<_.length&&(c.i=null,c.g.set(Wn(c,g),et(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var A=g[_];const B=encodeURIComponent(String(A)),tt=this.V(A);for(A=0;A<tt.length;A++){var k=B;tt[A]!==""&&(k+="="+encodeURIComponent(String(tt[A]))),c.push(k)}}return this.i=c.join("&")};function Wn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function mu(c,g){g&&!c.j&&(Sn(c),c.i=null,c.g.forEach(function(_,A){var k=A.toLowerCase();A!=k&&(Oi(this,A),Do(this,k,_))},c)),c.j=g}function cs(c,g){const _=new Tn;if(m.Image){const A=new Image;A.onload=q(bn,_,"TestLoadImage: loaded",!0,g,A),A.onerror=q(bn,_,"TestLoadImage: error",!1,g,A),A.onabort=q(bn,_,"TestLoadImage: abort",!1,g,A),A.ontimeout=q(bn,_,"TestLoadImage: timeout",!1,g,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function Ln(c,g){const _=new Tn,A=new AbortController,k=setTimeout(()=>{A.abort(),bn(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(B=>{clearTimeout(k),B.ok?bn(_,"TestPingServer: ok",!0,g):bn(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(k),bn(_,"TestPingServer: error",!1,g)})}function bn(c,g,_,A,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),A(_)}catch{}}function hs(){this.g=new ns}function ti(c,g,_){const A=_||"";try{Ro(c,function(k,B){let tt=k;p(k)&&(tt=kn(k)),g.push(A+B+"="+encodeURIComponent(tt))})}catch(k){throw g.push(A+"type="+encodeURIComponent("_badmap")),k}}function ur(c){this.l=c.Ub||null,this.j=c.eb||!1}K(ur,yo),ur.prototype.g=function(){return new Vi(this.l,this.j)},ur.prototype.i=(function(c){return function(){return c}})({});function Vi(c,g){ce.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K(Vi,ce),r=Vi.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,ni(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;No(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function No(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?ei(this):ni(this),this.readyState==3&&No(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ei(this))},r.Qa=function(c){this.g&&(this.response=c,ei(this))},r.ga=function(){this.g&&ei(this)};function ei(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ni(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function ni(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Oo(c){let g="";return Nt(c,function(_,A){g+=A,g+=":",g+=_,g+=`\r
`}),g}function Oe(c,g,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=Oo(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Xt(c,g,_))}function qt(c){ce.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K(qt,ce);var sa=/^https?$/i,fs=["POST","PUT"];r=qt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$n.g(),this.v=this.o?_o(this.o):_o($n),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(B){gu(this,B);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var k in A)_.set(k,A[k]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const B of A.keys())_.set(B,A.get(B));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),k=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(fs,g,void 0))||A||k||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,tt]of _)this.g.setRequestHeader(B,tt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ds(this),this.u=!0,this.g.send(c),this.u=!1}catch(B){gu(this,B)}};function gu(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,aa(c),ii(c)}function aa(c){c.A||(c.A=!0,Qt(c,"complete"),Qt(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Qt(this,"complete"),Qt(this,"abort"),ii(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ii(this,!0)),qt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?oa(this):this.bb())},r.bb=function(){oa(this)};function oa(c){if(c.h&&typeof f<"u"&&(!c.v[1]||wn(c)!=4||c.Z()!=2)){if(c.u&&wn(c)==4)Ge(c.Ea,0,c);else if(Qt(c,"readystatechange"),wn(c)==4){c.h=!1;try{const tt=c.Z();t:switch(tt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var _;if(!(_=g)){var A;if(A=tt===0){var k=String(c.D).match(as)[1]||null;!k&&m.self&&m.self.location&&(k=m.self.location.protocol.slice(0,-1)),A=!sa.test(k?k.toLowerCase():"")}_=A}if(_)Qt(c,"complete"),Qt(c,"success");else{c.m=6;try{var B=2<wn(c)?c.g.statusText:""}catch{B=""}c.l=B+" ["+c.Z()+"]",aa(c)}}finally{ii(c)}}}}function ii(c,g){if(c.g){ds(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Qt(c,"ready");try{_.onreadystatechange=A}catch{}}}function ds(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function wn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Zs(g)}};function pu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Hh(c){const g={};c=(c.g&&2<=wn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(ut(c[A]))continue;var _=N(c[A]);const k=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=g[k]||[];g[k]=B,B.push(_)}x(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function la(c){this.Aa=0,this.i=[],this.j=new Tn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ms("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ms("baseRetryDelayMs",5e3,c),this.cb=ms("retryDelaySeedMs",1e4,c),this.Wa=ms("forwardChannelMaxRetries",2,c),this.wa=ms("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ci(c&&c.concurrentRequestLimit),this.Da=new hs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=la.prototype,r.la=8,r.G=1,r.connect=function(c,g,_,A){re(0),this.W=c,this.H=g||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=Su(this,null,this.W),ca(this)};function Mo(c){if(yu(c),c.G==3){var g=c.U++,_=cn(c.I);if(Xt(_,"SID",c.K),Xt(_,"RID",g),Xt(_,"TYPE","terminate"),gs(c,_),g=new Je(c,c.j,g),g.L=2,g.v=ls(cn(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=bu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),rs(g)}Au(c)}function ua(c){c.g&&(ps(c),c.g.cancel(),c.g=null)}function yu(c){ua(c),c.u&&(m.clearTimeout(c.u),c.u=null),ha(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ca(c){if(!ta(c.h)&&!c.s){c.s=!0;var g=c.Ga;nt||D(),ot||(nt(),ot=!0),wt.add(g,c),c.B=0}}function Fh(c,g){return ea(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=ye(C(c.Ga,c,g),Po(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const k=new Je(this,this.j,c);let B=this.o;if(this.S&&(B?(B=S(B),M(B,this.S)):B=this.S),this.m!==null||this.O||(k.H=B,B=null),this.P)t:{for(var g=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=_;break t}if(g===4096||_===this.i.length-1){g=_+1;break t}}g=1e3}else g=1e3;g=_u(this,k,g),_=cn(this.I),Xt(_,"RID",c),Xt(_,"CVER",22),this.D&&Xt(_,"X-HTTP-Session-Id",this.D),gs(this,_),B&&(this.O?g="headers="+encodeURIComponent(String(Oo(B)))+"&"+g:this.m&&Oe(_,this.m,B)),na(this.h,k),this.Ua&&Xt(_,"TYPE","init"),this.P?(Xt(_,"$req",g),Xt(_,"SID","null"),k.T=!0,Un(k,_,null)):Un(k,_,g),this.G=2}}else this.G==3&&(c?Vo(this,c):this.i.length==0||ta(this.h)||Vo(this))};function Vo(c,g){var _;g?_=g.l:_=c.U++;const A=cn(c.I);Xt(A,"SID",c.K),Xt(A,"RID",_),Xt(A,"AID",c.T),gs(c,A),c.m&&c.o&&Oe(A,c.m,c.o),_=new Je(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=_u(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),na(c.h,_),Un(_,A,g)}function gs(c,g){c.H&&Nt(c.H,function(_,A){Xt(g,A,_)}),c.l&&Ro({},function(_,A){Xt(g,A,_)})}function _u(c,g,_){_=Math.min(c.i.length,_);var A=c.l?C(c.l.Na,c.l,c):null;t:{var k=c.i;let B=-1;for(;;){const tt=["count="+_];B==-1?0<_?(B=k[0].g,tt.push("ofs="+B)):B=0:tt.push("ofs="+B);let kt=!0;for(let we=0;we<_;we++){let Ut=k[we].g;const Me=k[we].map;if(Ut-=B,0>Ut)B=Math.max(0,k[we].g-100),kt=!1;else try{ti(Me,tt,"req"+Ut+"_")}catch{A&&A(Me)}}if(kt){A=tt.join("&");break t}}}return c=c.i.splice(0,_),g.D=c,A}function vu(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;nt||D(),ot||(nt(),ot=!0),wt.add(g,c),c.v=0}}function xo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=ye(C(c.Fa,c),Po(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Eu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=ye(C(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,re(10),ua(this),Eu(this))};function ps(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Eu(c){c.g=new Je(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=cn(c.qa);Xt(g,"RID","rpc"),Xt(g,"SID",c.K),Xt(g,"AID",c.T),Xt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Xt(g,"TO",c.ja),Xt(g,"TYPE","xmlhttp"),gs(c,g),c.m&&c.o&&Oe(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=ls(cn(g)),_.m=null,_.P=!0,Ii(_,c)}r.Za=function(){this.C!=null&&(this.C=null,ua(this),xo(this),re(19))};function ha(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Tu(c,g){var _=null;if(c.g==g){ha(c),ps(c),c.g=null;var A=2}else if(bo(c.h,g))_=g.D,We(c.h,g),A=1;else return;if(c.G!=0){if(g.o)if(A==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var k=c.B;A=ir(),Qt(A,new be(A,_)),ca(c)}else vu(c);else if(k=g.s,k==3||k==0&&0<g.X||!(A==1&&Fh(c,g)||A==2&&xo(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),k){case 1:xi(c,5);break;case 4:xi(c,10);break;case 3:xi(c,6);break;default:xi(c,2)}}}function Po(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function xi(c,g){if(c.j.info("Error code "+g),g==2){var _=C(c.fb,c),A=c.Xa;const k=!A;A=new _e(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||os(A,"https"),ls(A),k?cs(A.toString(),_):Ln(A.toString(),_)}else re(2);c.G=0,c.l&&c.l.sa(g),Au(c),yu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),re(2)):(this.j.info("Failed to ping google.com"),re(1))};function Au(c){if(c.G=0,c.ka=[],c.l){const g=wo(c.h);(g.length!=0||c.i.length!=0)&&(J(c.ka,g),J(c.ka,c.i),c.h.i.length=0,et(c.i),c.i.length=0),c.l.ra()}}function Su(c,g,_){var A=_ instanceof _e?cn(_):new _e(_);if(A.g!="")g&&(A.g=g+"."+A.g),lr(A,A.s);else{var k=m.location;A=k.protocol,g=g?g+"."+k.hostname:k.hostname,k=+k.port;var B=new _e(null);A&&os(B,A),g&&(B.g=g),k&&lr(B,k),_&&(B.l=_),A=B}return _=c.D,g=c.ya,_&&g&&Xt(A,_,g),Xt(A,"VER",c.la),gs(c,A),A}function bu(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new qt(new ur({eb:_})):new qt(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function wu(){}r=wu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function fa(){}fa.prototype.g=function(c,g){return new tn(c,g)};function tn(c,g){ce.call(this),this.g=new la(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!ut(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!ut(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new ri(this)}K(tn,ce),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Mo(this.g)},tn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=kn(c),c=_);g.i.push(new fu(g.Ya++,c)),g.G==3&&ca(g)},tn.prototype.N=function(){this.g.l=null,delete this.j,Mo(this.g),delete this.g,tn.aa.N.call(this)};function Ru(c){wi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){t:{for(const _ in g){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}K(Ru,wi);function Iu(){Eo.call(this),this.status=1}K(Iu,Eo);function ri(c){this.g=c}K(ri,wu),ri.prototype.ua=function(){Qt(this.g,"a")},ri.prototype.ta=function(c){Qt(this.g,new Ru(c))},ri.prototype.sa=function(c){Qt(this.g,new Iu)},ri.prototype.ra=function(){Qt(this.g,"b")},fa.prototype.createWebChannel=fa.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,rT=function(){return new fa},iT=function(){return ir()},nT=Xn,lm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ar.NO_ERROR=0,ar.TIMEOUT=8,ar.HTTP_ERROR=6,xc=ar,Ri.COMPLETE="complete",eT=Ri,vo.EventType=bi,bi.OPEN="a",bi.CLOSE="b",bi.ERROR="c",bi.MESSAGE="d",ce.prototype.listen=ce.prototype.K,bl=vo,qt.prototype.listenOnce=qt.prototype.L,qt.prototype.getLastError=qt.prototype.Ka,qt.prototype.getLastErrorCode=qt.prototype.Ba,qt.prototype.getStatus=qt.prototype.Z,qt.prototype.getResponseJson=qt.prototype.Oa,qt.prototype.getResponseText=qt.prototype.oa,qt.prototype.send=qt.prototype.ea,qt.prototype.setWithCredentials=qt.prototype.Ha,tT=qt}).apply(typeof Cc<"u"?Cc:typeof self<"u"?self:typeof window<"u"?window:{});const hv="@firebase/firestore",fv="4.9.1";/**
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
 */let oo="12.2.0";/**
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
 */const zs=new fh("@firebase/firestore");function Ba(){return zs.logLevel}function lt(r,...t){if(zs.logLevel<=Vt.DEBUG){const n=t.map(Vm);zs.debug(`Firestore (${oo}): ${r}`,...n)}}function Wi(r,...t){if(zs.logLevel<=Vt.ERROR){const n=t.map(Vm);zs.error(`Firestore (${oo}): ${r}`,...n)}}function Ja(r,...t){if(zs.logLevel<=Vt.WARN){const n=t.map(Vm);zs.warn(`Firestore (${oo}): ${r}`,...n)}}function Vm(r){if(typeof r=="string")return r;try{/**
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
 */function vt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,sT(r,s,n)}function sT(r,t,n){let s=`FIRESTORE (${oo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Wi(s),new Error(s)}function Ht(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||sT(t,o,s)}function bt(r,t){return r}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class at extends Kn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ks{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
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
 */class aT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class nw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(Xe.UNAUTHENTICATED)))}shutdown(){}}class iw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class rw{constructor(t){this.t=t,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ht(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let u=new ks;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ks,t.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const y=u;t.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{lt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(lt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ks)}}),0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==t?(lt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ht(typeof s.accessToken=="string",31837,{l:s}),new aT(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ht(t===null||typeof t=="string",2055,{h:t}),new Xe(t)}}class sw{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class aw{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new sw(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(Xe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class dv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ow{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Ht(this.o===void 0,3512);const s=u=>{u.error!=null&&lt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,lt("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>s(u)))};const o=u=>{lt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):lt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new dv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(Ht(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new dv(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function lw(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class xm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=lw(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function xt(r,t){return r<t?-1:r>t?1:0}function um(r,t){const n=Math.min(r.length,t.length);for(let s=0;s<n;s++){const o=r.charAt(s),u=t.charAt(s);if(o!==u)return Kd(o)===Kd(u)?xt(o,u):Kd(o)?1:-1}return xt(r.length,t.length)}const uw=55296,cw=57343;function Kd(r){const t=r.charCodeAt(0);return t>=uw&&t<=cw}function Wa(r,t,n){return r.length===t.length&&r.every(((s,o)=>n(s,t[o])))}/**
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
 */const mv="__name__";class hi{constructor(t,n,s){n===void 0?n=0:n>t.length&&vt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&vt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return hi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof hi?t.forEach((s=>{n.push(s)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=hi.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return xt(t.length,n.length)}static compareSegments(t,n){const s=hi.isNumericId(t),o=hi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?hi.extractNumericId(t).compare(hi.extractNumericId(n)):um(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Lr.fromString(t.substring(4,t.length-2))}}class ne extends hi{construct(t,n,s){return new ne(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new at(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new ne(n)}static emptyPath(){return new ne([])}}const hw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends hi{construct(t,n,s){return new He(t,n,s)}static isValidIdentifier(t){return hw.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mv}static keyField(){return new He([mv])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new at(Y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new at(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const y=t[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new at(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=y,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new at(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class gt{constructor(t){this.path=t}static fromPath(t){return new gt(ne.fromString(t))}static fromName(t){return new gt(ne.fromString(t).popFirst(5))}static empty(){return new gt(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ne.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ne.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new gt(new ne(t.slice()))}}/**
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
 */function oT(r,t,n){if(!n)throw new at(Y.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function fw(r,t,n,s){if(t===!0&&s===!0)throw new at(Y.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function gv(r){if(!gt.isDocumentKey(r))throw new at(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function pv(r){if(gt.isDocumentKey(r))throw new at(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function lT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function dh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(s){return s.constructor?s.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":vt(12329,{type:typeof r})}function fi(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new at(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dh(r);throw new at(Y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
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
 */function Se(r,t){const n={typeString:r};return t&&(n.value=t),n}function Yl(r,t){if(!lT(r))throw new at(Y.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const o=t[s].typeString,u="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new at(Y.INVALID_ARGUMENT,n);return!0}/**
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
 */const yv=-62135596800,_v=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(t){return ie.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*_v);return new ie(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new at(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new at(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<yv)throw new at(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new at(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_v}_compareTo(t){return this.seconds===t.seconds?xt(this.nanoseconds,t.nanoseconds):xt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Yl(t,ie._jsonSchema))return new ie(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-yv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:Se("string",ie._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
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
 */class St{static fromTimestamp(t){return new St(t)}static min(){return new St(new ie(0,0))}static max(){return new St(new ie(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ul=-1;function dw(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=St.fromTimestamp(s===1e9?new ie(n+1,0):new ie(n,s));return new jr(o,gt.empty(),t)}function mw(r){return new jr(r.readTime,r.key,Ul)}class jr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new jr(St.min(),gt.empty(),Ul)}static max(){return new jr(St.max(),gt.empty(),Ul)}}function gw(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=gt.comparator(r.documentKey,t.documentKey),n!==0?n:xt(r.largestBatchId,t.largestBatchId))}/**
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
 */const pw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function lo(r){if(r.code!==Y.FAILED_PRECONDITION||r.message!==pw)throw r;lt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&vt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):$.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):$.reject(n)}static resolve(t){return new $(((n,s)=>{n(t)}))}static reject(t){return new $(((n,s)=>{s(t)}))}static waitFor(t){return new $(((n,s)=>{let o=0,u=0,f=!1;t.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&n()}),(y=>s(y)))})),f=!0,u===o&&n()}))}static or(t){let n=$.resolve(!1);for(const s of t)n=n.next((o=>o?$.resolve(o):s()));return n}static forEach(t,n){const s=[];return t.forEach(((o,u)=>{s.push(n.call(this,o,u))})),this.waitFor(s)}static mapArray(t,n){return new $(((s,o)=>{const u=t.length,f=new Array(u);let m=0;for(let y=0;y<u;y++){const p=y;n(t[p]).next((E=>{f[p]=E,++m,m===u&&s(f)}),(E=>o(E)))}}))}static doWhile(t,n){return new $(((s,o)=>{const u=()=>{t()===!0?n().next((()=>{u()}),o):s()};u()}))}}function _w(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function uo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class mh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}mh.ce=-1;/**
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
 */const Pm=-1;function gh(r){return r==null}function Qc(r){return r===0&&1/r==-1/0}function vw(r){return typeof r=="number"&&Number.isInteger(r)&&!Qc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const uT="";function Ew(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=vv(t)),t=Tw(r.get(n),t);return vv(t)}function Tw(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case uT:n+="";break;default:n+=u}}return n}function vv(r){return r+uT+""}/**
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
 */function Ev(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Kr(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function cT(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class ue{constructor(t,n){this.comparator=t,this.root=n||qe.EMPTY}insert(t,n){return new ue(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(t){return new ue(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,s)=>(t(n,s),!1)))}toString(){const t=[];return this.inorderTraversal(((n,s)=>(t.push(`${n}:${s}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dc(this.root,t,this.comparator,!0)}}class Dc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class qe{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??qe.RED,this.left=o??qe.EMPTY,this.right=u??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new qe(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return qe.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw vt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw vt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw vt(27949);return t+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw vt(57766)}get value(){throw vt(16141)}get color(){throw vt(16727)}get left(){throw vt(29726)}get right(){throw vt(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new qe(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class De{constructor(t){this.comparator=t,this.data=new ue(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,s)=>(t(n),!1)))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tv(this.data.getIterator())}getIteratorFrom(t){return new Tv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((s=>{n=n.add(s)})),n}isEqual(t){if(!(t instanceof De)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new De(this.comparator);return n.data=t,n}}class Tv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _n{constructor(t){this.fields=t,t.sort(He.comparator)}static empty(){return new _n([])}unionWith(t){let n=new De(He.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new _n(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Wa(this.fields,t.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class hT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Fe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new hT("Invalid base64 string: "+u):u}})(t);return new Fe(n)}static fromUint8Array(t){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(t);return new Fe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return xt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const Aw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(r){if(Ht(!!r,39018),typeof r=="string"){let t=0;const n=Aw.exec(r);if(Ht(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:pe(r.seconds),nanos:pe(r.nanos)}}function pe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function qr(r){return typeof r=="string"?Fe.fromBase64String(r):Fe.fromUint8Array(r)}/**
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
 */const fT="server_timestamp",dT="__type__",mT="__previous_value__",gT="__local_write_time__";function km(r){return(r?.mapValue?.fields||{})[dT]?.stringValue===fT}function ph(r){const t=r.mapValue.fields[mT];return km(t)?ph(t):t}function Ll(r){const t=Br(r.mapValue.fields[gT].timestampValue);return new ie(t.seconds,t.nanos)}/**
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
 */class Sw{constructor(t,n,s,o,u,f,m,y,p,E){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=p,this.isUsingEmulator=E}}const Kc="(default)";class zl{constructor(t,n){this.projectId=t,this.database=n||Kc}static empty(){return new zl("","")}get isDefaultDatabase(){return this.database===Kc}isEqual(t){return t instanceof zl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const pT="__type__",bw="__max__",Nc={mapValue:{}},yT="__vector__",Yc="value";function Hr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?km(r)?4:Rw(r)?9007199254740991:ww(r)?10:11:vt(28295,{value:r})}function Ei(r,t){if(r===t)return!0;const n=Hr(r);if(n!==Hr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Ll(r).isEqual(Ll(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Br(o.timestampValue),m=Br(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(o,u){return qr(o.bytesValue).isEqual(qr(u.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(o,u){return pe(o.geoPointValue.latitude)===pe(u.geoPointValue.latitude)&&pe(o.geoPointValue.longitude)===pe(u.geoPointValue.longitude)})(r,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return pe(o.integerValue)===pe(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=pe(o.doubleValue),m=pe(u.doubleValue);return f===m?Qc(f)===Qc(m):isNaN(f)&&isNaN(m)}return!1})(r,t);case 9:return Wa(r.arrayValue.values||[],t.arrayValue.values||[],Ei);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Ev(f)!==Ev(m))return!1;for(const y in f)if(f.hasOwnProperty(y)&&(m[y]===void 0||!Ei(f[y],m[y])))return!1;return!0})(r,t);default:return vt(52216,{left:r})}}function jl(r,t){return(r.values||[]).find((n=>Ei(n,t)))!==void 0}function to(r,t){if(r===t)return 0;const n=Hr(r),s=Hr(t);if(n!==s)return xt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return xt(r.booleanValue,t.booleanValue);case 2:return(function(u,f){const m=pe(u.integerValue||u.doubleValue),y=pe(f.integerValue||f.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(r,t);case 3:return Av(r.timestampValue,t.timestampValue);case 4:return Av(Ll(r),Ll(t));case 5:return um(r.stringValue,t.stringValue);case 6:return(function(u,f){const m=qr(u),y=qr(f);return m.compareTo(y)})(r.bytesValue,t.bytesValue);case 7:return(function(u,f){const m=u.split("/"),y=f.split("/");for(let p=0;p<m.length&&p<y.length;p++){const E=xt(m[p],y[p]);if(E!==0)return E}return xt(m.length,y.length)})(r.referenceValue,t.referenceValue);case 8:return(function(u,f){const m=xt(pe(u.latitude),pe(f.latitude));return m!==0?m:xt(pe(u.longitude),pe(f.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return Sv(r.arrayValue,t.arrayValue);case 10:return(function(u,f){const m=u.fields||{},y=f.fields||{},p=m[Yc]?.arrayValue,E=y[Yc]?.arrayValue,b=xt(p?.values?.length||0,E?.values?.length||0);return b!==0?b:Sv(p,E)})(r.mapValue,t.mapValue);case 11:return(function(u,f){if(u===Nc.mapValue&&f===Nc.mapValue)return 0;if(u===Nc.mapValue)return 1;if(f===Nc.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),p=f.fields||{},E=Object.keys(p);y.sort(),E.sort();for(let b=0;b<y.length&&b<E.length;++b){const C=um(y[b],E[b]);if(C!==0)return C;const q=to(m[y[b]],p[E[b]]);if(q!==0)return q}return xt(y.length,E.length)})(r.mapValue,t.mapValue);default:throw vt(23264,{he:n})}}function Av(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return xt(r,t);const n=Br(r),s=Br(t),o=xt(n.seconds,s.seconds);return o!==0?o:xt(n.nanos,s.nanos)}function Sv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=to(n[o],s[o]);if(u)return u}return xt(n.length,s.length)}function eo(r){return cm(r)}function cm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=Br(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return qr(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return gt.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=cm(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${cm(n.fields[f])}`;return o+"}"})(r.mapValue):vt(61005,{value:r})}function Pc(r){switch(Hr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ph(r);return t?16+Pc(t):16;case 5:return 2*r.stringValue.length;case 6:return qr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Pc(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Kr(s.fields,((u,f)=>{o+=u.length+Pc(f)})),o})(r.mapValue);default:throw vt(13486,{value:r})}}function bv(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function hm(r){return!!r&&"integerValue"in r}function Um(r){return!!r&&"arrayValue"in r}function wv(r){return!!r&&"nullValue"in r}function Rv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function kc(r){return!!r&&"mapValue"in r}function ww(r){return(r?.mapValue?.fields||{})[pT]?.stringValue===yT}function Dl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Kr(r.mapValue.fields,((n,s)=>t.mapValue.fields[n]=Dl(s))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Dl(r.arrayValue.values[n]);return t}return{...r}}function Rw(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===bw}/**
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
 */class on{constructor(t){this.value=t}static empty(){return new on({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!kc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Dl(n)}setAll(t){let n=He.emptyPath(),s={},o=[];t.forEach(((f,m)=>{if(!n.isImmediateParentOf(m)){const y=this.getFieldsMap(n);this.applyChanges(y,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Dl(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());kc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ei(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];kc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Kr(n,((o,u)=>t[o]=u));for(const o of s)delete t[o]}clone(){return new on(Dl(this.value))}}function _T(r){const t=[];return Kr(r.fields,((n,s)=>{const o=new He([n]);if(kc(s)){const u=_T(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)})),new _n(t)}/**
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
 */class $e{constructor(t,n,s,o,u,f,m){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new $e(t,0,St.min(),St.min(),St.min(),on.empty(),0)}static newFoundDocument(t,n,s,o){return new $e(t,1,n,St.min(),s,o,0)}static newNoDocument(t,n){return new $e(t,2,n,St.min(),St.min(),on.empty(),0)}static newUnknownDocument(t,n){return new $e(t,3,n,St.min(),St.min(),on.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(St.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=St.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof $e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xc{constructor(t,n){this.position=t,this.inclusive=n}}function Iv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=gt.comparator(gt.fromName(f.referenceValue),n.key):s=to(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Cv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Ei(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class Bl{constructor(t,n="asc"){this.field=t,this.dir=n}}function Iw(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class vT{}class Ae extends vT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Dw(t,n,s):n==="array-contains"?new Mw(t,s):n==="in"?new Vw(t,s):n==="not-in"?new xw(t,s):n==="array-contains-any"?new Pw(t,s):new Ae(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Nw(t,s):new Ow(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(to(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(to(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return vt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends vT{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new Qn(t,n)}matches(t){return ET(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ET(r){return r.op==="and"}function TT(r){return Cw(r)&&ET(r)}function Cw(r){for(const t of r.filters)if(t instanceof Qn)return!1;return!0}function fm(r){if(r instanceof Ae)return r.field.canonicalString()+r.op.toString()+eo(r.value);if(TT(r))return r.filters.map((t=>fm(t))).join(",");{const t=r.filters.map((n=>fm(n))).join(",");return`${r.op}(${t})`}}function AT(r,t){return r instanceof Ae?(function(s,o){return o instanceof Ae&&s.op===o.op&&s.field.isEqual(o.field)&&Ei(s.value,o.value)})(r,t):r instanceof Qn?(function(s,o){return o instanceof Qn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,m)=>u&&AT(f,o.filters[m])),!0):!1})(r,t):void vt(19439)}function ST(r){return r instanceof Ae?(function(n){return`${n.field.canonicalString()} ${n.op} ${eo(n.value)}`})(r):r instanceof Qn?(function(n){return n.op.toString()+" {"+n.getFilters().map(ST).join(" ,")+"}"})(r):"Filter"}class Dw extends Ae{constructor(t,n,s){super(t,n,s),this.key=gt.fromName(s.referenceValue)}matches(t){const n=gt.comparator(t.key,this.key);return this.matchesComparison(n)}}class Nw extends Ae{constructor(t,n){super(t,"in",n),this.keys=bT("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class Ow extends Ae{constructor(t,n){super(t,"not-in",n),this.keys=bT("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function bT(r,t){return(t.arrayValue?.values||[]).map((n=>gt.fromName(n.referenceValue)))}class Mw extends Ae{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Um(n)&&jl(n.arrayValue,this.value)}}class Vw extends Ae{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&jl(this.value.arrayValue,n)}}class xw extends Ae{constructor(t,n){super(t,"not-in",n)}matches(t){if(jl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!jl(this.value.arrayValue,n)}}class Pw extends Ae{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Um(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>jl(this.value.arrayValue,s)))}}/**
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
 */class kw{constructor(t,n=null,s=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function Dv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new kw(r,t,n,s,o,u,f)}function Lm(r){const t=bt(r);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((s=>fm(s))).join(","),n+="|ob:",n+=t.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),gh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>eo(s))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>eo(s))).join(",")),t.Te=n}return t.Te}function zm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!Iw(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!AT(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Cv(r.startAt,t.startAt)&&Cv(r.endAt,t.endAt)}function dm(r){return gt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class co{constructor(t,n=null,s=[],o=[],u=null,f="F",m=null,y=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Uw(r,t,n,s,o,u,f,m){return new co(r,t,n,s,o,u,f,m)}function jm(r){return new co(r)}function Nv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function wT(r){return r.collectionGroup!==null}function Nl(r){const t=bt(r);if(t.Ie===null){t.Ie=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new De(He.comparator);return f.filters.forEach((y=>{y.getFlattenedFilters().forEach((p=>{p.isInequality()&&(m=m.add(p.field))}))})),m})(t).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new Bl(u,s))})),n.has(He.keyField().canonicalString())||t.Ie.push(new Bl(He.keyField(),s))}return t.Ie}function di(r){const t=bt(r);return t.Ee||(t.Ee=Lw(t,Nl(r))),t.Ee}function Lw(r,t){if(r.limitType==="F")return Dv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Bl(o.field,u)}));const n=r.endAt?new Xc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Xc(r.startAt.position,r.startAt.inclusive):null;return Dv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function mm(r,t){const n=r.filters.concat([t]);return new co(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function $c(r,t,n){return new co(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function Xl(r,t){return zm(di(r),di(t))&&r.limitType===t.limitType}function RT(r){return`${Lm(di(r))}|lt:${r.limitType}`}function qa(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>ST(o))).join(", ")}]`),gh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>eo(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>eo(o))).join(",")),`Target(${s})`})(di(r))}; limitType=${r.limitType})`}function yh(r,t){return t.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):gt.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,t)&&(function(s,o){for(const u of Nl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,t)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,t)&&(function(s,o){return!(s.startAt&&!(function(f,m,y){const p=Iv(f,m,y);return f.inclusive?p<=0:p<0})(s.startAt,Nl(s),o)||s.endAt&&!(function(f,m,y){const p=Iv(f,m,y);return f.inclusive?p>=0:p>0})(s.endAt,Nl(s),o))})(r,t)}function zw(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function IT(r){return(t,n)=>{let s=!1;for(const o of Nl(r)){const u=jw(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function jw(r,t,n){const s=r.field.isKeyField()?gt.comparator(t.key,n.key):(function(u,f,m){const y=f.data.field(u),p=m.data.field(u);return y!==null&&p!==null?to(y,p):vt(42886)})(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return vt(19790,{direction:r.dir})}}/**
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
 */class Ks{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Kr(this.inner,((n,s)=>{for(const[o,u]of s)t(o,u)}))}isEmpty(){return cT(this.inner)}size(){return this.innerSize}}/**
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
 */const Bw=new ue(gt.comparator);function tr(){return Bw}const CT=new ue(gt.comparator);function wl(...r){let t=CT;for(const n of r)t=t.insert(n.key,n);return t}function DT(r){let t=CT;return r.forEach(((n,s)=>t=t.insert(n,s.overlayedDocument))),t}function Vs(){return Ol()}function NT(){return Ol()}function Ol(){return new Ks((r=>r.toString()),((r,t)=>r.isEqual(t)))}const qw=new ue(gt.comparator),Hw=new De(gt.comparator);function Pt(...r){let t=Hw;for(const n of r)t=t.add(n);return t}const Fw=new De(xt);function Gw(){return Fw}/**
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
 */function Bm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qc(t)?"-0":t}}function OT(r){return{integerValue:""+r}}function Qw(r,t){return vw(t)?OT(t):Bm(r,t)}/**
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
 */class _h{constructor(){this._=void 0}}function Kw(r,t,n){return r instanceof ql?(function(o,u){const f={fields:{[dT]:{stringValue:fT},[gT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&km(u)&&(u=ph(u)),u&&(f.fields[mT]=u),{mapValue:f}})(n,t):r instanceof Hl?VT(r,t):r instanceof Fl?xT(r,t):(function(o,u){const f=MT(o,u),m=Ov(f)+Ov(o.Ae);return hm(f)&&hm(o.Ae)?OT(m):Bm(o.serializer,m)})(r,t)}function Yw(r,t,n){return r instanceof Hl?VT(r,t):r instanceof Fl?xT(r,t):n}function MT(r,t){return r instanceof Zc?(function(s){return hm(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(t)?t:{integerValue:0}:null}class ql extends _h{}class Hl extends _h{constructor(t){super(),this.elements=t}}function VT(r,t){const n=PT(t);for(const s of r.elements)n.some((o=>Ei(o,s)))||n.push(s);return{arrayValue:{values:n}}}class Fl extends _h{constructor(t){super(),this.elements=t}}function xT(r,t){let n=PT(t);for(const s of r.elements)n=n.filter((o=>!Ei(o,s)));return{arrayValue:{values:n}}}class Zc extends _h{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Ov(r){return pe(r.integerValue||r.doubleValue)}function PT(r){return Um(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Xw{constructor(t,n){this.field=t,this.transform=n}}function $w(r,t){return r.field.isEqual(t.field)&&(function(s,o){return s instanceof Hl&&o instanceof Hl||s instanceof Fl&&o instanceof Fl?Wa(s.elements,o.elements,Ei):s instanceof Zc&&o instanceof Zc?Ei(s.Ae,o.Ae):s instanceof ql&&o instanceof ql})(r.transform,t.transform)}class Zw{constructor(t,n){this.version=t,this.transformResults=n}}class Pn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Pn}static exists(t){return new Pn(void 0,t)}static updateTime(t){return new Pn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Uc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class vh{}function kT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new qm(r.key,Pn.none()):new $l(r.key,r.data,Pn.none());{const n=r.data,s=on.empty();let o=new De(He.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Yr(r.key,s,new _n(o.toArray()),Pn.none())}}function Jw(r,t,n){r instanceof $l?(function(o,u,f){const m=o.value.clone(),y=Vv(o.fieldTransforms,u,f.transformResults);m.setAll(y),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(r,t,n):r instanceof Yr?(function(o,u,f){if(!Uc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=Vv(o.fieldTransforms,u,f.transformResults),y=u.data;y.setAll(UT(o)),y.setAll(m),u.convertToFoundDocument(f.version,y).setHasCommittedMutations()})(r,t,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,n)}function Ml(r,t,n,s){return r instanceof $l?(function(u,f,m,y){if(!Uc(u.precondition,f))return m;const p=u.value.clone(),E=xv(u.fieldTransforms,y,f);return p.setAll(E),f.convertToFoundDocument(f.version,p).setHasLocalMutations(),null})(r,t,n,s):r instanceof Yr?(function(u,f,m,y){if(!Uc(u.precondition,f))return m;const p=xv(u.fieldTransforms,y,f),E=f.data;return E.setAll(UT(u)),E.setAll(p),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((b=>b.field)))})(r,t,n,s):(function(u,f,m){return Uc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(r,t,n)}function Ww(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=MT(s.transform,o||null);u!=null&&(n===null&&(n=on.empty()),n.set(s.field,u))}return n||null}function Mv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Wa(s,o,((u,f)=>$w(u,f)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class $l extends vh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Yr extends vh{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function UT(r){const t=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}})),t}function Vv(r,t,n){const s=new Map;Ht(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=t.data.field(u.field);s.set(u.field,Yw(f,m,n[o]))}return s}function xv(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,Kw(u,f,t))}return s}class qm extends vh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tR extends vh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eR{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&Jw(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Ml(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Ml(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=NT();return this.mutations.forEach((o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const y=kT(f,m);y!==null&&s.set(o.key,y),f.isValidDocument()||f.convertToNoDocument(St.min())})),s}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),Pt())}isEqual(t){return this.batchId===t.batchId&&Wa(this.mutations,t.mutations,((n,s)=>Mv(n,s)))&&Wa(this.baseMutations,t.baseMutations,((n,s)=>Mv(n,s)))}}class Hm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Ht(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let o=(function(){return qw})();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Hm(t,n,s,o)}}/**
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
 */class nR{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class iR{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Te,zt;function rR(r){switch(r){case Y.OK:return vt(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return vt(15467,{code:r})}}function LT(r){if(r===void 0)return Wi("GRPC error has no .code"),Y.UNKNOWN;switch(r){case Te.OK:return Y.OK;case Te.CANCELLED:return Y.CANCELLED;case Te.UNKNOWN:return Y.UNKNOWN;case Te.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case Te.INTERNAL:return Y.INTERNAL;case Te.UNAVAILABLE:return Y.UNAVAILABLE;case Te.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case Te.NOT_FOUND:return Y.NOT_FOUND;case Te.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case Te.ABORTED:return Y.ABORTED;case Te.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case Te.DATA_LOSS:return Y.DATA_LOSS;default:return vt(39323,{code:r})}}(zt=Te||(Te={}))[zt.OK=0]="OK",zt[zt.CANCELLED=1]="CANCELLED",zt[zt.UNKNOWN=2]="UNKNOWN",zt[zt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",zt[zt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",zt[zt.NOT_FOUND=5]="NOT_FOUND",zt[zt.ALREADY_EXISTS=6]="ALREADY_EXISTS",zt[zt.PERMISSION_DENIED=7]="PERMISSION_DENIED",zt[zt.UNAUTHENTICATED=16]="UNAUTHENTICATED",zt[zt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",zt[zt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",zt[zt.ABORTED=10]="ABORTED",zt[zt.OUT_OF_RANGE=11]="OUT_OF_RANGE",zt[zt.UNIMPLEMENTED=12]="UNIMPLEMENTED",zt[zt.INTERNAL=13]="INTERNAL",zt[zt.UNAVAILABLE=14]="UNAVAILABLE",zt[zt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sR(){return new TextEncoder}/**
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
 */const aR=new Lr([4294967295,4294967295],0);function Pv(r){const t=sR().encode(r),n=new WE;return n.update(t),new Uint8Array(n.digest())}function kv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Lr([n,s],0),new Lr([o,u],0)]}class Fm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Rl(`Invalid padding: ${n}`);if(s<0)throw new Rl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Rl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Rl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Lr.fromNumber(this.ge)}ye(t,n,s){let o=t.add(n.multiply(Lr.fromNumber(s)));return o.compare(aR)===1&&(o=new Lr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=Pv(t),[s,o]=kv(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Fm(u,o,n);return s.forEach((m=>f.insert(m))),f}insert(t){if(this.ge===0)return;const n=Pv(t),[s,o]=kv(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Rl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Eh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Zl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Eh(St.min(),o,new ue(xt),tr(),Pt())}}class Zl{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Zl(s,n,Pt(),Pt(),Pt())}}/**
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
 */class Lc{constructor(t,n,s,o){this.be=t,this.removedTargetIds=n,this.key=s,this.De=o}}class zT{constructor(t,n){this.targetId=t,this.Ce=n}}class jT{constructor(t,n,s=Fe.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Uv{constructor(){this.ve=0,this.Fe=Lv(),this.Me=Fe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Pt(),n=Pt(),s=Pt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:vt(38017,{changeType:u})}})),new Zl(this.Me,this.xe,t,n,s)}qe(){this.Oe=!1,this.Fe=Lv()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ht(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class oR{constructor(t){this.Ge=t,this.ze=new Map,this.je=tr(),this.Je=Oc(),this.He=Oc(),this.Ye=new ue(xt)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const s=this.nt(n);switch(t.state){case 0:this.rt(n)&&s.Le(t.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(t.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(t.resumeToken));break;default:vt(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(t){const n=t.targetId,s=t.Ce.count,o=this.ot(n);if(o){const u=o.target;if(dm(u))if(s===0){const f=new gt(u.path);this.et(n,f,$e.newNoDocument(f,St.min()))}else Ht(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(t),y=m?this.ct(m,t,f):1;if(y!==0){this.it(n);const p=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,p)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=qr(s).toUint8Array()}catch(y){if(y instanceof hT)return Ja("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Fm(f,o,u)}catch(y){return Ja(y instanceof Rl?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(t,n,s){return n.Ce.count===s-this.Pt(t,n.targetId)?0:2}Pt(t,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.et(n,u,null),o++)})),o}Tt(t){const n=new Map;this.ze.forEach(((u,f)=>{const m=this.ot(f);if(m){if(u.current&&dm(m.target)){const y=new gt(m.target.path);this.It(y).has(f)||this.Et(f,y)||this.et(f,y,$e.newNoDocument(y,t))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let s=Pt();this.He.forEach(((u,f)=>{let m=!0;f.forEachWhile((y=>{const p=this.ot(y);return!p||p.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const o=new Eh(t,n,this.Ye,this.je,s);return this.je=tr(),this.Je=Oc(),this.He=Oc(),this.Ye=new ue(xt),o}Xe(t,n){if(!this.rt(t))return;const s=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,s){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),s&&(this.je=this.je.insert(n,s))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new Uv,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new De(xt),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new De(xt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||lt("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Uv),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Oc(){return new ue(gt.comparator)}function Lv(){return new ue(gt.comparator)}const lR={asc:"ASCENDING",desc:"DESCENDING"},uR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cR={and:"AND",or:"OR"};class hR{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function gm(r,t){return r.useProto3Json||gh(t)?t:{value:t}}function Jc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function BT(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function fR(r,t){return Jc(r,t.toTimestamp())}function mi(r){return Ht(!!r,49232),St.fromTimestamp((function(n){const s=Br(n);return new ie(s.seconds,s.nanos)})(r))}function Gm(r,t){return pm(r,t).canonicalString()}function pm(r,t){const n=(function(o){return new ne(["projects",o.projectId,"databases",o.database])})(r).child("documents");return t===void 0?n:n.child(t)}function qT(r){const t=ne.fromString(r);return Ht(KT(t),10190,{key:t.toString()}),t}function ym(r,t){return Gm(r.databaseId,t.path)}function Yd(r,t){const n=qT(t);if(n.get(1)!==r.databaseId.projectId)throw new at(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new at(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new gt(FT(n))}function HT(r,t){return Gm(r.databaseId,t)}function dR(r){const t=qT(r);return t.length===4?ne.emptyPath():FT(t)}function _m(r){return new ne(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function FT(r){return Ht(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function zv(r,t,n){return{name:ym(r,t),fields:n.value.mapValue.fields}}function mR(r,t){let n;if("targetChange"in t){t.targetChange;const s=(function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:vt(39313,{state:p})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(p,E){return p.useProto3Json?(Ht(E===void 0||typeof E=="string",58123),Fe.fromBase64String(E||"")):(Ht(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Fe.fromUint8Array(E||new Uint8Array))})(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&(function(p){const E=p.code===void 0?Y.UNKNOWN:LT(p.code);return new at(E,p.message||"")})(f);n=new jT(s,o,u,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Yd(r,s.document.name),u=mi(s.document.updateTime),f=s.document.createTime?mi(s.document.createTime):St.min(),m=new on({mapValue:{fields:s.document.fields}}),y=$e.newFoundDocument(o,u,f,m),p=s.targetIds||[],E=s.removedTargetIds||[];n=new Lc(p,E,y.key,y)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Yd(r,s.document),u=s.readTime?mi(s.readTime):St.min(),f=$e.newNoDocument(o,u),m=s.removedTargetIds||[];n=new Lc([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Yd(r,s.document),u=s.removedTargetIds||[];n=new Lc([],u,o,null)}else{if(!("filter"in t))return vt(11601,{Rt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new iR(o,u),m=s.targetId;n=new zT(m,f)}}return n}function gR(r,t){let n;if(t instanceof $l)n={update:zv(r,t.key,t.value)};else if(t instanceof qm)n={delete:ym(r,t.key)};else if(t instanceof Yr)n={update:zv(r,t.key,t.data),updateMask:bR(t.fieldMask)};else{if(!(t instanceof tR))return vt(16599,{Vt:t.type});n={verify:ym(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((s=>(function(u,f){const m=f.transform;if(m instanceof ql)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Hl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Fl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Zc)return{fieldPath:f.field.canonicalString(),increment:m.Ae};throw vt(20930,{transform:f.transform})})(0,s)))),t.precondition.isNone||(n.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:fR(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:vt(27497)})(r,t.precondition)),n}function pR(r,t){return r&&r.length>0?(Ht(t!==void 0,14353),r.map((n=>(function(o,u){let f=o.updateTime?mi(o.updateTime):mi(u);return f.isEqual(St.min())&&(f=mi(u)),new Zw(f,o.transformResults||[])})(n,t)))):[]}function yR(r,t){return{documents:[HT(r,t.path)]}}function _R(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=HT(r,o);const u=(function(p){if(p.length!==0)return QT(Qn.create(p,"and"))})(t.filters);u&&(n.structuredQuery.where=u);const f=(function(p){if(p.length!==0)return p.map((E=>(function(C){return{field:Ha(C.field),direction:TR(C.dir)}})(E)))})(t.orderBy);f&&(n.structuredQuery.orderBy=f);const m=gm(r,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=(function(p){return{before:p.inclusive,values:p.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(p){return{before:!p.inclusive,values:p.position}})(t.endAt)),{ft:n,parent:o}}function vR(r){let t=dR(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ht(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=(function(b){const C=GT(b);return C instanceof Qn&&TT(C)?C.getFilters():[C]})(n.where));let f=[];n.orderBy&&(f=(function(b){return b.map((C=>(function(K){return new Bl(Fa(K.field),(function(J){switch(J){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(K.direction))})(C)))})(n.orderBy));let m=null;n.limit&&(m=(function(b){let C;return C=typeof b=="object"?b.value:b,gh(C)?null:C})(n.limit));let y=null;n.startAt&&(y=(function(b){const C=!!b.before,q=b.values||[];return new Xc(q,C)})(n.startAt));let p=null;return n.endAt&&(p=(function(b){const C=!b.before,q=b.values||[];return new Xc(q,C)})(n.endAt)),Uw(t,o,f,u,m,"F",y,p)}function ER(r,t){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return vt(28987,{purpose:o})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function GT(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Fa(n.unaryFilter.field);return Ae.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Fa(n.unaryFilter.field);return Ae.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Fa(n.unaryFilter.field);return Ae.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Fa(n.unaryFilter.field);return Ae.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return vt(61313);default:return vt(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Ae.create(Fa(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return vt(58110);default:return vt(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return Qn.create(n.compositeFilter.filters.map((s=>GT(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return vt(1026)}})(n.compositeFilter.op))})(r):vt(30097,{filter:r})}function TR(r){return lR[r]}function AR(r){return uR[r]}function SR(r){return cR[r]}function Ha(r){return{fieldPath:r.canonicalString()}}function Fa(r){return He.fromServerFormat(r.fieldPath)}function QT(r){return r instanceof Ae?(function(n){if(n.op==="=="){if(Rv(n.value))return{unaryFilter:{field:Ha(n.field),op:"IS_NAN"}};if(wv(n.value))return{unaryFilter:{field:Ha(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Rv(n.value))return{unaryFilter:{field:Ha(n.field),op:"IS_NOT_NAN"}};if(wv(n.value))return{unaryFilter:{field:Ha(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ha(n.field),op:AR(n.op),value:n.value}}})(r):r instanceof Qn?(function(n){const s=n.getFilters().map((o=>QT(o)));return s.length===1?s[0]:{compositeFilter:{op:SR(n.op),filters:s}}})(r):vt(54877,{filter:r})}function bR(r){const t=[];return r.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function KT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class wR{constructor(t){this.yt=t}}function RR(r){const t=vR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?$c(t,t.limit,"L"):t}/**
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
 */class IR{constructor(){this.Cn=new CR}addToCollectionParentIndex(t,n){return this.Cn.add(n),$.resolve()}getCollectionParents(t,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return $.resolve()}deleteFieldIndex(t,n){return $.resolve()}deleteAllFieldIndexes(t){return $.resolve()}createTargetIndexes(t,n){return $.resolve()}getDocumentsMatchingTarget(t,n){return $.resolve(null)}getIndexType(t,n){return $.resolve(0)}getFieldIndexes(t,n){return $.resolve([])}getNextCollectionGroupToUpdate(t){return $.resolve(null)}getMinOffset(t,n){return $.resolve(jr.min())}getMinOffsetFromCollectionGroup(t,n){return $.resolve(jr.min())}updateCollectionGroup(t,n,s){return $.resolve()}updateIndexEntries(t,n){return $.resolve()}}class CR{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new De(ne.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new De(ne.comparator)).toArray()}}/**
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
 */const jv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},YT=41943040;class an{static withCacheSize(t){return new an(t,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(YT,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
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
 */class no{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new no(0)}static cr(){return new no(-1)}}/**
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
 */const Bv="LruGarbageCollector",DR=1048576;function qv([r,t],[n,s]){const o=xt(r,n);return o===0?xt(t,s):o}class NR{constructor(t){this.Ir=t,this.buffer=new De(qv),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();qv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class OR{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){lt(Bv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){uo(n)?lt(Bv,"Ignoring IndexedDB error during garbage collection: ",n):await lo(n)}await this.Vr(3e5)}))}}class MR{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(t,n){if(n===0)return $.resolve(mh.ce);const s=new NR(n);return this.mr.forEachTarget(t,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(t,n,s){return this.mr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(lt("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(jv)):this.getCacheSize(t).next((s=>s<this.params.cacheSizeCollectionThreshold?(lt("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jv):this.yr(t,n)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let s,o,u,f,m,y,p;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(lt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(t,o)))).next((b=>(s=b,m=Date.now(),this.removeTargets(t,s,n)))).next((b=>(u=b,y=Date.now(),this.removeOrphanedDocuments(t,s)))).next((b=>(p=Date.now(),Ba()<=Vt.DEBUG&&lt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${b} documents in `+(p-y)+`ms
Total Duration: ${p-E}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b}))))}}function VR(r,t){return new MR(r,t)}/**
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
 */class xR{constructor(){this.changes=new Ks((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,$e.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class PR{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class kR{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(t,n)))).next((o=>(s!==null&&Ml(s.mutation,o,_n.empty(),ie.now()),o)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.getLocalViewOfDocuments(t,s,Pt()).next((()=>s))))}getLocalViewOfDocuments(t,n,s=Pt()){const o=Vs();return this.populateOverlays(t,o,n).next((()=>this.computeViews(t,n,o,s).next((u=>{let f=wl();return u.forEach(((m,y)=>{f=f.insert(m,y.overlayedDocument)})),f}))))}getOverlayedDocuments(t,n){const s=Vs();return this.populateOverlays(t,s,n).next((()=>this.computeViews(t,n,s,Pt())))}populateOverlays(t,n,s){const o=[];return s.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((f,m)=>{n.set(f,m)}))}))}computeViews(t,n,s,o){let u=tr();const f=Ol(),m=(function(){return Ol()})();return n.forEach(((y,p)=>{const E=s.get(p.key);o.has(p.key)&&(E===void 0||E.mutation instanceof Yr)?u=u.insert(p.key,p):E!==void 0?(f.set(p.key,E.mutation.getFieldMask()),Ml(E.mutation,p,E.mutation.getFieldMask(),ie.now())):f.set(p.key,_n.empty())})),this.recalculateAndSaveOverlays(t,u).next((y=>(y.forEach(((p,E)=>f.set(p,E))),n.forEach(((p,E)=>m.set(p,new PR(E,f.get(p)??null)))),m)))}recalculateAndSaveOverlays(t,n){const s=Ol();let o=new ue(((f,m)=>f-m)),u=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((f=>{for(const m of f)m.keys().forEach((y=>{const p=n.get(y);if(p===null)return;let E=s.get(y)||_n.empty();E=m.applyToLocalView(p,E),s.set(y,E);const b=(o.get(m.batchId)||Pt()).add(y);o=o.insert(m.batchId,b)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),p=y.key,E=y.value,b=NT();E.forEach((C=>{if(!u.has(C)){const q=kT(n.get(C),s.get(C));q!==null&&b.set(C,q),u=u.add(C)}})),f.push(this.documentOverlayCache.saveOverlays(t,p,b))}return $.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.recalculateAndSaveOverlays(t,s)))}getDocumentsMatchingQuery(t,n,s,o){return(function(f){return gt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):wT(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):$.resolve(Vs());let m=Ul,y=u;return f.next((p=>$.forEach(p,((E,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),u.get(E)?$.resolve():this.remoteDocumentCache.getEntry(t,E).next((C=>{y=y.insert(E,C)}))))).next((()=>this.populateOverlays(t,p,u))).next((()=>this.computeViews(t,y,p,Pt()))).next((E=>({batchId:m,changes:DT(E)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new gt(n)).next((s=>{let o=wl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=wl();return this.indexManager.getCollectionParents(t,u).next((m=>$.forEach(m,(y=>{const p=(function(b,C){return new co(C,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(n,y.child(u));return this.getDocumentsMatchingCollectionQuery(t,p,s,o).next((E=>{E.forEach(((b,C)=>{f=f.insert(b,C)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o)))).next((f=>{u.forEach(((y,p)=>{const E=p.getKey();f.get(E)===null&&(f=f.insert(E,$e.newInvalidDocument(E)))}));let m=wl();return f.forEach(((y,p)=>{const E=u.get(y);E!==void 0&&Ml(E.mutation,p,_n.empty(),ie.now()),yh(n,p)&&(m=m.insert(y,p))})),m}))}}/**
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
 */class UR{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return $.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:mi(o.createTime)}})(n)),$.resolve()}getNamedQuery(t,n){return $.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:RR(o.bundledQuery),readTime:mi(o.readTime)}})(n)),$.resolve()}}/**
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
 */class LR{constructor(){this.overlays=new ue(gt.comparator),this.qr=new Map}getOverlay(t,n){return $.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Vs();return $.forEach(n,(o=>this.getOverlay(t,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(t,n,s){return s.forEach(((o,u)=>{this.St(t,n,u)})),$.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),$.resolve()}getOverlaysForCollection(t,n,s){const o=Vs(),u=n.length+1,f=new gt(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const y=m.getNext().value,p=y.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return $.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new ue(((p,E)=>p-E));const f=this.overlays.getIterator();for(;f.hasNext();){const p=f.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>s){let E=u.get(p.largestBatchId);E===null&&(E=Vs(),u=u.insert(p.largestBatchId,E)),E.set(p.getKey(),p)}}const m=Vs(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((p,E)=>m.set(p,E))),!(m.size()>=o)););return $.resolve(m)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new nR(n,s));let u=this.qr.get(n);u===void 0&&(u=Pt(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
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
 */class zR{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(t){return $.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class Qm{constructor(){this.Qr=new De(ke.$r),this.Ur=new De(ke.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const s=new ke(t,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(t,n){t.forEach((s=>this.addReference(s,n)))}removeReference(t,n){this.Gr(new ke(t,n))}zr(t,n){t.forEach((s=>this.removeReference(s,n)))}jr(t){const n=new gt(new ne([])),s=new ke(n,t),o=new ke(n,t+1),u=[];return this.Ur.forEachInRange([s,o],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new gt(new ne([])),s=new ke(n,t),o=new ke(n,t+1);let u=Pt();return this.Ur.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(t){const n=new ke(t,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ke{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return gt.comparator(t.key,n.key)||xt(t.Yr,n.Yr)}static Kr(t,n){return xt(t.Yr,n.Yr)||gt.comparator(t.key,n.key)}}/**
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
 */class jR{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new De(ke.$r)}checkEmpty(t){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new eR(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new ke(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return $.resolve(f)}lookupMutationBatch(t,n){return $.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Pm:this.tr-1)}getAllMutationBatches(t){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new ke(n,0),o=new ke(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(f=>{const m=this.Xr(f.Yr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new De(xt);return n.forEach((o=>{const u=new ke(o,0),f=new ke(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(m=>{s=s.add(m.Yr)}))})),$.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;gt.isDocumentKey(u)||(u=u.child(""));const f=new ke(new gt(u),0);let m=new De(xt);return this.Zr.forEachWhile((y=>{const p=y.key.path;return!!s.isPrefixOf(p)&&(p.length===o&&(m=m.add(y.Yr)),!0)}),f),$.resolve(this.ti(m))}ti(t){const n=[];return t.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(t,n){Ht(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return $.forEach(n.mutations,(o=>{const u=new ke(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=s}))}ir(t){}containsKey(t,n){const s=new ke(n,0),o=this.Zr.firstAfterOrEqual(s);return $.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,$.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class BR{constructor(t){this.ri=t,this.docs=(function(){return new ue(gt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(t,n){let s=tr();return n.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():$e.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=tr();const f=n.path,m=new gt(f.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:p,value:{document:E}}=y.getNext();if(!f.isPrefixOf(p.path))break;p.path.length>f.length+1||gw(mw(E),s)<=0||(o.has(E.key)||yh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(t,n,s,o){vt(9500)}ii(t,n){return $.forEach(this.docs,(s=>n(s)))}newChangeBuffer(t){return new qR(this)}getSize(t){return $.resolve(this.size)}}class qR extends xR{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(s)})),$.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
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
 */class HR{constructor(t){this.persistence=t,this.si=new Ks((n=>Lm(n)),zm),this.lastRemoteSnapshotVersion=St.min(),this.highestTargetId=0,this.oi=0,this._i=new Qm,this.targetCount=0,this.ai=no.ur()}forEachTarget(t,n){return this.si.forEach(((s,o)=>n(o))),$.resolve()}getLastRemoteSnapshotVersion(t){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return $.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),$.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new no(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,$.resolve()}updateTargetData(t,n){return this.Pr(n),$.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.si.forEach(((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(t){return $.resolve(this.targetCount)}getTargetData(t,n){const s=this.si.get(n)||null;return $.resolve(s)}addMatchingKeys(t,n,s){return this._i.Wr(n,s),$.resolve()}removeMatchingKeys(t,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(t,f))})),$.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),$.resolve()}getMatchingKeysForTargetId(t,n){const s=this._i.Hr(n);return $.resolve(s)}containsKey(t,n){return $.resolve(this._i.containsKey(n))}}/**
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
 */class XT{constructor(t,n){this.ui={},this.overlays={},this.ci=new mh(0),this.li=!1,this.li=!0,this.hi=new zR,this.referenceDelegate=t(this),this.Pi=new HR(this),this.indexManager=new IR,this.remoteDocumentCache=(function(o){return new BR(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new wR(n),this.Ii=new UR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new LR,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ui[t.toKey()];return s||(s=new jR(n,this.referenceDelegate),this.ui[t.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,s){lt("MemoryPersistence","Starting transaction:",t);const o=new FR(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,n){return $.or(Object.values(this.ui).map((s=>()=>s.containsKey(t,n))))}}class FR extends yw{constructor(t){super(),this.currentSequenceNumber=t}}class Km{constructor(t){this.persistence=t,this.Ri=new Qm,this.Vi=null}static mi(t){return new Km(t)}get fi(){if(this.Vi)return this.Vi;throw vt(60996)}addReference(t,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),$.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),$.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(t,n)))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,(s=>{const o=gt.fromPath(s);return this.gi(t,o).next((u=>{u||n.removeEntry(o,St.min())}))})).next((()=>(this.Vi=null,n.apply(t))))}updateLimboDocument(t,n){return this.gi(t,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(t){return 0}gi(t,n){return $.or([()=>$.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class Wc{constructor(t,n){this.persistence=t,this.pi=new Ks((s=>Ew(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=VR(this,n)}static mi(t,n){return new Wc(t,n)}Ei(){}di(t){return $.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((s=>n.next((o=>s+o))))}wr(t){let n=0;return this.pr(t,(s=>{n++})).next((()=>n))}pr(t,n){return $.forEach(this.pi,((s,o)=>this.br(t,s,o).next((u=>u?$.resolve():n(o)))))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(f=>this.br(t,f,n).next((m=>{m||(s++,u.removeEntry(f,St.min()))})))).next((()=>u.apply(t))).next((()=>s))}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),$.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),$.resolve()}removeReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),$.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),$.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Pc(t.data.value)),n}br(t,n,s){return $.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.pi.get(n);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ym{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Es=s,this.ds=o}static As(t,n){let s=Pt(),o=Pt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Ym(t,n.fromCache,s,o)}}/**
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
 */class GR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class QR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return xb()?8:_w(Ze())>0?6:4})()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.ys(t,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(t,n,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new GR;return this.Ss(t,n,f).next((m=>{if(u.result=m,this.Vs)return this.bs(t,n,f,m.size)}))})).next((()=>u.result))}bs(t,n,s,o){return s.documentReadCount<this.fs?(Ba()<=Vt.DEBUG&&lt("QueryEngine","SDK will not create cache indexes for query:",qa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(Ba()<=Vt.DEBUG&&lt("QueryEngine","Query:",qa(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Ba()<=Vt.DEBUG&&lt("QueryEngine","The SDK decides to create cache indexes for query:",qa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,di(n))):$.resolve())}ys(t,n){if(Nv(n))return $.resolve(null);let s=di(n);return this.indexManager.getIndexType(t,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=$c(n,null,"F"),s=di(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next((u=>{const f=Pt(...u);return this.ps.getDocuments(t,f).next((m=>this.indexManager.getMinOffset(t,s).next((y=>{const p=this.Ds(n,m);return this.Cs(n,p,f,y.readTime)?this.ys(t,$c(n,null,"F")):this.vs(t,p,n,y)}))))})))))}ws(t,n,s,o){return Nv(n)||o.isEqual(St.min())?$.resolve(null):this.ps.getDocuments(t,s).next((u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,o)?$.resolve(null):(Ba()<=Vt.DEBUG&&lt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),qa(n)),this.vs(t,f,n,dw(o,Ul)).next((m=>m)))}))}Ds(t,n){let s=new De(IT(t));return n.forEach(((o,u)=>{yh(t,u)&&(s=s.add(u))})),s}Cs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,n,s){return Ba()<=Vt.DEBUG&&lt("QueryEngine","Using full collection scan to execute query:",qa(n)),this.ps.getDocumentsMatchingQuery(t,n,jr.min(),s)}vs(t,n,s,o){return this.ps.getDocumentsMatchingQuery(t,s,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const Xm="LocalStore",KR=3e8;class YR{constructor(t,n,s,o){this.persistence=t,this.Fs=n,this.serializer=o,this.Ms=new ue(xt),this.xs=new Ks((u=>Lm(u)),zm),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(s)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.Ms)))}}function XR(r,t,n,s){return new YR(r,t,n,s)}async function $T(r,t){const n=bt(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,n.Bs(t),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],m=[];let y=Pt();for(const p of o){f.push(p.batchId);for(const E of p.mutations)y=y.add(E.key)}for(const p of u){m.push(p.batchId);for(const E of p.mutations)y=y.add(E.key)}return n.localDocuments.getDocuments(s,y).next((p=>({Ls:p,removedBatchIds:f,addedBatchIds:m})))}))}))}function $R(r,t){const n=bt(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=t.batch.keys(),u=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,p,E){const b=p.batch,C=b.keys();let q=$.resolve();return C.forEach((K=>{q=q.next((()=>E.getEntry(y,K))).next((et=>{const J=p.docVersions.get(K);Ht(J!==null,48541),et.version.compareTo(J)<0&&(b.applyToRemoteDocument(et,p),et.isValidDocument()&&(et.setReadTime(p.commitVersion),E.addEntry(et)))}))})),q.next((()=>m.mutationQueue.removeMutationBatch(y,b)))})(n,s,t,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Pt();for(let p=0;p<m.mutationResults.length;++p)m.mutationResults[p].transformResults.length>0&&(y=y.add(m.batch.mutations[p].key));return y})(t)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function ZT(r){const t=bt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.Pi.getLastRemoteSnapshotVersion(n)))}function ZR(r,t){const n=bt(r),s=t.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const m=[];t.targetChanges.forEach(((E,b)=>{const C=o.get(b);if(!C)return;m.push(n.Pi.removeMatchingKeys(u,E.removedDocuments,b).next((()=>n.Pi.addMatchingKeys(u,E.addedDocuments,b))));let q=C.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(b)!==null?q=q.withResumeToken(Fe.EMPTY_BYTE_STRING,St.min()).withLastLimboFreeSnapshotVersion(St.min()):E.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(E.resumeToken,s)),o=o.insert(b,q),(function(et,J,st){return et.resumeToken.approximateByteSize()===0||J.snapshotVersion.toMicroseconds()-et.snapshotVersion.toMicroseconds()>=KR?!0:st.addedDocuments.size+st.modifiedDocuments.size+st.removedDocuments.size>0})(C,q,E)&&m.push(n.Pi.updateTargetData(u,q))}));let y=tr(),p=Pt();if(t.documentUpdates.forEach((E=>{t.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(JR(u,f,t.documentUpdates).next((E=>{y=E.ks,p=E.qs}))),!s.isEqual(St.min())){const E=n.Pi.getLastRemoteSnapshotVersion(u).next((b=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return $.waitFor(m).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,y,p))).next((()=>y))})).then((u=>(n.Ms=o,u)))}function JR(r,t,n){let s=Pt(),o=Pt();return n.forEach((u=>s=s.add(u))),t.getEntries(r,s).next((u=>{let f=tr();return n.forEach(((m,y)=>{const p=u.get(m);y.isFoundDocument()!==p.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(St.min())?(t.removeEntry(m,y.readTime),f=f.insert(m,y)):!p.isValidDocument()||y.version.compareTo(p.version)>0||y.version.compareTo(p.version)===0&&p.hasPendingWrites?(t.addEntry(y),f=f.insert(m,y)):lt(Xm,"Ignoring outdated watch update for ",m,". Current version:",p.version," Watch version:",y.version)})),{ks:f,qs:o}}))}function WR(r,t){const n=bt(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(t===void 0&&(t=Pm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t))))}function tI(r,t){const n=bt(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,t).next((u=>u?(o=u,$.resolve(o)):n.Pi.allocateTargetId(s).next((f=>(o=new Pr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(t,s.targetId)),s}))}async function vm(r,t,n){const s=bt(r),o=s.Ms.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!uo(f))throw f;lt(Xm,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ms=s.Ms.remove(t),s.xs.delete(o.target)}function Hv(r,t,n){const s=bt(r);let o=St.min(),u=Pt();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(y,p,E){const b=bt(y),C=b.xs.get(E);return C!==void 0?$.resolve(b.Ms.get(C)):b.Pi.getTargetData(p,E)})(s,f,di(t)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(f,t,n?o:St.min(),n?u:Pt()))).next((m=>(eI(s,zw(t),m),{documents:m,Qs:u})))))}function eI(r,t,n){let s=r.Os.get(t)||St.min();n.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Os.set(t,s)}class Fv{constructor(){this.activeTargetIds=Gw()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class nI{constructor(){this.Mo=new Fv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,s){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Fv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class iI{Oo(t){}shutdown(){}}/**
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
 */const Gv="ConnectivityMonitor";class Qv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){lt(Gv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){lt(Gv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mc=null;function Em(){return Mc===null?Mc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mc++,"0x"+Mc.toString(16)}/**
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
 */const Xd="RestConnection",rI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sI{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Kc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(t,n,s,o,u){const f=Em(),m=this.zo(t,n.toUriEncodedString());lt(Xd,`Sending RPC '${t}' ${f}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:p}=new URL(m),E=so(p);return this.Jo(t,m,y,s,E).then((b=>(lt(Xd,`Received RPC '${t}' ${f}: `,b),b)),(b=>{throw Ja(Xd,`RPC '${t}' ${f} failed with error: `,b,"url: ",m,"request:",s),b}))}Ho(t,n,s,o,u,f){return this.Go(t,n,s,o,u)}jo(t,n,s){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+oo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>t[u]=o)),s&&s.headers.forEach(((o,u)=>t[u]=o))}zo(t,n){const s=rI[t];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class aI{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const Ye="WebChannelConnection";class oI extends sI{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,o,u){const f=Em();return new Promise(((m,y)=>{const p=new tT;p.setWithCredentials(!0),p.listenOnce(eT.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case xc.NO_ERROR:const b=p.getResponseJson();lt(Ye,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(b)),m(b);break;case xc.TIMEOUT:lt(Ye,`RPC '${t}' ${f} timed out`),y(new at(Y.DEADLINE_EXCEEDED,"Request time out"));break;case xc.HTTP_ERROR:const C=p.getStatus();if(lt(Ye,`RPC '${t}' ${f} failed with status:`,C,"response text:",p.getResponseText()),C>0){let q=p.getResponseJson();Array.isArray(q)&&(q=q[0]);const K=q?.error;if(K&&K.status&&K.message){const et=(function(st){const ut=st.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(ut)>=0?ut:Y.UNKNOWN})(K.status);y(new at(et,K.message))}else y(new at(Y.UNKNOWN,"Server responded with status "+p.getStatus()))}else y(new at(Y.UNAVAILABLE,"Connection failed."));break;default:vt(9055,{l_:t,streamId:f,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{lt(Ye,`RPC '${t}' ${f} completed.`)}}));const E=JSON.stringify(o);lt(Ye,`RPC '${t}' ${f} sending request:`,o),p.send(n,"POST",E,s,15)}))}T_(t,n,s){const o=Em(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=rT(),m=iT(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(y.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,n,s),y.encodeInitMessageHeaders=!0;const E=u.join("");lt(Ye,`Creating RPC '${t}' stream ${o}: ${E}`,y);const b=f.createWebChannel(E,y);this.I_(b);let C=!1,q=!1;const K=new aI({Yo:J=>{q?lt(Ye,`Not sending because RPC '${t}' stream ${o} is closed:`,J):(C||(lt(Ye,`Opening RPC '${t}' stream ${o} transport.`),b.open(),C=!0),lt(Ye,`RPC '${t}' stream ${o} sending:`,J),b.send(J))},Zo:()=>b.close()}),et=(J,st,ut)=>{J.listen(st,(rt=>{try{ut(rt)}catch(mt){setTimeout((()=>{throw mt}),0)}}))};return et(b,bl.EventType.OPEN,(()=>{q||(lt(Ye,`RPC '${t}' stream ${o} transport opened.`),K.o_())})),et(b,bl.EventType.CLOSE,(()=>{q||(q=!0,lt(Ye,`RPC '${t}' stream ${o} transport closed`),K.a_(),this.E_(b))})),et(b,bl.EventType.ERROR,(J=>{q||(q=!0,Ja(Ye,`RPC '${t}' stream ${o} transport errored. Name:`,J.name,"Message:",J.message),K.a_(new at(Y.UNAVAILABLE,"The operation could not be completed")))})),et(b,bl.EventType.MESSAGE,(J=>{if(!q){const st=J.data[0];Ht(!!st,16349);const ut=st,rt=ut?.error||ut[0]?.error;if(rt){lt(Ye,`RPC '${t}' stream ${o} received error:`,rt);const mt=rt.status;let ht=(function(S){const R=Te[S];if(R!==void 0)return LT(R)})(mt),Nt=rt.message;ht===void 0&&(ht=Y.INTERNAL,Nt="Unknown error status: "+mt+" with message "+rt.message),q=!0,K.a_(new at(ht,Nt)),b.close()}else lt(Ye,`RPC '${t}' stream ${o} received:`,st),K.u_(st)}})),et(m,nT.STAT_EVENT,(J=>{J.stat===lm.PROXY?lt(Ye,`RPC '${t}' stream ${o} detected buffering proxy`):J.stat===lm.NOPROXY&&lt(Ye,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{K.__()}),0),K}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((n=>n===t))}}function $d(){return typeof document<"u"?document:null}/**
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
 */function Th(r){return new hR(r,!0)}/**
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
 */class JT{constructor(t,n,s=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&lt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Kv="PersistentStream";class WT{constructor(t,n,s,o,u,f,m,y){this.Mi=t,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new JT(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===Y.RESOURCE_EXHAUSTED?(Wi(n.toString()),Wi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{t((()=>{const o=new at(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(t,n){const s=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return lt(Kv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget((()=>this.D_===t?n():(lt(Kv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class lI extends WT{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=mR(this.serializer,t),s=(function(u){if(!("targetChange"in u))return St.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?St.min():f.readTime?mi(f.readTime):St.min()})(t);return this.listener.H_(n,s)}Y_(t){const n={};n.database=_m(this.serializer),n.addTarget=(function(u,f){let m;const y=f.target;if(m=dm(y)?{documents:yR(u,y)}:{query:_R(u,y).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=BT(u,f.resumeToken);const p=gm(u,f.expectedCount);p!==null&&(m.expectedCount=p)}else if(f.snapshotVersion.compareTo(St.min())>0){m.readTime=Jc(u,f.snapshotVersion.toTimestamp());const p=gm(u,f.expectedCount);p!==null&&(m.expectedCount=p)}return m})(this.serializer,t);const s=ER(this.serializer,t);s&&(n.labels=s),this.q_(n)}Z_(t){const n={};n.database=_m(this.serializer),n.removeTarget=t,this.q_(n)}}class uI extends WT{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return Ht(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Ht(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Ht(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=pR(t.writeResults,t.commitTime),s=mi(t.commitTime);return this.listener.na(s,n)}ra(){const t={};t.database=_m(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((s=>gR(this.serializer,s)))};this.q_(n)}}/**
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
 */class cI{}class hI extends cI{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new at(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Go(t,pm(n,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new at(Y.UNKNOWN,u.toString())}))}Ho(t,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.Ho(t,pm(n,s),o,f,m,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new at(Y.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class fI{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Wi(n),this.aa=!1):lt("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const js="RemoteStore";class dI{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{s.enqueueAndForget((async()=>{Ys(this)&&(lt(js,"Restarting streams for network reachability change."),await(async function(y){const p=bt(y);p.Ea.add(4),await Jl(p),p.Ra.set("Unknown"),p.Ea.delete(4),await Ah(p)})(this))}))})),this.Ra=new fI(s,o)}}async function Ah(r){if(Ys(r))for(const t of r.da)await t(!0)}async function Jl(r){for(const t of r.da)await t(!1)}function t0(r,t){const n=bt(r);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),Wm(n)?Jm(n):ho(n).O_()&&Zm(n,t))}function $m(r,t){const n=bt(r),s=ho(n);n.Ia.delete(t),s.O_()&&e0(n,t),n.Ia.size===0&&(s.O_()?s.L_():Ys(n)&&n.Ra.set("Unknown"))}function Zm(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(St.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ho(r).Y_(t)}function e0(r,t){r.Va.Ue(t),ho(r).Z_(t)}function Jm(r){r.Va=new oR({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),ho(r).start(),r.Ra.ua()}function Wm(r){return Ys(r)&&!ho(r).x_()&&r.Ia.size>0}function Ys(r){return bt(r).Ea.size===0}function n0(r){r.Va=void 0}async function mI(r){r.Ra.set("Online")}async function gI(r){r.Ia.forEach(((t,n)=>{Zm(r,t)}))}async function pI(r,t){n0(r),Wm(r)?(r.Ra.ha(t),Jm(r)):r.Ra.set("Unknown")}async function yI(r,t,n){if(r.Ra.set("Online"),t instanceof jT&&t.state===2&&t.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))})(r,t)}catch(s){lt(js,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await th(r,s)}else if(t instanceof Lc?r.Va.Ze(t):t instanceof zT?r.Va.st(t):r.Va.tt(t),!n.isEqual(St.min()))try{const s=await ZT(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach(((y,p)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.Ia.get(p);E&&u.Ia.set(p,E.withResumeToken(y.resumeToken,f))}})),m.targetMismatches.forEach(((y,p)=>{const E=u.Ia.get(y);if(!E)return;u.Ia.set(y,E.withResumeToken(Fe.EMPTY_BYTE_STRING,E.snapshotVersion)),e0(u,y);const b=new Pr(E.target,y,p,E.sequenceNumber);Zm(u,b)})),u.remoteSyncer.applyRemoteEvent(m)})(r,n)}catch(s){lt(js,"Failed to raise snapshot:",s),await th(r,s)}}async function th(r,t,n){if(!uo(t))throw t;r.Ea.add(1),await Jl(r),r.Ra.set("Offline"),n||(n=()=>ZT(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{lt(js,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await Ah(r)}))}function i0(r,t){return t().catch((n=>th(r,n,t)))}async function Sh(r){const t=bt(r),n=Fr(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Pm;for(;_I(t);)try{const o=await WR(t.localStore,s);if(o===null){t.Ta.length===0&&n.L_();break}s=o.batchId,vI(t,o)}catch(o){await th(t,o)}r0(t)&&s0(t)}function _I(r){return Ys(r)&&r.Ta.length<10}function vI(r,t){r.Ta.push(t);const n=Fr(r);n.O_()&&n.X_&&n.ea(t.mutations)}function r0(r){return Ys(r)&&!Fr(r).x_()&&r.Ta.length>0}function s0(r){Fr(r).start()}async function EI(r){Fr(r).ra()}async function TI(r){const t=Fr(r);for(const n of r.Ta)t.ea(n.mutations)}async function AI(r,t,n){const s=r.Ta.shift(),o=Hm.from(s,t,n);await i0(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Sh(r)}async function SI(r,t){t&&Fr(r).X_&&await(async function(s,o){if((function(f){return rR(f)&&f!==Y.ABORTED})(o.code)){const u=s.Ta.shift();Fr(s).B_(),await i0(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Sh(s)}})(r,t),r0(r)&&s0(r)}async function Yv(r,t){const n=bt(r);n.asyncQueue.verifyOperationInProgress(),lt(js,"RemoteStore received new credentials");const s=Ys(n);n.Ea.add(3),await Jl(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await Ah(n)}async function bI(r,t){const n=bt(r);t?(n.Ea.delete(2),await Ah(n)):t||(n.Ea.add(2),await Jl(n),n.Ra.set("Unknown"))}function ho(r){return r.ma||(r.ma=(function(n,s,o){const u=bt(n);return u.sa(),new lI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:mI.bind(null,r),t_:gI.bind(null,r),r_:pI.bind(null,r),H_:yI.bind(null,r)}),r.da.push((async t=>{t?(r.ma.B_(),Wm(r)?Jm(r):r.Ra.set("Unknown")):(await r.ma.stop(),n0(r))}))),r.ma}function Fr(r){return r.fa||(r.fa=(function(n,s,o){const u=bt(n);return u.sa(),new uI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:EI.bind(null,r),r_:SI.bind(null,r),ta:TI.bind(null,r),na:AI.bind(null,r)}),r.da.push((async t=>{t?(r.fa.B_(),await Sh(r)):(await r.fa.stop(),r.Ta.length>0&&(lt(js,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class tg{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ks,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,m=new tg(t,n,f,o,u);return m.start(s),m}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new at(Y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eg(r,t){if(Wi("AsyncQueue",`${t}: ${r}`),uo(r))return new at(Y.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ka{static emptySet(t){return new Ka(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||gt.comparator(n.key,s.key):(n,s)=>gt.comparator(n.key,s.key),this.keyedMap=wl(),this.sortedSet=new ue(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,s)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ka)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ka;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Xv{constructor(){this.ga=new ue(gt.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):vt(63341,{Rt:t,pa:s}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,s)=>{t.push(s)})),t}}class io{constructor(t,n,s,o,u,f,m,y,p){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=p}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach((m=>{f.push({type:0,doc:m})})),new io(t,n,Ka.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xl(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class wI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class RI{constructor(){this.queries=$v(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=bt(n),u=o.queries;o.queries=$v(),u.forEach(((f,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new at(Y.ABORTED,"Firestore shutting down"))}}function $v(){return new Ks((r=>RT(r)),Xl)}async function II(r,t){const n=bt(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.ba()&&t.Da()&&(s=2):(u=new wI,s=t.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=eg(f,`Initialization of query '${qa(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.Sa.push(t),t.va(n.onlineState),u.wa&&t.Fa(u.wa)&&ng(n)}async function CI(r,t){const n=bt(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function DI(r,t){const n=bt(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&ng(n)}function NI(r,t,n){const s=bt(r),o=s.queries.get(t);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(t)}function ng(r){r.Ca.forEach((t=>{t.next()}))}var Tm,Zv;(Zv=Tm||(Tm={})).Ma="default",Zv.Cache="cache";class OI{constructor(t,n,s){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new io(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=io.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Tm.Cache}}/**
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
 */class a0{constructor(t){this.key=t}}class o0{constructor(t){this.key=t}}class MI{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pt(),this.mutatedKeys=Pt(),this.eu=IT(t),this.tu=new Ka(this.eu)}get nu(){return this.Ya}ru(t,n){const s=n?n.iu:new Xv,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,p=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((E,b)=>{const C=o.get(E),q=yh(this.query,b)?b:null,K=!!C&&this.mutatedKeys.has(C.key),et=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let J=!1;C&&q?C.data.isEqual(q.data)?K!==et&&(s.track({type:3,doc:q}),J=!0):this.su(C,q)||(s.track({type:2,doc:q}),J=!0,(y&&this.eu(q,y)>0||p&&this.eu(q,p)<0)&&(m=!0)):!C&&q?(s.track({type:0,doc:q}),J=!0):C&&!q&&(s.track({type:1,doc:C}),J=!0,(y||p)&&(m=!0)),J&&(q?(f=f.add(q),u=et?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:f,iu:s,Cs:m,mutatedKeys:u}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((E,b)=>(function(q,K){const et=J=>{switch(J){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return vt(20277,{Rt:J})}};return et(q)-et(K)})(E.type,b.type)||this.eu(E.doc,b.doc))),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,p=y!==this.Za;return this.Za=y,f.length!==0||p?{snapshot:new io(this.query,t.tu,u,f,t.mutatedKeys,y===0,p,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Xv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Pt(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return t.forEach((s=>{this.Xa.has(s)||n.push(new o0(s))})),this.Xa.forEach((s=>{t.has(s)||n.push(new a0(s))})),n}cu(t){this.Ya=t.Qs,this.Xa=Pt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return io.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ig="SyncEngine";class VI{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class xI{constructor(t){this.key=t,this.hu=!1}}class PI{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new Ks((m=>RT(m)),Xl),this.Iu=new Map,this.Eu=new Set,this.du=new ue(gt.comparator),this.Au=new Map,this.Ru=new Qm,this.Vu={},this.mu=new Map,this.fu=no.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function kI(r,t,n=!0){const s=d0(r);let o;const u=s.Tu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await l0(s,t,n,!0),o}async function UI(r,t){const n=d0(r);await l0(n,t,!0,!1)}async function l0(r,t,n,s){const o=await tI(r.localStore,di(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await LI(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&t0(r.remoteStore,o),m}async function LI(r,t,n,s,o){r.pu=(b,C,q)=>(async function(et,J,st,ut){let rt=J.view.ru(st);rt.Cs&&(rt=await Hv(et.localStore,J.query,!1).then((({documents:x})=>J.view.ru(x,rt))));const mt=ut&&ut.targetChanges.get(J.targetId),ht=ut&&ut.targetMismatches.get(J.targetId)!=null,Nt=J.view.applyChanges(rt,et.isPrimaryClient,mt,ht);return Wv(et,J.targetId,Nt.au),Nt.snapshot})(r,b,C,q);const u=await Hv(r.localStore,t,!0),f=new MI(t,u.Qs),m=f.ru(u.documents),y=Zl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),p=f.applyChanges(m,r.isPrimaryClient,y);Wv(r,n,p.au);const E=new VI(t,n,f);return r.Tu.set(t,E),r.Iu.has(n)?r.Iu.get(n).push(t):r.Iu.set(n,[t]),p.snapshot}async function zI(r,t,n){const s=bt(r),o=s.Tu.get(t),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((f=>!Xl(f,t)))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await vm(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&$m(s.remoteStore,o.targetId),Am(s,o.targetId)})).catch(lo)):(Am(s,o.targetId),await vm(s.localStore,o.targetId,!0))}async function jI(r,t){const n=bt(r),s=n.Tu.get(t),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),$m(n.remoteStore,s.targetId))}async function BI(r,t,n){const s=YI(r);try{const o=await(function(f,m){const y=bt(f),p=ie.now(),E=m.reduce(((q,K)=>q.add(K.key)),Pt());let b,C;return y.persistence.runTransaction("Locally write mutations","readwrite",(q=>{let K=tr(),et=Pt();return y.Ns.getEntries(q,E).next((J=>{K=J,K.forEach(((st,ut)=>{ut.isValidDocument()||(et=et.add(st))}))})).next((()=>y.localDocuments.getOverlayedDocuments(q,K))).next((J=>{b=J;const st=[];for(const ut of m){const rt=Ww(ut,b.get(ut.key).overlayedDocument);rt!=null&&st.push(new Yr(ut.key,rt,_T(rt.value.mapValue),Pn.exists(!0)))}return y.mutationQueue.addMutationBatch(q,p,st,m)})).next((J=>{C=J;const st=J.applyToLocalDocumentSet(b,et);return y.documentOverlayCache.saveOverlays(q,J.batchId,st)}))})).then((()=>({batchId:C.batchId,changes:DT(b)})))})(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),(function(f,m,y){let p=f.Vu[f.currentUser.toKey()];p||(p=new ue(xt)),p=p.insert(m,y),f.Vu[f.currentUser.toKey()]=p})(s,o.batchId,n),await Wl(s,o.changes),await Sh(s.remoteStore)}catch(o){const u=eg(o,"Failed to persist write");n.reject(u)}}async function u0(r,t){const n=bt(r);try{const s=await ZR(n.localStore,t);t.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(Ht(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Ht(f.hu,14607):o.removedDocuments.size>0&&(Ht(f.hu,42227),f.hu=!1))})),await Wl(n,s,t)}catch(s){await lo(s)}}function Jv(r,t,n){const s=bt(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((u,f)=>{const m=f.view.va(t);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const y=bt(f);y.onlineState=m;let p=!1;y.queries.forEach(((E,b)=>{for(const C of b.Sa)C.va(m)&&(p=!0)})),p&&ng(y)})(s.eventManager,t),o.length&&s.Pu.H_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function qI(r,t,n){const s=bt(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Au.get(t),u=o&&o.key;if(u){let f=new ue(gt.comparator);f=f.insert(u,$e.newNoDocument(u,St.min()));const m=Pt().add(u),y=new Eh(St.min(),new Map,new ue(xt),f,m);await u0(s,y),s.du=s.du.remove(u),s.Au.delete(t),rg(s)}else await vm(s.localStore,t,!1).then((()=>Am(s,t,n))).catch(lo)}async function HI(r,t){const n=bt(r),s=t.batch.batchId;try{const o=await $R(n.localStore,t);h0(n,s,null),c0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Wl(n,o)}catch(o){await lo(o)}}async function FI(r,t,n){const s=bt(r);try{const o=await(function(f,m){const y=bt(f);return y.persistence.runTransaction("Reject batch","readwrite-primary",(p=>{let E;return y.mutationQueue.lookupMutationBatch(p,m).next((b=>(Ht(b!==null,37113),E=b.keys(),y.mutationQueue.removeMutationBatch(p,b)))).next((()=>y.mutationQueue.performConsistencyCheck(p))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(p,E,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,E))).next((()=>y.localDocuments.getDocuments(p,E)))}))})(s.localStore,t);h0(s,t,n),c0(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Wl(s,o)}catch(o){await lo(o)}}function c0(r,t){(r.mu.get(t)||[]).forEach((n=>{n.resolve()})),r.mu.delete(t)}function h0(r,t,n){const s=bt(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Vu[s.currentUser.toKey()]=o}}function Am(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Iu.get(t))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach((s=>{r.Ru.containsKey(s)||f0(r,s)}))}function f0(r,t){r.Eu.delete(t.path.canonicalString());const n=r.du.get(t);n!==null&&($m(r.remoteStore,n),r.du=r.du.remove(t),r.Au.delete(n),rg(r))}function Wv(r,t,n){for(const s of n)s instanceof a0?(r.Ru.addReference(s.key,t),GI(r,s)):s instanceof o0?(lt(ig,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,t),r.Ru.containsKey(s.key)||f0(r,s.key)):vt(19791,{wu:s})}function GI(r,t){const n=t.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(lt(ig,"New document in limbo: "+n),r.Eu.add(s),rg(r))}function rg(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const n=new gt(ne.fromString(t)),s=r.fu.next();r.Au.set(s,new xI(n)),r.du=r.du.insert(n,s),t0(r.remoteStore,new Pr(di(jm(n.path)),s,"TargetPurposeLimboResolution",mh.ce))}}async function Wl(r,t,n){const s=bt(r),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{f.push(s.pu(y,t,n).then((p=>{if((p||n)&&s.isPrimaryClient){const E=p?!p.fromCache:n?.targetChanges.get(y.targetId)?.current;s.sharedClientState.updateQueryState(y.targetId,E?"current":"not-current")}if(p){o.push(p);const E=Ym.As(y.targetId,p);u.push(E)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(y,p){const E=bt(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>$.forEach(p,(C=>$.forEach(C.Es,(q=>E.persistence.referenceDelegate.addReference(b,C.targetId,q))).next((()=>$.forEach(C.ds,(q=>E.persistence.referenceDelegate.removeReference(b,C.targetId,q)))))))))}catch(b){if(!uo(b))throw b;lt(Xm,"Failed to update sequence numbers: "+b)}for(const b of p){const C=b.targetId;if(!b.fromCache){const q=E.Ms.get(C),K=q.snapshotVersion,et=q.withLastLimboFreeSnapshotVersion(K);E.Ms=E.Ms.insert(C,et)}}})(s.localStore,u))}async function QI(r,t){const n=bt(r);if(!n.currentUser.isEqual(t)){lt(ig,"User change. New user:",t.toKey());const s=await $T(n.localStore,t);n.currentUser=t,(function(u,f){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new at(Y.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Wl(n,s.Ls)}}function KI(r,t){const n=bt(r),s=n.Au.get(t);if(s&&s.hu)return Pt().add(s.key);{let o=Pt();const u=n.Iu.get(t);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function d0(r){const t=bt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=u0.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=KI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=qI.bind(null,t),t.Pu.H_=DI.bind(null,t.eventManager),t.Pu.yu=NI.bind(null,t.eventManager),t}function YI(r){const t=bt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=HI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=FI.bind(null,t),t}class eh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Th(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return XR(this.persistence,new QR,t.initialUser,this.serializer)}Cu(t){return new XT(Km.mi,this.serializer)}Du(t){return new nI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eh.provider={build:()=>new eh};class XI extends eh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){Ht(this.persistence.referenceDelegate instanceof Wc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new OR(s,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new XT((s=>Wc.mi(s,n)),this.serializer)}}class Sm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Jv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=QI.bind(null,this.syncEngine),await bI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new RI})()}createDatastore(t){const n=Th(t.databaseInfo.databaseId),s=(function(u){return new oI(u)})(t.databaseInfo);return(function(u,f,m,y){return new hI(u,f,m,y)})(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return(function(s,o,u,f,m){return new dI(s,o,u,f,m)})(this.localStore,this.datastore,t.asyncQueue,(n=>Jv(this.syncEngine,n,0)),(function(){return Qv.v()?new Qv:new iI})())}createSyncEngine(t,n){return(function(o,u,f,m,y,p,E){const b=new PI(o,u,f,m,y,p);return E&&(b.gu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=bt(n);lt(js,"RemoteStore shutting down."),s.Ea.add(5),await Jl(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Sm.provider={build:()=>new Sm};/**
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
 */class $I{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Wi("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
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
 */const Gr="FirestoreClient";class ZI{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Xe.UNAUTHENTICATED,this.clientId=xm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{lt(Gr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(lt(Gr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ks;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=eg(n,"Failed to shutdown persistence");t.reject(s)}})),t.promise}}async function Zd(r,t){r.asyncQueue.verifyOperationInProgress(),lt(Gr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await $T(t.localStore,o),s=o)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function tE(r,t){r.asyncQueue.verifyOperationInProgress();const n=await JI(r);lt(Gr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener((s=>Yv(t.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Yv(t.remoteStore,o))),r._onlineComponents=t}async function JI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){lt(Gr,"Using user provided OfflineComponentProvider");try{await Zd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;Ja("Error using user provided cache. Falling back to memory cache: "+n),await Zd(r,new eh)}}else lt(Gr,"Using default OfflineComponentProvider"),await Zd(r,new XI(void 0));return r._offlineComponents}async function m0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(lt(Gr,"Using user provided OnlineComponentProvider"),await tE(r,r._uninitializedComponentsProvider._online)):(lt(Gr,"Using default OnlineComponentProvider"),await tE(r,new Sm))),r._onlineComponents}function WI(r){return m0(r).then((t=>t.syncEngine))}async function eE(r){const t=await m0(r),n=t.eventManager;return n.onListen=kI.bind(null,t.syncEngine),n.onUnlisten=zI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=UI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=jI.bind(null,t.syncEngine),n}/**
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
 */function g0(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const nE=new Map;/**
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
 */const p0="firestore.googleapis.com",iE=!0;class rE{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new at(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=p0,this.ssl=iE}else this.host=t.host,this.ssl=t.ssl??iE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=YT;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<DR)throw new at(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=g0(t.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new at(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new at(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new at(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class bh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new at(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new at(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new nw;switch(s.type){case"firstParty":return new aw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new at(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=nE.get(n);s&&(lt("ComponentProvider","Removing Datastore"),nE.delete(n),s.terminate())})(this),Promise.resolve()}}function tC(r,t,n,s={}){r=fi(r,bh);const o=so(t),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},m=`${t}:${n}`;o&&(qE(`https://${m}`),HE("Firestore",!0)),u.host!==p0&&u.host!==m&&Ja("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!zr(y,f)&&(r._setSettings(y),s.mockUserToken)){let p,E;if(typeof s.mockUserToken=="string")p=s.mockUserToken,E=Xe.MOCK_USER;else{p=Rb(s.mockUserToken,r._app?.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new at(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Xe(b)}r._authCredentials=new iw(new aT(p,E))}}/**
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
 */class Ti{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ti(this.firestore,t,this._query)}}class le{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new le(this.firestore,t,this._key)}toJSON(){return{type:le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if(Yl(n,le._jsonSchema))return new le(t,s||null,new gt(ne.fromString(n.referencePath)))}}le._jsonSchemaVersion="firestore/documentReference/1.0",le._jsonSchema={type:Se("string",le._jsonSchemaVersion),referencePath:Se("string")};class gi extends Ti{constructor(t,n,s){super(t,n,jm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new le(this.firestore,null,new gt(t))}withConverter(t){return new gi(this.firestore,t,this._path)}}function eC(r,t,...n){if(r=ae(r),oT("collection","path",t),r instanceof bh){const s=ne.fromString(t,...n);return pv(s),new gi(r,null,s)}{if(!(r instanceof le||r instanceof gi))throw new at(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ne.fromString(t,...n));return pv(s),new gi(r.firestore,null,s)}}function Gl(r,t,...n){if(r=ae(r),arguments.length===1&&(t=xm.newId()),oT("doc","path",t),r instanceof bh){const s=ne.fromString(t,...n);return gv(s),new le(r,null,new gt(s))}{if(!(r instanceof le||r instanceof gi))throw new at(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ne.fromString(t,...n));return gv(s),new le(r.firestore,r instanceof gi?r.converter:null,new gt(s))}}function nC(r,t){return r=ae(r),t=ae(t),(r instanceof le||r instanceof gi)&&(t instanceof le||t instanceof gi)&&r.firestore===t.firestore&&r.path===t.path&&r.converter===t.converter}function iC(r,t){return r=ae(r),t=ae(t),r instanceof Ti&&t instanceof Ti&&r.firestore===t.firestore&&Xl(r._query,t._query)&&r.converter===t.converter}/**
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
 */const sE="AsyncQueue";class aE{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new JT(this,"async_queue_retry"),this._c=()=>{const s=$d();s&&lt(sE,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const n=$d();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=$d();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new ks;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!uo(t))throw t;lt(sE,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,Wi("INTERNAL UNHANDLED ERROR: ",oE(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(t,n,s){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const o=tg.createAndSchedule(this,t,n,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&vt(47125,{Pc:oE(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function oE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function lE(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(r,["next","error","complete"])}class Bs extends bh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new aE,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new aE(t),this._firestoreClient=void 0,await t}}}function rC(r,t){const n=typeof r=="object"?r:Mm(),s=typeof r=="string"?r:Kc,o=Qs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=bb("firestore");u&&tC(o,...u)}return o}function y0(r){if(r._terminated)throw new at(Y.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||sC(r),r._firestoreClient}function sC(r){const t=r._freezeSettings(),n=(function(o,u,f,m){return new Sw(o,u,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,g0(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new ZI(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(r._componentsProvider))}/**
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
 */class Vn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vn(Fe.fromBase64String(t))}catch(n){throw new at(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Vn(Fe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Yl(t,Vn._jsonSchema))return Vn.fromBase64String(t.bytes)}}Vn._jsonSchemaVersion="firestore/bytes/1.0",Vn._jsonSchema={type:Se("string",Vn._jsonSchemaVersion),bytes:Se("string")};/**
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
 */class wh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new at(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Rh{constructor(t){this._methodName=t}}/**
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
 */class pi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new at(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new at(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return xt(this._lat,t._lat)||xt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pi._jsonSchemaVersion}}static fromJSON(t){if(Yl(t,pi._jsonSchema))return new pi(t.latitude,t.longitude)}}pi._jsonSchemaVersion="firestore/geoPoint/1.0",pi._jsonSchema={type:Se("string",pi._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};/**
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
 */class yi{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:yi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Yl(t,yi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new yi(t.vectorValues);throw new at(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yi._jsonSchemaVersion="firestore/vectorValue/1.0",yi._jsonSchema={type:Se("string",yi._jsonSchemaVersion),vectorValues:Se("object")};/**
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
 */const aC=/^__.*__$/;class oC{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Yr(t,this.data,this.fieldMask,n,this.fieldTransforms):new $l(t,this.data,n,this.fieldTransforms)}}class _0{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Yr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function v0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw vt(40011,{Ac:r})}}class sg{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new sg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.gc(t),s}yc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return nh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(v0(this.Ac)&&aC.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class lC{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Th(t)}Cc(t,n,s,o=!1){return new sg({Ac:t,methodName:n,Dc:s,path:He.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ih(r){const t=r._freezeSettings(),n=Th(r._databaseId);return new lC(r._databaseId,!!t.ignoreUndefinedProperties,n)}function E0(r,t,n,s,o,u={}){const f=r.Cc(u.merge||u.mergeFields?2:0,t,n,o);og("Data must be an object, but it was:",f,s);const m=T0(s,f);let y,p;if(u.merge)y=new _n(f.fieldMask),p=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const b of u.mergeFields){const C=bm(t,b,n);if(!f.contains(C))throw new at(Y.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);S0(E,C)||E.push(C)}y=new _n(E),p=f.fieldTransforms.filter((b=>y.covers(b.field)))}else y=null,p=f.fieldTransforms;return new oC(new on(m),y,p)}class Ch extends Rh{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ch}}class ag extends Rh{_toFieldTransform(t){return new Xw(t.path,new ql)}isEqual(t){return t instanceof ag}}function uC(r,t,n,s){const o=r.Cc(1,t,n);og("Data must be an object, but it was:",o,s);const u=[],f=on.empty();Kr(s,((y,p)=>{const E=lg(t,y,n);p=ae(p);const b=o.yc(E);if(p instanceof Ch)u.push(E);else{const C=tu(p,b);C!=null&&(u.push(E),f.set(E,C))}}));const m=new _n(u);return new _0(f,m,o.fieldTransforms)}function cC(r,t,n,s,o,u){const f=r.Cc(1,t,n),m=[bm(t,s,n)],y=[o];if(u.length%2!=0)throw new at(Y.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<u.length;C+=2)m.push(bm(t,u[C])),y.push(u[C+1]);const p=[],E=on.empty();for(let C=m.length-1;C>=0;--C)if(!S0(p,m[C])){const q=m[C];let K=y[C];K=ae(K);const et=f.yc(q);if(K instanceof Ch)p.push(q);else{const J=tu(K,et);J!=null&&(p.push(q),E.set(q,J))}}const b=new _n(p);return new _0(E,b,f.fieldTransforms)}function hC(r,t,n,s=!1){return tu(n,r.Cc(s?4:3,t))}function tu(r,t){if(A0(r=ae(r)))return og("Unsupported field value:",t,r),T0(r,t);if(r instanceof Rh)return(function(s,o){if(!v0(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let f=0;for(const m of s){let y=tu(m,o.wc(f));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),f++}return{arrayValue:{values:u}}})(r,t)}return(function(s,o){if((s=ae(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Qw(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ie.fromDate(s);return{timestampValue:Jc(o.serializer,u)}}if(s instanceof ie){const u=new ie(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Jc(o.serializer,u)}}if(s instanceof pi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Vn)return{bytesValue:BT(o.serializer,s._byteString)};if(s instanceof le){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Gm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof yi)return(function(f,m){return{mapValue:{fields:{[pT]:{stringValue:yT},[Yc]:{arrayValue:{values:f.toArray().map((p=>{if(typeof p!="number")throw m.Sc("VectorValues must only contain numeric values.");return Bm(m.serializer,p)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${dh(s)}`)})(r,t)}function T0(r,t){const n={};return cT(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Kr(r,((s,o)=>{const u=tu(o,t.mc(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function A0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ie||r instanceof pi||r instanceof Vn||r instanceof le||r instanceof Rh||r instanceof yi)}function og(r,t,n){if(!A0(n)||!lT(n)){const s=dh(n);throw s==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+s)}}function bm(r,t,n){if((t=ae(t))instanceof wh)return t._internalPath;if(typeof t=="string")return lg(r,t);throw nh("Field path arguments must be of type string or ",r,!1,void 0,n)}const fC=new RegExp("[~\\*/\\[\\]]");function lg(r,t,n){if(t.search(fC)>=0)throw nh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new wh(...t.split("."))._internalPath}catch{throw nh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function nh(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||f)&&(y+=" (found",u&&(y+=` in field ${s}`),f&&(y+=` in document ${o}`),y+=")"),new at(Y.INVALID_ARGUMENT,m+r+y)}function S0(r,t){return r.some((n=>n.isEqual(t)))}/**
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
 */class b0{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new dC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ug("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dC extends b0{data(){return super.data()}}function ug(r,t){return typeof t=="string"?lg(r,t):t instanceof wh?t._internalPath:t._delegate._internalPath}/**
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
 */function mC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new at(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cg{}class hg extends cg{}function gC(r,t,...n){let s=[];t instanceof cg&&s.push(t),s=s.concat(n),(function(u){const f=u.filter((y=>y instanceof dg)).length,m=u.filter((y=>y instanceof fg)).length;if(f>1||f>0&&m>0)throw new at(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class fg extends hg{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new fg(t,n,s)}_apply(t){const n=this._parse(t);return w0(t._query,n),new Ti(t.firestore,t.converter,mm(t._query,n))}_parse(t){const n=Ih(t.firestore);return(function(u,f,m,y,p,E,b){let C;if(p.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new at(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){cE(b,E);const K=[];for(const et of b)K.push(uE(y,u,et));C={arrayValue:{values:K}}}else C=uE(y,u,b)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||cE(b,E),C=hC(m,f,b,E==="in"||E==="not-in");return Ae.create(p,E,C)})(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class dg extends cg{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new dg(t,n)}_parse(t){const n=this._queryConstraints.map((s=>s._parse(t))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:Qn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:((function(o,u){let f=o;const m=u.getFlattenedFilters();for(const y of m)w0(f,y),f=mm(f,y)})(t._query,n),new Ti(t.firestore,t.converter,mm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mg extends hg{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new mg(t,n)}_apply(t){const n=(function(o,u,f){if(o.startAt!==null)throw new at(Y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new at(Y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Bl(u,f)})(t._query,this._field,this._direction);return new Ti(t.firestore,t.converter,(function(o,u){const f=o.explicitOrderBy.concat([u]);return new co(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(t._query,n))}}function pC(r,t="asc"){const n=t,s=ug("orderBy",r);return mg._create(s,n)}class gg extends hg{constructor(t,n,s){super(),this.type=t,this._limit=n,this._limitType=s}static _create(t,n,s){return new gg(t,n,s)}_apply(t){return new Ti(t.firestore,t.converter,$c(t._query,this._limit,this._limitType))}}function yC(r){return gg._create("limit",r,"F")}function uE(r,t,n){if(typeof(n=ae(n))=="string"){if(n==="")throw new at(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wT(t)&&n.indexOf("/")!==-1)throw new at(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(ne.fromString(n));if(!gt.isDocumentKey(s))throw new at(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return bv(r,new gt(s))}if(n instanceof le)return bv(r,n._key);throw new at(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dh(n)}.`)}function cE(r,t){if(!Array.isArray(r)||r.length===0)throw new at(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function w0(r,t){const n=(function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(n!==null)throw n===t.op?new at(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new at(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class _C{convertValue(t,n="none"){switch(Hr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return pe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw vt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Kr(t,((o,u)=>{s[o]=this.convertValue(u,n)})),s}convertVectorValue(t){const n=t.fields?.[Yc].arrayValue?.values?.map((s=>pe(s.doubleValue)));return new yi(n)}convertGeoPoint(t){return new pi(pe(t.latitude),pe(t.longitude))}convertArray(t,n){return(t.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ph(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ll(t));default:return null}}convertTimestamp(t){const n=Br(t);return new ie(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=ne.fromString(t);Ht(KT(s),9688,{name:t});const o=new zl(s.get(1),s.get(3)),u=new gt(s.popFirst(5));return o.isEqual(n)||Wi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */function R0(r,t,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t,s}class Il{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Us extends b0{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new zc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(ug("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new at(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Us._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Us._jsonSchemaVersion="firestore/documentSnapshot/1.0",Us._jsonSchema={type:Se("string",Us._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class zc extends Us{data(t={}){return super.data(t)}}class Ya{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Il(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((s=>{t.call(n,new zc(this._firestore,this._userDataWriter,s.key,s,new Il(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new at(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const y=new zc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Il(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new zc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Il(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let p=-1,E=-1;return m.type!==0&&(p=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:vC(m.type),doc:y,oldIndex:p,newIndex:E}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new at(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ya._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=xm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function vC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return vt(61501,{type:r})}}Ya._jsonSchemaVersion="firestore/querySnapshot/1.0",Ya._jsonSchema={type:Se("string",Ya._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};class I0 extends _C{constructor(t){super(),this.firestore=t}convertBytes(t){return new Vn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new le(this.firestore,null,n)}}function EC(r,t,n){r=fi(r,le);const s=fi(r.firestore,Bs),o=R0(r.converter,t,n);return Dh(s,[E0(Ih(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Pn.none())])}function TC(r,t,n,...s){r=fi(r,le);const o=fi(r.firestore,Bs),u=Ih(o);let f;return f=typeof(t=ae(t))=="string"||t instanceof wh?cC(u,"updateDoc",r._key,t,n,s):uC(u,"updateDoc",r._key,t),Dh(o,[f.toMutation(r._key,Pn.exists(!0))])}function AC(r){return Dh(fi(r.firestore,Bs),[new qm(r._key,Pn.none())])}function SC(r,t){const n=fi(r.firestore,Bs),s=Gl(r),o=R0(r.converter,t);return Dh(n,[E0(Ih(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Pn.exists(!1))]).then((()=>s))}function C0(r,...t){r=ae(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof t[s]!="object"||lE(t[s])||(n=t[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(lE(t[s])){const y=t[s];t[s]=y.next?.bind(y),t[s+1]=y.error?.bind(y),t[s+2]=y.complete?.bind(y)}let u,f,m;if(r instanceof le)f=fi(r.firestore,Bs),m=jm(r._key.path),u={next:y=>{t[s]&&t[s](bC(f,r,y))},error:t[s+1],complete:t[s+2]};else{const y=fi(r,Ti);f=fi(y.firestore,Bs),m=y._query;const p=new I0(f);u={next:E=>{t[s]&&t[s](new Ya(f,p,y,E))},error:t[s+1],complete:t[s+2]},mC(r._query)}return(function(p,E,b,C){const q=new $I(C),K=new OI(E,q,b);return p.asyncQueue.enqueueAndForget((async()=>II(await eE(p),K))),()=>{q.Nu(),p.asyncQueue.enqueueAndForget((async()=>CI(await eE(p),K)))}})(y0(f),m,o,u)}function Dh(r,t){return(function(s,o){const u=new ks;return s.asyncQueue.enqueueAndForget((async()=>BI(await WI(s),o,u))),u.promise})(y0(r),t)}function bC(r,t,n){const s=n.docs.get(t._key),o=new I0(r);return new Us(r,o,t._key,s,new Il(n.hasPendingWrites,n.fromCache),t.converter)}function wm(){return new ag("serverTimestamp")}(function(t,n=!0){(function(o){oo=o})(ao),vi(new Gn("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Bs(new rw(s.getProvider("auth-internal")),new ow(f,s.getProvider("app-check-internal")),(function(p,E){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new at(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zl(p.options.projectId,E)})(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),xn(hv,fv,t),xn(hv,fv,"esm2020")})();function D0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wC=D0,N0=new Gs("auth","Firebase",D0());/**
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
 */const ih=new fh("@firebase/auth");function RC(r,...t){ih.logLevel<=Vt.WARN&&ih.warn(`Auth (${ao}): ${r}`,...t)}function jc(r,...t){ih.logLevel<=Vt.ERROR&&ih.error(`Auth (${ao}): ${r}`,...t)}/**
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
 */function Ai(r,...t){throw yg(r,...t)}function Fn(r,...t){return yg(r,...t)}function pg(r,t,n){const s={...wC(),[t]:n};return new Gs("auth","Firebase",s).create(t,{appName:r.name})}function Ls(r){return pg(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function IC(r,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&Ai(r,"argument-error"),pg(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yg(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return N0.create(r,...t)}function Tt(r,t,...n){if(!r)throw yg(t,...n)}function $i(r){const t="INTERNAL ASSERTION FAILED: "+r;throw jc(t),new Error(t)}function er(r,t){r||$i(t)}/**
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
 */function Rm(){return typeof self<"u"&&self.location?.href||""}function CC(){return hE()==="http:"||hE()==="https:"}function hE(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function DC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CC()||FE()||"connection"in navigator)?navigator.onLine:!0}function NC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class eu{constructor(t,n){this.shortDelay=t,this.longDelay=n,er(n>t,"Short delay should be less than long delay!"),this.isMobile=Db()||Mb()}get(){return DC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _g(r,t){er(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class O0{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$i("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$i("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$i("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VC=new eu(3e4,6e4);function vg(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function fo(r,t,n,s,o={}){return M0(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const m=Kl({key:r.config.apiKey,...f}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const p={method:t,headers:y,...u};return Ob()||(p.referrerPolicy="no-referrer"),r.emulatorConfig&&so(r.emulatorConfig.host)&&(p.credentials="include"),O0.fetch()(await V0(r,r.config.apiHost,n,m),p)})}async function M0(r,t,n){r._canInitEmulator=!1;const s={...OC,...t};try{const o=new PC(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Vc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[y,p]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vc(r,"credential-already-in-use",f);if(y==="EMAIL_EXISTS")throw Vc(r,"email-already-in-use",f);if(y==="USER_DISABLED")throw Vc(r,"user-disabled",f);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw pg(r,E,p);Ai(r,E)}}catch(o){if(o instanceof Kn)throw o;Ai(r,"network-request-failed",{message:String(o)})}}async function xC(r,t,n,s,o={}){const u=await fo(r,t,n,s,o);return"mfaPendingCredential"in u&&Ai(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function V0(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?_g(r.config,o):`${r.config.apiScheme}://${o}`;return MC.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}class PC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Fn(this.auth,"network-request-failed")),VC.get())})}}function Vc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Fn(r,t,s);return o.customData._tokenResponse=n,o}/**
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
 */async function kC(r,t){return fo(r,"POST","/v1/accounts:delete",t)}async function rh(r,t){return fo(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Vl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function UC(r,t=!1){const n=ae(r),s=await n.getIdToken(t),o=Eg(s);Tt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:Vl(Jd(o.auth_time)),issuedAtTime:Vl(Jd(o.iat)),expirationTime:Vl(Jd(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Jd(r){return Number(r)*1e3}function Eg(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return jc("JWT malformed, contained fewer than 3 sections"),null;try{const o=LE(n);return o?JSON.parse(o):(jc("Failed to decode base64 JWT payload"),null)}catch(o){return jc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function fE(r){const t=Eg(r);return Tt(t,"internal-error"),Tt(typeof t.exp<"u","internal-error"),Tt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ql(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Kn&&LC(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function LC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class zC{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Im{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vl(this.lastLoginAt),this.creationTime=Vl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sh(r){const t=r.auth,n=await r.getIdToken(),s=await Ql(r,rh(t,{idToken:n}));Tt(s?.users.length,t,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=o.providerUserInfo?.length?x0(o.providerUserInfo):[],f=BC(r.providerData,u),m=r.isAnonymous,y=!(r.email&&o.passwordHash)&&!f?.length,p=m?y:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Im(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(r,E)}async function jC(r){const t=ae(r);await sh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function BC(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function x0(r){return r.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function qC(r,t){const n=await M0(r,{},async()=>{const s=Kl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await V0(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return r.emulatorConfig&&so(r.emulatorConfig.host)&&(y.credentials="include"),O0.fetch()(f,y)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HC(r,t){return fo(r,"POST","/v2/accounts:revokeToken",vg(r,t))}/**
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
 */class Xa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Tt(t.idToken,"internal-error"),Tt(typeof t.idToken<"u","internal-error"),Tt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):fE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Tt(t.length!==0,"internal-error");const n=fE(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Tt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await qC(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Xa;return s&&(Tt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(Tt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(Tt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Xa,this.toJSON())}_performRefresh(){return $i("not implemented")}}/**
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
 */function Or(r,t){Tt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Hn{constructor({uid:t,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new zC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Im(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Ql(this,this.stsTokenManager.getToken(this.auth,t));return Tt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return UC(this,t)}reload(){return jC(this)}_assign(t){this!==t&&(Tt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Hn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){Tt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await sh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(Ls(this.auth));const t=await this.getIdToken();return await Ql(this,kC(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,y=n._redirectEventId??void 0,p=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:b,emailVerified:C,isAnonymous:q,providerData:K,stsTokenManager:et}=n;Tt(b&&et,t,"internal-error");const J=Xa.fromJSON(this.name,et);Tt(typeof b=="string",t,"internal-error"),Or(s,t.name),Or(o,t.name),Tt(typeof C=="boolean",t,"internal-error"),Tt(typeof q=="boolean",t,"internal-error"),Or(u,t.name),Or(f,t.name),Or(m,t.name),Or(y,t.name),Or(p,t.name),Or(E,t.name);const st=new Hn({uid:b,auth:t,email:o,emailVerified:C,displayName:s,isAnonymous:q,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:J,createdAt:p,lastLoginAt:E});return K&&Array.isArray(K)&&(st.providerData=K.map(ut=>({...ut}))),y&&(st._redirectEventId=y),st}static async _fromIdTokenResponse(t,n,s=!1){const o=new Xa;o.updateFromServerResponse(n);const u=new Hn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await sh(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];Tt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?x0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,m=new Xa;m.updateFromIdToken(s);const y=new Hn({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:f}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Im(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(y,p),y}}/**
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
 */const dE=new Map;function Zi(r){er(r instanceof Function,"Expected a class definition");let t=dE.get(r);return t?(er(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,dE.set(r,t),t)}/**
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
 */class P0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}P0.type="NONE";const mE=P0;/**
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
 */function Bc(r,t,n){return`firebase:${r}:${t}:${n}`}class $a{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Bc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Bc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await rh(this.auth,{idToken:t}).catch(()=>{});return n?Hn._fromGetAccountInfoResponse(this.auth,n,t):null}return Hn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new $a(Zi(mE),t,s);const o=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let u=o[0]||Zi(mE);const f=Bc(s,t.config.apiKey,t.name);let m=null;for(const p of n)try{const E=await p._get(f);if(E){let b;if(typeof E=="string"){const C=await rh(t,{idToken:E}).catch(()=>{});if(!C)break;b=await Hn._fromGetAccountInfoResponse(t,C,E)}else b=Hn._fromJSON(t,E);p!==u&&(m=b),u=p;break}}catch{}const y=o.filter(p=>p._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new $a(u,t,s):(u=y[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async p=>{if(p!==u)try{await p._remove(f)}catch{}})),new $a(u,t,s))}}/**
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
 */function gE(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(z0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(k0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(B0(t))return"Blackberry";if(q0(t))return"Webos";if(U0(t))return"Safari";if((t.includes("chrome/")||L0(t))&&!t.includes("edge/"))return"Chrome";if(j0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function k0(r=Ze()){return/firefox\//i.test(r)}function U0(r=Ze()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function L0(r=Ze()){return/crios\//i.test(r)}function z0(r=Ze()){return/iemobile/i.test(r)}function j0(r=Ze()){return/android/i.test(r)}function B0(r=Ze()){return/blackberry/i.test(r)}function q0(r=Ze()){return/webos/i.test(r)}function Tg(r=Ze()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function FC(r=Ze()){return Tg(r)&&!!window.navigator?.standalone}function GC(){return Vb()&&document.documentMode===10}function H0(r=Ze()){return Tg(r)||j0(r)||q0(r)||B0(r)||/windows phone/i.test(r)||z0(r)}/**
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
 */function F0(r,t=[]){let n;switch(r){case"Browser":n=gE(Ze());break;case"Worker":n=`${gE(Ze())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ao}/${s}`}/**
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
 */class QC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,m)=>{try{const y=t(u);f(y)}catch(y){m(y)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function KC(r,t={}){return fo(r,"GET","/v2/passwordPolicy",vg(r,t))}/**
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
 */const YC=6;class XC{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??YC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
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
 */class $C{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pE(this),this.idTokenSubscription=new pE(this),this.beforeStateQueue=new QC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=N0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Zi(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await $a.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await rh(this,{idToken:t}),s=await Hn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(qn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,f=s?._redirectEventId,m=await this.tryRedirectSignIn(t);(!u||u===f)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Tt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await sh(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=NC()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(qn(this.app))return Promise.reject(Ls(this));const n=t?ae(t):null;return n&&Tt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Tt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(Ls(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return qn(this.app)?Promise.reject(Ls(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await KC(this),n=new XC(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Gs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await HC(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Zi(t)||this._popupRedirectResolver;Tt(n,this,"argument-error"),this.redirectPersistenceManager=await $a.create(this,[Zi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Tt(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const y=t.addObserver(n,s,o);return()=>{f=!0,y()}}else{const y=t.addObserver(n);return()=>{f=!0,y()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Tt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=F0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&RC(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Nh(r){return ae(r)}class pE{constructor(t){this.auth=t,this.observer=null,this.addObserver=jb(n=>this.observer=n)}get next(){return Tt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ag={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZC(r){Ag=r}function JC(r){return Ag.loadJS(r)}function WC(){return Ag.gapiScript}function t2(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function e2(r,t){const n=Qs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(zr(u,t??{}))return o;Ai(o,"already-initialized")}return n.initialize({options:t})}function n2(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Zi);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function i2(r,t,n){const s=Nh(r);Tt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=G0(t),{host:f,port:m}=r2(t),y=m===null?"":`:${m}`,p={url:`${u}//${f}${y}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Tt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Tt(zr(p,s.config.emulator)&&zr(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=p,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,so(f)?(qE(`${u}//${f}${y}`),HE("Auth",!0)):s2()}function G0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function r2(r){const t=G0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:yE(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:yE(f)}}}function yE(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function s2(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Q0{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return $i("not implemented")}_getIdTokenResponse(t){return $i("not implemented")}_linkToIdToken(t,n){return $i("not implemented")}_getReauthenticationResolver(t){return $i("not implemented")}}/**
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
 */async function Za(r,t){return xC(r,"POST","/v1/accounts:signInWithIdp",vg(r,t))}/**
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
 */const a2="http://localhost";class qs extends Q0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new qs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ai("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new qs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Za(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Za(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Za(t,n)}buildRequest(){const t={requestUri:a2,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Kl(n)}return t}}/**
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
 */class Sg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nu extends Sg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Mr extends nu{constructor(){super("facebook.com")}static credential(t){return qs._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mr.credentialFromTaggedObject(t)}static credentialFromError(t){return Mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mr.credential(t.oauthAccessToken)}catch{return null}}}Mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mr.PROVIDER_ID="facebook.com";/**
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
 */class Xi extends nu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return qs._fromParams({providerId:Xi.PROVIDER_ID,signInMethod:Xi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Xi.credentialFromTaggedObject(t)}static credentialFromError(t){return Xi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Xi.credential(n,s)}catch{return null}}}Xi.GOOGLE_SIGN_IN_METHOD="google.com";Xi.PROVIDER_ID="google.com";/**
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
 */class Vr extends nu{constructor(){super("github.com")}static credential(t){return qs._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vr.credentialFromTaggedObject(t)}static credentialFromError(t){return Vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vr.credential(t.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
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
 */class xr extends nu{constructor(){super("twitter.com")}static credential(t,n){return qs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return xr.credentialFromTaggedObject(t)}static credentialFromError(t){return xr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return xr.credential(n,s)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
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
 */class ro{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await Hn._fromIdTokenResponse(t,s,o),f=_E(s);return new ro({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=_E(s);return new ro({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function _E(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class ah extends Kn{constructor(t,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ah.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new ah(t,n,s,o)}}function K0(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ah._fromErrorAndOperation(r,u,t,s):u})}async function o2(r,t,n=!1){const s=await Ql(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return ro._forOperation(r,"link",s)}/**
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
 */async function l2(r,t,n=!1){const{auth:s}=r;if(qn(s.app))return Promise.reject(Ls(s));const o="reauthenticate";try{const u=await Ql(r,K0(s,o,t,r),n);Tt(u.idToken,s,"internal-error");const f=Eg(u.idToken);Tt(f,s,"internal-error");const{sub:m}=f;return Tt(r.uid===m,s,"user-mismatch"),ro._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Ai(s,"user-mismatch"),u}}/**
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
 */async function u2(r,t,n=!1){if(qn(r.app))return Promise.reject(Ls(r));const s="signIn",o=await K0(r,s,t),u=await ro._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}function c2(r,t,n,s){return ae(r).onIdTokenChanged(t,n,s)}function h2(r,t,n){return ae(r).beforeAuthStateChanged(t,n)}function f2(r,t,n,s){return ae(r).onAuthStateChanged(t,n,s)}function d2(r){return ae(r).signOut()}const oh="__sak";/**
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
 */class Y0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oh,"1"),this.storage.removeItem(oh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const m2=1e3,g2=10;class X0 extends Y0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=H0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,m,y)=>{this.notifyListeners(f,y)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);GC()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,g2):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},m2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}X0.type="LOCAL";const p2=X0;/**
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
 */class $0 extends Y0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}$0.type="SESSION";const Z0=$0;/**
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
 */function y2(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Oh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new Oh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async p=>p(n.origin,u)),y=await y2(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oh.receivers=[];/**
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
 */function bg(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class _2{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,y)=>{const p=bg("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(b){const C=b;if(C.data.eventId===p)switch(C.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function _i(){return window}function v2(r){_i().location.href=r}/**
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
 */function J0(){return typeof _i().WorkerGlobalScope<"u"&&typeof _i().importScripts=="function"}async function E2(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T2(){return navigator?.serviceWorker?.controller||null}function A2(){return J0()?self:null}/**
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
 */const W0="firebaseLocalStorageDb",S2=1,lh="firebaseLocalStorage",tA="fbase_key";class iu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mh(r,t){return r.transaction([lh],t?"readwrite":"readonly").objectStore(lh)}function b2(){const r=indexedDB.deleteDatabase(W0);return new iu(r).toPromise()}function Cm(){const r=indexedDB.open(W0,S2);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(lh,{keyPath:tA})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(lh)?t(s):(s.close(),await b2(),t(await Cm()))})})}async function vE(r,t,n){const s=Mh(r,!0).put({[tA]:t,value:n});return new iu(s).toPromise()}async function w2(r,t){const n=Mh(r,!1).get(t),s=await new iu(n).toPromise();return s===void 0?null:s.value}function EE(r,t){const n=Mh(r,!0).delete(t);return new iu(n).toPromise()}const R2=800,I2=3;class eA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>I2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return J0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oh._getInstance(A2()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await E2(),!this.activeServiceWorker)return;this.sender=new _2(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||T2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Cm();return await vE(t,oh,"1"),await EE(t,oh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>vE(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>w2(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>EE(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=Mh(o,!1).getAll();return new iu(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eA.type="LOCAL";const C2=eA;new eu(3e4,6e4);/**
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
 */function nA(r,t){return t?Zi(t):(Tt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class wg extends Q0{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Za(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Za(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Za(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function D2(r){return u2(r.auth,new wg(r),r.bypassAuthState)}function N2(r){const{auth:t,user:n}=r;return Tt(n,t,"internal-error"),l2(n,new wg(r),r.bypassAuthState)}async function O2(r){const{auth:t,user:n}=r;return Tt(n,t,"internal-error"),o2(n,new wg(r),r.bypassAuthState)}/**
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
 */class iA{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=t;if(f){this.reject(f);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return D2;case"linkViaPopup":case"linkViaRedirect":return O2;case"reauthViaPopup":case"reauthViaRedirect":return N2;default:Ai(this.auth,"internal-error")}}resolve(t){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const M2=new eu(2e3,1e4);async function V2(r,t,n){if(qn(r.app))return Promise.reject(Fn(r,"operation-not-supported-in-this-environment"));const s=Nh(r);IC(r,t,Sg);const o=nA(s,n);return new xs(s,"signInViaPopup",t,o).executeNotNull()}class xs extends iA{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,xs.currentPopupAction&&xs.currentPopupAction.cancel(),xs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Tt(t,this.auth,"internal-error"),t}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const t=bg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xs.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,M2.get())};t()}}xs.currentPopupAction=null;/**
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
 */const x2="pendingRedirect",qc=new Map;class P2 extends iA{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=qc.get(this.auth._key());if(!t){try{const s=await k2(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}qc.set(this.auth._key(),t)}return this.bypassAuthState||qc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function k2(r,t){const n=z2(t),s=L2(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function U2(r,t){qc.set(r._key(),t)}function L2(r){return Zi(r._redirectPersistence)}function z2(r){return Bc(x2,r.config.apiKey,r.name)}async function j2(r,t,n=!1){if(qn(r.app))return Promise.reject(Ls(r));const s=Nh(r),o=nA(s,t),f=await new P2(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const B2=600*1e3;class q2{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!H2(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!rA(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";n.onError(Fn(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=B2&&this.cachedEventUids.clear(),this.cachedEventUids.has(TE(t))}saveEventToCache(t){this.cachedEventUids.add(TE(t)),this.lastProcessedEventTime=Date.now()}}function TE(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function rA({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function H2(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rA(r);default:return!1}}/**
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
 */async function F2(r,t={}){return fo(r,"GET","/v1/projects",t)}/**
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
 */const G2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q2=/^https?/;async function K2(r){if(r.config.emulator)return;const{authorizedDomains:t}=await F2(r);for(const n of t)try{if(Y2(n))return}catch{}Ai(r,"unauthorized-domain")}function Y2(r){const t=Rm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!Q2.test(n))return!1;if(G2.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const X2=new eu(3e4,6e4);function AE(){const r=_i().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function $2(r){return new Promise((t,n)=>{function s(){AE(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{AE(),n(Fn(r,"network-request-failed"))},timeout:X2.get()})}if(_i().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(_i().gapi?.load)s();else{const o=t2("iframefcb");return _i()[o]=()=>{gapi.load?s():n(Fn(r,"network-request-failed"))},JC(`${WC()}?onload=${o}`).catch(u=>n(u))}}).catch(t=>{throw Hc=null,t})}let Hc=null;function Z2(r){return Hc=Hc||$2(r),Hc}/**
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
 */const J2=new eu(5e3,15e3),W2="__/auth/iframe",tD="emulator/auth/iframe",eD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iD(r){const t=r.config;Tt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?_g(t,tD):`https://${r.config.authDomain}/${W2}`,s={apiKey:t.apiKey,appName:r.name,v:ao},o=nD.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Kl(s).slice(1)}`}async function rD(r){const t=await Z2(r),n=_i().gapi;return Tt(n,r,"internal-error"),t.open({where:document.body,url:iD(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eD,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Fn(r,"network-request-failed"),m=_i().setTimeout(()=>{u(f)},J2.get());function y(){_i().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(f)})}))}/**
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
 */const sD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aD=500,oD=600,lD="_blank",uD="http://localhost";class SE{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cD(r,t,n,s=aD,o=oD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...sD,width:s.toString(),height:o.toString(),top:u,left:f},p=Ze().toLowerCase();n&&(m=L0(p)?lD:n),k0(p)&&(t=t||uD,y.scrollbars="yes");const E=Object.entries(y).reduce((C,[q,K])=>`${C}${q}=${K},`,"");if(FC(p)&&m!=="_self")return hD(t||"",m),new SE(null);const b=window.open(t||"",m,E);Tt(b,r,"popup-blocked");try{b.focus()}catch{}return new SE(b)}function hD(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const fD="__/auth/handler",dD="emulator/auth/handler",mD=encodeURIComponent("fac");async function bE(r,t,n,s,o,u){Tt(r.config.authDomain,r,"auth-domain-config-required"),Tt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:ao,eventId:o};if(t instanceof Sg){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",zb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,b]of Object.entries({}))f[E]=b}if(t instanceof nu){const E=t.getScopes().filter(b=>b!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const y=await r._getAppCheckToken(),p=y?`#${mD}=${encodeURIComponent(y)}`:"";return`${gD(r)}?${Kl(m).slice(1)}${p}`}function gD({config:r}){return r.emulator?_g(r,dD):`https://${r.authDomain}/${fD}`}/**
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
 */const Wd="webStorageSupport";class pD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z0,this._completeRedirectFn=j2,this._overrideRedirectResult=U2}async _openPopup(t,n,s,o){er(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const u=await bE(t,n,s,Rm(),o);return cD(t,u,bg())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await bE(t,n,s,Rm(),o);return v2(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(er(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await rD(t),s=new q2(t);return n.register("authEvent",o=>(Tt(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Wd,{type:Wd},o=>{const u=o?.[0]?.[Wd];u!==void 0&&n(!!u),Ai(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=K2(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return H0()||U0()||Tg()}}const yD=pD;var wE="@firebase/auth",RE="1.11.0";/**
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
 */class _D{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Tt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vD(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ED(r){vi(new Gn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;Tt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:F0(r)},p=new $C(s,o,u,y);return n2(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),vi(new Gn("auth-internal",t=>{const n=Nh(t.getProvider("auth").getImmediate());return(s=>new _D(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(wE,RE,vD(r)),xn(wE,RE,"esm2020")}/**
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
 */const TD=300,AD=BE("authIdTokenMaxAge")||TD;let IE=null;const SD=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>AD)return;const o=n?.token;IE!==o&&(IE=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function bD(r=Mm()){const t=Qs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=e2(r,{popupRedirectResolver:yD,persistence:[C2,p2,Z0]}),s=BE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=SD(u.toString());h2(n,f,()=>f(n.currentUser)),c2(n,m=>f(m))}}const o=zE("auth");return o&&i2(n,`http://${o}`),n}function wD(){return document.getElementsByTagName("head")?.[0]??document}ZC({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=Fn("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",wD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ED("Browser");const sA="@firebase/installations",Rg="0.6.19";/**
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
 */const aA=1e4,oA=`w:${Rg}`,lA="FIS_v2",RD="https://firebaseinstallations.googleapis.com/v1",ID=3600*1e3,CD="installations",DD="Installations";/**
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
 */const ND={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Hs=new Gs(CD,DD,ND);function uA(r){return r instanceof Kn&&r.code.includes("request-failed")}/**
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
 */function cA({projectId:r}){return`${RD}/projects/${r}/installations`}function hA(r){return{token:r.token,requestStatus:2,expiresIn:MD(r.expiresIn),creationTime:Date.now()}}async function fA(r,t){const s=(await t.json()).error;return Hs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function dA({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function OD(r,{refreshToken:t}){const n=dA(r);return n.append("Authorization",VD(t)),n}async function mA(r){const t=await r();return t.status>=500&&t.status<600?r():t}function MD(r){return Number(r.replace("s","000"))}function VD(r){return`${lA} ${r}`}/**
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
 */async function xD({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=cA(r),o=dA(r),u=t.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={fid:n,authVersion:lA,appId:r.appId,sdkVersion:oA},m={method:"POST",headers:o,body:JSON.stringify(f)},y=await mA(()=>fetch(s,m));if(y.ok){const p=await y.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:hA(p.authToken)}}else throw await fA("Create Installation",y)}/**
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
 */function gA(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function PD(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const kD=/^[cdef][\w-]{21}$/,Dm="";function UD(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=LD(r);return kD.test(n)?n:Dm}catch{return Dm}}function LD(r){return PD(r).substr(0,22)}/**
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
 */function Vh(r){return`${r.appName}!${r.appId}`}/**
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
 */const pA=new Map;function yA(r,t){const n=Vh(r);_A(n,t),zD(n,t)}function _A(r,t){const n=pA.get(r);if(n)for(const s of n)s(t)}function zD(r,t){const n=jD();n&&n.postMessage({key:r,fid:t}),BD()}let Ps=null;function jD(){return!Ps&&"BroadcastChannel"in self&&(Ps=new BroadcastChannel("[Firebase] FID Change"),Ps.onmessage=r=>{_A(r.data.key,r.data.fid)}),Ps}function BD(){pA.size===0&&Ps&&(Ps.close(),Ps=null)}/**
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
 */const qD="firebase-installations-database",HD=1,Fs="firebase-installations-store";let tm=null;function Ig(){return tm||(tm=XE(qD,HD,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Fs)}}})),tm}async function uh(r,t){const n=Vh(r),o=(await Ig()).transaction(Fs,"readwrite"),u=o.objectStore(Fs),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&yA(r,t.fid),t}async function vA(r){const t=Vh(r),s=(await Ig()).transaction(Fs,"readwrite");await s.objectStore(Fs).delete(t),await s.done}async function xh(r,t){const n=Vh(r),o=(await Ig()).transaction(Fs,"readwrite"),u=o.objectStore(Fs),f=await u.get(n),m=t(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&yA(r,m.fid),m}/**
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
 */async function Cg(r){let t;const n=await xh(r.appConfig,s=>{const o=FD(s),u=GD(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===Dm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function FD(r){const t=r||{fid:UD(),registrationStatus:0};return EA(t)}function GD(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Hs.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=QD(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:KD(r)}:{installationEntry:t}}async function QD(r,t){try{const n=await xD(r,t);return uh(r.appConfig,n)}catch(n){throw uA(n)&&n.customData.serverCode===409?await vA(r.appConfig):await uh(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function KD(r){let t=await CE(r.appConfig);for(;t.registrationStatus===1;)await gA(100),t=await CE(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Cg(r);return s||n}return t}function CE(r){return xh(r,t=>{if(!t)throw Hs.create("installation-not-found");return EA(t)})}function EA(r){return YD(r)?{fid:r.fid,registrationStatus:0}:r}function YD(r){return r.registrationStatus===1&&r.registrationTime+aA<Date.now()}/**
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
 */async function XD({appConfig:r,heartbeatServiceProvider:t},n){const s=$D(r,n),o=OD(r,n),u=t.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={installation:{sdkVersion:oA,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},y=await mA(()=>fetch(s,m));if(y.ok){const p=await y.json();return hA(p)}else throw await fA("Generate Auth Token",y)}function $D(r,{fid:t}){return`${cA(r)}/${t}/authTokens:generate`}/**
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
 */async function Dg(r,t=!1){let n;const s=await xh(r.appConfig,u=>{if(!TA(u))throw Hs.create("not-registered");const f=u.authToken;if(!t&&WD(f))return u;if(f.requestStatus===1)return n=ZD(r,t),u;{if(!navigator.onLine)throw Hs.create("app-offline");const m=eN(u);return n=JD(r,m),m}});return n?await n:s.authToken}async function ZD(r,t){let n=await DE(r.appConfig);for(;n.authToken.requestStatus===1;)await gA(100),n=await DE(r.appConfig);const s=n.authToken;return s.requestStatus===0?Dg(r,t):s}function DE(r){return xh(r,t=>{if(!TA(t))throw Hs.create("not-registered");const n=t.authToken;return nN(n)?{...t,authToken:{requestStatus:0}}:t})}async function JD(r,t){try{const n=await XD(r,t),s={...t,authToken:n};return await uh(r.appConfig,s),n}catch(n){if(uA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await vA(r.appConfig);else{const s={...t,authToken:{requestStatus:0}};await uh(r.appConfig,s)}throw n}}function TA(r){return r!==void 0&&r.registrationStatus===2}function WD(r){return r.requestStatus===2&&!tN(r)}function tN(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+ID}function eN(r){const t={requestStatus:1,requestTime:Date.now()};return{...r,authToken:t}}function nN(r){return r.requestStatus===1&&r.requestTime+aA<Date.now()}/**
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
 */async function iN(r){const t=r,{installationEntry:n,registrationPromise:s}=await Cg(t);return s?s.catch(console.error):Dg(t).catch(console.error),n.fid}/**
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
 */async function rN(r,t=!1){const n=r;return await sN(n),(await Dg(n,t)).token}async function sN(r){const{registrationPromise:t}=await Cg(r);t&&await t}/**
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
 */function aN(r){if(!r||!r.options)throw em("App Configuration");if(!r.name)throw em("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw em(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function em(r){return Hs.create("missing-app-config-values",{valueName:r})}/**
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
 */const AA="installations",oN="installations-internal",lN=r=>{const t=r.getProvider("app").getImmediate(),n=aN(t),s=Qs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},uN=r=>{const t=r.getProvider("app").getImmediate(),n=Qs(t,AA).getImmediate();return{getId:()=>iN(n),getToken:o=>rN(n,o)}};function cN(){vi(new Gn(AA,lN,"PUBLIC")),vi(new Gn(oN,uN,"PRIVATE"))}cN();xn(sA,Rg);xn(sA,Rg,"esm2020");/**
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
 */const ch="analytics",hN="firebase_id",fN="origin",dN=60*1e3,mN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ng="https://www.googletagmanager.com/gtag/js";/**
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
 */const ln=new fh("@firebase/analytics");/**
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
 */const gN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vn=new Gs("analytics","Analytics",gN);/**
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
 */function pN(r){if(!r.startsWith(Ng)){const t=vn.create("invalid-gtag-resource",{gtagURL:r});return ln.warn(t.message),""}return r}function SA(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function yN(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function _N(r,t){const n=yN("firebase-js-sdk-policy",{createScriptURL:pN}),s=document.createElement("script"),o=`${Ng}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function vN(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function EN(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const y=(await SA(n)).find(p=>p.measurementId===o);y&&await t[y.appId]}}catch(m){ln.error(m)}r("config",o,u)}async function TN(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await SA(n);for(const y of f){const p=m.find(b=>b.measurementId===y),E=p&&t[p.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){ln.error(u)}}function AN(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[m,y]=f;await TN(r,t,n,m,y)}else if(u==="config"){const[m,y]=f;await EN(r,t,n,s,m,y)}else if(u==="consent"){const[m,y]=f;r("consent",m,y)}else if(u==="get"){const[m,y,p]=f;r("get",m,y,p)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){ln.error(m)}}return o}function SN(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=AN(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function bN(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ng)&&n.src.includes(r))return n;return null}/**
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
 */const wN=30,RN=1e3;class IN{constructor(t={},n=RN){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const bA=new IN;function CN(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function DN(r){const{appId:t,apiKey:n}=r,s={method:"GET",headers:CN(n)},o=mN.replace("{app-id}",t),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();m.error?.message&&(f=m.error.message)}catch{}throw vn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function NN(r,t=bA,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw vn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw vn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new VN;return setTimeout(async()=>{m.abort()},dN),wA({appId:s,apiKey:o,measurementId:u},f,m,t)}async function wA(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=bA){const{appId:u,measurementId:f}=r;try{await ON(s,t)}catch(m){if(f)return ln.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:u,measurementId:f};throw m}try{const m=await DN(r);return o.deleteThrottleMetadata(u),m}catch(m){const y=m;if(!MN(y)){if(o.deleteThrottleMetadata(u),f)return ln.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:u,measurementId:f};throw m}const p=Number(y?.customData?.httpStatus)===503?ev(n,o.intervalMillis,wN):ev(n,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return o.setThrottleMetadata(u,E),ln.debug(`Calling attemptFetch again in ${p} millis`),wA(r,E,s,o)}}function ON(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(vn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function MN(r){if(!(r instanceof Kn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class VN{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function xN(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f={...s,send_to:u};r("event",n,f)}}/**
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
 */async function PN(){if(GE())try{await QE()}catch(r){return ln.warn(vn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return ln.warn(vn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kN(r,t,n,s,o,u,f){const m=NN(r);m.then(C=>{n[C.measurementId]=C.appId,r.options.measurementId&&C.measurementId!==r.options.measurementId&&ln.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>ln.error(C)),t.push(m);const y=PN().then(C=>{if(C)return s.getId()}),[p,E]=await Promise.all([m,y]);bN(u)||_N(u,p.measurementId),o("js",new Date);const b=f?.config??{};return b[fN]="firebase",b.update=!0,E!=null&&(b[hN]=E),o("config",p.measurementId,b),p.measurementId}/**
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
 */class UN{constructor(t){this.app=t}_delete(){return delete xl[this.app.options.appId],Promise.resolve()}}let xl={},NE=[];const OE={};let nm="dataLayer",LN="gtag",ME,RA,VE=!1;function zN(){const r=[];if(FE()&&r.push("This is a browser extension environment."),Pb()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=vn.create("invalid-analytics-context",{errorInfo:t});ln.warn(n.message)}}function jN(r,t,n){zN();const s=r.options.appId;if(!s)throw vn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)ln.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vn.create("no-api-key");if(xl[s]!=null)throw vn.create("already-exists",{id:s});if(!VE){vN(nm);const{wrappedGtag:u,gtagCore:f}=SN(xl,NE,OE,nm,LN);RA=u,ME=f,VE=!0}return xl[s]=kN(r,NE,OE,t,ME,nm,n),new UN(r)}function BN(r=Mm()){r=ae(r);const t=Qs(r,ch);return t.isInitialized()?t.getImmediate():qN(r)}function qN(r,t={}){const n=Qs(r,ch);if(n.isInitialized()){const o=n.getImmediate();if(zr(t,n.getOptions()))return o;throw vn.create("already-initialized")}return n.initialize({options:t})}function HN(r,t,n,s){r=ae(r),xN(RA,xl[r.app.options.appId],t,n,s).catch(o=>ln.error(o))}const xE="@firebase/analytics",PE="0.10.18";function FN(){vi(new Gn(ch,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return jN(s,o,n)},"PUBLIC")),vi(new Gn("analytics-internal",r,"PRIVATE")),xn(xE,PE),xn(xE,PE,"esm2020");function r(t){try{const n=t.getProvider(ch).getImmediate();return{logEvent:(s,o,u)=>HN(n,s,o,u)}}catch(n){throw vn.create("interop-component-reg-failed",{reason:n})}}}FN();/*! *****************************************************************************
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
***************************************************************************** */function GN(r,t,n,s){function o(u){return u instanceof n?u:new n(function(f){f(u)})}return new(n||(n=Promise))(function(u,f){function m(E){try{p(s.next(E))}catch(b){f(b)}}function y(E){try{p(s.throw(E))}catch(b){f(b)}}function p(E){E.done?u(E.value):o(E.value).then(m,y)}p((s=s.apply(r,[])).next())})}function QN(r,t){var n={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},s,o,u,f;return f={next:m(0),throw:m(1),return:m(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function m(p){return function(E){return y([p,E])}}function y(p){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,o&&(u=p[0]&2?o.return:p[0]?o.throw||((u=o.return)&&u.call(o),0):o.next)&&!(u=u.call(o,p[1])).done)return u;switch(o=0,u&&(p=[p[0]&2,u.value]),p[0]){case 0:case 1:u=p;break;case 4:return n.label++,{value:p[1],done:!1};case 5:n.label++,o=p[1],p=[0];continue;case 7:p=n.ops.pop(),n.trys.pop();continue;default:if(u=n.trys,!(u=u.length>0&&u[u.length-1])&&(p[0]===6||p[0]===2)){n=0;continue}if(p[0]===3&&(!u||p[1]>u[0]&&p[1]<u[3])){n.label=p[1];break}if(p[0]===6&&n.label<u[1]){n.label=u[1],u=p;break}if(u&&n.label<u[2]){n.label=u[2],n.ops.push(p);break}u[2]&&n.ops.pop(),n.trys.pop();continue}p=t.call(r,n)}catch(E){p=[6,E],o=0}finally{s=u=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var Ga=function(){return Ga=Object.assign||function(t){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},Ga.apply(this,arguments)},IA=function(r){return{loading:r==null,value:r}},KN=function(){return function(r,t){switch(t.type){case"error":return Ga(Ga({},r),{error:t.error,loading:!1,value:void 0});case"reset":return IA(t.defaultValue);case"value":return Ga(Ga({},r),{error:void 0,loading:!1,value:t.value});default:return r}}},YN=(function(r){var t=r?r():void 0,n=pt.useReducer(KN(),IA(t)),s=n[0],o=n[1],u=pt.useCallback(function(){var y=r?r():void 0;o({type:"reset",defaultValue:y})},[r]),f=pt.useCallback(function(y){o({type:"error",error:y})},[]),m=pt.useCallback(function(y){o({type:"value",value:y})},[]);return pt.useMemo(function(){return{error:s.error,loading:s.loading,reset:u,setError:f,setValue:m,value:s.value}},[s.error,s.loading,u,f,m,s.value])}),CA=(function(r,t){var n=YN(function(){return r.currentUser}),s=n.error,o=n.loading,u=n.setError,f=n.setValue,m=n.value;return pt.useEffect(function(){var y=f2(r,function(p){return GN(void 0,void 0,void 0,function(){var E;return QN(this,function(b){switch(b.label){case 0:return[3,4];case 1:return b.trys.push([1,3,,4]),[4,t.onUserChanged(p)];case 2:return b.sent(),[3,4];case 3:return E=b.sent(),u(E),[3,4];case 4:return f(p),[2]}})})},u);return function(){y()}},[r]),[m,o,s]});/*! *****************************************************************************
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
***************************************************************************** */var Qa=function(){return Qa=Object.assign||function(t){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},Qa.apply(this,arguments)},DA=function(r){return{loading:r==null,value:r}},XN=function(){return function(r,t){switch(t.type){case"error":return Qa(Qa({},r),{error:t.error,loading:!1,value:void 0});case"reset":return DA(t.defaultValue);case"value":return Qa(Qa({},r),{error:void 0,loading:!1,value:t.value});default:return r}}},NA=(function(r){var t=void 0,n=pt.useReducer(XN(),DA(t)),s=n[0],o=n[1],u=pt.useCallback(function(){var y=void 0;o({type:"reset",defaultValue:y})},[r]),f=pt.useCallback(function(y){o({type:"error",error:y})},[]),m=pt.useCallback(function(y){o({type:"value",value:y})},[]);return pt.useMemo(function(){return{error:s.error,loading:s.loading,reset:u,setError:f,setValue:m,value:s.value}},[s.error,s.loading,u,f,m,s.value])}),OA=function(r,t,n){var s=pt.useRef(r);return pt.useEffect(function(){t(r,s.current)||(s.current=r,n&&n())}),s},$N=function(r,t){var n=!r&&!t,s=!!r&&!!t&&nC(r,t);return n||s},ZN=function(r,t){return OA(r,$N,t)},JN=function(r,t){var n=!r&&!t,s=!!r&&!!t&&iC(r,t);return n||s},WN=function(r,t){return OA(r,JN,t)},tO=function(r,t){var n=NA(),s=n.error,o=n.loading,u=n.reset,f=n.setError,m=n.setValue,y=n.value,p=WN(r,u);return pt.useEffect(function(){if(!p.current){m(void 0);return}var E=C0(p.current,m,f);return function(){E()}},[p.current]),[y,o,s]},eO=function(r,t){var n=NA(),s=n.error,o=n.loading,u=n.reset,f=n.setError,m=n.setValue,y=n.value,p=ZN(r,u);return pt.useEffect(function(){if(!p.current){m(void 0);return}var E=C0(p.current,m,f);return function(){E()}},[p.current]),[y,o,s]};const nO={apiKey:"AIzaSyBQSuvCd5mb-lbvoaZrwGl7fXhFRZWI0ZU",authDomain:"neshaybahs-chatroom.firebaseapp.com",projectId:"neshaybahs-chatroom",storageBucket:"neshaybahs-chatroom.firebasestorage.app",messagingSenderId:"120115708605",appId:"1:120115708605:web:b2956f68690d946f5badd4"},Og=$E(nO),Qr=bD(Og),Pl=rC(Og);BN(Og);const iO="dssbbkavm",rO="chat_uploads",MA=()=>{const r=pt.useRef(null),[t,n]=pt.useState([]),[s,o]=pt.useState(0),[u,f]=pt.useState(!1),[m,y]=pt.useState(0),[p,E]=pt.useState(0),b=st=>{const rt=st.replace(".mp3","").split(" - ");return`${(rt.length>1?rt[1]:rt[0]).toLowerCase().replace(/'/g,"").replace(/[^a-z0-9\s]/g,"").replace(/\s+/g,"-").trim()}.png`};pt.useEffect(()=>{const ut=["Frank Ocean - American Wedding.mp3","Jeff Buckley - Lover You Shouldve Come Over.mp3","wifiskeletton - Nope your too late i already died.mp3"].map(rt=>{const[mt,ht]=rt.replace(".mp3","").split(" - "),Nt=b(rt);return{filename:rt,artist:mt||"Unknown Artist",songName:ht||"Unknown Song",url:`/neshaybahs-chatroom/music/${encodeURIComponent(rt)}`,albumCover:`/neshaybahs-chatroom/album-covers/${encodeURIComponent(Nt)}`}});n(ut)},[]),pt.useEffect(()=>{const st=r.current;if(!st)return;const ut=()=>y(st.currentTime),rt=()=>E(st.duration),mt=()=>q();return st.addEventListener("timeupdate",ut),st.addEventListener("durationchange",rt),st.addEventListener("ended",mt),()=>{st.removeEventListener("timeupdate",ut),st.removeEventListener("durationchange",rt),st.removeEventListener("ended",mt)}},[]),pt.useEffect(()=>{t.length>0&&r.current&&(r.current.src=t[s]?.url)},[s,t]);const C=()=>{!r.current||t.length===0||(u?r.current.pause():r.current.play().catch(console.error),f(!u))},q=()=>{t.length!==0&&(o(st=>(st+1)%t.length),f(!0))},K=()=>{t.length!==0&&(o(st=>(st-1+t.length)%t.length),f(!0))},et=()=>t[s]||{artist:"No Artist",songName:"No Song",url:"",albumCover:"https://i.scdn.co/image/ab67616d0000b27398b1c6c0d05f8841f08a9eca"},J=st=>{r.current&&p&&(r.current.currentTime=st,y(st))};return{audioRef:r,playlist:t,currentTrack:et(),isPlaying:u,currentTime:m,duration:p,togglePlayPause:C,nextTrack:q,previousTrack:K,setCurrentTrackIndex:o,seekTo:J}},sO=async(r,t)=>{try{const n=Gl(Pl,"userProfiles",r);return await EC(n,{...t,updatedAt:wm()},{merge:!0}),!0}catch(n){return console.error("Error updating user profile:",n),!1}},aO=(r,t)=>({displayName:r?.displayName||t?.displayName||"Anonymous",photoURL:r?.photoURL||t?.photoURL||null}),VA=r=>{const t=r?Gl(Pl,"userProfiles",r.uid):null,[n,s,o]=eO(t),[u,f]=pt.useState({displayName:"Anonymous",photoURL:null});pt.useEffect(()=>{if(r){const y=n?.data(),p={displayName:r.displayName,photoURL:r.photoURL},E=aO(y,p);f(E)}},[r,n]);const m=async y=>r?await sO(r.uid,y):!1;return{customProfile:n?.data()||null,displayData:u,loading:s,error:o,updateProfile:m}},xA=async(r,t)=>{try{if(r.size>10*1024*1024)throw new Error("File size exceeds 10MB limit");if(!r.type.startsWith("image/"))throw new Error("File must be an image");const n=new FormData;n.append("file",r),n.append("upload_preset",rO);const s=t.replace(/[^a-zA-Z0-9]/g,"");n.append("folder",`chat_images/${s}`);const o=Date.now(),u=r.name.split(".")[0].replace(/[^a-zA-Z0-9]/g,"_");n.append("public_id",`${o}_${u}`);const f=await fetch(`https://api.cloudinary.com/v1_1/${iO}/image/upload`,{method:"POST",body:n}),m=await f.text();if(!f.ok){console.error(`HTTP error! status: ${f.status}, response: ${m}`);try{const p=JSON.parse(m);throw new Error(p.error?.message||`HTTP ${f.status}: ${m}`)}catch{throw new Error(`HTTP ${f.status}: ${m}`)}}const y=JSON.parse(m);if(y.secure_url)return{success:!0,url:y.secure_url,publicId:y.public_id,fileName:y.original_filename};throw new Error(y.error?.message||"Upload failed - no secure_url returned")}catch(n){console.error("Error uploading image to Cloudinary:",n);const s={"Invalid upload preset":"Upload preset 'chat_uploads' not found or not configured properly in Cloudinary","Invalid cloud name":"Cloud name 'dssbbkavm' not found in Cloudinary",Unauthorized:"Upload preset is not configured for unsigned uploads"};for(const[o,u]of Object.entries(s))if(n.message.includes(o))return{success:!1,error:u};return{success:!1,error:n.message||"Failed to upload image to Cloudinary"}}};function PA({file:r,onRemove:t}){const[n,s]=pt.useState(null);return pt.useEffect(()=>{if(r){const o=new FileReader;o.onloadend=()=>s(o.result),o.readAsDataURL(r)}return()=>{n&&URL.revokeObjectURL(n)}},[r]),n?H.jsxs("div",{className:"image-preview",children:[H.jsx("img",{src:n,alt:"Preview"}),H.jsx("button",{className:"remove-preview-btn",onClick:t,type:"button",children:H.jsx("i",{className:"bi bi-x"})})]}):null}function oO(){const[r]=CA(Qr),[t,n]=pt.useState(!1);return pt.useEffect(()=>{const s=()=>{const o=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${o}px`)};return s(),window.addEventListener("resize",s),window.addEventListener("orientationchange",s),()=>{window.removeEventListener("resize",s),window.removeEventListener("orientationchange",s)}},[]),H.jsxs("div",{className:"App",children:[H.jsxs("header",{children:[H.jsxs("div",{className:"d-flex align-items-center",children:[H.jsx("img",{src:"/neshaybahs-chatroom/images/logo.png",alt:"Logo",style:{height:"40px",width:"auto",marginRight:"15px"},onError:s=>{s.target.style.display="none"}}),H.jsx("h1",{children:"NeshayBahs Chatroom"})]}),H.jsxs("div",{className:"d-flex gap-2",children:[r&&H.jsxs("button",{className:"btn btn-outline-light",onClick:()=>n(!0),children:[H.jsx("i",{className:"bi bi-gear me-2"}),"Settings"]}),H.jsx(cO,{})]})]}),H.jsx("div",{className:`chat-container container-fluid ${r?"has-user":""}`,children:r?H.jsx(dO,{}):H.jsx(uO,{})}),t&&H.jsxs(H.Fragment,{children:[H.jsx("div",{className:"settings-overlay",onClick:()=>n(!1)}),H.jsxs("div",{className:"settings-panel open",children:[H.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[H.jsx("h4",{children:"Settings"}),H.jsx("button",{className:"btn-close btn-close-white",onClick:()=>n(!1)})]}),r&&H.jsx(lO,{user:r,onClose:()=>n(!1)})]})]})]})}function lO({user:r,onClose:t}){const{customProfile:n,displayData:s,updateProfile:o}=VA(r),[u,f]=pt.useState(!1),[m,y]=pt.useState(""),[p,E]=pt.useState(""),[b,C]=pt.useState(null),[q,K]=pt.useState(!1),et=pt.useRef();pt.useEffect(()=>{u&&(y(mt=>mt||n?.displayName||""),E(mt=>mt||n?.photoURL||""))},[u]);const J=mt=>{const ht=mt.target.files[0];if(ht){if(!ht.type.startsWith("image/")){alert("Please select an image file.");return}if(ht.size>10*1024*1024){alert("Image must be under 10MB.");return}C(ht)}},st=()=>{C(null),et.current&&(et.current.value="")},ut=async()=>{K(!0);try{let mt=p;if(b){const x=await xA(b,r.uid);if(x.success)mt=x.url;else{alert("Upload failed: "+x.error),K(!1);return}}const ht={};m.trim()&&(ht.displayName=m.trim()),mt&&(ht.photoURL=mt),await o(ht)?(f(!1),C(null)):alert("Failed to update profile. Please try again.")}finally{K(!1)}},rt=async()=>{window.confirm("Reset to Google profile data?")&&(K(!0),await o({displayName:null,photoURL:null})&&(f(!1),C(null)),K(!1))};return u?H.jsx("div",{className:"profile-section",children:H.jsxs("div",{className:"profile-editor",children:[H.jsx("h5",{className:"mb-3",children:"Edit Profile"}),H.jsxs("div",{className:"mb-3",children:[H.jsx("label",{className:"form-label",children:"Display Name"}),H.jsx("input",{type:"text",className:"form-control",value:m,onChange:mt=>y(mt.target.value),placeholder:r?.displayName||"Enter display name"})]}),H.jsxs("div",{className:"mb-3",children:[H.jsx("label",{className:"form-label",children:"Profile Picture"}),H.jsx("input",{type:"url",className:"form-control mb-2",value:p,onChange:mt=>E(mt.target.value),placeholder:r?.photoURL||"Enter image URL"}),H.jsx("label",{className:"form-label",children:"Upload Profile"}),H.jsx("input",{type:"file",ref:et,accept:"image/*",onChange:J,className:"form-control"}),b&&H.jsx("div",{className:"mt-2",children:H.jsx(PA,{file:b,onRemove:st})})]}),H.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[H.jsx("button",{className:"btn btn-primary",onClick:ut,disabled:q,children:q?"Saving...":"Save"}),H.jsx("button",{className:"btn btn-secondary",onClick:()=>f(!1),disabled:q,children:"Cancel"}),n?.displayName&&H.jsx("button",{className:"btn btn-outline-warning",onClick:rt,disabled:q,children:"Reset to Google"})]})]})}):H.jsx("div",{className:"profile-section",children:H.jsxs("div",{className:"profile-display",children:[H.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[H.jsx("img",{src:s.photoURL||`https://ui-avatars.com/api/?name=${encodeURIComponent(s.displayName)}`,alt:"Profile",className:"profile-avatar"}),H.jsxs("div",{children:[H.jsx("h5",{className:"mb-0",children:s.displayName}),H.jsx("small",{children:n?.displayName?"Custom Profile":"Using Google Profile"})]})]}),H.jsxs("button",{className:"btn btn-outline-light btn-sm",onClick:()=>f(!0),children:[H.jsx("i",{className:"bi bi-pencil me-2"}),"Edit Profile"]})]})})}function uO(){const r=async()=>{const t=new Xi;await V2(Qr,t)};return H.jsxs("div",{className:"signin-container text-center mt-5",children:[H.jsxs("button",{className:"btn btn-outline-light",onClick:r,children:[H.jsx("i",{className:"bi bi-google me-2"})," Sign in with Google"]}),H.jsx("p",{className:"mt-2",children:"Made by NeshayBah w/ vibe coding"})]})}function cO(){return Qr.currentUser&&H.jsxs("button",{className:"sign-out btn btn-outline-light",onClick:()=>d2(Qr),children:[H.jsx("i",{className:"bi bi-box-arrow-right me-2"})," Sign Out"]})}function hO(){const{audioRef:r,currentTrack:t,isPlaying:n,togglePlayPause:s,nextTrack:o,previousTrack:u}=MA(),f="https://i.scdn.co/image/ab67616d0000b27398b1c6c0d05f8841f08a9eca",m=y=>{y.target.src=f};return H.jsxs("div",{className:"mobile-mini-player",children:[H.jsx("audio",{ref:r}),H.jsx("img",{src:t.albumCover,alt:"Album Cover",className:"mini-album-cover",onError:m}),H.jsxs("div",{className:"mini-track-info",children:[H.jsx("p",{className:"mini-song-name",children:t.songName}),H.jsx("p",{className:"mini-artist-name",children:t.artist})]}),H.jsxs("div",{className:"mini-controls",children:[H.jsx("button",{className:"mini-skip-back",onClick:u,children:H.jsx("i",{className:"bi bi-skip-start"})}),H.jsx("button",{className:"mini-play-pause",onClick:s,children:H.jsx("i",{className:`bi bi-${n?"pause":"play"}`})}),H.jsx("button",{className:"mini-skip-forward",onClick:o,children:H.jsx("i",{className:"bi bi-skip-end"})})]})]})}function fO(){const{audioRef:r,currentTrack:t,isPlaying:n,togglePlayPause:s,nextTrack:o,previousTrack:u}=MA(),f="https://i.scdn.co/image/ab67616d0000b27398b1c6c0d05f8841f08a9eca",m=y=>{y.target.src=f};return H.jsxs("div",{className:"media-controls desktop-player",children:[H.jsx("audio",{ref:r}),H.jsx("img",{src:t.albumCover,alt:"Album Cover",className:"album-cover",onError:m}),H.jsxs("div",{className:"media-text",children:[H.jsx("p",{className:"song-name",children:t.songName}),H.jsx("p",{className:"artist-name",children:t.artist})]}),H.jsxs("div",{className:"button-group",children:[H.jsx("button",{className:"skip-back",onClick:u,children:H.jsx("i",{className:"bi bi-skip-start"})}),H.jsx("button",{className:"play-pause",onClick:s,children:H.jsx("i",{className:`bi bi-${n?"pause":"play"}`})}),H.jsx("button",{className:"skip-forward",onClick:o,children:H.jsx("i",{className:"bi bi-skip-end"})})]})]})}function dO(){const r=pt.useRef(),t=pt.useRef(),n=eC(Pl,"messages"),[s]=CA(Qr),{displayData:o}=VA(s),u=gC(n,pC("createdAt"),yC(100)),[f,m,y]=tO(u),[p,E]=pt.useState(""),[b,C]=pt.useState(null),[q,K]=pt.useState(!1),[et,J]=pt.useState(null),[st,ut]=pt.useState(""),rt=f?.docs.map(N=>({id:N.id,...N.data()}))||[];pt.useEffect(()=>{r.current&&r.current.scrollIntoView({behavior:"smooth"})},[rt]);const mt=async N=>{if(window.confirm("Are you sure you want to delete this message?"))try{await AC(Gl(Pl,"messages",N))}catch(V){console.error("Error deleting message:",V),alert("Failed to delete message. Please try again.")}},ht=N=>{J(N.id),ut(N.text||"")},Nt=()=>{J(null),ut("")},x=async N=>{if(!N||!st.trim()){alert("Message cannot be empty");return}try{const V=Gl(Pl,"messages",N);await TC(V,{text:st.trim(),editedAt:wm()}),J(null),ut("")}catch(V){console.error("Error updating message:",V),alert("Failed to update message. Please try again.")}},S=N=>{const V=N.target.files[0];if(V){if(V.size>10*1024*1024){alert("File size too large. Please select an image under 10MB.");return}if(!V.type.startsWith("image/")){alert("Please select an image file.");return}C(V)}},R=()=>{C(null),t.current&&(t.current.value="")},M=async N=>{if(N.preventDefault(),!p.trim()&&!b)return;K(!0);const{uid:V}=Qr.currentUser;let I=null;try{if(b){const Gt=await xA(b,V);if(Gt.success)I=Gt.url;else{alert("Failed to upload image: "+Gt.error),K(!1);return}}const Ft={createdAt:wm(),uid:V,photoURL:o.photoURL||null,displayName:o.displayName||"Anonymous"};p.trim()&&(Ft.text=p.trim()),I?(Ft.imageUrl=I,Ft.messageType="image"):Ft.messageType="text",await SC(n,Ft),E(""),C(null),t.current&&(t.current.value="")}catch(Ft){console.error("Error sending message:",Ft),alert({"permission-denied":"Permission denied. Check your Firestore security rules.",unavailable:"Firestore is currently unavailable. Please try again."}[Ft.code]||`Error: ${Ft.message}`)}finally{K(!1)}};return H.jsxs(H.Fragment,{children:[H.jsx(hO,{}),H.jsx(fO,{}),H.jsx("div",{className:"chat-panel d-flex flex-column",children:H.jsxs("div",{className:"messages-container flex-grow-1",children:[H.jsxs("main",{className:"messages-list",children:[rt&&rt.map(N=>H.jsx(mO,{message:N,onDelete:mt,onStartEdit:ht,onCancelEdit:Nt,onSaveEdit:x,editingMessage:et,editText:st,setEditText:ut},N.id)),H.jsx("span",{ref:r})]}),b&&H.jsx("div",{className:"image-preview-container",children:H.jsx(PA,{file:b,onRemove:R})}),H.jsxs("form",{onSubmit:M,className:"chat-form",children:[H.jsx("input",{value:p,onChange:N=>E(N.target.value),placeholder:"Message something dude",disabled:q}),H.jsx("input",{type:"file",ref:t,onChange:S,accept:"image/*",style:{display:"none"}}),H.jsx("button",{type:"button",className:"image-upload-btn",onClick:()=>t.current?.click(),disabled:q,children:H.jsx("i",{className:"bi bi-image"})}),H.jsx("button",{type:"submit",disabled:!p.trim()&&!b||q,children:q?H.jsx("i",{className:"bi bi-hourglass-split"}):H.jsx("i",{className:"bi bi-send-fill"})})]})]})})]})}function mO({message:r,onDelete:t,onStartEdit:n,onCancelEdit:s,onSaveEdit:o,editingMessage:u,editText:f,setEditText:m}){const y=r.id||r.docId||r.key,{text:p,uid:E,photoURL:b,displayName:C,createdAt:q,imageUrl:K,messageType:et,editedAt:J}=r,st=E===Qr.currentUser.uid?"sent":"received",ut=E===Qr.currentUser.uid,rt=u===y,[mt,ht]=pt.useState(!0),[Nt,x]=pt.useState(!1),[S,R]=pt.useState(!1),[M,N]=pt.useState(null),V=pt.useRef(null);pt.useEffect(()=>{const ot=wt=>{V.current&&!V.current.contains(wt.target)&&R(!1)};return document.addEventListener("mousedown",ot),document.addEventListener("touchstart",ot),()=>{document.removeEventListener("mousedown",ot),document.removeEventListener("touchstart",ot)}},[]);const I=ot=>{if(!ut)return;const wt=setTimeout(()=>{R(!0),navigator.vibrate&&navigator.vibrate(50)},500);N(wt)},Ft=()=>{M&&(clearTimeout(M),N(null))},Gt=ot=>{if(!ot)return"";const wt=ot.toDate?ot.toDate():new Date(ot),D=new Date,Z=new Date(D.getFullYear(),D.getMonth(),D.getDate()),it=new Date(Z);it.setDate(Z.getDate()-1);const W=new Date(wt.getFullYear(),wt.getMonth(),wt.getDate());let ft;W.getTime()===Z.getTime()?ft="Today":W.getTime()===it.getTime()?ft="Yesterday":ft=wt.toLocaleDateString("en-US",{month:"numeric",day:"numeric",year:"numeric"});const It=wt.toLocaleString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0});return`${ft} ${It}`},F=()=>ht(!1),nt=()=>{ht(!1),x(!0)};return H.jsxs("div",{className:`message ${st} ${ut?"message-owner":""}`,onMouseEnter:()=>ut&&R(!0),onMouseLeave:()=>R(!1),onTouchStart:I,onTouchEnd:Ft,children:[H.jsx("img",{src:b||"https://ui-avatars.com/api/?name="+encodeURIComponent(C||"User"),alt:"avatar",className:"user-avatar"}),H.jsxs("div",{className:"message-content",children:[H.jsxs("div",{className:"message-header",children:[H.jsxs("span",{className:"message-timestamp",children:[Gt(q),J&&H.jsx("span",{className:"edited-indicator",children:" (edited)"})]}),H.jsx("strong",{children:C||"Unknown"})]}),p&&!rt&&H.jsx("p",{children:p}),rt&&H.jsxs("div",{className:"message-edit-container",children:[H.jsx("textarea",{value:f,onChange:ot=>m(ot.target.value),className:"message-edit-input",rows:Math.min(Math.max(f.split(`
`).length,1),4),autoFocus:!0}),H.jsxs("div",{className:"message-edit-actions",children:[H.jsx("button",{className:"btn btn-sm btn-primary",onClick:()=>o(y),children:"Save"}),H.jsx("button",{className:"btn btn-sm btn-secondary",onClick:s,children:"Cancel"})]})]}),K&&H.jsxs("div",{className:"message-image-container",children:[mt&&H.jsxs("div",{className:"image-loading",children:[H.jsx("i",{className:"bi bi-hourglass-split"}),H.jsx("span",{children:"Loading image..."})]}),Nt?H.jsxs("div",{className:"image-error",children:[H.jsx("i",{className:"bi bi-exclamation-triangle"}),H.jsx("span",{children:"Failed to load image"})]}):H.jsx("img",{src:K,alt:"Shared image",className:"message-image",onLoad:F,onError:nt,style:{display:mt?"none":"block"}})]}),ut&&S&&!rt&&H.jsxs("div",{className:"message-menu",ref:V,children:[p&&H.jsxs("button",{className:"message-menu-item",onClick:()=>n(r),children:[H.jsx("i",{className:"bi bi-pencil"}),"Edit"]}),H.jsxs("button",{className:"message-menu-item message-menu-delete",onClick:()=>t(y),children:[H.jsx("i",{className:"bi bi-trash"}),"Delete"]})]})]})]})}gb.createRoot(document.getElementById("root")).render(H.jsx(pt.StrictMode,{children:H.jsx(oO,{})}));
