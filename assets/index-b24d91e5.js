(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const dt={},Mr=[],Mn=()=>{},rf=()=>!1,To=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Fl=n=>n.startsWith("onUpdate:"),Lt=Object.assign,Ol=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Yd=Object.prototype.hasOwnProperty,st=(n,e)=>Yd.call(n,e),Ve=Array.isArray,yr=n=>Ts(n)==="[object Map]",Or=n=>Ts(n)==="[object Set]",Sc=n=>Ts(n)==="[object Date]",$e=n=>typeof n=="function",Rt=n=>typeof n=="string",Fn=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",sf=n=>(pt(n)||$e(n))&&$e(n.then)&&$e(n.catch),of=Object.prototype.toString,Ts=n=>of.call(n),Kd=n=>Ts(n).slice(8,-1),af=n=>Ts(n)==="[object Object]",Ao=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Jr=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Zd=/-\w/g,Ai=wo(n=>n.replace(Zd,e=>e.slice(1).toUpperCase())),Jd=/\B([A-Z])/g,Ri=wo(n=>n.replace(Jd,"-$1").toLowerCase()),lf=wo(n=>n.charAt(0).toUpperCase()+n.slice(1)),$o=wo(n=>n?`on${lf(n)}`:""),Ei=(n,e)=>!Object.is(n,e),so=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},cf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Co=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let bc;const Ro=()=>bc||(bc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rn(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Rt(i)?nh(i):rn(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Rt(n)||pt(n))return n}const Qd=/;(?![^(]*\))/g,eh=/:([^]+)/,th=/\/\*[^]*?\*\//g;function nh(n){const e={};return n.replace(th,"").split(Qd).forEach(t=>{if(t){const i=t.split(eh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function qt(n){let e="";if(Rt(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=qt(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ih="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rh=Nl(ih);function uf(n){return!!n||n===""}function sh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=As(n[i],e[i]);return t}function As(n,e){if(n===e)return!0;let t=Sc(n),i=Sc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Fn(n),i=Fn(e),t||i)return n===e;if(t=Ve(n),i=Ve(e),t||i)return t&&i?sh(n,e):!1;if(t=pt(n),i=pt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!As(n[o],e[o]))return!1}}return String(n)===String(e)}function Bl(n,e){return n.findIndex(t=>As(t,e))}const ff=n=>!!(n&&n.__v_isRef===!0),_t=n=>Rt(n)?n:n==null?"":Ve(n)||pt(n)&&(n.toString===of||!$e(n.toString))?ff(n)?_t(n.value):JSON.stringify(n,df,2):String(n),df=(n,e)=>ff(e)?df(n,e.value):yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[jo(i,s)+" =>"]=r,t),{})}:Or(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>jo(t))}:Fn(e)?jo(e):pt(e)&&!Ve(e)&&!af(e)?String(e):e,jo=(n,e="")=>{var t;return Fn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class hf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Bt;try{return Bt=this,e()}finally{Bt=t}}}on(){++this._on===1&&(this.prevScope=Bt,Bt=this)}off(){this._on>0&&--this._on===0&&(Bt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function pf(n){return new hf(n)}function mf(){return Bt}function oh(n,e=!1){Bt&&Bt.cleanups.push(n)}let ht;const Yo=new WeakSet;class xf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&Bt.active&&Bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Yo.has(this)&&(Yo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_f(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mc(this),vf(this);const e=ht,t=yn;ht=this,yn=!0;try{return this.fn()}finally{Sf(this),ht=e,yn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kl(e);this.deps=this.depsTail=void 0,Mc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Yo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){La(this)&&this.run()}get dirty(){return La(this)}}let gf=0,Qr,es;function _f(n,e=!1){if(n.flags|=8,e){n.next=es,es=n;return}n.next=Qr,Qr=n}function zl(){gf++}function Vl(){if(--gf>0)return;if(es){let e=es;for(es=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Qr;){let e=Qr;for(Qr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function vf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),kl(i),ah(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function La(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function bf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===fs)||(n.globalVersion=fs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!La(n))))return;n.flags|=2;const e=n.dep,t=ht,i=yn;ht=n,yn=!0;try{vf(n);const r=n.fn(n._value);(e.version===0||Ei(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ht=t,yn=i,Sf(n),n.flags&=-3}}function kl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)kl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ah(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let yn=!0;const Mf=[];function ni(){Mf.push(yn),yn=!1}function ii(){const n=Mf.pop();yn=n===void 0?!0:n}function Mc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let fs=0;class lh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ht||!yn||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new lh(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,yf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,fs++,this.notify(e)}notify(e){zl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Vl()}}}function yf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)yf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const xo=new WeakMap,$i=Symbol(""),Ua=Symbol(""),ds=Symbol("");function zt(n,e,t){if(yn&&ht){let i=xo.get(n);i||xo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Hl),r.map=i,r.key=t),r.track()}}function $n(n,e,t,i,r,s){const o=xo.get(n);if(!o){fs++;return}const a=l=>{l&&l.trigger()};if(zl(),e==="clear")o.forEach(a);else{const l=Ve(n),c=l&&Ao(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===ds||!Fn(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(ds)),e){case"add":l?c&&a(o.get("length")):(a(o.get($i)),yr(n)&&a(o.get(Ua)));break;case"delete":l||(a(o.get($i)),yr(n)&&a(o.get(Ua)));break;case"set":yr(n)&&a(o.get($i));break}}Vl()}function ch(n,e){const t=xo.get(n);return t&&t.get(e)}function er(n){const e=it(n);return e===n?e:(zt(e,"iterate",ds),on(n)?e:e.map(Tn))}function Po(n){return zt(n=it(n),"iterate",ds),n}function gi(n,e){return ri(n)?Jn(n)?Rr(Tn(e)):Rr(e):Tn(e)}const uh={__proto__:null,[Symbol.iterator](){return Ko(this,Symbol.iterator,n=>gi(this,n))},concat(...n){return er(this).concat(...n.map(e=>Ve(e)?er(e):e))},entries(){return Ko(this,"entries",n=>(n[1]=gi(this,n[1]),n))},every(n,e){return Bn(this,"every",n,e,void 0,arguments)},filter(n,e){return Bn(this,"filter",n,e,t=>t.map(i=>gi(this,i)),arguments)},find(n,e){return Bn(this,"find",n,e,t=>gi(this,t),arguments)},findIndex(n,e){return Bn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Bn(this,"findLast",n,e,t=>gi(this,t),arguments)},findLastIndex(n,e){return Bn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Bn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Zo(this,"includes",n)},indexOf(...n){return Zo(this,"indexOf",n)},join(n){return er(this).join(n)},lastIndexOf(...n){return Zo(this,"lastIndexOf",n)},map(n,e){return Bn(this,"map",n,e,void 0,arguments)},pop(){return Gr(this,"pop")},push(...n){return Gr(this,"push",n)},reduce(n,...e){return yc(this,"reduce",n,e)},reduceRight(n,...e){return yc(this,"reduceRight",n,e)},shift(){return Gr(this,"shift")},some(n,e){return Bn(this,"some",n,e,void 0,arguments)},splice(...n){return Gr(this,"splice",n)},toReversed(){return er(this).toReversed()},toSorted(n){return er(this).toSorted(n)},toSpliced(...n){return er(this).toSpliced(...n)},unshift(...n){return Gr(this,"unshift",n)},values(){return Ko(this,"values",n=>gi(this,n))}};function Ko(n,e,t){const i=Po(n),r=i[e]();return i!==n&&!on(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const fh=Array.prototype;function Bn(n,e,t,i,r,s){const o=Po(n),a=o!==n&&!on(n),l=o[e];if(l!==fh[e]){const f=l.apply(n,s);return a?Tn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,gi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function yc(n,e,t,i){const r=Po(n);let s=t;return r!==n&&(on(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,gi(n,a),l,n)}),r[e](s,...i)}function Zo(n,e,t){const i=it(n);zt(i,"iterate",ds);const r=i[e](...t);return(r===-1||r===!1)&&Do(t[0])?(t[0]=it(t[0]),i[e](...t)):r}function Gr(n,e,t=[]){ni(),zl();const i=it(n)[e].apply(n,t);return Vl(),ii(),i}const dh=Nl("__proto__,__v_isRef,__isVue"),Ef=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Fn));function hh(n){Fn(n)||(n=String(n));const e=it(this);return zt(e,"has",n),e.hasOwnProperty(n)}class Tf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?yh:Rf:s?Cf:wf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!r){let l;if(o&&(l=uh[t]))return l;if(t==="hasOwnProperty")return hh}const a=Reflect.get(e,t,xt(e)?e:i);if((Fn(t)?Ef.has(t):dh(t))||(r||zt(e,"get",t),s))return a;if(xt(a)){const l=o&&Ao(t)?a:a.value;return r&&pt(l)?Fa(l):l}return pt(a)?r?Fa(a):Cr(a):a}}class Af extends Tf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ve(e)&&Ao(t);if(!this._isShallow){const c=ri(s);if(!on(i)&&!ri(i)&&(s=it(s),i=it(i)),!o&&xt(s)&&!xt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:st(e,t),l=Reflect.set(e,t,i,xt(e)?e:r);return e===it(r)&&(a?Ei(i,s)&&$n(e,"set",t,i):$n(e,"add",t,i)),l}deleteProperty(e,t){const i=st(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&$n(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Fn(t)||!Ef.has(t))&&zt(e,"has",t),i}ownKeys(e){return zt(e,"iterate",Ve(e)?"length":$i),Reflect.ownKeys(e)}}class ph extends Tf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const mh=new Af,xh=new ph,gh=new Af(!0);const Na=n=>n,Us=n=>Reflect.getPrototypeOf(n);function _h(n,e,t){return function(...i){const r=this.__v_raw,s=it(r),o=yr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Na:e?Rr:Tn;return!e&&zt(s,"iterate",l?Ua:$i),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ns(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function vh(n,e){const t={get(r){const s=this.__v_raw,o=it(s),a=it(r);n||(Ei(r,a)&&zt(o,"get",r),zt(o,"get",a));const{has:l}=Us(o),c=e?Na:n?Rr:Tn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&zt(it(r),"iterate",$i),r.size},has(r){const s=this.__v_raw,o=it(s),a=it(r);return n||(Ei(r,a)&&zt(o,"has",r),zt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=it(a),c=e?Na:n?Rr:Tn;return!n&&zt(l,"iterate",$i),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Lt(t,n?{add:Ns("add"),set:Ns("set"),delete:Ns("delete"),clear:Ns("clear")}:{add(r){!e&&!on(r)&&!ri(r)&&(r=it(r));const s=it(this);return Us(s).has.call(s,r)||(s.add(r),$n(s,"add",r,r)),this},set(r,s){!e&&!on(s)&&!ri(s)&&(s=it(s));const o=it(this),{has:a,get:l}=Us(o);let c=a.call(o,r);c||(r=it(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ei(s,u)&&$n(o,"set",r,s):$n(o,"add",r,s),this},delete(r){const s=it(this),{has:o,get:a}=Us(s);let l=o.call(s,r);l||(r=it(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&$n(s,"delete",r,void 0),c},clear(){const r=it(this),s=r.size!==0,o=r.clear();return s&&$n(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=_h(r,n,e)}),t}function Gl(n,e){const t=vh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(st(t,r)&&r in i?t:i,r,s)}const Sh={get:Gl(!1,!1)},bh={get:Gl(!1,!0)},Mh={get:Gl(!0,!1)};const wf=new WeakMap,Cf=new WeakMap,Rf=new WeakMap,yh=new WeakMap;function Eh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Th(n){return n.__v_skip||!Object.isExtensible(n)?0:Eh(Kd(n))}function Cr(n){return ri(n)?n:Wl(n,!1,mh,Sh,wf)}function Ah(n){return Wl(n,!1,gh,bh,Cf)}function Fa(n){return Wl(n,!0,xh,Mh,Rf)}function Wl(n,e,t,i,r){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Th(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Jn(n){return ri(n)?Jn(n.__v_raw):!!(n&&n.__v_isReactive)}function ri(n){return!!(n&&n.__v_isReadonly)}function on(n){return!!(n&&n.__v_isShallow)}function Do(n){return n?!!n.__v_raw:!1}function it(n){const e=n&&n.__v_raw;return e?it(e):n}function Xl(n){return!st(n,"__v_skip")&&Object.isExtensible(n)&&cf(n,"__v_skip",!0),n}const Tn=n=>pt(n)?Cr(n):n,Rr=n=>pt(n)?Fa(n):n;function xt(n){return n?n.__v_isRef===!0:!1}function Oe(n){return wh(n,!1)}function wh(n,e){return xt(n)?n:new Ch(n,e)}class Ch{constructor(e,t){this.dep=new Hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:Tn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||on(e)||ri(e);e=i?e:it(e),Ei(e,t)&&(this._rawValue=e,this._value=i?e:Tn(e),this.dep.trigger())}}function Qe(n){return xt(n)?n.value:n}const Rh={get:(n,e,t)=>e==="__v_raw"?n:Qe(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return xt(r)&&!xt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Pf(n){return Jn(n)?n:new Proxy(n,Rh)}function Ph(n){const e=Ve(n)?new Array(n.length):{};for(const t in n)e[t]=Ih(n,t);return e}class Dh{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=it(e);let r=!0,s=e;if(!Ve(e)||!Ao(String(t)))do r=!Do(s)||on(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=Qe(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&xt(this._raw[this._key])){const t=this._object[this._key];if(xt(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return ch(this._raw,this._key)}}function Ih(n,e,t){return new Dh(n,e,t)}class Lh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return _f(this,!0),!0}get value(){const e=this.dep.track();return bf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Uh(n,e,t=!1){let i,r;return $e(n)?i=n:(i=n.get,r=n.set),new Lh(i,r,t)}const Fs={},go=new WeakMap;let Hi;function Nh(n,e=!1,t=Hi){if(t){let i=go.get(t);i||go.set(t,i=[]),i.push(n)}}function Fh(n,e,t=dt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=w=>r?w:on(w)||r===!1||r===0?jn(w,1):jn(w);let u,f,h,p,v=!1,S=!1;if(xt(n)?(f=()=>n.value,v=on(n)):Jn(n)?(f=()=>c(n),v=!0):Ve(n)?(S=!0,v=n.some(w=>Jn(w)||on(w)),f=()=>n.map(w=>{if(xt(w))return w.value;if(Jn(w))return c(w);if($e(w))return l?l(w,2):w()})):$e(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ni();try{h()}finally{ii()}}const w=Hi;Hi=u;try{return l?l(n,3,[p]):n(p)}finally{Hi=w}}:f=Mn,e&&r){const w=f,I=r===!0?1/0:r;f=()=>jn(w(),I)}const m=mf(),d=()=>{u.stop(),m&&m.active&&Ol(m.effects,u)};if(s&&e){const w=e;e=(...I)=>{w(...I),d()}}let T=S?new Array(n.length).fill(Fs):Fs;const A=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(e){const I=u.run();if(r||v||(S?I.some((R,N)=>Ei(R,T[N])):Ei(I,T))){h&&h();const R=Hi;Hi=u;try{const N=[I,T===Fs?void 0:S&&T[0]===Fs?[]:T,p];T=I,l?l(e,3,N):e(...N)}finally{Hi=R}}}else u.run()};return a&&a(A),u=new xf(f),u.scheduler=o?()=>o(A,!1):A,p=w=>Nh(w,!1,u),h=u.onStop=()=>{const w=go.get(u);if(w){if(l)l(w,4);else for(const I of w)I();go.delete(u)}},e?i?A(!0):T=u.run():o?o(A.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function jn(n,e=1/0,t){if(e<=0||!pt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,xt(n))jn(n.value,e,t);else if(Ve(n))for(let i=0;i<n.length;i++)jn(n[i],e,t);else if(Or(n)||yr(n))n.forEach(i=>{jn(i,e,t)});else if(af(n)){for(const i in n)jn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&jn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ws(n,e,t,i){try{return i?n(...i):n()}catch(r){Io(r,e,t)}}function On(n,e,t,i){if($e(n)){const r=ws(n,e,t,i);return r&&sf(r)&&r.catch(s=>{Io(s,e,t)}),r}if(Ve(n)){const r=[];for(let s=0;s<n.length;s++)r.push(On(n[s],e,t,i));return r}}function Io(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||dt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){ni(),ws(s,null,10,[n,l,c]),ii();return}}Oh(n,t,r,i,o)}function Oh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const $t=[];let Cn=-1;const Er=[];let _i=null,gr=0;const Df=Promise.resolve();let _o=null;function ql(n){const e=_o||Df;return n?e.then(this?n.bind(this):n):e}function Bh(n){let e=Cn+1,t=$t.length;for(;e<t;){const i=e+t>>>1,r=$t[i],s=hs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function $l(n){if(!(n.flags&1)){const e=hs(n),t=$t[$t.length-1];!t||!(n.flags&2)&&e>=hs(t)?$t.push(n):$t.splice(Bh(e),0,n),n.flags|=1,If()}}function If(){_o||(_o=Df.then(Uf))}function zh(n){Ve(n)?Er.push(...n):_i&&n.id===-1?_i.splice(gr+1,0,n):n.flags&1||(Er.push(n),n.flags|=1),If()}function Ec(n,e,t=Cn+1){for(;t<$t.length;t++){const i=$t[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;$t.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Lf(n){if(Er.length){const e=[...new Set(Er)].sort((t,i)=>hs(t)-hs(i));if(Er.length=0,_i){_i.push(...e);return}for(_i=e,gr=0;gr<_i.length;gr++){const t=_i[gr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}_i=null,gr=0}}const hs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Uf(n){const e=Mn;try{for(Cn=0;Cn<$t.length;Cn++){const t=$t[Cn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ws(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Cn<$t.length;Cn++){const t=$t[Cn];t&&(t.flags&=-2)}Cn=-1,$t.length=0,Lf(),_o=null,($t.length||Er.length)&&Uf()}}let hn=null,Nf=null;function vo(n){const e=hn;return hn=n,Nf=n&&n.type.__scopeId||null,e}function Vh(n,e=hn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Lc(-1);const s=vo(e);let o;try{o=n(...r)}finally{vo(s),i._d&&Lc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Tt(n,e){if(hn===null)return n;const t=Bo(hn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=dt]=e[r];s&&($e(s)&&(s={mounted:s,updated:s}),s.deep&&jn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ui(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ni(),On(l,t,8,[n.el,a,n,e]),ii())}}const kh=Symbol("_vte"),Hh=n=>n.__isTeleport,Gh=Symbol("_leaveCb");function jl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,jl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Pi(n,e){return $e(n)?(()=>Lt({name:n.name},e,{setup:n}))():n}function Ff(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const So=new WeakMap;function ts(n,e,t,i,r=!1){if(Ve(n)){n.forEach((v,S)=>ts(v,e&&(Ve(e)?e[S]:e),t,i,r));return}if(ns(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ts(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Bo(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===dt?a.refs={}:a.refs,f=a.setupState,h=it(f),p=f===dt?rf:v=>st(h,v);if(c!=null&&c!==l){if(Tc(e),Rt(c))u[c]=null,p(c)&&(f[c]=null);else if(xt(c)){c.value=null;const v=e;v.k&&(u[v.k]=null)}}if($e(l))ws(l,a,12,[o,u]);else{const v=Rt(l),S=xt(l);if(v||S){const m=()=>{if(n.f){const d=v?p(l)?f[l]:u[l]:l.value;if(r)Ve(d)&&Ol(d,s);else if(Ve(d))d.includes(s)||d.push(s);else if(v)u[l]=[s],p(l)&&(f[l]=u[l]);else{const T=[s];l.value=T,n.k&&(u[n.k]=T)}}else v?(u[l]=o,p(l)&&(f[l]=o)):S&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const d=()=>{m(),So.delete(n)};d.id=-1,So.set(n,d),nn(d,t)}else Tc(n),m()}}}function Tc(n){const e=So.get(n);e&&(e.flags|=8,So.delete(n))}Ro().requestIdleCallback;Ro().cancelIdleCallback;const ns=n=>!!n.type.__asyncLoader,Of=n=>n.type.__isKeepAlive;function Wh(n,e){Bf(n,"a",e)}function Xh(n,e){Bf(n,"da",e)}function Bf(n,e,t=jt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Lo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Of(r.parent.vnode)&&qh(i,e,t,r),r=r.parent}}function qh(n,e,t,i){const r=Lo(e,n,i,!0);No(()=>{Ol(i[e],r)},t)}function Lo(n,e,t=jt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ni();const a=Cs(t),l=On(e,t,n,o);return a(),ii(),l});return i?r.unshift(s):r.push(s),s}}const li=n=>(e,t=jt)=>{(!ms||n==="sp")&&Lo(n,(...i)=>e(...i),t)},$h=li("bm"),Uo=li("m"),jh=li("bu"),Yh=li("u"),Kh=li("bum"),No=li("um"),Zh=li("sp"),Jh=li("rtg"),Qh=li("rtc");function ep(n,e=jt){Lo("ec",n,e)}const tp=Symbol.for("v-ndc");function vi(n,e,t,i){let r;const s=t&&t[i],o=Ve(n);if(o||Rt(n)){const a=o&&Jn(n);let l=!1,c=!1;a&&(l=!on(n),c=ri(n),n=Po(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Rr(Tn(n[u])):Tn(n[u]):n[u],u,void 0,s&&s[u])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(pt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s&&s[l]));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s&&s[l])}}else r=[];return t&&(t[i]=r),r}const Oa=n=>n?rd(n)?Bo(n):Oa(n.parent):null,is=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Oa(n.parent),$root:n=>Oa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Yl(n),$forceUpdate:n=>n.f||(n.f=()=>{$l(n.update)}),$nextTick:n=>n.n||(n.n=ql.bind(n.proxy)),$watch:n=>mp.bind(n)}),Jo=(n,e)=>n!==dt&&!n.__isScriptSetup&&st(n,e),np={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Jo(i,e))return o[e]=1,i[e];if(r!==dt&&st(r,e))return o[e]=2,r[e];if(st(s,e))return o[e]=3,s[e];if(t!==dt&&st(t,e))return o[e]=4,t[e];Ba&&(o[e]=0)}}const c=is[e];let u,f;if(c)return e==="$attrs"&&zt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==dt&&st(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,st(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Jo(r,e)?(r[e]=t,!0):i!==dt&&st(i,e)?(i[e]=t,!0):st(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==dt&&a[0]!=="$"&&st(n,a)||Jo(e,a)||st(s,a)||st(i,a)||st(is,a)||st(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:st(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ac(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ba=!0;function ip(n){const e=Yl(n),t=n.proxy,i=n.ctx;Ba=!1,e.beforeCreate&&wc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:S,deactivated:m,beforeDestroy:d,beforeUnmount:T,destroyed:A,unmounted:w,render:I,renderTracked:R,renderTriggered:N,errorCaptured:B,serverPrefetch:E,expose:b,inheritAttrs:C,components:$,directives:G,filters:O}=e;if(c&&rp(c,i,null),o)for(const se in o){const W=o[se];$e(W)&&(i[se]=W.bind(t))}if(r){const se=r.call(t,t);pt(se)&&(n.data=Cr(se))}if(Ba=!0,s)for(const se in s){const W=s[se],de=$e(W)?W.bind(t,t):$e(W.get)?W.get.bind(t,t):Mn,me=!$e(W)&&$e(W.set)?W.set.bind(t):Mn,Re=Yi({get:de,set:me});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>Re.value,set:ke=>Re.value=ke})}if(a)for(const se in a)zf(a[se],i,t,se);if(l){const se=$e(l)?l.call(t):l;Reflect.ownKeys(se).forEach(W=>{up(W,se[W])})}u&&wc(u,n,"c");function k(se,W){Ve(W)?W.forEach(de=>se(de.bind(t))):W&&se(W.bind(t))}if(k($h,f),k(Uo,h),k(jh,p),k(Yh,v),k(Wh,S),k(Xh,m),k(ep,B),k(Qh,R),k(Jh,N),k(Kh,T),k(No,w),k(Zh,E),Ve(b))if(b.length){const se=n.exposed||(n.exposed={});b.forEach(W=>{Object.defineProperty(se,W,{get:()=>t[W],set:de=>t[W]=de,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===Mn&&(n.render=I),C!=null&&(n.inheritAttrs=C),$&&(n.components=$),G&&(n.directives=G),E&&Ff(n)}function rp(n,e,t=Mn){Ve(n)&&(n=za(n));for(const i in n){const r=n[i];let s;pt(r)?"default"in r?s=rs(r.from||i,r.default,!0):s=rs(r.from||i):s=rs(r),xt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function wc(n,e,t){On(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function zf(n,e,t,i){let r=i.includes(".")?kf(t,i):()=>t[i];if(Rt(n)){const s=e[n];$e(s)&&In(r,s)}else if($e(n))In(r,n.bind(t));else if(pt(n))if(Ve(n))n.forEach(s=>zf(s,e,t,i));else{const s=$e(n.handler)?n.handler.bind(t):e[n.handler];$e(s)&&In(r,s,n)}}function Yl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>bo(l,c,o,!0)),bo(l,e,o)),pt(e)&&s.set(e,l),l}function bo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&bo(n,s,t,!0),r&&r.forEach(o=>bo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=sp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const sp={data:Cc,props:Rc,emits:Rc,methods:Kr,computed:Kr,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:Kr,directives:Kr,watch:ap,provide:Cc,inject:op};function Cc(n,e){return e?n?function(){return Lt($e(n)?n.call(this,this):n,$e(e)?e.call(this,this):e)}:e:n}function op(n,e){return Kr(za(n),za(e))}function za(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Gt(n,e){return n?[...new Set([].concat(n,e))]:e}function Kr(n,e){return n?Lt(Object.create(null),n,e):e}function Rc(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:Lt(Object.create(null),Ac(n),Ac(e??{})):e}function ap(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const i in e)t[i]=Gt(n[i],e[i]);return t}function Vf(){return{app:null,config:{isNativeTag:rf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lp=0;function cp(n,e){return function(i,r=null){$e(i)||(i=Lt({},i)),r!=null&&!pt(r)&&(r=null);const s=Vf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:lp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:$p,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&$e(u.install)?(o.add(u),u.install(c,...f)):$e(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||mn(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(p,u):n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Bo(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(On(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ji;ji=c;try{return u()}finally{ji=f}}};return c}}let ji=null;function up(n,e){if(jt){let t=jt.provides;const i=jt.parent&&jt.parent.provides;i===t&&(t=jt.provides=Object.create(i)),t[n]=e}}function rs(n,e,t=!1){const i=id();if(i||ji){let r=ji?ji._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&$e(e)?e.call(i&&i.proxy):e}}function fp(){return!!(id()||ji)}const dp=Symbol.for("v-scx"),hp=()=>rs(dp);function pp(n,e){return Kl(n,null,e)}function In(n,e,t){return Kl(n,e,t)}function Kl(n,e,t=dt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Lt({},t),l=e&&i||!e&&s!=="post";let c;if(ms){if(s==="sync"){const p=hp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Mn,p.resume=Mn,p.pause=Mn,p}}const u=jt;a.call=(p,v,S)=>On(p,u,v,S);let f=!1;s==="post"?a.scheduler=p=>{nn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,v)=>{v?p():$l(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Fh(n,e,a);return ms&&(c?c.push(h):l&&h()),h}function mp(n,e,t){const i=this.proxy,r=Rt(n)?n.includes(".")?kf(i,n):()=>i[n]:n.bind(i,i);let s;$e(e)?s=e:(s=e.handler,t=e);const o=Cs(this),a=Kl(r,s.bind(i),t);return o(),a}function kf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const xp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ai(e)}Modifiers`]||n[`${Ri(e)}Modifiers`];function gp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||dt;let r=t;const s=e.startsWith("update:"),o=s&&xp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Rt(u)?u.trim():u)),o.number&&(r=t.map(Co)));let a,l=i[a=$o(e)]||i[a=$o(Ai(e))];!l&&s&&(l=i[a=$o(Ri(e))]),l&&On(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,On(c,n,6,r)}}const _p=new WeakMap;function Hf(n,e,t=!1){const i=t?_p:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!$e(n)){const l=c=>{const u=Hf(c,e,!0);u&&(a=!0,Lt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(pt(n)&&i.set(n,null),null):(Ve(s)?s.forEach(l=>o[l]=null):Lt(o,s),pt(n)&&i.set(n,o),o)}function Fo(n,e){return!n||!To(e)?!1:(e=e.slice(2).replace(/Once$/,""),st(n,e[0].toLowerCase()+e.slice(1))||st(n,Ri(e))||st(n,e))}function Qo(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:v,inheritAttrs:S}=n,m=vo(n);let d,T;try{if(t.shapeFlag&4){const w=r||i,I=w;d=Rn(c.call(I,w,u,f,p,h,v)),T=a}else{const w=e;d=Rn(w.length>1?w(f,{attrs:a,slots:o,emit:l}):w(f,null)),T=e.props?a:vp(a)}}catch(w){ss.length=0,Io(w,n,1),d=mn(wi)}let A=d;if(T&&S!==!1){const w=Object.keys(T),{shapeFlag:I}=A;w.length&&I&7&&(s&&w.some(Fl)&&(T=Sp(T,s)),A=Pr(A,T,!1,!0))}return t.dirs&&(A=Pr(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&jl(A,t.transition),d=A,vo(m),d}const vp=n=>{let e;for(const t in n)(t==="class"||t==="style"||To(t))&&((e||(e={}))[t]=n[t]);return e},Sp=(n,e)=>{const t={};for(const i in n)(!Fl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function bp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Pc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Fo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Pc(i,o,c):!0:!!o;return!1}function Pc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Fo(t,s))return!0}return!1}function Mp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Gf={},Wf=()=>Object.create(Gf),Xf=n=>Object.getPrototypeOf(n)===Gf;function yp(n,e,t,i=!1){const r={},s=Wf();n.propsDefaults=Object.create(null),qf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Ah(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ep(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=it(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Fo(n.emitsOptions,h))continue;const p=e[h];if(l)if(st(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=Ai(h);r[v]=Va(l,a,v,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{qf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!st(e,f)&&((u=Ri(f))===f||!st(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Va(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!st(e,f))&&(delete s[f],c=!0)}c&&$n(n.attrs,"set","")}function qf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Jr(l))continue;const c=e[l];let u;r&&st(r,u=Ai(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Fo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=it(t),c=a||dt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Va(r,l,f,c[f],n,!st(c,f))}}return o}function Va(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=st(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$e(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Cs(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ri(t))&&(i=!0))}return i}const Tp=new WeakMap;function $f(n,e,t=!1){const i=t?Tp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!$e(n)){const u=f=>{l=!0;const[h,p]=$f(f,e,!0);Lt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return pt(n)&&i.set(n,Mr),Mr;if(Ve(s))for(let u=0;u<s.length;u++){const f=Ai(s[u]);Dc(f)&&(o[f]=dt)}else if(s)for(const u in s){const f=Ai(u);if(Dc(f)){const h=s[u],p=o[f]=Ve(h)||$e(h)?{type:h}:Lt({},h),v=p.type;let S=!1,m=!0;if(Ve(v))for(let d=0;d<v.length;++d){const T=v[d],A=$e(T)&&T.name;if(A==="Boolean"){S=!0;break}else A==="String"&&(m=!1)}else S=$e(v)&&v.name==="Boolean";p[0]=S,p[1]=m,(S||st(p,"default"))&&a.push(f)}}const c=[o,a];return pt(n)&&i.set(n,c),c}function Dc(n){return n[0]!=="$"&&!Jr(n)}const Zl=n=>n==="_"||n==="_ctx"||n==="$stable",Jl=n=>Ve(n)?n.map(Rn):[Rn(n)],Ap=(n,e,t)=>{if(e._n)return e;const i=Vh((...r)=>Jl(e(...r)),t);return i._c=!1,i},jf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Zl(r))continue;const s=n[r];if($e(s))e[r]=Ap(r,s,i);else if(s!=null){const o=Jl(s);e[r]=()=>o}}},Yf=(n,e)=>{const t=Jl(e);n.slots.default=()=>t},Kf=(n,e,t)=>{for(const i in e)(t||!Zl(i))&&(n[i]=e[i])},wp=(n,e,t)=>{const i=n.slots=Wf();if(n.vnode.shapeFlag&32){const r=e._;r?(Kf(i,e,t),t&&cf(i,"_",r,!0)):jf(e,i)}else e&&Yf(n,e)},Cp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=dt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Kf(r,e,t):(s=!e.$stable,jf(e,r)),o=e}else e&&(Yf(n,e),o={default:1});if(s)for(const a in r)!Zl(a)&&o[a]==null&&delete r[a]},nn=Lp;function Rp(n){return Pp(n)}function Pp(n,e){const t=Ro();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Mn,insertStaticContent:v}=n,S=(x,P,_,D=null,z=null,K=null,Y=void 0,fe=null,J=!!P.dynamicChildren)=>{if(x===P)return;x&&!Wr(x,P)&&(D=le(x),ke(x,z,K,!0),x=null),P.patchFlag===-2&&(J=!1,P.dynamicChildren=null);const{type:Z,ref:y,shapeFlag:g}=P;switch(Z){case Oo:m(x,P,_,D);break;case wi:d(x,P,_,D);break;case oo:x==null&&T(P,_,D,Y);break;case bt:$(x,P,_,D,z,K,Y,fe,J);break;default:g&1?I(x,P,_,D,z,K,Y,fe,J):g&6?G(x,P,_,D,z,K,Y,fe,J):(g&64||g&128)&&Z.process(x,P,_,D,z,K,Y,fe,J,ne)}y!=null&&z?ts(y,x&&x.ref,K,P||x,!P):y==null&&x&&x.ref!=null&&ts(x.ref,null,K,x,!0)},m=(x,P,_,D)=>{if(x==null)i(P.el=a(P.children),_,D);else{const z=P.el=x.el;P.children!==x.children&&c(z,P.children)}},d=(x,P,_,D)=>{x==null?i(P.el=l(P.children||""),_,D):P.el=x.el},T=(x,P,_,D)=>{[x.el,x.anchor]=v(x.children,P,_,D,x.el,x.anchor)},A=({el:x,anchor:P},_,D)=>{let z;for(;x&&x!==P;)z=h(x),i(x,_,D),x=z;i(P,_,D)},w=({el:x,anchor:P})=>{let _;for(;x&&x!==P;)_=h(x),r(x),x=_;r(P)},I=(x,P,_,D,z,K,Y,fe,J)=>{if(P.type==="svg"?Y="svg":P.type==="math"&&(Y="mathml"),x==null)R(P,_,D,z,K,Y,fe,J);else{const Z=x.el&&x.el._isVueCE?x.el:null;try{Z&&Z._beginPatch(),E(x,P,z,K,Y,fe,J)}finally{Z&&Z._endPatch()}}},R=(x,P,_,D,z,K,Y,fe)=>{let J,Z;const{props:y,shapeFlag:g,transition:L,dirs:X}=x;if(J=x.el=o(x.type,K,y&&y.is,y),g&8?u(J,x.children):g&16&&B(x.children,J,null,D,z,ea(x,K),Y,fe),X&&Ui(x,null,D,"created"),N(J,x,x.scopeId,Y,D),y){for(const q in y)q!=="value"&&!Jr(q)&&s(J,q,null,y[q],K,D);"value"in y&&s(J,"value",null,y.value,K),(Z=y.onVnodeBeforeMount)&&wn(Z,D,x)}X&&Ui(x,null,D,"beforeMount");const ie=Dp(z,L);ie&&L.beforeEnter(J),i(J,P,_),((Z=y&&y.onVnodeMounted)||ie||X)&&nn(()=>{Z&&wn(Z,D,x),ie&&L.enter(J),X&&Ui(x,null,D,"mounted")},z)},N=(x,P,_,D,z)=>{if(_&&p(x,_),D)for(let K=0;K<D.length;K++)p(x,D[K]);if(z){let K=z.subTree;if(P===K||Qf(K.type)&&(K.ssContent===P||K.ssFallback===P)){const Y=z.vnode;N(x,Y,Y.scopeId,Y.slotScopeIds,z.parent)}}},B=(x,P,_,D,z,K,Y,fe,J=0)=>{for(let Z=J;Z<x.length;Z++){const y=x[Z]=fe?Si(x[Z]):Rn(x[Z]);S(null,y,P,_,D,z,K,Y,fe)}},E=(x,P,_,D,z,K,Y)=>{const fe=P.el=x.el;let{patchFlag:J,dynamicChildren:Z,dirs:y}=P;J|=x.patchFlag&16;const g=x.props||dt,L=P.props||dt;let X;if(_&&Ni(_,!1),(X=L.onVnodeBeforeUpdate)&&wn(X,_,P,x),y&&Ui(P,x,_,"beforeUpdate"),_&&Ni(_,!0),(g.innerHTML&&L.innerHTML==null||g.textContent&&L.textContent==null)&&u(fe,""),Z?b(x.dynamicChildren,Z,fe,_,D,ea(P,z),K):Y||W(x,P,fe,null,_,D,ea(P,z),K,!1),J>0){if(J&16)C(fe,g,L,_,z);else if(J&2&&g.class!==L.class&&s(fe,"class",null,L.class,z),J&4&&s(fe,"style",g.style,L.style,z),J&8){const ie=P.dynamicProps;for(let q=0;q<ie.length;q++){const ge=ie[q],pe=g[ge],we=L[ge];(we!==pe||ge==="value")&&s(fe,ge,pe,we,z,_)}}J&1&&x.children!==P.children&&u(fe,P.children)}else!Y&&Z==null&&C(fe,g,L,_,z);((X=L.onVnodeUpdated)||y)&&nn(()=>{X&&wn(X,_,P,x),y&&Ui(P,x,_,"updated")},D)},b=(x,P,_,D,z,K,Y)=>{for(let fe=0;fe<P.length;fe++){const J=x[fe],Z=P[fe],y=J.el&&(J.type===bt||!Wr(J,Z)||J.shapeFlag&198)?f(J.el):_;S(J,Z,y,null,D,z,K,Y,!0)}},C=(x,P,_,D,z)=>{if(P!==_){if(P!==dt)for(const K in P)!Jr(K)&&!(K in _)&&s(x,K,P[K],null,z,D);for(const K in _){if(Jr(K))continue;const Y=_[K],fe=P[K];Y!==fe&&K!=="value"&&s(x,K,fe,Y,z,D)}"value"in _&&s(x,"value",P.value,_.value,z)}},$=(x,P,_,D,z,K,Y,fe,J)=>{const Z=P.el=x?x.el:a(""),y=P.anchor=x?x.anchor:a("");let{patchFlag:g,dynamicChildren:L,slotScopeIds:X}=P;X&&(fe=fe?fe.concat(X):X),x==null?(i(Z,_,D),i(y,_,D),B(P.children||[],_,y,z,K,Y,fe,J)):g>0&&g&64&&L&&x.dynamicChildren?(b(x.dynamicChildren,L,_,z,K,Y,fe),(P.key!=null||z&&P===z.subTree)&&Zf(x,P,!0)):W(x,P,_,y,z,K,Y,fe,J)},G=(x,P,_,D,z,K,Y,fe,J)=>{P.slotScopeIds=fe,x==null?P.shapeFlag&512?z.ctx.activate(P,_,D,Y,J):O(P,_,D,z,K,Y,J):re(x,P,J)},O=(x,P,_,D,z,K,Y)=>{const fe=x.component=kp(x,D,z);if(Of(x)&&(fe.ctx.renderer=ne),Hp(fe,!1,Y),fe.asyncDep){if(z&&z.registerDep(fe,k,Y),!x.el){const J=fe.subTree=mn(wi);d(null,J,P,_),x.placeholder=J.el}}else k(fe,x,P,_,z,K,Y)},re=(x,P,_)=>{const D=P.component=x.component;if(bp(x,P,_))if(D.asyncDep&&!D.asyncResolved){se(D,P,_);return}else D.next=P,D.update();else P.el=x.el,D.vnode=P},k=(x,P,_,D,z,K,Y)=>{const fe=()=>{if(x.isMounted){let{next:g,bu:L,u:X,parent:ie,vnode:q}=x;{const ce=Jf(x);if(ce){g&&(g.el=q.el,se(x,g,Y)),ce.asyncDep.then(()=>{x.isUnmounted||fe()});return}}let ge=g,pe;Ni(x,!1),g?(g.el=q.el,se(x,g,Y)):g=q,L&&so(L),(pe=g.props&&g.props.onVnodeBeforeUpdate)&&wn(pe,ie,g,q),Ni(x,!0);const we=Qo(x),Ae=x.subTree;x.subTree=we,S(Ae,we,f(Ae.el),le(Ae),x,z,K),g.el=we.el,ge===null&&Mp(x,we.el),X&&nn(X,z),(pe=g.props&&g.props.onVnodeUpdated)&&nn(()=>wn(pe,ie,g,q),z)}else{let g;const{el:L,props:X}=P,{bm:ie,m:q,parent:ge,root:pe,type:we}=x,Ae=ns(P);if(Ni(x,!1),ie&&so(ie),!Ae&&(g=X&&X.onVnodeBeforeMount)&&wn(g,ge,P),Ni(x,!0),L&&j){const ce=()=>{x.subTree=Qo(x),j(L,x.subTree,x,z,null)};Ae&&we.__asyncHydrate?we.__asyncHydrate(L,x,ce):ce()}else{pe.ce&&pe.ce._def.shadowRoot!==!1&&pe.ce._injectChildStyle(we);const ce=x.subTree=Qo(x);S(null,ce,_,D,x,z,K),P.el=ce.el}if(q&&nn(q,z),!Ae&&(g=X&&X.onVnodeMounted)){const ce=P;nn(()=>wn(g,ge,ce),z)}(P.shapeFlag&256||ge&&ns(ge.vnode)&&ge.vnode.shapeFlag&256)&&x.a&&nn(x.a,z),x.isMounted=!0,P=_=D=null}};x.scope.on();const J=x.effect=new xf(fe);x.scope.off();const Z=x.update=J.run.bind(J),y=x.job=J.runIfDirty.bind(J);y.i=x,y.id=x.uid,J.scheduler=()=>$l(y),Ni(x,!0),Z()},se=(x,P,_)=>{P.component=x;const D=x.vnode.props;x.vnode=P,x.next=null,Ep(x,P.props,D,_),Cp(x,P.children,_),ni(),Ec(x),ii()},W=(x,P,_,D,z,K,Y,fe,J=!1)=>{const Z=x&&x.children,y=x?x.shapeFlag:0,g=P.children,{patchFlag:L,shapeFlag:X}=P;if(L>0){if(L&128){me(Z,g,_,D,z,K,Y,fe,J);return}else if(L&256){de(Z,g,_,D,z,K,Y,fe,J);return}}X&8?(y&16&&oe(Z,z,K),g!==Z&&u(_,g)):y&16?X&16?me(Z,g,_,D,z,K,Y,fe,J):oe(Z,z,K,!0):(y&8&&u(_,""),X&16&&B(g,_,D,z,K,Y,fe,J))},de=(x,P,_,D,z,K,Y,fe,J)=>{x=x||Mr,P=P||Mr;const Z=x.length,y=P.length,g=Math.min(Z,y);let L;for(L=0;L<g;L++){const X=P[L]=J?Si(P[L]):Rn(P[L]);S(x[L],X,_,null,z,K,Y,fe,J)}Z>y?oe(x,z,K,!0,!1,g):B(P,_,D,z,K,Y,fe,J,g)},me=(x,P,_,D,z,K,Y,fe,J)=>{let Z=0;const y=P.length;let g=x.length-1,L=y-1;for(;Z<=g&&Z<=L;){const X=x[Z],ie=P[Z]=J?Si(P[Z]):Rn(P[Z]);if(Wr(X,ie))S(X,ie,_,null,z,K,Y,fe,J);else break;Z++}for(;Z<=g&&Z<=L;){const X=x[g],ie=P[L]=J?Si(P[L]):Rn(P[L]);if(Wr(X,ie))S(X,ie,_,null,z,K,Y,fe,J);else break;g--,L--}if(Z>g){if(Z<=L){const X=L+1,ie=X<y?P[X].el:D;for(;Z<=L;)S(null,P[Z]=J?Si(P[Z]):Rn(P[Z]),_,ie,z,K,Y,fe,J),Z++}}else if(Z>L)for(;Z<=g;)ke(x[Z],z,K,!0),Z++;else{const X=Z,ie=Z,q=new Map;for(Z=ie;Z<=L;Z++){const Pe=P[Z]=J?Si(P[Z]):Rn(P[Z]);Pe.key!=null&&q.set(Pe.key,Z)}let ge,pe=0;const we=L-ie+1;let Ae=!1,ce=0;const xe=new Array(we);for(Z=0;Z<we;Z++)xe[Z]=0;for(Z=X;Z<=g;Z++){const Pe=x[Z];if(pe>=we){ke(Pe,z,K,!0);continue}let ve;if(Pe.key!=null)ve=q.get(Pe.key);else for(ge=ie;ge<=L;ge++)if(xe[ge-ie]===0&&Wr(Pe,P[ge])){ve=ge;break}ve===void 0?ke(Pe,z,K,!0):(xe[ve-ie]=Z+1,ve>=ce?ce=ve:Ae=!0,S(Pe,P[ve],_,null,z,K,Y,fe,J),pe++)}const Be=Ae?Ip(xe):Mr;for(ge=Be.length-1,Z=we-1;Z>=0;Z--){const Pe=ie+Z,ve=P[Pe],He=P[Pe+1],U=Pe+1<y?He.el||He.placeholder:D;xe[Z]===0?S(null,ve,_,U,z,K,Y,fe,J):Ae&&(ge<0||Z!==Be[ge]?Re(ve,_,U,2):ge--)}}},Re=(x,P,_,D,z=null)=>{const{el:K,type:Y,transition:fe,children:J,shapeFlag:Z}=x;if(Z&6){Re(x.component.subTree,P,_,D);return}if(Z&128){x.suspense.move(P,_,D);return}if(Z&64){Y.move(x,P,_,ne);return}if(Y===bt){i(K,P,_);for(let g=0;g<J.length;g++)Re(J[g],P,_,D);i(x.anchor,P,_);return}if(Y===oo){A(x,P,_);return}if(D!==2&&Z&1&&fe)if(D===0)fe.beforeEnter(K),i(K,P,_),nn(()=>fe.enter(K),z);else{const{leave:g,delayLeave:L,afterLeave:X}=fe,ie=()=>{x.ctx.isUnmounted?r(K):i(K,P,_)},q=()=>{K._isLeaving&&K[Gh](!0),g(K,()=>{ie(),X&&X()})};L?L(K,ie,q):q()}else i(K,P,_)},ke=(x,P,_,D=!1,z=!1)=>{const{type:K,props:Y,ref:fe,children:J,dynamicChildren:Z,shapeFlag:y,patchFlag:g,dirs:L,cacheIndex:X}=x;if(g===-2&&(z=!1),fe!=null&&(ni(),ts(fe,null,_,x,!0),ii()),X!=null&&(P.renderCache[X]=void 0),y&256){P.ctx.deactivate(x);return}const ie=y&1&&L,q=!ns(x);let ge;if(q&&(ge=Y&&Y.onVnodeBeforeUnmount)&&wn(ge,P,x),y&6)tt(x.component,_,D);else{if(y&128){x.suspense.unmount(_,D);return}ie&&Ui(x,null,P,"beforeUnmount"),y&64?x.type.remove(x,P,_,ne,D):Z&&!Z.hasOnce&&(K!==bt||g>0&&g&64)?oe(Z,P,_,!1,!0):(K===bt&&g&384||!z&&y&16)&&oe(J,P,_),D&&Ze(x)}(q&&(ge=Y&&Y.onVnodeUnmounted)||ie)&&nn(()=>{ge&&wn(ge,P,x),ie&&Ui(x,null,P,"unmounted")},_)},Ze=x=>{const{type:P,el:_,anchor:D,transition:z}=x;if(P===bt){et(_,D);return}if(P===oo){w(x);return}const K=()=>{r(_),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(x.shapeFlag&1&&z&&!z.persisted){const{leave:Y,delayLeave:fe}=z,J=()=>Y(_,K);fe?fe(x.el,K,J):J()}else K()},et=(x,P)=>{let _;for(;x!==P;)_=h(x),r(x),x=_;r(P)},tt=(x,P,_)=>{const{bum:D,scope:z,job:K,subTree:Y,um:fe,m:J,a:Z}=x;Ic(J),Ic(Z),D&&so(D),z.stop(),K&&(K.flags|=8,ke(Y,x,P,_)),fe&&nn(fe,P),nn(()=>{x.isUnmounted=!0},P)},oe=(x,P,_,D=!1,z=!1,K=0)=>{for(let Y=K;Y<x.length;Y++)ke(x[Y],P,_,D,z)},le=x=>{if(x.shapeFlag&6)return le(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const P=h(x.anchor||x.el),_=P&&P[kh];return _?h(_):P};let Ee=!1;const Ue=(x,P,_)=>{x==null?P._vnode&&ke(P._vnode,null,null,!0):S(P._vnode||null,x,P,null,null,null,_),P._vnode=x,Ee||(Ee=!0,Ec(),Lf(),Ee=!1)},ne={p:S,um:ke,m:Re,r:Ze,mt:O,mc:B,pc:W,pbc:b,n:le,o:n};let ae,j;return e&&([ae,j]=e(ne)),{render:Ue,hydrate:ae,createApp:cp(Ue,ae)}}function ea({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ni({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Dp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Zf(n,e,t=!1){const i=n.children,r=e.children;if(Ve(i)&&Ve(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Si(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Zf(o,a)),a.type===Oo&&a.patchFlag!==-1&&(a.el=o.el),a.type===wi&&!a.el&&(a.el=o.el)}}function Ip(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Jf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jf(e)}function Ic(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Qf=n=>n.__isSuspense;function Lp(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):zh(n)}const bt=Symbol.for("v-fgt"),Oo=Symbol.for("v-txt"),wi=Symbol.for("v-cmt"),oo=Symbol.for("v-stc"),ss=[];let sn=null;function Le(n=!1){ss.push(sn=n?null:[])}function Up(){ss.pop(),sn=ss[ss.length-1]||null}let ps=1;function Lc(n,e=!1){ps+=n,n<0&&sn&&e&&(sn.hasOnce=!0)}function ed(n){return n.dynamicChildren=ps>0?sn||Mr:null,Up(),ps>0&&sn&&sn.push(n),n}function Ne(n,e,t,i,r,s){return ed(F(n,e,t,i,r,s,!0))}function br(n,e,t,i,r){return ed(mn(n,e,t,i,r,!0))}function td(n){return n?n.__v_isVNode===!0:!1}function Wr(n,e){return n.type===e.type&&n.key===e.key}const nd=({key:n})=>n??null,ao=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||xt(n)||$e(n)?{i:hn,r:n,k:e,f:!!t}:n:null);function F(n,e=null,t=null,i=0,r=null,s=n===bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&nd(e),ref:e&&ao(e),scopeId:Nf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:hn};return a?(Ql(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),ps>0&&!o&&sn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&sn.push(l),l}const mn=Np;function Np(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===tp)&&(n=wi),td(n)){const a=Pr(n,e,!0);return t&&Ql(a,t),ps>0&&!s&&sn&&(a.shapeFlag&6?sn[sn.indexOf(n)]=a:sn.push(a)),a.patchFlag=-2,a}if(qp(n)&&(n=n.__vccOpts),e){e=Fp(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=qt(a)),pt(l)&&(Do(l)&&!Ve(l)&&(l=Lt({},l)),e.style=rn(l))}const o=Rt(n)?1:Qf(n)?128:Hh(n)?64:pt(n)?4:$e(n)?2:0;return F(n,e,t,i,r,o,s,!0)}function Fp(n){return n?Do(n)||Xf(n)?Lt({},n):n:null}function Pr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Bp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&nd(c),ref:e&&e.ref?t&&s?Ve(s)?s.concat(ao(e)):[s,ao(e)]:ao(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==bt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Pr(n.ssContent),ssFallback:n.ssFallback&&Pr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&jl(u,l.clone(u)),u}function ka(n=" ",e=0){return mn(Oo,null,n,e)}function Op(n,e){const t=mn(oo,null,n);return t.staticCount=e,t}function gt(n="",e=!1){return e?(Le(),br(wi,null,n)):mn(wi,null,n)}function Rn(n){return n==null||typeof n=="boolean"?mn(wi):Ve(n)?mn(bt,null,n.slice()):td(n)?Si(n):mn(Oo,null,String(n))}function Si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Pr(n)}function Ql(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ql(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Xf(e)?e._ctx=hn:r===3&&hn&&(hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:hn},t=32):(e=String(e),i&64?(t=16,e=[ka(e)]):t=8);n.children=e,n.shapeFlag|=t}function Bp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=qt([e.class,i.class]));else if(r==="style")e.style=rn([e.style,i.style]);else if(To(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ve(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function wn(n,e,t,i=null){On(n,e,7,[t,i])}const zp=Vf();let Vp=0;function kp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||zp,s={uid:Vp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$f(i,r),emitsOptions:Hf(i,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=gp.bind(null,s),n.ce&&n.ce(s),s}let jt=null;const id=()=>jt||hn;let Mo,Ha;{const n=Ro(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Mo=e("__VUE_INSTANCE_SETTERS__",t=>jt=t),Ha=e("__VUE_SSR_SETTERS__",t=>ms=t)}const Cs=n=>{const e=jt;return Mo(n),n.scope.on(),()=>{n.scope.off(),Mo(e)}},Uc=()=>{jt&&jt.scope.off(),Mo(null)};function rd(n){return n.vnode.shapeFlag&4}let ms=!1;function Hp(n,e=!1,t=!1){e&&Ha(e);const{props:i,children:r}=n.vnode,s=rd(n);yp(n,i,s,e),wp(n,r,t||e);const o=s?Gp(n,e):void 0;return e&&Ha(!1),o}function Gp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,np);const{setup:i}=t;if(i){ni();const r=n.setupContext=i.length>1?Xp(n):null,s=Cs(n),o=ws(i,n,0,[n.props,r]),a=sf(o);if(ii(),s(),(a||n.sp)&&!ns(n)&&Ff(n),a){if(o.then(Uc,Uc),e)return o.then(l=>{Nc(n,l,e)}).catch(l=>{Io(l,n,0)});n.asyncDep=o}else Nc(n,o,e)}else sd(n,e)}function Nc(n,e,t){$e(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=Pf(e)),sd(n,t)}let Fc;function sd(n,e,t){const i=n.type;if(!n.render){if(!e&&Fc&&!i.render){const r=i.template||Yl(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Lt(Lt({isCustomElement:s,delimiters:a},o),l);i.render=Fc(r,c)}}n.render=i.render||Mn}{const r=Cs(n);ni();try{ip(n)}finally{ii(),r()}}}const Wp={get(n,e){return zt(n,"get",""),n[e]}};function Xp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Wp),slots:n.slots,emit:n.emit,expose:e}}function Bo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Pf(Xl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in is)return is[t](n)},has(e,t){return t in e||t in is}})):n.proxy}function qp(n){return $e(n)&&"__vccOpts"in n}const Yi=(n,e)=>Uh(n,e,ms),$p="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ga;const Oc=typeof window<"u"&&window.trustedTypes;if(Oc)try{Ga=Oc.createPolicy("vue",{createHTML:n=>n})}catch{}const od=Ga?n=>Ga.createHTML(n):n=>n,jp="http://www.w3.org/2000/svg",Yp="http://www.w3.org/1998/Math/MathML",qn=typeof document<"u"?document:null,Bc=qn&&qn.createElement("template"),Kp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?qn.createElementNS(jp,n):e==="mathml"?qn.createElementNS(Yp,n):t?qn.createElement(n,{is:t}):qn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>qn.createTextNode(n),createComment:n=>qn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>qn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Bc.innerHTML=od(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Bc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Zp=Symbol("_vtc");function Jp(n,e,t){const i=n[Zp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const zc=Symbol("_vod"),Qp=Symbol("_vsh"),em=Symbol(""),tm=/(?:^|;)\s*display\s*:/;function nm(n,e,t){const i=n.style,r=Rt(t);let s=!1;if(t&&!r){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&lo(i,a,"")}else for(const o in e)t[o]==null&&lo(i,o,"");for(const o in t)o==="display"&&(s=!0),lo(i,o,t[o])}else if(r){if(e!==t){const o=i[em];o&&(t+=";"+o),i.cssText=t,s=tm.test(t)}}else e&&n.removeAttribute("style");zc in n&&(n[zc]=s?i.display:"",n[Qp]&&(i.display="none"))}const Vc=/\s*!important$/;function lo(n,e,t){if(Ve(t))t.forEach(i=>lo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=im(n,e);Vc.test(t)?n.setProperty(Ri(i),t.replace(Vc,""),"important"):n[i]=t}}const kc=["Webkit","Moz","ms"],ta={};function im(n,e){const t=ta[e];if(t)return t;let i=Ai(e);if(i!=="filter"&&i in n)return ta[e]=i;i=lf(i);for(let r=0;r<kc.length;r++){const s=kc[r]+i;if(s in n)return ta[e]=s}return e}const Hc="http://www.w3.org/1999/xlink";function Gc(n,e,t,i,r,s=rh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Hc,e.slice(6,e.length)):n.setAttributeNS(Hc,e,t):t==null||s&&!uf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Fn(t)?String(t):t)}function Wc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?od(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=uf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function bi(n,e,t,i){n.addEventListener(e,t,i)}function rm(n,e,t,i){n.removeEventListener(e,t,i)}const Xc=Symbol("_vei");function sm(n,e,t,i,r=null){const s=n[Xc]||(n[Xc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=om(e);if(i){const c=s[e]=cm(i,r);bi(n,a,c,l)}else o&&(rm(n,a,o,l),s[e]=void 0)}}const qc=/(?:Once|Passive|Capture)$/;function om(n){let e;if(qc.test(n)){e={};let i;for(;i=n.match(qc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ri(n.slice(2)),e]}let na=0;const am=Promise.resolve(),lm=()=>na||(am.then(()=>na=0),na=Date.now());function cm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;On(um(i,t.value),e,5,[i])};return t.value=n,t.attached=lm(),t}function um(n,e){if(Ve(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const $c=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,fm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Jp(n,i,o):e==="style"?nm(n,t,i):To(e)?Fl(e)||sm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dm(n,e,i,o))?(Wc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Rt(i))?Wc(n,Ai(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Gc(n,e,i,o))};function dm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&$c(e)&&$e(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return $c(e)&&Rt(t)?!1:e in n}const Dr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ve(e)?t=>so(e,t):e};function hm(n){n.target.composing=!0}function jc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Qn=Symbol("_assign");function Yc(n,e,t){return e&&(n=n.trim()),t&&(n=Co(n)),n}const Ut={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Qn]=Dr(r);const s=i||r.props&&r.props.type==="number";bi(n,e?"change":"input",o=>{o.target.composing||n[Qn](Yc(n.value,t,s))}),(t||s)&&bi(n,"change",()=>{n.value=Yc(n.value,t,s)}),e||(bi(n,"compositionstart",hm),bi(n,"compositionend",jc),bi(n,"change",jc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Qn]=Dr(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Co(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Kc={deep:!0,created(n,e,t){n[Qn]=Dr(t),bi(n,"change",()=>{const i=n._modelValue,r=xs(n),s=n.checked,o=n[Qn];if(Ve(i)){const a=Bl(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Or(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(ad(n,s))})},mounted:Zc,beforeUpdate(n,e,t){n[Qn]=Dr(t),Zc(n,e,t)}};function Zc(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(Ve(e))r=Bl(e,i.props.value)>-1;else if(Or(e))r=e.has(i.props.value);else{if(e===t)return;r=As(e,ad(n,!0))}n.checked!==r&&(n.checked=r)}const Jc={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=Or(e);bi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Co(xs(o)):xs(o));n[Qn](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,ql(()=>{n._assigning=!1})}),n[Qn]=Dr(i)},mounted(n,{value:e}){Qc(n,e)},beforeUpdate(n,e,t){n[Qn]=Dr(t)},updated(n,{value:e}){n._assigning||Qc(n,e)}};function Qc(n,e){const t=n.multiple,i=Ve(e);if(!(t&&!i&&!Or(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=xs(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Bl(e,a)>-1}else o.selected=e.has(a);else if(As(xs(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function xs(n){return"_value"in n?n._value:n.value}function ad(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const pm=["ctrl","shift","alt","meta"],mm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>pm.some(t=>n[`${t}Key`]&&!e.includes(t))},Nt=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=mm[e[o]];if(a&&a(r,e))return}return n(r,...s)})},xm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gm=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=Ri(r.key);if(e.some(o=>o===s||xm[o]===s))return n(r)})},_m=Lt({patchProp:fm},Kp);let eu;function vm(){return eu||(eu=Rp(_m))}const Sm=(...n)=>{const e=vm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Mm(i);if(!r)return;const s=e._component;!$e(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,bm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function bm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Mm(n){return Rt(n)?document.querySelector(n):n}var ym=!1;/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ld;const zo=n=>ld=n,cd=Symbol();function Wa(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var os;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(os||(os={}));function Em(){const n=pf(!0),e=n.run(()=>Oe({}));let t=[],i=[];const r=Xl({install(s){zo(r),r._a=s,s.provide(cd,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return!this._a&&!ym?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const ud=()=>{};function tu(n,e,t,i=ud){n.push(e);const r=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),i())};return!t&&mf()&&oh(r),r}function tr(n,...e){n.slice().forEach(t=>{t(...e)})}const Tm=n=>n(),nu=Symbol(),ia=Symbol();function Xa(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];Wa(r)&&Wa(i)&&n.hasOwnProperty(t)&&!xt(i)&&!Jn(i)?n[t]=Xa(r,i):n[t]=i}return n}const Am=Symbol();function wm(n){return!Wa(n)||!n.hasOwnProperty(Am)}const{assign:xi}=Object;function Cm(n){return!!(xt(n)&&n.effect)}function Rm(n,e,t,i){const{state:r,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=r?r():{});const u=Ph(t.state.value[n]);return xi(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Xl(Yi(()=>{zo(t);const p=t._s.get(n);return o[h].call(p,p)})),f),{}))}return l=fd(n,c,e,t,i,!0),l}function fd(n,e,t={},i,r,s){let o;const a=xi({actions:{}},t),l={deep:!0};let c,u,f=[],h=[],p;const v=i.state.value[n];!s&&!v&&(i.state.value[n]={}),Oe({});let S;function m(B){let E;c=u=!1,typeof B=="function"?(B(i.state.value[n]),E={type:os.patchFunction,storeId:n,events:p}):(Xa(i.state.value[n],B),E={type:os.patchObject,payload:B,storeId:n,events:p});const b=S=Symbol();ql().then(()=>{S===b&&(c=!0)}),u=!0,tr(f,E,i.state.value[n])}const d=s?function(){const{state:E}=t,b=E?E():{};this.$patch(C=>{xi(C,b)})}:ud;function T(){o.stop(),f=[],h=[],i._s.delete(n)}const A=(B,E="")=>{if(nu in B)return B[ia]=E,B;const b=function(){zo(i);const C=Array.from(arguments),$=[],G=[];function O(se){$.push(se)}function re(se){G.push(se)}tr(h,{args:C,name:b[ia],store:I,after:O,onError:re});let k;try{k=B.apply(this&&this.$id===n?this:I,C)}catch(se){throw tr(G,se),se}return k instanceof Promise?k.then(se=>(tr($,se),se)).catch(se=>(tr(G,se),Promise.reject(se))):(tr($,k),k)};return b[nu]=!0,b[ia]=E,b},w={_p:i,$id:n,$onAction:tu.bind(null,h),$patch:m,$reset:d,$subscribe(B,E={}){const b=tu(f,B,E.detached,()=>C()),C=o.run(()=>In(()=>i.state.value[n],$=>{(E.flush==="sync"?u:c)&&B({storeId:n,type:os.direct,events:p},$)},xi({},l,E)));return b},$dispose:T},I=Cr(w);i._s.set(n,I);const N=(i._a&&i._a.runWithContext||Tm)(()=>i._e.run(()=>(o=pf()).run(()=>e({action:A}))));for(const B in N){const E=N[B];if(xt(E)&&!Cm(E)||Jn(E))s||(v&&wm(E)&&(xt(E)?E.value=v[B]:Xa(E,v[B])),i.state.value[n][B]=E);else if(typeof E=="function"){const b=A(E,B);N[B]=b,a.actions[B]=E}}return xi(I,N),xi(it(I),N),Object.defineProperty(I,"$state",{get:()=>i.state.value[n],set:B=>{m(E=>{xi(E,B)})}}),i._p.forEach(B=>{xi(I,o.run(()=>B({store:I,app:i._a,pinia:i,options:a})))}),v&&s&&t.hydrate&&t.hydrate(I.$state,v),c=!0,u=!0,I}/*! #__NO_SIDE_EFFECTS__ */function Pm(n,e,t){let i,r;const s=typeof e=="function";typeof n=="string"?(i=n,r=s?t:e):(r=n,i=n.id);function o(a,l){const c=fp();return a=a||(c?rs(cd,null):null),a&&zo(a),a=ld,a._s.has(i)||(s?fd(i,e,r,a):Rm(i,r,a)),a._s.get(i)}return o.$id=i,o}function gs(){return"id_"+Math.random().toString(36).substr(2,9)+"_"+Date.now()}function co(n){return new Promise((e,t)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=t,i.readAsDataURL(n)})}const Tr=Oe([]);function _r(n,e="info",t=3e3){console.log("📢 showToast called:",{message:n,type:e,timeout:t,currentToastsCount:Tr.value.length});const i=gs(),r={id:i,message:n,type:e,timeout:t};return Tr.value.push(r),console.log("📢 Toast added to array. New count:",Tr.value.length,"Toast:",r),t>0&&setTimeout(()=>{console.log("⏰ Removing toast after timeout:",i),Dm(i)},t),i}function Dm(n){const e=Tr.value.findIndex(t=>t.id===n);e>-1&&Tr.value.splice(e,1)}const Os="scene360_project";class Pn{static saveProject(e){try{const t=JSON.stringify(e);localStorage.setItem(Os,t),console.log(`✅ Project saved: ${e.scenes.length} scenes`)}catch(t){if(t.name==="QuotaExceededError"){console.error("❌ localStorage full - trying to save without images");const i={...e,scenes:e.scenes.map(s=>({...s,imageUrl:""}))},r=JSON.stringify(i);localStorage.setItem(Os,r),console.log("⚠️ Project saved without images due to storage limit")}else console.error("❌ Error saving project:",t)}}static loadProject(){try{const e=localStorage.getItem(Os);if(!e)return console.log("⚠️ No project found in localStorage"),null;const t=JSON.parse(e);console.log(`✅ Loaded project: ${t.scenes.length} scenes`);const i=t.scenes.filter(r=>!r.imageUrl);return i.length>0&&console.log(`⚠️ ${i.length} scenes need images to be re-uploaded`),t}catch(e){return console.error("❌ Error loading project:",e),null}}static async loadProjectAsync(){return this.loadProject()}static deleteProject(){try{localStorage.removeItem(Os),console.log("✅ Project deleted")}catch(e){console.error("Error deleting project:",e)}}static getProjectsList(){const e=this.loadProject();return e?[{id:e.id,name:e.name,lastModified:e.updatedAt||Date.now()}]:[]}static importProjectFromJSON(e){try{const t=JSON.parse(e);return t.project||t}catch(t){return console.error("Error importing project:",t),null}}}const Ji=Pm("project",()=>{const n=Oe(null),e=Oe(""),t=()=>{if(!n.value){console.error("❌ Cannot autoSave: project is null");return}const S=JSON.parse(JSON.stringify(n.value));console.log(`💾 AUTO-SAVING: ${S.scenes.length} scenes`),Pn.saveProject(S)},i=Yi(()=>n.value?n.value.scenes.find(S=>S.id===e.value):null),r=Yi(()=>{var S;return((S=n.value)==null?void 0:S.scenes)||[]});return{project:n,activeSceneId:e,activeScene:i,allScenes:r,createNewProject:(S,m="")=>{const d={id:gs(),name:S,description:m,scenes:[],activeSceneId:"",createdAt:Date.now(),updatedAt:Date.now()};return n.value=d,t(),d},loadProject:S=>{var T;const m=(S.scenes||[]).map(A=>{const w=(A.hotspots||[]).map(I=>({...I,radius:typeof I.radius=="number"&&Number.isFinite(I.radius)?I.radius:10,color:I.color||"#ff0000",visible:I.visible!==!1,hideCircle:I.hideCircle??!1,showIcon:I.showIcon??!0,iconSize:typeof I.iconSize=="number"&&Number.isFinite(I.iconSize)?I.iconSize:I.type==="scene"?26:20,content:I.content||{}}));return{...A,hotspots:w}}),d={...S,scenes:m};n.value=d,e.value=d.activeSceneId||((T=m[0])==null?void 0:T.id)||"",d.activeSceneId=e.value},addScene:(S,m,d,T)=>{if(!n.value)return console.error("❌ Cannot add scene: project is null"),null;const A={id:gs(),name:S,description:m,imageUrl:d,imageFileName:T,hotspots:[],createdAt:Date.now(),updatedAt:Date.now()};return n.value.scenes.push(A),n.value.updatedAt=Date.now(),console.log(`✅ Scene added: ${S}. Total in memory: ${n.value.scenes.length} scenes`),e.value||(e.value=A.id,n.value.activeSceneId=A.id),console.log("🔄 Triggering autoSave..."),t(),console.log(`📝 After autoSave, project has ${n.value.scenes.length} scenes`),A},deleteScene:S=>{var d;if(!n.value)return;const m=n.value.scenes.findIndex(T=>T.id===S);m!==-1&&(n.value.scenes.splice(m,1),n.value.updatedAt=Date.now(),e.value===S&&(e.value=((d=n.value.scenes[0])==null?void 0:d.id)||"",n.value.activeSceneId=e.value),t())},renameScene:(S,m)=>{if(!n.value)return;const d=n.value.scenes.find(T=>T.id===S);d&&(d.name=m,d.updatedAt=Date.now(),n.value.updatedAt=Date.now(),t())},setActiveScene:S=>{n.value&&(e.value=S,n.value.activeSceneId=S,n.value.updatedAt=Date.now())},addHotspot:S=>{i.value&&(i.value.hotspots.push(S),i.value.updatedAt=Date.now(),n.value&&(n.value.updatedAt=Date.now(),t()))},updateHotspot:(S,m,d)=>{if(!n.value)return;const T=n.value.scenes.find(w=>w.id===S);if(!T)return;const A=T.hotspots.find(w=>w.id===m);A&&(Object.assign(A,d),T.updatedAt=Date.now(),n.value.updatedAt=Date.now(),t())},deleteHotspot:(S,m)=>{if(!n.value)return;const d=n.value.scenes.find(A=>A.id===S);if(!d)return;const T=d.hotspots.findIndex(A=>A.id===m);T!==-1&&(d.hotspots.splice(T,1),d.updatedAt=Date.now(),n.value.updatedAt=Date.now(),t())},reorderScenes:(S,m)=>{if(!n.value)return;const d=n.value.scenes,[T]=d.splice(S,1);d.splice(m,0,T),n.value.updatedAt=Date.now(),t(),console.log(`✅ Scène "${T.name}" déplacée de ${S} à ${m}`)}}}),Im=""+new URL("Logo-CEN-PC-2025-v3-36323b44.jpg",import.meta.url).href,Lm={class:"home-screen"},Um={class:"welcome-card"},Nm={class:"actions"},Fm={class:"modal"},Om={class:"modal-actions"},Bm=Pi({__name:"HomeScreen",emits:["create-project","load-project"],setup(n,{emit:e}){const t=e,i=Oe(!1),r=Oe(""),s=Oe(""),o=Oe(),a=Oe(null),l=()=>{r.value.trim()&&(t("create-project",r.value,s.value),i.value=!1,r.value="",s.value="")},c=()=>{var f;(f=o.value)==null||f.click()},u=f=>{var v;const h=(v=f.target.files)==null?void 0:v[0];if(!h)return;const p=new FileReader;p.onload=S=>{var T;const m=(T=S.target)==null?void 0:T.result,d=Pn.importProjectFromJSON(m);d&&(t("load-project",d),Pn.saveProject(d),a.value=d)},p.readAsText(h)};return Uo(()=>{const f=Pn.loadProject();f&&(a.value=f)}),(f,h)=>(Le(),Ne("div",Lm,[F("div",Um,[h[5]||(h[5]=F("h1",null,"360° Scene Editor",-1)),h[6]||(h[6]=F("p",null,"Créez des scènes interactives 360° avec des points d'intérêt cliquables interactifs.",-1)),F("div",Nm,[F("button",{onClick:h[0]||(h[0]=p=>i.value=!0),class:"btn btn-primary"}," ➕ Nouveau projet "),F("button",{onClick:c,class:"btn btn-secondary"}," 📂 Importer un projet (.json) ")]),h[7]||(h[7]=F("div",{class:"credits"},[F("a",{href:"https://pedagogie.ac-montpellier.fr/ressources-et-formation-du-cercle-detude-numerique-physique-chimie",target:"_blank",rel:"noopener noreferrer",class:"logo-link",title:"Vers la rubrique du CEN-PC sur le portail pédagogique de l'académie de Montpellier (PPA)"},[F("img",{src:Im,alt:"CEN-PC Logo",class:"logo"})]),F("p",null,"par C. HEYREND-CASANOVAS pour le CEN-PC de Montpellier"),F("p",null,"v-12-2025")],-1)),F("input",{ref_key:"fileInput",ref:o,type:"file",accept:".json",style:{display:"none"},onChange:u},null,544)]),i.value?(Le(),Ne("div",{key:0,class:"modal-overlay",onClick:h[4]||(h[4]=Nt(p=>i.value=!1,["self"]))},[F("div",Fm,[h[8]||(h[8]=F("h2",null,"Créer un Nouveau Projet",-1)),Tt(F("input",{"onUpdate:modelValue":h[1]||(h[1]=p=>r.value=p),type:"text",placeholder:"Nom du projet",class:"input",onKeyup:gm(l,["enter"])},null,544),[[Ut,r.value]]),Tt(F("textarea",{"onUpdate:modelValue":h[2]||(h[2]=p=>s.value=p),placeholder:"Description (optionnel)",class:"input",rows:"3"},null,512),[[Ut,s.value]]),F("div",Om,[F("button",{onClick:h[3]||(h[3]=p=>i.value=!1),class:"btn btn-secondary"},"Annuler"),F("button",{onClick:l,class:"btn btn-primary"},"Créer")])])])):gt("",!0)]))}});const Di=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},zm=Di(Bm,[["__scopeId","data-v-35474321"]]),Vm={class:"project-header"},km={class:"header-content"},Hm=Pi({__name:"ProjectHeader",setup(n){const e=Ji(),t=()=>{e.project=null},i=()=>{if(!e.project)return;const r=JSON.stringify(e.project,null,2),s=new Blob([r],{type:"application/json"}),o=URL.createObjectURL(s),a=document.createElement("a");a.href=o,a.download=`${e.project.name}.json`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(o)};return(r,s)=>{var o,a;return Le(),Ne("div",Vm,[F("div",km,[F("h2",null,_t((o=Qe(e).project)==null?void 0:o.name),1),F("p",null,_t((a=Qe(e).project)==null?void 0:a.description),1)]),F("div",{class:"header-actions"},[F("button",{onClick:t,class:"btn-small",title:"Retour à l'accueil"},"🏠 Accueil"),F("button",{onClick:i,class:"btn-small btn-save",title:"Sauvegarder le projet"},"💾 Sauvegarder le projet")])])}}});const Gm=Di(Hm,[["__scopeId","data-v-9b3c4c79"]]),Wm={class:"list-header"},Xm={class:"scenes-container"},qm=["onDragstart","onDragover","onDrop"],$m=["onClick","onContextmenu"],jm=["src","alt"],Ym={key:1,class:"no-image"},Km=["onClick"],Zm={class:"scene-name"},Jm={class:"scene-hotspots"},Qm=["onClick"],e0=["onClick"],t0={class:"modal delete-modal"},n0={class:"modal-actions"},i0={class:"modal"},r0={key:0,class:"preview-text"},s0={class:"modal-actions"},o0=["disabled"],a0=Pi({__name:"SceneList",setup(n){const e=Ji(),t=Oe(!1),i=Oe(""),r=Oe(""),s=Oe(""),o=Oe(""),a=Oe(),l=Oe(),c=Oe(null),u=Oe(""),f=Oe(!1),h=Oe(null),p=Oe(null),v=Oe(null),S=G=>{e.setActiveScene(G),c.value=null},m=async()=>{!i.value||!s.value||(console.log("Adding scene:",i.value),e.addScene(i.value,r.value,s.value,o.value),t.value=!1,i.value="",r.value="",s.value="",o.value="")},d=async G=>{var re;const O=(re=G.target.files)==null?void 0:re[0];O&&(o.value=O.name,s.value=await co(O))},T=async G=>{var re;const O=(re=G.dataTransfer)==null?void 0:re.files;O&&(o.value=O[0].name,s.value=await co(O[0]))},A=G=>{var O;u.value=G,(O=l.value)==null||O.click()},w=async G=>{var se;const O=(se=G.target.files)==null?void 0:se[0];if(!O||!u.value)return;const re=await co(O),k=e.allScenes.find(W=>W.id===u.value);k&&(k.imageUrl=re,k.imageFileName=O.name,k.updatedAt=Date.now(),e.project.updatedAt=Date.now(),e.addHotspot({id:"",x:0,y:0,type:"text",content:""}),console.log(`✅ Image re-uploaded for scene: ${k.name}`)),u.value="",l.value&&(l.value.value="")},I=(G,O)=>{c.value={left:G.clientX+"px",top:G.clientY+"px",sceneId:O}},R=async G=>{const O=e.allScenes.find(k=>k.id===G);if(!O)return;const re=prompt("Nouveau nom:",O.name);re&&(console.log("Renaming scene to:",re),e.renameScene(G,re)),c.value=null},N=G=>{const O=e.allScenes.find(re=>re.id===G);O&&(h.value=O,f.value=!0,c.value=null)},B=()=>{h.value&&(console.log("Deleting scene:",h.value.id),e.deleteScene(h.value.id),f.value=!1,h.value=null)},E=(G,O)=>{p.value=O,G.dataTransfer&&(G.dataTransfer.effectAllowed="move")},b=(G,O)=>{G.preventDefault(),v.value=O},C=G=>{p.value!==null&&p.value!==G&&e.reorderScenes(p.value,G),p.value=null,v.value=null},$=()=>{p.value=null,v.value=null};return document.addEventListener("click",()=>{c.value=null}),(G,O)=>{var re;return Le(),Ne("div",{class:"scene-list",onWheel:O[11]||(O[11]=Nt(()=>{},["stop"]))},[F("div",Wm,[O[12]||(O[12]=F("h3",null,"Scènes",-1)),F("button",{onClick:O[0]||(O[0]=k=>t.value=!0),class:"btn-add",title:"Ajouter une scène"},"➕")]),F("div",Xm,[(Le(!0),Ne(bt,null,vi(Qe(e).allScenes,(k,se)=>(Le(),Ne("div",{key:k.id,class:qt(["scene-item",{active:k.id===Qe(e).activeSceneId,dragging:p.value===se}]),draggable:"true",onDragstart:W=>E(W,se),onDragover:Nt(W=>b(W,se),["prevent"]),onDrop:Nt(W=>C(se),["prevent"]),onDragend:$},[O[14]||(O[14]=F("div",{class:"drag-handle",title:"Glisser pour réorganiser"},"⋮⋮",-1)),F("div",{class:"scene-thumbnail",onClick:W=>S(k.id),onContextmenu:Nt(W=>I(W,k.id),["prevent"])},[k.imageUrl?(Le(),Ne("img",{key:0,src:k.imageUrl,alt:k.name},null,8,jm)):(Le(),Ne("div",Ym,[...O[13]||(O[13]=[F("span",null,"📸",-1),F("p",null,"Image manquante",-1)])]))],40,$m),F("div",{class:"scene-info",onClick:W=>S(k.id)},[F("div",Zm,_t(k.name),1),F("div",Jm,_t(k.hotspots.length)+" points",1)],8,Km),k.imageUrl?gt("",!0):(Le(),Ne("button",{key:0,onClick:Nt(W=>A(k.id),["stop"]),class:"btn-reupload",title:"Re-uploader l'image"}," 📤 ",8,Qm)),F("button",{onClick:Nt(W=>N(k.id),["stop"]),class:"btn-delete",title:"Supprimer la scène"}," ✕ ",8,e0)],42,qm))),128)),F("input",{ref_key:"reuploadInput",ref:l,type:"file",accept:"image/*",style:{display:"none"},onChange:w},null,544)]),c.value?(Le(),Ne("div",{key:0,class:"context-menu",style:rn(c.value)},[F("button",{onClick:O[1]||(O[1]=k=>R(c.value.sceneId)),class:"menu-item"},"✏️ Renommer"),F("button",{onClick:O[2]||(O[2]=k=>N(c.value.sceneId)),class:"menu-item danger"},"🗑️ Supprimer")],4)):gt("",!0),f.value?(Le(),Ne("div",{key:1,class:"modal-overlay",onClick:O[4]||(O[4]=Nt(k=>f.value=!1,["self"]))},[F("div",t0,[O[17]||(O[17]=F("h3",null,"⚠️ Confirmer la suppression",-1)),F("p",null,[O[15]||(O[15]=ka("Êtes-vous sûr de vouloir supprimer la scène ",-1)),F("strong",null,_t((re=h.value)==null?void 0:re.name),1),O[16]||(O[16]=ka(" ?",-1))]),O[18]||(O[18]=F("p",{class:"warning-text"},"Cette action est irréversible.",-1)),F("div",n0,[F("button",{onClick:O[3]||(O[3]=k=>f.value=!1),class:"btn-secondary"},"Annuler"),F("button",{onClick:B,class:"btn-danger"},"Supprimer")])])])):gt("",!0),t.value?(Le(),Ne("div",{key:2,class:"modal-overlay",onClick:O[10]||(O[10]=Nt(k=>t.value=!1,["self"]))},[F("div",i0,[O[19]||(O[19]=F("h3",null,"Ajouter une Scène 360°",-1)),Tt(F("input",{"onUpdate:modelValue":O[5]||(O[5]=k=>i.value=k),type:"text",placeholder:"Nom de la scène",class:"input"},null,512),[[Ut,i.value]]),Tt(F("textarea",{"onUpdate:modelValue":O[6]||(O[6]=k=>r.value=k),placeholder:"Description",class:"input",rows:"2"},null,512),[[Ut,r.value]]),F("div",{class:"upload-area",onDrop:T,onDragover:O[8]||(O[8]=Nt(()=>{},["prevent"]))},[F("input",{ref_key:"fileInput",ref:a,type:"file",accept:"image/*",onChange:d,style:{display:"none"}},null,544),F("button",{onClick:O[7]||(O[7]=k=>{var se;return(se=a.value)==null?void 0:se.click()}),class:"upload-btn"}," 📸 Sélectionner Image 360° "),s.value?(Le(),Ne("p",r0,"✓ Image chargée")):gt("",!0)],32),F("div",s0,[F("button",{onClick:O[9]||(O[9]=k=>t.value=!1),class:"btn-secondary"},"Annuler"),F("button",{onClick:m,disabled:!i.value||!s.value,class:"btn-primary"},"Ajouter",8,o0)])])])):gt("",!0)],32)}}});const l0=Di(a0,[["__scopeId","data-v-534f7021"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="181",c0=0,iu=1,u0=2,dd=1,f0=2,Xn=3,Ci=0,Vt=1,Yn=2,ei=0,Ar=1,ru=2,su=3,ou=4,d0=5,Wi=100,h0=101,p0=102,m0=103,x0=104,g0=200,_0=201,v0=202,S0=203,qa=204,$a=205,b0=206,M0=207,y0=208,E0=209,T0=210,A0=211,w0=212,C0=213,R0=214,ja=0,Ya=1,Ka=2,Ir=3,Za=4,Ja=5,Qa=6,el=7,hd=0,P0=1,D0=2,Ti=0,I0=1,L0=2,U0=3,N0=4,F0=5,O0=6,B0=7,pd=300,Lr=301,Ur=302,tl=303,nl=304,Vo=306,il=1e3,Kn=1001,rl=1002,an=1003,z0=1004,Bs=1005,pn=1006,ra=1007,qi=1008,si=1009,md=1010,xd=1011,_s=1012,tc=1013,Ki=1014,Zn=1015,Br=1016,nc=1017,ic=1018,vs=1020,gd=35902,_d=35899,vd=1021,Sd=1022,bn=1023,Ss=1026,bs=1027,bd=1028,rc=1029,sc=1030,oc=1031,ac=1033,uo=33776,fo=33777,ho=33778,po=33779,sl=35840,ol=35841,al=35842,ll=35843,cl=36196,ul=37492,fl=37496,dl=37808,hl=37809,pl=37810,ml=37811,xl=37812,gl=37813,_l=37814,vl=37815,Sl=37816,bl=37817,Ml=37818,yl=37819,El=37820,Tl=37821,Al=36492,wl=36494,Cl=36495,Rl=36283,Pl=36284,Dl=36285,Il=36286,V0=3200,k0=3201,H0=0,G0=1,Mi="",fn="srgb",Nr="srgb-linear",yo="linear",ut="srgb",nr=7680,au=519,W0=512,X0=513,q0=514,Md=515,$0=516,j0=517,Y0=518,K0=519,lu=35044,cu="300 es",Ln=2e3,Eo=2001;function yd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ms(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Z0(){const n=Ms("canvas");return n.style.display="block",n}const uu={};function fu(...n){const e="THREE."+n.shift();console.log(e,...n)}function qe(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Et(...n){const e="THREE."+n.shift();console.error(e,...n)}function ys(...n){const e=n.join(" ");e in uu||(uu[e]=!0,qe(...n))}function J0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class zr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let du=1234567;const as=Math.PI/180,Es=180/Math.PI;function Vr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function lc(n,e){return(n%e+e)%e}function Q0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ex(n,e,t){return n!==e?(t-n)/(e-n):0}function ls(n,e,t){return(1-t)*n+t*e}function tx(n,e,t,i){return ls(n,e,1-Math.exp(-t*i))}function nx(n,e=1){return e-Math.abs(lc(n,e*2)-e)}function ix(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function sx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ox(n,e){return n+Math.random()*(e-n)}function ax(n){return n*(.5-Math.random())}function lx(n){n!==void 0&&(du=n);let e=du+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cx(n){return n*as}function ux(n){return n*Es}function fx(n){return(n&n-1)===0&&n!==0}function dx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function hx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function px(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*p,a*u,a*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zt={DEG2RAD:as,RAD2DEG:Es,generateUUID:Vr,clamp:Ke,euclideanModulo:lc,mapLinear:Q0,inverseLerp:ex,lerp:ls,damp:tx,pingpong:nx,smoothstep:ix,smootherstep:rx,randInt:sx,randFloat:ox,randFloatSpread:ax,seededRandom:lx,degToRad:cx,radToDeg:ux,isPowerOfTwo:fx,ceilPowerOfTwo:dx,floorPowerOfTwo:hx,setQuaternionFromProperEuler:px,normalize:Wt,denormalize:vr};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],p=s[o+1],v=s[o+2],S=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=S;return}if(f!==S||l!==h||c!==p||u!==v){let m=l*h+c*p+u*v+f*S;m<0&&(h=-h,p=-p,v=-v,S=-S,m=-m);let d=1-a;if(m<.9995){const T=Math.acos(m),A=Math.sin(T);d=Math.sin(d*T)/A,a=Math.sin(a*T)/A,l=l*d+h*a,c=c*d+p*a,u=u*d+v*a,f=f*d+S*a}else{l=l*d+h*a,c=c*d+p*a,u=u*d+v*a,f=f*d+S*a;const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-a*p,e[t+2]=c*v+u*p+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sa.copy(this).projectOnVector(e),this.sub(sa)}reflect(e){return this.sub(sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new ee,hu=new Rs;class je{constructor(e,t,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],S=r[0],m=r[3],d=r[6],T=r[1],A=r[4],w=r[7],I=r[2],R=r[5],N=r[8];return s[0]=o*S+a*T+l*I,s[3]=o*m+a*A+l*R,s[6]=o*d+a*w+l*N,s[1]=c*S+u*T+f*I,s[4]=c*m+u*A+f*R,s[7]=c*d+u*w+f*N,s[2]=h*S+p*T+v*I,s[5]=h*m+p*A+v*R,s[8]=h*d+p*w+v*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=t*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-a*t)*S,e[6]=p*S,e[7]=(i*l-c*t)*S,e[8]=(o*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new je,pu=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mu=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mx(){const n={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=ti(r.r),r.g=ti(r.g),r.b=ti(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mi?yo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Nr]:{primaries:e,whitePoint:i,transfer:yo,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}const rt=mx();function ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ir;class xx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ir===void 0&&(ir=Ms("canvas")),ir.width=e.width,ir.height=e.height;const r=ir.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ir}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ti(t[i]/255)*255):t[i]=ti(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gx=0;class cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(aa(r[o].image)):s.push(aa(r[o]))}else s=aa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let _x=0;const la=new ee;class kt extends zr{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=Kn,r=Kn,s=pn,o=qi,a=bn,l=si,c=kt.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Vr(),this.name="",this.source=new cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(la).x}get height(){return this.source.getSize(la).y}get depth(){return this.source.getSize(la).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case il:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case il:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=pd;kt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,w=(p+1)/2,I=(d+1)/2,R=(u+h)/4,N=(f+S)/4,B=(v+m)/4;return A>w&&A>I?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=R/i,s=N/i):w>I?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=R/r,s=B/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=N/s,r=B/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-v)*(m-v)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-v)/T,this.y=(f-S)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vx extends zr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new kt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new cc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends vx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ed extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sx extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zs.copy(i.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Vs.subVectors(this.max,Xr),rr.subVectors(e.a,Xr),sr.subVectors(e.b,Xr),or.subVectors(e.c,Xr),ui.subVectors(sr,rr),fi.subVectors(or,sr),Fi.subVectors(rr,or);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Fi.z,Fi.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Fi.z,0,-Fi.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Fi.y,Fi.x,0];return!ca(t,rr,sr,or,Vs)||(t=[1,0,0,0,1,0,0,0,1],!ca(t,rr,sr,or,Vs))?!1:(ks.crossVectors(ui,fi),t=[ks.x,ks.y,ks.z],ca(t,rr,sr,or,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],gn=new ee,zs=new Ps,rr=new ee,sr=new ee,or=new ee,ui=new ee,fi=new ee,Fi=new ee,Xr=new ee,Vs=new ee,ks=new ee,Oi=new ee;function ca(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Oi.fromArray(n,s);const a=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),u=i.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bx=new Ps,qr=new ee,ua=new ee;class uc{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);const t=qr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(ua)),this.expandByPoint(qr.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Vn=new ee,fa=new ee,Hs=new ee,di=new ee,da=new ee,Gs=new ee,ha=new ee;class Td{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fa.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),di.copy(this.origin).sub(fa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Hs),a=di.dot(this.direction),l=-di.dot(Hs),c=di.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const S=1/u;f*=S,h*=S,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(fa).addScaledVector(Hs,h),p}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const i=Vn.dot(this.direction),r=Vn.dot(Vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,i,r,s){da.subVectors(t,e),Gs.subVectors(i,e),ha.crossVectors(da,Gs);let o=this.direction.dot(ha),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(Gs.crossVectors(di,Gs));if(l<0)return null;const c=a*this.direction.dot(da.cross(di));if(c<0||l+c>o)return null;const u=-a*di.dot(ha);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,v,S,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,v,S,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,v,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ar.setFromMatrixColumn(e,0).length(),s=1/ar.setFromMatrixColumn(e,1).length(),o=1/ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,v=a*u,S=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-S*c,t[9]=-a*l,t[2]=S-h*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,S=c*f;t[0]=h+S*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=S+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,S=c*f;t[0]=h-S*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=S-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=a*u,S=a*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,S=a*c;t[0]=l*u,t[4]=S-h*f,t[8]=v*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,S=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=o*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mx,e,yx)}lookAt(e,t,i){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),hi.crossVectors(i,en),hi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),hi.crossVectors(i,en)),hi.normalize(),Ws.crossVectors(en,hi),r[0]=hi.x,r[4]=Ws.x,r[8]=en.x,r[1]=hi.y,r[5]=Ws.y,r[9]=en.y,r[2]=hi.z,r[6]=Ws.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],S=i[6],m=i[10],d=i[14],T=i[3],A=i[7],w=i[11],I=i[15],R=r[0],N=r[4],B=r[8],E=r[12],b=r[1],C=r[5],$=r[9],G=r[13],O=r[2],re=r[6],k=r[10],se=r[14],W=r[3],de=r[7],me=r[11],Re=r[15];return s[0]=o*R+a*b+l*O+c*W,s[4]=o*N+a*C+l*re+c*de,s[8]=o*B+a*$+l*k+c*me,s[12]=o*E+a*G+l*se+c*Re,s[1]=u*R+f*b+h*O+p*W,s[5]=u*N+f*C+h*re+p*de,s[9]=u*B+f*$+h*k+p*me,s[13]=u*E+f*G+h*se+p*Re,s[2]=v*R+S*b+m*O+d*W,s[6]=v*N+S*C+m*re+d*de,s[10]=v*B+S*$+m*k+d*me,s[14]=v*E+S*G+m*se+d*Re,s[3]=T*R+A*b+w*O+I*W,s[7]=T*N+A*C+w*re+I*de,s[11]=T*B+A*$+w*k+I*me,s[15]=T*E+A*G+w*se+I*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],S=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+S*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],S=e[13],m=e[14],d=e[15],T=f*m*c-S*h*c+S*l*p-a*m*p-f*l*d+a*h*d,A=v*h*c-u*m*c-v*l*p+o*m*p+u*l*d-o*h*d,w=u*S*c-v*f*c+v*a*p-o*S*p-u*a*d+o*f*d,I=v*f*l-u*S*l-v*a*h+o*S*h+u*a*m-o*f*m,R=t*T+i*A+r*w+s*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=T*N,e[1]=(S*h*s-f*m*s-S*r*p+i*m*p+f*r*d-i*h*d)*N,e[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*d+i*l*d)*N,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*N,e[4]=A*N,e[5]=(u*m*s-v*h*s+v*r*p-t*m*p-u*r*d+t*h*d)*N,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*d-t*l*d)*N,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*N,e[8]=w*N,e[9]=(v*f*s-u*S*s-v*i*p+t*S*p+u*i*d-t*f*d)*N,e[10]=(o*S*s-v*a*s+v*i*c-t*S*c-o*i*d+t*a*d)*N,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*N,e[12]=I*N,e[13]=(u*S*r-v*f*r+v*i*h-t*S*h-u*i*m+t*f*m)*N,e[14]=(v*a*r-o*S*r-v*i*l+t*S*l+o*i*m-t*a*m)*N,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,v=s*f,S=o*u,m=o*f,d=a*f,T=l*c,A=l*u,w=l*f,I=i.x,R=i.y,N=i.z;return r[0]=(1-(S+d))*I,r[1]=(p+w)*I,r[2]=(v-A)*I,r[3]=0,r[4]=(p-w)*R,r[5]=(1-(h+d))*R,r[6]=(m+T)*R,r[7]=0,r[8]=(v+A)*N,r[9]=(m-T)*N,r[10]=(1-(h+S))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ar.set(r[0],r[1],r[2]).length();const o=ar.set(r[4],r[5],r[6]).length(),a=ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const c=1/s,u=1/o,f=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,t.setFromRotationMatrix(_n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ln,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let v,S;if(l)v=s/(o-s),S=o*s/(o-s);else if(a===Ln)v=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===Eo)v=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ln,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let v,S;if(l)v=1/(o-s),S=o/(o-s);else if(a===Ln)v=-2/(o-s),S=-(o+s)/(o-s);else if(a===Eo)v=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ar=new ee,_n=new Ct,Mx=new ee(0,0,0),yx=new ee(1,1,1),hi=new ee,Ws=new ee,en=new ee,xu=new Ct,gu=new Rs;class oi{constructor(e=0,t=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ex=0;const _u=new ee,lr=new Rs,kn=new Ct,Xs=new ee,$r=new ee,Tx=new ee,Ax=new Rs,vu=new ee(1,0,0),Su=new ee(0,1,0),bu=new ee(0,0,1),Mu={type:"added"},wx={type:"removed"},cr={type:"childadded",child:null},pa={type:"childremoved",child:null};class ln extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new ee,t=new oi,i=new Rs,r=new ee(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new je}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(vu,e)}rotateY(e){return this.rotateOnAxis(Su,e)}rotateZ(e){return this.rotateOnAxis(bu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vu,e)}translateY(e){return this.translateOnAxis(Su,e)}translateZ(e){return this.translateOnAxis(bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xs.copy(e):Xs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt($r,Xs,this.up):kn.lookAt(Xs,$r,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),lr.setFromRotationMatrix(kn),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mu),cr.child=e,this.dispatchEvent(cr),cr.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wx),pa.child=e,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mu),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,Tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Ax,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new ee(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new ee,Hn=new ee,ma=new ee,Gn=new ee,ur=new ee,fr=new ee,yu=new ee,xa=new ee,ga=new ee,_a=new ee,va=new At,Sa=new At,ba=new At;class Sn{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vn.subVectors(r,t),Hn.subVectors(i,t),ma.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Hn),l=vn.dot(ma),c=Hn.dot(Hn),u=Hn.dot(ma),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return va.setScalar(0),Sa.setScalar(0),ba.setScalar(0),va.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,i),ba.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(va,s.x),o.addScaledVector(Sa,s.y),o.addScaledVector(ba,s.z),o}static isFrontFacing(e,t,i,r){return vn.subVectors(i,t),Hn.subVectors(e,t),vn.cross(Hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),vn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ur.subVectors(r,i),fr.subVectors(s,i),xa.subVectors(e,i);const l=ur.dot(xa),c=fr.dot(xa);if(l<=0&&c<=0)return t.copy(i);ga.subVectors(e,r);const u=ur.dot(ga),f=fr.dot(ga);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ur,o);_a.subVectors(e,s);const p=ur.dot(_a),v=fr.dot(_a);if(v>=0&&p<=v)return t.copy(s);const S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(fr,a);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return yu.subVectors(s,r),a=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(yu,a);const d=1/(m+S+h);return o=S*d,a=h*d,t.copy(i).addScaledVector(ur,o).addScaledVector(fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},qs={h:0,s:0,l:0};function Ma(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=lc(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ma(o,s,e+1/3),this.g=Ma(o,s,e),this.b=Ma(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=fn){function i(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=Ad[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return rt.workingToColorSpace(Ot.copy(this),e),Math.round(Ke(Ot.r*255,0,255))*65536+Math.round(Ke(Ot.g*255,0,255))*256+Math.round(Ke(Ot.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=fn){rt.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(qs);const i=ls(pi.h,qs.h,t),r=ls(pi.s,qs.s,t),s=ls(pi.l,qs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new ot;ot.NAMES=Ad;let Cx=0;class ko extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=Ar,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=$a,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qa&&(i.blendSrc=this.blendSrc),this.blendDst!==$a&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cs extends ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new ee,$s=new at;let Rx=0;class Un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lu,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lu&&(e.usage=this.usage),e}}class wd extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cd extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Px=0;const un=new Ct,ya=new ln,dr=new ee,tn=new Ps,jr=new Ps,It=new ee;class ci extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yd(e)?Cd:wd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(tn.min,jr.min),tn.expandByPoint(It),It.addVectors(tn.max,jr.max),tn.expandByPoint(It)):(tn.expandByPoint(jr.min),tn.expandByPoint(jr.max))}tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(dr.fromBufferAttribute(e,c),It.add(dr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new ee,l[B]=new ee;const c=new ee,u=new ee,f=new ee,h=new at,p=new at,v=new at,S=new ee,m=new ee;function d(B,E,b){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,b),h.fromBufferAttribute(s,B),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,b),u.sub(c),f.sub(c),p.sub(h),v.sub(h);const C=1/(p.x*v.y-v.x*p.y);isFinite(C)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(C),a[B].add(S),a[E].add(S),a[b].add(S),l[B].add(m),l[E].add(m),l[b].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let B=0,E=T.length;B<E;++B){const b=T[B],C=b.start,$=b.count;for(let G=C,O=C+$;G<O;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const A=new ee,w=new ee,I=new ee,R=new ee;function N(B){I.fromBufferAttribute(r,B),R.copy(I);const E=a[B];A.copy(E),A.sub(I.multiplyScalar(I.dot(E))).normalize(),w.crossVectors(R,E);const C=w.dot(l[B])<0?-1:1;o.setXYZW(B,A.x,A.y,A.z,C)}for(let B=0,E=T.length;B<E;++B){const b=T[B],C=b.start,$=b.count;for(let G=C,O=C+$;G<O;G+=3)N(e.getX(G+0)),N(e.getX(G+1)),N(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new ee,s=new ee,o=new ee,a=new ee,l=new ee,c=new ee,u=new ee,f=new ee;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new Un(h,u,f)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eu=new Ct,Bi=new Td,js=new uc,Tu=new ee,Ys=new ee,Ks=new ee,Zs=new ee,Ea=new ee,Js=new ee,Au=new ee,Qs=new ee;class En extends ln{constructor(e=new ci,t=new cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ea.fromBufferAttribute(f,e),o?Js.addScaledVector(Ea,u):Js.addScaledVector(Ea.sub(t),u))}t.add(Js)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(s),Bi.copy(e.ray).recast(e.near),!(js.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(js,Tu)===null||Bi.origin.distanceToSquared(Tu)>(e.far-e.near)**2))&&(Eu.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(Eu),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const m=h[v],d=o[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=T,I=A;w<I;w+=3){const R=a.getX(w),N=a.getX(w+1),B=a.getX(w+2);r=eo(this,d,e,i,c,u,f,R,N,B),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=v,d=S;m<d;m+=3){const T=a.getX(m),A=a.getX(m+1),w=a.getX(m+2);r=eo(this,o,e,i,c,u,f,T,A,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const m=h[v],d=o[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=T,I=A;w<I;w+=3){const R=w,N=w+1,B=w+2;r=eo(this,d,e,i,c,u,f,R,N,B),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=v,d=S;m<d;m+=3){const T=m,A=m+1,w=m+2;r=eo(this,o,e,i,c,u,f,T,A,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Dx(n,e,t,i,r,s,o,a){let l;if(e.side===Vt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ci,a),l===null)return null;Qs.copy(a),Qs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Qs);return c<t.near||c>t.far?null:{distance:c,point:Qs.clone(),object:n}}function eo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ys),n.getVertexPosition(l,Ks),n.getVertexPosition(c,Zs);const u=Dx(n,e,t,i,Ys,Ks,Zs,Au);if(u){const f=new ee;Sn.getBarycoord(Au,Ys,Ks,Zs,f),r&&(u.uv=Sn.getInterpolatedAttribute(r,a,l,c,f,new at)),s&&(u.uv1=Sn.getInterpolatedAttribute(s,a,l,c,f,new at)),o&&(u.normal=Sn.getInterpolatedAttribute(o,a,l,c,f,new ee),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new ee,materialIndex:0};Sn.getNormal(Ys,Ks,Zs,h.normal),u.face=h,u.barycoord=f}return u}class Ds extends ci{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(f,2));function v(S,m,d,T,A,w,I,R,N,B,E){const b=w/N,C=I/B,$=w/2,G=I/2,O=R/2,re=N+1,k=B+1;let se=0,W=0;const de=new ee;for(let me=0;me<k;me++){const Re=me*C-G;for(let ke=0;ke<re;ke++){const Ze=ke*b-$;de[S]=Ze*T,de[m]=Re*A,de[d]=O,c.push(de.x,de.y,de.z),de[S]=0,de[m]=0,de[d]=R>0?1:-1,u.push(de.x,de.y,de.z),f.push(ke/N),f.push(1-me/B),se+=1}}for(let me=0;me<B;me++)for(let Re=0;Re<N;Re++){const ke=h+Re+re*me,Ze=h+Re+re*(me+1),et=h+(Re+1)+re*(me+1),tt=h+(Re+1)+re*me;l.push(ke,Ze,tt),l.push(Ze,et,tt),W+=6}a.addGroup(p,W,E),p+=W,h+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=Fr(n[t]);for(const r in i)e[r]=i[r]}return e}function Ix(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Lx={clone:Fr,merge:Xt};var Ux=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ux,this.fragmentShader=Nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=Ix(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pd extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new ee,wu=new at,Cu=new at;class dn extends Pd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Cu),t.subVectors(Cu,wu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(as*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hr=-90,pr=1;class Fx extends ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(hr,pr,e,t);r.layers=this.layers,this.add(r);const s=new dn(hr,pr,e,t);s.layers=this.layers,this.add(s);const o=new dn(hr,pr,e,t);o.layers=this.layers,this.add(o);const a=new dn(hr,pr,e,t);a.layers=this.layers,this.add(a);const l=new dn(hr,pr,e,t);l.layers=this.layers,this.add(l);const c=new dn(hr,pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Dd extends kt{constructor(e=[],t=Lr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ox extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ds(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:ei});s.uniforms.tEquirect.value=t;const o=new En(r,s),a=t.minFilter;return t.minFilter===qi&&(t.minFilter=pn),new Fx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class to extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bx={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new to,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new to,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new to,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new to;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class zx extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Vx extends kt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=an,u=an,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Aa=new ee,kx=new ee,Hx=new je;class Gi{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Aa.subVectors(i,t).cross(kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Aa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hx.getNormalMatrix(e),r=this.coplanarPoint(Aa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new uc,Gx=new at(.5,.5),no=new ee;class Id{constructor(e=new Gi,t=new Gi,i=new Gi,r=new Gi,s=new Gi,o=new Gi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],v=s[8],S=s[9],m=s[10],d=s[11],T=s[12],A=s[13],w=s[14],I=s[15];if(r[0].setComponents(c-o,p-u,d-v,I-T).normalize(),r[1].setComponents(c+o,p+u,d+v,I+T).normalize(),r[2].setComponents(c+a,p+f,d+S,I+A).normalize(),r[3].setComponents(c-a,p-f,d-S,I-A).normalize(),i)r[4].setComponents(l,h,m,w).normalize(),r[5].setComponents(c-l,p-h,d-m,I-w).normalize();else if(r[4].setComponents(c-l,p-h,d-m,I-w).normalize(),t===Ln)r[5].setComponents(c+l,p+h,d+m,I+w).normalize();else if(t===Eo)r[5].setComponents(l,h,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){zi.center.set(0,0,0);const t=Gx.distanceTo(e.center);return zi.radius=.7071067811865476+t,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(no.x=r.normal.x>0?e.max.x:e.min.x,no.y=r.normal.y>0?e.max.y:e.min.y,no.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ld extends kt{constructor(e,t,i=Ki,r,s,o,a=an,l=an,c,u=Ss,f=1){if(u!==Ss&&u!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ud extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ho extends ci{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],v=[],S=[],m=[];for(let d=0;d<u;d++){const T=d*h-o;for(let A=0;A<c;A++){const w=A*f-s;v.push(w,-T,0),S.push(0,0,1),m.push(A/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const A=T+c*d,w=T+c*(d+1),I=T+1+c*(d+1),R=T+1+c*d;p.push(A,w,R),p.push(w,I,R)}this.setIndex(p),this.setAttribute("position",new Nn(v,3)),this.setAttribute("normal",new Nn(S,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.widthSegments,e.heightSegments)}}class us extends ci{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new ee,h=new ee,p=[],v=[],S=[],m=[];for(let d=0;d<=i;d++){const T=[],A=d/i;let w=0;d===0&&o===0?w=.5/t:d===i&&l===Math.PI&&(w=-.5/t);for(let I=0;I<=t;I++){const R=I/t;f.x=-e*Math.cos(r+R*s)*Math.sin(o+A*a),f.y=e*Math.cos(o+A*a),f.z=e*Math.sin(r+R*s)*Math.sin(o+A*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(R+w,1-A),T.push(c++)}u.push(T)}for(let d=0;d<i;d++)for(let T=0;T<t;T++){const A=u[d][T+1],w=u[d][T],I=u[d+1][T],R=u[d+1][T+1];(d!==0||o>0)&&p.push(A,w,R),(d!==i-1||l<Math.PI)&&p.push(w,I,R)}this.setIndex(p),this.setAttribute("position",new Nn(v,3)),this.setAttribute("normal",new Nn(S,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wx extends ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=V0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xx extends ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class qx{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const $x=new qx;class dc{constructor(e){this.manager=e!==void 0?e:$x,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}dc.DEFAULT_MATERIAL_NAME="__DEFAULT";const mr=new WeakMap;class jx extends dc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=wa.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=mr.get(o);f===void 0&&(f=[],mr.set(o,f)),f.push({onLoad:t,onError:r})}return o}const a=Ms("img");function l(){u(),t&&t(this);const f=mr.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}mr.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),wa.remove(`image:${e}`);const h=mr.get(this)||[];for(let p=0;p<h.length;p++){const v=h[p];v.onError&&v.onError(f)}mr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),wa.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Yx extends dc{constructor(e){super(e)}load(e,t,i,r){const s=new kt,o=new jx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Kx extends Pd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zx extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ru=new Ct;class Jx{constructor(e,t,i=0,r=1/0){this.ray=new Td(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new fc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ru.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ru),this}intersectObject(e,t=!0,i=[]){return Ll(e,this,i,t),i.sort(Pu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ll(e[r],this,i,t);return i.sort(Pu),i}}function Pu(n,e){return n.distance-e.distance}function Ll(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Ll(s[o],e,t,!0)}}class Sr{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Du(n,e,t,i){const r=Qx(i);switch(t){case vd:return n*e;case bd:return n*e/r.components*r.byteLength;case rc:return n*e/r.components*r.byteLength;case sc:return n*e*2/r.components*r.byteLength;case oc:return n*e*2/r.components*r.byteLength;case Sd:return n*e*3/r.components*r.byteLength;case bn:return n*e*4/r.components*r.byteLength;case ac:return n*e*4/r.components*r.byteLength;case uo:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ho:case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:case ll:return Math.max(n,16)*Math.max(e,8)/4;case sl:case al:return Math.max(n,8)*Math.max(e,8)/2;case cl:case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Al:case wl:case Cl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rl:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Dl:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qx(n){switch(n){case si:case md:return{byteLength:1,components:1};case _s:case xd:case Br:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Ki:case tc:case Zn:return{byteLength:4,components:1};case gd:case _d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function eg(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<f.length;p++){const v=f[h],S=f[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,v=f.length;p<v;p++){const S=f[p];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var tg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ng=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ag=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Eg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ag=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ig=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$g=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,g_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,__=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,v_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,E_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,P_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,O_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,B_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,z_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,H_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,W_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,j_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Q_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ev=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,av=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Iv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:tg,alphahash_pars_fragment:ng,alphamap_fragment:ig,alphamap_pars_fragment:rg,alphatest_fragment:sg,alphatest_pars_fragment:og,aomap_fragment:ag,aomap_pars_fragment:lg,batching_pars_vertex:cg,batching_vertex:ug,begin_vertex:fg,beginnormal_vertex:dg,bsdfs:hg,iridescence_fragment:pg,bumpmap_pars_fragment:mg,clipping_planes_fragment:xg,clipping_planes_pars_fragment:gg,clipping_planes_pars_vertex:_g,clipping_planes_vertex:vg,color_fragment:Sg,color_pars_fragment:bg,color_pars_vertex:Mg,color_vertex:yg,common:Eg,cube_uv_reflection_fragment:Tg,defaultnormal_vertex:Ag,displacementmap_pars_vertex:wg,displacementmap_vertex:Cg,emissivemap_fragment:Rg,emissivemap_pars_fragment:Pg,colorspace_fragment:Dg,colorspace_pars_fragment:Ig,envmap_fragment:Lg,envmap_common_pars_fragment:Ug,envmap_pars_fragment:Ng,envmap_pars_vertex:Fg,envmap_physical_pars_fragment:$g,envmap_vertex:Og,fog_vertex:Bg,fog_pars_vertex:zg,fog_fragment:Vg,fog_pars_fragment:kg,gradientmap_pars_fragment:Hg,lightmap_pars_fragment:Gg,lights_lambert_fragment:Wg,lights_lambert_pars_fragment:Xg,lights_pars_begin:qg,lights_toon_fragment:jg,lights_toon_pars_fragment:Yg,lights_phong_fragment:Kg,lights_phong_pars_fragment:Zg,lights_physical_fragment:Jg,lights_physical_pars_fragment:Qg,lights_fragment_begin:e_,lights_fragment_maps:t_,lights_fragment_end:n_,logdepthbuf_fragment:i_,logdepthbuf_pars_fragment:r_,logdepthbuf_pars_vertex:s_,logdepthbuf_vertex:o_,map_fragment:a_,map_pars_fragment:l_,map_particle_fragment:c_,map_particle_pars_fragment:u_,metalnessmap_fragment:f_,metalnessmap_pars_fragment:d_,morphinstance_vertex:h_,morphcolor_vertex:p_,morphnormal_vertex:m_,morphtarget_pars_vertex:x_,morphtarget_vertex:g_,normal_fragment_begin:__,normal_fragment_maps:v_,normal_pars_fragment:S_,normal_pars_vertex:b_,normal_vertex:M_,normalmap_pars_fragment:y_,clearcoat_normal_fragment_begin:E_,clearcoat_normal_fragment_maps:T_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:w_,opaque_fragment:C_,packing:R_,premultiplied_alpha_fragment:P_,project_vertex:D_,dithering_fragment:I_,dithering_pars_fragment:L_,roughnessmap_fragment:U_,roughnessmap_pars_fragment:N_,shadowmap_pars_fragment:F_,shadowmap_pars_vertex:O_,shadowmap_vertex:B_,shadowmask_pars_fragment:z_,skinbase_vertex:V_,skinning_pars_vertex:k_,skinning_vertex:H_,skinnormal_vertex:G_,specularmap_fragment:W_,specularmap_pars_fragment:X_,tonemapping_fragment:q_,tonemapping_pars_fragment:$_,transmission_fragment:j_,transmission_pars_fragment:Y_,uv_pars_fragment:K_,uv_pars_vertex:Z_,uv_vertex:J_,worldpos_vertex:Q_,background_vert:ev,background_frag:tv,backgroundCube_vert:nv,backgroundCube_frag:iv,cube_vert:rv,cube_frag:sv,depth_vert:ov,depth_frag:av,distanceRGBA_vert:lv,distanceRGBA_frag:cv,equirect_vert:uv,equirect_frag:fv,linedashed_vert:dv,linedashed_frag:hv,meshbasic_vert:pv,meshbasic_frag:mv,meshlambert_vert:xv,meshlambert_frag:gv,meshmatcap_vert:_v,meshmatcap_frag:vv,meshnormal_vert:Sv,meshnormal_frag:bv,meshphong_vert:Mv,meshphong_frag:yv,meshphysical_vert:Ev,meshphysical_frag:Tv,meshtoon_vert:Av,meshtoon_frag:wv,points_vert:Cv,points_frag:Rv,shadow_vert:Pv,shadow_frag:Dv,sprite_vert:Iv,sprite_frag:Lv},Me={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Dn={basic:{uniforms:Xt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Xt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Xt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Xt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Xt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Xt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Xt([Me.points,Me.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Xt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Xt([Me.common,Me.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Xt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Xt([Me.sprite,Me.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Xt([Me.common,Me.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Xt([Me.lights,Me.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Dn.physical={uniforms:Xt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const io={r:0,b:0,g:0},Vi=new oi,Uv=new Ct;function Nv(n,e,t,i,r,s,o){const a=new ot(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(A){let w=A.isScene===!0?A.background:null;return w&&w.isTexture&&(w=(A.backgroundBlurriness>0?t:e).get(w)),w}function S(A){let w=!1;const I=v(A);I===null?d(a,l):I&&I.isColor&&(d(I,1),w=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,w){const I=v(w);I&&(I.isCubeTexture||I.mapping===Vo)?(u===void 0&&(u=new En(new Ds(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Fr(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Vi.copy(w.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(Vi)),u.material.toneMapped=rt.getTransfer(I.colorSpace)!==ut,(f!==I||h!==I.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=I,h=I.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new En(new Ho(2,2),new ai({name:"BackgroundMaterial",uniforms:Fr(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=rt.getTransfer(I.colorSpace)!==ut,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||h!==I.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=I,h=I.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,w){A.getRGB(io,Rd(n)),i.buffers.color.setClear(io.r,io.g,io.b,w,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,w=1){a.set(A),l=w,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:S,addToRenderList:m,dispose:T}}function Fv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(b,C,$,G,O){let re=!1;const k=f(G,$,C);s!==k&&(s=k,c(s.object)),re=p(b,G,$,O),re&&v(b,G,$,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,w(b,C,$,G),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,C,$){const G=$.wireframe===!0;let O=i[b.id];O===void 0&&(O={},i[b.id]=O);let re=O[C.id];re===void 0&&(re={},O[C.id]=re);let k=re[G];return k===void 0&&(k=h(l()),re[G]=k),k}function h(b){const C=[],$=[],G=[];for(let O=0;O<t;O++)C[O]=0,$[O]=0,G[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:$,attributeDivisors:G,object:b,attributes:{},index:null}}function p(b,C,$,G){const O=s.attributes,re=C.attributes;let k=0;const se=$.getAttributes();for(const W in se)if(se[W].location>=0){const me=O[W];let Re=re[W];if(Re===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(Re=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(Re=b.instanceColor)),me===void 0||me.attribute!==Re||Re&&me.data!==Re.data)return!0;k++}return s.attributesNum!==k||s.index!==G}function v(b,C,$,G){const O={},re=C.attributes;let k=0;const se=$.getAttributes();for(const W in se)if(se[W].location>=0){let me=re[W];me===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(me=b.instanceColor));const Re={};Re.attribute=me,me&&me.data&&(Re.data=me.data),O[W]=Re,k++}s.attributes=O,s.attributesNum=k,s.index=G}function S(){const b=s.newAttributes;for(let C=0,$=b.length;C<$;C++)b[C]=0}function m(b){d(b,0)}function d(b,C){const $=s.newAttributes,G=s.enabledAttributes,O=s.attributeDivisors;$[b]=1,G[b]===0&&(n.enableVertexAttribArray(b),G[b]=1),O[b]!==C&&(n.vertexAttribDivisor(b,C),O[b]=C)}function T(){const b=s.newAttributes,C=s.enabledAttributes;for(let $=0,G=C.length;$<G;$++)C[$]!==b[$]&&(n.disableVertexAttribArray($),C[$]=0)}function A(b,C,$,G,O,re,k){k===!0?n.vertexAttribIPointer(b,C,$,O,re):n.vertexAttribPointer(b,C,$,G,O,re)}function w(b,C,$,G){S();const O=G.attributes,re=$.getAttributes(),k=C.defaultAttributeValues;for(const se in re){const W=re[se];if(W.location>=0){let de=O[se];if(de===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),de!==void 0){const me=de.normalized,Re=de.itemSize,ke=e.get(de);if(ke===void 0)continue;const Ze=ke.buffer,et=ke.type,tt=ke.bytesPerElement,oe=et===n.INT||et===n.UNSIGNED_INT||de.gpuType===tc;if(de.isInterleavedBufferAttribute){const le=de.data,Ee=le.stride,Ue=de.offset;if(le.isInstancedInterleavedBuffer){for(let ne=0;ne<W.locationSize;ne++)d(W.location+ne,le.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ne=0;ne<W.locationSize;ne++)m(W.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ne=0;ne<W.locationSize;ne++)A(W.location+ne,Re/W.locationSize,et,me,Ee*tt,(Ue+Re/W.locationSize*ne)*tt,oe)}else{if(de.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)d(W.location+le,de.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let le=0;le<W.locationSize;le++)m(W.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let le=0;le<W.locationSize;le++)A(W.location+le,Re/W.locationSize,et,me,Re*tt,Re/W.locationSize*le*tt,oe)}}else if(k!==void 0){const me=k[se];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(W.location,me);break;case 3:n.vertexAttrib3fv(W.location,me);break;case 4:n.vertexAttrib4fv(W.location,me);break;default:n.vertexAttrib1fv(W.location,me)}}}}T()}function I(){B();for(const b in i){const C=i[b];for(const $ in C){const G=C[$];for(const O in G)u(G[O].object),delete G[O];delete C[$]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;const C=i[b.id];for(const $ in C){const G=C[$];for(const O in G)u(G[O].object),delete G[O];delete C[$]}delete i[b.id]}function N(b){for(const C in i){const $=i[C];if($[b.id]===void 0)continue;const G=$[b.id];for(const O in G)u(G[O].object),delete G[O];delete $[b.id]}}function B(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:N,initAttributes:S,enableAttribute:m,disableUnusedAttributes:T}}function Ov(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let S=0;S<f;S++)v+=u[S]*h[S];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==bn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const B=N===Br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==si&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Zn&&!B)}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:w,vertexTextures:I,maxSamples:R}}function zv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Gi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,A=T*4;let w=d.clippingState||null;l.value=w,w=u(v,h,A,p);for(let I=0;I!==A;++I)w[I]=t[I];d.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const d=p+S*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,w=p;A!==S;++A,w+=4)o.copy(f[A]).applyMatrix4(T,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function Vv(n){let e=new WeakMap;function t(o,a){return a===tl?o.mapping=Lr:a===nl&&(o.mapping=Ur),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===tl||a===nl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ox(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const yi=4,Iu=[.125,.215,.35,.446,.526,.582],Xi=20,kv=512,Yr=new Kx,Lu=new ot;let Ca=null,Ra=0,Pa=0,Da=!1;const Hv=new ee;class Uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Hv}=s;Ca=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ca,Ra,Pa),this._renderer.xr.enabled=Da,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ca=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Br,format:bn,colorSpace:Nr,depthBuffer:!1},r=Nu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Gv(s)),this._blurMaterial=Xv(s,e,t)}return r}_compileMaterial(e){const t=new En(new ci,e);this._renderer.compile(t,Yr)}_sceneToCubeUV(e,t,i,r,s){const l=new dn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Lu),f.toneMapping=Ti,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new En(new Ds,new cs({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let d=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,d=!0):(m.color.copy(Lu),d=!0);for(let A=0;A<6;A++){const w=A%3;w===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):w===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const I=this._cubeSize;xr(r,w*I,A>2?I:0,I,I),f.setRenderTarget(r),d&&f.render(S,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Lr||e.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Yr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){const T=3*Math.max(this._cubeSize,16),A=4*this._cubeSize;this._ggxMaterial=Wv(this._lodMax,T,A)}const o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=.05+c*.95,p=f*h,{_lodMax:v}=this,S=this._sizeLods[i],m=3*S*(i>v-yi?i-v+yi:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,xr(s,m,d,3*S,2*S),r.setRenderTarget(s),r.render(a,Yr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,xr(e,m,d,3*S,2*S),r.setRenderTarget(e),r.render(a,Yr)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xi-1),S=s/v,m=isFinite(s)?1+Math.floor(u*S):Xi;m>Xi&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const d=[];let T=0;for(let N=0;N<Xi;++N){const B=N/S,E=Math.exp(-B*B/2);d.push(E),N===0?T+=E:N<m&&(T+=2*E)}for(let N=0;N<d.length;N++)d[N]=d[N]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:A}=this;h.dTheta.value=v,h.mipInt.value=A-i;const w=this._sizeLods[r],I=3*w*(r>A-yi?r-A+yi:0),R=4*(this._cubeSize-w);xr(t,I,R,3*w,2*w),l.setRenderTarget(t),l.render(f,Yr)}}function Gv(n){const e=[],t=[],i=[];let r=n;const s=n-yi+1+Iu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-yi?l=Iu[o-n+yi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,S=3,m=2,d=1,T=new Float32Array(S*v*p),A=new Float32Array(m*v*p),w=new Float32Array(d*v*p);for(let R=0;R<p;R++){const N=R%3*2/3-1,B=R>2?0:-1,E=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];T.set(E,S*v*R),A.set(h,m*v*R);const b=[R,R,R,R,R,R];w.set(b,d*v*R)}const I=new ci;I.setAttribute("position",new Un(T,S)),I.setAttribute("uv",new Un(A,m)),I.setAttribute("faceIndex",new Un(w,d)),i.push(new En(I,null)),r>yi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Nu(n,e,t){const i=new Zi(n,e,t);return i.texture.mapping=Vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Wv(n,e,t){return new ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Xv(n,e,t){const i=new Float32Array(Xi),r=new ee(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Fu(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ou(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Go(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===tl||l===nl,u=l===Lr||l===Ur;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Uu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Uu(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function $v(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ys("WebGLRenderer: "+i+" extension not supported."),r}}}function jv(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,v=f.attributes.position;let S=0;if(p!==null){const T=p.array;S=p.version;for(let A=0,w=T.length;A<w;A+=3){const I=T[A+0],R=T[A+1],N=T[A+2];h.push(I,R,R,N,N,I)}}else if(v!==void 0){const T=v.array;S=v.version;for(let A=0,w=T.length/3-1;A<w;A+=3){const I=A+0,R=A+1,N=A+2;h.push(I,R,R,N,N,I)}}else return;const m=new(yd(h)?Cd:wd)(h,1);m.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Yv(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,h*o,v),t.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];t.update(m,i,1)}function f(h,p,v,S){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],S[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,S,0,v);let d=0;for(let T=0;T<v;T++)d+=p[T]*S[T];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Kv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Et("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Zv(n,e,t){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let A=0;p===!0&&(A=1),v===!0&&(A=2),S===!0&&(A=3);let w=a.attributes.position.count*A,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*I*4*f),N=new Ed(R,w,I,f);N.type=Zn,N.needsUpdate=!0;const B=A*4;for(let b=0;b<f;b++){const C=m[b],$=d[b],G=T[b],O=w*I*4*b;for(let re=0;re<C.count;re++){const k=re*B;p===!0&&(r.fromBufferAttribute(C,re),R[O+k+0]=r.x,R[O+k+1]=r.y,R[O+k+2]=r.z,R[O+k+3]=0),v===!0&&(r.fromBufferAttribute($,re),R[O+k+4]=r.x,R[O+k+5]=r.y,R[O+k+6]=r.z,R[O+k+7]=0),S===!0&&(r.fromBufferAttribute(G,re),R[O+k+8]=r.x,R[O+k+9]=r.y,R[O+k+10]=r.z,R[O+k+11]=G.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new at(w,I)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Jv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Fd=new kt,Bu=new Ld(1,1),Od=new Ed,Bd=new Sx,zd=new Dd,zu=[],Vu=[],ku=new Float32Array(16),Hu=new Float32Array(9),Gu=new Float32Array(4);function kr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=zu[r];if(s===void 0&&(s=new Float32Array(r),zu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wo(n,e){let t=Vu[e];t===void 0&&(t=new Int32Array(e),Vu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Qv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function nS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function iS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Gu.set(i),n.uniformMatrix2fv(this.addr,!1,Gu),Dt(t,i)}}function rS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Hu.set(i),n.uniformMatrix3fv(this.addr,!1,Hu),Dt(t,i)}}function sS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;ku.set(i),n.uniformMatrix4fv(this.addr,!1,ku),Dt(t,i)}}function oS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function aS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function lS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function cS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function uS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function dS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function hS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function pS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Bu.compareFunction=Md,s=Bu):s=Fd,t.setTexture2D(e||s,r)}function mS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bd,r)}function xS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||zd,r)}function gS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Od,r)}function _S(n){switch(n){case 5126:return Qv;case 35664:return eS;case 35665:return tS;case 35666:return nS;case 35674:return iS;case 35675:return rS;case 35676:return sS;case 5124:case 35670:return oS;case 35667:case 35671:return aS;case 35668:case 35672:return lS;case 35669:case 35673:return cS;case 5125:return uS;case 36294:return fS;case 36295:return dS;case 36296:return hS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return xS;case 36289:case 36303:case 36311:case 36292:return gS}}function vS(n,e){n.uniform1fv(this.addr,e)}function SS(n,e){const t=kr(e,this.size,2);n.uniform2fv(this.addr,t)}function bS(n,e){const t=kr(e,this.size,3);n.uniform3fv(this.addr,t)}function MS(n,e){const t=kr(e,this.size,4);n.uniform4fv(this.addr,t)}function yS(n,e){const t=kr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ES(n,e){const t=kr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function TS(n,e){const t=kr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function AS(n,e){n.uniform1iv(this.addr,e)}function wS(n,e){n.uniform2iv(this.addr,e)}function CS(n,e){n.uniform3iv(this.addr,e)}function RS(n,e){n.uniform4iv(this.addr,e)}function PS(n,e){n.uniform1uiv(this.addr,e)}function DS(n,e){n.uniform2uiv(this.addr,e)}function IS(n,e){n.uniform3uiv(this.addr,e)}function LS(n,e){n.uniform4uiv(this.addr,e)}function US(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fd,s[o])}function NS(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Bd,s[o])}function FS(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||zd,s[o])}function OS(n,e,t){const i=this.cache,r=e.length,s=Wo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Od,s[o])}function BS(n){switch(n){case 5126:return vS;case 35664:return SS;case 35665:return bS;case 35666:return MS;case 35674:return yS;case 35675:return ES;case 35676:return TS;case 5124:case 35670:return AS;case 35667:case 35671:return wS;case 35668:case 35672:return CS;case 35669:case 35673:return RS;case 5125:return PS;case 36294:return DS;case 36295:return IS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return OS}}class zS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_S(t.type)}}class VS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BS(t.type)}}class kS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function Wu(n,e){n.seq.push(e),n.map[e.id]=e}function HS(n,e,t){const i=n.name,r=i.length;for(Ia.lastIndex=0;;){const s=Ia.exec(i),o=Ia.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wu(t,c===void 0?new zS(a,n,e):new VS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new kS(a),Wu(t,f)),t=f}}}class mo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);HS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Xu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const GS=37297;let WS=0;function XS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const qu=new je;function qS(n){rt._getMatrix(qu,rt.workingColorSpace,n);const e=`mat3( ${qu.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case yo:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $u(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+XS(n.getShaderSource(e),a)}else return s}function $S(n,e){const t=qS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jS(n,e){let t;switch(e){case I0:t="Linear";break;case L0:t="Reinhard";break;case U0:t="Cineon";break;case N0:t="ACESFilmic";break;case O0:t="AgX";break;case B0:t="Neutral";break;case F0:t="Custom";break;default:qe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ro=new ee;function YS(){rt.getLuminanceCoefficients(ro);const n=ro.x.toFixed(4),e=ro.y.toFixed(4),t=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function ZS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function JS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Zr(n){return n!==""}function ju(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(n){return n.replace(QS,tb)}const eb=new Map;function tb(n,e){let t=Ye[e];if(t===void 0){const i=eb.get(e);if(i!==void 0)t=Ye[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ul(t)}const nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(n){return n.replace(nb,ib)}function ib(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===f0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function sb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Lr:case Ur:e="ENVMAP_TYPE_CUBE";break;case Vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ob(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function ab(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case P0:e="ENVMAP_BLENDING_MIX";break;case D0:e="ENVMAP_BLENDING_ADD";break}return e}function lb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function cb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rb(t),c=sb(t),u=ob(t),f=ab(t),h=lb(t),p=KS(t),v=ZS(s),S=r.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zr).join(`
`),d.length>0&&(d+=`
`)):(m=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),d=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ti?jS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,$S("linearToOutputTexel",t.outputColorSpace),YS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),o=Ul(o),o=ju(o,t),o=Yu(o,t),a=Ul(a),a=ju(a,t),a=Yu(a,t),o=Ku(o),a=Ku(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=T+m+o,w=T+d+a,I=Xu(r,r.VERTEX_SHADER,A),R=Xu(r,r.FRAGMENT_SHADER,w);r.attachShader(S,I),r.attachShader(S,R),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function N(C){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(S)||"",G=r.getShaderInfoLog(I)||"",O=r.getShaderInfoLog(R)||"",re=$.trim(),k=G.trim(),se=O.trim();let W=!0,de=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,I,R);else{const me=$u(r,I,"vertex"),Re=$u(r,R,"fragment");Et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+re+`
`+me+`
`+Re)}else re!==""?qe("WebGLProgram: Program Info Log:",re):(k===""||se==="")&&(de=!1);de&&(C.diagnostics={runnable:W,programLog:re,vertexShader:{log:k,prefix:m},fragmentShader:{log:se,prefix:d}})}r.deleteShader(I),r.deleteShader(R),B=new mo(r,S),E=JS(r,S)}let B;this.getUniforms=function(){return B===void 0&&N(this),B};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(S,GS)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WS++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=I,this.fragmentShader=R,this}let ub=0;class fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new db(e),t.set(e,i)),i}}class db{constructor(e){this.id=ub++,this.code=e,this.usedTimes=0}}function hb(n,e,t,i,r,s,o){const a=new fc,l=new fb,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,C,$,G){const O=$.fog,re=G.geometry,k=E.isMeshStandardMaterial?$.environment:null,se=(E.isMeshStandardMaterial?t:e).get(E.envMap||k),W=se&&se.mapping===Vo?se.image.height:null,de=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&qe("WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const me=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Re=me!==void 0?me.length:0;let ke=0;re.morphAttributes.position!==void 0&&(ke=1),re.morphAttributes.normal!==void 0&&(ke=2),re.morphAttributes.color!==void 0&&(ke=3);let Ze,et,tt,oe;if(de){const lt=Dn[de];Ze=lt.vertexShader,et=lt.fragmentShader}else Ze=E.vertexShader,et=E.fragmentShader,l.update(E),tt=l.getVertexShaderID(E),oe=l.getFragmentShaderID(E);const le=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),Ue=G.isInstancedMesh===!0,ne=G.isBatchedMesh===!0,ae=!!E.map,j=!!E.matcap,x=!!se,P=!!E.aoMap,_=!!E.lightMap,D=!!E.bumpMap,z=!!E.normalMap,K=!!E.displacementMap,Y=!!E.emissiveMap,fe=!!E.metalnessMap,J=!!E.roughnessMap,Z=E.anisotropy>0,y=E.clearcoat>0,g=E.dispersion>0,L=E.iridescence>0,X=E.sheen>0,ie=E.transmission>0,q=Z&&!!E.anisotropyMap,ge=y&&!!E.clearcoatMap,pe=y&&!!E.clearcoatNormalMap,we=y&&!!E.clearcoatRoughnessMap,Ae=L&&!!E.iridescenceMap,ce=L&&!!E.iridescenceThicknessMap,xe=X&&!!E.sheenColorMap,Be=X&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,ve=!!E.specularColorMap,He=!!E.specularIntensityMap,U=ie&&!!E.transmissionMap,ye=ie&&!!E.thicknessMap,Se=!!E.gradientMap,be=!!E.alphaMap,he=E.alphaTest>0,ue=!!E.alphaHash,De=!!E.extensions;let Xe=Ti;E.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const mt={shaderID:de,shaderType:E.type,shaderName:E.name,vertexShader:Ze,fragmentShader:et,defines:E.defines,customVertexShaderID:tt,customFragmentShaderID:oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ne,batchingColor:ne&&G._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&G.instanceColor!==null,instancingMorph:Ue&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Nr,alphaToCoverage:!!E.alphaToCoverage,map:ae,matcap:j,envMap:x,envMapMode:x&&se.mapping,envMapCubeUVHeight:W,aoMap:P,lightMap:_,bumpMap:D,normalMap:z,displacementMap:h&&K,emissiveMap:Y,normalMapObjectSpace:z&&E.normalMapType===G0,normalMapTangentSpace:z&&E.normalMapType===H0,metalnessMap:fe,roughnessMap:J,anisotropy:Z,anisotropyMap:q,clearcoat:y,clearcoatMap:ge,clearcoatNormalMap:pe,clearcoatRoughnessMap:we,dispersion:g,iridescence:L,iridescenceMap:Ae,iridescenceThicknessMap:ce,sheen:X,sheenColorMap:xe,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:ve,specularIntensityMap:He,transmission:ie,transmissionMap:U,thicknessMap:ye,gradientMap:Se,opaque:E.transparent===!1&&E.blending===Ar&&E.alphaToCoverage===!1,alphaMap:be,alphaTest:he,alphaHash:ue,combine:E.combine,mapUv:ae&&S(E.map.channel),aoMapUv:P&&S(E.aoMap.channel),lightMapUv:_&&S(E.lightMap.channel),bumpMapUv:D&&S(E.bumpMap.channel),normalMapUv:z&&S(E.normalMap.channel),displacementMapUv:K&&S(E.displacementMap.channel),emissiveMapUv:Y&&S(E.emissiveMap.channel),metalnessMapUv:fe&&S(E.metalnessMap.channel),roughnessMapUv:J&&S(E.roughnessMap.channel),anisotropyMapUv:q&&S(E.anisotropyMap.channel),clearcoatMapUv:ge&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:pe&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Be&&S(E.sheenRoughnessMap.channel),specularMapUv:Pe&&S(E.specularMap.channel),specularColorMapUv:ve&&S(E.specularColorMap.channel),specularIntensityMapUv:He&&S(E.specularIntensityMap.channel),transmissionMapUv:U&&S(E.transmissionMap.channel),thicknessMapUv:ye&&S(E.thicknessMap.channel),alphaMapUv:be&&S(E.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(z||Z),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!re.attributes.uv&&(ae||be),fog:!!O,useFog:E.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:G.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ae&&E.map.isVideoTexture===!0&&rt.getTransfer(E.map.colorSpace)===ut,decodeVideoTextureEmissive:Y&&E.emissiveMap.isVideoTexture===!0&&rt.getTransfer(E.emissiveMap.colorSpace)===ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Yn,flipSided:E.side===Vt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:De&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&E.extensions.multiDraw===!0||ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function d(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)b.push(C),b.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(T(b,E),A(b,E),b.push(n.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function T(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function A(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function w(E){const b=v[E.type];let C;if(b){const $=Dn[b];C=Lx.clone($.uniforms)}else C=E.uniforms;return C}function I(E,b){let C;for(let $=0,G=u.length;$<G;$++){const O=u[$];if(O.cacheKey===b){C=O,++C.usedTimes;break}}return C===void 0&&(C=new cb(n,b,E,s),u.push(C)),C}function R(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function N(E){l.remove(E)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:I,releaseProgram:R,releaseShaderCache:N,programs:u,dispose:B}}function pb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function mb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ju(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,v,S,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:S,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=S,d.group=m),e++,d}function a(f,h,p,v,S,m){const d=o(f,h,p,v,S,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,v,S,m){const d=o(f,h,p,v,S,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||mb),i.length>1&&i.sort(h||Ju),r.length>1&&r.sort(h||Ju)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function xb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Qu,n.set(i,[o])):r>=s.length?(o=new Qu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function gb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new ot};break;case"SpotLight":t={position:new ee,direction:new ee,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function _b(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let vb=0;function Sb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bb(n){const e=new gb,t=_b(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ee);const r=new ee,s=new Ct,o=new Ct;function a(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,v=0,S=0,m=0,d=0,T=0,A=0,w=0,I=0,R=0,N=0;c.sort(Sb);for(let E=0,b=c.length;E<b;E++){const C=c[E],$=C.color,G=C.intensity,O=C.distance,re=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=$.r*G,f+=$.g*G,h+=$.b*G;else if(C.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(C.sh.coefficients[k],G);N++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const se=C.shadow,W=t.get(C);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=C.shadow.matrix,T++}i.directional[p]=k,p++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy($).multiplyScalar(G),k.distance=O,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,i.spot[S]=k;const se=C.shadow;if(C.map&&(i.spotLightMap[I]=C.map,I++,se.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[S]=se.matrix,C.castShadow){const W=t.get(C);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,i.spotShadow[S]=W,i.spotShadowMap[S]=re,w++}S++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy($).multiplyScalar(G),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=k,m++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const se=C.shadow,W=t.get(C);W.shadowIntensity=se.intensity,W.shadowBias=se.bias,W.shadowNormalBias=se.normalBias,W.shadowRadius=se.radius,W.shadowMapSize=se.mapSize,W.shadowCameraNear=se.camera.near,W.shadowCameraFar=se.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=re,i.pointShadowMatrix[v]=C.shadow.matrix,A++}i.point[v]=k,v++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(G),k.groundColor.copy(C.groundColor).multiplyScalar(G),i.hemi[d]=k,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const B=i.hash;(B.directionalLength!==p||B.pointLength!==v||B.spotLength!==S||B.rectAreaLength!==m||B.hemiLength!==d||B.numDirectionalShadows!==T||B.numPointShadows!==A||B.numSpotShadows!==w||B.numSpotMaps!==I||B.numLightProbes!==N)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=w+I-R,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=N,B.directionalLength=p,B.pointLength=v,B.spotLength=S,B.rectAreaLength=m,B.hemiLength=d,B.numDirectionalShadows=T,B.numPointShadows=A,B.numSpotShadows=w,B.numSpotMaps=I,B.numLightProbes=N,i.version=vb++)}function l(c,u){let f=0,h=0,p=0,v=0,S=0;const m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const A=c[d];if(A.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),f++}else if(A.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const w=i.rectArea[v];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),o.identity(),s.copy(A.matrixWorld),s.premultiply(m),o.extractRotation(s),w.halfWidth.set(A.width*.5,0,0),w.halfHeight.set(0,A.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){const w=i.point[h];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){const w=i.hemi[S];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function ef(n){const e=new bb(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Mb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ef(n),e.set(r,[a])):s>=o.length?(a=new ef(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tb(n,e,t){let i=new Id;const r=new at,s=new at,o=new At,a=new Wx({depthPacking:k0}),l=new Xx,c={},u=t.maxTextureSize,f={[Ci]:Vt,[Vt]:Ci,[Yn]:Yn},h=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:yb,fragmentShader:Eb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new ci;v.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new En(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dd;let d=this.type;this.render=function(R,N,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),b=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),$=n.state;$.setBlending(ei),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const G=d!==Xn&&this.type===Xn,O=d===Xn&&this.type!==Xn;for(let re=0,k=R.length;re<k;re++){const se=R[re],W=se.shadow;if(W===void 0){qe("WebGLShadowMap:",se,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const de=W.getFrameExtents();if(r.multiply(de),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,W.mapSize.y=s.y)),W.map===null||G===!0||O===!0){const Re=this.type!==Xn?{minFilter:an,magFilter:an}:{};W.map!==null&&W.map.dispose(),W.map=new Zi(r.x,r.y,Re),W.map.texture.name=se.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const me=W.getViewportCount();for(let Re=0;Re<me;Re++){const ke=W.getViewport(Re);o.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),$.viewport(o),W.updateMatrices(se,Re),i=W.getFrustum(),w(N,B,W.camera,se,this.type)}W.isPointLightShadow!==!0&&this.type===Xn&&T(W,B),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,b,C)};function T(R,N){const B=e.update(S);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zi(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(N,null,B,h,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(N,null,B,p,S,null)}function A(R,N,B,E){let b=null;const C=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)b=C;else if(b=B.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const $=b.uuid,G=N.uuid;let O=c[$];O===void 0&&(O={},c[$]=O);let re=O[G];re===void 0&&(re=b.clone(),O[G]=re,N.addEventListener("dispose",I)),b=re}if(b.visible=N.visible,b.wireframe=N.wireframe,E===Xn?b.side=N.shadowSide!==null?N.shadowSide:N.side:b.side=N.shadowSide!==null?N.shadowSide:f[N.side],b.alphaMap=N.alphaMap,b.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,b.map=N.map,b.clipShadows=N.clipShadows,b.clippingPlanes=N.clippingPlanes,b.clipIntersection=N.clipIntersection,b.displacementMap=N.displacementMap,b.displacementScale=N.displacementScale,b.displacementBias=N.displacementBias,b.wireframeLinewidth=N.wireframeLinewidth,b.linewidth=N.linewidth,B.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const $=n.properties.get(b);$.light=B}return b}function w(R,N,B,E,b){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Xn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);const G=e.update(R),O=R.material;if(Array.isArray(O)){const re=G.groups;for(let k=0,se=re.length;k<se;k++){const W=re[k],de=O[W.materialIndex];if(de&&de.visible){const me=A(R,de,E,b);R.onBeforeShadow(n,R,N,B,G,me,W),n.renderBufferDirect(B,null,G,me,R,W),R.onAfterShadow(n,R,N,B,G,me,W)}}}else if(O.visible){const re=A(R,O,E,b);R.onBeforeShadow(n,R,N,B,G,re,null),n.renderBufferDirect(B,null,G,re,R,null),R.onAfterShadow(n,R,N,B,G,re,null)}}const $=R.children;for(let G=0,O=$.length;G<O;G++)w($[G],N,B,E,b)}function I(R){R.target.removeEventListener("dispose",I);for(const B in c){const E=c[B],b=R.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const Ab={[ja]:Ya,[Ka]:Qa,[Za]:el,[Ir]:Ja,[Ya]:ja,[Qa]:Ka,[el]:Za,[Ja]:Ir};function wb(n,e){function t(){let U=!1;const ye=new At;let Se=null;const be=new At(0,0,0,0);return{setMask:function(he){Se!==he&&!U&&(n.colorMask(he,he,he,he),Se=he)},setLocked:function(he){U=he},setClear:function(he,ue,De,Xe,mt){mt===!0&&(he*=Xe,ue*=Xe,De*=Xe),ye.set(he,ue,De,Xe),be.equals(ye)===!1&&(n.clearColor(he,ue,De,Xe),be.copy(ye))},reset:function(){U=!1,Se=null,be.set(-1,0,0,0)}}}function i(){let U=!1,ye=!1,Se=null,be=null,he=null;return{setReversed:function(ue){if(ye!==ue){const De=e.get("EXT_clip_control");ue?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ye=ue;const Xe=he;he=null,this.setClear(Xe)}},getReversed:function(){return ye},setTest:function(ue){ue?le(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(ue){Se!==ue&&!U&&(n.depthMask(ue),Se=ue)},setFunc:function(ue){if(ye&&(ue=Ab[ue]),be!==ue){switch(ue){case ja:n.depthFunc(n.NEVER);break;case Ya:n.depthFunc(n.ALWAYS);break;case Ka:n.depthFunc(n.LESS);break;case Ir:n.depthFunc(n.LEQUAL);break;case Za:n.depthFunc(n.EQUAL);break;case Ja:n.depthFunc(n.GEQUAL);break;case Qa:n.depthFunc(n.GREATER);break;case el:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=ue}},setLocked:function(ue){U=ue},setClear:function(ue){he!==ue&&(ye&&(ue=1-ue),n.clearDepth(ue),he=ue)},reset:function(){U=!1,Se=null,be=null,he=null,ye=!1}}}function r(){let U=!1,ye=null,Se=null,be=null,he=null,ue=null,De=null,Xe=null,mt=null;return{setTest:function(lt){U||(lt?le(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(lt){ye!==lt&&!U&&(n.stencilMask(lt),ye=lt)},setFunc:function(lt,An,xn){(Se!==lt||be!==An||he!==xn)&&(n.stencilFunc(lt,An,xn),Se=lt,be=An,he=xn)},setOp:function(lt,An,xn){(ue!==lt||De!==An||Xe!==xn)&&(n.stencilOp(lt,An,xn),ue=lt,De=An,Xe=xn)},setLocked:function(lt){U=lt},setClear:function(lt){mt!==lt&&(n.clearStencil(lt),mt=lt)},reset:function(){U=!1,ye=null,Se=null,be=null,he=null,ue=null,De=null,Xe=null,mt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],v=null,S=!1,m=null,d=null,T=null,A=null,w=null,I=null,R=null,N=new ot(0,0,0),B=0,E=!1,b=null,C=null,$=null,G=null,O=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,se=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=se>=1):W.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=se>=2);let de=null,me={};const Re=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),Ze=new At().fromArray(Re),et=new At().fromArray(ke);function tt(U,ye,Se,be){const he=new Uint8Array(4),ue=n.createTexture();n.bindTexture(U,ue),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<Se;De++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ye+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return ue}const oe={};oe[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(n.DEPTH_TEST),o.setFunc(Ir),D(!1),z(iu),le(n.CULL_FACE),P(ei);function le(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Ee(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ue(U,ye){return f[U]!==ye?(n.bindFramebuffer(U,ye),f[U]=ye,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function ne(U,ye){let Se=p,be=!1;if(U){Se=h.get(ye),Se===void 0&&(Se=[],h.set(ye,Se));const he=U.textures;if(Se.length!==he.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,De=he.length;ue<De;ue++)Se[ue]=n.COLOR_ATTACHMENT0+ue;Se.length=he.length,be=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,be=!0);be&&n.drawBuffers(Se)}function ae(U){return v!==U?(n.useProgram(U),v=U,!0):!1}const j={[Wi]:n.FUNC_ADD,[h0]:n.FUNC_SUBTRACT,[p0]:n.FUNC_REVERSE_SUBTRACT};j[m0]=n.MIN,j[x0]=n.MAX;const x={[g0]:n.ZERO,[_0]:n.ONE,[v0]:n.SRC_COLOR,[qa]:n.SRC_ALPHA,[T0]:n.SRC_ALPHA_SATURATE,[y0]:n.DST_COLOR,[b0]:n.DST_ALPHA,[S0]:n.ONE_MINUS_SRC_COLOR,[$a]:n.ONE_MINUS_SRC_ALPHA,[E0]:n.ONE_MINUS_DST_COLOR,[M0]:n.ONE_MINUS_DST_ALPHA,[A0]:n.CONSTANT_COLOR,[w0]:n.ONE_MINUS_CONSTANT_COLOR,[C0]:n.CONSTANT_ALPHA,[R0]:n.ONE_MINUS_CONSTANT_ALPHA};function P(U,ye,Se,be,he,ue,De,Xe,mt,lt){if(U===ei){S===!0&&(Ee(n.BLEND),S=!1);return}if(S===!1&&(le(n.BLEND),S=!0),U!==d0){if(U!==m||lt!==E){if((d!==Wi||w!==Wi)&&(n.blendEquation(n.FUNC_ADD),d=Wi,w=Wi),lt)switch(U){case Ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ru:n.blendFunc(n.ONE,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ou:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",U);break}else switch(U){case Ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ru:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case su:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ou:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",U);break}T=null,A=null,I=null,R=null,N.set(0,0,0),B=0,m=U,E=lt}return}he=he||ye,ue=ue||Se,De=De||be,(ye!==d||he!==w)&&(n.blendEquationSeparate(j[ye],j[he]),d=ye,w=he),(Se!==T||be!==A||ue!==I||De!==R)&&(n.blendFuncSeparate(x[Se],x[be],x[ue],x[De]),T=Se,A=be,I=ue,R=De),(Xe.equals(N)===!1||mt!==B)&&(n.blendColor(Xe.r,Xe.g,Xe.b,mt),N.copy(Xe),B=mt),m=U,E=!1}function _(U,ye){U.side===Yn?Ee(n.CULL_FACE):le(n.CULL_FACE);let Se=U.side===Vt;ye&&(Se=!Se),D(Se),U.blending===Ar&&U.transparent===!1?P(ei):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const be=U.stencilWrite;a.setTest(be),be&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Y(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function D(U){b!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),b=U)}function z(U){U!==c0?(le(n.CULL_FACE),U!==C&&(U===iu?n.cullFace(n.BACK):U===u0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),C=U}function K(U){U!==$&&(k&&n.lineWidth(U),$=U)}function Y(U,ye,Se){U?(le(n.POLYGON_OFFSET_FILL),(G!==ye||O!==Se)&&(n.polygonOffset(ye,Se),G=ye,O=Se)):Ee(n.POLYGON_OFFSET_FILL)}function fe(U){U?le(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function J(U){U===void 0&&(U=n.TEXTURE0+re-1),de!==U&&(n.activeTexture(U),de=U)}function Z(U,ye,Se){Se===void 0&&(de===null?Se=n.TEXTURE0+re-1:Se=de);let be=me[Se];be===void 0&&(be={type:void 0,texture:void 0},me[Se]=be),(be.type!==U||be.texture!==ye)&&(de!==Se&&(n.activeTexture(Se),de=Se),n.bindTexture(U,ye||oe[U]),be.type=U,be.texture=ye)}function y(){const U=me[de];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function X(){try{n.texSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function ie(){try{n.texSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function pe(){try{n.texStorage2D(...arguments)}catch(U){U("WebGLState:",U)}}function we(){try{n.texStorage3D(...arguments)}catch(U){U("WebGLState:",U)}}function Ae(){try{n.texImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function ce(){try{n.texImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function xe(U){Ze.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ze.copy(U))}function Be(U){et.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),et.copy(U))}function Pe(U,ye){let Se=c.get(ye);Se===void 0&&(Se=new WeakMap,c.set(ye,Se));let be=Se.get(U);be===void 0&&(be=n.getUniformBlockIndex(ye,U.name),Se.set(U,be))}function ve(U,ye){const be=c.get(ye).get(U);l.get(ye)!==be&&(n.uniformBlockBinding(ye,be,U.__bindingPointIndex),l.set(ye,be))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,me={},f={},h=new WeakMap,p=[],v=null,S=!1,m=null,d=null,T=null,A=null,w=null,I=null,R=null,N=new ot(0,0,0),B=0,E=!1,b=null,C=null,$=null,G=null,O=null,Ze.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Ee,bindFramebuffer:Ue,drawBuffers:ne,useProgram:ae,setBlending:P,setMaterial:_,setFlipSided:D,setCullFace:z,setLineWidth:K,setPolygonOffset:Y,setScissorTest:fe,activeTexture:J,bindTexture:Z,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Ae,texImage3D:ce,updateUBOMapping:Pe,uniformBlockBinding:ve,texStorage2D:pe,texStorage3D:we,texSubImage2D:X,texSubImage3D:ie,compressedTexSubImage2D:q,compressedTexSubImage3D:ge,scissor:xe,viewport:Be,reset:He}}function Cb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,g){return p?new OffscreenCanvas(y,g):Ms("canvas")}function S(y,g,L){let X=1;const ie=Z(y);if((ie.width>L||ie.height>L)&&(X=L/Math.max(ie.width,ie.height)),X<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const q=Math.floor(X*ie.width),ge=Math.floor(X*ie.height);f===void 0&&(f=v(q,ge));const pe=g?v(q,ge):f;return pe.width=q,pe.height=ge,pe.getContext("2d").drawImage(y,0,0,q,ge),qe("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+q+"x"+ge+")."),pe}else return"data"in y&&qe("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){n.generateMipmap(y)}function T(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(y,g,L,X,ie=!1){if(y!==null){if(n[y]!==void 0)return n[y];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let q=g;if(g===n.RED&&(L===n.FLOAT&&(q=n.R32F),L===n.HALF_FLOAT&&(q=n.R16F),L===n.UNSIGNED_BYTE&&(q=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.R8UI),L===n.UNSIGNED_SHORT&&(q=n.R16UI),L===n.UNSIGNED_INT&&(q=n.R32UI),L===n.BYTE&&(q=n.R8I),L===n.SHORT&&(q=n.R16I),L===n.INT&&(q=n.R32I)),g===n.RG&&(L===n.FLOAT&&(q=n.RG32F),L===n.HALF_FLOAT&&(q=n.RG16F),L===n.UNSIGNED_BYTE&&(q=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RG8UI),L===n.UNSIGNED_SHORT&&(q=n.RG16UI),L===n.UNSIGNED_INT&&(q=n.RG32UI),L===n.BYTE&&(q=n.RG8I),L===n.SHORT&&(q=n.RG16I),L===n.INT&&(q=n.RG32I)),g===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGB8UI),L===n.UNSIGNED_SHORT&&(q=n.RGB16UI),L===n.UNSIGNED_INT&&(q=n.RGB32UI),L===n.BYTE&&(q=n.RGB8I),L===n.SHORT&&(q=n.RGB16I),L===n.INT&&(q=n.RGB32I)),g===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),L===n.UNSIGNED_INT&&(q=n.RGBA32UI),L===n.BYTE&&(q=n.RGBA8I),L===n.SHORT&&(q=n.RGBA16I),L===n.INT&&(q=n.RGBA32I)),g===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),g===n.RGBA){const ge=ie?yo:rt.getTransfer(X);L===n.FLOAT&&(q=n.RGBA32F),L===n.HALF_FLOAT&&(q=n.RGBA16F),L===n.UNSIGNED_BYTE&&(q=ge===ut?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function w(y,g){let L;return y?g===null||g===Ki||g===vs?L=n.DEPTH24_STENCIL8:g===Zn?L=n.DEPTH32F_STENCIL8:g===_s&&(L=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ki||g===vs?L=n.DEPTH_COMPONENT24:g===Zn?L=n.DEPTH_COMPONENT32F:g===_s&&(L=n.DEPTH_COMPONENT16),L}function I(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==an&&y.minFilter!==pn?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function R(y){const g=y.target;g.removeEventListener("dispose",R),B(g),g.isVideoTexture&&u.delete(g)}function N(y){const g=y.target;g.removeEventListener("dispose",N),b(g)}function B(y){const g=i.get(y);if(g.__webglInit===void 0)return;const L=y.source,X=h.get(L);if(X){const ie=X[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(y),Object.keys(X).length===0&&h.delete(L)}i.remove(y)}function E(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const L=y.source,X=h.get(L);delete X[g.__cacheKey],o.memory.textures--}function b(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let ie=0;ie<g.__webglFramebuffer[X].length;ie++)n.deleteFramebuffer(g.__webglFramebuffer[X][ie]);else n.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)n.deleteFramebuffer(g.__webglFramebuffer[X]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=y.textures;for(let X=0,ie=L.length;X<ie;X++){const q=i.get(L[X]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(L[X])}i.remove(y)}let C=0;function $(){C=0}function G(){const y=C;return y>=r.maxTextures&&qe("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),C+=1,y}function O(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function re(y,g){const L=i.get(y);if(y.isVideoTexture&&fe(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&L.__version!==y.version){const X=y.image;if(X===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(L,y,g);return}}else y.isExternalTexture&&(L.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function k(y,g){const L=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){oe(L,y,g);return}else y.isExternalTexture&&(L.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function se(y,g){const L=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){oe(L,y,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function W(y,g){const L=i.get(y);if(y.version>0&&L.__version!==y.version){le(L,y,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const de={[il]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[rl]:n.MIRRORED_REPEAT},me={[an]:n.NEAREST,[z0]:n.NEAREST_MIPMAP_NEAREST,[Bs]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[ra]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},Re={[W0]:n.NEVER,[K0]:n.ALWAYS,[X0]:n.LESS,[Md]:n.LEQUAL,[q0]:n.EQUAL,[Y0]:n.GEQUAL,[$0]:n.GREATER,[j0]:n.NOTEQUAL};function ke(y,g){if(g.type===Zn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===pn||g.magFilter===ra||g.magFilter===Bs||g.magFilter===qi||g.minFilter===pn||g.minFilter===ra||g.minFilter===Bs||g.minFilter===qi)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,de[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,de[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,de[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,me[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Re[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===an||g.minFilter!==Bs&&g.minFilter!==qi||g.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ze(y,g){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",R));const X=g.source;let ie=h.get(X);ie===void 0&&(ie={},h.set(X,ie));const q=O(g);if(q!==y.__cacheKey){ie[q]===void 0&&(ie[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),ie[q].usedTimes++;const ge=ie[y.__cacheKey];ge!==void 0&&(ie[y.__cacheKey].usedTimes--,ge.usedTimes===0&&E(g)),y.__cacheKey=q,y.__webglTexture=ie[q].texture}return L}function et(y,g,L){return Math.floor(Math.floor(y/L)/g)}function tt(y,g,L,X){const q=y.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,L,X,g.data);else{q.sort((ce,xe)=>ce.start-xe.start);let ge=0;for(let ce=1;ce<q.length;ce++){const xe=q[ge],Be=q[ce],Pe=xe.start+xe.count,ve=et(Be.start,g.width,4),He=et(xe.start,g.width,4);Be.start<=Pe+1&&ve===He&&et(Be.start+Be.count-1,g.width,4)===ve?xe.count=Math.max(xe.count,Be.start+Be.count-xe.start):(++ge,q[ge]=Be)}q.length=ge+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),we=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ce=0,xe=q.length;ce<xe;ce++){const Be=q[ce],Pe=Math.floor(Be.start/4),ve=Math.ceil(Be.count/4),He=Pe%g.width,U=Math.floor(Pe/g.width),ye=ve,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,He,U,ye,Se,L,X,g.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,we),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function oe(y,g,L){let X=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=n.TEXTURE_3D);const ie=Ze(y,g),q=g.source;t.bindTexture(X,y.__webglTexture,n.TEXTURE0+L);const ge=i.get(q);if(q.version!==ge.__version||ie===!0){t.activeTexture(n.TEXTURE0+L);const pe=rt.getPrimaries(rt.workingColorSpace),we=g.colorSpace===Mi?null:rt.getPrimaries(g.colorSpace),Ae=g.colorSpace===Mi||pe===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ce=S(g.image,!1,r.maxTextureSize);ce=J(g,ce);const xe=s.convert(g.format,g.colorSpace),Be=s.convert(g.type);let Pe=A(g.internalFormat,xe,Be,g.colorSpace,g.isVideoTexture);ke(X,g);let ve;const He=g.mipmaps,U=g.isVideoTexture!==!0,ye=ge.__version===void 0||ie===!0,Se=q.dataReady,be=I(g,ce);if(g.isDepthTexture)Pe=w(g.format===bs,g.type),ye&&(U?t.texStorage2D(n.TEXTURE_2D,1,Pe,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ce.width,ce.height,0,xe,Be,null));else if(g.isDataTexture)if(He.length>0){U&&ye&&t.texStorage2D(n.TEXTURE_2D,be,Pe,He[0].width,He[0].height);for(let he=0,ue=He.length;he<ue;he++)ve=He[he],U?Se&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ve.width,ve.height,xe,Be,ve.data):t.texImage2D(n.TEXTURE_2D,he,Pe,ve.width,ve.height,0,xe,Be,ve.data);g.generateMipmaps=!1}else U?(ye&&t.texStorage2D(n.TEXTURE_2D,be,Pe,ce.width,ce.height),Se&&tt(g,ce,xe,Be)):t.texImage2D(n.TEXTURE_2D,0,Pe,ce.width,ce.height,0,xe,Be,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){U&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Pe,He[0].width,He[0].height,ce.depth);for(let he=0,ue=He.length;he<ue;he++)if(ve=He[he],g.format!==bn)if(xe!==null)if(U){if(Se)if(g.layerUpdates.size>0){const De=Du(ve.width,ve.height,g.format,g.type);for(const Xe of g.layerUpdates){const mt=ve.data.subarray(Xe*De/ve.data.BYTES_PER_ELEMENT,(Xe+1)*De/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Xe,ve.width,ve.height,1,xe,mt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ve.width,ve.height,ce.depth,xe,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Pe,ve.width,ve.height,ce.depth,0,ve.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ve.width,ve.height,ce.depth,xe,Be,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Pe,ve.width,ve.height,ce.depth,0,xe,Be,ve.data)}else{U&&ye&&t.texStorage2D(n.TEXTURE_2D,be,Pe,He[0].width,He[0].height);for(let he=0,ue=He.length;he<ue;he++)ve=He[he],g.format!==bn?xe!==null?U?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Pe,ve.width,ve.height,0,ve.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Se&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ve.width,ve.height,xe,Be,ve.data):t.texImage2D(n.TEXTURE_2D,he,Pe,ve.width,ve.height,0,xe,Be,ve.data)}else if(g.isDataArrayTexture)if(U){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Pe,ce.width,ce.height,ce.depth),Se)if(g.layerUpdates.size>0){const he=Du(ce.width,ce.height,g.format,g.type);for(const ue of g.layerUpdates){const De=ce.data.subarray(ue*he/ce.data.BYTES_PER_ELEMENT,(ue+1)*he/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,ce.width,ce.height,1,xe,Be,De)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,xe,Be,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ce.width,ce.height,ce.depth,0,xe,Be,ce.data);else if(g.isData3DTexture)U?(ye&&t.texStorage3D(n.TEXTURE_3D,be,Pe,ce.width,ce.height,ce.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,xe,Be,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ce.width,ce.height,ce.depth,0,xe,Be,ce.data);else if(g.isFramebufferTexture){if(ye)if(U)t.texStorage2D(n.TEXTURE_2D,be,Pe,ce.width,ce.height);else{let he=ce.width,ue=ce.height;for(let De=0;De<be;De++)t.texImage2D(n.TEXTURE_2D,De,Pe,he,ue,0,xe,Be,null),he>>=1,ue>>=1}}else if(He.length>0){if(U&&ye){const he=Z(He[0]);t.texStorage2D(n.TEXTURE_2D,be,Pe,he.width,he.height)}for(let he=0,ue=He.length;he<ue;he++)ve=He[he],U?Se&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,xe,Be,ve):t.texImage2D(n.TEXTURE_2D,he,Pe,xe,Be,ve);g.generateMipmaps=!1}else if(U){if(ye){const he=Z(ce);t.texStorage2D(n.TEXTURE_2D,be,Pe,he.width,he.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Be,ce)}else t.texImage2D(n.TEXTURE_2D,0,Pe,xe,Be,ce);m(g)&&d(X),ge.__version=q.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function le(y,g,L){if(g.image.length!==6)return;const X=Ze(y,g),ie=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+L);const q=i.get(ie);if(ie.version!==q.__version||X===!0){t.activeTexture(n.TEXTURE0+L);const ge=rt.getPrimaries(rt.workingColorSpace),pe=g.colorSpace===Mi?null:rt.getPrimaries(g.colorSpace),we=g.colorSpace===Mi||ge===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ae=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let ue=0;ue<6;ue++)!Ae&&!ce?xe[ue]=S(g.image[ue],!0,r.maxCubemapSize):xe[ue]=ce?g.image[ue].image:g.image[ue],xe[ue]=J(g,xe[ue]);const Be=xe[0],Pe=s.convert(g.format,g.colorSpace),ve=s.convert(g.type),He=A(g.internalFormat,Pe,ve,g.colorSpace),U=g.isVideoTexture!==!0,ye=q.__version===void 0||X===!0,Se=ie.dataReady;let be=I(g,Be);ke(n.TEXTURE_CUBE_MAP,g);let he;if(Ae){U&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,He,Be.width,Be.height);for(let ue=0;ue<6;ue++){he=xe[ue].mipmaps;for(let De=0;De<he.length;De++){const Xe=he[De];g.format!==bn?Pe!==null?U?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,0,0,Xe.width,Xe.height,Pe,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,He,Xe.width,Xe.height,0,Xe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,0,0,Xe.width,Xe.height,Pe,ve,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,He,Xe.width,Xe.height,0,Pe,ve,Xe.data)}}}else{if(he=g.mipmaps,U&&ye){he.length>0&&be++;const ue=Z(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,He,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ce){U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,xe[ue].width,xe[ue].height,Pe,ve,xe[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,He,xe[ue].width,xe[ue].height,0,Pe,ve,xe[ue].data);for(let De=0;De<he.length;De++){const mt=he[De].image[ue].image;U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,0,0,mt.width,mt.height,Pe,ve,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,He,mt.width,mt.height,0,Pe,ve,mt.data)}}else{U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Pe,ve,xe[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,He,Pe,ve,xe[ue]);for(let De=0;De<he.length;De++){const Xe=he[De];U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,0,0,Pe,ve,Xe.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,He,Pe,ve,Xe.image[ue])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),q.__version=ie.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ee(y,g,L,X,ie,q){const ge=s.convert(L.format,L.colorSpace),pe=s.convert(L.type),we=A(L.internalFormat,ge,pe,L.colorSpace),Ae=i.get(g),ce=i.get(L);if(ce.__renderTarget=g,!Ae.__hasExternalTextures){const xe=Math.max(1,g.width>>q),Be=Math.max(1,g.height>>q);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,q,we,xe,Be,g.depth,0,ge,pe,null):t.texImage2D(ie,q,we,xe,Be,0,ge,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),Y(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,ie,ce.__webglTexture,0,K(g)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,ie,ce.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(y,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const X=g.depthTexture,ie=X&&X.isDepthTexture?X.type:null,q=w(g.stencilBuffer,ie),ge=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=K(g);Y(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,q,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,q,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,q,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,y)}else{const X=g.textures;for(let ie=0;ie<X.length;ie++){const q=X[ie],ge=s.convert(q.format,q.colorSpace),pe=s.convert(q.type),we=A(q.internalFormat,ge,pe,q.colorSpace),Ae=K(g);L&&Y(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,we,g.width,g.height):Y(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,we,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,we,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ne(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(g.depthTexture);X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),re(g.depthTexture,0);const ie=X.__webglTexture,q=K(g);if(g.depthTexture.format===Ss)Y(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(g.depthTexture.format===bs)Y(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ae(y){const g=i.get(y),L=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const X=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",ie)};X.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=X}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const X=y.texture.mipmaps;X&&X.length>0?ne(g.__webglFramebuffer[0],y):ne(g.__webglFramebuffer,y)}else if(L){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=n.createRenderbuffer(),Ue(g.__webglDepthbuffer[X],y,!1);else{const ie=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,q)}}else{const X=y.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ue(g.__webglDepthbuffer,y,!1);else{const ie=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(y,g,L){const X=i.get(y);g!==void 0&&Ee(X.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ae(y)}function x(y){const g=y.texture,L=i.get(y),X=i.get(g);y.addEventListener("dispose",N);const ie=y.textures,q=y.isWebGLCubeRenderTarget===!0,ge=ie.length>1;if(ge||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=g.version,o.memory.textures++),q){L.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[pe]=[];for(let we=0;we<g.mipmaps.length;we++)L.__webglFramebuffer[pe][we]=n.createFramebuffer()}else L.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let pe=0;pe<g.mipmaps.length;pe++)L.__webglFramebuffer[pe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ge)for(let pe=0,we=ie.length;pe<we;pe++){const Ae=i.get(ie[pe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&Y(y)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let pe=0;pe<ie.length;pe++){const we=ie[pe];L.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[pe]);const Ae=s.convert(we.format,we.colorSpace),ce=s.convert(we.type),xe=A(we.internalFormat,Ae,ce,we.colorSpace,y.isXRRenderTarget===!0),Be=K(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,xe,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,L.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(L.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),ke(n.TEXTURE_CUBE_MAP,g);for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0)for(let we=0;we<g.mipmaps.length;we++)Ee(L.__webglFramebuffer[pe][we],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we);else Ee(L.__webglFramebuffer[pe],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let pe=0,we=ie.length;pe<we;pe++){const Ae=ie[pe],ce=i.get(Ae);let xe=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(xe=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,ce.__webglTexture),ke(xe,Ae),Ee(L.__webglFramebuffer,y,Ae,n.COLOR_ATTACHMENT0+pe,xe,0),m(Ae)&&d(xe)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(pe=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,X.__webglTexture),ke(pe,g),g.mipmaps&&g.mipmaps.length>0)for(let we=0;we<g.mipmaps.length;we++)Ee(L.__webglFramebuffer[we],y,g,n.COLOR_ATTACHMENT0,pe,we);else Ee(L.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,pe,0);m(g)&&d(pe),t.unbindTexture()}y.depthBuffer&&ae(y)}function P(y){const g=y.textures;for(let L=0,X=g.length;L<X;L++){const ie=g[L];if(m(ie)){const q=T(y),ge=i.get(ie).__webglTexture;t.bindTexture(q,ge),d(q),t.unbindTexture()}}}const _=[],D=[];function z(y){if(y.samples>0){if(Y(y)===!1){const g=y.textures,L=y.width,X=y.height;let ie=n.COLOR_BUFFER_BIT;const q=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(y),pe=g.length>1;if(pe)for(let Ae=0;Ae<g.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const we=y.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ae=0;Ae<g.length;Ae++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Ae]);const ce=i.get(g[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,L,X,0,0,L,X,ie,n.NEAREST),l===!0&&(_.length=0,D.length=0,_.push(n.COLOR_ATTACHMENT0+Ae),y.depthBuffer&&y.resolveDepthBuffer===!1&&(_.push(q),D.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ae=0;Ae<g.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Ae]);const ce=i.get(g[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function K(y){return Math.min(r.maxSamples,y.samples)}function Y(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function fe(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function J(y,g){const L=y.colorSpace,X=y.format,ie=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==Nr&&L!==Mi&&(rt.getTransfer(L)===ut?(X!==bn||ie!==si)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",L)),g}function Z(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=$,this.setTexture2D=re,this.setTexture2DArray=k,this.setTexture3D=se,this.setTextureCube=W,this.rebindTextures=j,this.setupRenderTarget=x,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Y}function Rb(n,e){function t(i,r=Mi){let s;const o=rt.getTransfer(r);if(i===si)return n.UNSIGNED_BYTE;if(i===nc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ic)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_d)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===md)return n.BYTE;if(i===xd)return n.SHORT;if(i===_s)return n.UNSIGNED_SHORT;if(i===tc)return n.INT;if(i===Ki)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===Br)return n.HALF_FLOAT;if(i===vd)return n.ALPHA;if(i===Sd)return n.RGB;if(i===bn)return n.RGBA;if(i===Ss)return n.DEPTH_COMPONENT;if(i===bs)return n.DEPTH_STENCIL;if(i===bd)return n.RED;if(i===rc)return n.RED_INTEGER;if(i===sc)return n.RG;if(i===oc)return n.RG_INTEGER;if(i===ac)return n.RGBA_INTEGER;if(i===uo||i===fo||i===ho||i===po)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===uo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===uo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===po)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sl||i===ol||i===al||i===ll)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cl||i===ul||i===fl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===cl||i===ul)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dl||i===hl||i===pl||i===ml||i===xl||i===gl||i===_l||i===vl||i===Sl||i===bl||i===Ml||i===yl||i===El||i===Tl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===dl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ml)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_l)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ml)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===El)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===wl||i===Cl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Al)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rl||i===Pl||i===Dl||i===Il)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Il)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Db=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ud(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ai({vertexShader:Pb,fragmentShader:Db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new En(new Ho(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lb extends zr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const S=typeof XRWebGLBinding<"u",m=new Ib,d={},T=t.getContextAttributes();let A=null,w=null;const I=[],R=[],N=new at;let B=null;const E=new dn;E.viewport=new At;const b=new dn;b.viewport=new At;const C=[E,b],$=new Zx;let G=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let le=I[oe];return le===void 0&&(le=new Ta,I[oe]=le),le.getTargetRaySpace()},this.getControllerGrip=function(oe){let le=I[oe];return le===void 0&&(le=new Ta,I[oe]=le),le.getGripSpace()},this.getHand=function(oe){let le=I[oe];return le===void 0&&(le=new Ta,I[oe]=le),le.getHandSpace()};function re(oe){const le=R.indexOf(oe.inputSource);if(le===-1)return;const Ee=I[le];Ee!==void 0&&(Ee.update(oe.inputSource,oe.frame,c||o),Ee.dispatchEvent({type:oe.type,data:oe.inputSource}))}function k(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",se);for(let oe=0;oe<I.length;oe++){const le=R[oe];le!==null&&(R[oe]=null,I[oe].disconnect(le))}G=null,O=null,m.reset();for(const oe in d)delete d[oe];e.setRenderTarget(A),p=null,h=null,f=null,r=null,w=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",k),r.addEventListener("inputsourceschange",se),T.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(N),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ue=null,ne=null;T.depth&&(ne=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=T.stencil?bs:Ss,Ue=T.stencil?vs:Ki);const ae={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Zi(h.textureWidth,h.textureHeight,{format:bn,type:si,depthTexture:new Ld(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ee={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Zi(p.framebufferWidth,p.framebufferHeight,{format:bn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(oe){for(let le=0;le<oe.removed.length;le++){const Ee=oe.removed[le],Ue=R.indexOf(Ee);Ue>=0&&(R[Ue]=null,I[Ue].disconnect(Ee))}for(let le=0;le<oe.added.length;le++){const Ee=oe.added[le];let Ue=R.indexOf(Ee);if(Ue===-1){for(let ae=0;ae<I.length;ae++)if(ae>=R.length){R.push(Ee),Ue=ae;break}else if(R[ae]===null){R[ae]=Ee,Ue=ae;break}if(Ue===-1)break}const ne=I[Ue];ne&&ne.connect(Ee)}}const W=new ee,de=new ee;function me(oe,le,Ee){W.setFromMatrixPosition(le.matrixWorld),de.setFromMatrixPosition(Ee.matrixWorld);const Ue=W.distanceTo(de),ne=le.projectionMatrix.elements,ae=Ee.projectionMatrix.elements,j=ne[14]/(ne[10]-1),x=ne[14]/(ne[10]+1),P=(ne[9]+1)/ne[5],_=(ne[9]-1)/ne[5],D=(ne[8]-1)/ne[0],z=(ae[8]+1)/ae[0],K=j*D,Y=j*z,fe=Ue/(-D+z),J=fe*-D;if(le.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(J),oe.translateZ(fe),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),ne[10]===-1)oe.projectionMatrix.copy(le.projectionMatrix),oe.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Z=j+fe,y=x+fe,g=K-J,L=Y+(Ue-J),X=P*x/y*Z,ie=_*x/y*Z;oe.projectionMatrix.makePerspective(g,L,X,ie,Z,y),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Re(oe,le){le===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(le.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let le=oe.near,Ee=oe.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),$.near=b.near=E.near=le,$.far=b.far=E.far=Ee,(G!==$.near||O!==$.far)&&(r.updateRenderState({depthNear:$.near,depthFar:$.far}),G=$.near,O=$.far),$.layers.mask=oe.layers.mask|6,E.layers.mask=$.layers.mask&3,b.layers.mask=$.layers.mask&5;const Ue=oe.parent,ne=$.cameras;Re($,Ue);for(let ae=0;ae<ne.length;ae++)Re(ne[ae],Ue);ne.length===2?me($,E,b):$.projectionMatrix.copy(E.projectionMatrix),ke(oe,$,Ue)};function ke(oe,le,Ee){Ee===null?oe.matrix.copy(le.matrixWorld):(oe.matrix.copy(Ee.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(le.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(le.projectionMatrix),oe.projectionMatrixInverse.copy(le.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Es*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(oe){l=oe,h!==null&&(h.fixedFoveation=oe),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=oe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh($)},this.getCameraTexture=function(oe){return d[oe]};let Ze=null;function et(oe,le){if(u=le.getViewerPose(c||o),v=le,u!==null){const Ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let Ue=!1;Ee.length!==$.cameras.length&&($.cameras.length=0,Ue=!0);for(let x=0;x<Ee.length;x++){const P=Ee[x];let _=null;if(p!==null)_=p.getViewport(P);else{const z=f.getViewSubImage(h,P);_=z.viewport,x===0&&(e.setRenderTargetTextures(w,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(w))}let D=C[x];D===void 0&&(D=new dn,D.layers.enable(x),D.viewport=new At,C[x]=D),D.matrix.fromArray(P.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(P.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(_.x,_.y,_.width,_.height),x===0&&($.matrix.copy(D.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ue===!0&&$.cameras.push(D)}const ne=r.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const x=f.getDepthInformation(Ee[0]);x&&x.isValid&&x.texture&&m.init(x,r.renderState)}if(ne&&ne.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let x=0;x<Ee.length;x++){const P=Ee[x].camera;if(P){let _=d[P];_||(_=new Ud,d[P]=_);const D=f.getCameraImage(P);_.sourceTexture=D}}}}for(let Ee=0;Ee<I.length;Ee++){const Ue=R[Ee],ne=I[Ee];Ue!==null&&ne!==void 0&&ne.update(Ue,le,c||o)}Ze&&Ze(oe,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),v=null}const tt=new Nd;tt.setAnimationLoop(et),this.setAnimationLoop=function(oe){Ze=oe},this.dispose=function(){}}}const ki=new oi,Ub=new Ct;function Nb(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Rd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,A,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,w)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,T,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Vt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Vt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),A=T.envMap,w=T.envMapRotation;A&&(m.envMap.value=A,ki.copy(w),ki.x*=-1,ki.y*=-1,ki.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(Ub.makeRotationFromEuler(ki)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const w=A.program;i.uniformBlockBinding(T,w)}function c(T,A){let w=r[T.id];w===void 0&&(v(T),w=u(T),r[T.id]=w,T.addEventListener("dispose",m));const I=A.program;i.updateUBOMapping(T,I);const R=e.render.frame;s[T.id]!==R&&(h(T),s[T.id]=R)}function u(T){const A=f();T.__bindingPointIndex=A;const w=n.createBuffer(),I=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,I,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,w),w}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const A=r[T.id],w=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let R=0,N=w.length;R<N;R++){const B=Array.isArray(w[R])?w[R]:[w[R]];for(let E=0,b=B.length;E<b;E++){const C=B[E];if(p(C,R,E,I)===!0){const $=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let re=0;re<G.length;re++){const k=G[re],se=S(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,$+O,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,O),O+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,A,w,I){const R=T.value,N=A+"_"+w;if(I[N]===void 0)return typeof R=="number"||typeof R=="boolean"?I[N]=R:I[N]=R.clone(),!0;{const B=I[N];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return I[N]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function v(T){const A=T.uniforms;let w=0;const I=16;for(let N=0,B=A.length;N<B;N++){const E=Array.isArray(A[N])?A[N]:[A[N]];for(let b=0,C=E.length;b<C;b++){const $=E[b],G=Array.isArray($.value)?$.value:[$.value];for(let O=0,re=G.length;O<re;O++){const k=G[O],se=S(k),W=w%I,de=W%se.boundary,me=W+de;w+=de,me!==0&&I-me<se.storage&&(w+=I-me),$.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=w,w+=se.storage}}}const R=w%I;return R>0&&(w+=I-R),T.__size=w,T.__cache={},this}function S(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){const A=T.target;A.removeEventListener("dispose",m);const w=o.indexOf(A.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const Ob=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Wn=null;function Bb(){return Wn===null&&(Wn=new Vx(Ob,32,32,sc,Br),Wn.minFilter=pn,Wn.magFilter=pn,Wn.wrapS=Kn,Wn.wrapT=Kn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}class zb{constructor(e={}){const{canvas:t=Z0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Set([ac,oc,rc]),S=new Set([si,Ki,_s,vs,nc,ic]),m=new Uint32Array(4),d=new Int32Array(4);let T=null,A=null;const w=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1;this._outputColorSpace=fn;let B=0,E=0,b=null,C=-1,$=null;const G=new At,O=new At;let re=null;const k=new ot(0);let se=0,W=t.width,de=t.height,me=1,Re=null,ke=null;const Ze=new At(0,0,W,de),et=new At(0,0,W,de);let tt=!1;const oe=new Id;let le=!1,Ee=!1;const Ue=new Ct,ne=new ee,ae=new At,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let x=!1;function P(){return b===null?me:1}let _=i;function D(M,V){return t.getContext(M,V)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ec}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",De,!1),_===null){const V="webgl2";if(_=D(V,M),_===null)throw D(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M("WebGLRenderer: "+M.message),M}let z,K,Y,fe,J,Z,y,g,L,X,ie,q,ge,pe,we,Ae,ce,xe,Be,Pe,ve,He,U,ye;function Se(){z=new $v(_),z.init(),He=new Rb(_,z),K=new Bv(_,z,e,He),Y=new wb(_,z),K.reversedDepthBuffer&&h&&Y.buffers.depth.setReversed(!0),fe=new Kv(_),J=new pb,Z=new Cb(_,z,Y,J,K,He,fe),y=new Vv(R),g=new qv(R),L=new eg(_),U=new Fv(_,L),X=new jv(_,L,fe,U),ie=new Jv(_,X,L,fe),Be=new Zv(_,K,Z),Ae=new zv(J),q=new hb(R,y,g,z,K,U,Ae),ge=new Nb(R,J),pe=new xb,we=new Mb(z),xe=new Nv(R,y,g,Y,ie,p,l),ce=new Tb(R,ie,K),ye=new Fb(_,fe,K,Y),Pe=new Ov(_,z,fe),ve=new Yv(_,z,fe),fe.programs=q.programs,R.capabilities=K,R.extensions=z,R.properties=J,R.renderLists=pe,R.shadowMap=ce,R.state=Y,R.info=fe}Se();const be=new Lb(R,_);this.xr=be,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const M=z.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=z.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(M){M!==void 0&&(me=M,this.setSize(W,de,!1))},this.getSize=function(M){return M.set(W,de)},this.setSize=function(M,V,Q=!0){if(be.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,de=V,t.width=Math.floor(M*me),t.height=Math.floor(V*me),Q===!0&&(t.style.width=M+"px",t.style.height=V+"px"),this.setViewport(0,0,M,V)},this.getDrawingBufferSize=function(M){return M.set(W*me,de*me).floor()},this.setDrawingBufferSize=function(M,V,Q){W=M,de=V,me=Q,t.width=Math.floor(M*Q),t.height=Math.floor(V*Q),this.setViewport(0,0,M,V)},this.getCurrentViewport=function(M){return M.copy(G)},this.getViewport=function(M){return M.copy(Ze)},this.setViewport=function(M,V,Q,te){M.isVector4?Ze.set(M.x,M.y,M.z,M.w):Ze.set(M,V,Q,te),Y.viewport(G.copy(Ze).multiplyScalar(me).round())},this.getScissor=function(M){return M.copy(et)},this.setScissor=function(M,V,Q,te){M.isVector4?et.set(M.x,M.y,M.z,M.w):et.set(M,V,Q,te),Y.scissor(O.copy(et).multiplyScalar(me).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){Y.setScissorTest(tt=M)},this.setOpaqueSort=function(M){Re=M},this.setTransparentSort=function(M){ke=M},this.getClearColor=function(M){return M.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(M=!0,V=!0,Q=!0){let te=0;if(M){let H=!1;if(b!==null){const _e=b.texture.format;H=v.has(_e)}if(H){const _e=b.texture.type,Te=S.has(_e),Ie=xe.getClearColor(),Ce=xe.getClearAlpha(),Ge=Ie.r,We=Ie.g,Fe=Ie.b;Te?(m[0]=Ge,m[1]=We,m[2]=Fe,m[3]=Ce,_.clearBufferuiv(_.COLOR,0,m)):(d[0]=Ge,d[1]=We,d[2]=Fe,d[3]=Ce,_.clearBufferiv(_.COLOR,0,d))}else te|=_.COLOR_BUFFER_BIT}V&&(te|=_.DEPTH_BUFFER_BIT),Q&&(te|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",De,!1),xe.dispose(),pe.dispose(),we.dispose(),J.dispose(),y.dispose(),g.dispose(),ie.dispose(),U.dispose(),ye.dispose(),q.dispose(),be.dispose(),be.removeEventListener("sessionstart",hc),be.removeEventListener("sessionend",pc),Ii.stop()};function he(M){M.preventDefault(),fu("WebGLRenderer: Context Lost."),N=!0}function ue(){fu("WebGLRenderer: Context Restored."),N=!1;const M=fe.autoReset,V=ce.enabled,Q=ce.autoUpdate,te=ce.needsUpdate,H=ce.type;Se(),fe.autoReset=M,ce.enabled=V,ce.autoUpdate=Q,ce.needsUpdate=te,ce.type=H}function De(M){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Xe(M){const V=M.target;V.removeEventListener("dispose",Xe),mt(V)}function mt(M){lt(M),J.remove(M)}function lt(M){const V=J.get(M).programs;V!==void 0&&(V.forEach(function(Q){q.releaseProgram(Q)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,V,Q,te,H,_e){V===null&&(V=j);const Te=H.isMesh&&H.matrixWorld.determinant()<0,Ie=Gd(M,V,Q,te,H);Y.setMaterial(te,Te);let Ce=Q.index,Ge=1;if(te.wireframe===!0){if(Ce=X.getWireframeAttribute(Q),Ce===void 0)return;Ge=2}const We=Q.drawRange,Fe=Q.attributes.position;let Je=We.start*Ge,ct=(We.start+We.count)*Ge;_e!==null&&(Je=Math.max(Je,_e.start*Ge),ct=Math.min(ct,(_e.start+_e.count)*Ge)),Ce!==null?(Je=Math.max(Je,0),ct=Math.min(ct,Ce.count)):Fe!=null&&(Je=Math.max(Je,0),ct=Math.min(ct,Fe.count));const Mt=ct-Je;if(Mt<0||Mt===1/0)return;U.setup(H,te,Ie,Q,Ce);let yt,ft=Pe;if(Ce!==null&&(yt=L.get(Ce),ft=ve,ft.setIndex(yt)),H.isMesh)te.wireframe===!0?(Y.setLineWidth(te.wireframeLinewidth*P()),ft.setMode(_.LINES)):ft.setMode(_.TRIANGLES);else if(H.isLine){let ze=te.linewidth;ze===void 0&&(ze=1),Y.setLineWidth(ze*P()),H.isLineSegments?ft.setMode(_.LINES):H.isLineLoop?ft.setMode(_.LINE_LOOP):ft.setMode(_.LINE_STRIP)}else H.isPoints?ft.setMode(_.POINTS):H.isSprite&&ft.setMode(_.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ys("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const ze=H._multiDrawStarts,vt=H._multiDrawCounts,nt=H._multiDrawCount,Jt=Ce?L.get(Ce).bytesPerElement:1,Qi=J.get(te).currentProgram.getUniforms();for(let Qt=0;Qt<nt;Qt++)Qi.setValue(_,"_gl_DrawID",Qt),ft.render(ze[Qt]/Jt,vt[Qt])}else if(H.isInstancedMesh)ft.renderInstances(Je,Mt,H.count);else if(Q.isInstancedBufferGeometry){const ze=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,vt=Math.min(Q.instanceCount,ze);ft.renderInstances(Je,Mt,vt)}else ft.render(Je,Mt)};function An(M,V,Q){M.transparent===!0&&M.side===Yn&&M.forceSinglePass===!1?(M.side=Vt,M.needsUpdate=!0,Ls(M,V,Q),M.side=Ci,M.needsUpdate=!0,Ls(M,V,Q),M.side=Yn):Ls(M,V,Q)}this.compile=function(M,V,Q=null){Q===null&&(Q=M),A=we.get(Q),A.init(V),I.push(A),Q.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),M!==Q&&M.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),A.setupLights();const te=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _e=H.material;if(_e)if(Array.isArray(_e))for(let Te=0;Te<_e.length;Te++){const Ie=_e[Te];An(Ie,Q,H),te.add(Ie)}else An(_e,Q,H),te.add(_e)}),A=I.pop(),te},this.compileAsync=function(M,V,Q=null){const te=this.compile(M,V,Q);return new Promise(H=>{function _e(){if(te.forEach(function(Te){J.get(Te).currentProgram.isReady()&&te.delete(Te)}),te.size===0){H(M);return}setTimeout(_e,10)}z.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let xn=null;function Hd(M){xn&&xn(M)}function hc(){Ii.stop()}function pc(){Ii.start()}const Ii=new Nd;Ii.setAnimationLoop(Hd),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(M){xn=M,be.setAnimationLoop(M),M===null?Ii.stop():Ii.start()},be.addEventListener("sessionstart",hc),be.addEventListener("sessionend",pc),this.render=function(M,V){if(V!==void 0&&V.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(V),V=be.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,V,b),A=we.get(M,I.length),A.init(V),I.push(A),Ue.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),oe.setFromProjectionMatrix(Ue,Ln,V.reversedDepth),Ee=this.localClippingEnabled,le=Ae.init(this.clippingPlanes,Ee),T=pe.get(M,w.length),T.init(),w.push(T),be.enabled===!0&&be.isPresenting===!0){const _e=R.xr.getDepthSensingMesh();_e!==null&&Xo(_e,V,-1/0,R.sortObjects)}Xo(M,V,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(Re,ke),x=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,x&&xe.addToRenderList(T,M),this.info.render.frame++,le===!0&&Ae.beginShadows();const Q=A.state.shadowsArray;ce.render(Q,M,V),le===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=T.opaque,H=T.transmissive;if(A.setupLights(),V.isArrayCamera){const _e=V.cameras;if(H.length>0)for(let Te=0,Ie=_e.length;Te<Ie;Te++){const Ce=_e[Te];xc(te,H,M,Ce)}x&&xe.render(M);for(let Te=0,Ie=_e.length;Te<Ie;Te++){const Ce=_e[Te];mc(T,M,Ce,Ce.viewport)}}else H.length>0&&xc(te,H,M,V),x&&xe.render(M),mc(T,M,V);b!==null&&E===0&&(Z.updateMultisampleRenderTarget(b),Z.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(R,M,V),U.resetDefaultState(),C=-1,$=null,I.pop(),I.length>0?(A=I[I.length-1],le===!0&&Ae.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?T=w[w.length-1]:T=null};function Xo(M,V,Q,te){if(M.visible===!1)return;if(M.layers.test(V.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(V);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||oe.intersectsSprite(M)){te&&ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ue);const Te=ie.update(M),Ie=M.material;Ie.visible&&T.push(M,Te,Ie,Q,ae.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||oe.intersectsObject(M))){const Te=ie.update(M),Ie=M.material;if(te&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ae.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ae.copy(Te.boundingSphere.center)),ae.applyMatrix4(M.matrixWorld).applyMatrix4(Ue)),Array.isArray(Ie)){const Ce=Te.groups;for(let Ge=0,We=Ce.length;Ge<We;Ge++){const Fe=Ce[Ge],Je=Ie[Fe.materialIndex];Je&&Je.visible&&T.push(M,Te,Je,Q,ae.z,Fe)}}else Ie.visible&&T.push(M,Te,Ie,Q,ae.z,null)}}const _e=M.children;for(let Te=0,Ie=_e.length;Te<Ie;Te++)Xo(_e[Te],V,Q,te)}function mc(M,V,Q,te){const{opaque:H,transmissive:_e,transparent:Te}=M;A.setupLightsView(Q),le===!0&&Ae.setGlobalState(R.clippingPlanes,Q),te&&Y.viewport(G.copy(te)),H.length>0&&Is(H,V,Q),_e.length>0&&Is(_e,V,Q),Te.length>0&&Is(Te,V,Q),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function xc(M,V,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;A.state.transmissionRenderTarget[te.id]===void 0&&(A.state.transmissionRenderTarget[te.id]=new Zi(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?Br:si,minFilter:qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const _e=A.state.transmissionRenderTarget[te.id],Te=te.viewport||G;_e.setSize(Te.z*R.transmissionResolutionScale,Te.w*R.transmissionResolutionScale);const Ie=R.getRenderTarget(),Ce=R.getActiveCubeFace(),Ge=R.getActiveMipmapLevel();R.setRenderTarget(_e),R.getClearColor(k),se=R.getClearAlpha(),se<1&&R.setClearColor(16777215,.5),R.clear(),x&&xe.render(Q);const We=R.toneMapping;R.toneMapping=Ti;const Fe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),A.setupLightsView(te),le===!0&&Ae.setGlobalState(R.clippingPlanes,te),Is(M,Q,te),Z.updateMultisampleRenderTarget(_e),Z.updateRenderTargetMipmap(_e),z.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ct=0,Mt=V.length;ct<Mt;ct++){const yt=V[ct],{object:ft,geometry:ze,material:vt,group:nt}=yt;if(vt.side===Yn&&ft.layers.test(te.layers)){const Jt=vt.side;vt.side=Vt,vt.needsUpdate=!0,gc(ft,Q,te,ze,vt,nt),vt.side=Jt,vt.needsUpdate=!0,Je=!0}}Je===!0&&(Z.updateMultisampleRenderTarget(_e),Z.updateRenderTargetMipmap(_e))}R.setRenderTarget(Ie,Ce,Ge),R.setClearColor(k,se),Fe!==void 0&&(te.viewport=Fe),R.toneMapping=We}function Is(M,V,Q){const te=V.isScene===!0?V.overrideMaterial:null;for(let H=0,_e=M.length;H<_e;H++){const Te=M[H],{object:Ie,geometry:Ce,group:Ge}=Te;let We=Te.material;We.allowOverride===!0&&te!==null&&(We=te),Ie.layers.test(Q.layers)&&gc(Ie,V,Q,Ce,We,Ge)}}function gc(M,V,Q,te,H,_e){M.onBeforeRender(R,V,Q,te,H,_e),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(R,V,Q,te,M,_e),H.transparent===!0&&H.side===Yn&&H.forceSinglePass===!1?(H.side=Vt,H.needsUpdate=!0,R.renderBufferDirect(Q,V,te,H,M,_e),H.side=Ci,H.needsUpdate=!0,R.renderBufferDirect(Q,V,te,H,M,_e),H.side=Yn):R.renderBufferDirect(Q,V,te,H,M,_e),M.onAfterRender(R,V,Q,te,H,_e)}function Ls(M,V,Q){V.isScene!==!0&&(V=j);const te=J.get(M),H=A.state.lights,_e=A.state.shadowsArray,Te=H.state.version,Ie=q.getParameters(M,H.state,_e,V,Q),Ce=q.getProgramCacheKey(Ie);let Ge=te.programs;te.environment=M.isMeshStandardMaterial?V.environment:null,te.fog=V.fog,te.envMap=(M.isMeshStandardMaterial?g:y).get(M.envMap||te.environment),te.envMapRotation=te.environment!==null&&M.envMap===null?V.environmentRotation:M.envMapRotation,Ge===void 0&&(M.addEventListener("dispose",Xe),Ge=new Map,te.programs=Ge);let We=Ge.get(Ce);if(We!==void 0){if(te.currentProgram===We&&te.lightsStateVersion===Te)return vc(M,Ie),We}else Ie.uniforms=q.getUniforms(M),M.onBeforeCompile(Ie,R),We=q.acquireProgram(Ie,Ce),Ge.set(Ce,We),te.uniforms=Ie.uniforms;const Fe=te.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Fe.clippingPlanes=Ae.uniform),vc(M,Ie),te.needsLights=Xd(M),te.lightsStateVersion=Te,te.needsLights&&(Fe.ambientLightColor.value=H.state.ambient,Fe.lightProbe.value=H.state.probe,Fe.directionalLights.value=H.state.directional,Fe.directionalLightShadows.value=H.state.directionalShadow,Fe.spotLights.value=H.state.spot,Fe.spotLightShadows.value=H.state.spotShadow,Fe.rectAreaLights.value=H.state.rectArea,Fe.ltc_1.value=H.state.rectAreaLTC1,Fe.ltc_2.value=H.state.rectAreaLTC2,Fe.pointLights.value=H.state.point,Fe.pointLightShadows.value=H.state.pointShadow,Fe.hemisphereLights.value=H.state.hemi,Fe.directionalShadowMap.value=H.state.directionalShadowMap,Fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Fe.spotShadowMap.value=H.state.spotShadowMap,Fe.spotLightMatrix.value=H.state.spotLightMatrix,Fe.spotLightMap.value=H.state.spotLightMap,Fe.pointShadowMap.value=H.state.pointShadowMap,Fe.pointShadowMatrix.value=H.state.pointShadowMatrix),te.currentProgram=We,te.uniformsList=null,We}function _c(M){if(M.uniformsList===null){const V=M.currentProgram.getUniforms();M.uniformsList=mo.seqWithValue(V.seq,M.uniforms)}return M.uniformsList}function vc(M,V){const Q=J.get(M);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function Gd(M,V,Q,te,H){V.isScene!==!0&&(V=j),Z.resetTextureUnits();const _e=V.fog,Te=te.isMeshStandardMaterial?V.environment:null,Ie=b===null?R.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Nr,Ce=(te.isMeshStandardMaterial?g:y).get(te.envMap||Te),Ge=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,We=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Fe=!!Q.morphAttributes.position,Je=!!Q.morphAttributes.normal,ct=!!Q.morphAttributes.color;let Mt=Ti;te.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Mt=R.toneMapping);const yt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ft=yt!==void 0?yt.length:0,ze=J.get(te),vt=A.state.lights;if(le===!0&&(Ee===!0||M!==$)){const Ht=M===$&&te.id===C;Ae.setState(te,M,Ht)}let nt=!1;te.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==vt.state.version||ze.outputColorSpace!==Ie||H.isBatchedMesh&&ze.batching===!1||!H.isBatchedMesh&&ze.batching===!0||H.isBatchedMesh&&ze.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ze.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ze.instancing===!1||!H.isInstancedMesh&&ze.instancing===!0||H.isSkinnedMesh&&ze.skinning===!1||!H.isSkinnedMesh&&ze.skinning===!0||H.isInstancedMesh&&ze.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ze.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ze.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ze.instancingMorph===!1&&H.morphTexture!==null||ze.envMap!==Ce||te.fog===!0&&ze.fog!==_e||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ae.numPlanes||ze.numIntersection!==Ae.numIntersection)||ze.vertexAlphas!==Ge||ze.vertexTangents!==We||ze.morphTargets!==Fe||ze.morphNormals!==Je||ze.morphColors!==ct||ze.toneMapping!==Mt||ze.morphTargetsCount!==ft)&&(nt=!0):(nt=!0,ze.__version=te.version);let Jt=ze.currentProgram;nt===!0&&(Jt=Ls(te,V,H));let Qi=!1,Qt=!1,Hr=!1;const St=Jt.getUniforms(),Yt=ze.uniforms;if(Y.useProgram(Jt.program)&&(Qi=!0,Qt=!0,Hr=!0),te.id!==C&&(C=te.id,Qt=!0),Qi||$!==M){Y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),St.setValue(_,"projectionMatrix",M.projectionMatrix),St.setValue(_,"viewMatrix",M.matrixWorldInverse);const Kt=St.map.cameraPosition;Kt!==void 0&&Kt.setValue(_,ne.setFromMatrixPosition(M.matrixWorld)),K.logarithmicDepthBuffer&&St.setValue(_,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&St.setValue(_,"isOrthographic",M.isOrthographicCamera===!0),$!==M&&($=M,Qt=!0,Hr=!0)}if(H.isSkinnedMesh){St.setOptional(_,H,"bindMatrix"),St.setOptional(_,H,"bindMatrixInverse");const Ht=H.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),St.setValue(_,"boneTexture",Ht.boneTexture,Z))}H.isBatchedMesh&&(St.setOptional(_,H,"batchingTexture"),St.setValue(_,"batchingTexture",H._matricesTexture,Z),St.setOptional(_,H,"batchingIdTexture"),St.setValue(_,"batchingIdTexture",H._indirectTexture,Z),St.setOptional(_,H,"batchingColorTexture"),H._colorsTexture!==null&&St.setValue(_,"batchingColorTexture",H._colorsTexture,Z));const cn=Q.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&Be.update(H,Q,Jt),(Qt||ze.receiveShadow!==H.receiveShadow)&&(ze.receiveShadow=H.receiveShadow,St.setValue(_,"receiveShadow",H.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Yt.envMap.value=Ce,Yt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&V.environment!==null&&(Yt.envMapIntensity.value=V.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=Bb()),Qt&&(St.setValue(_,"toneMappingExposure",R.toneMappingExposure),ze.needsLights&&Wd(Yt,Hr),_e&&te.fog===!0&&ge.refreshFogUniforms(Yt,_e),ge.refreshMaterialUniforms(Yt,te,me,de,A.state.transmissionRenderTarget[M.id]),mo.upload(_,_c(ze),Yt,Z)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(mo.upload(_,_c(ze),Yt,Z),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&St.setValue(_,"center",H.center),St.setValue(_,"modelViewMatrix",H.modelViewMatrix),St.setValue(_,"normalMatrix",H.normalMatrix),St.setValue(_,"modelMatrix",H.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Ht=te.uniformsGroups;for(let Kt=0,qo=Ht.length;Kt<qo;Kt++){const Li=Ht[Kt];ye.update(Li,Jt),ye.bind(Li,Jt)}}return Jt}function Wd(M,V){M.ambientLightColor.needsUpdate=V,M.lightProbe.needsUpdate=V,M.directionalLights.needsUpdate=V,M.directionalLightShadows.needsUpdate=V,M.pointLights.needsUpdate=V,M.pointLightShadows.needsUpdate=V,M.spotLights.needsUpdate=V,M.spotLightShadows.needsUpdate=V,M.rectAreaLights.needsUpdate=V,M.hemisphereLights.needsUpdate=V}function Xd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,V,Q){const te=J.get(M);te.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),J.get(M.texture).__webglTexture=V,J.get(M.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:Q,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,V){const Q=J.get(M);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0};const qd=_.createFramebuffer();this.setRenderTarget=function(M,V=0,Q=0){b=M,B=V,E=Q;let te=!0,H=null,_e=!1,Te=!1;if(M){const Ce=J.get(M);if(Ce.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(_.FRAMEBUFFER,null),te=!1;else if(Ce.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(Ce.__hasExternalTextures)Z.rebindTextures(M,J.get(M.texture).__webglTexture,J.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Fe=M.depthTexture;if(Ce.__boundDepthTexture!==Fe){if(Fe!==null&&J.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}const Ge=M.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Te=!0);const We=J.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(We[V])?H=We[V][Q]:H=We[V],_e=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?H=J.get(M).__webglMultisampledFramebuffer:Array.isArray(We)?H=We[Q]:H=We,G.copy(M.viewport),O.copy(M.scissor),re=M.scissorTest}else G.copy(Ze).multiplyScalar(me).floor(),O.copy(et).multiplyScalar(me).floor(),re=tt;if(Q!==0&&(H=qd),Y.bindFramebuffer(_.FRAMEBUFFER,H)&&te&&Y.drawBuffers(M,H),Y.viewport(G),Y.scissor(O),Y.setScissorTest(re),_e){const Ce=J.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ce.__webglTexture,Q)}else if(Te){const Ce=V;for(let Ge=0;Ge<M.textures.length;Ge++){const We=J.get(M.textures[Ge]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+Ge,We.__webglTexture,Q,Ce)}}else if(M!==null&&Q!==0){const Ce=J.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ce.__webglTexture,Q)}C=-1},this.readRenderTargetPixels=function(M,V,Q,te,H,_e,Te,Ie=0){if(!(M&&M.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){Y.bindFramebuffer(_.FRAMEBUFFER,Ce);try{const Ge=M.textures[Ie],We=Ge.format,Fe=Ge.type;if(!K.textureFormatReadable(We)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Fe)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=M.width-te&&Q>=0&&Q<=M.height-H&&(M.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ie),_.readPixels(V,Q,te,H,He.convert(We),He.convert(Fe),_e))}finally{const Ge=b!==null?J.get(b).__webglFramebuffer:null;Y.bindFramebuffer(_.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(M,V,Q,te,H,_e,Te,Ie=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce)if(V>=0&&V<=M.width-te&&Q>=0&&Q<=M.height-H){Y.bindFramebuffer(_.FRAMEBUFFER,Ce);const Ge=M.textures[Ie],We=Ge.format,Fe=Ge.type;if(!K.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Je),_.bufferData(_.PIXEL_PACK_BUFFER,_e.byteLength,_.STREAM_READ),M.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ie),_.readPixels(V,Q,te,H,He.convert(We),He.convert(Fe),0);const ct=b!==null?J.get(b).__webglFramebuffer:null;Y.bindFramebuffer(_.FRAMEBUFFER,ct);const Mt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await J0(_,Mt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Je),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,_e),_.deleteBuffer(Je),_.deleteSync(Mt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,V=null,Q=0){const te=Math.pow(2,-Q),H=Math.floor(M.image.width*te),_e=Math.floor(M.image.height*te),Te=V!==null?V.x:0,Ie=V!==null?V.y:0;Z.setTexture2D(M,0),_.copyTexSubImage2D(_.TEXTURE_2D,Q,0,0,Te,Ie,H,_e),Y.unbindTexture()};const $d=_.createFramebuffer(),jd=_.createFramebuffer();this.copyTextureToTexture=function(M,V,Q=null,te=null,H=0,_e=null){_e===null&&(H!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=H,H=0):_e=0);let Te,Ie,Ce,Ge,We,Fe,Je,ct,Mt;const yt=M.isCompressedTexture?M.mipmaps[_e]:M.image;if(Q!==null)Te=Q.max.x-Q.min.x,Ie=Q.max.y-Q.min.y,Ce=Q.isBox3?Q.max.z-Q.min.z:1,Ge=Q.min.x,We=Q.min.y,Fe=Q.isBox3?Q.min.z:0;else{const cn=Math.pow(2,-H);Te=Math.floor(yt.width*cn),Ie=Math.floor(yt.height*cn),M.isDataArrayTexture?Ce=yt.depth:M.isData3DTexture?Ce=Math.floor(yt.depth*cn):Ce=1,Ge=0,We=0,Fe=0}te!==null?(Je=te.x,ct=te.y,Mt=te.z):(Je=0,ct=0,Mt=0);const ft=He.convert(V.format),ze=He.convert(V.type);let vt;V.isData3DTexture?(Z.setTexture3D(V,0),vt=_.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Z.setTexture2DArray(V,0),vt=_.TEXTURE_2D_ARRAY):(Z.setTexture2D(V,0),vt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,V.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,V.unpackAlignment);const nt=_.getParameter(_.UNPACK_ROW_LENGTH),Jt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Qi=_.getParameter(_.UNPACK_SKIP_PIXELS),Qt=_.getParameter(_.UNPACK_SKIP_ROWS),Hr=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,yt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,yt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ge),_.pixelStorei(_.UNPACK_SKIP_ROWS,We),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Fe);const St=M.isDataArrayTexture||M.isData3DTexture,Yt=V.isDataArrayTexture||V.isData3DTexture;if(M.isDepthTexture){const cn=J.get(M),Ht=J.get(V),Kt=J.get(cn.__renderTarget),qo=J.get(Ht.__renderTarget);Y.bindFramebuffer(_.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Y.bindFramebuffer(_.DRAW_FRAMEBUFFER,qo.__webglFramebuffer);for(let Li=0;Li<Ce;Li++)St&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,J.get(M).__webglTexture,H,Fe+Li),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,J.get(V).__webglTexture,_e,Mt+Li)),_.blitFramebuffer(Ge,We,Te,Ie,Je,ct,Te,Ie,_.DEPTH_BUFFER_BIT,_.NEAREST);Y.bindFramebuffer(_.READ_FRAMEBUFFER,null),Y.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||J.has(M)){const cn=J.get(M),Ht=J.get(V);Y.bindFramebuffer(_.READ_FRAMEBUFFER,$d),Y.bindFramebuffer(_.DRAW_FRAMEBUFFER,jd);for(let Kt=0;Kt<Ce;Kt++)St?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,cn.__webglTexture,H,Fe+Kt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,cn.__webglTexture,H),Yt?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ht.__webglTexture,_e,Mt+Kt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ht.__webglTexture,_e),H!==0?_.blitFramebuffer(Ge,We,Te,Ie,Je,ct,Te,Ie,_.COLOR_BUFFER_BIT,_.NEAREST):Yt?_.copyTexSubImage3D(vt,_e,Je,ct,Mt+Kt,Ge,We,Te,Ie):_.copyTexSubImage2D(vt,_e,Je,ct,Ge,We,Te,Ie);Y.bindFramebuffer(_.READ_FRAMEBUFFER,null),Y.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Yt?M.isDataTexture||M.isData3DTexture?_.texSubImage3D(vt,_e,Je,ct,Mt,Te,Ie,Ce,ft,ze,yt.data):V.isCompressedArrayTexture?_.compressedTexSubImage3D(vt,_e,Je,ct,Mt,Te,Ie,Ce,ft,yt.data):_.texSubImage3D(vt,_e,Je,ct,Mt,Te,Ie,Ce,ft,ze,yt):M.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,_e,Je,ct,Te,Ie,ft,ze,yt.data):M.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,_e,Je,ct,yt.width,yt.height,ft,yt.data):_.texSubImage2D(_.TEXTURE_2D,_e,Je,ct,Te,Ie,ft,ze,yt);_.pixelStorei(_.UNPACK_ROW_LENGTH,nt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Jt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Qi),_.pixelStorei(_.UNPACK_SKIP_ROWS,Qt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Hr),_e===0&&V.generateMipmaps&&_.generateMipmap(vt),Y.unbindTexture()},this.initRenderTarget=function(M){J.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),Y.unbindTexture()},this.resetState=function(){B=0,E=0,b=null,Y.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const Vb={class:"scene-viewer"},kb={class:"viewer-hud"},Hb={class:"hud-info"},Gb={class:"hotspot-modal"},Wb={class:"modal-content"},Xb={key:0},qb={key:1},$b={key:0,style:{"text-align":"center",margin:"0 0 10px 0"}},jb=["src","alt"],Yb={key:2},Kb={style:{padding:"10px 0"}},Zb=["src"],Jb=["href"],Qb={key:3},eM={key:0,style:{"text-align":"center",margin:"0 0 10px 0"}},tM=["src"],nM={key:4},iM={key:0},rM={key:1},sM=["src"],tf=.09,nf=.92,oM=Pi({__name:"SceneViewer",emits:["equirect-click","hotspot-opened","hotspot-closed","fov-changed"],setup(n,{expose:e,emit:t}){const i=Ji(),r=t,s=Oe(90),o=Oe(null),a=Oe(null),l=ne=>{if(!ne)return"";let ae=String(ne).trim();if(!ae)return"";if(ae.includes("<iframe")){const x=ae.match(/src=['"]([^'"]+)['"]/i);x&&x[1]&&(ae=x[1])}const j=ae.toLowerCase();if(j.startsWith("javascript:")||j.startsWith("data:"))return"";try{const x=new URL(ae);return encodeURI(x.href)}catch{try{const P=new URL("https://"+ae);return encodeURI(P.href)}catch{try{return encodeURI(ae)}catch{return""}}}},c=ne=>{try{return new URL(ne.startsWith("http")?ne:"https://"+ne).hostname||""}catch{return"example.com"}};Oe(null);const u=Oe(!1),f=Cr({}),h=Oe(null),p=Cr({}),v=Oe(!1),S=Oe(75);let m=null,d=null,T=null,A=new Jx,w=new at;const I=new Map;let R=null,N=0,B=0,E=0,b=0,C=!1,$=0,G=0;const O=()=>{if(!o.value)return;m=new zx;const ne=o.value.clientWidth||800,ae=o.value.clientHeight||600;d=new dn(75,ne/ae,.1,2e3),d.position.set(0,0,.1),T=new zb({antialias:!0}),T.setSize(ne,ae),T.setPixelRatio(window.devicePixelRatio||1),T.setClearColor(0),o.value.appendChild(T.domElement),re(),T.domElement.addEventListener("pointerdown",Ze),window.addEventListener("pointermove",et),window.addEventListener("pointerup",tt),window.addEventListener("wheel",oe,{passive:!1}),T.domElement.addEventListener("click",Ee),window.addEventListener("resize",le),Ue()},re=()=>{var j;if(!((j=i.activeScene)!=null&&j.imageUrl)||!m)return;const ne=i.activeScene.imageUrl;console.log("loadPanorama: Loading image, URL length:",ne==null?void 0:ne.length),new Yx().load(ne,x=>{console.log("Texture loaded successfully"),m.children.slice().forEach(z=>m.remove(z));const P=new us(500,60,40),_=P.getAttribute("uv");for(let z=0;z<_.count;z++)_.setX(z,1-_.getX(z));_.needsUpdate=!0;const D=new cs({map:x,side:Vt});R=new En(P,D),m.add(R),k()},void 0,x=>{console.error("Panorama load error",x),m.children.slice().forEach(D=>m.remove(D));const P=new us(500,32,24),_=new cs({color:2236962,side:Vt});R=new En(P,_),m.add(R),k()})},k=()=>{if(!m)return;for(const ae of I.values())try{m.remove(ae)}catch{}I.clear();const ne=i.activeScene;ne&&ne.hotspots.forEach(ae=>{const j=typeof ae.radius=="number"&&Number.isFinite(ae.radius)?ae.radius:10,x=500-1;let P;if(ae.dir&&typeof ae.dir.x=="number")P=new ee(ae.dir.x,ae.dir.y,ae.dir.z).multiplyScalar(x);else{const K=Zt.degToRad(90-ae.y),Y=Zt.degToRad(-ae.x+s.value);P=new ee().setFromSpherical(new Sr(x,K,Y))}v.value&&p[ae.id]&&P.applyQuaternion(p[ae.id]);const _=new us(Math.max(2,j/2.5),12,12),D=new cs({color:new ot(ae.color||"#ff0000"),transparent:!0,opacity:.6}),z=new En(_,D);z.position.copy(P),z.userData={hotspotId:ae.id},m.add(z),I.set(ae.id,z)})},se=ne=>{if(!d||!T)return{left:"-9999px",top:"-9999px",display:"none"};const ae=new ee(0,0,-1).applyQuaternion(d.quaternion),j=ne.clone().normalize();if(ae.dot(j)<0)return{left:"10px",top:T.domElement.clientHeight/2-15+"px"};const P=ne.clone().project(d),_=T.domElement,D=(P.x*.5+.5)*_.clientWidth,z=(-P.y*.5+.5)*_.clientHeight;return D<0||D>_.clientWidth||z<0||z>_.clientHeight?{left:"10px",top:_.clientHeight/2-15+"px"}:{left:D+"px",top:z+"px"}},W=ne=>{const ae=I.get(ne.id);if(ae&&d&&T)return se(ae.position);if(ne.dir&&typeof ne.dir.x=="number"){const _=new ee(ne.dir.x,ne.dir.y,ne.dir.z).multiplyScalar(499);return se(_)}const j=Zt.degToRad(90-ne.y),x=Zt.degToRad(-ne.x+s.value),P=new ee().setFromSpherical(new Sr(500-1,j,x));return se(P)},de=ne=>{if(ne.dir&&typeof ne.dir.x=="number"){const ae=new ee(ne.dir.x,ne.dir.y,ne.dir.z),j=new Sr().setFromVector3(ae),x=j.phi,P=j.theta,_=90-Zt.radToDeg(x);return{x:((-Zt.radToDeg(P)+s.value)%360+360)%360,y:_}}return{x:ne.x,y:ne.y}},me=()=>{if(!i.activeScene||!T||!d)return;const ne=T.domElement(i.activeScene.hotspots||[]).forEach(ae=>{const j=de(ae),P=((j.x-N)%360+540)%360-180,_=j.y-B;let D;if(ae.dir&&typeof ae.dir.x=="number")D=new ee(ae.dir.x,ae.dir.y,ae.dir.z).multiplyScalar(500-1);else{const fe=Zt.degToRad(90-ae.y),J=Zt.degToRad(-ae.x+s.value);D=new ee().setFromSpherical(new Sr(500-1,fe,J))}v.value&&p[ae.id]&&D.applyQuaternion(p[ae.id]);const z=D.clone().project(d),K=(z.x*.5+.5)*ne.clientWidth,Y=(-z.y*.5+.5)*ne.clientHeight;f[ae.id]={dx:Math.round(P),dy:Math.round(_),style:{left:K+"px",top:Y+"px"}},hotspotScreenPositions[ae.id]=W(ae)})},Re=()=>{a.value=null,r("hotspot-closed")},ke=ne=>{ne&&(i.setActiveScene(ne),a.value=null)},Ze=ne=>{C=!0,ne.clientX,ne.clientY,$=ne.clientX,G=ne.clientY},et=ne=>{if(!C)return;const ae=ne.clientX-$,j=ne.clientY-G;E=ae*tf,b=j*tf,N+=E,B+=b,B=Math.max(-85,Math.min(85,B)),$=ne.clientX,G=ne.clientY},tt=()=>{C=!1},oe=ne=>{ne.preventDefault(),d&&(d.fov=Math.max(30,Math.min(100,d.fov+ne.deltaY*.05)),S.value=d.fov,d.updateProjectionMatrix(),r("fov-changed",d.fov))},le=()=>{if(!o.value||!d||!T)return;const ne=o.value.clientWidth,ae=o.value.clientHeight;d.aspect=ne/ae,d.updateProjectionMatrix(),T.setSize(ne,ae)},Ee=ne=>{var x,P,_;if(!T||!d)return;const ae=T.domElement.getBoundingClientRect();w.x=(ne.clientX-ae.left)/ae.width*2-1,w.y=-((ne.clientY-ae.top)/ae.height)*2+1,A.setFromCamera(w,d);const j=A.intersectObjects(Array.from(I.values()));if(j.length>0){const z=(x=j[0].object.userData)==null?void 0:x.hotspotId;if(z){const K=(P=i.activeScene)==null?void 0:P.hotspots.find(Y=>Y.id===z);if(!K)return;u.value?(h.value=z,me(),_r("Hotspot sélectionné pour calibration","info")):K.type==="scene"?ke((_=K.content)==null?void 0:_.linkedSceneId):a.value=K}}else{const D=A.ray.direction.clone().normalize(),z=new Sr().setFromVector3(D),K=z.phi,Y=z.theta,fe=90-Zt.radToDeg(K),Z=((-Zt.radToDeg(Y)+s.value)%360+360)%360;r("equirect-click",{x:Z,y:fe,dir:{x:D.x,y:D.y,z:D.z}})}},Ue=()=>{if(requestAnimationFrame(Ue),E*=nf,b*=nf,N+=E,B+=b,B=Math.max(-85,Math.min(85,B)),d&&(d.rotation.order="YXZ",d.rotation.y=Zt.degToRad(N),d.rotation.x=Zt.degToRad(B)),T&&m&&d)try{u.value&&me(),T.render(m,d)}catch(ne){console.error("Render error",ne)}};return e({getHotspotScreenPosition:W,currentFov:S}),Uo(()=>{O()}),No(()=>{try{window.removeEventListener("pointermove",et),window.removeEventListener("pointerup",tt),window.removeEventListener("wheel",oe),window.removeEventListener("resize",le),T==null||T.domElement.removeEventListener("pointerdown",Ze),T==null||T.domElement.removeEventListener("click",Ee),T&&(T.dispose(),T.forceContextLoss&&T.forceContextLoss())}catch(ne){console.warn("Cleanup error",ne)}}),In(()=>i.activeScene,()=>{var ne;((ne=i.activeScene)==null?void 0:ne.calibrationOffsetX)!==void 0?s.value=i.activeScene.calibrationOffsetX:s.value=90,re()}),In(()=>{var ne;return(ne=i.activeScene)==null?void 0:ne.hotspots},()=>{k()},{deep:!0}),(ne,ae)=>{var j;return Le(),Ne("div",Vb,[F("div",{ref_key:"viewerContainer",ref:o,class:"viewer-container"},null,512),F("div",kb,[F("div",Hb,[F("h3",null,_t((j=Qe(i).activeScene)==null?void 0:j.name),1),ae[2]||(ae[2]=F("p",null,"🖱️ Cliquer + glisser pour naviguer | Scroll pour zoomer",-1))])]),a.value?(Le(),Ne("div",{key:0,class:"hotspot-modal-overlay",onClick:ae[1]||(ae[1]=Nt(x=>Re(),["self"]))},[F("div",Gb,[F("button",{onClick:ae[0]||(ae[0]=x=>Re()),class:"modal-close"},"✕"),F("div",Wb,[a.value.type==="text"?(Le(),Ne("div",Xb,[F("p",null,_t(a.value.content.text),1)])):a.value.type==="image"?(Le(),Ne("div",qb,[a.value.content.imageTitle?(Le(),Ne("h3",$b,_t(a.value.content.imageTitle),1)):gt("",!0),F("img",{src:a.value.content.imageUrl,alt:a.value.content.imageTitle},null,8,jb)])):a.value.type==="link"?(Le(),Ne("div",Yb,[F("div",Kb,[F("img",{src:"https://www.google.com/s2/favicons?sz=128&domain="+c(a.value.content.linkUrl),style:{width:"32px",height:"32px","margin-right":"10px",display:"inline-block"}},null,8,Zb),F("a",{href:a.value.content.linkUrl,target:"_blank",rel:"noopener noreferrer",style:{"font-size":"16px",color:"#0066cc","text-decoration":"underline"}},_t(a.value.content.title||"Ouvrir le lien"),9,Jb)])])):a.value.type==="iframe"?(Le(),Ne("div",Qb,[a.value.content.imageTitle?(Le(),Ne("h3",eM,_t(a.value.content.imageTitle),1)):gt("",!0),F("iframe",{src:l(a.value.content.iframeUrl),frameborder:"0",style:{width:"100%",height:"60vh"},allowfullscreen:""},null,8,tM)])):a.value.type==="text-image"?(Le(),Ne("div",nM,[a.value.content.title?(Le(),Ne("h3",iM,_t(a.value.content.title),1)):gt("",!0),a.value.content.text?(Le(),Ne("p",rM,_t(a.value.content.text),1)):gt("",!0),a.value.content.imageUrl?(Le(),Ne("img",{key:2,src:a.value.content.imageUrl},null,8,sM)):gt("",!0)])):gt("",!0)])])])):gt("",!0)])}}});const aM=Di(oM,[["__scopeId","data-v-8ca7b348"]]),lM={class:"scene-editor"},cM={class:"editor-canvas"},uM=["onMousedown","title"],fM={class:"hotspot-index"},dM={class:"info-header"},hM={class:"info-content"},pM={class:"form-group"},mM={key:0,class:"form-group"},xM={class:"form-group"},gM={class:"form-group"},_M={class:"image-upload-group"},vM={key:0,class:"image-preview"},SM=["src","alt"],bM={class:"form-group"},MM={class:"form-group"},yM={class:"form-group"},EM={class:"image-upload-group"},TM={key:0,class:"image-preview"},AM=["src","alt"],wM={class:"form-group"},CM={class:"form-group"},RM={class:"form-group"},PM={class:"form-group"},DM={class:"form-group"},IM={key:5,class:"form-group"},LM=["value"],UM={class:"form-group"},NM={class:"form-group",style:{display:"flex",gap:"20px"}},FM={style:{display:"flex","align-items":"center",gap:"8px",cursor:"pointer"}},OM={style:{display:"flex","align-items":"center",gap:"8px",cursor:"pointer"}},BM={class:"form-group"},zM={style:{display:"flex","align-items":"center",gap:"15px"}},VM={class:"form-group"},kM={style:{"font-size":"12px",color:"#666","margin-top":"4px"}},HM={class:"form-group"},GM={class:"color-picker-enhanced"},WM={class:"color-presets"},XM=["onClick","title"],qM={class:"color-picker-wrapper"},$M={class:"toolbar"},jM={class:"modal icon-picker-modal"},YM={class:"modal-header"},KM=["onClick","title"],ZM=Pi({__name:"SceneEditor",setup(n){const e=Ji(),t=Oe("select");Oe(!1);const i=Oe(!0);Oe(!1);const r=Oe(""),s=Oe(0),o=Oe(0),a=Oe(null),l=Oe(null),c=Oe(!1);Oe(null);const u=Oe(null),f=Oe(0),h=Oe("#ff0000"),p=Oe(null),v=Oe(""),S=Oe(!1),m=Oe(1),d=()=>{var j,x;return(x=(j=u.value)==null?void 0:j.currentFov)!=null&&x.value?u.value.currentFov.value:75},T=["#FF0000","#FF6B35","#FFA500","#FFD700","#00FF00","#00CED1","#0066FF","#6B35FF","#FF00FF","#FFFFFF","#808080","#000000"],A=["📍","📌","🧭","🗺️","🌍","🌎","🌏","🗾","🏔️","⛰️","🏕️","🏖️","🏜️","🏝️","🏞️","🏟️","🏛️","🏗️","🏘️","🏚️","🏠","🏡","🏢","🏣","🏤","🏥","🏦","🏨","🏩","🏪","🏫","🏬","🏭","🏯","🏰","💒","🗼","🗽","⛪","🕌","🛕","🕍","⛩️","🕋","⛲","⛺","🌁","🌃","🏙️","🌄","🌅","🌆","🌇","🌉","🎠","🎡","🎢","🎪","🚪","🪟","⬆️","⬇️","⬅️","➡️","↗️","↘️","↙️","↖️","↕️","↔️","↩️","↪️","⤴️","⤵️","🔃","🔄","🔙","🔚","🔛","🔜","🔝","🔀","🔁","🔂","▶️","⏸️","⏹️","⏺️","⏭️","⏮️","⭐","🌟","💫","✨","🌠","🔆","🔅","💥","💢","💦","💧","💨","🌀","🌈","☀️","🌤️","⛅","🌥️","☁️","🌦️","🔵","🟢","🟡","🟠","🔴","🟣","🟤","⚫","⚪","🟥","🟧","🟨","🟩","🟦","🟪","🟫","⬛","⬜","🔶","🔷","🔸","🔹","🔺","🔻","💠","🔘","🔳","🔲","◾","◽","📸","📷","📹","🎥","🎬","🎞️","🎨","🖼️","🖌️","🖍️","🎭","🎪","🎤","🎧","🎼","🎵","🎶","🎹","🎺","🎷","🎸","🪕","🎻","🥁","🎲","🎯","🎳","🎮","🎰","🎱","💡","🔦","🏮","🔍","🔎","🔬","🔭","📡","💎","💍","👁️","👀","🗝️","🔑","🔓","🔒","🔐","🔏","🔔","🔕","⚠️","⚡","🔥","💧","🌊","❄️","☃️","⛄","🏆","🥇","🥈","🥉","🏅","🎖️","🎗️","🎀","🎁","🎊","🎉","🎈","📝","📋","📄","📃","📑","📊","📈","📉","📰","📓","📔","📒","📕","📗","📘","📙","📚","📖","🔖","💬","💭","🗨️","🗯️","💡","📢","📣","📯","🔔","🔕","🔗","🔗","📎","🖇️","📌","📍","✉️","📧","📨","📩","📤","❓","❔","❕","❗","‼️","⁉️","〰️","💯","✔️","✅","❌","❎","➕","➖","➗","✖️","🆕","🆓","🆙","🆗","🆒","🆖","🆘","🚫","🔞","📵","🚭","🚯","🚱","🚷"],w=j=>({text:"📝",image:"🖼️","text-image":"📋",link:"🔗",iframe:"📱",scene:"🔄"})[j]||"📍",I=j=>j==="scene"?26:20,R=j=>{if(!j)return I("text");const x=j.iconSize;return typeof x=="number"&&Number.isFinite(x)?x:I(j.type)},N=()=>m.value>0?m.value:1,B=j=>{var P;const x=typeof j=="number"?j:75;(P=u.value)!=null&&P.currentFov&&(u.value.currentFov.value=x),f.value++},E=(j,x)=>{j.button===0&&me(x)},b=(j,x)=>{const P=Zt.degToRad(90-x),_=Zt.degToRad(-j+90),D=new ee().setFromSpherical(new Sr(1,P,_));return{x:D.x,y:D.y,z:D.z}},C=Yi({get:()=>e.activeScene?e.activeScene.hotspots.find(j=>j.id===r.value):null,set:j=>{r.value=(j==null?void 0:j.id)||""}});In(()=>{var j;return(j=C.value)==null?void 0:j.color},j=>{j&&(h.value=j)}),In(h,j=>{C.value&&(C.value.color=j)}),In(()=>C.value,j=>{var x;if((j==null?void 0:j.type)==="iframe"){const _=(((x=j.content)==null?void 0:x.iframeUrl)||"").match(/src="([^"]+)"/);v.value=_?_[1]:""}else v.value=""},{deep:!0});const $=j=>{if(t.value!=="draw")return;const x=Math.max(0,Math.min(360,j.x)),P=Math.max(-90,Math.min(90,j.y)),_={id:gs(),type:"text",x,y:P,content:{text:"Nouveau point"},radius:10,iconSize:20,color:"#ff0000",visible:!0,hideCircle:!1,showIcon:!0,dir:{x:j.dir.x,y:j.dir.y,z:j.dir.z}};e.addHotspot(_),e.project&&Pn.saveProject(e.project),C.value=_},G=j=>{const x=j.currentTarget.getBoundingClientRect();s.value=j.clientX-x.left,o.value=j.clientY-x.top},O=(j,x=.55)=>{const P=(j||"#ff0000").trim();if(/^#([0-9a-fA-F]{6})$/.test(P)){const _=parseInt(P.slice(1,3),16),D=parseInt(P.slice(3,5),16),z=parseInt(P.slice(5,7),16);return`rgba(${_}, ${D}, ${z}, ${x})`}return P},re=j=>{const x=j.color||"#ff0000",P=j.hideCircle===!0;return{background:P?"transparent":O(x,.55),borderColor:P?"transparent":x,borderWidth:P?"0px":"3px",boxShadow:P?"none":"0 0 0 2px #fff, 0 4px 10px rgba(0, 0, 0, 0.35)"}},k=j=>{var _,D;if(f.value,u.value){const z=u.value.getHotspotScreenPosition(j),K=d(),Y=K>0?75/K:1,J=j.radius*2*Y*3;return m.value=Y*3,j.id===((D=(_=e.activeScene)==null?void 0:_.hotspots[0])==null?void 0:D.id)&&console.log(`FOV: ${K}, ZoomFactor: ${Y}, ScaledSize: ${J}`),{left:z.left,top:z.top,width:J+"px",height:J+"px",transform:"translate(-50%, -50%)",...re(j)}}const x=j.x/360*100,P=(j.y+90)/180*100;return{left:x+"%",top:P+"%",width:j.radius*2+"px",height:j.radius*2+"px",...re(j),display:"none",transform:"translate(-50%, -50%)"}},se=j=>j.icon?j.icon:w(j.type),W=j=>{var P,_,D;if(console.log("[Tooltip Debug]",{type:j.type,linkedSceneId:(P=j.content)==null?void 0:P.linkedSceneId,content:j.content}),j.type==="scene"){const z=(_=j.content)==null?void 0:_.linkedSceneId;if(z&&e.project){const K=e.project.scenes.find(Y=>Y.id===z);if(K)return`Aller vers ${K.name}`}return"Changer de scène (non configuré)"}return j.type==="text"?((D=j.content)==null?void 0:D.text)||"Nouveau point":{image:"Image","text-image":"Image et texte",link:"Lien",iframe:"Cadre intégré"}[j.type]||"Nouveau point"},de=()=>{const j=v.value.trim();if(j){const x=`<iframe src="${j}" style="width: 100%; height: 600px; border: none; border-radius: 4px;"></iframe>`;C.value.content.iframeUrl=x}},me=j=>{C.value=j},Re=j=>{C.value=j,l.value=null},ke=j=>{const x={...j,id:gs(),x:j.x+10,y:j.y+10};e.addHotspot(x),e.project&&Pn.saveProject(e.project),l.value=null},Ze=j=>{e.activeScene&&(e.deleteHotspot(e.activeScene.id,j.id),e.project&&Pn.saveProject(e.project)),l.value=null},et=j=>{C.value&&(C.value.icon=j,S.value=!1,_r("✅ Logo modifié!","success"))},tt=()=>{if(C.value&&e.activeScene){const j={...C.value,dir:b(C.value.x,C.value.y)};e.updateHotspot(e.activeScene.id,C.value.id,j),e.project&&Pn.saveProject(e.project),_r("✅ Point d'intérêt enregistré!","success")}},oe=()=>{C.value&&e.activeScene&&(e.deleteHotspot(e.activeScene.id,C.value.id),C.value=null,e.project&&Pn.saveProject(e.project),_r("🗑️ Point d'intérêt supprimé!","success"))},le=()=>{var j;(j=p.value)==null||j.click()},Ee=async j=>{var P;const x=(P=j.target.files)==null?void 0:P[0];if(!(!x||!C.value))try{const _=await co(x);C.value.content.imageUrl=_,e.activeScene&&(e.updateHotspot(e.activeScene.id,C.value.id,C.value),e.project&&Pn.saveProject(e.project)),_r("✅ Image chargée!","success")}catch(_){console.error("Erreur lors du chargement de l'image:",_),_r("❌ Erreur lors du chargement de l'image","error")}};let Ue=null;const ne=()=>{const j=()=>{f.value++,Ue=requestAnimationFrame(j)};Ue=requestAnimationFrame(j)},ae=()=>{Ue!==null&&(cancelAnimationFrame(Ue),Ue=null)};return In(()=>u.value,j=>{j?ne():ae()}),No(()=>{ae()}),document.addEventListener("click",()=>{l.value=null}),(j,x)=>{var P,_;return Le(),Ne("div",lM,[F("div",cM,[F("div",{class:"image-container",onMousemove:G,onContextmenu:x[2]||(x[2]=Nt(D=>a.value=null,["prevent"]))},[(P=Qe(e).activeScene)!=null&&P.imageUrl?(Le(),br(aM,{key:0,ref_key:"sceneViewerRef",ref:u,onEquirectClick:$,onHotspotOpened:x[0]||(x[0]=D=>c.value=!0),onHotspotClosed:x[1]||(x[1]=D=>c.value=!1),onFovChanged:B},null,512)):gt("",!0),F("div",{class:"grid-overlay",style:rn({display:Qe(c)?"none":"block"})},[(Le(),Ne(bt,null,vi(37,D=>F("div",{key:"h"+D,class:"grid-line-h",style:rn({left:D*100/36+"%"})},null,4)),64)),(Le(),Ne(bt,null,vi(19,D=>F("div",{key:"v"+D,class:"grid-line-v",style:rn({top:D*100/18+"%"})},null,4)),64))],4),(Le(!0),Ne(bt,null,vi((_=Qe(e).activeScene)==null?void 0:_.hotspots,(D,z)=>(Le(),Ne("div",{key:D.id,class:qt(["hotspot-pin",{selected:Qe(r)===D.id}]),style:rn({...k(D),display:Qe(c)?"none":"flex"}),onMousedown:Nt(K=>E(K,D),["stop"]),onContextmenu:Nt(()=>{},["prevent"]),draggable:"false",title:W(D)},[F("div",{class:qt(["hotspot-icon",{"hotspot-icon-scene":D.type==="scene"}]),style:rn({fontSize:R(D)*N()+"px"})},_t(se(D)),7),F("div",fM,_t(z+1),1)],46,uM))),128)),Qe(i)?(Le(),Ne("div",{key:1,class:"crosshair",style:rn({left:Qe(s)+"px",top:Qe(o)+"px"})},null,4)):gt("",!0)],32),C.value?(Le(),Ne("div",{key:0,class:"hotspot-info",onWheel:x[22]||(x[22]=Nt(()=>{},["stop"]))},[F("div",dM,[x[31]||(x[31]=F("h3",null,"Point d'intérêt",-1)),F("button",{onClick:x[3]||(x[3]=D=>C.value=null),class:"btn-close"},"✕")]),F("div",hM,[F("div",pM,[x[33]||(x[33]=F("label",null,"Type",-1)),Tt(F("select",{"onUpdate:modelValue":x[4]||(x[4]=D=>C.value.type=D),class:"input"},[...x[32]||(x[32]=[Op('<option value="text" data-v-2cdf198f>📝 Texte</option><option value="image" data-v-2cdf198f>🖼️ Image</option><option value="text-image" data-v-2cdf198f>📋 Texte + Image</option><option value="link" data-v-2cdf198f>🔗 Lien</option><option value="iframe" data-v-2cdf198f>📱 IFrame</option><option value="scene" data-v-2cdf198f>🔄 Autre Scène</option>',6)])],512),[[Jc,C.value.type]])]),C.value.type==="text"?(Le(),Ne("div",mM,[x[34]||(x[34]=F("label",null,"Texte",-1)),Tt(F("textarea",{"onUpdate:modelValue":x[5]||(x[5]=D=>C.value.content.text=D),class:"input",rows:"3"},null,512),[[Ut,C.value.content.text]])])):C.value.type==="image"?(Le(),Ne(bt,{key:1},[F("div",xM,[x[35]||(x[35]=F("label",null,"Titre (optionnel)",-1)),Tt(F("input",{"onUpdate:modelValue":x[6]||(x[6]=D=>C.value.content.imageTitle=D),type:"text",class:"input",placeholder:"Titre de l'image"},null,512),[[Ut,C.value.content.imageTitle]])]),F("div",gM,[x[36]||(x[36]=F("label",null,"Image",-1)),F("div",_M,[F("input",{ref_key:"imageFileInput",ref:p,type:"file",accept:"image/*",style:{display:"none"},onChange:Ee},null,544),F("button",{onClick:le,class:"btn-upload"}," 📤 Sélectionner une image "),C.value.content.imageUrl?(Le(),Ne("div",vM,[F("img",{src:C.value.content.imageUrl,alt:C.value.content.imageUrl},null,8,SM)])):gt("",!0)])])],64)):C.value.type==="text-image"?(Le(),Ne(bt,{key:2},[F("div",bM,[x[37]||(x[37]=F("label",null,"Titre",-1)),Tt(F("input",{"onUpdate:modelValue":x[7]||(x[7]=D=>C.value.content.title=D),type:"text",class:"input"},null,512),[[Ut,C.value.content.title]])]),F("div",MM,[x[38]||(x[38]=F("label",null,"Texte",-1)),Tt(F("textarea",{"onUpdate:modelValue":x[8]||(x[8]=D=>C.value.content.text=D),class:"input",rows:"2"},null,512),[[Ut,C.value.content.text]])]),F("div",yM,[x[39]||(x[39]=F("label",null,"Image",-1)),F("div",EM,[F("input",{ref_key:"imageFileInput",ref:p,type:"file",accept:"image/*",style:{display:"none"},onChange:Ee},null,544),F("button",{onClick:le,class:"btn-upload"}," 📤 Sélectionner une image "),C.value.content.imageUrl?(Le(),Ne("div",TM,[F("img",{src:C.value.content.imageUrl,alt:C.value.content.imageUrl},null,8,AM)])):gt("",!0)])])],64)):C.value.type==="link"?(Le(),Ne(bt,{key:3},[F("div",wM,[x[40]||(x[40]=F("label",null,"URL",-1)),Tt(F("input",{"onUpdate:modelValue":x[9]||(x[9]=D=>C.value.content.linkUrl=D),type:"text",class:"input",placeholder:"https://..."},null,512),[[Ut,C.value.content.linkUrl]])]),F("div",CM,[x[41]||(x[41]=F("label",null,"Texte du lien",-1)),Tt(F("input",{"onUpdate:modelValue":x[10]||(x[10]=D=>C.value.content.title=D),type:"text",class:"input",placeholder:"Cliquez ici"},null,512),[[Ut,C.value.content.title]])])],64)):C.value.type==="iframe"?(Le(),Ne(bt,{key:4},[F("div",RM,[x[42]||(x[42]=F("label",null,"Titre (optionnel)",-1)),Tt(F("input",{"onUpdate:modelValue":x[11]||(x[11]=D=>C.value.content.imageTitle=D),type:"text",class:"input",placeholder:"Titre du contenu"},null,512),[[Ut,C.value.content.imageTitle]])]),F("div",PM,[x[43]||(x[43]=F("label",null,"URL à intégrer",-1)),Tt(F("input",{"onUpdate:modelValue":x[12]||(x[12]=D=>xt(v)?v.value=D:null),type:"text",class:"input",placeholder:"https://exemple.com",onInput:de},null,544),[[Ut,Qe(v)]]),x[44]||(x[44]=F("small",{style:{color:"#999","margin-top":"5px",display:"block"}},"Remplis ce champ pour générer automatiquement le code iframe",-1))]),F("div",DM,[x[45]||(x[45]=F("label",null,"Code IFrame (généré automatiquement ou personnalisé)",-1)),Tt(F("textarea",{"onUpdate:modelValue":x[13]||(x[13]=D=>C.value.content.iframeUrl=D),type:"text",class:"input",rows:"4",placeholder:"<iframe src='...'></iframe>"},null,512),[[Ut,C.value.content.iframeUrl]])])],64)):C.value.type==="scene"?(Le(),Ne("div",IM,[x[46]||(x[46]=F("label",null,"Scène liée",-1)),Tt(F("select",{"onUpdate:modelValue":x[14]||(x[14]=D=>C.value.content.linkedSceneId=D),class:"input"},[(Le(!0),Ne(bt,null,vi(Qe(e).allScenes,D=>(Le(),Ne("option",{key:D.id,value:D.id},_t(D.name),9,LM))),128))],512),[[Jc,C.value.content.linkedSceneId]])])):gt("",!0),F("div",UM,[x[47]||(x[47]=F("label",null,"Taille",-1)),Tt(F("input",{"onUpdate:modelValue":x[15]||(x[15]=D=>C.value.radius=D),type:"range",min:"5",max:"30",class:"input"},null,512),[[Ut,C.value.radius,void 0,{number:!0}]])]),F("div",NM,[F("label",FM,[Tt(F("input",{type:"checkbox","onUpdate:modelValue":x[16]||(x[16]=D=>C.value.hideCircle=D),style:{width:"18px",height:"18px",cursor:"pointer"}},null,512),[[Kc,C.value.hideCircle]]),x[48]||(x[48]=F("span",null,"Masquer le cercle",-1))]),F("label",OM,[Tt(F("input",{type:"checkbox","onUpdate:modelValue":x[17]||(x[17]=D=>C.value.showIcon=D),style:{width:"18px",height:"18px",cursor:"pointer"}},null,512),[[Kc,C.value.showIcon]]),x[49]||(x[49]=F("span",null,"Afficher le logo",-1))])]),F("div",BM,[x[50]||(x[50]=F("label",null,"Icône du hotspot",-1)),F("div",zM,[F("div",{class:"current-icon-display",style:rn({fontSize:R(C.value)+"px"})},_t(C.value.icon||w(C.value.type)),5),F("button",{onClick:x[18]||(x[18]=D=>S.value=!0),class:"btn-choose-icon"}," 🎨 Choisir un autre logo ")])]),F("div",VM,[x[51]||(x[51]=F("label",null,"Taille du logo",-1)),Tt(F("input",{"onUpdate:modelValue":x[19]||(x[19]=D=>C.value.iconSize=D),type:"range",min:"12",max:"48",step:"1",class:"input"},null,512),[[Ut,C.value.iconSize,void 0,{number:!0}]]),F("div",kM,_t(R(C.value))+" px",1)]),F("div",HM,[x[53]||(x[53]=F("label",null,"Couleur",-1)),F("div",GM,[Tt(F("input",{"onUpdate:modelValue":x[20]||(x[20]=D=>xt(h)?h.value=D:null),type:"color",class:"color-input-hidden"},null,512),[[Ut,Qe(h)]]),F("div",WM,[(Le(),Ne(bt,null,vi(T,D=>F("button",{key:D,class:qt(["color-preset",{active:Qe(h).toLowerCase()===D.toLowerCase()}]),style:rn({backgroundColor:D}),onClick:z=>h.value=D,title:D},null,14,XM)),64))]),F("label",qM,[x[52]||(x[52]=F("span",{class:"color-picker-text"},"Choisir une couleur",-1)),Tt(F("input",{"onUpdate:modelValue":x[21]||(x[21]=D=>xt(h)?h.value=D:null),type:"color",class:"color-input-picker"},null,512),[[Ut,Qe(h)]])])])]),F("div",{class:"form-actions"},[F("button",{onClick:tt,class:"btn-save"},"💾 Valider le point d'intérêt"),F("button",{onClick:oe,class:"btn-delete"},"🗑️ Supprimer le point d'intérêt")])])],32)):gt("",!0)]),F("div",$M,[F("button",{onClick:x[23]||(x[23]=D=>t.value="draw"),class:qt([{active:Qe(t)==="draw"},"tool-btn"])}," ➕ Ajouter Point ",2),F("button",{onClick:x[24]||(x[24]=D=>t.value="select"),class:qt([{active:Qe(t)==="select"},"tool-btn"])}," 🔍 Sélectionner ",2)]),Qe(l)?(Le(),Ne("div",{key:0,class:"context-menu",style:rn(Qe(l).position)},[F("button",{onClick:x[25]||(x[25]=D=>Re(Qe(l).hotspot)),class:"menu-item"},"✏️ Éditer"),F("button",{onClick:x[26]||(x[26]=D=>ke(Qe(l).hotspot)),class:"menu-item"},"📋 Dupliquer"),F("button",{onClick:x[27]||(x[27]=D=>Ze(Qe(l).hotspot)),class:"menu-item danger"},"🗑️ Supprimer")],4)):gt("",!0),Qe(S)?(Le(),Ne("div",{key:1,class:"modal-overlay",onClick:x[30]||(x[30]=Nt(D=>S.value=!1,["self"]))},[F("div",jM,[F("div",YM,[x[54]||(x[54]=F("h3",null,"Choisir un autre logo pour ce point d'intérêt :",-1)),F("button",{onClick:x[28]||(x[28]=D=>S.value=!1),class:"btn-close"},"✕")]),F("div",{class:"icon-picker-grid",onWheel:x[29]||(x[29]=Nt(()=>{},["stop"]))},[(Le(),Ne(bt,null,vi(A,D=>F("button",{key:D,class:qt(["icon-picker-option",{active:C.value&&(C.value.icon||w(C.value.type))===D}]),onClick:z=>et(D),title:D},_t(D),11,KM)),64))],32)])])):gt("",!0)])}}});const JM=Di(ZM,[["__scopeId","data-v-2cdf198f"]]);async function QM(){try{const n=await fetch("./three.min.js");if(!n.ok)throw new Error("Failed to load Three.js");return await n.text()}catch(n){return console.error("Error loading Three.js:",n),""}}class ey{static exportAsJSON(e){return JSON.stringify({version:"1.0.0",project:e,assets:{}},null,2)}static async exportAsHTMLStandalone(e,t,i){const r=await QM(),s=i!=null&&i.previewMode?3:1;let o=0;if(t){const l=e.scenes.findIndex(c=>c.id===t);l!==-1&&(o=l)}const a=e.scenes.map((l,c)=>({id:l.id,name:l.name,description:l.description,hotspots:l.hotspots,imageIndex:c,imageFileName:l.imageFileName||`scene-${c}.jpg`,imageUrl:l.imageUrl,calibrationOffsetX:l.calibrationOffsetX||90}));return`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e.name} - Visualiseur 360°</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { width: 100%; height: 100%; background: #000; font-family: Arial, sans-serif; overflow: hidden; }
        #viewer { width: 100%; height: 100%; }
        .controls { position: absolute; bottom: 20px; left: 20px; z-index: 50; background: rgba(0,0,0,0.8); color: white; padding: 15px; border-radius: 8px; font-size: 12px; line-height: 1.6; }
        .controls-pointer { filter: brightness(1.5) saturate(0); display: inline-block; }
        #loading { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.9); color: white; padding: 30px; border-radius: 10px; text-align: center; }
        .hotspot { position: absolute; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; background: rgba(255,0,0,0.5); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 10px; color: white; transform: translate(-50%, -50%); }
        .popup { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 20px rgba(0,0,0,0.5); z-index: 10001; width: auto; height: auto; min-width: 300px; max-width: 90vw; max-height: 90vh; overflow-y: auto; }
        .popup-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 10000; cursor: pointer; }
        .popup-iframe { min-width: 800px; min-height: 600px; max-width: 90vw; max-height: 90vh; }

        .popup-close { float: right; cursor: pointer; font-weight: bold; font-size: 20px; color: #666; padding: 0; margin: -5px -5px 10px 0; border: none; background: none; }
    </style>
</head>
<body>
    <div id="viewer"></div>
    <div id="viewer-container"></div>
    <div id="loading" style="display:none;">
        <div style="margin-bottom: 15px; font-size: 16px;">⏳ Chargement du visualiseur...</div>
        <div style="color: #666; font-size: 12px;">Assurez-vous que les images 360° sont dans le même dossier</div>
    </div>
    <div class="controls">
        🖱️ Cliquez et glissez pour naviguer | Molette souris pour zoomer/dézoomer<br>
        <span class="controls-pointer">☝️</span> Cliquez sur les points pour chercher et découvrir
    </div>
    
    <script>
        // Three.js r181 intégré - Fonctionne SANS connexion internet
        ${r}
    <\/script>
    <script>
        const PREVIEW_SCALE = ${s};
        const SCENES = ${JSON.stringify(a)};
        const INITIAL_SCENE_INDEX = ${o};
        
        let scene, camera, renderer, currentMesh;
        let hotspots = [];
        
        function showHotspotContent(hotspot) {
            // If it's a scene hotspot, change scene directly
            if (hotspot.type === 'scene') {
                // Cherche l'index de la scène par son ID
                const sceneIndex = SCENES.findIndex(s => s.id === hotspot.content?.linkedSceneId);
                if (sceneIndex !== -1) {
                    changeScene(sceneIndex);
                }
                return;
            }
            
            let content = '';
            const text = hotspot.content?.text || '';
            const imageUrl = hotspot.content?.imageUrl || '';
            const title = hotspot.content?.title || '';

            const linkUrl = hotspot.content?.linkUrl || '';
            let iframeUrl = hotspot.content?.iframeUrl || '';
            const imageTitle = hotspot.content?.imageTitle || '';
            
            // Si iframeUrl contient du HTML, extraire l'URL du src
            if (iframeUrl.includes('<iframe')) {
                const match = iframeUrl.match(/src="([^"]*)"/);
                if (match) {
                    iframeUrl = match[1];
                }
            }
            
            switch(hotspot.type) {
                case 'text':
                    content = '<p style="font-size: 12px;">' + escapeHtml(text) + '</p>';
                    break;
                case 'image':
                    content = (imageTitle ? '<h3 style="text-align: center; margin: 0 0 10px 0;">' + escapeHtml(imageTitle) + '</h3>' : '') + 
                              '<img src="' + imageUrl + '" style="max-width: 100%; border-radius: 4px;">';
                    break;
                case 'text-image':
                    content = '<h3>' + escapeHtml(title) + '</h3><p>' + escapeHtml(text) + '</p><img src="' + imageUrl + '" style="max-width: 100%; border-radius: 4px; margin-top: 10px;">';
                    break;

                case 'link':
                    const domain = new URL(linkUrl.startsWith('http') ? linkUrl : 'https://' + linkUrl).hostname || 'example.com';
                    content = '<div style="padding: 10px 0;"><img src="https://www.google.com/s2/favicons?sz=128&domain=' + domain + '" style="width: 32px; height: 32px; margin-right: 10px; display: inline-block;"><a href="' + linkUrl + '" target="_blank" style="color: #0066cc; text-decoration: underline; font-size: 16px;">' + escapeHtml(title || 'Ouvrir le lien') + '</a></div>';
                    break;
                case 'iframe':
                    content = (imageTitle ? '<h3 style="text-align: center; margin: 0 0 10px 0;">' + escapeHtml(imageTitle) + '</h3>' : '') + 
                              '<iframe src="' + iframeUrl + '" style="width: 100%; height: 500px; border: none; border-radius: 4px;"></iframe>';
                    break;
                default:
                    content = '<p>' + escapeHtml(text) + '</p>';
            }
            
            const popup = document.createElement('div');
            popup.className = 'popup' + (hotspot.type === 'iframe' ? ' popup-iframe' : '') + (hotspot.type === 'image' || hotspot.type === 'text-image' ? ' popup-image' : '');
            // Laisse le CSS gérer la position verticale avec transform
            popup.style.position = 'fixed';
            popup.style.left = '50%';
            popup.style.top = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            
            // Crée une overlay qui ferme la popup quand on clique dessus
            const overlay = document.createElement('div');
            overlay.className = 'popup-overlay';
            overlay.onclick = function() { 
                overlay.remove(); 
                popup.remove(); 
            };
            
            const closeBtn = document.createElement('button');
            closeBtn.className = 'popup-close';
            closeBtn.innerHTML = '×';
            closeBtn.onclick = function(e) { 
                e.stopPropagation();
                overlay.remove(); 
                popup.remove(); 
            };
            popup.innerHTML = content;
            popup.insertBefore(closeBtn, popup.firstChild);
            document.body.appendChild(overlay);
            document.body.appendChild(popup);
        }
        
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
        
        function init() {
            const container = document.getElementById('viewer');
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000);
            container.appendChild(renderer.domElement);
            camera.position.z = 0.1;
            
            setupControls();
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
            
            loadScene(INITIAL_SCENE_INDEX);
            animate();
        }
        
        function loadScene(index) {
            currentSceneIndex = index;
            const sceneData = SCENES[index];
            if (!sceneData) return;
            
            document.getElementById('loading').style.display = 'block';
            const textureLoader = new THREE.TextureLoader();
            
            // Utiliser la data URL embarquée dans le HTML
            const imageUrl = sceneData.imageUrl;
            
            // Nettoyer les anciens hotspots
            hotspots.forEach(h => {
                if (h.element && h.element.parentNode) {
                    h.element.parentNode.removeChild(h.element);
                }
            });
            hotspots = [];
            
            textureLoader.load(imageUrl, (texture) => {
                if (currentMesh) scene.remove(currentMesh);
                const geometry = new THREE.SphereGeometry(500, 32, 32);
                // Inverse les UVs horizontalement pour corriger la symétrie
                const uvAttribute = geometry.getAttribute('uv');
                for (let i = 0; i < uvAttribute.count; i++) {
                    uvAttribute.setX(i, 1 - uvAttribute.getX(i));
                }
                uvAttribute.needsUpdate = true;
                
                const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
                currentMesh = new THREE.Mesh(geometry, material);
                scene.add(currentMesh);
                document.getElementById('loading').style.display = 'none';
                
                // Afficher les hotspots
                if (sceneData.hotspots) {
                    sceneData.hotspots.forEach((hotspot, i) => {
                        const div = document.createElement('div');
                        div.className = 'hotspot';
                        const radiusValue = (typeof hotspot.radius === 'number' && isFinite(hotspot.radius)) ? hotspot.radius : 10;
                        const size = radiusValue * 2 * PREVIEW_SCALE; // Utiliser le radius du hotspot, défaut à 20px, agrandi en preview si demandé
                        const color = hotspot.color || '#ff0000';
                        div.style.width = size + 'px';
                        div.style.height = size + 'px';
                        
                        // Appliquer la transparence en fonction de hideCircle
                        if (hotspot.hideCircle) {
                            div.style.backgroundColor = 'transparent';
                            div.style.borderColor = 'transparent';
                        } else {
                            div.style.backgroundColor = color + '80'; // 50% opacité
                            div.style.borderColor = color; // Bordure opaque
                        }
                        div.style.borderWidth = '2px';
                        
                        // Ajouter l'icône du hotspot (si showIcon n'est pas défini ou true)
                        const showIcon = hotspot.showIcon !== false;
                        if (showIcon) {
                            let icon = hotspot.icon;
                            if (!icon) {
                                const icons = {
                                    text: '📝',
                                    image: '🖼️',
                                    'text-image': '📋',
                                    link: '🔗',
                                    iframe: '📱',
                                    scene: '⬆️'
                                };
                                icon = icons[hotspot.type] || '📍';
                            }
                            const baseIconSize = (typeof hotspot.iconSize === 'number' && isFinite(hotspot.iconSize))
                                ? hotspot.iconSize
                                : (hotspot.type === 'scene' ? 18 : 14);
                            const iconSize = baseIconSize * PREVIEW_SCALE;
                            const iconWeight = hotspot.type === 'scene' ? 'font-weight: bold;' : '';
                            div.innerHTML = '<span style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size: ' + iconSize + 'px; line-height: 1; ' + iconWeight + ' pointer-events:none; user-select:none;">' + icon + '</span>';
                        }
                        
                        // Generate appropriate tooltip based on hotspot type
                        // Only scene hotspots should show a tooltip
                        if (hotspot.type === 'scene') {
                            // Find the linked scene name
                            const linkedSceneId = hotspot.content?.linkedSceneId;
                            if (linkedSceneId) {
                                const linkedScene = SCENES.find(s => s.id === linkedSceneId);
                                if (linkedScene) {
                                    div.title = 'Aller vers ' + linkedScene.name;
                                } else {
                                    div.title = 'Changer de scène (non configuré)';
                                }
                            } else {
                                div.title = 'Changer de scène (non configuré)';
                            }
                        }
                        // No title attribute for other hotspot types
                        div.onclick = () => showHotspotContent(hotspot);
                        document.body.appendChild(div);
                        hotspots.push({ element: div, hotspot: hotspot });
                    });
                }
            }, undefined, (err) => {
                console.error('Erreur chargement image:', imageUrl, err);
                document.getElementById('loading').innerHTML = '<div>Erreur: Image ' + imageUrl + ' non trouvee. Verifiez le nom et le dossier.</div>';
            });
        }
        
        function setupControls() {
            let isDragging = false, lastX = 0, lastY = 0;
            let rotationX = 0, rotationY = 0;
            let fov = camera.fov;
            
            renderer.domElement.addEventListener('mousedown', (e) => { isDragging = true; lastX = e.clientX; lastY = e.clientY; });
            renderer.domElement.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    rotationY += (e.clientX - lastX) * 0.003;
                    rotationX += (e.clientY - lastY) * 0.003;
                    
                    // Limiter la rotation X
                    if (rotationX > Math.PI / 2) rotationX = Math.PI / 2;
                    if (rotationX < -Math.PI / 2) rotationX = -Math.PI / 2;
                    
                    // Appliquer la rotation a la camera
                    camera.rotation.order = 'YXZ';
                    camera.rotation.y = rotationY;
                    camera.rotation.x = rotationX;
                    
                    lastX = e.clientX;
                    lastY = e.clientY;
                }
            });
            renderer.domElement.addEventListener('mouseup', () => { isDragging = false; });
            renderer.domElement.addEventListener('wheel', (e) => {
                e.preventDefault();
                const zoomSpeed = 5;
                if (e.deltaY > 0) {
                    fov = Math.min(fov + zoomSpeed, 120); // Dezoom max
                } else {
                    fov = Math.max(fov - zoomSpeed, 20); // Zoom max
                }
                camera.fov = fov;
                camera.updateProjectionMatrix();
            }, false);
            document.addEventListener('keydown', (e) => {
                const speed = 0.1;
                if (e.key === 'ArrowUp') rotationX -= speed;
                if (e.key === 'ArrowDown') rotationX += speed;
                if (e.key === 'ArrowLeft') rotationY -= speed;
                if (e.key === 'ArrowRight') rotationY += speed;
            });
        }
        
        function changeScene(index) {
            loadScene(parseInt(index));
        }
        
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            
            // Mettre a jour la position et la taille des hotspots
            if (hotspots.length > 0 && currentMesh) {
                const sceneData = SCENES[currentSceneIndex] || SCENES[0];
                if (sceneData && sceneData.hotspots) {
                    const zoomFactor = 75 / camera.fov; // Scale based on FOV
                    sceneData.hotspots.forEach((hotspot, i) => {
                        if (hotspots[i] && hotspots[i].element) {
                            // Utiliser le vecteur directeur si disponible (pour calibration exacte)
                            // Sinon, convertir depuis coordonnees equirectangulaires
                            let pos;
                            if (hotspot.dir && typeof hotspot.dir.x === 'number') {
                                // Use cached direction vector for precise positioning
                                const radius = 500 - 1;
                                pos = new THREE.Vector3(hotspot.dir.x, hotspot.dir.y, hotspot.dir.z).multiplyScalar(radius);
                            } else {
                                // Fallback: convert from equirectangular coordinates
                                // Use the scene's calibration offset if available
                                const offsetX = sceneData.calibrationOffsetX || 90;
                                const phi = (Math.PI / 180) * (90 - hotspot.y);
                                const theta = (Math.PI / 180) * (-hotspot.x + offsetX);
                                const spherical = new THREE.Spherical(500 - 1, phi, theta);
                                pos = new THREE.Vector3().setFromSpherical(spherical);
                            }
                            pos.project(camera);
                            
                            const widthHalf = window.innerWidth / 2;
                            const heightHalf = window.innerHeight / 2;
                            
                            const screenX = (pos.x * widthHalf) + widthHalf;
                            const screenY = -(pos.y * heightHalf) + heightHalf;
                            const radiusValue = (typeof hotspot.radius === 'number' && isFinite(hotspot.radius)) ? hotspot.radius : 10;
                            const baseSize = radiusValue * 2;
                            const scaledSize = baseSize * zoomFactor * PREVIEW_SCALE;
                            
                            if (pos.z > 0 && pos.z < 1) {
                                hotspots[i].element.style.left = screenX + 'px';
                                hotspots[i].element.style.top = screenY + 'px';
                                hotspots[i].element.style.width = scaledSize + 'px';
                                hotspots[i].element.style.height = scaledSize + 'px';
                                hotspots[i].element.style.display = 'flex';
                            } else {
                                hotspots[i].element.style.display = 'none';
                            }
                        }
                    });
                }
            }
        }
        
        let currentSceneIndex = 0;
        
        init();
    <\/script>
</body>
</html>`}static generateViewerHTML(e){return'<div id="viewer-container"></div>'}static generateViewerJS(){return`
// 360 Viewer Implementation
let scene, camera, renderer
let currentSceneId = ''
let hotspotMarkers = []

function initViewer() {
    const container = document.getElementById('viewer-container')
    
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000)
    container.appendChild(renderer.domElement)
    
    camera.position.z = 0.1
    
    // Load first scene
    if (PROJECT_DATA.scenes.length > 0) {
        loadScene(0)
    }
    
    // Mouse controls
    let mouseDown = false
    let mouseX = 0, mouseY = 0
    
    renderer.domElement.addEventListener('mousedown', (e) => {
        mouseDown = true
        mouseX = e.clientX
        mouseY = e.clientY
    })
    
    renderer.domElement.addEventListener('mousemove', (e) => {
        if (mouseDown) {
            const deltaX = e.clientX - mouseX
            const deltaY = e.clientY - mouseY
            
            camera.rotation.y -= deltaX * 0.005
            camera.rotation.x -= deltaY * 0.005
            
            // Clamp vertical rotation
            if (camera.rotation.x > Math.PI / 2) camera.rotation.x = Math.PI / 2
            if (camera.rotation.x < -Math.PI / 2) camera.rotation.x = -Math.PI / 2
            
            mouseX = e.clientX
            mouseY = e.clientY
        }
    })
    
    renderer.domElement.addEventListener('mouseup', () => {
        mouseDown = false
    })
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        const speed = 0.05
        if (e.key === 'ArrowUp') camera.rotation.x -= speed
        if (e.key === 'ArrowDown') camera.rotation.x += speed
        if (e.key === 'ArrowLeft') camera.rotation.y -= speed
        if (e.key === 'ArrowRight') camera.rotation.y += speed
    })
    
    window.addEventListener('resize', onWindowResize)
    animate()
}

function loadScene(sceneId) {
    // Support both ID (string) and index (number) for compatibility
    let sceneData;
    let sceneIndex;
    
    if (typeof sceneId === 'number') {
        sceneIndex = sceneId
        sceneData = PROJECT_DATA.scenes[sceneIndex]
    } else {
        sceneData = PROJECT_DATA.scenes.find(s => s.id === sceneId)
        sceneIndex = PROJECT_DATA.scenes.indexOf(sceneData)
    }
    
    if (!sceneData) return
    
    currentSceneId = sceneData.id
    
    // Update selector
    const selector = document.getElementById('scene-select')
    if (selector) selector.value = sceneIndex
    
    // Show loading indicator
    const loadingIndicator = document.getElementById('loading-indicator')
    if (loadingIndicator) loadingIndicator.style.display = 'block'
    
    // Clear existing geometry
    scene.children.forEach(child => {
        if (child instanceof THREE.Mesh) {
            scene.remove(child)
        }
    })
    
    // Load 360 image
    const textureLoader = new THREE.TextureLoader()
    console.log('Loading scene image: ' + sceneData.name)
    
    textureLoader.load(
        sceneData.imageUrl, 
        (texture) => {
            console.log('Image loaded successfully for: ' + sceneData.name)
            const geometry = new THREE.SphereGeometry(500, 32, 32)
            // Inverse les UVs horizontalement pour corriger la symétrie
            const uvAttribute = geometry.getAttribute('uv')
            for (let i = 0; i < uvAttribute.count; i++) {
                uvAttribute.setX(i, 1 - uvAttribute.getX(i))
            }
            uvAttribute.needsUpdate = true
            
            const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide })
            const mesh = new THREE.Mesh(geometry, material)
            scene.add(mesh)
            // Hide loading indicator
            if (loadingIndicator) loadingIndicator.style.display = 'none'
            // Show scene selector
            const selectorContainer = document.getElementById('scene-selector-container')
            if (selectorContainer) selectorContainer.style.display = 'block'
        },
        (progress) => {
            const percent = Math.round(progress.loaded / progress.total * 100)
            console.log('Loading progress: ' + percent + '%')
            const progressBar = document.getElementById('loading-progress')
            if (progressBar) progressBar.style.width = percent + '%'
        },
        (error) => {
            console.error('Error loading image:', error)
            if (loadingIndicator) {
                loadingIndicator.innerHTML = '<div class="loading-message">Erreur au chargement de l'image</div><div class="error-message">' + error.message + '</div>'
            }
        }
    )
    
    // Add hotspots
    updateHotspots(sceneData.hotspots, sceneData.calibrationOffsetX || 90)
}

function updateHotspots(hotspots, calibrationOffsetX) {
    // Remove old hotspots
    hotspotMarkers.forEach(marker => {
        if (marker.element && marker.element.parentNode) {
            marker.element.parentNode.removeChild(marker.element)
        }
    })
    hotspotMarkers = []
    
    // Add new hotspots
    hotspots.forEach(hotspot => {
        const marker = createHotspotMarker(hotspot, calibrationOffsetX)
        hotspotMarkers.push(marker)
    })
}

function createHotspotMarker(hotspot, calibrationOffsetX) {
    const element = document.createElement('div')
    element.className = 'hotspot'
    element.innerHTML = '<div class="hotspot-dot">🔍</div>'
    document.getElementById('viewer-container').appendChild(element)
    
    element.addEventListener('click', () => {
        showHotspotPopup(hotspot, element)
    })
    
    return { hotspot, element, calibrationOffsetX, updatePosition: () => updateHotspotPosition(element, hotspot, calibrationOffsetX) }
}

function updateHotspotPosition(element, hotspot, calibrationOffsetX) {
    let vector;
    if (hotspot.dir && typeof hotspot.dir.x === 'number') {
        // Use cached direction vector for precise positioning
        vector = new THREE.Vector3(hotspot.dir.x, hotspot.dir.y, hotspot.dir.z);
    } else {
        // Fallback: convert from equirectangular coordinates
        // Use the scene's calibration offset
        vector = new THREE.Vector3();
        const phi = (90 - hotspot.y) * Math.PI / 180;
        const theta = (-hotspot.x + calibrationOffsetX) * Math.PI / 180;
        vector.setFromSpherical(new THREE.Spherical(1, phi, theta));
    }
    vector.project(camera);
    
    const canvas = renderer.domElement
    const x = (vector.x * 0.5 + 0.5) * canvas.clientWidth
    const y = (-vector.y * 0.5 + 0.5) * canvas.clientHeight
    
    element.style.left = x + 'px'
    element.style.top = y + 'px'
}

function showHotspotPopup(hotspot, marker) {
    let content = ''
    
    if (hotspot.type === 'text') {
        content = hotspot.content.text || ''
    } else if (hotspot.type === 'image') {
        content = '<img src="' + hotspot.content.imageUrl + '" style="max-width: 100%; border-radius: 4px;">'
    } else if (hotspot.type === 'text-image') {
        content = (hotspot.content.title ? '<h3>' + hotspot.content.title + '</h3>' : '') +
                 (hotspot.content.text ? '<p>' + hotspot.content.text + '</p>' : '') +
                 (hotspot.content.imageUrl ? '<img src="' + hotspot.content.imageUrl + '" style="max-width: 100%; border-radius: 4px; margin-top: 10px;">' : '')

    } else if (hotspot.type === 'link') {
        const linkText = hotspot.content.title || 'Ouvrir le lien';
        const domain = new URL(hotspot.content.linkUrl.startsWith('http') ? hotspot.content.linkUrl : 'https://' + hotspot.content.linkUrl).hostname || 'example.com';
        content = '<div style="padding: 10px 0;"><img src="https://www.google.com/s2/favicons?sz=128&domain=' + domain + '" style="width: 32px; height: 32px; margin-right: 10px; display: inline-block;"><a href="' + hotspot.content.linkUrl + '" target="_blank" style="color: #0066cc; text-decoration: underline; font-size: 16px;">' + linkText + '</a></div>'
    } else if (hotspot.type === 'iframe') {
        content = '<iframe src="' + hotspot.content.iframeUrl + '" style="width: 100%; height: 200px; border: none; border-radius: 4px;"></iframe>'
    } else if (hotspot.type === 'scene') {
        // Cherche l'index de la scène par son ID pour le button
        const sceneIndex = SCENES.findIndex(s => s.id === hotspot.content.linkedSceneId);
        const sceneIndexOrDefault = sceneIndex !== -1 ? sceneIndex : 0;
        content = '<button onclick="changeScene('' + sceneIndexOrDefault + '')" style="padding: 10px 20px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer;">Accéder à la scène</button>'
    }
    
    const popup = document.createElement('div')
    popup.className = 'popup'
    popup.innerHTML = '<span class="popup-close" onclick="this.parentElement.remove()">✕</span>' + content
    
    const rect = marker.getBoundingClientRect()
    popup.style.left = (rect.right + 10) + 'px'
    popup.style.top = (rect.top) + 'px'
    
    document.getElementById('viewer-container').appendChild(popup)
}

function changeScene(sceneIndex) {
    // Parse as number if string
    const index = typeof sceneIndex === 'string' ? parseInt(sceneIndex) : sceneIndex
    loadScene(index)
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
    requestAnimationFrame(animate)
    
    hotspotMarkers.forEach(marker => {
        marker.updatePosition()
    })
    
    renderer.render(scene, camera)
}

initViewer()
    `}}async function Vd(n,e,t){return await ey.exportAsHTMLStandalone(n,e,t)}const ty={class:"export-panel"},ny={class:"export-container"},iy={class:"export-preview"},ry={class:"project-info"},sy={class:"info-row"},oy={class:"info-row"},ay={class:"info-row"},ly={class:"info-row"},cy=Pi({__name:"ExportPanel",setup(n){const e=Ji(),t=Yi(()=>{var s;return((s=e.project)==null?void 0:s.scenes.reduce((o,a)=>o+a.hotspots.length,0))||0}),i=Yi(()=>{if(!e.project)return"0 MB";const s=JSON.stringify(e.project);return(new Blob([s]).size/1024/1024).toFixed(2)+" MB"}),r=async()=>{if(!e.project)return;const s=await Vd(e.project,void 0,{previewMode:!0}),o=new Blob([s],{type:"text/html"}),a=URL.createObjectURL(o),l=document.createElement("a");l.href=a,l.download="index.html",l.click(),URL.revokeObjectURL(a)};return(s,o)=>{var a,l;return Le(),Ne("div",ty,[F("div",ny,[o[8]||(o[8]=F("h2",null,"Exporter le Projet",-1)),F("div",iy,[o[4]||(o[4]=F("h3",null,"Apercu du Projet",-1)),F("div",ry,[F("div",sy,[o[0]||(o[0]=F("label",null,"Nom :",-1)),F("span",null,_t((a=Qe(e).project)==null?void 0:a.name),1)]),F("div",oy,[o[1]||(o[1]=F("label",null,"Scenes :",-1)),F("span",null,_t((l=Qe(e).project)==null?void 0:l.scenes.length),1)]),F("div",ay,[o[2]||(o[2]=F("label",null,"Hotspots :",-1)),F("span",null,_t(t.value),1)]),F("div",ly,[o[3]||(o[3]=F("label",null,"Taille approx :",-1)),F("span",null,_t(i.value),1)])])]),F("div",{class:"export-options"},[F("div",{class:"export-card"},[o[5]||(o[5]=F("div",{class:"card-icon"},"📄",-1)),o[6]||(o[6]=F("h3",null,"HTML Standalone",-1)),o[7]||(o[7]=F("p",null,"Génère un fichier index.html unique à lancer (de préférence avec Chrome pour assurer un maximum de compatibilité).",-1)),F("button",{onClick:r,class:"btn-export"},"Télécharger l'export HTML")])])])])}}});const uy=Di(cy,[["__scopeId","data-v-bbdbb857"]]),fy={class:"export-viewer"},dy=["srcdoc"],hy=Pi({__name:"ExportViewer",setup(n){const e=Ji(),t=Oe(null),i=Oe("");return pp(async()=>{if(e.project){const r=e.activeSceneId;i.value=await Vd(e.project,r,{previewMode:!0})}else i.value=""}),(r,s)=>(Le(),Ne("div",fy,[F("iframe",{ref_key:"iframeRef",ref:t,srcdoc:i.value,title:"Export Preview"},null,8,dy)]))}});const py=Di(hy,[["__scopeId","data-v-88cd004c"]]),my={class:"app-container"},xy={class:"toasts-container"},gy={key:1,class:"editor-layout"},_y={class:"sidebar"},vy={class:"main-content"},Sy={class:"editor-tabs"},by=Pi({__name:"App",setup(n){const e=Ji(),t=Oe("editor"),i=(s,o)=>{e.createNewProject(s,o)},r=s=>{e.loadProject(s)};return Uo(async()=>{console.log("App initialized - showing HomeScreen")}),(s,o)=>(Le(),Ne("div",my,[F("div",xy,[(Le(!0),Ne(bt,null,vi(Qe(Tr),a=>(Le(),Ne("div",{key:a.id,class:qt(["toast",`toast-${a.type}`])},_t(a.message),3))),128))]),Qe(e).project?(Le(),Ne("div",gy,[F("div",_y,[mn(Gm),mn(l0,{class:qt({"scenelist-disabled":t.value==="export"})},null,8,["class"])]),F("div",vy,[F("div",Sy,[F("button",{class:qt([{active:t.value==="editor"},"tab-btn"]),onClick:o[0]||(o[0]=a=>t.value="editor")}," ✏️ Éditeur ",2),F("button",{class:qt([{active:t.value==="export-viewer"},"tab-btn"]),onClick:o[1]||(o[1]=a=>t.value="export-viewer")}," 👀 Apercu ",2),F("button",{class:qt([{active:t.value==="export"},"tab-btn"]),onClick:o[2]||(o[2]=a=>t.value="export")}," 💾 Exporter ",2)]),t.value==="editor"?(Le(),Ne(bt,{key:0},[Qe(e).activeScene?(Le(),br(JM,{key:0})):gt("",!0)],64)):t.value==="export"?(Le(),br(uy,{key:1})):t.value==="export-viewer"?(Le(),Ne(bt,{key:2},[Qe(e).project?(Le(),br(py,{key:0})):gt("",!0)],64)):gt("",!0)])])):(Le(),br(zm,{key:0,onCreateProject:i,onLoadProject:r}))]))}});const My=Di(by,[["__scopeId","data-v-01a53ccb"]]),kd=Sm(My);kd.use(Em());kd.mount("#app");
