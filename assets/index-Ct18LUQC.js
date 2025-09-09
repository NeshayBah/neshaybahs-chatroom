(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Ld={exports:{}},Rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function fb(){if(Q_)return Rl;Q_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Rl.Fragment=t,Rl.jsx=n,Rl.jsxs=n,Rl}var K_;function db(){return K_||(K_=1,Ld.exports=fb()),Ld.exports}var B=db(),zd={exports:{}},It={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function mb(){if(Y_)return It;Y_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),b=Symbol.iterator;function R(N){return N===null||typeof N!="object"?null:(N=b&&N[b]||N["@@iterator"],typeof N=="function"?N:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,et={};function J(N,Z,it){this.props=N,this.context=Z,this.refs=et,this.updater=it||q}J.prototype.isReactComponent={},J.prototype.setState=function(N,Z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Z,"setState")},J.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function at(){}at.prototype=J.prototype;function lt(N,Z,it){this.props=N,this.context=Z,this.refs=et,this.updater=it||q}var rt=lt.prototype=new at;rt.constructor=lt,Y(rt,J.prototype),rt.isPureReactComponent=!0;var mt=Array.isArray,ht={H:null,A:null,T:null,S:null,V:null},Dt=Object.prototype.hasOwnProperty;function x(N,Z,it,W,gt,Rt){return it=Rt.ref,{$$typeof:r,type:N,key:Z,ref:it!==void 0?it:null,props:Rt}}function S(N,Z){return x(N.type,Z,void 0,void 0,void 0,N.props)}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function V(N){var Z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(it){return Z[it]})}var D=/\/+/g;function M(N,Z){return typeof N=="object"&&N!==null&&N.key!=null?V(""+N.key):Z.toString(36)}function I(){}function Bt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(I,I):(N.status="pending",N.then(function(Z){N.status==="pending"&&(N.status="fulfilled",N.value=Z)},function(Z){N.status==="pending"&&(N.status="rejected",N.reason=Z)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function Ft(N,Z,it,W,gt){var Rt=typeof N;(Rt==="undefined"||Rt==="boolean")&&(N=null);var At=!1;if(N===null)At=!0;else switch(Rt){case"bigint":case"string":case"number":At=!0;break;case"object":switch(N.$$typeof){case r:case t:At=!0;break;case T:return At=N._init,Ft(At(N._payload),Z,it,W,gt)}}if(At)return gt=gt(N),At=W===""?"."+M(N,0):W,mt(gt)?(it="",At!=null&&(it=At.replace(D,"$&/")+"/"),Ft(gt,Z,it,"",function(wn){return wn})):gt!=null&&(C(gt)&&(gt=S(gt,it+(gt.key==null||N&&N.key===gt.key?"":(""+gt.key).replace(D,"$&/")+"/")+At)),Z.push(gt)),1;At=0;var ge=W===""?".":W+":";if(mt(N))for(var Zt=0;Zt<N.length;Zt++)W=N[Zt],Rt=ge+M(W,Zt),At+=Ft(W,Z,it,Rt,gt);else if(Zt=R(N),typeof Zt=="function")for(N=Zt.call(N),Zt=0;!(W=N.next()).done;)W=W.value,Rt=ge+M(W,Zt++),At+=Ft(W,Z,it,Rt,gt);else if(Rt==="object"){if(typeof N.then=="function")return Ft(Bt(N),Z,it,W,gt);throw Z=String(N),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return At}function F(N,Z,it){if(N==null)return N;var W=[],gt=0;return Ft(N,W,"","",function(Rt){return Z.call(it,Rt,gt++)}),W}function nt(N){if(N._status===-1){var Z=N._result;Z=Z(),Z.then(function(it){(N._status===0||N._status===-1)&&(N._status=1,N._result=it)},function(it){(N._status===0||N._status===-1)&&(N._status=2,N._result=it)}),N._status===-1&&(N._status=0,N._result=Z)}if(N._status===1)return N._result.default;throw N._result}var ct=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function kt(){}return It.Children={map:F,forEach:function(N,Z,it){F(N,function(){Z.apply(this,arguments)},it)},count:function(N){var Z=0;return F(N,function(){Z++}),Z},toArray:function(N){return F(N,function(Z){return Z})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},It.Component=J,It.Fragment=n,It.Profiler=o,It.PureComponent=lt,It.StrictMode=s,It.Suspense=y,It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ht,It.__COMPILER_RUNTIME={__proto__:null,c:function(N){return ht.H.useMemoCache(N)}},It.cache=function(N){return function(){return N.apply(null,arguments)}},It.cloneElement=function(N,Z,it){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var W=Y({},N.props),gt=N.key,Rt=void 0;if(Z!=null)for(At in Z.ref!==void 0&&(Rt=void 0),Z.key!==void 0&&(gt=""+Z.key),Z)!Dt.call(Z,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&Z.ref===void 0||(W[At]=Z[At]);var At=arguments.length-2;if(At===1)W.children=it;else if(1<At){for(var ge=Array(At),Zt=0;Zt<At;Zt++)ge[Zt]=arguments[Zt+2];W.children=ge}return x(N.type,gt,void 0,void 0,Rt,W)},It.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},It.createElement=function(N,Z,it){var W,gt={},Rt=null;if(Z!=null)for(W in Z.key!==void 0&&(Rt=""+Z.key),Z)Dt.call(Z,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(gt[W]=Z[W]);var At=arguments.length-2;if(At===1)gt.children=it;else if(1<At){for(var ge=Array(At),Zt=0;Zt<At;Zt++)ge[Zt]=arguments[Zt+2];gt.children=ge}if(N&&N.defaultProps)for(W in At=N.defaultProps,At)gt[W]===void 0&&(gt[W]=At[W]);return x(N,Rt,void 0,void 0,null,gt)},It.createRef=function(){return{current:null}},It.forwardRef=function(N){return{$$typeof:m,render:N}},It.isValidElement=C,It.lazy=function(N){return{$$typeof:T,_payload:{_status:-1,_result:N},_init:nt}},It.memo=function(N,Z){return{$$typeof:p,type:N,compare:Z===void 0?null:Z}},It.startTransition=function(N){var Z=ht.T,it={};ht.T=it;try{var W=N(),gt=ht.S;gt!==null&&gt(it,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(kt,ct)}catch(Rt){ct(Rt)}finally{ht.T=Z}},It.unstable_useCacheRefresh=function(){return ht.H.useCacheRefresh()},It.use=function(N){return ht.H.use(N)},It.useActionState=function(N,Z,it){return ht.H.useActionState(N,Z,it)},It.useCallback=function(N,Z){return ht.H.useCallback(N,Z)},It.useContext=function(N){return ht.H.useContext(N)},It.useDebugValue=function(){},It.useDeferredValue=function(N,Z){return ht.H.useDeferredValue(N,Z)},It.useEffect=function(N,Z,it){var W=ht.H;if(typeof it=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(N,Z)},It.useId=function(){return ht.H.useId()},It.useImperativeHandle=function(N,Z,it){return ht.H.useImperativeHandle(N,Z,it)},It.useInsertionEffect=function(N,Z){return ht.H.useInsertionEffect(N,Z)},It.useLayoutEffect=function(N,Z){return ht.H.useLayoutEffect(N,Z)},It.useMemo=function(N,Z){return ht.H.useMemo(N,Z)},It.useOptimistic=function(N,Z){return ht.H.useOptimistic(N,Z)},It.useReducer=function(N,Z,it){return ht.H.useReducer(N,Z,it)},It.useRef=function(N){return ht.H.useRef(N)},It.useState=function(N){return ht.H.useState(N)},It.useSyncExternalStore=function(N,Z,it){return ht.H.useSyncExternalStore(N,Z,it)},It.useTransition=function(){return ht.H.useTransition()},It.version="19.1.1",It}var X_;function Mm(){return X_||(X_=1,zd.exports=mb()),zd.exports}var dt=Mm(),jd={exports:{}},Il={},Bd={exports:{}},qd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function gb(){return $_||($_=1,(function(r){function t(F,nt){var ct=F.length;F.push(nt);t:for(;0<ct;){var kt=ct-1>>>1,N=F[kt];if(0<o(N,nt))F[kt]=nt,F[ct]=N,ct=kt;else break t}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var nt=F[0],ct=F.pop();if(ct!==nt){F[0]=ct;t:for(var kt=0,N=F.length,Z=N>>>1;kt<Z;){var it=2*(kt+1)-1,W=F[it],gt=it+1,Rt=F[gt];if(0>o(W,ct))gt<N&&0>o(Rt,W)?(F[kt]=Rt,F[gt]=ct,kt=gt):(F[kt]=W,F[it]=ct,kt=it);else if(gt<N&&0>o(Rt,ct))F[kt]=Rt,F[gt]=ct,kt=gt;else break t}}return nt}function o(F,nt){var ct=F.sortIndex-nt.sortIndex;return ct!==0?ct:F.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var y=[],p=[],T=1,b=null,R=3,q=!1,Y=!1,et=!1,J=!1,at=typeof setTimeout=="function"?setTimeout:null,lt=typeof clearTimeout=="function"?clearTimeout:null,rt=typeof setImmediate<"u"?setImmediate:null;function mt(F){for(var nt=n(p);nt!==null;){if(nt.callback===null)s(p);else if(nt.startTime<=F)s(p),nt.sortIndex=nt.expirationTime,t(y,nt);else break;nt=n(p)}}function ht(F){if(et=!1,mt(F),!Y)if(n(y)!==null)Y=!0,Dt||(Dt=!0,M());else{var nt=n(p);nt!==null&&Ft(ht,nt.startTime-F)}}var Dt=!1,x=-1,S=5,C=-1;function V(){return J?!0:!(r.unstable_now()-C<S)}function D(){if(J=!1,Dt){var F=r.unstable_now();C=F;var nt=!0;try{t:{Y=!1,et&&(et=!1,lt(x),x=-1),q=!0;var ct=R;try{e:{for(mt(F),b=n(y);b!==null&&!(b.expirationTime>F&&V());){var kt=b.callback;if(typeof kt=="function"){b.callback=null,R=b.priorityLevel;var N=kt(b.expirationTime<=F);if(F=r.unstable_now(),typeof N=="function"){b.callback=N,mt(F),nt=!0;break e}b===n(y)&&s(y),mt(F)}else s(y);b=n(y)}if(b!==null)nt=!0;else{var Z=n(p);Z!==null&&Ft(ht,Z.startTime-F),nt=!1}}break t}finally{b=null,R=ct,q=!1}nt=void 0}}finally{nt?M():Dt=!1}}}var M;if(typeof rt=="function")M=function(){rt(D)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Bt=I.port2;I.port1.onmessage=D,M=function(){Bt.postMessage(null)}}else M=function(){at(D,0)};function Ft(F,nt){x=at(function(){F(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_next=function(F){switch(R){case 1:case 2:case 3:var nt=3;break;default:nt=R}var ct=R;R=nt;try{return F()}finally{R=ct}},r.unstable_requestPaint=function(){J=!0},r.unstable_runWithPriority=function(F,nt){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ct=R;R=F;try{return nt()}finally{R=ct}},r.unstable_scheduleCallback=function(F,nt,ct){var kt=r.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?kt+ct:kt):ct=kt,F){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ct+N,F={id:T++,callback:nt,priorityLevel:F,startTime:ct,expirationTime:N,sortIndex:-1},ct>kt?(F.sortIndex=ct,t(p,F),n(y)===null&&F===n(p)&&(et?(lt(x),x=-1):et=!0,Ft(ht,ct-kt))):(F.sortIndex=N,t(y,F),Y||q||(Y=!0,Dt||(Dt=!0,M()))),F},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(F){var nt=R;return function(){var ct=R;R=nt;try{return F.apply(this,arguments)}finally{R=ct}}}})(qd)),qd}var Z_;function pb(){return Z_||(Z_=1,Bd.exports=gb()),Bd.exports}var Hd={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function yb(){if(J_)return Je;J_=1;var r=Mm();function t(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)p+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(y,p,T){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:y,containerInfo:p,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Je.createPortal=function(y,p){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(y,p,null,T)},Je.flushSync=function(y){var p=f.T,T=s.p;try{if(f.T=null,s.p=2,y)return y()}finally{f.T=p,s.p=T,s.d.f()}},Je.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(y,p))},Je.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Je.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var T=p.as,b=m(T,p.crossOrigin),R=typeof p.integrity=="string"?p.integrity:void 0,q=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;T==="style"?s.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:R,fetchPriority:q}):T==="script"&&s.d.X(y,{crossOrigin:b,integrity:R,fetchPriority:q,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Je.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var T=m(p.as,p.crossOrigin);s.d.M(y,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(y)},Je.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var T=p.as,b=m(T,p.crossOrigin);s.d.L(y,T,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Je.preloadModule=function(y,p){if(typeof y=="string")if(p){var T=m(p.as,p.crossOrigin);s.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(y)},Je.requestFormReset=function(y){s.d.r(y)},Je.unstable_batchedUpdates=function(y,p){return y(p)},Je.useFormState=function(y,p,T){return f.H.useFormState(y,p,T)},Je.useFormStatus=function(){return f.H.useHostTransitionStatus()},Je.version="19.1.1",Je}var W_;function _b(){if(W_)return Hd.exports;W_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Hd.exports=yb(),Hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function vb(){if(tv)return Il;tv=1;var r=pb(),t=Mm(),n=_b();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function y(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),e;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,l=d;break}if(E===l){v=!0,l=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,l=h;break}if(E===l){v=!0,l=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var T=Object.assign,b=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),at=Symbol.for("react.provider"),lt=Symbol.for("react.consumer"),rt=Symbol.for("react.context"),mt=Symbol.for("react.forward_ref"),ht=Symbol.for("react.suspense"),Dt=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function M(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function Bt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case J:return"Profiler";case et:return"StrictMode";case ht:return"Suspense";case Dt:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case rt:return(e.displayName||"Context")+".Provider";case lt:return(e._context.displayName||"Context")+".Consumer";case mt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case x:return i=e.displayName||null,i!==null?i:Bt(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return Bt(e(i))}catch{}}return null}var Ft=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},kt=[],N=-1;function Z(e){return{current:e}}function it(e){0>N||(e.current=kt[N],kt[N]=null,N--)}function W(e,i){N++,kt[N]=e.current,e.current=i}var gt=Z(null),Rt=Z(null),At=Z(null),ge=Z(null);function Zt(e,i){switch(W(At,i),W(Rt,e),W(gt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?T_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=T_(i),e=E_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(gt),W(gt,e)}function wn(){it(gt),it(Rt),it(At)}function ei(e){e.memoizedState!==null&&W(ge,e);var i=gt.current,a=E_(i,e.type);i!==a&&(W(Rt,e),W(gt,a))}function qn(e){Rt.current===e&&(it(gt),it(Rt)),ge.current===e&&(it(ge),El._currentValue=ct)}var Di=Object.prototype.hasOwnProperty,yt=r.unstable_scheduleCallback,Kt=r.unstable_cancelCallback,Pe=r.unstable_shouldYield,pe=r.unstable_requestPaint,Ce=r.unstable_now,Ws=r.unstable_getCurrentPriorityLevel,ni=r.unstable_ImmediatePriority,cr=r.unstable_UserBlockingPriority,rs=r.unstable_NormalPriority,Lh=r.unstable_LowPriority,ta=r.unstable_IdlePriority,To=r.log,au=r.unstable_setDisableYieldValue,fe=null,Yt=null;function mn(e){if(typeof To=="function"&&au(e),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(fe,e)}catch{}}var $e=Math.clz32?Math.clz32:ss,ou=Math.log,zh=Math.LN2;function ss(e){return e>>>=0,e===0?32:31-(ou(e)/zh|0)|0}var as=256,os=4194304;function Hn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ea(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=Hn(l):(v&=E,v!==0?h=Hn(v):a||(a=E&~e,a!==0&&(h=Hn(a))))):(E=l&~d,E!==0?h=Hn(E):v!==0?h=Hn(v):a||(a=l&~e,a!==0&&(h=Hn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function ls(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Eo(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ao(){var e=as;return as<<=1,(as&4194048)===0&&(as=256),e}function So(){var e=os;return os<<=1,(os&62914560)===0&&(os=4194304),e}function Oi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Mi(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bo(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,w=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var G=31-$e(a),X=1<<G;E[G]=0,w[G]=-1;var z=L[G];if(z!==null)for(L[G]=null,G=0;G<z.length;G++){var j=z[G];j!==null&&(j.lane&=-536870913)}a&=~X}l!==0&&ii(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function ii(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-$e(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function wo(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-$e(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function hr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function na(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fr(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:j_(e.type))}function lu(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var ae=Math.random().toString(36).slice(2),Ne="__reactFiber$"+ae,Ee="__reactProps$"+ae,Rn="__reactContainer$"+ae,Ro="__reactEvents$"+ae,jh="__reactListeners$"+ae,dr="__reactHandles$"+ae,uu="__reactResources$"+ae,us="__reactMarker$"+ae;function mr(e){delete e[Ne],delete e[Ee],delete e[Ro],delete e[jh],delete e[dr]}function Vi(e){var i=e[Ne];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Rn]||a[Ne]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=w_(e);e!==null;){if(a=e[Ne])return a;e=w_(e)}return i}e=a,a=e.parentNode}return null}function ri(e){if(e=e[Ne]||e[Rn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function si(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function rn(e){var i=e[uu];return i||(i=e[uu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ye(e){e[us]=!0}var Io=new Set,ia={};function Fn(e,i){xi(e,i),xi(e+"Capture",i)}function xi(e,i){for(ia[e]=i,e=0;e<i.length;e++)Io.add(i[e])}var cu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hu={},cs={};function fu(e){return Di.call(cs,e)?!0:Di.call(hu,e)?!1:cu.test(e)?cs[e]=!0:(hu[e]=!0,!1)}function gr(e,i,a){if(fu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function ai(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function qe(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var hs,du;function Pi(e){if(hs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);hs=i&&i[1]||"",du=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hs+e+du}var ra=!1;function sa(e,i){if(!e||ra)return"";ra=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(j){var z=j}Reflect.construct(e,[],X)}else{try{X.call()}catch(j){z=j}e.call(X.prototype)}}else{try{throw Error()}catch(j){z=j}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var w=v.split(`
`),L=E.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===L.length)for(l=w.length-1,h=L.length-1;1<=l&&0<=h&&w[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==L[h]){var G=`
`+w[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=h);break}}}finally{ra=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Pi(a):""}function Co(e){switch(e.tag){case 26:case 27:case 5:return Pi(e.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 15:return sa(e.type,!1);case 11:return sa(e.type.render,!1);case 1:return sa(e.type,!0);case 31:return Pi("Activity");default:return""}}function aa(e){try{var i="";do i+=Co(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function No(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Bh(e){var i=No(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function oa(e){e._valueTracker||(e._valueTracker=Bh(e))}function Do(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=No(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function fs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qh=/[\n"\\]/g;function Ae(e){return e.replace(qh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function gn(e,i,a,l,h,d,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+sn(i)):e.value!==""+sn(i)&&(e.value=""+sn(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?pr(e,v,sn(i)):a!=null?pr(e,v,sn(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+sn(E):e.removeAttribute("name")}function ds(e,i,a,l,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+sn(a):"",i=i!=null?""+sn(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function pr(e,i,a){i==="number"&&fs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ki(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+sn(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Jt(e,i,a){if(i!=null&&(i=""+sn(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+sn(a):""}function ms(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Ft(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=sn(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function In(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var gs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mu(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||gs.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Oo(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&mu(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&mu(e,d,i[d])}function Mo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function la(e){return Fh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ui=null;function Cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,zi=null;function Vo(e){var i=ri(e);if(i&&(e=i.stateNode)){var a=e[Ee]||null;t:switch(e=i.stateNode,i.type){case"input":if(gn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ae(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[Ee]||null;if(!h)throw Error(s(90));gn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&Do(l)}break t;case"textarea":Jt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&ki(e,!!a.multiple,i,!1)}}}var oi=!1;function gu(e,i,a){if(oi)return e(i,a);oi=!0;try{var l=e(i);return l}finally{if(oi=!1,(Li!==null||zi!==null)&&(lc(),Li&&(i=Li,e=zi,zi=Li=null,Vo(i),e)))for(i=0;i<e.length;i++)Vo(e[i])}}function ps(e,i){var a=e.stateNode;if(a===null)return null;var l=a[Ee]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nn=!1;if(Gn)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){Nn=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{Nn=!1}var li=null,yr=null,ji=null;function xo(){if(ji)return ji;var e,i=yr,a=i.length,l,h="value"in li?li.value:li.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return ji=h.slice(e,1<l?1-l:void 0)}function ui(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function Po(){return!1}function ke(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ci:Po,this.isPropagationStopped=Po,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),i}var Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ua=ke(Gt),_s=T({},Gt,{view:0,detail:0}),pu=ke(_s),ca,ha,hi,vs=T({},_s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:As,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hi&&(hi&&e.type==="mousemove"?(ca=e.screenX-hi.screenX,ha=e.screenY-hi.screenY):ha=ca=0,hi=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:ha}}),Dn=ke(vs),yu=T({},vs,{dataTransfer:0}),Gh=ke(yu),Ts=T({},_s,{relatedTarget:0}),fa=ke(Ts),ko=T({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0}),da=ke(ko),_u=T({},Gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ma=ke(_u),Qh=T({},Gt,{data:0}),Uo=ke(Qh),Es={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lo(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Tu[e])?!!i[e]:!1}function As(){return Lo}var Eu=T({},_s,{key:function(e){if(e.key){var i=Es[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:As,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ga=ke(Eu),Au=T({},vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zo=ke(Au),Bi=T({},_s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:As}),Su=ke(Bi),bu=T({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),wu=ke(bu),Ru=T({},vs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pa=ke(Ru),an=T({},Gt,{newState:0,oldState:0}),Iu=ke(an),Cu=[9,13,27,32],fi=Gn&&"CompositionEvent"in window,c=null;Gn&&"documentMode"in document&&(c=document.documentMode);var g=Gn&&"TextEvent"in window&&!c,_=Gn&&(!fi||c&&8<c&&11>=c),A=" ",k=!1;function H(e,i){switch(e){case"keyup":return Cu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function De(e,i){switch(e){case"compositionend":return tt(i);case"keypress":return i.which!==32?null:(k=!0,A);case"textInput":return e=i.data,e===A&&k?null:e;default:return null}}function Lt(e,i){if(Ut)return e==="compositionend"||!fi&&H(e,i)?(e=xo(),ji=yr=li=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Ue={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oe(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ue[e.type]:i==="textarea"}function qi(e,i,a,l){Li?zi?zi.push(l):zi=[l]:Li=l,i=mc(i,"onChange"),0<i.length&&(a=new ua("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var He=null,di=null;function jo(e){g_(e,0)}function Nu(e){var i=si(e);if(Do(i))return e}function kg(e,i){if(e==="change")return i}var Ug=!1;if(Gn){var Kh;if(Gn){var Yh="oninput"in document;if(!Yh){var Lg=document.createElement("div");Lg.setAttribute("oninput","return;"),Yh=typeof Lg.oninput=="function"}Kh=Yh}else Kh=!1;Ug=Kh&&(!document.documentMode||9<document.documentMode)}function zg(){He&&(He.detachEvent("onpropertychange",jg),di=He=null)}function jg(e){if(e.propertyName==="value"&&Nu(di)){var i=[];qi(i,di,e,Cn(e)),gu(jo,i)}}function qA(e,i,a){e==="focusin"?(zg(),He=i,di=a,He.attachEvent("onpropertychange",jg)):e==="focusout"&&zg()}function HA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nu(di)}function FA(e,i){if(e==="click")return Nu(i)}function GA(e,i){if(e==="input"||e==="change")return Nu(i)}function QA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var pn=typeof Object.is=="function"?Object.is:QA;function Bo(e,i){if(pn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Di.call(i,h)||!pn(e[h],i[h]))return!1}return!0}function Bg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qg(e,i){var a=Bg(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bg(a)}}function Hg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Hg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Fg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=fs(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=fs(e.document)}return i}function Xh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var KA=Gn&&"documentMode"in document&&11>=document.documentMode,ya=null,$h=null,qo=null,Zh=!1;function Gg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zh||ya==null||ya!==fs(l)||(l=ya,"selectionStart"in l&&Xh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),qo&&Bo(qo,l)||(qo=l,l=mc($h,"onSelect"),0<l.length&&(i=new ua("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=ya)))}function Ss(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var _a={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionrun:Ss("Transition","TransitionRun"),transitionstart:Ss("Transition","TransitionStart"),transitioncancel:Ss("Transition","TransitionCancel"),transitionend:Ss("Transition","TransitionEnd")},Jh={},Qg={};Gn&&(Qg=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function bs(e){if(Jh[e])return Jh[e];if(!_a[e])return e;var i=_a[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Qg)return Jh[e]=i[a];return e}var Kg=bs("animationend"),Yg=bs("animationiteration"),Xg=bs("animationstart"),YA=bs("transitionrun"),XA=bs("transitionstart"),$A=bs("transitioncancel"),$g=bs("transitionend"),Zg=new Map,Wh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wh.push("scrollEnd");function Qn(e,i){Zg.set(e,i),Fn(i,[e])}var Jg=new WeakMap;function On(e,i){if(typeof e=="object"&&e!==null){var a=Jg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:aa(i)},Jg.set(e,i),i)}return{value:e,source:i,stack:aa(i)}}var Mn=[],va=0,tf=0;function Du(){for(var e=va,i=tf=va=0;i<e;){var a=Mn[i];Mn[i++]=null;var l=Mn[i];Mn[i++]=null;var h=Mn[i];Mn[i++]=null;var d=Mn[i];if(Mn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Wg(a,h,d)}}function Ou(e,i,a,l){Mn[va++]=e,Mn[va++]=i,Mn[va++]=a,Mn[va++]=l,tf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ef(e,i,a,l){return Ou(e,i,a,l),Mu(e)}function Ta(e,i){return Ou(e,null,null,i),Mu(e)}function Wg(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-$e(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Mu(e){if(50<dl)throw dl=0,ld=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ea={};function ZA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(e,i,a,l){return new ZA(e,i,a,l)}function nf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,i){var a=e.alternate;return a===null?(a=yn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function tp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Vu(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")nf(e)&&(v=1);else if(typeof e=="string")v=WS(e,a,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=yn(31,a,i,h),e.elementType=C,e.lanes=d,e;case Y:return ws(a.children,h,d,i);case et:v=8,h|=24;break;case J:return e=yn(12,a,i,h|2),e.elementType=J,e.lanes=d,e;case ht:return e=yn(13,a,i,h),e.elementType=ht,e.lanes=d,e;case Dt:return e=yn(19,a,i,h),e.elementType=Dt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case at:case rt:v=10;break t;case lt:v=9;break t;case mt:v=11;break t;case x:v=14;break t;case S:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=yn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function ws(e,i,a,l){return e=yn(7,e,l,i),e.lanes=a,e}function rf(e,i,a){return e=yn(6,e,null,i),e.lanes=a,e}function sf(e,i,a){return i=yn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Aa=[],Sa=0,xu=null,Pu=0,Vn=[],xn=0,Rs=null,Fi=1,Gi="";function Is(e,i){Aa[Sa++]=Pu,Aa[Sa++]=xu,xu=e,Pu=i}function ep(e,i,a){Vn[xn++]=Fi,Vn[xn++]=Gi,Vn[xn++]=Rs,Rs=e;var l=Fi;e=Gi;var h=32-$e(l)-1;l&=~(1<<h),a+=1;var d=32-$e(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Fi=1<<32-$e(i)+h|a<<h|l,Gi=d+e}else Fi=1<<d|a<<h|l,Gi=e}function af(e){e.return!==null&&(Is(e,1),ep(e,1,0))}function of(e){for(;e===xu;)xu=Aa[--Sa],Aa[Sa]=null,Pu=Aa[--Sa],Aa[Sa]=null;for(;e===Rs;)Rs=Vn[--xn],Vn[xn]=null,Gi=Vn[--xn],Vn[xn]=null,Fi=Vn[--xn],Vn[xn]=null}var on=null,de=null,Ht=!1,Cs=null,mi=!1,lf=Error(s(519));function Ns(e){var i=Error(s(418,""));throw Go(On(i,e)),lf}function np(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[Ne]=e,i[Ee]=l,a){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(a=0;a<gl.length;a++)Mt(gl[a],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),ds(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),oa(i);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),ms(i,l.value,l.defaultValue,l.children),oa(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||v_(i.textContent,a)?(l.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),l.onScroll!=null&&Mt("scroll",i),l.onScrollEnd!=null&&Mt("scrollend",i),l.onClick!=null&&(i.onclick=gc),i=!0):i=!1,i||Ns(e)}function ip(e){for(on=e.return;on;)switch(on.tag){case 5:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:on=on.return}}function Ho(e){if(e!==on)return!1;if(!Ht)return ip(e),Ht=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bd(e.type,e.memoizedProps)),a=!a),a&&de&&Ns(e),ip(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){de=Yn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}de=null}}else i===27?(i=de,Vr(e.type)?(e=Cd,Cd=null,de=e):de=i):de=on?Yn(e.stateNode.nextSibling):null;return!0}function Fo(){de=on=null,Ht=!1}function rp(){var e=Cs;return e!==null&&(cn===null?cn=e:cn.push.apply(cn,e),Cs=null),e}function Go(e){Cs===null?Cs=[e]:Cs.push(e)}var uf=Z(null),Ds=null,Qi=null;function _r(e,i,a){W(uf,i._currentValue),i._currentValue=a}function Ki(e){e._currentValue=uf.current,it(uf)}function cf(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function hf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var w=0;w<i.length;w++)if(E.context===i[w]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),cf(d.return,a,e),l||(v=null);break t}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),cf(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Qo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;pn(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===ge.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(El):e=[El])}h=h.return}e!==null&&hf(i,e,a,l),i.flags|=262144}function ku(e){for(e=e.firstContext;e!==null;){if(!pn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Os(e){Ds=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return sp(Ds,e)}function Uu(e,i){return Ds===null&&Os(e),sp(e,i)}function sp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Qi===null){if(e===null)throw Error(s(308));Qi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Qi=Qi.next=i;return a}var JA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},WA=r.unstable_scheduleCallback,tS=r.unstable_NormalPriority,Me={$$typeof:rt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ff(){return{controller:new JA,data:new Map,refCount:0}}function Ko(e){e.refCount--,e.refCount===0&&WA(tS,function(){e.controller.abort()})}var Yo=null,df=0,ba=0,wa=null;function eS(e,i){if(Yo===null){var a=Yo=[];df=0,ba=gd(),wa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return df++,i.then(ap,ap),i}function ap(){if(--df===0&&Yo!==null){wa!==null&&(wa.status="fulfilled");var e=Yo;Yo=null,ba=0,wa=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function nS(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var op=F.S;F.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&eS(e,i),op!==null&&op(e,i)};var Ms=Z(null);function mf(){var e=Ms.current;return e!==null?e:ie.pooledCache}function Lu(e,i){i===null?W(Ms,Ms.current):W(Ms,i.pool)}function lp(){var e=mf();return e===null?null:{parent:Me._currentValue,pool:e}}var Xo=Error(s(460)),up=Error(s(474)),zu=Error(s(542)),gf={then:function(){}};function cp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ju(){}function hp(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(ju,ju),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,dp(e),e;default:if(typeof i.status=="string")i.then(ju,ju);else{if(e=ie,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,dp(e),e}throw $o=i,Xo}}var $o=null;function fp(){if($o===null)throw Error(s(459));var e=$o;return $o=null,e}function dp(e){if(e===Xo||e===zu)throw Error(s(483))}var vr=!1;function pf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Tr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Er(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Xt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Mu(e),Wg(e,null,a),i}return Ou(e,l,i,a),Mu(e)}function Zo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,wo(e,a)}}function _f(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var vf=!1;function Jo(){if(vf){var e=wa;if(e!==null)throw e}}function Wo(e,i,a,l){vf=!1;var h=e.updateQueue;vr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var w=E,L=w.next;w.next=null,v===null?d=L:v.next=L,v=w;var G=e.alternate;G!==null&&(G=G.updateQueue,E=G.lastBaseUpdate,E!==v&&(E===null?G.firstBaseUpdate=L:E.next=L,G.lastBaseUpdate=w))}if(d!==null){var X=h.baseState;v=0,G=L=w=null,E=d;do{var z=E.lane&-536870913,j=z!==E.lane;if(j?(zt&z)===z:(l&z)===z){z!==0&&z===ba&&(vf=!0),G!==null&&(G=G.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Et=e,_t=E;z=i;var ee=a;switch(_t.tag){case 1:if(Et=_t.payload,typeof Et=="function"){X=Et.call(ee,X,z);break t}X=Et;break t;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=_t.payload,z=typeof Et=="function"?Et.call(ee,X,z):Et,z==null)break t;X=T({},X,z);break t;case 2:vr=!0}}z=E.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=h.callbacks,j===null?h.callbacks=[z]:j.push(z))}else j={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},G===null?(L=G=j,w=X):G=G.next=j,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;j=E,E=j.next,j.next=null,h.lastBaseUpdate=j,h.shared.pending=null}}while(!0);G===null&&(w=X),h.baseState=w,h.firstBaseUpdate=L,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),Nr|=v,e.lanes=v,e.memoizedState=X}}function mp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function gp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mp(a[e],i)}var Ra=Z(null),Bu=Z(0);function pp(e,i){e=tr,W(Bu,e),W(Ra,i),tr=e|i.baseLanes}function Tf(){W(Bu,tr),W(Ra,Ra.current)}function Ef(){tr=Bu.current,it(Ra),it(Bu)}var Ar=0,Ct=null,Wt=null,Se=null,qu=!1,Ia=!1,Vs=!1,Hu=0,tl=0,Ca=null,iS=0;function _e(){throw Error(s(321))}function Af(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!pn(e[a],i[a]))return!1;return!0}function Sf(e,i,a,l,h,d){return Ar=d,Ct=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?Wp:ty,Vs=!1,d=a(l,h),Vs=!1,Ia&&(d=_p(i,a,l,h)),yp(e),d}function yp(e){F.H=Xu;var i=Wt!==null&&Wt.next!==null;if(Ar=0,Se=Wt=Ct=null,qu=!1,tl=0,Ca=null,i)throw Error(s(300));e===null||Le||(e=e.dependencies,e!==null&&ku(e)&&(Le=!0))}function _p(e,i,a,l){Ct=e;var h=0;do{if(Ia&&(Ca=null),tl=0,Ia=!1,25<=h)throw Error(s(301));if(h+=1,Se=Wt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=cS,d=i(a,l)}while(Ia);return d}function rS(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?el(i):i,e=e.useState()[0],(Wt!==null?Wt.memoizedState:null)!==e&&(Ct.flags|=1024),i}function bf(){var e=Hu!==0;return Hu=0,e}function wf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Rf(e){if(qu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}qu=!1}Ar=0,Se=Wt=Ct=null,Ia=!1,tl=Hu=0,Ca=null}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?Ct.memoizedState=Se=e:Se=Se.next=e,Se}function be(){if(Wt===null){var e=Ct.alternate;e=e!==null?e.memoizedState:null}else e=Wt.next;var i=Se===null?Ct.memoizedState:Se.next;if(i!==null)Se=i,Wt=e;else{if(e===null)throw Ct.alternate===null?Error(s(467)):Error(s(310));Wt=e,e={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Se===null?Ct.memoizedState=Se=e:Se=Se.next=e}return Se}function If(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function el(e){var i=tl;return tl+=1,Ca===null&&(Ca=[]),e=hp(Ca,e,i),i=Ct,(Se===null?i.memoizedState:Se.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Wp:ty),e}function Fu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return el(e);if(e.$$typeof===rt)return Ze(e)}throw Error(s(438,String(e)))}function Cf(e){var i=null,a=Ct.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ct.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=If(),Ct.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=V;return i.index++,a}function Yi(e,i){return typeof i=="function"?i(e):i}function Gu(e){var i=be();return Nf(i,Wt,e)}function Nf(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=v=null,w=null,L=i,G=!1;do{var X=L.lane&-536870913;if(X!==L.lane?(zt&X)===X:(Ar&X)===X){var z=L.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),X===ba&&(G=!0);else if((Ar&z)===z){L=L.next,z===ba&&(G=!0);continue}else X={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(E=w=X,v=d):w=w.next=X,Ct.lanes|=z,Nr|=z;X=L.action,Vs&&a(d,X),d=L.hasEagerState?L.eagerState:a(d,X)}else z={lane:X,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(E=w=z,v=d):w=w.next=z,Ct.lanes|=X,Nr|=X;L=L.next}while(L!==null&&L!==i);if(w===null?v=d:w.next=E,!pn(d,e.memoizedState)&&(Le=!0,G&&(a=wa,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Df(e){var i=be(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);pn(d,i.memoizedState)||(Le=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function vp(e,i,a){var l=Ct,h=be(),d=Ht;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!pn((Wt||h).memoizedState,a);v&&(h.memoizedState=a,Le=!0),h=h.queue;var E=Ap.bind(null,l,h,e);if(nl(2048,8,E,[e]),h.getSnapshot!==i||v||Se!==null&&Se.memoizedState.tag&1){if(l.flags|=2048,Na(9,Qu(),Ep.bind(null,l,h,a,i),null),ie===null)throw Error(s(349));d||(Ar&124)!==0||Tp(l,i,a)}return a}function Tp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Ct.updateQueue,i===null?(i=If(),Ct.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Ep(e,i,a,l){i.value=a,i.getSnapshot=l,Sp(i)&&bp(e)}function Ap(e,i,a){return a(function(){Sp(i)&&bp(e)})}function Sp(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!pn(e,a)}catch{return!0}}function bp(e){var i=Ta(e,2);i!==null&&An(i,e,2)}function Of(e){var i=ln();if(typeof e=="function"){var a=e;if(e=a(),Vs){mn(!0);try{a()}finally{mn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},i}function wp(e,i,a,l){return e.baseState=a,Nf(e,Wt,typeof l=="function"?l:Yi)}function sS(e,i,a,l,h){if(Yu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};F.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Rp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Rp(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=F.T,v={};F.T=v;try{var E=a(h,l),w=F.S;w!==null&&w(v,E),Ip(e,i,E)}catch(L){Mf(e,i,L)}finally{F.T=d}}else try{d=a(h,l),Ip(e,i,d)}catch(L){Mf(e,i,L)}}function Ip(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Cp(e,i,l)},function(l){return Mf(e,i,l)}):Cp(e,i,a)}function Cp(e,i,a){i.status="fulfilled",i.value=a,Np(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Rp(e,a)))}function Mf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Np(i),i=i.next;while(i!==l)}e.action=null}function Np(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Dp(e,i){return i}function Op(e,i){if(Ht){var a=ie.formState;if(a!==null){t:{var l=Ct;if(Ht){if(de){e:{for(var h=de,d=mi;h.nodeType!==8;){if(!d){h=null;break e}if(h=Yn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){de=Yn(h.nextSibling),l=h.data==="F!";break t}}Ns(l)}l=!1}l&&(i=a[0])}}return a=ln(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dp,lastRenderedState:i},a.queue=l,a=$p.bind(null,Ct,l),l.dispatch=a,l=Of(!1),d=Uf.bind(null,Ct,!1,l.queue),l=ln(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=sS.bind(null,Ct,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function Mp(e){var i=be();return Vp(i,Wt,e)}function Vp(e,i,a){if(i=Nf(e,i,Dp)[0],e=Gu(Yi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=el(i)}catch(v){throw v===Xo?zu:v}else l=i;i=be();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Ct.flags|=2048,Na(9,Qu(),aS.bind(null,h,a),null)),[l,d,e]}function aS(e,i){e.action=i}function xp(e){var i=be(),a=Wt;if(a!==null)return Vp(i,a,e);be(),i=i.memoizedState,a=be();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Na(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Ct.updateQueue,i===null&&(i=If(),Ct.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Qu(){return{destroy:void 0,resource:void 0}}function Pp(){return be().memoizedState}function Ku(e,i,a,l){var h=ln();l=l===void 0?null:l,Ct.flags|=e,h.memoizedState=Na(1|i,Qu(),a,l)}function nl(e,i,a,l){var h=be();l=l===void 0?null:l;var d=h.memoizedState.inst;Wt!==null&&l!==null&&Af(l,Wt.memoizedState.deps)?h.memoizedState=Na(i,d,a,l):(Ct.flags|=e,h.memoizedState=Na(1|i,d,a,l))}function kp(e,i){Ku(8390656,8,e,i)}function Up(e,i){nl(2048,8,e,i)}function Lp(e,i){return nl(4,2,e,i)}function zp(e,i){return nl(4,4,e,i)}function jp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Bp(e,i,a){a=a!=null?a.concat([e]):null,nl(4,4,jp.bind(null,i,e),a)}function Vf(){}function qp(e,i){var a=be();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Af(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Hp(e,i){var a=be();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Af(i,l[1]))return l[0];if(l=e(),Vs){mn(!0);try{e()}finally{mn(!1)}}return a.memoizedState=[l,i],l}function xf(e,i,a){return a===void 0||(Ar&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Qy(),Ct.lanes|=e,Nr|=e,a)}function Fp(e,i,a,l){return pn(a,i)?a:Ra.current!==null?(e=xf(e,a,l),pn(e,i)||(Le=!0),e):(Ar&42)===0?(Le=!0,e.memoizedState=a):(e=Qy(),Ct.lanes|=e,Nr|=e,i)}function Gp(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=F.T,E={};F.T=E,Uf(e,!1,i,a);try{var w=h(),L=F.S;if(L!==null&&L(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var G=nS(w,l);il(e,i,G,En(e))}else il(e,i,l,En(e))}catch(X){il(e,i,{then:function(){},status:"rejected",reason:X},En())}finally{nt.p=d,F.T=v}}function oS(){}function Pf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=Qp(e).queue;Gp(e,h,i,ct,a===null?oS:function(){return Kp(e),a(l)})}function Qp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:ct},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Kp(e){var i=Qp(e).next.queue;il(e,i,{},En())}function kf(){return Ze(El)}function Yp(){return be().memoizedState}function Xp(){return be().memoizedState}function lS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=En();e=Tr(a);var l=Er(i,e,a);l!==null&&(An(l,i,a),Zo(l,i,a)),i={cache:ff()},e.payload=i;return}i=i.return}}function uS(e,i,a){var l=En();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Yu(e)?Zp(i,a):(a=ef(e,i,a,l),a!==null&&(An(a,e,l),Jp(a,i,l)))}function $p(e,i,a){var l=En();il(e,i,a,l)}function il(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yu(e))Zp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,pn(E,v))return Ou(e,i,h,0),ie===null&&Du(),!1}catch{}finally{}if(a=ef(e,i,h,l),a!==null)return An(a,e,l),Jp(a,i,l),!0}return!1}function Uf(e,i,a,l){if(l={lane:2,revertLane:gd(),action:l,hasEagerState:!1,eagerState:null,next:null},Yu(e)){if(i)throw Error(s(479))}else i=ef(e,a,l,2),i!==null&&An(i,e,2)}function Yu(e){var i=e.alternate;return e===Ct||i!==null&&i===Ct}function Zp(e,i){Ia=qu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Jp(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,wo(e,a)}}var Xu={readContext:Ze,use:Fu,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useLayoutEffect:_e,useInsertionEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useSyncExternalStore:_e,useId:_e,useHostTransitionStatus:_e,useFormState:_e,useActionState:_e,useOptimistic:_e,useMemoCache:_e,useCacheRefresh:_e},Wp={readContext:Ze,use:Fu,useCallback:function(e,i){return ln().memoizedState=[e,i===void 0?null:i],e},useContext:Ze,useEffect:kp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Ku(4194308,4,jp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Ku(4194308,4,e,i)},useInsertionEffect:function(e,i){Ku(4,2,e,i)},useMemo:function(e,i){var a=ln();i=i===void 0?null:i;var l=e();if(Vs){mn(!0);try{e()}finally{mn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=ln();if(a!==void 0){var h=a(i);if(Vs){mn(!0);try{a(i)}finally{mn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=uS.bind(null,Ct,e),[l.memoizedState,e]},useRef:function(e){var i=ln();return e={current:e},i.memoizedState=e},useState:function(e){e=Of(e);var i=e.queue,a=$p.bind(null,Ct,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Vf,useDeferredValue:function(e,i){var a=ln();return xf(a,e,i)},useTransition:function(){var e=Of(!1);return e=Gp.bind(null,Ct,e.queue,!0,!1),ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Ct,h=ln();if(Ht){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),ie===null)throw Error(s(349));(zt&124)!==0||Tp(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,kp(Ap.bind(null,l,d,e),[e]),l.flags|=2048,Na(9,Qu(),Ep.bind(null,l,d,a,i),null),a},useId:function(){var e=ln(),i=ie.identifierPrefix;if(Ht){var a=Gi,l=Fi;a=(l&~(1<<32-$e(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Hu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=iS++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:kf,useFormState:Op,useActionState:Op,useOptimistic:function(e){var i=ln();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Uf.bind(null,Ct,!0,a),a.dispatch=i,[e,i]},useMemoCache:Cf,useCacheRefresh:function(){return ln().memoizedState=lS.bind(null,Ct)}},ty={readContext:Ze,use:Fu,useCallback:qp,useContext:Ze,useEffect:Up,useImperativeHandle:Bp,useInsertionEffect:Lp,useLayoutEffect:zp,useMemo:Hp,useReducer:Gu,useRef:Pp,useState:function(){return Gu(Yi)},useDebugValue:Vf,useDeferredValue:function(e,i){var a=be();return Fp(a,Wt.memoizedState,e,i)},useTransition:function(){var e=Gu(Yi)[0],i=be().memoizedState;return[typeof e=="boolean"?e:el(e),i]},useSyncExternalStore:vp,useId:Yp,useHostTransitionStatus:kf,useFormState:Mp,useActionState:Mp,useOptimistic:function(e,i){var a=be();return wp(a,Wt,e,i)},useMemoCache:Cf,useCacheRefresh:Xp},cS={readContext:Ze,use:Fu,useCallback:qp,useContext:Ze,useEffect:Up,useImperativeHandle:Bp,useInsertionEffect:Lp,useLayoutEffect:zp,useMemo:Hp,useReducer:Df,useRef:Pp,useState:function(){return Df(Yi)},useDebugValue:Vf,useDeferredValue:function(e,i){var a=be();return Wt===null?xf(a,e,i):Fp(a,Wt.memoizedState,e,i)},useTransition:function(){var e=Df(Yi)[0],i=be().memoizedState;return[typeof e=="boolean"?e:el(e),i]},useSyncExternalStore:vp,useId:Yp,useHostTransitionStatus:kf,useFormState:xp,useActionState:xp,useOptimistic:function(e,i){var a=be();return Wt!==null?wp(a,Wt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:Xp},Da=null,rl=0;function $u(e){var i=rl;return rl+=1,Da===null&&(Da=[]),hp(Da,e,i)}function sl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Zu(e,i){throw i.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function ey(e){var i=e._init;return i(e._payload)}function ny(e){function i(P,O){if(e){var U=P.deletions;U===null?(P.deletions=[O],P.flags|=16):U.push(O)}}function a(P,O){if(!e)return null;for(;O!==null;)i(P,O),O=O.sibling;return null}function l(P){for(var O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function h(P,O){return P=Hi(P,O),P.index=0,P.sibling=null,P}function d(P,O,U){return P.index=U,e?(U=P.alternate,U!==null?(U=U.index,U<O?(P.flags|=67108866,O):U):(P.flags|=67108866,O)):(P.flags|=1048576,O)}function v(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function E(P,O,U,Q){return O===null||O.tag!==6?(O=rf(U,P.mode,Q),O.return=P,O):(O=h(O,U),O.return=P,O)}function w(P,O,U,Q){var ut=U.type;return ut===Y?G(P,O,U.props.children,Q,U.key):O!==null&&(O.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===S&&ey(ut)===O.type)?(O=h(O,U.props),sl(O,U),O.return=P,O):(O=Vu(U.type,U.key,U.props,null,P.mode,Q),sl(O,U),O.return=P,O)}function L(P,O,U,Q){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=sf(U,P.mode,Q),O.return=P,O):(O=h(O,U.children||[]),O.return=P,O)}function G(P,O,U,Q,ut){return O===null||O.tag!==7?(O=ws(U,P.mode,Q,ut),O.return=P,O):(O=h(O,U),O.return=P,O)}function X(P,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=rf(""+O,P.mode,U),O.return=P,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case R:return U=Vu(O.type,O.key,O.props,null,P.mode,U),sl(U,O),U.return=P,U;case q:return O=sf(O,P.mode,U),O.return=P,O;case S:var Q=O._init;return O=Q(O._payload),X(P,O,U)}if(Ft(O)||M(O))return O=ws(O,P.mode,U,null),O.return=P,O;if(typeof O.then=="function")return X(P,$u(O),U);if(O.$$typeof===rt)return X(P,Uu(P,O),U);Zu(P,O)}return null}function z(P,O,U,Q){var ut=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ut!==null?null:E(P,O,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case R:return U.key===ut?w(P,O,U,Q):null;case q:return U.key===ut?L(P,O,U,Q):null;case S:return ut=U._init,U=ut(U._payload),z(P,O,U,Q)}if(Ft(U)||M(U))return ut!==null?null:G(P,O,U,Q,null);if(typeof U.then=="function")return z(P,O,$u(U),Q);if(U.$$typeof===rt)return z(P,O,Uu(P,U),Q);Zu(P,U)}return null}function j(P,O,U,Q,ut){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return P=P.get(U)||null,E(O,P,""+Q,ut);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case R:return P=P.get(Q.key===null?U:Q.key)||null,w(O,P,Q,ut);case q:return P=P.get(Q.key===null?U:Q.key)||null,L(O,P,Q,ut);case S:var Nt=Q._init;return Q=Nt(Q._payload),j(P,O,U,Q,ut)}if(Ft(Q)||M(Q))return P=P.get(U)||null,G(O,P,Q,ut,null);if(typeof Q.then=="function")return j(P,O,U,$u(Q),ut);if(Q.$$typeof===rt)return j(P,O,U,Uu(O,Q),ut);Zu(O,Q)}return null}function Et(P,O,U,Q){for(var ut=null,Nt=null,ft=O,vt=O=0,je=null;ft!==null&&vt<U.length;vt++){ft.index>vt?(je=ft,ft=null):je=ft.sibling;var qt=z(P,ft,U[vt],Q);if(qt===null){ft===null&&(ft=je);break}e&&ft&&qt.alternate===null&&i(P,ft),O=d(qt,O,vt),Nt===null?ut=qt:Nt.sibling=qt,Nt=qt,ft=je}if(vt===U.length)return a(P,ft),Ht&&Is(P,vt),ut;if(ft===null){for(;vt<U.length;vt++)ft=X(P,U[vt],Q),ft!==null&&(O=d(ft,O,vt),Nt===null?ut=ft:Nt.sibling=ft,Nt=ft);return Ht&&Is(P,vt),ut}for(ft=l(ft);vt<U.length;vt++)je=j(ft,P,vt,U[vt],Q),je!==null&&(e&&je.alternate!==null&&ft.delete(je.key===null?vt:je.key),O=d(je,O,vt),Nt===null?ut=je:Nt.sibling=je,Nt=je);return e&&ft.forEach(function(Lr){return i(P,Lr)}),Ht&&Is(P,vt),ut}function _t(P,O,U,Q){if(U==null)throw Error(s(151));for(var ut=null,Nt=null,ft=O,vt=O=0,je=null,qt=U.next();ft!==null&&!qt.done;vt++,qt=U.next()){ft.index>vt?(je=ft,ft=null):je=ft.sibling;var Lr=z(P,ft,qt.value,Q);if(Lr===null){ft===null&&(ft=je);break}e&&ft&&Lr.alternate===null&&i(P,ft),O=d(Lr,O,vt),Nt===null?ut=Lr:Nt.sibling=Lr,Nt=Lr,ft=je}if(qt.done)return a(P,ft),Ht&&Is(P,vt),ut;if(ft===null){for(;!qt.done;vt++,qt=U.next())qt=X(P,qt.value,Q),qt!==null&&(O=d(qt,O,vt),Nt===null?ut=qt:Nt.sibling=qt,Nt=qt);return Ht&&Is(P,vt),ut}for(ft=l(ft);!qt.done;vt++,qt=U.next())qt=j(ft,P,vt,qt.value,Q),qt!==null&&(e&&qt.alternate!==null&&ft.delete(qt.key===null?vt:qt.key),O=d(qt,O,vt),Nt===null?ut=qt:Nt.sibling=qt,Nt=qt);return e&&ft.forEach(function(hb){return i(P,hb)}),Ht&&Is(P,vt),ut}function ee(P,O,U,Q){if(typeof U=="object"&&U!==null&&U.type===Y&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case R:t:{for(var ut=U.key;O!==null;){if(O.key===ut){if(ut=U.type,ut===Y){if(O.tag===7){a(P,O.sibling),Q=h(O,U.props.children),Q.return=P,P=Q;break t}}else if(O.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===S&&ey(ut)===O.type){a(P,O.sibling),Q=h(O,U.props),sl(Q,U),Q.return=P,P=Q;break t}a(P,O);break}else i(P,O);O=O.sibling}U.type===Y?(Q=ws(U.props.children,P.mode,Q,U.key),Q.return=P,P=Q):(Q=Vu(U.type,U.key,U.props,null,P.mode,Q),sl(Q,U),Q.return=P,P=Q)}return v(P);case q:t:{for(ut=U.key;O!==null;){if(O.key===ut)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){a(P,O.sibling),Q=h(O,U.children||[]),Q.return=P,P=Q;break t}else{a(P,O);break}else i(P,O);O=O.sibling}Q=sf(U,P.mode,Q),Q.return=P,P=Q}return v(P);case S:return ut=U._init,U=ut(U._payload),ee(P,O,U,Q)}if(Ft(U))return Et(P,O,U,Q);if(M(U)){if(ut=M(U),typeof ut!="function")throw Error(s(150));return U=ut.call(U),_t(P,O,U,Q)}if(typeof U.then=="function")return ee(P,O,$u(U),Q);if(U.$$typeof===rt)return ee(P,O,Uu(P,U),Q);Zu(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(a(P,O.sibling),Q=h(O,U),Q.return=P,P=Q):(a(P,O),Q=rf(U,P.mode,Q),Q.return=P,P=Q),v(P)):a(P,O)}return function(P,O,U,Q){try{rl=0;var ut=ee(P,O,U,Q);return Da=null,ut}catch(ft){if(ft===Xo||ft===zu)throw ft;var Nt=yn(29,ft,null,P.mode);return Nt.lanes=Q,Nt.return=P,Nt}finally{}}}var Oa=ny(!0),iy=ny(!1),Pn=Z(null),gi=null;function Sr(e){var i=e.alternate;W(Ve,Ve.current&1),W(Pn,e),gi===null&&(i===null||Ra.current!==null||i.memoizedState!==null)&&(gi=e)}function ry(e){if(e.tag===22){if(W(Ve,Ve.current),W(Pn,e),gi===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(gi=e)}}else br()}function br(){W(Ve,Ve.current),W(Pn,Pn.current)}function Xi(e){it(Pn),gi===e&&(gi=null),it(Ve)}var Ve=Z(0);function Ju(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Id(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Lf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:T({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var zf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=En(),h=Tr(l);h.payload=i,a!=null&&(h.callback=a),i=Er(e,h,l),i!==null&&(An(i,e,l),Zo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=En(),h=Tr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Er(e,h,l),i!==null&&(An(i,e,l),Zo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=En(),l=Tr(a);l.tag=2,i!=null&&(l.callback=i),i=Er(e,l,a),i!==null&&(An(i,e,a),Zo(i,e,a))}};function sy(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Bo(a,l)||!Bo(h,d):!0}function ay(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&zf.enqueueReplaceState(i,i.state,null)}function xs(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=T({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Wu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function oy(e){Wu(e)}function ly(e){console.error(e)}function uy(e){Wu(e)}function tc(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function cy(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function jf(e,i,a){return a=Tr(a),a.tag=3,a.payload={element:null},a.callback=function(){tc(e,i)},a}function hy(e){return e=Tr(e),e.tag=3,e}function fy(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){cy(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){cy(i,a,l),typeof h!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function hS(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Qo(i,a,h,!0),a=Pn.current,a!==null){switch(a.tag){case 13:return gi===null?cd():a.alternate===null&&me===0&&(me=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===gf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),fd(e,l,h)),!1;case 22:return a.flags|=65536,l===gf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),fd(e,l,h)),!1}throw Error(s(435,a.tag))}return fd(e,l,h),cd(),!1}if(Ht)return i=Pn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==lf&&(e=Error(s(422),{cause:l}),Go(On(e,a)))):(l!==lf&&(i=Error(s(423),{cause:l}),Go(On(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=On(l,a),h=jf(e.stateNode,l,h),_f(e,h),me!==4&&(me=2)),!1;var d=Error(s(520),{cause:l});if(d=On(d,a),fl===null?fl=[d]:fl.push(d),me!==4&&(me=2),i===null)return!0;l=On(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=jf(a.stateNode,l,e),_f(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Dr===null||!Dr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=hy(h),fy(h,e,a,l),_f(a,h),!1}a=a.return}while(a!==null);return!1}var dy=Error(s(461)),Le=!1;function Fe(e,i,a,l){i.child=e===null?iy(i,null,a,l):Oa(i,e.child,a,l)}function my(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var E in l)E!=="ref"&&(v[E]=l[E])}else v=l;return Os(i),l=Sf(e,i,a,v,d,h),E=bf(),e!==null&&!Le?(wf(e,i,h),$i(e,i,h)):(Ht&&E&&af(i),i.flags|=1,Fe(e,i,l,h),i.child)}function gy(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!nf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,py(e,i,d,l,h)):(e=Vu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Yf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Bo,a(v,l)&&e.ref===i.ref)return $i(e,i,h)}return i.flags|=1,e=Hi(d,l),e.ref=i.ref,e.return=i,i.child=e}function py(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Bo(d,l)&&e.ref===i.ref)if(Le=!1,i.pendingProps=l=d,Yf(e,h))(e.flags&131072)!==0&&(Le=!0);else return i.lanes=e.lanes,$i(e,i,h)}return Bf(e,i,a,l,h)}function yy(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return _y(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Lu(i,d!==null?d.cachePool:null),d!==null?pp(i,d):Tf(),ry(i);else return i.lanes=i.childLanes=536870912,_y(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Lu(i,d.cachePool),pp(i,d),br(),i.memoizedState=null):(e!==null&&Lu(i,null),Tf(),br());return Fe(e,i,h,a),i.child}function _y(e,i,a,l){var h=mf();return h=h===null?null:{parent:Me._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Lu(i,null),Tf(),ry(i),e!==null&&Qo(e,i,l,!0),null}function ec(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Bf(e,i,a,l,h){return Os(i),a=Sf(e,i,a,l,void 0,h),l=bf(),e!==null&&!Le?(wf(e,i,h),$i(e,i,h)):(Ht&&l&&af(i),i.flags|=1,Fe(e,i,a,h),i.child)}function vy(e,i,a,l,h,d){return Os(i),i.updateQueue=null,a=_p(i,l,a,h),yp(e),l=bf(),e!==null&&!Le?(wf(e,i,d),$i(e,i,d)):(Ht&&l&&af(i),i.flags|=1,Fe(e,i,a,d),i.child)}function Ty(e,i,a,l,h){if(Os(i),i.stateNode===null){var d=Ea,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ze(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=zf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},pf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ze(v):Ea,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Lf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&zf.enqueueReplaceState(d,d.state,null),Wo(i,l,d,h),Jo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,w=xs(a,E);d.props=w;var L=d.context,G=a.contextType;v=Ea,typeof G=="object"&&G!==null&&(v=Ze(G));var X=a.getDerivedStateFromProps;G=typeof X=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||L!==v)&&ay(i,d,l,v),vr=!1;var z=i.memoizedState;d.state=z,Wo(i,l,d,h),Jo(),L=i.memoizedState,E||z!==L||vr?(typeof X=="function"&&(Lf(i,a,X,l),L=i.memoizedState),(w=vr||sy(i,a,w,l,z,L,v))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,yf(e,i),v=i.memoizedProps,G=xs(a,v),d.props=G,X=i.pendingProps,z=d.context,L=a.contextType,w=Ea,typeof L=="object"&&L!==null&&(w=Ze(L)),E=a.getDerivedStateFromProps,(L=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==X||z!==w)&&ay(i,d,l,w),vr=!1,z=i.memoizedState,d.state=z,Wo(i,l,d,h),Jo();var j=i.memoizedState;v!==X||z!==j||vr||e!==null&&e.dependencies!==null&&ku(e.dependencies)?(typeof E=="function"&&(Lf(i,a,E,l),j=i.memoizedState),(G=vr||sy(i,a,G,l,z,j,w)||e!==null&&e.dependencies!==null&&ku(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,j,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,j,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=w,l=G):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,ec(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Oa(i,e.child,null,h),i.child=Oa(i,null,a,h)):Fe(e,i,a,h),i.memoizedState=d.state,e=i.child):e=$i(e,i,h),e}function Ey(e,i,a,l){return Fo(),i.flags|=256,Fe(e,i,a,l),i.child}var qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(e){return{baseLanes:e,cachePool:lp()}}function Ff(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=kn),e}function Ay(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ht){if(h?Sr(i):br(),Ht){var E=de,w;if(w=E){t:{for(w=E,E=mi;w.nodeType!==8;){if(!E){E=null;break t}if(w=Yn(w.nextSibling),w===null){E=null;break t}}E=w}E!==null?(i.memoizedState={dehydrated:E,treeContext:Rs!==null?{id:Fi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},w=yn(18,null,null,0),w.stateNode=E,w.return=i,i.child=w,on=i,de=null,w=!0):w=!1}w||Ns(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Id(E)?i.lanes=32:i.lanes=536870912,null;Xi(i)}return E=l.children,l=l.fallback,h?(br(),h=i.mode,E=nc({mode:"hidden",children:E},h),l=ws(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,h=i.child,h.memoizedState=Hf(a),h.childLanes=Ff(e,v,a),i.memoizedState=qf,l):(Sr(i),Gf(i,E))}if(w=e.memoizedState,w!==null&&(E=w.dehydrated,E!==null)){if(d)i.flags&256?(Sr(i),i.flags&=-257,i=Qf(e,i,a)):i.memoizedState!==null?(br(),i.child=e.child,i.flags|=128,i=null):(br(),h=l.fallback,E=i.mode,l=nc({mode:"visible",children:l.children},E),h=ws(h,E,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Oa(i,e.child,null,a),l=i.child,l.memoizedState=Hf(a),l.childLanes=Ff(e,v,a),i.memoizedState=qf,i=h);else if(Sr(i),Id(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,Go({value:l,source:null,stack:null}),i=Qf(e,i,a)}else if(Le||Qo(e,i,a,!1),v=(a&e.childLanes)!==0,Le||v){if(v=ie,v!==null&&(l=a&-a,l=(l&42)!==0?1:hr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==w.retryLane))throw w.retryLane=l,Ta(e,l),An(v,e,l),dy;E.data==="$?"||cd(),i=Qf(e,i,a)}else E.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=w.treeContext,de=Yn(E.nextSibling),on=i,Ht=!0,Cs=null,mi=!1,e!==null&&(Vn[xn++]=Fi,Vn[xn++]=Gi,Vn[xn++]=Rs,Fi=e.id,Gi=e.overflow,Rs=i),i=Gf(i,l.children),i.flags|=4096);return i}return h?(br(),h=l.fallback,E=i.mode,w=e.child,L=w.sibling,l=Hi(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,L!==null?h=Hi(L,h):(h=ws(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=e.child.memoizedState,E===null?E=Hf(a):(w=E.cachePool,w!==null?(L=Me._currentValue,w=w.parent!==L?{parent:L,pool:L}:w):w=lp(),E={baseLanes:E.baseLanes|a,cachePool:w}),h.memoizedState=E,h.childLanes=Ff(e,v,a),i.memoizedState=qf,l):(Sr(i),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Gf(e,i){return i=nc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function nc(e,i){return e=yn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Qf(e,i,a){return Oa(i,e.child,null,a),e=Gf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Sy(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),cf(e.return,i,a)}function Kf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function by(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Fe(e,i,l.children,a),l=Ve.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sy(e,a,i);else if(e.tag===19)Sy(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(W(Ve,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Ju(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Kf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Ju(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Kf(i,!0,a,null,d);break;case"together":Kf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $i(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Nr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Qo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Hi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Yf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&ku(e)))}function fS(e,i,a){switch(i.tag){case 3:Zt(i,i.stateNode.containerInfo),_r(i,Me,e.memoizedState.cache),Fo();break;case 27:case 5:ei(i);break;case 4:Zt(i,i.stateNode.containerInfo);break;case 10:_r(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Sr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Ay(e,i,a):(Sr(i),e=$i(e,i,a),e!==null?e.sibling:null);Sr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Qo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return by(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),W(Ve,Ve.current),l)break;return null;case 22:case 23:return i.lanes=0,yy(e,i,a);case 24:_r(i,Me,e.memoizedState.cache)}return $i(e,i,a)}function wy(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Le=!0;else{if(!Yf(e,a)&&(i.flags&128)===0)return Le=!1,fS(e,i,a);Le=(e.flags&131072)!==0}else Le=!1,Ht&&(i.flags&1048576)!==0&&ep(i,Pu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")nf(l)?(e=xs(l,e),i.tag=1,i=Ty(null,i,l,e,a)):(i.tag=0,i=Bf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===mt){i.tag=11,i=my(null,i,l,e,a);break t}else if(h===x){i.tag=14,i=gy(null,i,l,e,a);break t}}throw i=Bt(l)||l,Error(s(306,i,""))}}return i;case 0:return Bf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=xs(l,i.pendingProps),Ty(e,i,l,h,a);case 3:t:{if(Zt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,yf(e,i),Wo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,_r(i,Me,l),l!==d.cache&&hf(i,[Me],a,!0),Jo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Ey(e,i,l,a);break t}else if(l!==h){h=On(Error(s(424)),i),Go(h),i=Ey(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(de=Yn(e.firstChild),on=i,Ht=!0,Cs=null,mi=!0,a=iy(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Fo(),l===h){i=$i(e,i,a);break t}Fe(e,i,l,a)}i=i.child}return i;case 26:return ec(e,i),e===null?(a=N_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ht||(a=i.type,e=i.pendingProps,l=pc(At.current).createElement(a),l[Ne]=i,l[Ee]=e,Qe(l,a,e),ye(l),i.stateNode=l):i.memoizedState=N_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ei(i),e===null&&Ht&&(l=i.stateNode=R_(i.type,i.pendingProps,At.current),on=i,mi=!0,h=de,Vr(i.type)?(Cd=h,de=Yn(l.firstChild)):de=h),Fe(e,i,i.pendingProps.children,a),ec(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ht&&((h=l=de)&&(l=jS(l,i.type,i.pendingProps,mi),l!==null?(i.stateNode=l,on=i,de=Yn(l.firstChild),mi=!1,h=!0):h=!1),h||Ns(i)),ei(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,bd(h,d)?l=null:v!==null&&bd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Sf(e,i,rS,null,null,a),El._currentValue=h),ec(e,i),Fe(e,i,l,a),i.child;case 6:return e===null&&Ht&&((e=a=de)&&(a=BS(a,i.pendingProps,mi),a!==null?(i.stateNode=a,on=i,de=null,e=!0):e=!1),e||Ns(i)),null;case 13:return Ay(e,i,a);case 4:return Zt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Oa(i,null,l,a):Fe(e,i,l,a),i.child;case 11:return my(e,i,i.type,i.pendingProps,a);case 7:return Fe(e,i,i.pendingProps,a),i.child;case 8:return Fe(e,i,i.pendingProps.children,a),i.child;case 12:return Fe(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,_r(i,i.type,l.value),Fe(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Os(i),h=Ze(h),l=l(h),i.flags|=1,Fe(e,i,l,a),i.child;case 14:return gy(e,i,i.type,i.pendingProps,a);case 15:return py(e,i,i.type,i.pendingProps,a);case 19:return by(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=nc(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Hi(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return yy(e,i,a);case 24:return Os(i),l=Ze(Me),e===null?(h=mf(),h===null&&(h=ie,d=ff(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},pf(i),_r(i,Me,h)):((e.lanes&a)!==0&&(yf(e,i),Wo(i,null,null,a),Jo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),_r(i,Me,l)):(l=d.cache,_r(i,Me,l),l!==h.cache&&hf(i,[Me],a,!0))),Fe(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Zi(e){e.flags|=4}function Ry(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!x_(i)){if(i=Pn.current,i!==null&&((zt&4194048)===zt?gi!==null:(zt&62914560)!==zt&&(zt&536870912)===0||i!==gi))throw $o=gf,up;e.flags|=8192}}function ic(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?So():536870912,e.lanes|=i,Pa|=i)}function al(e,i){if(!Ht)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ce(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function dS(e,i,a){var l=i.pendingProps;switch(of(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(i),null;case 1:return ce(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ki(Me),wn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ho(i)?Zi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,rp())),ce(i),null;case 26:return a=i.memoizedState,e===null?(Zi(i),a!==null?(ce(i),Ry(i,a)):(ce(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Zi(i),ce(i),Ry(i,a)):(ce(i),i.flags&=-16777217):(e.memoizedProps!==l&&Zi(i),ce(i),i.flags&=-16777217),null;case 27:qn(i),a=At.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Zi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ce(i),null}e=gt.current,Ho(i)?np(i):(e=R_(h,l,a),i.stateNode=e,Zi(i))}return ce(i),null;case 5:if(qn(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Zi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ce(i),null}if(e=gt.current,Ho(i))np(i);else{switch(h=pc(At.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[Ne]=i,e[Ee]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Qe(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zi(i)}}return ce(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Zi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=At.current,Ho(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=on,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Ne]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||v_(e.nodeValue,a)),e||Ns(i)}else e=pc(e).createTextNode(l),e[Ne]=i,i.stateNode=e}return ce(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Ho(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ne]=i}else Fo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ce(i),h=!1}else h=rp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Xi(i),i):(Xi(i),null)}if(Xi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),ic(i,i.updateQueue),ce(i),null;case 4:return wn(),e===null&&vd(i.stateNode.containerInfo),ce(i),null;case 10:return Ki(i.type),ce(i),null;case 19:if(it(Ve),h=i.memoizedState,h===null)return ce(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)al(h,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Ju(e),d!==null){for(i.flags|=128,al(h,!1),e=d.updateQueue,i.updateQueue=e,ic(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)tp(a,e),a=a.sibling;return W(Ve,Ve.current&1|2),i.child}e=e.sibling}h.tail!==null&&Ce()>ac&&(i.flags|=128,l=!0,al(h,!1),i.lanes=4194304)}else{if(!l)if(e=Ju(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,ic(i,e),al(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Ht)return ce(i),null}else 2*Ce()-h.renderingStartTime>ac&&a!==536870912&&(i.flags|=128,l=!0,al(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ce(),i.sibling=null,e=Ve.current,W(Ve,l?e&1|2:e&1),i):(ce(i),null);case 22:case 23:return Xi(i),Ef(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ce(i),i.subtreeFlags&6&&(i.flags|=8192)):ce(i),a=i.updateQueue,a!==null&&ic(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&it(Ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ki(Me),ce(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function mS(e,i){switch(of(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ki(Me),wn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return qn(i),null;case 13:if(Xi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Fo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return it(Ve),null;case 4:return wn(),null;case 10:return Ki(i.type),null;case 22:case 23:return Xi(i),Ef(),e!==null&&it(Ms),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ki(Me),null;case 25:return null;default:return null}}function Iy(e,i){switch(of(i),i.tag){case 3:Ki(Me),wn();break;case 26:case 27:case 5:qn(i);break;case 4:wn();break;case 13:Xi(i);break;case 19:it(Ve);break;case 10:Ki(i.type);break;case 22:case 23:Xi(i),Ef(),e!==null&&it(Ms);break;case 24:Ki(Me)}}function ol(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(E){ne(i,i.return,E)}}function wr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var w=a,L=E;try{L()}catch(G){ne(h,w,G)}}}l=l.next}while(l!==d)}}catch(G){ne(i,i.return,G)}}function Cy(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{gp(i,a)}catch(l){ne(e,e.return,l)}}}function Ny(e,i,a){a.props=xs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ne(e,i,l)}}function ll(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){ne(e,i,h)}}function pi(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){ne(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){ne(e,i,h)}else a.current=null}function Dy(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){ne(e,e.return,h)}}function Xf(e,i,a){try{var l=e.stateNode;PS(l,e.type,a,i),l[Ee]=i}catch(h){ne(e,e.return,h)}}function Oy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Vr(e.type)||e.tag===4}function $f(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Oy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Vr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=gc));else if(l!==4&&(l===27&&Vr(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Zf(e,i,a),e=e.sibling;e!==null;)Zf(e,i,a),e=e.sibling}function rc(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Vr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(rc(e,i,a),e=e.sibling;e!==null;)rc(e,i,a),e=e.sibling}function My(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Qe(i,l,a),i[Ne]=e,i[Ee]=a}catch(d){ne(e,e.return,d)}}var Ji=!1,ve=!1,Jf=!1,Vy=typeof WeakSet=="function"?WeakSet:Set,ze=null;function gS(e,i){if(e=e.containerInfo,Ad=Ac,e=Fg(e),Xh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,E=-1,w=-1,L=0,G=0,X=e,z=null;e:for(;;){for(var j;X!==a||h!==0&&X.nodeType!==3||(E=v+h),X!==d||l!==0&&X.nodeType!==3||(w=v+l),X.nodeType===3&&(v+=X.nodeValue.length),(j=X.firstChild)!==null;)z=X,X=j;for(;;){if(X===e)break e;if(z===a&&++L===h&&(E=v),z===d&&++G===l&&(w=v),(j=X.nextSibling)!==null)break;X=z,z=X.parentNode}X=j}a=E===-1||w===-1?null:{start:E,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sd={focusedElem:e,selectionRange:a},Ac=!1,ze=i;ze!==null;)if(i=ze,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,ze=e;else for(;ze!==null;){switch(i=ze,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Et=xs(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(Et,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(_t){ne(a,a.return,_t)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Rd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,ze=e;break}ze=i.return}}function xy(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Rr(e,a),l&4&&ol(5,a);break;case 1:if(Rr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){ne(a,a.return,v)}else{var h=xs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){ne(a,a.return,v)}}l&64&&Cy(a),l&512&&ll(a,a.return);break;case 3:if(Rr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{gp(e,i)}catch(v){ne(a,a.return,v)}}break;case 27:i===null&&l&4&&My(a);case 26:case 5:Rr(e,a),i===null&&l&4&&Dy(a),l&512&&ll(a,a.return);break;case 12:Rr(e,a);break;case 13:Rr(e,a),l&4&&Uy(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=bS.bind(null,a),qS(e,a))));break;case 22:if(l=a.memoizedState!==null||Ji,!l){i=i!==null&&i.memoizedState!==null||ve,h=Ji;var d=ve;Ji=l,(ve=i)&&!d?Ir(e,a,(a.subtreeFlags&8772)!==0):Rr(e,a),Ji=h,ve=d}break;case 30:break;default:Rr(e,a)}}function Py(e){var i=e.alternate;i!==null&&(e.alternate=null,Py(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&mr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var oe=null,un=!1;function Wi(e,i,a){for(a=a.child;a!==null;)ky(e,i,a),a=a.sibling}function ky(e,i,a){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:ve||pi(a,i),Wi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ve||pi(a,i);var l=oe,h=un;Vr(a.type)&&(oe=a.stateNode,un=!1),Wi(e,i,a),yl(a.stateNode),oe=l,un=h;break;case 5:ve||pi(a,i);case 6:if(l=oe,h=un,oe=null,Wi(e,i,a),oe=l,un=h,oe!==null)if(un)try{(oe.nodeType===9?oe.body:oe.nodeName==="HTML"?oe.ownerDocument.body:oe).removeChild(a.stateNode)}catch(d){ne(a,i,d)}else try{oe.removeChild(a.stateNode)}catch(d){ne(a,i,d)}break;case 18:oe!==null&&(un?(e=oe,b_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wl(e)):b_(oe,a.stateNode));break;case 4:l=oe,h=un,oe=a.stateNode.containerInfo,un=!0,Wi(e,i,a),oe=l,un=h;break;case 0:case 11:case 14:case 15:ve||wr(2,a,i),ve||wr(4,a,i),Wi(e,i,a);break;case 1:ve||(pi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ny(a,i,l)),Wi(e,i,a);break;case 21:Wi(e,i,a);break;case 22:ve=(l=ve)||a.memoizedState!==null,Wi(e,i,a),ve=l;break;default:Wi(e,i,a)}}function Uy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wl(e)}catch(a){ne(i,i.return,a)}}function pS(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Vy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Vy),i;default:throw Error(s(435,e.tag))}}function Wf(e,i){var a=pS(e);i.forEach(function(l){var h=wS.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function _n(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(Vr(E.type)){oe=E.stateNode,un=!1;break t}break;case 5:oe=E.stateNode,un=!1;break t;case 3:case 4:oe=E.stateNode.containerInfo,un=!0;break t}E=E.return}if(oe===null)throw Error(s(160));ky(d,v,h),oe=null,un=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Ly(i,e),i=i.sibling}var Kn=null;function Ly(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_n(i,e),vn(e),l&4&&(wr(3,e,e.return),ol(3,e),wr(5,e,e.return));break;case 1:_n(i,e),vn(e),l&512&&(ve||a===null||pi(a,a.return)),l&64&&Ji&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Kn;if(_n(i,e),vn(e),l&512&&(ve||a===null||pi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[us]||d[Ne]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Qe(d,l,a),d[Ne]=e,ye(d),l=d;break t;case"link":var v=M_("link","href",h).get(l+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}d=h.createElement(l),Qe(d,l,a),h.head.appendChild(d);break;case"meta":if(v=M_("meta","content",h).get(l+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}d=h.createElement(l),Qe(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Ne]=e,ye(d),l=d}e.stateNode=l}else V_(h,e.type,e.stateNode);else e.stateNode=O_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?V_(h,e.type,e.stateNode):O_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:_n(i,e),vn(e),l&512&&(ve||a===null||pi(a,a.return)),a!==null&&l&4&&Xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(_n(i,e),vn(e),l&512&&(ve||a===null||pi(a,a.return)),e.flags&32){h=e.stateNode;try{In(h,"")}catch(j){ne(e,e.return,j)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Xf(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Jf=!0);break;case 6:if(_n(i,e),vn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(j){ne(e,e.return,j)}}break;case 3:if(vc=null,h=Kn,Kn=yc(i.containerInfo),_n(i,e),Kn=h,vn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{wl(i.containerInfo)}catch(j){ne(e,e.return,j)}Jf&&(Jf=!1,zy(e));break;case 4:l=Kn,Kn=yc(e.stateNode.containerInfo),_n(i,e),vn(e),Kn=l;break;case 12:_n(i,e),vn(e);break;case 13:_n(i,e),vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(sd=Ce()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wf(e,l)));break;case 22:h=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,L=Ji,G=ve;if(Ji=L||h,ve=G||w,_n(i,e),ve=G,Ji=L,vn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||Ji||ve||Ps(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=w.stateNode;var X=w.memoizedProps.style,z=X!=null&&X.hasOwnProperty("display")?X.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(j){ne(w,w.return,j)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(j){ne(w,w.return,j)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Wf(e,a))));break;case 19:_n(i,e),vn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wf(e,l)));break;case 30:break;case 21:break;default:_n(i,e),vn(e)}}function vn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(Oy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=$f(e);rc(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(In(v,""),a.flags&=-33);var E=$f(e);rc(e,E,v);break;case 3:case 4:var w=a.stateNode.containerInfo,L=$f(e);Zf(e,L,w);break;default:throw Error(s(161))}}catch(G){ne(e,e.return,G)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function zy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;zy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Rr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)xy(e,i.alternate,i),i=i.sibling}function Ps(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:wr(4,i,i.return),Ps(i);break;case 1:pi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Ny(i,i.return,a),Ps(i);break;case 27:yl(i.stateNode);case 26:case 5:pi(i,i.return),Ps(i);break;case 22:i.memoizedState===null&&Ps(i);break;case 30:Ps(i);break;default:Ps(i)}e=e.sibling}}function Ir(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Ir(h,d,a),ol(4,d);break;case 1:if(Ir(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){ne(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)mp(w[h],E)}catch(L){ne(l,l.return,L)}}a&&v&64&&Cy(d),ll(d,d.return);break;case 27:My(d);case 26:case 5:Ir(h,d,a),a&&l===null&&v&4&&Dy(d),ll(d,d.return);break;case 12:Ir(h,d,a);break;case 13:Ir(h,d,a),a&&v&4&&Uy(h,d);break;case 22:d.memoizedState===null&&Ir(h,d,a),ll(d,d.return);break;case 30:break;default:Ir(h,d,a)}i=i.sibling}}function td(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ko(a))}function ed(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ko(e))}function yi(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)jy(e,i,a,l),i=i.sibling}function jy(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:yi(e,i,a,l),h&2048&&ol(9,i);break;case 1:yi(e,i,a,l);break;case 3:yi(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ko(e)));break;case 12:if(h&2048){yi(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){ne(i,i.return,w)}}else yi(e,i,a,l);break;case 13:yi(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?yi(e,i,a,l):ul(e,i):d._visibility&2?yi(e,i,a,l):(d._visibility|=2,Ma(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&td(v,i);break;case 24:yi(e,i,a,l),h&2048&&ed(i.alternate,i);break;default:yi(e,i,a,l)}}function Ma(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,E=a,w=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:Ma(d,v,E,w,h),ol(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&2?Ma(d,v,E,w,h):ul(d,v):(G._visibility|=2,Ma(d,v,E,w,h)),h&&L&2048&&td(v.alternate,v);break;case 24:Ma(d,v,E,w,h),h&&L&2048&&ed(v.alternate,v);break;default:Ma(d,v,E,w,h)}i=i.sibling}}function ul(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:ul(a,l),h&2048&&td(l.alternate,l);break;case 24:ul(a,l),h&2048&&ed(l.alternate,l);break;default:ul(a,l)}i=i.sibling}}var cl=8192;function Va(e){if(e.subtreeFlags&cl)for(e=e.child;e!==null;)By(e),e=e.sibling}function By(e){switch(e.tag){case 26:Va(e),e.flags&cl&&e.memoizedState!==null&&eb(Kn,e.memoizedState,e.memoizedProps);break;case 5:Va(e);break;case 3:case 4:var i=Kn;Kn=yc(e.stateNode.containerInfo),Va(e),Kn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=cl,cl=16777216,Va(e),cl=i):Va(e));break;default:Va(e)}}function qy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function hl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];ze=l,Fy(l,e)}qy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hy(e),e=e.sibling}function Hy(e){switch(e.tag){case 0:case 11:case 15:hl(e),e.flags&2048&&wr(9,e,e.return);break;case 3:hl(e);break;case 12:hl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,sc(e)):hl(e);break;default:hl(e)}}function sc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];ze=l,Fy(l,e)}qy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:wr(8,i,i.return),sc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,sc(i));break;default:sc(i)}e=e.sibling}}function Fy(e,i){for(;ze!==null;){var a=ze;switch(a.tag){case 0:case 11:case 15:wr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ko(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,ze=l;else t:for(a=e;ze!==null;){l=ze;var h=l.sibling,d=l.return;if(Py(l),l===a){ze=null;break t}if(h!==null){h.return=d,ze=h;break t}ze=d}}}var yS={getCacheForType:function(e){var i=Ze(Me),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},_S=typeof WeakMap=="function"?WeakMap:Map,Xt=0,ie=null,Ot=null,zt=0,$t=0,Tn=null,Cr=!1,xa=!1,nd=!1,tr=0,me=0,Nr=0,ks=0,id=0,kn=0,Pa=0,fl=null,cn=null,rd=!1,sd=0,ac=1/0,oc=null,Dr=null,Ge=0,Or=null,ka=null,Ua=0,ad=0,od=null,Gy=null,dl=0,ld=null;function En(){if((Xt&2)!==0&&zt!==0)return zt&-zt;if(F.T!==null){var e=ba;return e!==0?e:gd()}return fr()}function Qy(){kn===0&&(kn=(zt&536870912)===0||Ht?Ao():536870912);var e=Pn.current;return e!==null&&(e.flags|=32),kn}function An(e,i,a){(e===ie&&($t===2||$t===9)||e.cancelPendingCommit!==null)&&(La(e,0),Mr(e,zt,kn,!1)),Mi(e,a),((Xt&2)===0||e!==ie)&&(e===ie&&((Xt&2)===0&&(ks|=a),me===4&&Mr(e,zt,kn,!1)),_i(e))}function Ky(e,i,a){if((Xt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||ls(e,i),h=l?ES(e,i):hd(e,i,!0),d=l;do{if(h===0){xa&&!l&&Mr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!vS(a)){h=hd(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var E=e;h=fl;var w=E.current.memoizedState.isDehydrated;if(w&&(La(E,v).flags|=256),v=hd(E,v,!1),v!==2){if(nd&&!w){E.errorRecoveryDisabledLanes|=d,ks|=d,h=4;break t}d=cn,cn=h,d!==null&&(cn===null?cn=d:cn.push.apply(cn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){La(e,0),Mr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Mr(l,i,kn,!Cr);break t;case 2:cn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=sd+300-Ce(),10<h)){if(Mr(l,i,kn,!Cr),ea(l,0,!0)!==0)break t;l.timeoutHandle=A_(Yy.bind(null,l,a,cn,oc,rd,i,kn,ks,Pa,Cr,d,2,-0,0),h);break t}Yy(l,a,cn,oc,rd,i,kn,ks,Pa,Cr,d,0,-0,0)}}break}while(!0);_i(e)}function Yy(e,i,a,l,h,d,v,E,w,L,G,X,z,j){if(e.timeoutHandle=-1,X=i.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(Tl={stylesheets:null,count:0,unsuspend:tb},By(i),X=nb(),X!==null)){e.cancelPendingCommit=X(e_.bind(null,e,i,d,a,l,h,v,E,w,G,1,z,j)),Mr(e,d,v,!L);return}e_(e,i,d,a,l,h,v,E,w)}function vS(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!pn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Mr(e,i,a,l){i&=~id,i&=~ks,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-$e(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&ii(e,a,i)}function lc(){return(Xt&6)===0?(ml(0),!1):!0}function ud(){if(Ot!==null){if($t===0)var e=Ot.return;else e=Ot,Qi=Ds=null,Rf(e),Da=null,rl=0,e=Ot;for(;e!==null;)Iy(e.alternate,e),e=e.return;Ot=null}}function La(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,US(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ud(),ie=e,Ot=a=Hi(e.current,null),zt=i,$t=0,Tn=null,Cr=!1,xa=ls(e,i),nd=!1,Pa=kn=id=ks=Nr=me=0,cn=fl=null,rd=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-$e(l),d=1<<h;i|=e[h],l&=~d}return tr=i,Du(),a}function Xy(e,i){Ct=null,F.H=Xu,i===Xo||i===zu?(i=fp(),$t=3):i===up?(i=fp(),$t=4):$t=i===dy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Tn=i,Ot===null&&(me=1,tc(e,On(i,e.current)))}function $y(){var e=F.H;return F.H=Xu,e===null?Xu:e}function Zy(){var e=F.A;return F.A=yS,e}function cd(){me=4,Cr||(zt&4194048)!==zt&&Pn.current!==null||(xa=!0),(Nr&134217727)===0&&(ks&134217727)===0||ie===null||Mr(ie,zt,kn,!1)}function hd(e,i,a){var l=Xt;Xt|=2;var h=$y(),d=Zy();(ie!==e||zt!==i)&&(oc=null,La(e,i)),i=!1;var v=me;t:do try{if($t!==0&&Ot!==null){var E=Ot,w=Tn;switch($t){case 8:ud(),v=6;break t;case 3:case 2:case 9:case 6:Pn.current===null&&(i=!0);var L=$t;if($t=0,Tn=null,za(e,E,w,L),a&&xa){v=0;break t}break;default:L=$t,$t=0,Tn=null,za(e,E,w,L)}}TS(),v=me;break}catch(G){Xy(e,G)}while(!0);return i&&e.shellSuspendCounter++,Qi=Ds=null,Xt=l,F.H=h,F.A=d,Ot===null&&(ie=null,zt=0,Du()),v}function TS(){for(;Ot!==null;)Jy(Ot)}function ES(e,i){var a=Xt;Xt|=2;var l=$y(),h=Zy();ie!==e||zt!==i?(oc=null,ac=Ce()+500,La(e,i)):xa=ls(e,i);t:do try{if($t!==0&&Ot!==null){i=Ot;var d=Tn;e:switch($t){case 1:$t=0,Tn=null,za(e,i,d,1);break;case 2:case 9:if(cp(d)){$t=0,Tn=null,Wy(i);break}i=function(){$t!==2&&$t!==9||ie!==e||($t=7),_i(e)},d.then(i,i);break t;case 3:$t=7;break t;case 4:$t=5;break t;case 7:cp(d)?($t=0,Tn=null,Wy(i)):($t=0,Tn=null,za(e,i,d,7));break;case 5:var v=null;switch(Ot.tag){case 26:v=Ot.memoizedState;case 5:case 27:var E=Ot;if(!v||x_(v)){$t=0,Tn=null;var w=E.sibling;if(w!==null)Ot=w;else{var L=E.return;L!==null?(Ot=L,uc(L)):Ot=null}break e}}$t=0,Tn=null,za(e,i,d,5);break;case 6:$t=0,Tn=null,za(e,i,d,6);break;case 8:ud(),me=6;break t;default:throw Error(s(462))}}AS();break}catch(G){Xy(e,G)}while(!0);return Qi=Ds=null,F.H=l,F.A=h,Xt=a,Ot!==null?0:(ie=null,zt=0,Du(),me)}function AS(){for(;Ot!==null&&!Pe();)Jy(Ot)}function Jy(e){var i=wy(e.alternate,e,tr);e.memoizedProps=e.pendingProps,i===null?uc(e):Ot=i}function Wy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=vy(a,i,i.pendingProps,i.type,void 0,zt);break;case 11:i=vy(a,i,i.pendingProps,i.type.render,i.ref,zt);break;case 5:Rf(i);default:Iy(a,i),i=Ot=tp(i,tr),i=wy(a,i,tr)}e.memoizedProps=e.pendingProps,i===null?uc(e):Ot=i}function za(e,i,a,l){Qi=Ds=null,Rf(i),Da=null,rl=0;var h=i.return;try{if(hS(e,h,i,a,zt)){me=1,tc(e,On(a,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;me=1,tc(e,On(a,e.current)),Ot=null;return}i.flags&32768?(Ht||l===1?e=!0:xa||(zt&536870912)!==0?e=!1:(Cr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Pn.current,l!==null&&l.tag===13&&(l.flags|=16384))),t_(i,e)):uc(i)}function uc(e){var i=e;do{if((i.flags&32768)!==0){t_(i,Cr);return}e=i.return;var a=dS(i.alternate,i,tr);if(a!==null){Ot=a;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);me===0&&(me=5)}function t_(e,i){do{var a=mS(e.alternate,e);if(a!==null){a.flags&=32767,Ot=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=a}while(e!==null);me=6,Ot=null}function e_(e,i,a,l,h,d,v,E,w){e.cancelPendingCommit=null;do cc();while(Ge!==0);if((Xt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=tf,bo(e,a,d,v,E,w),e===ie&&(Ot=ie=null,zt=0),ka=i,Or=e,Ua=a,ad=d,od=h,Gy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,RS(rs,function(){return a_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=nt.p,nt.p=2,v=Xt,Xt|=4;try{gS(e,i,a)}finally{Xt=v,nt.p=h,F.T=l}}Ge=1,n_(),i_(),r_()}}function n_(){if(Ge===1){Ge=0;var e=Or,i=ka,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=nt.p;nt.p=2;var h=Xt;Xt|=4;try{Ly(i,e);var d=Sd,v=Fg(e.containerInfo),E=d.focusedElem,w=d.selectionRange;if(v!==E&&E&&E.ownerDocument&&Hg(E.ownerDocument.documentElement,E)){if(w!==null&&Xh(E)){var L=w.start,G=w.end;if(G===void 0&&(G=L),"selectionStart"in E)E.selectionStart=L,E.selectionEnd=Math.min(G,E.value.length);else{var X=E.ownerDocument||document,z=X&&X.defaultView||window;if(z.getSelection){var j=z.getSelection(),Et=E.textContent.length,_t=Math.min(w.start,Et),ee=w.end===void 0?_t:Math.min(w.end,Et);!j.extend&&_t>ee&&(v=ee,ee=_t,_t=v);var P=qg(E,_t),O=qg(E,ee);if(P&&O&&(j.rangeCount!==1||j.anchorNode!==P.node||j.anchorOffset!==P.offset||j.focusNode!==O.node||j.focusOffset!==O.offset)){var U=X.createRange();U.setStart(P.node,P.offset),j.removeAllRanges(),_t>ee?(j.addRange(U),j.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),j.addRange(U))}}}}for(X=[],j=E;j=j.parentNode;)j.nodeType===1&&X.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<X.length;E++){var Q=X[E];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Ac=!!Ad,Sd=Ad=null}finally{Xt=h,nt.p=l,F.T=a}}e.current=i,Ge=2}}function i_(){if(Ge===2){Ge=0;var e=Or,i=ka,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=nt.p;nt.p=2;var h=Xt;Xt|=4;try{xy(e,i.alternate,i)}finally{Xt=h,nt.p=l,F.T=a}}Ge=3}}function r_(){if(Ge===4||Ge===3){Ge=0,pe();var e=Or,i=ka,a=Ua,l=Gy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ge=5:(Ge=0,ka=Or=null,s_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Dr=null),na(a),i=i.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(fe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=nt.p,nt.p=2,F.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var E=l[v];d(E.value,{componentStack:E.stack})}}finally{F.T=i,nt.p=h}}(Ua&3)!==0&&cc(),_i(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===ld?dl++:(dl=0,ld=e):dl=0,ml(0)}}function s_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ko(i)))}function cc(e){return n_(),i_(),r_(),a_()}function a_(){if(Ge!==5)return!1;var e=Or,i=ad;ad=0;var a=na(Ua),l=F.T,h=nt.p;try{nt.p=32>a?32:a,F.T=null,a=od,od=null;var d=Or,v=Ua;if(Ge=0,ka=Or=null,Ua=0,(Xt&6)!==0)throw Error(s(331));var E=Xt;if(Xt|=4,Hy(d.current),jy(d,d.current,v,a),Xt=E,ml(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(fe,d)}catch{}return!0}finally{nt.p=h,F.T=l,s_(e,i)}}function o_(e,i,a){i=On(a,i),i=jf(e.stateNode,i,2),e=Er(e,i,2),e!==null&&(Mi(e,2),_i(e))}function ne(e,i,a){if(e.tag===3)o_(e,e,a);else for(;i!==null;){if(i.tag===3){o_(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Dr===null||!Dr.has(l))){e=On(a,e),a=hy(2),l=Er(i,a,2),l!==null&&(fy(a,l,i,e),Mi(l,2),_i(l));break}}i=i.return}}function fd(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new _S;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(nd=!0,h.add(a),e=SS.bind(null,e,i,a),i.then(e,e))}function SS(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ie===e&&(zt&a)===a&&(me===4||me===3&&(zt&62914560)===zt&&300>Ce()-sd?(Xt&2)===0&&La(e,0):id|=a,Pa===zt&&(Pa=0)),_i(e)}function l_(e,i){i===0&&(i=So()),e=Ta(e,i),e!==null&&(Mi(e,i),_i(e))}function bS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),l_(e,a)}function wS(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),l_(e,a)}function RS(e,i){return yt(e,i)}var hc=null,ja=null,dd=!1,fc=!1,md=!1,Us=0;function _i(e){e!==ja&&e.next===null&&(ja===null?hc=ja=e:ja=ja.next=e),fc=!0,dd||(dd=!0,CS())}function ml(e,i){if(!md&&fc){md=!0;do for(var a=!1,l=hc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-$e(42|e)+1)-1,d&=h&~(v&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,f_(l,d))}else d=zt,d=ea(l,l===ie?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||ls(l,d)||(a=!0,f_(l,d));l=l.next}while(a);md=!1}}function IS(){u_()}function u_(){fc=dd=!1;var e=0;Us!==0&&(kS()&&(e=Us),Us=0);for(var i=Ce(),a=null,l=hc;l!==null;){var h=l.next,d=c_(l,i);d===0?(l.next=null,a===null?hc=h:a.next=h,h===null&&(ja=a)):(a=l,(e!==0||(d&3)!==0)&&(fc=!0)),l=h}ml(e)}function c_(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-$e(d),E=1<<v,w=h[v];w===-1?((E&a)===0||(E&l)!==0)&&(h[v]=Eo(E,i)):w<=i&&(e.expiredLanes|=E),d&=~E}if(i=ie,a=zt,a=ea(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&($t===2||$t===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Kt(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ls(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Kt(l),na(a)){case 2:case 8:a=cr;break;case 32:a=rs;break;case 268435456:a=ta;break;default:a=rs}return l=h_.bind(null,e),a=yt(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Kt(l),e.callbackPriority=2,e.callbackNode=null,2}function h_(e,i){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(cc()&&e.callbackNode!==a)return null;var l=zt;return l=ea(e,e===ie?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ky(e,l,i),c_(e,Ce()),e.callbackNode!=null&&e.callbackNode===a?h_.bind(null,e):null)}function f_(e,i){if(cc())return null;Ky(e,i,!0)}function CS(){LS(function(){(Xt&6)!==0?yt(ni,IS):u_()})}function gd(){return Us===0&&(Us=Ao()),Us}function d_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:la(""+e)}function m_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function NS(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=d_((h[Ee]||null).action),v=l.submitter;v&&(i=(i=v[Ee]||null)?d_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var E=new ua("action","action",null,l,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Us!==0){var w=v?m_(h,v):new FormData(h);Pf(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(E.preventDefault(),w=v?m_(h,v):new FormData(h),Pf(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var pd=0;pd<Wh.length;pd++){var yd=Wh[pd],DS=yd.toLowerCase(),OS=yd[0].toUpperCase()+yd.slice(1);Qn(DS,"on"+OS)}Qn(Kg,"onAnimationEnd"),Qn(Yg,"onAnimationIteration"),Qn(Xg,"onAnimationStart"),Qn("dblclick","onDoubleClick"),Qn("focusin","onFocus"),Qn("focusout","onBlur"),Qn(YA,"onTransitionRun"),Qn(XA,"onTransitionStart"),Qn($A,"onTransitionCancel"),Qn($g,"onTransitionEnd"),xi("onMouseEnter",["mouseout","mouseover"]),xi("onMouseLeave",["mouseout","mouseover"]),xi("onPointerEnter",["pointerout","pointerover"]),xi("onPointerLeave",["pointerout","pointerover"]),Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gl));function g_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var E=l[v],w=E.instance,L=E.currentTarget;if(E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(G){Wu(G)}h.currentTarget=null,d=w}else for(v=0;v<l.length;v++){if(E=l[v],w=E.instance,L=E.currentTarget,E=E.listener,w!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=L;try{d(h)}catch(G){Wu(G)}h.currentTarget=null,d=w}}}}function Mt(e,i){var a=i[Ro];a===void 0&&(a=i[Ro]=new Set);var l=e+"__bubble";a.has(l)||(p_(i,e,2,!1),a.add(l))}function _d(e,i,a){var l=0;i&&(l|=4),p_(a,e,l,i)}var dc="_reactListening"+Math.random().toString(36).slice(2);function vd(e){if(!e[dc]){e[dc]=!0,Io.forEach(function(a){a!=="selectionchange"&&(MS.has(a)||_d(a,!1,e),_d(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[dc]||(i[dc]=!0,_d("selectionchange",!1,i))}}function p_(e,i,a,l){switch(j_(i)){case 2:var h=sb;break;case 8:h=ab;break;default:h=Vd}a=h.bind(null,i,a,e),h=void 0,!Nn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function Td(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var E=l.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=l.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=Vi(E),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){l=d=v;continue t}E=E.parentNode}}l=l.return}gu(function(){var L=d,G=Cn(a),X=[];t:{var z=Zg.get(e);if(z!==void 0){var j=ua,Et=e;switch(e){case"keypress":if(ui(a)===0)break t;case"keydown":case"keyup":j=ga;break;case"focusin":Et="focus",j=fa;break;case"focusout":Et="blur",j=fa;break;case"beforeblur":case"afterblur":j=fa;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Dn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Gh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Su;break;case Kg:case Yg:case Xg:j=da;break;case $g:j=wu;break;case"scroll":case"scrollend":j=pu;break;case"wheel":j=pa;break;case"copy":case"cut":case"paste":j=ma;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=zo;break;case"toggle":case"beforetoggle":j=Iu}var _t=(i&4)!==0,ee=!_t&&(e==="scroll"||e==="scrollend"),P=_t?z!==null?z+"Capture":null:z;_t=[];for(var O=L,U;O!==null;){var Q=O;if(U=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||U===null||P===null||(Q=ps(O,P),Q!=null&&_t.push(pl(O,Q,U))),ee)break;O=O.return}0<_t.length&&(z=new j(z,Et,null,a,G),X.push({event:z,listeners:_t}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&a!==Ui&&(Et=a.relatedTarget||a.fromElement)&&(Vi(Et)||Et[Rn]))break t;if((j||z)&&(z=G.window===G?G:(z=G.ownerDocument)?z.defaultView||z.parentWindow:window,j?(Et=a.relatedTarget||a.toElement,j=L,Et=Et?Vi(Et):null,Et!==null&&(ee=u(Et),_t=Et.tag,Et!==ee||_t!==5&&_t!==27&&_t!==6)&&(Et=null)):(j=null,Et=L),j!==Et)){if(_t=Dn,Q="onMouseLeave",P="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(_t=zo,Q="onPointerLeave",P="onPointerEnter",O="pointer"),ee=j==null?z:si(j),U=Et==null?z:si(Et),z=new _t(Q,O+"leave",j,a,G),z.target=ee,z.relatedTarget=U,Q=null,Vi(G)===L&&(_t=new _t(P,O+"enter",Et,a,G),_t.target=U,_t.relatedTarget=ee,Q=_t),ee=Q,j&&Et)e:{for(_t=j,P=Et,O=0,U=_t;U;U=Ba(U))O++;for(U=0,Q=P;Q;Q=Ba(Q))U++;for(;0<O-U;)_t=Ba(_t),O--;for(;0<U-O;)P=Ba(P),U--;for(;O--;){if(_t===P||P!==null&&_t===P.alternate)break e;_t=Ba(_t),P=Ba(P)}_t=null}else _t=null;j!==null&&y_(X,z,j,_t,!1),Et!==null&&ee!==null&&y_(X,ee,Et,_t,!0)}}t:{if(z=L?si(L):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var ut=kg;else if(Oe(z))if(Ug)ut=GA;else{ut=HA;var Nt=qA}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&Mo(L.elementType)&&(ut=kg):ut=FA;if(ut&&(ut=ut(e,L))){qi(X,ut,a,G);break t}Nt&&Nt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&pr(z,"number",z.value)}switch(Nt=L?si(L):window,e){case"focusin":(Oe(Nt)||Nt.contentEditable==="true")&&(ya=Nt,$h=L,qo=null);break;case"focusout":qo=$h=ya=null;break;case"mousedown":Zh=!0;break;case"contextmenu":case"mouseup":case"dragend":Zh=!1,Gg(X,a,G);break;case"selectionchange":if(KA)break;case"keydown":case"keyup":Gg(X,a,G)}var ft;if(fi)t:{switch(e){case"compositionstart":var vt="onCompositionStart";break t;case"compositionend":vt="onCompositionEnd";break t;case"compositionupdate":vt="onCompositionUpdate";break t}vt=void 0}else Ut?H(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(_&&a.locale!=="ko"&&(Ut||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Ut&&(ft=xo()):(li=G,yr="value"in li?li.value:li.textContent,Ut=!0)),Nt=mc(L,vt),0<Nt.length&&(vt=new Uo(vt,e,null,a,G),X.push({event:vt,listeners:Nt}),ft?vt.data=ft:(ft=tt(a),ft!==null&&(vt.data=ft)))),(ft=g?De(e,a):Lt(e,a))&&(vt=mc(L,"onBeforeInput"),0<vt.length&&(Nt=new Uo("onBeforeInput","beforeinput",null,a,G),X.push({event:Nt,listeners:vt}),Nt.data=ft)),NS(X,e,L,a,G)}g_(X,i)})}function pl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function mc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ps(e,a),h!=null&&l.unshift(pl(e,h,d)),h=ps(e,i),h!=null&&l.push(pl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Ba(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function y_(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var E=a,w=E.alternate,L=E.stateNode;if(E=E.tag,w!==null&&w===l)break;E!==5&&E!==26&&E!==27||L===null||(w=L,h?(L=ps(a,d),L!=null&&v.unshift(pl(a,L,w))):h||(L=ps(a,d),L!=null&&v.push(pl(a,L,w)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var VS=/\r\n?/g,xS=/\u0000|\uFFFD/g;function __(e){return(typeof e=="string"?e:""+e).replace(VS,`
`).replace(xS,"")}function v_(e,i){return i=__(i),__(e)===i}function gc(){}function te(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||In(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&In(e,""+l);break;case"className":ai(e,"class",l);break;case"tabIndex":ai(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ai(e,a,l);break;case"style":Oo(e,l,d);break;case"data":if(i!=="object"){ai(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=la(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&te(e,i,"name",h.name,h,null),te(e,i,"formEncType",h.formEncType,h,null),te(e,i,"formMethod",h.formMethod,h,null),te(e,i,"formTarget",h.formTarget,h,null)):(te(e,i,"encType",h.encType,h,null),te(e,i,"method",h.method,h,null),te(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=la(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=gc);break;case"onScroll":l!=null&&Mt("scroll",e);break;case"onScrollEnd":l!=null&&Mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=la(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Mt("beforetoggle",e),Mt("toggle",e),gr(e,"popover",l);break;case"xlinkActuate":qe(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qe(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qe(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qe(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qe(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qe(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qe(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":gr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hh.get(a)||a,gr(e,a,l))}}function Ed(e,i,a,l,h,d){switch(a){case"style":Oo(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?In(e,l):(typeof l=="number"||typeof l=="bigint")&&In(e,""+l);break;case"onScroll":l!=null&&Mt("scroll",e);break;case"onScrollEnd":l!=null&&Mt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=gc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ia.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[Ee]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):gr(e,a,l)}}}function Qe(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",e),Mt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:te(e,i,d,v,a,null)}}h&&te(e,i,"srcSet",a.srcSet,a,null),l&&te(e,i,"src",a.src,a,null);return;case"input":Mt("invalid",e);var E=d=v=h=null,w=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":v=G;break;case"checked":w=G;break;case"defaultChecked":L=G;break;case"value":d=G;break;case"defaultValue":E=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:te(e,i,l,G,a,null)}}ds(e,d,E,w,L,v,h,!1),oa(e);return;case"select":Mt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":l=E;default:te(e,i,h,E,a,null)}i=d,a=v,e.multiple=!!l,i!=null?ki(e,!!l,i,!1):a!=null&&ki(e,!!l,a,!0);return;case"textarea":Mt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:te(e,i,v,E,a,null)}ms(e,l,h,d),oa(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:te(e,i,w,l,a,null)}return;case"dialog":Mt("beforetoggle",e),Mt("toggle",e),Mt("cancel",e),Mt("close",e);break;case"iframe":case"object":Mt("load",e);break;case"video":case"audio":for(l=0;l<gl.length;l++)Mt(gl[l],e);break;case"image":Mt("error",e),Mt("load",e);break;case"details":Mt("toggle",e);break;case"embed":case"source":case"link":Mt("error",e),Mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:te(e,i,L,l,a,null)}return;default:if(Mo(i)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&Ed(e,i,G,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&te(e,i,E,l,a,null))}function PS(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,w=null,L=null,G=null;for(j in a){var X=a[j];if(a.hasOwnProperty(j)&&X!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":w=X;default:l.hasOwnProperty(j)||te(e,i,j,null,l,X)}}for(var z in l){var j=l[z];if(X=a[z],l.hasOwnProperty(z)&&(j!=null||X!=null))switch(z){case"type":d=j;break;case"name":h=j;break;case"checked":L=j;break;case"defaultChecked":G=j;break;case"value":v=j;break;case"defaultValue":E=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:j!==X&&te(e,i,z,j,l,X)}}gn(e,v,E,w,L,G,d,h);return;case"select":j=v=E=z=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":j=w;default:l.hasOwnProperty(d)||te(e,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==w&&te(e,i,h,d,l,w)}i=E,a=v,l=j,z!=null?ki(e,!!a,z,!1):!!l!=!!a&&(i!=null?ki(e,!!a,i,!0):ki(e,!!a,a?[]:"",!1));return;case"textarea":j=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:te(e,i,E,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":j=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&te(e,i,v,h,l,d)}Jt(e,z,j);return;case"option":for(var Et in a)if(z=a[Et],a.hasOwnProperty(Et)&&z!=null&&!l.hasOwnProperty(Et))switch(Et){case"selected":e.selected=!1;break;default:te(e,i,Et,null,l,z)}for(w in l)if(z=l[w],j=a[w],l.hasOwnProperty(w)&&z!==j&&(z!=null||j!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:te(e,i,w,z,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _t in a)z=a[_t],a.hasOwnProperty(_t)&&z!=null&&!l.hasOwnProperty(_t)&&te(e,i,_t,null,l,z);for(L in l)if(z=l[L],j=a[L],l.hasOwnProperty(L)&&z!==j&&(z!=null||j!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:te(e,i,L,z,l,j)}return;default:if(Mo(i)){for(var ee in a)z=a[ee],a.hasOwnProperty(ee)&&z!==void 0&&!l.hasOwnProperty(ee)&&Ed(e,i,ee,void 0,l,z);for(G in l)z=l[G],j=a[G],!l.hasOwnProperty(G)||z===j||z===void 0&&j===void 0||Ed(e,i,G,z,l,j);return}}for(var P in a)z=a[P],a.hasOwnProperty(P)&&z!=null&&!l.hasOwnProperty(P)&&te(e,i,P,null,l,z);for(X in l)z=l[X],j=a[X],!l.hasOwnProperty(X)||z===j||z==null&&j==null||te(e,i,X,z,l,j)}var Ad=null,Sd=null;function pc(e){return e.nodeType===9?e:e.ownerDocument}function T_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function bd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wd=null;function kS(){var e=window.event;return e&&e.type==="popstate"?e===wd?!1:(wd=e,!0):(wd=null,!1)}var A_=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,S_=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof S_<"u"?function(e){return S_.resolve(null).then(e).catch(zS)}:A_;function zS(e){setTimeout(function(){throw e})}function Vr(e){return e==="head"}function b_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&yl(v.documentElement),a&2&&yl(v.body),a&4)for(a=v.head,yl(a),v=a.firstChild;v;){var E=v.nextSibling,w=v.nodeName;v[us]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(h===0){e.removeChild(d),wl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);wl(i)}function Rd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rd(a),mr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function jS(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[us])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Yn(e.nextSibling),e===null)break}return null}function BS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Yn(e.nextSibling),e===null))return null;return e}function Id(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function qS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Yn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Cd=null;function w_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function R_(e,i,a){switch(i=pc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function yl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);mr(e)}var Un=new Map,I_=new Set;function yc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var er=nt.d;nt.d={f:HS,r:FS,D:GS,C:QS,L:KS,m:YS,X:$S,S:XS,M:ZS};function HS(){var e=er.f(),i=lc();return e||i}function FS(e){var i=ri(e);i!==null&&i.tag===5&&i.type==="form"?Kp(i):er.r(e)}var qa=typeof document>"u"?null:document;function C_(e,i,a){var l=qa;if(l&&typeof i=="string"&&i){var h=Ae(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),I_.has(h)||(I_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Qe(i,"link",e),ye(i),l.head.appendChild(i)))}}function GS(e){er.D(e),C_("dns-prefetch",e,null)}function QS(e,i){er.C(e,i),C_("preconnect",e,i)}function KS(e,i,a){er.L(e,i,a);var l=qa;if(l&&e&&i){var h='link[rel="preload"][as="'+Ae(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+Ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+Ae(a.imageSizes)+'"]')):h+='[href="'+Ae(e)+'"]';var d=h;switch(i){case"style":d=Ha(e);break;case"script":d=Fa(e)}Un.has(d)||(e=T({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Un.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(_l(d))||i==="script"&&l.querySelector(vl(d))||(i=l.createElement("link"),Qe(i,"link",e),ye(i),l.head.appendChild(i)))}}function YS(e,i){er.m(e,i);var a=qa;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Ae(l)+'"][href="'+Ae(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Fa(e)}if(!Un.has(d)&&(e=T({rel:"modulepreload",href:e},i),Un.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vl(d)))return}l=a.createElement("link"),Qe(l,"link",e),ye(l),a.head.appendChild(l)}}}function XS(e,i,a){er.S(e,i,a);var l=qa;if(l&&e){var h=rn(l).hoistableStyles,d=Ha(e);i=i||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=l.querySelector(_l(d)))E.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Un.get(d))&&Nd(e,a);var w=v=l.createElement("link");ye(w),Qe(w,"link",e),w._p=new Promise(function(L,G){w.onload=L,w.onerror=G}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,_c(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function $S(e,i){er.X(e,i);var a=qa;if(a&&e){var l=rn(a).hoistableScripts,h=Fa(e),d=l.get(h);d||(d=a.querySelector(vl(h)),d||(e=T({src:e,async:!0},i),(i=Un.get(h))&&Dd(e,i),d=a.createElement("script"),ye(d),Qe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function ZS(e,i){er.M(e,i);var a=qa;if(a&&e){var l=rn(a).hoistableScripts,h=Fa(e),d=l.get(h);d||(d=a.querySelector(vl(h)),d||(e=T({src:e,async:!0,type:"module"},i),(i=Un.get(h))&&Dd(e,i),d=a.createElement("script"),ye(d),Qe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function N_(e,i,a,l){var h=(h=At.current)?yc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ha(a.href),a=rn(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ha(a.href);var d=rn(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(_l(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Un.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Un.set(e,a),d||JS(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Fa(a),a=rn(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ha(e){return'href="'+Ae(e)+'"'}function _l(e){return'link[rel="stylesheet"]['+e+"]"}function D_(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function JS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Qe(i,"link",a),ye(i),e.head.appendChild(i))}function Fa(e){return'[src="'+Ae(e)+'"]'}function vl(e){return"script[async]"+e}function O_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Ae(a.href)+'"]');if(l)return i.instance=l,ye(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ye(l),Qe(l,"style",h),_c(l,a.precedence,e),i.instance=l;case"stylesheet":h=Ha(a.href);var d=e.querySelector(_l(h));if(d)return i.state.loading|=4,i.instance=d,ye(d),d;l=D_(a),(h=Un.get(h))&&Nd(l,h),d=(e.ownerDocument||e).createElement("link"),ye(d);var v=d;return v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),Qe(d,"link",l),i.state.loading|=4,_c(d,a.precedence,e),i.instance=d;case"script":return d=Fa(a.src),(h=e.querySelector(vl(d)))?(i.instance=h,ye(h),h):(l=a,(h=Un.get(d))&&(l=T({},a),Dd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),ye(h),Qe(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,_c(l,a.precedence,e));return i.instance}function _c(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var E=l[v];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Nd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Dd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var vc=null;function M_(e,i,a){if(vc===null){var l=new Map,h=vc=new Map;h.set(a,l)}else h=vc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[us]||d[Ne]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var E=l.get(v);E?E.push(d):l.set(v,[d])}}return l}function V_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function WS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function x_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Tl=null;function tb(){}function eb(e,i,a){if(Tl===null)throw Error(s(475));var l=Tl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Ha(a.href),d=e.querySelector(_l(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Tc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,ye(d);return}d=e.ownerDocument||e,a=D_(a),(h=Un.get(h))&&Nd(a,h),d=d.createElement("link"),ye(d);var v=d;v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),Qe(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Tc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function nb(){if(Tl===null)throw Error(s(475));var e=Tl;return e.stylesheets&&e.count===0&&Od(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Od(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Tc(){if(this.count--,this.count===0){if(this.stylesheets)Od(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ec=null;function Od(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ec=new Map,i.forEach(ib,e),Ec=null,Tc.call(e))}function ib(e,i){if(!(i.state.loading&4)){var a=Ec.get(e);if(a)var l=a.get(null);else{a=new Map,Ec.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=Tc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var El={$$typeof:rt,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function rb(e,i,a,l,h,d,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.hiddenUpdates=Oi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function P_(e,i,a,l,h,d,v,E,w,L,G,X){return e=new rb(e,i,a,v,E,w,L,X),i=1,d===!0&&(i|=24),d=yn(3,null,null,i),e.current=d,d.stateNode=e,i=ff(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},pf(d),e}function k_(e){return e?(e=Ea,e):Ea}function U_(e,i,a,l,h,d){h=k_(h),l.context===null?l.context=h:l.pendingContext=h,l=Tr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Er(e,l,i),a!==null&&(An(a,e,i),Zo(a,e,i))}function L_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Md(e,i){L_(e,i),(e=e.alternate)&&L_(e,i)}function z_(e){if(e.tag===13){var i=Ta(e,67108864);i!==null&&An(i,e,67108864),Md(e,67108864)}}var Ac=!0;function sb(e,i,a,l){var h=F.T;F.T=null;var d=nt.p;try{nt.p=2,Vd(e,i,a,l)}finally{nt.p=d,F.T=h}}function ab(e,i,a,l){var h=F.T;F.T=null;var d=nt.p;try{nt.p=8,Vd(e,i,a,l)}finally{nt.p=d,F.T=h}}function Vd(e,i,a,l){if(Ac){var h=xd(l);if(h===null)Td(e,i,l,Sc,a),B_(e,l);else if(lb(h,e,i,a,l))l.stopPropagation();else if(B_(e,l),i&4&&-1<ob.indexOf(e)){for(;h!==null;){var d=ri(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Hn(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var w=1<<31-$e(v);E.entanglements[1]|=w,v&=~w}_i(d),(Xt&6)===0&&(ac=Ce()+500,ml(0))}}break;case 13:E=Ta(d,2),E!==null&&An(E,d,2),lc(),Md(d,2)}if(d=xd(l),d===null&&Td(e,i,l,Sc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Td(e,i,l,null,a)}}function xd(e){return e=Cn(e),Pd(e)}var Sc=null;function Pd(e){if(Sc=null,e=Vi(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Sc=e,null}function j_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ws()){case ni:return 2;case cr:return 8;case rs:case Lh:return 32;case ta:return 268435456;default:return 32}default:return 32}}var kd=!1,xr=null,Pr=null,kr=null,Al=new Map,Sl=new Map,Ur=[],ob="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function B_(e,i){switch(e){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":Al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(i.pointerId)}}function bl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=ri(i),i!==null&&z_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function lb(e,i,a,l,h){switch(i){case"focusin":return xr=bl(xr,e,i,a,l,h),!0;case"dragenter":return Pr=bl(Pr,e,i,a,l,h),!0;case"mouseover":return kr=bl(kr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Al.set(d,bl(Al.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Sl.set(d,bl(Sl.get(d)||null,e,i,a,l,h)),!0}return!1}function q_(e){var i=Vi(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,lu(e.priority,function(){if(a.tag===13){var l=En();l=hr(l);var h=Ta(a,l);h!==null&&An(h,a,l),Md(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=xd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ui=l,a.target.dispatchEvent(l),Ui=null}else return i=ri(a),i!==null&&z_(i),e.blockedOn=a,!1;i.shift()}return!0}function H_(e,i,a){bc(e)&&a.delete(i)}function ub(){kd=!1,xr!==null&&bc(xr)&&(xr=null),Pr!==null&&bc(Pr)&&(Pr=null),kr!==null&&bc(kr)&&(kr=null),Al.forEach(H_),Sl.forEach(H_)}function wc(e,i){e.blockedOn===i&&(e.blockedOn=null,kd||(kd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ub)))}var Rc=null;function F_(e){Rc!==e&&(Rc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Rc===e&&(Rc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Pd(l||a)===null)continue;break}var d=ri(a);d!==null&&(e.splice(i,3),i-=3,Pf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function wl(e){function i(w){return wc(w,e)}xr!==null&&wc(xr,e),Pr!==null&&wc(Pr,e),kr!==null&&wc(kr,e),Al.forEach(i),Sl.forEach(i);for(var a=0;a<Ur.length;a++){var l=Ur[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ur.length&&(a=Ur[0],a.blockedOn===null);)q_(a),a.blockedOn===null&&Ur.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[Ee]||null;if(typeof d=="function")v||F_(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[Ee]||null)E=v.formAction;else if(Pd(h)!==null)continue}else E=v.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),F_(a)}}}function Ud(e){this._internalRoot=e}Ic.prototype.render=Ud.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=En();U_(a,l,e,i,null,null)},Ic.prototype.unmount=Ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;U_(e.current,2,null,e,null,null),lc(),i[Rn]=null}};function Ic(e){this._internalRoot=e}Ic.prototype.unstable_scheduleHydration=function(e){if(e){var i=fr();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Ur.length&&i!==0&&i<Ur[a].priority;a++);Ur.splice(a,0,e),a===0&&q_(e)}};var G_=t.version;if(G_!=="19.1.1")throw Error(s(527,G_,"19.1.1"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var cb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{fe=Cc.inject(cb),Yt=Cc}catch{}}return Il.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=oy,d=ly,v=uy,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=P_(e,1,!1,null,null,a,l,h,d,v,E,null),e[Rn]=i.current,vd(e),new Ud(i)},Il.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=oy,v=ly,E=uy,w=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=P_(e,1,!0,i,a??null,l,h,d,v,E,w,L),i.context=k_(null),a=i.current,l=En(),l=hr(l),h=Tr(l),h.callback=null,Er(a,h,l),a=l,i.current.lanes=a,Mi(i,a),_i(i),e[Rn]=i.current,vd(e),new Ic(i)},Il.version="19.1.1",Il}var ev;function Tb(){if(ev)return jd.exports;ev=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),jd.exports=vb(),jd.exports}var Eb=Tb();const Ab=()=>{};var nv={};/**
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
 */const zT=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Sb=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],y=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(y>>10)),t[s++]=String.fromCharCode(56320+(y&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},jT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,y=o+2<r.length,p=y?r[o+2]:0,T=u>>2,b=(u&3)<<4|m>>4;let R=(m&15)<<2|p>>6,q=p&63;y||(q=64,f||(R=64)),s.push(n[T],n[b],n[R],n[q])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(zT(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Sb(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const p=o<r.length?n[r.charAt(o)]:64;++o;const b=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||p==null||b==null)throw new bb;const R=u<<2|m>>4;if(s.push(R),p!==64){const q=m<<4&240|p>>2;if(s.push(q),b!==64){const Y=p<<6&192|b;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class bb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wb=function(r){const t=zT(r);return jT.encodeByteArray(t,!0)},Gc=function(r){return wb(r).replace(/\./g,"")},BT=function(r){try{return jT.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Rb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ib=()=>Rb().__FIREBASE_DEFAULTS__,Cb=()=>{if(typeof process>"u"||typeof nv>"u")return;const r=nv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Nb=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&BT(r[1]);return t&&JSON.parse(t)},dh=()=>{try{return Ab()||Ib()||Cb()||Nb()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},qT=r=>dh()?.emulatorHosts?.[r],Db=r=>{const t=qT(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},HT=()=>dh()?.config,FT=r=>dh()?.[`_${r}`];/**
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
 */class Ob{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function ho(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function GT(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Mb(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Gc(JSON.stringify(n)),Gc(JSON.stringify(f)),""].join(".")}const Ml={};function Vb(){const r={prod:[],emulator:[]};for(const t of Object.keys(Ml))Ml[t]?r.emulator.push(t):r.prod.push(t);return r}function xb(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let iv=!1;function QT(r,t){if(typeof window>"u"||typeof document>"u"||!ho(window.location.host)||Ml[r]===t||Ml[r]||iv)return;Ml[r]=t;function n(R){return`__firebase__banner__${R}`}const s="__firebase__banner",u=Vb().prod.length>0;function f(){const R=document.getElementById(s);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function y(R,q){R.setAttribute("width","24"),R.setAttribute("id",q),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function p(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{iv=!0,f()},R}function T(R,q){R.setAttribute("id",q),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function b(){const R=xb(s),q=n("text"),Y=document.getElementById(q)||document.createElement("span"),et=n("learnmore"),J=document.getElementById(et)||document.createElement("a"),at=n("preprendIcon"),lt=document.getElementById(at)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const rt=R.element;m(rt),T(J,et);const mt=p();y(lt,at),rt.append(lt,Y,J,mt),document.body.appendChild(rt)}u?(Y.innerText="Preview backend disconnected.",lt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(lt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Y.innerText="Preview backend running in this workspace."),Y.setAttribute("id",q)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
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
 */function nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nn())}function kb(){const r=dh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ub(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Lb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zb(){const r=nn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function jb(){return!kb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YT(){try{return typeof indexedDB=="object"}catch{return!1}}function XT(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(n){t(n)}})}function Bb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const qb="FirebaseError";class ti extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=qb,Object.setPrototypeOf(this,ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xs.prototype.create)}}class Xs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?Hb(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new ti(o,m,s)}}function Hb(r,t){return r.replace(Fb,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const Fb=/\{\$([^}]+)}/g;function Gb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Yr(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(rv(u)&&rv(f)){if(!Yr(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function rv(r){return r!==null&&typeof r=="object"}/**
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
 */function Xl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Qb(r,t){const n=new Kb(r,t);return n.subscribe.bind(n)}class Kb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Yb(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Fd),o.error===void 0&&(o.error=Fd),o.complete===void 0&&(o.complete=Fd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yb(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Fd(){}/**
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
 */const Xb=1e3,$b=2,Zb=14400*1e3,Jb=.5;function sv(r,t=Xb,n=$b){const s=t*Math.pow(n,r),o=Math.round(Jb*s*(Math.random()-.5)*2);return Math.min(Zb,s+o)}/**
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
 */function ue(r){return r&&r._delegate?r._delegate:r}class Jn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ls="[DEFAULT]";/**
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
 */class Wb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Ob;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ew(t))try{this.getOrInitializeService({instanceIdentifier:Ls})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Ls){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ls){return this.instances.has(t)}getOptions(t=Ls){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tw(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ls){return this.component?this.component.multipleInstances?t:Ls:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tw(r){return r===Ls?void 0:r}function ew(r){return r.instantiationMode==="EAGER"}/**
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
 */class nw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Wb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Vt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Vt||(Vt={}));const iw={debug:Vt.DEBUG,verbose:Vt.VERBOSE,info:Vt.INFO,warn:Vt.WARN,error:Vt.ERROR,silent:Vt.SILENT},rw=Vt.INFO,sw={[Vt.DEBUG]:"log",[Vt.VERBOSE]:"log",[Vt.INFO]:"info",[Vt.WARN]:"warn",[Vt.ERROR]:"error"},aw=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=sw[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class mh{constructor(t){this.name=t,this._logLevel=rw,this._logHandler=aw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Vt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?iw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Vt.DEBUG,...t),this._logHandler(this,Vt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Vt.VERBOSE,...t),this._logHandler(this,Vt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Vt.INFO,...t),this._logHandler(this,Vt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Vt.WARN,...t),this._logHandler(this,Vt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Vt.ERROR,...t),this._logHandler(this,Vt.ERROR,...t)}}const ow=(r,t)=>t.some(n=>r instanceof n);let av,ov;function lw(){return av||(av=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uw(){return ov||(ov=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $T=new WeakMap,sm=new WeakMap,ZT=new WeakMap,Gd=new WeakMap,Vm=new WeakMap;function cw(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Fr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&$T.set(n,r)}).catch(()=>{}),Vm.set(t,r),t}function hw(r){if(sm.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});sm.set(r,t)}let am={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return sm.get(r);if(t==="objectStoreNames")return r.objectStoreNames||ZT.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function fw(r){am=r(am)}function dw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Qd(this),t,...n);return ZT.set(s,t.sort?t.sort():[t]),Fr(s)}:uw().includes(r)?function(...t){return r.apply(Qd(this),t),Fr($T.get(this))}:function(...t){return Fr(r.apply(Qd(this),t))}}function mw(r){return typeof r=="function"?dw(r):(r instanceof IDBTransaction&&hw(r),ow(r,lw())?new Proxy(r,am):r)}function Fr(r){if(r instanceof IDBRequest)return cw(r);if(Gd.has(r))return Gd.get(r);const t=mw(r);return t!==r&&(Gd.set(r,t),Vm.set(t,r)),t}const Qd=r=>Vm.get(r);function JT(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),m=Fr(f);return s&&f.addEventListener("upgradeneeded",y=>{s(Fr(f.result),y.oldVersion,y.newVersion,Fr(f.transaction),y)}),n&&f.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),m}const gw=["get","getKey","getAll","getAllKeys","count"],pw=["put","add","delete","clear"],Kd=new Map;function lv(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Kd.get(t))return Kd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=pw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||gw.includes(n)))return;const u=async function(f,...m){const y=this.transaction(f,o?"readwrite":"readonly");let p=y.store;return s&&(p=p.index(m.shift())),(await Promise.all([p[n](...m),o&&y.done]))[0]};return Kd.set(t,u),u}fw(r=>({...r,get:(t,n,s)=>lv(t,n)||r.get(t,n,s),has:(t,n)=>!!lv(t,n)||r.has(t,n)}));/**
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
 */class yw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_w(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _w(r){return r.getComponent()?.type==="VERSION"}const om="@firebase/app",uv="0.14.2";/**
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
 */const ar=new mh("@firebase/app"),vw="@firebase/app-compat",Tw="@firebase/analytics-compat",Ew="@firebase/analytics",Aw="@firebase/app-check-compat",Sw="@firebase/app-check",bw="@firebase/auth",ww="@firebase/auth-compat",Rw="@firebase/database",Iw="@firebase/data-connect",Cw="@firebase/database-compat",Nw="@firebase/functions",Dw="@firebase/functions-compat",Ow="@firebase/installations",Mw="@firebase/installations-compat",Vw="@firebase/messaging",xw="@firebase/messaging-compat",Pw="@firebase/performance",kw="@firebase/performance-compat",Uw="@firebase/remote-config",Lw="@firebase/remote-config-compat",zw="@firebase/storage",jw="@firebase/storage-compat",Bw="@firebase/firestore",qw="@firebase/ai",Hw="@firebase/firestore-compat",Fw="firebase",Gw="12.2.0";/**
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
 */const lm="[DEFAULT]",Qw={[om]:"fire-core",[vw]:"fire-core-compat",[Ew]:"fire-analytics",[Tw]:"fire-analytics-compat",[Sw]:"fire-app-check",[Aw]:"fire-app-check-compat",[bw]:"fire-auth",[ww]:"fire-auth-compat",[Rw]:"fire-rtdb",[Iw]:"fire-data-connect",[Cw]:"fire-rtdb-compat",[Nw]:"fire-fn",[Dw]:"fire-fn-compat",[Ow]:"fire-iid",[Mw]:"fire-iid-compat",[Vw]:"fire-fcm",[xw]:"fire-fcm-compat",[Pw]:"fire-perf",[kw]:"fire-perf-compat",[Uw]:"fire-rc",[Lw]:"fire-rc-compat",[zw]:"fire-gcs",[jw]:"fire-gcs-compat",[Bw]:"fire-fst",[Hw]:"fire-fst-compat",[qw]:"fire-vertex","fire-js":"fire-js",[Fw]:"fire-js-all"};/**
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
 */const Qc=new Map,Kw=new Map,um=new Map;function cv(r,t){try{r.container.addComponent(t)}catch(n){ar.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function Ri(r){const t=r.name;if(um.has(t))return ar.debug(`There were multiple attempts to register component ${t}.`),!1;um.set(t,r);for(const n of Qc.values())cv(n,r);for(const n of Kw.values())cv(n,r);return!0}function $s(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Xn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Yw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new Xs("app","Firebase",Yw);/**
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
 */class Xw{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
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
 */const fo=Gw;function WT(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s={name:lm,automaticDataCollectionEnabled:!0,...t},o=s.name;if(typeof o!="string"||!o)throw Gr.create("bad-app-name",{appName:String(o)});if(n||(n=HT()),!n)throw Gr.create("no-options");const u=Qc.get(o);if(u){if(Yr(n,u.options)&&Yr(s,u.config))return u;throw Gr.create("duplicate-app",{appName:o})}const f=new nw(o);for(const y of um.values())f.addComponent(y);const m=new Xw(n,s,f);return Qc.set(o,m),m}function xm(r=lm){const t=Qc.get(r);if(!t&&r===lm&&HT())return WT();if(!t)throw Gr.create("no-app",{appName:r});return t}function zn(r,t,n){let s=Qw[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${t}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ar.warn(f.join(" "));return}Ri(new Jn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const $w="firebase-heartbeat-database",Zw=1,zl="firebase-heartbeat-store";let Yd=null;function tE(){return Yd||(Yd=JT($w,Zw,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(zl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Gr.create("idb-open",{originalErrorMessage:r.message})})),Yd}async function Jw(r){try{const n=(await tE()).transaction(zl),s=await n.objectStore(zl).get(eE(r));return await n.done,s}catch(t){if(t instanceof ti)ar.warn(t.message);else{const n=Gr.create("idb-get",{originalErrorMessage:t?.message});ar.warn(n.message)}}}async function hv(r,t){try{const s=(await tE()).transaction(zl,"readwrite");await s.objectStore(zl).put(t,eE(r)),await s.done}catch(n){if(n instanceof ti)ar.warn(n.message);else{const s=Gr.create("idb-set",{originalErrorMessage:n?.message});ar.warn(s.message)}}}function eE(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Ww=1024,t1=30;class e1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new i1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>t1){const o=r1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){ar.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fv(),{heartbeatsToSend:n,unsentEntries:s}=n1(this._heartbeatsCache.heartbeats),o=Gc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return ar.warn(t),""}}}function fv(){return new Date().toISOString().substring(0,10)}function n1(r,t=Ww){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),dv(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),dv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class i1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YT()?XT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Jw(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return hv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return hv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function dv(r){return Gc(JSON.stringify({version:2,heartbeats:r})).length}function r1(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function s1(r){Ri(new Jn("platform-logger",t=>new yw(t),"PRIVATE")),Ri(new Jn("heartbeat",t=>new e1(t),"PRIVATE")),zn(om,uv,r),zn(om,uv,"esm2020"),zn("fire-js","")}s1("");var a1="firebase",o1="12.2.1";/**
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
 */zn(a1,o1,"app");var mv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qr,nE;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(x,S){function C(){}C.prototype=S.prototype,x.D=S.prototype,x.prototype=new C,x.prototype.constructor=x,x.C=function(V,D,M){for(var I=Array(arguments.length-2),Bt=2;Bt<arguments.length;Bt++)I[Bt-2]=arguments[Bt];return S.prototype[D].apply(V,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,C){C||(C=0);var V=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)V[D]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(D=0;16>D;++D)V[D]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=x.g[0],C=x.g[1],D=x.g[2];var M=x.g[3],I=S+(M^C&(D^M))+V[0]+3614090360&4294967295;S=C+(I<<7&4294967295|I>>>25),I=M+(D^S&(C^D))+V[1]+3905402710&4294967295,M=S+(I<<12&4294967295|I>>>20),I=D+(C^M&(S^C))+V[2]+606105819&4294967295,D=M+(I<<17&4294967295|I>>>15),I=C+(S^D&(M^S))+V[3]+3250441966&4294967295,C=D+(I<<22&4294967295|I>>>10),I=S+(M^C&(D^M))+V[4]+4118548399&4294967295,S=C+(I<<7&4294967295|I>>>25),I=M+(D^S&(C^D))+V[5]+1200080426&4294967295,M=S+(I<<12&4294967295|I>>>20),I=D+(C^M&(S^C))+V[6]+2821735955&4294967295,D=M+(I<<17&4294967295|I>>>15),I=C+(S^D&(M^S))+V[7]+4249261313&4294967295,C=D+(I<<22&4294967295|I>>>10),I=S+(M^C&(D^M))+V[8]+1770035416&4294967295,S=C+(I<<7&4294967295|I>>>25),I=M+(D^S&(C^D))+V[9]+2336552879&4294967295,M=S+(I<<12&4294967295|I>>>20),I=D+(C^M&(S^C))+V[10]+4294925233&4294967295,D=M+(I<<17&4294967295|I>>>15),I=C+(S^D&(M^S))+V[11]+2304563134&4294967295,C=D+(I<<22&4294967295|I>>>10),I=S+(M^C&(D^M))+V[12]+1804603682&4294967295,S=C+(I<<7&4294967295|I>>>25),I=M+(D^S&(C^D))+V[13]+4254626195&4294967295,M=S+(I<<12&4294967295|I>>>20),I=D+(C^M&(S^C))+V[14]+2792965006&4294967295,D=M+(I<<17&4294967295|I>>>15),I=C+(S^D&(M^S))+V[15]+1236535329&4294967295,C=D+(I<<22&4294967295|I>>>10),I=S+(D^M&(C^D))+V[1]+4129170786&4294967295,S=C+(I<<5&4294967295|I>>>27),I=M+(C^D&(S^C))+V[6]+3225465664&4294967295,M=S+(I<<9&4294967295|I>>>23),I=D+(S^C&(M^S))+V[11]+643717713&4294967295,D=M+(I<<14&4294967295|I>>>18),I=C+(M^S&(D^M))+V[0]+3921069994&4294967295,C=D+(I<<20&4294967295|I>>>12),I=S+(D^M&(C^D))+V[5]+3593408605&4294967295,S=C+(I<<5&4294967295|I>>>27),I=M+(C^D&(S^C))+V[10]+38016083&4294967295,M=S+(I<<9&4294967295|I>>>23),I=D+(S^C&(M^S))+V[15]+3634488961&4294967295,D=M+(I<<14&4294967295|I>>>18),I=C+(M^S&(D^M))+V[4]+3889429448&4294967295,C=D+(I<<20&4294967295|I>>>12),I=S+(D^M&(C^D))+V[9]+568446438&4294967295,S=C+(I<<5&4294967295|I>>>27),I=M+(C^D&(S^C))+V[14]+3275163606&4294967295,M=S+(I<<9&4294967295|I>>>23),I=D+(S^C&(M^S))+V[3]+4107603335&4294967295,D=M+(I<<14&4294967295|I>>>18),I=C+(M^S&(D^M))+V[8]+1163531501&4294967295,C=D+(I<<20&4294967295|I>>>12),I=S+(D^M&(C^D))+V[13]+2850285829&4294967295,S=C+(I<<5&4294967295|I>>>27),I=M+(C^D&(S^C))+V[2]+4243563512&4294967295,M=S+(I<<9&4294967295|I>>>23),I=D+(S^C&(M^S))+V[7]+1735328473&4294967295,D=M+(I<<14&4294967295|I>>>18),I=C+(M^S&(D^M))+V[12]+2368359562&4294967295,C=D+(I<<20&4294967295|I>>>12),I=S+(C^D^M)+V[5]+4294588738&4294967295,S=C+(I<<4&4294967295|I>>>28),I=M+(S^C^D)+V[8]+2272392833&4294967295,M=S+(I<<11&4294967295|I>>>21),I=D+(M^S^C)+V[11]+1839030562&4294967295,D=M+(I<<16&4294967295|I>>>16),I=C+(D^M^S)+V[14]+4259657740&4294967295,C=D+(I<<23&4294967295|I>>>9),I=S+(C^D^M)+V[1]+2763975236&4294967295,S=C+(I<<4&4294967295|I>>>28),I=M+(S^C^D)+V[4]+1272893353&4294967295,M=S+(I<<11&4294967295|I>>>21),I=D+(M^S^C)+V[7]+4139469664&4294967295,D=M+(I<<16&4294967295|I>>>16),I=C+(D^M^S)+V[10]+3200236656&4294967295,C=D+(I<<23&4294967295|I>>>9),I=S+(C^D^M)+V[13]+681279174&4294967295,S=C+(I<<4&4294967295|I>>>28),I=M+(S^C^D)+V[0]+3936430074&4294967295,M=S+(I<<11&4294967295|I>>>21),I=D+(M^S^C)+V[3]+3572445317&4294967295,D=M+(I<<16&4294967295|I>>>16),I=C+(D^M^S)+V[6]+76029189&4294967295,C=D+(I<<23&4294967295|I>>>9),I=S+(C^D^M)+V[9]+3654602809&4294967295,S=C+(I<<4&4294967295|I>>>28),I=M+(S^C^D)+V[12]+3873151461&4294967295,M=S+(I<<11&4294967295|I>>>21),I=D+(M^S^C)+V[15]+530742520&4294967295,D=M+(I<<16&4294967295|I>>>16),I=C+(D^M^S)+V[2]+3299628645&4294967295,C=D+(I<<23&4294967295|I>>>9),I=S+(D^(C|~M))+V[0]+4096336452&4294967295,S=C+(I<<6&4294967295|I>>>26),I=M+(C^(S|~D))+V[7]+1126891415&4294967295,M=S+(I<<10&4294967295|I>>>22),I=D+(S^(M|~C))+V[14]+2878612391&4294967295,D=M+(I<<15&4294967295|I>>>17),I=C+(M^(D|~S))+V[5]+4237533241&4294967295,C=D+(I<<21&4294967295|I>>>11),I=S+(D^(C|~M))+V[12]+1700485571&4294967295,S=C+(I<<6&4294967295|I>>>26),I=M+(C^(S|~D))+V[3]+2399980690&4294967295,M=S+(I<<10&4294967295|I>>>22),I=D+(S^(M|~C))+V[10]+4293915773&4294967295,D=M+(I<<15&4294967295|I>>>17),I=C+(M^(D|~S))+V[1]+2240044497&4294967295,C=D+(I<<21&4294967295|I>>>11),I=S+(D^(C|~M))+V[8]+1873313359&4294967295,S=C+(I<<6&4294967295|I>>>26),I=M+(C^(S|~D))+V[15]+4264355552&4294967295,M=S+(I<<10&4294967295|I>>>22),I=D+(S^(M|~C))+V[6]+2734768916&4294967295,D=M+(I<<15&4294967295|I>>>17),I=C+(M^(D|~S))+V[13]+1309151649&4294967295,C=D+(I<<21&4294967295|I>>>11),I=S+(D^(C|~M))+V[4]+4149444226&4294967295,S=C+(I<<6&4294967295|I>>>26),I=M+(C^(S|~D))+V[11]+3174756917&4294967295,M=S+(I<<10&4294967295|I>>>22),I=D+(S^(M|~C))+V[2]+718787259&4294967295,D=M+(I<<15&4294967295|I>>>17),I=C+(M^(D|~S))+V[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(D+(I<<21&4294967295|I>>>11))&4294967295,x.g[2]=x.g[2]+D&4294967295,x.g[3]=x.g[3]+M&4294967295}s.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var C=S-this.blockSize,V=this.B,D=this.h,M=0;M<S;){if(D==0)for(;M<=C;)o(this,x,M),M+=this.blockSize;if(typeof x=="string"){for(;M<S;)if(V[D++]=x.charCodeAt(M++),D==this.blockSize){o(this,V),D=0;break}}else for(;M<S;)if(V[D++]=x[M++],D==this.blockSize){o(this,V),D=0;break}}this.h=D,this.o+=S},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var C=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=C&255,C/=256;for(this.u(x),x=Array(16),S=C=0;4>S;++S)for(var V=0;32>V;V+=8)x[C++]=this.g[S]>>>V&255;return x};function u(x,S){var C=m;return Object.prototype.hasOwnProperty.call(C,x)?C[x]:C[x]=S(x)}function f(x,S){this.h=S;for(var C=[],V=!0,D=x.length-1;0<=D;D--){var M=x[D]|0;V&&M==S||(C[D]=M,V=!1)}this.g=C}var m={};function y(x){return-128<=x&&128>x?u(x,function(S){return new f([S|0],0>S?-1:0)}):new f([x|0],0>x?-1:0)}function p(x){if(isNaN(x)||!isFinite(x))return b;if(0>x)return J(p(-x));for(var S=[],C=1,V=0;x>=C;V++)S[V]=x/C|0,C*=4294967296;return new f(S,0)}function T(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return J(T(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=p(Math.pow(S,8)),V=b,D=0;D<x.length;D+=8){var M=Math.min(8,x.length-D),I=parseInt(x.substring(D,D+M),S);8>M?(M=p(Math.pow(S,M)),V=V.j(M).add(p(I))):(V=V.j(C),V=V.add(p(I)))}return V}var b=y(0),R=y(1),q=y(16777216);r=f.prototype,r.m=function(){if(et(this))return-J(this).m();for(var x=0,S=1,C=0;C<this.g.length;C++){var V=this.i(C);x+=(0<=V?V:4294967296+V)*S,S*=4294967296}return x},r.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(Y(this))return"0";if(et(this))return"-"+J(this).toString(x);for(var S=p(Math.pow(x,6)),C=this,V="";;){var D=mt(C,S).g;C=at(C,D.j(S));var M=((0<C.g.length?C.g[0]:C.h)>>>0).toString(x);if(C=D,Y(C))return M+V;for(;6>M.length;)M="0"+M;V=M+V}},r.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function Y(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function et(x){return x.h==-1}r.l=function(x){return x=at(this,x),et(x)?-1:Y(x)?0:1};function J(x){for(var S=x.g.length,C=[],V=0;V<S;V++)C[V]=~x.g[V];return new f(C,~x.h).add(R)}r.abs=function(){return et(this)?J(this):this},r.add=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],V=0,D=0;D<=S;D++){var M=V+(this.i(D)&65535)+(x.i(D)&65535),I=(M>>>16)+(this.i(D)>>>16)+(x.i(D)>>>16);V=I>>>16,M&=65535,I&=65535,C[D]=I<<16|M}return new f(C,C[C.length-1]&-2147483648?-1:0)};function at(x,S){return x.add(J(S))}r.j=function(x){if(Y(this)||Y(x))return b;if(et(this))return et(x)?J(this).j(J(x)):J(J(this).j(x));if(et(x))return J(this.j(J(x)));if(0>this.l(q)&&0>x.l(q))return p(this.m()*x.m());for(var S=this.g.length+x.g.length,C=[],V=0;V<2*S;V++)C[V]=0;for(V=0;V<this.g.length;V++)for(var D=0;D<x.g.length;D++){var M=this.i(V)>>>16,I=this.i(V)&65535,Bt=x.i(D)>>>16,Ft=x.i(D)&65535;C[2*V+2*D]+=I*Ft,lt(C,2*V+2*D),C[2*V+2*D+1]+=M*Ft,lt(C,2*V+2*D+1),C[2*V+2*D+1]+=I*Bt,lt(C,2*V+2*D+1),C[2*V+2*D+2]+=M*Bt,lt(C,2*V+2*D+2)}for(V=0;V<S;V++)C[V]=C[2*V+1]<<16|C[2*V];for(V=S;V<2*S;V++)C[V]=0;return new f(C,0)};function lt(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function rt(x,S){this.g=x,this.h=S}function mt(x,S){if(Y(S))throw Error("division by zero");if(Y(x))return new rt(b,b);if(et(x))return S=mt(J(x),S),new rt(J(S.g),J(S.h));if(et(S))return S=mt(x,J(S)),new rt(J(S.g),S.h);if(30<x.g.length){if(et(x)||et(S))throw Error("slowDivide_ only works with positive integers.");for(var C=R,V=S;0>=V.l(x);)C=ht(C),V=ht(V);var D=Dt(C,1),M=Dt(V,1);for(V=Dt(V,2),C=Dt(C,2);!Y(V);){var I=M.add(V);0>=I.l(x)&&(D=D.add(C),M=I),V=Dt(V,1),C=Dt(C,1)}return S=at(x,D.j(S)),new rt(D,S)}for(D=b;0<=x.l(S);){for(C=Math.max(1,Math.floor(x.m()/S.m())),V=Math.ceil(Math.log(C)/Math.LN2),V=48>=V?1:Math.pow(2,V-48),M=p(C),I=M.j(S);et(I)||0<I.l(x);)C-=V,M=p(C),I=M.j(S);Y(M)&&(M=R),D=D.add(M),x=at(x,I)}return new rt(D,x)}r.A=function(x){return mt(this,x).h},r.and=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],V=0;V<S;V++)C[V]=this.i(V)&x.i(V);return new f(C,this.h&x.h)},r.or=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],V=0;V<S;V++)C[V]=this.i(V)|x.i(V);return new f(C,this.h|x.h)},r.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),C=[],V=0;V<S;V++)C[V]=this.i(V)^x.i(V);return new f(C,this.h^x.h)};function ht(x){for(var S=x.g.length+1,C=[],V=0;V<S;V++)C[V]=x.i(V)<<1|x.i(V-1)>>>31;return new f(C,x.h)}function Dt(x,S){var C=S>>5;S%=32;for(var V=x.g.length-C,D=[],M=0;M<V;M++)D[M]=0<S?x.i(M+C)>>>S|x.i(M+C+1)<<32-S:x.i(M+C);return new f(D,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,nE=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=p,f.fromString=T,Qr=f}).apply(typeof mv<"u"?mv:typeof self<"u"?self:typeof window<"u"?window:{});var Nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iE,Cl,rE,Pc,cm,sE,aE,oE;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nc=="object"&&Nc];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)t:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var k=c[A];if(!(k in _))break t;_=_[k]}c=c[c.length-1],A=_[c],g=g(A),g!=A&&g!=null&&t(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,A=!1,k={next:function(){if(!A&&_<c.length){var H=_++;return{value:g(H,c[H]),done:!1}}return A=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function y(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function p(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function T(c,g,_){return c.call.apply(c.bind,arguments)}function b(c,g,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,A),c.apply(g,k)}}return function(){return c.apply(g,arguments)}}function R(c,g,_){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:b,R.apply(null,arguments)}function q(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function Y(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,k,H){for(var tt=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)tt[Ut-2]=arguments[Ut];return g.prototype[k].apply(A,tt)}}function et(c){const g=c.length;if(0<g){const _=Array(g);for(let A=0;A<g;A++)_[A]=c[A];return _}return[]}function J(c,g){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(y(A)){const k=c.length||0,H=A.length||0;c.length=k+H;for(let tt=0;tt<H;tt++)c[k+tt]=A[tt]}else c.push(A)}}class at{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function lt(c){return/^[\s\xa0]*$/.test(c)}function rt(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function mt(c){return mt[" "](c),c}mt[" "]=function(){};var ht=rt().indexOf("Gecko")!=-1&&!(rt().toLowerCase().indexOf("webkit")!=-1&&rt().indexOf("Edge")==-1)&&!(rt().indexOf("Trident")!=-1||rt().indexOf("MSIE")!=-1)&&rt().indexOf("Edge")==-1;function Dt(c,g,_){for(const A in c)g.call(_,c[A],A,c)}function x(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function S(c){const g={};for(const _ in c)g[_]=c[_];return g}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(c,g){let _,A;for(let k=1;k<arguments.length;k++){A=arguments[k];for(_ in A)c[_]=A[_];for(let H=0;H<C.length;H++)_=C[H],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function D(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function M(c){m.setTimeout(()=>{throw c},0)}function I(){var c=kt;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class Bt{constructor(){this.h=this.g=null}add(g,_){const A=Ft.get();A.set(g,_),this.h?this.h.next=A:this.g=A,this.h=A}}var Ft=new at(()=>new F,c=>c.reset());class F{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,ct=!1,kt=new Bt,N=()=>{const c=m.Promise.resolve(void 0);nt=()=>{c.then(Z)}};var Z=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(_){M(_)}var g=Ft;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ct=!1};function it(){this.s=this.s,this.C=this.C}it.prototype.s=!1,it.prototype.ma=function(){this.s||(this.s=!0,this.N())},it.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var gt=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c})();function Rt(c,g){if(W.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(ht){t:{try{mt(g.nodeName);var k=!0;break t}catch{}k=!1}k||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:At[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Rt.aa.h.call(this)}}Y(Rt,W);var At={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ge="closure_listenable_"+(1e6*Math.random()|0),Zt=0;function wn(c,g,_,A,k){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!A,this.ha=k,this.key=++Zt,this.da=this.fa=!1}function ei(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function qn(c){this.src=c,this.g={},this.h=0}qn.prototype.add=function(c,g,_,A,k){var H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);var tt=yt(c,g,A,k);return-1<tt?(g=c[tt],_||(g.fa=!1)):(g=new wn(g,this.src,H,!!A,k),g.fa=_,c.push(g)),g};function Di(c,g){var _=g.type;if(_ in c.g){var A=c.g[_],k=Array.prototype.indexOf.call(A,g,void 0),H;(H=0<=k)&&Array.prototype.splice.call(A,k,1),H&&(ei(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function yt(c,g,_,A){for(var k=0;k<c.length;++k){var H=c[k];if(!H.da&&H.listener==g&&H.capture==!!_&&H.ha==A)return k}return-1}var Kt="closure_lm_"+(1e6*Math.random()|0),Pe={};function pe(c,g,_,A,k){if(Array.isArray(g)){for(var H=0;H<g.length;H++)pe(c,g[H],_,A,k);return null}return _=au(_),c&&c[ge]?c.K(g,_,p(A)?!!A.capture:!1,k):Ce(c,g,_,!1,A,k)}function Ce(c,g,_,A,k,H){if(!g)throw Error("Invalid event type");var tt=p(k)?!!k.capture:!!k,Ut=ta(c);if(Ut||(c[Kt]=Ut=new qn(c)),_=Ut.add(g,_,A,tt,H),_.proxy)return _;if(A=Ws(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)gt||(k=tt),k===void 0&&(k=!1),c.addEventListener(g.toString(),A,k);else if(c.attachEvent)c.attachEvent(rs(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ws(){function c(_){return g.call(c.src,c.listener,_)}const g=Lh;return c}function ni(c,g,_,A,k){if(Array.isArray(g))for(var H=0;H<g.length;H++)ni(c,g[H],_,A,k);else A=p(A)?!!A.capture:!!A,_=au(_),c&&c[ge]?(c=c.i,g=String(g).toString(),g in c.g&&(H=c.g[g],_=yt(H,_,A,k),-1<_&&(ei(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete c.g[g],c.h--)))):c&&(c=ta(c))&&(g=c.g[g.toString()],c=-1,g&&(c=yt(g,_,A,k)),(_=-1<c?g[c]:null)&&cr(_))}function cr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[ge])Di(g.i,c);else{var _=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(_,A,c.capture):g.detachEvent?g.detachEvent(rs(_),A):g.addListener&&g.removeListener&&g.removeListener(A),(_=ta(g))?(Di(_,c),_.h==0&&(_.src=null,g[Kt]=null)):ei(c)}}}function rs(c){return c in Pe?Pe[c]:Pe[c]="on"+c}function Lh(c,g){if(c.da)c=!0;else{g=new Rt(g,this);var _=c.listener,A=c.ha||c.src;c.fa&&cr(c),c=_.call(A,g)}return c}function ta(c){return c=c[Kt],c instanceof qn?c:null}var To="__closure_events_fn_"+(1e9*Math.random()>>>0);function au(c){return typeof c=="function"?c:(c[To]||(c[To]=function(g){return c.handleEvent(g)}),c[To])}function fe(){it.call(this),this.i=new qn(this),this.M=this,this.F=null}Y(fe,it),fe.prototype[ge]=!0,fe.prototype.removeEventListener=function(c,g,_,A){ni(this,c,g,_,A)};function Yt(c,g){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new W(g,c);else if(g instanceof W)g.target=g.target||c;else{var k=g;g=new W(A,c),V(g,k)}if(k=!0,_)for(var H=_.length-1;0<=H;H--){var tt=g.g=_[H];k=mn(tt,A,!0,g)&&k}if(tt=g.g=c,k=mn(tt,A,!0,g)&&k,k=mn(tt,A,!1,g)&&k,_)for(H=0;H<_.length;H++)tt=g.g=_[H],k=mn(tt,A,!1,g)&&k}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],A=0;A<_.length;A++)ei(_[A]);delete c.g[g],c.h--}}this.F=null},fe.prototype.K=function(c,g,_,A){return this.i.add(String(c),g,!1,_,A)},fe.prototype.L=function(c,g,_,A){return this.i.add(String(c),g,!0,_,A)};function mn(c,g,_,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var k=!0,H=0;H<g.length;++H){var tt=g[H];if(tt&&!tt.da&&tt.capture==_){var Ut=tt.listener,De=tt.ha||tt.src;tt.fa&&Di(c.i,tt),k=Ut.call(De,A)!==!1&&k}}return k&&!A.defaultPrevented}function $e(c,g,_){if(typeof c=="function")_&&(c=R(c,_));else if(c&&typeof c.handleEvent=="function")c=R(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function ou(c){c.g=$e(()=>{c.g=null,c.i&&(c.i=!1,ou(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class zh extends it{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:ou(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ss(c){it.call(this),this.h=c,this.g={}}Y(ss,it);var as=[];function os(c){Dt(c.g,function(g,_){this.g.hasOwnProperty(_)&&cr(g)},c),c.g={}}ss.prototype.N=function(){ss.aa.N.call(this),os(this)},ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hn=m.JSON.stringify,ea=m.JSON.parse,ls=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Eo(){}Eo.prototype.h=null;function Ao(c){return c.h||(c.h=c.i())}function So(){}var Oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mi(){W.call(this,"d")}Y(Mi,W);function bo(){W.call(this,"c")}Y(bo,W);var ii={},wo=null;function hr(){return wo=wo||new fe}ii.La="serverreachability";function na(c){W.call(this,ii.La,c)}Y(na,W);function fr(c){const g=hr();Yt(g,new na(g))}ii.STAT_EVENT="statevent";function lu(c,g){W.call(this,ii.STAT_EVENT,c),this.stat=g}Y(lu,W);function ae(c){const g=hr();Yt(g,new lu(g,c))}ii.Ma="timingevent";function Ne(c,g){W.call(this,ii.Ma,c),this.size=g}Y(Ne,W);function Ee(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function Rn(){this.g=!0}Rn.prototype.xa=function(){this.g=!1};function Ro(c,g,_,A,k,H){c.info(function(){if(c.g)if(H)for(var tt="",Ut=H.split("&"),De=0;De<Ut.length;De++){var Lt=Ut[De].split("=");if(1<Lt.length){var Ue=Lt[0];Lt=Lt[1];var Oe=Ue.split("_");tt=2<=Oe.length&&Oe[1]=="type"?tt+(Ue+"="+Lt+"&"):tt+(Ue+"=redacted&")}}else tt=null;else tt=H;return"XMLHTTP REQ ("+A+") [attempt "+k+"]: "+g+`
`+_+`
`+tt})}function jh(c,g,_,A,k,H,tt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+k+"]: "+g+`
`+_+`
`+H+" "+tt})}function dr(c,g,_,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+us(c,_)+(A?" "+A:"")})}function uu(c,g){c.info(function(){return"TIMEOUT: "+g})}Rn.prototype.info=function(){};function us(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var k=A[1];if(Array.isArray(k)&&!(1>k.length)){var H=k[0];if(H!="noop"&&H!="stop"&&H!="close")for(var tt=1;tt<k.length;tt++)k[tt]=""}}}}return Hn(_)}catch{return g}}var mr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ri;function si(){}Y(si,Eo),si.prototype.g=function(){return new XMLHttpRequest},si.prototype.i=function(){return{}},ri=new si;function rn(c,g,_,A){this.j=c,this.i=g,this.l=_,this.R=A||1,this.U=new ss(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ye}function ye(){this.i=null,this.g="",this.h=!1}var Io={},ia={};function Fn(c,g,_){c.L=1,c.v=ms(gn(g)),c.m=_,c.P=!0,xi(c,null)}function xi(c,g){c.F=Date.now(),cs(c),c.A=gn(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Vo(_.i,"t",A),c.C=0,_=c.j.J,c.h=new ye,c.g=wu(c.j,_?g:null,!c.m),0<c.O&&(c.M=new zh(R(c.Y,c,c.g),c.O)),g=c.U,_=c.g,A=c.ca;var k="readystatechange";Array.isArray(k)||(k&&(as[0]=k.toString()),k=as);for(var H=0;H<k.length;H++){var tt=pe(_,k[H],A||g.handleEvent,!1,g.h||g);if(!tt)break;g.g[tt.key]=tt}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),fr(),Ro(c.i,c.u,c.A,c.l,c.R,c.m)}rn.prototype.ca=function(c){c=c.target;const g=this.M;g&&Dn(c)==3?g.j():this.Y(c)},rn.prototype.Y=function(c){try{if(c==this.g)t:{const Oe=Dn(this.g);var g=this.g.Ba();const qi=this.g.Z();if(!(3>Oe)&&(Oe!=3||this.g&&(this.h.h||this.g.oa()||yu(this.g)))){this.J||Oe!=4||g==7||(g==8||0>=qi?fr(3):fr(2)),gr(this);var _=this.g.Z();this.X=_;e:if(cu(this)){var A=yu(this.g);c="";var k=A.length,H=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qe(this),ai(this);var tt="";break e}this.h.i=new m.TextDecoder}for(g=0;g<k;g++)this.h.h=!0,c+=this.h.i.decode(A[g],{stream:!(H&&g==k-1)});A.length=0,this.h.g+=c,this.C=0,tt=this.h.g}else tt=this.g.oa();if(this.o=_==200,jh(this.i,this.u,this.A,this.l,this.R,Oe,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Ut,De=this.g;if((Ut=De.g?De.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!lt(Ut)){var Lt=Ut;break e}}Lt=null}if(_=Lt)dr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hs(this,_);else{this.o=!1,this.s=3,ae(12),qe(this),ai(this);break t}}if(this.P){_=!0;let He;for(;!this.J&&this.C<tt.length;)if(He=hu(this,tt),He==ia){Oe==4&&(this.s=4,ae(14),_=!1),dr(this.i,this.l,null,"[Incomplete Response]");break}else if(He==Io){this.s=4,ae(15),dr(this.i,this.l,tt,"[Invalid Chunk]"),_=!1;break}else dr(this.i,this.l,He,null),hs(this,He);if(cu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Oe!=4||tt.length!=0||this.h.h||(this.s=1,ae(16),_=!1),this.o=this.o&&_,!_)dr(this.i,this.l,tt,"[Invalid Chunked Response]"),qe(this),ai(this);else if(0<tt.length&&!this.W){this.W=!0;var Ue=this.j;Ue.g==this&&Ue.ba&&!Ue.M&&(Ue.j.info("Great, no buffering proxy detected. Bytes received: "+tt.length),As(Ue),Ue.M=!0,ae(11))}}else dr(this.i,this.l,tt,null),hs(this,tt);Oe==4&&qe(this),this.o&&!this.J&&(Oe==4?Au(this.j,this):(this.o=!1,cs(this)))}else Gh(this.g),_==400&&0<tt.indexOf("Unknown SID")?(this.s=3,ae(12)):(this.s=0,ae(13)),qe(this),ai(this)}}}catch{}finally{}};function cu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function hu(c,g){var _=c.C,A=g.indexOf(`
`,_);return A==-1?ia:(_=Number(g.substring(_,A)),isNaN(_)?Io:(A+=1,A+_>g.length?ia:(g=g.slice(A,A+_),c.C=A+_,g)))}rn.prototype.cancel=function(){this.J=!0,qe(this)};function cs(c){c.S=Date.now()+c.I,fu(c,c.I)}function fu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Ee(R(c.ba,c),g)}function gr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}rn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(uu(this.i,this.A),this.L!=2&&(fr(),ae(17)),qe(this),this.s=2,ai(this)):fu(this,this.S-c)};function ai(c){c.j.G==0||c.J||Au(c.j,c)}function qe(c){gr(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,os(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function hs(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||Co(_.h,c))){if(!c.K&&Co(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var k=A;if(k[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)ga(_),da(_);else break t;Lo(_),ae(18)}}else _.za=k[1],0<_.za-_.T&&37500>k[2]&&_.F&&_.v==0&&!_.C&&(_.C=Ee(R(_.Za,_),6e3));if(1>=sa(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Bi(_,11)}else if((c.K||_.g==c)&&ga(_),!lt(g))for(k=_.Da.g.parse(g),g=0;g<k.length;g++){let Lt=k[g];if(_.T=Lt[0],Lt=Lt[1],_.G==2)if(Lt[0]=="c"){_.K=Lt[1],_.ia=Lt[2];const Ue=Lt[3];Ue!=null&&(_.la=Ue,_.j.info("VER="+_.la));const Oe=Lt[4];Oe!=null&&(_.Aa=Oe,_.j.info("SVER="+_.Aa));const qi=Lt[5];qi!=null&&typeof qi=="number"&&0<qi&&(A=1.5*qi,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const He=c.g;if(He){const di=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(di){var H=A.h;H.g||di.indexOf("spdy")==-1&&di.indexOf("quic")==-1&&di.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(aa(H,H.h),H.h=null))}if(A.D){const jo=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;jo&&(A.ya=jo,Jt(A.I,A.D,jo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var tt=c;if(A.qa=bu(A,A.J?A.ia:null,A.W),tt.K){sn(A.h,tt);var Ut=tt,De=A.L;De&&(Ut.I=De),Ut.B&&(gr(Ut),cs(Ut)),A.g=tt}else Tu(A);0<_.i.length&&ma(_)}else Lt[0]!="stop"&&Lt[0]!="close"||Bi(_,7);else _.G==3&&(Lt[0]=="stop"||Lt[0]=="close"?Lt[0]=="stop"?Bi(_,7):ko(_):Lt[0]!="noop"&&_.l&&_.l.ta(Lt),_.v=0)}}fr(4)}catch{}}var du=class{constructor(c,g){this.g=c,this.map=g}};function Pi(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ra(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function sa(c){return c.h?1:c.g?c.g.size:0}function Co(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function aa(c,g){c.g?c.g.add(g):c.h=g}function sn(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Pi.prototype.cancel=function(){if(this.i=No(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function No(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return et(c.i)}function Bh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(y(c)){for(var g=[],_=c.length,A=0;A<_;A++)g.push(c[A]);return g}g=[],_=0;for(A in c)g[_++]=c[A];return g}function oa(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(y(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const A in c)g[_++]=A;return g}}}function Do(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(y(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=oa(c),A=Bh(c),k=A.length,H=0;H<k;H++)g.call(void 0,A[H],_&&_[H],c)}var fs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qh(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),k=null;if(0<=A){var H=c[_].substring(0,A);k=c[_].substring(A+1)}else H=c[_];g(H,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Ae(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Ae){this.h=c.h,ds(this,c.j),this.o=c.o,this.g=c.g,pr(this,c.s),this.l=c.l;var g=c.i,_=new Ui;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),ki(this,_),this.m=c.m}else c&&(g=String(c).match(fs))?(this.h=!1,ds(this,g[1]||"",!0),this.o=In(g[2]||""),this.g=In(g[3]||"",!0),pr(this,g[4]),this.l=In(g[5]||"",!0),ki(this,g[6]||"",!0),this.m=In(g[7]||"")):(this.h=!1,this.i=new Ui(null,this.h))}Ae.prototype.toString=function(){var c=[],g=this.j;g&&c.push(gs(g,Oo,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(gs(g,Oo,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(gs(_,_.charAt(0)=="/"?Hh:Mo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",gs(_,la)),c.join("")};function gn(c){return new Ae(c)}function ds(c,g,_){c.j=_?In(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function pr(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function ki(c,g,_){g instanceof Ui?(c.i=g,gu(c.i,c.h)):(_||(g=gs(g,Fh)),c.i=new Ui(g,c.h))}function Jt(c,g,_){c.i.set(g,_)}function ms(c){return Jt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function In(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function gs(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,mu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function mu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Oo=/[#\/\?@]/g,Mo=/[#\?:]/g,Hh=/[#\?]/g,Fh=/[#\?@]/g,la=/#/g;function Ui(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Cn(c){c.g||(c.g=new Map,c.h=0,c.i&&qh(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=Ui.prototype,r.add=function(c,g){Cn(this),this.i=null,c=oi(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function Li(c,g){Cn(c),g=oi(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function zi(c,g){return Cn(c),g=oi(c,g),c.g.has(g)}r.forEach=function(c,g){Cn(this),this.g.forEach(function(_,A){_.forEach(function(k){c.call(g,k,A,this)},this)},this)},r.na=function(){Cn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let A=0;A<g.length;A++){const k=c[A];for(let H=0;H<k.length;H++)_.push(g[A])}return _},r.V=function(c){Cn(this);let g=[];if(typeof c=="string")zi(this,c)&&(g=g.concat(this.g.get(oi(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},r.set=function(c,g){return Cn(this),this.i=null,c=oi(this,c),zi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Vo(c,g,_){Li(c,g),0<_.length&&(c.i=null,c.g.set(oi(c,g),et(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var A=g[_];const H=encodeURIComponent(String(A)),tt=this.V(A);for(A=0;A<tt.length;A++){var k=H;tt[A]!==""&&(k+="="+encodeURIComponent(String(tt[A]))),c.push(k)}}return this.i=c.join("&")};function oi(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function gu(c,g){g&&!c.j&&(Cn(c),c.i=null,c.g.forEach(function(_,A){var k=A.toLowerCase();A!=k&&(Li(this,A),Vo(this,k,_))},c)),c.j=g}function ps(c,g){const _=new Rn;if(m.Image){const A=new Image;A.onload=q(Nn,_,"TestLoadImage: loaded",!0,g,A),A.onerror=q(Nn,_,"TestLoadImage: error",!1,g,A),A.onabort=q(Nn,_,"TestLoadImage: abort",!1,g,A),A.ontimeout=q(Nn,_,"TestLoadImage: timeout",!1,g,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function Gn(c,g){const _=new Rn,A=new AbortController,k=setTimeout(()=>{A.abort(),Nn(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(H=>{clearTimeout(k),H.ok?Nn(_,"TestPingServer: ok",!0,g):Nn(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(k),Nn(_,"TestPingServer: error",!1,g)})}function Nn(c,g,_,A,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),A(_)}catch{}}function ys(){this.g=new ls}function li(c,g,_){const A=_||"";try{Do(c,function(k,H){let tt=k;p(k)&&(tt=Hn(k)),g.push(A+H+"="+encodeURIComponent(tt))})}catch(k){throw g.push(A+"type="+encodeURIComponent("_badmap")),k}}function yr(c){this.l=c.Ub||null,this.j=c.eb||!1}Y(yr,Eo),yr.prototype.g=function(){return new ji(this.l,this.j)},yr.prototype.i=(function(c){return function(){return c}})({});function ji(c,g){fe.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Y(ji,fe),r=ji.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,ci(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ui(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function xo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?ui(this):ci(this),this.readyState==3&&xo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ui(this))},r.Qa=function(c){this.g&&(this.response=c,ui(this))},r.ga=function(){this.g&&ui(this)};function ui(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ci(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function ci(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Po(c){let g="";return Dt(c,function(_,A){g+=A,g+=":",g+=_,g+=`\r
`}),g}function ke(c,g,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=Po(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Jt(c,g,_))}function Gt(c){fe.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Y(Gt,fe);var ua=/^https?$/i,_s=["POST","PUT"];r=Gt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ri.g(),this.v=this.o?Ao(this.o):Ao(ri),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){pu(this,H);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var k in A)_.set(k,A[k]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const H of A.keys())_.set(H,A.get(H));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),k=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(_s,g,void 0))||A||k||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,tt]of _)this.g.setRequestHeader(H,tt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vs(this),this.u=!0,this.g.send(c),this.u=!1}catch(H){pu(this,H)}};function pu(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,ca(c),hi(c)}function ca(c){c.A||(c.A=!0,Yt(c,"complete"),Yt(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Yt(this,"complete"),Yt(this,"abort"),hi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hi(this,!0)),Gt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ha(this):this.bb())},r.bb=function(){ha(this)};function ha(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Dn(c)!=4||c.Z()!=2)){if(c.u&&Dn(c)==4)$e(c.Ea,0,c);else if(Yt(c,"readystatechange"),Dn(c)==4){c.h=!1;try{const tt=c.Z();t:switch(tt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var _;if(!(_=g)){var A;if(A=tt===0){var k=String(c.D).match(fs)[1]||null;!k&&m.self&&m.self.location&&(k=m.self.location.protocol.slice(0,-1)),A=!ua.test(k?k.toLowerCase():"")}_=A}if(_)Yt(c,"complete"),Yt(c,"success");else{c.m=6;try{var H=2<Dn(c)?c.g.statusText:""}catch{H=""}c.l=H+" ["+c.Z()+"]",ca(c)}}finally{hi(c)}}}}function hi(c,g){if(c.g){vs(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Yt(c,"ready");try{_.onreadystatechange=A}catch{}}}function vs(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Dn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),ea(g)}};function yu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Gh(c){const g={};c=(c.g&&2<=Dn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(lt(c[A]))continue;var _=D(c[A]);const k=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=g[k]||[];g[k]=H,H.push(_)}x(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ts(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function fa(c){this.Aa=0,this.i=[],this.j=new Rn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ts("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ts("baseRetryDelayMs",5e3,c),this.cb=Ts("retryDelaySeedMs",1e4,c),this.Wa=Ts("forwardChannelMaxRetries",2,c),this.wa=Ts("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Pi(c&&c.concurrentRequestLimit),this.Da=new ys,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=fa.prototype,r.la=8,r.G=1,r.connect=function(c,g,_,A){ae(0),this.W=c,this.H=g||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=bu(this,null,this.W),ma(this)};function ko(c){if(_u(c),c.G==3){var g=c.U++,_=gn(c.I);if(Jt(_,"SID",c.K),Jt(_,"RID",g),Jt(_,"TYPE","terminate"),Es(c,_),g=new rn(c,c.j,g),g.L=2,g.v=ms(gn(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=wu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),cs(g)}Su(c)}function da(c){c.g&&(As(c),c.g.cancel(),c.g=null)}function _u(c){da(c),c.u&&(m.clearTimeout(c.u),c.u=null),ga(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ma(c){if(!ra(c.h)&&!c.s){c.s=!0;var g=c.Ga;nt||N(),ct||(nt(),ct=!0),kt.add(g,c),c.B=0}}function Qh(c,g){return sa(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Ee(R(c.Ga,c,g),zo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const k=new rn(this,this.j,c);let H=this.o;if(this.S&&(H?(H=S(H),V(H,this.S)):H=this.S),this.m!==null||this.O||(k.H=H,H=null),this.P)t:{for(var g=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=_;break t}if(g===4096||_===this.i.length-1){g=_+1;break t}}g=1e3}else g=1e3;g=vu(this,k,g),_=gn(this.I),Jt(_,"RID",c),Jt(_,"CVER",22),this.D&&Jt(_,"X-HTTP-Session-Id",this.D),Es(this,_),H&&(this.O?g="headers="+encodeURIComponent(String(Po(H)))+"&"+g:this.m&&ke(_,this.m,H)),aa(this.h,k),this.Ua&&Jt(_,"TYPE","init"),this.P?(Jt(_,"$req",g),Jt(_,"SID","null"),k.T=!0,Fn(k,_,null)):Fn(k,_,g),this.G=2}}else this.G==3&&(c?Uo(this,c):this.i.length==0||ra(this.h)||Uo(this))};function Uo(c,g){var _;g?_=g.l:_=c.U++;const A=gn(c.I);Jt(A,"SID",c.K),Jt(A,"RID",_),Jt(A,"AID",c.T),Es(c,A),c.m&&c.o&&ke(A,c.m,c.o),_=new rn(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=vu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),aa(c.h,_),Fn(_,A,g)}function Es(c,g){c.H&&Dt(c.H,function(_,A){Jt(g,A,_)}),c.l&&Do({},function(_,A){Jt(g,A,_)})}function vu(c,g,_){_=Math.min(c.i.length,_);var A=c.l?R(c.l.Na,c.l,c):null;t:{var k=c.i;let H=-1;for(;;){const tt=["count="+_];H==-1?0<_?(H=k[0].g,tt.push("ofs="+H)):H=0:tt.push("ofs="+H);let Ut=!0;for(let De=0;De<_;De++){let Lt=k[De].g;const Ue=k[De].map;if(Lt-=H,0>Lt)H=Math.max(0,k[De].g-100),Ut=!1;else try{li(Ue,tt,"req"+Lt+"_")}catch{A&&A(Ue)}}if(Ut){A=tt.join("&");break t}}}return c=c.i.splice(0,_),g.D=c,A}function Tu(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;nt||N(),ct||(nt(),ct=!0),kt.add(g,c),c.v=0}}function Lo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Ee(R(c.Fa,c),zo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Eu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Ee(R(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ae(10),da(this),Eu(this))};function As(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Eu(c){c.g=new rn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=gn(c.qa);Jt(g,"RID","rpc"),Jt(g,"SID",c.K),Jt(g,"AID",c.T),Jt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Jt(g,"TO",c.ja),Jt(g,"TYPE","xmlhttp"),Es(c,g),c.m&&c.o&&ke(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=ms(gn(g)),_.m=null,_.P=!0,xi(_,c)}r.Za=function(){this.C!=null&&(this.C=null,da(this),Lo(this),ae(19))};function ga(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Au(c,g){var _=null;if(c.g==g){ga(c),As(c),c.g=null;var A=2}else if(Co(c.h,g))_=g.D,sn(c.h,g),A=1;else return;if(c.G!=0){if(g.o)if(A==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var k=c.B;A=hr(),Yt(A,new Ne(A,_)),ma(c)}else Tu(c);else if(k=g.s,k==3||k==0&&0<g.X||!(A==1&&Qh(c,g)||A==2&&Lo(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),k){case 1:Bi(c,5);break;case 4:Bi(c,10);break;case 3:Bi(c,6);break;default:Bi(c,2)}}}function zo(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Bi(c,g){if(c.j.info("Error code "+g),g==2){var _=R(c.fb,c),A=c.Xa;const k=!A;A=new Ae(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||ds(A,"https"),ms(A),k?ps(A.toString(),_):Gn(A.toString(),_)}else ae(2);c.G=0,c.l&&c.l.sa(g),Su(c),_u(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))};function Su(c){if(c.G=0,c.ka=[],c.l){const g=No(c.h);(g.length!=0||c.i.length!=0)&&(J(c.ka,g),J(c.ka,c.i),c.h.i.length=0,et(c.i),c.i.length=0),c.l.ra()}}function bu(c,g,_){var A=_ instanceof Ae?gn(_):new Ae(_);if(A.g!="")g&&(A.g=g+"."+A.g),pr(A,A.s);else{var k=m.location;A=k.protocol,g=g?g+"."+k.hostname:k.hostname,k=+k.port;var H=new Ae(null);A&&ds(H,A),g&&(H.g=g),k&&pr(H,k),_&&(H.l=_),A=H}return _=c.D,g=c.ya,_&&g&&Jt(A,_,g),Jt(A,"VER",c.la),Es(c,A),A}function wu(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new Gt(new yr({eb:_})):new Gt(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ru(){}r=Ru.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function pa(){}pa.prototype.g=function(c,g){return new an(c,g)};function an(c,g){fe.call(this),this.g=new fa(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!lt(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!lt(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new fi(this)}Y(an,fe),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){ko(this.g)},an.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Hn(c),c=_);g.i.push(new du(g.Ya++,c)),g.G==3&&ma(g)},an.prototype.N=function(){this.g.l=null,delete this.j,ko(this.g),delete this.g,an.aa.N.call(this)};function Iu(c){Mi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){t:{for(const _ in g){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}Y(Iu,Mi);function Cu(){bo.call(this),this.status=1}Y(Cu,bo);function fi(c){this.g=c}Y(fi,Ru),fi.prototype.ua=function(){Yt(this.g,"a")},fi.prototype.ta=function(c){Yt(this.g,new Iu(c))},fi.prototype.sa=function(c){Yt(this.g,new Cu)},fi.prototype.ra=function(){Yt(this.g,"b")},pa.prototype.createWebChannel=pa.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,oE=function(){return new pa},aE=function(){return hr()},sE=ii,cm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mr.NO_ERROR=0,mr.TIMEOUT=8,mr.HTTP_ERROR=6,Pc=mr,Vi.COMPLETE="complete",rE=Vi,So.EventType=Oi,Oi.OPEN="a",Oi.CLOSE="b",Oi.ERROR="c",Oi.MESSAGE="d",fe.prototype.listen=fe.prototype.K,Cl=So,Gt.prototype.listenOnce=Gt.prototype.L,Gt.prototype.getLastError=Gt.prototype.Ka,Gt.prototype.getLastErrorCode=Gt.prototype.Ba,Gt.prototype.getStatus=Gt.prototype.Z,Gt.prototype.getResponseJson=Gt.prototype.Oa,Gt.prototype.getResponseText=Gt.prototype.oa,Gt.prototype.send=Gt.prototype.ea,Gt.prototype.setWithCredentials=Gt.prototype.Ha,iE=Gt}).apply(typeof Nc<"u"?Nc:typeof self<"u"?self:typeof window<"u"?window:{});const gv="@firebase/firestore",pv="4.9.1";/**
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
 */class tn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}tn.UNAUTHENTICATED=new tn(null),tn.GOOGLE_CREDENTIALS=new tn("google-credentials-uid"),tn.FIRST_PARTY=new tn("first-party-uid"),tn.MOCK_USER=new tn("mock-user");/**
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
 */let mo="12.2.0";/**
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
 */const Fs=new mh("@firebase/firestore");function Ga(){return Fs.logLevel}function ot(r,...t){if(Fs.logLevel<=Vt.DEBUG){const n=t.map(Pm);Fs.debug(`Firestore (${mo}): ${r}`,...n)}}function or(r,...t){if(Fs.logLevel<=Vt.ERROR){const n=t.map(Pm);Fs.error(`Firestore (${mo}): ${r}`,...n)}}function io(r,...t){if(Fs.logLevel<=Vt.WARN){const n=t.map(Pm);Fs.warn(`Firestore (${mo}): ${r}`,...n)}}function Pm(r){if(typeof r=="string")return r;try{/**
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
 */function Tt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,lE(r,s,n)}function lE(r,t,n){let s=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw or(s),new Error(s)}function Qt(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||lE(t,o,s)}function wt(r,t){return r}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class st extends ti{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kr{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
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
 */class uE{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class l1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(tn.UNAUTHENTICATED)))}shutdown(){}}class u1{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class c1{constructor(t){this.t=t,this.currentUser=tn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Qt(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let u=new Kr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Kr,t.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const y=u;t.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{ot("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ot("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Kr)}}),0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==t?(ot("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qt(typeof s.accessToken=="string",31837,{l:s}),new uE(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Qt(t===null||typeof t=="string",2055,{h:t}),new tn(t)}}class h1{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=tn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class f1{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new h1(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(tn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class yv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class d1{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Qt(this.o===void 0,3512);const s=u=>{u.error!=null&&ot("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,ot("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>s(u)))};const o=u=>{ot("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ot("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new yv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(Qt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yv(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function m1(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class km{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=m1(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function xt(r,t){return r<t?-1:r>t?1:0}function hm(r,t){const n=Math.min(r.length,t.length);for(let s=0;s<n;s++){const o=r.charAt(s),u=t.charAt(s);if(o!==u)return Xd(o)===Xd(u)?xt(o,u):Xd(o)?1:-1}return xt(r.length,t.length)}const g1=55296,p1=57343;function Xd(r){const t=r.charCodeAt(0);return t>=g1&&t<=p1}function ro(r,t,n){return r.length===t.length&&r.every(((s,o)=>n(s,t[o])))}/**
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
 */const _v="__name__";class vi{constructor(t,n,s){n===void 0?n=0:n>t.length&&Tt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&Tt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return vi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof vi?t.forEach((s=>{n.push(s)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=vi.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return xt(t.length,n.length)}static compareSegments(t,n){const s=vi.isNumericId(t),o=vi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?vi.extractNumericId(t).compare(vi.extractNumericId(n)):hm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Qr.fromString(t.substring(4,t.length-2))}}class re extends vi{construct(t,n,s){return new re(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new st(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new re(n)}static emptyPath(){return new re([])}}const y1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends vi{construct(t,n,s){return new Ye(t,n,s)}static isValidIdentifier(t){return y1.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_v}static keyField(){return new Ye([_v])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new st(K.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new st(K.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const y=t[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new st(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=y,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new st(K.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class pt{constructor(t){this.path=t}static fromPath(t){return new pt(re.fromString(t))}static fromName(t){return new pt(re.fromString(t).popFirst(5))}static empty(){return new pt(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&re.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return re.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new pt(new re(t.slice()))}}/**
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
 */function cE(r,t,n){if(!n)throw new st(K.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function _1(r,t,n,s){if(t===!0&&s===!0)throw new st(K.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function vv(r){if(!pt.isDocumentKey(r))throw new st(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Tv(r){if(pt.isDocumentKey(r))throw new st(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function hE(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function gh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(s){return s.constructor?s.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":Tt(12329,{type:typeof r})}function jn(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new st(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gh(r);throw new st(K.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
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
 */function Ie(r,t){const n={typeString:r};return t&&(n.value=t),n}function $l(r,t){if(!hE(r))throw new st(K.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const o=t[s].typeString,u="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new st(K.INVALID_ARGUMENT,n);return!0}/**
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
 */const Ev=-62135596800,Av=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(t){return se.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*Av);return new se(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new st(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new st(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Ev)throw new st(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new st(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Av}_compareTo(t){return this.seconds===t.seconds?xt(this.nanoseconds,t.nanoseconds):xt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if($l(t,se._jsonSchema))return new se(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ev;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:Ie("string",se._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
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
 */class bt{static fromTimestamp(t){return new bt(t)}static min(){return new bt(new se(0,0))}static max(){return new bt(new se(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const jl=-1;function v1(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=bt.fromTimestamp(s===1e9?new se(n+1,0):new se(n,s));return new Xr(o,pt.empty(),t)}function T1(r){return new Xr(r.readTime,r.key,jl)}class Xr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Xr(bt.min(),pt.empty(),jl)}static max(){return new Xr(bt.max(),pt.empty(),jl)}}function E1(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=pt.comparator(r.documentKey,t.documentKey),n!==0?n:xt(r.largestBatchId,t.largestBatchId))}/**
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
 */const A1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class S1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function go(r){if(r.code!==K.FAILED_PRECONDITION||r.message!==A1)throw r;ot("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Tt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):$.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):$.reject(n)}static resolve(t){return new $(((n,s)=>{n(t)}))}static reject(t){return new $(((n,s)=>{s(t)}))}static waitFor(t){return new $(((n,s)=>{let o=0,u=0,f=!1;t.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&n()}),(y=>s(y)))})),f=!0,u===o&&n()}))}static or(t){let n=$.resolve(!1);for(const s of t)n=n.next((o=>o?$.resolve(o):s()));return n}static forEach(t,n){const s=[];return t.forEach(((o,u)=>{s.push(n.call(this,o,u))})),this.waitFor(s)}static mapArray(t,n){return new $(((s,o)=>{const u=t.length,f=new Array(u);let m=0;for(let y=0;y<u;y++){const p=y;n(t[p]).next((T=>{f[p]=T,++m,m===u&&s(f)}),(T=>o(T)))}}))}static doWhile(t,n){return new $(((s,o)=>{const u=()=>{t()===!0?n().next((()=>{u()}),o):s()};u()}))}}function b1(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function po(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class ph{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}ph.ce=-1;/**
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
 */const Um=-1;function yh(r){return r==null}function Kc(r){return r===0&&1/r==-1/0}function w1(r){return typeof r=="number"&&Number.isInteger(r)&&!Kc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const fE="";function R1(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=Sv(t)),t=I1(r.get(n),t);return Sv(t)}function I1(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case fE:n+="";break;default:n+=u}}return n}function Sv(r){return r+fE+""}/**
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
 */function bv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function ns(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function dE(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class he{constructor(t,n){this.comparator=t,this.root=n||Ke.EMPTY}insert(t,n){return new he(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(t){return new he(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,s)=>(t(n,s),!1)))}toString(){const t=[];return this.inorderTraversal(((n,s)=>(t.push(`${n}:${s}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dc(this.root,t,this.comparator,!0)}}class Dc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ke{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??Ke.RED,this.left=o??Ke.EMPTY,this.right=u??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new Ke(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return Ke.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Tt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Tt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Tt(27949);return t+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw Tt(57766)}get value(){throw Tt(16141)}get color(){throw Tt(16727)}get left(){throw Tt(29726)}get right(){throw Tt(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new Ke(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(t){this.comparator=t,this.data=new he(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,s)=>(t(n),!1)))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new wv(this.data.getIterator())}getIteratorFrom(t){return new wv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((s=>{n=n.add(s)})),n}isEqual(t){if(!(t instanceof xe)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new xe(this.comparator);return n.data=t,n}}class wv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Sn{constructor(t){this.fields=t,t.sort(Ye.comparator)}static empty(){return new Sn([])}unionWith(t){let n=new xe(Ye.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Sn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ro(this.fields,t.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class mE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new mE("Invalid base64 string: "+u):u}})(t);return new Xe(n)}static fromUint8Array(t){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(t);return new Xe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return xt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const C1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $r(r){if(Qt(!!r,39018),typeof r=="string"){let t=0;const n=C1.exec(r);if(Qt(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Te(r.seconds),nanos:Te(r.nanos)}}function Te(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Zr(r){return typeof r=="string"?Xe.fromBase64String(r):Xe.fromUint8Array(r)}/**
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
 */const gE="server_timestamp",pE="__type__",yE="__previous_value__",_E="__local_write_time__";function Lm(r){return(r?.mapValue?.fields||{})[pE]?.stringValue===gE}function _h(r){const t=r.mapValue.fields[yE];return Lm(t)?_h(t):t}function Bl(r){const t=$r(r.mapValue.fields[_E].timestampValue);return new se(t.seconds,t.nanos)}/**
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
 */class N1{constructor(t,n,s,o,u,f,m,y,p,T){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=p,this.isUsingEmulator=T}}const Yc="(default)";class ql{constructor(t,n){this.projectId=t,this.database=n||Yc}static empty(){return new ql("","")}get isDefaultDatabase(){return this.database===Yc}isEqual(t){return t instanceof ql&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const vE="__type__",D1="__max__",Oc={mapValue:{}},TE="__vector__",Xc="value";function Jr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Lm(r)?4:M1(r)?9007199254740991:O1(r)?10:11:Tt(28295,{value:r})}function Ii(r,t){if(r===t)return!0;const n=Jr(r);if(n!==Jr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Bl(r).isEqual(Bl(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=$r(o.timestampValue),m=$r(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(o,u){return Zr(o.bytesValue).isEqual(Zr(u.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(o,u){return Te(o.geoPointValue.latitude)===Te(u.geoPointValue.latitude)&&Te(o.geoPointValue.longitude)===Te(u.geoPointValue.longitude)})(r,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return Te(o.integerValue)===Te(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=Te(o.doubleValue),m=Te(u.doubleValue);return f===m?Kc(f)===Kc(m):isNaN(f)&&isNaN(m)}return!1})(r,t);case 9:return ro(r.arrayValue.values||[],t.arrayValue.values||[],Ii);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(bv(f)!==bv(m))return!1;for(const y in f)if(f.hasOwnProperty(y)&&(m[y]===void 0||!Ii(f[y],m[y])))return!1;return!0})(r,t);default:return Tt(52216,{left:r})}}function Hl(r,t){return(r.values||[]).find((n=>Ii(n,t)))!==void 0}function so(r,t){if(r===t)return 0;const n=Jr(r),s=Jr(t);if(n!==s)return xt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return xt(r.booleanValue,t.booleanValue);case 2:return(function(u,f){const m=Te(u.integerValue||u.doubleValue),y=Te(f.integerValue||f.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(r,t);case 3:return Rv(r.timestampValue,t.timestampValue);case 4:return Rv(Bl(r),Bl(t));case 5:return hm(r.stringValue,t.stringValue);case 6:return(function(u,f){const m=Zr(u),y=Zr(f);return m.compareTo(y)})(r.bytesValue,t.bytesValue);case 7:return(function(u,f){const m=u.split("/"),y=f.split("/");for(let p=0;p<m.length&&p<y.length;p++){const T=xt(m[p],y[p]);if(T!==0)return T}return xt(m.length,y.length)})(r.referenceValue,t.referenceValue);case 8:return(function(u,f){const m=xt(Te(u.latitude),Te(f.latitude));return m!==0?m:xt(Te(u.longitude),Te(f.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return Iv(r.arrayValue,t.arrayValue);case 10:return(function(u,f){const m=u.fields||{},y=f.fields||{},p=m[Xc]?.arrayValue,T=y[Xc]?.arrayValue,b=xt(p?.values?.length||0,T?.values?.length||0);return b!==0?b:Iv(p,T)})(r.mapValue,t.mapValue);case 11:return(function(u,f){if(u===Oc.mapValue&&f===Oc.mapValue)return 0;if(u===Oc.mapValue)return 1;if(f===Oc.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),p=f.fields||{},T=Object.keys(p);y.sort(),T.sort();for(let b=0;b<y.length&&b<T.length;++b){const R=hm(y[b],T[b]);if(R!==0)return R;const q=so(m[y[b]],p[T[b]]);if(q!==0)return q}return xt(y.length,T.length)})(r.mapValue,t.mapValue);default:throw Tt(23264,{he:n})}}function Rv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return xt(r,t);const n=$r(r),s=$r(t),o=xt(n.seconds,s.seconds);return o!==0?o:xt(n.nanos,s.nanos)}function Iv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=so(n[o],s[o]);if(u)return u}return xt(n.length,s.length)}function ao(r){return fm(r)}function fm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=$r(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return Zr(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return pt.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=fm(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${fm(n.fields[f])}`;return o+"}"})(r.mapValue):Tt(61005,{value:r})}function kc(r){switch(Jr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=_h(r);return t?16+kc(t):16;case 5:return 2*r.stringValue.length;case 6:return Zr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+kc(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return ns(s.fields,((u,f)=>{o+=u.length+kc(f)})),o})(r.mapValue);default:throw Tt(13486,{value:r})}}function Cv(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function dm(r){return!!r&&"integerValue"in r}function zm(r){return!!r&&"arrayValue"in r}function Nv(r){return!!r&&"nullValue"in r}function Dv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Uc(r){return!!r&&"mapValue"in r}function O1(r){return(r?.mapValue?.fields||{})[vE]?.stringValue===TE}function Vl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return ns(r.mapValue.fields,((n,s)=>t.mapValue.fields[n]=Vl(s))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Vl(r.arrayValue.values[n]);return t}return{...r}}function M1(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===D1}/**
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
 */class fn{constructor(t){this.value=t}static empty(){return new fn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Uc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Vl(n)}setAll(t){let n=Ye.emptyPath(),s={},o=[];t.forEach(((f,m)=>{if(!n.isImmediateParentOf(m)){const y=this.getFieldsMap(n);this.applyChanges(y,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Vl(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());Uc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ii(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Uc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){ns(n,((o,u)=>t[o]=u));for(const o of s)delete t[o]}clone(){return new fn(Vl(this.value))}}function EE(r){const t=[];return ns(r.fields,((n,s)=>{const o=new Ye([n]);if(Uc(s)){const u=EE(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)})),new Sn(t)}/**
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
 */class en{constructor(t,n,s,o,u,f,m){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new en(t,0,bt.min(),bt.min(),bt.min(),fn.empty(),0)}static newFoundDocument(t,n,s,o){return new en(t,1,n,bt.min(),s,o,0)}static newNoDocument(t,n){return new en(t,2,n,bt.min(),bt.min(),fn.empty(),0)}static newUnknownDocument(t,n){return new en(t,3,n,bt.min(),bt.min(),fn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(bt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof en&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $c{constructor(t,n){this.position=t,this.inclusive=n}}function Ov(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=pt.comparator(pt.fromName(f.referenceValue),n.key):s=so(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Mv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Ii(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class Fl{constructor(t,n="asc"){this.field=t,this.dir=n}}function V1(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class AE{}class Re extends AE{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new P1(t,n,s):n==="array-contains"?new L1(t,s):n==="in"?new z1(t,s):n==="not-in"?new j1(t,s):n==="array-contains-any"?new B1(t,s):new Re(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new k1(t,s):new U1(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(so(n,this.value)):n!==null&&Jr(this.value)===Jr(n)&&this.matchesComparison(so(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Tt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wn extends AE{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new Wn(t,n)}matches(t){return SE(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function SE(r){return r.op==="and"}function bE(r){return x1(r)&&SE(r)}function x1(r){for(const t of r.filters)if(t instanceof Wn)return!1;return!0}function mm(r){if(r instanceof Re)return r.field.canonicalString()+r.op.toString()+ao(r.value);if(bE(r))return r.filters.map((t=>mm(t))).join(",");{const t=r.filters.map((n=>mm(n))).join(",");return`${r.op}(${t})`}}function wE(r,t){return r instanceof Re?(function(s,o){return o instanceof Re&&s.op===o.op&&s.field.isEqual(o.field)&&Ii(s.value,o.value)})(r,t):r instanceof Wn?(function(s,o){return o instanceof Wn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,m)=>u&&wE(f,o.filters[m])),!0):!1})(r,t):void Tt(19439)}function RE(r){return r instanceof Re?(function(n){return`${n.field.canonicalString()} ${n.op} ${ao(n.value)}`})(r):r instanceof Wn?(function(n){return n.op.toString()+" {"+n.getFilters().map(RE).join(" ,")+"}"})(r):"Filter"}class P1 extends Re{constructor(t,n,s){super(t,n,s),this.key=pt.fromName(s.referenceValue)}matches(t){const n=pt.comparator(t.key,this.key);return this.matchesComparison(n)}}class k1 extends Re{constructor(t,n){super(t,"in",n),this.keys=IE("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class U1 extends Re{constructor(t,n){super(t,"not-in",n),this.keys=IE("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function IE(r,t){return(t.arrayValue?.values||[]).map((n=>pt.fromName(n.referenceValue)))}class L1 extends Re{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return zm(n)&&Hl(n.arrayValue,this.value)}}class z1 extends Re{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Hl(this.value.arrayValue,n)}}class j1 extends Re{constructor(t,n){super(t,"not-in",n)}matches(t){if(Hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Hl(this.value.arrayValue,n)}}class B1 extends Re{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!zm(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Hl(this.value.arrayValue,s)))}}/**
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
 */class q1{constructor(t,n=null,s=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function Vv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new q1(r,t,n,s,o,u,f)}function jm(r){const t=wt(r);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((s=>mm(s))).join(","),n+="|ob:",n+=t.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),yh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>ao(s))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>ao(s))).join(",")),t.Te=n}return t.Te}function Bm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!V1(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!wE(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Mv(r.startAt,t.startAt)&&Mv(r.endAt,t.endAt)}function gm(r){return pt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class yo{constructor(t,n=null,s=[],o=[],u=null,f="F",m=null,y=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function H1(r,t,n,s,o,u,f,m){return new yo(r,t,n,s,o,u,f,m)}function vh(r){return new yo(r)}function xv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function CE(r){return r.collectionGroup!==null}function xl(r){const t=wt(r);if(t.Ie===null){t.Ie=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new xe(Ye.comparator);return f.filters.forEach((y=>{y.getFlattenedFilters().forEach((p=>{p.isInequality()&&(m=m.add(p.field))}))})),m})(t).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new Fl(u,s))})),n.has(Ye.keyField().canonicalString())||t.Ie.push(new Fl(Ye.keyField(),s))}return t.Ie}function Ti(r){const t=wt(r);return t.Ee||(t.Ee=F1(t,xl(r))),t.Ee}function F1(r,t){if(r.limitType==="F")return Vv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Fl(o.field,u)}));const n=r.endAt?new $c(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new $c(r.startAt.position,r.startAt.inclusive):null;return Vv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function pm(r,t){const n=r.filters.concat([t]);return new yo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function Zc(r,t,n){return new yo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function Zl(r,t){return Bm(Ti(r),Ti(t))&&r.limitType===t.limitType}function NE(r){return`${jm(Ti(r))}|lt:${r.limitType}`}function Qa(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>RE(o))).join(", ")}]`),yh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>ao(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>ao(o))).join(",")),`Target(${s})`})(Ti(r))}; limitType=${r.limitType})`}function Th(r,t){return t.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):pt.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,t)&&(function(s,o){for(const u of xl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,t)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,t)&&(function(s,o){return!(s.startAt&&!(function(f,m,y){const p=Ov(f,m,y);return f.inclusive?p<=0:p<0})(s.startAt,xl(s),o)||s.endAt&&!(function(f,m,y){const p=Ov(f,m,y);return f.inclusive?p>=0:p>0})(s.endAt,xl(s),o))})(r,t)}function G1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function DE(r){return(t,n)=>{let s=!1;for(const o of xl(r)){const u=Q1(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function Q1(r,t,n){const s=r.field.isKeyField()?pt.comparator(t.key,n.key):(function(u,f,m){const y=f.data.field(u),p=m.data.field(u);return y!==null&&p!==null?so(y,p):Tt(42886)})(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Tt(19790,{direction:r.dir})}}/**
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
 */class Zs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){ns(this.inner,((n,s)=>{for(const[o,u]of s)t(o,u)}))}isEmpty(){return dE(this.inner)}size(){return this.innerSize}}/**
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
 */const K1=new he(pt.comparator);function lr(){return K1}const OE=new he(pt.comparator);function Nl(...r){let t=OE;for(const n of r)t=t.insert(n.key,n);return t}function ME(r){let t=OE;return r.forEach(((n,s)=>t=t.insert(n,s.overlayedDocument))),t}function zs(){return Pl()}function VE(){return Pl()}function Pl(){return new Zs((r=>r.toString()),((r,t)=>r.isEqual(t)))}const Y1=new he(pt.comparator),X1=new xe(pt.comparator);function Pt(...r){let t=X1;for(const n of r)t=t.add(n);return t}const $1=new xe(xt);function Z1(){return $1}/**
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
 */function qm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kc(t)?"-0":t}}function xE(r){return{integerValue:""+r}}function J1(r,t){return w1(t)?xE(t):qm(r,t)}/**
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
 */class Eh{constructor(){this._=void 0}}function W1(r,t,n){return r instanceof Gl?(function(o,u){const f={fields:{[pE]:{stringValue:gE},[_E]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Lm(u)&&(u=_h(u)),u&&(f.fields[yE]=u),{mapValue:f}})(n,t):r instanceof Ql?kE(r,t):r instanceof Kl?UE(r,t):(function(o,u){const f=PE(o,u),m=Pv(f)+Pv(o.Ae);return dm(f)&&dm(o.Ae)?xE(m):qm(o.serializer,m)})(r,t)}function tR(r,t,n){return r instanceof Ql?kE(r,t):r instanceof Kl?UE(r,t):n}function PE(r,t){return r instanceof Jc?(function(s){return dm(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(t)?t:{integerValue:0}:null}class Gl extends Eh{}class Ql extends Eh{constructor(t){super(),this.elements=t}}function kE(r,t){const n=LE(t);for(const s of r.elements)n.some((o=>Ii(o,s)))||n.push(s);return{arrayValue:{values:n}}}class Kl extends Eh{constructor(t){super(),this.elements=t}}function UE(r,t){let n=LE(t);for(const s of r.elements)n=n.filter((o=>!Ii(o,s)));return{arrayValue:{values:n}}}class Jc extends Eh{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Pv(r){return Te(r.integerValue||r.doubleValue)}function LE(r){return zm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class eR{constructor(t,n){this.field=t,this.transform=n}}function nR(r,t){return r.field.isEqual(t.field)&&(function(s,o){return s instanceof Ql&&o instanceof Ql||s instanceof Kl&&o instanceof Kl?ro(s.elements,o.elements,Ii):s instanceof Jc&&o instanceof Jc?Ii(s.Ae,o.Ae):s instanceof Gl&&o instanceof Gl})(r.transform,t.transform)}class iR{constructor(t,n){this.version=t,this.transformResults=n}}class Bn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Bn}static exists(t){return new Bn(void 0,t)}static updateTime(t){return new Bn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Lc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Ah{}function zE(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Hm(r.key,Bn.none()):new Jl(r.key,r.data,Bn.none());{const n=r.data,s=fn.empty();let o=new xe(Ye.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new is(r.key,s,new Sn(o.toArray()),Bn.none())}}function rR(r,t,n){r instanceof Jl?(function(o,u,f){const m=o.value.clone(),y=Uv(o.fieldTransforms,u,f.transformResults);m.setAll(y),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(r,t,n):r instanceof is?(function(o,u,f){if(!Lc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=Uv(o.fieldTransforms,u,f.transformResults),y=u.data;y.setAll(jE(o)),y.setAll(m),u.convertToFoundDocument(f.version,y).setHasCommittedMutations()})(r,t,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,n)}function kl(r,t,n,s){return r instanceof Jl?(function(u,f,m,y){if(!Lc(u.precondition,f))return m;const p=u.value.clone(),T=Lv(u.fieldTransforms,y,f);return p.setAll(T),f.convertToFoundDocument(f.version,p).setHasLocalMutations(),null})(r,t,n,s):r instanceof is?(function(u,f,m,y){if(!Lc(u.precondition,f))return m;const p=Lv(u.fieldTransforms,y,f),T=f.data;return T.setAll(jE(u)),T.setAll(p),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((b=>b.field)))})(r,t,n,s):(function(u,f,m){return Lc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(r,t,n)}function sR(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=PE(s.transform,o||null);u!=null&&(n===null&&(n=fn.empty()),n.set(s.field,u))}return n||null}function kv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&ro(s,o,((u,f)=>nR(u,f)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Jl extends Ah{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class is extends Ah{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function jE(r){const t=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}})),t}function Uv(r,t,n){const s=new Map;Qt(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=t.data.field(u.field);s.set(u.field,tR(f,m,n[o]))}return s}function Lv(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,W1(u,f,t))}return s}class Hm extends Ah{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aR extends Ah{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class oR{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&rR(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=kl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=kl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=VE();return this.mutations.forEach((o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const y=zE(f,m);y!==null&&s.set(o.key,y),f.isValidDocument()||f.convertToNoDocument(bt.min())})),s}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),Pt())}isEqual(t){return this.batchId===t.batchId&&ro(this.mutations,t.mutations,((n,s)=>kv(n,s)))&&ro(this.baseMutations,t.baseMutations,((n,s)=>kv(n,s)))}}class Fm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Qt(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let o=(function(){return Y1})();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Fm(t,n,s,o)}}/**
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
 */class lR{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class uR{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var we,jt;function cR(r){switch(r){case K.OK:return Tt(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return Tt(15467,{code:r})}}function BE(r){if(r===void 0)return or("GRPC error has no .code"),K.UNKNOWN;switch(r){case we.OK:return K.OK;case we.CANCELLED:return K.CANCELLED;case we.UNKNOWN:return K.UNKNOWN;case we.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case we.INTERNAL:return K.INTERNAL;case we.UNAVAILABLE:return K.UNAVAILABLE;case we.UNAUTHENTICATED:return K.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case we.NOT_FOUND:return K.NOT_FOUND;case we.ALREADY_EXISTS:return K.ALREADY_EXISTS;case we.PERMISSION_DENIED:return K.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case we.ABORTED:return K.ABORTED;case we.OUT_OF_RANGE:return K.OUT_OF_RANGE;case we.UNIMPLEMENTED:return K.UNIMPLEMENTED;case we.DATA_LOSS:return K.DATA_LOSS;default:return Tt(39323,{code:r})}}(jt=we||(we={}))[jt.OK=0]="OK",jt[jt.CANCELLED=1]="CANCELLED",jt[jt.UNKNOWN=2]="UNKNOWN",jt[jt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",jt[jt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",jt[jt.NOT_FOUND=5]="NOT_FOUND",jt[jt.ALREADY_EXISTS=6]="ALREADY_EXISTS",jt[jt.PERMISSION_DENIED=7]="PERMISSION_DENIED",jt[jt.UNAUTHENTICATED=16]="UNAUTHENTICATED",jt[jt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",jt[jt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",jt[jt.ABORTED=10]="ABORTED",jt[jt.OUT_OF_RANGE=11]="OUT_OF_RANGE",jt[jt.UNIMPLEMENTED=12]="UNIMPLEMENTED",jt[jt.INTERNAL=13]="INTERNAL",jt[jt.UNAVAILABLE=14]="UNAVAILABLE",jt[jt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hR(){return new TextEncoder}/**
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
 */const fR=new Qr([4294967295,4294967295],0);function zv(r){const t=hR().encode(r),n=new nE;return n.update(t),new Uint8Array(n.digest())}function jv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Qr([n,s],0),new Qr([o,u],0)]}class Gm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Dl(`Invalid padding: ${n}`);if(s<0)throw new Dl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Dl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Dl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Qr.fromNumber(this.ge)}ye(t,n,s){let o=t.add(n.multiply(Qr.fromNumber(s)));return o.compare(fR)===1&&(o=new Qr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=zv(t),[s,o]=jv(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Gm(u,o,n);return s.forEach((m=>f.insert(m))),f}insert(t){if(this.ge===0)return;const n=zv(t),[s,o]=jv(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Dl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Sh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Wl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Sh(bt.min(),o,new he(xt),lr(),Pt())}}class Wl{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Wl(s,n,Pt(),Pt(),Pt())}}/**
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
 */class zc{constructor(t,n,s,o){this.be=t,this.removedTargetIds=n,this.key=s,this.De=o}}class qE{constructor(t,n){this.targetId=t,this.Ce=n}}class HE{constructor(t,n,s=Xe.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Bv{constructor(){this.ve=0,this.Fe=qv(),this.Me=Xe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Pt(),n=Pt(),s=Pt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Tt(38017,{changeType:u})}})),new Wl(this.Me,this.xe,t,n,s)}qe(){this.Oe=!1,this.Fe=qv()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Qt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class dR{constructor(t){this.Ge=t,this.ze=new Map,this.je=lr(),this.Je=Mc(),this.He=Mc(),this.Ye=new he(xt)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const s=this.nt(n);switch(t.state){case 0:this.rt(n)&&s.Le(t.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(t.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(t.resumeToken));break;default:Tt(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(t){const n=t.targetId,s=t.Ce.count,o=this.ot(n);if(o){const u=o.target;if(gm(u))if(s===0){const f=new pt(u.path);this.et(n,f,en.newNoDocument(f,bt.min()))}else Qt(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(t),y=m?this.ct(m,t,f):1;if(y!==0){this.it(n);const p=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,p)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=Zr(s).toUint8Array()}catch(y){if(y instanceof mE)return io("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Gm(f,o,u)}catch(y){return io(y instanceof Dl?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(t,n,s){return n.Ce.count===s-this.Pt(t,n.targetId)?0:2}Pt(t,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.et(n,u,null),o++)})),o}Tt(t){const n=new Map;this.ze.forEach(((u,f)=>{const m=this.ot(f);if(m){if(u.current&&gm(m.target)){const y=new pt(m.target.path);this.It(y).has(f)||this.Et(f,y)||this.et(f,y,en.newNoDocument(y,t))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let s=Pt();this.He.forEach(((u,f)=>{let m=!0;f.forEachWhile((y=>{const p=this.ot(y);return!p||p.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const o=new Sh(t,n,this.Ye,this.je,s);return this.je=lr(),this.Je=Mc(),this.He=Mc(),this.Ye=new he(xt),o}Xe(t,n){if(!this.rt(t))return;const s=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,s){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),s&&(this.je=this.je.insert(n,s))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new Bv,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new xe(xt),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new xe(xt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||ot("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Bv),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Mc(){return new he(pt.comparator)}function qv(){return new he(pt.comparator)}const mR={asc:"ASCENDING",desc:"DESCENDING"},gR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pR={and:"AND",or:"OR"};class yR{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ym(r,t){return r.useProto3Json||yh(t)?t:{value:t}}function Wc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function FE(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function _R(r,t){return Wc(r,t.toTimestamp())}function Ei(r){return Qt(!!r,49232),bt.fromTimestamp((function(n){const s=$r(n);return new se(s.seconds,s.nanos)})(r))}function Qm(r,t){return _m(r,t).canonicalString()}function _m(r,t){const n=(function(o){return new re(["projects",o.projectId,"databases",o.database])})(r).child("documents");return t===void 0?n:n.child(t)}function GE(r){const t=re.fromString(r);return Qt($E(t),10190,{key:t.toString()}),t}function vm(r,t){return Qm(r.databaseId,t.path)}function $d(r,t){const n=GE(t);if(n.get(1)!==r.databaseId.projectId)throw new st(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new st(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new pt(KE(n))}function QE(r,t){return Qm(r.databaseId,t)}function vR(r){const t=GE(r);return t.length===4?re.emptyPath():KE(t)}function Tm(r){return new re(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function KE(r){return Qt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Hv(r,t,n){return{name:vm(r,t),fields:n.value.mapValue.fields}}function TR(r,t){let n;if("targetChange"in t){t.targetChange;const s=(function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Tt(39313,{state:p})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(p,T){return p.useProto3Json?(Qt(T===void 0||typeof T=="string",58123),Xe.fromBase64String(T||"")):(Qt(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Xe.fromUint8Array(T||new Uint8Array))})(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&(function(p){const T=p.code===void 0?K.UNKNOWN:BE(p.code);return new st(T,p.message||"")})(f);n=new HE(s,o,u,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=$d(r,s.document.name),u=Ei(s.document.updateTime),f=s.document.createTime?Ei(s.document.createTime):bt.min(),m=new fn({mapValue:{fields:s.document.fields}}),y=en.newFoundDocument(o,u,f,m),p=s.targetIds||[],T=s.removedTargetIds||[];n=new zc(p,T,y.key,y)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=$d(r,s.document),u=s.readTime?Ei(s.readTime):bt.min(),f=en.newNoDocument(o,u),m=s.removedTargetIds||[];n=new zc([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=$d(r,s.document),u=s.removedTargetIds||[];n=new zc([],u,o,null)}else{if(!("filter"in t))return Tt(11601,{Rt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new uR(o,u),m=s.targetId;n=new qE(m,f)}}return n}function ER(r,t){let n;if(t instanceof Jl)n={update:Hv(r,t.key,t.value)};else if(t instanceof Hm)n={delete:vm(r,t.key)};else if(t instanceof is)n={update:Hv(r,t.key,t.data),updateMask:DR(t.fieldMask)};else{if(!(t instanceof aR))return Tt(16599,{Vt:t.type});n={verify:vm(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((s=>(function(u,f){const m=f.transform;if(m instanceof Gl)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ql)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Kl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Jc)return{fieldPath:f.field.canonicalString(),increment:m.Ae};throw Tt(20930,{transform:f.transform})})(0,s)))),t.precondition.isNone||(n.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:_R(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Tt(27497)})(r,t.precondition)),n}function AR(r,t){return r&&r.length>0?(Qt(t!==void 0,14353),r.map((n=>(function(o,u){let f=o.updateTime?Ei(o.updateTime):Ei(u);return f.isEqual(bt.min())&&(f=Ei(u)),new iR(f,o.transformResults||[])})(n,t)))):[]}function SR(r,t){return{documents:[QE(r,t.path)]}}function bR(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=QE(r,o);const u=(function(p){if(p.length!==0)return XE(Wn.create(p,"and"))})(t.filters);u&&(n.structuredQuery.where=u);const f=(function(p){if(p.length!==0)return p.map((T=>(function(R){return{field:Ka(R.field),direction:IR(R.dir)}})(T)))})(t.orderBy);f&&(n.structuredQuery.orderBy=f);const m=ym(r,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=(function(p){return{before:p.inclusive,values:p.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(p){return{before:!p.inclusive,values:p.position}})(t.endAt)),{ft:n,parent:o}}function wR(r){let t=vR(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Qt(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:t=t.child(T.collectionId)}let u=[];n.where&&(u=(function(b){const R=YE(b);return R instanceof Wn&&bE(R)?R.getFilters():[R]})(n.where));let f=[];n.orderBy&&(f=(function(b){return b.map((R=>(function(Y){return new Fl(Ya(Y.field),(function(J){switch(J){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(R)))})(n.orderBy));let m=null;n.limit&&(m=(function(b){let R;return R=typeof b=="object"?b.value:b,yh(R)?null:R})(n.limit));let y=null;n.startAt&&(y=(function(b){const R=!!b.before,q=b.values||[];return new $c(q,R)})(n.startAt));let p=null;return n.endAt&&(p=(function(b){const R=!b.before,q=b.values||[];return new $c(q,R)})(n.endAt)),H1(t,o,f,u,m,"F",y,p)}function RR(r,t){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Tt(28987,{purpose:o})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function YE(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ya(n.unaryFilter.field);return Re.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ya(n.unaryFilter.field);return Re.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ya(n.unaryFilter.field);return Re.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ya(n.unaryFilter.field);return Re.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Tt(61313);default:return Tt(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Re.create(Ya(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Tt(58110);default:return Tt(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return Wn.create(n.compositeFilter.filters.map((s=>YE(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Tt(1026)}})(n.compositeFilter.op))})(r):Tt(30097,{filter:r})}function IR(r){return mR[r]}function CR(r){return gR[r]}function NR(r){return pR[r]}function Ka(r){return{fieldPath:r.canonicalString()}}function Ya(r){return Ye.fromServerFormat(r.fieldPath)}function XE(r){return r instanceof Re?(function(n){if(n.op==="=="){if(Dv(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NAN"}};if(Nv(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dv(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NOT_NAN"}};if(Nv(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ka(n.field),op:CR(n.op),value:n.value}}})(r):r instanceof Wn?(function(n){const s=n.getFilters().map((o=>XE(o)));return s.length===1?s[0]:{compositeFilter:{op:NR(n.op),filters:s}}})(r):Tt(54877,{filter:r})}function DR(r){const t=[];return r.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function $E(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Hr{constructor(t,n,s,o,u=bt.min(),f=bt.min(),m=Xe.EMPTY_BYTE_STRING,y=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(t){return new Hr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class OR{constructor(t){this.yt=t}}function MR(r){const t=wR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Zc(t,t.limit,"L"):t}/**
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
 */class VR{constructor(){this.Cn=new xR}addToCollectionParentIndex(t,n){return this.Cn.add(n),$.resolve()}getCollectionParents(t,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return $.resolve()}deleteFieldIndex(t,n){return $.resolve()}deleteAllFieldIndexes(t){return $.resolve()}createTargetIndexes(t,n){return $.resolve()}getDocumentsMatchingTarget(t,n){return $.resolve(null)}getIndexType(t,n){return $.resolve(0)}getFieldIndexes(t,n){return $.resolve([])}getNextCollectionGroupToUpdate(t){return $.resolve(null)}getMinOffset(t,n){return $.resolve(Xr.min())}getMinOffsetFromCollectionGroup(t,n){return $.resolve(Xr.min())}updateCollectionGroup(t,n,s){return $.resolve()}updateIndexEntries(t,n){return $.resolve()}}class xR{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new xe(re.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new xe(re.comparator)).toArray()}}/**
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
 */const Fv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ZE=41943040;class hn{static withCacheSize(t){return new hn(t,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */hn.DEFAULT_COLLECTION_PERCENTILE=10,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hn.DEFAULT=new hn(ZE,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hn.DISABLED=new hn(-1,0,0);/**
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
 */class oo{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new oo(0)}static cr(){return new oo(-1)}}/**
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
 */const Gv="LruGarbageCollector",PR=1048576;function Qv([r,t],[n,s]){const o=xt(r,n);return o===0?xt(t,s):o}class kR{constructor(t){this.Ir=t,this.buffer=new xe(Qv),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Qv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class UR{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){ot(Gv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){po(n)?ot(Gv,"Ignoring IndexedDB error during garbage collection: ",n):await go(n)}await this.Vr(3e5)}))}}class LR{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(t,n){if(n===0)return $.resolve(ph.ce);const s=new kR(n);return this.mr.forEachTarget(t,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(t,n,s){return this.mr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(ot("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Fv)):this.getCacheSize(t).next((s=>s<this.params.cacheSizeCollectionThreshold?(ot("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fv):this.yr(t,n)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let s,o,u,f,m,y,p;const T=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(ot("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(t,o)))).next((b=>(s=b,m=Date.now(),this.removeTargets(t,s,n)))).next((b=>(u=b,y=Date.now(),this.removeOrphanedDocuments(t,s)))).next((b=>(p=Date.now(),Ga()<=Vt.DEBUG&&ot("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${b} documents in `+(p-y)+`ms
Total Duration: ${p-T}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b}))))}}function zR(r,t){return new LR(r,t)}/**
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
 */class jR{constructor(){this.changes=new Zs((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,en.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class BR{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class qR{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(t,n)))).next((o=>(s!==null&&kl(s.mutation,o,Sn.empty(),se.now()),o)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.getLocalViewOfDocuments(t,s,Pt()).next((()=>s))))}getLocalViewOfDocuments(t,n,s=Pt()){const o=zs();return this.populateOverlays(t,o,n).next((()=>this.computeViews(t,n,o,s).next((u=>{let f=Nl();return u.forEach(((m,y)=>{f=f.insert(m,y.overlayedDocument)})),f}))))}getOverlayedDocuments(t,n){const s=zs();return this.populateOverlays(t,s,n).next((()=>this.computeViews(t,n,s,Pt())))}populateOverlays(t,n,s){const o=[];return s.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((f,m)=>{n.set(f,m)}))}))}computeViews(t,n,s,o){let u=lr();const f=Pl(),m=(function(){return Pl()})();return n.forEach(((y,p)=>{const T=s.get(p.key);o.has(p.key)&&(T===void 0||T.mutation instanceof is)?u=u.insert(p.key,p):T!==void 0?(f.set(p.key,T.mutation.getFieldMask()),kl(T.mutation,p,T.mutation.getFieldMask(),se.now())):f.set(p.key,Sn.empty())})),this.recalculateAndSaveOverlays(t,u).next((y=>(y.forEach(((p,T)=>f.set(p,T))),n.forEach(((p,T)=>m.set(p,new BR(T,f.get(p)??null)))),m)))}recalculateAndSaveOverlays(t,n){const s=Pl();let o=new he(((f,m)=>f-m)),u=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((f=>{for(const m of f)m.keys().forEach((y=>{const p=n.get(y);if(p===null)return;let T=s.get(y)||Sn.empty();T=m.applyToLocalView(p,T),s.set(y,T);const b=(o.get(m.batchId)||Pt()).add(y);o=o.insert(m.batchId,b)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),p=y.key,T=y.value,b=VE();T.forEach((R=>{if(!u.has(R)){const q=zE(n.get(R),s.get(R));q!==null&&b.set(R,q),u=u.add(R)}})),f.push(this.documentOverlayCache.saveOverlays(t,p,b))}return $.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.recalculateAndSaveOverlays(t,s)))}getDocumentsMatchingQuery(t,n,s,o){return(function(f){return pt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):CE(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):$.resolve(zs());let m=jl,y=u;return f.next((p=>$.forEach(p,((T,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),u.get(T)?$.resolve():this.remoteDocumentCache.getEntry(t,T).next((R=>{y=y.insert(T,R)}))))).next((()=>this.populateOverlays(t,p,u))).next((()=>this.computeViews(t,y,p,Pt()))).next((T=>({batchId:m,changes:ME(T)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new pt(n)).next((s=>{let o=Nl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=Nl();return this.indexManager.getCollectionParents(t,u).next((m=>$.forEach(m,(y=>{const p=(function(b,R){return new yo(R,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(n,y.child(u));return this.getDocumentsMatchingCollectionQuery(t,p,s,o).next((T=>{T.forEach(((b,R)=>{f=f.insert(b,R)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o)))).next((f=>{u.forEach(((y,p)=>{const T=p.getKey();f.get(T)===null&&(f=f.insert(T,en.newInvalidDocument(T)))}));let m=Nl();return f.forEach(((y,p)=>{const T=u.get(y);T!==void 0&&kl(T.mutation,p,Sn.empty(),se.now()),Th(n,p)&&(m=m.insert(y,p))})),m}))}}/**
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
 */class HR{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return $.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:Ei(o.createTime)}})(n)),$.resolve()}getNamedQuery(t,n){return $.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:MR(o.bundledQuery),readTime:Ei(o.readTime)}})(n)),$.resolve()}}/**
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
 */class FR{constructor(){this.overlays=new he(pt.comparator),this.qr=new Map}getOverlay(t,n){return $.resolve(this.overlays.get(n))}getOverlays(t,n){const s=zs();return $.forEach(n,(o=>this.getOverlay(t,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(t,n,s){return s.forEach(((o,u)=>{this.St(t,n,u)})),$.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),$.resolve()}getOverlaysForCollection(t,n,s){const o=zs(),u=n.length+1,f=new pt(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const y=m.getNext().value,p=y.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return $.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new he(((p,T)=>p-T));const f=this.overlays.getIterator();for(;f.hasNext();){const p=f.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>s){let T=u.get(p.largestBatchId);T===null&&(T=zs(),u=u.insert(p.largestBatchId,T)),T.set(p.getKey(),p)}}const m=zs(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((p,T)=>m.set(p,T))),!(m.size()>=o)););return $.resolve(m)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new lR(n,s));let u=this.qr.get(n);u===void 0&&(u=Pt(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
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
 */class GR{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(t){return $.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class Km{constructor(){this.Qr=new xe(Be.$r),this.Ur=new xe(Be.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const s=new Be(t,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(t,n){t.forEach((s=>this.addReference(s,n)))}removeReference(t,n){this.Gr(new Be(t,n))}zr(t,n){t.forEach((s=>this.removeReference(s,n)))}jr(t){const n=new pt(new re([])),s=new Be(n,t),o=new Be(n,t+1),u=[];return this.Ur.forEachInRange([s,o],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new pt(new re([])),s=new Be(n,t),o=new Be(n,t+1);let u=Pt();return this.Ur.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(t){const n=new Be(t,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Be{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return pt.comparator(t.key,n.key)||xt(t.Yr,n.Yr)}static Kr(t,n){return xt(t.Yr,n.Yr)||pt.comparator(t.key,n.key)}}/**
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
 */class QR{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new xe(Be.$r)}checkEmpty(t){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new oR(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new Be(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return $.resolve(f)}lookupMutationBatch(t,n){return $.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Um:this.tr-1)}getAllMutationBatches(t){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Be(n,0),o=new Be(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(f=>{const m=this.Xr(f.Yr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new xe(xt);return n.forEach((o=>{const u=new Be(o,0),f=new Be(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(m=>{s=s.add(m.Yr)}))})),$.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;pt.isDocumentKey(u)||(u=u.child(""));const f=new Be(new pt(u),0);let m=new xe(xt);return this.Zr.forEachWhile((y=>{const p=y.key.path;return!!s.isPrefixOf(p)&&(p.length===o&&(m=m.add(y.Yr)),!0)}),f),$.resolve(this.ti(m))}ti(t){const n=[];return t.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(t,n){Qt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return $.forEach(n.mutations,(o=>{const u=new Be(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=s}))}ir(t){}containsKey(t,n){const s=new Be(n,0),o=this.Zr.firstAfterOrEqual(s);return $.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,$.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class KR{constructor(t){this.ri=t,this.docs=(function(){return new he(pt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():en.newInvalidDocument(n))}getEntries(t,n){let s=lr();return n.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():en.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=lr();const f=n.path,m=new pt(f.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:p,value:{document:T}}=y.getNext();if(!f.isPrefixOf(p.path))break;p.path.length>f.length+1||E1(T1(T),s)<=0||(o.has(T.key)||Th(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(t,n,s,o){Tt(9500)}ii(t,n){return $.forEach(this.docs,(s=>n(s)))}newChangeBuffer(t){return new YR(this)}getSize(t){return $.resolve(this.size)}}class YR extends jR{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(s)})),$.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
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
 */class XR{constructor(t){this.persistence=t,this.si=new Zs((n=>jm(n)),Bm),this.lastRemoteSnapshotVersion=bt.min(),this.highestTargetId=0,this.oi=0,this._i=new Km,this.targetCount=0,this.ai=oo.ur()}forEachTarget(t,n){return this.si.forEach(((s,o)=>n(o))),$.resolve()}getLastRemoteSnapshotVersion(t){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return $.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),$.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new oo(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,$.resolve()}updateTargetData(t,n){return this.Pr(n),$.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.si.forEach(((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(t){return $.resolve(this.targetCount)}getTargetData(t,n){const s=this.si.get(n)||null;return $.resolve(s)}addMatchingKeys(t,n,s){return this._i.Wr(n,s),$.resolve()}removeMatchingKeys(t,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(t,f))})),$.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),$.resolve()}getMatchingKeysForTargetId(t,n){const s=this._i.Hr(n);return $.resolve(s)}containsKey(t,n){return $.resolve(this._i.containsKey(n))}}/**
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
 */class JE{constructor(t,n){this.ui={},this.overlays={},this.ci=new ph(0),this.li=!1,this.li=!0,this.hi=new GR,this.referenceDelegate=t(this),this.Pi=new XR(this),this.indexManager=new VR,this.remoteDocumentCache=(function(o){return new KR(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new OR(n),this.Ii=new HR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new FR,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ui[t.toKey()];return s||(s=new QR(n,this.referenceDelegate),this.ui[t.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,s){ot("MemoryPersistence","Starting transaction:",t);const o=new $R(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,n){return $.or(Object.values(this.ui).map((s=>()=>s.containsKey(t,n))))}}class $R extends S1{constructor(t){super(),this.currentSequenceNumber=t}}class Ym{constructor(t){this.persistence=t,this.Ri=new Km,this.Vi=null}static mi(t){return new Ym(t)}get fi(){if(this.Vi)return this.Vi;throw Tt(60996)}addReference(t,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),$.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),$.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(t,n)))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,(s=>{const o=pt.fromPath(s);return this.gi(t,o).next((u=>{u||n.removeEntry(o,bt.min())}))})).next((()=>(this.Vi=null,n.apply(t))))}updateLimboDocument(t,n){return this.gi(t,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(t){return 0}gi(t,n){return $.or([()=>$.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class th{constructor(t,n){this.persistence=t,this.pi=new Zs((s=>R1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=zR(this,n)}static mi(t,n){return new th(t,n)}Ei(){}di(t){return $.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((s=>n.next((o=>s+o))))}wr(t){let n=0;return this.pr(t,(s=>{n++})).next((()=>n))}pr(t,n){return $.forEach(this.pi,((s,o)=>this.br(t,s,o).next((u=>u?$.resolve():n(o)))))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(f=>this.br(t,f,n).next((m=>{m||(s++,u.removeEntry(f,bt.min()))})))).next((()=>u.apply(t))).next((()=>s))}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),$.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),$.resolve()}removeReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),$.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),$.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=kc(t.data.value)),n}br(t,n,s){return $.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.pi.get(n);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Xm{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Es=s,this.ds=o}static As(t,n){let s=Pt(),o=Pt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Xm(t,n.fromCache,s,o)}}/**
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
 */class ZR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class JR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return jb()?8:b1(nn())>0?6:4})()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.ys(t,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(t,n,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new ZR;return this.Ss(t,n,f).next((m=>{if(u.result=m,this.Vs)return this.bs(t,n,f,m.size)}))})).next((()=>u.result))}bs(t,n,s,o){return s.documentReadCount<this.fs?(Ga()<=Vt.DEBUG&&ot("QueryEngine","SDK will not create cache indexes for query:",Qa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(Ga()<=Vt.DEBUG&&ot("QueryEngine","Query:",Qa(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Ga()<=Vt.DEBUG&&ot("QueryEngine","The SDK decides to create cache indexes for query:",Qa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ti(n))):$.resolve())}ys(t,n){if(xv(n))return $.resolve(null);let s=Ti(n);return this.indexManager.getIndexType(t,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=Zc(n,null,"F"),s=Ti(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next((u=>{const f=Pt(...u);return this.ps.getDocuments(t,f).next((m=>this.indexManager.getMinOffset(t,s).next((y=>{const p=this.Ds(n,m);return this.Cs(n,p,f,y.readTime)?this.ys(t,Zc(n,null,"F")):this.vs(t,p,n,y)}))))})))))}ws(t,n,s,o){return xv(n)||o.isEqual(bt.min())?$.resolve(null):this.ps.getDocuments(t,s).next((u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,o)?$.resolve(null):(Ga()<=Vt.DEBUG&&ot("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Qa(n)),this.vs(t,f,n,v1(o,jl)).next((m=>m)))}))}Ds(t,n){let s=new xe(DE(t));return n.forEach(((o,u)=>{Th(t,u)&&(s=s.add(u))})),s}Cs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,n,s){return Ga()<=Vt.DEBUG&&ot("QueryEngine","Using full collection scan to execute query:",Qa(n)),this.ps.getDocumentsMatchingQuery(t,n,Xr.min(),s)}vs(t,n,s,o){return this.ps.getDocumentsMatchingQuery(t,s,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const $m="LocalStore",WR=3e8;class tI{constructor(t,n,s,o){this.persistence=t,this.Fs=n,this.serializer=o,this.Ms=new he(xt),this.xs=new Zs((u=>jm(u)),Bm),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(s)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new qR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.Ms)))}}function eI(r,t,n,s){return new tI(r,t,n,s)}async function WE(r,t){const n=wt(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,n.Bs(t),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],m=[];let y=Pt();for(const p of o){f.push(p.batchId);for(const T of p.mutations)y=y.add(T.key)}for(const p of u){m.push(p.batchId);for(const T of p.mutations)y=y.add(T.key)}return n.localDocuments.getDocuments(s,y).next((p=>({Ls:p,removedBatchIds:f,addedBatchIds:m})))}))}))}function nI(r,t){const n=wt(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=t.batch.keys(),u=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,p,T){const b=p.batch,R=b.keys();let q=$.resolve();return R.forEach((Y=>{q=q.next((()=>T.getEntry(y,Y))).next((et=>{const J=p.docVersions.get(Y);Qt(J!==null,48541),et.version.compareTo(J)<0&&(b.applyToRemoteDocument(et,p),et.isValidDocument()&&(et.setReadTime(p.commitVersion),T.addEntry(et)))}))})),q.next((()=>m.mutationQueue.removeMutationBatch(y,b)))})(n,s,t,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Pt();for(let p=0;p<m.mutationResults.length;++p)m.mutationResults[p].transformResults.length>0&&(y=y.add(m.batch.mutations[p].key));return y})(t)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function t0(r){const t=wt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.Pi.getLastRemoteSnapshotVersion(n)))}function iI(r,t){const n=wt(r),s=t.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const m=[];t.targetChanges.forEach(((T,b)=>{const R=o.get(b);if(!R)return;m.push(n.Pi.removeMatchingKeys(u,T.removedDocuments,b).next((()=>n.Pi.addMatchingKeys(u,T.addedDocuments,b))));let q=R.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(b)!==null?q=q.withResumeToken(Xe.EMPTY_BYTE_STRING,bt.min()).withLastLimboFreeSnapshotVersion(bt.min()):T.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(T.resumeToken,s)),o=o.insert(b,q),(function(et,J,at){return et.resumeToken.approximateByteSize()===0||J.snapshotVersion.toMicroseconds()-et.snapshotVersion.toMicroseconds()>=WR?!0:at.addedDocuments.size+at.modifiedDocuments.size+at.removedDocuments.size>0})(R,q,T)&&m.push(n.Pi.updateTargetData(u,q))}));let y=lr(),p=Pt();if(t.documentUpdates.forEach((T=>{t.resolvedLimboDocuments.has(T)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))})),m.push(rI(u,f,t.documentUpdates).next((T=>{y=T.ks,p=T.qs}))),!s.isEqual(bt.min())){const T=n.Pi.getLastRemoteSnapshotVersion(u).next((b=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(T)}return $.waitFor(m).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,y,p))).next((()=>y))})).then((u=>(n.Ms=o,u)))}function rI(r,t,n){let s=Pt(),o=Pt();return n.forEach((u=>s=s.add(u))),t.getEntries(r,s).next((u=>{let f=lr();return n.forEach(((m,y)=>{const p=u.get(m);y.isFoundDocument()!==p.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(bt.min())?(t.removeEntry(m,y.readTime),f=f.insert(m,y)):!p.isValidDocument()||y.version.compareTo(p.version)>0||y.version.compareTo(p.version)===0&&p.hasPendingWrites?(t.addEntry(y),f=f.insert(m,y)):ot($m,"Ignoring outdated watch update for ",m,". Current version:",p.version," Watch version:",y.version)})),{ks:f,qs:o}}))}function sI(r,t){const n=wt(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(t===void 0&&(t=Um),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t))))}function aI(r,t){const n=wt(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,t).next((u=>u?(o=u,$.resolve(o)):n.Pi.allocateTargetId(s).next((f=>(o=new Hr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(t,s.targetId)),s}))}async function Em(r,t,n){const s=wt(r),o=s.Ms.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!po(f))throw f;ot($m,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ms=s.Ms.remove(t),s.xs.delete(o.target)}function Kv(r,t,n){const s=wt(r);let o=bt.min(),u=Pt();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(y,p,T){const b=wt(y),R=b.xs.get(T);return R!==void 0?$.resolve(b.Ms.get(R)):b.Pi.getTargetData(p,T)})(s,f,Ti(t)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(f,t,n?o:bt.min(),n?u:Pt()))).next((m=>(oI(s,G1(t),m),{documents:m,Qs:u})))))}function oI(r,t,n){let s=r.Os.get(t)||bt.min();n.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Os.set(t,s)}class Yv{constructor(){this.activeTargetIds=Z1()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class lI{constructor(){this.Mo=new Yv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,s){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Yv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class uI{Oo(t){}shutdown(){}}/**
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
 */const Xv="ConnectivityMonitor";class $v{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ot(Xv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){ot(Xv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vc=null;function Am(){return Vc===null?Vc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Vc++,"0x"+Vc.toString(16)}/**
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
 */const Zd="RestConnection",cI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hI{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Yc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(t,n,s,o,u){const f=Am(),m=this.zo(t,n.toUriEncodedString());ot(Zd,`Sending RPC '${t}' ${f}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:p}=new URL(m),T=ho(p);return this.Jo(t,m,y,s,T).then((b=>(ot(Zd,`Received RPC '${t}' ${f}: `,b),b)),(b=>{throw io(Zd,`RPC '${t}' ${f} failed with error: `,b,"url: ",m,"request:",s),b}))}Ho(t,n,s,o,u,f){return this.Go(t,n,s,o,u)}jo(t,n,s){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+mo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>t[u]=o)),s&&s.headers.forEach(((o,u)=>t[u]=o))}zo(t,n){const s=cI[t];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class fI{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const We="WebChannelConnection";class dI extends hI{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,o,u){const f=Am();return new Promise(((m,y)=>{const p=new iE;p.setWithCredentials(!0),p.listenOnce(rE.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case Pc.NO_ERROR:const b=p.getResponseJson();ot(We,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(b)),m(b);break;case Pc.TIMEOUT:ot(We,`RPC '${t}' ${f} timed out`),y(new st(K.DEADLINE_EXCEEDED,"Request time out"));break;case Pc.HTTP_ERROR:const R=p.getStatus();if(ot(We,`RPC '${t}' ${f} failed with status:`,R,"response text:",p.getResponseText()),R>0){let q=p.getResponseJson();Array.isArray(q)&&(q=q[0]);const Y=q?.error;if(Y&&Y.status&&Y.message){const et=(function(at){const lt=at.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(lt)>=0?lt:K.UNKNOWN})(Y.status);y(new st(et,Y.message))}else y(new st(K.UNKNOWN,"Server responded with status "+p.getStatus()))}else y(new st(K.UNAVAILABLE,"Connection failed."));break;default:Tt(9055,{l_:t,streamId:f,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{ot(We,`RPC '${t}' ${f} completed.`)}}));const T=JSON.stringify(o);ot(We,`RPC '${t}' ${f} sending request:`,o),p.send(n,"POST",T,s,15)}))}T_(t,n,s){const o=Am(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=oE(),m=aE(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(y.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,n,s),y.encodeInitMessageHeaders=!0;const T=u.join("");ot(We,`Creating RPC '${t}' stream ${o}: ${T}`,y);const b=f.createWebChannel(T,y);this.I_(b);let R=!1,q=!1;const Y=new fI({Yo:J=>{q?ot(We,`Not sending because RPC '${t}' stream ${o} is closed:`,J):(R||(ot(We,`Opening RPC '${t}' stream ${o} transport.`),b.open(),R=!0),ot(We,`RPC '${t}' stream ${o} sending:`,J),b.send(J))},Zo:()=>b.close()}),et=(J,at,lt)=>{J.listen(at,(rt=>{try{lt(rt)}catch(mt){setTimeout((()=>{throw mt}),0)}}))};return et(b,Cl.EventType.OPEN,(()=>{q||(ot(We,`RPC '${t}' stream ${o} transport opened.`),Y.o_())})),et(b,Cl.EventType.CLOSE,(()=>{q||(q=!0,ot(We,`RPC '${t}' stream ${o} transport closed`),Y.a_(),this.E_(b))})),et(b,Cl.EventType.ERROR,(J=>{q||(q=!0,io(We,`RPC '${t}' stream ${o} transport errored. Name:`,J.name,"Message:",J.message),Y.a_(new st(K.UNAVAILABLE,"The operation could not be completed")))})),et(b,Cl.EventType.MESSAGE,(J=>{if(!q){const at=J.data[0];Qt(!!at,16349);const lt=at,rt=lt?.error||lt[0]?.error;if(rt){ot(We,`RPC '${t}' stream ${o} received error:`,rt);const mt=rt.status;let ht=(function(S){const C=we[S];if(C!==void 0)return BE(C)})(mt),Dt=rt.message;ht===void 0&&(ht=K.INTERNAL,Dt="Unknown error status: "+mt+" with message "+rt.message),q=!0,Y.a_(new st(ht,Dt)),b.close()}else ot(We,`RPC '${t}' stream ${o} received:`,at),Y.u_(at)}})),et(m,sE.STAT_EVENT,(J=>{J.stat===cm.PROXY?ot(We,`RPC '${t}' stream ${o} detected buffering proxy`):J.stat===cm.NOPROXY&&ot(We,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Y.__()}),0),Y}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((n=>n===t))}}function Jd(){return typeof document<"u"?document:null}/**
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
 */function bh(r){return new yR(r,!0)}/**
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
 */class e0{constructor(t,n,s=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&ot("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Zv="PersistentStream";class n0{constructor(t,n,s,o,u,f,m,y){this.Mi=t,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new e0(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===K.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{t((()=>{const o=new st(K.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(t,n){const s=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return ot(Zv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget((()=>this.D_===t?n():(ot(Zv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class mI extends n0{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=TR(this.serializer,t),s=(function(u){if(!("targetChange"in u))return bt.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?bt.min():f.readTime?Ei(f.readTime):bt.min()})(t);return this.listener.H_(n,s)}Y_(t){const n={};n.database=Tm(this.serializer),n.addTarget=(function(u,f){let m;const y=f.target;if(m=gm(y)?{documents:SR(u,y)}:{query:bR(u,y).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=FE(u,f.resumeToken);const p=ym(u,f.expectedCount);p!==null&&(m.expectedCount=p)}else if(f.snapshotVersion.compareTo(bt.min())>0){m.readTime=Wc(u,f.snapshotVersion.toTimestamp());const p=ym(u,f.expectedCount);p!==null&&(m.expectedCount=p)}return m})(this.serializer,t);const s=RR(this.serializer,t);s&&(n.labels=s),this.q_(n)}Z_(t){const n={};n.database=Tm(this.serializer),n.removeTarget=t,this.q_(n)}}class gI extends n0{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return Qt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Qt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Qt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=AR(t.writeResults,t.commitTime),s=Ei(t.commitTime);return this.listener.na(s,n)}ra(){const t={};t.database=Tm(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((s=>ER(this.serializer,s)))};this.q_(n)}}/**
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
 */class pI{}class yI extends pI{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new st(K.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Go(t,_m(n,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new st(K.UNKNOWN,u.toString())}))}Ho(t,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.Ho(t,_m(n,s),o,f,m,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new st(K.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class _I{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(or(n),this.aa=!1):ot("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Gs="RemoteStore";class vI{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{s.enqueueAndForget((async()=>{Js(this)&&(ot(Gs,"Restarting streams for network reachability change."),await(async function(y){const p=wt(y);p.Ea.add(4),await tu(p),p.Ra.set("Unknown"),p.Ea.delete(4),await wh(p)})(this))}))})),this.Ra=new _I(s,o)}}async function wh(r){if(Js(r))for(const t of r.da)await t(!0)}async function tu(r){for(const t of r.da)await t(!1)}function i0(r,t){const n=wt(r);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),tg(n)?Wm(n):_o(n).O_()&&Jm(n,t))}function Zm(r,t){const n=wt(r),s=_o(n);n.Ia.delete(t),s.O_()&&r0(n,t),n.Ia.size===0&&(s.O_()?s.L_():Js(n)&&n.Ra.set("Unknown"))}function Jm(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(bt.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}_o(r).Y_(t)}function r0(r,t){r.Va.Ue(t),_o(r).Z_(t)}function Wm(r){r.Va=new dR({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),_o(r).start(),r.Ra.ua()}function tg(r){return Js(r)&&!_o(r).x_()&&r.Ia.size>0}function Js(r){return wt(r).Ea.size===0}function s0(r){r.Va=void 0}async function TI(r){r.Ra.set("Online")}async function EI(r){r.Ia.forEach(((t,n)=>{Jm(r,t)}))}async function AI(r,t){s0(r),tg(r)?(r.Ra.ha(t),Wm(r)):r.Ra.set("Unknown")}async function SI(r,t,n){if(r.Ra.set("Online"),t instanceof HE&&t.state===2&&t.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))})(r,t)}catch(s){ot(Gs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await eh(r,s)}else if(t instanceof zc?r.Va.Ze(t):t instanceof qE?r.Va.st(t):r.Va.tt(t),!n.isEqual(bt.min()))try{const s=await t0(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach(((y,p)=>{if(y.resumeToken.approximateByteSize()>0){const T=u.Ia.get(p);T&&u.Ia.set(p,T.withResumeToken(y.resumeToken,f))}})),m.targetMismatches.forEach(((y,p)=>{const T=u.Ia.get(y);if(!T)return;u.Ia.set(y,T.withResumeToken(Xe.EMPTY_BYTE_STRING,T.snapshotVersion)),r0(u,y);const b=new Hr(T.target,y,p,T.sequenceNumber);Jm(u,b)})),u.remoteSyncer.applyRemoteEvent(m)})(r,n)}catch(s){ot(Gs,"Failed to raise snapshot:",s),await eh(r,s)}}async function eh(r,t,n){if(!po(t))throw t;r.Ea.add(1),await tu(r),r.Ra.set("Offline"),n||(n=()=>t0(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ot(Gs,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await wh(r)}))}function a0(r,t){return t().catch((n=>eh(r,n,t)))}async function Rh(r){const t=wt(r),n=Wr(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Um;for(;bI(t);)try{const o=await sI(t.localStore,s);if(o===null){t.Ta.length===0&&n.L_();break}s=o.batchId,wI(t,o)}catch(o){await eh(t,o)}o0(t)&&l0(t)}function bI(r){return Js(r)&&r.Ta.length<10}function wI(r,t){r.Ta.push(t);const n=Wr(r);n.O_()&&n.X_&&n.ea(t.mutations)}function o0(r){return Js(r)&&!Wr(r).x_()&&r.Ta.length>0}function l0(r){Wr(r).start()}async function RI(r){Wr(r).ra()}async function II(r){const t=Wr(r);for(const n of r.Ta)t.ea(n.mutations)}async function CI(r,t,n){const s=r.Ta.shift(),o=Fm.from(s,t,n);await a0(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Rh(r)}async function NI(r,t){t&&Wr(r).X_&&await(async function(s,o){if((function(f){return cR(f)&&f!==K.ABORTED})(o.code)){const u=s.Ta.shift();Wr(s).B_(),await a0(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Rh(s)}})(r,t),o0(r)&&l0(r)}async function Jv(r,t){const n=wt(r);n.asyncQueue.verifyOperationInProgress(),ot(Gs,"RemoteStore received new credentials");const s=Js(n);n.Ea.add(3),await tu(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await wh(n)}async function DI(r,t){const n=wt(r);t?(n.Ea.delete(2),await wh(n)):t||(n.Ea.add(2),await tu(n),n.Ra.set("Unknown"))}function _o(r){return r.ma||(r.ma=(function(n,s,o){const u=wt(n);return u.sa(),new mI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:TI.bind(null,r),t_:EI.bind(null,r),r_:AI.bind(null,r),H_:SI.bind(null,r)}),r.da.push((async t=>{t?(r.ma.B_(),tg(r)?Wm(r):r.Ra.set("Unknown")):(await r.ma.stop(),s0(r))}))),r.ma}function Wr(r){return r.fa||(r.fa=(function(n,s,o){const u=wt(n);return u.sa(),new gI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:RI.bind(null,r),r_:NI.bind(null,r),ta:II.bind(null,r),na:CI.bind(null,r)}),r.da.push((async t=>{t?(r.fa.B_(),await Rh(r)):(await r.fa.stop(),r.Ta.length>0&&(ot(Gs,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class eg{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,m=new eg(t,n,f,o,u);return m.start(s),m}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new st(K.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ng(r,t){if(or("AsyncQueue",`${t}: ${r}`),po(r))return new st(K.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Za{static emptySet(t){return new Za(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||pt.comparator(n.key,s.key):(n,s)=>pt.comparator(n.key,s.key),this.keyedMap=Nl(),this.sortedSet=new he(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,s)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Za)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Za;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Wv{constructor(){this.ga=new he(pt.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):Tt(63341,{Rt:t,pa:s}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,s)=>{t.push(s)})),t}}class lo{constructor(t,n,s,o,u,f,m,y,p){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=p}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach((m=>{f.push({type:0,doc:m})})),new lo(t,n,Za.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zl(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class OI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class MI{constructor(){this.queries=tT(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=wt(n),u=o.queries;o.queries=tT(),u.forEach(((f,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new st(K.ABORTED,"Firestore shutting down"))}}function tT(){return new Zs((r=>NE(r)),Zl)}async function u0(r,t){const n=wt(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.ba()&&t.Da()&&(s=2):(u=new OI,s=t.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=ng(f,`Initialization of query '${Qa(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.Sa.push(t),t.va(n.onlineState),u.wa&&t.Fa(u.wa)&&ig(n)}async function c0(r,t){const n=wt(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function VI(r,t){const n=wt(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&ig(n)}function xI(r,t,n){const s=wt(r),o=s.queries.get(t);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(t)}function ig(r){r.Ca.forEach((t=>{t.next()}))}var Sm,eT;(eT=Sm||(Sm={})).Ma="default",eT.Cache="cache";class h0{constructor(t,n,s){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new lo(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=lo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Sm.Cache}}/**
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
 */class f0{constructor(t){this.key=t}}class d0{constructor(t){this.key=t}}class PI{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pt(),this.mutatedKeys=Pt(),this.eu=DE(t),this.tu=new Za(this.eu)}get nu(){return this.Ya}ru(t,n){const s=n?n.iu:new Wv,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,p=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((T,b)=>{const R=o.get(T),q=Th(this.query,b)?b:null,Y=!!R&&this.mutatedKeys.has(R.key),et=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let J=!1;R&&q?R.data.isEqual(q.data)?Y!==et&&(s.track({type:3,doc:q}),J=!0):this.su(R,q)||(s.track({type:2,doc:q}),J=!0,(y&&this.eu(q,y)>0||p&&this.eu(q,p)<0)&&(m=!0)):!R&&q?(s.track({type:0,doc:q}),J=!0):R&&!q&&(s.track({type:1,doc:R}),J=!0,(y||p)&&(m=!0)),J&&(q?(f=f.add(q),u=et?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{tu:f,iu:s,Cs:m,mutatedKeys:u}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((T,b)=>(function(q,Y){const et=J=>{switch(J){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Tt(20277,{Rt:J})}};return et(q)-et(Y)})(T.type,b.type)||this.eu(T.doc,b.doc))),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,p=y!==this.Za;return this.Za=y,f.length!==0||p?{snapshot:new lo(this.query,t.tu,u,f,t.mutatedKeys,y===0,p,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Wv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Pt(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return t.forEach((s=>{this.Xa.has(s)||n.push(new d0(s))})),this.Xa.forEach((s=>{t.has(s)||n.push(new f0(s))})),n}cu(t){this.Ya=t.Qs,this.Xa=Pt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return lo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const rg="SyncEngine";class kI{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class UI{constructor(t){this.key=t,this.hu=!1}}class LI{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new Zs((m=>NE(m)),Zl),this.Iu=new Map,this.Eu=new Set,this.du=new he(pt.comparator),this.Au=new Map,this.Ru=new Km,this.Vu={},this.mu=new Map,this.fu=oo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function zI(r,t,n=!0){const s=v0(r);let o;const u=s.Tu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await m0(s,t,n,!0),o}async function jI(r,t){const n=v0(r);await m0(n,t,!0,!1)}async function m0(r,t,n,s){const o=await aI(r.localStore,Ti(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await BI(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&i0(r.remoteStore,o),m}async function BI(r,t,n,s,o){r.pu=(b,R,q)=>(async function(et,J,at,lt){let rt=J.view.ru(at);rt.Cs&&(rt=await Kv(et.localStore,J.query,!1).then((({documents:x})=>J.view.ru(x,rt))));const mt=lt&&lt.targetChanges.get(J.targetId),ht=lt&&lt.targetMismatches.get(J.targetId)!=null,Dt=J.view.applyChanges(rt,et.isPrimaryClient,mt,ht);return iT(et,J.targetId,Dt.au),Dt.snapshot})(r,b,R,q);const u=await Kv(r.localStore,t,!0),f=new PI(t,u.Qs),m=f.ru(u.documents),y=Wl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),p=f.applyChanges(m,r.isPrimaryClient,y);iT(r,n,p.au);const T=new kI(t,n,f);return r.Tu.set(t,T),r.Iu.has(n)?r.Iu.get(n).push(t):r.Iu.set(n,[t]),p.snapshot}async function qI(r,t,n){const s=wt(r),o=s.Tu.get(t),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((f=>!Zl(f,t)))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Em(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Zm(s.remoteStore,o.targetId),bm(s,o.targetId)})).catch(go)):(bm(s,o.targetId),await Em(s.localStore,o.targetId,!0))}async function HI(r,t){const n=wt(r),s=n.Tu.get(t),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Zm(n.remoteStore,s.targetId))}async function FI(r,t,n){const s=ZI(r);try{const o=await(function(f,m){const y=wt(f),p=se.now(),T=m.reduce(((q,Y)=>q.add(Y.key)),Pt());let b,R;return y.persistence.runTransaction("Locally write mutations","readwrite",(q=>{let Y=lr(),et=Pt();return y.Ns.getEntries(q,T).next((J=>{Y=J,Y.forEach(((at,lt)=>{lt.isValidDocument()||(et=et.add(at))}))})).next((()=>y.localDocuments.getOverlayedDocuments(q,Y))).next((J=>{b=J;const at=[];for(const lt of m){const rt=sR(lt,b.get(lt.key).overlayedDocument);rt!=null&&at.push(new is(lt.key,rt,EE(rt.value.mapValue),Bn.exists(!0)))}return y.mutationQueue.addMutationBatch(q,p,at,m)})).next((J=>{R=J;const at=J.applyToLocalDocumentSet(b,et);return y.documentOverlayCache.saveOverlays(q,J.batchId,at)}))})).then((()=>({batchId:R.batchId,changes:ME(b)})))})(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),(function(f,m,y){let p=f.Vu[f.currentUser.toKey()];p||(p=new he(xt)),p=p.insert(m,y),f.Vu[f.currentUser.toKey()]=p})(s,o.batchId,n),await eu(s,o.changes),await Rh(s.remoteStore)}catch(o){const u=ng(o,"Failed to persist write");n.reject(u)}}async function g0(r,t){const n=wt(r);try{const s=await iI(n.localStore,t);t.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(Qt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Qt(f.hu,14607):o.removedDocuments.size>0&&(Qt(f.hu,42227),f.hu=!1))})),await eu(n,s,t)}catch(s){await go(s)}}function nT(r,t,n){const s=wt(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((u,f)=>{const m=f.view.va(t);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const y=wt(f);y.onlineState=m;let p=!1;y.queries.forEach(((T,b)=>{for(const R of b.Sa)R.va(m)&&(p=!0)})),p&&ig(y)})(s.eventManager,t),o.length&&s.Pu.H_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function GI(r,t,n){const s=wt(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Au.get(t),u=o&&o.key;if(u){let f=new he(pt.comparator);f=f.insert(u,en.newNoDocument(u,bt.min()));const m=Pt().add(u),y=new Sh(bt.min(),new Map,new he(xt),f,m);await g0(s,y),s.du=s.du.remove(u),s.Au.delete(t),sg(s)}else await Em(s.localStore,t,!1).then((()=>bm(s,t,n))).catch(go)}async function QI(r,t){const n=wt(r),s=t.batch.batchId;try{const o=await nI(n.localStore,t);y0(n,s,null),p0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await eu(n,o)}catch(o){await go(o)}}async function KI(r,t,n){const s=wt(r);try{const o=await(function(f,m){const y=wt(f);return y.persistence.runTransaction("Reject batch","readwrite-primary",(p=>{let T;return y.mutationQueue.lookupMutationBatch(p,m).next((b=>(Qt(b!==null,37113),T=b.keys(),y.mutationQueue.removeMutationBatch(p,b)))).next((()=>y.mutationQueue.performConsistencyCheck(p))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(p,T,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,T))).next((()=>y.localDocuments.getDocuments(p,T)))}))})(s.localStore,t);y0(s,t,n),p0(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await eu(s,o)}catch(o){await go(o)}}function p0(r,t){(r.mu.get(t)||[]).forEach((n=>{n.resolve()})),r.mu.delete(t)}function y0(r,t,n){const s=wt(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Vu[s.currentUser.toKey()]=o}}function bm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Iu.get(t))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach((s=>{r.Ru.containsKey(s)||_0(r,s)}))}function _0(r,t){r.Eu.delete(t.path.canonicalString());const n=r.du.get(t);n!==null&&(Zm(r.remoteStore,n),r.du=r.du.remove(t),r.Au.delete(n),sg(r))}function iT(r,t,n){for(const s of n)s instanceof f0?(r.Ru.addReference(s.key,t),YI(r,s)):s instanceof d0?(ot(rg,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,t),r.Ru.containsKey(s.key)||_0(r,s.key)):Tt(19791,{wu:s})}function YI(r,t){const n=t.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(ot(rg,"New document in limbo: "+n),r.Eu.add(s),sg(r))}function sg(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const n=new pt(re.fromString(t)),s=r.fu.next();r.Au.set(s,new UI(n)),r.du=r.du.insert(n,s),i0(r.remoteStore,new Hr(Ti(vh(n.path)),s,"TargetPurposeLimboResolution",ph.ce))}}async function eu(r,t,n){const s=wt(r),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{f.push(s.pu(y,t,n).then((p=>{if((p||n)&&s.isPrimaryClient){const T=p?!p.fromCache:n?.targetChanges.get(y.targetId)?.current;s.sharedClientState.updateQueryState(y.targetId,T?"current":"not-current")}if(p){o.push(p);const T=Xm.As(y.targetId,p);u.push(T)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(y,p){const T=wt(y);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>$.forEach(p,(R=>$.forEach(R.Es,(q=>T.persistence.referenceDelegate.addReference(b,R.targetId,q))).next((()=>$.forEach(R.ds,(q=>T.persistence.referenceDelegate.removeReference(b,R.targetId,q)))))))))}catch(b){if(!po(b))throw b;ot($m,"Failed to update sequence numbers: "+b)}for(const b of p){const R=b.targetId;if(!b.fromCache){const q=T.Ms.get(R),Y=q.snapshotVersion,et=q.withLastLimboFreeSnapshotVersion(Y);T.Ms=T.Ms.insert(R,et)}}})(s.localStore,u))}async function XI(r,t){const n=wt(r);if(!n.currentUser.isEqual(t)){ot(rg,"User change. New user:",t.toKey());const s=await WE(n.localStore,t);n.currentUser=t,(function(u,f){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new st(K.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await eu(n,s.Ls)}}function $I(r,t){const n=wt(r),s=n.Au.get(t);if(s&&s.hu)return Pt().add(s.key);{let o=Pt();const u=n.Iu.get(t);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function v0(r){const t=wt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=g0.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=$I.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=GI.bind(null,t),t.Pu.H_=VI.bind(null,t.eventManager),t.Pu.yu=xI.bind(null,t.eventManager),t}function ZI(r){const t=wt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=QI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=KI.bind(null,t),t}class nh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=bh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return eI(this.persistence,new JR,t.initialUser,this.serializer)}Cu(t){return new JE(Ym.mi,this.serializer)}Du(t){return new lI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nh.provider={build:()=>new nh};class JI extends nh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){Qt(this.persistence.referenceDelegate instanceof th,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new UR(s,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?hn.withCacheSize(this.cacheSizeBytes):hn.DEFAULT;return new JE((s=>th.mi(s,n)),this.serializer)}}class wm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>nT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=XI.bind(null,this.syncEngine),await DI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new MI})()}createDatastore(t){const n=bh(t.databaseInfo.databaseId),s=(function(u){return new dI(u)})(t.databaseInfo);return(function(u,f,m,y){return new yI(u,f,m,y)})(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return(function(s,o,u,f,m){return new vI(s,o,u,f,m)})(this.localStore,this.datastore,t.asyncQueue,(n=>nT(this.syncEngine,n,0)),(function(){return $v.v()?new $v:new uI})())}createSyncEngine(t,n){return(function(o,u,f,m,y,p,T){const b=new LI(o,u,f,m,y,p);return T&&(b.gu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=wt(n);ot(Gs,"RemoteStore shutting down."),s.Ea.add(5),await tu(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}wm.provider={build:()=>new wm};/**
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
 */class T0{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):or("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
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
 */const ts="FirestoreClient";class WI{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=tn.UNAUTHENTICATED,this.clientId=km.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{ot(ts,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(ot(ts,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ng(n,"Failed to shutdown persistence");t.reject(s)}})),t.promise}}async function Wd(r,t){r.asyncQueue.verifyOperationInProgress(),ot(ts,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await WE(t.localStore,o),s=o)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function rT(r,t){r.asyncQueue.verifyOperationInProgress();const n=await tC(r);ot(ts,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener((s=>Jv(t.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Jv(t.remoteStore,o))),r._onlineComponents=t}async function tC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ot(ts,"Using user provided OfflineComponentProvider");try{await Wd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;io("Error using user provided cache. Falling back to memory cache: "+n),await Wd(r,new nh)}}else ot(ts,"Using default OfflineComponentProvider"),await Wd(r,new JI(void 0));return r._offlineComponents}async function E0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ot(ts,"Using user provided OnlineComponentProvider"),await rT(r,r._uninitializedComponentsProvider._online)):(ot(ts,"Using default OnlineComponentProvider"),await rT(r,new wm))),r._onlineComponents}function eC(r){return E0(r).then((t=>t.syncEngine))}async function Rm(r){const t=await E0(r),n=t.eventManager;return n.onListen=zI.bind(null,t.syncEngine),n.onUnlisten=qI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=jI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=HI.bind(null,t.syncEngine),n}function nC(r,t,n={}){const s=new Kr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,y,p){const T=new T0({next:R=>{T.Nu(),f.enqueueAndForget((()=>c0(u,b)));const q=R.docs.has(m);!q&&R.fromCache?p.reject(new st(K.UNAVAILABLE,"Failed to get document because the client is offline.")):q&&R.fromCache&&y&&y.source==="server"?p.reject(new st(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(R)},error:R=>p.reject(R)}),b=new h0(vh(m.path),T,{includeMetadataChanges:!0,qa:!0});return u0(u,b)})(await Rm(r),r.asyncQueue,t,n,s))),s.promise}/**
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
 */function A0(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const sT=new Map;/**
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
 */const S0="firestore.googleapis.com",aT=!0;class oT{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new st(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=S0,this.ssl=aT}else this.host=t.host,this.ssl=t.ssl??aT;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ZE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<PR)throw new st(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}_1("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=A0(t.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new st(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new st(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new st(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ih{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new st(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new st(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oT(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new l1;switch(s.type){case"firstParty":return new f1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new st(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=sT.get(n);s&&(ot("ComponentProvider","Removing Datastore"),sT.delete(n),s.terminate())})(this),Promise.resolve()}}function iC(r,t,n,s={}){r=jn(r,Ih);const o=ho(t),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},m=`${t}:${n}`;o&&(GT(`https://${m}`),QT("Firestore",!0)),u.host!==S0&&u.host!==m&&io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!Yr(y,f)&&(r._setSettings(y),s.mockUserToken)){let p,T;if(typeof s.mockUserToken=="string")p=s.mockUserToken,T=tn.MOCK_USER;else{p=Mb(s.mockUserToken,r._app?.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new st(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new tn(b)}r._authCredentials=new u1(new uE(p,T))}}/**
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
 */class Ci{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ci(this.firestore,t,this._query)}}class le{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new le(this.firestore,t,this._key)}toJSON(){return{type:le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if($l(n,le._jsonSchema))return new le(t,s||null,new pt(re.fromString(n.referencePath)))}}le._jsonSchemaVersion="firestore/documentReference/1.0",le._jsonSchema={type:Ie("string",le._jsonSchemaVersion),referencePath:Ie("string")};class Ai extends Ci{constructor(t,n,s){super(t,n,vh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new le(this.firestore,null,new pt(t))}withConverter(t){return new Ai(this.firestore,t,this._path)}}function rC(r,t,...n){if(r=ue(r),cE("collection","path",t),r instanceof Ih){const s=re.fromString(t,...n);return Tv(s),new Ai(r,null,s)}{if(!(r instanceof le||r instanceof Ai))throw new st(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(re.fromString(t,...n));return Tv(s),new Ai(r.firestore,null,s)}}function uo(r,t,...n){if(r=ue(r),arguments.length===1&&(t=km.newId()),cE("doc","path",t),r instanceof Ih){const s=re.fromString(t,...n);return vv(s),new le(r,null,new pt(s))}{if(!(r instanceof le||r instanceof Ai))throw new st(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(re.fromString(t,...n));return vv(s),new le(r.firestore,r instanceof Ai?r.converter:null,new pt(s))}}function sC(r,t){return r=ue(r),t=ue(t),(r instanceof le||r instanceof Ai)&&(t instanceof le||t instanceof Ai)&&r.firestore===t.firestore&&r.path===t.path&&r.converter===t.converter}function aC(r,t){return r=ue(r),t=ue(t),r instanceof Ci&&t instanceof Ci&&r.firestore===t.firestore&&Zl(r._query,t._query)&&r.converter===t.converter}/**
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
 */const lT="AsyncQueue";class uT{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new e0(this,"async_queue_retry"),this._c=()=>{const s=Jd();s&&ot(lT,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const n=Jd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Jd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Kr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!po(t))throw t;ot(lT,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,or("INTERNAL UNHANDLED ERROR: ",cT(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(t,n,s){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const o=eg.createAndSchedule(this,t,n,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&Tt(47125,{Pc:cT(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function cT(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function hT(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(r,["next","error","complete"])}class es extends Ih{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new uT,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new uT(t),this._firestoreClient=void 0,await t}}}function oC(r,t){const n=typeof r=="object"?r:xm(),s=typeof r=="string"?r:Yc,o=$s(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Db("firestore");u&&iC(o,...u)}return o}function ag(r){if(r._terminated)throw new st(K.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||lC(r),r._firestoreClient}function lC(r){const t=r._freezeSettings(),n=(function(o,u,f,m){return new N1(o,u,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,A0(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new WI(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(r._componentsProvider))}/**
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
 */class Ln{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ln(Xe.fromBase64String(t))}catch(n){throw new st(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ln(Xe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ln._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if($l(t,Ln._jsonSchema))return Ln.fromBase64String(t.bytes)}}Ln._jsonSchemaVersion="firestore/bytes/1.0",Ln._jsonSchema={type:Ie("string",Ln._jsonSchemaVersion),bytes:Ie("string")};/**
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
 */class Ch{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new st(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Nh{constructor(t){this._methodName=t}}/**
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
 */class Si{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new st(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new st(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return xt(this._lat,t._lat)||xt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Si._jsonSchemaVersion}}static fromJSON(t){if($l(t,Si._jsonSchema))return new Si(t.latitude,t.longitude)}}Si._jsonSchemaVersion="firestore/geoPoint/1.0",Si._jsonSchema={type:Ie("string",Si._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
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
 */class bi{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:bi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if($l(t,bi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new bi(t.vectorValues);throw new st(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bi._jsonSchemaVersion="firestore/vectorValue/1.0",bi._jsonSchema={type:Ie("string",bi._jsonSchemaVersion),vectorValues:Ie("object")};/**
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
 */const uC=/^__.*__$/;class cC{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new is(t,this.data,this.fieldMask,n,this.fieldTransforms):new Jl(t,this.data,n,this.fieldTransforms)}}class b0{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new is(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function w0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Tt(40011,{Ac:r})}}class og{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new og({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.gc(t),s}yc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return ih(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(w0(this.Ac)&&uC.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class hC{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||bh(t)}Cc(t,n,s,o=!1){return new og({Ac:t,methodName:n,Dc:s,path:Ye.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dh(r){const t=r._freezeSettings(),n=bh(r._databaseId);return new hC(r._databaseId,!!t.ignoreUndefinedProperties,n)}function R0(r,t,n,s,o,u={}){const f=r.Cc(u.merge||u.mergeFields?2:0,t,n,o);ug("Data must be an object, but it was:",f,s);const m=I0(s,f);let y,p;if(u.merge)y=new Sn(f.fieldMask),p=f.fieldTransforms;else if(u.mergeFields){const T=[];for(const b of u.mergeFields){const R=Im(t,b,n);if(!f.contains(R))throw new st(K.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);N0(T,R)||T.push(R)}y=new Sn(T),p=f.fieldTransforms.filter((b=>y.covers(b.field)))}else y=null,p=f.fieldTransforms;return new cC(new fn(m),y,p)}class Oh extends Nh{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Oh}}class lg extends Nh{_toFieldTransform(t){return new eR(t.path,new Gl)}isEqual(t){return t instanceof lg}}function fC(r,t,n,s){const o=r.Cc(1,t,n);ug("Data must be an object, but it was:",o,s);const u=[],f=fn.empty();ns(s,((y,p)=>{const T=cg(t,y,n);p=ue(p);const b=o.yc(T);if(p instanceof Oh)u.push(T);else{const R=nu(p,b);R!=null&&(u.push(T),f.set(T,R))}}));const m=new Sn(u);return new b0(f,m,o.fieldTransforms)}function dC(r,t,n,s,o,u){const f=r.Cc(1,t,n),m=[Im(t,s,n)],y=[o];if(u.length%2!=0)throw new st(K.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<u.length;R+=2)m.push(Im(t,u[R])),y.push(u[R+1]);const p=[],T=fn.empty();for(let R=m.length-1;R>=0;--R)if(!N0(p,m[R])){const q=m[R];let Y=y[R];Y=ue(Y);const et=f.yc(q);if(Y instanceof Oh)p.push(q);else{const J=nu(Y,et);J!=null&&(p.push(q),T.set(q,J))}}const b=new Sn(p);return new b0(T,b,f.fieldTransforms)}function mC(r,t,n,s=!1){return nu(n,r.Cc(s?4:3,t))}function nu(r,t){if(C0(r=ue(r)))return ug("Unsupported field value:",t,r),I0(r,t);if(r instanceof Nh)return(function(s,o){if(!w0(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let f=0;for(const m of s){let y=nu(m,o.wc(f));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),f++}return{arrayValue:{values:u}}})(r,t)}return(function(s,o){if((s=ue(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return J1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=se.fromDate(s);return{timestampValue:Wc(o.serializer,u)}}if(s instanceof se){const u=new se(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Wc(o.serializer,u)}}if(s instanceof Si)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ln)return{bytesValue:FE(o.serializer,s._byteString)};if(s instanceof le){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Qm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof bi)return(function(f,m){return{mapValue:{fields:{[vE]:{stringValue:TE},[Xc]:{arrayValue:{values:f.toArray().map((p=>{if(typeof p!="number")throw m.Sc("VectorValues must only contain numeric values.");return qm(m.serializer,p)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${gh(s)}`)})(r,t)}function I0(r,t){const n={};return dE(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ns(r,((s,o)=>{const u=nu(o,t.mc(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function C0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof se||r instanceof Si||r instanceof Ln||r instanceof le||r instanceof Nh||r instanceof bi)}function ug(r,t,n){if(!C0(n)||!hE(n)){const s=gh(n);throw s==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+s)}}function Im(r,t,n){if((t=ue(t))instanceof Ch)return t._internalPath;if(typeof t=="string")return cg(r,t);throw ih("Field path arguments must be of type string or ",r,!1,void 0,n)}const gC=new RegExp("[~\\*/\\[\\]]");function cg(r,t,n){if(t.search(gC)>=0)throw ih(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Ch(...t.split("."))._internalPath}catch{throw ih(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function ih(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||f)&&(y+=" (found",u&&(y+=` in field ${s}`),f&&(y+=` in document ${o}`),y+=")"),new st(K.INVALID_ARGUMENT,m+r+y)}function N0(r,t){return r.some((n=>n.isEqual(t)))}/**
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
 */class D0{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new pC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(hg("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pC extends D0{data(){return super.data()}}function hg(r,t){return typeof t=="string"?cg(r,t):t instanceof Ch?t._internalPath:t._delegate._internalPath}/**
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
 */function yC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new st(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fg{}class dg extends fg{}function _C(r,t,...n){let s=[];t instanceof fg&&s.push(t),s=s.concat(n),(function(u){const f=u.filter((y=>y instanceof gg)).length,m=u.filter((y=>y instanceof mg)).length;if(f>1||f>0&&m>0)throw new st(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class mg extends dg{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new mg(t,n,s)}_apply(t){const n=this._parse(t);return O0(t._query,n),new Ci(t.firestore,t.converter,pm(t._query,n))}_parse(t){const n=Dh(t.firestore);return(function(u,f,m,y,p,T,b){let R;if(p.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new st(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){dT(b,T);const Y=[];for(const et of b)Y.push(fT(y,u,et));R={arrayValue:{values:Y}}}else R=fT(y,u,b)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||dT(b,T),R=mC(m,f,b,T==="in"||T==="not-in");return Re.create(p,T,R)})(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class gg extends fg{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new gg(t,n)}_parse(t){const n=this._queryConstraints.map((s=>s._parse(t))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:Wn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:((function(o,u){let f=o;const m=u.getFlattenedFilters();for(const y of m)O0(f,y),f=pm(f,y)})(t._query,n),new Ci(t.firestore,t.converter,pm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pg extends dg{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new pg(t,n)}_apply(t){const n=(function(o,u,f){if(o.startAt!==null)throw new st(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new st(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fl(u,f)})(t._query,this._field,this._direction);return new Ci(t.firestore,t.converter,(function(o,u){const f=o.explicitOrderBy.concat([u]);return new yo(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(t._query,n))}}function vC(r,t="asc"){const n=t,s=hg("orderBy",r);return pg._create(s,n)}class yg extends dg{constructor(t,n,s){super(),this.type=t,this._limit=n,this._limitType=s}static _create(t,n,s){return new yg(t,n,s)}_apply(t){return new Ci(t.firestore,t.converter,Zc(t._query,this._limit,this._limitType))}}function TC(r){return yg._create("limit",r,"F")}function fT(r,t,n){if(typeof(n=ue(n))=="string"){if(n==="")throw new st(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!CE(t)&&n.indexOf("/")!==-1)throw new st(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(re.fromString(n));if(!pt.isDocumentKey(s))throw new st(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Cv(r,new pt(s))}if(n instanceof le)return Cv(r,n._key);throw new st(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gh(n)}.`)}function dT(r,t){if(!Array.isArray(r)||r.length===0)throw new st(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function O0(r,t){const n=(function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(n!==null)throw n===t.op?new st(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new st(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class EC{convertValue(t,n="none"){switch(Jr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Te(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Zr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw Tt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return ns(t,((o,u)=>{s[o]=this.convertValue(u,n)})),s}convertVectorValue(t){const n=t.fields?.[Xc].arrayValue?.values?.map((s=>Te(s.doubleValue)));return new bi(n)}convertGeoPoint(t){return new Si(Te(t.latitude),Te(t.longitude))}convertArray(t,n){return(t.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const s=_h(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Bl(t));default:return null}}convertTimestamp(t){const n=$r(t);return new se(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=re.fromString(t);Qt($E(s),9688,{name:t});const o=new ql(s.get(1),s.get(3)),u=new pt(s.popFirst(5));return o.isEqual(n)||or(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */function M0(r,t,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t,s}class Ol{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class qs extends D0{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new jc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(hg("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new st(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=qs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qs._jsonSchemaVersion="firestore/documentSnapshot/1.0",qs._jsonSchema={type:Ie("string",qs._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class jc extends qs{data(t={}){return super.data(t)}}class Ja{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Ol(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((s=>{t.call(n,new jc(this._firestore,this._userDataWriter,s.key,s,new Ol(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new st(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const y=new jc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ol(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new jc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ol(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let p=-1,T=-1;return m.type!==0&&(p=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),T=f.indexOf(m.doc.key)),{type:AC(m.type),doc:y,oldIndex:p,newIndex:T}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new st(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ja._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=km.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function AC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Tt(61501,{type:r})}}/**
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
 */function SC(r){r=jn(r,le);const t=jn(r.firestore,es);return nC(ag(t),r._key).then((n=>k0(t,r,n)))}Ja._jsonSchemaVersion="firestore/querySnapshot/1.0",Ja._jsonSchema={type:Ie("string",Ja._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class V0 extends EC{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ln(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new le(this.firestore,null,n)}}function bC(r,t,n){r=jn(r,le);const s=jn(r.firestore,es),o=M0(r.converter,t,n);return Mh(s,[R0(Dh(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Bn.none())])}function x0(r,t,n,...s){r=jn(r,le);const o=jn(r.firestore,es),u=Dh(o);let f;return f=typeof(t=ue(t))=="string"||t instanceof Ch?dC(u,"updateDoc",r._key,t,n,s):fC(u,"updateDoc",r._key,t),Mh(o,[f.toMutation(r._key,Bn.exists(!0))])}function wC(r){return Mh(jn(r.firestore,es),[new Hm(r._key,Bn.none())])}function RC(r,t){const n=jn(r.firestore,es),s=uo(r),o=M0(r.converter,t);return Mh(n,[R0(Dh(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Bn.exists(!1))]).then((()=>s))}function P0(r,...t){r=ue(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof t[s]!="object"||hT(t[s])||(n=t[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(hT(t[s])){const y=t[s];t[s]=y.next?.bind(y),t[s+1]=y.error?.bind(y),t[s+2]=y.complete?.bind(y)}let u,f,m;if(r instanceof le)f=jn(r.firestore,es),m=vh(r._key.path),u={next:y=>{t[s]&&t[s](k0(f,r,y))},error:t[s+1],complete:t[s+2]};else{const y=jn(r,Ci);f=jn(y.firestore,es),m=y._query;const p=new V0(f);u={next:T=>{t[s]&&t[s](new Ja(f,p,y,T))},error:t[s+1],complete:t[s+2]},yC(r._query)}return(function(p,T,b,R){const q=new T0(R),Y=new h0(T,q,b);return p.asyncQueue.enqueueAndForget((async()=>u0(await Rm(p),Y))),()=>{q.Nu(),p.asyncQueue.enqueueAndForget((async()=>c0(await Rm(p),Y)))}})(ag(f),m,o,u)}function Mh(r,t){return(function(s,o){const u=new Kr;return s.asyncQueue.enqueueAndForget((async()=>FI(await eC(s),o,u))),u.promise})(ag(r),t)}function k0(r,t,n){const s=n.docs.get(t._key),o=new V0(r);return new qs(r,o,t._key,s,new Ol(n.hasPendingWrites,n.fromCache),t.converter)}function rh(){return new lg("serverTimestamp")}(function(t,n=!0){(function(o){mo=o})(fo),Ri(new Jn("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new es(new c1(s.getProvider("auth-internal")),new d1(f,s.getProvider("app-check-internal")),(function(p,T){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new st(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ql(p.options.projectId,T)})(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),zn(gv,pv,t),zn(gv,pv,"esm2020")})();function U0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IC=U0,L0=new Xs("auth","Firebase",U0());/**
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
 */const sh=new mh("@firebase/auth");function CC(r,...t){sh.logLevel<=Vt.WARN&&sh.warn(`Auth (${fo}): ${r}`,...t)}function Bc(r,...t){sh.logLevel<=Vt.ERROR&&sh.error(`Auth (${fo}): ${r}`,...t)}/**
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
 */function Ni(r,...t){throw vg(r,...t)}function Zn(r,...t){return vg(r,...t)}function _g(r,t,n){const s={...IC(),[t]:n};return new Xs("auth","Firebase",s).create(t,{appName:r.name})}function Hs(r){return _g(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function NC(r,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&Ni(r,"argument-error"),_g(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vg(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return L0.create(r,...t)}function St(r,t,...n){if(!r)throw vg(t,...n)}function ir(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Bc(t),new Error(t)}function ur(r,t){r||ir(t)}/**
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
 */function Cm(){return typeof self<"u"&&self.location?.href||""}function DC(){return mT()==="http:"||mT()==="https:"}function mT(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function OC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DC()||KT()||"connection"in navigator)?navigator.onLine:!0}function MC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class iu{constructor(t,n){this.shortDelay=t,this.longDelay=n,ur(n>t,"Short delay should be less than long delay!"),this.isMobile=Pb()||Lb()}get(){return OC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tg(r,t){ur(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class z0{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],PC=new iu(3e4,6e4);function Eg(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function vo(r,t,n,s,o={}){return j0(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const m=Xl({key:r.config.apiKey,...f}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const p={method:t,headers:y,...u};return Ub()||(p.referrerPolicy="no-referrer"),r.emulatorConfig&&ho(r.emulatorConfig.host)&&(p.credentials="include"),z0.fetch()(await B0(r,r.config.apiHost,n,m),p)})}async function j0(r,t,n){r._canInitEmulator=!1;const s={...VC,...t};try{const o=new UC(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw xc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[y,p]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw xc(r,"credential-already-in-use",f);if(y==="EMAIL_EXISTS")throw xc(r,"email-already-in-use",f);if(y==="USER_DISABLED")throw xc(r,"user-disabled",f);const T=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw _g(r,T,p);Ni(r,T)}}catch(o){if(o instanceof ti)throw o;Ni(r,"network-request-failed",{message:String(o)})}}async function kC(r,t,n,s,o={}){const u=await vo(r,t,n,s,o);return"mfaPendingCredential"in u&&Ni(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function B0(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?Tg(r.config,o):`${r.config.apiScheme}://${o}`;return xC.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}class UC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Zn(this.auth,"network-request-failed")),PC.get())})}}function xc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Zn(r,t,s);return o.customData._tokenResponse=n,o}/**
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
 */async function LC(r,t){return vo(r,"POST","/v1/accounts:delete",t)}async function ah(r,t){return vo(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ul(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function zC(r,t=!1){const n=ue(r),s=await n.getIdToken(t),o=Ag(s);St(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:Ul(tm(o.auth_time)),issuedAtTime:Ul(tm(o.iat)),expirationTime:Ul(tm(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function tm(r){return Number(r)*1e3}function Ag(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Bc("JWT malformed, contained fewer than 3 sections"),null;try{const o=BT(n);return o?JSON.parse(o):(Bc("Failed to decode base64 JWT payload"),null)}catch(o){return Bc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function gT(r){const t=Ag(r);return St(t,"internal-error"),St(typeof t.exp<"u","internal-error"),St(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Yl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof ti&&jC(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function jC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class BC{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ul(this.lastLoginAt),this.creationTime=Ul(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oh(r){const t=r.auth,n=await r.getIdToken(),s=await Yl(r,ah(t,{idToken:n}));St(s?.users.length,t,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=o.providerUserInfo?.length?q0(o.providerUserInfo):[],f=HC(r.providerData,u),m=r.isAnonymous,y=!(r.email&&o.passwordHash)&&!f?.length,p=m?y:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Nm(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(r,T)}async function qC(r){const t=ue(r);await oh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function HC(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function q0(r){return r.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function FC(r,t){const n=await j0(r,{},async()=>{const s=Xl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await B0(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return r.emulatorConfig&&ho(r.emulatorConfig.host)&&(y.credentials="include"),z0.fetch()(f,y)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GC(r,t){return vo(r,"POST","/v2/accounts:revokeToken",Eg(r,t))}/**
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
 */class Wa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){St(t.idToken,"internal-error"),St(typeof t.idToken<"u","internal-error"),St(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):gT(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){St(t.length!==0,"internal-error");const n=gT(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(St(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await FC(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Wa;return s&&(St(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(St(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(St(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Wa,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
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
 */function zr(r,t){St(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class $n{constructor({uid:t,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new BC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Nm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Yl(this,this.stsTokenManager.getToken(this.auth,t));return St(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return zC(this,t)}reload(){return qC(this)}_assign(t){this!==t&&(St(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new $n({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){St(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await oh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(Hs(this.auth));const t=await this.getIdToken();return await Yl(this,LC(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,y=n._redirectEventId??void 0,p=n.createdAt??void 0,T=n.lastLoginAt??void 0,{uid:b,emailVerified:R,isAnonymous:q,providerData:Y,stsTokenManager:et}=n;St(b&&et,t,"internal-error");const J=Wa.fromJSON(this.name,et);St(typeof b=="string",t,"internal-error"),zr(s,t.name),zr(o,t.name),St(typeof R=="boolean",t,"internal-error"),St(typeof q=="boolean",t,"internal-error"),zr(u,t.name),zr(f,t.name),zr(m,t.name),zr(y,t.name),zr(p,t.name),zr(T,t.name);const at=new $n({uid:b,auth:t,email:o,emailVerified:R,displayName:s,isAnonymous:q,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:J,createdAt:p,lastLoginAt:T});return Y&&Array.isArray(Y)&&(at.providerData=Y.map(lt=>({...lt}))),y&&(at._redirectEventId=y),at}static async _fromIdTokenResponse(t,n,s=!1){const o=new Wa;o.updateFromServerResponse(n);const u=new $n({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await oh(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];St(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?q0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,m=new Wa;m.updateFromIdToken(s);const y=new $n({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:f}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Nm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(y,p),y}}/**
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
 */const pT=new Map;function rr(r){ur(r instanceof Function,"Expected a class definition");let t=pT.get(r);return t?(ur(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,pT.set(r,t),t)}/**
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
 */class H0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}H0.type="NONE";const yT=H0;/**
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
 */function qc(r,t,n){return`firebase:${r}:${t}:${n}`}class to{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=qc(this.userKey,o.apiKey,u),this.fullPersistenceKey=qc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await ah(this.auth,{idToken:t}).catch(()=>{});return n?$n._fromGetAccountInfoResponse(this.auth,n,t):null}return $n._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new to(rr(yT),t,s);const o=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let u=o[0]||rr(yT);const f=qc(s,t.config.apiKey,t.name);let m=null;for(const p of n)try{const T=await p._get(f);if(T){let b;if(typeof T=="string"){const R=await ah(t,{idToken:T}).catch(()=>{});if(!R)break;b=await $n._fromGetAccountInfoResponse(t,R,T)}else b=$n._fromJSON(t,T);p!==u&&(m=b),u=p;break}}catch{}const y=o.filter(p=>p._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new to(u,t,s):(u=y[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async p=>{if(p!==u)try{await p._remove(f)}catch{}})),new to(u,t,s))}}/**
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
 */function _T(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(K0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(F0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(X0(t))return"Blackberry";if($0(t))return"Webos";if(G0(t))return"Safari";if((t.includes("chrome/")||Q0(t))&&!t.includes("edge/"))return"Chrome";if(Y0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function F0(r=nn()){return/firefox\//i.test(r)}function G0(r=nn()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Q0(r=nn()){return/crios\//i.test(r)}function K0(r=nn()){return/iemobile/i.test(r)}function Y0(r=nn()){return/android/i.test(r)}function X0(r=nn()){return/blackberry/i.test(r)}function $0(r=nn()){return/webos/i.test(r)}function Sg(r=nn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function QC(r=nn()){return Sg(r)&&!!window.navigator?.standalone}function KC(){return zb()&&document.documentMode===10}function Z0(r=nn()){return Sg(r)||Y0(r)||$0(r)||X0(r)||/windows phone/i.test(r)||K0(r)}/**
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
 */function J0(r,t=[]){let n;switch(r){case"Browser":n=_T(nn());break;case"Worker":n=`${_T(nn())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${fo}/${s}`}/**
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
 */class YC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,m)=>{try{const y=t(u);f(y)}catch(y){m(y)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function XC(r,t={}){return vo(r,"GET","/v2/passwordPolicy",Eg(r,t))}/**
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
 */const $C=6;class ZC{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??$C,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
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
 */class JC{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vT(this),this.idTokenSubscription=new vT(this),this.beforeStateQueue=new YC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=rr(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await to.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ah(this,{idToken:t}),s=await $n._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Xn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,f=s?._redirectEventId,m=await this.tryRedirectSignIn(t);(!u||u===f)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return St(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await oh(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=MC()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Xn(this.app))return Promise.reject(Hs(this));const n=t?ue(t):null;return n&&St(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&St(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(Hs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Xn(this.app)?Promise.reject(Hs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await XC(this),n=new ZC(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Xs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await GC(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&rr(t)||this._popupRedirectResolver;St(n,this,"argument-error"),this.redirectPersistenceManager=await to.create(this,[rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(St(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const y=t.addObserver(n,s,o);return()=>{f=!0,y()}}else{const y=t.addObserver(n);return()=>{f=!0,y()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return St(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=J0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(Xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&CC(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Vh(r){return ue(r)}class vT{constructor(t){this.auth=t,this.observer=null,this.addObserver=Qb(n=>this.observer=n)}get next(){return St(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WC(r){bg=r}function t2(r){return bg.loadJS(r)}function e2(){return bg.gapiScript}function n2(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function i2(r,t){const n=$s(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Yr(u,t??{}))return o;Ni(o,"already-initialized")}return n.initialize({options:t})}function r2(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(rr);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function s2(r,t,n){const s=Vh(r);St(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=W0(t),{host:f,port:m}=a2(t),y=m===null?"":`:${m}`,p={url:`${u}//${f}${y}/`},T=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){St(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),St(Yr(p,s.config.emulator)&&Yr(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=p,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,ho(f)?(GT(`${u}//${f}${y}`),QT("Auth",!0)):o2()}function W0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function a2(r){const t=W0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:TT(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:TT(f)}}}function TT(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function o2(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class tA{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ir("not implemented")}_getIdTokenResponse(t){return ir("not implemented")}_linkToIdToken(t,n){return ir("not implemented")}_getReauthenticationResolver(t){return ir("not implemented")}}/**
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
 */async function eo(r,t){return kC(r,"POST","/v1/accounts:signInWithIdp",Eg(r,t))}/**
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
 */const l2="http://localhost";class Qs extends tA{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Qs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ni("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new Qs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return eo(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,eo(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,eo(t,n)}buildRequest(){const t={requestUri:l2,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Xl(n)}return t}}/**
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
 */class wg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ru extends wg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class jr extends ru{constructor(){super("facebook.com")}static credential(t){return Qs._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jr.credentialFromTaggedObject(t)}static credentialFromError(t){return jr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jr.credential(t.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
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
 */class nr extends ru{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Qs._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return nr.credentialFromTaggedObject(t)}static credentialFromError(t){return nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return nr.credential(n,s)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
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
 */class Br extends ru{constructor(){super("github.com")}static credential(t){return Qs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Br.credentialFromTaggedObject(t)}static credentialFromError(t){return Br.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Br.credential(t.oauthAccessToken)}catch{return null}}}Br.GITHUB_SIGN_IN_METHOD="github.com";Br.PROVIDER_ID="github.com";/**
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
 */class qr extends ru{constructor(){super("twitter.com")}static credential(t,n){return Qs._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return qr.credentialFromTaggedObject(t)}static credentialFromError(t){return qr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return qr.credential(n,s)}catch{return null}}}qr.TWITTER_SIGN_IN_METHOD="twitter.com";qr.PROVIDER_ID="twitter.com";/**
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
 */class co{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await $n._fromIdTokenResponse(t,s,o),f=ET(s);return new co({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=ET(s);return new co({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function ET(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class lh extends ti{constructor(t,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,lh.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new lh(t,n,s,o)}}function eA(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?lh._fromErrorAndOperation(r,u,t,s):u})}async function u2(r,t,n=!1){const s=await Yl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return co._forOperation(r,"link",s)}/**
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
 */async function c2(r,t,n=!1){const{auth:s}=r;if(Xn(s.app))return Promise.reject(Hs(s));const o="reauthenticate";try{const u=await Yl(r,eA(s,o,t,r),n);St(u.idToken,s,"internal-error");const f=Ag(u.idToken);St(f,s,"internal-error");const{sub:m}=f;return St(r.uid===m,s,"user-mismatch"),co._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Ni(s,"user-mismatch"),u}}/**
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
 */async function h2(r,t,n=!1){if(Xn(r.app))return Promise.reject(Hs(r));const s="signIn",o=await eA(r,s,t),u=await co._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}function f2(r,t,n,s){return ue(r).onIdTokenChanged(t,n,s)}function d2(r,t,n){return ue(r).beforeAuthStateChanged(t,n)}function m2(r,t,n,s){return ue(r).onAuthStateChanged(t,n,s)}function g2(r){return ue(r).signOut()}const uh="__sak";/**
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
 */class nA{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uh,"1"),this.storage.removeItem(uh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const p2=1e3,y2=10;class iA extends nA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Z0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,m,y)=>{this.notifyListeners(f,y)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);KC()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,y2):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},p2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}iA.type="LOCAL";const _2=iA;/**
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
 */class rA extends nA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}rA.type="SESSION";const sA=rA;/**
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
 */function v2(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new xh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async p=>p(n.origin,u)),y=await v2(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xh.receivers=[];/**
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
 */function Rg(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class T2{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,y)=>{const p=Rg("",20);o.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(b){const R=b;if(R.data.eventId===p)switch(R.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(T),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function wi(){return window}function E2(r){wi().location.href=r}/**
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
 */function aA(){return typeof wi().WorkerGlobalScope<"u"&&typeof wi().importScripts=="function"}async function A2(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function S2(){return navigator?.serviceWorker?.controller||null}function b2(){return aA()?self:null}/**
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
 */const oA="firebaseLocalStorageDb",w2=1,ch="firebaseLocalStorage",lA="fbase_key";class su{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ph(r,t){return r.transaction([ch],t?"readwrite":"readonly").objectStore(ch)}function R2(){const r=indexedDB.deleteDatabase(oA);return new su(r).toPromise()}function Dm(){const r=indexedDB.open(oA,w2);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(ch,{keyPath:lA})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(ch)?t(s):(s.close(),await R2(),t(await Dm()))})})}async function AT(r,t,n){const s=Ph(r,!0).put({[lA]:t,value:n});return new su(s).toPromise()}async function I2(r,t){const n=Ph(r,!1).get(t),s=await new su(n).toPromise();return s===void 0?null:s.value}function ST(r,t){const n=Ph(r,!0).delete(t);return new su(n).toPromise()}const C2=800,N2=3;class uA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>N2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xh._getInstance(b2()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await A2(),!this.activeServiceWorker)return;this.sender=new T2(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||S2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Dm();return await AT(t,uh,"1"),await ST(t,uh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>AT(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>I2(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ST(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=Ph(o,!1).getAll();return new su(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),C2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uA.type="LOCAL";const D2=uA;new iu(3e4,6e4);/**
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
 */function cA(r,t){return t?rr(t):(St(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Ig extends tA{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return eo(t,this._buildIdpRequest())}_linkToIdToken(t,n){return eo(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return eo(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function O2(r){return h2(r.auth,new Ig(r),r.bypassAuthState)}function M2(r){const{auth:t,user:n}=r;return St(n,t,"internal-error"),c2(n,new Ig(r),r.bypassAuthState)}async function V2(r){const{auth:t,user:n}=r;return St(n,t,"internal-error"),u2(n,new Ig(r),r.bypassAuthState)}/**
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
 */class hA{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=t;if(f){this.reject(f);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return O2;case"linkViaPopup":case"linkViaRedirect":return V2;case"reauthViaPopup":case"reauthViaRedirect":return M2;default:Ni(this.auth,"internal-error")}}resolve(t){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const x2=new iu(2e3,1e4);async function P2(r,t,n){if(Xn(r.app))return Promise.reject(Zn(r,"operation-not-supported-in-this-environment"));const s=Vh(r);NC(r,t,wg);const o=cA(s,n);return new js(s,"signInViaPopup",t,o).executeNotNull()}class js extends hA{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,js.currentPopupAction&&js.currentPopupAction.cancel(),js.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return St(t,this.auth,"internal-error"),t}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const t=Rg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,js.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,x2.get())};t()}}js.currentPopupAction=null;/**
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
 */const k2="pendingRedirect",Hc=new Map;class U2 extends hA{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Hc.get(this.auth._key());if(!t){try{const s=await L2(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Hc.set(this.auth._key(),t)}return this.bypassAuthState||Hc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L2(r,t){const n=B2(t),s=j2(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function z2(r,t){Hc.set(r._key(),t)}function j2(r){return rr(r._redirectPersistence)}function B2(r){return qc(k2,r.config.apiKey,r.name)}async function q2(r,t,n=!1){if(Xn(r.app))return Promise.reject(Hs(r));const s=Vh(r),o=cA(s,t),f=await new U2(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const H2=600*1e3;class F2{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!G2(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!fA(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";n.onError(Zn(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=H2&&this.cachedEventUids.clear(),this.cachedEventUids.has(bT(t))}saveEventToCache(t){this.cachedEventUids.add(bT(t)),this.lastProcessedEventTime=Date.now()}}function bT(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function fA({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function G2(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fA(r);default:return!1}}/**
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
 */async function Q2(r,t={}){return vo(r,"GET","/v1/projects",t)}/**
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
 */const K2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y2=/^https?/;async function X2(r){if(r.config.emulator)return;const{authorizedDomains:t}=await Q2(r);for(const n of t)try{if($2(n))return}catch{}Ni(r,"unauthorized-domain")}function $2(r){const t=Cm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!Y2.test(n))return!1;if(K2.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const Z2=new iu(3e4,6e4);function wT(){const r=wi().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function J2(r){return new Promise((t,n)=>{function s(){wT(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{wT(),n(Zn(r,"network-request-failed"))},timeout:Z2.get()})}if(wi().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(wi().gapi?.load)s();else{const o=n2("iframefcb");return wi()[o]=()=>{gapi.load?s():n(Zn(r,"network-request-failed"))},t2(`${e2()}?onload=${o}`).catch(u=>n(u))}}).catch(t=>{throw Fc=null,t})}let Fc=null;function W2(r){return Fc=Fc||J2(r),Fc}/**
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
 */const tN=new iu(5e3,15e3),eN="__/auth/iframe",nN="emulator/auth/iframe",iN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sN(r){const t=r.config;St(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Tg(t,nN):`https://${r.config.authDomain}/${eN}`,s={apiKey:t.apiKey,appName:r.name,v:fo},o=rN.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Xl(s).slice(1)}`}async function aN(r){const t=await W2(r),n=wi().gapi;return St(n,r,"internal-error"),t.open({where:document.body,url:sN(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iN,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Zn(r,"network-request-failed"),m=wi().setTimeout(()=>{u(f)},tN.get());function y(){wi().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(f)})}))}/**
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
 */const oN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lN=500,uN=600,cN="_blank",hN="http://localhost";class RT{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fN(r,t,n,s=lN,o=uN){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...oN,width:s.toString(),height:o.toString(),top:u,left:f},p=nn().toLowerCase();n&&(m=Q0(p)?cN:n),F0(p)&&(t=t||hN,y.scrollbars="yes");const T=Object.entries(y).reduce((R,[q,Y])=>`${R}${q}=${Y},`,"");if(QC(p)&&m!=="_self")return dN(t||"",m),new RT(null);const b=window.open(t||"",m,T);St(b,r,"popup-blocked");try{b.focus()}catch{}return new RT(b)}function dN(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const mN="__/auth/handler",gN="emulator/auth/handler",pN=encodeURIComponent("fac");async function IT(r,t,n,s,o,u){St(r.config.authDomain,r,"auth-domain-config-required"),St(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:fo,eventId:o};if(t instanceof wg){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",Gb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[T,b]of Object.entries({}))f[T]=b}if(t instanceof ru){const T=t.getScopes().filter(b=>b!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const y=await r._getAppCheckToken(),p=y?`#${pN}=${encodeURIComponent(y)}`:"";return`${yN(r)}?${Xl(m).slice(1)}${p}`}function yN({config:r}){return r.emulator?Tg(r,gN):`https://${r.authDomain}/${mN}`}/**
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
 */const em="webStorageSupport";class _N{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sA,this._completeRedirectFn=q2,this._overrideRedirectResult=z2}async _openPopup(t,n,s,o){ur(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const u=await IT(t,n,s,Cm(),o);return fN(t,u,Rg())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await IT(t,n,s,Cm(),o);return E2(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(ur(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await aN(t),s=new F2(t);return n.register("authEvent",o=>(St(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(em,{type:em},o=>{const u=o?.[0]?.[em];u!==void 0&&n(!!u),Ni(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=X2(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Z0()||G0()||Sg()}}const vN=_N;var CT="@firebase/auth",NT="1.11.0";/**
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
 */class TN{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){St(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function EN(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AN(r){Ri(new Jn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;St(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J0(r)},p=new JC(s,o,u,y);return r2(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Ri(new Jn("auth-internal",t=>{const n=Vh(t.getProvider("auth").getImmediate());return(s=>new TN(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(CT,NT,EN(r)),zn(CT,NT,"esm2020")}/**
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
 */const SN=300,bN=FT("authIdTokenMaxAge")||SN;let DT=null;const wN=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>bN)return;const o=n?.token;DT!==o&&(DT=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function RN(r=xm()){const t=$s(r,"auth");if(t.isInitialized())return t.getImmediate();const n=i2(r,{popupRedirectResolver:vN,persistence:[D2,_2,sA]}),s=FT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=wN(u.toString());d2(n,f,()=>f(n.currentUser)),f2(n,m=>f(m))}}const o=qT("auth");return o&&s2(n,`http://${o}`),n}function IN(){return document.getElementsByTagName("head")?.[0]??document}WC({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=Zn("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",IN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AN("Browser");const dA="@firebase/installations",Cg="0.6.19";/**
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
 */const mA=1e4,gA=`w:${Cg}`,pA="FIS_v2",CN="https://firebaseinstallations.googleapis.com/v1",NN=3600*1e3,DN="installations",ON="Installations";/**
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
 */const MN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ks=new Xs(DN,ON,MN);function yA(r){return r instanceof ti&&r.code.includes("request-failed")}/**
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
 */function _A({projectId:r}){return`${CN}/projects/${r}/installations`}function vA(r){return{token:r.token,requestStatus:2,expiresIn:xN(r.expiresIn),creationTime:Date.now()}}async function TA(r,t){const s=(await t.json()).error;return Ks.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function EA({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function VN(r,{refreshToken:t}){const n=EA(r);return n.append("Authorization",PN(t)),n}async function AA(r){const t=await r();return t.status>=500&&t.status<600?r():t}function xN(r){return Number(r.replace("s","000"))}function PN(r){return`${pA} ${r}`}/**
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
 */async function kN({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=_A(r),o=EA(r),u=t.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={fid:n,authVersion:pA,appId:r.appId,sdkVersion:gA},m={method:"POST",headers:o,body:JSON.stringify(f)},y=await AA(()=>fetch(s,m));if(y.ok){const p=await y.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:vA(p.authToken)}}else throw await TA("Create Installation",y)}/**
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
 */function SA(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function UN(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const LN=/^[cdef][\w-]{21}$/,Om="";function zN(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=jN(r);return LN.test(n)?n:Om}catch{return Om}}function jN(r){return UN(r).substr(0,22)}/**
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
 */function kh(r){return`${r.appName}!${r.appId}`}/**
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
 */const bA=new Map;function wA(r,t){const n=kh(r);RA(n,t),BN(n,t)}function RA(r,t){const n=bA.get(r);if(n)for(const s of n)s(t)}function BN(r,t){const n=qN();n&&n.postMessage({key:r,fid:t}),HN()}let Bs=null;function qN(){return!Bs&&"BroadcastChannel"in self&&(Bs=new BroadcastChannel("[Firebase] FID Change"),Bs.onmessage=r=>{RA(r.data.key,r.data.fid)}),Bs}function HN(){bA.size===0&&Bs&&(Bs.close(),Bs=null)}/**
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
 */const FN="firebase-installations-database",GN=1,Ys="firebase-installations-store";let nm=null;function Ng(){return nm||(nm=JT(FN,GN,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Ys)}}})),nm}async function hh(r,t){const n=kh(r),o=(await Ng()).transaction(Ys,"readwrite"),u=o.objectStore(Ys),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&wA(r,t.fid),t}async function IA(r){const t=kh(r),s=(await Ng()).transaction(Ys,"readwrite");await s.objectStore(Ys).delete(t),await s.done}async function Uh(r,t){const n=kh(r),o=(await Ng()).transaction(Ys,"readwrite"),u=o.objectStore(Ys),f=await u.get(n),m=t(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&wA(r,m.fid),m}/**
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
 */async function Dg(r){let t;const n=await Uh(r.appConfig,s=>{const o=QN(s),u=KN(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===Om?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function QN(r){const t=r||{fid:zN(),registrationStatus:0};return CA(t)}function KN(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ks.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=YN(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:XN(r)}:{installationEntry:t}}async function YN(r,t){try{const n=await kN(r,t);return hh(r.appConfig,n)}catch(n){throw yA(n)&&n.customData.serverCode===409?await IA(r.appConfig):await hh(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function XN(r){let t=await OT(r.appConfig);for(;t.registrationStatus===1;)await SA(100),t=await OT(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Dg(r);return s||n}return t}function OT(r){return Uh(r,t=>{if(!t)throw Ks.create("installation-not-found");return CA(t)})}function CA(r){return $N(r)?{fid:r.fid,registrationStatus:0}:r}function $N(r){return r.registrationStatus===1&&r.registrationTime+mA<Date.now()}/**
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
 */async function ZN({appConfig:r,heartbeatServiceProvider:t},n){const s=JN(r,n),o=VN(r,n),u=t.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={installation:{sdkVersion:gA,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},y=await AA(()=>fetch(s,m));if(y.ok){const p=await y.json();return vA(p)}else throw await TA("Generate Auth Token",y)}function JN(r,{fid:t}){return`${_A(r)}/${t}/authTokens:generate`}/**
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
 */async function Og(r,t=!1){let n;const s=await Uh(r.appConfig,u=>{if(!NA(u))throw Ks.create("not-registered");const f=u.authToken;if(!t&&eD(f))return u;if(f.requestStatus===1)return n=WN(r,t),u;{if(!navigator.onLine)throw Ks.create("app-offline");const m=iD(u);return n=tD(r,m),m}});return n?await n:s.authToken}async function WN(r,t){let n=await MT(r.appConfig);for(;n.authToken.requestStatus===1;)await SA(100),n=await MT(r.appConfig);const s=n.authToken;return s.requestStatus===0?Og(r,t):s}function MT(r){return Uh(r,t=>{if(!NA(t))throw Ks.create("not-registered");const n=t.authToken;return rD(n)?{...t,authToken:{requestStatus:0}}:t})}async function tD(r,t){try{const n=await ZN(r,t),s={...t,authToken:n};return await hh(r.appConfig,s),n}catch(n){if(yA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await IA(r.appConfig);else{const s={...t,authToken:{requestStatus:0}};await hh(r.appConfig,s)}throw n}}function NA(r){return r!==void 0&&r.registrationStatus===2}function eD(r){return r.requestStatus===2&&!nD(r)}function nD(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+NN}function iD(r){const t={requestStatus:1,requestTime:Date.now()};return{...r,authToken:t}}function rD(r){return r.requestStatus===1&&r.requestTime+mA<Date.now()}/**
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
 */async function sD(r){const t=r,{installationEntry:n,registrationPromise:s}=await Dg(t);return s?s.catch(console.error):Og(t).catch(console.error),n.fid}/**
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
 */async function aD(r,t=!1){const n=r;return await oD(n),(await Og(n,t)).token}async function oD(r){const{registrationPromise:t}=await Dg(r);t&&await t}/**
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
 */function lD(r){if(!r||!r.options)throw im("App Configuration");if(!r.name)throw im("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw im(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function im(r){return Ks.create("missing-app-config-values",{valueName:r})}/**
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
 */const DA="installations",uD="installations-internal",cD=r=>{const t=r.getProvider("app").getImmediate(),n=lD(t),s=$s(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},hD=r=>{const t=r.getProvider("app").getImmediate(),n=$s(t,DA).getImmediate();return{getId:()=>sD(n),getToken:o=>aD(n,o)}};function fD(){Ri(new Jn(DA,cD,"PUBLIC")),Ri(new Jn(uD,hD,"PRIVATE"))}fD();zn(dA,Cg);zn(dA,Cg,"esm2020");/**
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
 */const fh="analytics",dD="firebase_id",mD="origin",gD=60*1e3,pD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mg="https://www.googletagmanager.com/gtag/js";/**
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
 */const dn=new mh("@firebase/analytics");/**
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
 */const yD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bn=new Xs("analytics","Analytics",yD);/**
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
 */function _D(r){if(!r.startsWith(Mg)){const t=bn.create("invalid-gtag-resource",{gtagURL:r});return dn.warn(t.message),""}return r}function OA(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function vD(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function TD(r,t){const n=vD("firebase-js-sdk-policy",{createScriptURL:_D}),s=document.createElement("script"),o=`${Mg}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function ED(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function AD(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const y=(await OA(n)).find(p=>p.measurementId===o);y&&await t[y.appId]}}catch(m){dn.error(m)}r("config",o,u)}async function SD(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await OA(n);for(const y of f){const p=m.find(b=>b.measurementId===y),T=p&&t[p.appId];if(T)u.push(T);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){dn.error(u)}}function bD(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[m,y]=f;await SD(r,t,n,m,y)}else if(u==="config"){const[m,y]=f;await AD(r,t,n,s,m,y)}else if(u==="consent"){const[m,y]=f;r("consent",m,y)}else if(u==="get"){const[m,y,p]=f;r("get",m,y,p)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){dn.error(m)}}return o}function wD(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=bD(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function RD(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Mg)&&n.src.includes(r))return n;return null}/**
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
 */const ID=30,CD=1e3;class ND{constructor(t={},n=CD){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const MA=new ND;function DD(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function OD(r){const{appId:t,apiKey:n}=r,s={method:"GET",headers:DD(n)},o=pD.replace("{app-id}",t),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();m.error?.message&&(f=m.error.message)}catch{}throw bn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function MD(r,t=MA,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw bn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw bn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new PD;return setTimeout(async()=>{m.abort()},gD),VA({appId:s,apiKey:o,measurementId:u},f,m,t)}async function VA(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=MA){const{appId:u,measurementId:f}=r;try{await VD(s,t)}catch(m){if(f)return dn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:u,measurementId:f};throw m}try{const m=await OD(r);return o.deleteThrottleMetadata(u),m}catch(m){const y=m;if(!xD(y)){if(o.deleteThrottleMetadata(u),f)return dn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:u,measurementId:f};throw m}const p=Number(y?.customData?.httpStatus)===503?sv(n,o.intervalMillis,ID):sv(n,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return o.setThrottleMetadata(u,T),dn.debug(`Calling attemptFetch again in ${p} millis`),VA(r,T,s,o)}}function VD(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(bn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function xD(r){if(!(r instanceof ti)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class PD{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function kD(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f={...s,send_to:u};r("event",n,f)}}/**
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
 */async function UD(){if(YT())try{await XT()}catch(r){return dn.warn(bn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return dn.warn(bn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function LD(r,t,n,s,o,u,f){const m=MD(r);m.then(R=>{n[R.measurementId]=R.appId,r.options.measurementId&&R.measurementId!==r.options.measurementId&&dn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>dn.error(R)),t.push(m);const y=UD().then(R=>{if(R)return s.getId()}),[p,T]=await Promise.all([m,y]);RD(u)||TD(u,p.measurementId),o("js",new Date);const b=f?.config??{};return b[mD]="firebase",b.update=!0,T!=null&&(b[dD]=T),o("config",p.measurementId,b),p.measurementId}/**
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
 */class zD{constructor(t){this.app=t}_delete(){return delete Ll[this.app.options.appId],Promise.resolve()}}let Ll={},VT=[];const xT={};let rm="dataLayer",jD="gtag",PT,xA,kT=!1;function BD(){const r=[];if(KT()&&r.push("This is a browser extension environment."),Bb()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=bn.create("invalid-analytics-context",{errorInfo:t});dn.warn(n.message)}}function qD(r,t,n){BD();const s=r.options.appId;if(!s)throw bn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)dn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bn.create("no-api-key");if(Ll[s]!=null)throw bn.create("already-exists",{id:s});if(!kT){ED(rm);const{wrappedGtag:u,gtagCore:f}=wD(Ll,VT,xT,rm,jD);xA=u,PT=f,kT=!0}return Ll[s]=LD(r,VT,xT,t,PT,rm,n),new zD(r)}function HD(r=xm()){r=ue(r);const t=$s(r,fh);return t.isInitialized()?t.getImmediate():FD(r)}function FD(r,t={}){const n=$s(r,fh);if(n.isInitialized()){const o=n.getImmediate();if(Yr(t,n.getOptions()))return o;throw bn.create("already-initialized")}return n.initialize({options:t})}function GD(r,t,n,s){r=ue(r),kD(xA,Ll[r.app.options.appId],t,n,s).catch(o=>dn.error(o))}const UT="@firebase/analytics",LT="0.10.18";function QD(){Ri(new Jn(fh,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return qD(s,o,n)},"PUBLIC")),Ri(new Jn("analytics-internal",r,"PRIVATE")),zn(UT,LT),zn(UT,LT,"esm2020");function r(t){try{const n=t.getProvider(fh).getImmediate();return{logEvent:(s,o,u)=>GD(n,s,o,u)}}catch(n){throw bn.create("interop-component-reg-failed",{reason:n})}}}QD();/*! *****************************************************************************
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
***************************************************************************** */function KD(r,t,n,s){function o(u){return u instanceof n?u:new n(function(f){f(u)})}return new(n||(n=Promise))(function(u,f){function m(T){try{p(s.next(T))}catch(b){f(b)}}function y(T){try{p(s.throw(T))}catch(b){f(b)}}function p(T){T.done?u(T.value):o(T.value).then(m,y)}p((s=s.apply(r,[])).next())})}function YD(r,t){var n={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},s,o,u,f;return f={next:m(0),throw:m(1),return:m(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function m(p){return function(T){return y([p,T])}}function y(p){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,o&&(u=p[0]&2?o.return:p[0]?o.throw||((u=o.return)&&u.call(o),0):o.next)&&!(u=u.call(o,p[1])).done)return u;switch(o=0,u&&(p=[p[0]&2,u.value]),p[0]){case 0:case 1:u=p;break;case 4:return n.label++,{value:p[1],done:!1};case 5:n.label++,o=p[1],p=[0];continue;case 7:p=n.ops.pop(),n.trys.pop();continue;default:if(u=n.trys,!(u=u.length>0&&u[u.length-1])&&(p[0]===6||p[0]===2)){n=0;continue}if(p[0]===3&&(!u||p[1]>u[0]&&p[1]<u[3])){n.label=p[1];break}if(p[0]===6&&n.label<u[1]){n.label=u[1],u=p;break}if(u&&n.label<u[2]){n.label=u[2],n.ops.push(p);break}u[2]&&n.ops.pop(),n.trys.pop();continue}p=t.call(r,n)}catch(T){p=[6,T],o=0}finally{s=u=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var Xa=function(){return Xa=Object.assign||function(t){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},Xa.apply(this,arguments)},PA=function(r){return{loading:r==null,value:r}},XD=function(){return function(r,t){switch(t.type){case"error":return Xa(Xa({},r),{error:t.error,loading:!1,value:void 0});case"reset":return PA(t.defaultValue);case"value":return Xa(Xa({},r),{error:void 0,loading:!1,value:t.value});default:return r}}},$D=(function(r){var t=r?r():void 0,n=dt.useReducer(XD(),PA(t)),s=n[0],o=n[1],u=dt.useCallback(function(){var y=r?r():void 0;o({type:"reset",defaultValue:y})},[r]),f=dt.useCallback(function(y){o({type:"error",error:y})},[]),m=dt.useCallback(function(y){o({type:"value",value:y})},[]);return dt.useMemo(function(){return{error:s.error,loading:s.loading,reset:u,setError:f,setValue:m,value:s.value}},[s.error,s.loading,u,f,m,s.value])}),Vg=(function(r,t){var n=$D(function(){return r.currentUser}),s=n.error,o=n.loading,u=n.setError,f=n.setValue,m=n.value;return dt.useEffect(function(){var y=m2(r,function(p){return KD(void 0,void 0,void 0,function(){var T;return YD(this,function(b){switch(b.label){case 0:return[3,4];case 1:return b.trys.push([1,3,,4]),[4,t.onUserChanged(p)];case 2:return b.sent(),[3,4];case 3:return T=b.sent(),u(T),[3,4];case 4:return f(p),[2]}})})},u);return function(){y()}},[r]),[m,o,s]});/*! *****************************************************************************
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
***************************************************************************** */var $a=function(){return $a=Object.assign||function(t){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},$a.apply(this,arguments)},kA=function(r){return{loading:r==null,value:r}},ZD=function(){return function(r,t){switch(t.type){case"error":return $a($a({},r),{error:t.error,loading:!1,value:void 0});case"reset":return kA(t.defaultValue);case"value":return $a($a({},r),{error:void 0,loading:!1,value:t.value});default:return r}}},UA=(function(r){var t=void 0,n=dt.useReducer(ZD(),kA(t)),s=n[0],o=n[1],u=dt.useCallback(function(){var y=void 0;o({type:"reset",defaultValue:y})},[r]),f=dt.useCallback(function(y){o({type:"error",error:y})},[]),m=dt.useCallback(function(y){o({type:"value",value:y})},[]);return dt.useMemo(function(){return{error:s.error,loading:s.loading,reset:u,setError:f,setValue:m,value:s.value}},[s.error,s.loading,u,f,m,s.value])}),LA=function(r,t,n){var s=dt.useRef(r);return dt.useEffect(function(){t(r,s.current)||(s.current=r,n&&n())}),s},JD=function(r,t){var n=!r&&!t,s=!!r&&!!t&&sC(r,t);return n||s},WD=function(r,t){return LA(r,JD,t)},tO=function(r,t){var n=!r&&!t,s=!!r&&!!t&&aC(r,t);return n||s},eO=function(r,t){return LA(r,tO,t)},nO=function(r,t){var n=UA(),s=n.error,o=n.loading,u=n.reset,f=n.setError,m=n.setValue,y=n.value,p=eO(r,u);return dt.useEffect(function(){if(!p.current){m(void 0);return}var T=P0(p.current,m,f);return function(){T()}},[p.current]),[y,o,s]},iO=function(r,t){var n=UA(),s=n.error,o=n.loading,u=n.reset,f=n.setError,m=n.setValue,y=n.value,p=WD(r,u);return dt.useEffect(function(){if(!p.current){m(void 0);return}var T=P0(p.current,m,f);return function(){T()}},[p.current]),[y,o,s]};const rO={apiKey:"AIzaSyBQSuvCd5mb-lbvoaZrwGl7fXhFRZWI0ZU",authDomain:"neshaybahs-chatroom.firebaseapp.com",projectId:"neshaybahs-chatroom",storageBucket:"neshaybahs-chatroom.firebasestorage.app",messagingSenderId:"120115708605",appId:"1:120115708605:web:b2956f68690d946f5badd4"},xg=WT(rO),sr=RN(xg),no=oC(xg);HD(xg);const sO="dssbbkavm",aO="chat_uploads",zA=()=>{const r=dt.useRef(null),[t,n]=dt.useState([]),[s,o]=dt.useState(0),[u,f]=dt.useState(!1),[m,y]=dt.useState(0),[p,T]=dt.useState(0),b=at=>{const rt=at.replace(".mp3","").split(" - ");return`${(rt.length>1?rt[1]:rt[0]).toLowerCase().replace(/'/g,"").replace(/[^a-z0-9\s]/g,"").replace(/\s+/g,"-").trim()}.png`};dt.useEffect(()=>{const lt=["Frank Ocean - American Wedding.mp3","Jeff Buckley - Lover You Shouldve Come Over.mp3","wifiskeletton - Nope your too late i already died.mp3"].map(rt=>{const[mt,ht]=rt.replace(".mp3","").split(" - "),Dt=b(rt);return{filename:rt,artist:mt||"Unknown Artist",songName:ht||"Unknown Song",url:`/neshaybahs-chatroom/music/${encodeURIComponent(rt)}`,albumCover:`/neshaybahs-chatroom/album-covers/${encodeURIComponent(Dt)}`}});n(lt)},[]),dt.useEffect(()=>{const at=r.current;if(!at)return;const lt=()=>y(at.currentTime),rt=()=>T(at.duration),mt=()=>q();return at.addEventListener("timeupdate",lt),at.addEventListener("durationchange",rt),at.addEventListener("ended",mt),()=>{at.removeEventListener("timeupdate",lt),at.removeEventListener("durationchange",rt),at.removeEventListener("ended",mt)}},[]),dt.useEffect(()=>{t.length>0&&r.current&&(r.current.src=t[s]?.url)},[s,t]);const R=()=>{!r.current||t.length===0||(u?r.current.pause():r.current.play().catch(console.error),f(!u))},q=()=>{t.length!==0&&(o(at=>(at+1)%t.length),f(!0))},Y=()=>{t.length!==0&&(o(at=>(at-1+t.length)%t.length),f(!0))},et=()=>t[s]||{artist:"No Artist",songName:"No Song",url:"",albumCover:"https://i.scdn.co/image/ab67616d0000b27398b1c6c0d05f8841f08a9eca"},J=at=>{r.current&&p&&(r.current.currentTime=at,y(at))};return{audioRef:r,playlist:t,currentTrack:et(),isPlaying:u,currentTime:m,duration:p,togglePlayPause:R,nextTrack:q,previousTrack:Y,setCurrentTrackIndex:o,seekTo:J}},oO=async(r,t)=>{try{const n=uo(no,"userProfiles",r);return await bC(n,{...t,updatedAt:rh()},{merge:!0}),!0}catch(n){return console.error("Error updating user profile:",n),!1}},lO=(r,t)=>({displayName:r?.displayName||t?.displayName||"Anonymous",photoURL:r?.photoURL||t?.photoURL||null}),Pg=r=>{const t=r?uo(no,"userProfiles",r.uid):null,[n,s,o]=iO(t),[u,f]=dt.useState({displayName:"Anonymous",photoURL:null});dt.useEffect(()=>{if(r){const y=n?.data(),p={displayName:r.displayName,photoURL:r.photoURL},T=lO(y,p);f(T)}},[r,n]);const m=async y=>r?await oO(r.uid,y):!1;return{customProfile:n?.data()||null,displayData:u,loading:s,error:o,updateProfile:m}},jA=async(r,t)=>{try{if(r.size>10*1024*1024)throw new Error("File size exceeds 10MB limit");if(!r.type.startsWith("image/"))throw new Error("File must be an image");const n=new FormData;n.append("file",r),n.append("upload_preset",aO);const s=t.replace(/[^a-zA-Z0-9]/g,"");n.append("folder",`chat_images/${s}`);const o=Date.now(),u=r.name.split(".")[0].replace(/[^a-zA-Z0-9]/g,"_");n.append("public_id",`${o}_${u}`);const f=await fetch(`https://api.cloudinary.com/v1_1/${sO}/image/upload`,{method:"POST",body:n}),m=await f.text();if(!f.ok){console.error(`HTTP error! status: ${f.status}, response: ${m}`);try{const p=JSON.parse(m);throw new Error(p.error?.message||`HTTP ${f.status}: ${m}`)}catch{throw new Error(`HTTP ${f.status}: ${m}`)}}const y=JSON.parse(m);if(y.secure_url)return{success:!0,url:y.secure_url,publicId:y.public_id,fileName:y.original_filename};throw new Error(y.error?.message||"Upload failed - no secure_url returned")}catch(n){console.error("Error uploading image to Cloudinary:",n);const s={"Invalid upload preset":"Upload preset 'chat_uploads' not found or not configured properly in Cloudinary","Invalid cloud name":"Cloud name 'dssbbkavm' not found in Cloudinary",Unauthorized:"Upload preset is not configured for unsigned uploads"};for(const[o,u]of Object.entries(s))if(n.message.includes(o))return{success:!1,error:u};return{success:!1,error:n.message||"Failed to upload image to Cloudinary"}}};function BA({file:r,onRemove:t}){const[n,s]=dt.useState(null);return dt.useEffect(()=>{if(r){const o=new FileReader;o.onloadend=()=>s(o.result),o.readAsDataURL(r)}return()=>{n&&URL.revokeObjectURL(n)}},[r]),n?B.jsxs("div",{className:"image-preview",children:[B.jsx("img",{src:n,alt:"Preview"}),B.jsx("button",{className:"remove-preview-btn",onClick:t,type:"button",children:B.jsx("i",{className:"bi bi-x"})})]}):null}function uO(){const[r]=Vg(sr),[t,n]=dt.useState(!1);return dt.useEffect(()=>{const s=()=>{const o=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${o}px`)};return s(),window.addEventListener("resize",s),window.addEventListener("orientationchange",s),()=>{window.removeEventListener("resize",s),window.removeEventListener("orientationchange",s)}},[]),B.jsxs("div",{className:"App",children:[B.jsxs("header",{children:[B.jsxs("div",{className:"d-flex align-items-center",children:[B.jsx("img",{src:"/neshaybahs-chatroom/images/logo.png",alt:"Logo",style:{height:"40px",width:"auto",marginRight:"15px"},onError:s=>{s.target.style.display="none"}}),B.jsx("h1",{children:"NeshayBahs Chatroom"})]}),B.jsxs("div",{className:"d-flex gap-2",children:[r&&B.jsxs("button",{className:"btn btn-outline-light",onClick:()=>n(!0),children:[B.jsx("i",{className:"bi bi-gear me-2"}),"Settings"]}),B.jsx(fO,{})]})]}),B.jsx("div",{className:`chat-container container-fluid ${r?"has-user":""}`,children:r?B.jsx(gO,{}):B.jsx(hO,{})}),t&&B.jsxs(B.Fragment,{children:[B.jsx("div",{className:"settings-overlay",onClick:()=>n(!1)}),B.jsxs("div",{className:"settings-panel open",children:[B.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[B.jsx("h4",{children:"Settings"}),B.jsx("button",{className:"btn-close btn-close-white",onClick:()=>n(!1)})]}),r&&B.jsx(cO,{user:r,onClose:()=>n(!1)})]})]})]})}function cO({user:r,onClose:t}){const{customProfile:n,displayData:s,updateProfile:o}=Pg(r),[u,f]=dt.useState(!1),[m,y]=dt.useState(""),[p,T]=dt.useState(""),[b,R]=dt.useState(null),[q,Y]=dt.useState(!1),et=dt.useRef();dt.useEffect(()=>{u&&(y(mt=>mt||n?.displayName||""),T(mt=>mt||n?.photoURL||""))},[u]);const J=mt=>{const ht=mt.target.files[0];if(ht){if(!ht.type.startsWith("image/")){alert("Please select an image file.");return}if(ht.size>10*1024*1024){alert("Image must be under 10MB.");return}R(ht)}},at=()=>{R(null),et.current&&(et.current.value="")},lt=async()=>{Y(!0);try{let mt=p;if(b){const x=await jA(b,r.uid);if(x.success)mt=x.url;else{alert("Upload failed: "+x.error),Y(!1);return}}const ht={};m.trim()&&(ht.displayName=m.trim()),mt&&(ht.photoURL=mt),await o(ht)?(f(!1),R(null)):alert("Failed to update profile. Please try again.")}finally{Y(!1)}},rt=async()=>{window.confirm("Reset to Google profile data?")&&(Y(!0),await o({displayName:null,photoURL:null})&&(f(!1),R(null)),Y(!1))};return u?B.jsx("div",{className:"profile-section",children:B.jsxs("div",{className:"profile-editor",children:[B.jsx("h5",{className:"mb-3",children:"Edit Profile"}),B.jsxs("div",{className:"mb-3",children:[B.jsx("label",{className:"form-label",children:"Display Name"}),B.jsx("input",{type:"text",className:"form-control",value:m,onChange:mt=>y(mt.target.value),placeholder:r?.displayName||"Enter display name"})]}),B.jsxs("div",{className:"mb-3",children:[B.jsx("label",{className:"form-label",children:"Profile Picture"}),B.jsx("input",{type:"url",className:"form-control mb-2",value:p,onChange:mt=>T(mt.target.value),placeholder:r?.photoURL||"Enter image URL"}),B.jsx("label",{className:"form-label",children:"Upload Profile"}),B.jsx("input",{type:"file",ref:et,accept:"image/*",onChange:J,className:"form-control"}),b&&B.jsx("div",{className:"mt-2",children:B.jsx(BA,{file:b,onRemove:at})})]}),B.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[B.jsx("button",{className:"btn btn-primary",onClick:lt,disabled:q,children:q?"Saving...":"Save"}),B.jsx("button",{className:"btn btn-secondary",onClick:()=>f(!1),disabled:q,children:"Cancel"}),n?.displayName&&B.jsx("button",{className:"btn btn-outline-warning",onClick:rt,disabled:q,children:"Reset to Google"})]})]})}):B.jsx("div",{className:"profile-section",children:B.jsxs("div",{className:"profile-display",children:[B.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[B.jsx("img",{src:s.photoURL||`https://ui-avatars.com/api/?name=${encodeURIComponent(s.displayName)}`,alt:"Profile",className:"profile-avatar"}),B.jsxs("div",{children:[B.jsx("h5",{className:"mb-0",children:s.displayName}),B.jsx("small",{children:n?.displayName?"Custom Profile":"Using Google Profile"})]})]}),B.jsxs("button",{className:"btn btn-outline-light btn-sm",onClick:()=>f(!0),children:[B.jsx("i",{className:"bi bi-pencil me-2"}),"Edit Profile"]})]})})}function hO(){const r=async()=>{const t=new nr;await P2(sr,t)};return B.jsxs("div",{className:"signin-container text-center mt-5",children:[B.jsxs("button",{className:"btn btn-outline-light",onClick:r,children:[B.jsx("i",{className:"bi bi-google me-2"})," Sign in with Google"]}),B.jsx("p",{className:"mt-2",children:"Made by NeshayBah w/ vibe coding"})]})}function fO(){return sr.currentUser&&B.jsxs("button",{className:"sign-out btn btn-outline-light",onClick:()=>g2(sr),children:[B.jsx("i",{className:"bi bi-box-arrow-right me-2"})," Sign Out"]})}function dO(){const{audioRef:r,currentTrack:t,isPlaying:n,togglePlayPause:s,nextTrack:o,previousTrack:u}=zA(),f="https://i.scdn.co/image/ab67616d0000b27398b1c6c0d05f8841f08a9eca",m=y=>{y.target.src=f};return B.jsxs("div",{className:"mobile-mini-player",children:[B.jsx("audio",{ref:r}),B.jsx("img",{src:t.albumCover,alt:"Album Cover",className:"mini-album-cover",onError:m}),B.jsxs("div",{className:"mini-track-info",children:[B.jsx("p",{className:"mini-song-name",children:t.songName}),B.jsx("p",{className:"mini-artist-name",children:t.artist})]}),B.jsxs("div",{className:"mini-controls",children:[B.jsx("button",{className:"mini-skip-back",onClick:u,children:B.jsx("i",{className:"bi bi-skip-start"})}),B.jsx("button",{className:"mini-play-pause",onClick:s,children:B.jsx("i",{className:`bi bi-${n?"pause":"play"}`})}),B.jsx("button",{className:"mini-skip-forward",onClick:o,children:B.jsx("i",{className:"bi bi-skip-end"})})]})]})}function mO(){const{audioRef:r,currentTrack:t,isPlaying:n,togglePlayPause:s,nextTrack:o,previousTrack:u}=zA(),f="https://i.scdn.co/image/ab67616d0000b27398b1c6c0d05f8841f08a9eca",m=y=>{y.target.src=f};return B.jsxs("div",{className:"media-controls desktop-player",children:[B.jsx("audio",{ref:r}),B.jsx("img",{src:t.albumCover,alt:"Album Cover",className:"album-cover",onError:m}),B.jsxs("div",{className:"media-text",children:[B.jsx("p",{className:"song-name",children:t.songName}),B.jsx("p",{className:"artist-name",children:t.artist})]}),B.jsxs("div",{className:"button-group",children:[B.jsx("button",{className:"skip-back",onClick:u,children:B.jsx("i",{className:"bi bi-skip-start"})}),B.jsx("button",{className:"play-pause",onClick:s,children:B.jsx("i",{className:`bi bi-${n?"pause":"play"}`})}),B.jsx("button",{className:"skip-forward",onClick:o,children:B.jsx("i",{className:"bi bi-skip-end"})})]})]})}function gO(){const r=dt.useRef(),t=dt.useRef(),n=rC(no,"messages"),[s]=Vg(sr),{displayData:o}=Pg(s),u=_C(n,vC("createdAt"),TC(100)),[f,m,y]=nO(u),[p,T]=dt.useState(""),[b,R]=dt.useState(null),[q,Y]=dt.useState(!1),[et,J]=dt.useState(null),[at,lt]=dt.useState(""),rt=f?.docs.map(D=>({id:D.id,...D.data()}))||[];dt.useEffect(()=>{r.current&&r.current.scrollIntoView({behavior:"smooth"})},[rt]);const mt=async D=>{if(window.confirm("Are you sure you want to delete this message?"))try{await wC(uo(no,"messages",D))}catch(M){console.error("Error deleting message:",M),alert("Failed to delete message. Please try again.")}},ht=D=>{J(D.id),lt(D.text||"")},Dt=()=>{J(null),lt("")},x=async D=>{if(!D||!at.trim()){alert("Message cannot be empty");return}try{const M=uo(no,"messages",D);await x0(M,{text:at.trim(),editedAt:rh()}),J(null),lt("")}catch(M){console.error("Error updating message:",M),alert("Failed to update message. Please try again.")}},S=D=>{const M=D.target.files[0];if(M){if(M.size>10*1024*1024){alert("File size too large. Please select an image under 10MB.");return}if(!M.type.startsWith("image/")){alert("Please select an image file.");return}R(M)}},C=()=>{R(null),t.current&&(t.current.value="")},V=async D=>{if(D.preventDefault(),!p.trim()&&!b)return;Y(!0);const{uid:M}=sr.currentUser;let I=null;try{if(b){const Ft=await jA(b,M);if(Ft.success)I=Ft.url;else{alert("Failed to upload image: "+Ft.error),Y(!1);return}}const Bt={createdAt:rh(),uid:M,photoURL:o.photoURL||null,displayName:o.displayName||"Anonymous"};p.trim()&&(Bt.text=p.trim()),I?(Bt.imageUrl=I,Bt.messageType="image"):Bt.messageType="text",await RC(n,Bt),T(""),R(null),t.current&&(t.current.value="")}catch(Bt){console.error("Error sending message:",Bt),alert({"permission-denied":"Permission denied. Check your Firestore security rules.",unavailable:"Firestore is currently unavailable. Please try again."}[Bt.code]||`Error: ${Bt.message}`)}finally{Y(!1)}};return B.jsxs(B.Fragment,{children:[B.jsx(dO,{}),B.jsx(mO,{}),B.jsx("div",{className:"chat-panel d-flex flex-column",children:B.jsxs("div",{className:"messages-container flex-grow-1",children:[B.jsxs("main",{className:"messages-list",children:[rt&&rt.map(D=>B.jsx(pO,{message:D,onDelete:mt,onStartEdit:ht,onCancelEdit:Dt,onSaveEdit:x,editingMessage:et,editText:at,setEditText:lt},D.id)),B.jsx("span",{ref:r})]}),b&&B.jsx("div",{className:"image-preview-container",children:B.jsx(BA,{file:b,onRemove:C})}),B.jsxs("form",{onSubmit:V,className:"chat-form",children:[B.jsx("input",{value:p,onChange:D=>T(D.target.value),placeholder:"Message something dude",disabled:q}),B.jsx("input",{type:"file",ref:t,onChange:S,accept:"image/*",style:{display:"none"}}),B.jsx("button",{type:"button",className:"image-upload-btn",onClick:()=>t.current?.click(),disabled:q,children:B.jsx("i",{className:"bi bi-image"})}),B.jsx("button",{type:"submit",disabled:!p.trim()&&!b||q,children:q?B.jsx("i",{className:"bi bi-hourglass-split"}):B.jsx("i",{className:"bi bi-send-fill"})})]})]})})]})}function pO({message:r,onDelete:t,onStartEdit:n,onCancelEdit:s,onSaveEdit:o,editingMessage:u,editText:f,setEditText:m}){const y=r.id,{text:p,uid:T,photoURL:b,displayName:R,createdAt:q,imageUrl:Y,editedAt:et,reactions:J}=r,at=T===sr.currentUser.uid?"sent":"received",lt=T===sr.currentUser.uid,rt=u===y,[mt,ht]=dt.useState(!0),[Dt,x]=dt.useState(!1),[S,C]=dt.useState(!1),[V,D]=dt.useState(!1),[M,I]=dt.useState(null),[Bt,Ft]=dt.useState(null),F=dt.useRef(null),nt=dt.useRef(null),ct=dt.useRef(null),kt=dt.useRef(0),[N]=Vg(sr),{displayData:Z}=Pg(N),it=["❤️","😂","😮","😢","😡","👍","👎","🔥","✨","💯"],W=async yt=>{if(!(!N||!y))try{const Kt=uo(no,"messages",y),Pe=await SC(Kt);if(Pe.exists()){const pe=Pe.data().reactions||{};pe[yt]||(pe[yt]={}),pe[yt][N.uid]?(delete pe[yt][N.uid],Object.keys(pe[yt]).length===0&&delete pe[yt]):pe[yt][N.uid]={displayName:Z.displayName,timestamp:rh()},await x0(Kt,{reactions:pe})}}catch(Kt){console.error("Error adding reaction:",Kt)}},gt=yt=>{yt.target.tagName==="BUTTON"||yt.target.closest("button")||yt.target.closest(".reaction-pill")||(kt.current+=1,ct.current&&clearTimeout(ct.current),ct.current=setTimeout(()=>{kt.current===2&&W("❤️"),kt.current=0},300))},Rt=yt=>{W(yt),D(!1)},ge=J?Object.entries(J).map(([yt,Kt])=>({emoji:yt,count:Object.keys(Kt).length,users:Object.entries(Kt).map(([Pe,pe])=>({userId:Pe,displayName:pe.displayName})),userReacted:N&&Kt[N.uid]})).filter(yt=>yt.count>0):[];dt.useEffect(()=>{const yt=Kt=>{F.current&&!F.current.contains(Kt.target)&&C(!1),nt.current&&!nt.current.contains(Kt.target)&&D(!1)};return document.addEventListener("mousedown",yt),document.addEventListener("touchstart",yt),()=>{document.removeEventListener("mousedown",yt),document.removeEventListener("touchstart",yt),ct.current&&clearTimeout(ct.current),M&&clearTimeout(M),Bt&&clearTimeout(Bt)}},[M,Bt]);const Zt=yt=>{const Kt=setTimeout(()=>{D(!0),navigator.vibrate&&navigator.vibrate(50)},500);if(Ft(Kt),lt){const Pe=setTimeout(()=>{C(!0)},800);I(Pe)}},wn=()=>{Bt&&(clearTimeout(Bt),Ft(null)),M&&(clearTimeout(M),I(null))},ei=yt=>{if(!yt)return"";const Kt=yt.toDate?yt.toDate():new Date(yt),Pe=new Date,pe=new Date(Pe.getFullYear(),Pe.getMonth(),Pe.getDate()),Ce=new Date(pe);Ce.setDate(pe.getDate()-1);const Ws=new Date(Kt.getFullYear(),Kt.getMonth(),Kt.getDate());let ni;Ws.getTime()===pe.getTime()?ni="Today":Ws.getTime()===Ce.getTime()?ni="Yesterday":ni=Kt.toLocaleDateString("en-US",{month:"numeric",day:"numeric",year:"numeric"});const cr=Kt.toLocaleString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0});return`${ni} ${cr}`},qn=()=>ht(!1),Di=()=>{ht(!1),x(!0)};return B.jsxs("div",{className:`message ${at} ${lt?"message-owner":""}`,onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),onTouchStart:Zt,onTouchEnd:wn,onClick:gt,children:[B.jsx("img",{src:b||"https://ui-avatars.com/api/?name="+encodeURIComponent(R||"User"),alt:"avatar",className:"user-avatar"}),B.jsxs("div",{className:"message-content",children:[B.jsxs("div",{className:"message-header",children:[B.jsxs("span",{className:"message-timestamp",children:[ei(q),et&&B.jsx("span",{className:"edited-indicator",children:" (edited)"})]}),B.jsx("strong",{children:R||"Unknown"})]}),p&&!rt&&B.jsx("p",{children:p}),rt&&B.jsxs("div",{className:"message-edit-container",children:[B.jsx("textarea",{value:f,onChange:yt=>m(yt.target.value),className:"message-edit-input",rows:Math.min(Math.max(f.split(`
`).length,1),4),autoFocus:!0}),B.jsxs("div",{className:"message-edit-actions",children:[B.jsx("button",{className:"btn btn-sm btn-primary",onClick:()=>o(y),children:"Save"}),B.jsx("button",{className:"btn btn-sm btn-secondary",onClick:s,children:"Cancel"})]})]}),Y&&B.jsxs("div",{className:"message-image-container",children:[mt&&B.jsxs("div",{className:"image-loading",children:[B.jsx("i",{className:"bi bi-hourglass-split"}),B.jsx("span",{children:"Loading image..."})]}),Dt?B.jsxs("div",{className:"image-error",children:[B.jsx("i",{className:"bi bi-exclamation-triangle"}),B.jsx("span",{children:"Failed to load image"})]}):B.jsx("img",{src:Y,alt:"Shared image",className:"message-image",onLoad:qn,onError:Di,style:{display:mt?"none":"block"}})]}),ge.length>0&&B.jsx("div",{className:"message-reactions",children:ge.map(({emoji:yt,count:Kt,users:Pe,userReacted:pe})=>B.jsxs("button",{className:`reaction-pill ${pe?"user-reacted":""}`,onClick:Ce=>{Ce.stopPropagation(),Rt(yt)},title:Pe.map(Ce=>Ce.displayName).join(", "),children:[B.jsx("span",{className:"reaction-emoji",children:yt}),B.jsx("span",{className:"reaction-count",children:Kt})]},yt))}),V&&B.jsx("div",{className:"reaction-menu",ref:nt,children:B.jsx("div",{className:"reaction-menu-content",children:it.map(yt=>B.jsx("button",{className:"reaction-menu-emoji",onClick:()=>Rt(yt),children:yt},yt))})}),S&&!rt&&B.jsxs("div",{className:"message-menu",ref:F,children:[B.jsxs("button",{className:"message-menu-item",onClick:yt=>{yt.stopPropagation(),D(!V)},children:[B.jsx("i",{className:"bi bi-emoji-smile"}),"React"]}),lt&&p&&B.jsxs("button",{className:"message-menu-item",onClick:()=>n(r),children:[B.jsx("i",{className:"bi bi-pencil"}),"Edit"]}),lt&&B.jsxs("button",{className:"message-menu-item message-menu-delete",onClick:()=>t(y),children:[B.jsx("i",{className:"bi bi-trash"}),"Delete"]})]}),V&&B.jsx("div",{className:"reaction-menu",ref:nt,children:B.jsx("div",{className:"reaction-menu-content",children:it.map(yt=>B.jsx("button",{className:"reaction-menu-emoji",onClick:()=>Rt(yt),children:yt},yt))})})]})]})}Eb.createRoot(document.getElementById("root")).render(B.jsx(dt.StrictMode,{children:B.jsx(uO,{})}));
