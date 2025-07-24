import{r as v,a as Ra,u as Ar,N as zn,b as We,R as ne,g as Na,B as Da,c as Aa,d as Ge}from"./react-vendor-8VyQ6CfW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();var Un={exports:{}},Gt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=v,_a=Symbol.for("react.element"),Fa=Symbol.for("react.fragment"),$a=Object.prototype.hasOwnProperty,La=Ma.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ia={key:!0,ref:!0,__self:!0,__source:!0};function Bn(e,t,r){var n,s={},a=null,i=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)$a.call(t,n)&&!Ia.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:_a,type:e,key:a,ref:i,props:s,_owner:La.current}}Gt.Fragment=Fa;Gt.jsx=Bn;Gt.jsxs=Bn;Un.exports=Gt;var o=Un.exports,yr={},Jr=Ra;yr.createRoot=Jr.createRoot,yr.hydrateRoot=Jr.hydrateRoot;function Wn(e,t){return function(){return e.apply(t,arguments)}}const{toString:za}=Object.prototype,{getPrototypeOf:Mr}=Object,Xt=(e=>t=>{const r=za.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),ge=e=>(e=e.toLowerCase(),t=>Xt(t)===e),Jt=e=>t=>typeof t===e,{isArray:at}=Array,mt=Jt("undefined");function Ua(e){return e!==null&&!mt(e)&&e.constructor!==null&&!mt(e.constructor)&&se(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Hn=ge("ArrayBuffer");function Ba(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Hn(e.buffer),t}const Wa=Jt("string"),se=Jt("function"),qn=Jt("number"),Qt=e=>e!==null&&typeof e=="object",Ha=e=>e===!0||e===!1,Pt=e=>{if(Xt(e)!=="object")return!1;const t=Mr(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},qa=ge("Date"),Ya=ge("File"),Va=ge("Blob"),Ga=ge("FileList"),Xa=e=>Qt(e)&&se(e.pipe),Ja=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||se(e.append)&&((t=Xt(e))==="formdata"||t==="object"&&se(e.toString)&&e.toString()==="[object FormData]"))},Qa=ge("URLSearchParams"),[Ka,Za,eo,to]=["ReadableStream","Request","Response","Headers"].map(ge),ro=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function xt(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),at(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const a=r?Object.getOwnPropertyNames(e):Object.keys(e),i=a.length;let c;for(n=0;n<i;n++)c=a[n],t.call(null,e[c],c,e)}}function Yn(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const Fe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Vn=e=>!mt(e)&&e!==Fe;function xr(){const{caseless:e}=Vn(this)&&this||{},t={},r=(n,s)=>{const a=e&&Yn(t,s)||s;Pt(t[a])&&Pt(n)?t[a]=xr(t[a],n):Pt(n)?t[a]=xr({},n):at(n)?t[a]=n.slice():t[a]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&xt(arguments[n],r);return t}const no=(e,t,r,{allOwnKeys:n}={})=>(xt(t,(s,a)=>{r&&se(s)?e[a]=Wn(s,r):e[a]=s},{allOwnKeys:n}),e),so=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ao=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},oo=(e,t,r,n)=>{let s,a,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),a=s.length;a-- >0;)i=s[a],(!n||n(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&Mr(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},io=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},co=e=>{if(!e)return null;if(at(e))return e;let t=e.length;if(!qn(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},lo=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Mr(Uint8Array)),uo=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const a=s.value;t.call(e,a[0],a[1])}},fo=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},ho=ge("HTMLFormElement"),po=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),Qr=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),mo=ge("RegExp"),Gn=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};xt(r,(s,a)=>{let i;(i=t(s,a,e))!==!1&&(n[a]=i||s)}),Object.defineProperties(e,n)},go=e=>{Gn(e,(t,r)=>{if(se(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(se(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},bo=(e,t)=>{const r={},n=s=>{s.forEach(a=>{r[a]=!0})};return at(e)?n(e):n(String(e).split(t)),r},yo=()=>{},xo=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function wo(e){return!!(e&&se(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const vo=e=>{const t=new Array(10),r=(n,s)=>{if(Qt(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const a=at(n)?[]:{};return xt(n,(i,c)=>{const d=r(i,s+1);!mt(d)&&(a[c]=d)}),t[s]=void 0,a}}return n};return r(e,0)},So=ge("AsyncFunction"),jo=e=>e&&(Qt(e)||se(e))&&se(e.then)&&se(e.catch),Xn=((e,t)=>e?setImmediate:t?((r,n)=>(Fe.addEventListener("message",({source:s,data:a})=>{s===Fe&&a===r&&n.length&&n.shift()()},!1),s=>{n.push(s),Fe.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",se(Fe.postMessage)),Eo=typeof queueMicrotask<"u"?queueMicrotask.bind(Fe):typeof process<"u"&&process.nextTick||Xn,f={isArray:at,isArrayBuffer:Hn,isBuffer:Ua,isFormData:Ja,isArrayBufferView:Ba,isString:Wa,isNumber:qn,isBoolean:Ha,isObject:Qt,isPlainObject:Pt,isReadableStream:Ka,isRequest:Za,isResponse:eo,isHeaders:to,isUndefined:mt,isDate:qa,isFile:Ya,isBlob:Va,isRegExp:mo,isFunction:se,isStream:Xa,isURLSearchParams:Qa,isTypedArray:lo,isFileList:Ga,forEach:xt,merge:xr,extend:no,trim:ro,stripBOM:so,inherits:ao,toFlatObject:oo,kindOf:Xt,kindOfTest:ge,endsWith:io,toArray:co,forEachEntry:uo,matchAll:fo,isHTMLForm:ho,hasOwnProperty:Qr,hasOwnProp:Qr,reduceDescriptors:Gn,freezeMethods:go,toObjectSet:bo,toCamelCase:po,noop:yo,toFiniteNumber:xo,findKey:Yn,global:Fe,isContextDefined:Vn,isSpecCompliantForm:wo,toJSONObject:vo,isAsyncFn:So,isThenable:jo,setImmediate:Xn,asap:Eo};function M(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s,this.status=s.status?s.status:null)}f.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:f.toJSONObject(this.config),code:this.code,status:this.status}}});const Jn=M.prototype,Qn={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Qn[e]={value:e}});Object.defineProperties(M,Qn);Object.defineProperty(Jn,"isAxiosError",{value:!0});M.from=(e,t,r,n,s,a)=>{const i=Object.create(Jn);return f.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),M.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,a&&Object.assign(i,a),i};const ko=null;function wr(e){return f.isPlainObject(e)||f.isArray(e)}function Kn(e){return f.endsWith(e,"[]")?e.slice(0,-2):e}function Kr(e,t,r){return e?e.concat(t).map(function(s,a){return s=Kn(s),!r&&a?"["+s+"]":s}).join(r?".":""):t}function To(e){return f.isArray(e)&&!e.some(wr)}const Co=f.toFlatObject(f,{},null,function(t){return/^is[A-Z]/.test(t)});function Kt(e,t,r){if(!f.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=f.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,h){return!f.isUndefined(h[y])});const n=r.metaTokens,s=r.visitor||u,a=r.dots,i=r.indexes,d=(r.Blob||typeof Blob<"u"&&Blob)&&f.isSpecCompliantForm(t);if(!f.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(f.isDate(p))return p.toISOString();if(!d&&f.isBlob(p))throw new M("Blob is not supported. Use a Buffer instead.");return f.isArrayBuffer(p)||f.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,y,h){let k=p;if(p&&!h&&typeof p=="object"){if(f.endsWith(y,"{}"))y=n?y:y.slice(0,-2),p=JSON.stringify(p);else if(f.isArray(p)&&To(p)||(f.isFileList(p)||f.endsWith(y,"[]"))&&(k=f.toArray(p)))return y=Kn(y),k.forEach(function(b,T){!(f.isUndefined(b)||b===null)&&t.append(i===!0?Kr([y],T,a):i===null?y:y+"[]",l(b))}),!1}return wr(p)?!0:(t.append(Kr(h,y,a),l(p)),!1)}const m=[],g=Object.assign(Co,{defaultVisitor:u,convertValue:l,isVisitable:wr});function E(p,y){if(!f.isUndefined(p)){if(m.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));m.push(p),f.forEach(p,function(k,w){(!(f.isUndefined(k)||k===null)&&s.call(t,k,f.isString(w)?w.trim():w,y,g))===!0&&E(k,y?y.concat(w):[w])}),m.pop()}}if(!f.isObject(e))throw new TypeError("data must be an object");return E(e),t}function Zr(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function _r(e,t){this._pairs=[],e&&Kt(e,this,t)}const Zn=_r.prototype;Zn.append=function(t,r){this._pairs.push([t,r])};Zn.toString=function(t){const r=t?function(n){return t.call(this,n,Zr)}:Zr;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Po(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function es(e,t,r){if(!t)return e;const n=r&&r.encode||Po;f.isFunction(r)&&(r={serialize:r});const s=r&&r.serialize;let a;if(s?a=s(t,r):a=f.isURLSearchParams(t)?t.toString():new _r(t,r).toString(n),a){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class en{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){f.forEach(this.handlers,function(n){n!==null&&t(n)})}}const ts={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Oo=typeof URLSearchParams<"u"?URLSearchParams:_r,Ro=typeof FormData<"u"?FormData:null,No=typeof Blob<"u"?Blob:null,Do={isBrowser:!0,classes:{URLSearchParams:Oo,FormData:Ro,Blob:No},protocols:["http","https","file","blob","url","data"]},Fr=typeof window<"u"&&typeof document<"u",vr=typeof navigator=="object"&&navigator||void 0,Ao=Fr&&(!vr||["ReactNative","NativeScript","NS"].indexOf(vr.product)<0),Mo=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",_o=Fr&&window.location.href||"http://localhost",Fo=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Fr,hasStandardBrowserEnv:Ao,hasStandardBrowserWebWorkerEnv:Mo,navigator:vr,origin:_o},Symbol.toStringTag,{value:"Module"})),Q={...Fo,...Do};function $o(e,t){return Kt(e,new Q.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,a){return Q.isNode&&f.isBuffer(r)?(this.append(n,r.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function Lo(e){return f.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Io(e){const t={},r=Object.keys(e);let n;const s=r.length;let a;for(n=0;n<s;n++)a=r[n],t[a]=e[a];return t}function rs(e){function t(r,n,s,a){let i=r[a++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),d=a>=r.length;return i=!i&&f.isArray(s)?s.length:i,d?(f.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!c):((!s[i]||!f.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],a)&&f.isArray(s[i])&&(s[i]=Io(s[i])),!c)}if(f.isFormData(e)&&f.isFunction(e.entries)){const r={};return f.forEachEntry(e,(n,s)=>{t(Lo(n),s,r,0)}),r}return null}function zo(e,t,r){if(f.isString(e))try{return(t||JSON.parse)(e),f.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const wt={transitional:ts,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,a=f.isObject(t);if(a&&f.isHTMLForm(t)&&(t=new FormData(t)),f.isFormData(t))return s?JSON.stringify(rs(t)):t;if(f.isArrayBuffer(t)||f.isBuffer(t)||f.isStream(t)||f.isFile(t)||f.isBlob(t)||f.isReadableStream(t))return t;if(f.isArrayBufferView(t))return t.buffer;if(f.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(a){if(n.indexOf("application/x-www-form-urlencoded")>-1)return $o(t,this.formSerializer).toString();if((c=f.isFileList(t))||n.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Kt(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return a||s?(r.setContentType("application/json",!1),zo(t)):t}],transformResponse:[function(t){const r=this.transitional||wt.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(f.isResponse(t)||f.isReadableStream(t))return t;if(t&&f.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?M.from(c,M.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Q.classes.FormData,Blob:Q.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};f.forEach(["delete","get","head","post","put","patch"],e=>{wt.headers[e]={}});const Uo=f.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Bo=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&Uo[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},tn=Symbol("internals");function dt(e){return e&&String(e).trim().toLowerCase()}function Ot(e){return e===!1||e==null?e:f.isArray(e)?e.map(Ot):String(e)}function Wo(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Ho=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function lr(e,t,r,n,s){if(f.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!f.isString(t)){if(f.isString(n))return t.indexOf(n)!==-1;if(f.isRegExp(n))return n.test(t)}}function qo(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Yo(e,t){const r=f.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,a,i){return this[n].call(this,t,s,a,i)},configurable:!0})})}let ee=class{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function a(c,d,l){const u=dt(d);if(!u)throw new Error("header name must be a non-empty string");const m=f.findKey(s,u);(!m||s[m]===void 0||l===!0||l===void 0&&s[m]!==!1)&&(s[m||d]=Ot(c))}const i=(c,d)=>f.forEach(c,(l,u)=>a(l,u,d));if(f.isPlainObject(t)||t instanceof this.constructor)i(t,r);else if(f.isString(t)&&(t=t.trim())&&!Ho(t))i(Bo(t),r);else if(f.isHeaders(t))for(const[c,d]of t.entries())a(d,c,n);else t!=null&&a(r,t,n);return this}get(t,r){if(t=dt(t),t){const n=f.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return Wo(s);if(f.isFunction(r))return r.call(this,s,n);if(f.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=dt(t),t){const n=f.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||lr(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function a(i){if(i=dt(i),i){const c=f.findKey(n,i);c&&(!r||lr(n,n[c],c,r))&&(delete n[c],s=!0)}}return f.isArray(t)?t.forEach(a):a(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const a=r[n];(!t||lr(this,this[a],a,t,!0))&&(delete this[a],s=!0)}return s}normalize(t){const r=this,n={};return f.forEach(this,(s,a)=>{const i=f.findKey(n,a);if(i){r[i]=Ot(s),delete r[a];return}const c=t?qo(a):String(a).trim();c!==a&&delete r[a],r[c]=Ot(s),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return f.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&f.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[tn]=this[tn]={accessors:{}}).accessors,s=this.prototype;function a(i){const c=dt(i);n[c]||(Yo(s,i),n[c]=!0)}return f.isArray(t)?t.forEach(a):a(t),this}};ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);f.reduceDescriptors(ee.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});f.freezeMethods(ee);function dr(e,t){const r=this||wt,n=t||r,s=ee.from(n.headers);let a=n.data;return f.forEach(e,function(c){a=c.call(r,a,s.normalize(),t?t.status:void 0)}),s.normalize(),a}function ns(e){return!!(e&&e.__CANCEL__)}function ot(e,t,r){M.call(this,e??"canceled",M.ERR_CANCELED,t,r),this.name="CanceledError"}f.inherits(ot,M,{__CANCEL__:!0});function ss(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new M("Request failed with status code "+r.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function Vo(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Go(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,a=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=n[a];i||(i=l),r[s]=d,n[s]=l;let m=a,g=0;for(;m!==s;)g+=r[m++],m=m%e;if(s=(s+1)%e,s===a&&(a=(a+1)%e),l-i<t)return;const E=u&&l-u;return E?Math.round(g*1e3/E):void 0}}function Xo(e,t){let r=0,n=1e3/t,s,a;const i=(l,u=Date.now())=>{r=u,s=null,a&&(clearTimeout(a),a=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),m=u-r;m>=n?i(l,u):(s=l,a||(a=setTimeout(()=>{a=null,i(s)},n-m)))},()=>s&&i(s)]}const $t=(e,t,r=3)=>{let n=0;const s=Go(50,250);return Xo(a=>{const i=a.loaded,c=a.lengthComputable?a.total:void 0,d=i-n,l=s(d),u=i<=c;n=i;const m={loaded:i,total:c,progress:c?i/c:void 0,bytes:d,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:a,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(m)},r)},rn=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},nn=e=>(...t)=>f.asap(()=>e(...t)),Jo=Q.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Q.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Q.origin),Q.navigator&&/(msie|trident)/i.test(Q.navigator.userAgent)):()=>!0,Qo=Q.hasStandardBrowserEnv?{write(e,t,r,n,s,a){const i=[e+"="+encodeURIComponent(t)];f.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),f.isString(n)&&i.push("path="+n),f.isString(s)&&i.push("domain="+s),a===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ko(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Zo(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function as(e,t,r){let n=!Ko(t);return e&&(n||r==!1)?Zo(e,t):t}const sn=e=>e instanceof ee?{...e}:e;function Be(e,t){t=t||{};const r={};function n(l,u,m,g){return f.isPlainObject(l)&&f.isPlainObject(u)?f.merge.call({caseless:g},l,u):f.isPlainObject(u)?f.merge({},u):f.isArray(u)?u.slice():u}function s(l,u,m,g){if(f.isUndefined(u)){if(!f.isUndefined(l))return n(void 0,l,m,g)}else return n(l,u,m,g)}function a(l,u){if(!f.isUndefined(u))return n(void 0,u)}function i(l,u){if(f.isUndefined(u)){if(!f.isUndefined(l))return n(void 0,l)}else return n(void 0,u)}function c(l,u,m){if(m in t)return n(l,u);if(m in e)return n(void 0,l)}const d={url:a,method:a,data:a,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u,m)=>s(sn(l),sn(u),m,!0)};return f.forEach(Object.keys(Object.assign({},e,t)),function(u){const m=d[u]||s,g=m(e[u],t[u],u);f.isUndefined(g)&&m!==c||(r[u]=g)}),r}const os=e=>{const t=Be({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:s,xsrfCookieName:a,headers:i,auth:c}=t;t.headers=i=ee.from(i),t.url=es(as(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let d;if(f.isFormData(r)){if(Q.hasStandardBrowserEnv||Q.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((d=i.getContentType())!==!1){const[l,...u]=d?d.split(";").map(m=>m.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(Q.hasStandardBrowserEnv&&(n&&f.isFunction(n)&&(n=n(t)),n||n!==!1&&Jo(t.url))){const l=s&&a&&Qo.read(a);l&&i.set(s,l)}return t},ei=typeof XMLHttpRequest<"u",ti=ei&&function(e){return new Promise(function(r,n){const s=os(e);let a=s.data;const i=ee.from(s.headers).normalize();let{responseType:c,onUploadProgress:d,onDownloadProgress:l}=s,u,m,g,E,p;function y(){E&&E(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function k(){if(!h)return;const b=ee.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),P={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:b,config:e,request:h};ss(function(R){r(R),y()},function(R){n(R),y()},P),h=null}"onloadend"in h?h.onloadend=k:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(k)},h.onabort=function(){h&&(n(new M("Request aborted",M.ECONNABORTED,e,h)),h=null)},h.onerror=function(){n(new M("Network Error",M.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let T=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const P=s.transitional||ts;s.timeoutErrorMessage&&(T=s.timeoutErrorMessage),n(new M(T,P.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,e,h)),h=null},a===void 0&&i.setContentType(null),"setRequestHeader"in h&&f.forEach(i.toJSON(),function(T,P){h.setRequestHeader(P,T)}),f.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),l&&([g,p]=$t(l,!0),h.addEventListener("progress",g)),d&&h.upload&&([m,E]=$t(d),h.upload.addEventListener("progress",m),h.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(u=b=>{h&&(n(!b||b.type?new ot(null,e,h):b),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const w=Vo(s.url);if(w&&Q.protocols.indexOf(w)===-1){n(new M("Unsupported protocol "+w+":",M.ERR_BAD_REQUEST,e));return}h.send(a||null)})},ri=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,s;const a=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;n.abort(u instanceof M?u:new ot(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,a(new M(`timeout ${t} of ms exceeded`,M.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(a):l.removeEventListener("abort",a)}),e=null)};e.forEach(l=>l.addEventListener("abort",a));const{signal:d}=n;return d.unsubscribe=()=>f.asap(c),d}},ni=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,s;for(;n<r;)s=n+t,yield e.slice(n,s),n=s},si=async function*(e,t){for await(const r of ai(e))yield*ni(r,t)},ai=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},an=(e,t,r,n)=>{const s=si(e,t);let a=0,i,c=d=>{i||(i=!0,n&&n(d))};return new ReadableStream({async pull(d){try{const{done:l,value:u}=await s.next();if(l){c(),d.close();return}let m=u.byteLength;if(r){let g=a+=m;r(g)}d.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(d){return c(d),s.return()}},{highWaterMark:2})},Zt=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",is=Zt&&typeof ReadableStream=="function",oi=Zt&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),cs=(e,...t)=>{try{return!!e(...t)}catch{return!1}},ii=is&&cs(()=>{let e=!1;const t=new Request(Q.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),on=64*1024,Sr=is&&cs(()=>f.isReadableStream(new Response("").body)),Lt={stream:Sr&&(e=>e.body)};Zt&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Lt[t]&&(Lt[t]=f.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new M(`Response type '${t}' is not supported`,M.ERR_NOT_SUPPORT,n)})})})(new Response);const ci=async e=>{if(e==null)return 0;if(f.isBlob(e))return e.size;if(f.isSpecCompliantForm(e))return(await new Request(Q.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(f.isArrayBufferView(e)||f.isArrayBuffer(e))return e.byteLength;if(f.isURLSearchParams(e)&&(e=e+""),f.isString(e))return(await oi(e)).byteLength},li=async(e,t)=>{const r=f.toFiniteNumber(e.getContentLength());return r??ci(t)},di=Zt&&(async e=>{let{url:t,method:r,data:n,signal:s,cancelToken:a,timeout:i,onDownloadProgress:c,onUploadProgress:d,responseType:l,headers:u,withCredentials:m="same-origin",fetchOptions:g}=os(e);l=l?(l+"").toLowerCase():"text";let E=ri([s,a&&a.toAbortSignal()],i),p;const y=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let h;try{if(d&&ii&&r!=="get"&&r!=="head"&&(h=await li(u,n))!==0){let P=new Request(t,{method:"POST",body:n,duplex:"half"}),N;if(f.isFormData(n)&&(N=P.headers.get("content-type"))&&u.setContentType(N),P.body){const[R,V]=rn(h,$t(nn(d)));n=an(P.body,on,R,V)}}f.isString(m)||(m=m?"include":"omit");const k="credentials"in Request.prototype;p=new Request(t,{...g,signal:E,method:r.toUpperCase(),headers:u.normalize().toJSON(),body:n,duplex:"half",credentials:k?m:void 0});let w=await fetch(p);const b=Sr&&(l==="stream"||l==="response");if(Sr&&(c||b&&y)){const P={};["status","statusText","headers"].forEach(U=>{P[U]=w[U]});const N=f.toFiniteNumber(w.headers.get("content-length")),[R,V]=c&&rn(N,$t(nn(c),!0))||[];w=new Response(an(w.body,on,R,()=>{V&&V(),y&&y()}),P)}l=l||"text";let T=await Lt[f.findKey(Lt,l)||"text"](w,e);return!b&&y&&y(),await new Promise((P,N)=>{ss(P,N,{data:T,headers:ee.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:p})})}catch(k){throw y&&y(),k&&k.name==="TypeError"&&/fetch/i.test(k.message)?Object.assign(new M("Network Error",M.ERR_NETWORK,e,p),{cause:k.cause||k}):M.from(k,k&&k.code,e,p)}}),jr={http:ko,xhr:ti,fetch:di};f.forEach(jr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const cn=e=>`- ${e}`,ui=e=>f.isFunction(e)||e===null||e===!1,ls={getAdapter:e=>{e=f.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let a=0;a<t;a++){r=e[a];let i;if(n=r,!ui(r)&&(n=jr[(i=String(r)).toLowerCase()],n===void 0))throw new M(`Unknown adapter '${i}'`);if(n)break;s[i||"#"+a]=n}if(!n){const a=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?a.length>1?`since :
`+a.map(cn).join(`
`):" "+cn(a[0]):"as no adapter specified";throw new M("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:jr};function ur(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ot(null,e)}function ln(e){return ur(e),e.headers=ee.from(e.headers),e.data=dr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ls.getAdapter(e.adapter||wt.adapter)(e).then(function(n){return ur(e),n.data=dr.call(e,e.transformResponse,n),n.headers=ee.from(n.headers),n},function(n){return ns(n)||(ur(e),n&&n.response&&(n.response.data=dr.call(e,e.transformResponse,n.response),n.response.headers=ee.from(n.response.headers))),Promise.reject(n)})}const ds="1.8.4",er={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{er[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const dn={};er.transitional=function(t,r,n){function s(a,i){return"[Axios v"+ds+"] Transitional option '"+a+"'"+i+(n?". "+n:"")}return(a,i,c)=>{if(t===!1)throw new M(s(i," has been removed"+(r?" in "+r:"")),M.ERR_DEPRECATED);return r&&!dn[i]&&(dn[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(a,i,c):!0}};er.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function fi(e,t,r){if(typeof e!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const a=n[s],i=t[a];if(i){const c=e[a],d=c===void 0||i(c,a,e);if(d!==!0)throw new M("option "+a+" must be "+d,M.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new M("Unknown option "+a,M.ERR_BAD_OPTION)}}const Rt={assertOptions:fi,validators:er},ye=Rt.validators;let Le=class{constructor(t){this.defaults=t,this.interceptors={request:new en,response:new en}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const a=s.stack?s.stack.replace(/^.+\n/,""):"";try{n.stack?a&&!String(n.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+a):n.stack=a}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Be(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:a}=r;n!==void 0&&Rt.assertOptions(n,{silentJSONParsing:ye.transitional(ye.boolean),forcedJSONParsing:ye.transitional(ye.boolean),clarifyTimeoutError:ye.transitional(ye.boolean)},!1),s!=null&&(f.isFunction(s)?r.paramsSerializer={serialize:s}:Rt.assertOptions(s,{encode:ye.function,serialize:ye.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Rt.assertOptions(r,{baseUrl:ye.spelling("baseURL"),withXsrfToken:ye.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=a&&f.merge(a.common,a[r.method]);a&&f.forEach(["delete","get","head","post","put","patch","common"],p=>{delete a[p]}),r.headers=ee.concat(i,a);const c=[];let d=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(r)===!1||(d=d&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,m=0,g;if(!d){const p=[ln.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),g=p.length,u=Promise.resolve(r);m<g;)u=u.then(p[m++],p[m++]);return u}g=c.length;let E=r;for(m=0;m<g;){const p=c[m++],y=c[m++];try{E=p(E)}catch(h){y.call(this,h);break}}try{u=ln.call(this,E)}catch(p){return Promise.reject(p)}for(m=0,g=l.length;m<g;)u=u.then(l[m++],l[m++]);return u}getUri(t){t=Be(this.defaults,t);const r=as(t.baseURL,t.url,t.allowAbsoluteUrls);return es(r,t.params,t.paramsSerializer)}};f.forEach(["delete","get","head","options"],function(t){Le.prototype[t]=function(r,n){return this.request(Be(n||{},{method:t,url:r,data:(n||{}).data}))}});f.forEach(["post","put","patch"],function(t){function r(n){return function(a,i,c){return this.request(Be(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:a,data:i}))}}Le.prototype[t]=r(),Le.prototype[t+"Form"]=r(!0)});let hi=class us{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(a){r=a});const n=this;this.promise.then(s=>{if(!n._listeners)return;let a=n._listeners.length;for(;a-- >0;)n._listeners[a](s);n._listeners=null}),this.promise.then=s=>{let a;const i=new Promise(c=>{n.subscribe(c),a=c}).then(s);return i.cancel=function(){n.unsubscribe(a)},i},t(function(a,i,c){n.reason||(n.reason=new ot(a,i,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new us(function(s){t=s}),cancel:t}}};function pi(e){return function(r){return e.apply(null,r)}}function mi(e){return f.isObject(e)&&e.isAxiosError===!0}const Er={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Er).forEach(([e,t])=>{Er[t]=e});function fs(e){const t=new Le(e),r=Wn(Le.prototype.request,t);return f.extend(r,Le.prototype,t,{allOwnKeys:!0}),f.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return fs(Be(e,s))},r}const z=fs(wt);z.Axios=Le;z.CanceledError=ot;z.CancelToken=hi;z.isCancel=ns;z.VERSION=ds;z.toFormData=Kt;z.AxiosError=M;z.Cancel=z.CanceledError;z.all=function(t){return Promise.all(t)};z.spread=pi;z.isAxiosError=mi;z.mergeConfig=Be;z.AxiosHeaders=ee;z.formToJSON=e=>rs(f.isHTMLForm(e)?new FormData(e):e);z.getAdapter=ls.getAdapter;z.HttpStatusCode=Er;z.default=z;const{Axios:gf,AxiosError:bf,CanceledError:yf,isCancel:xf,CancelToken:wf,VERSION:vf,all:Sf,Cancel:jf,isAxiosError:Ef,spread:kf,toFormData:Tf,AxiosHeaders:Cf,HttpStatusCode:Pf,formToJSON:Of,getAdapter:Rf,mergeConfig:Nf}=z,hs="https://authorization.elevatebr.org/oauth2",gi="http://localhost:8080/",It="0c61ff08-282f-4b5a-b46b-1238230a0760",ps="00e79631-5956-4f0a-995c-74230b2cb4b4",bi="http://localhost:3000/callback",ms=e=>{if(!e)return!0;try{return JSON.parse(atob(e.split(".")[1])).exp*1e3<Date.now()}catch{return!0}},I=z.create({baseURL:gi,headers:{"Content-Type":"application/json",Accept:"application/json"}});I.interceptors.request.use(async e=>{console.log("Request interceptor - URL:",e.url);const t=localStorage.getItem("access_token");if(console.log("Current token:",t?"exists":"not found"),!t)return console.log("No token found, redirecting to login"),Nt(),Promise.reject(new Error("No authentication token available"));if(ms(t)){console.log("Token is expired, attempting to refresh");const r=localStorage.getItem("refresh_token");if(!r)return console.log("No refresh token found, redirecting to login"),Nt(),Promise.reject(new Error("No refresh token available"));try{const n=await gs(r);e.headers.Authorization=`Bearer ${n}`,console.log("Token refreshed successfully")}catch(n){return console.error("Failed to refresh token:",n),Nt(),Promise.reject(n)}}else e.headers.Authorization=`Bearer ${t}`,console.log("Using existing token");return console.log("Final request headers:",e.headers),e},e=>(console.error("Request interceptor error:",e),Promise.reject(e)));I.interceptors.response.use(e=>(console.log("Response received:",e.status),e),async e=>{var r,n,s;console.error("Response error:",(r=e.response)==null?void 0:r.status,(n=e.response)==null?void 0:n.data);const t=e.config;if(((s=e.response)==null?void 0:s.status)===401&&!t._retry){console.log("Attempting to recover from 401 error"),t._retry=!0;try{const a=localStorage.getItem("refresh_token");if(!a)throw new Error("No refresh token available");const i=await gs(a);return t.headers.Authorization=`Bearer ${i}`,console.log("Token refreshed, retrying request"),I(t)}catch(a){return console.error("Failed to recover from 401:",a),Nt(),Promise.reject(a)}}return Promise.reject(e)});const gs=async e=>{console.log("Refreshing access token");const t=new URLSearchParams;t.append("grant_type","refresh_token"),t.append("refresh_token",e),t.append("client_id",It);try{const r=await z.post(`${hs}/token`,t.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa(`${It}:${ps}`)}`}});console.log("Token refresh successful");const{access_token:n,refresh_token:s}=r.data;return localStorage.setItem("access_token",n),localStorage.setItem("refresh_token",s),n}catch(r){throw console.error("Token refresh failed:",r),r}},yi=async e=>{console.log("Exchanging code for token");const t=new URLSearchParams;t.append("grant_type","authorization_code"),t.append("code",e),t.append("redirect_uri",bi),t.append("client_id",It);try{const r=await z.post(`${hs}/token`,t.toString(),{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa(`${It}:${ps}`)}`}});console.log("Code exchange successful");const{access_token:n,refresh_token:s}=r.data;return localStorage.setItem("access_token",n),localStorage.setItem("refresh_token",s),n}catch(r){throw console.error("Code exchange failed:",r),r.response&&(console.error("Response data:",r.response.data),console.error("Response status:",r.response.status),console.error("Response headers:",r.response.headers)),r}},q=()=>{const e=localStorage.getItem("access_token"),t=!!e&&!ms(e);return console.log("Authentication check:",t?"valid":"invalid"),t},Nt=()=>{console.log("Logging out"),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),window.location.href="/login"},ut={getAll:async()=>(await I.get("/api/private/user")).data,getById:async e=>(await I.get(`/api/private/user/${e}`)).data,getCurrentUser:async()=>(await I.get("/api/private/user/current")).data,create:async e=>(await I.post("/api/private/user/new",e)).data,update:async(e,t)=>(await I.put(`/api/private/user/${e}`,t)).data,delete:async e=>(await I.delete(`/api/private/user/${e}`)).data,test:async(e=0,t=10)=>(await I.get(`/api/private/user/test?page=${e}&size=${t}`)).data},xi=async(e="",t="",r="",n="",s="")=>{try{const a={page:e,size:n,...t&&{status:t},...r&&{priority:r},...s&&{appOrigin:s}};return(await I.get("/api/private/ticket",{params:a})).data}catch(a){throw console.error("Error fetching tickets:",a),a}},zt=async e=>{try{return(await I.get(`/api/private/ticket/${e}`)).data}catch(t){throw console.error(`Error fetching ticket ${e}:`,t),t}},wi=async e=>{try{return(await I.put(`/api/private/ticket/close/${e}`)).data}catch(t){throw console.error(`Erro ao fechar o ticket ${e}:`,t),t}},fr=async e=>{try{return(await I.put(`/api/private/ticket/in_progress/${e}`)).data}catch(t){throw console.error(`Erro ao marcar o ticket ${e} como em progresso:`,t),t}},vi=async e=>{try{return(await I.put(`/api/private/ticket/resolved/${e}`)).data}catch(t){console.error(`Erro ao marcar o ticket ${e} como resolvido:`,t)}},Si=async e=>{try{return(await I.put(`/api/private/ticket/pending/${e}`)).data}catch(t){console.error(`Erro ao marcar o ticket ${e} como pendente:`,t)}},ji=async e=>{try{return(await I.put(`/api/private/ticket/high/${e}`)).data}catch(t){console.error(`Erro ao marcar a prioridade do ticket ${e} como alta:`,t)}},Ei=async e=>{try{return(await I.put(`/api/private/ticket/critical/${e}`)).data}catch(t){console.error(`Erro ao marcar a prioridade do ticket ${e} como crítica:`,t)}},ki=async e=>{try{return(await I.put(`/api/private/ticket/low/${e}`)).data}catch(t){console.error(`Erro ao marcar a prioridade do ticket ${e} como baixa:`,t)}},Ti=async e=>{try{return(await I.put(`/api/private/ticket/medium/${e}`)).data}catch(t){console.error(`Erro ao marcar a prioridade do ticket ${e} como média:`,t)}},Ci=async(e,t)=>{try{return(await I.put(`/api/private/ticket/responsible/${e}`,{responsibleUser:t})).data}catch(r){throw console.error(`Erro ao atualizar o responsável do ticket ${e}:`,r),r}},Pi=async(e,{responsibleUser:t,priority:r})=>{let n=null;if(t!==void 0&&(n=await Ci(e,t)),r!==void 0){const s={LOW:ki,MEDIUM:Ti,HIGH:ji,CRITICAL:Ei}[r];s&&(n=await s(e))}return n?await zt(e):null},Oi=async()=>{try{return(await I.get("/api/private/ticket/app-origins")).data}catch(e){throw console.error("Error fetching app origins:",e),e}},bs=v.createContext(),He=()=>v.useContext(bs),Ri=({children:e})=>{const[t,r]=v.useState([]),[n,s]=v.useState(!0),[a,i]=v.useState([]),[c,d]=v.useState(null),[l,u]=v.useState(null),[m,g]=v.useState(!1),[E,p]=v.useState(!1),[y,h]=v.useState(null),[k,w]=v.useState(null),[b,T]=v.useState(0),[P,N]=v.useState(!0),[R,V]=v.useState(0),[U,Ne]=v.useState(""),[ce,K]=v.useState(10),[G,Te]=v.useState(0),[C,B]=v.useState(0),[X,qe]=v.useState("");v.useRef(q());const D=v.useRef(!1),J=v.useRef(null);v.useRef(null);const te=v.useRef(!1),W=v.useRef(!1),jt=v.useRef(!1),[ct,De]=v.useState(null),[le,Ye]=v.useState(""),[de,je]=v.useState(""),[oe,Ae]=v.useState([]),[be,Yr]=v.useState(!1),[lt,Vr]=v.useState(q()),[fa,Gr]=v.useState([]);console.log("AppProvider initialized with auth status:",q()),v.useEffect(()=>{console.log("AppContext - users state changed:",(t==null?void 0:t.length)||0)},[t]),v.useEffect(()=>{console.log("AppContext - appOrigins state changed:",(oe==null?void 0:oe.length)||0)},[oe]);const ue=v.useCallback(async()=>{var S;if(!q()){console.log("Not authenticated, skipping users fetch");return}try{console.log("Fetching users..."),s(!0);const x=await ut.getAll();console.log("Users fetched successfully:",x),console.log("Users response type:",typeof x),console.log("Users response is array:",Array.isArray(x)),console.log("Users content:",x.content),console.log("Users content type:",typeof x.content),console.log("Users content is array:",Array.isArray(x.content)),console.log("Users array length:",((S=x.content)==null?void 0:S.length)||0);let A=[];x.content&&Array.isArray(x.content)?(console.log("Using response.content as users array"),A=x.content):Array.isArray(x)?(console.log("Using response directly as users array"),A=x):x.data&&Array.isArray(x.data)?(console.log("Using response.data as users array"),A=x.data):(console.warn("Unexpected users response structure:",x),console.warn("Response keys:",Object.keys(x||{})),A=[]),console.log("Final users array:",A),console.log("Final users array length:",A.length),r(A)}catch(x){throw console.error("Error fetching users:",x),h(x.message),x}finally{s(!1)}},[]),Ce=v.useCallback(async()=>{if(!q()){console.log("Not authenticated, skipping current user fetch");return}try{console.log("Fetching current user...");const S=await ut.getCurrentUser();console.log("Current user fetched successfully:",S),De(S)}catch(S){console.error("Error fetching current user:",S)}},[]),ha=v.useCallback(async()=>{console.log("Forcing users reload...");try{await ue()}catch(S){console.error("Error reloading users:",S)}},[ue]),fe=v.useCallback(async()=>{if(!q()){console.log("Not authenticated, skipping app origins fetch");return}try{console.log("Fetching app origins..."),Yr(!0);const S=await Oi();console.log("App origins fetched successfully:",S),Ae(S||[])}catch(S){console.error("Error fetching app origins:",S),h(S.message)}finally{Yr(!1)}},[]),pa=v.useCallback(async()=>{console.log("Forcing app origins reload...");try{await fe()}catch(S){console.error("Error reloading app origins:",S)}},[fe]);v.useEffect(()=>((async()=>{const x=q();if(console.log("Initial data fetch - auth status:",x),console.log("Initial data fetch - initialFetchDone:",D.current),console.log("Initial data fetch - mountRef:",te.current),console.log("Initial data fetch - fetchingRef:",W.current),!x||te.current||W.current){console.log("Skipping data fetch - not authenticated, already mounted, or currently fetching");return}console.log("Starting initial data fetch"),W.current=!0,g(!0),h(null);try{await Promise.all([ue(),Ce(),fe()]),D.current=!0,te.current=!0}catch(A){console.error("Error in initial data fetch:",A),h(A.message),J.current&&clearTimeout(J.current),J.current=setTimeout(()=>{D.current=!1,te.current=!1,jt.current=!1},5e3)}finally{g(!1),W.current=!1}})(),()=>{J.current&&clearTimeout(J.current)}),[ue,Ce,fe]),v.useEffect(()=>{(()=>{const x=q();console.log("Auth check - current status:",x),console.log("Auth check - previous isAuth state:",lt),Vr(x),x&&!D.current&&!W.current&&(console.log("User just authenticated, triggering initial data fetch"),ue(),Ce(),fe(),D.current=!0,te.current=!0),x&&D.current&&!W.current&&(console.log("User authenticated but data might be stale, reloading users and app origins"),console.log("Current users count:",t.length),console.log("Current app origins count:",oe.length),ue(),Ce(),fe()),x&&t.length===0&&!W.current&&(console.log("User authenticated but no users loaded, fetching users"),ue()),x&&oe.length===0&&!W.current&&(console.log("User authenticated but no app origins loaded, fetching app origins"),fe()),x||(console.log("User not authenticated, clearing sensitive data"),De(null),i([]),d(null),u(null),h(null),w(null),r([]),Ae([]),D.current=!1,te.current=!1)})()},[ue,Ce,fe,t.length,oe.length]),v.useEffect(()=>{lt&&!D.current&&!W.current&&(console.log("Detectado login - disparando fetch inicial de usuários e usuário atual"),W.current=!0,Promise.all([ue(),Ce(),fe()]).then(()=>{D.current=!0,te.current=!0}).catch(S=>{h(S.message)}).finally(()=>{W.current=!1}))},[lt,ue,Ce,fe]),v.useEffect(()=>{const S=setInterval(()=>{const x=q();Vr(x)},1e3);return()=>clearInterval(S)},[]);const ma=v.useCallback(async S=>{if(q())try{g(!0);const x=await(void 0)(S);return i(A=>[...A,x]),h(null),x}catch(x){throw console.error("Error creating ticket:",x),h(x.message),x}finally{g(!1)}},[]),ga=v.useCallback(async(S,x)=>{if(q())try{g(!0);const A=await(void 0)(S,x);return i(Pe=>Pe.map(he=>he.id===S?A:he)),(c==null?void 0:c.id)===S&&(d(A),u(A)),h(null),A}catch(A){throw console.error("Error updating ticket:",A),h(A.message),A}finally{g(!1)}},[c]),ba=v.useCallback(async S=>{if(q())try{g(!0),await(void 0)(S),i(x=>x.filter(A=>A.id!==S)),(c==null?void 0:c.id)===S&&(d(null),u(null)),h(null)}catch(x){throw console.error("Error deleting ticket:",x),h(x.message),x}finally{g(!1)}},[c]),ya=v.useCallback(async S=>{if(q())try{g(!0);const x=await ut.create(S);return r(A=>[...A,x]),h(null),x}catch(x){throw console.error("Error creating user:",x),h(x.message),x}finally{g(!1)}},[]),xa=v.useCallback(async(S,x)=>{if(q())try{g(!0);const A=await ut.update(S,x);return r(Pe=>Pe.map(he=>he.id===S?A:he)),h(null),A}catch(A){throw console.error("Error updating user:",A),h(A.message),A}finally{g(!1)}},[]),wa=v.useCallback(async S=>{if(q())try{g(!0),await ut.delete(S),r(x=>x.filter(A=>A.id!==S)),h(null)}catch(x){throw console.error("Error deleting user:",x),h(x.message),x}finally{g(!1)}},[]),va=v.useCallback(S=>{console.log("Novo status selecionado:",S),Ne(S),T(0)},[]),Sa=v.useCallback(S=>{Ye(S),T(0)},[]),ja=v.useCallback(S=>{je(S),T(0)},[]),Et=v.useCallback(async()=>{if(lt){g(!0),h(null),console.log("[fetchTickets] Enviando requisição:",{page:b,status:U,priority:le,appOrigin:de,size:ce});try{const S=await xi(b,U,le,ce,de);console.log("[fetchTickets] Resposta recebida:",S);const{content:x,page:A}=S,{totalElements:Pe,totalPages:he,number:Ve,size:ff}=A||{};i(x||[]),B(Pe||0),Te(he||0),console.log("[fetchTickets] Atualizando estados:",{tickets:x,totalElements:Pe,totalPages:he,currentPageFromApi:Ve,currentPage:b}),Ve!==void 0&&Ve!==b&&(T(Ve),console.log("[fetchTickets] Corrigindo página para:",Ve)),N((Ve||0)+1<(he||0))}catch(S){console.error("[fetchTickets] Erro ao buscar tickets:",S),h(S.message)}finally{g(!1)}}},[b,U,le,de,ce,lt]);v.useEffect(()=>{Et()},[b,ce,U,le,de,Et]),v.useEffect(()=>{console.log("[SupportTicketList] Renderizou com:",{currentPage:b,totalPages:G,tickets:a})},[b,G,a]);const cr=v.useCallback(async S=>{if(!(!q()||!S))try{p(!0),console.log("Fetching details for ticket:",S);const x=await zt(S);console.log("Fetched ticket details:",x),u(x),w(null)}catch(x){console.error("Error fetching ticket details:",x),w(x.message),u(null)}finally{p(!1)}},[]),Ea=v.useCallback(async S=>{console.log("Selecting ticket:",S),d(S),u(null),w(null),S!=null&&S.id&&await cr(S.id)},[cr]),ka=v.useCallback(S=>{const x=S-1;console.log("[handlePageChange] Solicitando página:",S,"(índice base 0:",x,")"),x>=0&&x<G&&x!==b&&T(x)},[b,G]),Ta=v.useCallback(S=>{K(S),T(0)},[]),Ca=v.useCallback(async(S,{responsibleUser:x,priority:A})=>await Pi(S,{responsibleUser:x,priority:A}),[]),Pa=v.useCallback((S,x="info")=>{const A=Date.now()+Math.random(),Pe={id:A,message:S,type:x};Gr(he=>[...he,Pe]),setTimeout(()=>{Xr(A)},5e3)},[]),Xr=v.useCallback(S=>{Gr(x=>x.filter(A=>A.id!==S))},[]),Oa={users:t,tickets:a,selectedTicket:c,ticketDetails:l,loading:m,detailsLoading:E,loadingUsers:n,error:y,detailsError:k,currentPage:b+1,hasMore:P,totalElements:C,selectedStatus:U,selectedPriority:le,selectedAppOrigin:de,appOrigins:oe,loadingAppOrigins:be,pageSize:ce,setPageSize:Ta,totalPages:G,currentStatus:X,setCurrentStatus:qe,fetchUsers:ue,fetchAppOrigins:fe,fetchTickets:Et,fetchTicketDetails:cr,handleSelectTicket:Ea,createTicket:ma,updateTicket:ga,deleteTicket:ba,createUser:ya,updateUser:xa,deleteUser:wa,currentUser:ct,fetchCurrentUser:Ce,handleStatusChange:va,handlePriorityChange:Sa,handleAppOriginChange:ja,handlePageChange:ka,loadMoreTickets:()=>Et(!1,null),totalTickets:R,reloadUsers:ha,reloadAppOrigins:pa,updateTicketFields:Ca,toasts:fa,addToast:Pa,removeToast:Xr};return o.jsx(bs.Provider,{value:Oa,children:e})},un=({children:e})=>{const t=Ar();return q()?e:(console.log("Access denied, redirecting to login"),o.jsx(zn,{to:"/login",state:{from:t},replace:!0}))},Ni=()=>{const e=We();return o.jsx("div",{className:"landing-container",children:o.jsxs("div",{className:"landing-content",children:[o.jsx("h1",{children:"Welcome to Support Hub"}),o.jsx("p",{children:"Choose your access type below"}),o.jsxs("div",{className:"access-options",children:[o.jsxs("div",{className:"access-card",onClick:()=>{localStorage.setItem("postLoginRedirect","/user/tickets"),e("/user/tickets")},children:[o.jsx("i",{className:"fas fa-user"}),o.jsx("h2",{children:"User Access"}),o.jsx("p",{children:"Submit and track your support tickets"}),o.jsx("button",{className:"access-button",type:"button",children:"Enter as User"})]}),o.jsxs("div",{className:"access-card",onClick:()=>{localStorage.setItem("postLoginRedirect","/support/tickets"),e("/support/tickets")},children:[o.jsx("i",{className:"fas fa-headset"}),o.jsx("h2",{children:"Support Staff"}),o.jsx("p",{children:"Manage and respond to support tickets"}),o.jsx("button",{className:"access-button",type:"button",children:"Enter as Support"})]})]})]})})},Di=()=>{We();const{state:e}=Ar(),{loading:t,error:r}=He(),n=()=>{try{const a=`https://authorization.elevatebr.org/oauth2/authorize?${new URLSearchParams({response_type:"code",client_id:"0c61ff08-282f-4b5a-b46b-1238230a0760",redirect_uri:"http://localhost:3000/callback",scope:"SupportHub:User SupportHub:Admin",state:JSON.stringify({...e})}).toString()}`;console.log("Redirecting to:",a),window.location.href=a}catch(s){console.error("Error during login:",s)}};return o.jsx("div",{className:"login-container",children:o.jsxs("div",{className:"login-box",children:[o.jsx("h1",{children:"SupportHub"}),o.jsx("p",{children:"Entre para acessar o sistema de tickets"}),r&&o.jsxs("div",{className:"error-message",children:[o.jsx("i",{className:"fas fa-exclamation-circle"}),o.jsx("span",{children:r})]}),o.jsx("button",{className:"login-button",onClick:n,disabled:t,children:t?o.jsxs(o.Fragment,{children:[o.jsx("i",{className:"fas fa-spinner fa-spin"}),o.jsx("span",{children:"Entrando..."})]}):o.jsxs(o.Fragment,{children:[o.jsx("i",{className:"fas fa-sign-in-alt"}),o.jsx("span",{children:"Entrar"})]})})]})})};var Z=function(){return Z=Object.assign||function(t){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},Z.apply(this,arguments)};function gt(e,t,r){if(r||arguments.length===2)for(var n=0,s=t.length,a;n<s;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var L="-ms-",pt="-moz-",F="-webkit-",ys="comm",tr="rule",$r="decl",Ai="@import",xs="@keyframes",Mi="@layer",ws=Math.abs,Lr=String.fromCharCode,kr=Object.assign;function _i(e,t){return Y(e,0)^45?(((t<<2^Y(e,0))<<2^Y(e,1))<<2^Y(e,2))<<2^Y(e,3):0}function vs(e){return e.trim()}function Ee(e,t){return(e=t.exec(e))?e[0]:e}function _(e,t,r){return e.replace(t,r)}function Dt(e,t,r){return e.indexOf(t,r)}function Y(e,t){return e.charCodeAt(t)|0}function et(e,t,r){return e.slice(t,r)}function xe(e){return e.length}function Ss(e){return e.length}function ht(e,t){return t.push(e),e}function Fi(e,t){return e.map(t).join("")}function fn(e,t){return e.filter(function(r){return!Ee(r,t)})}var rr=1,tt=1,js=0,ie=0,H=0,it="";function nr(e,t,r,n,s,a,i,c){return{value:e,root:t,parent:r,type:n,props:s,children:a,line:rr,column:tt,length:i,return:"",siblings:c}}function Re(e,t){return kr(nr("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Xe(e){for(;e.root;)e=Re(e.root,{children:[e]});ht(e,e.siblings)}function $i(){return H}function Li(){return H=ie>0?Y(it,--ie):0,tt--,H===10&&(tt=1,rr--),H}function me(){return H=ie<js?Y(it,ie++):0,tt++,H===10&&(tt=1,rr++),H}function Ie(){return Y(it,ie)}function At(){return ie}function sr(e,t){return et(it,e,t)}function Tr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ii(e){return rr=tt=1,js=xe(it=e),ie=0,[]}function zi(e){return it="",e}function hr(e){return vs(sr(ie-1,Cr(e===91?e+2:e===40?e+1:e)))}function Ui(e){for(;(H=Ie())&&H<33;)me();return Tr(e)>2||Tr(H)>3?"":" "}function Bi(e,t){for(;--t&&me()&&!(H<48||H>102||H>57&&H<65||H>70&&H<97););return sr(e,At()+(t<6&&Ie()==32&&me()==32))}function Cr(e){for(;me();)switch(H){case e:return ie;case 34:case 39:e!==34&&e!==39&&Cr(H);break;case 40:e===41&&Cr(e);break;case 92:me();break}return ie}function Wi(e,t){for(;me()&&e+H!==57;)if(e+H===84&&Ie()===47)break;return"/*"+sr(t,ie-1)+"*"+Lr(e===47?e:me())}function Hi(e){for(;!Tr(Ie());)me();return sr(e,ie)}function qi(e){return zi(Mt("",null,null,null,[""],e=Ii(e),0,[0],e))}function Mt(e,t,r,n,s,a,i,c,d){for(var l=0,u=0,m=i,g=0,E=0,p=0,y=1,h=1,k=1,w=0,b="",T=s,P=a,N=n,R=b;h;)switch(p=w,w=me()){case 40:if(p!=108&&Y(R,m-1)==58){Dt(R+=_(hr(w),"&","&\f"),"&\f",ws(l?c[l-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:R+=hr(w);break;case 9:case 10:case 13:case 32:R+=Ui(p);break;case 92:R+=Bi(At()-1,7);continue;case 47:switch(Ie()){case 42:case 47:ht(Yi(Wi(me(),At()),t,r,d),d);break;default:R+="/"}break;case 123*y:c[l++]=xe(R)*k;case 125*y:case 59:case 0:switch(w){case 0:case 125:h=0;case 59+u:k==-1&&(R=_(R,/\f/g,"")),E>0&&xe(R)-m&&ht(E>32?pn(R+";",n,r,m-1,d):pn(_(R," ","")+";",n,r,m-2,d),d);break;case 59:R+=";";default:if(ht(N=hn(R,t,r,l,u,s,c,b,T=[],P=[],m,a),a),w===123)if(u===0)Mt(R,t,N,N,T,a,m,c,P);else switch(g===99&&Y(R,3)===110?100:g){case 100:case 108:case 109:case 115:Mt(e,N,N,n&&ht(hn(e,N,N,0,0,s,c,b,s,T=[],m,P),P),s,P,m,c,n?T:P);break;default:Mt(R,N,N,N,[""],P,0,c,P)}}l=u=E=0,y=k=1,b=R="",m=i;break;case 58:m=1+xe(R),E=p;default:if(y<1){if(w==123)--y;else if(w==125&&y++==0&&Li()==125)continue}switch(R+=Lr(w),w*y){case 38:k=u>0?1:(R+="\f",-1);break;case 44:c[l++]=(xe(R)-1)*k,k=1;break;case 64:Ie()===45&&(R+=hr(me())),g=Ie(),u=m=xe(b=R+=Hi(At())),w++;break;case 45:p===45&&xe(R)==2&&(y=0)}}return a}function hn(e,t,r,n,s,a,i,c,d,l,u,m){for(var g=s-1,E=s===0?a:[""],p=Ss(E),y=0,h=0,k=0;y<n;++y)for(var w=0,b=et(e,g+1,g=ws(h=i[y])),T=e;w<p;++w)(T=vs(h>0?E[w]+" "+b:_(b,/&\f/g,E[w])))&&(d[k++]=T);return nr(e,t,r,s===0?tr:c,d,l,u,m)}function Yi(e,t,r,n){return nr(e,t,r,ys,Lr($i()),et(e,2,-2),0,n)}function pn(e,t,r,n,s){return nr(e,t,r,$r,et(e,0,n),et(e,n+1,-1),n,s)}function Es(e,t,r){switch(_i(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 4789:return pt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+pt+e+L+e+e;case 5936:switch(Y(e,t+11)){case 114:return F+e+L+_(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+L+_(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+L+_(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+L+e+e;case 6165:return F+e+L+"flex-"+e+e;case 5187:return F+e+_(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+L+"flex-$1$2")+e;case 5443:return F+e+L+"flex-item-"+_(e,/flex-|-self/g,"")+(Ee(e,/flex-|baseline/)?"":L+"grid-row-"+_(e,/flex-|-self/g,""))+e;case 4675:return F+e+L+"flex-line-pack"+_(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+L+_(e,"shrink","negative")+e;case 5292:return F+e+L+_(e,"basis","preferred-size")+e;case 6060:return F+"box-"+_(e,"-grow","")+F+e+L+_(e,"grow","positive")+e;case 4554:return F+_(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return _(_(_(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return _(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return _(_(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+L+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4200:if(!Ee(e,/flex-|baseline/))return L+"grid-column-align"+et(e,t)+e;break;case 2592:case 3360:return L+_(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,s){return t=s,Ee(n.props,/grid-\w+-end/)})?~Dt(e+(r=r[t].value),"span",0)?e:L+_(e,"-start","")+e+L+"grid-row-span:"+(~Dt(r,"span",0)?Ee(r,/\d+/):+Ee(r,/\d+/)-+Ee(e,/\d+/))+";":L+_(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return Ee(n.props,/grid-\w+-start/)})?e:L+_(_(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return _(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xe(e)-1-t>6)switch(Y(e,t+1)){case 109:if(Y(e,t+4)!==45)break;case 102:return _(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+pt+(Y(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Dt(e,"stretch",0)?Es(_(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return _(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,a,i,c,d,l){return L+s+":"+a+l+(i?L+s+"-span:"+(c?d:+d-+a)+l:"")+e});case 4949:if(Y(e,t+6)===121)return _(e,":",":"+F)+e;break;case 6444:switch(Y(e,Y(e,14)===45?18:11)){case 120:return _(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(Y(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+L+"$2box$3")+e;case 100:return _(e,":",":"+L)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return _(e,"scroll-","scroll-snap-")+e}return e}function Ut(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Vi(e,t,r,n){switch(e.type){case Mi:if(e.children.length)break;case Ai:case $r:return e.return=e.return||e.value;case ys:return"";case xs:return e.return=e.value+"{"+Ut(e.children,n)+"}";case tr:if(!xe(e.value=e.props.join(",")))return""}return xe(r=Ut(e.children,n))?e.return=e.value+"{"+r+"}":""}function Gi(e){var t=Ss(e);return function(r,n,s,a){for(var i="",c=0;c<t;c++)i+=e[c](r,n,s,a)||"";return i}}function Xi(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ji(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case $r:e.return=Es(e.value,e.length,r);return;case xs:return Ut([Re(e,{value:_(e.value,"@","@"+F)})],n);case tr:if(e.length)return Fi(r=e.props,function(s){switch(Ee(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xe(Re(e,{props:[_(s,/:(read-\w+)/,":"+pt+"$1")]})),Xe(Re(e,{props:[s]})),kr(e,{props:fn(r,n)});break;case"::placeholder":Xe(Re(e,{props:[_(s,/:(plac\w+)/,":"+F+"input-$1")]})),Xe(Re(e,{props:[_(s,/:(plac\w+)/,":"+pt+"$1")]})),Xe(Re(e,{props:[_(s,/:(plac\w+)/,L+"input-$1")]})),Xe(Re(e,{props:[s]})),kr(e,{props:fn(r,n)});break}return""})}}var Qi={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},re={},rt=typeof process<"u"&&re!==void 0&&(re.REACT_APP_SC_ATTR||re.SC_ATTR)||"data-styled",ks="active",Ts="data-styled-version",ar="6.1.18",Ir=`/*!sc*/
`,Bt=typeof window<"u"&&typeof document<"u",Ki=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&re!==void 0&&re.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&re.REACT_APP_SC_DISABLE_SPEEDY!==""?re.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&re.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&re!==void 0&&re.SC_DISABLE_SPEEDY!==void 0&&re.SC_DISABLE_SPEEDY!==""&&re.SC_DISABLE_SPEEDY!=="false"&&re.SC_DISABLE_SPEEDY),or=Object.freeze([]),nt=Object.freeze({});function Zi(e,t,r){return r===void 0&&(r=nt),e.theme!==r.theme&&e.theme||t||r.theme}var Cs=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ec=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tc=/(^-|-$)/g;function mn(e){return e.replace(ec,"-").replace(tc,"")}var rc=/(a)(d)/gi,kt=52,gn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pr(e){var t,r="";for(t=Math.abs(e);t>kt;t=t/kt|0)r=gn(t%kt)+r;return(gn(t%kt)+r).replace(rc,"$1-$2")}var pr,Ps=5381,Qe=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Os=function(e){return Qe(Ps,e)};function Rs(e){return Pr(Os(e)>>>0)}function nc(e){return e.displayName||e.name||"Component"}function mr(e){return typeof e=="string"&&!0}var Ns=typeof Symbol=="function"&&Symbol.for,Ds=Ns?Symbol.for("react.memo"):60115,sc=Ns?Symbol.for("react.forward_ref"):60112,ac={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},oc={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},As={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ic=((pr={})[sc]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pr[Ds]=As,pr);function bn(e){return("type"in(t=e)&&t.type.$$typeof)===Ds?As:"$$typeof"in e?ic[e.$$typeof]:ac;var t}var cc=Object.defineProperty,lc=Object.getOwnPropertyNames,yn=Object.getOwnPropertySymbols,dc=Object.getOwnPropertyDescriptor,uc=Object.getPrototypeOf,xn=Object.prototype;function Ms(e,t,r){if(typeof t!="string"){if(xn){var n=uc(t);n&&n!==xn&&Ms(e,n,r)}var s=lc(t);yn&&(s=s.concat(yn(t)));for(var a=bn(e),i=bn(t),c=0;c<s.length;++c){var d=s[c];if(!(d in oc||r&&r[d]||i&&d in i||a&&d in a)){var l=dc(t,d);try{cc(e,d,l)}catch{}}}}return e}function st(e){return typeof e=="function"}function zr(e){return typeof e=="object"&&"styledComponentId"in e}function $e(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Or(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function bt(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Rr(e,t,r){if(r===void 0&&(r=!1),!r&&!bt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Rr(e[n],t[n]);else if(bt(t))for(var n in t)e[n]=Rr(e[n],t[n]);return e}function Ur(e,t){Object.defineProperty(e,"toString",{value:t})}function vt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var fc=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,a=s;t>=a;)if((a<<=1)<0)throw vt(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=s;i<a;i++)this.groupSizes[i]=0}for(var c=this.indexOfGroup(t+1),d=(i=0,r.length);i<d;i++)this.tag.insertRule(c,r[i])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),s=n+r;this.groupSizes[t]=0;for(var a=n;a<s;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],s=this.indexOfGroup(t),a=s+n,i=s;i<a;i++)r+="".concat(this.tag.getRule(i)).concat(Ir);return r},e}(),_t=new Map,Wt=new Map,Ft=1,Tt=function(e){if(_t.has(e))return _t.get(e);for(;Wt.has(Ft);)Ft++;var t=Ft++;return _t.set(e,t),Wt.set(t,e),t},hc=function(e,t){Ft=t+1,_t.set(e,t),Wt.set(t,e)},pc="style[".concat(rt,"][").concat(Ts,'="').concat(ar,'"]'),mc=new RegExp("^".concat(rt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gc=function(e,t,r){for(var n,s=r.split(","),a=0,i=s.length;a<i;a++)(n=s[a])&&e.registerName(t,n)},bc=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Ir),s=[],a=0,i=n.length;a<i;a++){var c=n[a].trim();if(c){var d=c.match(mc);if(d){var l=0|parseInt(d[1],10),u=d[2];l!==0&&(hc(u,l),gc(e,u,d[3]),e.getTag().insertRules(l,s)),s.length=0}else s.push(c)}}},wn=function(e){for(var t=document.querySelectorAll(pc),r=0,n=t.length;r<n;r++){var s=t[r];s&&s.getAttribute(rt)!==ks&&(bc(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function yc(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _s=function(e){var t=document.head,r=e||t,n=document.createElement("style"),s=function(c){var d=Array.from(c.querySelectorAll("style[".concat(rt,"]")));return d[d.length-1]}(r),a=s!==void 0?s.nextSibling:null;n.setAttribute(rt,ks),n.setAttribute(Ts,ar);var i=yc();return i&&n.setAttribute("nonce",i),r.insertBefore(n,a),n},xc=function(){function e(t){this.element=_s(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,a=n.length;s<a;s++){var i=n[s];if(i.ownerNode===r)return i}throw vt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),wc=function(){function e(t){this.element=_s(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),vc=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),vn=Bt,Sc={isServer:!Bt,useCSSOMInjection:!Ki},Fs=function(){function e(t,r,n){t===void 0&&(t=nt),r===void 0&&(r={});var s=this;this.options=Z(Z({},Sc),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Bt&&vn&&(vn=!1,wn(this)),Ur(this,function(){return function(a){for(var i=a.getTag(),c=i.length,d="",l=function(m){var g=function(k){return Wt.get(k)}(m);if(g===void 0)return"continue";var E=a.names.get(g),p=i.getGroup(m);if(E===void 0||!E.size||p.length===0)return"continue";var y="".concat(rt,".g").concat(m,'[id="').concat(g,'"]'),h="";E!==void 0&&E.forEach(function(k){k.length>0&&(h+="".concat(k,","))}),d+="".concat(p).concat(y,'{content:"').concat(h,'"}').concat(Ir)},u=0;u<c;u++)l(u);return d}(s)})}return e.registerId=function(t){return Tt(t)},e.prototype.rehydrate=function(){!this.server&&Bt&&wn(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Z(Z({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new vc(s):n?new xc(s):new wc(s)}(this.options),new fc(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Tt(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Tt(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Tt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),jc=/&/g,Ec=/^\s*\/\/.*$/gm;function $s(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=$s(r.children,t)),r})}function kc(e){var t,r,n,s=nt,a=s.options,i=a===void 0?nt:a,c=s.plugins,d=c===void 0?or:c,l=function(g,E,p){return p.startsWith(r)&&p.endsWith(r)&&p.replaceAll(r,"").length>0?".".concat(t):g},u=d.slice();u.push(function(g){g.type===tr&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(jc,r).replace(n,l))}),i.prefix&&u.push(Ji),u.push(Vi);var m=function(g,E,p,y){E===void 0&&(E=""),p===void 0&&(p=""),y===void 0&&(y="&"),t=y,r=E,n=new RegExp("\\".concat(r,"\\b"),"g");var h=g.replace(Ec,""),k=qi(p||E?"".concat(p," ").concat(E," { ").concat(h," }"):h);i.namespace&&(k=$s(k,i.namespace));var w=[];return Ut(k,Gi(u.concat(Xi(function(b){return w.push(b)})))),w};return m.hash=d.length?d.reduce(function(g,E){return E.name||vt(15),Qe(g,E.name)},Ps).toString():"",m}var Tc=new Fs,Nr=kc(),Ls=ne.createContext({shouldForwardProp:void 0,styleSheet:Tc,stylis:Nr});Ls.Consumer;ne.createContext(void 0);function Sn(){return v.useContext(Ls)}var Is=function(){function e(t,r){var n=this;this.inject=function(s,a){a===void 0&&(a=Nr);var i=n.name+a.hash;s.hasNameForId(n.id,i)||s.insertRules(n.id,i,a(n.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Ur(this,function(){throw vt(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Nr),this.name+t.hash},e}(),Cc=function(e){return e>="A"&&e<="Z"};function jn(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Cc(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var zs=function(e){return e==null||e===!1||e===""},Us=function(e){var t,r,n=[];for(var s in e){var a=e[s];e.hasOwnProperty(s)&&!zs(a)&&(Array.isArray(a)&&a.isCss||st(a)?n.push("".concat(jn(s),":"),a,";"):bt(a)?n.push.apply(n,gt(gt(["".concat(s," {")],Us(a),!1),["}"],!1)):n.push("".concat(jn(s),": ").concat((t=s,(r=a)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Qi||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function ze(e,t,r,n){if(zs(e))return[];if(zr(e))return[".".concat(e.styledComponentId)];if(st(e)){if(!st(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var s=e(t);return ze(s,t,r,n)}var a;return e instanceof Is?r?(e.inject(r,n),[e.getName(n)]):[e]:bt(e)?Us(e):Array.isArray(e)?Array.prototype.concat.apply(or,e.map(function(i){return ze(i,t,r,n)})):[e.toString()]}function Pc(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(st(r)&&!zr(r))return!1}return!0}var Oc=Os(ar),Rc=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Pc(t),this.componentId=r,this.baseHash=Qe(Oc,r),this.baseStyle=n,Fs.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=$e(s,this.staticRulesId);else{var a=Or(ze(this.rules,t,r,n)),i=Pr(Qe(this.baseHash,a)>>>0);if(!r.hasNameForId(this.componentId,i)){var c=n(a,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,c)}s=$e(s,i),this.staticRulesId=i}else{for(var d=Qe(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var m=this.rules[u];if(typeof m=="string")l+=m;else if(m){var g=Or(ze(m,t,r,n));d=Qe(d,g+u),l+=g}}if(l){var E=Pr(d>>>0);r.hasNameForId(this.componentId,E)||r.insertRules(this.componentId,E,n(l,".".concat(E),void 0,this.componentId)),s=$e(s,E)}}return s},e}(),Bs=ne.createContext(void 0);Bs.Consumer;var gr={};function Nc(e,t,r){var n=zr(e),s=e,a=!mr(e),i=t.attrs,c=i===void 0?or:i,d=t.componentId,l=d===void 0?function(T,P){var N=typeof T!="string"?"sc":mn(T);gr[N]=(gr[N]||0)+1;var R="".concat(N,"-").concat(Rs(ar+N+gr[N]));return P?"".concat(P,"-").concat(R):R}(t.displayName,t.parentComponentId):d,u=t.displayName,m=u===void 0?function(T){return mr(T)?"styled.".concat(T):"Styled(".concat(nc(T),")")}(e):u,g=t.displayName&&t.componentId?"".concat(mn(t.displayName),"-").concat(t.componentId):t.componentId||l,E=n&&s.attrs?s.attrs.concat(c).filter(Boolean):c,p=t.shouldForwardProp;if(n&&s.shouldForwardProp){var y=s.shouldForwardProp;if(t.shouldForwardProp){var h=t.shouldForwardProp;p=function(T,P){return y(T,P)&&h(T,P)}}else p=y}var k=new Rc(r,g,n?s.componentStyle:void 0);function w(T,P){return function(N,R,V){var U=N.attrs,Ne=N.componentStyle,ce=N.defaultProps,K=N.foldedComponentIds,G=N.styledComponentId,Te=N.target,C=ne.useContext(Bs),B=Sn(),X=N.shouldForwardProp||B.shouldForwardProp,qe=Zi(R,C,ce)||nt,D=function(De,le,Ye){for(var de,je=Z(Z({},le),{className:void 0,theme:Ye}),oe=0;oe<De.length;oe+=1){var Ae=st(de=De[oe])?de(je):de;for(var be in Ae)je[be]=be==="className"?$e(je[be],Ae[be]):be==="style"?Z(Z({},je[be]),Ae[be]):Ae[be]}return le.className&&(je.className=$e(je.className,le.className)),je}(U,R,qe),J=D.as||Te,te={};for(var W in D)D[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&D.theme===qe||(W==="forwardedAs"?te.as=D.forwardedAs:X&&!X(W,J)||(te[W]=D[W]));var jt=function(De,le){var Ye=Sn(),de=De.generateAndInjectStyles(le,Ye.styleSheet,Ye.stylis);return de}(Ne,D),ct=$e(K,G);return jt&&(ct+=" "+jt),D.className&&(ct+=" "+D.className),te[mr(J)&&!Cs.has(J)?"class":"className"]=ct,V&&(te.ref=V),v.createElement(J,te)}(b,T,P)}w.displayName=m;var b=ne.forwardRef(w);return b.attrs=E,b.componentStyle=k,b.displayName=m,b.shouldForwardProp=p,b.foldedComponentIds=n?$e(s.foldedComponentIds,s.styledComponentId):"",b.styledComponentId=g,b.target=n?s.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(T){this._foldedDefaultProps=n?function(P){for(var N=[],R=1;R<arguments.length;R++)N[R-1]=arguments[R];for(var V=0,U=N;V<U.length;V++)Rr(P,U[V],!0);return P}({},s.defaultProps,T):T}}),Ur(b,function(){return".".concat(b.styledComponentId)}),a&&Ms(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function En(e,t){for(var r=[e[0]],n=0,s=t.length;n<s;n+=1)r.push(t[n],e[n+1]);return r}var kn=function(e){return Object.assign(e,{isCss:!0})};function Ws(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(st(e)||bt(e))return kn(ze(En(or,gt([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?ze(n):kn(ze(En(n,t)))}function Dr(e,t,r){if(r===void 0&&(r=nt),!t)throw vt(1,t);var n=function(s){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,r,Ws.apply(void 0,gt([s],a,!1)))};return n.attrs=function(s){return Dr(e,t,Z(Z({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return Dr(e,t,Z(Z({},r),s))},n}var Hs=function(e){return Dr(Nc,e)},j=Hs;Cs.forEach(function(e){j[e]=Hs(e)});function Br(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Or(Ws.apply(void 0,gt([e],t,!1))),s=Rs(n);return new Is(s,n)}const Dc=Br`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Ac=Br`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Mc=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
`,_c=j.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  text-align: center;
  max-width: 400px;
  width: 100%;
  animation: ${Ac} 0.6s ease-out;
`,Fc=j.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 4px solid rgba(40, 121, 255, 0.2);
  border-radius: 50%;
  border-top-color: #2879ff;
  animation: ${Dc} 1s linear infinite;
  margin-bottom: 1.5rem;
`,$c=j.p`
  color: #2d3436;
  font-size: 1.1rem;
  margin: 0;
  font-weight: 500;
  line-height: 1.6;
  
  strong {
    color: #2879ff;
    font-weight: 600;
  }
`;j.div`
  color: #dc3545;
  background: #ffe3e3;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1.5rem;
  font-weight: 500;
  border: 1px solid rgba(220, 53, 69, 0.2);
`;const Lc=()=>{const e=We(),t=Ar(),{setError:r,fetchTickets:n}=He();return v.useEffect(()=>{(async()=>{const a=new URLSearchParams(t.search),i=a.get("code"),c=a.get("error"),d=a.get("error_description");if(c){console.error("Auth error:",c,d),r(d||"Erro durante autenticação"),e("/login");return}if(!i){console.error("No code received"),r("Código de autorização não recebido"),e("/login");return}try{await yi(i),await n(!0,1),setTimeout(()=>{const l=localStorage.getItem("postLoginRedirect")||"/";e(l)},100)}catch(l){console.error("Error exchanging code for token:",l),r("Erro ao processar autenticação"),e("/login")}})()},[t]),o.jsx(Mc,{children:o.jsxs(_c,{children:[o.jsx(Fc,{}),o.jsxs($c,{children:[o.jsx("strong",{children:"Processando autenticação"}),o.jsx("br",{}),"Aguarde enquanto conectamos você ao sistema..."]})]})})},qs=6048e5,Ic=864e5,Ys=6e4,Vs=36e5,Tn=Symbol.for("constructDateFrom");function ke(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Tn in e?e[Tn](t):e instanceof Date?new e.constructor(t):new Date(t)}function ae(e,t){return ke(t||e,e)}let zc={};function ir(){return zc}function yt(e,t){var c,d,l,u;const r=ir(),n=(t==null?void 0:t.weekStartsOn)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??r.weekStartsOn??((u=(l=r.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??0,s=ae(e,t==null?void 0:t.in),a=s.getDay(),i=(a<n?7:0)+a-n;return s.setDate(s.getDate()-i),s.setHours(0,0,0,0),s}function Ht(e,t){return yt(e,{...t,weekStartsOn:1})}function Gs(e,t){const r=ae(e,t==null?void 0:t.in),n=r.getFullYear(),s=ke(r,0);s.setFullYear(n+1,0,4),s.setHours(0,0,0,0);const a=Ht(s),i=ke(r,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const c=Ht(i);return r.getTime()>=a.getTime()?n+1:r.getTime()>=c.getTime()?n:n-1}function Cn(e){const t=ae(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function Uc(e,...t){const r=ke.bind(null,t.find(n=>typeof n=="object"));return t.map(r)}function Pn(e,t){const r=ae(e,t==null?void 0:t.in);return r.setHours(0,0,0,0),r}function Bc(e,t,r){const[n,s]=Uc(r==null?void 0:r.in,e,t),a=Pn(n),i=Pn(s),c=+a-Cn(a),d=+i-Cn(i);return Math.round((c-d)/Ic)}function Wc(e,t){const r=Gs(e,t),n=ke(e,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),Ht(n)}function Hc(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Wr(e){return!(!Hc(e)&&typeof e!="number"||isNaN(+ae(e)))}function qc(e,t){const r=ae(e,t==null?void 0:t.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}const Yc={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Vc=(e,t,r)=>{let n;const s=Yc[e];return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};function Ke(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}const Gc={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Xc={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Jc={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Qc={date:Ke({formats:Gc,defaultWidth:"full"}),time:Ke({formats:Xc,defaultWidth:"full"}),dateTime:Ke({formats:Jc,defaultWidth:"full"})},Kc={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Zc=(e,t,r,n)=>Kc[e];function we(e){return(t,r)=>{const n=r!=null&&r.context?String(r.context):"standalone";let s;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,c=r!=null&&r.width?String(r.width):i;s=e.formattingValues[c]||e.formattingValues[i]}else{const i=e.defaultWidth,c=r!=null&&r.width?String(r.width):e.defaultWidth;s=e.values[c]||e.values[i]}const a=e.argumentCallback?e.argumentCallback(t):t;return s[a]}}const el={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},tl={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},rl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},nl={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},sl={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},al={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ol=(e,t)=>{const r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},il={ordinalNumber:ol,era:we({values:el,defaultWidth:"wide"}),quarter:we({values:tl,defaultWidth:"wide",argumentCallback:e=>e-1}),month:we({values:rl,defaultWidth:"wide"}),day:we({values:nl,defaultWidth:"wide"}),dayPeriod:we({values:sl,defaultWidth:"wide",formattingValues:al,defaultFormattingWidth:"wide"})};function ve(e){return(t,r={})=>{const n=r.width,s=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],a=t.match(s);if(!a)return null;const i=a[0],c=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(c)?ll(c,m=>m.test(i)):cl(c,m=>m.test(i));let l;l=e.valueCallback?e.valueCallback(d):d,l=r.valueCallback?r.valueCallback(l):l;const u=t.slice(i.length);return{value:l,rest:u}}}function cl(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function ll(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function Xs(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const s=n[0],a=t.match(e.parsePattern);if(!a)return null;let i=e.valueCallback?e.valueCallback(a[0]):a[0];i=r.valueCallback?r.valueCallback(i):i;const c=t.slice(s.length);return{value:i,rest:c}}}const dl=/^(\d+)(th|st|nd|rd)?/i,ul=/\d+/i,fl={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},hl={any:[/^b/i,/^(a|c)/i]},pl={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ml={any:[/1/i,/2/i,/3/i,/4/i]},gl={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},bl={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},yl={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},xl={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},wl={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},vl={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Sl={ordinalNumber:Xs({matchPattern:dl,parsePattern:ul,valueCallback:e=>parseInt(e,10)}),era:ve({matchPatterns:fl,defaultMatchWidth:"wide",parsePatterns:hl,defaultParseWidth:"any"}),quarter:ve({matchPatterns:pl,defaultMatchWidth:"wide",parsePatterns:ml,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ve({matchPatterns:gl,defaultMatchWidth:"wide",parsePatterns:bl,defaultParseWidth:"any"}),day:ve({matchPatterns:yl,defaultMatchWidth:"wide",parsePatterns:xl,defaultParseWidth:"any"}),dayPeriod:ve({matchPatterns:wl,defaultMatchWidth:"any",parsePatterns:vl,defaultParseWidth:"any"})},jl={code:"en-US",formatDistance:Vc,formatLong:Qc,formatRelative:Zc,localize:il,match:Sl,options:{weekStartsOn:0,firstWeekContainsDate:1}};function El(e,t){const r=ae(e,t==null?void 0:t.in);return Bc(r,qc(r))+1}function kl(e,t){const r=ae(e,t==null?void 0:t.in),n=+Ht(r)-+Wc(r);return Math.round(n/qs)+1}function Js(e,t){var u,m,g,E;const r=ae(e,t==null?void 0:t.in),n=r.getFullYear(),s=ir(),a=(t==null?void 0:t.firstWeekContainsDate)??((m=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:m.firstWeekContainsDate)??s.firstWeekContainsDate??((E=(g=s.locale)==null?void 0:g.options)==null?void 0:E.firstWeekContainsDate)??1,i=ke((t==null?void 0:t.in)||e,0);i.setFullYear(n+1,0,a),i.setHours(0,0,0,0);const c=yt(i,t),d=ke((t==null?void 0:t.in)||e,0);d.setFullYear(n,0,a),d.setHours(0,0,0,0);const l=yt(d,t);return+r>=+c?n+1:+r>=+l?n:n-1}function Tl(e,t){var c,d,l,u;const r=ir(),n=(t==null?void 0:t.firstWeekContainsDate)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??r.firstWeekContainsDate??((u=(l=r.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??1,s=Js(e,t),a=ke((t==null?void 0:t.in)||e,0);return a.setFullYear(s,0,n),a.setHours(0,0,0,0),yt(a,t)}function Cl(e,t){const r=ae(e,t==null?void 0:t.in),n=+yt(r,t)-+Tl(r,t);return Math.round(n/qs)+1}function $(e,t){const r=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return r+n}const Oe={y(e,t){const r=e.getFullYear(),n=r>0?r:1-r;return $(t==="yy"?n%100:n,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):$(r+1,2)},d(e,t){return $(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return $(e.getHours()%12||12,t.length)},H(e,t){return $(e.getHours(),t.length)},m(e,t){return $(e.getMinutes(),t.length)},s(e,t){return $(e.getSeconds(),t.length)},S(e,t){const r=t.length,n=e.getMilliseconds(),s=Math.trunc(n*Math.pow(10,r-3));return $(s,t.length)}},Je={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},On={G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const n=e.getFullYear(),s=n>0?n:1-n;return r.ordinalNumber(s,{unit:"year"})}return Oe.y(e,t)},Y:function(e,t,r,n){const s=Js(e,n),a=s>0?s:1-s;if(t==="YY"){const i=a%100;return $(i,2)}return t==="Yo"?r.ordinalNumber(a,{unit:"year"}):$(a,t.length)},R:function(e,t){const r=Gs(e);return $(r,t.length)},u:function(e,t){const r=e.getFullYear();return $(r,t.length)},Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return $(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return $(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return Oe.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return $(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){const s=Cl(e,n);return t==="wo"?r.ordinalNumber(s,{unit:"week"}):$(s,t.length)},I:function(e,t,r){const n=kl(e);return t==="Io"?r.ordinalNumber(n,{unit:"week"}):$(n,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):Oe.d(e,t)},D:function(e,t,r){const n=El(e);return t==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):$(n,t.length)},E:function(e,t,r){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){const s=e.getDay(),a=(s-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return $(a,2);case"eo":return r.ordinalNumber(a,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){const s=e.getDay(),a=(s-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return $(a,t.length);case"co":return r.ordinalNumber(a,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(e,t,r){const n=e.getDay(),s=n===0?7:n;switch(t){case"i":return String(s);case"ii":return $(s,t.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){const s=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,t,r){const n=e.getHours();let s;switch(n===12?s=Je.noon:n===0?s=Je.midnight:s=n/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,t,r){const n=e.getHours();let s;switch(n>=17?s=Je.evening:n>=12?s=Je.afternoon:n>=4?s=Je.morning:s=Je.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return Oe.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):Oe.H(e,t)},K:function(e,t,r){const n=e.getHours()%12;return t==="Ko"?r.ordinalNumber(n,{unit:"hour"}):$(n,t.length)},k:function(e,t,r){let n=e.getHours();return n===0&&(n=24),t==="ko"?r.ordinalNumber(n,{unit:"hour"}):$(n,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):Oe.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):Oe.s(e,t)},S:function(e,t){return Oe.S(e,t)},X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return Nn(n);case"XXXX":case"XX":return Me(n);case"XXXXX":case"XXX":default:return Me(n,":")}},x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"x":return Nn(n);case"xxxx":case"xx":return Me(n);case"xxxxx":case"xxx":default:return Me(n,":")}},O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Rn(n,":");case"OOOO":default:return"GMT"+Me(n,":")}},z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Rn(n,":");case"zzzz":default:return"GMT"+Me(n,":")}},t:function(e,t,r){const n=Math.trunc(+e/1e3);return $(n,t.length)},T:function(e,t,r){return $(+e,t.length)}};function Rn(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),s=Math.trunc(n/60),a=n%60;return a===0?r+String(s):r+String(s)+t+$(a,2)}function Nn(e,t){return e%60===0?(e>0?"-":"+")+$(Math.abs(e)/60,2):Me(e,t)}function Me(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),s=$(Math.trunc(n/60),2),a=$(n%60,2);return r+s+t+a}const Dn=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Qs=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Pl=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],n=r[1],s=r[2];if(!s)return Dn(e,t);let a;switch(n){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",Dn(n,t)).replace("{{time}}",Qs(s,t))},Ol={p:Qs,P:Pl},Rl=/^D+$/,Nl=/^Y+$/,Dl=["D","DD","YY","YYYY"];function Al(e){return Rl.test(e)}function Ml(e){return Nl.test(e)}function _l(e,t,r){const n=Fl(e,t,r);if(console.warn(n),Dl.includes(e))throw new RangeError(n)}function Fl(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const $l=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ll=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Il=/^'([^]*?)'?$/,zl=/''/g,Ul=/[a-zA-Z]/;function Ue(e,t,r){var u,m,g,E,p,y,h,k;const n=ir(),s=(r==null?void 0:r.locale)??n.locale??jl,a=(r==null?void 0:r.firstWeekContainsDate)??((m=(u=r==null?void 0:r.locale)==null?void 0:u.options)==null?void 0:m.firstWeekContainsDate)??n.firstWeekContainsDate??((E=(g=n.locale)==null?void 0:g.options)==null?void 0:E.firstWeekContainsDate)??1,i=(r==null?void 0:r.weekStartsOn)??((y=(p=r==null?void 0:r.locale)==null?void 0:p.options)==null?void 0:y.weekStartsOn)??n.weekStartsOn??((k=(h=n.locale)==null?void 0:h.options)==null?void 0:k.weekStartsOn)??0,c=ae(e,r==null?void 0:r.in);if(!Wr(c))throw new RangeError("Invalid time value");let d=t.match(Ll).map(w=>{const b=w[0];if(b==="p"||b==="P"){const T=Ol[b];return T(w,s.formatLong)}return w}).join("").match($l).map(w=>{if(w==="''")return{isToken:!1,value:"'"};const b=w[0];if(b==="'")return{isToken:!1,value:Bl(w)};if(On[b])return{isToken:!0,value:w};if(b.match(Ul))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return{isToken:!1,value:w}});s.localize.preprocessor&&(d=s.localize.preprocessor(c,d));const l={firstWeekContainsDate:a,weekStartsOn:i,locale:s};return d.map(w=>{if(!w.isToken)return w.value;const b=w.value;(!(r!=null&&r.useAdditionalWeekYearTokens)&&Ml(b)||!(r!=null&&r.useAdditionalDayOfYearTokens)&&Al(b))&&_l(b,t,String(e));const T=On[b[0]];return T(c,b,s.localize,l)}).join("")}function Bl(e){const t=e.match(Il);return t?t[1].replace(zl,"'"):e}function Ks(e,t){const r=()=>ke(t==null?void 0:t.in,NaN),s=Yl(e);let a;if(s.date){const l=Vl(s.date,2);a=Gl(l.restDateString,l.year)}if(!a||isNaN(+a))return r();const i=+a;let c=0,d;if(s.time&&(c=Xl(s.time),isNaN(c)))return r();if(s.timezone){if(d=Jl(s.timezone),isNaN(d))return r()}else{const l=new Date(i+c),u=ae(0,t==null?void 0:t.in);return u.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),u.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),u}return ae(i+c+d,t==null?void 0:t.in)}const Ct={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Wl=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Hl=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,ql=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Yl(e){const t={},r=e.split(Ct.dateTimeDelimiter);let n;if(r.length>2)return t;if(/:/.test(r[0])?n=r[0]:(t.date=r[0],n=r[1],Ct.timeZoneDelimiter.test(t.date)&&(t.date=e.split(Ct.timeZoneDelimiter)[0],n=e.substr(t.date.length,e.length))),n){const s=Ct.timezone.exec(n);s?(t.time=n.replace(s[1],""),t.timezone=s[1]):t.time=n}return t}function Vl(e,t){const r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(r);if(!n)return{year:NaN,restDateString:""};const s=n[1]?parseInt(n[1]):null,a=n[2]?parseInt(n[2]):null;return{year:a===null?s:a*100,restDateString:e.slice((n[1]||n[2]).length)}}function Gl(e,t){if(t===null)return new Date(NaN);const r=e.match(Wl);if(!r)return new Date(NaN);const n=!!r[4],s=ft(r[1]),a=ft(r[2])-1,i=ft(r[3]),c=ft(r[4]),d=ft(r[5])-1;if(n)return td(t,c,d)?Ql(t,c,d):new Date(NaN);{const l=new Date(0);return!Zl(t,a,i)||!ed(t,s)?new Date(NaN):(l.setUTCFullYear(t,a,Math.max(s,i)),l)}}function ft(e){return e?parseInt(e):1}function Xl(e){const t=e.match(Hl);if(!t)return NaN;const r=br(t[1]),n=br(t[2]),s=br(t[3]);return rd(r,n,s)?r*Vs+n*Ys+s*1e3:NaN}function br(e){return e&&parseFloat(e.replace(",","."))||0}function Jl(e){if(e==="Z")return 0;const t=e.match(ql);if(!t)return 0;const r=t[1]==="+"?-1:1,n=parseInt(t[2]),s=t[3]&&parseInt(t[3])||0;return nd(n,s)?r*(n*Vs+s*Ys):NaN}function Ql(e,t,r){const n=new Date(0);n.setUTCFullYear(e,0,4);const s=n.getUTCDay()||7,a=(t-1)*7+r+1-s;return n.setUTCDate(n.getUTCDate()+a),n}const Kl=[31,null,31,30,31,30,31,31,30,31,30,31];function Zs(e){return e%400===0||e%4===0&&e%100!==0}function Zl(e,t,r){return t>=0&&t<=11&&r>=1&&r<=(Kl[t]||(Zs(e)?29:28))}function ed(e,t){return t>=1&&t<=(Zs(e)?366:365)}function td(e,t,r){return t>=1&&t<=53&&r>=0&&r<=6}function rd(e,t,r){return e===24?t===0&&r===0:r>=0&&r<60&&t>=0&&t<60&&e>=0&&e<25}function nd(e,t){return t>=0&&t<=59}const sd={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 mês",other:"cerca de {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},ad=(e,t,r)=>{let n;const s=sd[e];return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"em "+n:"há "+n:n},od={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},id={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},cd={full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ld={date:Ke({formats:od,defaultWidth:"full"}),time:Ke({formats:id,defaultWidth:"full"}),dateTime:Ke({formats:cd,defaultWidth:"full"})},dd={lastWeek:e=>{const t=e.getDay();return"'"+(t===0||t===6?"último":"última")+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"},ud=(e,t,r,n)=>{const s=dd[e];return typeof s=="function"?s(t):s},fd={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},hd={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},pd={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},md={narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","terça","quarta","quinta","sexta","sábado"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},gd={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"}},bd={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},yd=(e,t)=>{const r=Number(e);return(t==null?void 0:t.unit)==="week"?r+"ª":r+"º"},xd={ordinalNumber:yd,era:we({values:fd,defaultWidth:"wide"}),quarter:we({values:hd,defaultWidth:"wide",argumentCallback:e=>e-1}),month:we({values:pd,defaultWidth:"wide"}),day:we({values:md,defaultWidth:"wide"}),dayPeriod:we({values:gd,defaultWidth:"wide",formattingValues:bd,defaultFormattingWidth:"wide"})},wd=/^(\d+)[ºªo]?/i,vd=/\d+/i,Sd={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},jd={any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},Ed={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},kd={any:[/1/i,/2/i,/3/i,/4/i]},Td={narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},Cd={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},Pd={narrow:/^(dom|[23456]ª?|s[aá]b)/i,short:/^(dom|[23456]ª?|s[aá]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,wide:/^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i},Od={short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[aá]b/i]},Rd={narrow:/^(a|p|mn|md|(da) (manhã|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i},Nd={any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manhã/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},Dd={ordinalNumber:Xs({matchPattern:wd,parsePattern:vd,valueCallback:e=>parseInt(e,10)}),era:ve({matchPatterns:Sd,defaultMatchWidth:"wide",parsePatterns:jd,defaultParseWidth:"any"}),quarter:ve({matchPatterns:Ed,defaultMatchWidth:"wide",parsePatterns:kd,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ve({matchPatterns:Td,defaultMatchWidth:"wide",parsePatterns:Cd,defaultParseWidth:"any"}),day:ve({matchPatterns:Pd,defaultMatchWidth:"wide",parsePatterns:Od,defaultParseWidth:"any"}),dayPeriod:ve({matchPatterns:Rd,defaultMatchWidth:"any",parsePatterns:Nd,defaultParseWidth:"any"})},St={code:"pt-BR",formatDistance:ad,formatLong:ld,formatRelative:ud,localize:xd,match:Dd,options:{weekStartsOn:0,firstWeekContainsDate:1}};var ea={exports:{}},Ad="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Md=Ad,_d=Md;function ta(){}function ra(){}ra.resetWarningCache=ta;var Fd=function(){function e(n,s,a,i,c,d){if(d!==_d){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ra,resetWarningCache:ta};return r.PropTypes=r,r};ea.exports=Fd();var $d=ea.exports;const O=Na($d),Ld=j.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #495057;
    margin-bottom: 0.25rem;
  }

  select {
    padding: 0.75rem;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    background: #ffffff;
    color: #212529;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    min-width: 200px;

    &:focus {
      border-color: #059669;
      box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.1);
    }

    &:hover {
      border-color: #059669;
    }
  }

  option {
    padding: 0.5rem;
  }
`,Hr=({selectedStatus:e,onStatusChange:t,options:r,loading:n})=>o.jsxs(Ld,{children:[o.jsx("label",{htmlFor:"status-filter",children:"Status:"}),o.jsxs("select",{id:"status-filter",value:e||"",onChange:s=>t(s.target.value),disabled:n,children:[o.jsx("option",{value:"",children:"Todos os Status"}),r&&r.map(s=>o.jsx("option",{value:s.value,children:s.label},s.value))]})]});Hr.propTypes={selectedStatus:O.string,onStatusChange:O.func.isRequired,options:O.arrayOf(O.shape({value:O.string.isRequired,label:O.string.isRequired})),loading:O.bool};const Id=Br`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,zd=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
`,Ud=j.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(40, 121, 255, 0.2);
  border-radius: 50%;
  border-top-color: #2879ff;
  animation: ${Id} 1s linear infinite;
`,Bd=j.p`
  color: #2d3436;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
  line-height: 1.5;
`,Ze=()=>o.jsxs(zd,{children:[o.jsx(Ud,{}),o.jsxs(Bd,{children:["Carregando...",o.jsx("br",{}),o.jsx("small",{children:"Aguarde um momento"})]})]}),An={getByTicketId:async e=>{console.log("Fetching messages for ticket:",e);const t=await I.get(`/api/private/message/ticket/${e}`);return console.log("Messages response:",t.data),t.data},create:async e=>{console.log("Creating message:",e);const t=await I.post("/api/private/message",e);return console.log("Create message response:",t.data),t.data}},na=({ticketId:e})=>{const[t,r]=v.useState([]),[n,s]=v.useState(!1),[a,i]=v.useState(null),[c,d]=v.useState(""),[l,u]=v.useState([]),{users:m}=He();v.useEffect(()=>{(async()=>{if(e)try{s(!0);const k=await An.getByTicketId(e);r(k),i(null)}catch(k){console.error("Erro ao carregar mensagens:",k),i("Falha ao carregar as mensagens")}finally{s(!1)}})()},[e]);const g=h=>{u(Array.from(h.target.files))},E=h=>new Promise((k,w)=>{const b=new FileReader;b.readAsDataURL(h),b.onload=()=>k(b.result.split(",")[1]),b.onerror=T=>w(T)}),p=async h=>{if(h.preventDefault(),!(!c.trim()&&l.length===0))try{const k=await Promise.all(l.map(T=>E(T))),w={content:c.trim(),ticketId:e,isSupportResponse:!1,attachments:k},b=await An.create(w);r(T=>[b,...T]),d(""),u([]),i(null)}catch(k){console.error("Erro ao enviar mensagem:",k),i("Falha ao enviar a mensagem")}};if(n)return o.jsxs("div",{className:"messages-loading",children:[o.jsx("div",{className:"loading-spinner",children:o.jsx("i",{className:"fas fa-spinner fa-spin"})}),o.jsx("p",{children:"Carregando mensagens..."})]});if(a)return o.jsxs("div",{className:"messages-error",children:[o.jsx("i",{className:"fas fa-exclamation-circle"}),o.jsx("p",{children:a}),o.jsx("button",{className:"retry-button",onClick:()=>window.location.reload(),children:"Tentar novamente"})]});const y=h=>{const k=new Date(h),w=new Date,b=new Date(w);return b.setDate(b.getDate()-1),k.toDateString()===w.toDateString()?`Hoje às ${Ue(k,"HH:mm")}`:k.toDateString()===b.toDateString()?`Ontem às ${Ue(k,"HH:mm")}`:Ue(k,"d 'de' MMMM 'às' HH:mm",{locale:St})};return o.jsxs("div",{className:"ticket-messages",children:[o.jsx("h3",{children:"Mensagens"}),o.jsxs("form",{className:"message-form",onSubmit:p,children:[o.jsx("textarea",{value:c,onChange:h=>d(h.target.value),placeholder:"Digite sua mensagem aqui...",rows:3}),o.jsxs("div",{className:"form-actions",children:[o.jsxs("div",{className:"file-input-wrapper",children:[o.jsx("input",{type:"file",id:"attachments",multiple:!0,onChange:g,className:"file-input"}),o.jsxs("label",{htmlFor:"attachments",className:"file-label",children:[o.jsx("i",{className:"fas fa-paperclip"}),l.length>0?`${l.length} arquivo(s) selecionado(s)`:"Anexar arquivos"]})]}),o.jsxs("button",{type:"submit",disabled:!c.trim()&&l.length===0,className:"send-button",children:[o.jsx("i",{className:"fas fa-paper-plane"}),"Enviar"]})]})]}),o.jsx("div",{className:"messages-list",children:t.length===0?o.jsxs("div",{className:"empty-messages",children:[o.jsx("i",{className:"fas fa-comments"}),o.jsx("p",{children:"Nenhuma mensagem ainda"}),o.jsx("span",{children:"Inicie a conversa enviando uma mensagem"})]}):t.map(h=>{var k;return o.jsxs("div",{className:`message ${h.supportResponse?"support-message":"user-message"} ${h.read?"":"unread"}`,children:[o.jsxs("div",{className:"message-header",children:[o.jsxs("div",{className:"message-author-info",children:[o.jsx("i",{className:`fas ${h.supportResponse?"fa-headset":"fa-user"}`}),o.jsx("span",{className:"message-author",children:((k=h.createdBy)==null?void 0:k.name)||"Usuário Desconhecido"}),h.supportResponse&&o.jsx("span",{className:"support-badge",children:"Equipe de Suporte"})]}),o.jsx("span",{className:"message-time",children:y(h.createdDate)})]}),o.jsx("div",{className:"message-content",children:h.content}),h.attachments&&h.attachments.length>0&&o.jsx("div",{className:"message-attachments",children:h.attachments.map((w,b)=>o.jsxs("a",{href:w.url,target:"_blank",rel:"noopener noreferrer",className:"attachment-link",children:[o.jsx("i",{className:"fas fa-file"}),w.name]},b))})]},h.id)})})]})},sa=({ticket:e})=>{if(!e)return o.jsx("div",{className:"ticket-details-panel empty-state",children:"Selecione um ticket para ver os detalhes"});const t=i=>({OPEN:"open",IN_PROGRESS:"in_progress",RESOLVED:"resolved",CLOSED:"closed"})[i]||"open",r=i=>({HIGH:"high",MEDIUM:"medium",LOW:"low"})[i]||"medium",n=i=>{try{const c=new Date(i);return Wr(c)?Ue(c,"dd 'de' MMMM 'de' yyyy",{locale:St}):"Data inválida"}catch(c){return console.error("Erro ao formatar data:",c),"Data inválida"}},s=i=>({OPEN:"Aberto",IN_PROGRESS:"Em Andamento",RESOLVED:"Resolvido",CLOSED:"Fechado"})[i]||"Aberto",a=i=>({HIGH:"Alta",MEDIUM:"Média",LOW:"Baixa"})[i]||"Média";return o.jsxs("div",{className:"ticket-details-panel",children:[o.jsxs("div",{className:"ticket-title-section",children:[o.jsx("h3",{children:"Assunto"}),o.jsx("p",{children:e.subjectDescription||e.subject||"Sem título"})]}),o.jsx("div",{className:"ticket-header",children:o.jsxs("div",{className:"header-info",children:[o.jsxs("div",{className:"header-left",children:[o.jsxs("div",{className:"creation-info",children:[o.jsx("span",{className:"label",children:"Data de criação:"}),o.jsx("span",{className:"value",children:n(e.creationDate||e.createdAt)})]}),o.jsxs("div",{className:"responsible-info",children:[o.jsx("span",{className:"label",children:"Responsável:"}),o.jsx("span",{className:"value",children:e.responsibleUser||"Não atribuído"})]})]}),o.jsxs("div",{className:"header-right",children:[o.jsxs("div",{className:"status-info",children:[o.jsx("span",{className:"label",children:"Status:"}),o.jsx("span",{className:`status-badge ${t(e.status)}`,children:s(e.status)})]}),o.jsxs("div",{className:"priority-info",children:[o.jsx("span",{className:"label",children:"Prioridade:"}),o.jsx("span",{className:`priority-badge ${r(e.priority)}`,children:a(e.priority)})]})]})]})}),o.jsxs("div",{className:"ticket-description-section",children:[o.jsx("h3",{children:"Descrição"}),o.jsx("div",{className:"description-box",children:e.detailedDescription||e.description||"Sem descrição disponível"})]}),o.jsx("div",{className:"ticket-messages-section",children:o.jsx(na,{ticketId:e.id})})]})};sa.propTypes={ticket:O.shape({id:O.string,subjectDescription:O.string,subject:O.string,detailedDescription:O.string,description:O.string,status:O.string,priority:O.string,creationDate:O.string,createdAt:O.string,responsibleUser:O.string})};var aa={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Mn=ne.createContext&&ne.createContext(aa),Wd=["attr","size","title"];function Hd(e,t){if(e==null)return{};var r=qd(e,t),n,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function qd(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function qt(){return qt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},qt.apply(this,arguments)}function _n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,n)}return r}function Yt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_n(Object(r),!0).forEach(function(n){Yd(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_n(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Yd(e,t,r){return t=Vd(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Vd(e){var t=Gd(e,"string");return typeof t=="symbol"?t:t+""}function Gd(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function oa(e){return e&&e.map((t,r)=>ne.createElement(t.tag,Yt({key:r},t.attr),oa(t.child)))}function Se(e){return t=>ne.createElement(Xd,qt({attr:Yt({},e.attr)},t),oa(e.child))}function Xd(e){var t=r=>{var{attr:n,size:s,title:a}=e,i=Hd(e,Wd),c=s||r.size||"1em",d;return r.className&&(d=r.className),e.className&&(d=(d?d+" ":"")+e.className),ne.createElement("svg",qt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,i,{className:d,style:Yt(Yt({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&ne.createElement("title",null,a),e.children)};return Mn!==void 0?ne.createElement(Mn.Consumer,null,r=>t(r)):t(aa)}function Jd(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(e)}function ia(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function qr(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function Qd(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function Kd(e){return Se({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(e)}function ca(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"},child:[]}]})(e)}function Vt(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function Zd(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(e)}function eu(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"},child:[]}]})(e)}function tu(e){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}const ru=j.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`,nu=j.div`
  border-radius: 12px;
  padding: 1.5rem;
  background: white;
`,su=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #1a1a1a;
    font-weight: 600;
  }
`,au=j.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f8f9fa;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  label {
    font-size: 0.9rem;
    color: #666;
  }
  select {
    padding: 0.3rem 0.6rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
    font-size: 0.9rem;
  }
`,ou=j.span`
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
`,iu=j.div`
  margin: 1rem 0;
`,cu=j.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`,lu=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background: ${({$selected:e})=>e?"#f0f5ff":"white"};
  border: 1px solid ${({$selected:e})=>e?"#1890ff":"#eee"};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: translateX(4px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
`,du=j.div`
  flex: 1;
`,uu=j.div`
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`,fu=j.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  svg {
    color: #999;
  }
`,hu=j.div`
  display: flex;
  gap: 0.8rem;
  margin-left: 1rem;
`,Fn=j.span`
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  &.priority-badge {
    background: ${({priority:e})=>e==="high"?"#ffe3e3":e==="medium"?"#fff4de":"#d8f5e1"};
    color: ${({priority:e})=>e==="high"?"#d14343":e==="medium"?"#d46b08":"#3a843f"};
  }
  &.status-badge {
    background: ${({status:e})=>e==="open"?"#e6f4ff":e==="pending"?"#fff7e6":"#e6ffe6"};
    color: ${({status:e})=>e==="open"?"#1890ff":e==="pending"?"#d48806":"#52c41a"};
  }
`,pu=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  button {
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover:not(:disabled) {
      background: #1890ff;
      color: white;
      border-color: #1890ff;
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  span {
    font-size: 0.9rem;
    color: #666;
  }
`,mu=j.div`
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  position: sticky;
  top: 1rem;
  height: fit-content;
  @media (max-width: 1024px) {
    position: static;
    margin-top: 2rem;
  }
`,gu=j.div`
  padding: 1rem;
  background: #ffe3e3;
  border-radius: 8px;
  color: #d14343;
  margin: 1rem 0;
  text-align: center;
  button {
    margin-top: 0.5rem;
    background: #d14343;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
  }
`,bu=j.div`
  text-align: center;
  padding: 2rem;
  color: #1890ff;
  p {
    margin-top: 1rem;
    font-size: 0.9rem;
  }
`,yu=()=>{const e=We(),{tickets:t,loading:r,error:n,totalElements:s,selectedStatus:a,pageSize:i,setPageSize:c,currentPage:d,totalPages:l,fetchTickets:u,handleStatusChange:m,handlePageChange:g,handleSelectTicket:E,selectedTicket:p,ticketDetails:y,detailsLoading:h,detailsError:k}=He();v.useEffect(()=>{q()||(console.log("User not authenticated, redirecting to login"),e("/login"))},[e]),v.useEffect(()=>{console.log("UserTicketList mounted, fetching tickets"),u(!0,1)},[]);const w=P=>{E(P)},b=P=>{const N=parseInt(P.target.value,10);c(N),g(1)};if(r&&!t.length)return o.jsx(Ze,{});if(n)return o.jsx("div",{className:"error-message",children:n});const T=P=>{try{return Ue(Ks(P),"dd 'de' MMMM 'de' yyyy",{locale:St})}catch(N){return console.error("Error formatting date:",N),"Data inválida"}};return o.jsxs(ru,{children:[o.jsxs(nu,{children:[o.jsxs(su,{children:[o.jsx("h2",{children:"Meus Tickets"}),o.jsxs(au,{children:[o.jsx("label",{htmlFor:"page-size-select",children:"Itens por página:"}),o.jsxs("select",{id:"page-size-select",value:i,onChange:b,children:[o.jsx("option",{value:"10",children:"10"}),o.jsx("option",{value:"20",children:"20"}),o.jsx("option",{value:"50",children:"50"})]}),o.jsx(ou,{children:s>0?`Total: ${s}`:"Nenhum ticket"})]})]}),o.jsx(iu,{children:o.jsx(Hr,{selectedStatus:a,onStatusChange:m})}),o.jsxs(cu,{children:[t.map(P=>o.jsxs(lu,{$selected:(p==null?void 0:p.id)===P.id,onClick:()=>w(P),children:[o.jsxs(du,{children:[o.jsx(uu,{children:P.subjectDescription}),o.jsxs(fu,{children:[o.jsx(qr,{}),P.creationDate?T(P.creationDate):"N/A"]})]}),o.jsxs(hu,{children:[o.jsx(Fn,{className:"priority-badge",priority:P.priority.toLowerCase(),children:P.priority}),o.jsx(Fn,{className:"status-badge",status:P.status.toLowerCase(),children:P.status})]})]},P.id)),r&&t.length>0&&o.jsx(Ze,{}),!r&&t.length===0&&o.jsxs("div",{className:"no-tickets-message",children:["Nenhum ticket encontrado",a?` com status: ${a}`:"","."]})]}),o.jsxs(pu,{children:[o.jsx("button",{onClick:()=>g(1),disabled:d===1,children:"Primeira"}),o.jsx("button",{onClick:()=>g(d-1),disabled:d===1,children:"Anterior"}),o.jsxs("span",{children:["Página ",d," de ",l,s>0&&` (${s} total)`]}),o.jsx("button",{onClick:()=>g(d+1),disabled:d>=l,children:"Próxima"}),o.jsx("button",{onClick:()=>g(l),disabled:d>=l,children:"Última"})]})]}),o.jsx(mu,{children:h?o.jsxs(bu,{children:[o.jsx(Ze,{}),o.jsx("p",{children:"Carregando detalhes do ticket..."})]}):k?o.jsxs(gu,{children:[o.jsxs("p",{children:["Erro ao carregar detalhes do ticket: ",k]}),o.jsx("button",{onClick:()=>E(p),children:"Tentar novamente"})]}):o.jsx(sa,{ticket:y||p})})]})},xu=j.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,wu=j.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  padding: 1.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(220, 53, 69, 0.15);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: rgba(255, 255, 255, 0.2);
  }

  h1 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem;

    h1 {
      font-size: 1.4rem;
    }
  }
`,vu=j.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 1rem;
  }
`,Su=j.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  height: calc(100vh - 180px);

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`,ju=j.section`
  background: white;
  border-radius: 12px;
  width: 100%;
  overflow-y: auto;
  transition: transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;

  @media (max-width: 1024px) {
    order: 2;
  }
`;j.aside`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  position: sticky;
  top: 1rem;
  height: fit-content;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    position: static;
    order: 1;
  }
`;const Eu=()=>{const e=We();return o.jsxs(xu,{children:[o.jsxs(wu,{children:[o.jsxs(vu,{onClick:()=>e("/"),children:[o.jsx(ia,{}),o.jsx("span",{children:"Back to Home"})]}),o.jsxs("h1",{children:[o.jsx(ca,{}),"Meus Tickets"]})]}),o.jsx(Su,{children:o.jsx(ju,{children:o.jsx(yu,{})})})]})},ku=j.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #495057;
    margin-bottom: 0.25rem;
  }

  select {
    padding: 0.75rem;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    background: #ffffff;
    color: #212529;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    min-width: 200px;

    &:focus {
      border-color: #059669;
      box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.1);
    }

    &:hover {
      border-color: #059669;
    }
  }

  option {
    padding: 0.5rem;
  }
`,la=({selectedPriority:e,onPriorityChange:t,options:r,loading:n})=>o.jsxs(ku,{children:[o.jsx("label",{htmlFor:"priority-filter",children:"Prioridade:"}),o.jsxs("select",{id:"priority-filter",value:e||"",onChange:s=>t(s.target.value),disabled:n,children:[o.jsx("option",{value:"",children:"Todas as Prioridades"}),r&&r.map(s=>o.jsx("option",{value:s.value,children:s.label},s.value))]})]});la.propTypes={selectedPriority:O.string,onPriorityChange:O.func.isRequired,options:O.arrayOf(O.shape({value:O.string.isRequired,label:O.string.isRequired})),loading:O.bool};const Tu=j.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #495057;
    margin-bottom: 0.25rem;
  }

  select {
    padding: 0.75rem;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    background: #ffffff;
    color: #212529;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    min-width: 200px;

    &:focus {
      border-color: #059669;
      box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.1);
    }

    &:hover {
      border-color: #059669;
    }
  }

  option {
    padding: 0.5rem;
  }
`,da=({selectedAppOrigin:e,onAppOriginChange:t,options:r,loading:n})=>o.jsxs(Tu,{children:[o.jsx("label",{htmlFor:"app-origin-filter",children:"Origem do App:"}),o.jsxs("select",{id:"app-origin-filter",value:e||"",onChange:s=>t(s.target.value),disabled:n,children:[o.jsx("option",{value:"",children:"Todas as origens"}),r&&r.map(s=>o.jsx("option",{value:s,children:s},s))]})]});da.propTypes={selectedAppOrigin:O.string,onAppOriginChange:O.func.isRequired,options:O.arrayOf(O.string),loading:O.bool};const Cu=j.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: #059669;
  }
`,Pu=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 3rem;
  background: #f8f9fa;
  border-radius: 16px;
  color: #6c757d;
  font-size: 1.2rem;
  text-align: center;
  border: 2px dashed #dee2e6;
  font-weight: 500;
`,Ou=j.div`
  padding-bottom: 2rem;
  border-bottom: 2px solid #e9ecef;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 60px;
    height: 2px;
    background: #059669;
  }

  h3 {
    margin: 0 0 1.2rem 0;
    font-size: 1.3rem;
    color: #495057;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 600;

    svg {
      color: #059669;
      font-size: 1.1rem;
    }
  }

  p {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 700;
    color: #212529;
    line-height: 1.4;
  }
`,Ru=j.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,$n=j.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,pe=j.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }

  .label {
    color: #495057;
    min-width: 120px;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 600;
    font-size: 0.95rem;

    svg {
      color: #059669;
    }
  }

  .value {
    color: #212529;
    font-weight: 500;
    flex: 1;
  }
`,Nu=j.span`
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &.status-badge {
    background: ${({status:e})=>e==="open"?"#e6f4ff":e==="in_progress"?"#fff7e6":e==="resolved"?"#e6ffe6":e==="pending"?"#fff0f6":"#f0f0f0"};
    color: ${({status:e})=>e==="open"?"#1890ff":e==="in_progress"?"#d48806":e==="resolved"?"#52c41a":e==="pending"?"#eb2f96":"#666"};
  }

  &.priority-badge {
    background: ${({priority:e})=>e==="high"?"#ffe3e3":e==="medium"?"#fff4de":e==="low"?"#d8f5e1":e==="critical"?"#ffcccc":"#d8f5e1"};
    color: ${({priority:e})=>e==="high"?"#d14343":e==="medium"?"#d46b08":e==="low"?"#3a843f":e==="critical"?"#a61d24":"#3a843f"};
  }
`,Du=j.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e9ecef;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

  h3 {
    margin: 0 0 1.5rem 0;
    font-size: 1.2rem;
    color: #495057;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 600;

    svg {
      color: #059669;
    }
  }
`,Au=j.div`
  line-height: 1.7;
  color: #212529;
  white-space: pre-wrap;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
  font-size: 1rem;
`,Ln=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e9ecef;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`,_e=j.button`
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  letter-spacing: 0.2px;
  position: relative;
  overflow: hidden;
  min-width: auto;
  width: auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:disabled {
    background: #e0e0e0;
    color: #a0a0a0;
    cursor: not-allowed;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &.primary {
    background: #059669;
    color: white;
    &:hover:not(:disabled) {
      background: #047857;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
    }
  }

  &.secondary {
    background: #6c757d;
    color: white;
    &:hover:not(:disabled) {
      background: #5a6268;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);
    }
  }

  &.danger {
    background: #dc3545;
    color: white;
    &:hover:not(:disabled) {
      background: #c82333;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
    }
  }

  &.warning {
    background: #ffc107;
    color: #343a40;
    &:hover:not(:disabled) {
      background: #e0a800;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
    }
  }
`,Mu=j(_e)`
  background: #28a745;
  color: white;
  &:hover:not(:disabled) {
    background: #218838;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
  }
`,ua=({ticket:e,onTicketUpdate:t,onListUpdate:r,onResetSelection:n,users:s})=>{var ce,K,G,Te;const[a,i]=v.useState(e),[c,d]=v.useState(((ce=e==null?void 0:e.responsibleUser)==null?void 0:ce.id)||""),[l,u]=v.useState((e==null?void 0:e.priority)||""),{reloadUsers:m,updateTicketFields:g,addToast:E}=He();if(v.useEffect(()=>{console.log("SupportTicketDetails - users changed:",(s==null?void 0:s.length)||0)},[s]),!a)return o.jsx(Pu,{children:"Selecione um ticket para ver os detalhes"});const p=C=>C==null||C===""?"":String(C),y=a.status==="CLOSED",h=p((K=a.responsibleUser)==null?void 0:K.id)||p(a.responsibleUser),k=p((G=a.responsibleUser)==null?void 0:G.id)||p(a.responsibleUser),w=p(c)!==k;console.log("SupportTicketDetails render:",{ticket:e,currentTicket:a,users:(s==null?void 0:s.length)||0,selectedResponsibleUser:c,selectedPriority:l,responsibleUser:a==null?void 0:a.responsibleUser,responsibleUserId:(Te=a==null?void 0:a.responsibleUser)==null?void 0:Te.id,hasResponsibleUser:h,currentResponsibleUserId:k,isResponsibleUserChanged:w}),v.useEffect(()=>{var B,X;console.log("SupportTicketDetails useEffect - ticket changed:",e),console.log("SupportTicketDetails useEffect - ticket.responsibleUser:",e==null?void 0:e.responsibleUser),console.log("SupportTicketDetails useEffect - ticket.responsibleUser.id:",(B=e==null?void 0:e.responsibleUser)==null?void 0:B.id),i(e);let C="";(X=e==null?void 0:e.responsibleUser)!=null&&X.id?C=p(e.responsibleUser.id):(e!=null&&e.responsibleUser&&typeof e.responsibleUser=="string"||e!=null&&e.responsibleUser&&typeof e.responsibleUser=="number")&&(C=p(e.responsibleUser)),console.log("SupportTicketDetails useEffect - responsibleUserId determined:",C),d(C),u((e==null?void 0:e.priority)||"")},[e]);const b=C=>({OPEN:"open",IN_PROGRESS:"in_progress",RESOLVED:"resolved",CLOSED:"closed",PENDING:"pending"})[C]||"open",T=C=>{try{const B=new Date(C);return Wr(B)?Ue(B,"dd 'de' MMMM 'de' yyyy",{locale:St}):"Data inválida"}catch(B){return console.error("Erro ao formatar data:",B),"Data inválida"}},P=C=>({OPEN:"Aberto",IN_PROGRESS:"Em Andamento",RESOLVED:"Resolvido",CLOSED:"Fechado",PENDING:"Pendente"})[C]||"Aberto",N=[{value:"LOW",label:"Baixa"},{value:"MEDIUM",label:"Média"},{value:"HIGH",label:"Alta"},{value:"CRITICAL",label:"Crítica"}],R=async C=>{try{await C(a.id);const B=await zt(a.id);i(B),t&&await t(a.id),r&&await r(!0,1)}catch(B){console.error("Erro ao mudar status:",B)}},V=l!==a.priority,U=w||V,Ne=async()=>{var B;const C={};if(w&&(C.responsibleUser=s==null?void 0:s.find(X=>p(X.id)===p(c))),V&&(C.priority=l),Object.keys(C).length===0){E("Nenhuma alteração para salvar.","info");return}try{if(await g(a.id,C),t&&await t(a.id),r&&await r(!0,1),C.responsibleUser||C.priority){const X=await zt(a.id);i(X),u(X.priority),d(p((B=X.responsibleUser)==null?void 0:B.id))}E("Alterações salvas com sucesso!","success")}catch{E("Erro ao salvar alterações.","error")}};return o.jsxs(Cu,{children:[o.jsxs(Ou,{children:[o.jsxs("h3",{children:[o.jsx(Vt,{}),"Assunto"]}),o.jsx("p",{children:a.subjectDescription||a.subject||"Sem título"})]}),o.jsxs(Ln,{children:[a.status==="OPEN"&&h&&o.jsxs(_e,{className:"primary",onClick:()=>R(fr),disabled:y,children:[o.jsx("span",{style:{fontSize:"0.9rem"},children:"▶"}),"Iniciar Atendimento"]}),a.status==="IN_PROGRESS"&&o.jsxs(o.Fragment,{children:[o.jsxs(_e,{className:"warning",onClick:()=>R(Si),disabled:y,children:[o.jsx("span",{style:{fontSize:"0.9rem"},children:"⏸"}),"Iniciar Pendência"]}),o.jsxs(_e,{className:"primary",onClick:()=>R(vi),disabled:y,children:[o.jsx("span",{style:{fontSize:"0.9rem"},children:"✓"}),"Finalizar Atendimento"]})]}),a.status==="PENDING"&&o.jsxs(_e,{className:"secondary",onClick:()=>R(fr),disabled:y,children:[o.jsx("span",{style:{fontSize:"0.9rem"},children:"🔄"}),"Reiniciar Atendimento"]}),a.status==="RESOLVED"&&o.jsxs(o.Fragment,{children:[o.jsxs(_e,{className:"secondary",onClick:()=>R(fr),disabled:y,children:[o.jsx("span",{style:{fontSize:"0.9rem"},children:"🔄"}),"Reiniciar Atendimento"]}),o.jsxs(_e,{className:"danger",onClick:()=>R(wi),disabled:y,children:[o.jsx("span",{style:{fontSize:"0.9rem"},children:"❌"}),"Fechar Ticket"]})]}),y&&o.jsx("div",{style:{padding:"0.5rem 1rem",background:"#f8f9fa",border:"2px solid #dee2e6",borderRadius:"8px",color:"#6c757d",fontStyle:"italic",fontWeight:"500",textAlign:"center",fontSize:"0.85rem"},children:"🚫 Ticket Fechado - Nenhuma alteração de status ou responsável permitida."})]}),o.jsxs(Ru,{children:[o.jsxs($n,{children:[o.jsxs(pe,{children:[o.jsxs("span",{className:"label",children:[o.jsx(qr,{}),"Criação:"]}),o.jsx("span",{className:"value",children:T(a.creationDate||a.createdAt)})]}),o.jsxs(pe,{children:[o.jsx("span",{className:"label",children:"Status:"}),o.jsx(Nu,{status:b(a.status),className:"status-badge",children:P(a.status)})]}),o.jsxs(pe,{children:[o.jsxs("span",{className:"label",children:[o.jsx(Vt,{}),"Origem:"]}),o.jsx("span",{className:"value",children:a.appOrigin||"Não informado"})]}),o.jsxs(pe,{children:[o.jsx("span",{className:"label",children:"Prioridade:"}),o.jsx("select",{className:"select-priority",value:l,onChange:C=>u(C.target.value),disabled:y,style:{padding:"8px 12px",borderRadius:"8px",border:"2px solid #e9ecef",backgroundColor:"#ffffff",color:"#212529",fontSize:"0.95rem",fontWeight:"500",cursor:y?"not-allowed":"pointer",transition:"all 0.3s ease",outline:"none",minWidth:"150px"},onFocus:C=>{y||(C.target.style.borderColor="#059669",C.target.style.boxShadow="0 0 0 3px rgba(5, 150, 105, 0.1)")},onBlur:C=>{C.target.style.borderColor="#ffe6e6",C.target.style.boxShadow="none"},children:N.map(C=>o.jsx("option",{value:C.value,children:C.label},C.value))})]}),o.jsx(pe,{children:o.jsxs("div",{className:"responsible-container",children:[o.jsxs("span",{className:"label",children:[o.jsx(tu,{}),"Responsável:"]}),o.jsxs("select",{className:"responsible-select",value:p(c),onChange:C=>d(C.target.value),disabled:y,style:{padding:"8px 12px",borderRadius:"8px",border:"2px solid #e9ecef",backgroundColor:"#ffffff",color:"#212529",fontSize:"0.95rem",fontWeight:"500",cursor:y?"not-allowed":"pointer",transition:"all 0.3s ease",outline:"none",minWidth:"200px"},onFocus:C=>{y||(C.target.style.borderColor="#059669",C.target.style.boxShadow="0 0 0 3px rgba(5, 150, 105, 0.1)")},onBlur:C=>{C.target.style.borderColor="#ffe6e6",C.target.style.boxShadow="none"},children:[o.jsx("option",{value:"",children:"Selecione um responsável"}),s&&s.length>0?s.map(C=>o.jsx("option",{value:p(C.id),children:C.name||C.email},C.id)):o.jsx("option",{value:"",disabled:!0,children:"Carregando usuários..."})]}),(!s||s.length===0)&&o.jsx("button",{onClick:()=>{console.log("Debug: Forcing users reload"),m()},style:{marginLeft:"12px",padding:"8px 16px",fontSize:"0.85rem",background:"#dc3545",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600",transition:"all 0.3s ease",boxShadow:"0 2px 8px rgba(220, 53, 69, 0.2)"},onMouseEnter:C=>{C.target.style.transform="translateY(-1px)",C.target.style.boxShadow="0 4px 12px rgba(220, 53, 69, 0.3)"},onMouseLeave:C=>{C.target.style.transform="translateY(0)",C.target.style.boxShadow="0 2px 8px rgba(220, 53, 69, 0.2)"},children:"Recarregar Usuários"})]})})]}),(a.inicioPendencia||a.fimPendencia||a.duracaoPendencia!=null||a.dataResolucao||a.dataFechamento||a.duracaoAposResolucao!=null)&&o.jsxs($n,{children:[o.jsx("h4",{style:{color:"#495057",fontSize:"1rem",fontWeight:"600",margin:"0 0 1rem 0",borderBottom:"2px solid #e9ecef",paddingBottom:"0.5rem"},children:"Informações de Auditoria"}),a.inicioPendencia&&o.jsxs(pe,{children:[o.jsx("span",{className:"label",children:"Início Pendência:"}),o.jsx("span",{className:"value",children:T(a.inicioPendencia)})]}),a.fimPendencia&&o.jsxs(pe,{children:[o.jsx("span",{className:"label",children:"Fim Pendência:"}),o.jsx("span",{className:"value",children:T(a.fimPendencia)})]}),a.duracaoPendencia!=null&&o.jsxs(pe,{children:[o.jsx("span",{className:"label",children:"Duração Pendência:"}),o.jsxs("span",{className:"value",children:[a.duracaoPendencia," minutos"]})]}),a.dataResolucao&&o.jsxs(pe,{children:[o.jsx("span",{className:"label",children:"Data Resolução:"}),o.jsx("span",{className:"value",children:T(a.dataResolucao)})]}),a.dataFechamento&&o.jsxs(pe,{children:[o.jsx("span",{className:"label",children:"Data Fechamento:"}),o.jsx("span",{className:"value",children:T(a.dataFechamento)})]}),a.duracaoAposResolucao!=null&&o.jsxs(pe,{children:[o.jsx("span",{className:"label",children:"Duração Pós-Resolução:"}),o.jsxs("span",{className:"value",children:[a.duracaoAposResolucao," minutos"]})]})]})]}),U&&!y&&o.jsx(Ln,{children:o.jsxs(Mu,{onClick:Ne,children:[o.jsx(Zd,{})," Salvar Alterações"]})}),o.jsxs(Du,{children:[o.jsxs("h3",{children:[o.jsx(Jd,{}),"Descrição"]}),o.jsx(Au,{children:a.detailedDescription||a.description||"Sem descrição disponível"})]}),(a==null?void 0:a.id)&&o.jsx("div",{children:o.jsx(na,{ticketId:a.id},a.id)})]})};ua.propTypes={ticket:O.shape({id:O.string,subjectDescription:O.string,subject:O.string,detailedDescription:O.string,description:O.string,status:O.string,priority:O.string,creationDate:O.string,createdAt:O.string,appOrigin:O.string,responsibleUser:O.shape({id:O.oneOfType([O.string,O.number]),name:O.string,email:O.string}),inicioPendencia:O.string,fimPendencia:O.string,duracaoPendencia:O.number,dataResolucao:O.string,dataFechamento:O.string,duracaoAposResolucao:O.number}),onTicketUpdate:O.func,onListUpdate:O.func,onResetSelection:O.func,users:O.array};const _u=j.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  height: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`,Fu=j.div`
  border-radius: 12px;
  padding: 1.5rem;
`,$u=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #1a1a1a;
    font-weight: 600;
  }
`,Lu=j.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f8f9fa;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  label {
    font-size: 0.9rem;
    color: #666;
  }

  select {
    padding: 0.3rem 0.6rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
    font-size: 0.9rem;
  }
`,Iu=j.span`
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
`,zu=j.div`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,Uu=j.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`,Bu=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background: ${({$selected:e})=>e?"#f0f5ff":"white"};
  border: 1px solid ${({$selected:e})=>e?"#1890ff":"#eee"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(4px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
`,Wu=j.div`
  flex: 1;
`,Hu=j.div`
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;j.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #666;

  svg {
    color: #999;
  }
`;const qu=j.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,Yu=j.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #666;

  svg {
    color: #999;
  }
`,Vu=j.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #888;

  svg {
    color: #999;
    font-size: 0.8rem;
  }
`,Gu=j.div`
  display: flex;
  gap: 0.8rem;
  margin-left: 1rem;
`,In=j.span`
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &.priority-badge {
    background: ${({$priority:e})=>e==="high"?"#ffe3e3":e==="medium"?"#fff4de":"#d8f5e1"};
    color: ${({$priority:e})=>e==="high"?"#d14343":e==="medium"?"#d46b08":"#3a843f"};
  }

  &.status-badge {
    background: ${({$status:e})=>e==="open"?"#e6f4ff":e==="pending"?"#fff7e6":"#e6ffe6"};
    color: ${({$status:e})=>e==="open"?"#1890ff":e==="pending"?"#d48806":"#52c41a"};
  }
`,Xu=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;

  button {
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
      background: #1890ff;
      color: white;
      border-color: #1890ff;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  span {
    font-size: 0.9rem;
    color: #666;
  }
`,Ju=j.div`
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  position: sticky;
  top: 1rem;
  height: fit-content;

  @media (max-width: 1024px) {
    position: static;
    margin-top: 2rem;
  }
`,Qu=j.div`
  padding: 1rem;
  background: #ffe3e3;
  border-radius: 8px;
  color: #d14343;
  margin: 1rem 0;
  text-align: center;

  button {
    margin-top: 0.5rem;
    background: #d14343;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
  }
`,Ku=j.div`
  text-align: center;
  padding: 2rem;
  color: #1890ff;

  p {
    margin-top: 1rem;
    font-size: 0.9rem;
  }
`,Zu=()=>{const e=We(),{tickets:t,loading:r,error:n,totalElements:s,selectedStatus:a,selectedPriority:i,selectedAppOrigin:c,appOrigins:d,loadingAppOrigins:l,pageSize:u,setPageSize:m,currentPage:g,totalPages:E,fetchTickets:p,handleStatusChange:y,handlePriorityChange:h,handleAppOriginChange:k,handlePageChange:w,handleSelectTicket:b,selectedTicket:T,ticketDetails:P,detailsLoading:N,detailsError:R,fetchTicketDetails:V,users:U,loadingUsers:Ne,reloadAppOrigins:ce}=He();console.log("SupportTicketList render - users:",(U==null?void 0:U.length)||0),console.log("SupportTicketList render - appOrigins:",(d==null?void 0:d.length)||0),!l&&(!d||d.length===0)&&console.warn("SupportTicketList - appOrigins not loaded, consider using reloadAppOrigins()");const K=D=>({OPEN:"Aberto",IN_PROGRESS:"Em Andamento",RESOLVED:"Resolvido",CLOSED:"Fechado",PENDING:"Pendente"})[D]||D,G=D=>({HIGH:"Alta",MEDIUM:"Média",LOW:"Baixa",CRITICAL:"Crítica"})[D]||D,Te=[{value:"OPEN",label:K("OPEN")},{value:"IN_PROGRESS",label:K("IN_PROGRESS")},{value:"RESOLVED",label:K("RESOLVED")},{value:"CLOSED",label:K("CLOSED")},{value:"PENDING",label:K("PENDING")}],C=[{value:"HIGH",label:G("HIGH")},{value:"MEDIUM",label:G("MEDIUM")},{value:"LOW",label:G("LOW")},{value:"CRITICAL",label:G("CRITICAL")}];v.useEffect(()=>{q()||(console.log("User not authenticated, redirecting to login"),e("/login"))},[e]),v.useEffect(()=>{p(!0,1)},[a,i,c]);const B=D=>{b(D)},X=D=>{const J=parseInt(D.target.value,10);m(J),w(1)};if(r&&!t.length)return o.jsx(Ze,{});if(n)return o.jsx("div",{className:"error-message",children:n});const qe=D=>{try{return Ue(Ks(D),"dd 'de' MMMM 'de' yyyy",{locale:St})}catch(J){return console.error("Error formatting date:",J),"Data inválida"}};return o.jsxs(_u,{children:[o.jsxs(Fu,{children:[o.jsxs($u,{children:[o.jsx("h2",{children:"Tickets"}),o.jsxs(Lu,{children:[o.jsx("label",{htmlFor:"page-size-select",children:"Itens por página:"}),o.jsxs("select",{id:"page-size-select",value:u,onChange:X,children:[o.jsx("option",{value:"10",children:"10"}),o.jsx("option",{value:"20",children:"20"}),o.jsx("option",{value:"50",children:"50"})]}),o.jsx(Iu,{children:s>0?`Total: ${s}`:"Nenhum ticket"})]})]}),o.jsxs(zu,{className:"filter-section",children:[o.jsx(Hr,{selectedStatus:a,onStatusChange:y,options:Te,loading:r}),o.jsx(la,{selectedPriority:i,onPriorityChange:h,options:C,loading:r}),o.jsx(da,{selectedAppOrigin:c,onAppOriginChange:k,options:d,loading:l})]}),o.jsxs(Uu,{children:[t.map(D=>o.jsxs(Bu,{$selected:(T==null?void 0:T.id)===D.id,onClick:()=>B(D),children:[o.jsxs(Wu,{children:[o.jsx(Hu,{children:D.subjectDescription}),o.jsxs(qu,{children:[o.jsxs(Yu,{children:[o.jsx(qr,{}),D.creationDate?qe(D.creationDate):"N/A"]}),D.appOrigin&&o.jsxs(Vu,{children:[o.jsx(Vt,{}),D.appOrigin]})]})]}),o.jsxs(Gu,{children:[o.jsx(In,{className:"priority-badge",$priority:D.priority.toLowerCase(),children:G(D.priority)}),o.jsx(In,{className:"status-badge",$status:D.status.toLowerCase(),children:K(D.status)})]})]},D.id)),r&&t.length>0&&o.jsx(Ze,{}),!r&&t.length===0&&o.jsxs("div",{className:"no-tickets-message",children:["Nenhum ticket encontrado",a?` com status: ${K(a)}`:"",i?` e prioridade: ${G(i)}`:"",c?` e origem: ${c}`:"","."]})]}),o.jsxs(Xu,{children:[o.jsx("button",{onClick:()=>w(1),disabled:g===1,children:"Primeira"}),o.jsx("button",{onClick:()=>w(g-1),disabled:g<=1,children:"Anterior"}),o.jsxs("span",{children:["Página ",g," de ",E>0?E:1]}),o.jsx("button",{onClick:()=>w(g+1),disabled:g>=E,children:"Próxima"}),o.jsx("button",{onClick:()=>w(E),disabled:g===E||E<=1,children:"Última"})]})]}),o.jsx(Ju,{children:T?N||!P||Ne||!U||U.length===0?o.jsxs(Ku,{children:[o.jsx(Ze,{}),o.jsx("p",{children:"Carregando detalhes do ticket..."})]}):R?o.jsxs(Qu,{children:[o.jsxs("p",{children:["Erro ao carregar detalhes do ticket: ",R]}),o.jsx("button",{onClick:()=>b(T),children:"Tentar novamente"})]}):o.jsx(ua,{ticket:P,onTicketUpdate:V,onListUpdate:p,onResetSelection:()=>b(null),users:U}):o.jsx("div",{style:{textAlign:"center",color:"#888",padding:"2rem"},children:"Selecione um ticket para ver os detalhes"})})]})},ef=j.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,tf=j.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  padding: 1.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(220, 53, 69, 0.15);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: rgba(255, 255, 255, 0.2);
  }

  h1 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem;

    h1 {
      font-size: 1.4rem;
    }
  }
`,rf=j.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 1rem;
  }
`,nf=j.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  height: calc(100vh - 180px);

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`,sf=j.section`
  background: white;
  border-radius: 12px;
  width: 100%;
  overflow-y: auto;
  transition: transform 0.2s ease;


  @media (max-width: 1024px) {
    order: 2;
  }
`;j.aside`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  position: sticky;
  top: 1rem;
  height: fit-content;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    position: static;
    order: 1;
  }
`;const af=()=>{const e=We();return o.jsxs(ef,{children:[o.jsxs(tf,{children:[o.jsxs(rf,{onClick:()=>e("/"),children:[o.jsx(ia,{}),o.jsx("span",{children:"Back to Home"})]}),o.jsxs("h1",{children:[o.jsx(ca,{}),"Support Dashboard"]})]}),o.jsx(nf,{children:o.jsx(sf,{children:o.jsx(Zu,{})})})]})},of=j.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,cf=j.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  max-width: 400px;
  animation: slideIn 0.3s ease-out;
  border-left: 4px solid;
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  &.success {
    background: #d4edda;
    color: #155724;
    border-left-color: #28a745;
  }

  &.error {
    background: #f8d7da;
    color: #721c24;
    border-left-color: #dc3545;
  }

  &.warning {
    background: #fff3cd;
    color: #856404;
    border-left-color: #ffc107;
  }

  &.info {
    background: #d1ecf1;
    color: #0c5460;
    border-left-color: #17a2b8;
  }

  .toast-icon {
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .toast-content {
    flex: 1;
    font-weight: 500;
    font-size: 0.95rem;
  }

  .toast-close {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    opacity: 0.7;
    transition: opacity 0.2s;
    flex-shrink: 0;

    &:hover {
      opacity: 1;
    }
  }
`,lf=({toasts:e,removeToast:t})=>o.jsx(of,{children:e.map(r=>o.jsxs(cf,{className:r.type,children:[o.jsxs("div",{className:"toast-icon",children:[r.type==="success"&&o.jsx(Qd,{}),r.type==="error"&&o.jsx(eu,{}),r.type==="warning"&&o.jsx(Kd,{}),r.type==="info"&&o.jsx(Vt,{})]}),o.jsx("div",{className:"toast-content",children:r.message}),o.jsx("button",{className:"toast-close",onClick:()=>t(r.id),"aria-label":"Fechar notificação",children:"×"})]},r.id))}),df=()=>{const{toasts:e,removeToast:t}=He();return o.jsxs("div",{className:"app-container",children:[o.jsxs(Aa,{children:[o.jsx(Ge,{path:"/",element:o.jsx(Ni,{})}),o.jsx(Ge,{path:"/login",element:o.jsx(Di,{})}),o.jsx(Ge,{path:"/callback",element:o.jsx(Lc,{})}),o.jsx(Ge,{path:"/user/tickets",element:o.jsx(un,{children:o.jsx(Eu,{})})}),o.jsx(Ge,{path:"/support/tickets",element:o.jsx(un,{children:o.jsx(af,{})})}),o.jsx(Ge,{path:"*",element:o.jsx(zn,{to:"/",replace:!0})})]}),o.jsx(lf,{toasts:e,removeToast:t})]})},uf=()=>o.jsx(Da,{children:o.jsx(Ri,{children:o.jsx(df,{})})});yr.createRoot(document.getElementById("root")).render(o.jsx(ne.StrictMode,{children:o.jsx(uf,{})}));
//# sourceMappingURL=main-DBlS-aT8.js.map
