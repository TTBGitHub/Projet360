(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fa(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const et={},ur=[],hn=()=>{},_u=()=>!1,so=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Oa=n=>n.startsWith("onUpdate:"),yt=Object.assign,Ba=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ud=Object.prototype.hasOwnProperty,Ze=(n,e)=>ud.call(n,e),Ne=Array.isArray,fr=n=>cs(n)==="[object Map]",yr=n=>cs(n)==="[object Set]",pl=n=>cs(n)==="[object Date]",Ge=n=>typeof n=="function",_t=n=>typeof n=="string",Tn=n=>typeof n=="symbol",it=n=>n!==null&&typeof n=="object",vu=n=>(it(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),xu=Object.prototype.toString,cs=n=>xu.call(n),fd=n=>cs(n).slice(8,-1),Su=n=>cs(n)==="[object Object]",oo=n=>_t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Br=Fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ao=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},dd=/-\w/g,fi=ao(n=>n.replace(dd,e=>e.slice(1).toUpperCase())),hd=/\B([A-Z])/g,pi=ao(n=>n.replace(hd,"-$1").toLowerCase()),Mu=ao(n=>n.charAt(0).toUpperCase()+n.slice(1)),Po=ao(n=>n?`on${Mu(n)}`:""),ai=(n,e)=>!Object.is(n,e),Vs=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Eu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},lo=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ml;const co=()=>ml||(ml=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ln(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=_t(i)?_d(i):ln(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(_t(n)||it(n))return n}const pd=/;(?![^(]*\))/g,md=/:([^]+)/,gd=/\/\*[^]*?\*\//g;function _d(n){const e={};return n.replace(gd,"").split(pd).forEach(t=>{if(t){const i=t.split(md);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function qt(n){let e="";if(_t(n))e=n;else if(Ne(n))for(let t=0;t<n.length;t++){const i=qt(n[t]);i&&(e+=i+" ")}else if(it(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const vd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xd=Fa(vd);function yu(n){return!!n||n===""}function Sd(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=us(n[i],e[i]);return t}function us(n,e){if(n===e)return!0;let t=pl(n),i=pl(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Tn(n),i=Tn(e),t||i)return n===e;if(t=Ne(n),i=Ne(e),t||i)return t&&i?Sd(n,e):!1;if(t=it(n),i=it(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!us(n[a],e[a]))return!1}}return String(n)===String(e)}function Ha(n,e){return n.findIndex(t=>us(t,e))}const bu=n=>!!(n&&n.__v_isRef===!0),gt=n=>_t(n)?n:n==null?"":Ne(n)||it(n)&&(n.toString===xu||!Ge(n.toString))?bu(n)?gt(n.value):JSON.stringify(n,Tu,2):String(n),Tu=(n,e)=>bu(e)?Tu(n,e.value):fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Lo(i,s)+" =>"]=r,t),{})}:yr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Lo(t))}:Tn(e)?Lo(e):it(e)&&!Ne(e)&&!Su(e)?String(e):e,Lo=(n,e="")=>{var t;return Tn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class Au{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ct;try{return Ct=this,e()}finally{Ct=t}}}on(){++this._on===1&&(this.prevScope=Ct,Ct=this)}off(){this._on>0&&--this._on===0&&(Ct=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function wu(n){return new Au(n)}function Ru(){return Ct}function Md(n,e=!1){Ct&&Ct.cleanups.push(n)}let tt;const Uo=new WeakSet;class Cu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Uo.has(this)&&(Uo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gl(this),Uu(this);const e=tt,t=pn;tt=this,pn=!0;try{return this.fn()}finally{Du(this),tt=e,pn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ka(e);this.deps=this.depsTail=void 0,gl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Uo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ma(this)&&this.run()}get dirty(){return ma(this)}}let Pu=0,Hr,zr;function Lu(n,e=!1){if(n.flags|=8,e){n.next=zr,zr=n;return}n.next=Hr,Hr=n}function za(){Pu++}function Ga(){if(--Pu>0)return;if(zr){let e=zr;for(zr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Hr;){let e=Hr;for(Hr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Uu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Du(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),ka(i),Ed(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ma(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Iu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Iu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Jr)||(n.globalVersion=Jr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ma(n))))return;n.flags|=2;const e=n.dep,t=tt,i=pn;tt=n,pn=!0;try{Uu(n);const r=n.fn(n._value);(e.version===0||ai(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{tt=t,pn=i,Du(n),n.flags&=-3}}function ka(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)ka(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ed(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let pn=!0;const Nu=[];function Xn(){Nu.push(pn),pn=!1}function jn(){const n=Nu.pop();pn=n===void 0?!0:n}function gl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=tt;tt=void 0;try{e()}finally{tt=t}}}let Jr=0;class yd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Va{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!tt||!pn||tt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==tt)t=this.activeLink=new yd(tt,this),tt.deps?(t.prevDep=tt.depsTail,tt.depsTail.nextDep=t,tt.depsTail=t):tt.deps=tt.depsTail=t,Fu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=tt.depsTail,t.nextDep=void 0,tt.depsTail.nextDep=t,tt.depsTail=t,tt.deps===t&&(tt.deps=i)}return t}trigger(e){this.version++,Jr++,this.notify(e)}notify(e){za();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ga()}}}function Fu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Fu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const $s=new WeakMap,Ci=Symbol(""),ga=Symbol(""),Qr=Symbol("");function Pt(n,e,t){if(pn&&tt){let i=$s.get(n);i||$s.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Va),r.map=i,r.key=t),r.track()}}function Bn(n,e,t,i,r,s){const a=$s.get(n);if(!a){Jr++;return}const o=l=>{l&&l.trigger()};if(za(),e==="clear")a.forEach(o);else{const l=Ne(n),c=l&&oo(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===Qr||!Tn(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Qr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Ci)),fr(n)&&o(a.get(ga)));break;case"delete":l||(o(a.get(Ci)),fr(n)&&o(a.get(ga)));break;case"set":fr(n)&&o(a.get(Ci));break}}Ga()}function bd(n,e){const t=$s.get(n);return t&&t.get(e)}function zi(n){const e=Ke(n);return e===n?e:(Pt(e,"iterate",Qr),$t(n)?e:e.map(mn))}function uo(n){return Pt(n=Ke(n),"iterate",Qr),n}function ti(n,e){return qn(n)?Vn(n)?gr(mn(e)):gr(e):mn(e)}const Td={__proto__:null,[Symbol.iterator](){return Do(this,Symbol.iterator,n=>ti(this,n))},concat(...n){return zi(this).concat(...n.map(e=>Ne(e)?zi(e):e))},entries(){return Do(this,"entries",n=>(n[1]=ti(this,n[1]),n))},every(n,e){return Cn(this,"every",n,e,void 0,arguments)},filter(n,e){return Cn(this,"filter",n,e,t=>t.map(i=>ti(this,i)),arguments)},find(n,e){return Cn(this,"find",n,e,t=>ti(this,t),arguments)},findIndex(n,e){return Cn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Cn(this,"findLast",n,e,t=>ti(this,t),arguments)},findLastIndex(n,e){return Cn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Cn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Io(this,"includes",n)},indexOf(...n){return Io(this,"indexOf",n)},join(n){return zi(this).join(n)},lastIndexOf(...n){return Io(this,"lastIndexOf",n)},map(n,e){return Cn(this,"map",n,e,void 0,arguments)},pop(){return Cr(this,"pop")},push(...n){return Cr(this,"push",n)},reduce(n,...e){return _l(this,"reduce",n,e)},reduceRight(n,...e){return _l(this,"reduceRight",n,e)},shift(){return Cr(this,"shift")},some(n,e){return Cn(this,"some",n,e,void 0,arguments)},splice(...n){return Cr(this,"splice",n)},toReversed(){return zi(this).toReversed()},toSorted(n){return zi(this).toSorted(n)},toSpliced(...n){return zi(this).toSpliced(...n)},unshift(...n){return Cr(this,"unshift",n)},values(){return Do(this,"values",n=>ti(this,n))}};function Do(n,e,t){const i=uo(n),r=i[e]();return i!==n&&!$t(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Ad=Array.prototype;function Cn(n,e,t,i,r,s){const a=uo(n),o=a!==n&&!$t(n),l=a[e];if(l!==Ad[e]){const f=l.apply(n,s);return o?mn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,ti(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function _l(n,e,t,i){const r=uo(n);let s=t;return r!==n&&($t(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,ti(n,o),l,n)}),r[e](s,...i)}function Io(n,e,t){const i=Ke(n);Pt(i,"iterate",Qr);const r=i[e](...t);return(r===-1||r===!1)&&fo(t[0])?(t[0]=Ke(t[0]),i[e](...t)):r}function Cr(n,e,t=[]){Xn(),za();const i=Ke(n)[e].apply(n,t);return Ga(),jn(),i}const wd=Fa("__proto__,__v_isRef,__isVue"),Ou=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Tn));function Rd(n){Tn(n)||(n=String(n));const e=Ke(this);return Pt(e,"has",n),e.hasOwnProperty(n)}class Bu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Bd:ku:s?Gu:zu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ne(e);if(!r){let l;if(a&&(l=Td[t]))return l;if(t==="hasOwnProperty")return Rd}const o=Reflect.get(e,t,st(e)?e:i);if((Tn(t)?Ou.has(t):wd(t))||(r||Pt(e,"get",t),s))return o;if(st(o)){const l=a&&oo(t)?o:o.value;return r&&it(l)?va(l):l}return it(o)?r?va(o):mr(o):o}}class Hu extends Bu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Ne(e)&&oo(t);if(!this._isShallow){const c=qn(s);if(!$t(i)&&!qn(i)&&(s=Ke(s),i=Ke(i)),!a&&st(s)&&!st(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:Ze(e,t),l=Reflect.set(e,t,i,st(e)?e:r);return e===Ke(r)&&(o?ai(i,s)&&Bn(e,"set",t,i):Bn(e,"add",t,i)),l}deleteProperty(e,t){const i=Ze(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Bn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Tn(t)||!Ou.has(t))&&Pt(e,"has",t),i}ownKeys(e){return Pt(e,"iterate",Ne(e)?"length":Ci),Reflect.ownKeys(e)}}class Cd extends Bu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Pd=new Hu,Ld=new Cd,Ud=new Hu(!0);const _a=n=>n,vs=n=>Reflect.getPrototypeOf(n);function Dd(n,e,t){return function(...i){const r=this.__v_raw,s=Ke(r),a=fr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?_a:e?gr:mn;return!e&&Pt(s,"iterate",l?ga:Ci),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function xs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Id(n,e){const t={get(r){const s=this.__v_raw,a=Ke(s),o=Ke(r);n||(ai(r,o)&&Pt(a,"get",r),Pt(a,"get",o));const{has:l}=vs(a),c=e?_a:n?gr:mn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Pt(Ke(r),"iterate",Ci),r.size},has(r){const s=this.__v_raw,a=Ke(s),o=Ke(r);return n||(ai(r,o)&&Pt(a,"has",r),Pt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Ke(o),c=e?_a:n?gr:mn;return!n&&Pt(l,"iterate",Ci),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return yt(t,n?{add:xs("add"),set:xs("set"),delete:xs("delete"),clear:xs("clear")}:{add(r){!e&&!$t(r)&&!qn(r)&&(r=Ke(r));const s=Ke(this);return vs(s).has.call(s,r)||(s.add(r),Bn(s,"add",r,r)),this},set(r,s){!e&&!$t(s)&&!qn(s)&&(s=Ke(s));const a=Ke(this),{has:o,get:l}=vs(a);let c=o.call(a,r);c||(r=Ke(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?ai(s,u)&&Bn(a,"set",r,s):Bn(a,"add",r,s),this},delete(r){const s=Ke(this),{has:a,get:o}=vs(s);let l=a.call(s,r);l||(r=Ke(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Bn(s,"delete",r,void 0),c},clear(){const r=Ke(this),s=r.size!==0,a=r.clear();return s&&Bn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Dd(r,n,e)}),t}function Wa(n,e){const t=Id(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ze(t,r)&&r in i?t:i,r,s)}const Nd={get:Wa(!1,!1)},Fd={get:Wa(!1,!0)},Od={get:Wa(!0,!1)};const zu=new WeakMap,Gu=new WeakMap,ku=new WeakMap,Bd=new WeakMap;function Hd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zd(n){return n.__v_skip||!Object.isExtensible(n)?0:Hd(fd(n))}function mr(n){return qn(n)?n:Xa(n,!1,Pd,Nd,zu)}function Gd(n){return Xa(n,!1,Ud,Fd,Gu)}function va(n){return Xa(n,!0,Ld,Od,ku)}function Xa(n,e,t,i,r){if(!it(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=zd(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function Vn(n){return qn(n)?Vn(n.__v_raw):!!(n&&n.__v_isReactive)}function qn(n){return!!(n&&n.__v_isReadonly)}function $t(n){return!!(n&&n.__v_isShallow)}function fo(n){return n?!!n.__v_raw:!1}function Ke(n){const e=n&&n.__v_raw;return e?Ke(e):n}function ja(n){return!Ze(n,"__v_skip")&&Object.isExtensible(n)&&Eu(n,"__v_skip",!0),n}const mn=n=>it(n)?mr(n):n,gr=n=>it(n)?va(n):n;function st(n){return n?n.__v_isRef===!0:!1}function ze(n){return kd(n,!1)}function kd(n,e){return st(n)?n:new Vd(n,e)}class Vd{constructor(e,t){this.dep=new Va,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ke(e),this._value=t?e:mn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||$t(e)||qn(e);e=i?e:Ke(e),ai(e,t)&&(this._rawValue=e,this._value=i?e:mn(e),this.dep.trigger())}}function Ye(n){return st(n)?n.value:n}const Wd={get:(n,e,t)=>e==="__v_raw"?n:Ye(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return st(r)&&!st(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Vu(n){return Vn(n)?n:new Proxy(n,Wd)}function Xd(n){const e=Ne(n)?new Array(n.length):{};for(const t in n)e[t]=qd(n,t);return e}class jd{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=Ke(e);let r=!0,s=e;if(!Ne(e)||!oo(String(t)))do r=!fo(s)||$t(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=Ye(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&st(this._raw[this._key])){const t=this._object[this._key];if(st(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return bd(this._raw,this._key)}}function qd(n,e,t){return new jd(n,e,t)}class Yd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Va(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Jr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&tt!==this)return Lu(this,!0),!0}get value(){const e=this.dep.track();return Iu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $d(n,e,t=!1){let i,r;return Ge(n)?i=n:(i=n.get,r=n.set),new Yd(i,r,t)}const Ss={},Ks=new WeakMap;let bi;function Kd(n,e=!1,t=bi){if(t){let i=Ks.get(t);i||Ks.set(t,i=[]),i.push(n)}}function Zd(n,e,t=et){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=x=>r?x:$t(x)||r===!1||r===0?Hn(x,1):Hn(x);let u,f,h,m,g=!1,v=!1;if(st(n)?(f=()=>n.value,g=$t(n)):Vn(n)?(f=()=>c(n),g=!0):Ne(n)?(v=!0,g=n.some(x=>Vn(x)||$t(x)),f=()=>n.map(x=>{if(st(x))return x.value;if(Vn(x))return c(x);if(Ge(x))return l?l(x,2):x()})):Ge(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Xn();try{h()}finally{jn()}}const x=bi;bi=u;try{return l?l(n,3,[m]):n(m)}finally{bi=x}}:f=hn,e&&r){const x=f,b=r===!0?1/0:r;f=()=>Hn(x(),b)}const p=Ru(),d=()=>{u.stop(),p&&p.active&&Ba(p.effects,u)};if(s&&e){const x=e;e=(...b)=>{x(...b),d()}}let y=v?new Array(n.length).fill(Ss):Ss;const S=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const b=u.run();if(r||g||(v?b.some((C,P)=>ai(C,y[P])):ai(b,y))){h&&h();const C=bi;bi=u;try{const P=[b,y===Ss?void 0:v&&y[0]===Ss?[]:y,m];y=b,l?l(e,3,P):e(...P)}finally{bi=C}}}else u.run()};return o&&o(S),u=new Cu(f),u.scheduler=a?()=>a(S,!1):S,m=x=>Kd(x,!1,u),h=u.onStop=()=>{const x=Ks.get(u);if(x){if(l)l(x,4);else for(const b of x)b();Ks.delete(u)}},e?i?S(!0):y=u.run():a?a(S.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Hn(n,e=1/0,t){if(e<=0||!it(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,st(n))Hn(n.value,e,t);else if(Ne(n))for(let i=0;i<n.length;i++)Hn(n[i],e,t);else if(yr(n)||fr(n))n.forEach(i=>{Hn(i,e,t)});else if(Su(n)){for(const i in n)Hn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Hn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fs(n,e,t,i){try{return i?n(...i):n()}catch(r){ho(r,e,t)}}function An(n,e,t,i){if(Ge(n)){const r=fs(n,e,t,i);return r&&vu(r)&&r.catch(s=>{ho(s,e,t)}),r}if(Ne(n)){const r=[];for(let s=0;s<n.length;s++)r.push(An(n[s],e,t,i));return r}}function ho(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||et;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Xn(),fs(s,null,10,[n,l,c]),jn();return}}Jd(n,t,r,i,a)}function Jd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ht=[];let vn=-1;const dr=[];let ni=null,rr=0;const Wu=Promise.resolve();let Zs=null;function qa(n){const e=Zs||Wu;return n?e.then(this?n.bind(this):n):e}function Qd(n){let e=vn+1,t=Ht.length;for(;e<t;){const i=e+t>>>1,r=Ht[i],s=es(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ya(n){if(!(n.flags&1)){const e=es(n),t=Ht[Ht.length-1];!t||!(n.flags&2)&&e>=es(t)?Ht.push(n):Ht.splice(Qd(e),0,n),n.flags|=1,Xu()}}function Xu(){Zs||(Zs=Wu.then(qu))}function eh(n){Ne(n)?dr.push(...n):ni&&n.id===-1?ni.splice(rr+1,0,n):n.flags&1||(dr.push(n),n.flags|=1),Xu()}function vl(n,e,t=vn+1){for(;t<Ht.length;t++){const i=Ht[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ht.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ju(n){if(dr.length){const e=[...new Set(dr)].sort((t,i)=>es(t)-es(i));if(dr.length=0,ni){ni.push(...e);return}for(ni=e,rr=0;rr<ni.length;rr++){const t=ni[rr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ni=null,rr=0}}const es=n=>n.id==null?n.flags&2?-1:1/0:n.id;function qu(n){const e=hn;try{for(vn=0;vn<Ht.length;vn++){const t=Ht[vn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),fs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;vn<Ht.length;vn++){const t=Ht[vn];t&&(t.flags&=-2)}vn=-1,Ht.length=0,ju(),Zs=null,(Ht.length||dr.length)&&qu()}}let tn=null,Yu=null;function Js(n){const e=tn;return tn=n,Yu=n&&n.type.__scopeId||null,e}function th(n,e=tn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&wl(-1);const s=Js(e);let a;try{a=n(...r)}finally{Js(s),i._d&&wl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function xt(n,e){if(tn===null)return n;const t=xo(tn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=et]=e[r];s&&(Ge(s)&&(s={mounted:s,updated:s}),s.deep&&Hn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function vi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Xn(),An(l,t,8,[n.el,o,n,e]),jn())}}const nh=Symbol("_vte"),ih=n=>n.__isTeleport,rh=Symbol("_leaveCb");function $a(n,e){n.shapeFlag&6&&n.component?(n.transition=e,$a(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Bi(n,e){return Ge(n)?(()=>yt({name:n.name},e,{setup:n}))():n}function $u(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Qs=new WeakMap;function Gr(n,e,t,i,r=!1){if(Ne(n)){n.forEach((g,v)=>Gr(g,e&&(Ne(e)?e[v]:e),t,i,r));return}if(kr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Gr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?xo(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===et?o.refs={}:o.refs,f=o.setupState,h=Ke(f),m=f===et?_u:g=>Ze(h,g);if(c!=null&&c!==l){if(xl(e),_t(c))u[c]=null,m(c)&&(f[c]=null);else if(st(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(Ge(l))fs(l,o,12,[a,u]);else{const g=_t(l),v=st(l);if(g||v){const p=()=>{if(n.f){const d=g?m(l)?f[l]:u[l]:l.value;if(r)Ne(d)&&Ba(d,s);else if(Ne(d))d.includes(s)||d.push(s);else if(g)u[l]=[s],m(l)&&(f[l]=u[l]);else{const y=[s];l.value=y,n.k&&(u[n.k]=y)}}else g?(u[l]=a,m(l)&&(f[l]=a)):v&&(l.value=a,n.k&&(u[n.k]=a))};if(a){const d=()=>{p(),Qs.delete(n)};d.id=-1,Qs.set(n,d),jt(d,t)}else xl(n),p()}}}function xl(n){const e=Qs.get(n);e&&(e.flags|=8,Qs.delete(n))}co().requestIdleCallback;co().cancelIdleCallback;const kr=n=>!!n.type.__asyncLoader,Ku=n=>n.type.__isKeepAlive;function sh(n,e){Zu(n,"a",e)}function oh(n,e){Zu(n,"da",e)}function Zu(n,e,t=zt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(po(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ku(r.parent.vnode)&&ah(i,e,t,r),r=r.parent}}function ah(n,e,t,i){const r=po(e,n,i,!0);go(()=>{Ba(i[e],r)},t)}function po(n,e,t=zt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Xn();const o=ds(t),l=An(e,t,n,a);return o(),jn(),l});return i?r.unshift(s):r.push(s),s}}const Yn=n=>(e,t=zt)=>{(!ns||n==="sp")&&po(n,(...i)=>e(...i),t)},lh=Yn("bm"),mo=Yn("m"),ch=Yn("bu"),uh=Yn("u"),fh=Yn("bum"),go=Yn("um"),dh=Yn("sp"),hh=Yn("rtg"),ph=Yn("rtc");function mh(n,e=zt){po("ec",n,e)}const gh=Symbol.for("v-ndc");function wi(n,e,t,i){let r;const s=t&&t[i],a=Ne(n);if(a||_t(n)){const o=a&&Vn(n);let l=!1,c=!1;o&&(l=!$t(n),c=qn(n),n=uo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?gr(mn(n[u])):mn(n[u]):n[u],u,void 0,s&&s[u])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(it(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s&&s[l]));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s&&s[l])}}else r=[];return t&&(t[i]=r),r}const xa=n=>n?xf(n)?xo(n):xa(n.parent):null,Vr=yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>xa(n.parent),$root:n=>xa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ka(n),$forceUpdate:n=>n.f||(n.f=()=>{Ya(n.update)}),$nextTick:n=>n.n||(n.n=qa.bind(n.proxy)),$watch:n=>Ch.bind(n)}),No=(n,e)=>n!==et&&!n.__isScriptSetup&&Ze(n,e),_h={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(No(i,e))return a[e]=1,i[e];if(r!==et&&Ze(r,e))return a[e]=2,r[e];if(Ze(s,e))return a[e]=3,s[e];if(t!==et&&Ze(t,e))return a[e]=4,t[e];Sa&&(a[e]=0)}}const c=Vr[e];let u,f;if(c)return e==="$attrs"&&Pt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==et&&Ze(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Ze(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return No(r,e)?(r[e]=t,!0):i!==et&&Ze(i,e)?(i[e]=t,!0):Ze(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==et&&o[0]!=="$"&&Ze(n,o)||No(e,o)||Ze(s,o)||Ze(i,o)||Ze(Vr,o)||Ze(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ze(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Sl(n){return Ne(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Sa=!0;function vh(n){const e=Ka(n),t=n.proxy,i=n.ctx;Sa=!1,e.beforeCreate&&Ml(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:v,deactivated:p,beforeDestroy:d,beforeUnmount:y,destroyed:S,unmounted:x,render:b,renderTracked:C,renderTriggered:P,errorCaptured:H,serverPrefetch:M,expose:R,inheritAttrs:se,components:ge,directives:q,filters:Z}=e;if(c&&xh(c,i,null),a)for(const z in a){const $=a[z];Ge($)&&(i[z]=$.bind(t))}if(r){const z=r.call(t,t);it(z)&&(n.data=mr(z))}if(Sa=!0,s)for(const z in s){const $=s[z],ce=Ge($)?$.bind(t,t):Ge($.get)?$.get.bind(t,t):hn,de=!Ge($)&&Ge($.set)?$.set.bind(t):hn,G=Ni({get:ce,set:de});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>G.value,set:L=>G.value=L})}if(o)for(const z in o)Ju(o[z],i,t,z);if(l){const z=Ge(l)?l.call(t):l;Reflect.ownKeys(z).forEach($=>{Th($,z[$])})}u&&Ml(u,n,"c");function ae(z,$){Ne($)?$.forEach(ce=>z(ce.bind(t))):$&&z($.bind(t))}if(ae(lh,f),ae(mo,h),ae(ch,m),ae(uh,g),ae(sh,v),ae(oh,p),ae(mh,H),ae(ph,C),ae(hh,P),ae(fh,y),ae(go,x),ae(dh,M),Ne(R))if(R.length){const z=n.exposed||(n.exposed={});R.forEach($=>{Object.defineProperty(z,$,{get:()=>t[$],set:ce=>t[$]=ce,enumerable:!0})})}else n.exposed||(n.exposed={});b&&n.render===hn&&(n.render=b),se!=null&&(n.inheritAttrs=se),ge&&(n.components=ge),q&&(n.directives=q),M&&$u(n)}function xh(n,e,t=hn){Ne(n)&&(n=Ma(n));for(const i in n){const r=n[i];let s;it(r)?"default"in r?s=Wr(r.from||i,r.default,!0):s=Wr(r.from||i):s=Wr(r),st(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Ml(n,e,t){An(Ne(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ju(n,e,t,i){let r=i.includes(".")?tf(t,i):()=>t[i];if(_t(n)){const s=e[n];Ge(s)&&En(r,s)}else if(Ge(n))En(r,n.bind(t));else if(it(n))if(Ne(n))n.forEach(s=>Ju(s,e,t,i));else{const s=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(s)&&En(r,s,n)}}function Ka(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>eo(l,c,a,!0)),eo(l,e,a)),it(e)&&s.set(e,l),l}function eo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&eo(n,s,t,!0),r&&r.forEach(a=>eo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Sh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Sh={data:El,props:yl,emits:yl,methods:Nr,computed:Nr,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Nr,directives:Nr,watch:Eh,provide:El,inject:Mh};function El(n,e){return e?n?function(){return yt(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function Mh(n,e){return Nr(Ma(n),Ma(e))}function Ma(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nt(n,e){return n?[...new Set([].concat(n,e))]:e}function Nr(n,e){return n?yt(Object.create(null),n,e):e}function yl(n,e){return n?Ne(n)&&Ne(e)?[...new Set([...n,...e])]:yt(Object.create(null),Sl(n),Sl(e??{})):e}function Eh(n,e){if(!n)return e;if(!e)return n;const t=yt(Object.create(null),n);for(const i in e)t[i]=Nt(n[i],e[i]);return t}function Qu(){return{app:null,config:{isNativeTag:_u,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yh=0;function bh(n,e){return function(i,r=null){Ge(i)||(i=yt({},i)),r!=null&&!it(r)&&(r=null);const s=Qu(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:yh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:lp,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Ge(u.install)?(a.add(u),u.install(c,...f)):Ge(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const m=c._ceVNode||nn(i,r);return m.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(m,u):n(m,u,h),l=!0,c._container=u,u.__vue_app__=c,xo(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(An(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Pi;Pi=c;try{return u()}finally{Pi=f}}};return c}}let Pi=null;function Th(n,e){if(zt){let t=zt.provides;const i=zt.parent&&zt.parent.provides;i===t&&(t=zt.provides=Object.create(i)),t[n]=e}}function Wr(n,e,t=!1){const i=vf();if(i||Pi){let r=Pi?Pi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}function Ah(){return!!(vf()||Pi)}const wh=Symbol.for("v-scx"),Rh=()=>Wr(wh);function En(n,e,t){return ef(n,e,t)}function ef(n,e,t=et){const{immediate:i,deep:r,flush:s,once:a}=t,o=yt({},t),l=e&&i||!e&&s!=="post";let c;if(ns){if(s==="sync"){const m=Rh();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=hn,m.resume=hn,m.pause=hn,m}}const u=zt;o.call=(m,g,v)=>An(m,u,g,v);let f=!1;s==="post"?o.scheduler=m=>{jt(m,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,g)=>{g?m():Ya(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=Zd(n,e,o);return ns&&(c?c.push(h):l&&h()),h}function Ch(n,e,t){const i=this.proxy,r=_t(n)?n.includes(".")?tf(i,n):()=>i[n]:n.bind(i,i);let s;Ge(e)?s=e:(s=e.handler,t=e);const a=ds(this),o=ef(r,s.bind(i),t);return a(),o}function tf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Ph=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${fi(e)}Modifiers`]||n[`${pi(e)}Modifiers`];function Lh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||et;let r=t;const s=e.startsWith("update:"),a=s&&Ph(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>_t(u)?u.trim():u)),a.number&&(r=t.map(lo)));let o,l=i[o=Po(e)]||i[o=Po(fi(e))];!l&&s&&(l=i[o=Po(pi(e))]),l&&An(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,An(c,n,6,r)}}const Uh=new WeakMap;function nf(n,e,t=!1){const i=t?Uh:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ge(n)){const l=c=>{const u=nf(c,e,!0);u&&(o=!0,yt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(it(n)&&i.set(n,null),null):(Ne(s)?s.forEach(l=>a[l]=null):yt(a,s),it(n)&&i.set(n,a),a)}function _o(n,e){return!n||!so(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ze(n,e[0].toLowerCase()+e.slice(1))||Ze(n,pi(e))||Ze(n,e))}function Fo(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:g,inheritAttrs:v}=n,p=Js(n);let d,y;try{if(t.shapeFlag&4){const x=r||i,b=x;d=xn(c.call(b,x,u,f,m,h,g)),y=o}else{const x=e;d=xn(x.length>1?x(f,{attrs:o,slots:a,emit:l}):x(f,null)),y=e.props?o:Dh(o)}}catch(x){Xr.length=0,ho(x,n,1),d=nn(di)}let S=d;if(y&&v!==!1){const x=Object.keys(y),{shapeFlag:b}=S;x.length&&b&7&&(s&&x.some(Oa)&&(y=Ih(y,s)),S=_r(S,y,!1,!0))}return t.dirs&&(S=_r(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&$a(S,t.transition),d=S,Js(p),d}const Dh=n=>{let e;for(const t in n)(t==="class"||t==="style"||so(t))&&((e||(e={}))[t]=n[t]);return e},Ih=(n,e)=>{const t={};for(const i in n)(!Oa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Nh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?bl(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!_o(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?bl(i,a,c):!0:!!a;return!1}function bl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!_o(t,s))return!0}return!1}function Fh({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const rf={},sf=()=>Object.create(rf),of=n=>Object.getPrototypeOf(n)===rf;function Oh(n,e,t,i=!1){const r={},s=sf();n.propsDefaults=Object.create(null),af(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Gd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Bh(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ke(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(_o(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ze(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=fi(h);r[g]=Ea(l,o,g,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{af(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Ze(e,f)&&((u=pi(f))===f||!Ze(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ea(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ze(e,f))&&(delete s[f],c=!0)}c&&Bn(n.attrs,"set","")}function af(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Br(l))continue;const c=e[l];let u;r&&Ze(r,u=fi(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:_o(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ke(t),c=o||et;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ea(r,l,f,c[f],n,!Ze(c,f))}}return a}function Ea(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Ze(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ge(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ds(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===pi(t))&&(i=!0))}return i}const Hh=new WeakMap;function lf(n,e,t=!1){const i=t?Hh:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ge(n)){const u=f=>{l=!0;const[h,m]=lf(f,e,!0);yt(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return it(n)&&i.set(n,ur),ur;if(Ne(s))for(let u=0;u<s.length;u++){const f=fi(s[u]);Tl(f)&&(a[f]=et)}else if(s)for(const u in s){const f=fi(u);if(Tl(f)){const h=s[u],m=a[f]=Ne(h)||Ge(h)?{type:h}:yt({},h),g=m.type;let v=!1,p=!0;if(Ne(g))for(let d=0;d<g.length;++d){const y=g[d],S=Ge(y)&&y.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(p=!1)}else v=Ge(g)&&g.name==="Boolean";m[0]=v,m[1]=p,(v||Ze(m,"default"))&&o.push(f)}}const c=[a,o];return it(n)&&i.set(n,c),c}function Tl(n){return n[0]!=="$"&&!Br(n)}const Za=n=>n==="_"||n==="_ctx"||n==="$stable",Ja=n=>Ne(n)?n.map(xn):[xn(n)],zh=(n,e,t)=>{if(e._n)return e;const i=th((...r)=>Ja(e(...r)),t);return i._c=!1,i},cf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Za(r))continue;const s=n[r];if(Ge(s))e[r]=zh(r,s,i);else if(s!=null){const a=Ja(s);e[r]=()=>a}}},uf=(n,e)=>{const t=Ja(e);n.slots.default=()=>t},ff=(n,e,t)=>{for(const i in e)(t||!Za(i))&&(n[i]=e[i])},Gh=(n,e,t)=>{const i=n.slots=sf();if(n.vnode.shapeFlag&32){const r=e._;r?(ff(i,e,t),t&&Eu(i,"_",r,!0)):cf(e,i)}else e&&uf(n,e)},kh=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=et;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:ff(r,e,t):(s=!e.$stable,cf(e,r)),a=e}else e&&(uf(n,e),a={default:1});if(s)for(const o in r)!Za(o)&&a[o]==null&&delete r[o]},jt=qh;function Vh(n){return Wh(n)}function Wh(n,e){const t=co();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=hn,insertStaticContent:g}=n,v=(T,w,N,B=null,X=null,Y=null,re=void 0,fe=null,he=!!w.dynamicChildren)=>{if(T===w)return;T&&!Pr(T,w)&&(B=Pe(T),L(T,X,Y,!0),T=null),w.patchFlag===-2&&(he=!1,w.dynamicChildren=null);const{type:oe,ref:E,shapeFlag:_}=w;switch(oe){case vo:p(T,w,N,B);break;case di:d(T,w,N,B);break;case Ws:T==null&&y(w,N,B,re);break;case ut:ge(T,w,N,B,X,Y,re,fe,he);break;default:_&1?b(T,w,N,B,X,Y,re,fe,he):_&6?q(T,w,N,B,X,Y,re,fe,he):(_&64||_&128)&&oe.process(T,w,N,B,X,Y,re,fe,he,pe)}E!=null&&X?Gr(E,T&&T.ref,Y,w||T,!w):E==null&&T&&T.ref!=null&&Gr(T.ref,null,Y,T,!0)},p=(T,w,N,B)=>{if(T==null)i(w.el=o(w.children),N,B);else{const X=w.el=T.el;w.children!==T.children&&c(X,w.children)}},d=(T,w,N,B)=>{T==null?i(w.el=l(w.children||""),N,B):w.el=T.el},y=(T,w,N,B)=>{[T.el,T.anchor]=g(T.children,w,N,B,T.el,T.anchor)},S=({el:T,anchor:w},N,B)=>{let X;for(;T&&T!==w;)X=h(T),i(T,N,B),T=X;i(w,N,B)},x=({el:T,anchor:w})=>{let N;for(;T&&T!==w;)N=h(T),r(T),T=N;r(w)},b=(T,w,N,B,X,Y,re,fe,he)=>{if(w.type==="svg"?re="svg":w.type==="math"&&(re="mathml"),T==null)C(w,N,B,X,Y,re,fe,he);else{const oe=T.el&&T.el._isVueCE?T.el:null;try{oe&&oe._beginPatch(),M(T,w,X,Y,re,fe,he)}finally{oe&&oe._endPatch()}}},C=(T,w,N,B,X,Y,re,fe)=>{let he,oe;const{props:E,shapeFlag:_,transition:U,dirs:Q}=T;if(he=T.el=a(T.type,Y,E&&E.is,E),_&8?u(he,T.children):_&16&&H(T.children,he,null,B,X,Oo(T,Y),re,fe),Q&&vi(T,null,B,"created"),P(he,T,T.scopeId,re,B),E){for(const ue in E)ue!=="value"&&!Br(ue)&&s(he,ue,null,E[ue],Y,B);"value"in E&&s(he,"value",null,E.value,Y),(oe=E.onVnodeBeforeMount)&&_n(oe,B,T)}Q&&vi(T,null,B,"beforeMount");const te=Xh(X,U);te&&U.beforeEnter(he),i(he,w,N),((oe=E&&E.onVnodeMounted)||te||Q)&&jt(()=>{oe&&_n(oe,B,T),te&&U.enter(he),Q&&vi(T,null,B,"mounted")},X)},P=(T,w,N,B,X)=>{if(N&&m(T,N),B)for(let Y=0;Y<B.length;Y++)m(T,B[Y]);if(X){let Y=X.subTree;if(w===Y||pf(Y.type)&&(Y.ssContent===w||Y.ssFallback===w)){const re=X.vnode;P(T,re,re.scopeId,re.slotScopeIds,X.parent)}}},H=(T,w,N,B,X,Y,re,fe,he=0)=>{for(let oe=he;oe<T.length;oe++){const E=T[oe]=fe?ii(T[oe]):xn(T[oe]);v(null,E,w,N,B,X,Y,re,fe)}},M=(T,w,N,B,X,Y,re)=>{const fe=w.el=T.el;let{patchFlag:he,dynamicChildren:oe,dirs:E}=w;he|=T.patchFlag&16;const _=T.props||et,U=w.props||et;let Q;if(N&&xi(N,!1),(Q=U.onVnodeBeforeUpdate)&&_n(Q,N,w,T),E&&vi(w,T,N,"beforeUpdate"),N&&xi(N,!0),(_.innerHTML&&U.innerHTML==null||_.textContent&&U.textContent==null)&&u(fe,""),oe?R(T.dynamicChildren,oe,fe,N,B,Oo(w,X),Y):re||$(T,w,fe,null,N,B,Oo(w,X),Y,!1),he>0){if(he&16)se(fe,_,U,N,X);else if(he&2&&_.class!==U.class&&s(fe,"class",null,U.class,X),he&4&&s(fe,"style",_.style,U.style,X),he&8){const te=w.dynamicProps;for(let ue=0;ue<te.length;ue++){const xe=te[ue],me=_[xe],V=U[xe];(V!==me||xe==="value")&&s(fe,xe,me,V,X,N)}}he&1&&T.children!==w.children&&u(fe,w.children)}else!re&&oe==null&&se(fe,_,U,N,X);((Q=U.onVnodeUpdated)||E)&&jt(()=>{Q&&_n(Q,N,w,T),E&&vi(w,T,N,"updated")},B)},R=(T,w,N,B,X,Y,re)=>{for(let fe=0;fe<w.length;fe++){const he=T[fe],oe=w[fe],E=he.el&&(he.type===ut||!Pr(he,oe)||he.shapeFlag&198)?f(he.el):N;v(he,oe,E,null,B,X,Y,re,!0)}},se=(T,w,N,B,X)=>{if(w!==N){if(w!==et)for(const Y in w)!Br(Y)&&!(Y in N)&&s(T,Y,w[Y],null,X,B);for(const Y in N){if(Br(Y))continue;const re=N[Y],fe=w[Y];re!==fe&&Y!=="value"&&s(T,Y,fe,re,X,B)}"value"in N&&s(T,"value",w.value,N.value,X)}},ge=(T,w,N,B,X,Y,re,fe,he)=>{const oe=w.el=T?T.el:o(""),E=w.anchor=T?T.anchor:o("");let{patchFlag:_,dynamicChildren:U,slotScopeIds:Q}=w;Q&&(fe=fe?fe.concat(Q):Q),T==null?(i(oe,N,B),i(E,N,B),H(w.children||[],N,E,X,Y,re,fe,he)):_>0&&_&64&&U&&T.dynamicChildren?(R(T.dynamicChildren,U,N,X,Y,re,fe),(w.key!=null||X&&w===X.subTree)&&df(T,w,!0)):$(T,w,N,E,X,Y,re,fe,he)},q=(T,w,N,B,X,Y,re,fe,he)=>{w.slotScopeIds=fe,T==null?w.shapeFlag&512?X.ctx.activate(w,N,B,re,he):Z(w,N,B,X,Y,re,he):J(T,w,he)},Z=(T,w,N,B,X,Y,re)=>{const fe=T.component=np(T,B,X);if(Ku(T)&&(fe.ctx.renderer=pe),ip(fe,!1,re),fe.asyncDep){if(X&&X.registerDep(fe,ae,re),!T.el){const he=fe.subTree=nn(di);d(null,he,w,N),T.placeholder=he.el}}else ae(fe,T,w,N,X,Y,re)},J=(T,w,N)=>{const B=w.component=T.component;if(Nh(T,w,N))if(B.asyncDep&&!B.asyncResolved){z(B,w,N);return}else B.next=w,B.update();else w.el=T.el,B.vnode=w},ae=(T,w,N,B,X,Y,re)=>{const fe=()=>{if(T.isMounted){let{next:_,bu:U,u:Q,parent:te,vnode:ue}=T;{const Te=hf(T);if(Te){_&&(_.el=ue.el,z(T,_,re)),Te.asyncDep.then(()=>{T.isUnmounted||fe()});return}}let xe=_,me;xi(T,!1),_?(_.el=ue.el,z(T,_,re)):_=ue,U&&Vs(U),(me=_.props&&_.props.onVnodeBeforeUpdate)&&_n(me,te,_,ue),xi(T,!0);const V=Fo(T),we=T.subTree;T.subTree=V,v(we,V,f(we.el),Pe(we),T,X,Y),_.el=V.el,xe===null&&Fh(T,V.el),Q&&jt(Q,X),(me=_.props&&_.props.onVnodeUpdated)&&jt(()=>_n(me,te,_,ue),X)}else{let _;const{el:U,props:Q}=w,{bm:te,m:ue,parent:xe,root:me,type:V}=T,we=kr(w);if(xi(T,!1),te&&Vs(te),!we&&(_=Q&&Q.onVnodeBeforeMount)&&_n(_,xe,w),xi(T,!0),U&&F){const Te=()=>{T.subTree=Fo(T),F(U,T.subTree,T,X,null)};we&&V.__asyncHydrate?V.__asyncHydrate(U,T,Te):Te()}else{me.ce&&me.ce._def.shadowRoot!==!1&&me.ce._injectChildStyle(V);const Te=T.subTree=Fo(T);v(null,Te,N,B,T,X,Y),w.el=Te.el}if(ue&&jt(ue,X),!we&&(_=Q&&Q.onVnodeMounted)){const Te=w;jt(()=>_n(_,xe,Te),X)}(w.shapeFlag&256||xe&&kr(xe.vnode)&&xe.vnode.shapeFlag&256)&&T.a&&jt(T.a,X),T.isMounted=!0,w=N=B=null}};T.scope.on();const he=T.effect=new Cu(fe);T.scope.off();const oe=T.update=he.run.bind(he),E=T.job=he.runIfDirty.bind(he);E.i=T,E.id=T.uid,he.scheduler=()=>Ya(E),xi(T,!0),oe()},z=(T,w,N)=>{w.component=T;const B=T.vnode.props;T.vnode=w,T.next=null,Bh(T,w.props,B,N),kh(T,w.children,N),Xn(),vl(T),jn()},$=(T,w,N,B,X,Y,re,fe,he=!1)=>{const oe=T&&T.children,E=T?T.shapeFlag:0,_=w.children,{patchFlag:U,shapeFlag:Q}=w;if(U>0){if(U&128){de(oe,_,N,B,X,Y,re,fe,he);return}else if(U&256){ce(oe,_,N,B,X,Y,re,fe,he);return}}Q&8?(E&16&&ee(oe,X,Y),_!==oe&&u(N,_)):E&16?Q&16?de(oe,_,N,B,X,Y,re,fe,he):ee(oe,X,Y,!0):(E&8&&u(N,""),Q&16&&H(_,N,B,X,Y,re,fe,he))},ce=(T,w,N,B,X,Y,re,fe,he)=>{T=T||ur,w=w||ur;const oe=T.length,E=w.length,_=Math.min(oe,E);let U;for(U=0;U<_;U++){const Q=w[U]=he?ii(w[U]):xn(w[U]);v(T[U],Q,N,null,X,Y,re,fe,he)}oe>E?ee(T,X,Y,!0,!1,_):H(w,N,B,X,Y,re,fe,he,_)},de=(T,w,N,B,X,Y,re,fe,he)=>{let oe=0;const E=w.length;let _=T.length-1,U=E-1;for(;oe<=_&&oe<=U;){const Q=T[oe],te=w[oe]=he?ii(w[oe]):xn(w[oe]);if(Pr(Q,te))v(Q,te,N,null,X,Y,re,fe,he);else break;oe++}for(;oe<=_&&oe<=U;){const Q=T[_],te=w[U]=he?ii(w[U]):xn(w[U]);if(Pr(Q,te))v(Q,te,N,null,X,Y,re,fe,he);else break;_--,U--}if(oe>_){if(oe<=U){const Q=U+1,te=Q<E?w[Q].el:B;for(;oe<=U;)v(null,w[oe]=he?ii(w[oe]):xn(w[oe]),N,te,X,Y,re,fe,he),oe++}}else if(oe>U)for(;oe<=_;)L(T[oe],X,Y,!0),oe++;else{const Q=oe,te=oe,ue=new Map;for(oe=te;oe<=U;oe++){const Ee=w[oe]=he?ii(w[oe]):xn(w[oe]);Ee.key!=null&&ue.set(Ee.key,oe)}let xe,me=0;const V=U-te+1;let we=!1,Te=0;const Le=new Array(V);for(oe=0;oe<V;oe++)Le[oe]=0;for(oe=Q;oe<=_;oe++){const Ee=T[oe];if(me>=V){L(Ee,X,Y,!0);continue}let Fe;if(Ee.key!=null)Fe=ue.get(Ee.key);else for(xe=te;xe<=U;xe++)if(Le[xe-te]===0&&Pr(Ee,w[xe])){Fe=xe;break}Fe===void 0?L(Ee,X,Y,!0):(Le[Fe-te]=oe+1,Fe>=Te?Te=Fe:we=!0,v(Ee,w[Fe],N,null,X,Y,re,fe,he),me++)}const Re=we?jh(Le):ur;for(xe=Re.length-1,oe=V-1;oe>=0;oe--){const Ee=te+oe,Fe=w[Ee],Je=w[Ee+1],D=Ee+1<E?Je.el||Je.placeholder:B;Le[oe]===0?v(null,Fe,N,D,X,Y,re,fe,he):we&&(xe<0||oe!==Re[xe]?G(Fe,N,D,2):xe--)}}},G=(T,w,N,B,X=null)=>{const{el:Y,type:re,transition:fe,children:he,shapeFlag:oe}=T;if(oe&6){G(T.component.subTree,w,N,B);return}if(oe&128){T.suspense.move(w,N,B);return}if(oe&64){re.move(T,w,N,pe);return}if(re===ut){i(Y,w,N);for(let _=0;_<he.length;_++)G(he[_],w,N,B);i(T.anchor,w,N);return}if(re===Ws){S(T,w,N);return}if(B!==2&&oe&1&&fe)if(B===0)fe.beforeEnter(Y),i(Y,w,N),jt(()=>fe.enter(Y),X);else{const{leave:_,delayLeave:U,afterLeave:Q}=fe,te=()=>{T.ctx.isUnmounted?r(Y):i(Y,w,N)},ue=()=>{Y._isLeaving&&Y[rh](!0),_(Y,()=>{te(),Q&&Q()})};U?U(Y,te,ue):ue()}else i(Y,w,N)},L=(T,w,N,B=!1,X=!1)=>{const{type:Y,props:re,ref:fe,children:he,dynamicChildren:oe,shapeFlag:E,patchFlag:_,dirs:U,cacheIndex:Q}=T;if(_===-2&&(X=!1),fe!=null&&(Xn(),Gr(fe,null,N,T,!0),jn()),Q!=null&&(w.renderCache[Q]=void 0),E&256){w.ctx.deactivate(T);return}const te=E&1&&U,ue=!kr(T);let xe;if(ue&&(xe=re&&re.onVnodeBeforeUnmount)&&_n(xe,w,T),E&6)ve(T.component,N,B);else{if(E&128){T.suspense.unmount(N,B);return}te&&vi(T,null,w,"beforeUnmount"),E&64?T.type.remove(T,w,N,pe,B):oe&&!oe.hasOnce&&(Y!==ut||_>0&&_&64)?ee(oe,w,N,!1,!0):(Y===ut&&_&384||!X&&E&16)&&ee(he,w,N),B&&I(T)}(ue&&(xe=re&&re.onVnodeUnmounted)||te)&&jt(()=>{xe&&_n(xe,w,T),te&&vi(T,null,w,"unmounted")},N)},I=T=>{const{type:w,el:N,anchor:B,transition:X}=T;if(w===ut){_e(N,B);return}if(w===Ws){x(T);return}const Y=()=>{r(N),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(T.shapeFlag&1&&X&&!X.persisted){const{leave:re,delayLeave:fe}=X,he=()=>re(N,Y);fe?fe(T.el,Y,he):he()}else Y()},_e=(T,w)=>{let N;for(;T!==w;)N=h(T),r(T),T=N;r(w)},ve=(T,w,N)=>{const{bum:B,scope:X,job:Y,subTree:re,um:fe,m:he,a:oe}=T;Al(he),Al(oe),B&&Vs(B),X.stop(),Y&&(Y.flags|=8,L(re,T,w,N)),fe&&jt(fe,w),jt(()=>{T.isUnmounted=!0},w)},ee=(T,w,N,B=!1,X=!1,Y=0)=>{for(let re=Y;re<T.length;re++)L(T[re],w,N,B,X)},Pe=T=>{if(T.shapeFlag&6)return Pe(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const w=h(T.anchor||T.el),N=w&&w[nh];return N?h(N):w};let Ae=!1;const ke=(T,w,N)=>{T==null?w._vnode&&L(w._vnode,null,null,!0):v(w._vnode||null,T,w,null,null,null,N),w._vnode=T,Ae||(Ae=!0,vl(),ju(),Ae=!1)},pe={p:v,um:L,m:G,r:I,mt:Z,mc:H,pc:$,pbc:R,n:Pe,o:n};let le,F;return e&&([le,F]=e(pe)),{render:ke,hydrate:le,createApp:bh(ke,le)}}function Oo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function xi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Xh(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function df(n,e,t=!1){const i=n.children,r=e.children;if(Ne(i)&&Ne(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ii(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&df(a,o)),o.type===vo&&o.patchFlag!==-1&&(o.el=a.el),o.type===di&&!o.el&&(o.el=a.el)}}function jh(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function hf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hf(e)}function Al(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const pf=n=>n.__isSuspense;function qh(n,e){e&&e.pendingBranch?Ne(n)?e.effects.push(...n):e.effects.push(n):eh(n)}const ut=Symbol.for("v-fgt"),vo=Symbol.for("v-txt"),di=Symbol.for("v-cmt"),Ws=Symbol.for("v-stc"),Xr=[];let Yt=null;function Ue(n=!1){Xr.push(Yt=n?null:[])}function Yh(){Xr.pop(),Yt=Xr[Xr.length-1]||null}let ts=1;function wl(n,e=!1){ts+=n,n<0&&Yt&&e&&(Yt.hasOnce=!0)}function mf(n){return n.dynamicChildren=ts>0?Yt||ur:null,Yh(),ts>0&&Yt&&Yt.push(n),n}function De(n,e,t,i,r,s){return mf(O(n,e,t,i,r,s,!0))}function lr(n,e,t,i,r){return mf(nn(n,e,t,i,r,!0))}function gf(n){return n?n.__v_isVNode===!0:!1}function Pr(n,e){return n.type===e.type&&n.key===e.key}const _f=({key:n})=>n??null,Xs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?_t(n)||st(n)||Ge(n)?{i:tn,r:n,k:e,f:!!t}:n:null);function O(n,e=null,t=null,i=0,r=null,s=n===ut?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&_f(e),ref:e&&Xs(e),scopeId:Yu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:tn};return o?(Qa(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),ts>0&&!a&&Yt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Yt.push(l),l}const nn=$h;function $h(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===gh)&&(n=di),gf(n)){const o=_r(n,e,!0);return t&&Qa(o,t),ts>0&&!s&&Yt&&(o.shapeFlag&6?Yt[Yt.indexOf(n)]=o:Yt.push(o)),o.patchFlag=-2,o}if(ap(n)&&(n=n.__vccOpts),e){e=Kh(e);let{class:o,style:l}=e;o&&!_t(o)&&(e.class=qt(o)),it(l)&&(fo(l)&&!Ne(l)&&(l=yt({},l)),e.style=ln(l))}const a=_t(n)?1:pf(n)?128:ih(n)?64:it(n)?4:Ge(n)?2:0;return O(n,e,t,i,r,a,s,!0)}function Kh(n){return n?fo(n)||of(n)?yt({},n):n:null}function _r(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Qh(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&_f(c),ref:e&&e.ref?t&&s?Ne(s)?s.concat(Xs(e)):[s,Xs(e)]:Xs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ut?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&_r(n.ssContent),ssFallback:n.ssFallback&&_r(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&$a(u,l.clone(u)),u}function Zh(n=" ",e=0){return nn(vo,null,n,e)}function Jh(n,e){const t=nn(Ws,null,n);return t.staticCount=e,t}function lt(n="",e=!1){return e?(Ue(),lr(di,null,n)):nn(di,null,n)}function xn(n){return n==null||typeof n=="boolean"?nn(di):Ne(n)?nn(ut,null,n.slice()):gf(n)?ii(n):nn(vo,null,String(n))}function ii(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:_r(n)}function Qa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Qa(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!of(e)?e._ctx=tn:r===3&&tn&&(tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:tn},t=32):(e=String(e),i&64?(t=16,e=[Zh(e)]):t=8);n.children=e,n.shapeFlag|=t}function Qh(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=qt([e.class,i.class]));else if(r==="style")e.style=ln([e.style,i.style]);else if(so(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ne(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function _n(n,e,t,i=null){An(n,e,7,[t,i])}const ep=Qu();let tp=0;function np(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||ep,s={uid:tp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Au(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lf(i,r),emitsOptions:nf(i,r),emit:null,emitted:null,propsDefaults:et,inheritAttrs:i.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Lh.bind(null,s),n.ce&&n.ce(s),s}let zt=null;const vf=()=>zt||tn;let to,ya;{const n=co(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};to=e("__VUE_INSTANCE_SETTERS__",t=>zt=t),ya=e("__VUE_SSR_SETTERS__",t=>ns=t)}const ds=n=>{const e=zt;return to(n),n.scope.on(),()=>{n.scope.off(),to(e)}},Rl=()=>{zt&&zt.scope.off(),to(null)};function xf(n){return n.vnode.shapeFlag&4}let ns=!1;function ip(n,e=!1,t=!1){e&&ya(e);const{props:i,children:r}=n.vnode,s=xf(n);Oh(n,i,s,e),Gh(n,r,t||e);const a=s?rp(n,e):void 0;return e&&ya(!1),a}function rp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,_h);const{setup:i}=t;if(i){Xn();const r=n.setupContext=i.length>1?op(n):null,s=ds(n),a=fs(i,n,0,[n.props,r]),o=vu(a);if(jn(),s(),(o||n.sp)&&!kr(n)&&$u(n),o){if(a.then(Rl,Rl),e)return a.then(l=>{Cl(n,l,e)}).catch(l=>{ho(l,n,0)});n.asyncDep=a}else Cl(n,a,e)}else Sf(n,e)}function Cl(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:it(e)&&(n.setupState=Vu(e)),Sf(n,t)}let Pl;function Sf(n,e,t){const i=n.type;if(!n.render){if(!e&&Pl&&!i.render){const r=i.template||Ka(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=yt(yt({isCustomElement:s,delimiters:o},a),l);i.render=Pl(r,c)}}n.render=i.render||hn}{const r=ds(n);Xn();try{vh(n)}finally{jn(),r()}}}const sp={get(n,e){return Pt(n,"get",""),n[e]}};function op(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,sp),slots:n.slots,emit:n.emit,expose:e}}function xo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Vu(ja(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Vr)return Vr[t](n)},has(e,t){return t in e||t in Vr}})):n.proxy}function ap(n){return Ge(n)&&"__vccOpts"in n}const Ni=(n,e)=>$d(n,e,ns),lp="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ba;const Ll=typeof window<"u"&&window.trustedTypes;if(Ll)try{ba=Ll.createPolicy("vue",{createHTML:n=>n})}catch{}const Mf=ba?n=>ba.createHTML(n):n=>n,cp="http://www.w3.org/2000/svg",up="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,Ul=On&&On.createElement("template"),fp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?On.createElementNS(cp,n):e==="mathml"?On.createElementNS(up,n):t?On.createElement(n,{is:t}):On.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>On.createTextNode(n),createComment:n=>On.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>On.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ul.innerHTML=Mf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Ul.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},dp=Symbol("_vtc");function hp(n,e,t){const i=n[dp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Dl=Symbol("_vod"),pp=Symbol("_vsh"),mp=Symbol(""),gp=/(?:^|;)\s*display\s*:/;function _p(n,e,t){const i=n.style,r=_t(t);let s=!1;if(t&&!r){if(e)if(_t(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&js(i,o,"")}else for(const a in e)t[a]==null&&js(i,a,"");for(const a in t)a==="display"&&(s=!0),js(i,a,t[a])}else if(r){if(e!==t){const a=i[mp];a&&(t+=";"+a),i.cssText=t,s=gp.test(t)}}else e&&n.removeAttribute("style");Dl in n&&(n[Dl]=s?i.display:"",n[pp]&&(i.display="none"))}const Il=/\s*!important$/;function js(n,e,t){if(Ne(t))t.forEach(i=>js(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=vp(n,e);Il.test(t)?n.setProperty(pi(i),t.replace(Il,""),"important"):n[i]=t}}const Nl=["Webkit","Moz","ms"],Bo={};function vp(n,e){const t=Bo[e];if(t)return t;let i=fi(e);if(i!=="filter"&&i in n)return Bo[e]=i;i=Mu(i);for(let r=0;r<Nl.length;r++){const s=Nl[r]+i;if(s in n)return Bo[e]=s}return e}const Fl="http://www.w3.org/1999/xlink";function Ol(n,e,t,i,r,s=xd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Fl,e.slice(6,e.length)):n.setAttributeNS(Fl,e,t):t==null||s&&!yu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Tn(t)?String(t):t)}function Bl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Mf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=yu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function ri(n,e,t,i){n.addEventListener(e,t,i)}function xp(n,e,t,i){n.removeEventListener(e,t,i)}const Hl=Symbol("_vei");function Sp(n,e,t,i,r=null){const s=n[Hl]||(n[Hl]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Mp(e);if(i){const c=s[e]=bp(i,r);ri(n,o,c,l)}else a&&(xp(n,o,a,l),s[e]=void 0)}}const zl=/(?:Once|Passive|Capture)$/;function Mp(n){let e;if(zl.test(n)){e={};let i;for(;i=n.match(zl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):pi(n.slice(2)),e]}let Ho=0;const Ep=Promise.resolve(),yp=()=>Ho||(Ep.then(()=>Ho=0),Ho=Date.now());function bp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;An(Tp(i,t.value),e,5,[i])};return t.value=n,t.attached=yp(),t}function Tp(n,e){if(Ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Gl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ap=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?hp(n,i,a):e==="style"?_p(n,t,i):so(e)?Oa(e)||Sp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wp(n,e,i,a))?(Bl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ol(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!_t(i))?Bl(n,fi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ol(n,e,i,a))};function wp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Gl(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Gl(e)&&_t(t)?!1:e in n}const vr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ne(e)?t=>Vs(e,t):e};function Rp(n){n.target.composing=!0}function kl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wn=Symbol("_assign");function Vl(n,e,t){return e&&(n=n.trim()),t&&(n=lo(n)),n}const Rt={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Wn]=vr(r);const s=i||r.props&&r.props.type==="number";ri(n,e?"change":"input",a=>{a.target.composing||n[Wn](Vl(n.value,t,s))}),(t||s)&&ri(n,"change",()=>{n.value=Vl(n.value,t,s)}),e||(ri(n,"compositionstart",Rp),ri(n,"compositionend",kl),ri(n,"change",kl))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[Wn]=vr(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?lo(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Cp={deep:!0,created(n,e,t){n[Wn]=vr(t),ri(n,"change",()=>{const i=n._modelValue,r=is(n),s=n.checked,a=n[Wn];if(Ne(i)){const o=Ha(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const c=[...i];c.splice(o,1),a(c)}}else if(yr(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(Ef(n,s))})},mounted:Wl,beforeUpdate(n,e,t){n[Wn]=vr(t),Wl(n,e,t)}};function Wl(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(Ne(e))r=Ha(e,i.props.value)>-1;else if(yr(e))r=e.has(i.props.value);else{if(e===t)return;r=us(e,Ef(n,!0))}n.checked!==r&&(n.checked=r)}const Xl={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=yr(e);ri(n,"change",()=>{const s=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>t?lo(is(a)):is(a));n[Wn](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,qa(()=>{n._assigning=!1})}),n[Wn]=vr(i)},mounted(n,{value:e}){jl(n,e)},beforeUpdate(n,e,t){n[Wn]=vr(t)},updated(n,{value:e}){n._assigning||jl(n,e)}};function jl(n,e){const t=n.multiple,i=Ne(e);if(!(t&&!i&&!yr(e))){for(let r=0,s=n.options.length;r<s;r++){const a=n.options[r],o=is(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=Ha(e,o)>-1}else a.selected=e.has(o);else if(us(is(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function is(n){return"_value"in n?n._value:n.value}function Ef(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Pp=["ctrl","shift","alt","meta"],Lp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Pp.some(t=>n[`${t}Key`]&&!e.includes(t))},Gn=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=Lp[e[a]];if(o&&o(r,e))return}return n(r,...s)})},Up={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Dp=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=pi(r.key);if(e.some(a=>a===s||Up[a]===s))return n(r)})},Ip=yt({patchProp:Ap},fp);let ql;function Np(){return ql||(ql=Vh(Ip))}const Fp=(...n)=>{const e=Np().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Bp(i);if(!r)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Op(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Op(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Bp(n){return _t(n)?document.querySelector(n):n}var Hp=!1;/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let yf;const So=n=>yf=n,bf=Symbol();function Ta(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var jr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(jr||(jr={}));function zp(){const n=wu(!0),e=n.run(()=>ze({}));let t=[],i=[];const r=ja({install(s){So(r),r._a=s,s.provide(bf,r),s.config.globalProperties.$pinia=r,i.forEach(a=>t.push(a)),i=[]},use(s){return!this._a&&!Hp?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const Tf=()=>{};function Yl(n,e,t,i=Tf){n.push(e);const r=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),i())};return!t&&Ru()&&Md(r),r}function Gi(n,...e){n.slice().forEach(t=>{t(...e)})}const Gp=n=>n(),$l=Symbol(),zo=Symbol();function Aa(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];Ta(r)&&Ta(i)&&n.hasOwnProperty(t)&&!st(i)&&!Vn(i)?n[t]=Aa(r,i):n[t]=i}return n}const kp=Symbol();function Vp(n){return!Ta(n)||!n.hasOwnProperty(kp)}const{assign:ei}=Object;function Wp(n){return!!(st(n)&&n.effect)}function Xp(n,e,t,i){const{state:r,actions:s,getters:a}=e,o=t.state.value[n];let l;function c(){o||(t.state.value[n]=r?r():{});const u=Xd(t.state.value[n]);return ei(u,s,Object.keys(a||{}).reduce((f,h)=>(f[h]=ja(Ni(()=>{So(t);const m=t._s.get(n);return a[h].call(m,m)})),f),{}))}return l=Af(n,c,e,t,i,!0),l}function Af(n,e,t={},i,r,s){let a;const o=ei({actions:{}},t),l={deep:!0};let c,u,f=[],h=[],m;const g=i.state.value[n];!s&&!g&&(i.state.value[n]={}),ze({});let v;function p(H){let M;c=u=!1,typeof H=="function"?(H(i.state.value[n]),M={type:jr.patchFunction,storeId:n,events:m}):(Aa(i.state.value[n],H),M={type:jr.patchObject,payload:H,storeId:n,events:m});const R=v=Symbol();qa().then(()=>{v===R&&(c=!0)}),u=!0,Gi(f,M,i.state.value[n])}const d=s?function(){const{state:M}=t,R=M?M():{};this.$patch(se=>{ei(se,R)})}:Tf;function y(){a.stop(),f=[],h=[],i._s.delete(n)}const S=(H,M="")=>{if($l in H)return H[zo]=M,H;const R=function(){So(i);const se=Array.from(arguments),ge=[],q=[];function Z(z){ge.push(z)}function J(z){q.push(z)}Gi(h,{args:se,name:R[zo],store:b,after:Z,onError:J});let ae;try{ae=H.apply(this&&this.$id===n?this:b,se)}catch(z){throw Gi(q,z),z}return ae instanceof Promise?ae.then(z=>(Gi(ge,z),z)).catch(z=>(Gi(q,z),Promise.reject(z))):(Gi(ge,ae),ae)};return R[$l]=!0,R[zo]=M,R},x={_p:i,$id:n,$onAction:Yl.bind(null,h),$patch:p,$reset:d,$subscribe(H,M={}){const R=Yl(f,H,M.detached,()=>se()),se=a.run(()=>En(()=>i.state.value[n],ge=>{(M.flush==="sync"?u:c)&&H({storeId:n,type:jr.direct,events:m},ge)},ei({},l,M)));return R},$dispose:y},b=mr(x);i._s.set(n,b);const P=(i._a&&i._a.runWithContext||Gp)(()=>i._e.run(()=>(a=wu()).run(()=>e({action:S}))));for(const H in P){const M=P[H];if(st(M)&&!Wp(M)||Vn(M))s||(g&&Vp(M)&&(st(M)?M.value=g[H]:Aa(M,g[H])),i.state.value[n][H]=M);else if(typeof M=="function"){const R=S(M,H);P[H]=R,o.actions[H]=M}}return ei(b,P),ei(Ke(b),P),Object.defineProperty(b,"$state",{get:()=>i.state.value[n],set:H=>{p(M=>{ei(M,H)})}}),i._p.forEach(H=>{ei(b,a.run(()=>H({store:b,app:i._a,pinia:i,options:o})))}),g&&s&&t.hydrate&&t.hydrate(b.$state,g),c=!0,u=!0,b}/*! #__NO_SIDE_EFFECTS__ */function jp(n,e,t){let i,r;const s=typeof e=="function";typeof n=="string"?(i=n,r=s?t:e):(r=n,i=n.id);function a(o,l){const c=Ah();return o=o||(c?Wr(bf,null):null),o&&So(o),o=yf,o._s.has(i)||(s?Af(i,e,r,o):Xp(i,r,o)),o._s.get(i)}return a.$id=i,a}function rs(){return"id_"+Math.random().toString(36).substr(2,9)+"_"+Date.now()}function qs(n){return new Promise((e,t)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=t,i.readAsDataURL(n)})}const no=ze([]);function Fr(n,e="info",t=3e3){const i=rs(),r={id:i,message:n,type:e,timeout:t};return no.value.push(r),t>0&&setTimeout(()=>{qp(i)},t),i}function qp(n){const e=no.value.findIndex(t=>t.id===n);e>-1&&no.value.splice(e,1)}const Ms="scene360_project";class Sn{static saveProject(e){try{const t=JSON.stringify(e);localStorage.setItem(Ms,t),console.log(`✅ Project saved: ${e.scenes.length} scenes`)}catch(t){if(t.name==="QuotaExceededError"){console.error("❌ localStorage full - trying to save without images");const i={...e,scenes:e.scenes.map(s=>({...s,imageUrl:""}))},r=JSON.stringify(i);localStorage.setItem(Ms,r),console.log("⚠️ Project saved without images due to storage limit")}else console.error("❌ Error saving project:",t)}}static loadProject(){try{const e=localStorage.getItem(Ms);if(!e)return console.log("⚠️ No project found in localStorage"),null;const t=JSON.parse(e);console.log(`✅ Loaded project: ${t.scenes.length} scenes`);const i=t.scenes.filter(r=>!r.imageUrl);return i.length>0&&console.log(`⚠️ ${i.length} scenes need images to be re-uploaded`),t}catch(e){return console.error("❌ Error loading project:",e),null}}static async loadProjectAsync(){return this.loadProject()}static deleteProject(){try{localStorage.removeItem(Ms),console.log("✅ Project deleted")}catch(e){console.error("Error deleting project:",e)}}static getProjectsList(){const e=this.loadProject();return e?[{id:e.id,name:e.name,lastModified:e.updatedAt||Date.now()}]:[]}static importProjectFromJSON(e){try{const t=JSON.parse(e);return t.project||t}catch(t){return console.error("Error importing project:",t),null}}}const br=jp("project",()=>{const n=ze(null),e=ze(""),t=()=>{if(!n.value){console.error("❌ Cannot autoSave: project is null");return}const g=JSON.parse(JSON.stringify(n.value));console.log(`💾 AUTO-SAVING: ${g.scenes.length} scenes`),Sn.saveProject(g)},i=Ni(()=>n.value?n.value.scenes.find(g=>g.id===e.value):null),r=Ni(()=>{var g;return((g=n.value)==null?void 0:g.scenes)||[]});return{project:n,activeSceneId:e,activeScene:i,allScenes:r,createNewProject:(g,v="")=>{const p={id:rs(),name:g,description:v,scenes:[],activeSceneId:"",createdAt:Date.now(),updatedAt:Date.now()};return n.value=p,t(),p},loadProject:g=>{n.value=g,e.value=g.activeSceneId||""},addScene:(g,v,p,d)=>{if(!n.value)return console.error("❌ Cannot add scene: project is null"),null;const y={id:rs(),name:g,description:v,imageUrl:p,imageFileName:d,hotspots:[],createdAt:Date.now(),updatedAt:Date.now()};return n.value.scenes.push(y),n.value.updatedAt=Date.now(),console.log(`✅ Scene added: ${g}. Total in memory: ${n.value.scenes.length} scenes`),e.value||(e.value=y.id,n.value.activeSceneId=y.id),console.log("🔄 Triggering autoSave..."),t(),console.log(`📝 After autoSave, project has ${n.value.scenes.length} scenes`),y},deleteScene:g=>{var p;if(!n.value)return;const v=n.value.scenes.findIndex(d=>d.id===g);v!==-1&&(n.value.scenes.splice(v,1),n.value.updatedAt=Date.now(),e.value===g&&(e.value=((p=n.value.scenes[0])==null?void 0:p.id)||"",n.value.activeSceneId=e.value),t())},renameScene:(g,v)=>{if(!n.value)return;const p=n.value.scenes.find(d=>d.id===g);p&&(p.name=v,p.updatedAt=Date.now(),n.value.updatedAt=Date.now(),t())},setActiveScene:g=>{n.value&&(e.value=g,n.value.activeSceneId=g,n.value.updatedAt=Date.now())},addHotspot:g=>{i.value&&(i.value.hotspots.push(g),i.value.updatedAt=Date.now(),n.value&&(n.value.updatedAt=Date.now(),t()))},updateHotspot:(g,v,p)=>{if(!n.value)return;const d=n.value.scenes.find(S=>S.id===g);if(!d)return;const y=d.hotspots.find(S=>S.id===v);y&&(Object.assign(y,p),d.updatedAt=Date.now(),n.value.updatedAt=Date.now(),t())},deleteHotspot:(g,v)=>{if(!n.value)return;const p=n.value.scenes.find(y=>y.id===g);if(!p)return;const d=p.hotspots.findIndex(y=>y.id===v);d!==-1&&(p.hotspots.splice(d,1),p.updatedAt=Date.now(),n.value.updatedAt=Date.now(),t())}}}),Yp=""+new URL("Logo-CEN-PC-2025-v3-36323b44.jpg",import.meta.url).href,$p={class:"home-screen"},Kp={class:"welcome-card"},Zp={class:"actions"},Jp={class:"modal"},Qp={class:"modal-actions"},em=Bi({__name:"HomeScreen",emits:["create-project","load-project"],setup(n,{emit:e}){const t=e,i=ze(!1),r=ze(""),s=ze(""),a=ze(),o=ze(null),l=()=>{r.value.trim()&&(t("create-project",r.value,s.value),i.value=!1,r.value="",s.value="")},c=()=>{var h;(h=a.value)==null||h.click()},u=h=>{var v;const m=(v=h.target.files)==null?void 0:v[0];if(!m)return;const g=new FileReader;g.onload=p=>{var S;const d=(S=p.target)==null?void 0:S.result,y=Sn.importProjectFromJSON(d);y&&(t("load-project",y),Sn.saveProject(y),o.value=y)},g.readAsText(m)},f=()=>{o.value&&t("load-project",o.value)};return mo(()=>{const h=Sn.loadProject();h&&(o.value=h)}),(h,m)=>(Ue(),De("div",$p,[O("div",Kp,[m[5]||(m[5]=O("h1",null,"360° Scene Editor",-1)),m[6]||(m[6]=O("p",null,"Créez des scènes interactives 360° avec des points d'intérêt cliquables",-1)),O("div",Zp,[O("button",{onClick:m[0]||(m[0]=g=>i.value=!0),class:"btn btn-primary"}," ➕ Nouveau Projet "),O("button",{onClick:c,class:"btn btn-secondary"}," 📂 Importer "),o.value?(Ue(),De("button",{key:0,onClick:f,class:"btn btn-tertiary"}," 🕐 Charger le dernier projet ")):lt("",!0)]),m[7]||(m[7]=O("div",{class:"credits"},[O("img",{src:Yp,alt:"CEN-PC Logo",class:"logo"}),O("p",null,"par C.HEYREND-CASANOVAS pour le CEN-PC de Montpellier")],-1)),O("input",{ref_key:"fileInput",ref:a,type:"file",accept:".json",style:{display:"none"},onChange:u},null,544)]),i.value?(Ue(),De("div",{key:0,class:"modal-overlay",onClick:m[4]||(m[4]=Gn(g=>i.value=!1,["self"]))},[O("div",Jp,[m[8]||(m[8]=O("h2",null,"Créer un Nouveau Projet",-1)),xt(O("input",{"onUpdate:modelValue":m[1]||(m[1]=g=>r.value=g),type:"text",placeholder:"Nom du projet",class:"input",onKeyup:Dp(l,["enter"])},null,544),[[Rt,r.value]]),xt(O("textarea",{"onUpdate:modelValue":m[2]||(m[2]=g=>s.value=g),placeholder:"Description (optionnel)",class:"input",rows:"3"},null,512),[[Rt,s.value]]),O("div",Qp,[O("button",{onClick:m[3]||(m[3]=g=>i.value=!1),class:"btn btn-secondary"},"Annuler"),O("button",{onClick:l,class:"btn btn-primary"},"Créer")])])])):lt("",!0)]))}});const Hi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},tm=Hi(em,[["__scopeId","data-v-20db667e"]]),nm={class:"project-header"},im={class:"header-content"},rm=Bi({__name:"ProjectHeader",setup(n){const e=br(),t=()=>{e.project=null},i=()=>{if(!e.project)return;const r=JSON.stringify(e.project,null,2),s=new Blob([r],{type:"application/json"}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=`${e.project.name}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a)};return(r,s)=>{var a,o;return Ue(),De("div",nm,[O("div",im,[O("h2",null,gt((a=Ye(e).project)==null?void 0:a.name),1),O("p",null,gt((o=Ye(e).project)==null?void 0:o.description),1)]),O("div",{class:"header-actions"},[O("button",{onClick:t,class:"btn-small",title:"Retour à l'accueil"},"🏠 Accueil"),O("button",{onClick:i,class:"btn-small btn-save",title:"Sauvegarder le projet"},"💾 Sauvegarder le projet")])])}}});const sm=Hi(rm,[["__scopeId","data-v-f7c321d8"]]),om={class:"scene-list"},am={class:"list-header"},lm={class:"scenes-container"},cm=["onClick","onContextmenu"],um=["src","alt"],fm={key:1,class:"no-image"},dm=["onClick"],hm={class:"scene-name"},pm={class:"scene-hotspots"},mm=["onClick"],gm={class:"modal"},_m={key:0,class:"preview-text"},vm={class:"modal-actions"},xm=["disabled"],Sm=Bi({__name:"SceneList",setup(n){const e=br(),t=ze(!1),i=ze(""),r=ze(""),s=ze(""),a=ze(""),o=ze(),l=ze(),c=ze(null),u=ze(""),f=x=>{e.setActiveScene(x),c.value=null},h=async()=>{!i.value||!s.value||(console.log("Adding scene:",i.value),e.addScene(i.value,r.value,s.value,a.value),t.value=!1,i.value="",r.value="",s.value="",a.value="")},m=async x=>{var C;const b=(C=x.target.files)==null?void 0:C[0];b&&(a.value=b.name,s.value=await qs(b))},g=async x=>{var C;const b=(C=x.dataTransfer)==null?void 0:C.files;b&&(a.value=b[0].name,s.value=await qs(b[0]))},v=x=>{var b;u.value=x,(b=l.value)==null||b.click()},p=async x=>{var H;const b=(H=x.target.files)==null?void 0:H[0];if(!b||!u.value)return;const C=await qs(b),P=e.allScenes.find(M=>M.id===u.value);P&&(P.imageUrl=C,P.imageFileName=b.name,P.updatedAt=Date.now(),e.project.updatedAt=Date.now(),e.addHotspot({id:"",x:0,y:0,type:"text",content:""}),console.log(`✅ Image re-uploaded for scene: ${P.name}`)),u.value="",l.value&&(l.value.value="")},d=(x,b)=>{c.value={left:x.clientX+"px",top:x.clientY+"px",sceneId:b}},y=async x=>{const b=e.allScenes.find(P=>P.id===x);if(!b)return;const C=prompt("Nouveau nom:",b.name);C&&(console.log("Renaming scene to:",C),e.renameScene(x,C)),c.value=null},S=async x=>{confirm("Supprimer cette scène?")&&(console.log("Deleting scene:",x),e.deleteScene(x)),c.value=null};return document.addEventListener("click",()=>{c.value=null}),(x,b)=>(Ue(),De("div",om,[O("div",am,[b[9]||(b[9]=O("h3",null,"Scènes",-1)),O("button",{onClick:b[0]||(b[0]=C=>t.value=!0),class:"btn-add",title:"Ajouter une scène"},"➕")]),O("div",lm,[(Ue(!0),De(ut,null,wi(Ye(e).allScenes,C=>(Ue(),De("div",{key:C.id,class:qt(["scene-item",{active:C.id===Ye(e).activeSceneId}])},[O("div",{class:"scene-thumbnail",onClick:P=>f(C.id),onContextmenu:Gn(P=>d(P,C.id),["prevent"])},[C.imageUrl?(Ue(),De("img",{key:0,src:C.imageUrl,alt:C.name},null,8,um)):(Ue(),De("div",fm,[...b[10]||(b[10]=[O("span",null,"📸",-1),O("p",null,"Image manquante",-1)])]))],40,cm),O("div",{class:"scene-info",onClick:P=>f(C.id)},[O("div",hm,gt(C.name),1),O("div",pm,gt(C.hotspots.length)+" points",1)],8,dm),C.imageUrl?lt("",!0):(Ue(),De("button",{key:0,onClick:Gn(P=>v(C.id),["stop"]),class:"btn-reupload",title:"Re-uploader l'image"}," 📤 ",8,mm))],2))),128)),O("input",{ref_key:"reuploadInput",ref:l,type:"file",accept:"image/*",style:{display:"none"},onChange:p},null,544)]),c.value?(Ue(),De("div",{key:0,class:"context-menu",style:ln(c.value)},[O("button",{onClick:b[1]||(b[1]=C=>y(c.value.sceneId)),class:"menu-item"},"✏️ Renommer"),O("button",{onClick:b[2]||(b[2]=C=>S(c.value.sceneId)),class:"menu-item danger"},"🗑️ Supprimer")],4)):lt("",!0),t.value?(Ue(),De("div",{key:1,class:"modal-overlay",onClick:b[8]||(b[8]=Gn(C=>t.value=!1,["self"]))},[O("div",gm,[b[11]||(b[11]=O("h3",null,"Ajouter une Scène 360°",-1)),xt(O("input",{"onUpdate:modelValue":b[3]||(b[3]=C=>i.value=C),type:"text",placeholder:"Nom de la scène",class:"input"},null,512),[[Rt,i.value]]),xt(O("textarea",{"onUpdate:modelValue":b[4]||(b[4]=C=>r.value=C),placeholder:"Description",class:"input",rows:"2"},null,512),[[Rt,r.value]]),O("div",{class:"upload-area",onDrop:g,onDragover:b[6]||(b[6]=Gn(()=>{},["prevent"]))},[O("input",{ref_key:"fileInput",ref:o,type:"file",accept:"image/*",onChange:m,style:{display:"none"}},null,544),O("button",{onClick:b[5]||(b[5]=C=>{var P;return(P=o.value)==null?void 0:P.click()}),class:"upload-btn"}," 📸 Sélectionner Image 360° "),s.value?(Ue(),De("p",_m,"✓ Image chargée")):lt("",!0)],32),O("div",vm,[O("button",{onClick:b[7]||(b[7]=C=>t.value=!1),class:"btn-secondary"},"Annuler"),O("button",{onClick:h,disabled:!i.value||!s.value,class:"btn-primary"},"Ajouter",8,xm)])])])):lt("",!0)]))}});const Mm=Hi(Sm,[["__scopeId","data-v-f6c4a476"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const el="156",Em=0,Kl=1,ym=2,wf=1,bm=2,Fn=3,hi=0,Ut=1,zn=2,li=0,hr=1,Zl=2,Jl=3,Ql=4,Tm=5,sr=100,Am=101,wm=102,ec=103,tc=104,Rm=200,Cm=201,Pm=202,Lm=203,Rf=204,Cf=205,Um=206,Dm=207,Im=208,Nm=209,Fm=210,Om=0,Bm=1,Hm=2,wa=3,zm=4,Gm=5,km=6,Vm=7,Pf=0,Wm=1,Xm=2,ci=0,jm=1,qm=2,Ym=3,$m=4,Km=5,Lf=300,xr=301,Sr=302,Ra=303,Ca=304,Mo=306,Pa=1e3,un=1001,La=1002,Bt=1003,nc=1004,Go=1005,Qt=1006,Zm=1007,ss=1008,ui=1009,Jm=1010,Qm=1011,tl=1012,Uf=1013,si=1014,oi=1015,os=1016,Df=1017,If=1018,Li=1020,eg=1021,fn=1023,tg=1024,ng=1025,Ui=1026,Mr=1027,ig=1028,Nf=1029,rg=1030,Ff=1031,Of=1033,ko=33776,Vo=33777,Wo=33778,Xo=33779,ic=35840,rc=35841,sc=35842,oc=35843,sg=36196,ac=37492,lc=37496,cc=37808,uc=37809,fc=37810,dc=37811,hc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,xc=37818,Sc=37819,Mc=37820,Ec=37821,jo=36492,yc=36494,bc=36495,og=36283,Tc=36284,Ac=36285,wc=36286,Bf=3e3,Di=3001,ag=3200,lg=3201,cg=0,ug=1,Ii="",ot="srgb",wn="srgb-linear",Eo="display-p3",qo=7680,fg=519,dg=512,hg=513,pg=514,mg=515,gg=516,_g=517,vg=518,xg=519,Rc=35044,Cc="300 es",Ua=1035,kn=2e3,io=2001;class Tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pc=1234567;const qr=Math.PI/180,as=180/Math.PI;function Ar(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function nl(n,e){return(n%e+e)%e}function Sg(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Mg(n,e,t){return n!==e?(t-n)/(e-n):0}function Yr(n,e,t){return(1-t)*n+t*e}function Eg(n,e,t,i){return Yr(n,e,1-Math.exp(-t*i))}function yg(n,e=1){return e-Math.abs(nl(n,e*2)-e)}function bg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Tg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ag(n,e){return n+Math.floor(Math.random()*(e-n+1))}function wg(n,e){return n+Math.random()*(e-n)}function Rg(n){return n*(.5-Math.random())}function Cg(n){n!==void 0&&(Pc=n);let e=Pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pg(n){return n*qr}function Lg(n){return n*as}function Da(n){return(n&n-1)===0&&n!==0}function Ug(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ro(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dg(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function or(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Gt={DEG2RAD:qr,RAD2DEG:as,generateUUID:Ar,clamp:Lt,euclideanModulo:nl,mapLinear:Sg,inverseLerp:Mg,lerp:Yr,damp:Eg,pingpong:yg,smoothstep:bg,smootherstep:Tg,randInt:Ag,randFloat:wg,randFloatSpread:Rg,seededRandom:Cg,degToRad:Pg,radToDeg:Lg,isPowerOfTwo:Da,ceilPowerOfTwo:Ug,floorPowerOfTwo:ro,setQuaternionFromProperEuler:Dg,normalize:Ft,denormalize:or};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],v=r[0],p=r[3],d=r[6],y=r[1],S=r[4],x=r[7],b=r[2],C=r[5],P=r[8];return s[0]=a*v+o*y+l*b,s[3]=a*p+o*S+l*C,s[6]=a*d+o*x+l*P,s[1]=c*v+u*y+f*b,s[4]=c*p+u*S+f*C,s[7]=c*d+u*x+f*P,s[2]=h*v+m*y+g*b,s[5]=h*p+m*S+g*C,s[8]=h*d+m*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yo.makeScale(e,t)),this}rotate(e){return this.premultiply(Yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yo=new Xe;function Hf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ig(){const n=ls("canvas");return n.style.display="block",n}const Lc={};function $r(n){n in Lc||(Lc[n]=!0,console.warn(n))}function pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $o(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ng=new Xe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Fg=new Xe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Og(n){return n.convertSRGBToLinear().applyMatrix3(Fg)}function Bg(n){return n.applyMatrix3(Ng).convertLinearToSRGB()}const Hg={[wn]:n=>n,[ot]:n=>n.convertSRGBToLinear(),[Eo]:Og},zg={[wn]:n=>n,[ot]:n=>n.convertLinearToSRGB(),[Eo]:Bg},rn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return wn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Hg[e],r=zg[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let ki;class zf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=ls("canvas")),ki.width=e.width,ki.height=e.height;const i=ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pr(t[i]/255)*255):t[i]=pr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gg=0;class Gf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Ar(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ko(r[a].image)):s.push(Ko(r[a]))}else s=Ko(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ko(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kg=0;class kt extends Tr{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=un,r=un,s=Qt,a=ss,o=fn,l=ui,c=kt.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Ar(),this.name="",this.source=new Gf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:($r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Di?ot:Ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pa:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pa:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ot?Di:Bf}set encoding(e){$r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Di?ot:Ii}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Lf;kt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(m+1)/2,b=(d+1)/2,C=(u+h)/4,P=(f+v)/4,H=(g+p)/4;return S>x&&S>b?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=P/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=H/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=P/s,r=H/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-v)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vg extends Tr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&($r("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Di?ot:Ii),this.texture=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Qt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends Vg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kf extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wg extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==m||u!==g){let p=1-o;const d=l*h+c*m+u*g+f*v,y=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const b=Math.sqrt(S),C=Math.atan2(b,d*y);p=Math.sin(p*C)/b,o=Math.sin(o*C)/b}const x=o*y;if(l=l*p+h*x,c=c*p+m*x,u=u*p+g*x,f=f*p+v*x,p===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-o*m,e[t+2]=c*g+u*m+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new W,Uc=new hs;class ps{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Vi.copy(e.boundingBox),Vi.applyMatrix4(e.matrixWorld),this.union(Vi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Ln.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ln)}else r.boundingBox===null&&r.computeBoundingBox(),Vi.copy(r.boundingBox),Vi.applyMatrix4(e.matrixWorld),this.union(Vi)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),Es.subVectors(this.max,Lr),Wi.subVectors(e.a,Lr),Xi.subVectors(e.b,Lr),ji.subVectors(e.c,Lr),Kn.subVectors(Xi,Wi),Zn.subVectors(ji,Xi),Si.subVectors(Wi,ji);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-Si.z,Si.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,Si.z,0,-Si.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-Si.y,Si.x,0];return!Jo(t,Wi,Xi,ji,Es)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,Wi,Xi,ji,Es))?!1:(ys.crossVectors(Kn,Zn),t=[ys.x,ys.y,ys.z],Jo(t,Wi,Xi,ji,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new W,new W,new W,new W,new W,new W,new W,new W],Ln=new W,Vi=new ps,Wi=new W,Xi=new W,ji=new W,Kn=new W,Zn=new W,Si=new W,Lr=new W,Es=new W,ys=new W,Mi=new W;function Jo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Mi.fromArray(n,s);const o=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),u=i.dot(Mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Xg=new ps,Ur=new W,Qo=new W;class il{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ur,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Qo)),this.expandByPoint(Ur.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new W,ea=new W,bs=new W,Jn=new W,ta=new W,Ts=new W,na=new W;class Vf{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ea.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(ea);const s=e.distanceTo(t)*.5,a=-this.direction.dot(bs),o=Jn.dot(this.direction),l=-Jn.dot(bs),c=Jn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ea).addScaledVector(bs,h),m}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const i=Un.dot(this.direction),r=Un.dot(Un)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,i,r,s){ta.subVectors(t,e),Ts.subVectors(i,e),na.crossVectors(ta,Ts);let a=this.direction.dot(na),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(Ts.crossVectors(Jn,Ts));if(l<0)return null;const c=o*this.direction.dot(ta.cross(Jn));if(c<0||l+c>a)return null;const u=-o*Jn.dot(na);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,m,g,v,p){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,m,g,v,p)}set(e,t,i,r,s,a,o,l,c,u,f,h,m,g,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,v=c*f;t[0]=h+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jg,e,qg)}lookAt(e,t,i){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Qn.crossVectors(i,Wt),Qn.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Qn.crossVectors(i,Wt)),Qn.normalize(),As.crossVectors(Wt,Qn),r[0]=Qn.x,r[4]=As.x,r[8]=Wt.x,r[1]=Qn.y,r[5]=As.y,r[9]=Wt.y,r[2]=Qn.z,r[6]=As.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],v=i[6],p=i[10],d=i[14],y=i[3],S=i[7],x=i[11],b=i[15],C=r[0],P=r[4],H=r[8],M=r[12],R=r[1],se=r[5],ge=r[9],q=r[13],Z=r[2],J=r[6],ae=r[10],z=r[14],$=r[3],ce=r[7],de=r[11],G=r[15];return s[0]=a*C+o*R+l*Z+c*$,s[4]=a*P+o*se+l*J+c*ce,s[8]=a*H+o*ge+l*ae+c*de,s[12]=a*M+o*q+l*z+c*G,s[1]=u*C+f*R+h*Z+m*$,s[5]=u*P+f*se+h*J+m*ce,s[9]=u*H+f*ge+h*ae+m*de,s[13]=u*M+f*q+h*z+m*G,s[2]=g*C+v*R+p*Z+d*$,s[6]=g*P+v*se+p*J+d*ce,s[10]=g*H+v*ge+p*ae+d*de,s[14]=g*M+v*q+p*z+d*G,s[3]=y*C+S*R+x*Z+b*$,s[7]=y*P+S*se+x*J+b*ce,s[11]=y*H+S*ge+x*ae+b*de,s[15]=y*M+S*q+x*z+b*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],v=e[7],p=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+v*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+d*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],v=e[13],p=e[14],d=e[15],y=f*p*c-v*h*c+v*l*m-o*p*m-f*l*d+o*h*d,S=g*h*c-u*p*c-g*l*m+a*p*m+u*l*d-a*h*d,x=u*v*c-g*f*c+g*o*m-a*v*m-u*o*d+a*f*d,b=g*f*l-u*v*l-g*o*h+a*v*h+u*o*p-a*f*p,C=t*y+i*S+r*x+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=y*P,e[1]=(v*h*s-f*p*s-v*r*m+i*p*m+f*r*d-i*h*d)*P,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*d+i*l*d)*P,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*P,e[4]=S*P,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*d+t*h*d)*P,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*d-t*l*d)*P,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*P,e[8]=x*P,e[9]=(g*f*s-u*v*s-g*i*m+t*v*m+u*i*d-t*f*d)*P,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*d+t*o*d)*P,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*P,e[12]=b*P,e[13]=(u*v*r-g*f*r+g*i*h-t*v*h-u*i*p+t*f*p)*P,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*p-t*o*p)*P,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,g=s*f,v=a*u,p=a*f,d=o*f,y=l*c,S=l*u,x=l*f,b=i.x,C=i.y,P=i.z;return r[0]=(1-(v+d))*b,r[1]=(m+x)*b,r[2]=(g-S)*b,r[3]=0,r[4]=(m-x)*C,r[5]=(1-(h+d))*C,r[6]=(p+y)*C,r[7]=0,r[8]=(g+S)*P,r[9]=(p-y)*P,r[10]=(1-(h+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qi.set(r[0],r[1],r[2]).length();const a=qi.set(r[4],r[5],r[6]).length(),o=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const c=1/s,u=1/a,f=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,t.setFromRotationMatrix(sn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=kn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,g;if(o===kn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===io)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=kn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,m=(i+r)*u;let g,v;if(o===kn)g=(a+s)*f,v=-2*f;else if(o===io)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qi=new W,sn=new Tt,jg=new W(0,0,0),qg=new W(1,1,1),Qn=new W,As=new W,Wt=new W,Dc=new Tt,Ic=new hs;class yo{constructor(e=0,t=0,i=0,r=yo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yo.DEFAULT_ORDER="XYZ";class rl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yg=0;const Nc=new W,Yi=new hs,Dn=new Tt,ws=new W,Dr=new W,$g=new W,Kg=new hs,Fc=new W(1,0,0),Oc=new W(0,1,0),Bc=new W(0,0,1),Zg={type:"added"},Jg={type:"removed"};class Kt extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new W,t=new yo,i=new hs,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Xe}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Oc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Nc.copy(e).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Oc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ws.copy(e):ws.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Dr,ws,this.up):Dn.lookAt(ws,Dr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,$g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,Kg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new W(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new W,In=new W,ia=new W,Nn=new W,$i=new W,Ki=new W,Hc=new W,ra=new W,sa=new W,oa=new W;let Rs=!1;class cn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),In.subVectors(i,t),ia.subVectors(e,t);const a=on.dot(on),o=on.dot(In),l=on.dot(ia),c=In.dot(In),u=In.dot(ia),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nn),Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getUV(e,t,i,r,s,a,o,l){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Nn),l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),In.subVectors(e,t),on.cross(In).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),In.subVectors(this.a,this.b),on.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),cn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return cn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;$i.subVectors(r,i),Ki.subVectors(s,i),ra.subVectors(e,i);const l=$i.dot(ra),c=Ki.dot(ra);if(l<=0&&c<=0)return t.copy(i);sa.subVectors(e,r);const u=$i.dot(sa),f=Ki.dot(sa);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector($i,a);oa.subVectors(e,s);const m=$i.dot(oa),g=Ki.dot(oa);if(g>=0&&m<=g)return t.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ki,o);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Hc.subVectors(s,r),o=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(Hc,o);const d=1/(p+v+h);return a=v*d,o=h*d,t.copy(i).addScaledVector($i,a).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qg=0;class bo extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=hr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rf,this.blendDst=Cf,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function aa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rn.workingColorSpace){return this.r=e,this.g=t,this.b=i,rn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rn.workingColorSpace){if(e=nl(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=aa(a,s,e+1/3),this.g=aa(a,s,e),this.b=aa(a,s,e-1/3)}return rn.toWorkingColorSpace(this,r),this}setStyle(e,t=ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){const i=Wf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=$o(e.r),this.g=$o(e.g),this.b=$o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return rn.fromWorkingColorSpace(wt.copy(this),e),Math.round(Lt(wt.r*255,0,255))*65536+Math.round(Lt(wt.g*255,0,255))*256+Math.round(Lt(wt.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rn.workingColorSpace){rn.fromWorkingColorSpace(wt.copy(this),t);const i=wt.r,r=wt.g,s=wt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rn.workingColorSpace){return rn.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=ot){rn.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,i=wt.g,r=wt.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=i,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(Cs);const i=Yr(an.h,Cs.h,t),r=Yr(an.s,Cs.s,t),s=Yr(an.l,Cs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new nt;nt.NAMES=Wf;class Kr extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new W,Ps=new Qe;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rc,this.updateRange={offset:0,count:-1},this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=or(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=or(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=or(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=or(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Xf extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class jf extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bn extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let e_=0;const Jt=new Tt,la=new Kt,Zi=new W,Xt=new ps,Ir=new ps,Et=new W;class mi extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hf(e)?jf:Xf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return la.lookAt(e),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new il);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Xt.min,Ir.min),Xt.expandByPoint(Et),Et.addVectors(Xt.max,Ir.max),Xt.expandByPoint(Et)):(Xt.expandByPoint(Ir.min),Xt.expandByPoint(Ir.max))}Xt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(e,c),Et.add(Zi)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new W,u[R]=new W;const f=new W,h=new W,m=new W,g=new Qe,v=new Qe,p=new Qe,d=new W,y=new W;function S(R,se,ge){f.fromArray(r,R*3),h.fromArray(r,se*3),m.fromArray(r,ge*3),g.fromArray(a,R*2),v.fromArray(a,se*2),p.fromArray(a,ge*2),h.sub(f),m.sub(f),v.sub(g),p.sub(g);const q=1/(v.x*p.y-p.x*v.y);isFinite(q)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(q),y.copy(m).multiplyScalar(v.x).addScaledVector(h,-p.x).multiplyScalar(q),c[R].add(d),c[se].add(d),c[ge].add(d),u[R].add(y),u[se].add(y),u[ge].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let R=0,se=x.length;R<se;++R){const ge=x[R],q=ge.start,Z=ge.count;for(let J=q,ae=q+Z;J<ae;J+=3)S(i[J+0],i[J+1],i[J+2])}const b=new W,C=new W,P=new W,H=new W;function M(R){P.fromArray(s,R*3),H.copy(P);const se=c[R];b.copy(se),b.sub(P.multiplyScalar(P.dot(se))).normalize(),C.crossVectors(H,se);const q=C.dot(u[R])<0?-1:1;l[R*4]=b.x,l[R*4+1]=b.y,l[R*4+2]=b.z,l[R*4+3]=q}for(let R=0,se=x.length;R<se;++R){const ge=x[R],q=ge.start,Z=ge.count;for(let J=q,ae=q+Z;J<ae;J+=3)M(i[J+0]),M(i[J+1]),M(i[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let d=0;d<u;d++)h[g++]=c[m++]}return new yn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zc=new Tt,Ei=new Vf,Ls=new il,Gc=new W,Ji=new W,Qi=new W,er=new W,ca=new W,Us=new W,Ds=new Qe,Is=new Qe,Ns=new Qe,kc=new W,Vc=new W,Wc=new W,Fs=new W,Os=new W;class dn extends Kt{constructor(e=new mi,t=new Kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ca.fromBufferAttribute(f,e),a?Us.addScaledVector(ca,u):Us.addScaledVector(ca.sub(t),u))}t.add(Us)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(s),Ei.copy(e.ray).recast(e.near),!(Ls.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Ls,Gc)===null||Ei.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(zc.copy(s).invert(),Ei.copy(e.ray).applyMatrix4(zc),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const p=h[g],d=a[p.materialIndex],y=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=y,b=S;x<b;x+=3){const C=o.getX(x),P=o.getX(x+1),H=o.getX(x+2);r=Bs(this,d,e,i,c,u,f,C,P,H),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const y=o.getX(p),S=o.getX(p+1),x=o.getX(p+2);r=Bs(this,a,e,i,c,u,f,y,S,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const p=h[g],d=a[p.materialIndex],y=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=y,b=S;x<b;x+=3){const C=x,P=x+1,H=x+2;r=Bs(this,d,e,i,c,u,f,C,P,H),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const y=p,S=p+1,x=p+2;r=Bs(this,a,e,i,c,u,f,y,S,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function t_(n,e,t,i,r,s,a,o){let l;if(e.side===Ut?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===hi,o),l===null)return null;Os.copy(o),Os.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Os);return c<t.near||c>t.far?null:{distance:c,point:Os.clone(),object:n}}function Bs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ji),n.getVertexPosition(l,Qi),n.getVertexPosition(c,er);const u=t_(n,e,t,i,Ji,Qi,er,Fs);if(u){r&&(Ds.fromBufferAttribute(r,o),Is.fromBufferAttribute(r,l),Ns.fromBufferAttribute(r,c),u.uv=cn.getInterpolation(Fs,Ji,Qi,er,Ds,Is,Ns,new Qe)),s&&(Ds.fromBufferAttribute(s,o),Is.fromBufferAttribute(s,l),Ns.fromBufferAttribute(s,c),u.uv1=cn.getInterpolation(Fs,Ji,Qi,er,Ds,Is,Ns,new Qe),u.uv2=u.uv1),a&&(kc.fromBufferAttribute(a,o),Vc.fromBufferAttribute(a,l),Wc.fromBufferAttribute(a,c),u.normal=cn.getInterpolation(Fs,Ji,Qi,er,kc,Vc,Wc,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};cn.getNormal(Ji,Qi,er,f.normal),u.face=f}return u}class ms extends mi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(f,2));function g(v,p,d,y,S,x,b,C,P,H,M){const R=x/P,se=b/H,ge=x/2,q=b/2,Z=C/2,J=P+1,ae=H+1;let z=0,$=0;const ce=new W;for(let de=0;de<ae;de++){const G=de*se-q;for(let L=0;L<J;L++){const I=L*R-ge;ce[v]=I*y,ce[p]=G*S,ce[d]=Z,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[p]=0,ce[d]=C>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(L/P),f.push(1-de/H),z+=1}}for(let de=0;de<H;de++)for(let G=0;G<P;G++){const L=h+G+J*de,I=h+G+J*(de+1),_e=h+(G+1)+J*(de+1),ve=h+(G+1)+J*de;l.push(L,I,ve),l.push(I,_e,ve),$+=6}o.addGroup(m,$,M),m+=$,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ot(n){const e={};for(let t=0;t<n.length;t++){const i=Er(n[t]);for(const r in i)e[r]=i[r]}return e}function n_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qf(n){return n.getRenderTarget()===null?n.outputColorSpace:wn}const i_={clone:Er,merge:Ot};var r_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r_,this.fragmentShader=s_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=n_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yf extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends Yf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class o_ extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new en(tr,nr,e,t);r.layers=this.layers,this.add(r);const s=new en(tr,nr,e,t);s.layers=this.layers,this.add(s);const a=new en(tr,nr,e,t);a.layers=this.layers,this.add(a);const o=new en(tr,nr,e,t);o.layers=this.layers,this.add(o);const l=new en(tr,nr,e,t);l.layers=this.layers,this.add(l);const c=new en(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===io)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class $f extends kt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class a_ extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&($r("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Di?ot:Ii),this.texture=new $f(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ms(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:li});s.uniforms.tEquirect.value=t;const a=new dn(r,s),o=t.minFilter;return t.minFilter===ss&&(t.minFilter=Qt),new o_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const ua=new W,l_=new W,c_=new Xe;class Ti{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ua.subVectors(i,t).cross(l_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ua),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||c_.getNormalMatrix(e),r=this.coplanarPoint(ua).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new il,Hs=new W;class Kf{constructor(e=new Ti,t=new Ti,i=new Ti,r=new Ti,s=new Ti,a=new Ti){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],g=r[9],v=r[10],p=r[11],d=r[12],y=r[13],S=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,p-m,x-d).normalize(),i[1].setComponents(l+s,h+c,p+m,x+d).normalize(),i[2].setComponents(l+a,h+u,p+g,x+y).normalize(),i[3].setComponents(l-a,h-u,p-g,x-y).normalize(),i[4].setComponents(l-o,h-f,p-v,x-S).normalize(),t===kn)i[5].setComponents(l+o,h+f,p+v,x+S).normalize();else if(t===io)i[5].setComponents(o,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Hs.x=r.normal.x>0?e.max.x:e.min.x,Hs.y=r.normal.y>0?e.max.y:e.min.y,Hs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function u_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class sl extends mi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],g=[],v=[],p=[];for(let d=0;d<u;d++){const y=d*h-a;for(let S=0;S<c;S++){const x=S*f-s;g.push(x,-y,0),v.push(0,0,1),p.push(S/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const S=y+c*d,x=y+c*(d+1),b=y+1+c*(d+1),C=y+1+c*d;m.push(S,x,C),m.push(x,b,C)}this.setIndex(m),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(v,3)),this.setAttribute("uv",new bn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.width,e.height,e.widthSegments,e.heightSegments)}}var f_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d_=`#ifdef USE_ALPHAHASH
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
#endif`,h_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,g_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,__=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E_=`#ifdef USE_IRIDESCENCE
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
#endif`,y_=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,U_=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,D_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,I_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H_="gl_FragColor = linearToOutputTexel( gl_FragColor );",z_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V_=`#ifdef USE_ENVMAP
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
#endif`,W_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K_=`#ifdef USE_GRADIENTMAP
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
}`,Z_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,J_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,nv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,iv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,av=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,lv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,cv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,dv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xv=`#if defined( USE_POINTS_UV )
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
#endif`,Sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ev=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Tv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lv=`#ifdef USE_NORMALMAP
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
#endif`,Uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Dv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ov=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Bv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$v=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zv=`#ifdef USE_SKINNING
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
#endif`,Jv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ix=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,mx=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,_x=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ex=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,yx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,bx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Tx=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ax=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,wx=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Rx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cx=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Px=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Lx=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ux=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Dx=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Nx=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fx=`uniform float size;
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
}`,Ox=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Bx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Hx=`uniform vec3 color;
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
}`,zx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Gx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,We={alphahash_fragment:f_,alphahash_pars_fragment:d_,alphamap_fragment:h_,alphamap_pars_fragment:p_,alphatest_fragment:m_,alphatest_pars_fragment:g_,aomap_fragment:__,aomap_pars_fragment:v_,begin_vertex:x_,beginnormal_vertex:S_,bsdfs:M_,iridescence_fragment:E_,bumpmap_pars_fragment:y_,clipping_planes_fragment:b_,clipping_planes_pars_fragment:T_,clipping_planes_pars_vertex:A_,clipping_planes_vertex:w_,color_fragment:R_,color_pars_fragment:C_,color_pars_vertex:P_,color_vertex:L_,common:U_,cube_uv_reflection_fragment:D_,defaultnormal_vertex:I_,displacementmap_pars_vertex:N_,displacementmap_vertex:F_,emissivemap_fragment:O_,emissivemap_pars_fragment:B_,colorspace_fragment:H_,colorspace_pars_fragment:z_,envmap_fragment:G_,envmap_common_pars_fragment:k_,envmap_pars_fragment:V_,envmap_pars_vertex:W_,envmap_physical_pars_fragment:nv,envmap_vertex:X_,fog_vertex:j_,fog_pars_vertex:q_,fog_fragment:Y_,fog_pars_fragment:$_,gradientmap_pars_fragment:K_,lightmap_fragment:Z_,lightmap_pars_fragment:J_,lights_lambert_fragment:Q_,lights_lambert_pars_fragment:ev,lights_pars_begin:tv,lights_toon_fragment:iv,lights_toon_pars_fragment:rv,lights_phong_fragment:sv,lights_phong_pars_fragment:ov,lights_physical_fragment:av,lights_physical_pars_fragment:lv,lights_fragment_begin:cv,lights_fragment_maps:uv,lights_fragment_end:fv,logdepthbuf_fragment:dv,logdepthbuf_pars_fragment:hv,logdepthbuf_pars_vertex:pv,logdepthbuf_vertex:mv,map_fragment:gv,map_pars_fragment:_v,map_particle_fragment:vv,map_particle_pars_fragment:xv,metalnessmap_fragment:Sv,metalnessmap_pars_fragment:Mv,morphcolor_vertex:Ev,morphnormal_vertex:yv,morphtarget_pars_vertex:bv,morphtarget_vertex:Tv,normal_fragment_begin:Av,normal_fragment_maps:wv,normal_pars_fragment:Rv,normal_pars_vertex:Cv,normal_vertex:Pv,normalmap_pars_fragment:Lv,clearcoat_normal_fragment_begin:Uv,clearcoat_normal_fragment_maps:Dv,clearcoat_pars_fragment:Iv,iridescence_pars_fragment:Nv,opaque_fragment:Fv,packing:Ov,premultiplied_alpha_fragment:Bv,project_vertex:Hv,dithering_fragment:zv,dithering_pars_fragment:Gv,roughnessmap_fragment:kv,roughnessmap_pars_fragment:Vv,shadowmap_pars_fragment:Wv,shadowmap_pars_vertex:Xv,shadowmap_vertex:jv,shadowmask_pars_fragment:qv,skinbase_vertex:Yv,skinning_pars_vertex:$v,skinning_vertex:Kv,skinnormal_vertex:Zv,specularmap_fragment:Jv,specularmap_pars_fragment:Qv,tonemapping_fragment:ex,tonemapping_pars_fragment:tx,transmission_fragment:nx,transmission_pars_fragment:ix,uv_pars_fragment:rx,uv_pars_vertex:sx,uv_vertex:ox,worldpos_vertex:ax,background_vert:lx,background_frag:cx,backgroundCube_vert:ux,backgroundCube_frag:fx,cube_vert:dx,cube_frag:hx,depth_vert:px,depth_frag:mx,distanceRGBA_vert:gx,distanceRGBA_frag:_x,equirect_vert:vx,equirect_frag:xx,linedashed_vert:Sx,linedashed_frag:Mx,meshbasic_vert:Ex,meshbasic_frag:yx,meshlambert_vert:bx,meshlambert_frag:Tx,meshmatcap_vert:Ax,meshmatcap_frag:wx,meshnormal_vert:Rx,meshnormal_frag:Cx,meshphong_vert:Px,meshphong_frag:Lx,meshphysical_vert:Ux,meshphysical_frag:Dx,meshtoon_vert:Ix,meshtoon_frag:Nx,points_vert:Fx,points_frag:Ox,shadow_vert:Bx,shadow_frag:Hx,sprite_vert:zx,sprite_frag:Gx},Me={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Mn={basic:{uniforms:Ot([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ot([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new nt(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ot([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ot([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ot([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new nt(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ot([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ot([Me.points,Me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ot([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ot([Me.common,Me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ot([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ot([Me.sprite,Me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ot([Me.common,Me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ot([Me.lights,Me.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Mn.physical={uniforms:Ot([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const zs={r:0,b:0,g:0};function kx(n,e,t,i,r,s,a){const o=new nt(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function g(p,d){let y=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=(d.backgroundBlurriness>0?t:e).get(S)),S===null?v(o,l):S&&S.isColor&&(v(S,1),y=!0);const x=n.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Mo)?(u===void 0&&(u=new dn(new ms(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Er(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=S.colorSpace!==ot,(f!==S||h!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new dn(new sl(2,2),new Oi({name:"BackgroundMaterial",uniforms:Er(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=S.colorSpace!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,d){p.getRGB(zs,qf(n)),i.buffers.color.setClear(zs.r,zs.g,zs.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:g}}function Vx(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(Z,J,ae,z,$){let ce=!1;if(a){const de=v(z,ae,J);c!==de&&(c=de,m(c.object)),ce=d(Z,z,ae,$),ce&&y(Z,z,ae,$)}else{const de=J.wireframe===!0;(c.geometry!==z.id||c.program!==ae.id||c.wireframe!==de)&&(c.geometry=z.id,c.program=ae.id,c.wireframe=de,ce=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,H(Z,J,ae,z),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(Z){return i.isWebGL2?n.bindVertexArray(Z):s.bindVertexArrayOES(Z)}function g(Z){return i.isWebGL2?n.deleteVertexArray(Z):s.deleteVertexArrayOES(Z)}function v(Z,J,ae){const z=ae.wireframe===!0;let $=o[Z.id];$===void 0&&($={},o[Z.id]=$);let ce=$[J.id];ce===void 0&&(ce={},$[J.id]=ce);let de=ce[z];return de===void 0&&(de=p(h()),ce[z]=de),de}function p(Z){const J=[],ae=[],z=[];for(let $=0;$<r;$++)J[$]=0,ae[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ae,attributeDivisors:z,object:Z,attributes:{},index:null}}function d(Z,J,ae,z){const $=c.attributes,ce=J.attributes;let de=0;const G=ae.getAttributes();for(const L in G)if(G[L].location>=0){const _e=$[L];let ve=ce[L];if(ve===void 0&&(L==="instanceMatrix"&&Z.instanceMatrix&&(ve=Z.instanceMatrix),L==="instanceColor"&&Z.instanceColor&&(ve=Z.instanceColor)),_e===void 0||_e.attribute!==ve||ve&&_e.data!==ve.data)return!0;de++}return c.attributesNum!==de||c.index!==z}function y(Z,J,ae,z){const $={},ce=J.attributes;let de=0;const G=ae.getAttributes();for(const L in G)if(G[L].location>=0){let _e=ce[L];_e===void 0&&(L==="instanceMatrix"&&Z.instanceMatrix&&(_e=Z.instanceMatrix),L==="instanceColor"&&Z.instanceColor&&(_e=Z.instanceColor));const ve={};ve.attribute=_e,_e&&_e.data&&(ve.data=_e.data),$[L]=ve,de++}c.attributes=$,c.attributesNum=de,c.index=z}function S(){const Z=c.newAttributes;for(let J=0,ae=Z.length;J<ae;J++)Z[J]=0}function x(Z){b(Z,0)}function b(Z,J){const ae=c.newAttributes,z=c.enabledAttributes,$=c.attributeDivisors;ae[Z]=1,z[Z]===0&&(n.enableVertexAttribArray(Z),z[Z]=1),$[Z]!==J&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Z,J),$[Z]=J)}function C(){const Z=c.newAttributes,J=c.enabledAttributes;for(let ae=0,z=J.length;ae<z;ae++)J[ae]!==Z[ae]&&(n.disableVertexAttribArray(ae),J[ae]=0)}function P(Z,J,ae,z,$,ce,de){de===!0?n.vertexAttribIPointer(Z,J,ae,$,ce):n.vertexAttribPointer(Z,J,ae,z,$,ce)}function H(Z,J,ae,z){if(i.isWebGL2===!1&&(Z.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const $=z.attributes,ce=ae.getAttributes(),de=J.defaultAttributeValues;for(const G in ce){const L=ce[G];if(L.location>=0){let I=$[G];if(I===void 0&&(G==="instanceMatrix"&&Z.instanceMatrix&&(I=Z.instanceMatrix),G==="instanceColor"&&Z.instanceColor&&(I=Z.instanceColor)),I!==void 0){const _e=I.normalized,ve=I.itemSize,ee=t.get(I);if(ee===void 0)continue;const Pe=ee.buffer,Ae=ee.type,ke=ee.bytesPerElement,pe=i.isWebGL2===!0&&(Ae===n.INT||Ae===n.UNSIGNED_INT||I.gpuType===Uf);if(I.isInterleavedBufferAttribute){const le=I.data,F=le.stride,T=I.offset;if(le.isInstancedInterleavedBuffer){for(let w=0;w<L.locationSize;w++)b(L.location+w,le.meshPerAttribute);Z.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let w=0;w<L.locationSize;w++)x(L.location+w);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let w=0;w<L.locationSize;w++)P(L.location+w,ve/L.locationSize,Ae,_e,F*ke,(T+ve/L.locationSize*w)*ke,pe)}else{if(I.isInstancedBufferAttribute){for(let le=0;le<L.locationSize;le++)b(L.location+le,I.meshPerAttribute);Z.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let le=0;le<L.locationSize;le++)x(L.location+le);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let le=0;le<L.locationSize;le++)P(L.location+le,ve/L.locationSize,Ae,_e,ve*ke,ve/L.locationSize*le*ke,pe)}}else if(de!==void 0){const _e=de[G];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(L.location,_e);break;case 3:n.vertexAttrib3fv(L.location,_e);break;case 4:n.vertexAttrib4fv(L.location,_e);break;default:n.vertexAttrib1fv(L.location,_e)}}}}C()}function M(){ge();for(const Z in o){const J=o[Z];for(const ae in J){const z=J[ae];for(const $ in z)g(z[$].object),delete z[$];delete J[ae]}delete o[Z]}}function R(Z){if(o[Z.id]===void 0)return;const J=o[Z.id];for(const ae in J){const z=J[ae];for(const $ in z)g(z[$].object),delete z[$];delete J[ae]}delete o[Z.id]}function se(Z){for(const J in o){const ae=o[J];if(ae[Z.id]===void 0)continue;const z=ae[Z.id];for(const $ in z)g(z[$].object),delete z[$];delete ae[Z.id]}}function ge(){q(),u=!0,c!==l&&(c=l,m(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ge,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:se,initAttributes:S,enableAttribute:x,disableUnusedAttributes:C}}function Wx(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Xx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,x=a||e.has("OES_texture_float"),b=S&&x,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:C}}function jx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ti,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:i,S=y*4;let x=d.clippingState||null;l.value=x,x=u(g,h,S,m);for(let b=0;b!==S;++b)x[b]=t[b];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const d=m+v*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let S=0,x=m;S!==v;++S,x+=4)a.copy(f[S]).applyMatrix4(y,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function qx(n){let e=new WeakMap;function t(a,o){return o===Ra?a.mapping=xr:o===Ca&&(a.mapping=Sr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ra||o===Ca)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new a_(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Yx extends Yf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cr=4,Xc=[.125,.215,.35,.446,.526,.582],Ri=20,fa=new Yx,jc=new nt;let da=null;const Ai=(1+Math.sqrt(5))/2,ir=1/Ai,qc=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Ai,ir),new W(0,Ai,-ir),new W(ir,0,Ai),new W(-ir,0,Ai),new W(Ai,ir,0),new W(-Ai,ir,0)];class Yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){da=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(da),e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),da=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:os,format:fn,colorSpace:wn,depthBuffer:!1},r=$c(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$x(s)),this._blurMaterial=Kx(s,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,i,r){const o=new en(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(jc),u.toneMapping=ci,u.autoClear=!1;const m=new Kr({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new dn(new ms,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(jc),v=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const S=this._cubeSize;Gs(r,y*S,d>2?S:0,S,S),u.setRenderTarget(r),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===xr||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new dn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Gs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qc[(r-1)%qc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new dn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ri-1),v=s/g,p=isFinite(s)?1+Math.floor(u*v):Ri;p>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ri}`);const d=[];let y=0;for(let P=0;P<Ri;++P){const H=P/v,M=Math.exp(-H*H/2);d.push(M),P===0?y+=M:P<p&&(y+=2*M)}for(let P=0;P<d.length;P++)d[P]=d[P]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;const x=this._sizeLods[r],b=3*x*(r>S-cr?r-S+cr:0),C=4*(this._cubeSize-x);Gs(t,b,C,3*x,2*x),l.setRenderTarget(t),l.render(f,fa)}}function $x(n){const e=[],t=[],i=[];let r=n;const s=n-cr+1+Xc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-cr?l=Xc[a-n+cr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,v=3,p=2,d=1,y=new Float32Array(v*g*m),S=new Float32Array(p*g*m),x=new Float32Array(d*g*m);for(let C=0;C<m;C++){const P=C%3*2/3-1,H=C>2?0:-1,M=[P,H,0,P+2/3,H,0,P+2/3,H+1,0,P,H,0,P+2/3,H+1,0,P,H+1,0];y.set(M,v*g*C),S.set(h,p*g*C);const R=[C,C,C,C,C,C];x.set(R,d*g*C)}const b=new mi;b.setAttribute("position",new yn(y,v)),b.setAttribute("uv",new yn(S,p)),b.setAttribute("faceIndex",new yn(x,d)),e.push(b),r>cr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $c(n,e,t){const i=new Fi(n,e,t);return i.texture.mapping=Mo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Kx(n,e,t){const i=new Float32Array(Ri),r=new W(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ol(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Kc(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Zc(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function ol(){return`

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
	`}function Zx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ra||l===Ca,u=l===xr||l===Sr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Yc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Yc(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Jx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Qx(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const v=m[g];for(let p=0,d=v.length;p<d;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const y=m.array;v=m.version;for(let S=0,x=y.length;S<x;S+=3){const b=y[S+0],C=y[S+1],P=y[S+2];h.push(b,C,C,P,P,b)}}else if(g!==void 0){const y=g.array;v=g.version;for(let S=0,x=y.length/3-1;S<x;S+=3){const b=S+0,C=S+1,P=S+2;h.push(b,C,C,P,P,b)}}else return;const p=new(Hf(h)?jf:Xf)(h,1);p.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function e0(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,g){if(g===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,o,h*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function t0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function n0(n,e){return n[0]-e[0]}function i0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function r0(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new bt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==g){let Z=function(){ge.dispose(),s.delete(u),u.removeEventListener("dispose",Z)};v!==void 0&&v.texture.dispose();const y=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let H=0;y===!0&&(H=1),S===!0&&(H=2),x===!0&&(H=3);let M=u.attributes.position.count*H,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const se=new Float32Array(M*R*4*g),ge=new kf(se,M,R,g);ge.type=oi,ge.needsUpdate=!0;const q=H*4;for(let J=0;J<g;J++){const ae=b[J],z=C[J],$=P[J],ce=M*R*4*J;for(let de=0;de<ae.count;de++){const G=de*q;y===!0&&(a.fromBufferAttribute(ae,de),se[ce+G+0]=a.x,se[ce+G+1]=a.y,se[ce+G+2]=a.z,se[ce+G+3]=0),S===!0&&(a.fromBufferAttribute(z,de),se[ce+G+4]=a.x,se[ce+G+5]=a.y,se[ce+G+6]=a.z,se[ce+G+7]=0),x===!0&&(a.fromBufferAttribute($,de),se[ce+G+8]=a.x,se[ce+G+9]=a.y,se[ce+G+10]=a.z,se[ce+G+11]=$.itemSize===4?a.w:1)}}v={count:g,texture:ge,size:new Qe(M,R)},s.set(u,v),u.addEventListener("dispose",Z)}let p=0;for(let y=0;y<h.length;y++)p+=h[y];const d=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",d),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const m=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==m){g=[];for(let S=0;S<m;S++)g[S]=[S,0];i[u.id]=g}for(let S=0;S<m;S++){const x=g[S];x[0]=S,x[1]=h[S]}g.sort(i0);for(let S=0;S<8;S++)S<m&&g[S][1]?(o[S][0]=g[S][0],o[S][1]=g[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(n0);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let d=0;for(let S=0;S<8;S++){const x=o[S],b=x[0],C=x[1];b!==Number.MAX_SAFE_INTEGER&&C?(v&&u.getAttribute("morphTarget"+S)!==v[b]&&u.setAttribute("morphTarget"+S,v[b]),p&&u.getAttribute("morphNormal"+S)!==p[b]&&u.setAttribute("morphNormal"+S,p[b]),r[S]=C,d+=C):(v&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const y=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function s0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Jf=new kt,Qf=new kf,ed=new Wg,td=new $f,Jc=[],Qc=[],eu=new Float32Array(16),tu=new Float32Array(9),nu=new Float32Array(4);function wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Jc[r];if(s===void 0&&(s=new Float32Array(r),Jc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function To(n,e){let t=Qc[e];t===void 0&&(t=new Int32Array(e),Qc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function o0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function a0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function l0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function c0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function u0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;nu.set(i),n.uniformMatrix2fv(this.addr,!1,nu),Mt(t,i)}}function f0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;tu.set(i),n.uniformMatrix3fv(this.addr,!1,tu),Mt(t,i)}}function d0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;eu.set(i),n.uniformMatrix4fv(this.addr,!1,eu),Mt(t,i)}}function h0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function p0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function m0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function _0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function v0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function x0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function S0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function M0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Jf,r)}function E0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ed,r)}function y0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||td,r)}function b0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qf,r)}function T0(n){switch(n){case 5126:return o0;case 35664:return a0;case 35665:return l0;case 35666:return c0;case 35674:return u0;case 35675:return f0;case 35676:return d0;case 5124:case 35670:return h0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return v0;case 36295:return x0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return b0}}function A0(n,e){n.uniform1fv(this.addr,e)}function w0(n,e){const t=wr(e,this.size,2);n.uniform2fv(this.addr,t)}function R0(n,e){const t=wr(e,this.size,3);n.uniform3fv(this.addr,t)}function C0(n,e){const t=wr(e,this.size,4);n.uniform4fv(this.addr,t)}function P0(n,e){const t=wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function L0(n,e){const t=wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function U0(n,e){const t=wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function D0(n,e){n.uniform1iv(this.addr,e)}function I0(n,e){n.uniform2iv(this.addr,e)}function N0(n,e){n.uniform3iv(this.addr,e)}function F0(n,e){n.uniform4iv(this.addr,e)}function O0(n,e){n.uniform1uiv(this.addr,e)}function B0(n,e){n.uniform2uiv(this.addr,e)}function H0(n,e){n.uniform3uiv(this.addr,e)}function z0(n,e){n.uniform4uiv(this.addr,e)}function G0(n,e,t){const i=this.cache,r=e.length,s=To(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Jf,s[a])}function k0(n,e,t){const i=this.cache,r=e.length,s=To(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ed,s[a])}function V0(n,e,t){const i=this.cache,r=e.length,s=To(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||td,s[a])}function W0(n,e,t){const i=this.cache,r=e.length,s=To(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Qf,s[a])}function X0(n){switch(n){case 5126:return A0;case 35664:return w0;case 35665:return R0;case 35666:return C0;case 35674:return P0;case 35675:return L0;case 35676:return U0;case 5124:case 35670:return D0;case 35667:case 35671:return I0;case 35668:case 35672:return N0;case 35669:case 35673:return F0;case 5125:return O0;case 36294:return B0;case 36295:return H0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return W0}}class j0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=T0(t.type)}}class q0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=X0(t.type)}}class Y0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function iu(n,e){n.seq.push(e),n.map[e.id]=e}function $0(n,e,t){const i=n.name,r=i.length;for(ha.lastIndex=0;;){const s=ha.exec(i),a=ha.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){iu(t,c===void 0?new j0(o,n,e):new q0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Y0(o),iu(t,f)),t=f}}}class Ys{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);$0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ru(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let K0=0;function Z0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function J0(n){switch(n){case wn:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function su(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Z0(n.getShaderSource(e),a)}else return r}function Q0(n,e){const t=J0(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function eS(n,e){let t;switch(e){case jm:t="Linear";break;case qm:t="Reinhard";break;case Ym:t="OptimizedCineon";break;case $m:t="ACESFilmic";break;case Km:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tS(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join(`
`)}function nS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Or(n){return n!==""}function ou(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(n){return n.replace(rS,oS)}const sS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function oS(n,e){let t=We[e];if(t===void 0){const i=sS.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ia(t)}const aS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(n){return n.replace(aS,lS)}function lS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function uS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case Sr:e="ENVMAP_TYPE_CUBE";break;case Mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function dS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Pf:e="ENVMAP_BLENDING_MULTIPLY";break;case Wm:e="ENVMAP_BLENDING_MIX";break;case Xm:e="ENVMAP_BLENDING_ADD";break}return e}function hS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function pS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=cS(t),c=uS(t),u=fS(t),f=dS(t),h=hS(t),m=t.isWebGL2?"":tS(t),g=nS(s),v=r.createProgram();let p,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),d.length>0&&(d+=`
`)):(p=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),d=[m,cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?We.tonemapping_pars_fragment:"",t.toneMapping!==ci?eS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Q0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=Ia(a),a=ou(a,t),a=au(a,t),o=Ia(o),o=ou(o,t),o=au(o,t),a=lu(a),o=lu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=y+p+a,x=y+d+o,b=ru(r,r.VERTEX_SHADER,S),C=ru(r,r.FRAGMENT_SHADER,x);if(r.attachShader(v,b),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(v).trim(),R=r.getShaderInfoLog(b).trim(),se=r.getShaderInfoLog(C).trim();let ge=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ge=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,b,C);else{const Z=su(r,b,"vertex"),J=su(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+Z+`
`+J)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(R===""||se==="")&&(q=!1);q&&(this.diagnostics={runnable:ge,programLog:M,vertexShader:{log:R,prefix:p},fragmentShader:{log:se,prefix:d}})}r.deleteShader(b),r.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new Ys(r,v)),P};let H;return this.getAttributes=function(){return H===void 0&&(H=iS(r,v)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=C,this}let mS=0;class gS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _S(e),t.set(e,i)),i}}class _S{constructor(e){this.id=mS++,this.code=e,this.usedTimes=0}}function vS(n,e,t,i,r,s,a){const o=new rl,l=new gS,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function p(M,R,se,ge,q){const Z=ge.fog,J=q.geometry,ae=M.isMeshStandardMaterial?ge.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||ae),$=z&&z.mapping===Mo?z.image.height:null,ce=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const de=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,G=de!==void 0?de.length:0;let L=0;J.morphAttributes.position!==void 0&&(L=1),J.morphAttributes.normal!==void 0&&(L=2),J.morphAttributes.color!==void 0&&(L=3);let I,_e,ve,ee;if(ce){const rt=Mn[ce];I=rt.vertexShader,_e=rt.fragmentShader}else I=M.vertexShader,_e=M.fragmentShader,l.update(M),ve=l.getVertexShaderID(M),ee=l.getFragmentShaderID(M);const Pe=n.getRenderTarget(),Ae=q.isInstancedMesh===!0,ke=!!M.map,pe=!!M.matcap,le=!!z,F=!!M.aoMap,T=!!M.lightMap,w=!!M.bumpMap,N=!!M.normalMap,B=!!M.displacementMap,X=!!M.emissiveMap,Y=!!M.metalnessMap,re=!!M.roughnessMap,fe=M.anisotropy>0,he=M.clearcoat>0,oe=M.iridescence>0,E=M.sheen>0,_=M.transmission>0,U=fe&&!!M.anisotropyMap,Q=he&&!!M.clearcoatMap,te=he&&!!M.clearcoatNormalMap,ue=he&&!!M.clearcoatRoughnessMap,xe=oe&&!!M.iridescenceMap,me=oe&&!!M.iridescenceThicknessMap,V=E&&!!M.sheenColorMap,we=E&&!!M.sheenRoughnessMap,Te=!!M.specularMap,Le=!!M.specularColorMap,Re=!!M.specularIntensityMap,Ee=_&&!!M.transmissionMap,Fe=_&&!!M.thicknessMap,Je=!!M.gradientMap,D=!!M.alphaMap,ye=M.alphaTest>0,K=!!M.alphaHash,Se=!!M.extensions,be=!!J.attributes.uv1,$e=!!J.attributes.uv2,at=!!J.attributes.uv3;let dt=ci;return M.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(dt=n.toneMapping),{isWebGL2:u,shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:I,fragmentShader:_e,defines:M.defines,customVertexShaderID:ve,customFragmentShaderID:ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Ae,instancingColor:Ae&&q.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:wn,map:ke,matcap:pe,envMap:le,envMapMode:le&&z.mapping,envMapCubeUVHeight:$,aoMap:F,lightMap:T,bumpMap:w,normalMap:N,displacementMap:h&&B,emissiveMap:X,normalMapObjectSpace:N&&M.normalMapType===ug,normalMapTangentSpace:N&&M.normalMapType===cg,metalnessMap:Y,roughnessMap:re,anisotropy:fe,anisotropyMap:U,clearcoat:he,clearcoatMap:Q,clearcoatNormalMap:te,clearcoatRoughnessMap:ue,iridescence:oe,iridescenceMap:xe,iridescenceThicknessMap:me,sheen:E,sheenColorMap:V,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Le,specularIntensityMap:Re,transmission:_,transmissionMap:Ee,thicknessMap:Fe,gradientMap:Je,opaque:M.transparent===!1&&M.blending===hr,alphaMap:D,alphaTest:ye,alphaHash:K,combine:M.combine,mapUv:ke&&v(M.map.channel),aoMapUv:F&&v(M.aoMap.channel),lightMapUv:T&&v(M.lightMap.channel),bumpMapUv:w&&v(M.bumpMap.channel),normalMapUv:N&&v(M.normalMap.channel),displacementMapUv:B&&v(M.displacementMap.channel),emissiveMapUv:X&&v(M.emissiveMap.channel),metalnessMapUv:Y&&v(M.metalnessMap.channel),roughnessMapUv:re&&v(M.roughnessMap.channel),anisotropyMapUv:U&&v(M.anisotropyMap.channel),clearcoatMapUv:Q&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:me&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:V&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(M.sheenRoughnessMap.channel),specularMapUv:Te&&v(M.specularMap.channel),specularColorMapUv:Le&&v(M.specularColorMap.channel),specularIntensityMapUv:Re&&v(M.specularIntensityMap.channel),transmissionMapUv:Ee&&v(M.transmissionMap.channel),thicknessMapUv:Fe&&v(M.thicknessMap.channel),alphaMapUv:D&&v(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(N||fe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:$e,vertexUv3s:at,pointsUvs:q.isPoints===!0&&!!J.attributes.uv&&(ke||D),fog:!!Z,useFog:M.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:L,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&se.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ke&&M.map.isVideoTexture===!0&&M.map.colorSpace===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zn,flipSided:M.side===Ut,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Se&&M.extensions.derivatives===!0,extensionFragDepth:Se&&M.extensions.fragDepth===!0,extensionDrawBuffers:Se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const se in M.defines)R.push(se),R.push(M.defines[se]);return M.isRawShaderMaterial===!1&&(y(R,M),S(R,M),R.push(n.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function y(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function S(M,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function x(M){const R=g[M.type];let se;if(R){const ge=Mn[R];se=i_.clone(ge.uniforms)}else se=M.uniforms;return se}function b(M,R){let se;for(let ge=0,q=c.length;ge<q;ge++){const Z=c[ge];if(Z.cacheKey===R){se=Z,++se.usedTimes;break}}return se===void 0&&(se=new pS(n,R,M,s),c.push(se)),se}function C(M){if(--M.usedTimes===0){const R=c.indexOf(M);c[R]=c[c.length-1],c.pop(),M.destroy()}}function P(M){l.remove(M)}function H(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:x,acquireProgram:b,releaseProgram:C,releaseShaderCache:P,programs:c,dispose:H}}function xS(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function SS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function uu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,g,v,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=p),e++,d}function o(f,h,m,g,v,p){const d=a(f,h,m,g,v,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,g,v,p){const d=a(f,h,m,g,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||SS),i.length>1&&i.sort(h||uu),r.length>1&&r.sort(h||uu)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function MS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new fu,n.set(i,[a])):r>=s.length?(a=new fu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ES(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new nt};break;case"SpotLight":t={position:new W,direction:new W,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function yS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bS=0;function TS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function AS(n,e){const t=new ES,i=yS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new W);const s=new W,a=new Tt,o=new Tt;function l(u,f){let h=0,m=0,g=0;for(let se=0;se<9;se++)r.probe[se].set(0,0,0);let v=0,p=0,d=0,y=0,S=0,x=0,b=0,C=0,P=0,H=0;u.sort(TS);const M=f===!0?Math.PI:1;for(let se=0,ge=u.length;se<ge;se++){const q=u[se],Z=q.color,J=q.intensity,ae=q.distance,z=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)h+=Z.r*J*M,m+=Z.g*J*M,g+=Z.b*J*M;else if(q.isLightProbe)for(let $=0;$<9;$++)r.probe[$].addScaledVector(q.sh.coefficients[$],J);else if(q.isDirectionalLight){const $=t.get(q);if($.color.copy(q.color).multiplyScalar(q.intensity*M),q.castShadow){const ce=q.shadow,de=i.get(q);de.shadowBias=ce.bias,de.shadowNormalBias=ce.normalBias,de.shadowRadius=ce.radius,de.shadowMapSize=ce.mapSize,r.directionalShadow[v]=de,r.directionalShadowMap[v]=z,r.directionalShadowMatrix[v]=q.shadow.matrix,x++}r.directional[v]=$,v++}else if(q.isSpotLight){const $=t.get(q);$.position.setFromMatrixPosition(q.matrixWorld),$.color.copy(Z).multiplyScalar(J*M),$.distance=ae,$.coneCos=Math.cos(q.angle),$.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),$.decay=q.decay,r.spot[d]=$;const ce=q.shadow;if(q.map&&(r.spotLightMap[P]=q.map,P++,ce.updateMatrices(q),q.castShadow&&H++),r.spotLightMatrix[d]=ce.matrix,q.castShadow){const de=i.get(q);de.shadowBias=ce.bias,de.shadowNormalBias=ce.normalBias,de.shadowRadius=ce.radius,de.shadowMapSize=ce.mapSize,r.spotShadow[d]=de,r.spotShadowMap[d]=z,C++}d++}else if(q.isRectAreaLight){const $=t.get(q);$.color.copy(Z).multiplyScalar(J),$.halfWidth.set(q.width*.5,0,0),$.halfHeight.set(0,q.height*.5,0),r.rectArea[y]=$,y++}else if(q.isPointLight){const $=t.get(q);if($.color.copy(q.color).multiplyScalar(q.intensity*M),$.distance=q.distance,$.decay=q.decay,q.castShadow){const ce=q.shadow,de=i.get(q);de.shadowBias=ce.bias,de.shadowNormalBias=ce.normalBias,de.shadowRadius=ce.radius,de.shadowMapSize=ce.mapSize,de.shadowCameraNear=ce.camera.near,de.shadowCameraFar=ce.camera.far,r.pointShadow[p]=de,r.pointShadowMap[p]=z,r.pointShadowMatrix[p]=q.shadow.matrix,b++}r.point[p]=$,p++}else if(q.isHemisphereLight){const $=t.get(q);$.skyColor.copy(q.color).multiplyScalar(J*M),$.groundColor.copy(q.groundColor).multiplyScalar(J*M),r.hemi[S]=$,S++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==v||R.pointLength!==p||R.spotLength!==d||R.rectAreaLength!==y||R.hemiLength!==S||R.numDirectionalShadows!==x||R.numPointShadows!==b||R.numSpotShadows!==C||R.numSpotMaps!==P)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=y,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+P-H,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=H,R.directionalLength=v,R.pointLength=p,R.spotLength=d,R.rectAreaLength=y,R.hemiLength=S,R.numDirectionalShadows=x,R.numPointShadows=b,R.numSpotShadows=C,R.numSpotMaps=P,r.version=bS++)}function c(u,f){let h=0,m=0,g=0,v=0,p=0;const d=f.matrixWorldInverse;for(let y=0,S=u.length;y<S;y++){const x=u[y];if(x.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),h++}else if(x.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),g++}else if(x.isRectAreaLight){const b=r.rectArea[v];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(d),o.identity(),a.copy(x.matrixWorld),a.premultiply(d),o.extractRotation(a),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(d),m++}else if(x.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function du(n,e){const t=new AS(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function wS(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new du(n,e),t.set(s,[l])):a>=o.length?(l=new du(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class RS extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CS extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LS=`uniform sampler2D shadow_pass;
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
}`;function US(n,e,t){let i=new Kf;const r=new Qe,s=new Qe,a=new bt,o=new RS({depthPacking:lg}),l=new CS,c={},u=t.maxTextureSize,f={[hi]:Ut,[Ut]:hi,[zn]:zn},h=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:PS,fragmentShader:LS}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new mi;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new dn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wf;let d=this.type;this.render=function(b,C,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const H=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),se=n.state;se.setBlending(li),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ge=d!==Fn&&this.type===Fn,q=d===Fn&&this.type!==Fn;for(let Z=0,J=b.length;Z<J;Z++){const ae=b[Z],z=ae.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const $=z.getFrameExtents();if(r.multiply($),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,z.mapSize.y=s.y)),z.map===null||ge===!0||q===!0){const de=this.type!==Fn?{minFilter:Bt,magFilter:Bt}:{};z.map!==null&&z.map.dispose(),z.map=new Fi(r.x,r.y,de),z.map.texture.name=ae.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ce=z.getViewportCount();for(let de=0;de<ce;de++){const G=z.getViewport(de);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),se.viewport(a),z.updateMatrices(ae,de),i=z.getFrustum(),x(C,P,z.camera,ae,this.type)}z.isPointLightShadow!==!0&&this.type===Fn&&y(z,P),z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(H,M,R)};function y(b,C){const P=e.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Fi(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,P,h,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,P,m,v,null)}function S(b,C,P,H){let M=null;const R=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const se=M.uuid,ge=C.uuid;let q=c[se];q===void 0&&(q={},c[se]=q);let Z=q[ge];Z===void 0&&(Z=M.clone(),q[ge]=Z),M=Z}if(M.visible=C.visible,M.wireframe=C.wireframe,H===Fn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const se=n.properties.get(M);se.light=P}return M}function x(b,C,P,H,M){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Fn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const ge=e.update(b),q=b.material;if(Array.isArray(q)){const Z=ge.groups;for(let J=0,ae=Z.length;J<ae;J++){const z=Z[J],$=q[z.materialIndex];if($&&$.visible){const ce=S(b,$,H,M);n.renderBufferDirect(P,null,ge,ce,b,z)}}}else if(q.visible){const Z=S(b,q,H,M);n.renderBufferDirect(P,null,ge,Z,b,null)}}const se=b.children;for(let ge=0,q=se.length;ge<q;ge++)x(se[ge],C,P,H,M)}}function DS(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const ye=new bt;let K=null;const Se=new bt(0,0,0,0);return{setMask:function(be){K!==be&&!D&&(n.colorMask(be,be,be,be),K=be)},setLocked:function(be){D=be},setClear:function(be,$e,at,dt,$n){$n===!0&&(be*=dt,$e*=dt,at*=dt),ye.set(be,$e,at,dt),Se.equals(ye)===!1&&(n.clearColor(be,$e,at,dt),Se.copy(ye))},reset:function(){D=!1,K=null,Se.set(-1,0,0,0)}}}function s(){let D=!1,ye=null,K=null,Se=null;return{setTest:function(be){be?Pe(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(be){ye!==be&&!D&&(n.depthMask(be),ye=be)},setFunc:function(be){if(K!==be){switch(be){case Om:n.depthFunc(n.NEVER);break;case Bm:n.depthFunc(n.ALWAYS);break;case Hm:n.depthFunc(n.LESS);break;case wa:n.depthFunc(n.LEQUAL);break;case zm:n.depthFunc(n.EQUAL);break;case Gm:n.depthFunc(n.GEQUAL);break;case km:n.depthFunc(n.GREATER);break;case Vm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=be}},setLocked:function(be){D=be},setClear:function(be){Se!==be&&(n.clearDepth(be),Se=be)},reset:function(){D=!1,ye=null,K=null,Se=null}}}function a(){let D=!1,ye=null,K=null,Se=null,be=null,$e=null,at=null,dt=null,$n=null;return{setTest:function(rt){D||(rt?Pe(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(rt){ye!==rt&&!D&&(n.stencilMask(rt),ye=rt)},setFunc:function(rt,gn,Dt){(K!==rt||Se!==gn||be!==Dt)&&(n.stencilFunc(rt,gn,Dt),K=rt,Se=gn,be=Dt)},setOp:function(rt,gn,Dt){($e!==rt||at!==gn||dt!==Dt)&&(n.stencilOp(rt,gn,Dt),$e=rt,at=gn,dt=Dt)},setLocked:function(rt){D=rt},setClear:function(rt){$n!==rt&&(n.clearStencil(rt),$n=rt)},reset:function(){D=!1,ye=null,K=null,Se=null,be=null,$e=null,at=null,dt=null,$n=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,v=[],p=null,d=!1,y=null,S=null,x=null,b=null,C=null,P=null,H=null,M=!1,R=null,se=null,ge=null,q=null,Z=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,z=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),ae=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ae=z>=2);let ce=null,de={};const G=n.getParameter(n.SCISSOR_BOX),L=n.getParameter(n.VIEWPORT),I=new bt().fromArray(G),_e=new bt().fromArray(L);function ve(D,ye,K,Se){const be=new Uint8Array(4),$e=n.createTexture();n.bindTexture(D,$e),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<K;at++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(ye,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(ye+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return $e}const ee={};ee[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ee[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(n.DEPTH_TEST),l.setFunc(wa),B(!1),X(Kl),Pe(n.CULL_FACE),w(li);function Pe(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Ae(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function ke(D,ye){return m[D]!==ye?(n.bindFramebuffer(D,ye),m[D]=ye,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ye),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ye)),!0):!1}function pe(D,ye){let K=v,Se=!1;if(D)if(K=g.get(ye),K===void 0&&(K=[],g.set(ye,K)),D.isWebGLMultipleRenderTargets){const be=D.texture;if(K.length!==be.length||K[0]!==n.COLOR_ATTACHMENT0){for(let $e=0,at=be.length;$e<at;$e++)K[$e]=n.COLOR_ATTACHMENT0+$e;K.length=be.length,Se=!0}}else K[0]!==n.COLOR_ATTACHMENT0&&(K[0]=n.COLOR_ATTACHMENT0,Se=!0);else K[0]!==n.BACK&&(K[0]=n.BACK,Se=!0);Se&&(t.isWebGL2?n.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function le(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const F={[sr]:n.FUNC_ADD,[Am]:n.FUNC_SUBTRACT,[wm]:n.FUNC_REVERSE_SUBTRACT};if(i)F[ec]=n.MIN,F[tc]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(F[ec]=D.MIN_EXT,F[tc]=D.MAX_EXT)}const T={[Rm]:n.ZERO,[Cm]:n.ONE,[Pm]:n.SRC_COLOR,[Rf]:n.SRC_ALPHA,[Fm]:n.SRC_ALPHA_SATURATE,[Im]:n.DST_COLOR,[Um]:n.DST_ALPHA,[Lm]:n.ONE_MINUS_SRC_COLOR,[Cf]:n.ONE_MINUS_SRC_ALPHA,[Nm]:n.ONE_MINUS_DST_COLOR,[Dm]:n.ONE_MINUS_DST_ALPHA};function w(D,ye,K,Se,be,$e,at,dt){if(D===li){d===!0&&(Ae(n.BLEND),d=!1);return}if(d===!1&&(Pe(n.BLEND),d=!0),D!==Tm){if(D!==y||dt!==M){if((S!==sr||C!==sr)&&(n.blendEquation(n.FUNC_ADD),S=sr,C=sr),dt)switch(D){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zl:n.blendFunc(n.ONE,n.ONE);break;case Jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ql:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ql:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,b=null,P=null,H=null,y=D,M=dt}return}be=be||ye,$e=$e||K,at=at||Se,(ye!==S||be!==C)&&(n.blendEquationSeparate(F[ye],F[be]),S=ye,C=be),(K!==x||Se!==b||$e!==P||at!==H)&&(n.blendFuncSeparate(T[K],T[Se],T[$e],T[at]),x=K,b=Se,P=$e,H=at),y=D,M=!1}function N(D,ye){D.side===zn?Ae(n.CULL_FACE):Pe(n.CULL_FACE);let K=D.side===Ut;ye&&(K=!K),B(K),D.blending===hr&&D.transparent===!1?w(li):w(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Se=D.stencilWrite;c.setTest(Se),Se&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Pe(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function B(D){R!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),R=D)}function X(D){D!==Em?(Pe(n.CULL_FACE),D!==se&&(D===Kl?n.cullFace(n.BACK):D===ym?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),se=D}function Y(D){D!==ge&&(ae&&n.lineWidth(D),ge=D)}function re(D,ye,K){D?(Pe(n.POLYGON_OFFSET_FILL),(q!==ye||Z!==K)&&(n.polygonOffset(ye,K),q=ye,Z=K)):Ae(n.POLYGON_OFFSET_FILL)}function fe(D){D?Pe(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function he(D){D===void 0&&(D=n.TEXTURE0+J-1),ce!==D&&(n.activeTexture(D),ce=D)}function oe(D,ye,K){K===void 0&&(ce===null?K=n.TEXTURE0+J-1:K=ce);let Se=de[K];Se===void 0&&(Se={type:void 0,texture:void 0},de[K]=Se),(Se.type!==D||Se.texture!==ye)&&(ce!==K&&(n.activeTexture(K),ce=K),n.bindTexture(D,ye||ee[D]),Se.type=D,Se.texture=ye)}function E(){const D=de[ce];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function U(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){I.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),I.copy(D))}function Re(D){_e.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),_e.copy(D))}function Ee(D,ye){let K=f.get(ye);K===void 0&&(K=new WeakMap,f.set(ye,K));let Se=K.get(D);Se===void 0&&(Se=n.getUniformBlockIndex(ye,D.name),K.set(D,Se))}function Fe(D,ye){const Se=f.get(ye).get(D);u.get(ye)!==Se&&(n.uniformBlockBinding(ye,Se,D.__bindingPointIndex),u.set(ye,Se))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,de={},m={},g=new WeakMap,v=[],p=null,d=!1,y=null,S=null,x=null,b=null,C=null,P=null,H=null,M=!1,R=null,se=null,ge=null,q=null,Z=null,I.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:Ae,bindFramebuffer:ke,drawBuffers:pe,useProgram:le,setBlending:w,setMaterial:N,setFlipSided:B,setCullFace:X,setLineWidth:Y,setPolygonOffset:re,setScissorTest:fe,activeTexture:he,bindTexture:oe,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:we,texImage3D:Te,updateUBOMapping:Ee,uniformBlockBinding:Fe,texStorage2D:me,texStorage3D:V,texSubImage2D:Q,texSubImage3D:te,compressedTexSubImage2D:ue,compressedTexSubImage3D:xe,scissor:Le,viewport:Re,reset:Je}}function IS(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,_){return d?new OffscreenCanvas(E,_):ls("canvas")}function S(E,_,U,Q){let te=1;if((E.width>Q||E.height>Q)&&(te=Q/Math.max(E.width,E.height)),te<1||_===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ue=_?ro:Math.floor,xe=ue(te*E.width),me=ue(te*E.height);v===void 0&&(v=y(xe,me));const V=U?y(xe,me):v;return V.width=xe,V.height=me,V.getContext("2d").drawImage(E,0,0,xe,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+xe+"x"+me+")."),V}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function x(E){return Da(E.width)&&Da(E.height)}function b(E){return o?!1:E.wrapS!==un||E.wrapT!==un||E.minFilter!==Bt&&E.minFilter!==Qt}function C(E,_){return E.generateMipmaps&&_&&E.minFilter!==Bt&&E.minFilter!==Qt}function P(E){n.generateMipmap(E)}function H(E,_,U,Q,te=!1){if(o===!1)return _;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ue=_;return _===n.RED&&(U===n.FLOAT&&(ue=n.R32F),U===n.HALF_FLOAT&&(ue=n.R16F),U===n.UNSIGNED_BYTE&&(ue=n.R8)),_===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(ue=n.R8UI),U===n.UNSIGNED_SHORT&&(ue=n.R16UI),U===n.UNSIGNED_INT&&(ue=n.R32UI),U===n.BYTE&&(ue=n.R8I),U===n.SHORT&&(ue=n.R16I),U===n.INT&&(ue=n.R32I)),_===n.RG&&(U===n.FLOAT&&(ue=n.RG32F),U===n.HALF_FLOAT&&(ue=n.RG16F),U===n.UNSIGNED_BYTE&&(ue=n.RG8)),_===n.RGBA&&(U===n.FLOAT&&(ue=n.RGBA32F),U===n.HALF_FLOAT&&(ue=n.RGBA16F),U===n.UNSIGNED_BYTE&&(ue=Q===ot&&te===!1?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)),(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function M(E,_,U){return C(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==Bt&&E.minFilter!==Qt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function R(E){return E===Bt||E===nc||E===Go?n.NEAREST:n.LINEAR}function se(E){const _=E.target;_.removeEventListener("dispose",se),q(_),_.isVideoTexture&&g.delete(_)}function ge(E){const _=E.target;_.removeEventListener("dispose",ge),J(_)}function q(E){const _=i.get(E);if(_.__webglInit===void 0)return;const U=E.source,Q=p.get(U);if(Q){const te=Q[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&Z(E),Object.keys(Q).length===0&&p.delete(U)}i.remove(E)}function Z(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const U=E.source,Q=p.get(U);delete Q[_.__cacheKey],a.memory.textures--}function J(E){const _=E.texture,U=i.get(E),Q=i.get(_);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(U.__webglFramebuffer[te]))for(let ue=0;ue<U.__webglFramebuffer[te].length;ue++)n.deleteFramebuffer(U.__webglFramebuffer[te][ue]);else n.deleteFramebuffer(U.__webglFramebuffer[te]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[te])}else{if(Array.isArray(U.__webglFramebuffer))for(let te=0;te<U.__webglFramebuffer.length;te++)n.deleteFramebuffer(U.__webglFramebuffer[te]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let te=0;te<U.__webglColorRenderbuffer.length;te++)U.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[te]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let te=0,ue=_.length;te<ue;te++){const xe=i.get(_[te]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(_[te])}i.remove(_),i.remove(E)}let ae=0;function z(){ae=0}function $(){const E=ae;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),ae+=1,E}function ce(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function de(E,_){const U=i.get(E);if(E.isVideoTexture&&he(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(U,E,_);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+_)}function G(E,_){const U=i.get(E);if(E.version>0&&U.__version!==E.version){ke(U,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+_)}function L(E,_){const U=i.get(E);if(E.version>0&&U.__version!==E.version){ke(U,E,_);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+_)}function I(E,_){const U=i.get(E);if(E.version>0&&U.__version!==E.version){pe(U,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+_)}const _e={[Pa]:n.REPEAT,[un]:n.CLAMP_TO_EDGE,[La]:n.MIRRORED_REPEAT},ve={[Bt]:n.NEAREST,[nc]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Zm]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},ee={[dg]:n.NEVER,[xg]:n.ALWAYS,[hg]:n.LESS,[mg]:n.LEQUAL,[pg]:n.EQUAL,[vg]:n.GEQUAL,[gg]:n.GREATER,[_g]:n.NOTEQUAL};function Pe(E,_,U){if(U?(n.texParameteri(E,n.TEXTURE_WRAP_S,_e[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,_e[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,_e[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ve[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ve[_.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==un||_.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,R(_.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,R(_.minFilter)),_.minFilter!==Bt&&_.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ee[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Bt||_.minFilter!==Go&&_.minFilter!==ss||_.type===oi&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===os&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function Ae(E,_){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",se));const Q=_.source;let te=p.get(Q);te===void 0&&(te={},p.set(Q,te));const ue=ce(_);if(ue!==E.__cacheKey){te[ue]===void 0&&(te[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),te[ue].usedTimes++;const xe=te[E.__cacheKey];xe!==void 0&&(te[E.__cacheKey].usedTimes--,xe.usedTimes===0&&Z(_)),E.__cacheKey=ue,E.__webglTexture=te[ue].texture}return U}function ke(E,_,U){let Q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=n.TEXTURE_3D);const te=Ae(E,_),ue=_.source;t.bindTexture(Q,E.__webglTexture,n.TEXTURE0+U);const xe=i.get(ue);if(ue.version!==xe.__version||te===!0){t.activeTexture(n.TEXTURE0+U),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const me=b(_)&&x(_.image)===!1;let V=S(_.image,me,!1,u);V=oe(_,V);const we=x(V)||o,Te=s.convert(_.format,_.colorSpace);let Le=s.convert(_.type),Re=H(_.internalFormat,Te,Le,_.colorSpace,_.isVideoTexture);Pe(Q,_,we);let Ee;const Fe=_.mipmaps,Je=o&&_.isVideoTexture!==!0,D=xe.__version===void 0||te===!0,ye=M(_,V,we);if(_.isDepthTexture)Re=n.DEPTH_COMPONENT,o?_.type===oi?Re=n.DEPTH_COMPONENT32F:_.type===si?Re=n.DEPTH_COMPONENT24:_.type===Li?Re=n.DEPTH24_STENCIL8:Re=n.DEPTH_COMPONENT16:_.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Ui&&Re===n.DEPTH_COMPONENT&&_.type!==tl&&_.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=si,Le=s.convert(_.type)),_.format===Mr&&Re===n.DEPTH_COMPONENT&&(Re=n.DEPTH_STENCIL,_.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Li,Le=s.convert(_.type))),D&&(Je?t.texStorage2D(n.TEXTURE_2D,1,Re,V.width,V.height):t.texImage2D(n.TEXTURE_2D,0,Re,V.width,V.height,0,Te,Le,null));else if(_.isDataTexture)if(Fe.length>0&&we){Je&&D&&t.texStorage2D(n.TEXTURE_2D,ye,Re,Fe[0].width,Fe[0].height);for(let K=0,Se=Fe.length;K<Se;K++)Ee=Fe[K],Je?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Te,Le,Ee.data):t.texImage2D(n.TEXTURE_2D,K,Re,Ee.width,Ee.height,0,Te,Le,Ee.data);_.generateMipmaps=!1}else Je?(D&&t.texStorage2D(n.TEXTURE_2D,ye,Re,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,V.width,V.height,Te,Le,V.data)):t.texImage2D(n.TEXTURE_2D,0,Re,V.width,V.height,0,Te,Le,V.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Je&&D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Re,Fe[0].width,Fe[0].height,V.depth);for(let K=0,Se=Fe.length;K<Se;K++)Ee=Fe[K],_.format!==fn?Te!==null?Je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,V.depth,Te,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Re,Ee.width,Ee.height,V.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,V.depth,Te,Le,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Re,Ee.width,Ee.height,V.depth,0,Te,Le,Ee.data)}else{Je&&D&&t.texStorage2D(n.TEXTURE_2D,ye,Re,Fe[0].width,Fe[0].height);for(let K=0,Se=Fe.length;K<Se;K++)Ee=Fe[K],_.format!==fn?Te!==null?Je?t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Te,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Re,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Te,Le,Ee.data):t.texImage2D(n.TEXTURE_2D,K,Re,Ee.width,Ee.height,0,Te,Le,Ee.data)}else if(_.isDataArrayTexture)Je?(D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Re,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,Te,Le,V.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,V.width,V.height,V.depth,0,Te,Le,V.data);else if(_.isData3DTexture)Je?(D&&t.texStorage3D(n.TEXTURE_3D,ye,Re,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,Te,Le,V.data)):t.texImage3D(n.TEXTURE_3D,0,Re,V.width,V.height,V.depth,0,Te,Le,V.data);else if(_.isFramebufferTexture){if(D)if(Je)t.texStorage2D(n.TEXTURE_2D,ye,Re,V.width,V.height);else{let K=V.width,Se=V.height;for(let be=0;be<ye;be++)t.texImage2D(n.TEXTURE_2D,be,Re,K,Se,0,Te,Le,null),K>>=1,Se>>=1}}else if(Fe.length>0&&we){Je&&D&&t.texStorage2D(n.TEXTURE_2D,ye,Re,Fe[0].width,Fe[0].height);for(let K=0,Se=Fe.length;K<Se;K++)Ee=Fe[K],Je?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Te,Le,Ee):t.texImage2D(n.TEXTURE_2D,K,Re,Te,Le,Ee);_.generateMipmaps=!1}else Je?(D&&t.texStorage2D(n.TEXTURE_2D,ye,Re,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Le,V)):t.texImage2D(n.TEXTURE_2D,0,Re,Te,Le,V);C(_,we)&&P(Q),xe.__version=ue.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function pe(E,_,U){if(_.image.length!==6)return;const Q=Ae(E,_),te=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);const ue=i.get(te);if(te.version!==ue.__version||Q===!0){t.activeTexture(n.TEXTURE0+U),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const xe=_.isCompressedTexture||_.image[0].isCompressedTexture,me=_.image[0]&&_.image[0].isDataTexture,V=[];for(let K=0;K<6;K++)!xe&&!me?V[K]=S(_.image[K],!1,!0,c):V[K]=me?_.image[K].image:_.image[K],V[K]=oe(_,V[K]);const we=V[0],Te=x(we)||o,Le=s.convert(_.format,_.colorSpace),Re=s.convert(_.type),Ee=H(_.internalFormat,Le,Re,_.colorSpace),Fe=o&&_.isVideoTexture!==!0,Je=ue.__version===void 0||Q===!0;let D=M(_,we,Te);Pe(n.TEXTURE_CUBE_MAP,_,Te);let ye;if(xe){Fe&&Je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,D,Ee,we.width,we.height);for(let K=0;K<6;K++){ye=V[K].mipmaps;for(let Se=0;Se<ye.length;Se++){const be=ye[Se];_.format!==fn?Le!==null?Fe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se,0,0,be.width,be.height,Le,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se,Ee,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se,0,0,be.width,be.height,Le,Re,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se,Ee,be.width,be.height,0,Le,Re,be.data)}}}else{ye=_.mipmaps,Fe&&Je&&(ye.length>0&&D++,t.texStorage2D(n.TEXTURE_CUBE_MAP,D,Ee,V[0].width,V[0].height));for(let K=0;K<6;K++)if(me){Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,V[K].width,V[K].height,Le,Re,V[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,V[K].width,V[K].height,0,Le,Re,V[K].data);for(let Se=0;Se<ye.length;Se++){const $e=ye[Se].image[K].image;Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se+1,0,0,$e.width,$e.height,Le,Re,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se+1,Ee,$e.width,$e.height,0,Le,Re,$e.data)}}else{Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Le,Re,V[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,Le,Re,V[K]);for(let Se=0;Se<ye.length;Se++){const be=ye[Se];Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se+1,0,0,Le,Re,be.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se+1,Ee,Le,Re,be.image[K])}}}C(_,Te)&&P(n.TEXTURE_CUBE_MAP),ue.__version=te.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function le(E,_,U,Q,te,ue){const xe=s.convert(U.format,U.colorSpace),me=s.convert(U.type),V=H(U.internalFormat,xe,me,U.colorSpace);if(!i.get(_).__hasExternalTextures){const Te=Math.max(1,_.width>>ue),Le=Math.max(1,_.height>>ue);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ue,V,Te,Le,_.depth,0,xe,me,null):t.texImage2D(te,ue,V,Te,Le,0,xe,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),fe(_)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,te,i.get(U).__webglTexture,0,re(_)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,te,i.get(U).__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(E,_,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer&&!_.stencilBuffer){let Q=n.DEPTH_COMPONENT16;if(U||fe(_)){const te=_.depthTexture;te&&te.isDepthTexture&&(te.type===oi?Q=n.DEPTH_COMPONENT32F:te.type===si&&(Q=n.DEPTH_COMPONENT24));const ue=re(_);fe(_)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,Q,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,Q,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(_.depthBuffer&&_.stencilBuffer){const Q=re(_);U&&fe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,_.width,_.height):fe(_)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const Q=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let te=0;te<Q.length;te++){const ue=Q[te],xe=s.convert(ue.format,ue.colorSpace),me=s.convert(ue.type),V=H(ue.internalFormat,xe,me,ue.colorSpace),we=re(_);U&&fe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,V,_.width,_.height):fe(_)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,V,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,V,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function T(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),de(_.depthTexture,0);const Q=i.get(_.depthTexture).__webglTexture,te=re(_);if(_.depthTexture.format===Ui)fe(_)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(_.depthTexture.format===Mr)fe(_)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function w(E){const _=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");T(_.__webglFramebuffer,E)}else if(U){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]=n.createRenderbuffer(),F(_.__webglDepthbuffer[Q],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),F(_.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(E,_,U){const Q=i.get(E);_!==void 0&&le(Q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&w(E)}function B(E){const _=E.texture,U=i.get(E),Q=i.get(_);E.addEventListener("dispose",ge),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=_.version,a.memory.textures++);const te=E.isWebGLCubeRenderTarget===!0,ue=E.isWebGLMultipleRenderTargets===!0,xe=x(E)||o;if(te){U.__webglFramebuffer=[];for(let me=0;me<6;me++)if(o&&_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[me]=[];for(let V=0;V<_.mipmaps.length;V++)U.__webglFramebuffer[me][V]=n.createFramebuffer()}else U.__webglFramebuffer[me]=n.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let me=0;me<_.mipmaps.length;me++)U.__webglFramebuffer[me]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ue)if(r.drawBuffers){const me=E.texture;for(let V=0,we=me.length;V<we;V++){const Te=i.get(me[V]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&fe(E)===!1){const me=ue?_:[_];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let V=0;V<me.length;V++){const we=me[V];U.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[V]);const Te=s.convert(we.format,we.colorSpace),Le=s.convert(we.type),Re=H(we.internalFormat,Te,Le,we.colorSpace,E.isXRRenderTarget===!0),Ee=re(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Re,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,U.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),F(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,_,xe);for(let me=0;me<6;me++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let V=0;V<_.mipmaps.length;V++)le(U.__webglFramebuffer[me][V],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,V);else le(U.__webglFramebuffer[me],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);C(_,xe)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const me=E.texture;for(let V=0,we=me.length;V<we;V++){const Te=me[V],Le=i.get(Te);t.bindTexture(n.TEXTURE_2D,Le.__webglTexture),Pe(n.TEXTURE_2D,Te,xe),le(U.__webglFramebuffer,E,Te,n.COLOR_ATTACHMENT0+V,n.TEXTURE_2D,0),C(Te,xe)&&P(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?me=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,Q.__webglTexture),Pe(me,_,xe),o&&_.mipmaps&&_.mipmaps.length>0)for(let V=0;V<_.mipmaps.length;V++)le(U.__webglFramebuffer[V],E,_,n.COLOR_ATTACHMENT0,me,V);else le(U.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,me,0);C(_,xe)&&P(me),t.unbindTexture()}E.depthBuffer&&w(E)}function X(E){const _=x(E)||o,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,te=U.length;Q<te;Q++){const ue=U[Q];if(C(ue,_)){const xe=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=i.get(ue).__webglTexture;t.bindTexture(xe,me),P(xe),t.unbindTexture()}}}function Y(E){if(o&&E.samples>0&&fe(E)===!1){const _=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,Q=E.height;let te=n.COLOR_BUFFER_BIT;const ue=[],xe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(E),V=E.isWebGLMultipleRenderTargets===!0;if(V)for(let we=0;we<_.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let we=0;we<_.length;we++){ue.push(n.COLOR_ATTACHMENT0+we),E.depthBuffer&&ue.push(xe);const Te=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Te===!1&&(E.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),V&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[we]),Te===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),V){const Le=i.get(_[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,U,Q,0,0,U,Q,te,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let we=0;we<_.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,me.__webglColorRenderbuffer[we]);const Te=i.get(_[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function re(E){return Math.min(f,E.samples)}function fe(E){const _=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function he(E){const _=a.render.frame;g.get(E)!==_&&(g.set(E,_),E.update())}function oe(E,_){const U=E.colorSpace,Q=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ua||U!==wn&&U!==Ii&&(U===ot||U===Eo?o===!1?e.has("EXT_sRGB")===!0&&Q===fn?(E.format=Ua,E.minFilter=Qt,E.generateMipmaps=!1):_=zf.sRGBToLinear(_):(Q!==fn||te!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}this.allocateTextureUnit=$,this.resetTextureUnits=z,this.setTexture2D=de,this.setTexture2DArray=G,this.setTexture3D=L,this.setTextureCube=I,this.rebindTextures=N,this.setupRenderTarget=B,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=le,this.useMultisampledRTT=fe}const NS=0,vt=1;function FS(n,e,t){const i=t.isWebGL2;function r(s,a=Ii){let o;const l=a===ot||a===Eo?vt:NS;if(s===ui)return n.UNSIGNED_BYTE;if(s===Df)return n.UNSIGNED_SHORT_4_4_4_4;if(s===If)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Jm)return n.BYTE;if(s===Qm)return n.SHORT;if(s===tl)return n.UNSIGNED_SHORT;if(s===Uf)return n.INT;if(s===si)return n.UNSIGNED_INT;if(s===oi)return n.FLOAT;if(s===os)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===eg)return n.ALPHA;if(s===fn)return n.RGBA;if(s===tg)return n.LUMINANCE;if(s===ng)return n.LUMINANCE_ALPHA;if(s===Ui)return n.DEPTH_COMPONENT;if(s===Mr)return n.DEPTH_STENCIL;if(s===Ua)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ig)return n.RED;if(s===Nf)return n.RED_INTEGER;if(s===rg)return n.RG;if(s===Ff)return n.RG_INTEGER;if(s===Of)return n.RGBA_INTEGER;if(s===ko||s===Vo||s===Wo||s===Xo)if(l===vt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ko)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ic||s===rc||s===sc||s===oc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ic)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===oc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ac||s===lc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ac)return l===vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===lc)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cc||s===uc||s===fc||s===dc||s===hc||s===pc||s===mc||s===gc||s===_c||s===vc||s===xc||s===Sc||s===Mc||s===Ec)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===cc)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uc)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fc)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dc)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hc)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pc)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mc)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gc)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_c)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vc)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xc)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sc)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mc)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ec)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jo||s===yc||s===bc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===jo)return l===vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===yc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===og||s===Tc||s===Ac||s===wc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===jo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Tc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ac)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Li?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class OS extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ks extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BS={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(BS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class HS extends kt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Ui,u!==Ui&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ui&&(i=si),i===void 0&&u===Mr&&(i=Li),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zS extends Tr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const v=t.getContextAttributes();let p=null,d=null;const y=[],S=[],x=new en;x.layers.enable(1),x.viewport=new bt;const b=new en;b.layers.enable(2),b.viewport=new bt;const C=[x,b],P=new OS;P.layers.enable(1),P.layers.enable(2);let H=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let L=y[G];return L===void 0&&(L=new pa,y[G]=L),L.getTargetRaySpace()},this.getControllerGrip=function(G){let L=y[G];return L===void 0&&(L=new pa,y[G]=L),L.getGripSpace()},this.getHand=function(G){let L=y[G];return L===void 0&&(L=new pa,y[G]=L),L.getHandSpace()};function R(G){const L=S.indexOf(G.inputSource);if(L===-1)return;const I=y[L];I!==void 0&&(I.update(G.inputSource,G.frame,c||a),I.dispatchEvent({type:G.type,data:G.inputSource}))}function se(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",ge);for(let G=0;G<y.length;G++){const L=S[G];L!==null&&(S[G]=null,y[G].disconnect(L))}H=null,M=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,d=null,de.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",se),r.addEventListener("inputsourceschange",ge),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const L={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,L),r.updateRenderState({baseLayer:m}),d=new Fi(m.framebufferWidth,m.framebufferHeight,{format:fn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let L=null,I=null,_e=null;v.depth&&(_e=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,L=v.stencil?Mr:Ui,I=v.stencil?Li:si);const ve={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ve),r.updateRenderState({layers:[h]}),d=new Fi(h.textureWidth,h.textureHeight,{format:fn,type:ui,depthTexture:new HS(h.textureWidth,h.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ee=e.properties.get(d);ee.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ge(G){for(let L=0;L<G.removed.length;L++){const I=G.removed[L],_e=S.indexOf(I);_e>=0&&(S[_e]=null,y[_e].disconnect(I))}for(let L=0;L<G.added.length;L++){const I=G.added[L];let _e=S.indexOf(I);if(_e===-1){for(let ee=0;ee<y.length;ee++)if(ee>=S.length){S.push(I),_e=ee;break}else if(S[ee]===null){S[ee]=I,_e=ee;break}if(_e===-1)break}const ve=y[_e];ve&&ve.connect(I)}}const q=new W,Z=new W;function J(G,L,I){q.setFromMatrixPosition(L.matrixWorld),Z.setFromMatrixPosition(I.matrixWorld);const _e=q.distanceTo(Z),ve=L.projectionMatrix.elements,ee=I.projectionMatrix.elements,Pe=ve[14]/(ve[10]-1),Ae=ve[14]/(ve[10]+1),ke=(ve[9]+1)/ve[5],pe=(ve[9]-1)/ve[5],le=(ve[8]-1)/ve[0],F=(ee[8]+1)/ee[0],T=Pe*le,w=Pe*F,N=_e/(-le+F),B=N*-le;L.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(B),G.translateZ(N),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const X=Pe+N,Y=Ae+N,re=T-B,fe=w+(_e-B),he=ke*Ae/Y*X,oe=pe*Ae/Y*X;G.projectionMatrix.makePerspective(re,fe,he,oe,X,Y),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function ae(G,L){L===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(L.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;P.near=b.near=x.near=G.near,P.far=b.far=x.far=G.far,(H!==P.near||M!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),H=P.near,M=P.far);const L=G.parent,I=P.cameras;ae(P,L);for(let _e=0;_e<I.length;_e++)ae(I[_e],L);I.length===2?J(P,x,b):P.projectionMatrix.copy(x.projectionMatrix),z(G,P,L)};function z(G,L,I){I===null?G.matrix.copy(L.matrixWorld):(G.matrix.copy(I.matrixWorld),G.matrix.invert(),G.matrix.multiply(L.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(L.projectionMatrix),G.projectionMatrixInverse.copy(L.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=as*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let $=null;function ce(G,L){if(u=L.getViewerPose(c||a),g=L,u!==null){const I=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let _e=!1;I.length!==P.cameras.length&&(P.cameras.length=0,_e=!0);for(let ve=0;ve<I.length;ve++){const ee=I[ve];let Pe=null;if(m!==null)Pe=m.getViewport(ee);else{const ke=f.getViewSubImage(h,ee);Pe=ke.viewport,ve===0&&(e.setRenderTargetTextures(d,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(d))}let Ae=C[ve];Ae===void 0&&(Ae=new en,Ae.layers.enable(ve),Ae.viewport=new bt,C[ve]=Ae),Ae.matrix.fromArray(ee.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ee.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ve===0&&(P.matrix.copy(Ae.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),_e===!0&&P.cameras.push(Ae)}}for(let I=0;I<y.length;I++){const _e=S[I],ve=y[I];_e!==null&&ve!==void 0&&ve.update(_e,L,c||a)}$&&$(G,L),L.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:L}),g=null}const de=new Zf;de.setAnimationLoop(ce),this.setAnimationLoop=function(G){$=G},this.dispose=function(){}}}function GS(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,qf(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,y,S,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,x)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,y,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ut&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ut&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=S*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ut&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const y=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kS(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,S){const x=S.program;i.uniformBlockBinding(y,x)}function c(y,S){let x=r[y.id];x===void 0&&(g(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",p));const b=S.program;i.updateUBOMapping(y,b);const C=e.render.frame;s[y.id]!==C&&(h(y),s[y.id]=C)}function u(y){const S=f();y.__bindingPointIndex=S;const x=n.createBuffer(),b=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,b,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const S=r[y.id],x=y.uniforms,b=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,P=x.length;C<P;C++){const H=x[C];if(m(H,C,b)===!0){const M=H.__offset,R=Array.isArray(H.value)?H.value:[H.value];let se=0;for(let ge=0;ge<R.length;ge++){const q=R[ge],Z=v(q);typeof q=="number"?(H.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,M+se,H.__data)):q.isMatrix3?(H.__data[0]=q.elements[0],H.__data[1]=q.elements[1],H.__data[2]=q.elements[2],H.__data[3]=q.elements[0],H.__data[4]=q.elements[3],H.__data[5]=q.elements[4],H.__data[6]=q.elements[5],H.__data[7]=q.elements[0],H.__data[8]=q.elements[6],H.__data[9]=q.elements[7],H.__data[10]=q.elements[8],H.__data[11]=q.elements[0]):(q.toArray(H.__data,se),se+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,H.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,S,x){const b=y.value;if(x[S]===void 0){if(typeof b=="number")x[S]=b;else{const C=Array.isArray(b)?b:[b],P=[];for(let H=0;H<C.length;H++)P.push(C[H].clone());x[S]=P}return!0}else if(typeof b=="number"){if(x[S]!==b)return x[S]=b,!0}else{const C=Array.isArray(x[S])?x[S]:[x[S]],P=Array.isArray(b)?b:[b];for(let H=0;H<C.length;H++){const M=C[H];if(M.equals(P[H])===!1)return M.copy(P[H]),!0}}return!1}function g(y){const S=y.uniforms;let x=0;const b=16;let C=0;for(let P=0,H=S.length;P<H;P++){const M=S[P],R={boundary:0,storage:0},se=Array.isArray(M.value)?M.value:[M.value];for(let ge=0,q=se.length;ge<q;ge++){const Z=se[ge],J=v(Z);R.boundary+=J.boundary,R.storage+=J.storage}if(M.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,P>0){C=x%b;const ge=b-C;C!==0&&ge-R.boundary<0&&(x+=b-C,M.__offset=x)}x+=R.storage}return C=x%b,C>0&&(x+=b-C),y.__size=x,y.__cache={},this}function v(y){const S={boundary:0,storage:0};return typeof y=="number"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){const S=y.target;S.removeEventListener("dispose",p);const x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class nd{constructor(e={}){const{canvas:t=Ig(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ot,this._useLegacyLights=!1,this.toneMapping=ci,this.toneMappingExposure=1;const S=this;let x=!1,b=0,C=0,P=null,H=-1,M=null;const R=new bt,se=new bt;let ge=null;const q=new nt(0);let Z=0,J=t.width,ae=t.height,z=1,$=null,ce=null;const de=new bt(0,0,J,ae),G=new bt(0,0,J,ae);let L=!1;const I=new Kf;let _e=!1,ve=!1,ee=null;const Pe=new Tt,Ae=new Qe,ke=new W,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return P===null?z:1}let F=i;function T(A,k){for(let ne=0;ne<A.length;ne++){const j=A[ne],ie=t.getContext(j,k);if(ie!==null)return ie}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${el}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",Se,!1),F===null){const k=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&k.shift(),F=T(k,A),F===null)throw T(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let w,N,B,X,Y,re,fe,he,oe,E,_,U,Q,te,ue,xe,me,V,we,Te,Le,Re,Ee,Fe;function Je(){w=new Jx(F),N=new Xx(F,w,e),w.init(N),Re=new FS(F,w,N),B=new DS(F,w,N),X=new t0(F),Y=new xS,re=new IS(F,w,B,Y,N,Re,X),fe=new qx(S),he=new Zx(S),oe=new u_(F,N),Ee=new Vx(F,w,oe,N),E=new Qx(F,oe,X,Ee),_=new s0(F,E,oe,X),we=new r0(F,N,re),xe=new jx(Y),U=new vS(S,fe,he,w,N,Ee,xe),Q=new GS(S,Y),te=new MS,ue=new wS(w,N),V=new kx(S,fe,he,B,_,h,l),me=new US(S,_,N),Fe=new kS(F,X,N,B),Te=new Wx(F,w,X,N),Le=new e0(F,w,X,N),X.programs=U.programs,S.capabilities=N,S.extensions=w,S.properties=Y,S.renderLists=te,S.shadowMap=me,S.state=B,S.info=X}Je();const D=new zS(S,F);this.xr=D,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=w.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=w.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(J,ae,!1))},this.getSize=function(A){return A.set(J,ae)},this.setSize=function(A,k,ne=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,ae=k,t.width=Math.floor(A*z),t.height=Math.floor(k*z),ne===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(J*z,ae*z).floor()},this.setDrawingBufferSize=function(A,k,ne){J=A,ae=k,z=ne,t.width=Math.floor(A*ne),t.height=Math.floor(k*ne),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(de)},this.setViewport=function(A,k,ne,j){A.isVector4?de.set(A.x,A.y,A.z,A.w):de.set(A,k,ne,j),B.viewport(R.copy(de).multiplyScalar(z).floor())},this.getScissor=function(A){return A.copy(G)},this.setScissor=function(A,k,ne,j){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,k,ne,j),B.scissor(se.copy(G).multiplyScalar(z).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(A){B.setScissorTest(L=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){ce=A},this.getClearColor=function(A){return A.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(A=!0,k=!0,ne=!0){let j=0;if(A){let ie=!1;if(P!==null){const Ce=P.texture.format;ie=Ce===Of||Ce===Ff||Ce===Nf}if(ie){const Ce=P.texture.type,Ie=Ce===ui||Ce===si||Ce===tl||Ce===Li||Ce===Df||Ce===If,Be=V.getClearColor(),He=V.getClearAlpha(),je=Be.r,Oe=Be.g,Ve=Be.b;Ie?(m[0]=je,m[1]=Oe,m[2]=Ve,m[3]=He,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=je,g[1]=Oe,g[2]=Ve,g[3]=He,F.clearBufferiv(F.COLOR,0,g))}else j|=F.COLOR_BUFFER_BIT}k&&(j|=F.DEPTH_BUFFER_BIT),ne&&(j|=F.STENCIL_BUFFER_BIT),F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),te.dispose(),ue.dispose(),Y.dispose(),fe.dispose(),he.dispose(),_.dispose(),Ee.dispose(),Fe.dispose(),U.dispose(),D.dispose(),D.removeEventListener("sessionstart",rt),D.removeEventListener("sessionend",gn),ee&&(ee.dispose(),ee=null),Dt.stop()};function ye(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=X.autoReset,k=me.enabled,ne=me.autoUpdate,j=me.needsUpdate,ie=me.type;Je(),X.autoReset=A,me.enabled=k,me.autoUpdate=ne,me.needsUpdate=j,me.type=ie}function Se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function be(A){const k=A.target;k.removeEventListener("dispose",be),$e(k)}function $e(A){at(A),Y.remove(A)}function at(A){const k=Y.get(A).programs;k!==void 0&&(k.forEach(function(ne){U.releaseProgram(ne)}),A.isShaderMaterial&&U.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,ne,j,ie,Ce){k===null&&(k=pe);const Ie=ie.isMesh&&ie.matrixWorld.determinant()<0,Be=od(A,k,ne,j,ie);B.setMaterial(j,Ie);let He=ne.index,je=1;if(j.wireframe===!0){if(He=E.getWireframeAttribute(ne),He===void 0)return;je=2}const Oe=ne.drawRange,Ve=ne.attributes.position;let ct=Oe.start*je,ft=(Oe.start+Oe.count)*je;Ce!==null&&(ct=Math.max(ct,Ce.start*je),ft=Math.min(ft,(Ce.start+Ce.count)*je)),He!==null?(ct=Math.max(ct,0),ft=Math.min(ft,He.count)):Ve!=null&&(ct=Math.max(ct,0),ft=Math.min(ft,Ve.count));const Zt=ft-ct;if(Zt<0||Zt===1/0)return;Ee.setup(ie,j,Be,ne,He);let Rn,ht=Te;if(He!==null&&(Rn=oe.get(He),ht=Le,ht.setIndex(Rn)),ie.isMesh)j.wireframe===!0?(B.setLineWidth(j.wireframeLinewidth*le()),ht.setMode(F.LINES)):ht.setMode(F.TRIANGLES);else if(ie.isLine){let qe=j.linewidth;qe===void 0&&(qe=1),B.setLineWidth(qe*le()),ie.isLineSegments?ht.setMode(F.LINES):ie.isLineLoop?ht.setMode(F.LINE_LOOP):ht.setMode(F.LINE_STRIP)}else ie.isPoints?ht.setMode(F.POINTS):ie.isSprite&&ht.setMode(F.TRIANGLES);if(ie.isInstancedMesh)ht.renderInstances(ct,Zt,ie.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ao=Math.min(ne.instanceCount,qe);ht.renderInstances(ct,Zt,Ao)}else ht.render(ct,Zt)},this.compile=function(A,k){function ne(j,ie,Ce){j.transparent===!0&&j.side===zn&&j.forceSinglePass===!1?(j.side=Ut,j.needsUpdate=!0,_s(j,ie,Ce),j.side=hi,j.needsUpdate=!0,_s(j,ie,Ce),j.side=zn):_s(j,ie,Ce)}p=ue.get(A),p.init(),y.push(p),A.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(S._useLegacyLights),A.traverse(function(j){const ie=j.material;if(ie)if(Array.isArray(ie))for(let Ce=0;Ce<ie.length;Ce++){const Ie=ie[Ce];ne(Ie,A,j)}else ne(ie,A,j)}),y.pop(),p=null};let dt=null;function $n(A){dt&&dt(A)}function rt(){Dt.stop()}function gn(){Dt.start()}const Dt=new Zf;Dt.setAnimationLoop($n),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(A){dt=A,D.setAnimationLoop(A),A===null?Dt.stop():Dt.start()},D.addEventListener("sessionstart",rt),D.addEventListener("sessionend",gn),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(k),k=D.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,k,P),p=ue.get(A,y.length),p.init(),y.push(p),Pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),I.setFromProjectionMatrix(Pe),ve=this.localClippingEnabled,_e=xe.init(this.clippingPlanes,ve),v=te.get(A,d.length),v.init(),d.push(v),ll(A,k,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort($,ce),this.info.render.frame++,_e===!0&&xe.beginShadows();const ne=p.state.shadowsArray;if(me.render(ne,A,k),_e===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(v,A),p.setupLights(S._useLegacyLights),k.isArrayCamera){const j=k.cameras;for(let ie=0,Ce=j.length;ie<Ce;ie++){const Ie=j[ie];cl(v,A,Ie,Ie.viewport)}}else cl(v,A,k);P!==null&&(re.updateMultisampleRenderTarget(P),re.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(S,A,k),Ee.resetDefaultState(),H=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function ll(A,k,ne,j){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||I.intersectsSprite(A)){j&&ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pe);const Ie=_.update(A),Be=A.material;Be.visible&&v.push(A,Ie,Be,ne,ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||I.intersectsObject(A))){const Ie=_.update(A),Be=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ke.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ke.copy(Ie.boundingSphere.center)),ke.applyMatrix4(A.matrixWorld).applyMatrix4(Pe)),Array.isArray(Be)){const He=Ie.groups;for(let je=0,Oe=He.length;je<Oe;je++){const Ve=He[je],ct=Be[Ve.materialIndex];ct&&ct.visible&&v.push(A,Ie,ct,ne,ke.z,Ve)}}else Be.visible&&v.push(A,Ie,Be,ne,ke.z,null)}}const Ce=A.children;for(let Ie=0,Be=Ce.length;Ie<Be;Ie++)ll(Ce[Ie],k,ne,j)}function cl(A,k,ne,j){const ie=A.opaque,Ce=A.transmissive,Ie=A.transparent;p.setupLightsView(ne),_e===!0&&xe.setGlobalState(S.clippingPlanes,ne),Ce.length>0&&sd(ie,Ce,k,ne),j&&B.viewport(R.copy(j)),ie.length>0&&gs(ie,k,ne),Ce.length>0&&gs(Ce,k,ne),Ie.length>0&&gs(Ie,k,ne),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function sd(A,k,ne,j){const ie=N.isWebGL2;ee===null&&(ee=new Fi(1,1,{generateMipmaps:!0,type:w.has("EXT_color_buffer_half_float")?os:ui,minFilter:ss,samples:ie?4:0})),S.getDrawingBufferSize(Ae),ie?ee.setSize(Ae.x,Ae.y):ee.setSize(ro(Ae.x),ro(Ae.y));const Ce=S.getRenderTarget();S.setRenderTarget(ee),S.getClearColor(q),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear();const Ie=S.toneMapping;S.toneMapping=ci,gs(A,ne,j),re.updateMultisampleRenderTarget(ee),re.updateRenderTargetMipmap(ee);let Be=!1;for(let He=0,je=k.length;He<je;He++){const Oe=k[He],Ve=Oe.object,ct=Oe.geometry,ft=Oe.material,Zt=Oe.group;if(ft.side===zn&&Ve.layers.test(j.layers)){const Rn=ft.side;ft.side=Ut,ft.needsUpdate=!0,ul(Ve,ne,j,ct,ft,Zt),ft.side=Rn,ft.needsUpdate=!0,Be=!0}}Be===!0&&(re.updateMultisampleRenderTarget(ee),re.updateRenderTargetMipmap(ee)),S.setRenderTarget(Ce),S.setClearColor(q,Z),S.toneMapping=Ie}function gs(A,k,ne){const j=k.isScene===!0?k.overrideMaterial:null;for(let ie=0,Ce=A.length;ie<Ce;ie++){const Ie=A[ie],Be=Ie.object,He=Ie.geometry,je=j===null?Ie.material:j,Oe=Ie.group;Be.layers.test(ne.layers)&&ul(Be,k,ne,He,je,Oe)}}function ul(A,k,ne,j,ie,Ce){A.onBeforeRender(S,k,ne,j,ie,Ce),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(S,k,ne,j,A,Ce),ie.transparent===!0&&ie.side===zn&&ie.forceSinglePass===!1?(ie.side=Ut,ie.needsUpdate=!0,S.renderBufferDirect(ne,k,j,ie,A,Ce),ie.side=hi,ie.needsUpdate=!0,S.renderBufferDirect(ne,k,j,ie,A,Ce),ie.side=zn):S.renderBufferDirect(ne,k,j,ie,A,Ce),A.onAfterRender(S,k,ne,j,ie,Ce)}function _s(A,k,ne){k.isScene!==!0&&(k=pe);const j=Y.get(A),ie=p.state.lights,Ce=p.state.shadowsArray,Ie=ie.state.version,Be=U.getParameters(A,ie.state,Ce,k,ne),He=U.getProgramCacheKey(Be);let je=j.programs;j.environment=A.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(A.isMeshStandardMaterial?he:fe).get(A.envMap||j.environment),je===void 0&&(A.addEventListener("dispose",be),je=new Map,j.programs=je);let Oe=je.get(He);if(Oe!==void 0){if(j.currentProgram===Oe&&j.lightsStateVersion===Ie)return fl(A,Be),Oe}else Be.uniforms=U.getUniforms(A),A.onBuild(ne,Be,S),A.onBeforeCompile(Be,S),Oe=U.acquireProgram(Be,He),je.set(He,Oe),j.uniforms=Be.uniforms;const Ve=j.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=xe.uniform),fl(A,Be),j.needsLights=ld(A),j.lightsStateVersion=Ie,j.needsLights&&(Ve.ambientLightColor.value=ie.state.ambient,Ve.lightProbe.value=ie.state.probe,Ve.directionalLights.value=ie.state.directional,Ve.directionalLightShadows.value=ie.state.directionalShadow,Ve.spotLights.value=ie.state.spot,Ve.spotLightShadows.value=ie.state.spotShadow,Ve.rectAreaLights.value=ie.state.rectArea,Ve.ltc_1.value=ie.state.rectAreaLTC1,Ve.ltc_2.value=ie.state.rectAreaLTC2,Ve.pointLights.value=ie.state.point,Ve.pointLightShadows.value=ie.state.pointShadow,Ve.hemisphereLights.value=ie.state.hemi,Ve.directionalShadowMap.value=ie.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ve.spotShadowMap.value=ie.state.spotShadowMap,Ve.spotLightMatrix.value=ie.state.spotLightMatrix,Ve.spotLightMap.value=ie.state.spotLightMap,Ve.pointShadowMap.value=ie.state.pointShadowMap,Ve.pointShadowMatrix.value=ie.state.pointShadowMatrix);const ct=Oe.getUniforms(),ft=Ys.seqWithValue(ct.seq,Ve);return j.currentProgram=Oe,j.uniformsList=ft,Oe}function fl(A,k){const ne=Y.get(A);ne.outputColorSpace=k.outputColorSpace,ne.instancing=k.instancing,ne.instancingColor=k.instancingColor,ne.skinning=k.skinning,ne.morphTargets=k.morphTargets,ne.morphNormals=k.morphNormals,ne.morphColors=k.morphColors,ne.morphTargetsCount=k.morphTargetsCount,ne.numClippingPlanes=k.numClippingPlanes,ne.numIntersection=k.numClipIntersection,ne.vertexAlphas=k.vertexAlphas,ne.vertexTangents=k.vertexTangents,ne.toneMapping=k.toneMapping}function od(A,k,ne,j,ie){k.isScene!==!0&&(k=pe),re.resetTextureUnits();const Ce=k.fog,Ie=j.isMeshStandardMaterial?k.environment:null,Be=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:wn,He=(j.isMeshStandardMaterial?he:fe).get(j.envMap||Ie),je=j.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Oe=!!ne.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ve=!!ne.morphAttributes.position,ct=!!ne.morphAttributes.normal,ft=!!ne.morphAttributes.color;let Zt=ci;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Zt=S.toneMapping);const Rn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ht=Rn!==void 0?Rn.length:0,qe=Y.get(j),Ao=p.state.lights;if(_e===!0&&(ve===!0||A!==M)){const Vt=A===M&&j.id===H;xe.setState(j,A,Vt)}let pt=!1;j.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ao.state.version||qe.outputColorSpace!==Be||ie.isInstancedMesh&&qe.instancing===!1||!ie.isInstancedMesh&&qe.instancing===!0||ie.isSkinnedMesh&&qe.skinning===!1||!ie.isSkinnedMesh&&qe.skinning===!0||ie.isInstancedMesh&&qe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&qe.instancingColor===!1&&ie.instanceColor!==null||qe.envMap!==He||j.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==xe.numPlanes||qe.numIntersection!==xe.numIntersection)||qe.vertexAlphas!==je||qe.vertexTangents!==Oe||qe.morphTargets!==Ve||qe.morphNormals!==ct||qe.morphColors!==ft||qe.toneMapping!==Zt||N.isWebGL2===!0&&qe.morphTargetsCount!==ht)&&(pt=!0):(pt=!0,qe.__version=j.version);let gi=qe.currentProgram;pt===!0&&(gi=_s(j,k,ie));let dl=!1,Rr=!1,wo=!1;const It=gi.getUniforms(),_i=qe.uniforms;if(B.useProgram(gi.program)&&(dl=!0,Rr=!0,wo=!0),j.id!==H&&(H=j.id,Rr=!0),dl||M!==A){It.setValue(F,"projectionMatrix",A.projectionMatrix),It.setValue(F,"viewMatrix",A.matrixWorldInverse);const Vt=It.map.cameraPosition;Vt!==void 0&&Vt.setValue(F,ke.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&It.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&It.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Rr=!0,wo=!0)}if(ie.isSkinnedMesh){It.setOptional(F,ie,"bindMatrix"),It.setOptional(F,ie,"bindMatrixInverse");const Vt=ie.skeleton;Vt&&(N.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),It.setValue(F,"boneTexture",Vt.boneTexture,re),It.setValue(F,"boneTextureSize",Vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ro=ne.morphAttributes;if((Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0&&N.isWebGL2===!0)&&we.update(ie,ne,gi),(Rr||qe.receiveShadow!==ie.receiveShadow)&&(qe.receiveShadow=ie.receiveShadow,It.setValue(F,"receiveShadow",ie.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(_i.envMap.value=He,_i.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Rr&&(It.setValue(F,"toneMappingExposure",S.toneMappingExposure),qe.needsLights&&ad(_i,wo),Ce&&j.fog===!0&&Q.refreshFogUniforms(_i,Ce),Q.refreshMaterialUniforms(_i,j,z,ae,ee),Ys.upload(F,qe.uniformsList,_i,re)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ys.upload(F,qe.uniformsList,_i,re),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&It.setValue(F,"center",ie.center),It.setValue(F,"modelViewMatrix",ie.modelViewMatrix),It.setValue(F,"normalMatrix",ie.normalMatrix),It.setValue(F,"modelMatrix",ie.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Vt=j.uniformsGroups;for(let Co=0,cd=Vt.length;Co<cd;Co++)if(N.isWebGL2){const hl=Vt[Co];Fe.update(hl,gi),Fe.bind(hl,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function ad(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function ld(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,k,ne){Y.get(A.texture).__webglTexture=k,Y.get(A.depthTexture).__webglTexture=ne;const j=Y.get(A);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=ne===void 0,j.__autoAllocateDepthBuffer||w.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){const ne=Y.get(A);ne.__webglFramebuffer=k,ne.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,ne=0){P=A,b=k,C=ne;let j=!0,ie=null,Ce=!1,Ie=!1;if(A){const He=Y.get(A);He.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(F.FRAMEBUFFER,null),j=!1):He.__webglFramebuffer===void 0?re.setupRenderTarget(A):He.__hasExternalTextures&&re.rebindTextures(A,Y.get(A.texture).__webglTexture,Y.get(A.depthTexture).__webglTexture);const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ie=!0);const Oe=Y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[k])?ie=Oe[k][ne]:ie=Oe[k],Ce=!0):N.isWebGL2&&A.samples>0&&re.useMultisampledRTT(A)===!1?ie=Y.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?ie=Oe[ne]:ie=Oe,R.copy(A.viewport),se.copy(A.scissor),ge=A.scissorTest}else R.copy(de).multiplyScalar(z).floor(),se.copy(G).multiplyScalar(z).floor(),ge=L;if(B.bindFramebuffer(F.FRAMEBUFFER,ie)&&N.drawBuffers&&j&&B.drawBuffers(A,ie),B.viewport(R),B.scissor(se),B.setScissorTest(ge),Ce){const He=Y.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,He.__webglTexture,ne)}else if(Ie){const He=Y.get(A.texture),je=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.__webglTexture,ne||0,je)}H=-1},this.readRenderTargetPixels=function(A,k,ne,j,ie,Ce,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){B.bindFramebuffer(F.FRAMEBUFFER,Be);try{const He=A.texture,je=He.format,Oe=He.type;if(je!==fn&&Re.convert(je)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Oe===os&&(w.has("EXT_color_buffer_half_float")||N.isWebGL2&&w.has("EXT_color_buffer_float"));if(Oe!==ui&&Re.convert(Oe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===oi&&(N.isWebGL2||w.has("OES_texture_float")||w.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-j&&ne>=0&&ne<=A.height-ie&&F.readPixels(k,ne,j,ie,Re.convert(je),Re.convert(Oe),Ce)}finally{const He=P!==null?Y.get(P).__webglFramebuffer:null;B.bindFramebuffer(F.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(A,k,ne=0){const j=Math.pow(2,-ne),ie=Math.floor(k.image.width*j),Ce=Math.floor(k.image.height*j);re.setTexture2D(k,0),F.copyTexSubImage2D(F.TEXTURE_2D,ne,0,0,A.x,A.y,ie,Ce),B.unbindTexture()},this.copyTextureToTexture=function(A,k,ne,j=0){const ie=k.image.width,Ce=k.image.height,Ie=Re.convert(ne.format),Be=Re.convert(ne.type);re.setTexture2D(ne,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,ne.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,ne.unpackAlignment),k.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,j,A.x,A.y,ie,Ce,Ie,Be,k.image.data):k.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,j,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Ie,k.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,j,A.x,A.y,Ie,Be,k.image),j===0&&ne.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(A,k,ne,j,ie=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=A.max.x-A.min.x+1,Ie=A.max.y-A.min.y+1,Be=A.max.z-A.min.z+1,He=Re.convert(j.format),je=Re.convert(j.type);let Oe;if(j.isData3DTexture)re.setTexture3D(j,0),Oe=F.TEXTURE_3D;else if(j.isDataArrayTexture)re.setTexture2DArray(j,0),Oe=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const Ve=F.getParameter(F.UNPACK_ROW_LENGTH),ct=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ft=F.getParameter(F.UNPACK_SKIP_PIXELS),Zt=F.getParameter(F.UNPACK_SKIP_ROWS),Rn=F.getParameter(F.UNPACK_SKIP_IMAGES),ht=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ht.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,A.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,A.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,A.min.z),ne.isDataTexture||ne.isData3DTexture?F.texSubImage3D(Oe,ie,k.x,k.y,k.z,Ce,Ie,Be,He,je,ht.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Oe,ie,k.x,k.y,k.z,Ce,Ie,Be,He,ht.data)):F.texSubImage3D(Oe,ie,k.x,k.y,k.z,Ce,Ie,Be,He,je,ht),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ve),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ft),F.pixelStorei(F.UNPACK_SKIP_ROWS,Zt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Rn),ie===0&&j.generateMipmaps&&F.generateMipmap(Oe),B.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),B.unbindTexture()},this.resetState=function(){b=0,C=0,P=null,B.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ot?Di:Bf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Di?ot:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class VS extends nd{}VS.prototype.isWebGL1Renderer=!0;class WS extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Zr extends mi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new W,h=new W,m=[],g=[],v=[],p=[];for(let d=0;d<=i;d++){const y=[],S=d/i;let x=0;d===0&&a===0?x=.5/t:d===i&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const C=b/t;f.x=-e*Math.cos(r+C*s)*Math.sin(a+S*o),f.y=e*Math.cos(a+S*o),f.z=e*Math.sin(r+C*s)*Math.sin(a+S*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),p.push(C+x,1-S),y.push(c++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<t;y++){const S=u[d][y+1],x=u[d][y],b=u[d+1][y],C=u[d+1][y+1];(d!==0||a>0)&&m.push(S,x,C),(d!==i-1||l<Math.PI)&&m.push(x,b,C)}this.setIndex(m),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(v,3)),this.setAttribute("uv",new bn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const hu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class XS{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const jS=new XS;class al{constructor(e){this.manager=e!==void 0?e:jS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}al.DEFAULT_MATERIAL_NAME="__DEFAULT";class qS extends al{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=hu.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ls("img");function l(){u(),hu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class YS extends al{constructor(e){super(e)}load(e,t,i,r){const s=new kt,a=new qS(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class $S{constructor(e,t,i=0,r=1/0){this.ray=new Vf(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Na(e,this,i,t),i.sort(pu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Na(e[r],this,i,t);return i.sort(pu),i}}function pu(n,e){return n.distance-e.distance}function Na(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)Na(r[s],e,t,!0)}}class ar{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);const KS={class:"scene-viewer"},ZS={class:"viewer-hud"},JS={class:"hud-info"},QS={class:"hotspot-modal"},eM={class:"modal-content"},tM={key:0},nM={key:1},iM={key:0,style:{"text-align":"center",margin:"0 0 10px 0"}},rM=["src","alt"],sM={key:2},oM={style:{padding:"10px 0"}},aM=["src"],lM=["href"],cM={key:3},uM={key:0,style:{"text-align":"center",margin:"0 0 10px 0"}},fM=["src"],dM={key:4},hM={key:0},pM={key:1},mM=["src"],mu=.09,gu=.92,gM=Bi({__name:"SceneViewer",emits:["equirect-click","hotspot-opened","hotspot-closed","fov-changed"],setup(n,{expose:e,emit:t}){const i=br(),r=t,s=ze(90),a=ze(null),o=ze(null),l=pe=>{if(!pe)return"";let le=String(pe).trim();if(!le)return"";if(le.includes("<iframe")){const T=le.match(/src=['"]([^'"]+)['"]/i);T&&T[1]&&(le=T[1])}const F=le.toLowerCase();if(F.startsWith("javascript:")||F.startsWith("data:"))return"";try{const T=new URL(le);return encodeURI(T.href)}catch{try{const w=new URL("https://"+le);return encodeURI(w.href)}catch{try{return encodeURI(le)}catch{return""}}}},c=pe=>{try{return new URL(pe.startsWith("http")?pe:"https://"+pe).hostname||""}catch{return"example.com"}};ze(null);const u=ze(!1),f=mr({}),h=ze(null),m=mr({}),g=ze(!1),v=ze(75);let p=null,d=null,y=null,S=new $S,x=new Qe;const b=new Map;let C=null,P=0,H=0,M=0,R=0,se=!1,ge=0,q=0;const Z=()=>{if(!a.value)return;p=new WS;const pe=a.value.clientWidth||800,le=a.value.clientHeight||600;d=new en(75,pe/le,.1,2e3),d.position.set(0,0,.1),y=new nd({antialias:!0}),y.setSize(pe,le),y.setPixelRatio(window.devicePixelRatio||1),y.setClearColor(0),a.value.appendChild(y.domElement),J(),y.domElement.addEventListener("pointerdown",I),window.addEventListener("pointermove",_e),window.addEventListener("pointerup",ve),window.addEventListener("wheel",ee,{passive:!1}),y.domElement.addEventListener("click",Ae),window.addEventListener("resize",Pe),ke()},J=()=>{var F;if(!((F=i.activeScene)!=null&&F.imageUrl)||!p)return;const pe=i.activeScene.imageUrl;console.log("loadPanorama: Loading image, URL length:",pe==null?void 0:pe.length),new YS().load(pe,T=>{console.log("Texture loaded successfully"),p.children.slice().forEach(X=>p.remove(X));const w=new Zr(500,60,40),N=w.getAttribute("uv");for(let X=0;X<N.count;X++)N.setX(X,1-N.getX(X));N.needsUpdate=!0;const B=new Kr({map:T,side:Ut});C=new dn(w,B),p.add(C),ae()},void 0,T=>{console.error("Panorama load error",T),p.children.slice().forEach(B=>p.remove(B));const w=new Zr(500,32,24),N=new Kr({color:2236962,side:Ut});C=new dn(w,N),p.add(C),ae()})},ae=()=>{if(!p)return;for(const le of b.values())try{p.remove(le)}catch{}b.clear();const pe=i.activeScene;pe&&pe.hotspots.forEach(le=>{let T;if(le.dir&&typeof le.dir.x=="number")T=new W(le.dir.x,le.dir.y,le.dir.z).multiplyScalar(499);else{const X=Gt.degToRad(90-le.y),Y=Gt.degToRad(-le.x+s.value);T=new W().setFromSpherical(new ar(499,X,Y))}g.value&&m[le.id]&&T.applyQuaternion(m[le.id]);const w=new Zr(Math.max(2,le.radius/2.5),12,12),N=new Kr({color:new nt(le.color),transparent:!0,opacity:.6}),B=new dn(w,N);B.position.copy(T),B.userData={hotspotId:le.id},p.add(B),b.set(le.id,B)})},z=pe=>{if(!d||!y)return{left:"-9999px",top:"-9999px",display:"none"};const le=new W(0,0,-1).applyQuaternion(d.quaternion),F=pe.clone().normalize();if(le.dot(F)<0)return{left:"10px",top:y.domElement.clientHeight/2-15+"px"};const w=pe.clone().project(d),N=y.domElement,B=(w.x*.5+.5)*N.clientWidth,X=(-w.y*.5+.5)*N.clientHeight;return B<0||B>N.clientWidth||X<0||X>N.clientHeight?{left:"10px",top:N.clientHeight/2-15+"px"}:{left:B+"px",top:X+"px"}},$=pe=>{const le=b.get(pe.id);if(le&&d&&y)return z(le.position);if(pe.dir&&typeof pe.dir.x=="number"){const N=new W(pe.dir.x,pe.dir.y,pe.dir.z).multiplyScalar(499);return z(N)}const F=Gt.degToRad(90-pe.y),T=Gt.degToRad(-pe.x+s.value),w=new W().setFromSpherical(new ar(500-1,F,T));return z(w)},ce=pe=>{if(pe.dir&&typeof pe.dir.x=="number"){const le=new W(pe.dir.x,pe.dir.y,pe.dir.z),F=new ar().setFromVector3(le),T=F.phi,w=F.theta,N=90-Gt.radToDeg(T);return{x:((-Gt.radToDeg(w)+s.value)%360+360)%360,y:N}}return{x:pe.x,y:pe.y}},de=()=>{if(!i.activeScene||!y||!d)return;const pe=y.domElement(i.activeScene.hotspots||[]).forEach(le=>{const F=ce(le),w=((F.x-P)%360+540)%360-180,N=F.y-H;let B;if(le.dir&&typeof le.dir.x=="number")B=new W(le.dir.x,le.dir.y,le.dir.z).multiplyScalar(500-1);else{const fe=Gt.degToRad(90-le.y),he=Gt.degToRad(-le.x+s.value);B=new W().setFromSpherical(new ar(500-1,fe,he))}g.value&&m[le.id]&&B.applyQuaternion(m[le.id]);const X=B.clone().project(d),Y=(X.x*.5+.5)*pe.clientWidth,re=(-X.y*.5+.5)*pe.clientHeight;f[le.id]={dx:Math.round(w),dy:Math.round(N),style:{left:Y+"px",top:re+"px"}},hotspotScreenPositions[le.id]=$(le)})},G=()=>{o.value=null,r("hotspot-closed")},L=pe=>{pe&&(i.setActiveScene(pe),o.value=null)},I=pe=>{se=!0,pe.clientX,pe.clientY,ge=pe.clientX,q=pe.clientY},_e=pe=>{if(!se)return;const le=pe.clientX-ge,F=pe.clientY-q;M=le*mu,R=F*mu,P+=M,H+=R,H=Math.max(-85,Math.min(85,H)),ge=pe.clientX,q=pe.clientY},ve=()=>{se=!1},ee=pe=>{pe.preventDefault(),d&&(d.fov=Math.max(30,Math.min(100,d.fov+pe.deltaY*.05)),v.value=d.fov,d.updateProjectionMatrix(),r("fov-changed",d.fov))},Pe=()=>{if(!a.value||!d||!y)return;const pe=a.value.clientWidth,le=a.value.clientHeight;d.aspect=pe/le,d.updateProjectionMatrix(),y.setSize(pe,le)},Ae=pe=>{var T,w,N;if(!y||!d)return;const le=y.domElement.getBoundingClientRect();x.x=(pe.clientX-le.left)/le.width*2-1,x.y=-((pe.clientY-le.top)/le.height)*2+1,S.setFromCamera(x,d);const F=S.intersectObjects(Array.from(b.values()));if(F.length>0){const X=(T=F[0].object.userData)==null?void 0:T.hotspotId;if(X){const Y=(w=i.activeScene)==null?void 0:w.hotspots.find(re=>re.id===X);if(!Y)return;u.value?(h.value=X,de(),Fr("Hotspot sélectionné pour calibration","info")):Y.type==="scene"?L((N=Y.content)==null?void 0:N.linkedSceneId):o.value=Y}}else{const B=S.ray.direction.clone().normalize(),X=new ar().setFromVector3(B),Y=X.phi,re=X.theta,fe=90-Gt.radToDeg(Y),oe=((-Gt.radToDeg(re)+s.value)%360+360)%360;r("equirect-click",{x:oe,y:fe,dir:{x:B.x,y:B.y,z:B.z}})}},ke=()=>{if(requestAnimationFrame(ke),M*=gu,R*=gu,P+=M,H+=R,H=Math.max(-85,Math.min(85,H)),d&&(d.rotation.order="YXZ",d.rotation.y=Gt.degToRad(P),d.rotation.x=Gt.degToRad(H)),y&&p&&d)try{u.value&&de(),y.render(p,d)}catch(pe){console.error("Render error",pe)}};return e({getHotspotScreenPosition:$,currentFov:v}),mo(()=>{Z()}),go(()=>{try{window.removeEventListener("pointermove",_e),window.removeEventListener("pointerup",ve),window.removeEventListener("wheel",ee),window.removeEventListener("resize",Pe),y==null||y.domElement.removeEventListener("pointerdown",I),y==null||y.domElement.removeEventListener("click",Ae),y&&(y.dispose(),y.forceContextLoss&&y.forceContextLoss())}catch(pe){console.warn("Cleanup error",pe)}}),En(()=>i.activeScene,()=>{var pe;((pe=i.activeScene)==null?void 0:pe.calibrationOffsetX)!==void 0?s.value=i.activeScene.calibrationOffsetX:s.value=90,J()}),En(()=>{var pe;return(pe=i.activeScene)==null?void 0:pe.hotspots},()=>{ae()},{deep:!0}),(pe,le)=>{var F;return Ue(),De("div",KS,[O("div",{ref_key:"viewerContainer",ref:a,class:"viewer-container"},null,512),O("div",ZS,[O("div",JS,[O("h3",null,gt((F=Ye(i).activeScene)==null?void 0:F.name),1),le[2]||(le[2]=O("p",null,"🖱️ Cliquer + glisser pour naviguer | Scroll pour zoomer",-1))])]),o.value?(Ue(),De("div",{key:0,class:"hotspot-modal-overlay",onClick:le[1]||(le[1]=Gn(T=>G(),["self"]))},[O("div",QS,[O("button",{onClick:le[0]||(le[0]=T=>G()),class:"modal-close"},"✕"),O("div",eM,[o.value.type==="text"?(Ue(),De("div",tM,[O("p",null,gt(o.value.content.text),1)])):o.value.type==="image"?(Ue(),De("div",nM,[o.value.content.imageTitle?(Ue(),De("h3",iM,gt(o.value.content.imageTitle),1)):lt("",!0),O("img",{src:o.value.content.imageUrl,alt:o.value.content.imageTitle},null,8,rM)])):o.value.type==="link"?(Ue(),De("div",sM,[O("div",oM,[O("img",{src:"https://www.google.com/s2/favicons?sz=128&domain="+c(o.value.content.linkUrl),style:{width:"32px",height:"32px","margin-right":"10px",display:"inline-block"}},null,8,aM),O("a",{href:o.value.content.linkUrl,target:"_blank",rel:"noopener noreferrer",style:{"font-size":"16px",color:"#0066cc","text-decoration":"underline"}},gt(o.value.content.title||"Ouvrir le lien"),9,lM)])])):o.value.type==="iframe"?(Ue(),De("div",cM,[o.value.content.imageTitle?(Ue(),De("h3",uM,gt(o.value.content.imageTitle),1)):lt("",!0),O("iframe",{src:l(o.value.content.iframeUrl),frameborder:"0",style:{width:"100%",height:"60vh"},allowfullscreen:""},null,8,fM)])):o.value.type==="text-image"?(Ue(),De("div",dM,[o.value.content.title?(Ue(),De("h3",hM,gt(o.value.content.title),1)):lt("",!0),o.value.content.text?(Ue(),De("p",pM,gt(o.value.content.text),1)):lt("",!0),o.value.content.imageUrl?(Ue(),De("img",{key:2,src:o.value.content.imageUrl},null,8,mM)):lt("",!0)])):lt("",!0)])])])):lt("",!0)])}}});const id=Hi(gM,[["__scopeId","data-v-3925b11e"]]),_M={class:"scene-editor"},vM={class:"editor-canvas"},xM=["onMousedown","title"],SM={class:"hotspot-index"},MM={key:0,class:"hotspot-info"},EM={class:"info-header"},yM={class:"info-content"},bM={class:"form-group"},TM={key:0,class:"form-group"},AM={class:"form-group"},wM={class:"form-group"},RM={class:"image-upload-group"},CM={key:0,class:"image-preview"},PM=["src","alt"],LM={class:"form-group"},UM={class:"form-group"},DM={class:"form-group"},IM={class:"image-upload-group"},NM={key:0,class:"image-preview"},FM=["src","alt"],OM={class:"form-group"},BM={class:"form-group"},HM={class:"form-group"},zM={class:"form-group"},GM={class:"form-group"},kM={key:5,class:"form-group"},VM=["value"],WM={class:"form-group"},XM={class:"form-group"},jM={style:{display:"flex","align-items":"center",gap:"8px",cursor:"pointer"}},qM={class:"form-group"},YM={class:"color-picker-enhanced"},$M={class:"color-presets"},KM=["onClick","title"],ZM={class:"color-picker-wrapper"},JM={class:"toolbar"},QM=Bi({__name:"SceneEditor",setup(n){const e=br(),t=ze("select");ze(!1);const i=ze(!0);ze(!1);const r=ze(""),s=ze(0),a=ze(0),o=ze(null),l=ze(null),c=ze(!1);ze(null);const u=ze(null),f=ze(0),h=ze("#ff0000"),m=ze(null),g=ze(""),v=()=>{var L,I;return(I=(L=u.value)==null?void 0:L.currentFov)!=null&&I.value?u.value.currentFov.value:75},p=["#FF0000","#FF6B35","#FFA500","#FFD700","#00FF00","#00CED1","#0066FF","#6B35FF","#FF00FF","#FFFFFF","#808080","#000000"],d=L=>{var _e;const I=typeof L=="number"?L:75;(_e=u.value)!=null&&_e.currentFov&&(u.value.currentFov.value=I),f.value++},y=(L,I)=>{L.button===0&&se(I)},S=(L,I)=>{const _e=Gt.degToRad(90-I),ve=Gt.degToRad(-L+90),ee=new W().setFromSpherical(new ar(1,_e,ve));return{x:ee.x,y:ee.y,z:ee.z}},x=Ni({get:()=>e.activeScene?e.activeScene.hotspots.find(L=>L.id===r.value):null,set:L=>{r.value=(L==null?void 0:L.id)||""}});En(()=>{var L;return(L=x.value)==null?void 0:L.color},L=>{L&&(h.value=L)}),En(h,L=>{x.value&&(x.value.color=L)}),En(()=>x.value,L=>{var I;if((L==null?void 0:L.type)==="iframe"){const ve=(((I=L.content)==null?void 0:I.iframeUrl)||"").match(/src="([^"]+)"/);g.value=ve?ve[1]:""}else g.value=""},{deep:!0});const b=L=>{if(t.value!=="draw")return;const I=Math.max(0,Math.min(360,L.x)),_e=Math.max(-90,Math.min(90,L.y)),ve={id:rs(),type:"text",x:I,y:_e,content:{text:"Nouveau point"},radius:10,color:"#ff0000",visible:!0,showIcon:!0,dir:{x:L.dir.x,y:L.dir.y,z:L.dir.z}};e.addHotspot(ve),e.project&&Sn.saveProject(e.project),x.value=ve},C=L=>{const I=L.currentTarget.getBoundingClientRect();s.value=L.clientX-I.left,a.value=L.clientY-I.top},P=L=>{var ve,ee;if(f.value,u.value){const Pe=u.value.getHotspotScreenPosition(L),Ae=v(),ke=Ae>0?75/Ae:1,le=L.radius*2*ke;return L.id===((ee=(ve=e.activeScene)==null?void 0:ve.hotspots[0])==null?void 0:ee.id)&&console.log(`FOV: ${Ae}, ZoomFactor: ${ke}, ScaledSize: ${le}`),{left:Pe.left,top:Pe.top,width:le+"px",height:le+"px",background:L.color,transform:"translate(-50%, -50%)"}}const I=L.x/360*100,_e=(L.y+90)/180*100;return{left:I+"%",top:_e+"%",width:L.radius*2+"px",height:L.radius*2+"px",background:L.color,display:"none",transform:"translate(-50%, -50%)"}},H=L=>({text:"📝",image:"🖼️","text-image":"📋",link:"🔗",iframe:"📱",scene:"⬆️"})[L]||"📍",M=L=>{var _e,ve,ee;if(console.log("[Tooltip Debug]",{type:L.type,linkedSceneId:(_e=L.content)==null?void 0:_e.linkedSceneId,content:L.content}),L.type==="scene"){const Pe=(ve=L.content)==null?void 0:ve.linkedSceneId;if(Pe&&e.project){const Ae=e.project.scenes.find(ke=>ke.id===Pe);if(Ae)return`Aller vers ${Ae.name}`}return"Changer de scène (non configuré)"}return L.type==="text"?((ee=L.content)==null?void 0:ee.text)||"Nouveau point":{image:"Image","text-image":"Image et texte",link:"Lien",iframe:"Cadre intégré"}[L.type]||"Nouveau point"},R=()=>{const L=g.value.trim();if(L){const I=`<iframe src="${L}" style="width: 100%; height: 600px; border: none; border-radius: 4px;"></iframe>`;x.value.content.iframeUrl=I}},se=L=>{x.value=L},ge=L=>{x.value=L,l.value=null},q=L=>{const I={...L,id:rs(),x:L.x+10,y:L.y+10};e.addHotspot(I),e.project&&Sn.saveProject(e.project),l.value=null},Z=L=>{e.activeScene&&(e.deleteHotspot(e.activeScene.id,L.id),e.project&&Sn.saveProject(e.project)),l.value=null},J=()=>{if(x.value&&e.activeScene){const L={...x.value,dir:S(x.value.x,x.value.y)};e.updateHotspot(e.activeScene.id,x.value.id,L),e.project&&Sn.saveProject(e.project),Fr("✅ Point d'intérêt enregistré!","success")}},ae=()=>{x.value&&e.activeScene&&(e.deleteHotspot(e.activeScene.id,x.value.id),x.value=null,e.project&&Sn.saveProject(e.project),Fr("🗑️ Point d'intérêt supprimé!","success"))},z=()=>{var L;(L=m.value)==null||L.click()},$=async L=>{var _e;const I=(_e=L.target.files)==null?void 0:_e[0];if(!(!I||!x.value))try{const ve=await qs(I);x.value.content.imageUrl=ve,e.activeScene&&(e.updateHotspot(e.activeScene.id,x.value.id,x.value),e.project&&Sn.saveProject(e.project)),Fr("✅ Image chargée!","success")}catch(ve){console.error("Erreur lors du chargement de l'image:",ve),Fr("❌ Erreur lors du chargement de l'image","error")}};let ce=null;const de=()=>{const L=()=>{f.value++,ce=requestAnimationFrame(L)};ce=requestAnimationFrame(L)},G=()=>{ce!==null&&(cancelAnimationFrame(ce),ce=null)};return En(()=>u.value,L=>{L?de():G()}),go(()=>{G()}),document.addEventListener("click",()=>{l.value=null}),(L,I)=>{var _e,ve;return Ue(),De("div",_M,[O("div",vM,[O("div",{class:"image-container",onMousemove:C,onContextmenu:I[2]||(I[2]=Gn(ee=>o.value=null,["prevent"]))},[(_e=Ye(e).activeScene)!=null&&_e.imageUrl?(Ue(),lr(id,{key:0,ref_key:"sceneViewerRef",ref:u,onEquirectClick:b,onHotspotOpened:I[0]||(I[0]=ee=>c.value=!0),onHotspotClosed:I[1]||(I[1]=ee=>c.value=!1),onFovChanged:d},null,512)):lt("",!0),O("div",{class:"grid-overlay",style:ln({display:Ye(c)?"none":"block"})},[(Ue(),De(ut,null,wi(37,ee=>O("div",{key:"h"+ee,class:"grid-line-h",style:ln({left:ee*100/36+"%"})},null,4)),64)),(Ue(),De(ut,null,wi(19,ee=>O("div",{key:"v"+ee,class:"grid-line-v",style:ln({top:ee*100/18+"%"})},null,4)),64))],4),(Ue(!0),De(ut,null,wi((ve=Ye(e).activeScene)==null?void 0:ve.hotspots,(ee,Pe)=>(Ue(),De("div",{key:ee.id,class:qt(["hotspot-pin",{selected:Ye(r)===ee.id}]),style:ln({...P(ee),display:Ye(c)?"none":"flex"}),onMousedown:Gn(Ae=>y(Ae,ee),["stop"]),onContextmenu:Gn(()=>{},["prevent"]),draggable:"false",title:M(ee)},[O("div",{class:qt(["hotspot-icon",{"hotspot-icon-scene":ee.type==="scene"}])},gt(H(ee.type)),3),O("div",SM,gt(Pe+1),1)],46,xM))),128)),Ye(i)?(Ue(),De("div",{key:1,class:"crosshair",style:ln({left:Ye(s)+"px",top:Ye(a)+"px"})},null,4)):lt("",!0)],32),x.value?(Ue(),De("div",MM,[O("div",EM,[I[24]||(I[24]=O("h3",null,"Point d'intérêt",-1)),O("button",{onClick:I[3]||(I[3]=ee=>x.value=null),class:"btn-close"},"✕")]),O("div",yM,[O("div",bM,[I[26]||(I[26]=O("label",null,"Type",-1)),xt(O("select",{"onUpdate:modelValue":I[4]||(I[4]=ee=>x.value.type=ee),class:"input"},[...I[25]||(I[25]=[Jh('<option value="text" data-v-783c93f8>📝 Texte</option><option value="image" data-v-783c93f8>🖼️ Image</option><option value="text-image" data-v-783c93f8>📋 Texte + Image</option><option value="link" data-v-783c93f8>🔗 Lien</option><option value="iframe" data-v-783c93f8>📱 IFrame</option><option value="scene" data-v-783c93f8>🔄 Autre Scène</option>',6)])],512),[[Xl,x.value.type]])]),x.value.type==="text"?(Ue(),De("div",TM,[I[27]||(I[27]=O("label",null,"Texte",-1)),xt(O("textarea",{"onUpdate:modelValue":I[5]||(I[5]=ee=>x.value.content.text=ee),class:"input",rows:"3"},null,512),[[Rt,x.value.content.text]])])):x.value.type==="image"?(Ue(),De(ut,{key:1},[O("div",AM,[I[28]||(I[28]=O("label",null,"Titre (optionnel)",-1)),xt(O("input",{"onUpdate:modelValue":I[6]||(I[6]=ee=>x.value.content.imageTitle=ee),type:"text",class:"input",placeholder:"Titre de l'image"},null,512),[[Rt,x.value.content.imageTitle]])]),O("div",wM,[I[29]||(I[29]=O("label",null,"Image",-1)),O("div",RM,[O("input",{ref_key:"imageFileInput",ref:m,type:"file",accept:"image/*",style:{display:"none"},onChange:$},null,544),O("button",{onClick:z,class:"btn-upload"}," 📤 Sélectionner une image "),x.value.content.imageUrl?(Ue(),De("div",CM,[O("img",{src:x.value.content.imageUrl,alt:x.value.content.imageUrl},null,8,PM)])):lt("",!0)])])],64)):x.value.type==="text-image"?(Ue(),De(ut,{key:2},[O("div",LM,[I[30]||(I[30]=O("label",null,"Titre",-1)),xt(O("input",{"onUpdate:modelValue":I[7]||(I[7]=ee=>x.value.content.title=ee),type:"text",class:"input"},null,512),[[Rt,x.value.content.title]])]),O("div",UM,[I[31]||(I[31]=O("label",null,"Texte",-1)),xt(O("textarea",{"onUpdate:modelValue":I[8]||(I[8]=ee=>x.value.content.text=ee),class:"input",rows:"2"},null,512),[[Rt,x.value.content.text]])]),O("div",DM,[I[32]||(I[32]=O("label",null,"Image",-1)),O("div",IM,[O("input",{ref_key:"imageFileInput",ref:m,type:"file",accept:"image/*",style:{display:"none"},onChange:$},null,544),O("button",{onClick:z,class:"btn-upload"}," 📤 Sélectionner une image "),x.value.content.imageUrl?(Ue(),De("div",NM,[O("img",{src:x.value.content.imageUrl,alt:x.value.content.imageUrl},null,8,FM)])):lt("",!0)])])],64)):x.value.type==="link"?(Ue(),De(ut,{key:3},[O("div",OM,[I[33]||(I[33]=O("label",null,"URL",-1)),xt(O("input",{"onUpdate:modelValue":I[9]||(I[9]=ee=>x.value.content.linkUrl=ee),type:"text",class:"input",placeholder:"https://..."},null,512),[[Rt,x.value.content.linkUrl]])]),O("div",BM,[I[34]||(I[34]=O("label",null,"Texte du lien",-1)),xt(O("input",{"onUpdate:modelValue":I[10]||(I[10]=ee=>x.value.content.title=ee),type:"text",class:"input",placeholder:"Cliquez ici"},null,512),[[Rt,x.value.content.title]])])],64)):x.value.type==="iframe"?(Ue(),De(ut,{key:4},[O("div",HM,[I[35]||(I[35]=O("label",null,"Titre (optionnel)",-1)),xt(O("input",{"onUpdate:modelValue":I[11]||(I[11]=ee=>x.value.content.imageTitle=ee),type:"text",class:"input",placeholder:"Titre du contenu"},null,512),[[Rt,x.value.content.imageTitle]])]),O("div",zM,[I[36]||(I[36]=O("label",null,"URL à intégrer",-1)),xt(O("input",{"onUpdate:modelValue":I[12]||(I[12]=ee=>st(g)?g.value=ee:null),type:"text",class:"input",placeholder:"https://exemple.com",onInput:R},null,544),[[Rt,Ye(g)]]),I[37]||(I[37]=O("small",{style:{color:"#999","margin-top":"5px",display:"block"}},"Remplis ce champ pour générer automatiquement le code iframe",-1))]),O("div",GM,[I[38]||(I[38]=O("label",null,"Code IFrame (généré automatiquement ou personnalisé)",-1)),xt(O("textarea",{"onUpdate:modelValue":I[13]||(I[13]=ee=>x.value.content.iframeUrl=ee),type:"text",class:"input",rows:"4",placeholder:"<iframe src='...'></iframe>"},null,512),[[Rt,x.value.content.iframeUrl]])])],64)):x.value.type==="scene"?(Ue(),De("div",kM,[I[39]||(I[39]=O("label",null,"Scène liée",-1)),xt(O("select",{"onUpdate:modelValue":I[14]||(I[14]=ee=>x.value.content.linkedSceneId=ee),class:"input"},[(Ue(!0),De(ut,null,wi(Ye(e).allScenes,ee=>(Ue(),De("option",{key:ee.id,value:ee.id},gt(ee.name),9,VM))),128))],512),[[Xl,x.value.content.linkedSceneId]])])):lt("",!0),O("div",WM,[I[40]||(I[40]=O("label",null,"Taille",-1)),xt(O("input",{"onUpdate:modelValue":I[15]||(I[15]=ee=>x.value.radius=ee),type:"range",min:"5",max:"30",class:"input"},null,512),[[Rt,x.value.radius,void 0,{number:!0}]])]),O("div",XM,[O("label",jM,[xt(O("input",{type:"checkbox","onUpdate:modelValue":I[16]||(I[16]=ee=>x.value.showIcon=ee),style:{width:"18px",height:"18px",cursor:"pointer"}},null,512),[[Cp,x.value.showIcon]]),I[41]||(I[41]=O("span",null,"Afficher le logo",-1))])]),O("div",qM,[I[43]||(I[43]=O("label",null,"Couleur",-1)),O("div",YM,[xt(O("input",{"onUpdate:modelValue":I[17]||(I[17]=ee=>st(h)?h.value=ee:null),type:"color",class:"color-input-hidden"},null,512),[[Rt,Ye(h)]]),O("div",$M,[(Ue(),De(ut,null,wi(p,ee=>O("button",{key:ee,class:qt(["color-preset",{active:Ye(h).toLowerCase()===ee.toLowerCase()}]),style:ln({backgroundColor:ee}),onClick:Pe=>h.value=ee,title:ee},null,14,KM)),64))]),O("label",ZM,[I[42]||(I[42]=O("span",{class:"color-picker-text"},"Choisir une couleur",-1)),xt(O("input",{"onUpdate:modelValue":I[18]||(I[18]=ee=>st(h)?h.value=ee:null),type:"color",class:"color-input-picker"},null,512),[[Rt,Ye(h)]])])])]),O("div",{class:"form-actions"},[O("button",{onClick:J,class:"btn-save"},"💾 Valider le point d'intérêt"),O("button",{onClick:ae,class:"btn-delete"},"🗑️ Supprimer le point d'intérêt")])])])):lt("",!0)]),O("div",JM,[O("button",{onClick:I[19]||(I[19]=ee=>t.value="draw"),class:qt([{active:Ye(t)==="draw"},"tool-btn"])}," ➕ Ajouter Point ",2),O("button",{onClick:I[20]||(I[20]=ee=>t.value="select"),class:qt([{active:Ye(t)==="select"},"tool-btn"])}," 🔍 Sélectionner ",2)]),Ye(l)?(Ue(),De("div",{key:0,class:"context-menu",style:ln(Ye(l).position)},[O("button",{onClick:I[21]||(I[21]=ee=>ge(Ye(l).hotspot)),class:"menu-item"},"✏️ Éditer"),O("button",{onClick:I[22]||(I[22]=ee=>q(Ye(l).hotspot)),class:"menu-item"},"📋 Dupliquer"),O("button",{onClick:I[23]||(I[23]=ee=>Z(Ye(l).hotspot)),class:"menu-item danger"},"🗑️ Supprimer")],4)):lt("",!0)])}}});const eE=Hi(QM,[["__scopeId","data-v-783c93f8"]]);class tE{static exportAsJSON(e){return JSON.stringify({version:"1.0.0",project:e,assets:{}},null,2)}static exportAsHTMLStandalone(e){const t=e.scenes.map((i,r)=>({id:i.id,name:i.name,description:i.description,hotspots:i.hotspots,imageIndex:r,imageFileName:i.imageFileName||`scene-${r}.jpg`,imageUrl:i.imageUrl,calibrationOffsetX:i.calibrationOffsetX||90}));return`<!DOCTYPE html>
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
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
    <script>
        const SCENES = ${JSON.stringify(t)};
        
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
            
            loadScene(0);
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
                        const size = (hotspot.radius * 2) || 20; // Utiliser le radius du hotspot, défaut à 20px
                        div.style.width = size + 'px';
                        div.style.height = size + 'px';
                        div.style.backgroundColor = hotspot.color + '80'; // 50% opacité
                        div.style.borderColor = hotspot.color; // Bordure opaque
                        div.style.borderWidth = '2px';
                        
                        // Ajouter l'icône du hotspot (si showIcon n'est pas défini ou true)
                        const showIcon = hotspot.showIcon !== false;
                        if (showIcon) {
                            const icons = {
                                text: '📝',
                                image: '🖼️',
                                'text-image': '📋',
                                link: '🔗',
                                iframe: '📱',
                                scene: '⬆️'
                            };
                            const icon = icons[hotspot.type] || '📍';
                            const iconSize = hotspot.type === 'scene' ? '18px' : '14px';
                            const iconWeight = hotspot.type === 'scene' ? 'font-weight: bold;' : '';
                            div.innerHTML = '<span style="font-size: ' + iconSize + '; line-height: 1; ' + iconWeight + '">' + icon + '</span>';
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
                            const baseSize = (hotspot.radius * 2) || 20;
                            const scaledSize = baseSize * zoomFactor;
                            
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
    `}}function nE(n){return tE.exportAsHTMLStandalone(n)}const iE={class:"export-panel"},rE={class:"export-container"},sE={class:"export-preview"},oE={class:"project-info"},aE={class:"info-row"},lE={class:"info-row"},cE={class:"info-row"},uE={class:"info-row"},fE=Bi({__name:"ExportPanel",setup(n){const e=br(),t=Ni(()=>{var s;return((s=e.project)==null?void 0:s.scenes.reduce((a,o)=>a+o.hotspots.length,0))||0}),i=Ni(()=>{if(!e.project)return"0 MB";const s=JSON.stringify(e.project);return(new Blob([s]).size/1024/1024).toFixed(2)+" MB"}),r=()=>{if(!e.project)return;const s=nE(e.project),a=new Blob([s],{type:"text/html"}),o=URL.createObjectURL(a),l=document.createElement("a");l.href=o,l.download="index.html",l.click(),URL.revokeObjectURL(o)};return(s,a)=>{var o,l;return Ue(),De("div",iE,[O("div",rE,[a[8]||(a[8]=O("h2",null,"Exporter le Projet",-1)),O("div",sE,[a[4]||(a[4]=O("h3",null,"Apercu du Projet",-1)),O("div",oE,[O("div",aE,[a[0]||(a[0]=O("label",null,"Nom:",-1)),O("span",null,gt((o=Ye(e).project)==null?void 0:o.name),1)]),O("div",lE,[a[1]||(a[1]=O("label",null,"Scenes:",-1)),O("span",null,gt((l=Ye(e).project)==null?void 0:l.scenes.length),1)]),O("div",cE,[a[2]||(a[2]=O("label",null,"Hotspots:",-1)),O("span",null,gt(t.value),1)]),O("div",uE,[a[3]||(a[3]=O("label",null,"Taille approx:",-1)),O("span",null,gt(i.value),1)])])]),O("div",{class:"export-options"},[O("div",{class:"export-card"},[a[5]||(a[5]=O("div",{class:"card-icon"},"📄",-1)),a[6]||(a[6]=O("h3",null,"HTML Standalone",-1)),a[7]||(a[7]=O("p",null,"Génère un fichier index.html unique à lancer (de préférence avec Chrome pour assurer un maximum de compatibilité).",-1)),O("button",{onClick:r,class:"btn-export"},"Telecharger HTML")])])])])}}});const dE=Hi(fE,[["__scopeId","data-v-825179a4"]]),hE={class:"app-container"},pE={class:"toasts-container"},mE={key:1,class:"editor-layout"},gE={class:"sidebar"},_E={class:"main-content"},vE={class:"editor-tabs"},xE=Bi({__name:"App",setup(n){const e=br(),t=ze("editor"),i=(s,a)=>{e.createNewProject(s,a)},r=s=>{e.loadProject(s)};return mo(async()=>{console.log("App initialized - showing HomeScreen")}),(s,a)=>(Ue(),De("div",hE,[O("div",pE,[(Ue(!0),De(ut,null,wi(Ye(no),o=>(Ue(),De("div",{key:o.id,class:qt(["toast",`toast-${o.type}`])},gt(o.message),3))),128))]),Ye(e).project?(Ue(),De("div",mE,[O("div",gE,[nn(sm),nn(Mm)]),O("div",_E,[O("div",vE,[O("button",{class:qt([{active:t.value==="editor"},"tab-btn"]),onClick:a[0]||(a[0]=o=>t.value="editor")}," ✏️ Éditeur ",2),O("button",{class:qt([{active:t.value==="viewer"},"tab-btn"]),onClick:a[1]||(a[1]=o=>t.value="viewer")}," 👁️ Visionneur ",2),O("button",{class:qt([{active:t.value==="export"},"tab-btn"]),onClick:a[2]||(a[2]=o=>t.value="export")}," 💾 Exporter ",2)]),t.value==="editor"?(Ue(),De(ut,{key:0},[Ye(e).activeScene?(Ue(),lr(eE,{key:0})):lt("",!0)],64)):t.value==="viewer"?(Ue(),De(ut,{key:1},[Ye(e).activeScene?(Ue(),lr(id,{key:0})):lt("",!0)],64)):t.value==="export"?(Ue(),lr(dE,{key:2})):lt("",!0)])])):(Ue(),lr(tm,{key:0,onCreateProject:i,onLoadProject:r}))]))}});const SE=Hi(xE,[["__scopeId","data-v-eed44c5c"]]),rd=Fp(SE);rd.use(zp());rd.mount("#app");
