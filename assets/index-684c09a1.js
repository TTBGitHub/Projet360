(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ft={},yr=[],En=()=>{},ef=()=>!1,Eo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Fl=n=>n.startsWith("onUpdate:"),Lt=Object.assign,Ol=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xd=Object.prototype.hasOwnProperty,rt=(n,e)=>Xd.call(n,e),Ve=Array.isArray,Er=n=>ys(n)==="[object Map]",To=n=>ys(n)==="[object Set]",vc=n=>ys(n)==="[object Date]",Ye=n=>typeof n=="function",Ct=n=>typeof n=="string",On=n=>typeof n=="symbol",mt=n=>n!==null&&typeof n=="object",tf=n=>(mt(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),nf=Object.prototype.toString,ys=n=>nf.call(n),qd=n=>ys(n).slice(8,-1),rf=n=>ys(n)==="[object Object]",Ao=n=>Ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Zr=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Yd=/-\w/g,wi=wo(n=>n.replace(Yd,e=>e.slice(1).toUpperCase())),jd=/\B([A-Z])/g,Di=wo(n=>n.replace(jd,"-$1").toLowerCase()),sf=wo(n=>n.charAt(0).toUpperCase()+n.slice(1)),jo=wo(n=>n?`on${sf(n)}`:""),Ti=(n,e)=>!Object.is(n,e),no=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},of=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Co=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Sc;const Ro=()=>Sc||(Sc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fn(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Ct(i)?Jd(i):fn(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ct(n)||mt(n))return n}const $d=/;(?![^(]*\))/g,Kd=/:([^]+)/,Zd=/\/\*[^]*?\*\//g;function Jd(n){const e={};return n.replace(Zd,"").split($d).forEach(t=>{if(t){const i=t.split(Kd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function zt(n){let e="";if(Ct(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=zt(n[t]);i&&(e+=i+" ")}else if(mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Qd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eh=Nl(Qd);function af(n){return!!n||n===""}function th(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Po(n[i],e[i]);return t}function Po(n,e){if(n===e)return!0;let t=vc(n),i=vc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=On(n),i=On(e),t||i)return n===e;if(t=Ve(n),i=Ve(e),t||i)return t&&i?th(n,e):!1;if(t=mt(n),i=mt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Po(n[o],e[o]))return!1}}return String(n)===String(e)}function nh(n,e){return n.findIndex(t=>Po(t,e))}const lf=n=>!!(n&&n.__v_isRef===!0),gt=n=>Ct(n)?n:n==null?"":Ve(n)||mt(n)&&(n.toString===nf||!Ye(n.toString))?lf(n)?gt(n.value):JSON.stringify(n,cf,2):String(n),cf=(n,e)=>lf(e)?cf(n,e.value):Er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[$o(i,s)+" =>"]=r,t),{})}:To(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>$o(t))}:On(e)?$o(e):mt(e)&&!Ve(e)&&!rf(e)?String(e):e,$o=(n,e="")=>{var t;return On(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class uf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Bt;try{return Bt=this,e()}finally{Bt=t}}}on(){++this._on===1&&(this.prevScope=Bt,Bt=this)}off(){this._on>0&&--this._on===0&&(Bt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ff(n){return new uf(n)}function df(){return Bt}function ih(n,e=!1){Bt&&Bt.cleanups.push(n)}let ht;const Ko=new WeakSet;class hf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&Bt.active&&Bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ko.has(this)&&(Ko.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bc(this),xf(this);const e=ht,t=Tn;ht=this,Tn=!0;try{return this.fn()}finally{gf(this),ht=e,Tn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Hl(e);this.deps=this.depsTail=void 0,bc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ko.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ua(this)&&this.run()}get dirty(){return Ua(this)}}let pf=0,Jr,Qr;function mf(n,e=!1){if(n.flags|=8,e){n.next=Qr,Qr=n;return}n.next=Jr,Jr=n}function Bl(){pf++}function zl(){if(--pf>0)return;if(Qr){let e=Qr;for(Qr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Jr;){let e=Jr;for(Jr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function xf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Hl(i),rh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ua(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_f(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function _f(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===us)||(n.globalVersion=us,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ua(n))))return;n.flags|=2;const e=n.dep,t=ht,i=Tn;ht=n,Tn=!0;try{xf(n);const r=n.fn(n._value);(e.version===0||Ti(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ht=t,Tn=i,gf(n),n.flags&=-3}}function Hl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Hl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function rh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Tn=!0;const vf=[];function ri(){vf.push(Tn),Tn=!1}function si(){const n=vf.pop();Tn=n===void 0?!0:n}function bc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let us=0;class sh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class kl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ht||!Tn||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new sh(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,Sf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,us++,this.notify(e)}notify(e){Bl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{zl()}}}function Sf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Sf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ho=new WeakMap,Ki=Symbol(""),Na=Symbol(""),fs=Symbol("");function Ht(n,e,t){if(Tn&&ht){let i=ho.get(n);i||ho.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new kl),r.map=i,r.key=t),r.track()}}function jn(n,e,t,i,r,s){const o=ho.get(n);if(!o){us++;return}const a=l=>{l&&l.trigger()};if(Bl(),e==="clear")o.forEach(a);else{const l=Ve(n),c=l&&Ao(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===fs||!On(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(fs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ki)),Er(n)&&a(o.get(Na)));break;case"delete":l||(a(o.get(Ki)),Er(n)&&a(o.get(Na)));break;case"set":Er(n)&&a(o.get(Ki));break}}zl()}function oh(n,e){const t=ho.get(n);return t&&t.get(e)}function nr(n){const e=nt(n);return e===n?e:(Ht(e,"iterate",fs),sn(n)?e:e.map(wn))}function Do(n){return Ht(n=nt(n),"iterate",fs),n}function vi(n,e){return oi(n)?Qn(n)?Dr(wn(e)):Dr(e):wn(e)}const ah={__proto__:null,[Symbol.iterator](){return Zo(this,Symbol.iterator,n=>vi(this,n))},concat(...n){return nr(this).concat(...n.map(e=>Ve(e)?nr(e):e))},entries(){return Zo(this,"entries",n=>(n[1]=vi(this,n[1]),n))},every(n,e){return zn(this,"every",n,e,void 0,arguments)},filter(n,e){return zn(this,"filter",n,e,t=>t.map(i=>vi(this,i)),arguments)},find(n,e){return zn(this,"find",n,e,t=>vi(this,t),arguments)},findIndex(n,e){return zn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return zn(this,"findLast",n,e,t=>vi(this,t),arguments)},findLastIndex(n,e){return zn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return zn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Jo(this,"includes",n)},indexOf(...n){return Jo(this,"indexOf",n)},join(n){return nr(this).join(n)},lastIndexOf(...n){return Jo(this,"lastIndexOf",n)},map(n,e){return zn(this,"map",n,e,void 0,arguments)},pop(){return Vr(this,"pop")},push(...n){return Vr(this,"push",n)},reduce(n,...e){return Mc(this,"reduce",n,e)},reduceRight(n,...e){return Mc(this,"reduceRight",n,e)},shift(){return Vr(this,"shift")},some(n,e){return zn(this,"some",n,e,void 0,arguments)},splice(...n){return Vr(this,"splice",n)},toReversed(){return nr(this).toReversed()},toSorted(n){return nr(this).toSorted(n)},toSpliced(...n){return nr(this).toSpliced(...n)},unshift(...n){return Vr(this,"unshift",n)},values(){return Zo(this,"values",n=>vi(this,n))}};function Zo(n,e,t){const i=Do(n),r=i[e]();return i!==n&&!sn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const lh=Array.prototype;function zn(n,e,t,i,r,s){const o=Do(n),a=o!==n&&!sn(n),l=o[e];if(l!==lh[e]){const f=l.apply(n,s);return a?wn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,vi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Mc(n,e,t,i){const r=Do(n);let s=t;return r!==n&&(sn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,vi(n,a),l,n)}),r[e](s,...i)}function Jo(n,e,t){const i=nt(n);Ht(i,"iterate",fs);const r=i[e](...t);return(r===-1||r===!1)&&Io(t[0])?(t[0]=nt(t[0]),i[e](...t)):r}function Vr(n,e,t=[]){ri(),Bl();const i=nt(n)[e].apply(n,t);return zl(),si(),i}const ch=Nl("__proto__,__v_isRef,__isVue"),bf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(On));function uh(n){On(n)||(n=String(n));const e=nt(this);return Ht(e,"has",n),e.hasOwnProperty(n)}class Mf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Sh:Af:s?Tf:Ef).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!r){let l;if(o&&(l=ah[t]))return l;if(t==="hasOwnProperty")return uh}const a=Reflect.get(e,t,_t(e)?e:i);if((On(t)?bf.has(t):ch(t))||(r||Ht(e,"get",t),s))return a;if(_t(a)){const l=o&&Ao(t)?a:a.value;return r&&mt(l)?Oa(l):l}return mt(a)?r?Oa(a):Pr(a):a}}class yf extends Mf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ve(e)&&Ao(t);if(!this._isShallow){const c=oi(s);if(!sn(i)&&!oi(i)&&(s=nt(s),i=nt(i)),!o&&_t(s)&&!_t(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:rt(e,t),l=Reflect.set(e,t,i,_t(e)?e:r);return e===nt(r)&&(a?Ti(i,s)&&jn(e,"set",t,i):jn(e,"add",t,i)),l}deleteProperty(e,t){const i=rt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&jn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!On(t)||!bf.has(t))&&Ht(e,"has",t),i}ownKeys(e){return Ht(e,"iterate",Ve(e)?"length":Ki),Reflect.ownKeys(e)}}class fh extends Mf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const dh=new yf,hh=new fh,ph=new yf(!0);const Fa=n=>n,Ds=n=>Reflect.getPrototypeOf(n);function mh(n,e,t){return function(...i){const r=this.__v_raw,s=nt(r),o=Er(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Fa:e?Dr:wn;return!e&&Ht(s,"iterate",l?Na:Ki),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Is(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function xh(n,e){const t={get(r){const s=this.__v_raw,o=nt(s),a=nt(r);n||(Ti(r,a)&&Ht(o,"get",r),Ht(o,"get",a));const{has:l}=Ds(o),c=e?Fa:n?Dr:wn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ht(nt(r),"iterate",Ki),r.size},has(r){const s=this.__v_raw,o=nt(s),a=nt(r);return n||(Ti(r,a)&&Ht(o,"has",r),Ht(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=nt(a),c=e?Fa:n?Dr:wn;return!n&&Ht(l,"iterate",Ki),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Lt(t,n?{add:Is("add"),set:Is("set"),delete:Is("delete"),clear:Is("clear")}:{add(r){!e&&!sn(r)&&!oi(r)&&(r=nt(r));const s=nt(this);return Ds(s).has.call(s,r)||(s.add(r),jn(s,"add",r,r)),this},set(r,s){!e&&!sn(s)&&!oi(s)&&(s=nt(s));const o=nt(this),{has:a,get:l}=Ds(o);let c=a.call(o,r);c||(r=nt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ti(s,u)&&jn(o,"set",r,s):jn(o,"add",r,s),this},delete(r){const s=nt(this),{has:o,get:a}=Ds(s);let l=o.call(s,r);l||(r=nt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&jn(s,"delete",r,void 0),c},clear(){const r=nt(this),s=r.size!==0,o=r.clear();return s&&jn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=mh(r,n,e)}),t}function Vl(n,e){const t=xh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(rt(t,r)&&r in i?t:i,r,s)}const gh={get:Vl(!1,!1)},_h={get:Vl(!1,!0)},vh={get:Vl(!0,!1)};const Ef=new WeakMap,Tf=new WeakMap,Af=new WeakMap,Sh=new WeakMap;function bh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mh(n){return n.__v_skip||!Object.isExtensible(n)?0:bh(qd(n))}function Pr(n){return oi(n)?n:Gl(n,!1,dh,gh,Ef)}function yh(n){return Gl(n,!1,ph,_h,Tf)}function Oa(n){return Gl(n,!0,hh,vh,Af)}function Gl(n,e,t,i,r){if(!mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Mh(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Qn(n){return oi(n)?Qn(n.__v_raw):!!(n&&n.__v_isReactive)}function oi(n){return!!(n&&n.__v_isReadonly)}function sn(n){return!!(n&&n.__v_isShallow)}function Io(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function Wl(n){return!rt(n,"__v_skip")&&Object.isExtensible(n)&&of(n,"__v_skip",!0),n}const wn=n=>mt(n)?Pr(n):n,Dr=n=>mt(n)?Oa(n):n;function _t(n){return n?n.__v_isRef===!0:!1}function Ne(n){return Eh(n,!1)}function Eh(n,e){return _t(n)?n:new Th(n,e)}class Th{constructor(e,t){this.dep=new kl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:wn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||sn(e)||oi(e);e=i?e:nt(e),Ti(e,t)&&(this._rawValue=e,this._value=i?e:wn(e),this.dep.trigger())}}function Ke(n){return _t(n)?n.value:n}const Ah={get:(n,e,t)=>e==="__v_raw"?n:Ke(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return _t(r)&&!_t(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function wf(n){return Qn(n)?n:new Proxy(n,Ah)}function wh(n){const e=Ve(n)?new Array(n.length):{};for(const t in n)e[t]=Rh(n,t);return e}class Ch{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=nt(e);let r=!0,s=e;if(!Ve(e)||!Ao(String(t)))do r=!Io(s)||sn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=Ke(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&_t(this._raw[this._key])){const t=this._object[this._key];if(_t(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return oh(this._raw,this._key)}}function Rh(n,e,t){return new Ch(n,e,t)}class Ph{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new kl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=us-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return mf(this,!0),!0}get value(){const e=this.dep.track();return _f(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Dh(n,e,t=!1){let i,r;return Ye(n)?i=n:(i=n.get,r=n.set),new Ph(i,r,t)}const Ls={},po=new WeakMap;let Wi;function Ih(n,e=!1,t=Wi){if(t){let i=po.get(t);i||po.set(t,i=[]),i.push(n)}}function Lh(n,e,t=ft){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=w=>r?w:sn(w)||r===!1||r===0?$n(w,1):$n(w);let u,f,h,p,_=!1,S=!1;if(_t(n)?(f=()=>n.value,_=sn(n)):Qn(n)?(f=()=>c(n),_=!0):Ve(n)?(S=!0,_=n.some(w=>Qn(w)||sn(w)),f=()=>n.map(w=>{if(_t(w))return w.value;if(Qn(w))return c(w);if(Ye(w))return l?l(w,2):w()})):Ye(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ri();try{h()}finally{si()}}const w=Wi;Wi=u;try{return l?l(n,3,[p]):n(p)}finally{Wi=w}}:f=En,e&&r){const w=f,I=r===!0?1/0:r;f=()=>$n(w(),I)}const m=df(),d=()=>{u.stop(),m&&m.active&&Ol(m.effects,u)};if(s&&e){const w=e;e=(...I)=>{w(...I),d()}}let A=S?new Array(n.length).fill(Ls):Ls;const M=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(e){const I=u.run();if(r||_||(S?I.some((D,F)=>Ti(D,A[F])):Ti(I,A))){h&&h();const D=Wi;Wi=u;try{const F=[I,A===Ls?void 0:S&&A[0]===Ls?[]:A,p];A=I,l?l(e,3,F):e(...F)}finally{Wi=D}}}else u.run()};return a&&a(M),u=new hf(f),u.scheduler=o?()=>o(M,!1):M,p=w=>Ih(w,!1,u),h=u.onStop=()=>{const w=po.get(u);if(w){if(l)l(w,4);else for(const I of w)I();po.delete(u)}},e?i?M(!0):A=u.run():o?o(M.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function $n(n,e=1/0,t){if(e<=0||!mt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,_t(n))$n(n.value,e,t);else if(Ve(n))for(let i=0;i<n.length;i++)$n(n[i],e,t);else if(To(n)||Er(n))n.forEach(i=>{$n(i,e,t)});else if(rf(n)){for(const i in n)$n(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&$n(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Es(n,e,t,i){try{return i?n(...i):n()}catch(r){Lo(r,e,t)}}function Bn(n,e,t,i){if(Ye(n)){const r=Es(n,e,t,i);return r&&tf(r)&&r.catch(s=>{Lo(s,e,t)}),r}if(Ve(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Bn(n[s],e,t,i));return r}}function Lo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){ri(),Es(s,null,10,[n,l,c]),si();return}}Uh(n,t,r,i,o)}function Uh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Yt=[];let Pn=-1;const Tr=[];let Si=null,vr=0;const Cf=Promise.resolve();let mo=null;function Xl(n){const e=mo||Cf;return n?e.then(this?n.bind(this):n):e}function Nh(n){let e=Pn+1,t=Yt.length;for(;e<t;){const i=e+t>>>1,r=Yt[i],s=ds(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function ql(n){if(!(n.flags&1)){const e=ds(n),t=Yt[Yt.length-1];!t||!(n.flags&2)&&e>=ds(t)?Yt.push(n):Yt.splice(Nh(e),0,n),n.flags|=1,Rf()}}function Rf(){mo||(mo=Cf.then(Df))}function Fh(n){Ve(n)?Tr.push(...n):Si&&n.id===-1?Si.splice(vr+1,0,n):n.flags&1||(Tr.push(n),n.flags|=1),Rf()}function yc(n,e,t=Pn+1){for(;t<Yt.length;t++){const i=Yt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Yt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Pf(n){if(Tr.length){const e=[...new Set(Tr)].sort((t,i)=>ds(t)-ds(i));if(Tr.length=0,Si){Si.push(...e);return}for(Si=e,vr=0;vr<Si.length;vr++){const t=Si[vr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Si=null,vr=0}}const ds=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Df(n){const e=En;try{for(Pn=0;Pn<Yt.length;Pn++){const t=Yt[Pn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Es(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Pn<Yt.length;Pn++){const t=Yt[Pn];t&&(t.flags&=-2)}Pn=-1,Yt.length=0,Pf(),mo=null,(Yt.length||Tr.length)&&Df()}}let mn=null,If=null;function xo(n){const e=mn;return mn=n,If=n&&n.type.__scopeId||null,e}function Oh(n,e=mn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ic(-1);const s=xo(e);let o;try{o=n(...r)}finally{xo(s),i._d&&Ic(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Rt(n,e){if(mn===null)return n;const t=zo(mn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ft]=e[r];s&&(Ye(s)&&(s={mounted:s,updated:s}),s.deep&&$n(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Fi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ri(),Bn(l,t,8,[n.el,a,n,e]),si())}}const Bh=Symbol("_vte"),zh=n=>n.__isTeleport,Hh=Symbol("_leaveCb");function Yl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Yl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ii(n,e){return Ye(n)?(()=>Lt({name:n.name},e,{setup:n}))():n}function Lf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const go=new WeakMap;function es(n,e,t,i,r=!1){if(Ve(n)){n.forEach((_,S)=>es(_,e&&(Ve(e)?e[S]:e),t,i,r));return}if(ts(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&es(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?zo(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,f=a.setupState,h=nt(f),p=f===ft?ef:_=>rt(h,_);if(c!=null&&c!==l){if(Ec(e),Ct(c))u[c]=null,p(c)&&(f[c]=null);else if(_t(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(Ye(l))Es(l,a,12,[o,u]);else{const _=Ct(l),S=_t(l);if(_||S){const m=()=>{if(n.f){const d=_?p(l)?f[l]:u[l]:l.value;if(r)Ve(d)&&Ol(d,s);else if(Ve(d))d.includes(s)||d.push(s);else if(_)u[l]=[s],p(l)&&(f[l]=u[l]);else{const A=[s];l.value=A,n.k&&(u[n.k]=A)}}else _?(u[l]=o,p(l)&&(f[l]=o)):S&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const d=()=>{m(),go.delete(n)};d.id=-1,go.set(n,d),nn(d,t)}else Ec(n),m()}}}function Ec(n){const e=go.get(n);e&&(e.flags|=8,go.delete(n))}Ro().requestIdleCallback;Ro().cancelIdleCallback;const ts=n=>!!n.type.__asyncLoader,Uf=n=>n.type.__isKeepAlive;function kh(n,e){Nf(n,"a",e)}function Vh(n,e){Nf(n,"da",e)}function Nf(n,e,t=jt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Uo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Uf(r.parent.vnode)&&Gh(i,e,t,r),r=r.parent}}function Gh(n,e,t,i){const r=Uo(e,n,i,!0);Fo(()=>{Ol(i[e],r)},t)}function Uo(n,e,t=jt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ri();const a=Ts(t),l=Bn(e,t,n,o);return a(),si(),l});return i?r.unshift(s):r.push(s),s}}const ui=n=>(e,t=jt)=>{(!ps||n==="sp")&&Uo(n,(...i)=>e(...i),t)},Wh=ui("bm"),No=ui("m"),Xh=ui("bu"),qh=ui("u"),Yh=ui("bum"),Fo=ui("um"),jh=ui("sp"),$h=ui("rtg"),Kh=ui("rtc");function Zh(n,e=jt){Uo("ec",n,e)}const Jh=Symbol.for("v-ndc");function bi(n,e,t,i){let r;const s=t&&t[i],o=Ve(n);if(o||Ct(n)){const a=o&&Qn(n);let l=!1,c=!1;a&&(l=!sn(n),c=oi(n),n=Do(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Dr(wn(n[u])):wn(n[u]):n[u],u,void 0,s&&s[u])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(mt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s&&s[l]));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s&&s[l])}}else r=[];return t&&(t[i]=r),r}const Ba=n=>n?td(n)?zo(n):Ba(n.parent):null,ns=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ba(n.parent),$root:n=>Ba(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>jl(n),$forceUpdate:n=>n.f||(n.f=()=>{ql(n.update)}),$nextTick:n=>n.n||(n.n=Xl.bind(n.proxy)),$watch:n=>dp.bind(n)}),Qo=(n,e)=>n!==ft&&!n.__isScriptSetup&&rt(n,e),Qh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Qo(i,e))return o[e]=1,i[e];if(r!==ft&&rt(r,e))return o[e]=2,r[e];if(rt(s,e))return o[e]=3,s[e];if(t!==ft&&rt(t,e))return o[e]=4,t[e];za&&(o[e]=0)}}const c=ns[e];let u,f;if(c)return e==="$attrs"&&Ht(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ft&&rt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,rt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Qo(r,e)?(r[e]=t,!0):i!==ft&&rt(i,e)?(i[e]=t,!0):rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==ft&&a[0]!=="$"&&rt(n,a)||Qo(e,a)||rt(s,a)||rt(i,a)||rt(ns,a)||rt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Tc(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let za=!0;function ep(n){const e=jl(n),t=n.proxy,i=n.ctx;za=!1,e.beforeCreate&&Ac(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:S,deactivated:m,beforeDestroy:d,beforeUnmount:A,destroyed:M,unmounted:w,render:I,renderTracked:D,renderTriggered:F,errorCaptured:H,serverPrefetch:T,expose:b,inheritAttrs:B,components:Z,directives:q,filters:z}=e;if(c&&tp(c,i,null),o)for(const ne in o){const j=o[ne];Ye(j)&&(i[ne]=j.bind(t))}if(r){const ne=r.call(t,t);mt(ne)&&(n.data=Pr(ne))}if(za=!0,s)for(const ne in s){const j=s[ne],de=Ye(j)?j.bind(t,t):Ye(j.get)?j.get.bind(t,t):En,me=!Ye(j)&&Ye(j.set)?j.set.bind(t):En,Re=ti({get:de,set:me});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>Re.value,set:He=>Re.value=He})}if(a)for(const ne in a)Ff(a[ne],i,t,ne);if(l){const ne=Ye(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(j=>{ap(j,ne[j])})}u&&Ac(u,n,"c");function W(ne,j){Ve(j)?j.forEach(de=>ne(de.bind(t))):j&&ne(j.bind(t))}if(W(Wh,f),W(No,h),W(Xh,p),W(qh,_),W(kh,S),W(Vh,m),W(Zh,H),W(Kh,D),W($h,F),W(Yh,A),W(Fo,w),W(jh,T),Ve(b))if(b.length){const ne=n.exposed||(n.exposed={});b.forEach(j=>{Object.defineProperty(ne,j,{get:()=>t[j],set:de=>t[j]=de,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===En&&(n.render=I),B!=null&&(n.inheritAttrs=B),Z&&(n.components=Z),q&&(n.directives=q),T&&Lf(n)}function tp(n,e,t=En){Ve(n)&&(n=Ha(n));for(const i in n){const r=n[i];let s;mt(r)?"default"in r?s=is(r.from||i,r.default,!0):s=is(r.from||i):s=is(r),_t(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Ac(n,e,t){Bn(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ff(n,e,t,i){let r=i.includes(".")?Bf(t,i):()=>t[i];if(Ct(n)){const s=e[n];Ye(s)&&Ln(r,s)}else if(Ye(n))Ln(r,n.bind(t));else if(mt(n))if(Ve(n))n.forEach(s=>Ff(s,e,t,i));else{const s=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(s)&&Ln(r,s,n)}}function jl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>_o(l,c,o,!0)),_o(l,e,o)),mt(e)&&s.set(e,l),l}function _o(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&_o(n,s,t,!0),r&&r.forEach(o=>_o(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=np[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const np={data:wc,props:Cc,emits:Cc,methods:$r,computed:$r,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:$r,directives:$r,watch:rp,provide:wc,inject:ip};function wc(n,e){return e?n?function(){return Lt(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function ip(n,e){return $r(Ha(n),Ha(e))}function Ha(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Wt(n,e){return n?[...new Set([].concat(n,e))]:e}function $r(n,e){return n?Lt(Object.create(null),n,e):e}function Cc(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:Lt(Object.create(null),Tc(n),Tc(e??{})):e}function rp(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const i in e)t[i]=Wt(n[i],e[i]);return t}function Of(){return{app:null,config:{isNativeTag:ef,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sp=0;function op(n,e){return function(i,r=null){Ye(i)||(i=Lt({},i)),r!=null&&!mt(r)&&(r=null);const s=Of(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:sp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Wp,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ye(u.install)?(o.add(u),u.install(c,...f)):Ye(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||gn(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(p,u):n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,zo(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Bn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Zi;Zi=c;try{return u()}finally{Zi=f}}};return c}}let Zi=null;function ap(n,e){if(jt){let t=jt.provides;const i=jt.parent&&jt.parent.provides;i===t&&(t=jt.provides=Object.create(i)),t[n]=e}}function is(n,e,t=!1){const i=ed();if(i||Zi){let r=Zi?Zi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}function lp(){return!!(ed()||Zi)}const cp=Symbol.for("v-scx"),up=()=>is(cp);function fp(n,e){return $l(n,null,e)}function Ln(n,e,t){return $l(n,e,t)}function $l(n,e,t=ft){const{immediate:i,deep:r,flush:s,once:o}=t,a=Lt({},t),l=e&&i||!e&&s!=="post";let c;if(ps){if(s==="sync"){const p=up();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=En,p.resume=En,p.pause=En,p}}const u=jt;a.call=(p,_,S)=>Bn(p,u,_,S);let f=!1;s==="post"?a.scheduler=p=>{nn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():ql(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Lh(n,e,a);return ps&&(c?c.push(h):l&&h()),h}function dp(n,e,t){const i=this.proxy,r=Ct(n)?n.includes(".")?Bf(i,n):()=>i[n]:n.bind(i,i);let s;Ye(e)?s=e:(s=e.handler,t=e);const o=Ts(this),a=$l(r,s.bind(i),t);return o(),a}function Bf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const hp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${wi(e)}Modifiers`]||n[`${Di(e)}Modifiers`];function pp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let r=t;const s=e.startsWith("update:"),o=s&&hp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Ct(u)?u.trim():u)),o.number&&(r=t.map(Co)));let a,l=i[a=jo(e)]||i[a=jo(wi(e))];!l&&s&&(l=i[a=jo(Di(e))]),l&&Bn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Bn(c,n,6,r)}}const mp=new WeakMap;function zf(n,e,t=!1){const i=t?mp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ye(n)){const l=c=>{const u=zf(c,e,!0);u&&(a=!0,Lt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(mt(n)&&i.set(n,null),null):(Ve(s)?s.forEach(l=>o[l]=null):Lt(o,s),mt(n)&&i.set(n,o),o)}function Oo(n,e){return!n||!Eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(n,e[0].toLowerCase()+e.slice(1))||rt(n,Di(e))||rt(n,e))}function ea(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:_,inheritAttrs:S}=n,m=xo(n);let d,A;try{if(t.shapeFlag&4){const w=r||i,I=w;d=Dn(c.call(I,w,u,f,p,h,_)),A=a}else{const w=e;d=Dn(w.length>1?w(f,{attrs:a,slots:o,emit:l}):w(f,null)),A=e.props?a:xp(a)}}catch(w){rs.length=0,Lo(w,n,1),d=gn(Ci)}let M=d;if(A&&S!==!1){const w=Object.keys(A),{shapeFlag:I}=M;w.length&&I&7&&(s&&w.some(Fl)&&(A=gp(A,s)),M=Ir(M,A,!1,!0))}return t.dirs&&(M=Ir(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&Yl(M,t.transition),d=M,xo(m),d}const xp=n=>{let e;for(const t in n)(t==="class"||t==="style"||Eo(t))&&((e||(e={}))[t]=n[t]);return e},gp=(n,e)=>{const t={};for(const i in n)(!Fl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function _p(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Rc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Oo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Rc(i,o,c):!0:!!o;return!1}function Rc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Oo(t,s))return!0}return!1}function vp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Hf={},kf=()=>Object.create(Hf),Vf=n=>Object.getPrototypeOf(n)===Hf;function Sp(n,e,t,i=!1){const r={},s=kf();n.propsDefaults=Object.create(null),Gf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:yh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function bp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=nt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Oo(n.emitsOptions,h))continue;const p=e[h];if(l)if(rt(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const _=wi(h);r[_]=ka(l,a,_,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Gf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!rt(e,f)&&((u=Di(f))===f||!rt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ka(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!rt(e,f))&&(delete s[f],c=!0)}c&&jn(n.attrs,"set","")}function Gf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zr(l))continue;const c=e[l];let u;r&&rt(r,u=wi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Oo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=nt(t),c=a||ft;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ka(r,l,f,c[f],n,!rt(c,f))}}return o}function ka(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ts(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Di(t))&&(i=!0))}return i}const Mp=new WeakMap;function Wf(n,e,t=!1){const i=t?Mp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ye(n)){const u=f=>{l=!0;const[h,p]=Wf(f,e,!0);Lt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return mt(n)&&i.set(n,yr),yr;if(Ve(s))for(let u=0;u<s.length;u++){const f=wi(s[u]);Pc(f)&&(o[f]=ft)}else if(s)for(const u in s){const f=wi(u);if(Pc(f)){const h=s[u],p=o[f]=Ve(h)||Ye(h)?{type:h}:Lt({},h),_=p.type;let S=!1,m=!0;if(Ve(_))for(let d=0;d<_.length;++d){const A=_[d],M=Ye(A)&&A.name;if(M==="Boolean"){S=!0;break}else M==="String"&&(m=!1)}else S=Ye(_)&&_.name==="Boolean";p[0]=S,p[1]=m,(S||rt(p,"default"))&&a.push(f)}}const c=[o,a];return mt(n)&&i.set(n,c),c}function Pc(n){return n[0]!=="$"&&!Zr(n)}const Kl=n=>n==="_"||n==="_ctx"||n==="$stable",Zl=n=>Ve(n)?n.map(Dn):[Dn(n)],yp=(n,e,t)=>{if(e._n)return e;const i=Oh((...r)=>Zl(e(...r)),t);return i._c=!1,i},Xf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Kl(r))continue;const s=n[r];if(Ye(s))e[r]=yp(r,s,i);else if(s!=null){const o=Zl(s);e[r]=()=>o}}},qf=(n,e)=>{const t=Zl(e);n.slots.default=()=>t},Yf=(n,e,t)=>{for(const i in e)(t||!Kl(i))&&(n[i]=e[i])},Ep=(n,e,t)=>{const i=n.slots=kf();if(n.vnode.shapeFlag&32){const r=e._;r?(Yf(i,e,t),t&&of(i,"_",r,!0)):Xf(e,i)}else e&&qf(n,e)},Tp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Yf(r,e,t):(s=!e.$stable,Xf(e,r)),o=e}else e&&(qf(n,e),o={default:1});if(s)for(const a in r)!Kl(a)&&o[a]==null&&delete r[a]},nn=Pp;function Ap(n){return wp(n)}function wp(n,e){const t=Ro();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=En,insertStaticContent:_}=n,S=(v,P,g,J=null,Y=null,$=null,V=void 0,re=null,K=!!P.dynamicChildren)=>{if(v===P)return;v&&!Gr(v,P)&&(J=ce(v),He(v,Y,$,!0),v=null),P.patchFlag===-2&&(K=!1,P.dynamicChildren=null);const{type:Q,ref:y,shapeFlag:x}=P;switch(Q){case Bo:m(v,P,g,J);break;case Ci:d(v,P,g,J);break;case io:v==null&&A(P,g,J,V);break;case bt:Z(v,P,g,J,Y,$,V,re,K);break;default:x&1?I(v,P,g,J,Y,$,V,re,K):x&6?q(v,P,g,J,Y,$,V,re,K):(x&64||x&128)&&Q.process(v,P,g,J,Y,$,V,re,K,we)}y!=null&&Y?es(y,v&&v.ref,$,P||v,!P):y==null&&v&&v.ref!=null&&es(v.ref,null,$,v,!0)},m=(v,P,g,J)=>{if(v==null)i(P.el=a(P.children),g,J);else{const Y=P.el=v.el;P.children!==v.children&&c(Y,P.children)}},d=(v,P,g,J)=>{v==null?i(P.el=l(P.children||""),g,J):P.el=v.el},A=(v,P,g,J)=>{[v.el,v.anchor]=_(v.children,P,g,J,v.el,v.anchor)},M=({el:v,anchor:P},g,J)=>{let Y;for(;v&&v!==P;)Y=h(v),i(v,g,J),v=Y;i(P,g,J)},w=({el:v,anchor:P})=>{let g;for(;v&&v!==P;)g=h(v),r(v),v=g;r(P)},I=(v,P,g,J,Y,$,V,re,K)=>{if(P.type==="svg"?V="svg":P.type==="math"&&(V="mathml"),v==null)D(P,g,J,Y,$,V,re,K);else{const Q=v.el&&v.el._isVueCE?v.el:null;try{Q&&Q._beginPatch(),T(v,P,Y,$,V,re,K)}finally{Q&&Q._endPatch()}}},D=(v,P,g,J,Y,$,V,re)=>{let K,Q;const{props:y,shapeFlag:x,transition:L,dirs:R}=v;if(K=v.el=o(v.type,$,y&&y.is,y),x&8?u(K,v.children):x&16&&H(v.children,K,null,J,Y,ta(v,$),V,re),R&&Fi(v,null,J,"created"),F(K,v,v.scopeId,V,J),y){for(const O in y)O!=="value"&&!Zr(O)&&s(K,O,null,y[O],$,J);"value"in y&&s(K,"value",null,y.value,$),(Q=y.onVnodeBeforeMount)&&Rn(Q,J,v)}R&&Fi(v,null,J,"beforeMount");const C=Cp(Y,L);C&&L.beforeEnter(K),i(K,P,g),((Q=y&&y.onVnodeMounted)||C||R)&&nn(()=>{Q&&Rn(Q,J,v),C&&L.enter(K),R&&Fi(v,null,J,"mounted")},Y)},F=(v,P,g,J,Y)=>{if(g&&p(v,g),J)for(let $=0;$<J.length;$++)p(v,J[$]);if(Y){let $=Y.subTree;if(P===$||Kf($.type)&&($.ssContent===P||$.ssFallback===P)){const V=Y.vnode;F(v,V,V.scopeId,V.slotScopeIds,Y.parent)}}},H=(v,P,g,J,Y,$,V,re,K=0)=>{for(let Q=K;Q<v.length;Q++){const y=v[Q]=re?Mi(v[Q]):Dn(v[Q]);S(null,y,P,g,J,Y,$,V,re)}},T=(v,P,g,J,Y,$,V)=>{const re=P.el=v.el;let{patchFlag:K,dynamicChildren:Q,dirs:y}=P;K|=v.patchFlag&16;const x=v.props||ft,L=P.props||ft;let R;if(g&&Oi(g,!1),(R=L.onVnodeBeforeUpdate)&&Rn(R,g,P,v),y&&Fi(P,v,g,"beforeUpdate"),g&&Oi(g,!0),(x.innerHTML&&L.innerHTML==null||x.textContent&&L.textContent==null)&&u(re,""),Q?b(v.dynamicChildren,Q,re,g,J,ta(P,Y),$):V||j(v,P,re,null,g,J,ta(P,Y),$,!1),K>0){if(K&16)B(re,x,L,g,Y);else if(K&2&&x.class!==L.class&&s(re,"class",null,L.class,Y),K&4&&s(re,"style",x.style,L.style,Y),K&8){const C=P.dynamicProps;for(let O=0;O<C.length;O++){const le=C[O],k=x[le],xe=L[le];(xe!==k||le==="value")&&s(re,le,k,xe,Y,g)}}K&1&&v.children!==P.children&&u(re,P.children)}else!V&&Q==null&&B(re,x,L,g,Y);((R=L.onVnodeUpdated)||y)&&nn(()=>{R&&Rn(R,g,P,v),y&&Fi(P,v,g,"updated")},J)},b=(v,P,g,J,Y,$,V)=>{for(let re=0;re<P.length;re++){const K=v[re],Q=P[re],y=K.el&&(K.type===bt||!Gr(K,Q)||K.shapeFlag&198)?f(K.el):g;S(K,Q,y,null,J,Y,$,V,!0)}},B=(v,P,g,J,Y)=>{if(P!==g){if(P!==ft)for(const $ in P)!Zr($)&&!($ in g)&&s(v,$,P[$],null,Y,J);for(const $ in g){if(Zr($))continue;const V=g[$],re=P[$];V!==re&&$!=="value"&&s(v,$,re,V,Y,J)}"value"in g&&s(v,"value",P.value,g.value,Y)}},Z=(v,P,g,J,Y,$,V,re,K)=>{const Q=P.el=v?v.el:a(""),y=P.anchor=v?v.anchor:a("");let{patchFlag:x,dynamicChildren:L,slotScopeIds:R}=P;R&&(re=re?re.concat(R):R),v==null?(i(Q,g,J),i(y,g,J),H(P.children||[],g,y,Y,$,V,re,K)):x>0&&x&64&&L&&v.dynamicChildren?(b(v.dynamicChildren,L,g,Y,$,V,re),(P.key!=null||Y&&P===Y.subTree)&&jf(v,P,!0)):j(v,P,g,y,Y,$,V,re,K)},q=(v,P,g,J,Y,$,V,re,K)=>{P.slotScopeIds=re,v==null?P.shapeFlag&512?Y.ctx.activate(P,g,J,V,K):z(P,g,J,Y,$,V,K):se(v,P,K)},z=(v,P,g,J,Y,$,V)=>{const re=v.component=Bp(v,J,Y);if(Uf(v)&&(re.ctx.renderer=we),zp(re,!1,V),re.asyncDep){if(Y&&Y.registerDep(re,W,V),!v.el){const K=re.subTree=gn(Ci);d(null,K,P,g),v.placeholder=K.el}}else W(re,v,P,g,Y,$,V)},se=(v,P,g)=>{const J=P.component=v.component;if(_p(v,P,g))if(J.asyncDep&&!J.asyncResolved){ne(J,P,g);return}else J.next=P,J.update();else P.el=v.el,J.vnode=P},W=(v,P,g,J,Y,$,V)=>{const re=()=>{if(v.isMounted){let{next:x,bu:L,u:R,parent:C,vnode:O}=v;{const ae=$f(v);if(ae){x&&(x.el=O.el,ne(v,x,V)),ae.asyncDep.then(()=>{v.isUnmounted||re()});return}}let le=x,k;Oi(v,!1),x?(x.el=O.el,ne(v,x,V)):x=O,L&&no(L),(k=x.props&&x.props.onVnodeBeforeUpdate)&&Rn(k,C,x,O),Oi(v,!0);const xe=ea(v),_e=v.subTree;v.subTree=xe,S(_e,xe,f(_e.el),ce(_e),v,Y,$),x.el=xe.el,le===null&&vp(v,xe.el),R&&nn(R,Y),(k=x.props&&x.props.onVnodeUpdated)&&nn(()=>Rn(k,C,x,O),Y)}else{let x;const{el:L,props:R}=P,{bm:C,m:O,parent:le,root:k,type:xe}=v,_e=ts(P);if(Oi(v,!1),C&&no(C),!_e&&(x=R&&R.onVnodeBeforeMount)&&Rn(x,le,P),Oi(v,!0),L&&dt){const ae=()=>{v.subTree=ea(v),dt(L,v.subTree,v,Y,null)};_e&&xe.__asyncHydrate?xe.__asyncHydrate(L,v,ae):ae()}else{k.ce&&k.ce._def.shadowRoot!==!1&&k.ce._injectChildStyle(xe);const ae=v.subTree=ea(v);S(null,ae,g,J,v,Y,$),P.el=ae.el}if(O&&nn(O,Y),!_e&&(x=R&&R.onVnodeMounted)){const ae=P;nn(()=>Rn(x,le,ae),Y)}(P.shapeFlag&256||le&&ts(le.vnode)&&le.vnode.shapeFlag&256)&&v.a&&nn(v.a,Y),v.isMounted=!0,P=g=J=null}};v.scope.on();const K=v.effect=new hf(re);v.scope.off();const Q=v.update=K.run.bind(K),y=v.job=K.runIfDirty.bind(K);y.i=v,y.id=v.uid,K.scheduler=()=>ql(y),Oi(v,!0),Q()},ne=(v,P,g)=>{P.component=v;const J=v.vnode.props;v.vnode=P,v.next=null,bp(v,P.props,J,g),Tp(v,P.children,g),ri(),yc(v),si()},j=(v,P,g,J,Y,$,V,re,K=!1)=>{const Q=v&&v.children,y=v?v.shapeFlag:0,x=P.children,{patchFlag:L,shapeFlag:R}=P;if(L>0){if(L&128){me(Q,x,g,J,Y,$,V,re,K);return}else if(L&256){de(Q,x,g,J,Y,$,V,re,K);return}}R&8?(y&16&&oe(Q,Y,$),x!==Q&&u(g,x)):y&16?R&16?me(Q,x,g,J,Y,$,V,re,K):oe(Q,Y,$,!0):(y&8&&u(g,""),R&16&&H(x,g,J,Y,$,V,re,K))},de=(v,P,g,J,Y,$,V,re,K)=>{v=v||yr,P=P||yr;const Q=v.length,y=P.length,x=Math.min(Q,y);let L;for(L=0;L<x;L++){const R=P[L]=K?Mi(P[L]):Dn(P[L]);S(v[L],R,g,null,Y,$,V,re,K)}Q>y?oe(v,Y,$,!0,!1,x):H(P,g,J,Y,$,V,re,K,x)},me=(v,P,g,J,Y,$,V,re,K)=>{let Q=0;const y=P.length;let x=v.length-1,L=y-1;for(;Q<=x&&Q<=L;){const R=v[Q],C=P[Q]=K?Mi(P[Q]):Dn(P[Q]);if(Gr(R,C))S(R,C,g,null,Y,$,V,re,K);else break;Q++}for(;Q<=x&&Q<=L;){const R=v[x],C=P[L]=K?Mi(P[L]):Dn(P[L]);if(Gr(R,C))S(R,C,g,null,Y,$,V,re,K);else break;x--,L--}if(Q>x){if(Q<=L){const R=L+1,C=R<y?P[R].el:J;for(;Q<=L;)S(null,P[Q]=K?Mi(P[Q]):Dn(P[Q]),g,C,Y,$,V,re,K),Q++}}else if(Q>L)for(;Q<=x;)He(v[Q],Y,$,!0),Q++;else{const R=Q,C=Q,O=new Map;for(Q=C;Q<=L;Q++){const Ae=P[Q]=K?Mi(P[Q]):Dn(P[Q]);Ae.key!=null&&O.set(Ae.key,Q)}let le,k=0;const xe=L-C+1;let _e=!1,ae=0;const pe=new Array(xe);for(Q=0;Q<xe;Q++)pe[Q]=0;for(Q=R;Q<=x;Q++){const Ae=v[Q];if(k>=xe){He(Ae,Y,$,!0);continue}let ve;if(Ae.key!=null)ve=O.get(Ae.key);else for(le=C;le<=L;le++)if(pe[le-C]===0&&Gr(Ae,P[le])){ve=le;break}ve===void 0?He(Ae,Y,$,!0):(pe[ve-C]=Q+1,ve>=ae?ae=ve:_e=!0,S(Ae,P[ve],g,null,Y,$,V,re,K),k++)}const Le=_e?Rp(pe):yr;for(le=Le.length-1,Q=xe-1;Q>=0;Q--){const Ae=C+Q,ve=P[Ae],Oe=P[Ae+1],U=Ae+1<y?Oe.el||Oe.placeholder:J;pe[Q]===0?S(null,ve,g,U,Y,$,V,re,K):_e&&(le<0||Q!==Le[le]?Re(ve,g,U,2):le--)}}},Re=(v,P,g,J,Y=null)=>{const{el:$,type:V,transition:re,children:K,shapeFlag:Q}=v;if(Q&6){Re(v.component.subTree,P,g,J);return}if(Q&128){v.suspense.move(P,g,J);return}if(Q&64){V.move(v,P,g,we);return}if(V===bt){i($,P,g);for(let x=0;x<K.length;x++)Re(K[x],P,g,J);i(v.anchor,P,g);return}if(V===io){M(v,P,g);return}if(J!==2&&Q&1&&re)if(J===0)re.beforeEnter($),i($,P,g),nn(()=>re.enter($),Y);else{const{leave:x,delayLeave:L,afterLeave:R}=re,C=()=>{v.ctx.isUnmounted?r($):i($,P,g)},O=()=>{$._isLeaving&&$[Hh](!0),x($,()=>{C(),R&&R()})};L?L($,C,O):O()}else i($,P,g)},He=(v,P,g,J=!1,Y=!1)=>{const{type:$,props:V,ref:re,children:K,dynamicChildren:Q,shapeFlag:y,patchFlag:x,dirs:L,cacheIndex:R}=v;if(x===-2&&(Y=!1),re!=null&&(ri(),es(re,null,g,v,!0),si()),R!=null&&(P.renderCache[R]=void 0),y&256){P.ctx.deactivate(v);return}const C=y&1&&L,O=!ts(v);let le;if(O&&(le=V&&V.onVnodeBeforeUnmount)&&Rn(le,P,v),y&6)et(v.component,g,J);else{if(y&128){v.suspense.unmount(g,J);return}C&&Fi(v,null,P,"beforeUnmount"),y&64?v.type.remove(v,P,g,we,J):Q&&!Q.hasOnce&&($!==bt||x>0&&x&64)?oe(Q,P,g,!1,!0):($===bt&&x&384||!Y&&y&16)&&oe(K,P,g),J&&Je(v)}(O&&(le=V&&V.onVnodeUnmounted)||C)&&nn(()=>{le&&Rn(le,P,v),C&&Fi(v,null,P,"unmounted")},g)},Je=v=>{const{type:P,el:g,anchor:J,transition:Y}=v;if(P===bt){fe(g,J);return}if(P===io){w(v);return}const $=()=>{r(g),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(v.shapeFlag&1&&Y&&!Y.persisted){const{leave:V,delayLeave:re}=Y,K=()=>V(g,$);re?re(v.el,$,K):K()}else $()},fe=(v,P)=>{let g;for(;v!==P;)g=h(v),r(v),v=g;r(P)},et=(v,P,g)=>{const{bum:J,scope:Y,job:$,subTree:V,um:re,m:K,a:Q}=v;Dc(K),Dc(Q),J&&no(J),Y.stop(),$&&($.flags|=8,He(V,v,P,g)),re&&nn(re,P),nn(()=>{v.isUnmounted=!0},P)},oe=(v,P,g,J=!1,Y=!1,$=0)=>{for(let V=$;V<v.length;V++)He(v[V],P,g,J,Y)},ce=v=>{if(v.shapeFlag&6)return ce(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const P=h(v.anchor||v.el),g=P&&P[Bh];return g?h(g):P};let Ee=!1;const ze=(v,P,g)=>{v==null?P._vnode&&He(P._vnode,null,null,!0):S(P._vnode||null,v,P,null,null,null,g),P._vnode=v,Ee||(Ee=!0,yc(),Pf(),Ee=!1)},we={p:S,um:He,m:Re,r:Je,mt:z,mc:H,pc:j,pbc:b,n:ce,o:n};let We,dt;return e&&([We,dt]=e(we)),{render:ze,hydrate:We,createApp:op(ze,We)}}function ta({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Oi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Cp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function jf(n,e,t=!1){const i=n.children,r=e.children;if(Ve(i)&&Ve(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Mi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&jf(o,a)),a.type===Bo&&a.patchFlag!==-1&&(a.el=o.el),a.type===Ci&&!a.el&&(a.el=o.el)}}function Rp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function $f(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$f(e)}function Dc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Kf=n=>n.__isSuspense;function Pp(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):Fh(n)}const bt=Symbol.for("v-fgt"),Bo=Symbol.for("v-txt"),Ci=Symbol.for("v-cmt"),io=Symbol.for("v-stc"),rs=[];let rn=null;function Pe(n=!1){rs.push(rn=n?null:[])}function Dp(){rs.pop(),rn=rs[rs.length-1]||null}let hs=1;function Ic(n,e=!1){hs+=n,n<0&&rn&&e&&(rn.hasOnce=!0)}function Zf(n){return n.dynamicChildren=hs>0?rn||yr:null,Dp(),hs>0&&rn&&rn.push(n),n}function Ue(n,e,t,i,r,s){return Zf(N(n,e,t,i,r,s,!0))}function Mr(n,e,t,i,r){return Zf(gn(n,e,t,i,r,!0))}function Jf(n){return n?n.__v_isVNode===!0:!1}function Gr(n,e){return n.type===e.type&&n.key===e.key}const Qf=({key:n})=>n??null,ro=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ct(n)||_t(n)||Ye(n)?{i:mn,r:n,k:e,f:!!t}:n:null);function N(n,e=null,t=null,i=0,r=null,s=n===bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Qf(e),ref:e&&ro(e),scopeId:If,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:mn};return a?(Jl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Ct(t)?8:16),hs>0&&!o&&rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rn.push(l),l}const gn=Ip;function Ip(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Jh)&&(n=Ci),Jf(n)){const a=Ir(n,e,!0);return t&&Jl(a,t),hs>0&&!s&&rn&&(a.shapeFlag&6?rn[rn.indexOf(n)]=a:rn.push(a)),a.patchFlag=-2,a}if(Gp(n)&&(n=n.__vccOpts),e){e=Lp(e);let{class:a,style:l}=e;a&&!Ct(a)&&(e.class=zt(a)),mt(l)&&(Io(l)&&!Ve(l)&&(l=Lt({},l)),e.style=fn(l))}const o=Ct(n)?1:Kf(n)?128:zh(n)?64:mt(n)?4:Ye(n)?2:0;return N(n,e,t,i,r,o,s,!0)}function Lp(n){return n?Io(n)||Vf(n)?Lt({},n):n:null}function Ir(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Np(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Qf(c),ref:e&&e.ref?t&&s?Ve(s)?s.concat(ro(e)):[s,ro(e)]:ro(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==bt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ir(n.ssContent),ssFallback:n.ssFallback&&Ir(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Yl(u,l.clone(u)),u}function ei(n=" ",e=0){return gn(Bo,null,n,e)}function Up(n,e){const t=gn(io,null,n);return t.staticCount=e,t}function pt(n="",e=!1){return e?(Pe(),Mr(Ci,null,n)):gn(Ci,null,n)}function Dn(n){return n==null||typeof n=="boolean"?gn(Ci):Ve(n)?gn(bt,null,n.slice()):Jf(n)?Mi(n):gn(Bo,null,String(n))}function Mi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ir(n)}function Jl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Jl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Vf(e)?e._ctx=mn:r===3&&mn&&(mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:mn},t=32):(e=String(e),i&64?(t=16,e=[ei(e)]):t=8);n.children=e,n.shapeFlag|=t}function Np(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=zt([e.class,i.class]));else if(r==="style")e.style=fn([e.style,i.style]);else if(Eo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ve(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Rn(n,e,t,i=null){Bn(n,e,7,[t,i])}const Fp=Of();let Op=0;function Bp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Fp,s={uid:Op++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new uf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wf(i,r),emitsOptions:zf(i,r),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=pp.bind(null,s),n.ce&&n.ce(s),s}let jt=null;const ed=()=>jt||mn;let vo,Va;{const n=Ro(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};vo=e("__VUE_INSTANCE_SETTERS__",t=>jt=t),Va=e("__VUE_SSR_SETTERS__",t=>ps=t)}const Ts=n=>{const e=jt;return vo(n),n.scope.on(),()=>{n.scope.off(),vo(e)}},Lc=()=>{jt&&jt.scope.off(),vo(null)};function td(n){return n.vnode.shapeFlag&4}let ps=!1;function zp(n,e=!1,t=!1){e&&Va(e);const{props:i,children:r}=n.vnode,s=td(n);Sp(n,i,s,e),Ep(n,r,t||e);const o=s?Hp(n,e):void 0;return e&&Va(!1),o}function Hp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Qh);const{setup:i}=t;if(i){ri();const r=n.setupContext=i.length>1?Vp(n):null,s=Ts(n),o=Es(i,n,0,[n.props,r]),a=tf(o);if(si(),s(),(a||n.sp)&&!ts(n)&&Lf(n),a){if(o.then(Lc,Lc),e)return o.then(l=>{Uc(n,l,e)}).catch(l=>{Lo(l,n,0)});n.asyncDep=o}else Uc(n,o,e)}else nd(n,e)}function Uc(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mt(e)&&(n.setupState=wf(e)),nd(n,t)}let Nc;function nd(n,e,t){const i=n.type;if(!n.render){if(!e&&Nc&&!i.render){const r=i.template||jl(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Lt(Lt({isCustomElement:s,delimiters:a},o),l);i.render=Nc(r,c)}}n.render=i.render||En}{const r=Ts(n);ri();try{ep(n)}finally{si(),r()}}}const kp={get(n,e){return Ht(n,"get",""),n[e]}};function Vp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,kp),slots:n.slots,emit:n.emit,expose:e}}function zo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(wf(Wl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ns)return ns[t](n)},has(e,t){return t in e||t in ns}})):n.proxy}function Gp(n){return Ye(n)&&"__vccOpts"in n}const ti=(n,e)=>Dh(n,e,ps),Wp="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ga;const Fc=typeof window<"u"&&window.trustedTypes;if(Fc)try{Ga=Fc.createPolicy("vue",{createHTML:n=>n})}catch{}const id=Ga?n=>Ga.createHTML(n):n=>n,Xp="http://www.w3.org/2000/svg",qp="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,Oc=Yn&&Yn.createElement("template"),Yp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Yn.createElementNS(Xp,n):e==="mathml"?Yn.createElementNS(qp,n):t?Yn.createElement(n,{is:t}):Yn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Yn.createTextNode(n),createComment:n=>Yn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Oc.innerHTML=id(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Oc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},jp=Symbol("_vtc");function $p(n,e,t){const i=n[jp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Bc=Symbol("_vod"),Kp=Symbol("_vsh"),Zp=Symbol(""),Jp=/(?:^|;)\s*display\s*:/;function Qp(n,e,t){const i=n.style,r=Ct(t);let s=!1;if(t&&!r){if(e)if(Ct(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&so(i,a,"")}else for(const o in e)t[o]==null&&so(i,o,"");for(const o in t)o==="display"&&(s=!0),so(i,o,t[o])}else if(r){if(e!==t){const o=i[Zp];o&&(t+=";"+o),i.cssText=t,s=Jp.test(t)}}else e&&n.removeAttribute("style");Bc in n&&(n[Bc]=s?i.display:"",n[Kp]&&(i.display="none"))}const zc=/\s*!important$/;function so(n,e,t){if(Ve(t))t.forEach(i=>so(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=em(n,e);zc.test(t)?n.setProperty(Di(i),t.replace(zc,""),"important"):n[i]=t}}const Hc=["Webkit","Moz","ms"],na={};function em(n,e){const t=na[e];if(t)return t;let i=wi(e);if(i!=="filter"&&i in n)return na[e]=i;i=sf(i);for(let r=0;r<Hc.length;r++){const s=Hc[r]+i;if(s in n)return na[e]=s}return e}const kc="http://www.w3.org/1999/xlink";function Vc(n,e,t,i,r,s=eh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(kc,e.slice(6,e.length)):n.setAttributeNS(kc,e,t):t==null||s&&!af(t)?n.removeAttribute(e):n.setAttribute(e,s?"":On(t)?String(t):t)}function Gc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?id(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=af(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function qi(n,e,t,i){n.addEventListener(e,t,i)}function tm(n,e,t,i){n.removeEventListener(e,t,i)}const Wc=Symbol("_vei");function nm(n,e,t,i,r=null){const s=n[Wc]||(n[Wc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=im(e);if(i){const c=s[e]=om(i,r);qi(n,a,c,l)}else o&&(tm(n,a,o,l),s[e]=void 0)}}const Xc=/(?:Once|Passive|Capture)$/;function im(n){let e;if(Xc.test(n)){e={};let i;for(;i=n.match(Xc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Di(n.slice(2)),e]}let ia=0;const rm=Promise.resolve(),sm=()=>ia||(rm.then(()=>ia=0),ia=Date.now());function om(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Bn(am(i,t.value),e,5,[i])};return t.value=n,t.attached=sm(),t}function am(n,e){if(Ve(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const qc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,lm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?$p(n,i,o):e==="style"?Qp(n,t,i):Eo(e)?Fl(e)||nm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cm(n,e,i,o))?(Gc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ct(i))?Gc(n,wi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Vc(n,e,i,o))};function cm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&qc(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return qc(e)&&Ct(t)?!1:e in n}const So=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ve(e)?t=>no(e,t):e};function um(n){n.target.composing=!0}function Yc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ar=Symbol("_assign");function jc(n,e,t){return e&&(n=n.trim()),t&&(n=Co(n)),n}const Ut={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Ar]=So(r);const s=i||r.props&&r.props.type==="number";qi(n,e?"change":"input",o=>{o.target.composing||n[Ar](jc(n.value,t,s))}),(t||s)&&qi(n,"change",()=>{n.value=jc(n.value,t,s)}),e||(qi(n,"compositionstart",um),qi(n,"compositionend",Yc),qi(n,"change",Yc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Ar]=So(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Co(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},$c={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=To(e);qi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Co(bo(o)):bo(o));n[Ar](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,Xl(()=>{n._assigning=!1})}),n[Ar]=So(i)},mounted(n,{value:e}){Kc(n,e)},beforeUpdate(n,e,t){n[Ar]=So(t)},updated(n,{value:e}){n._assigning||Kc(n,e)}};function Kc(n,e){const t=n.multiple,i=Ve(e);if(!(t&&!i&&!To(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=bo(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=nh(e,a)>-1}else o.selected=e.has(a);else if(Po(bo(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function bo(n){return"_value"in n?n._value:n.value}const fm=["ctrl","shift","alt","meta"],dm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>fm.some(t=>n[`${t}Key`]&&!e.includes(t))},Nt=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=dm[e[o]];if(a&&a(r,e))return}return n(r,...s)})},hm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},pm=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=Di(r.key);if(e.some(o=>o===s||hm[o]===s))return n(r)})},mm=Lt({patchProp:lm},Yp);let Zc;function xm(){return Zc||(Zc=Ap(mm))}const gm=(...n)=>{const e=xm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=vm(i);if(!r)return;const s=e._component;!Ye(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,_m(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function _m(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vm(n){return Ct(n)?document.querySelector(n):n}var Sm=!1;/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let rd;const Ho=n=>rd=n,sd=Symbol();function Wa(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var ss;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(ss||(ss={}));function bm(){const n=ff(!0),e=n.run(()=>Ne({}));let t=[],i=[];const r=Wl({install(s){Ho(r),r._a=s,s.provide(sd,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return!this._a&&!Sm?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const od=()=>{};function Jc(n,e,t,i=od){n.push(e);const r=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),i())};return!t&&df()&&ih(r),r}function ir(n,...e){n.slice().forEach(t=>{t(...e)})}const Mm=n=>n(),Qc=Symbol(),ra=Symbol();function Xa(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];Wa(r)&&Wa(i)&&n.hasOwnProperty(t)&&!_t(i)&&!Qn(i)?n[t]=Xa(r,i):n[t]=i}return n}const ym=Symbol();function Em(n){return!Wa(n)||!n.hasOwnProperty(ym)}const{assign:_i}=Object;function Tm(n){return!!(_t(n)&&n.effect)}function Am(n,e,t,i){const{state:r,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=r?r():{});const u=wh(t.state.value[n]);return _i(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Wl(ti(()=>{Ho(t);const p=t._s.get(n);return o[h].call(p,p)})),f),{}))}return l=ad(n,c,e,t,i,!0),l}function ad(n,e,t={},i,r,s){let o;const a=_i({actions:{}},t),l={deep:!0};let c,u,f=[],h=[],p;const _=i.state.value[n];!s&&!_&&(i.state.value[n]={}),Ne({});let S;function m(H){let T;c=u=!1,typeof H=="function"?(H(i.state.value[n]),T={type:ss.patchFunction,storeId:n,events:p}):(Xa(i.state.value[n],H),T={type:ss.patchObject,payload:H,storeId:n,events:p});const b=S=Symbol();Xl().then(()=>{S===b&&(c=!0)}),u=!0,ir(f,T,i.state.value[n])}const d=s?function(){const{state:T}=t,b=T?T():{};this.$patch(B=>{_i(B,b)})}:od;function A(){o.stop(),f=[],h=[],i._s.delete(n)}const M=(H,T="")=>{if(Qc in H)return H[ra]=T,H;const b=function(){Ho(i);const B=Array.from(arguments),Z=[],q=[];function z(ne){Z.push(ne)}function se(ne){q.push(ne)}ir(h,{args:B,name:b[ra],store:I,after:z,onError:se});let W;try{W=H.apply(this&&this.$id===n?this:I,B)}catch(ne){throw ir(q,ne),ne}return W instanceof Promise?W.then(ne=>(ir(Z,ne),ne)).catch(ne=>(ir(q,ne),Promise.reject(ne))):(ir(Z,W),W)};return b[Qc]=!0,b[ra]=T,b},w={_p:i,$id:n,$onAction:Jc.bind(null,h),$patch:m,$reset:d,$subscribe(H,T={}){const b=Jc(f,H,T.detached,()=>B()),B=o.run(()=>Ln(()=>i.state.value[n],Z=>{(T.flush==="sync"?u:c)&&H({storeId:n,type:ss.direct,events:p},Z)},_i({},l,T)));return b},$dispose:A},I=Pr(w);i._s.set(n,I);const F=(i._a&&i._a.runWithContext||Mm)(()=>i._e.run(()=>(o=ff()).run(()=>e({action:M}))));for(const H in F){const T=F[H];if(_t(T)&&!Tm(T)||Qn(T))s||(_&&Em(T)&&(_t(T)?T.value=_[H]:Xa(T,_[H])),i.state.value[n][H]=T);else if(typeof T=="function"){const b=M(T,H);F[H]=b,a.actions[H]=T}}return _i(I,F),_i(nt(I),F),Object.defineProperty(I,"$state",{get:()=>i.state.value[n],set:H=>{m(T=>{_i(T,H)})}}),i._p.forEach(H=>{_i(I,o.run(()=>H({store:I,app:i._a,pinia:i,options:a})))}),_&&s&&t.hydrate&&t.hydrate(I.$state,_),c=!0,u=!0,I}/*! #__NO_SIDE_EFFECTS__ */function wm(n,e,t){let i,r;const s=typeof e=="function";typeof n=="string"?(i=n,r=s?t:e):(r=n,i=n.id);function o(a,l){const c=lp();return a=a||(c?is(sd,null):null),a&&Ho(a),a=rd,a._s.has(i)||(s?ad(i,e,r,a):Am(i,r,a)),a._s.get(i)}return o.$id=i,o}function ms(){return"id_"+Math.random().toString(36).substr(2,9)+"_"+Date.now()}function oo(n){return new Promise((e,t)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=t,i.readAsDataURL(n)})}const wr=Ne([]);function un(n,e="info",t=3e3){console.log("📢 showToast called:",{message:n,type:e,timeout:t,currentToastsCount:wr.value.length});const i=ms(),r={id:i,message:n,type:e,timeout:t};return wr.value.push(r),console.log("📢 Toast added to array. New count:",wr.value.length,"Toast:",r),t>0&&setTimeout(()=>{console.log("⏰ Removing toast after timeout:",i),Cm(i)},t),i}function Cm(n){const e=wr.value.findIndex(t=>t.id===n);e>-1&&wr.value.splice(e,1)}const Us="scene360_project";class dn{static saveProject(e){try{const t=JSON.stringify(e);localStorage.setItem(Us,t),console.log(`✅ Project saved: ${e.scenes.length} scenes`)}catch(t){if(t.name==="QuotaExceededError"){console.error("❌ localStorage full - trying to save without images");const i={...e,scenes:e.scenes.map(s=>({...s,imageUrl:""}))},r=JSON.stringify(i);localStorage.setItem(Us,r),console.log("⚠️ Project saved without images due to storage limit")}else console.error("❌ Error saving project:",t)}}static loadProject(){try{const e=localStorage.getItem(Us);if(!e)return console.log("⚠️ No project found in localStorage"),null;const t=JSON.parse(e);console.log(`✅ Loaded project: ${t.scenes.length} scenes`);const i=t.scenes.filter(r=>!r.imageUrl);return i.length>0&&console.log(`⚠️ ${i.length} scenes need images to be re-uploaded`),t}catch(e){return console.error("❌ Error loading project:",e),null}}static async loadProjectAsync(){return this.loadProject()}static deleteProject(){try{localStorage.removeItem(Us),console.log("✅ Project deleted")}catch(e){console.error("Error deleting project:",e)}}static getProjectsList(){const e=this.loadProject();return e?[{id:e.id,name:e.name,lastModified:e.updatedAt||Date.now()}]:[]}static importProjectFromJSON(e){try{const t=JSON.parse(e);return t.project||t}catch(t){return console.error("Error importing project:",t),null}}}const er=wm("project",()=>{const n=Ne(null),e=Ne(""),t=()=>{if(!n.value){console.error("❌ Cannot autoSave: project is null");return}const m=JSON.parse(JSON.stringify(n.value));console.log(`💾 AUTO-SAVING: ${m.scenes.length} scenes`),dn.saveProject(m)},i=ti(()=>n.value?n.value.scenes.find(m=>m.id===e.value):null),r=ti(()=>{var m;return((m=n.value)==null?void 0:m.scenes)||[]});return{project:n,activeSceneId:e,activeScene:i,allScenes:r,createNewProject:(m,d="")=>{const A={id:ms(),name:m,description:d,scenes:[],activeSceneId:"",createdAt:Date.now(),updatedAt:Date.now()};return n.value=A,t(),A},loadProject:m=>{var M;const d=(m.scenes||[]).map(w=>{const I=(w.hotspots||[]).map(D=>({...D,radius:typeof D.radius=="number"&&Number.isFinite(D.radius)?D.radius:10,color:D.color||"#ff0000",visible:D.visible!==!1,hideCircle:D.hideCircle??!1,showIcon:D.showIcon??!0,iconSize:typeof D.iconSize=="number"&&Number.isFinite(D.iconSize)?D.iconSize:12,content:D.content||{}}));return{...w,hotspots:I,initialYaw:typeof w.initialYaw=="number"&&Number.isFinite(w.initialYaw)?w.initialYaw:0,initialPitch:typeof w.initialPitch=="number"&&Number.isFinite(w.initialPitch)?w.initialPitch:0}}),A={...m,scenes:d};n.value=A,e.value=A.activeSceneId||((M=d[0])==null?void 0:M.id)||"",A.activeSceneId=e.value},addScene:(m,d,A,M)=>{if(!n.value)return console.error("❌ Cannot add scene: project is null"),null;const w={id:ms(),name:m,description:d,imageUrl:A,imageFileName:M,hotspots:[],initialYaw:0,initialPitch:0,createdAt:Date.now(),updatedAt:Date.now()};return n.value.scenes.push(w),n.value.updatedAt=Date.now(),console.log(`✅ Scene added: ${m}. Total in memory: ${n.value.scenes.length} scenes`),e.value||(e.value=w.id,n.value.activeSceneId=w.id),console.log("🔄 Triggering autoSave..."),t(),console.log(`📝 After autoSave, project has ${n.value.scenes.length} scenes`),w},deleteScene:m=>{var A;if(!n.value)return;const d=n.value.scenes.findIndex(M=>M.id===m);d!==-1&&(n.value.scenes.splice(d,1),n.value.updatedAt=Date.now(),e.value===m&&(e.value=((A=n.value.scenes[0])==null?void 0:A.id)||"",n.value.activeSceneId=e.value),t())},renameScene:(m,d)=>{if(!n.value)return;const A=n.value.scenes.find(M=>M.id===m);A&&(A.name=d,A.updatedAt=Date.now(),n.value.updatedAt=Date.now(),t())},setActiveScene:m=>{n.value&&(e.value=m,n.value.activeSceneId=m,n.value.updatedAt=Date.now())},updateScene:(m,d)=>{if(!n.value)return;const A=n.value.scenes.find(M=>M.id===m);A&&(Object.assign(A,d),A.updatedAt=Date.now(),n.value.updatedAt=Date.now(),t())},addHotspot:m=>{i.value&&(i.value.hotspots.push(m),i.value.updatedAt=Date.now(),n.value&&(n.value.updatedAt=Date.now(),t()))},updateHotspot:(m,d,A)=>{if(!n.value)return;const M=n.value.scenes.find(I=>I.id===m);if(!M)return;const w=M.hotspots.find(I=>I.id===d);w&&(Object.assign(w,A),M.updatedAt=Date.now(),n.value.updatedAt=Date.now(),t())},deleteHotspot:(m,d)=>{if(!n.value)return;const A=n.value.scenes.find(w=>w.id===m);if(!A)return;const M=A.hotspots.findIndex(w=>w.id===d);M!==-1&&(A.hotspots.splice(M,1),A.updatedAt=Date.now(),n.value.updatedAt=Date.now(),t())},reorderScenes:(m,d)=>{if(!n.value)return;const A=n.value.scenes,[M]=A.splice(m,1);A.splice(d,0,M),n.value.updatedAt=Date.now(),t(),console.log(`✅ Scène "${M.name}" déplacée de ${m} à ${d}`)}}}),Rm=""+new URL("Logo-CEN-PC-2025-v3-36323b44.jpg",import.meta.url).href,Pm={class:"home-screen"},Dm={class:"welcome-card"},Im={class:"actions"},Lm={class:"modal"},Um={class:"modal-actions"},Nm=Ii({__name:"HomeScreen",emits:["create-project","load-project"],setup(n,{emit:e}){const t=e,i=Ne(!1),r=Ne(""),s=Ne(""),o=Ne(),a=Ne(null),l=()=>{r.value.trim()&&(t("create-project",r.value,s.value),i.value=!1,r.value="",s.value="")},c=()=>{var f;(f=o.value)==null||f.click()},u=f=>{var _;const h=(_=f.target.files)==null?void 0:_[0];if(!h)return;const p=new FileReader;p.onload=S=>{var A;const m=(A=S.target)==null?void 0:A.result,d=dn.importProjectFromJSON(m);d&&(t("load-project",d),dn.saveProject(d),a.value=d)},p.readAsText(h)};return No(()=>{const f=dn.loadProject();f&&(a.value=f)}),(f,h)=>(Pe(),Ue("div",Pm,[N("div",Dm,[h[5]||(h[5]=N("h1",null,"360 Scene Editor",-1)),h[6]||(h[6]=N("p",null,"Créez des scènes interactives 360° avec des points d'intérêt cliquables interactifs.",-1)),N("div",Im,[N("button",{onClick:h[0]||(h[0]=p=>i.value=!0),class:"btn btn-primary"}," ➕ Nouveau projet "),N("button",{onClick:c,class:"btn btn-secondary"}," 📂 Importer un projet (.json) ")]),h[7]||(h[7]=N("div",{class:"credits"},[N("a",{href:"https://pedagogie.ac-montpellier.fr/ressources-et-formation-du-cercle-detude-numerique-physique-chimie",target:"_blank",rel:"noopener noreferrer",class:"logo-link",title:"Vers la rubrique du CEN-PC sur le portail pédagogique de l'académie de Montpellier (PPA)"},[N("img",{src:Rm,alt:"CEN-PC Logo",class:"logo"})]),N("p",null,"par C. HEYREND-CASANOVAS pour le CEN-PC de Montpellier"),N("p",null,"v-12-2025")],-1)),N("input",{ref_key:"fileInput",ref:o,type:"file",accept:".json",style:{display:"none"},onChange:u},null,544)]),i.value?(Pe(),Ue("div",{key:0,class:"modal-overlay",onClick:h[4]||(h[4]=Nt(p=>i.value=!1,["self"]))},[N("div",Lm,[h[8]||(h[8]=N("h2",null,"Créer un Nouveau Projet",-1)),Rt(N("input",{"onUpdate:modelValue":h[1]||(h[1]=p=>r.value=p),type:"text",placeholder:"Nom du projet",class:"input",onKeyup:pm(l,["enter"])},null,544),[[Ut,r.value]]),Rt(N("textarea",{"onUpdate:modelValue":h[2]||(h[2]=p=>s.value=p),placeholder:"Description (optionnel)",class:"input",rows:"3"},null,512),[[Ut,s.value]]),N("div",Um,[N("button",{onClick:h[3]||(h[3]=p=>i.value=!1),class:"btn btn-secondary"},"Annuler"),N("button",{onClick:l,class:"btn btn-primary"},"Créer")])])])):pt("",!0)]))}});const Li=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Fm=Li(Nm,[["__scopeId","data-v-6b41dbbe"]]),Om={class:"project-header"},Bm={class:"header-content"},zm=Ii({__name:"ProjectHeader",setup(n){const e=er(),t=()=>{e.project=null},i=()=>{if(!e.project)return;const r=JSON.stringify(e.project,null,2),s=new Blob([r],{type:"application/json"}),o=URL.createObjectURL(s),a=document.createElement("a");a.href=o,a.download=`${e.project.name}.json`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(o)};return(r,s)=>{var o,a;return Pe(),Ue("div",Om,[N("div",Bm,[N("h2",null,gt((o=Ke(e).project)==null?void 0:o.name),1),N("p",null,gt((a=Ke(e).project)==null?void 0:a.description),1)]),N("div",{class:"header-actions"},[N("button",{onClick:t,class:"btn-small",title:"Retour à l'accueil"},"🏠 Accueil"),N("button",{onClick:i,class:"btn-small btn-save",title:"Sauvegarder le projet"},"💾 Sauvegarder le projet")])])}}});const Hm=Li(zm,[["__scopeId","data-v-9b3c4c79"]]),km={class:"list-header"},Vm={class:"scenes-container"},Gm=["onDragstart","onDragover","onDrop"],Wm=["onClick","onContextmenu"],Xm=["src","alt"],qm={key:1,class:"no-image"},Ym=["onClick"],jm={class:"scene-name"},$m={class:"scene-hotspots"},Km=["onClick"],Zm=["onClick"],Jm={class:"modal delete-modal"},Qm={class:"modal-actions"},e0={class:"modal"},t0={key:0,class:"preview-text"},n0={class:"modal-actions"},i0=["disabled"],r0=Ii({__name:"SceneList",setup(n){const e=er(),t=Ne(!1),i=Ne(""),r=Ne(""),s=Ne(""),o=Ne(""),a=Ne(),l=Ne(),c=Ne(null),u=Ne(""),f=Ne(!1),h=Ne(null),p=Ne(null),_=Ne(null),S=q=>{e.setActiveScene(q),c.value=null},m=async()=>{!i.value||!s.value||(console.log("Adding scene:",i.value),e.addScene(i.value,r.value,s.value,o.value),t.value=!1,i.value="",r.value="",s.value="",o.value="")},d=async q=>{var se;const z=(se=q.target.files)==null?void 0:se[0];z&&(o.value=z.name,s.value=await oo(z))},A=async q=>{var se;const z=(se=q.dataTransfer)==null?void 0:se.files;z&&(o.value=z[0].name,s.value=await oo(z[0]))},M=q=>{var z;u.value=q,(z=l.value)==null||z.click()},w=async q=>{var ne;const z=(ne=q.target.files)==null?void 0:ne[0];if(!z||!u.value)return;const se=await oo(z),W=e.allScenes.find(j=>j.id===u.value);W&&(W.imageUrl=se,W.imageFileName=z.name,W.updatedAt=Date.now(),e.project.updatedAt=Date.now(),e.addHotspot({id:"",x:0,y:0,type:"text",content:""}),console.log(`✅ Image re-uploaded for scene: ${W.name}`)),u.value="",l.value&&(l.value.value="")},I=(q,z)=>{c.value={left:q.clientX+"px",top:q.clientY+"px",sceneId:z}},D=async q=>{const z=e.allScenes.find(W=>W.id===q);if(!z)return;const se=prompt("Nouveau nom:",z.name);se&&(console.log("Renaming scene to:",se),e.renameScene(q,se)),c.value=null},F=q=>{const z=e.allScenes.find(se=>se.id===q);z&&(h.value=z,f.value=!0,c.value=null)},H=()=>{h.value&&(console.log("Deleting scene:",h.value.id),e.deleteScene(h.value.id),f.value=!1,h.value=null)},T=(q,z)=>{p.value=z,q.dataTransfer&&(q.dataTransfer.effectAllowed="move")},b=(q,z)=>{q.preventDefault(),_.value=z},B=q=>{p.value!==null&&p.value!==q&&e.reorderScenes(p.value,q),p.value=null,_.value=null},Z=()=>{p.value=null,_.value=null};return document.addEventListener("click",()=>{c.value=null}),(q,z)=>{var se;return Pe(),Ue("div",{class:"scene-list",onWheel:z[11]||(z[11]=Nt(()=>{},["stop"]))},[N("div",km,[z[12]||(z[12]=N("h3",null,"Scènes",-1)),N("button",{onClick:z[0]||(z[0]=W=>t.value=!0),class:"btn-add",title:"Ajouter une scène"},"➕")]),N("div",Vm,[(Pe(!0),Ue(bt,null,bi(Ke(e).allScenes,(W,ne)=>(Pe(),Ue("div",{key:W.id,class:zt(["scene-item",{active:W.id===Ke(e).activeSceneId,dragging:p.value===ne}]),draggable:"true",onDragstart:j=>T(j,ne),onDragover:Nt(j=>b(j,ne),["prevent"]),onDrop:Nt(j=>B(ne),["prevent"]),onDragend:Z},[z[14]||(z[14]=N("div",{class:"drag-handle",title:"Glisser pour réorganiser"},"⋮⋮",-1)),N("div",{class:"scene-thumbnail",onClick:j=>S(W.id),onContextmenu:Nt(j=>I(j,W.id),["prevent"])},[W.imageUrl?(Pe(),Ue("img",{key:0,src:W.imageUrl,alt:W.name},null,8,Xm)):(Pe(),Ue("div",qm,[...z[13]||(z[13]=[N("span",null,"📸",-1),N("p",null,"Image manquante",-1)])]))],40,Wm),N("div",{class:"scene-info",onClick:j=>S(W.id)},[N("div",jm,gt(W.name),1),N("div",$m,gt(W.hotspots.length)+" points",1)],8,Ym),W.imageUrl?pt("",!0):(Pe(),Ue("button",{key:0,onClick:Nt(j=>M(W.id),["stop"]),class:"btn-reupload",title:"Re-uploader l'image"}," 📤 ",8,Km)),N("button",{onClick:Nt(j=>F(W.id),["stop"]),class:"btn-delete",title:"Supprimer la scène"}," ✕ ",8,Zm)],42,Gm))),128)),N("input",{ref_key:"reuploadInput",ref:l,type:"file",accept:"image/*",style:{display:"none"},onChange:w},null,544)]),c.value?(Pe(),Ue("div",{key:0,class:"context-menu",style:fn(c.value)},[N("button",{onClick:z[1]||(z[1]=W=>D(c.value.sceneId)),class:"menu-item"},"✏️ Renommer"),N("button",{onClick:z[2]||(z[2]=W=>F(c.value.sceneId)),class:"menu-item danger"},"🗑️ Supprimer")],4)):pt("",!0),f.value?(Pe(),Ue("div",{key:1,class:"modal-overlay",onClick:z[4]||(z[4]=Nt(W=>f.value=!1,["self"]))},[N("div",Jm,[z[17]||(z[17]=N("h3",null,"⚠️ Confirmer la suppression",-1)),N("p",null,[z[15]||(z[15]=ei("Êtes-vous sûr de vouloir supprimer la scène ",-1)),N("strong",null,gt((se=h.value)==null?void 0:se.name),1),z[16]||(z[16]=ei(" ?",-1))]),z[18]||(z[18]=N("p",{class:"warning-text"},"Cette action est irréversible.",-1)),N("div",Qm,[N("button",{onClick:z[3]||(z[3]=W=>f.value=!1),class:"btn-secondary"},"Annuler"),N("button",{onClick:H,class:"btn-danger"},"Supprimer")])])])):pt("",!0),t.value?(Pe(),Ue("div",{key:2,class:"modal-overlay",onClick:z[10]||(z[10]=Nt(W=>t.value=!1,["self"]))},[N("div",e0,[z[19]||(z[19]=N("h3",null,"Ajouter une Scène 360°",-1)),Rt(N("input",{"onUpdate:modelValue":z[5]||(z[5]=W=>i.value=W),type:"text",placeholder:"Nom de la scène",class:"input"},null,512),[[Ut,i.value]]),Rt(N("textarea",{"onUpdate:modelValue":z[6]||(z[6]=W=>r.value=W),placeholder:"Description",class:"input",rows:"2"},null,512),[[Ut,r.value]]),N("div",{class:"upload-area",onDrop:A,onDragover:z[8]||(z[8]=Nt(()=>{},["prevent"]))},[N("input",{ref_key:"fileInput",ref:a,type:"file",accept:"image/*",onChange:d,style:{display:"none"}},null,544),N("button",{onClick:z[7]||(z[7]=W=>{var ne;return(ne=a.value)==null?void 0:ne.click()}),class:"upload-btn"}," 📸 Sélectionner Image 360° "),s.value?(Pe(),Ue("p",t0,"✓ Image chargée")):pt("",!0)],32),N("div",n0,[N("button",{onClick:z[9]||(z[9]=W=>t.value=!1),class:"btn-secondary"},"Annuler"),N("button",{onClick:m,disabled:!i.value||!s.value,class:"btn-primary"},"Ajouter",8,i0)])])])):pt("",!0)],32)}}});const s0=Li(r0,[["__scopeId","data-v-534f7021"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ql="181",o0=0,eu=1,a0=2,ld=1,l0=2,qn=3,Ri=0,kt=1,Kn=2,ni=0,Cr=1,tu=2,nu=3,iu=4,c0=5,Yi=100,u0=101,f0=102,d0=103,h0=104,p0=200,m0=201,x0=202,g0=203,qa=204,Ya=205,_0=206,v0=207,S0=208,b0=209,M0=210,y0=211,E0=212,T0=213,A0=214,ja=0,$a=1,Ka=2,Lr=3,Za=4,Ja=5,Qa=6,el=7,cd=0,w0=1,C0=2,Ai=0,R0=1,P0=2,D0=3,I0=4,L0=5,U0=6,N0=7,ud=300,Ur=301,Nr=302,tl=303,nl=304,ko=306,il=1e3,Zn=1001,rl=1002,on=1003,F0=1004,Ns=1005,xn=1006,sa=1007,$i=1008,ai=1009,fd=1010,dd=1011,xs=1012,ec=1013,Ji=1014,Jn=1015,Or=1016,tc=1017,nc=1018,gs=1020,hd=35902,pd=35899,md=1021,xd=1022,yn=1023,_s=1026,vs=1027,gd=1028,ic=1029,rc=1030,sc=1031,oc=1033,ao=33776,lo=33777,co=33778,uo=33779,sl=35840,ol=35841,al=35842,ll=35843,cl=36196,ul=37492,fl=37496,dl=37808,hl=37809,pl=37810,ml=37811,xl=37812,gl=37813,_l=37814,vl=37815,Sl=37816,bl=37817,Ml=37818,yl=37819,El=37820,Tl=37821,Al=36492,wl=36494,Cl=36495,Rl=36283,Pl=36284,Dl=36285,Il=36286,O0=3200,B0=3201,z0=0,H0=1,yi="",hn="srgb",Pi="srgb-linear",Mo="linear",ct="srgb",rr=7680,ru=519,k0=512,V0=513,G0=514,_d=515,W0=516,X0=517,q0=518,Y0=519,su=35044,ou="300 es",Un=2e3,yo=2001;function vd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ss(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function j0(){const n=Ss("canvas");return n.style.display="block",n}const au={};function lu(...n){const e="THREE."+n.shift();console.log(e,...n)}function qe(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Et(...n){const e="THREE."+n.shift();console.error(e,...n)}function bs(...n){const e=n.join(" ");e in au||(au[e]=!0,qe(...n))}function $0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cu=1234567;const os=Math.PI/180,Ms=180/Math.PI;function zr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function ac(n,e){return(n%e+e)%e}function K0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Z0(n,e,t){return n!==e?(t-n)/(e-n):0}function as(n,e,t){return(1-t)*n+t*e}function J0(n,e,t,i){return as(n,e,1-Math.exp(-t*i))}function Q0(n,e=1){return e-Math.abs(ac(n,e*2)-e)}function ex(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function tx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function nx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ix(n,e){return n+Math.random()*(e-n)}function rx(n){return n*(.5-Math.random())}function sx(n){n!==void 0&&(cu=n);let e=cu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ox(n){return n*os}function ax(n){return n*Ms}function lx(n){return(n&n-1)===0&&n!==0}function cx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ux(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fx(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Sr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zt={DEG2RAD:os,RAD2DEG:Ms,generateUUID:zr,clamp:Ze,euclideanModulo:ac,mapLinear:K0,inverseLerp:Z0,lerp:as,damp:J0,pingpong:Q0,smoothstep:ex,smootherstep:tx,randInt:nx,randFloat:ix,randFloatSpread:rx,seededRandom:sx,degToRad:ox,radToDeg:ax,isPowerOfTwo:lx,ceilPowerOfTwo:cx,floorPowerOfTwo:ux,setQuaternionFromProperEuler:fx,normalize:Xt,denormalize:Sr};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class As{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],p=s[o+1],_=s[o+2],S=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=S;return}if(f!==S||l!==h||c!==p||u!==_){let m=l*h+c*p+u*_+f*S;m<0&&(h=-h,p=-p,_=-_,S=-S,m=-m);let d=1-a;if(m<.9995){const A=Math.acos(m),M=Math.sin(A);d=Math.sin(d*A)/M,a=Math.sin(a*A)/M,l=l*d+h*a,c=c*d+p*a,u=u*d+_*a,f=f*d+S*a}else{l=l*d+h*a,c=c*d+p*a,u=u*d+_*a,f=f*d+S*a;const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,i=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new te,uu=new As;class je{constructor(e,t,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],S=r[0],m=r[3],d=r[6],A=r[1],M=r[4],w=r[7],I=r[2],D=r[5],F=r[8];return s[0]=o*S+a*A+l*I,s[3]=o*m+a*M+l*D,s[6]=o*d+a*w+l*F,s[1]=c*S+u*A+f*I,s[4]=c*m+u*M+f*D,s[7]=c*d+u*w+f*F,s[2]=h*S+p*A+_*I,s[5]=h*m+p*M+_*D,s[8]=h*d+p*w+_*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-a*t)*S,e[6]=p*S,e[7]=(i*l-c*t)*S,e[8]=(o*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new je,fu=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),du=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dx(){const n={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=ii(r.r),r.g=ii(r.g),r.b=ii(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yi?Mo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Pi]:{primaries:e,whitePoint:i,transfer:Mo,toXYZ:fu,fromXYZ:du,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:fu,fromXYZ:du,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),n}const it=dx();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let sr;class hx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sr===void 0&&(sr=Ss("canvas")),sr.width=e.width,sr.height=e.height;const r=sr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ss("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ii(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ii(t[i]/255)*255):t[i]=ii(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let px=0;class lc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=zr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(la(r[o].image)):s.push(la(r[o]))}else s=la(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let mx=0;const ca=new te;class Vt extends Br{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=Zn,r=Zn,s=xn,o=$i,a=yn,l=ai,c=Vt.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=zr(),this.name="",this.source=new lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case il:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case il:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=ud;Vt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,w=(p+1)/2,I=(d+1)/2,D=(u+h)/4,F=(f+S)/4,H=(_+m)/4;return M>w&&M>I?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=D/i,s=F/i):w>I?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=D/r,s=H/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=F/s,r=H/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-S)/A,this.z=(h-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xx extends Br{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Vt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new lc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends xx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Sd extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gx extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(s,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),Os.subVectors(this.max,Wr),or.subVectors(e.a,Wr),ar.subVectors(e.b,Wr),lr.subVectors(e.c,Wr),di.subVectors(ar,or),hi.subVectors(lr,ar),Bi.subVectors(or,lr);let t=[0,-di.z,di.y,0,-hi.z,hi.y,0,-Bi.z,Bi.y,di.z,0,-di.x,hi.z,0,-hi.x,Bi.z,0,-Bi.x,-di.y,di.x,0,-hi.y,hi.x,0,-Bi.y,Bi.x,0];return!ua(t,or,ar,lr,Os)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,or,ar,lr,Os))?!1:(Bs.crossVectors(di,hi),t=[Bs.x,Bs.y,Bs.z],ua(t,or,ar,lr,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hn=[new te,new te,new te,new te,new te,new te,new te,new te],vn=new te,Fs=new ws,or=new te,ar=new te,lr=new te,di=new te,hi=new te,Bi=new te,Wr=new te,Os=new te,Bs=new te,zi=new te;function ua(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){zi.fromArray(n,s);const a=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),u=i.dot(zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _x=new ws,Xr=new te,fa=new te;class cc{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_x.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);const t=Xr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(fa)),this.expandByPoint(Xr.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const kn=new te,da=new te,zs=new te,pi=new te,ha=new te,Hs=new te,pa=new te;class bd{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){da.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(da);const s=e.distanceTo(t)*.5,o=-this.direction.dot(zs),a=pi.dot(this.direction),l=-pi.dot(zs),c=pi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const S=1/u;f*=S,h*=S,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(da).addScaledVector(zs,h),p}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,r,s){ha.subVectors(t,e),Hs.subVectors(i,e),pa.crossVectors(ha,Hs);let o=this.direction.dot(pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(Hs.crossVectors(pi,Hs));if(l<0)return null;const c=a*this.direction.dot(ha.cross(pi));if(c<0||l+c>o)return null;const u=-a*pi.dot(pa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,_,S,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,S,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/cr.setFromMatrixColumn(e,0).length(),s=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,S=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-S*c,t[9]=-a*l,t[2]=S-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,S=c*f;t[0]=h+S*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=S+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,S=c*f;t[0]=h-S*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=S-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,S=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,S=a*c;t[0]=l*u,t[4]=S-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,S=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vx,e,Sx)}lookAt(e,t,i){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),mi.crossVectors(i,en),mi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),mi.crossVectors(i,en)),mi.normalize(),ks.crossVectors(en,mi),r[0]=mi.x,r[4]=ks.x,r[8]=en.x,r[1]=mi.y,r[5]=ks.y,r[9]=en.y,r[2]=mi.z,r[6]=ks.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],S=i[6],m=i[10],d=i[14],A=i[3],M=i[7],w=i[11],I=i[15],D=r[0],F=r[4],H=r[8],T=r[12],b=r[1],B=r[5],Z=r[9],q=r[13],z=r[2],se=r[6],W=r[10],ne=r[14],j=r[3],de=r[7],me=r[11],Re=r[15];return s[0]=o*D+a*b+l*z+c*j,s[4]=o*F+a*B+l*se+c*de,s[8]=o*H+a*Z+l*W+c*me,s[12]=o*T+a*q+l*ne+c*Re,s[1]=u*D+f*b+h*z+p*j,s[5]=u*F+f*B+h*se+p*de,s[9]=u*H+f*Z+h*W+p*me,s[13]=u*T+f*q+h*ne+p*Re,s[2]=_*D+S*b+m*z+d*j,s[6]=_*F+S*B+m*se+d*de,s[10]=_*H+S*Z+m*W+d*me,s[14]=_*T+S*q+m*ne+d*Re,s[3]=A*D+M*b+w*z+I*j,s[7]=A*F+M*B+w*se+I*de,s[11]=A*H+M*Z+w*W+I*me,s[15]=A*T+M*q+w*ne+I*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],S=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+S*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],S=e[13],m=e[14],d=e[15],A=f*m*c-S*h*c+S*l*p-a*m*p-f*l*d+a*h*d,M=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,w=u*S*c-_*f*c+_*a*p-o*S*p-u*a*d+o*f*d,I=_*f*l-u*S*l-_*a*h+o*S*h+u*a*m-o*f*m,D=t*A+i*M+r*w+s*I;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/D;return e[0]=A*F,e[1]=(S*h*s-f*m*s-S*r*p+i*m*p+f*r*d-i*h*d)*F,e[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*d+i*l*d)*F,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*F,e[4]=M*F,e[5]=(u*m*s-_*h*s+_*r*p-t*m*p-u*r*d+t*h*d)*F,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*d-t*l*d)*F,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*F,e[8]=w*F,e[9]=(_*f*s-u*S*s-_*i*p+t*S*p+u*i*d-t*f*d)*F,e[10]=(o*S*s-_*a*s+_*i*c-t*S*c-o*i*d+t*a*d)*F,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*F,e[12]=I*F,e[13]=(u*S*r-_*f*r+_*i*h-t*S*h-u*i*m+t*f*m)*F,e[14]=(_*a*r-o*S*r-_*i*l+t*S*l+o*i*m-t*a*m)*F,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,S=o*u,m=o*f,d=a*f,A=l*c,M=l*u,w=l*f,I=i.x,D=i.y,F=i.z;return r[0]=(1-(S+d))*I,r[1]=(p+w)*I,r[2]=(_-M)*I,r[3]=0,r[4]=(p-w)*D,r[5]=(1-(h+d))*D,r[6]=(m+A)*D,r[7]=0,r[8]=(_+M)*F,r[9]=(m-A)*F,r[10]=(1-(h+S))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=cr.set(r[0],r[1],r[2]).length();const o=cr.set(r[4],r[5],r[6]).length(),a=cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const c=1/s,u=1/o,f=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,t.setFromRotationMatrix(Sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Un,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let _,S;if(l)_=s/(o-s),S=o*s/(o-s);else if(a===Un)_=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===yo)_=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Un,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,S;if(l)_=1/(o-s),S=o/(o-s);else if(a===Un)_=-2/(o-s),S=-(o+s)/(o-s);else if(a===yo)_=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cr=new te,Sn=new wt,vx=new te(0,0,0),Sx=new te(1,1,1),mi=new te,ks=new te,en=new te,hu=new wt,pu=new As;class li{constructor(e=0,t=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pu.setFromEuler(this),this.setFromQuaternion(pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class uc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bx=0;const mu=new te,ur=new As,Vn=new wt,Vs=new te,qr=new te,Mx=new te,yx=new As,xu=new te(1,0,0),gu=new te(0,1,0),_u=new te(0,0,1),vu={type:"added"},Ex={type:"removed"},fr={type:"childadded",child:null},ma={type:"childremoved",child:null};class an extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new te,t=new li,i=new As,r=new te(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new je}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return mu.copy(e).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vs.copy(e):Vs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(qr,Vs,this.up):Vn.lookAt(Vs,qr,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(Vn),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vu),fr.child=e,this.dispatchEvent(fr),fr.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ex),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vu),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,Mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new te(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new te,Gn=new te,xa=new te,Wn=new te,dr=new te,hr=new te,Su=new te,ga=new te,_a=new te,va=new te,Sa=new Tt,ba=new Tt,Ma=new Tt;class Mn{constructor(e=new te,t=new te,i=new te){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){bn.subVectors(r,t),Gn.subVectors(i,t),xa.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Gn),l=bn.dot(xa),c=Gn.dot(Gn),u=Gn.dot(xa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Sa.setScalar(0),ba.setScalar(0),Ma.setScalar(0),Sa.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,i),Ma.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Sa,s.x),o.addScaledVector(ba,s.y),o.addScaledVector(Ma,s.z),o}static isFrontFacing(e,t,i,r){return bn.subVectors(i,t),Gn.subVectors(e,t),bn.cross(Gn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),bn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;dr.subVectors(r,i),hr.subVectors(s,i),ga.subVectors(e,i);const l=dr.dot(ga),c=hr.dot(ga);if(l<=0&&c<=0)return t.copy(i);_a.subVectors(e,r);const u=dr.dot(_a),f=hr.dot(_a);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(dr,o);va.subVectors(e,s);const p=dr.dot(va),_=hr.dot(va);if(_>=0&&p<=_)return t.copy(s);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(hr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Su.subVectors(s,r),a=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(Su,a);const d=1/(m+S+h);return o=S*d,a=h*d,t.copy(i).addScaledVector(dr,o).addScaledVector(hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function ya(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=ac(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ya(o,s,e+1/3),this.g=ya(o,s,e),this.b=ya(o,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=hn){function i(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const i=Md[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return it.workingToColorSpace(Ot.copy(this),e),Math.round(Ze(Ot.r*255,0,255))*65536+Math.round(Ze(Ot.g*255,0,255))*256+Math.round(Ze(Ot.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=hn){it.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Gs);const i=as(xi.h,Gs.h,t),r=as(xi.s,Gs.s,t),s=as(xi.l,Gs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new st;st.NAMES=Md;let Tx=0;class Vo extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=Cr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ya&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ls extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new te,Ws=new ot;let Ax=0;class Nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ax++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=su,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==su&&(e.usage=this.usage),e}}class yd extends Nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ed extends Nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Fn extends Nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wx=0;const cn=new wt,Ea=new an,pr=new te,tn=new ws,Yr=new ws,It=new te;class fi extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vd(e)?Ed:yd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return Ea.lookAt(e),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(tn.min,Yr.min),tn.expandByPoint(It),It.addVectors(tn.max,Yr.max),tn.expandByPoint(It)):(tn.expandByPoint(Yr.min),tn.expandByPoint(Yr.max))}tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(e,c),It.add(pr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<i.count;H++)a[H]=new te,l[H]=new te;const c=new te,u=new te,f=new te,h=new ot,p=new ot,_=new ot,S=new te,m=new te;function d(H,T,b){c.fromBufferAttribute(i,H),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,b),h.fromBufferAttribute(s,H),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,b),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const B=1/(p.x*_.y-_.x*p.y);isFinite(B)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(B),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(B),a[H].add(S),a[T].add(S),a[b].add(S),l[H].add(m),l[T].add(m),l[b].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let H=0,T=A.length;H<T;++H){const b=A[H],B=b.start,Z=b.count;for(let q=B,z=B+Z;q<z;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const M=new te,w=new te,I=new te,D=new te;function F(H){I.fromBufferAttribute(r,H),D.copy(I);const T=a[H];M.copy(T),M.sub(I.multiplyScalar(I.dot(T))).normalize(),w.crossVectors(D,T);const B=w.dot(l[H])<0?-1:1;o.setXYZW(H,M.x,M.y,M.z,B)}for(let H=0,T=A.length;H<T;++H){const b=A[H],B=b.start,Z=b.count;for(let q=B,z=B+Z;q<z;q+=3)F(e.getX(q+0)),F(e.getX(q+1)),F(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new te,s=new te,o=new te,a=new te,l=new te,c=new te,u=new te,f=new te;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Nn(h,u,f)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bu=new wt,Hi=new bd,Xs=new cc,Mu=new te,qs=new te,Ys=new te,js=new te,Ta=new te,$s=new te,yu=new te,Ks=new te;class An extends an{constructor(e=new fi,t=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$s.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ta.fromBufferAttribute(f,e),o?$s.addScaledVector(Ta,u):$s.addScaledVector(Ta.sub(t),u))}t.add($s)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(s),Hi.copy(e.ray).recast(e.near),!(Xs.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Xs,Mu)===null||Hi.origin.distanceToSquared(Mu)>(e.far-e.near)**2))&&(bu.copy(s).invert(),Hi.copy(e.ray).applyMatrix4(bu),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const m=h[_],d=o[m.materialIndex],A=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=A,I=M;w<I;w+=3){const D=a.getX(w),F=a.getX(w+1),H=a.getX(w+2);r=Zs(this,d,e,i,c,u,f,D,F,H),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const A=a.getX(m),M=a.getX(m+1),w=a.getX(m+2);r=Zs(this,o,e,i,c,u,f,A,M,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const m=h[_],d=o[m.materialIndex],A=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=A,I=M;w<I;w+=3){const D=w,F=w+1,H=w+2;r=Zs(this,d,e,i,c,u,f,D,F,H),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const A=m,M=m+1,w=m+2;r=Zs(this,o,e,i,c,u,f,A,M,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Cx(n,e,t,i,r,s,o,a){let l;if(e.side===kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ri,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ks);return c<t.near||c>t.far?null:{distance:c,point:Ks.clone(),object:n}}function Zs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,qs),n.getVertexPosition(l,Ys),n.getVertexPosition(c,js);const u=Cx(n,e,t,i,qs,Ys,js,yu);if(u){const f=new te;Mn.getBarycoord(yu,qs,Ys,js,f),r&&(u.uv=Mn.getInterpolatedAttribute(r,a,l,c,f,new ot)),s&&(u.uv1=Mn.getInterpolatedAttribute(s,a,l,c,f,new ot)),o&&(u.normal=Mn.getInterpolatedAttribute(o,a,l,c,f,new te),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new te,materialIndex:0};Mn.getNormal(qs,Ys,js,h.normal),u.face=h,u.barycoord=f}return u}class Cs extends fi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(u,3)),this.setAttribute("uv",new Fn(f,2));function _(S,m,d,A,M,w,I,D,F,H,T){const b=w/F,B=I/H,Z=w/2,q=I/2,z=D/2,se=F+1,W=H+1;let ne=0,j=0;const de=new te;for(let me=0;me<W;me++){const Re=me*B-q;for(let He=0;He<se;He++){const Je=He*b-Z;de[S]=Je*A,de[m]=Re*M,de[d]=z,c.push(de.x,de.y,de.z),de[S]=0,de[m]=0,de[d]=D>0?1:-1,u.push(de.x,de.y,de.z),f.push(He/F),f.push(1-me/H),ne+=1}}for(let me=0;me<H;me++)for(let Re=0;Re<F;Re++){const He=h+Re+se*me,Je=h+Re+se*(me+1),fe=h+(Re+1)+se*(me+1),et=h+(Re+1)+se*me;l.push(He,Je,et),l.push(Je,fe,et),j+=6}a.addGroup(p,j,T),p+=j,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=Fr(n[t]);for(const r in i)e[r]=i[r]}return e}function Rx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Td(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Px={clone:Fr,merge:qt};var Dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dx,this.fragmentShader=Ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=Rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ad extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new te,Eu=new ot,Tu=new ot;class pn extends Ad{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,Eu,Tu),t.subVectors(Tu,Eu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(os*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mr=-90,xr=1;class Lx extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(mr,xr,e,t);r.layers=this.layers,this.add(r);const s=new pn(mr,xr,e,t);s.layers=this.layers,this.add(s);const o=new pn(mr,xr,e,t);o.layers=this.layers,this.add(o);const a=new pn(mr,xr,e,t);a.layers=this.layers,this.add(a);const l=new pn(mr,xr,e,t);l.layers=this.layers,this.add(l);const c=new pn(mr,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class wd extends Vt{constructor(e=[],t=Ur,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ux extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cs(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:ni});s.uniforms.tEquirect.value=t;const o=new An(r,s),a=t.minFilter;return t.minFilter===$i&&(t.minFilter=xn),new Lx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Js extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nx={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Fx extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ox extends Vt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=on,u=on,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wa=new te,Bx=new te,zx=new je;class Xi{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wa.subVectors(i,t).cross(Bx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zx.getNormalMatrix(e),r=this.coplanarPoint(wa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new cc,Hx=new ot(.5,.5),Qs=new te;class Cd{constructor(e=new Xi,t=new Xi,i=new Xi,r=new Xi,s=new Xi,o=new Xi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],_=s[8],S=s[9],m=s[10],d=s[11],A=s[12],M=s[13],w=s[14],I=s[15];if(r[0].setComponents(c-o,p-u,d-_,I-A).normalize(),r[1].setComponents(c+o,p+u,d+_,I+A).normalize(),r[2].setComponents(c+a,p+f,d+S,I+M).normalize(),r[3].setComponents(c-a,p-f,d-S,I-M).normalize(),i)r[4].setComponents(l,h,m,w).normalize(),r[5].setComponents(c-l,p-h,d-m,I-w).normalize();else if(r[4].setComponents(c-l,p-h,d-m,I-w).normalize(),t===Un)r[5].setComponents(c+l,p+h,d+m,I+w).normalize();else if(t===yo)r[5].setComponents(l,h,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);const t=Hx.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qs.x=r.normal.x>0?e.max.x:e.min.x,Qs.y=r.normal.y>0?e.max.y:e.min.y,Qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rd extends Vt{constructor(e,t,i=Ji,r,s,o,a=on,l=on,c,u=_s,f=1){if(u!==_s&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pd extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Go extends fi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],S=[],m=[];for(let d=0;d<u;d++){const A=d*h-o;for(let M=0;M<c;M++){const w=M*f-s;_.push(w,-A,0),S.push(0,0,1),m.push(M/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const M=A+c*d,w=A+c*(d+1),I=A+1+c*(d+1),D=A+1+c*d;p.push(M,w,D),p.push(w,I,D)}this.setIndex(p),this.setAttribute("position",new Fn(_,3)),this.setAttribute("normal",new Fn(S,3)),this.setAttribute("uv",new Fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.widthSegments,e.heightSegments)}}class cs extends fi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new te,h=new te,p=[],_=[],S=[],m=[];for(let d=0;d<=i;d++){const A=[],M=d/i;let w=0;d===0&&o===0?w=.5/t:d===i&&l===Math.PI&&(w=-.5/t);for(let I=0;I<=t;I++){const D=I/t;f.x=-e*Math.cos(r+D*s)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(r+D*s)*Math.sin(o+M*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(D+w,1-M),A.push(c++)}u.push(A)}for(let d=0;d<i;d++)for(let A=0;A<t;A++){const M=u[d][A+1],w=u[d][A],I=u[d+1][A],D=u[d+1][A+1];(d!==0||o>0)&&p.push(M,w,D),(d!==i-1||l<Math.PI)&&p.push(w,I,D)}this.setIndex(p),this.setAttribute("position",new Fn(_,3)),this.setAttribute("normal",new Fn(S,3)),this.setAttribute("uv",new Fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kx extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vx extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ca={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Gx{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Wx=new Gx;class fc{constructor(e){this.manager=e!==void 0?e:Wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}fc.DEFAULT_MATERIAL_NAME="__DEFAULT";const gr=new WeakMap;class Xx extends fc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ca.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=gr.get(o);f===void 0&&(f=[],gr.set(o,f)),f.push({onLoad:t,onError:r})}return o}const a=Ss("img");function l(){u(),t&&t(this);const f=gr.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}gr.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),Ca.remove(`image:${e}`);const h=gr.get(this)||[];for(let p=0;p<h.length;p++){const _=h[p];_.onError&&_.onError(f)}gr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ca.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class qx extends fc{constructor(e){super(e)}load(e,t,i,r){const s=new Vt,o=new Xx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Yx extends Ad{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jx extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Au=new wt;class $x{constructor(e,t,i=0,r=1/0){this.ray=new bd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Au.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Au),this}intersectObject(e,t=!0,i=[]){return Ll(e,this,i,t),i.sort(wu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ll(e[r],this,i,t);return i.sort(wu),i}}function wu(n,e){return n.distance-e.distance}function Ll(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Ll(s[o],e,t,!0)}}class br{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Cu(n,e,t,i){const r=Kx(i);switch(t){case md:return n*e;case gd:return n*e/r.components*r.byteLength;case ic:return n*e/r.components*r.byteLength;case rc:return n*e*2/r.components*r.byteLength;case sc:return n*e*2/r.components*r.byteLength;case xd:return n*e*3/r.components*r.byteLength;case yn:return n*e*4/r.components*r.byteLength;case oc:return n*e*4/r.components*r.byteLength;case ao:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case co:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:case ll:return Math.max(n,16)*Math.max(e,8)/4;case sl:case al:return Math.max(n,8)*Math.max(e,8)/2;case cl:case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Al:case wl:case Cl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rl:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Dl:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kx(n){switch(n){case ai:case fd:return{byteLength:1,components:1};case xs:case dd:case Or:return{byteLength:2,components:1};case tc:case nc:return{byteLength:2,components:4};case Ji:case ec:case Jn:return{byteLength:4,components:1};case hd:case pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Zx(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],S=f[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const S=f[p];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qx=`#ifdef USE_ALPHAHASH
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
#endif`,eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rg=`#ifdef USE_AOMAP
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
#endif`,sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,og=`#ifdef USE_BATCHING
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
#endif`,ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ug=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fg=`#ifdef USE_IRIDESCENCE
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
#endif`,dg=`#ifdef USE_BUMPMAP
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
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bg=`#define PI 3.141592653589793
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
} // validated`,Mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yg=`vec3 transformedNormal = objectNormal;
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
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zg=`#ifdef USE_GRADIENTMAP
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
}`,Hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gg=`uniform bool receiveShadow;
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
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$g=`PhysicalMaterial material;
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
#endif`,Kg=`uniform sampler2D dfgLUT;
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
}`,Zg=`
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a_=`#if defined( USE_POINTS_UV )
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
#endif`,l_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h_=`#ifdef USE_MORPHTARGETS
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
#endif`,p_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,__=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S_=`#ifdef USE_NORMALMAP
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
#endif`,b_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F_=`float getShadowMask() {
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
}`,O_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B_=`#ifdef USE_SKINNING
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
#endif`,z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H_=`#ifdef USE_SKINNING
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
#endif`,k_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X_=`#ifdef USE_TRANSMISSION
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
#endif`,q_=`#ifdef USE_TRANSMISSION
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
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J_=`uniform sampler2D t2D;
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`#include <common>
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
}`,rv=`#if DEPTH_PACKING == 3200
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
}`,sv=`#define DISTANCE
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
}`,ov=`#define DISTANCE
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
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`uniform float scale;
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
}`,uv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,dv=`uniform vec3 diffuse;
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
}`,hv=`#define LAMBERT
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
}`,pv=`#define LAMBERT
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
}`,mv=`#define MATCAP
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
}`,xv=`#define MATCAP
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
}`,gv=`#define NORMAL
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
}`,_v=`#define NORMAL
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
}`,vv=`#define PHONG
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
}`,Sv=`#define PHONG
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
}`,bv=`#define STANDARD
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
}`,Mv=`#define STANDARD
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
}`,yv=`#define TOON
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
}`,Ev=`#define TOON
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
}`,Tv=`uniform float size;
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
}`,Av=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,Cv=`uniform vec3 color;
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
}`,Rv=`uniform float rotation;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Jx,alphahash_pars_fragment:Qx,alphamap_fragment:eg,alphamap_pars_fragment:tg,alphatest_fragment:ng,alphatest_pars_fragment:ig,aomap_fragment:rg,aomap_pars_fragment:sg,batching_pars_vertex:og,batching_vertex:ag,begin_vertex:lg,beginnormal_vertex:cg,bsdfs:ug,iridescence_fragment:fg,bumpmap_pars_fragment:dg,clipping_planes_fragment:hg,clipping_planes_pars_fragment:pg,clipping_planes_pars_vertex:mg,clipping_planes_vertex:xg,color_fragment:gg,color_pars_fragment:_g,color_pars_vertex:vg,color_vertex:Sg,common:bg,cube_uv_reflection_fragment:Mg,defaultnormal_vertex:yg,displacementmap_pars_vertex:Eg,displacementmap_vertex:Tg,emissivemap_fragment:Ag,emissivemap_pars_fragment:wg,colorspace_fragment:Cg,colorspace_pars_fragment:Rg,envmap_fragment:Pg,envmap_common_pars_fragment:Dg,envmap_pars_fragment:Ig,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Wg,envmap_vertex:Ug,fog_vertex:Ng,fog_pars_vertex:Fg,fog_fragment:Og,fog_pars_fragment:Bg,gradientmap_pars_fragment:zg,lightmap_pars_fragment:Hg,lights_lambert_fragment:kg,lights_lambert_pars_fragment:Vg,lights_pars_begin:Gg,lights_toon_fragment:Xg,lights_toon_pars_fragment:qg,lights_phong_fragment:Yg,lights_phong_pars_fragment:jg,lights_physical_fragment:$g,lights_physical_pars_fragment:Kg,lights_fragment_begin:Zg,lights_fragment_maps:Jg,lights_fragment_end:Qg,logdepthbuf_fragment:e_,logdepthbuf_pars_fragment:t_,logdepthbuf_pars_vertex:n_,logdepthbuf_vertex:i_,map_fragment:r_,map_pars_fragment:s_,map_particle_fragment:o_,map_particle_pars_fragment:a_,metalnessmap_fragment:l_,metalnessmap_pars_fragment:c_,morphinstance_vertex:u_,morphcolor_vertex:f_,morphnormal_vertex:d_,morphtarget_pars_vertex:h_,morphtarget_vertex:p_,normal_fragment_begin:m_,normal_fragment_maps:x_,normal_pars_fragment:g_,normal_pars_vertex:__,normal_vertex:v_,normalmap_pars_fragment:S_,clearcoat_normal_fragment_begin:b_,clearcoat_normal_fragment_maps:M_,clearcoat_pars_fragment:y_,iridescence_pars_fragment:E_,opaque_fragment:T_,packing:A_,premultiplied_alpha_fragment:w_,project_vertex:C_,dithering_fragment:R_,dithering_pars_fragment:P_,roughnessmap_fragment:D_,roughnessmap_pars_fragment:I_,shadowmap_pars_fragment:L_,shadowmap_pars_vertex:U_,shadowmap_vertex:N_,shadowmask_pars_fragment:F_,skinbase_vertex:O_,skinning_pars_vertex:B_,skinning_vertex:z_,skinnormal_vertex:H_,specularmap_fragment:k_,specularmap_pars_fragment:V_,tonemapping_fragment:G_,tonemapping_pars_fragment:W_,transmission_fragment:X_,transmission_pars_fragment:q_,uv_pars_fragment:Y_,uv_pars_vertex:j_,uv_vertex:$_,worldpos_vertex:K_,background_vert:Z_,background_frag:J_,backgroundCube_vert:Q_,backgroundCube_frag:ev,cube_vert:tv,cube_frag:nv,depth_vert:iv,depth_frag:rv,distanceRGBA_vert:sv,distanceRGBA_frag:ov,equirect_vert:av,equirect_frag:lv,linedashed_vert:cv,linedashed_frag:uv,meshbasic_vert:fv,meshbasic_frag:dv,meshlambert_vert:hv,meshlambert_frag:pv,meshmatcap_vert:mv,meshmatcap_frag:xv,meshnormal_vert:gv,meshnormal_frag:_v,meshphong_vert:vv,meshphong_frag:Sv,meshphysical_vert:bv,meshphysical_frag:Mv,meshtoon_vert:yv,meshtoon_frag:Ev,points_vert:Tv,points_frag:Av,shadow_vert:wv,shadow_frag:Cv,sprite_vert:Rv,sprite_frag:Pv},ye={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},In={basic:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new st(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new st(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:qt([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:qt([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:qt([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:qt([ye.common,ye.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:qt([ye.lights,ye.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};In.physical={uniforms:qt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const eo={r:0,b:0,g:0},Vi=new li,Dv=new wt;function Iv(n,e,t,i,r,s,o){const a=new st(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?t:e).get(w)),w}function S(M){let w=!1;const I=_(M);I===null?d(a,l):I&&I.isColor&&(d(I,1),w=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,w){const I=_(w);I&&(I.isCubeTexture||I.mapping===ko)?(u===void 0&&(u=new An(new Cs(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Fr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,F,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Vi.copy(w.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(Vi)),u.material.toneMapped=it.getTransfer(I.colorSpace)!==ct,(f!==I||h!==I.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=I,h=I.version,p=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new An(new Go(2,2),new ci({name:"BackgroundMaterial",uniforms:Fr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=it.getTransfer(I.colorSpace)!==ct,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||h!==I.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=I,h=I.version,p=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,w){M.getRGB(eo,Td(n)),i.buffers.color.setClear(eo.r,eo.g,eo.b,w,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),l=w,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:S,addToRenderList:m,dispose:A}}function Lv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(b,B,Z,q,z){let se=!1;const W=f(q,Z,B);s!==W&&(s=W,c(s.object)),se=p(b,q,Z,z),se&&_(b,q,Z,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,w(b,B,Z,q),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,B,Z){const q=Z.wireframe===!0;let z=i[b.id];z===void 0&&(z={},i[b.id]=z);let se=z[B.id];se===void 0&&(se={},z[B.id]=se);let W=se[q];return W===void 0&&(W=h(l()),se[q]=W),W}function h(b){const B=[],Z=[],q=[];for(let z=0;z<t;z++)B[z]=0,Z[z]=0,q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:q,object:b,attributes:{},index:null}}function p(b,B,Z,q){const z=s.attributes,se=B.attributes;let W=0;const ne=Z.getAttributes();for(const j in ne)if(ne[j].location>=0){const me=z[j];let Re=se[j];if(Re===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(Re=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(Re=b.instanceColor)),me===void 0||me.attribute!==Re||Re&&me.data!==Re.data)return!0;W++}return s.attributesNum!==W||s.index!==q}function _(b,B,Z,q){const z={},se=B.attributes;let W=0;const ne=Z.getAttributes();for(const j in ne)if(ne[j].location>=0){let me=se[j];me===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(me=b.instanceColor));const Re={};Re.attribute=me,me&&me.data&&(Re.data=me.data),z[j]=Re,W++}s.attributes=z,s.attributesNum=W,s.index=q}function S(){const b=s.newAttributes;for(let B=0,Z=b.length;B<Z;B++)b[B]=0}function m(b){d(b,0)}function d(b,B){const Z=s.newAttributes,q=s.enabledAttributes,z=s.attributeDivisors;Z[b]=1,q[b]===0&&(n.enableVertexAttribArray(b),q[b]=1),z[b]!==B&&(n.vertexAttribDivisor(b,B),z[b]=B)}function A(){const b=s.newAttributes,B=s.enabledAttributes;for(let Z=0,q=B.length;Z<q;Z++)B[Z]!==b[Z]&&(n.disableVertexAttribArray(Z),B[Z]=0)}function M(b,B,Z,q,z,se,W){W===!0?n.vertexAttribIPointer(b,B,Z,z,se):n.vertexAttribPointer(b,B,Z,q,z,se)}function w(b,B,Z,q){S();const z=q.attributes,se=Z.getAttributes(),W=B.defaultAttributeValues;for(const ne in se){const j=se[ne];if(j.location>=0){let de=z[ne];if(de===void 0&&(ne==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),ne==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),de!==void 0){const me=de.normalized,Re=de.itemSize,He=e.get(de);if(He===void 0)continue;const Je=He.buffer,fe=He.type,et=He.bytesPerElement,oe=fe===n.INT||fe===n.UNSIGNED_INT||de.gpuType===ec;if(de.isInterleavedBufferAttribute){const ce=de.data,Ee=ce.stride,ze=de.offset;if(ce.isInstancedInterleavedBuffer){for(let we=0;we<j.locationSize;we++)d(j.location+we,ce.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let we=0;we<j.locationSize;we++)m(j.location+we);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let we=0;we<j.locationSize;we++)M(j.location+we,Re/j.locationSize,fe,me,Ee*et,(ze+Re/j.locationSize*we)*et,oe)}else{if(de.isInstancedBufferAttribute){for(let ce=0;ce<j.locationSize;ce++)d(j.location+ce,de.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ce=0;ce<j.locationSize;ce++)m(j.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ce=0;ce<j.locationSize;ce++)M(j.location+ce,Re/j.locationSize,fe,me,Re*et,Re/j.locationSize*ce*et,oe)}}else if(W!==void 0){const me=W[ne];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(j.location,me);break;case 3:n.vertexAttrib3fv(j.location,me);break;case 4:n.vertexAttrib4fv(j.location,me);break;default:n.vertexAttrib1fv(j.location,me)}}}}A()}function I(){H();for(const b in i){const B=i[b];for(const Z in B){const q=B[Z];for(const z in q)u(q[z].object),delete q[z];delete B[Z]}delete i[b]}}function D(b){if(i[b.id]===void 0)return;const B=i[b.id];for(const Z in B){const q=B[Z];for(const z in q)u(q[z].object),delete q[z];delete B[Z]}delete i[b.id]}function F(b){for(const B in i){const Z=i[B];if(Z[b.id]===void 0)continue;const q=Z[b.id];for(const z in q)u(q[z].object),delete q[z];delete Z[b.id]}}function H(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:H,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfProgram:F,initAttributes:S,enableAttribute:m,disableUnusedAttributes:A}}function Uv(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let S=0;S<f;S++)_+=u[S]*h[S];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Nv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(F){return!(F!==yn&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){const H=F===Or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ai&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Jn&&!H)}function l(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:I,maxSamples:D}}function Fv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Xi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,M=A*4;let w=d.clippingState||null;l.value=w,w=u(_,h,M,p);for(let I=0;I!==M;++I)w[I]=t[I];d.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const d=p+S*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,w=p;M!==S;++M,w+=4)o.copy(f[M]).applyMatrix4(A,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function Ov(n){let e=new WeakMap;function t(o,a){return a===tl?o.mapping=Ur:a===nl&&(o.mapping=Nr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===tl||a===nl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ux(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ei=4,Ru=[.125,.215,.35,.446,.526,.582],ji=20,Bv=512,jr=new Yx,Pu=new st;let Ra=null,Pa=0,Da=0,Ia=!1;const zv=new te;class Du{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=zv}=s;Ra=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Pa,Da),this._renderer.xr.enabled=Ia,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ur||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Or,format:yn,colorSpace:Pi,depthBuffer:!1},r=Iu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hv(s)),this._blurMaterial=Vv(s,e,t)}return r}_compileMaterial(e){const t=new An(new fi,e);this._renderer.compile(t,jr)}_sceneToCubeUV(e,t,i,r,s){const l=new pn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Pu),f.toneMapping=Ai,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new An(new Cs,new ls({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let d=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,d=!0):(m.color.copy(Pu),d=!0);for(let M=0;M<6;M++){const w=M%3;w===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):w===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const I=this._cubeSize;_r(r,w*I,M>2?I:0,I,I),f.setRenderTarget(r),d&&f.render(S,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ur||e.mapping===Nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_r(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,jr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){const A=3*Math.max(this._cubeSize,16),M=4*this._cubeSize;this._ggxMaterial=kv(this._lodMax,A,M)}const o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=.05+c*.95,p=f*h,{_lodMax:_}=this,S=this._sizeLods[i],m=3*S*(i>_-Ei?i-_+Ei:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,_r(s,m,d,3*S,2*S),r.setRenderTarget(s),r.render(a,jr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,_r(e,m,d,3*S,2*S),r.setRenderTarget(e),r.render(a,jr)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ji-1),S=s/_,m=isFinite(s)?1+Math.floor(u*S):ji;m>ji&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const d=[];let A=0;for(let F=0;F<ji;++F){const H=F/S,T=Math.exp(-H*H/2);d.push(T),F===0?A+=T:F<m&&(A+=2*T)}for(let F=0;F<d.length;F++)d[F]=d[F]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=_,h.mipInt.value=M-i;const w=this._sizeLods[r],I=3*w*(r>M-Ei?r-M+Ei:0),D=4*(this._cubeSize-w);_r(t,I,D,3*w,2*w),l.setRenderTarget(t),l.render(f,jr)}}function Hv(n){const e=[],t=[],i=[];let r=n;const s=n-Ei+1+Ru.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Ei?l=Ru[o-n+Ei-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,S=3,m=2,d=1,A=new Float32Array(S*_*p),M=new Float32Array(m*_*p),w=new Float32Array(d*_*p);for(let D=0;D<p;D++){const F=D%3*2/3-1,H=D>2?0:-1,T=[F,H,0,F+2/3,H,0,F+2/3,H+1,0,F,H,0,F+2/3,H+1,0,F,H+1,0];A.set(T,S*_*D),M.set(h,m*_*D);const b=[D,D,D,D,D,D];w.set(b,d*_*D)}const I=new fi;I.setAttribute("position",new Nn(A,S)),I.setAttribute("uv",new Nn(M,m)),I.setAttribute("faceIndex",new Nn(w,d)),i.push(new An(I,null)),r>Ei&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Iu(n,e,t){const i=new Qi(n,e,t);return i.texture.mapping=ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function kv(n,e,t){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Vv(n,e,t){const i=new Float32Array(ji),r=new te(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Lu(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Uu(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Wo(){return`

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
	`}function Gv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===tl||l===nl,u=l===Ur||l===Nr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Du(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Du(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Wv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&bs("WebGLRenderer: "+i+" extension not supported."),r}}}function Xv(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let S=0;if(p!==null){const A=p.array;S=p.version;for(let M=0,w=A.length;M<w;M+=3){const I=A[M+0],D=A[M+1],F=A[M+2];h.push(I,D,D,F,F,I)}}else if(_!==void 0){const A=_.array;S=_.version;for(let M=0,w=A.length/3-1;M<w;M+=3){const I=M+0,D=M+1,F=M+2;h.push(I,D,D,F,F,I)}}else return;const m=new(vd(h)?Ed:yd)(h,1);m.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function qv(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,h*o,_),t.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function f(h,p,_,S){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],S[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,S,0,_);let d=0;for(let A=0;A<_;A++)d+=p[A]*S[A];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Yv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Et("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function jv(n,e,t){const i=new WeakMap,r=new Tt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let T=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),_===!0&&(M=2),S===!0&&(M=3);let w=a.attributes.position.count*M,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const D=new Float32Array(w*I*4*f),F=new Sd(D,w,I,f);F.type=Jn,F.needsUpdate=!0;const H=M*4;for(let b=0;b<f;b++){const B=m[b],Z=d[b],q=A[b],z=w*I*4*b;for(let se=0;se<B.count;se++){const W=se*H;p===!0&&(r.fromBufferAttribute(B,se),D[z+W+0]=r.x,D[z+W+1]=r.y,D[z+W+2]=r.z,D[z+W+3]=0),_===!0&&(r.fromBufferAttribute(Z,se),D[z+W+4]=r.x,D[z+W+5]=r.y,D[z+W+6]=r.z,D[z+W+7]=0),S===!0&&(r.fromBufferAttribute(q,se),D[z+W+8]=r.x,D[z+W+9]=r.y,D[z+W+10]=r.z,D[z+W+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:F,size:new ot(w,I)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function $v(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Id=new Vt,Nu=new Rd(1,1),Ld=new Sd,Ud=new gx,Nd=new wd,Fu=[],Ou=[],Bu=new Float32Array(16),zu=new Float32Array(9),Hu=new Float32Array(4);function Hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Fu[r];if(s===void 0&&(s=new Float32Array(r),Fu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xo(n,e){let t=Ou[e];t===void 0&&(t=new Int32Array(e),Ou[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function Jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function Qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function eS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Hu.set(i),n.uniformMatrix2fv(this.addr,!1,Hu),Dt(t,i)}}function tS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;zu.set(i),n.uniformMatrix3fv(this.addr,!1,zu),Dt(t,i)}}function nS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Bu.set(i),n.uniformMatrix4fv(this.addr,!1,Bu),Dt(t,i)}}function iS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function sS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function oS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function aS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function cS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function uS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function fS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Nu.compareFunction=_d,s=Nu):s=Id,t.setTexture2D(e||s,r)}function dS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ud,r)}function hS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nd,r)}function pS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ld,r)}function mS(n){switch(n){case 5126:return Kv;case 35664:return Zv;case 35665:return Jv;case 35666:return Qv;case 35674:return eS;case 35675:return tS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return rS;case 35668:case 35672:return sS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return lS;case 36295:return cS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return fS;case 35679:case 36299:case 36307:return dS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return pS}}function xS(n,e){n.uniform1fv(this.addr,e)}function gS(n,e){const t=Hr(e,this.size,2);n.uniform2fv(this.addr,t)}function _S(n,e){const t=Hr(e,this.size,3);n.uniform3fv(this.addr,t)}function vS(n,e){const t=Hr(e,this.size,4);n.uniform4fv(this.addr,t)}function SS(n,e){const t=Hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bS(n,e){const t=Hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function MS(n,e){const t=Hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yS(n,e){n.uniform1iv(this.addr,e)}function ES(n,e){n.uniform2iv(this.addr,e)}function TS(n,e){n.uniform3iv(this.addr,e)}function AS(n,e){n.uniform4iv(this.addr,e)}function wS(n,e){n.uniform1uiv(this.addr,e)}function CS(n,e){n.uniform2uiv(this.addr,e)}function RS(n,e){n.uniform3uiv(this.addr,e)}function PS(n,e){n.uniform4uiv(this.addr,e)}function DS(n,e,t){const i=this.cache,r=e.length,s=Xo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Id,s[o])}function IS(n,e,t){const i=this.cache,r=e.length,s=Xo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ud,s[o])}function LS(n,e,t){const i=this.cache,r=e.length,s=Xo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Nd,s[o])}function US(n,e,t){const i=this.cache,r=e.length,s=Xo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ld,s[o])}function NS(n){switch(n){case 5126:return xS;case 35664:return gS;case 35665:return _S;case 35666:return vS;case 35674:return SS;case 35675:return bS;case 35676:return MS;case 5124:case 35670:return yS;case 35667:case 35671:return ES;case 35668:case 35672:return TS;case 35669:case 35673:return AS;case 5125:return wS;case 36294:return CS;case 36295:return RS;case 36296:return PS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return LS;case 36289:case 36303:case 36311:case 36292:return US}}class FS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mS(t.type)}}class OS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NS(t.type)}}class BS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const La=/(\w+)(\])?(\[|\.)?/g;function ku(n,e){n.seq.push(e),n.map[e.id]=e}function zS(n,e,t){const i=n.name,r=i.length;for(La.lastIndex=0;;){const s=La.exec(i),o=La.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ku(t,c===void 0?new FS(a,n,e):new OS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new BS(a),ku(t,f)),t=f}}}class fo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);zS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Vu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const HS=37297;let kS=0;function VS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Gu=new je;function GS(n){it._getMatrix(Gu,it.workingColorSpace,n);const e=`mat3( ${Gu.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Mo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+VS(n.getShaderSource(e),a)}else return s}function WS(n,e){const t=GS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function XS(n,e){let t;switch(e){case R0:t="Linear";break;case P0:t="Reinhard";break;case D0:t="Cineon";break;case I0:t="ACESFilmic";break;case U0:t="AgX";break;case N0:t="Neutral";break;case L0:t="Custom";break;default:qe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const to=new te;function qS(){it.getLuminanceCoefficients(to);const n=to.x.toFixed(4),e=to.y.toFixed(4),t=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function jS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $S(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Kr(n){return n!==""}function Xu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(n){return n.replace(KS,JS)}const ZS=new Map;function JS(n,e){let t=$e[e];if(t===void 0){const i=ZS.get(e);if(i!==void 0)t=$e[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ul(t)}const QS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(n){return n.replace(QS,eb)}function eb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ju(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function tb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ld?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===l0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function nb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ur:case Nr:e="ENVMAP_TYPE_CUBE";break;case ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ib(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Nr:e="ENVMAP_MODE_REFRACTION";break}return e}function rb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cd:e="ENVMAP_BLENDING_MULTIPLY";break;case w0:e="ENVMAP_BLENDING_MIX";break;case C0:e="ENVMAP_BLENDING_ADD";break}return e}function sb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ob(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tb(t),c=nb(t),u=ib(t),f=rb(t),h=sb(t),p=YS(t),_=jS(s),S=r.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Kr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Kr).join(`
`),d.length>0&&(d+=`
`)):(m=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),d=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?$e.tonemapping_pars_fragment:"",t.toneMapping!==Ai?XS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,WS("linearToOutputTexel",t.outputColorSpace),qS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),o=Ul(o),o=Xu(o,t),o=qu(o,t),a=Ul(a),a=Xu(a,t),a=qu(a,t),o=Yu(o),a=Yu(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=A+m+o,w=A+d+a,I=Vu(r,r.VERTEX_SHADER,M),D=Vu(r,r.FRAGMENT_SHADER,w);r.attachShader(S,I),r.attachShader(S,D),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function F(B){if(n.debug.checkShaderErrors){const Z=r.getProgramInfoLog(S)||"",q=r.getShaderInfoLog(I)||"",z=r.getShaderInfoLog(D)||"",se=Z.trim(),W=q.trim(),ne=z.trim();let j=!0,de=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,I,D);else{const me=Wu(r,I,"vertex"),Re=Wu(r,D,"fragment");Et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+se+`
`+me+`
`+Re)}else se!==""?qe("WebGLProgram: Program Info Log:",se):(W===""||ne==="")&&(de=!1);de&&(B.diagnostics={runnable:j,programLog:se,vertexShader:{log:W,prefix:m},fragmentShader:{log:ne,prefix:d}})}r.deleteShader(I),r.deleteShader(D),H=new fo(r,S),T=$S(r,S)}let H;this.getUniforms=function(){return H===void 0&&F(this),H};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(S,HS)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kS++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=I,this.fragmentShader=D,this}let ab=0;class lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cb(e),t.set(e,i)),i}}class cb{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}}function ub(n,e,t,i,r,s,o){const a=new uc,l=new lb,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,b,B,Z,q){const z=Z.fog,se=q.geometry,W=T.isMeshStandardMaterial?Z.environment:null,ne=(T.isMeshStandardMaterial?t:e).get(T.envMap||W),j=ne&&ne.mapping===ko?ne.image.height:null,de=_[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&qe("WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const me=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Re=me!==void 0?me.length:0;let He=0;se.morphAttributes.position!==void 0&&(He=1),se.morphAttributes.normal!==void 0&&(He=2),se.morphAttributes.color!==void 0&&(He=3);let Je,fe,et,oe;if(de){const at=In[de];Je=at.vertexShader,fe=at.fragmentShader}else Je=T.vertexShader,fe=T.fragmentShader,l.update(T),et=l.getVertexShaderID(T),oe=l.getFragmentShaderID(T);const ce=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),ze=q.isInstancedMesh===!0,we=q.isBatchedMesh===!0,We=!!T.map,dt=!!T.matcap,v=!!ne,P=!!T.aoMap,g=!!T.lightMap,J=!!T.bumpMap,Y=!!T.normalMap,$=!!T.displacementMap,V=!!T.emissiveMap,re=!!T.metalnessMap,K=!!T.roughnessMap,Q=T.anisotropy>0,y=T.clearcoat>0,x=T.dispersion>0,L=T.iridescence>0,R=T.sheen>0,C=T.transmission>0,O=Q&&!!T.anisotropyMap,le=y&&!!T.clearcoatMap,k=y&&!!T.clearcoatNormalMap,xe=y&&!!T.clearcoatRoughnessMap,_e=L&&!!T.iridescenceMap,ae=L&&!!T.iridescenceThicknessMap,pe=R&&!!T.sheenColorMap,Le=R&&!!T.sheenRoughnessMap,Ae=!!T.specularMap,ve=!!T.specularColorMap,Oe=!!T.specularIntensityMap,U=C&&!!T.transmissionMap,Me=C&&!!T.thicknessMap,Se=!!T.gradientMap,be=!!T.alphaMap,he=T.alphaTest>0,ue=!!T.alphaHash,De=!!T.extensions;let Xe=Ai;T.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const xt={shaderID:de,shaderType:T.type,shaderName:T.name,vertexShader:Je,fragmentShader:fe,defines:T.defines,customVertexShaderID:et,customFragmentShaderID:oe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:we,batchingColor:we&&q._colorsTexture!==null,instancing:ze,instancingColor:ze&&q.instanceColor!==null,instancingMorph:ze&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Pi,alphaToCoverage:!!T.alphaToCoverage,map:We,matcap:dt,envMap:v,envMapMode:v&&ne.mapping,envMapCubeUVHeight:j,aoMap:P,lightMap:g,bumpMap:J,normalMap:Y,displacementMap:h&&$,emissiveMap:V,normalMapObjectSpace:Y&&T.normalMapType===H0,normalMapTangentSpace:Y&&T.normalMapType===z0,metalnessMap:re,roughnessMap:K,anisotropy:Q,anisotropyMap:O,clearcoat:y,clearcoatMap:le,clearcoatNormalMap:k,clearcoatRoughnessMap:xe,dispersion:x,iridescence:L,iridescenceMap:_e,iridescenceThicknessMap:ae,sheen:R,sheenColorMap:pe,sheenRoughnessMap:Le,specularMap:Ae,specularColorMap:ve,specularIntensityMap:Oe,transmission:C,transmissionMap:U,thicknessMap:Me,gradientMap:Se,opaque:T.transparent===!1&&T.blending===Cr&&T.alphaToCoverage===!1,alphaMap:be,alphaTest:he,alphaHash:ue,combine:T.combine,mapUv:We&&S(T.map.channel),aoMapUv:P&&S(T.aoMap.channel),lightMapUv:g&&S(T.lightMap.channel),bumpMapUv:J&&S(T.bumpMap.channel),normalMapUv:Y&&S(T.normalMap.channel),displacementMapUv:$&&S(T.displacementMap.channel),emissiveMapUv:V&&S(T.emissiveMap.channel),metalnessMapUv:re&&S(T.metalnessMap.channel),roughnessMapUv:K&&S(T.roughnessMap.channel),anisotropyMapUv:O&&S(T.anisotropyMap.channel),clearcoatMapUv:le&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:k&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Le&&S(T.sheenRoughnessMap.channel),specularMapUv:Ae&&S(T.specularMap.channel),specularColorMapUv:ve&&S(T.specularColorMap.channel),specularIntensityMapUv:Oe&&S(T.specularIntensityMap.channel),transmissionMapUv:U&&S(T.transmissionMap.channel),thicknessMapUv:Me&&S(T.thicknessMap.channel),alphaMapUv:be&&S(T.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Y||Q),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!se.attributes.uv&&(We||be),fog:!!z,useFog:T.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:q.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:He,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:We&&T.map.isVideoTexture===!0&&it.getTransfer(T.map.colorSpace)===ct,decodeVideoTextureEmissive:V&&T.emissiveMap.isVideoTexture===!0&&it.getTransfer(T.emissiveMap.colorSpace)===ct,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Kn,flipSided:T.side===kt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function d(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const B in T.defines)b.push(B),b.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(A(b,T),M(b,T),b.push(n.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function A(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function M(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function w(T){const b=_[T.type];let B;if(b){const Z=In[b];B=Px.clone(Z.uniforms)}else B=T.uniforms;return B}function I(T,b){let B;for(let Z=0,q=u.length;Z<q;Z++){const z=u[Z];if(z.cacheKey===b){B=z,++B.usedTimes;break}}return B===void 0&&(B=new ob(n,b,T,s),u.push(B)),B}function D(T){if(--T.usedTimes===0){const b=u.indexOf(T);u[b]=u[u.length-1],u.pop(),T.destroy()}}function F(T){l.remove(T)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:I,releaseProgram:D,releaseShaderCache:F,programs:u,dispose:H}}function fb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function db(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ku(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,S,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:S,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=S,d.group=m),e++,d}function a(f,h,p,_,S,m){const d=o(f,h,p,_,S,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,S,m){const d=o(f,h,p,_,S,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||db),i.length>1&&i.sort(h||$u),r.length>1&&r.sort(h||$u)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function hb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ku,n.set(i,[o])):r>=s.length?(o=new Ku,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function pb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new st};break;case"SpotLight":t={position:new te,direction:new te,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new te,halfWidth:new te,halfHeight:new te};break}return n[e.id]=t,t}}}function mb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let xb=0;function gb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _b(n){const e=new pb,t=mb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new te);const r=new te,s=new wt,o=new wt;function a(c){let u=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,S=0,m=0,d=0,A=0,M=0,w=0,I=0,D=0,F=0;c.sort(gb);for(let T=0,b=c.length;T<b;T++){const B=c[T],Z=B.color,q=B.intensity,z=B.distance,se=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=Z.r*q,f+=Z.g*q,h+=Z.b*q;else if(B.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(B.sh.coefficients[W],q);F++}else if(B.isDirectionalLight){const W=e.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ne=B.shadow,j=t.get(B);j.shadowIntensity=ne.intensity,j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=se,i.directionalShadowMatrix[p]=B.shadow.matrix,A++}i.directional[p]=W,p++}else if(B.isSpotLight){const W=e.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(Z).multiplyScalar(q),W.distance=z,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,i.spot[S]=W;const ne=B.shadow;if(B.map&&(i.spotLightMap[I]=B.map,I++,ne.updateMatrices(B),B.castShadow&&D++),i.spotLightMatrix[S]=ne.matrix,B.castShadow){const j=t.get(B);j.shadowIntensity=ne.intensity,j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,i.spotShadow[S]=j,i.spotShadowMap[S]=se,w++}S++}else if(B.isRectAreaLight){const W=e.get(B);W.color.copy(Z).multiplyScalar(q),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),i.rectArea[m]=W,m++}else if(B.isPointLight){const W=e.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),W.distance=B.distance,W.decay=B.decay,B.castShadow){const ne=B.shadow,j=t.get(B);j.shadowIntensity=ne.intensity,j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,j.shadowCameraNear=ne.camera.near,j.shadowCameraFar=ne.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=se,i.pointShadowMatrix[_]=B.shadow.matrix,M++}i.point[_]=W,_++}else if(B.isHemisphereLight){const W=e.get(B);W.skyColor.copy(B.color).multiplyScalar(q),W.groundColor.copy(B.groundColor).multiplyScalar(q),i.hemi[d]=W,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const H=i.hash;(H.directionalLength!==p||H.pointLength!==_||H.spotLength!==S||H.rectAreaLength!==m||H.hemiLength!==d||H.numDirectionalShadows!==A||H.numPointShadows!==M||H.numSpotShadows!==w||H.numSpotMaps!==I||H.numLightProbes!==F)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+I-D,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=F,H.directionalLength=p,H.pointLength=_,H.spotLength=S,H.rectAreaLength=m,H.hemiLength=d,H.numDirectionalShadows=A,H.numPointShadows=M,H.numSpotShadows=w,H.numSpotMaps=I,H.numLightProbes=F,i.version=xb++)}function l(c,u){let f=0,h=0,p=0,_=0,S=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const M=c[d];if(M.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),f++}else if(M.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const w=i.point[h];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const w=i.hemi[S];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function Zu(n){const e=new _b(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function vb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Zu(n),e.set(r,[a])):s>=o.length?(a=new Zu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bb=`uniform sampler2D shadow_pass;
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
}`;function Mb(n,e,t){let i=new Cd;const r=new ot,s=new ot,o=new Tt,a=new kx({depthPacking:B0}),l=new Vx,c={},u=t.maxTextureSize,f={[Ri]:kt,[kt]:Ri,[Kn]:Kn},h=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Sb,fragmentShader:bb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new fi;_.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new An(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ld;let d=this.type;this.render=function(D,F,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const T=n.getRenderTarget(),b=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(ni),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const q=d!==qn&&this.type===qn,z=d===qn&&this.type!==qn;for(let se=0,W=D.length;se<W;se++){const ne=D[se],j=ne.shadow;if(j===void 0){qe("WebGLShadowMap:",ne,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const de=j.getFrameExtents();if(r.multiply(de),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,j.mapSize.y=s.y)),j.map===null||q===!0||z===!0){const Re=this.type!==qn?{minFilter:on,magFilter:on}:{};j.map!==null&&j.map.dispose(),j.map=new Qi(r.x,r.y,Re),j.map.texture.name=ne.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const me=j.getViewportCount();for(let Re=0;Re<me;Re++){const He=j.getViewport(Re);o.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),Z.viewport(o),j.updateMatrices(ne,Re),i=j.getFrustum(),w(F,H,j.camera,ne,this.type)}j.isPointLightShadow!==!0&&this.type===qn&&A(j,H),j.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,b,B)};function A(D,F){const H=e.update(S);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Qi(r.x,r.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(F,null,H,h,S,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(F,null,H,p,S,null)}function M(D,F,H,T){let b=null;const B=H.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)b=B;else if(b=H.isPointLight===!0?l:a,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=b.uuid,q=F.uuid;let z=c[Z];z===void 0&&(z={},c[Z]=z);let se=z[q];se===void 0&&(se=b.clone(),z[q]=se,F.addEventListener("dispose",I)),b=se}if(b.visible=F.visible,b.wireframe=F.wireframe,T===qn?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:f[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Z=n.properties.get(b);Z.light=H}return b}function w(D,F,H,T,b){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===qn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,D.matrixWorld);const q=e.update(D),z=D.material;if(Array.isArray(z)){const se=q.groups;for(let W=0,ne=se.length;W<ne;W++){const j=se[W],de=z[j.materialIndex];if(de&&de.visible){const me=M(D,de,T,b);D.onBeforeShadow(n,D,F,H,q,me,j),n.renderBufferDirect(H,null,q,me,D,j),D.onAfterShadow(n,D,F,H,q,me,j)}}}else if(z.visible){const se=M(D,z,T,b);D.onBeforeShadow(n,D,F,H,q,se,null),n.renderBufferDirect(H,null,q,se,D,null),D.onAfterShadow(n,D,F,H,q,se,null)}}const Z=D.children;for(let q=0,z=Z.length;q<z;q++)w(Z[q],F,H,T,b)}function I(D){D.target.removeEventListener("dispose",I);for(const H in c){const T=c[H],b=D.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const yb={[ja]:$a,[Ka]:Qa,[Za]:el,[Lr]:Ja,[$a]:ja,[Qa]:Ka,[el]:Za,[Ja]:Lr};function Eb(n,e){function t(){let U=!1;const Me=new Tt;let Se=null;const be=new Tt(0,0,0,0);return{setMask:function(he){Se!==he&&!U&&(n.colorMask(he,he,he,he),Se=he)},setLocked:function(he){U=he},setClear:function(he,ue,De,Xe,xt){xt===!0&&(he*=Xe,ue*=Xe,De*=Xe),Me.set(he,ue,De,Xe),be.equals(Me)===!1&&(n.clearColor(he,ue,De,Xe),be.copy(Me))},reset:function(){U=!1,Se=null,be.set(-1,0,0,0)}}}function i(){let U=!1,Me=!1,Se=null,be=null,he=null;return{setReversed:function(ue){if(Me!==ue){const De=e.get("EXT_clip_control");ue?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Me=ue;const Xe=he;he=null,this.setClear(Xe)}},getReversed:function(){return Me},setTest:function(ue){ue?ce(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(ue){Se!==ue&&!U&&(n.depthMask(ue),Se=ue)},setFunc:function(ue){if(Me&&(ue=yb[ue]),be!==ue){switch(ue){case ja:n.depthFunc(n.NEVER);break;case $a:n.depthFunc(n.ALWAYS);break;case Ka:n.depthFunc(n.LESS);break;case Lr:n.depthFunc(n.LEQUAL);break;case Za:n.depthFunc(n.EQUAL);break;case Ja:n.depthFunc(n.GEQUAL);break;case Qa:n.depthFunc(n.GREATER);break;case el:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=ue}},setLocked:function(ue){U=ue},setClear:function(ue){he!==ue&&(Me&&(ue=1-ue),n.clearDepth(ue),he=ue)},reset:function(){U=!1,Se=null,be=null,he=null,Me=!1}}}function r(){let U=!1,Me=null,Se=null,be=null,he=null,ue=null,De=null,Xe=null,xt=null;return{setTest:function(at){U||(at?ce(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(at){Me!==at&&!U&&(n.stencilMask(at),Me=at)},setFunc:function(at,Cn,_n){(Se!==at||be!==Cn||he!==_n)&&(n.stencilFunc(at,Cn,_n),Se=at,be=Cn,he=_n)},setOp:function(at,Cn,_n){(ue!==at||De!==Cn||Xe!==_n)&&(n.stencilOp(at,Cn,_n),ue=at,De=Cn,Xe=_n)},setLocked:function(at){U=at},setClear:function(at){xt!==at&&(n.clearStencil(at),xt=at)},reset:function(){U=!1,Me=null,Se=null,be=null,he=null,ue=null,De=null,Xe=null,xt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,S=!1,m=null,d=null,A=null,M=null,w=null,I=null,D=null,F=new st(0,0,0),H=0,T=!1,b=null,B=null,Z=null,q=null,z=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=ne>=1):j.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=ne>=2);let de=null,me={};const Re=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),Je=new Tt().fromArray(Re),fe=new Tt().fromArray(He);function et(U,Me,Se,be){const he=new Uint8Array(4),ue=n.createTexture();n.bindTexture(U,ue),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<Se;De++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(Me+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return ue}const oe={};oe[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(n.DEPTH_TEST),o.setFunc(Lr),J(!1),Y(eu),ce(n.CULL_FACE),P(ni);function ce(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Ee(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function ze(U,Me){return f[U]!==Me?(n.bindFramebuffer(U,Me),f[U]=Me,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Me),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function we(U,Me){let Se=p,be=!1;if(U){Se=h.get(Me),Se===void 0&&(Se=[],h.set(Me,Se));const he=U.textures;if(Se.length!==he.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,De=he.length;ue<De;ue++)Se[ue]=n.COLOR_ATTACHMENT0+ue;Se.length=he.length,be=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,be=!0);be&&n.drawBuffers(Se)}function We(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const dt={[Yi]:n.FUNC_ADD,[u0]:n.FUNC_SUBTRACT,[f0]:n.FUNC_REVERSE_SUBTRACT};dt[d0]=n.MIN,dt[h0]=n.MAX;const v={[p0]:n.ZERO,[m0]:n.ONE,[x0]:n.SRC_COLOR,[qa]:n.SRC_ALPHA,[M0]:n.SRC_ALPHA_SATURATE,[S0]:n.DST_COLOR,[_0]:n.DST_ALPHA,[g0]:n.ONE_MINUS_SRC_COLOR,[Ya]:n.ONE_MINUS_SRC_ALPHA,[b0]:n.ONE_MINUS_DST_COLOR,[v0]:n.ONE_MINUS_DST_ALPHA,[y0]:n.CONSTANT_COLOR,[E0]:n.ONE_MINUS_CONSTANT_COLOR,[T0]:n.CONSTANT_ALPHA,[A0]:n.ONE_MINUS_CONSTANT_ALPHA};function P(U,Me,Se,be,he,ue,De,Xe,xt,at){if(U===ni){S===!0&&(Ee(n.BLEND),S=!1);return}if(S===!1&&(ce(n.BLEND),S=!0),U!==c0){if(U!==m||at!==T){if((d!==Yi||w!==Yi)&&(n.blendEquation(n.FUNC_ADD),d=Yi,w=Yi),at)switch(U){case Cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tu:n.blendFunc(n.ONE,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case iu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",U);break}else switch(U){case Cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nu:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iu:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",U);break}A=null,M=null,I=null,D=null,F.set(0,0,0),H=0,m=U,T=at}return}he=he||Me,ue=ue||Se,De=De||be,(Me!==d||he!==w)&&(n.blendEquationSeparate(dt[Me],dt[he]),d=Me,w=he),(Se!==A||be!==M||ue!==I||De!==D)&&(n.blendFuncSeparate(v[Se],v[be],v[ue],v[De]),A=Se,M=be,I=ue,D=De),(Xe.equals(F)===!1||xt!==H)&&(n.blendColor(Xe.r,Xe.g,Xe.b,xt),F.copy(Xe),H=xt),m=U,T=!1}function g(U,Me){U.side===Kn?Ee(n.CULL_FACE):ce(n.CULL_FACE);let Se=U.side===kt;Me&&(Se=!Se),J(Se),U.blending===Cr&&U.transparent===!1?P(ni):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const be=U.stencilWrite;a.setTest(be),be&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),V(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(U){b!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),b=U)}function Y(U){U!==o0?(ce(n.CULL_FACE),U!==B&&(U===eu?n.cullFace(n.BACK):U===a0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),B=U}function $(U){U!==Z&&(W&&n.lineWidth(U),Z=U)}function V(U,Me,Se){U?(ce(n.POLYGON_OFFSET_FILL),(q!==Me||z!==Se)&&(n.polygonOffset(Me,Se),q=Me,z=Se)):Ee(n.POLYGON_OFFSET_FILL)}function re(U){U?ce(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function K(U){U===void 0&&(U=n.TEXTURE0+se-1),de!==U&&(n.activeTexture(U),de=U)}function Q(U,Me,Se){Se===void 0&&(de===null?Se=n.TEXTURE0+se-1:Se=de);let be=me[Se];be===void 0&&(be={type:void 0,texture:void 0},me[Se]=be),(be.type!==U||be.texture!==Me)&&(de!==Se&&(n.activeTexture(Se),de=Se),n.bindTexture(U,Me||oe[U]),be.type=U,be.texture=Me)}function y(){const U=me[de];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function R(){try{n.texSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function C(){try{n.texSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function O(){try{n.compressedTexSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function le(){try{n.compressedTexSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function k(){try{n.texStorage2D(...arguments)}catch(U){U("WebGLState:",U)}}function xe(){try{n.texStorage3D(...arguments)}catch(U){U("WebGLState:",U)}}function _e(){try{n.texImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function ae(){try{n.texImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function pe(U){Je.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Je.copy(U))}function Le(U){fe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),fe.copy(U))}function Ae(U,Me){let Se=c.get(Me);Se===void 0&&(Se=new WeakMap,c.set(Me,Se));let be=Se.get(U);be===void 0&&(be=n.getUniformBlockIndex(Me,U.name),Se.set(U,be))}function ve(U,Me){const be=c.get(Me).get(U);l.get(Me)!==be&&(n.uniformBlockBinding(Me,be,U.__bindingPointIndex),l.set(Me,be))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,me={},f={},h=new WeakMap,p=[],_=null,S=!1,m=null,d=null,A=null,M=null,w=null,I=null,D=null,F=new st(0,0,0),H=0,T=!1,b=null,B=null,Z=null,q=null,z=null,Je.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:Ee,bindFramebuffer:ze,drawBuffers:we,useProgram:We,setBlending:P,setMaterial:g,setFlipSided:J,setCullFace:Y,setLineWidth:$,setPolygonOffset:V,setScissorTest:re,activeTexture:K,bindTexture:Q,unbindTexture:y,compressedTexImage2D:x,compressedTexImage3D:L,texImage2D:_e,texImage3D:ae,updateUBOMapping:Ae,uniformBlockBinding:ve,texStorage2D:k,texStorage3D:xe,texSubImage2D:R,texSubImage3D:C,compressedTexSubImage2D:O,compressedTexSubImage3D:le,scissor:pe,viewport:Le,reset:Oe}}function Tb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,x){return p?new OffscreenCanvas(y,x):Ss("canvas")}function S(y,x,L){let R=1;const C=Q(y);if((C.width>L||C.height>L)&&(R=L/Math.max(C.width,C.height)),R<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const O=Math.floor(R*C.width),le=Math.floor(R*C.height);f===void 0&&(f=_(O,le));const k=x?_(O,le):f;return k.width=O,k.height=le,k.getContext("2d").drawImage(y,0,0,O,le),qe("WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+O+"x"+le+")."),k}else return"data"in y&&qe("WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){n.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(y,x,L,R,C=!1){if(y!==null){if(n[y]!==void 0)return n[y];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let O=x;if(x===n.RED&&(L===n.FLOAT&&(O=n.R32F),L===n.HALF_FLOAT&&(O=n.R16F),L===n.UNSIGNED_BYTE&&(O=n.R8)),x===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(O=n.R8UI),L===n.UNSIGNED_SHORT&&(O=n.R16UI),L===n.UNSIGNED_INT&&(O=n.R32UI),L===n.BYTE&&(O=n.R8I),L===n.SHORT&&(O=n.R16I),L===n.INT&&(O=n.R32I)),x===n.RG&&(L===n.FLOAT&&(O=n.RG32F),L===n.HALF_FLOAT&&(O=n.RG16F),L===n.UNSIGNED_BYTE&&(O=n.RG8)),x===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(O=n.RG8UI),L===n.UNSIGNED_SHORT&&(O=n.RG16UI),L===n.UNSIGNED_INT&&(O=n.RG32UI),L===n.BYTE&&(O=n.RG8I),L===n.SHORT&&(O=n.RG16I),L===n.INT&&(O=n.RG32I)),x===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(O=n.RGB8UI),L===n.UNSIGNED_SHORT&&(O=n.RGB16UI),L===n.UNSIGNED_INT&&(O=n.RGB32UI),L===n.BYTE&&(O=n.RGB8I),L===n.SHORT&&(O=n.RGB16I),L===n.INT&&(O=n.RGB32I)),x===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(O=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(O=n.RGBA16UI),L===n.UNSIGNED_INT&&(O=n.RGBA32UI),L===n.BYTE&&(O=n.RGBA8I),L===n.SHORT&&(O=n.RGBA16I),L===n.INT&&(O=n.RGBA32I)),x===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(O=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(O=n.R11F_G11F_B10F)),x===n.RGBA){const le=C?Mo:it.getTransfer(R);L===n.FLOAT&&(O=n.RGBA32F),L===n.HALF_FLOAT&&(O=n.RGBA16F),L===n.UNSIGNED_BYTE&&(O=le===ct?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(O=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(O=n.RGB5_A1)}return(O===n.R16F||O===n.R32F||O===n.RG16F||O===n.RG32F||O===n.RGBA16F||O===n.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function w(y,x){let L;return y?x===null||x===Ji||x===gs?L=n.DEPTH24_STENCIL8:x===Jn?L=n.DEPTH32F_STENCIL8:x===xs&&(L=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ji||x===gs?L=n.DEPTH_COMPONENT24:x===Jn?L=n.DEPTH_COMPONENT32F:x===xs&&(L=n.DEPTH_COMPONENT16),L}function I(y,x){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==on&&y.minFilter!==xn?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function D(y){const x=y.target;x.removeEventListener("dispose",D),H(x),x.isVideoTexture&&u.delete(x)}function F(y){const x=y.target;x.removeEventListener("dispose",F),b(x)}function H(y){const x=i.get(y);if(x.__webglInit===void 0)return;const L=y.source,R=h.get(L);if(R){const C=R[x.__cacheKey];C.usedTimes--,C.usedTimes===0&&T(y),Object.keys(R).length===0&&h.delete(L)}i.remove(y)}function T(y){const x=i.get(y);n.deleteTexture(x.__webglTexture);const L=y.source,R=h.get(L);delete R[x.__cacheKey],o.memory.textures--}function b(y){const x=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(x.__webglFramebuffer[R]))for(let C=0;C<x.__webglFramebuffer[R].length;C++)n.deleteFramebuffer(x.__webglFramebuffer[R][C]);else n.deleteFramebuffer(x.__webglFramebuffer[R]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[R])}else{if(Array.isArray(x.__webglFramebuffer))for(let R=0;R<x.__webglFramebuffer.length;R++)n.deleteFramebuffer(x.__webglFramebuffer[R]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let R=0;R<x.__webglColorRenderbuffer.length;R++)x.__webglColorRenderbuffer[R]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[R]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const L=y.textures;for(let R=0,C=L.length;R<C;R++){const O=i.get(L[R]);O.__webglTexture&&(n.deleteTexture(O.__webglTexture),o.memory.textures--),i.remove(L[R])}i.remove(y)}let B=0;function Z(){B=0}function q(){const y=B;return y>=r.maxTextures&&qe("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),B+=1,y}function z(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function se(y,x){const L=i.get(y);if(y.isVideoTexture&&re(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&L.__version!==y.version){const R=y.image;if(R===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(L,y,x);return}}else y.isExternalTexture&&(L.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+x)}function W(y,x){const L=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){oe(L,y,x);return}else y.isExternalTexture&&(L.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+x)}function ne(y,x){const L=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){oe(L,y,x);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+x)}function j(y,x){const L=i.get(y);if(y.version>0&&L.__version!==y.version){ce(L,y,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+x)}const de={[il]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[rl]:n.MIRRORED_REPEAT},me={[on]:n.NEAREST,[F0]:n.NEAREST_MIPMAP_NEAREST,[Ns]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[sa]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},Re={[k0]:n.NEVER,[Y0]:n.ALWAYS,[V0]:n.LESS,[_d]:n.LEQUAL,[G0]:n.EQUAL,[q0]:n.GEQUAL,[W0]:n.GREATER,[X0]:n.NOTEQUAL};function He(y,x){if(x.type===Jn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===xn||x.magFilter===sa||x.magFilter===Ns||x.magFilter===$i||x.minFilter===xn||x.minFilter===sa||x.minFilter===Ns||x.minFilter===$i)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,de[x.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,de[x.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,de[x.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,me[x.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,me[x.minFilter]),x.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===on||x.minFilter!==Ns&&x.minFilter!==$i||x.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Je(y,x){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",D));const R=x.source;let C=h.get(R);C===void 0&&(C={},h.set(R,C));const O=z(x);if(O!==y.__cacheKey){C[O]===void 0&&(C[O]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),C[O].usedTimes++;const le=C[y.__cacheKey];le!==void 0&&(C[y.__cacheKey].usedTimes--,le.usedTimes===0&&T(x)),y.__cacheKey=O,y.__webglTexture=C[O].texture}return L}function fe(y,x,L){return Math.floor(Math.floor(y/L)/x)}function et(y,x,L,R){const O=y.updateRanges;if(O.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,L,R,x.data);else{O.sort((ae,pe)=>ae.start-pe.start);let le=0;for(let ae=1;ae<O.length;ae++){const pe=O[le],Le=O[ae],Ae=pe.start+pe.count,ve=fe(Le.start,x.width,4),Oe=fe(pe.start,x.width,4);Le.start<=Ae+1&&ve===Oe&&fe(Le.start+Le.count-1,x.width,4)===ve?pe.count=Math.max(pe.count,Le.start+Le.count-pe.start):(++le,O[le]=Le)}O.length=le+1;const k=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),_e=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ae=0,pe=O.length;ae<pe;ae++){const Le=O[ae],Ae=Math.floor(Le.start/4),ve=Math.ceil(Le.count/4),Oe=Ae%x.width,U=Math.floor(Ae/x.width),Me=ve,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Oe,U,Me,Se,L,R,x.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,k),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function oe(y,x,L){let R=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(R=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(R=n.TEXTURE_3D);const C=Je(y,x),O=x.source;t.bindTexture(R,y.__webglTexture,n.TEXTURE0+L);const le=i.get(O);if(O.version!==le.__version||C===!0){t.activeTexture(n.TEXTURE0+L);const k=it.getPrimaries(it.workingColorSpace),xe=x.colorSpace===yi?null:it.getPrimaries(x.colorSpace),_e=x.colorSpace===yi||k===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ae=S(x.image,!1,r.maxTextureSize);ae=K(x,ae);const pe=s.convert(x.format,x.colorSpace),Le=s.convert(x.type);let Ae=M(x.internalFormat,pe,Le,x.colorSpace,x.isVideoTexture);He(R,x);let ve;const Oe=x.mipmaps,U=x.isVideoTexture!==!0,Me=le.__version===void 0||C===!0,Se=O.dataReady,be=I(x,ae);if(x.isDepthTexture)Ae=w(x.format===vs,x.type),Me&&(U?t.texStorage2D(n.TEXTURE_2D,1,Ae,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ae.width,ae.height,0,pe,Le,null));else if(x.isDataTexture)if(Oe.length>0){U&&Me&&t.texStorage2D(n.TEXTURE_2D,be,Ae,Oe[0].width,Oe[0].height);for(let he=0,ue=Oe.length;he<ue;he++)ve=Oe[he],U?Se&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ve.width,ve.height,pe,Le,ve.data):t.texImage2D(n.TEXTURE_2D,he,Ae,ve.width,ve.height,0,pe,Le,ve.data);x.generateMipmaps=!1}else U?(Me&&t.texStorage2D(n.TEXTURE_2D,be,Ae,ae.width,ae.height),Se&&et(x,ae,pe,Le)):t.texImage2D(n.TEXTURE_2D,0,Ae,ae.width,ae.height,0,pe,Le,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Ae,Oe[0].width,Oe[0].height,ae.depth);for(let he=0,ue=Oe.length;he<ue;he++)if(ve=Oe[he],x.format!==yn)if(pe!==null)if(U){if(Se)if(x.layerUpdates.size>0){const De=Cu(ve.width,ve.height,x.format,x.type);for(const Xe of x.layerUpdates){const xt=ve.data.subarray(Xe*De/ve.data.BYTES_PER_ELEMENT,(Xe+1)*De/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Xe,ve.width,ve.height,1,pe,xt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ve.width,ve.height,ae.depth,pe,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Ae,ve.width,ve.height,ae.depth,0,ve.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ve.width,ve.height,ae.depth,pe,Le,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Ae,ve.width,ve.height,ae.depth,0,pe,Le,ve.data)}else{U&&Me&&t.texStorage2D(n.TEXTURE_2D,be,Ae,Oe[0].width,Oe[0].height);for(let he=0,ue=Oe.length;he<ue;he++)ve=Oe[he],x.format!==yn?pe!==null?U?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,ve.width,ve.height,pe,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Ae,ve.width,ve.height,0,ve.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Se&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ve.width,ve.height,pe,Le,ve.data):t.texImage2D(n.TEXTURE_2D,he,Ae,ve.width,ve.height,0,pe,Le,ve.data)}else if(x.isDataArrayTexture)if(U){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Ae,ae.width,ae.height,ae.depth),Se)if(x.layerUpdates.size>0){const he=Cu(ae.width,ae.height,x.format,x.type);for(const ue of x.layerUpdates){const De=ae.data.subarray(ue*he/ae.data.BYTES_PER_ELEMENT,(ue+1)*he/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,ae.width,ae.height,1,pe,Le,De)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,pe,Le,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ae.width,ae.height,ae.depth,0,pe,Le,ae.data);else if(x.isData3DTexture)U?(Me&&t.texStorage3D(n.TEXTURE_3D,be,Ae,ae.width,ae.height,ae.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,pe,Le,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ae.width,ae.height,ae.depth,0,pe,Le,ae.data);else if(x.isFramebufferTexture){if(Me)if(U)t.texStorage2D(n.TEXTURE_2D,be,Ae,ae.width,ae.height);else{let he=ae.width,ue=ae.height;for(let De=0;De<be;De++)t.texImage2D(n.TEXTURE_2D,De,Ae,he,ue,0,pe,Le,null),he>>=1,ue>>=1}}else if(Oe.length>0){if(U&&Me){const he=Q(Oe[0]);t.texStorage2D(n.TEXTURE_2D,be,Ae,he.width,he.height)}for(let he=0,ue=Oe.length;he<ue;he++)ve=Oe[he],U?Se&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,pe,Le,ve):t.texImage2D(n.TEXTURE_2D,he,Ae,pe,Le,ve);x.generateMipmaps=!1}else if(U){if(Me){const he=Q(ae);t.texStorage2D(n.TEXTURE_2D,be,Ae,he.width,he.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Le,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ae,pe,Le,ae);m(x)&&d(R),le.__version=O.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function ce(y,x,L){if(x.image.length!==6)return;const R=Je(y,x),C=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+L);const O=i.get(C);if(C.version!==O.__version||R===!0){t.activeTexture(n.TEXTURE0+L);const le=it.getPrimaries(it.workingColorSpace),k=x.colorSpace===yi?null:it.getPrimaries(x.colorSpace),xe=x.colorSpace===yi||le===k?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const _e=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let ue=0;ue<6;ue++)!_e&&!ae?pe[ue]=S(x.image[ue],!0,r.maxCubemapSize):pe[ue]=ae?x.image[ue].image:x.image[ue],pe[ue]=K(x,pe[ue]);const Le=pe[0],Ae=s.convert(x.format,x.colorSpace),ve=s.convert(x.type),Oe=M(x.internalFormat,Ae,ve,x.colorSpace),U=x.isVideoTexture!==!0,Me=O.__version===void 0||R===!0,Se=C.dataReady;let be=I(x,Le);He(n.TEXTURE_CUBE_MAP,x);let he;if(_e){U&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Oe,Le.width,Le.height);for(let ue=0;ue<6;ue++){he=pe[ue].mipmaps;for(let De=0;De<he.length;De++){const Xe=he[De];x.format!==yn?Ae!==null?U?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,0,0,Xe.width,Xe.height,Ae,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,Oe,Xe.width,Xe.height,0,Xe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,0,0,Xe.width,Xe.height,Ae,ve,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,Oe,Xe.width,Xe.height,0,Ae,ve,Xe.data)}}}else{if(he=x.mipmaps,U&&Me){he.length>0&&be++;const ue=Q(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Oe,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ae){U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,pe[ue].width,pe[ue].height,Ae,ve,pe[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Oe,pe[ue].width,pe[ue].height,0,Ae,ve,pe[ue].data);for(let De=0;De<he.length;De++){const xt=he[De].image[ue].image;U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,0,0,xt.width,xt.height,Ae,ve,xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,Oe,xt.width,xt.height,0,Ae,ve,xt.data)}}else{U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ae,ve,pe[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Oe,Ae,ve,pe[ue]);for(let De=0;De<he.length;De++){const Xe=he[De];U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,0,0,Ae,ve,Xe.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,Oe,Ae,ve,Xe.image[ue])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),O.__version=C.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Ee(y,x,L,R,C,O){const le=s.convert(L.format,L.colorSpace),k=s.convert(L.type),xe=M(L.internalFormat,le,k,L.colorSpace),_e=i.get(x),ae=i.get(L);if(ae.__renderTarget=x,!_e.__hasExternalTextures){const pe=Math.max(1,x.width>>O),Le=Math.max(1,x.height>>O);C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?t.texImage3D(C,O,xe,pe,Le,x.depth,0,le,k,null):t.texImage2D(C,O,xe,pe,Le,0,le,k,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),V(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,R,C,ae.__webglTexture,0,$(x)):(C===n.TEXTURE_2D||C>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&C<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,R,C,ae.__webglTexture,O),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(y,x,L){if(n.bindRenderbuffer(n.RENDERBUFFER,y),x.depthBuffer){const R=x.depthTexture,C=R&&R.isDepthTexture?R.type:null,O=w(x.stencilBuffer,C),le=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=$(x);V(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k,O,x.width,x.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,k,O,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,O,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,y)}else{const R=x.textures;for(let C=0;C<R.length;C++){const O=R[C],le=s.convert(O.format,O.colorSpace),k=s.convert(O.type),xe=M(O.internalFormat,le,k,O.colorSpace),_e=$(x);L&&V(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,xe,x.width,x.height):V(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,xe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,xe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const R=i.get(x.depthTexture);R.__renderTarget=x,(!R.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),se(x.depthTexture,0);const C=R.__webglTexture,O=$(x);if(x.depthTexture.format===_s)V(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,C,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,C,0);else if(x.depthTexture.format===vs)V(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,C,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,C,0);else throw new Error("Unknown depthTexture format")}function We(y){const x=i.get(y),L=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const R=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),R){const C=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,R.removeEventListener("dispose",C)};R.addEventListener("dispose",C),x.__depthDisposeCallback=C}x.__boundDepthTexture=R}if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const R=y.texture.mipmaps;R&&R.length>0?we(x.__webglFramebuffer[0],y):we(x.__webglFramebuffer,y)}else if(L){x.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[R]),x.__webglDepthbuffer[R]===void 0)x.__webglDepthbuffer[R]=n.createRenderbuffer(),ze(x.__webglDepthbuffer[R],y,!1);else{const C=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=x.__webglDepthbuffer[R];n.bindRenderbuffer(n.RENDERBUFFER,O),n.framebufferRenderbuffer(n.FRAMEBUFFER,C,n.RENDERBUFFER,O)}}else{const R=y.texture.mipmaps;if(R&&R.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ze(x.__webglDepthbuffer,y,!1);else{const C=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,O),n.framebufferRenderbuffer(n.FRAMEBUFFER,C,n.RENDERBUFFER,O)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(y,x,L){const R=i.get(y);x!==void 0&&Ee(R.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&We(y)}function v(y){const x=y.texture,L=i.get(y),R=i.get(x);y.addEventListener("dispose",F);const C=y.textures,O=y.isWebGLCubeRenderTarget===!0,le=C.length>1;if(le||(R.__webglTexture===void 0&&(R.__webglTexture=n.createTexture()),R.__version=x.version,o.memory.textures++),O){L.__webglFramebuffer=[];for(let k=0;k<6;k++)if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[k]=[];for(let xe=0;xe<x.mipmaps.length;xe++)L.__webglFramebuffer[k][xe]=n.createFramebuffer()}else L.__webglFramebuffer[k]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let k=0;k<x.mipmaps.length;k++)L.__webglFramebuffer[k]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(le)for(let k=0,xe=C.length;k<xe;k++){const _e=i.get(C[k]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&V(y)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let k=0;k<C.length;k++){const xe=C[k];L.__webglColorRenderbuffer[k]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[k]);const _e=s.convert(xe.format,xe.colorSpace),ae=s.convert(xe.type),pe=M(xe.internalFormat,_e,ae,xe.colorSpace,y.isXRRenderTarget===!0),Le=$(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,pe,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.RENDERBUFFER,L.__webglColorRenderbuffer[k])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(L.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(O){t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture),He(n.TEXTURE_CUBE_MAP,x);for(let k=0;k<6;k++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)Ee(L.__webglFramebuffer[k][xe],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,xe);else Ee(L.__webglFramebuffer[k],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);m(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let k=0,xe=C.length;k<xe;k++){const _e=C[k],ae=i.get(_e);let pe=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(pe=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ae.__webglTexture),He(pe,_e),Ee(L.__webglFramebuffer,y,_e,n.COLOR_ATTACHMENT0+k,pe,0),m(_e)&&d(pe)}t.unbindTexture()}else{let k=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(k=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(k,R.__webglTexture),He(k,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)Ee(L.__webglFramebuffer[xe],y,x,n.COLOR_ATTACHMENT0,k,xe);else Ee(L.__webglFramebuffer,y,x,n.COLOR_ATTACHMENT0,k,0);m(x)&&d(k),t.unbindTexture()}y.depthBuffer&&We(y)}function P(y){const x=y.textures;for(let L=0,R=x.length;L<R;L++){const C=x[L];if(m(C)){const O=A(y),le=i.get(C).__webglTexture;t.bindTexture(O,le),d(O),t.unbindTexture()}}}const g=[],J=[];function Y(y){if(y.samples>0){if(V(y)===!1){const x=y.textures,L=y.width,R=y.height;let C=n.COLOR_BUFFER_BIT;const O=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(y),k=x.length>1;if(k)for(let _e=0;_e<x.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const xe=y.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(C|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(C|=n.STENCIL_BUFFER_BIT)),k){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[_e]);const ae=i.get(x[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,L,R,0,0,L,R,C,n.NEAREST),l===!0&&(g.length=0,J.length=0,g.push(n.COLOR_ATTACHMENT0+_e),y.depthBuffer&&y.resolveDepthBuffer===!1&&(g.push(O),J.push(O),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,J)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,g))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),k)for(let _e=0;_e<x.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,le.__webglColorRenderbuffer[_e]);const ae=i.get(x[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const x=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function $(y){return Math.min(r.maxSamples,y.samples)}function V(y){const x=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function re(y){const x=o.render.frame;u.get(y)!==x&&(u.set(y,x),y.update())}function K(y,x){const L=y.colorSpace,R=y.format,C=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==Pi&&L!==yi&&(it.getTransfer(L)===ct?(R!==yn||C!==ai)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",L)),x}function Q(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Z,this.setTexture2D=se,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=j,this.rebindTextures=dt,this.setupRenderTarget=v,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=V}function Ab(n,e){function t(i,r=yi){let s;const o=it.getTransfer(r);if(i===ai)return n.UNSIGNED_BYTE;if(i===tc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===fd)return n.BYTE;if(i===dd)return n.SHORT;if(i===xs)return n.UNSIGNED_SHORT;if(i===ec)return n.INT;if(i===Ji)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===Or)return n.HALF_FLOAT;if(i===md)return n.ALPHA;if(i===xd)return n.RGB;if(i===yn)return n.RGBA;if(i===_s)return n.DEPTH_COMPONENT;if(i===vs)return n.DEPTH_STENCIL;if(i===gd)return n.RED;if(i===ic)return n.RED_INTEGER;if(i===rc)return n.RG;if(i===sc)return n.RG_INTEGER;if(i===oc)return n.RGBA_INTEGER;if(i===ao||i===lo||i===co||i===uo)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sl||i===ol||i===al||i===ll)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cl||i===ul||i===fl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===cl||i===ul)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dl||i===hl||i===pl||i===ml||i===xl||i===gl||i===_l||i===vl||i===Sl||i===bl||i===Ml||i===yl||i===El||i===Tl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===dl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ml)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_l)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ml)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===El)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===wl||i===Cl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Al)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rl||i===Pl||i===Dl||i===Il)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Il)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cb=`
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

}`;class Rb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Pd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ci({vertexShader:wb,fragmentShader:Cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new An(new Go(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pb extends Br{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new Rb,d={},A=t.getContextAttributes();let M=null,w=null;const I=[],D=[],F=new ot;let H=null;const T=new pn;T.viewport=new Tt;const b=new pn;b.viewport=new Tt;const B=[T,b],Z=new jx;let q=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ce=I[oe];return ce===void 0&&(ce=new Aa,I[oe]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(oe){let ce=I[oe];return ce===void 0&&(ce=new Aa,I[oe]=ce),ce.getGripSpace()},this.getHand=function(oe){let ce=I[oe];return ce===void 0&&(ce=new Aa,I[oe]=ce),ce.getHandSpace()};function se(oe){const ce=D.indexOf(oe.inputSource);if(ce===-1)return;const Ee=I[ce];Ee!==void 0&&(Ee.update(oe.inputSource,oe.frame,c||o),Ee.dispatchEvent({type:oe.type,data:oe.inputSource}))}function W(){r.removeEventListener("select",se),r.removeEventListener("selectstart",se),r.removeEventListener("selectend",se),r.removeEventListener("squeeze",se),r.removeEventListener("squeezestart",se),r.removeEventListener("squeezeend",se),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ne);for(let oe=0;oe<I.length;oe++){const ce=D[oe];ce!==null&&(D[oe]=null,I[oe].disconnect(ce))}q=null,z=null,m.reset();for(const oe in d)delete d[oe];e.setRenderTarget(M),p=null,h=null,f=null,r=null,w=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(H),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",se),r.addEventListener("selectstart",se),r.addEventListener("selectend",se),r.addEventListener("squeeze",se),r.addEventListener("squeezestart",se),r.addEventListener("squeezeend",se),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ne),A.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(F),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ze=null,we=null;A.depth&&(we=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=A.stencil?vs:_s,ze=A.stencil?gs:Ji);const We={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(We),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Qi(h.textureWidth,h.textureHeight,{format:yn,type:ai,depthTexture:new Rd(h.textureWidth,h.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ee={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Qi(p.framebufferWidth,p.framebufferHeight,{format:yn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(oe){for(let ce=0;ce<oe.removed.length;ce++){const Ee=oe.removed[ce],ze=D.indexOf(Ee);ze>=0&&(D[ze]=null,I[ze].disconnect(Ee))}for(let ce=0;ce<oe.added.length;ce++){const Ee=oe.added[ce];let ze=D.indexOf(Ee);if(ze===-1){for(let We=0;We<I.length;We++)if(We>=D.length){D.push(Ee),ze=We;break}else if(D[We]===null){D[We]=Ee,ze=We;break}if(ze===-1)break}const we=I[ze];we&&we.connect(Ee)}}const j=new te,de=new te;function me(oe,ce,Ee){j.setFromMatrixPosition(ce.matrixWorld),de.setFromMatrixPosition(Ee.matrixWorld);const ze=j.distanceTo(de),we=ce.projectionMatrix.elements,We=Ee.projectionMatrix.elements,dt=we[14]/(we[10]-1),v=we[14]/(we[10]+1),P=(we[9]+1)/we[5],g=(we[9]-1)/we[5],J=(we[8]-1)/we[0],Y=(We[8]+1)/We[0],$=dt*J,V=dt*Y,re=ze/(-J+Y),K=re*-J;if(ce.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(K),oe.translateZ(re),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),we[10]===-1)oe.projectionMatrix.copy(ce.projectionMatrix),oe.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Q=dt+re,y=v+re,x=$-K,L=V+(ze-K),R=P*v/y*Q,C=g*v/y*Q;oe.projectionMatrix.makePerspective(x,L,R,C,Q,y),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Re(oe,ce){ce===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ce.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let ce=oe.near,Ee=oe.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),Z.near=b.near=T.near=ce,Z.far=b.far=T.far=Ee,(q!==Z.near||z!==Z.far)&&(r.updateRenderState({depthNear:Z.near,depthFar:Z.far}),q=Z.near,z=Z.far),Z.layers.mask=oe.layers.mask|6,T.layers.mask=Z.layers.mask&3,b.layers.mask=Z.layers.mask&5;const ze=oe.parent,we=Z.cameras;Re(Z,ze);for(let We=0;We<we.length;We++)Re(we[We],ze);we.length===2?me(Z,T,b):Z.projectionMatrix.copy(T.projectionMatrix),He(oe,Z,ze)};function He(oe,ce,Ee){Ee===null?oe.matrix.copy(ce.matrixWorld):(oe.matrix.copy(Ee.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ce.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ce.projectionMatrix),oe.projectionMatrixInverse.copy(ce.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Ms*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(oe){l=oe,h!==null&&(h.fixedFoveation=oe),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=oe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Z)},this.getCameraTexture=function(oe){return d[oe]};let Je=null;function fe(oe,ce){if(u=ce.getViewerPose(c||o),_=ce,u!==null){const Ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let ze=!1;Ee.length!==Z.cameras.length&&(Z.cameras.length=0,ze=!0);for(let v=0;v<Ee.length;v++){const P=Ee[v];let g=null;if(p!==null)g=p.getViewport(P);else{const Y=f.getViewSubImage(h,P);g=Y.viewport,v===0&&(e.setRenderTargetTextures(w,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(w))}let J=B[v];J===void 0&&(J=new pn,J.layers.enable(v),J.viewport=new Tt,B[v]=J),J.matrix.fromArray(P.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(P.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(g.x,g.y,g.width,g.height),v===0&&(Z.matrix.copy(J.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),ze===!0&&Z.cameras.push(J)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const v=f.getDepthInformation(Ee[0]);v&&v.isValid&&v.texture&&m.init(v,r.renderState)}if(we&&we.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let v=0;v<Ee.length;v++){const P=Ee[v].camera;if(P){let g=d[P];g||(g=new Pd,d[P]=g);const J=f.getCameraImage(P);g.sourceTexture=J}}}}for(let Ee=0;Ee<I.length;Ee++){const ze=D[Ee],we=I[Ee];ze!==null&&we!==void 0&&we.update(ze,ce,c||o)}Je&&Je(oe,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const et=new Dd;et.setAnimationLoop(fe),this.setAnimationLoop=function(oe){Je=oe},this.dispose=function(){}}}const Gi=new li,Db=new wt;function Ib(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Td(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,M,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,w)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),M=A.envMap,w=A.envMapRotation;M&&(m.envMap.value=M,Gi.copy(w),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(Gi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Lb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,M){const w=M.program;i.uniformBlockBinding(A,w)}function c(A,M){let w=r[A.id];w===void 0&&(_(A),w=u(A),r[A.id]=w,A.addEventListener("dispose",m));const I=M.program;i.updateUBOMapping(A,I);const D=e.render.frame;s[A.id]!==D&&(h(A),s[A.id]=D)}function u(A){const M=f();A.__bindingPointIndex=M;const w=n.createBuffer(),I=A.__size,D=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,I,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,w),w}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const M=r[A.id],w=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let D=0,F=w.length;D<F;D++){const H=Array.isArray(w[D])?w[D]:[w[D]];for(let T=0,b=H.length;T<b;T++){const B=H[T];if(p(B,D,T,I)===!0){const Z=B.__offset,q=Array.isArray(B.value)?B.value:[B.value];let z=0;for(let se=0;se<q.length;se++){const W=q[se],ne=S(W);typeof W=="number"||typeof W=="boolean"?(B.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,Z+z,B.__data)):W.isMatrix3?(B.__data[0]=W.elements[0],B.__data[1]=W.elements[1],B.__data[2]=W.elements[2],B.__data[3]=0,B.__data[4]=W.elements[3],B.__data[5]=W.elements[4],B.__data[6]=W.elements[5],B.__data[7]=0,B.__data[8]=W.elements[6],B.__data[9]=W.elements[7],B.__data[10]=W.elements[8],B.__data[11]=0):(W.toArray(B.__data,z),z+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,M,w,I){const D=A.value,F=M+"_"+w;if(I[F]===void 0)return typeof D=="number"||typeof D=="boolean"?I[F]=D:I[F]=D.clone(),!0;{const H=I[F];if(typeof D=="number"||typeof D=="boolean"){if(H!==D)return I[F]=D,!0}else if(H.equals(D)===!1)return H.copy(D),!0}return!1}function _(A){const M=A.uniforms;let w=0;const I=16;for(let F=0,H=M.length;F<H;F++){const T=Array.isArray(M[F])?M[F]:[M[F]];for(let b=0,B=T.length;b<B;b++){const Z=T[b],q=Array.isArray(Z.value)?Z.value:[Z.value];for(let z=0,se=q.length;z<se;z++){const W=q[z],ne=S(W),j=w%I,de=j%ne.boundary,me=j+de;w+=de,me!==0&&I-me<ne.storage&&(w+=I-me),Z.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=w,w+=ne.storage}}}const D=w%I;return D>0&&(w+=I-D),A.__size=w,A.__cache={},this}function S(A){const M={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=48,M.storage=48):A.isMatrix4?(M.boundary=64,M.storage=64):A.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",A),M}function m(A){const M=A.target;M.removeEventListener("dispose",m);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const Ub=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Xn=null;function Nb(){return Xn===null&&(Xn=new Ox(Ub,32,32,rc,Or),Xn.minFilter=xn,Xn.magFilter=xn,Xn.wrapS=Zn,Xn.wrapT=Zn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}class Fb{constructor(e={}){const{canvas:t=j0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Set([oc,sc,ic]),S=new Set([ai,Ji,xs,gs,tc,nc]),m=new Uint32Array(4),d=new Int32Array(4);let A=null,M=null;const w=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let F=!1;this._outputColorSpace=hn;let H=0,T=0,b=null,B=-1,Z=null;const q=new Tt,z=new Tt;let se=null;const W=new st(0);let ne=0,j=t.width,de=t.height,me=1,Re=null,He=null;const Je=new Tt(0,0,j,de),fe=new Tt(0,0,j,de);let et=!1;const oe=new Cd;let ce=!1,Ee=!1;const ze=new wt,we=new te,We=new Tt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let v=!1;function P(){return b===null?me:1}let g=i;function J(E,G){return t.getContext(E,G)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ql}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",De,!1),g===null){const G="webgl2";if(g=J(G,E),g===null)throw J(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw E("WebGLRenderer: "+E.message),E}let Y,$,V,re,K,Q,y,x,L,R,C,O,le,k,xe,_e,ae,pe,Le,Ae,ve,Oe,U,Me;function Se(){Y=new Wv(g),Y.init(),Oe=new Ab(g,Y),$=new Nv(g,Y,e,Oe),V=new Eb(g,Y),$.reversedDepthBuffer&&h&&V.buffers.depth.setReversed(!0),re=new Yv(g),K=new fb,Q=new Tb(g,Y,V,K,$,Oe,re),y=new Ov(D),x=new Gv(D),L=new Zx(g),U=new Lv(g,L),R=new Xv(g,L,re,U),C=new $v(g,R,L,re),Le=new jv(g,$,Q),_e=new Fv(K),O=new ub(D,y,x,Y,$,U,_e),le=new Ib(D,K),k=new hb,xe=new vb(Y),pe=new Iv(D,y,x,V,C,p,l),ae=new Mb(D,C,$),Me=new Lb(g,re,$,V),Ae=new Uv(g,Y,re),ve=new qv(g,Y,re),re.programs=O.programs,D.capabilities=$,D.extensions=Y,D.properties=K,D.renderLists=k,D.shadowMap=ae,D.state=V,D.info=re}Se();const be=new Pb(D,g);this.xr=be,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const E=Y.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Y.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(E){E!==void 0&&(me=E,this.setSize(j,de,!1))},this.getSize=function(E){return E.set(j,de)},this.setSize=function(E,G,ee=!0){if(be.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,de=G,t.width=Math.floor(E*me),t.height=Math.floor(G*me),ee===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(j*me,de*me).floor()},this.setDrawingBufferSize=function(E,G,ee){j=E,de=G,me=ee,t.width=Math.floor(E*ee),t.height=Math.floor(G*ee),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(q)},this.getViewport=function(E){return E.copy(Je)},this.setViewport=function(E,G,ee,ie){E.isVector4?Je.set(E.x,E.y,E.z,E.w):Je.set(E,G,ee,ie),V.viewport(q.copy(Je).multiplyScalar(me).round())},this.getScissor=function(E){return E.copy(fe)},this.setScissor=function(E,G,ee,ie){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,G,ee,ie),V.scissor(z.copy(fe).multiplyScalar(me).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(E){V.setScissorTest(et=E)},this.setOpaqueSort=function(E){Re=E},this.setTransparentSort=function(E){He=E},this.getClearColor=function(E){return E.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,ee=!0){let ie=0;if(E){let X=!1;if(b!==null){const ge=b.texture.format;X=_.has(ge)}if(X){const ge=b.texture.type,Te=S.has(ge),Ie=pe.getClearColor(),Ce=pe.getClearAlpha(),ke=Ie.r,Ge=Ie.g,Fe=Ie.b;Te?(m[0]=ke,m[1]=Ge,m[2]=Fe,m[3]=Ce,g.clearBufferuiv(g.COLOR,0,m)):(d[0]=ke,d[1]=Ge,d[2]=Fe,d[3]=Ce,g.clearBufferiv(g.COLOR,0,d))}else ie|=g.COLOR_BUFFER_BIT}G&&(ie|=g.DEPTH_BUFFER_BIT),ee&&(ie|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",De,!1),pe.dispose(),k.dispose(),xe.dispose(),K.dispose(),y.dispose(),x.dispose(),C.dispose(),U.dispose(),Me.dispose(),O.dispose(),be.dispose(),be.removeEventListener("sessionstart",dc),be.removeEventListener("sessionend",hc),Ui.stop()};function he(E){E.preventDefault(),lu("WebGLRenderer: Context Lost."),F=!0}function ue(){lu("WebGLRenderer: Context Restored."),F=!1;const E=re.autoReset,G=ae.enabled,ee=ae.autoUpdate,ie=ae.needsUpdate,X=ae.type;Se(),re.autoReset=E,ae.enabled=G,ae.autoUpdate=ee,ae.needsUpdate=ie,ae.type=X}function De(E){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xe(E){const G=E.target;G.removeEventListener("dispose",Xe),xt(G)}function xt(E){at(E),K.remove(E)}function at(E){const G=K.get(E).programs;G!==void 0&&(G.forEach(function(ee){O.releaseProgram(ee)}),E.isShaderMaterial&&O.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,ee,ie,X,ge){G===null&&(G=dt);const Te=X.isMesh&&X.matrixWorld.determinant()<0,Ie=zd(E,G,ee,ie,X);V.setMaterial(ie,Te);let Ce=ee.index,ke=1;if(ie.wireframe===!0){if(Ce=R.getWireframeAttribute(ee),Ce===void 0)return;ke=2}const Ge=ee.drawRange,Fe=ee.attributes.position;let Qe=Ge.start*ke,lt=(Ge.start+Ge.count)*ke;ge!==null&&(Qe=Math.max(Qe,ge.start*ke),lt=Math.min(lt,(ge.start+ge.count)*ke)),Ce!==null?(Qe=Math.max(Qe,0),lt=Math.min(lt,Ce.count)):Fe!=null&&(Qe=Math.max(Qe,0),lt=Math.min(lt,Fe.count));const Mt=lt-Qe;if(Mt<0||Mt===1/0)return;U.setup(X,ie,Ie,ee,Ce);let yt,ut=Ae;if(Ce!==null&&(yt=L.get(Ce),ut=ve,ut.setIndex(yt)),X.isMesh)ie.wireframe===!0?(V.setLineWidth(ie.wireframeLinewidth*P()),ut.setMode(g.LINES)):ut.setMode(g.TRIANGLES);else if(X.isLine){let Be=ie.linewidth;Be===void 0&&(Be=1),V.setLineWidth(Be*P()),X.isLineSegments?ut.setMode(g.LINES):X.isLineLoop?ut.setMode(g.LINE_LOOP):ut.setMode(g.LINE_STRIP)}else X.isPoints?ut.setMode(g.POINTS):X.isSprite&&ut.setMode(g.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)bs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))ut.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Be=X._multiDrawStarts,vt=X._multiDrawCounts,tt=X._multiDrawCount,Jt=Ce?L.get(Ce).bytesPerElement:1,tr=K.get(ie).currentProgram.getUniforms();for(let Qt=0;Qt<tt;Qt++)tr.setValue(g,"_gl_DrawID",Qt),ut.render(Be[Qt]/Jt,vt[Qt])}else if(X.isInstancedMesh)ut.renderInstances(Qe,Mt,X.count);else if(ee.isInstancedBufferGeometry){const Be=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,vt=Math.min(ee.instanceCount,Be);ut.renderInstances(Qe,Mt,vt)}else ut.render(Qe,Mt)};function Cn(E,G,ee){E.transparent===!0&&E.side===Kn&&E.forceSinglePass===!1?(E.side=kt,E.needsUpdate=!0,Ps(E,G,ee),E.side=Ri,E.needsUpdate=!0,Ps(E,G,ee),E.side=Kn):Ps(E,G,ee)}this.compile=function(E,G,ee=null){ee===null&&(ee=E),M=xe.get(ee),M.init(G),I.push(M),ee.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),E!==ee&&E.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),M.setupLights();const ie=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let Te=0;Te<ge.length;Te++){const Ie=ge[Te];Cn(Ie,ee,X),ie.add(Ie)}else Cn(ge,ee,X),ie.add(ge)}),M=I.pop(),ie},this.compileAsync=function(E,G,ee=null){const ie=this.compile(E,G,ee);return new Promise(X=>{function ge(){if(ie.forEach(function(Te){K.get(Te).currentProgram.isReady()&&ie.delete(Te)}),ie.size===0){X(E);return}setTimeout(ge,10)}Y.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let _n=null;function Bd(E){_n&&_n(E)}function dc(){Ui.stop()}function hc(){Ui.start()}const Ui=new Dd;Ui.setAnimationLoop(Bd),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(E){_n=E,be.setAnimationLoop(E),E===null?Ui.stop():Ui.start()},be.addEventListener("sessionstart",dc),be.addEventListener("sessionend",hc),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(G),G=be.getCamera()),E.isScene===!0&&E.onBeforeRender(D,E,G,b),M=xe.get(E,I.length),M.init(G),I.push(M),ze.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),oe.setFromProjectionMatrix(ze,Un,G.reversedDepth),Ee=this.localClippingEnabled,ce=_e.init(this.clippingPlanes,Ee),A=k.get(E,w.length),A.init(),w.push(A),be.enabled===!0&&be.isPresenting===!0){const ge=D.xr.getDepthSensingMesh();ge!==null&&qo(ge,G,-1/0,D.sortObjects)}qo(E,G,0,D.sortObjects),A.finish(),D.sortObjects===!0&&A.sort(Re,He),v=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,v&&pe.addToRenderList(A,E),this.info.render.frame++,ce===!0&&_e.beginShadows();const ee=M.state.shadowsArray;ae.render(ee,E,G),ce===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=A.opaque,X=A.transmissive;if(M.setupLights(),G.isArrayCamera){const ge=G.cameras;if(X.length>0)for(let Te=0,Ie=ge.length;Te<Ie;Te++){const Ce=ge[Te];mc(ie,X,E,Ce)}v&&pe.render(E);for(let Te=0,Ie=ge.length;Te<Ie;Te++){const Ce=ge[Te];pc(A,E,Ce,Ce.viewport)}}else X.length>0&&mc(ie,X,E,G),v&&pe.render(E),pc(A,E,G);b!==null&&T===0&&(Q.updateMultisampleRenderTarget(b),Q.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(D,E,G),U.resetDefaultState(),B=-1,Z=null,I.pop(),I.length>0?(M=I[I.length-1],ce===!0&&_e.setGlobalState(D.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?A=w[w.length-1]:A=null};function qo(E,G,ee,ie){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)ee=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||oe.intersectsSprite(E)){ie&&We.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ze);const Te=C.update(E),Ie=E.material;Ie.visible&&A.push(E,Te,Ie,ee,We.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||oe.intersectsObject(E))){const Te=C.update(E),Ie=E.material;if(ie&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),We.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),We.copy(Te.boundingSphere.center)),We.applyMatrix4(E.matrixWorld).applyMatrix4(ze)),Array.isArray(Ie)){const Ce=Te.groups;for(let ke=0,Ge=Ce.length;ke<Ge;ke++){const Fe=Ce[ke],Qe=Ie[Fe.materialIndex];Qe&&Qe.visible&&A.push(E,Te,Qe,ee,We.z,Fe)}}else Ie.visible&&A.push(E,Te,Ie,ee,We.z,null)}}const ge=E.children;for(let Te=0,Ie=ge.length;Te<Ie;Te++)qo(ge[Te],G,ee,ie)}function pc(E,G,ee,ie){const{opaque:X,transmissive:ge,transparent:Te}=E;M.setupLightsView(ee),ce===!0&&_e.setGlobalState(D.clippingPlanes,ee),ie&&V.viewport(q.copy(ie)),X.length>0&&Rs(X,G,ee),ge.length>0&&Rs(ge,G,ee),Te.length>0&&Rs(Te,G,ee),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function mc(E,G,ee,ie){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[ie.id]===void 0&&(M.state.transmissionRenderTarget[ie.id]=new Qi(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?Or:ai,minFilter:$i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ge=M.state.transmissionRenderTarget[ie.id],Te=ie.viewport||q;ge.setSize(Te.z*D.transmissionResolutionScale,Te.w*D.transmissionResolutionScale);const Ie=D.getRenderTarget(),Ce=D.getActiveCubeFace(),ke=D.getActiveMipmapLevel();D.setRenderTarget(ge),D.getClearColor(W),ne=D.getClearAlpha(),ne<1&&D.setClearColor(16777215,.5),D.clear(),v&&pe.render(ee);const Ge=D.toneMapping;D.toneMapping=Ai;const Fe=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),M.setupLightsView(ie),ce===!0&&_e.setGlobalState(D.clippingPlanes,ie),Rs(E,ee,ie),Q.updateMultisampleRenderTarget(ge),Q.updateRenderTargetMipmap(ge),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let lt=0,Mt=G.length;lt<Mt;lt++){const yt=G[lt],{object:ut,geometry:Be,material:vt,group:tt}=yt;if(vt.side===Kn&&ut.layers.test(ie.layers)){const Jt=vt.side;vt.side=kt,vt.needsUpdate=!0,xc(ut,ee,ie,Be,vt,tt),vt.side=Jt,vt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Q.updateMultisampleRenderTarget(ge),Q.updateRenderTargetMipmap(ge))}D.setRenderTarget(Ie,Ce,ke),D.setClearColor(W,ne),Fe!==void 0&&(ie.viewport=Fe),D.toneMapping=Ge}function Rs(E,G,ee){const ie=G.isScene===!0?G.overrideMaterial:null;for(let X=0,ge=E.length;X<ge;X++){const Te=E[X],{object:Ie,geometry:Ce,group:ke}=Te;let Ge=Te.material;Ge.allowOverride===!0&&ie!==null&&(Ge=ie),Ie.layers.test(ee.layers)&&xc(Ie,G,ee,Ce,Ge,ke)}}function xc(E,G,ee,ie,X,ge){E.onBeforeRender(D,G,ee,ie,X,ge),E.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(D,G,ee,ie,E,ge),X.transparent===!0&&X.side===Kn&&X.forceSinglePass===!1?(X.side=kt,X.needsUpdate=!0,D.renderBufferDirect(ee,G,ie,X,E,ge),X.side=Ri,X.needsUpdate=!0,D.renderBufferDirect(ee,G,ie,X,E,ge),X.side=Kn):D.renderBufferDirect(ee,G,ie,X,E,ge),E.onAfterRender(D,G,ee,ie,X,ge)}function Ps(E,G,ee){G.isScene!==!0&&(G=dt);const ie=K.get(E),X=M.state.lights,ge=M.state.shadowsArray,Te=X.state.version,Ie=O.getParameters(E,X.state,ge,G,ee),Ce=O.getProgramCacheKey(Ie);let ke=ie.programs;ie.environment=E.isMeshStandardMaterial?G.environment:null,ie.fog=G.fog,ie.envMap=(E.isMeshStandardMaterial?x:y).get(E.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Xe),ke=new Map,ie.programs=ke);let Ge=ke.get(Ce);if(Ge!==void 0){if(ie.currentProgram===Ge&&ie.lightsStateVersion===Te)return _c(E,Ie),Ge}else Ie.uniforms=O.getUniforms(E),E.onBeforeCompile(Ie,D),Ge=O.acquireProgram(Ie,Ce),ke.set(Ce,Ge),ie.uniforms=Ie.uniforms;const Fe=ie.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=_e.uniform),_c(E,Ie),ie.needsLights=kd(E),ie.lightsStateVersion=Te,ie.needsLights&&(Fe.ambientLightColor.value=X.state.ambient,Fe.lightProbe.value=X.state.probe,Fe.directionalLights.value=X.state.directional,Fe.directionalLightShadows.value=X.state.directionalShadow,Fe.spotLights.value=X.state.spot,Fe.spotLightShadows.value=X.state.spotShadow,Fe.rectAreaLights.value=X.state.rectArea,Fe.ltc_1.value=X.state.rectAreaLTC1,Fe.ltc_2.value=X.state.rectAreaLTC2,Fe.pointLights.value=X.state.point,Fe.pointLightShadows.value=X.state.pointShadow,Fe.hemisphereLights.value=X.state.hemi,Fe.directionalShadowMap.value=X.state.directionalShadowMap,Fe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Fe.spotShadowMap.value=X.state.spotShadowMap,Fe.spotLightMatrix.value=X.state.spotLightMatrix,Fe.spotLightMap.value=X.state.spotLightMap,Fe.pointShadowMap.value=X.state.pointShadowMap,Fe.pointShadowMatrix.value=X.state.pointShadowMatrix),ie.currentProgram=Ge,ie.uniformsList=null,Ge}function gc(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=fo.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function _c(E,G){const ee=K.get(E);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function zd(E,G,ee,ie,X){G.isScene!==!0&&(G=dt),Q.resetTextureUnits();const ge=G.fog,Te=ie.isMeshStandardMaterial?G.environment:null,Ie=b===null?D.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Pi,Ce=(ie.isMeshStandardMaterial?x:y).get(ie.envMap||Te),ke=ie.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ge=!!ee.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Fe=!!ee.morphAttributes.position,Qe=!!ee.morphAttributes.normal,lt=!!ee.morphAttributes.color;let Mt=Ai;ie.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Mt=D.toneMapping);const yt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ut=yt!==void 0?yt.length:0,Be=K.get(ie),vt=M.state.lights;if(ce===!0&&(Ee===!0||E!==Z)){const Gt=E===Z&&ie.id===B;_e.setState(ie,E,Gt)}let tt=!1;ie.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==vt.state.version||Be.outputColorSpace!==Ie||X.isBatchedMesh&&Be.batching===!1||!X.isBatchedMesh&&Be.batching===!0||X.isBatchedMesh&&Be.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Be.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Be.instancing===!1||!X.isInstancedMesh&&Be.instancing===!0||X.isSkinnedMesh&&Be.skinning===!1||!X.isSkinnedMesh&&Be.skinning===!0||X.isInstancedMesh&&Be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Be.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Be.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Be.instancingMorph===!1&&X.morphTexture!==null||Be.envMap!==Ce||ie.fog===!0&&Be.fog!==ge||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==_e.numPlanes||Be.numIntersection!==_e.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==Ge||Be.morphTargets!==Fe||Be.morphNormals!==Qe||Be.morphColors!==lt||Be.toneMapping!==Mt||Be.morphTargetsCount!==ut)&&(tt=!0):(tt=!0,Be.__version=ie.version);let Jt=Be.currentProgram;tt===!0&&(Jt=Ps(ie,G,X));let tr=!1,Qt=!1,kr=!1;const St=Jt.getUniforms(),$t=Be.uniforms;if(V.useProgram(Jt.program)&&(tr=!0,Qt=!0,kr=!0),ie.id!==B&&(B=ie.id,Qt=!0),tr||Z!==E){V.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),St.setValue(g,"projectionMatrix",E.projectionMatrix),St.setValue(g,"viewMatrix",E.matrixWorldInverse);const Kt=St.map.cameraPosition;Kt!==void 0&&Kt.setValue(g,we.setFromMatrixPosition(E.matrixWorld)),$.logarithmicDepthBuffer&&St.setValue(g,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&St.setValue(g,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,Qt=!0,kr=!0)}if(X.isSkinnedMesh){St.setOptional(g,X,"bindMatrix"),St.setOptional(g,X,"bindMatrixInverse");const Gt=X.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),St.setValue(g,"boneTexture",Gt.boneTexture,Q))}X.isBatchedMesh&&(St.setOptional(g,X,"batchingTexture"),St.setValue(g,"batchingTexture",X._matricesTexture,Q),St.setOptional(g,X,"batchingIdTexture"),St.setValue(g,"batchingIdTexture",X._indirectTexture,Q),St.setOptional(g,X,"batchingColorTexture"),X._colorsTexture!==null&&St.setValue(g,"batchingColorTexture",X._colorsTexture,Q));const ln=ee.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Le.update(X,ee,Jt),(Qt||Be.receiveShadow!==X.receiveShadow)&&(Be.receiveShadow=X.receiveShadow,St.setValue(g,"receiveShadow",X.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&($t.envMap.value=Ce,$t.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&G.environment!==null&&($t.envMapIntensity.value=G.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=Nb()),Qt&&(St.setValue(g,"toneMappingExposure",D.toneMappingExposure),Be.needsLights&&Hd($t,kr),ge&&ie.fog===!0&&le.refreshFogUniforms($t,ge),le.refreshMaterialUniforms($t,ie,me,de,M.state.transmissionRenderTarget[E.id]),fo.upload(g,gc(Be),$t,Q)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(fo.upload(g,gc(Be),$t,Q),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&St.setValue(g,"center",X.center),St.setValue(g,"modelViewMatrix",X.modelViewMatrix),St.setValue(g,"normalMatrix",X.normalMatrix),St.setValue(g,"modelMatrix",X.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Gt=ie.uniformsGroups;for(let Kt=0,Yo=Gt.length;Kt<Yo;Kt++){const Ni=Gt[Kt];Me.update(Ni,Jt),Me.bind(Ni,Jt)}}return Jt}function Hd(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function kd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,G,ee){const ie=K.get(E);ie.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),K.get(E.texture).__webglTexture=G,K.get(E.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ee,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){const ee=K.get(E);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0};const Vd=g.createFramebuffer();this.setRenderTarget=function(E,G=0,ee=0){b=E,H=G,T=ee;let ie=!0,X=null,ge=!1,Te=!1;if(E){const Ce=K.get(E);if(Ce.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(g.FRAMEBUFFER,null),ie=!1;else if(Ce.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(Ce.__hasExternalTextures)Q.rebindTextures(E,K.get(E.texture).__webglTexture,K.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Fe=E.depthTexture;if(Ce.__boundDepthTexture!==Fe){if(Fe!==null&&K.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Te=!0);const Ge=K.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ge[G])?X=Ge[G][ee]:X=Ge[G],ge=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?X=K.get(E).__webglMultisampledFramebuffer:Array.isArray(Ge)?X=Ge[ee]:X=Ge,q.copy(E.viewport),z.copy(E.scissor),se=E.scissorTest}else q.copy(Je).multiplyScalar(me).floor(),z.copy(fe).multiplyScalar(me).floor(),se=et;if(ee!==0&&(X=Vd),V.bindFramebuffer(g.FRAMEBUFFER,X)&&ie&&V.drawBuffers(E,X),V.viewport(q),V.scissor(z),V.setScissorTest(se),ge){const Ce=K.get(E.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ce.__webglTexture,ee)}else if(Te){const Ce=G;for(let ke=0;ke<E.textures.length;ke++){const Ge=K.get(E.textures[ke]);g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0+ke,Ge.__webglTexture,ee,Ce)}}else if(E!==null&&ee!==0){const Ce=K.get(E.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Ce.__webglTexture,ee)}B=-1},this.readRenderTargetPixels=function(E,G,ee,ie,X,ge,Te,Ie=0){if(!(E&&E.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){V.bindFramebuffer(g.FRAMEBUFFER,Ce);try{const ke=E.textures[Ie],Ge=ke.format,Fe=ke.type;if(!$.textureFormatReadable(Ge)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Fe)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-ie&&ee>=0&&ee<=E.height-X&&(E.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+Ie),g.readPixels(G,ee,ie,X,Oe.convert(Ge),Oe.convert(Fe),ge))}finally{const ke=b!==null?K.get(b).__webglFramebuffer:null;V.bindFramebuffer(g.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,G,ee,ie,X,ge,Te,Ie=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce)if(G>=0&&G<=E.width-ie&&ee>=0&&ee<=E.height-X){V.bindFramebuffer(g.FRAMEBUFFER,Ce);const ke=E.textures[Ie],Ge=ke.format,Fe=ke.type;if(!$.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Qe),g.bufferData(g.PIXEL_PACK_BUFFER,ge.byteLength,g.STREAM_READ),E.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+Ie),g.readPixels(G,ee,ie,X,Oe.convert(Ge),Oe.convert(Fe),0);const lt=b!==null?K.get(b).__webglFramebuffer:null;V.bindFramebuffer(g.FRAMEBUFFER,lt);const Mt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await $0(g,Mt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Qe),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,ge),g.deleteBuffer(Qe),g.deleteSync(Mt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,ee=0){const ie=Math.pow(2,-ee),X=Math.floor(E.image.width*ie),ge=Math.floor(E.image.height*ie),Te=G!==null?G.x:0,Ie=G!==null?G.y:0;Q.setTexture2D(E,0),g.copyTexSubImage2D(g.TEXTURE_2D,ee,0,0,Te,Ie,X,ge),V.unbindTexture()};const Gd=g.createFramebuffer(),Wd=g.createFramebuffer();this.copyTextureToTexture=function(E,G,ee=null,ie=null,X=0,ge=null){ge===null&&(X!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=X,X=0):ge=0);let Te,Ie,Ce,ke,Ge,Fe,Qe,lt,Mt;const yt=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(ee!==null)Te=ee.max.x-ee.min.x,Ie=ee.max.y-ee.min.y,Ce=ee.isBox3?ee.max.z-ee.min.z:1,ke=ee.min.x,Ge=ee.min.y,Fe=ee.isBox3?ee.min.z:0;else{const ln=Math.pow(2,-X);Te=Math.floor(yt.width*ln),Ie=Math.floor(yt.height*ln),E.isDataArrayTexture?Ce=yt.depth:E.isData3DTexture?Ce=Math.floor(yt.depth*ln):Ce=1,ke=0,Ge=0,Fe=0}ie!==null?(Qe=ie.x,lt=ie.y,Mt=ie.z):(Qe=0,lt=0,Mt=0);const ut=Oe.convert(G.format),Be=Oe.convert(G.type);let vt;G.isData3DTexture?(Q.setTexture3D(G,0),vt=g.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Q.setTexture2DArray(G,0),vt=g.TEXTURE_2D_ARRAY):(Q.setTexture2D(G,0),vt=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,G.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,G.unpackAlignment);const tt=g.getParameter(g.UNPACK_ROW_LENGTH),Jt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),tr=g.getParameter(g.UNPACK_SKIP_PIXELS),Qt=g.getParameter(g.UNPACK_SKIP_ROWS),kr=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,yt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,yt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ke),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ge),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Fe);const St=E.isDataArrayTexture||E.isData3DTexture,$t=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){const ln=K.get(E),Gt=K.get(G),Kt=K.get(ln.__renderTarget),Yo=K.get(Gt.__renderTarget);V.bindFramebuffer(g.READ_FRAMEBUFFER,Kt.__webglFramebuffer),V.bindFramebuffer(g.DRAW_FRAMEBUFFER,Yo.__webglFramebuffer);for(let Ni=0;Ni<Ce;Ni++)St&&(g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,K.get(E).__webglTexture,X,Fe+Ni),g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,K.get(G).__webglTexture,ge,Mt+Ni)),g.blitFramebuffer(ke,Ge,Te,Ie,Qe,lt,Te,Ie,g.DEPTH_BUFFER_BIT,g.NEAREST);V.bindFramebuffer(g.READ_FRAMEBUFFER,null),V.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||K.has(E)){const ln=K.get(E),Gt=K.get(G);V.bindFramebuffer(g.READ_FRAMEBUFFER,Gd),V.bindFramebuffer(g.DRAW_FRAMEBUFFER,Wd);for(let Kt=0;Kt<Ce;Kt++)St?g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,ln.__webglTexture,X,Fe+Kt):g.framebufferTexture2D(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,ln.__webglTexture,X),$t?g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,Gt.__webglTexture,ge,Mt+Kt):g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Gt.__webglTexture,ge),X!==0?g.blitFramebuffer(ke,Ge,Te,Ie,Qe,lt,Te,Ie,g.COLOR_BUFFER_BIT,g.NEAREST):$t?g.copyTexSubImage3D(vt,ge,Qe,lt,Mt+Kt,ke,Ge,Te,Ie):g.copyTexSubImage2D(vt,ge,Qe,lt,ke,Ge,Te,Ie);V.bindFramebuffer(g.READ_FRAMEBUFFER,null),V.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else $t?E.isDataTexture||E.isData3DTexture?g.texSubImage3D(vt,ge,Qe,lt,Mt,Te,Ie,Ce,ut,Be,yt.data):G.isCompressedArrayTexture?g.compressedTexSubImage3D(vt,ge,Qe,lt,Mt,Te,Ie,Ce,ut,yt.data):g.texSubImage3D(vt,ge,Qe,lt,Mt,Te,Ie,Ce,ut,Be,yt):E.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,ge,Qe,lt,Te,Ie,ut,Be,yt.data):E.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,ge,Qe,lt,yt.width,yt.height,ut,yt.data):g.texSubImage2D(g.TEXTURE_2D,ge,Qe,lt,Te,Ie,ut,Be,yt);g.pixelStorei(g.UNPACK_ROW_LENGTH,tt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Jt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,tr),g.pixelStorei(g.UNPACK_SKIP_ROWS,Qt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,kr),ge===0&&G.generateMipmaps&&g.generateMipmap(vt),V.unbindTexture()},this.initRenderTarget=function(E){K.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),V.unbindTexture()},this.resetState=function(){H=0,T=0,b=null,V.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const Ob={class:"scene-viewer"},Bb={class:"viewer-hud"},zb={class:"hud-info"},Hb={class:"hotspot-modal"},kb={class:"modal-content"},Vb={key:0},Gb={key:1},Wb={key:0,style:{"text-align":"center",margin:"0 0 10px 0"}},Xb=["src","alt"],qb={key:2},Yb={style:{padding:"10px 0"}},jb=["src"],$b=["href"],Kb={key:3},Zb={key:0,style:{"text-align":"center",margin:"0 0 10px 0"}},Jb=["src"],Qb={key:4},eM={key:0},tM={key:1},nM=["src"],Ju=.09,Qu=.92,iM=Ii({__name:"SceneViewer",props:{disablePan:{type:Boolean}},emits:["equirect-click","hotspot-opened","hotspot-closed","fov-changed"],setup(n,{expose:e,emit:t}){const i=n,r=er(),s=t,o=Ne(90),a=Ne(null),l=Ne(null),c=v=>{if(!v)return"";let P=String(v).trim();if(!P)return"";if(P.includes("<iframe")){const $=P.match(/src=['"]([^'">]+)['"]/i);$&&$[1]&&(P=$[1])}const g=P.toLowerCase();if(g.startsWith("javascript:")||g.startsWith("data:"))return"";const Y=($=>{try{const V=new URL($.startsWith("http")?$:"https://"+$),re=V.hostname.toLowerCase();if(re.includes("youtube.com")||re.includes("youtu.be")){if(V.pathname.includes("/embed/"))return V.href;let K="";if(re.includes("youtu.be")?K=V.pathname.replace("/","").split("/").filter(Boolean)[0]||"":V.pathname.startsWith("/shorts/")?K=V.pathname.split("/").filter(Boolean)[1]||"":V.searchParams.get("v")&&(K=V.searchParams.get("v")||""),K)return`https://www.youtube-nocookie.com/embed/${K}`}if(re.includes("vimeo.com")&&!re.includes("player.vimeo.com")){const K=V.pathname.split("/").filter(Boolean).pop();if(K)return`https://player.vimeo.com/video/${K}`}return V.href}catch{return $}})(P);try{const $=new URL(Y);return encodeURI($.href)}catch{try{const V=new URL("https://"+Y);return encodeURI(V.href)}catch{try{return encodeURI(Y)}catch{return""}}}},u=v=>{try{return new URL(v.startsWith("http")?v:"https://"+v).hostname||""}catch{return"example.com"}};Ne(null);const f=Ne(!1),h=Pr({}),p=Ne(null),_=Pr({}),S=Ne(!1),m=Ne(75);let d=null,A=null,M=null,w=new $x,I=new ot;const D=new Map;let F=null,H=0,T=0,b=0,B=0,Z=!1,q=0,z=0;const se=()=>{var g,J;const v=((g=r.activeScene)==null?void 0:g.initialYaw)??0,P=((J=r.activeScene)==null?void 0:J.initialPitch)??0;H=(v%360+360)%360,T=Math.max(-85,Math.min(85,P)),b=0,B=0},W=()=>({yaw:(H%360+360)%360,pitch:Math.max(-85,Math.min(85,T))}),ne=()=>{var g;if(!a.value)return;d=new Fx;const v=a.value.clientWidth||800,P=a.value.clientHeight||600;A=new pn(75,v/P,.1,2e3),A.position.set(0,0,.1),M=new Fb({antialias:!0}),M.setSize(v,P),M.setPixelRatio(window.devicePixelRatio||1),M.setClearColor(0),M.outputColorSpace=Pi,a.value.appendChild(M.domElement),se(),j(),M.domElement.addEventListener("pointerdown",oe),(g=a.value)==null||g.addEventListener("wheel",ze,{passive:!1}),window.addEventListener("pointermove",ce),window.addEventListener("pointerup",Ee),M.domElement.addEventListener("click",We),window.addEventListener("resize",we),dt()},j=()=>{var g;if(!((g=r.activeScene)!=null&&g.imageUrl)||!d)return;const v=r.activeScene.imageUrl;console.log("loadPanorama: Loading image, URL length:",v==null?void 0:v.length),new qx().load(v,J=>{console.log("Texture loaded successfully"),d.children.slice().forEach(re=>d.remove(re));const Y=new cs(500,60,40),$=Y.getAttribute("uv");for(let re=0;re<$.count;re++)$.setX(re,1-$.getX(re));$.needsUpdate=!0,J.colorSpace=Pi;const V=new ls({map:J,side:kt});F=new An(Y,V),d.add(F),de()},void 0,J=>{console.error("Panorama load error",J),d.children.slice().forEach(V=>d.remove(V));const Y=new cs(500,32,24),$=new ls({color:2236962,side:kt});F=new An(Y,$),d.add(F),de()})},de=()=>{if(!d)return;for(const P of D.values())try{d.remove(P)}catch{}D.clear();const v=r.activeScene;v&&v.hotspots.forEach(P=>{const g=typeof P.radius=="number"&&Number.isFinite(P.radius)?P.radius:10,J=500-1;let Y;if(P.dir&&typeof P.dir.x=="number")Y=new te(P.dir.x,P.dir.y,P.dir.z).multiplyScalar(J);else{const K=Zt.degToRad(90-P.y),Q=Zt.degToRad(-P.x+o.value);Y=new te().setFromSpherical(new br(J,K,Q))}S.value&&_[P.id]&&Y.applyQuaternion(_[P.id]);const $=new cs(Math.max(2,g/2.5),12,12),V=new ls({color:new st(P.color||"#ff0000"),transparent:!0,opacity:.6}),re=new An($,V);re.position.copy(Y),re.userData={hotspotId:P.id},d.add(re),D.set(P.id,re)})},me=v=>{if(!A||!M)return{left:"-9999px",top:"-9999px",display:"none"};const P=new te(0,0,-1).applyQuaternion(A.quaternion),g=v.clone().normalize();if(P.dot(g)<0)return{left:"10px",top:M.domElement.clientHeight/2-15+"px"};const Y=v.clone().project(A),$=M.domElement,V=(Y.x*.5+.5)*$.clientWidth,re=(-Y.y*.5+.5)*$.clientHeight;return V<0||V>$.clientWidth||re<0||re>$.clientHeight?{left:"10px",top:$.clientHeight/2-15+"px"}:{left:V+"px",top:re+"px"}},Re=v=>{const P=D.get(v.id);if(P&&A&&M)return me(P.position);if(v.dir&&typeof v.dir.x=="number"){const $=new te(v.dir.x,v.dir.y,v.dir.z).multiplyScalar(499);return me($)}const g=Zt.degToRad(90-v.y),J=Zt.degToRad(-v.x+o.value),Y=new te().setFromSpherical(new br(500-1,g,J));return me(Y)},He=v=>{if(v.dir&&typeof v.dir.x=="number"){const P=new te(v.dir.x,v.dir.y,v.dir.z),g=new br().setFromVector3(P),J=g.phi,Y=g.theta,$=90-Zt.radToDeg(J);return{x:((-Zt.radToDeg(Y)+o.value)%360+360)%360,y:$}}return{x:v.x,y:v.y}},Je=()=>{if(!r.activeScene||!M||!A)return;const v=M.domElement(r.activeScene.hotspots||[]).forEach(P=>{const g=He(P),Y=((g.x-H)%360+540)%360-180,$=g.y-T;let V;if(P.dir&&typeof P.dir.x=="number")V=new te(P.dir.x,P.dir.y,P.dir.z).multiplyScalar(500-1);else{const y=Zt.degToRad(90-P.y),x=Zt.degToRad(-P.x+o.value);V=new te().setFromSpherical(new br(500-1,y,x))}S.value&&_[P.id]&&V.applyQuaternion(_[P.id]);const re=V.clone().project(A),K=(re.x*.5+.5)*v.clientWidth,Q=(-re.y*.5+.5)*v.clientHeight;h[P.id]={dx:Math.round(Y),dy:Math.round($),style:{left:K+"px",top:Q+"px"}},hotspotScreenPositions[P.id]=Re(P)})},fe=()=>{l.value=null,s("hotspot-closed")},et=v=>{v&&(r.setActiveScene(v),l.value=null)},oe=v=>{i.disablePan||(Z=!0,v.clientX,v.clientY,q=v.clientX,z=v.clientY)},ce=v=>{if(!Z)return;const P=v.clientX-q,g=v.clientY-z;b=P*Ju,B=g*Ju,H+=b,T+=B,T=Math.max(-85,Math.min(85,T)),q=v.clientX,z=v.clientY},Ee=()=>{Z=!1},ze=v=>{v.preventDefault(),A&&(A.fov=Math.max(30,Math.min(100,A.fov+v.deltaY*.05)),m.value=A.fov,A.updateProjectionMatrix(),s("fov-changed",A.fov))},we=()=>{if(!a.value||!A||!M)return;const v=a.value.clientWidth,P=a.value.clientHeight;A.aspect=v/P,A.updateProjectionMatrix(),M.setSize(v,P)},We=v=>{var J,Y,$;if(!M||!A)return;const P=M.domElement.getBoundingClientRect();I.x=(v.clientX-P.left)/P.width*2-1,I.y=-((v.clientY-P.top)/P.height)*2+1,w.setFromCamera(I,A);const g=w.intersectObjects(Array.from(D.values()));if(g.length>0){const re=(J=g[0].object.userData)==null?void 0:J.hotspotId;if(re){const K=(Y=r.activeScene)==null?void 0:Y.hotspots.find(Q=>Q.id===re);if(!K)return;f.value?(p.value=re,Je(),un("Hotspot sélectionné pour calibration","info")):K.type==="scene"?et(($=K.content)==null?void 0:$.linkedSceneId):l.value=K}}else{const V=w.ray.direction.clone().normalize(),re=new br().setFromVector3(V),K=re.phi,Q=re.theta,y=90-Zt.radToDeg(K),L=((-Zt.radToDeg(Q)+o.value)%360+360)%360;s("equirect-click",{x:L,y,dir:{x:V.x,y:V.y,z:V.z}})}},dt=()=>{if(requestAnimationFrame(dt),b*=Qu,B*=Qu,H+=b,T+=B,T=Math.max(-85,Math.min(85,T)),A&&(A.rotation.order="YXZ",A.rotation.y=Zt.degToRad(H),A.rotation.x=Zt.degToRad(T)),M&&d&&A)try{f.value&&Je(),M.render(d,A)}catch(v){console.error("Render error",v)}};return No(()=>{ne()}),Fo(()=>{var v;try{window.removeEventListener("pointermove",ce),window.removeEventListener("pointerup",Ee),window.removeEventListener("resize",we),M==null||M.domElement.removeEventListener("pointerdown",oe),(v=a.value)==null||v.removeEventListener("wheel",ze),M==null||M.domElement.removeEventListener("click",We),M&&(M.dispose(),M.forceContextLoss&&M.forceContextLoss())}catch(P){console.warn("Cleanup error",P)}}),Ln(()=>r.activeScene,()=>{var v;((v=r.activeScene)==null?void 0:v.calibrationOffsetX)!==void 0?o.value=r.activeScene.calibrationOffsetX:o.value=90,se(),j()}),Ln(()=>{var v;return(v=r.activeScene)==null?void 0:v.hotspots},()=>{de()},{deep:!0}),e({getHotspotScreenPosition:Re,currentFov:m,getCurrentOrientation:W}),(v,P)=>{var g;return Pe(),Ue("div",Ob,[N("div",{ref_key:"viewerContainer",ref:a,class:"viewer-container"},null,512),N("div",Bb,[N("div",zb,[N("h3",null,gt((g=Ke(r).activeScene)==null?void 0:g.name),1),P[2]||(P[2]=N("p",null,"🖱️ Cliquer + glisser pour naviguer | Scroll pour zoomer",-1))])]),l.value?(Pe(),Ue("div",{key:0,class:"hotspot-modal-overlay",onClick:P[1]||(P[1]=Nt(J=>fe(),["self"]))},[N("div",Hb,[N("button",{onClick:P[0]||(P[0]=J=>fe()),class:"modal-close"},"✕"),N("div",kb,[l.value.type==="text"?(Pe(),Ue("div",Vb,[N("p",null,gt(l.value.content.text),1)])):l.value.type==="image"?(Pe(),Ue("div",Gb,[l.value.content.imageTitle?(Pe(),Ue("h3",Wb,gt(l.value.content.imageTitle),1)):pt("",!0),N("img",{src:l.value.content.imageUrl,alt:l.value.content.imageTitle},null,8,Xb)])):l.value.type==="link"?(Pe(),Ue("div",qb,[N("div",Yb,[N("img",{src:"https://www.google.com/s2/favicons?sz=128&domain="+u(l.value.content.linkUrl),style:{width:"32px",height:"32px","margin-right":"10px",display:"inline-block"}},null,8,jb),N("a",{href:l.value.content.linkUrl,target:"_blank",rel:"noopener noreferrer",style:{"font-size":"16px",color:"#0066cc","text-decoration":"underline"}},gt(l.value.content.title||"Ouvrir le lien"),9,$b)])])):l.value.type==="iframe"?(Pe(),Ue("div",Kb,[l.value.content.imageTitle?(Pe(),Ue("h3",Zb,gt(l.value.content.imageTitle),1)):pt("",!0),N("iframe",{src:c(l.value.content.iframeUrl),frameborder:"0",style:{width:"100%",height:"60vh"},referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,Jb)])):l.value.type==="text-image"?(Pe(),Ue("div",Qb,[l.value.content.title?(Pe(),Ue("h3",eM,gt(l.value.content.title),1)):pt("",!0),l.value.content.text?(Pe(),Ue("p",tM,gt(l.value.content.text),1)):pt("",!0),l.value.content.imageUrl?(Pe(),Ue("img",{key:2,src:l.value.content.imageUrl},null,8,nM)):pt("",!0)])):pt("",!0)])])])):pt("",!0)])}}});const rM=Li(iM,[["__scopeId","data-v-82fe6027"]]),sM={class:"scene-editor"},oM={class:"editor-canvas"},aM=["onMousedown","title"],lM={class:"hotspot-index"},cM={key:2,class:"position-change-overlay"},uM={class:"info-header"},fM={class:"header-buttons"},dM={class:"info-content"},hM={class:"form-group"},pM={key:0,class:"form-group"},mM={class:"form-group"},xM={class:"form-group"},gM={class:"image-upload-group"},_M={key:0,class:"image-preview"},vM=["src","alt"],SM={class:"form-group"},bM={class:"form-group"},MM={class:"form-group"},yM={class:"image-upload-group"},EM={key:0,class:"image-preview"},TM=["src","alt"],AM={class:"form-group"},wM={class:"form-group"},CM={class:"form-group"},RM={class:"form-group"},PM={class:"form-group"},DM={key:5,class:"form-group"},IM=["value"],LM={class:"form-group"},UM={class:"form-group"},NM={class:"color-picker-enhanced"},FM={class:"color-presets"},OM=["onClick","title"],BM={class:"color-picker-wrapper"},zM={class:"form-group"},HM={style:{display:"flex","align-items":"center",gap:"15px"}},kM={class:"current-icon-display",style:{"font-size":"26px"}},VM={class:"form-group"},GM={class:"toolbar"},WM={class:"modal icon-picker-modal"},XM={class:"modal-header"},qM={class:"header-controls"},YM=["title"],jM={class:"icon-count"},$M=["onClick","title"],KM=Ii({__name:"SceneEditor",setup(n){const e=er(),t=Ne("select");Ne(!1);const i=Ne(!0);Ne(!1);const r=Ne(""),s=Ne(0),o=Ne(0),a=Ne(null),l=Ne(null),c=Ne(!1),u=Ne(null),f=Ne(null),h=Ne(0),p=Ne("#ff0000"),_=Ne(null),S=Ne(""),m=Ne(!1),d=Ne(1),A=Ne(!1),M=ti(()=>t.value==="draw"?"cursor-cross":t.value==="select"?"cursor-circle":""),w=()=>{var R,C;return(C=(R=f.value)==null?void 0:R.currentFov)!=null&&C.value?f.value.currentFov.value:75},I=["#FF0000","#FF6B35","#FFA500","#FFD700","#00FF00","#00CED1","#0066FF","#6B35FF","#FF00FF","#FFFFFF","#808080","#000000"],D=()=>{var C,O;if(!e.activeScene)return;const R=(O=(C=f.value)==null?void 0:C.getCurrentOrientation)==null?void 0:O.call(C);R&&(e.updateScene(e.activeScene.id,{initialYaw:R.yaw,initialPitch:R.pitch}),un("Orientation initiale enregistrée","success"))},F=["📍","📌","🧭","🗺️","🌍","⬆️","⬇️","⬅️","➡️","🌟","⭐","💫","✨","☀️","🏠","🏢","🎯","🔗","💡","🎥","📸","📷","📹","🎨","🎭","🎪","🎵","🎶","🎤","🎧","🎬","📺","📻","📡","🔍","🔎","⚠️","❓","❔","✅","❌","🏆","🥇","🥈","🥉","🎁","🎀","🎊","🎉","💝","👁️","👀","💬","💭","📢","📣","🔔","🔕","📝","📋","📄","📃","📊","📈","📉","🔧","🔨","🛠️","⚒️","🔑","🗝️","🚪","🪟","🏔️","⛰️","🌋","🏖️","🏝️","⛲","🌊"],H=["📍","📌","🧭","🗺️","🌎","🌏","🗾","🏕️","🏜️","🏞️","🏟️","🏛️","🏗️","🏘️","🏚️","🏠","🏡","🏢","🏣","🏤","🏥","🏦","🏨","🏩","🏪","🏫","🏬","🏭","🏯","🏰","💒","🗼","🗽","⛪","🕌","🛕","🕍","⛩️","🕋","⛺","🌁","🌃","🏙️","🌄","🌅","🌆","🌇","🌉","🎠","🎡","🎢","↗️","↘️","↙️","↖️","↕️","↔️","↩️","↪️","⤴️","⤵️","🔃","🔄","🔙","🔚","🔛","🔜","🔝","🔀","🔁","🔂","▶️","⏸️","⏹️","⏺️","⏭️","⏮️","⏪","⏩","⏏️","🌠","🔆","🔅","💥","💢","💦","💧","💨","🌀","🌈","🌤️","⛅","🌥️","☁️","🌦️","🌧️","⛈️","🌩️","🌨️","❄️","🔵","🟢","🟡","🟠","🔴","🟣","🟤","⚫","⚪","🟥","🟧","🟨","🟩","🟦","🟪","🟫","⬛","⬜","🔶","🔷","🔸","🔹","🔺","🔻","💠","🔘","🔳","🔲","◾","◽","◼️","◻️","🎞️","🖼️","🖌️","🖍️","🎼","🎹","🎺","🎷","🎸","🪕","🎻","🥁","🎏","🎐","🎌","🎃","🎆","🎇","🎫","🎖️","🔦","🏮","🔬","🔭","💎","💍","🔓","🔒","🔐","🔏","🛒","🛏️","🛋️","🪑","🛎️","💿","💾","💽","📀","🧿","🪡","🧵","🧶","🪒","🍎","🍊","🍋","🍌","🍉","🍇","🍓","🫐","🍈","🍒","🍑","🥭","🍍","🥥","🥑","🍅","🍆","🥔","🥕","🌽","🌶️","🥒","🥬","🥦","🧄","🧅","🍞","🥐","🥯","🍖","🍗","🥩","🍔","🍟","🍕","🌭","🥪","🌮","🌯","🥙","🧆","🍳","🍲","🥘","🥗","🍿","🥫","🍝","🍜","🍛","🍣","🍱","🥟","🦪","🍤","🍙","🍚","🍘","🍥","🥠","🥮","🍢","🍡","🍧","🍨","🍦","🍰","🎂","🧁","🍮","🍭","🍬","🍫","🍩","🍪","🌰","🍯","☕","🍵","🍶","🍾","🍷","🍸","🍹","🍺","🍻","🥂","🥃","🥤","🧋","🧃","🧉","🧊","🥢","🍽️","🍴","🥄","🔪","🧂","🧈","🚗","🚕","🚙","🚌","🚎","🏎️","🚓","🚑","🚒","🚐","🛻","🚚","🚛","🚜","🏍️","🛵","🦯","🦽","🦼","🛺","🚲","🛴","🛹","🛼","✈️","🛩️","💺","🛰️","🚁","🛶","⛵","🚤","🛳️","⛴️","🛥️","⛱️","📰","📓","📔","📒","📕","📗","📘","📙","📚","📖","🗨️","🗯️","📎","🖇️","✉️","📧","📨","📩","📤","📥","📦","🏷️","📪","📫","📬","📭","📮","📜","🧾","📇","🗃️","🗳️","🗂️","🗞️","🧷","🧸","❓","❔","❕","❗","‼️","⁉️","〰️","💯","✔️","❎","➕","➖","➗","✖️","🆕","🆓","🆙","🆗","🆒","🆖","🆘","🚫","🔞","📵","🚭","🚯","🚱","🚷","♻️","♿","🅿️","🈂️","🈷️","🈶️","🈯️","🈹️","🈚️","🈲️","🉐","🉑","㊙️","㊗️","🈴","🈵","🈸","🈺","🈻","💤","🕳️","👁️‍🗨️","🎙️","🎚️","🎛️","📱","☎️","📞","📟","📠","🔋","🔌","💻","🖥️","🖨️","⌨️","🖱️","🖲️","🧮","🎦","⏱️","⏲️","⏳","⌛","⏰","🕰️","⌚","📲","🕹️","🗜️","📼","🐕","🐶","🐩","🦮","🐈","🐓","🐔","🐣","🐤","🐥","🐦","🐧","🐨","🐘","🦛","🦏","🐪","🐫","🦒","🦓","🦍","🦧","🐒","🐵","🐱","🐭","🐹","🐰","🦊","🦝","🐗","🐴","🦄","🐝","🪱","🐛","🦋","🐌","🐞","🐜","🪰","🪳","🕷️","🦂","🐢","🐍","🦎","🦖","🦕","🐙","🦑","🦐","🦞","🦟","🦗","🕸️","🐚","🧲","⚗️","🧪","🧫","🧬","💉","💊","🛗","🪜","🧯","🚬","⚰️","⚱️","🏺","🔮","📿","💈","⚖️","🧰","🗡️","🔱","⚔️","🛡️","🔩","⛓️","🧱","🪝","⚙️","⚽","⚾","🥎","🎾","🏐","🏀","🏈","🏉","🪀","🏓","🏸","🏒","🏑","🥍","🏏","🪃","🥅","⛳","⛸️","🎣","🎽","🎿","⛷️","🏂","🪂","🛷","🥌","🪁","♠️","♥️","♦️","♣️","♟️","🧩","👋","🤚","🖐️","✋","🖖","👌","🤌","🤏","✌️","🤞","🫰","🤟","🤘","🤙","👍","👎","✊","👊","🤛","🤜","👏","🙌","👐","🤲","🤝","🙏","💅","💪","🦾","🦿","🦵","🦶","👂","👃","🧠","🦷","🦴","👅","👄","👨","👩","👦","👧","👶","👴","👵","🧒","🧓","🧑","🌬️","☔","🍏","🍐","🌐","🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘","🌙","🌚","🌛","🌜","🌝","🌞","☄️","👔","👕","👖","🧣","🧤","🧥","🧦","👗","👘","👚","👛","👜","👝","🎒","👞","👟","🥾","🥿","👠","👡","👢","👑","👒","🎩","🧢","💼","👓","🕶️","🥽","⛑️","🪖","🌲","🌳","🌴","🌵","🌾","🌿","🍀","🍁","🍂","🍃","🍄","🌺","🌻","🌼","🌷","🥀","🌹","🏵️","💐","🌸","⚘","🦀","🦞","🦐","🦑","🐠","🐟","🐡","🐬","🐳","🐋","🦈","🦭","🦦","🦥","🦨","🦡","🦘","🦌","🐂","🐃","🐄","🐅","🐆","🐇","🐉","🐊","🐋","🐏","🐐","🐑","🐀","🐁","🐂","🐃","🦬","🐖","🐷","🐽","🐏","🦙","🦌","🦒","🐎","🦓","🦬","🐕‍🦺","🐿️","🦔","🦦","🦇","🐻","🐻‍❄️","🐼","🦘","🦡","🦃","🦚","🦜","🦢","🦩","🕊️","🦅","🦆","🦉","🐓","🐈‍⬛","🦣","🦤","🦙","🐾","🐲","🌴","🎋","🎍","💮","🏮","🧧","🎐","✉️","💌","💝","💖","💗","💓","💞","💕","💟","❣️","💔","❤️","🧡","💛","💚","💙","💜","🤎","🖤","🤍","💯","💢","💬","👁️‍🗨️","🗨️","🗯️","💭","💤","💮","♨️","💈","🎃","🎄","🎆","🎇","🧨","✨","🎈","🎉","🎊","🎋","🎍","🎎","🎏","🎐","🎑","🧧","🎀","🎁","🎗️","🎟️","🎫","🎖️","🏆","🏅","🥇","🥈","🥉","⚽","⚾","🥎","🏀","🏐","🏈","🏉","🎾","🥏","🎳","🏏","🏑","🏒","🥍","🏓","🏸","🥊","🥋","🥅","⛳","⛸️","🎣","🤿","🎽","🎿","🛷","🥌","🎯","🪀","🪁","🎱","🔮","🪄","🧿","🎮","🕹️","🎰","🎲","🧩","🧸","🪅","🪆","🪡","🧵","🪢","🧶","🪢","👓","🕶️","🥽","🥼","🦺","👔","👕","👖","🧣","🧤","🧥","🧦","👗","👘","🥻","🩱","🩲","🩳","👙","👚","👛","👜","👝","🛍️","🎒","🩴","👞","👟","🥾","🥿","👠","👡","👢","👑","👒","🎩","🎓","🧢","🪖","⛑️","📿","💄","💍","💎","🔇","🔈","🔉","🔊","📢","📣","📯","🔔","🔕","🎼","🎵","🎶","🎙️","🎚️","🎛️","🎤","🎧","📻","🎷","🪗","🎸","🎹","🎺","🎻","🪕","🥁","🪘","📱","📲","☎️","📞","📟","📠","🔋","🔌","💻","🖥️","🖨️","⌨️","🖱️","🖲️","💽","💾","💿","📀","🧮","🎥","🎞️","📽️","🎬","📺","📷","📸","📹","📼","🔍","🔎","🕯️","💡","🔦","🏮","🪔","📔","📕","📖","📗","📘","📙","📚","📓","📒","📃","📜","📄","📰","🗞️","📑","🔖","🏷️","💰","🪙","💴","💵","💶","💷","💸","💳","🧾","💹","✉️","📧","📨","📩","📤","📥","📦","📫","📪","📬","📭","📮","🗳️","✏️","✒️","🖋️","🖊️","🖌️","🖍️","📝","💼","📁","📂","🗂️","📅","📆","🗒️","🗓️","📇","📈","📉","📊","📋","📌","📍","📎","🖇️","📏","📐","✂️","🗃️","🗄️","🗑️","🔒","🔓","🔏","🔐","🔑","🗝️","🔨","🪓","⛏️","⚒️","🛠️","🗡️","⚔️","🔫","🪃","🏹","🛡️","🪚","🔧","🪛","🔩","⚙️","🗜️","⚖️","🦯","🔗","⛓️","🪝","🧰","🧲","🪜","⚗️","🧪","🧫","🧬","🔬","🔭","📡","💉","🩸","💊","🩹","🩺","🩼","🚪","🪞","🪟","🛏️","🛋️","🪑","🚽","🪠","🚿","🛁","🪤","🪒","🧴","🧷","🧹","🧺","🧻","🪣","🧼","🪥","🧽","🧯","🛒","🚬","⚰️","🪦","⚱️","🗿","🪧","🏧","🚮","🚰","♿","🚹","🚺","🚻","🚼","🚾","🛗","⚠️","🚸","⛔","🚫","🚳","🚭","🚯","🚱","🚷","📵","🔞","☢️","☣️","⬆️","↗️","➡️","↘️","⬇️","↙️","⬅️","↖️","↕️","↔️","↩️","↪️","⤴️","⤵️","🔃","🔄","🔙","🔚","🔛","🔜","🔝","🛐","⚛️","🕉️","✡️","☸️","☯️","✝️","☦️","☪️","☮️","🕎","🔯","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","⛎","🔀","🔁","🔂","▶️","⏩","⏭️","⏯️","◀️","⏪","⏮️","🔼","⏫","🔽","⏬","⏸️","⏹️","⏺️","⏏️","🎦","🔅","🔆","📶","📳","📴","♀️","♂️","⚧️","✖️","➕","➖","➗","🟰","♾️","‼️","⁉️","❓","❔","❕","❗","〰️","💱","💲","⚕️","♻️","⚜️","🔱","📛","🔰","⭕","✅","☑️","✔️","❌","❎","➰","➿","〽️","✳️","✴️","❇️","©️","®️","™️","#️⃣","*️⃣","0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟","🔠","🔡","🔢","🔣","🔤","🅰️","🆎","🅱️","🆑","🆒","🆓","ℹ️","🆔","Ⓜ️","🆕","🆖","🅾️","🆗","🅿️","🆘","🆙","🆚","🈁","🈂️","🈷️","🈶","🈯","🉐","🈹","🈚","🈲","🉑","🈸","🈴","🈳","㊗️","㊙️","🈺","🈵","🔴","🟠","🟡","🟢","🔵","🟣","🟤","⚫","⚪","🟥","🟧","🟨","🟩","🟦","🟪","🟫","⬛","⬜","◼️","◻️","◾","◽","▪️","▫️","🔶","🔷","🔸","🔹","🔺","🔻","💠","🔘","🔳","🔲"],T=Ne(!1),b=ti(()=>T.value?H:F),B=()=>{T.value=!T.value},Z=R=>({text:"📄",image:"🖼️","text-image":"📰",link:"🔗",iframe:"💻",scene:"⬆️"})[R]||"📍",q=R=>10,z=R=>{if(!R)return q();const C=R.iconSize;return typeof C=="number"&&Number.isFinite(C)?C:q(R.type)},se=()=>d.value>0?d.value:1,W=R=>{var O;const C=typeof R=="number"?R:75;(O=f.value)!=null&&O.currentFov&&(f.value.currentFov.value=C),h.value++};let ne=null;const j=(R,C)=>{if(R.button===0)if(R.ctrlKey){ne=C,R.clientX,R.clientY;const O=R.currentTarget.parentElement;O&&(O.addEventListener("mousemove",de),O.addEventListener("mouseup",me)),un("Déplacez le point d'intérêt | Relâchez pour confirmer","info")}else v(C)},de=R=>{if(!ne||!e.activeScene)return;const C=document.querySelector(".image-container");if(!C)return;const O=C.getBoundingClientRect();let le=R.clientX-O.left,k=R.clientY-O.top;const xe=u.value;let _e=O.width,ae=O.height;if(xe&&xe.naturalWidth&&xe.naturalHeight){const Oe=xe.naturalWidth,U=xe.naturalHeight,Me=Math.min(O.width/Oe,O.height/U);_e=Oe*Me,ae=U*Me;const Se=(O.width-_e)/2,be=(O.height-ae)/2;le=R.clientX-O.left-Se,k=R.clientY-O.top-be}const pe=Math.max(0,Math.min(1,le/_e)),Le=Math.max(0,Math.min(1,k/ae)),Ae=pe*360,ve=Le*180-90;ne.x=Math.max(0,Math.min(360,Ae)),ne.y=Math.max(-90,Math.min(90,ve)),ne.dir=Je(ne.x,ne.y),h.value++},me=()=>{if(!ne)return;const R=document.querySelector(".image-container");R&&(R.removeEventListener("mousemove",de),R.removeEventListener("mouseup",me)),e.project&&dn.saveProject(e.project),un("Position du point mise à jour","success"),ne=null},Re=()=>{fe.value&&(A.value=!0,un("Cliquez sur la nouvelle position du point","info"))},He=()=>{A.value=!1,un("Changement de position annulé","info")},Je=(R,C)=>{const O=Zt.degToRad(90-C),le=Zt.degToRad(-R+90),k=new te().setFromSpherical(new br(1,O,le));return{x:k.x,y:k.y,z:k.z}},fe=ti({get:()=>e.activeScene?e.activeScene.hotspots.find(R=>R.id===r.value):null,set:R=>{r.value=(R==null?void 0:R.id)||""}});Ln(()=>{var R;return(R=fe.value)==null?void 0:R.color},R=>{R&&(p.value=R)}),Ln(p,R=>{fe.value&&(fe.value.color=R)}),Ln(()=>fe.value,R=>{var C;if((R==null?void 0:R.type)==="iframe"){const le=(((C=R.content)==null?void 0:C.iframeUrl)||"").match(/src="([^"]+)"/);S.value=le?le[1]:""}else S.value=""},{deep:!0});const et=R=>{if(A.value&&fe.value){const k=Math.max(0,Math.min(360,R.x)),xe=Math.max(-90,Math.min(90,R.y));fe.value.x=k,fe.value.y=xe,fe.value.dir={x:R.dir.x,y:R.dir.y,z:R.dir.z},e.project&&dn.saveProject(e.project),A.value=!1,h.value++,un("Position du point mise à jour","success");return}if(t.value!=="draw")return;const C=Math.max(0,Math.min(360,R.x)),O=Math.max(-90,Math.min(90,R.y)),le={id:ms(),type:"text",x:C,y:O,content:{text:"Nouveau point"},radius:10,iconSize:10,color:"#ff0000",visible:!0,hideCircle:!1,showIcon:!0,dir:{x:R.dir.x,y:R.dir.y,z:R.dir.z}};e.addHotspot(le),e.project&&dn.saveProject(e.project),fe.value=le},oe=R=>{const C=R.currentTarget.getBoundingClientRect();s.value=R.clientX-C.left,o.value=R.clientY-C.top},ce=(R,C=.55)=>{const O=(R||"#ff0000").trim();if(/^#([0-9a-fA-F]{6})$/.test(O)){const le=parseInt(O.slice(1,3),16),k=parseInt(O.slice(3,5),16),xe=parseInt(O.slice(5,7),16);return`rgba(${le}, ${k}, ${xe}, ${C})`}return O},Ee=R=>{const C=R.color||"#ff0000",O=R.hideCircle===!0;return{background:O?"transparent":ce(C,.55),borderColor:O?"transparent":C,borderWidth:O?"0px":"3px",boxShadow:O?"none":"0 0 0 2px #fff, 0 4px 10px rgba(0, 0, 0, 0.35)"}},ze=R=>{var le,k;if(h.value,f.value){const xe=f.value.getHotspotScreenPosition(R),_e=w(),ae=_e>0?75/_e:1,Le=R.radius*2*ae*3;return d.value=ae*3,R.id===((k=(le=e.activeScene)==null?void 0:le.hotspots[0])==null?void 0:k.id)&&console.log(`FOV: ${_e}, ZoomFactor: ${ae}, ScaledSize: ${Le}`),{left:xe.left,top:xe.top,width:Le+"px",height:Le+"px",transform:"translate(-50%, -50%)",...Ee(R)}}const C=R.x/360*100,O=(R.y+90)/180*100;return{left:C+"%",top:O+"%",width:R.radius*2+"px",height:R.radius*2+"px",...Ee(R),display:"none",transform:"translate(-50%, -50%)"}},we=R=>R.icon?R.icon:Z(R.type),We=R=>{var O,le,k;if(console.log("[Tooltip Debug]",{type:R.type,linkedSceneId:(O=R.content)==null?void 0:O.linkedSceneId,content:R.content}),R.type==="scene"){const xe=(le=R.content)==null?void 0:le.linkedSceneId;if(xe&&e.project){const _e=e.project.scenes.find(ae=>ae.id===xe);if(_e)return`Aller vers ${_e.name}`}return"Changer de scène (non configuré)"}return R.type==="text"?((k=R.content)==null?void 0:k.text)||"Nouveau point":{image:"Image","text-image":"Image et texte",link:"Lien",iframe:"Cadre intégré"}[R.type]||"Nouveau point"},dt=()=>{const R=S.value.trim();if(R){const C=`<iframe src="${R}" style="width: 100%; height: 600px; border: none; border-radius: 4px;"></iframe>`;fe.value.content.iframeUrl=C}},v=R=>{fe.value=R},P=R=>{fe.value=R,l.value=null},g=R=>{const C={...R,id:ms(),x:R.x+10,y:R.y+10};e.addHotspot(C),e.project&&dn.saveProject(e.project),l.value=null},J=R=>{e.activeScene&&(e.deleteHotspot(e.activeScene.id,R.id),e.project&&dn.saveProject(e.project)),l.value=null},Y=()=>{m.value=!1,T.value=!1},$=R=>{fe.value&&(fe.value.icon=R,Y(),un("✅ Logo modifié!","success"))},V=()=>{if(fe.value&&e.activeScene){const R={...fe.value,dir:Je(fe.value.x,fe.value.y)};e.updateHotspot(e.activeScene.id,fe.value.id,R),e.project&&dn.saveProject(e.project),un("✅ Point d'intérêt enregistré!","success")}},re=()=>{fe.value&&e.activeScene&&(e.deleteHotspot(e.activeScene.id,fe.value.id),fe.value=null,e.project&&dn.saveProject(e.project),un("🗑️ Point d'intérêt supprimé!","success"))},K=()=>{var R;(R=_.value)==null||R.click()},Q=async R=>{var O;const C=(O=R.target.files)==null?void 0:O[0];if(!(!C||!fe.value))try{const le=await oo(C);fe.value.content.imageUrl=le,e.activeScene&&(e.updateHotspot(e.activeScene.id,fe.value.id,fe.value),e.project&&dn.saveProject(e.project)),un("✅ Image chargée!","success")}catch(le){console.error("Erreur lors du chargement de l'image:",le),un("❌ Erreur lors du chargement de l'image","error")}};let y=null;const x=()=>{const R=()=>{h.value++,y=requestAnimationFrame(R)};y=requestAnimationFrame(R)},L=()=>{y!==null&&(cancelAnimationFrame(y),y=null)};return Ln(()=>f.value,R=>{R?x():L()}),Fo(()=>{L()}),document.addEventListener("click",()=>{l.value=null}),(R,C)=>{var O,le;return Pe(),Ue("div",sM,[N("div",oM,[N("div",{class:zt(["image-container",M.value]),onMousemove:oe,onContextmenu:C[2]||(C[2]=Nt(k=>a.value=null,["prevent"]))},[(O=Ke(e).activeScene)!=null&&O.imageUrl?(Pe(),Mr(rM,{key:0,ref_key:"sceneViewerRef",ref:f,disablePan:Ke(t)==="draw",onEquirectClick:et,onHotspotOpened:C[0]||(C[0]=k=>c.value=!0),onHotspotClosed:C[1]||(C[1]=k=>c.value=!1),onFovChanged:W},null,8,["disablePan"])):pt("",!0),N("div",{class:"grid-overlay",style:fn({display:Ke(c)?"none":"block"})},[(Pe(),Ue(bt,null,bi(37,k=>N("div",{key:"h"+k,class:"grid-line-h",style:fn({left:k*100/36+"%"})},null,4)),64)),(Pe(),Ue(bt,null,bi(19,k=>N("div",{key:"v"+k,class:"grid-line-v",style:fn({top:k*100/18+"%"})},null,4)),64))],4),(Pe(!0),Ue(bt,null,bi((le=Ke(e).activeScene)==null?void 0:le.hotspots,(k,xe)=>(Pe(),Ue("div",{key:k.id,class:zt(["hotspot-pin",{selected:Ke(r)===k.id}]),style:fn({...ze(k),display:Ke(c)?"none":"flex"}),onMousedown:Nt(_e=>j(_e,k),["stop"]),onContextmenu:Nt(()=>{},["prevent"]),draggable:"false",title:We(k)},[N("div",{class:zt(["hotspot-icon",{"hotspot-icon-scene":k.type==="scene"}]),style:fn({fontSize:z(k)*se()+"px"})},gt(we(k)),7),N("div",lM,gt(xe+1),1)],46,aM))),128)),Ke(i)?(Pe(),Ue("div",{key:1,class:"crosshair",style:fn({left:Ke(s)+"px",top:Ke(o)+"px"})},null,4)):pt("",!0),Ke(A)?(Pe(),Ue("div",cM,[N("div",{class:"position-change-message"},[C[27]||(C[27]=ei(" 📍 Cliquez sur la nouvelle position du point ",-1)),N("button",{onClick:He,class:"btn-cancel-position"},"✕ Annuler")])])):pt("",!0)],34),fe.value?(Pe(),Ue("div",{key:0,class:"hotspot-info",onWheel:C[20]||(C[20]=Nt(()=>{},["stop"]))},[N("div",uM,[C[28]||(C[28]=N("h3",null,"Point d'intérêt",-1)),N("div",fM,[N("button",{onClick:Re,class:"btn-change-pos-header",title:"Changer la position du point"}," 📍 Changer la position "),N("button",{onClick:C[3]||(C[3]=k=>fe.value=null),class:"btn-close"},"✕")])]),N("div",dM,[N("div",hM,[C[30]||(C[30]=N("label",null,"Type",-1)),Rt(N("select",{"onUpdate:modelValue":C[4]||(C[4]=k=>fe.value.type=k),class:"input"},[...C[29]||(C[29]=[Up('<option value="text" data-v-6ed883df>📄 Texte</option><option value="image" data-v-6ed883df>🖼️ Image</option><option value="text-image" data-v-6ed883df>📰 Texte + Image</option><option value="link" data-v-6ed883df>🔗 Lien</option><option value="iframe" data-v-6ed883df>💻 IFrame</option><option value="scene" data-v-6ed883df>⬆️ Autre Scène</option>',6)])],512),[[$c,fe.value.type]])]),fe.value.type==="text"?(Pe(),Ue("div",pM,[C[31]||(C[31]=N("label",null,"Texte",-1)),Rt(N("textarea",{"onUpdate:modelValue":C[5]||(C[5]=k=>fe.value.content.text=k),class:"input",rows:"3"},null,512),[[Ut,fe.value.content.text]])])):fe.value.type==="image"?(Pe(),Ue(bt,{key:1},[N("div",mM,[C[32]||(C[32]=N("label",null,"Titre (optionnel)",-1)),Rt(N("input",{"onUpdate:modelValue":C[6]||(C[6]=k=>fe.value.content.imageTitle=k),type:"text",class:"input",placeholder:"Titre de l'image"},null,512),[[Ut,fe.value.content.imageTitle]])]),N("div",xM,[C[33]||(C[33]=N("label",null,"Image",-1)),N("div",gM,[N("input",{ref_key:"imageFileInput",ref:_,type:"file",accept:"image/*",style:{display:"none"},onChange:Q},null,544),N("button",{onClick:K,class:"btn-upload"}," 📤 Sélectionner une image "),fe.value.content.imageUrl?(Pe(),Ue("div",_M,[N("img",{src:fe.value.content.imageUrl,alt:fe.value.content.imageUrl},null,8,vM)])):pt("",!0)])])],64)):fe.value.type==="text-image"?(Pe(),Ue(bt,{key:2},[N("div",SM,[C[34]||(C[34]=N("label",null,"Titre",-1)),Rt(N("input",{"onUpdate:modelValue":C[7]||(C[7]=k=>fe.value.content.title=k),type:"text",class:"input"},null,512),[[Ut,fe.value.content.title]])]),N("div",bM,[C[35]||(C[35]=N("label",null,"Texte",-1)),Rt(N("textarea",{"onUpdate:modelValue":C[8]||(C[8]=k=>fe.value.content.text=k),class:"input",rows:"2"},null,512),[[Ut,fe.value.content.text]])]),N("div",MM,[C[36]||(C[36]=N("label",null,"Image",-1)),N("div",yM,[N("input",{ref_key:"imageFileInput",ref:_,type:"file",accept:"image/*",style:{display:"none"},onChange:Q},null,544),N("button",{onClick:K,class:"btn-upload"}," 📤 Sélectionner une image "),fe.value.content.imageUrl?(Pe(),Ue("div",EM,[N("img",{src:fe.value.content.imageUrl,alt:fe.value.content.imageUrl},null,8,TM)])):pt("",!0)])])],64)):fe.value.type==="link"?(Pe(),Ue(bt,{key:3},[N("div",AM,[C[37]||(C[37]=N("label",null,"URL",-1)),Rt(N("input",{"onUpdate:modelValue":C[9]||(C[9]=k=>fe.value.content.linkUrl=k),type:"text",class:"input",placeholder:"https://..."},null,512),[[Ut,fe.value.content.linkUrl]])]),N("div",wM,[C[38]||(C[38]=N("label",null,"Texte du lien",-1)),Rt(N("input",{"onUpdate:modelValue":C[10]||(C[10]=k=>fe.value.content.title=k),type:"text",class:"input",placeholder:"Cliquez ici"},null,512),[[Ut,fe.value.content.title]])])],64)):fe.value.type==="iframe"?(Pe(),Ue(bt,{key:4},[N("div",CM,[C[39]||(C[39]=N("label",null,"Titre (optionnel)",-1)),Rt(N("input",{"onUpdate:modelValue":C[11]||(C[11]=k=>fe.value.content.imageTitle=k),type:"text",class:"input",placeholder:"Titre du contenu"},null,512),[[Ut,fe.value.content.imageTitle]])]),N("div",RM,[C[40]||(C[40]=N("label",null,"URL à intégrer",-1)),Rt(N("input",{"onUpdate:modelValue":C[12]||(C[12]=k=>_t(S)?S.value=k:null),type:"text",class:"input",placeholder:"https://exemple.com",onInput:dt},null,544),[[Ut,Ke(S)]]),C[41]||(C[41]=N("small",{style:{color:"#999","margin-top":"5px",display:"block"}},"Remplis ce champ pour générer automatiquement le code iframe",-1))]),N("div",PM,[C[42]||(C[42]=N("label",null,"Code IFrame (généré automatiquement ou personnalisé)",-1)),Rt(N("textarea",{"onUpdate:modelValue":C[13]||(C[13]=k=>fe.value.content.iframeUrl=k),type:"text",class:"input",rows:"4",placeholder:"<iframe src='...'></iframe>"},null,512),[[Ut,fe.value.content.iframeUrl]])])],64)):fe.value.type==="scene"?(Pe(),Ue("div",DM,[C[43]||(C[43]=N("label",null,"Scène liée",-1)),Rt(N("select",{"onUpdate:modelValue":C[14]||(C[14]=k=>fe.value.content.linkedSceneId=k),class:"input"},[(Pe(!0),Ue(bt,null,bi(Ke(e).allScenes,k=>(Pe(),Ue("option",{key:k.id,value:k.id},gt(k.name),9,IM))),128))],512),[[$c,fe.value.content.linkedSceneId]])])):pt("",!0),N("div",LM,[C[44]||(C[44]=N("label",null,"Taille du cercle",-1)),Rt(N("input",{"onUpdate:modelValue":C[15]||(C[15]=k=>fe.value.radius=k),type:"range",min:"5",max:"30",class:"input"},null,512),[[Ut,fe.value.radius,void 0,{number:!0}]])]),N("div",UM,[C[46]||(C[46]=N("label",null,"Couleur du cercle",-1)),N("div",NM,[Rt(N("input",{"onUpdate:modelValue":C[16]||(C[16]=k=>_t(p)?p.value=k:null),type:"color",class:"color-input-hidden"},null,512),[[Ut,Ke(p)]]),N("div",FM,[(Pe(),Ue(bt,null,bi(I,k=>N("button",{key:k,class:zt(["color-preset",{active:Ke(p).toLowerCase()===k.toLowerCase()}]),style:fn({backgroundColor:k}),onClick:xe=>p.value=k,title:k},null,14,OM)),64))]),N("label",BM,[C[45]||(C[45]=N("span",{class:"color-picker-text"},"Choisir une couleur personnalisée",-1)),Rt(N("input",{"onUpdate:modelValue":C[17]||(C[17]=k=>_t(p)?p.value=k:null),type:"color",class:"color-input-picker"},null,512),[[Ut,Ke(p)]])])])]),C[49]||(C[49]=N("div",{style:{"border-top":"1px solid #eee",margin:"15px 0"}},null,-1)),N("div",zM,[C[47]||(C[47]=N("label",null,"Logo",-1)),N("div",HM,[N("div",kM,gt(fe.value.icon||Z(fe.value.type)),1),N("button",{onClick:C[18]||(C[18]=k=>m.value=!0),class:"btn-choose-icon"}," 🎨 Choisir un autre logo ")])]),N("div",VM,[C[48]||(C[48]=N("label",null,"Taille du logo",-1)),Rt(N("input",{"onUpdate:modelValue":C[19]||(C[19]=k=>fe.value.iconSize=k),type:"range",min:"5",max:"70",step:"1",class:"input"},null,512),[[Ut,fe.value.iconSize,void 0,{number:!0}]])]),N("div",{class:"form-actions"},[N("button",{onClick:V,class:"btn-save"},"💾 Valider le point d'intérêt"),N("button",{onClick:re,class:"btn-delete"},"🗑️ Supprimer le point d'intérêt")])])],32)):pt("",!0)]),N("div",GM,[N("button",{onClick:C[21]||(C[21]=k=>t.value="draw"),class:zt([{active:Ke(t)==="draw"},"tool-btn"])}," ➕ Ajouter un point d'intérêt ",2),N("button",{onClick:C[22]||(C[22]=k=>t.value="select"),class:zt([{active:Ke(t)==="select"},"tool-btn"])}," 🔍 Se déplacer ou sélectionner un point pour le modifier ",2),N("button",{onClick:D,class:"tool-btn",title:"Utiliser la vue actuelle comme orientation de départ"}," 📌 Définir l’orientation initiale "),C[50]||(C[50]=N("div",{class:"toolbar-hint"},[ei(" 💡 "),N("strong",null,"Ctrl + Clic"),ei(" sur un point pour le déplacer ")],-1))]),Ke(l)?(Pe(),Ue("div",{key:0,class:"context-menu",style:fn(Ke(l).position)},[N("button",{onClick:C[23]||(C[23]=k=>P(Ke(l).hotspot)),class:"menu-item"},"✏️ Éditer"),N("button",{onClick:C[24]||(C[24]=k=>g(Ke(l).hotspot)),class:"menu-item"},"📋 Dupliquer"),N("button",{onClick:C[25]||(C[25]=k=>J(Ke(l).hotspot)),class:"menu-item danger"},"🗑️ Supprimer")],4)):pt("",!0),Ke(m)?(Pe(),Ue("div",{key:1,class:"modal-overlay",onClick:Nt(Y,["self"])},[N("div",WM,[N("div",XM,[C[51]||(C[51]=N("h3",null,"Choisir un logo pour ce point d'intérêt",-1)),N("div",qM,[b.value.length<H.length?(Pe(),Ue("button",{key:0,onClick:B,class:"btn-show-more",title:Ke(T)?"Afficher les logos populaires":"Afficher tous les logos"},gt(Ke(T)?"⭐ Populaires":"➕ Plus de logos"),9,YM)):pt("",!0),N("button",{onClick:Y,class:"btn-close"},"✕")])]),N("div",jM,gt(b.value.length)+" logos disponibles",1),N("div",{class:"icon-picker-grid",onWheel:C[26]||(C[26]=Nt(()=>{},["stop"]))},[(Pe(!0),Ue(bt,null,bi(b.value,k=>(Pe(),Ue("button",{key:k,class:zt(["icon-picker-option",{active:fe.value&&(fe.value.icon||Z(fe.value.type))===k}]),onClick:xe=>$(k),title:k},gt(k),11,$M))),128))],32)])])):pt("",!0)])}}});const ZM=Li(KM,[["__scopeId","data-v-6ed883df"]]);async function JM(){try{const n=await fetch("./three.min.js");if(!n.ok)throw new Error("Failed to load Three.js");return await n.text()}catch(n){return console.error("Error loading Three.js:",n),""}}class QM{static exportAsJSON(e){return JSON.stringify({version:"1.0.0",project:e,assets:{}},null,2)}static async exportAsHTMLStandalone(e,t,i){const r=await JM(),s=i!=null&&i.previewMode?3:1;let o=0;if(t){const l=e.scenes.findIndex(c=>c.id===t);l!==-1&&(o=l)}const a=e.scenes.map((l,c)=>({id:l.id,name:l.name,description:l.description,hotspots:l.hotspots,imageIndex:c,imageFileName:l.imageFileName||`scene-${c}.jpg`,imageUrl:l.imageUrl,calibrationOffsetX:l.calibrationOffsetX||90,initialYaw:l.initialYaw??0,initialPitch:l.initialPitch??0}));return`<!DOCTYPE html>
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
        <span class="controls-pointer">☝️</span> Cliquez sur les points pour chercher et découvrir<br>
        <a href="https://pedagogie.ac-montpellier.fr/ressources-et-formation-du-cercle-detude-numerique-physique-chimie" target="_blank" rel="noopener noreferrer" style="color: #9cf; text-decoration: underline;">
            Réalisé avec 360 Scene Editor - C.HC CEN-PC MTP
        </a>
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
        let rotationX = 0, rotationY = 0;
        let fov = 75;
        
        // Normalize iframe URLs (e.g., YouTube watch/shorts links -> embed)
        function normalizeIframeUrl(rawUrl) {
            if (!rawUrl) return '';
            let url = String(rawUrl).trim();
            if (!url) return '';

            // If iframe HTML provided, extract the src
            if (url.includes('<iframe')) {
                const match = url.match(/src="([^"]*)"/);
                if (match) {
                    url = match[1];
                }
            }

            try {
                const parsed = new URL(url.startsWith('http') ? url : 'https://' + url);
                const host = parsed.hostname.toLowerCase();

                // YouTube: convert watch/shorts/share URLs to embed
                // BUT: if it's already an embed URL, leave it untouched (user knows what works)
                if (host.includes('youtube.com') || host.includes('youtu.be')) {
                    // If already an embed URL, return as-is
                    if (parsed.pathname.includes('/embed/')) {
                        return url;
                    }
                    
                    let videoId = '';
                    if (host.includes('youtu.be')) {
                        videoId = parsed.pathname.replace('/', '').split('/').filter(Boolean)[0] || '';
                    } else if (parsed.pathname.startsWith('/shorts/')) {
                        videoId = parsed.pathname.split('/').filter(Boolean)[1] || '';
                    } else if (parsed.searchParams.get('v')) {
                        videoId = parsed.searchParams.get('v') || '';
                    }

                    if (videoId) {
                        // Use youtube-nocookie.com (privacy enhanced mode) to avoid Error 153 in local files
                        url = 'https://www.youtube-nocookie.com/embed/' + videoId;
                    }
                }

                // Vimeo basic embed conversion
                if (host.includes('vimeo.com') && !host.includes('player.vimeo.com')) {
                    const idCandidate = parsed.pathname.split('/').filter(Boolean).pop();
                    if (idCandidate) {
                        url = 'https://player.vimeo.com/video/' + idCandidate;
                    }
                }
            } catch (e) {
                // keep the original url if parsing fails
            }

            return url;
        }

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
                case 'iframe': {
                    const normalizedIframe = normalizeIframeUrl(iframeUrl);
                    // Add referrerpolicy to help YouTube validate the iframe embed
                    content = (imageTitle ? '<h3 style="text-align: center; margin: 0 0 10px 0;">' + escapeHtml(imageTitle) + '</h3>' : '') +
                              '<iframe src="' + normalizedIframe + '" frameborder="0" style="width:100%;height:60vh;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
                    break;
                }
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
        
        function applyInitialOrientation(sceneData) {
            if (!camera) return;
            const yaw = typeof sceneData.initialYaw === 'number' && isFinite(sceneData.initialYaw) ? sceneData.initialYaw : 0;
            const pitch = typeof sceneData.initialPitch === 'number' && isFinite(sceneData.initialPitch) ? sceneData.initialPitch : 0;
            rotationY = THREE.MathUtils.degToRad(((yaw % 360) + 360) % 360);
            rotationX = THREE.MathUtils.degToRad(Math.max(-85, Math.min(85, pitch)));
            camera.rotation.order = 'YXZ';
            camera.rotation.y = rotationY;
            camera.rotation.x = rotationX;
        }

        function loadScene(index) {
            currentSceneIndex = index;
            const sceneData = SCENES[index];
            if (!sceneData) return;
            applyInitialOrientation(sceneData);
            fov = camera.fov;
            
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
    `}}async function Fd(n,e,t){return await QM.exportAsHTMLStandalone(n,e,t)}const ey={class:"export-panel"},ty={class:"export-container"},ny={class:"export-preview"},iy={class:"project-info"},ry={class:"info-row"},sy={class:"info-row"},oy={class:"info-row"},ay={class:"info-row"},ly=Ii({__name:"ExportPanel",setup(n){const e=er(),t=ti(()=>{var s;return((s=e.project)==null?void 0:s.scenes.reduce((o,a)=>o+a.hotspots.length,0))||0}),i=ti(()=>{if(!e.project)return"0 MB";const s=JSON.stringify(e.project);return(new Blob([s]).size/1024/1024).toFixed(2)+" MB"}),r=async()=>{if(!e.project)return;const s=await Fd(e.project,void 0,{previewMode:!0}),o=new Blob([s],{type:"text/html"}),a=URL.createObjectURL(o),l=document.createElement("a");l.href=a,l.download="index.html",l.click(),URL.revokeObjectURL(a)};return(s,o)=>{var a,l;return Pe(),Ue("div",ey,[N("div",ty,[o[8]||(o[8]=N("h2",null,"Exporter le Projet",-1)),N("div",ny,[o[4]||(o[4]=N("h3",null,"Apercu du Projet",-1)),N("div",iy,[N("div",ry,[o[0]||(o[0]=N("label",null,"Nom :",-1)),N("span",null,gt((a=Ke(e).project)==null?void 0:a.name),1)]),N("div",sy,[o[1]||(o[1]=N("label",null,"Scenes :",-1)),N("span",null,gt((l=Ke(e).project)==null?void 0:l.scenes.length),1)]),N("div",oy,[o[2]||(o[2]=N("label",null,"Hotspots :",-1)),N("span",null,gt(t.value),1)]),N("div",ay,[o[3]||(o[3]=N("label",null,"Taille approx :",-1)),N("span",null,gt(i.value),1)])])]),N("div",{class:"export-options"},[N("div",{class:"export-card"},[o[5]||(o[5]=N("div",{class:"card-icon"},"📄",-1)),o[6]||(o[6]=N("h3",null,"HTML Standalone",-1)),o[7]||(o[7]=N("p",null,"Génère un fichier index.html unique à lancer (de préférence avec Chrome pour assurer un maximum de compatibilité).",-1)),N("button",{onClick:r,class:"btn-export"},"Télécharger l'export HTML")])])])])}}});const cy=Li(ly,[["__scopeId","data-v-bbdbb857"]]),uy={class:"export-viewer"},fy=["srcdoc"],dy=Ii({__name:"ExportViewer",setup(n){const e=er(),t=Ne(null),i=Ne("");return fp(async()=>{if(e.project){const r=e.activeSceneId;i.value=await Fd(e.project,r,{previewMode:!0})}else i.value=""}),(r,s)=>(Pe(),Ue("div",uy,[N("iframe",{ref_key:"iframeRef",ref:t,srcdoc:i.value,title:"Export Preview"},null,8,fy)]))}});const hy=Li(dy,[["__scopeId","data-v-88cd004c"]]),py={class:"app-container"},my={class:"toasts-container"},xy={key:1,class:"editor-layout"},gy={class:"sidebar"},_y={class:"main-content"},vy={class:"editor-tabs"},Sy=Ii({__name:"App",setup(n){const e=er(),t=Ne("editor"),i=(s,o)=>{e.createNewProject(s,o)},r=s=>{e.loadProject(s)};return No(async()=>{console.log("App initialized - showing HomeScreen")}),(s,o)=>(Pe(),Ue("div",py,[N("div",my,[(Pe(!0),Ue(bt,null,bi(Ke(wr),a=>(Pe(),Ue("div",{key:a.id,class:zt(["toast",`toast-${a.type}`])},gt(a.message),3))),128))]),Ke(e).project?(Pe(),Ue("div",xy,[N("div",gy,[gn(Hm),gn(s0,{class:zt({"scenelist-disabled":t.value==="export"})},null,8,["class"])]),N("div",_y,[N("div",vy,[N("button",{class:zt([{active:t.value==="editor"},"tab-btn"]),onClick:o[0]||(o[0]=a=>t.value="editor")},[...o[3]||(o[3]=[ei(" ✏️ ",-1),N("strong",null,"Éditeur",-1)])],2),N("button",{class:zt([{active:t.value==="export-viewer"},"tab-btn"]),onClick:o[1]||(o[1]=a=>t.value="export-viewer")},[...o[4]||(o[4]=[ei(" 👀 ",-1),N("strong",null,"Apercu",-1)])],2),N("button",{class:zt([{active:t.value==="export"},"tab-btn"]),onClick:o[2]||(o[2]=a=>t.value="export")},[...o[5]||(o[5]=[ei(" 💾 ",-1),N("strong",null,"Exporter",-1)])],2)]),t.value==="editor"?(Pe(),Ue(bt,{key:0},[Ke(e).activeScene?(Pe(),Mr(ZM,{key:0})):pt("",!0)],64)):t.value==="export"?(Pe(),Mr(cy,{key:1})):t.value==="export-viewer"?(Pe(),Ue(bt,{key:2},[Ke(e).project?(Pe(),Mr(hy,{key:0})):pt("",!0)],64)):pt("",!0)])])):(Pe(),Mr(Fm,{key:0,onCreateProject:i,onLoadProject:r}))]))}});const by=Li(Sy,[["__scopeId","data-v-a564610a"]]),Od=gm(by);Od.use(bm());Od.mount("#app");
