(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const dt={},yr=[],yn=()=>{},rf=()=>!1,Ao=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Fl=n=>n.startsWith("onUpdate:"),Lt=Object.assign,Ol=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Yd=Object.prototype.hasOwnProperty,st=(n,e)=>Yd.call(n,e),ke=Array.isArray,Er=n=>As(n)==="[object Map]",Br=n=>As(n)==="[object Set]",Sc=n=>As(n)==="[object Date]",$e=n=>typeof n=="function",Rt=n=>typeof n=="string",Fn=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",sf=n=>(pt(n)||$e(n))&&$e(n.then)&&$e(n.catch),of=Object.prototype.toString,As=n=>of.call(n),Kd=n=>As(n).slice(8,-1),af=n=>As(n)==="[object Object]",wo=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Qr=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Co=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Zd=/-\w/g,wi=Co(n=>n.replace(Zd,e=>e.slice(1).toUpperCase())),Jd=/\B([A-Z])/g,Di=Co(n=>n.replace(Jd,"-$1").toLowerCase()),lf=Co(n=>n.charAt(0).toUpperCase()+n.slice(1)),jo=Co(n=>n?`on${lf(n)}`:""),Ti=(n,e)=>!Object.is(n,e),oo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},cf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ro=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let bc;const Po=()=>bc||(bc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function un(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Rt(i)?nh(i):un(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Rt(n)||pt(n))return n}const Qd=/;(?![^(]*\))/g,eh=/:([^]+)/,th=/\/\*[^]*?\*\//g;function nh(n){const e={};return n.replace(th,"").split(Qd).forEach(t=>{if(t){const i=t.split(eh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function qt(n){let e="";if(Rt(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=qt(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ih="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rh=Nl(ih);function uf(n){return!!n||n===""}function sh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ws(n[i],e[i]);return t}function ws(n,e){if(n===e)return!0;let t=Sc(n),i=Sc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Fn(n),i=Fn(e),t||i)return n===e;if(t=ke(n),i=ke(e),t||i)return t&&i?sh(n,e):!1;if(t=pt(n),i=pt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ws(n[o],e[o]))return!1}}return String(n)===String(e)}function Bl(n,e){return n.findIndex(t=>ws(t,e))}const ff=n=>!!(n&&n.__v_isRef===!0),gt=n=>Rt(n)?n:n==null?"":ke(n)||pt(n)&&(n.toString===of||!$e(n.toString))?ff(n)?gt(n.value):JSON.stringify(n,df,2):String(n),df=(n,e)=>ff(e)?df(n,e.value):Er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Yo(i,s)+" =>"]=r,t),{})}:Br(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Yo(t))}:Fn(e)?Yo(e):pt(e)&&!ke(e)&&!af(e)?String(e):e,Yo=(n,e="")=>{var t;return Fn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class hf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Bt;try{return Bt=this,e()}finally{Bt=t}}}on(){++this._on===1&&(this.prevScope=Bt,Bt=this)}off(){this._on>0&&--this._on===0&&(Bt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function pf(n){return new hf(n)}function mf(){return Bt}function oh(n,e=!1){Bt&&Bt.cleanups.push(n)}let ht;const Ko=new WeakSet;class xf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&Bt.active&&Bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ko.has(this)&&(Ko.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_f(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mc(this),vf(this);const e=ht,t=En;ht=this,En=!0;try{return this.fn()}finally{Sf(this),ht=e,En=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vl(e);this.deps=this.depsTail=void 0,Mc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ko.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ua(this)&&this.run()}get dirty(){return Ua(this)}}let gf=0,es,ts;function _f(n,e=!1){if(n.flags|=8,e){n.next=ts,ts=n;return}n.next=es,es=n}function zl(){gf++}function kl(){if(--gf>0)return;if(ts){let e=ts;for(ts=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;es;){let e=es;for(es=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function vf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Vl(i),ah(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ua(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function bf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ds)||(n.globalVersion=ds,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ua(n))))return;n.flags|=2;const e=n.dep,t=ht,i=En;ht=n,En=!0;try{vf(n);const r=n.fn(n._value);(e.version===0||Ti(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ht=t,En=i,Sf(n),n.flags&=-3}}function Vl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Vl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ah(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let En=!0;const Mf=[];function ii(){Mf.push(En),En=!1}function ri(){const n=Mf.pop();En=n===void 0?!0:n}function Mc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let ds=0;class lh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ht||!En||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new lh(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,yf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,ds++,this.notify(e)}notify(e){zl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{kl()}}}function yf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)yf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const go=new WeakMap,Yi=Symbol(""),Na=Symbol(""),hs=Symbol("");function zt(n,e,t){if(En&&ht){let i=go.get(n);i||go.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Hl),r.map=i,r.key=t),r.track()}}function $n(n,e,t,i,r,s){const o=go.get(n);if(!o){ds++;return}const a=l=>{l&&l.trigger()};if(zl(),e==="clear")o.forEach(a);else{const l=ke(n),c=l&&wo(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===hs||!Fn(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(hs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Yi)),Er(n)&&a(o.get(Na)));break;case"delete":l||(a(o.get(Yi)),Er(n)&&a(o.get(Na)));break;case"set":Er(n)&&a(o.get(Yi));break}}kl()}function ch(n,e){const t=go.get(n);return t&&t.get(e)}function tr(n){const e=it(n);return e===n?e:(zt(e,"iterate",hs),sn(n)?e:e.map(An))}function Do(n){return zt(n=it(n),"iterate",hs),n}function _i(n,e){return si(n)?Jn(n)?Dr(An(e)):Dr(e):An(e)}const uh={__proto__:null,[Symbol.iterator](){return Zo(this,Symbol.iterator,n=>_i(this,n))},concat(...n){return tr(this).concat(...n.map(e=>ke(e)?tr(e):e))},entries(){return Zo(this,"entries",n=>(n[1]=_i(this,n[1]),n))},every(n,e){return Bn(this,"every",n,e,void 0,arguments)},filter(n,e){return Bn(this,"filter",n,e,t=>t.map(i=>_i(this,i)),arguments)},find(n,e){return Bn(this,"find",n,e,t=>_i(this,t),arguments)},findIndex(n,e){return Bn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Bn(this,"findLast",n,e,t=>_i(this,t),arguments)},findLastIndex(n,e){return Bn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Bn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Jo(this,"includes",n)},indexOf(...n){return Jo(this,"indexOf",n)},join(n){return tr(this).join(n)},lastIndexOf(...n){return Jo(this,"lastIndexOf",n)},map(n,e){return Bn(this,"map",n,e,void 0,arguments)},pop(){return Wr(this,"pop")},push(...n){return Wr(this,"push",n)},reduce(n,...e){return yc(this,"reduce",n,e)},reduceRight(n,...e){return yc(this,"reduceRight",n,e)},shift(){return Wr(this,"shift")},some(n,e){return Bn(this,"some",n,e,void 0,arguments)},splice(...n){return Wr(this,"splice",n)},toReversed(){return tr(this).toReversed()},toSorted(n){return tr(this).toSorted(n)},toSpliced(...n){return tr(this).toSpliced(...n)},unshift(...n){return Wr(this,"unshift",n)},values(){return Zo(this,"values",n=>_i(this,n))}};function Zo(n,e,t){const i=Do(n),r=i[e]();return i!==n&&!sn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const fh=Array.prototype;function Bn(n,e,t,i,r,s){const o=Do(n),a=o!==n&&!sn(n),l=o[e];if(l!==fh[e]){const f=l.apply(n,s);return a?An(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,_i(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function yc(n,e,t,i){const r=Do(n);let s=t;return r!==n&&(sn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,_i(n,a),l,n)}),r[e](s,...i)}function Jo(n,e,t){const i=it(n);zt(i,"iterate",hs);const r=i[e](...t);return(r===-1||r===!1)&&Io(t[0])?(t[0]=it(t[0]),i[e](...t)):r}function Wr(n,e,t=[]){ii(),zl();const i=it(n)[e].apply(n,t);return kl(),ri(),i}const dh=Nl("__proto__,__v_isRef,__isVue"),Ef=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Fn));function hh(n){Fn(n)||(n=String(n));const e=it(this);return zt(e,"has",n),e.hasOwnProperty(n)}class Tf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?yh:Rf:s?Cf:wf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ke(e);if(!r){let l;if(o&&(l=uh[t]))return l;if(t==="hasOwnProperty")return hh}const a=Reflect.get(e,t,_t(e)?e:i);if((Fn(t)?Ef.has(t):dh(t))||(r||zt(e,"get",t),s))return a;if(_t(a)){const l=o&&wo(t)?a:a.value;return r&&pt(l)?Oa(l):l}return pt(a)?r?Oa(a):Pr(a):a}}class Af extends Tf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=ke(e)&&wo(t);if(!this._isShallow){const c=si(s);if(!sn(i)&&!si(i)&&(s=it(s),i=it(i)),!o&&_t(s)&&!_t(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:st(e,t),l=Reflect.set(e,t,i,_t(e)?e:r);return e===it(r)&&(a?Ti(i,s)&&$n(e,"set",t,i):$n(e,"add",t,i)),l}deleteProperty(e,t){const i=st(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&$n(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Fn(t)||!Ef.has(t))&&zt(e,"has",t),i}ownKeys(e){return zt(e,"iterate",ke(e)?"length":Yi),Reflect.ownKeys(e)}}class ph extends Tf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const mh=new Af,xh=new ph,gh=new Af(!0);const Fa=n=>n,Ns=n=>Reflect.getPrototypeOf(n);function _h(n,e,t){return function(...i){const r=this.__v_raw,s=it(r),o=Er(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Fa:e?Dr:An;return!e&&zt(s,"iterate",l?Na:Yi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Fs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function vh(n,e){const t={get(r){const s=this.__v_raw,o=it(s),a=it(r);n||(Ti(r,a)&&zt(o,"get",r),zt(o,"get",a));const{has:l}=Ns(o),c=e?Fa:n?Dr:An;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&zt(it(r),"iterate",Yi),r.size},has(r){const s=this.__v_raw,o=it(s),a=it(r);return n||(Ti(r,a)&&zt(o,"has",r),zt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=it(a),c=e?Fa:n?Dr:An;return!n&&zt(l,"iterate",Yi),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Lt(t,n?{add:Fs("add"),set:Fs("set"),delete:Fs("delete"),clear:Fs("clear")}:{add(r){!e&&!sn(r)&&!si(r)&&(r=it(r));const s=it(this);return Ns(s).has.call(s,r)||(s.add(r),$n(s,"add",r,r)),this},set(r,s){!e&&!sn(s)&&!si(s)&&(s=it(s));const o=it(this),{has:a,get:l}=Ns(o);let c=a.call(o,r);c||(r=it(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ti(s,u)&&$n(o,"set",r,s):$n(o,"add",r,s),this},delete(r){const s=it(this),{has:o,get:a}=Ns(s);let l=o.call(s,r);l||(r=it(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&$n(s,"delete",r,void 0),c},clear(){const r=it(this),s=r.size!==0,o=r.clear();return s&&$n(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=_h(r,n,e)}),t}function Gl(n,e){const t=vh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(st(t,r)&&r in i?t:i,r,s)}const Sh={get:Gl(!1,!1)},bh={get:Gl(!1,!0)},Mh={get:Gl(!0,!1)};const wf=new WeakMap,Cf=new WeakMap,Rf=new WeakMap,yh=new WeakMap;function Eh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Th(n){return n.__v_skip||!Object.isExtensible(n)?0:Eh(Kd(n))}function Pr(n){return si(n)?n:Wl(n,!1,mh,Sh,wf)}function Ah(n){return Wl(n,!1,gh,bh,Cf)}function Oa(n){return Wl(n,!0,xh,Mh,Rf)}function Wl(n,e,t,i,r){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Th(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Jn(n){return si(n)?Jn(n.__v_raw):!!(n&&n.__v_isReactive)}function si(n){return!!(n&&n.__v_isReadonly)}function sn(n){return!!(n&&n.__v_isShallow)}function Io(n){return n?!!n.__v_raw:!1}function it(n){const e=n&&n.__v_raw;return e?it(e):n}function Xl(n){return!st(n,"__v_skip")&&Object.isExtensible(n)&&cf(n,"__v_skip",!0),n}const An=n=>pt(n)?Pr(n):n,Dr=n=>pt(n)?Oa(n):n;function _t(n){return n?n.__v_isRef===!0:!1}function Ue(n){return wh(n,!1)}function wh(n,e){return _t(n)?n:new Ch(n,e)}class Ch{constructor(e,t){this.dep=new Hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:An(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||sn(e)||si(e);e=i?e:it(e),Ti(e,t)&&(this._rawValue=e,this._value=i?e:An(e),this.dep.trigger())}}function Qe(n){return _t(n)?n.value:n}const Rh={get:(n,e,t)=>e==="__v_raw"?n:Qe(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return _t(r)&&!_t(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Pf(n){return Jn(n)?n:new Proxy(n,Rh)}function Ph(n){const e=ke(n)?new Array(n.length):{};for(const t in n)e[t]=Ih(n,t);return e}class Dh{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=it(e);let r=!0,s=e;if(!ke(e)||!wo(String(t)))do r=!Io(s)||sn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=Qe(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&_t(this._raw[this._key])){const t=this._object[this._key];if(_t(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return ch(this._raw,this._key)}}function Ih(n,e,t){return new Dh(n,e,t)}class Lh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ds-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return _f(this,!0),!0}get value(){const e=this.dep.track();return bf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Uh(n,e,t=!1){let i,r;return $e(n)?i=n:(i=n.get,r=n.set),new Lh(i,r,t)}const Os={},_o=new WeakMap;let Wi;function Nh(n,e=!1,t=Wi){if(t){let i=_o.get(t);i||_o.set(t,i=[]),i.push(n)}}function Fh(n,e,t=dt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=w=>r?w:sn(w)||r===!1||r===0?jn(w,1):jn(w);let u,f,h,p,v=!1,S=!1;if(_t(n)?(f=()=>n.value,v=sn(n)):Jn(n)?(f=()=>c(n),v=!0):ke(n)?(S=!0,v=n.some(w=>Jn(w)||sn(w)),f=()=>n.map(w=>{if(_t(w))return w.value;if(Jn(w))return c(w);if($e(w))return l?l(w,2):w()})):$e(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ii();try{h()}finally{ri()}}const w=Wi;Wi=u;try{return l?l(n,3,[p]):n(p)}finally{Wi=w}}:f=yn,e&&r){const w=f,I=r===!0?1/0:r;f=()=>jn(w(),I)}const m=mf(),d=()=>{u.stop(),m&&m.active&&Ol(m.effects,u)};if(s&&e){const w=e;e=(...I)=>{w(...I),d()}}let y=S?new Array(n.length).fill(Os):Os;const T=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(e){const I=u.run();if(r||v||(S?I.some((C,U)=>Ti(C,y[U])):Ti(I,y))){h&&h();const C=Wi;Wi=u;try{const U=[I,y===Os?void 0:S&&y[0]===Os?[]:y,p];y=I,l?l(e,3,U):e(...U)}finally{Wi=C}}}else u.run()};return a&&a(T),u=new xf(f),u.scheduler=o?()=>o(T,!1):T,p=w=>Nh(w,!1,u),h=u.onStop=()=>{const w=_o.get(u);if(w){if(l)l(w,4);else for(const I of w)I();_o.delete(u)}},e?i?T(!0):y=u.run():o?o(T.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function jn(n,e=1/0,t){if(e<=0||!pt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,_t(n))jn(n.value,e,t);else if(ke(n))for(let i=0;i<n.length;i++)jn(n[i],e,t);else if(Br(n)||Er(n))n.forEach(i=>{jn(i,e,t)});else if(af(n)){for(const i in n)jn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&jn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cs(n,e,t,i){try{return i?n(...i):n()}catch(r){Lo(r,e,t)}}function On(n,e,t,i){if($e(n)){const r=Cs(n,e,t,i);return r&&sf(r)&&r.catch(s=>{Lo(s,e,t)}),r}if(ke(n)){const r=[];for(let s=0;s<n.length;s++)r.push(On(n[s],e,t,i));return r}}function Lo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||dt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){ii(),Cs(s,null,10,[n,l,c]),ri();return}}Oh(n,t,r,i,o)}function Oh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const $t=[];let Rn=-1;const Tr=[];let vi=null,_r=0;const Df=Promise.resolve();let vo=null;function ql(n){const e=vo||Df;return n?e.then(this?n.bind(this):n):e}function Bh(n){let e=Rn+1,t=$t.length;for(;e<t;){const i=e+t>>>1,r=$t[i],s=ps(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function $l(n){if(!(n.flags&1)){const e=ps(n),t=$t[$t.length-1];!t||!(n.flags&2)&&e>=ps(t)?$t.push(n):$t.splice(Bh(e),0,n),n.flags|=1,If()}}function If(){vo||(vo=Df.then(Uf))}function zh(n){ke(n)?Tr.push(...n):vi&&n.id===-1?vi.splice(_r+1,0,n):n.flags&1||(Tr.push(n),n.flags|=1),If()}function Ec(n,e,t=Rn+1){for(;t<$t.length;t++){const i=$t[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;$t.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Lf(n){if(Tr.length){const e=[...new Set(Tr)].sort((t,i)=>ps(t)-ps(i));if(Tr.length=0,vi){vi.push(...e);return}for(vi=e,_r=0;_r<vi.length;_r++){const t=vi[_r];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}vi=null,_r=0}}const ps=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Uf(n){const e=yn;try{for(Rn=0;Rn<$t.length;Rn++){const t=$t[Rn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Cs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Rn<$t.length;Rn++){const t=$t[Rn];t&&(t.flags&=-2)}Rn=-1,$t.length=0,Lf(),vo=null,($t.length||Tr.length)&&Uf()}}let hn=null,Nf=null;function So(n){const e=hn;return hn=n,Nf=n&&n.type.__scopeId||null,e}function kh(n,e=hn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Lc(-1);const s=So(e);let o;try{o=n(...r)}finally{So(s),i._d&&Lc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Tt(n,e){if(hn===null)return n;const t=zo(hn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=dt]=e[r];s&&($e(s)&&(s={mounted:s,updated:s}),s.deep&&jn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Fi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ii(),On(l,t,8,[n.el,a,n,e]),ri())}}const Vh=Symbol("_vte"),Hh=n=>n.__isTeleport,Gh=Symbol("_leaveCb");function jl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,jl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ii(n,e){return $e(n)?(()=>Lt({name:n.name},e,{setup:n}))():n}function Ff(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const bo=new WeakMap;function ns(n,e,t,i,r=!1){if(ke(n)){n.forEach((v,S)=>ns(v,e&&(ke(e)?e[S]:e),t,i,r));return}if(is(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ns(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?zo(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===dt?a.refs={}:a.refs,f=a.setupState,h=it(f),p=f===dt?rf:v=>st(h,v);if(c!=null&&c!==l){if(Tc(e),Rt(c))u[c]=null,p(c)&&(f[c]=null);else if(_t(c)){c.value=null;const v=e;v.k&&(u[v.k]=null)}}if($e(l))Cs(l,a,12,[o,u]);else{const v=Rt(l),S=_t(l);if(v||S){const m=()=>{if(n.f){const d=v?p(l)?f[l]:u[l]:l.value;if(r)ke(d)&&Ol(d,s);else if(ke(d))d.includes(s)||d.push(s);else if(v)u[l]=[s],p(l)&&(f[l]=u[l]);else{const y=[s];l.value=y,n.k&&(u[n.k]=y)}}else v?(u[l]=o,p(l)&&(f[l]=o)):S&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const d=()=>{m(),bo.delete(n)};d.id=-1,bo.set(n,d),nn(d,t)}else Tc(n),m()}}}function Tc(n){const e=bo.get(n);e&&(e.flags|=8,bo.delete(n))}Po().requestIdleCallback;Po().cancelIdleCallback;const is=n=>!!n.type.__asyncLoader,Of=n=>n.type.__isKeepAlive;function Wh(n,e){Bf(n,"a",e)}function Xh(n,e){Bf(n,"da",e)}function Bf(n,e,t=jt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Uo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Of(r.parent.vnode)&&qh(i,e,t,r),r=r.parent}}function qh(n,e,t,i){const r=Uo(e,n,i,!0);Fo(()=>{Ol(i[e],r)},t)}function Uo(n,e,t=jt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ii();const a=Rs(t),l=On(e,t,n,o);return a(),ri(),l});return i?r.unshift(s):r.push(s),s}}const ci=n=>(e,t=jt)=>{(!xs||n==="sp")&&Uo(n,(...i)=>e(...i),t)},$h=ci("bm"),No=ci("m"),jh=ci("bu"),Yh=ci("u"),Kh=ci("bum"),Fo=ci("um"),Zh=ci("sp"),Jh=ci("rtg"),Qh=ci("rtc");function ep(n,e=jt){Uo("ec",n,e)}const tp=Symbol.for("v-ndc");function Si(n,e,t,i){let r;const s=t&&t[i],o=ke(n);if(o||Rt(n)){const a=o&&Jn(n);let l=!1,c=!1;a&&(l=!sn(n),c=si(n),n=Do(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Dr(An(n[u])):An(n[u]):n[u],u,void 0,s&&s[u])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(pt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s&&s[l]));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s&&s[l])}}else r=[];return t&&(t[i]=r),r}const Ba=n=>n?rd(n)?zo(n):Ba(n.parent):null,rs=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ba(n.parent),$root:n=>Ba(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Yl(n),$forceUpdate:n=>n.f||(n.f=()=>{$l(n.update)}),$nextTick:n=>n.n||(n.n=ql.bind(n.proxy)),$watch:n=>mp.bind(n)}),Qo=(n,e)=>n!==dt&&!n.__isScriptSetup&&st(n,e),np={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Qo(i,e))return o[e]=1,i[e];if(r!==dt&&st(r,e))return o[e]=2,r[e];if(st(s,e))return o[e]=3,s[e];if(t!==dt&&st(t,e))return o[e]=4,t[e];za&&(o[e]=0)}}const c=rs[e];let u,f;if(c)return e==="$attrs"&&zt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==dt&&st(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,st(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Qo(r,e)?(r[e]=t,!0):i!==dt&&st(i,e)?(i[e]=t,!0):st(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==dt&&a[0]!=="$"&&st(n,a)||Qo(e,a)||st(s,a)||st(i,a)||st(rs,a)||st(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:st(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ac(n){return ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let za=!0;function ip(n){const e=Yl(n),t=n.proxy,i=n.ctx;za=!1,e.beforeCreate&&wc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:S,deactivated:m,beforeDestroy:d,beforeUnmount:y,destroyed:T,unmounted:w,render:I,renderTracked:C,renderTriggered:U,errorCaptured:k,serverPrefetch:E,expose:b,inheritAttrs:O,components:J,directives:q,filters:z}=e;if(c&&rp(c,i,null),o)for(const B in o){const j=o[B];$e(j)&&(i[B]=j.bind(t))}if(r){const B=r.call(t,t);pt(B)&&(n.data=Pr(B))}if(za=!0,s)for(const B in s){const j=s[B],fe=$e(j)?j.bind(t,t):$e(j.get)?j.get.bind(t,t):yn,pe=!$e(j)&&$e(j.set)?j.set.bind(t):yn,we=Qn({get:fe,set:pe});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>we.value,set:Ve=>we.value=Ve})}if(a)for(const B in a)zf(a[B],i,t,B);if(l){const B=$e(l)?l.call(t):l;Reflect.ownKeys(B).forEach(j=>{up(j,B[j])})}u&&wc(u,n,"c");function G(B,j){ke(j)?j.forEach(fe=>B(fe.bind(t))):j&&B(j.bind(t))}if(G($h,f),G(No,h),G(jh,p),G(Yh,v),G(Wh,S),G(Xh,m),G(ep,k),G(Qh,C),G(Jh,U),G(Kh,y),G(Fo,w),G(Zh,E),ke(b))if(b.length){const B=n.exposed||(n.exposed={});b.forEach(j=>{Object.defineProperty(B,j,{get:()=>t[j],set:fe=>t[j]=fe,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===yn&&(n.render=I),O!=null&&(n.inheritAttrs=O),J&&(n.components=J),q&&(n.directives=q),E&&Ff(n)}function rp(n,e,t=yn){ke(n)&&(n=ka(n));for(const i in n){const r=n[i];let s;pt(r)?"default"in r?s=ss(r.from||i,r.default,!0):s=ss(r.from||i):s=ss(r),_t(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function wc(n,e,t){On(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function zf(n,e,t,i){let r=i.includes(".")?Vf(t,i):()=>t[i];if(Rt(n)){const s=e[n];$e(s)&&Sn(r,s)}else if($e(n))Sn(r,n.bind(t));else if(pt(n))if(ke(n))n.forEach(s=>zf(s,e,t,i));else{const s=$e(n.handler)?n.handler.bind(t):e[n.handler];$e(s)&&Sn(r,s,n)}}function Yl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Mo(l,c,o,!0)),Mo(l,e,o)),pt(e)&&s.set(e,l),l}function Mo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Mo(n,s,t,!0),r&&r.forEach(o=>Mo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=sp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const sp={data:Cc,props:Rc,emits:Rc,methods:Zr,computed:Zr,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:Zr,directives:Zr,watch:ap,provide:Cc,inject:op};function Cc(n,e){return e?n?function(){return Lt($e(n)?n.call(this,this):n,$e(e)?e.call(this,this):e)}:e:n}function op(n,e){return Zr(ka(n),ka(e))}function ka(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Gt(n,e){return n?[...new Set([].concat(n,e))]:e}function Zr(n,e){return n?Lt(Object.create(null),n,e):e}function Rc(n,e){return n?ke(n)&&ke(e)?[...new Set([...n,...e])]:Lt(Object.create(null),Ac(n),Ac(e??{})):e}function ap(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const i in e)t[i]=Gt(n[i],e[i]);return t}function kf(){return{app:null,config:{isNativeTag:rf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lp=0;function cp(n,e){return function(i,r=null){$e(i)||(i=Lt({},i)),r!=null&&!pt(r)&&(r=null);const s=kf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:lp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:$p,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&$e(u.install)?(o.add(u),u.install(c,...f)):$e(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||mn(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(p,u):n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,zo(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(On(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Ki;Ki=c;try{return u()}finally{Ki=f}}};return c}}let Ki=null;function up(n,e){if(jt){let t=jt.provides;const i=jt.parent&&jt.parent.provides;i===t&&(t=jt.provides=Object.create(i)),t[n]=e}}function ss(n,e,t=!1){const i=id();if(i||Ki){let r=Ki?Ki._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&$e(e)?e.call(i&&i.proxy):e}}function fp(){return!!(id()||Ki)}const dp=Symbol.for("v-scx"),hp=()=>ss(dp);function pp(n,e){return Kl(n,null,e)}function Sn(n,e,t){return Kl(n,e,t)}function Kl(n,e,t=dt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Lt({},t),l=e&&i||!e&&s!=="post";let c;if(xs){if(s==="sync"){const p=hp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=yn,p.resume=yn,p.pause=yn,p}}const u=jt;a.call=(p,v,S)=>On(p,u,v,S);let f=!1;s==="post"?a.scheduler=p=>{nn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,v)=>{v?p():$l(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Fh(n,e,a);return xs&&(c?c.push(h):l&&h()),h}function mp(n,e,t){const i=this.proxy,r=Rt(n)?n.includes(".")?Vf(i,n):()=>i[n]:n.bind(i,i);let s;$e(e)?s=e:(s=e.handler,t=e);const o=Rs(this),a=Kl(r,s.bind(i),t);return o(),a}function Vf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const xp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${wi(e)}Modifiers`]||n[`${Di(e)}Modifiers`];function gp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||dt;let r=t;const s=e.startsWith("update:"),o=s&&xp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Rt(u)?u.trim():u)),o.number&&(r=t.map(Ro)));let a,l=i[a=jo(e)]||i[a=jo(wi(e))];!l&&s&&(l=i[a=jo(Di(e))]),l&&On(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,On(c,n,6,r)}}const _p=new WeakMap;function Hf(n,e,t=!1){const i=t?_p:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!$e(n)){const l=c=>{const u=Hf(c,e,!0);u&&(a=!0,Lt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(pt(n)&&i.set(n,null),null):(ke(s)?s.forEach(l=>o[l]=null):Lt(o,s),pt(n)&&i.set(n,o),o)}function Oo(n,e){return!n||!Ao(e)?!1:(e=e.slice(2).replace(/Once$/,""),st(n,e[0].toLowerCase()+e.slice(1))||st(n,Di(e))||st(n,e))}function ea(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:v,inheritAttrs:S}=n,m=So(n);let d,y;try{if(t.shapeFlag&4){const w=r||i,I=w;d=Pn(c.call(I,w,u,f,p,h,v)),y=a}else{const w=e;d=Pn(w.length>1?w(f,{attrs:a,slots:o,emit:l}):w(f,null)),y=e.props?a:vp(a)}}catch(w){os.length=0,Lo(w,n,1),d=mn(Ci)}let T=d;if(y&&S!==!1){const w=Object.keys(y),{shapeFlag:I}=T;w.length&&I&7&&(s&&w.some(Fl)&&(y=Sp(y,s)),T=Ir(T,y,!1,!0))}return t.dirs&&(T=Ir(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&jl(T,t.transition),d=T,So(m),d}const vp=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ao(t))&&((e||(e={}))[t]=n[t]);return e},Sp=(n,e)=>{const t={};for(const i in n)(!Fl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function bp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Pc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Oo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Pc(i,o,c):!0:!!o;return!1}function Pc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Oo(t,s))return!0}return!1}function Mp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Gf={},Wf=()=>Object.create(Gf),Xf=n=>Object.getPrototypeOf(n)===Gf;function yp(n,e,t,i=!1){const r={},s=Wf();n.propsDefaults=Object.create(null),qf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Ah(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ep(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=it(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Oo(n.emitsOptions,h))continue;const p=e[h];if(l)if(st(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=wi(h);r[v]=Va(l,a,v,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{qf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!st(e,f)&&((u=Di(f))===f||!st(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Va(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!st(e,f))&&(delete s[f],c=!0)}c&&$n(n.attrs,"set","")}function qf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Qr(l))continue;const c=e[l];let u;r&&st(r,u=wi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Oo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=it(t),c=a||dt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Va(r,l,f,c[f],n,!st(c,f))}}return o}function Va(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=st(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$e(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Rs(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Di(t))&&(i=!0))}return i}const Tp=new WeakMap;function $f(n,e,t=!1){const i=t?Tp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!$e(n)){const u=f=>{l=!0;const[h,p]=$f(f,e,!0);Lt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return pt(n)&&i.set(n,yr),yr;if(ke(s))for(let u=0;u<s.length;u++){const f=wi(s[u]);Dc(f)&&(o[f]=dt)}else if(s)for(const u in s){const f=wi(u);if(Dc(f)){const h=s[u],p=o[f]=ke(h)||$e(h)?{type:h}:Lt({},h),v=p.type;let S=!1,m=!0;if(ke(v))for(let d=0;d<v.length;++d){const y=v[d],T=$e(y)&&y.name;if(T==="Boolean"){S=!0;break}else T==="String"&&(m=!1)}else S=$e(v)&&v.name==="Boolean";p[0]=S,p[1]=m,(S||st(p,"default"))&&a.push(f)}}const c=[o,a];return pt(n)&&i.set(n,c),c}function Dc(n){return n[0]!=="$"&&!Qr(n)}const Zl=n=>n==="_"||n==="_ctx"||n==="$stable",Jl=n=>ke(n)?n.map(Pn):[Pn(n)],Ap=(n,e,t)=>{if(e._n)return e;const i=kh((...r)=>Jl(e(...r)),t);return i._c=!1,i},jf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Zl(r))continue;const s=n[r];if($e(s))e[r]=Ap(r,s,i);else if(s!=null){const o=Jl(s);e[r]=()=>o}}},Yf=(n,e)=>{const t=Jl(e);n.slots.default=()=>t},Kf=(n,e,t)=>{for(const i in e)(t||!Zl(i))&&(n[i]=e[i])},wp=(n,e,t)=>{const i=n.slots=Wf();if(n.vnode.shapeFlag&32){const r=e._;r?(Kf(i,e,t),t&&cf(i,"_",r,!0)):jf(e,i)}else e&&Yf(n,e)},Cp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=dt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Kf(r,e,t):(s=!e.$stable,jf(e,r)),o=e}else e&&(Yf(n,e),o={default:1});if(s)for(const a in r)!Zl(a)&&o[a]==null&&delete r[a]},nn=Lp;function Rp(n){return Pp(n)}function Pp(n,e){const t=Po();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=yn,insertStaticContent:v}=n,S=(A,D,_,H=null,W=null,Q=null,P=void 0,R=null,Y=!!D.dynamicChildren)=>{if(A===D)return;A&&!Xr(A,D)&&(H=le(A),Ve(A,W,Q,!0),A=null),D.patchFlag===-2&&(Y=!1,D.dynamicChildren=null);const{type:$,ref:g,shapeFlag:x}=D;switch($){case Bo:m(A,D,_,H);break;case Ci:d(A,D,_,H);break;case ao:A==null&&y(D,_,H,P);break;case bt:J(A,D,_,H,W,Q,P,R,Y);break;default:x&1?I(A,D,_,H,W,Q,P,R,Y):x&6?q(A,D,_,H,W,Q,P,R,Y):(x&64||x&128)&&$.process(A,D,_,H,W,Q,P,R,Y,ne)}g!=null&&W?ns(g,A&&A.ref,Q,D||A,!D):g==null&&A&&A.ref!=null&&ns(A.ref,null,Q,A,!0)},m=(A,D,_,H)=>{if(A==null)i(D.el=a(D.children),_,H);else{const W=D.el=A.el;D.children!==A.children&&c(W,D.children)}},d=(A,D,_,H)=>{A==null?i(D.el=l(D.children||""),_,H):D.el=A.el},y=(A,D,_,H)=>{[A.el,A.anchor]=v(A.children,D,_,H,A.el,A.anchor)},T=({el:A,anchor:D},_,H)=>{let W;for(;A&&A!==D;)W=h(A),i(A,_,H),A=W;i(D,_,H)},w=({el:A,anchor:D})=>{let _;for(;A&&A!==D;)_=h(A),r(A),A=_;r(D)},I=(A,D,_,H,W,Q,P,R,Y)=>{if(D.type==="svg"?P="svg":D.type==="math"&&(P="mathml"),A==null)C(D,_,H,W,Q,P,R,Y);else{const $=A.el&&A.el._isVueCE?A.el:null;try{$&&$._beginPatch(),E(A,D,W,Q,P,R,Y)}finally{$&&$._endPatch()}}},C=(A,D,_,H,W,Q,P,R)=>{let Y,$;const{props:g,shapeFlag:x,transition:L,dirs:K}=A;if(Y=A.el=o(A.type,Q,g&&g.is,g),x&8?u(Y,A.children):x&16&&k(A.children,Y,null,H,W,ta(A,Q),P,R),K&&Fi(A,null,H,"created"),U(Y,A,A.scopeId,P,H),g){for(const Z in g)Z!=="value"&&!Qr(Z)&&s(Y,Z,null,g[Z],Q,H);"value"in g&&s(Y,"value",null,g.value,Q),($=g.onVnodeBeforeMount)&&Cn($,H,A)}K&&Fi(A,null,H,"beforeMount");const re=Dp(W,L);re&&L.beforeEnter(Y),i(Y,D,_),(($=g&&g.onVnodeMounted)||re||K)&&nn(()=>{$&&Cn($,H,A),re&&L.enter(Y),K&&Fi(A,null,H,"mounted")},W)},U=(A,D,_,H,W)=>{if(_&&p(A,_),H)for(let Q=0;Q<H.length;Q++)p(A,H[Q]);if(W){let Q=W.subTree;if(D===Q||Qf(Q.type)&&(Q.ssContent===D||Q.ssFallback===D)){const P=W.vnode;U(A,P,P.scopeId,P.slotScopeIds,W.parent)}}},k=(A,D,_,H,W,Q,P,R,Y=0)=>{for(let $=Y;$<A.length;$++){const g=A[$]=R?bi(A[$]):Pn(A[$]);S(null,g,D,_,H,W,Q,P,R)}},E=(A,D,_,H,W,Q,P)=>{const R=D.el=A.el;let{patchFlag:Y,dynamicChildren:$,dirs:g}=D;Y|=A.patchFlag&16;const x=A.props||dt,L=D.props||dt;let K;if(_&&Oi(_,!1),(K=L.onVnodeBeforeUpdate)&&Cn(K,_,D,A),g&&Fi(D,A,_,"beforeUpdate"),_&&Oi(_,!0),(x.innerHTML&&L.innerHTML==null||x.textContent&&L.textContent==null)&&u(R,""),$?b(A.dynamicChildren,$,R,_,H,ta(D,W),Q):P||j(A,D,R,null,_,H,ta(D,W),Q,!1),Y>0){if(Y&16)O(R,x,L,_,W);else if(Y&2&&x.class!==L.class&&s(R,"class",null,L.class,W),Y&4&&s(R,"style",x.style,L.style,W),Y&8){const re=D.dynamicProps;for(let Z=0;Z<re.length;Z++){const xe=re[Z],he=x[xe],Ae=L[xe];(Ae!==he||xe==="value")&&s(R,xe,he,Ae,W,_)}}Y&1&&A.children!==D.children&&u(R,D.children)}else!P&&$==null&&O(R,x,L,_,W);((K=L.onVnodeUpdated)||g)&&nn(()=>{K&&Cn(K,_,D,A),g&&Fi(D,A,_,"updated")},H)},b=(A,D,_,H,W,Q,P)=>{for(let R=0;R<D.length;R++){const Y=A[R],$=D[R],g=Y.el&&(Y.type===bt||!Xr(Y,$)||Y.shapeFlag&198)?f(Y.el):_;S(Y,$,g,null,H,W,Q,P,!0)}},O=(A,D,_,H,W)=>{if(D!==_){if(D!==dt)for(const Q in D)!Qr(Q)&&!(Q in _)&&s(A,Q,D[Q],null,W,H);for(const Q in _){if(Qr(Q))continue;const P=_[Q],R=D[Q];P!==R&&Q!=="value"&&s(A,Q,R,P,W,H)}"value"in _&&s(A,"value",D.value,_.value,W)}},J=(A,D,_,H,W,Q,P,R,Y)=>{const $=D.el=A?A.el:a(""),g=D.anchor=A?A.anchor:a("");let{patchFlag:x,dynamicChildren:L,slotScopeIds:K}=D;K&&(R=R?R.concat(K):K),A==null?(i($,_,H),i(g,_,H),k(D.children||[],_,g,W,Q,P,R,Y)):x>0&&x&64&&L&&A.dynamicChildren?(b(A.dynamicChildren,L,_,W,Q,P,R),(D.key!=null||W&&D===W.subTree)&&Zf(A,D,!0)):j(A,D,_,g,W,Q,P,R,Y)},q=(A,D,_,H,W,Q,P,R,Y)=>{D.slotScopeIds=R,A==null?D.shapeFlag&512?W.ctx.activate(D,_,H,P,Y):z(D,_,H,W,Q,P,Y):se(A,D,Y)},z=(A,D,_,H,W,Q,P)=>{const R=A.component=Vp(A,H,W);if(Of(A)&&(R.ctx.renderer=ne),Hp(R,!1,P),R.asyncDep){if(W&&W.registerDep(R,G,P),!A.el){const Y=R.subTree=mn(Ci);d(null,Y,D,_),A.placeholder=Y.el}}else G(R,A,D,_,W,Q,P)},se=(A,D,_)=>{const H=D.component=A.component;if(bp(A,D,_))if(H.asyncDep&&!H.asyncResolved){B(H,D,_);return}else H.next=D,H.update();else D.el=A.el,H.vnode=D},G=(A,D,_,H,W,Q,P)=>{const R=()=>{if(A.isMounted){let{next:x,bu:L,u:K,parent:re,vnode:Z}=A;{const ae=Jf(A);if(ae){x&&(x.el=Z.el,B(A,x,P)),ae.asyncDep.then(()=>{A.isUnmounted||R()});return}}let xe=x,he;Oi(A,!1),x?(x.el=Z.el,B(A,x,P)):x=Z,L&&oo(L),(he=x.props&&x.props.onVnodeBeforeUpdate)&&Cn(he,re,x,Z),Oi(A,!0);const Ae=ea(A),Te=A.subTree;A.subTree=Ae,S(Te,Ae,f(Te.el),le(Te),A,W,Q),x.el=Ae.el,xe===null&&Mp(A,Ae.el),K&&nn(K,W),(he=x.props&&x.props.onVnodeUpdated)&&nn(()=>Cn(he,re,x,Z),W)}else{let x;const{el:L,props:K}=D,{bm:re,m:Z,parent:xe,root:he,type:Ae}=A,Te=is(D);if(Oi(A,!1),re&&oo(re),!Te&&(x=K&&K.onVnodeBeforeMount)&&Cn(x,xe,D),Oi(A,!0),L&&ze){const ae=()=>{A.subTree=ea(A),ze(L,A.subTree,A,W,null)};Te&&Ae.__asyncHydrate?Ae.__asyncHydrate(L,A,ae):ae()}else{he.ce&&he.ce._def.shadowRoot!==!1&&he.ce._injectChildStyle(Ae);const ae=A.subTree=ea(A);S(null,ae,_,H,A,W,Q),D.el=ae.el}if(Z&&nn(Z,W),!Te&&(x=K&&K.onVnodeMounted)){const ae=D;nn(()=>Cn(x,xe,ae),W)}(D.shapeFlag&256||xe&&is(xe.vnode)&&xe.vnode.shapeFlag&256)&&A.a&&nn(A.a,W),A.isMounted=!0,D=_=H=null}};A.scope.on();const Y=A.effect=new xf(R);A.scope.off();const $=A.update=Y.run.bind(Y),g=A.job=Y.runIfDirty.bind(Y);g.i=A,g.id=A.uid,Y.scheduler=()=>$l(g),Oi(A,!0),$()},B=(A,D,_)=>{D.component=A;const H=A.vnode.props;A.vnode=D,A.next=null,Ep(A,D.props,H,_),Cp(A,D.children,_),ii(),Ec(A),ri()},j=(A,D,_,H,W,Q,P,R,Y=!1)=>{const $=A&&A.children,g=A?A.shapeFlag:0,x=D.children,{patchFlag:L,shapeFlag:K}=D;if(L>0){if(L&128){pe($,x,_,H,W,Q,P,R,Y);return}else if(L&256){fe($,x,_,H,W,Q,P,R,Y);return}}K&8?(g&16&&oe($,W,Q),x!==$&&u(_,x)):g&16?K&16?pe($,x,_,H,W,Q,P,R,Y):oe($,W,Q,!0):(g&8&&u(_,""),K&16&&k(x,_,H,W,Q,P,R,Y))},fe=(A,D,_,H,W,Q,P,R,Y)=>{A=A||yr,D=D||yr;const $=A.length,g=D.length,x=Math.min($,g);let L;for(L=0;L<x;L++){const K=D[L]=Y?bi(D[L]):Pn(D[L]);S(A[L],K,_,null,W,Q,P,R,Y)}$>g?oe(A,W,Q,!0,!1,x):k(D,_,H,W,Q,P,R,Y,x)},pe=(A,D,_,H,W,Q,P,R,Y)=>{let $=0;const g=D.length;let x=A.length-1,L=g-1;for(;$<=x&&$<=L;){const K=A[$],re=D[$]=Y?bi(D[$]):Pn(D[$]);if(Xr(K,re))S(K,re,_,null,W,Q,P,R,Y);else break;$++}for(;$<=x&&$<=L;){const K=A[x],re=D[L]=Y?bi(D[L]):Pn(D[L]);if(Xr(K,re))S(K,re,_,null,W,Q,P,R,Y);else break;x--,L--}if($>x){if($<=L){const K=L+1,re=K<g?D[K].el:H;for(;$<=L;)S(null,D[$]=Y?bi(D[$]):Pn(D[$]),_,re,W,Q,P,R,Y),$++}}else if($>L)for(;$<=x;)Ve(A[$],W,Q,!0),$++;else{const K=$,re=$,Z=new Map;for($=re;$<=L;$++){const Re=D[$]=Y?bi(D[$]):Pn(D[$]);Re.key!=null&&Z.set(Re.key,$)}let xe,he=0;const Ae=L-re+1;let Te=!1,ae=0;const me=new Array(Ae);for($=0;$<Ae;$++)me[$]=0;for($=K;$<=x;$++){const Re=A[$];if(he>=Ae){Ve(Re,W,Q,!0);continue}let _e;if(Re.key!=null)_e=Z.get(Re.key);else for(xe=re;xe<=L;xe++)if(me[xe-re]===0&&Xr(Re,D[xe])){_e=xe;break}_e===void 0?Ve(Re,W,Q,!0):(me[_e-re]=$+1,_e>=ae?ae=_e:Te=!0,S(Re,D[_e],_,null,W,Q,P,R,Y),he++)}const Fe=Te?Ip(me):yr;for(xe=Fe.length-1,$=Ae-1;$>=0;$--){const Re=re+$,_e=D[Re],He=D[Re+1],N=Re+1<g?He.el||He.placeholder:H;me[$]===0?S(null,_e,_,N,W,Q,P,R,Y):Te&&(xe<0||$!==Fe[xe]?we(_e,_,N,2):xe--)}}},we=(A,D,_,H,W=null)=>{const{el:Q,type:P,transition:R,children:Y,shapeFlag:$}=A;if($&6){we(A.component.subTree,D,_,H);return}if($&128){A.suspense.move(D,_,H);return}if($&64){P.move(A,D,_,ne);return}if(P===bt){i(Q,D,_);for(let x=0;x<Y.length;x++)we(Y[x],D,_,H);i(A.anchor,D,_);return}if(P===ao){T(A,D,_);return}if(H!==2&&$&1&&R)if(H===0)R.beforeEnter(Q),i(Q,D,_),nn(()=>R.enter(Q),W);else{const{leave:x,delayLeave:L,afterLeave:K}=R,re=()=>{A.ctx.isUnmounted?r(Q):i(Q,D,_)},Z=()=>{Q._isLeaving&&Q[Gh](!0),x(Q,()=>{re(),K&&K()})};L?L(Q,re,Z):Z()}else i(Q,D,_)},Ve=(A,D,_,H=!1,W=!1)=>{const{type:Q,props:P,ref:R,children:Y,dynamicChildren:$,shapeFlag:g,patchFlag:x,dirs:L,cacheIndex:K}=A;if(x===-2&&(W=!1),R!=null&&(ii(),ns(R,null,_,A,!0),ri()),K!=null&&(D.renderCache[K]=void 0),g&256){D.ctx.deactivate(A);return}const re=g&1&&L,Z=!is(A);let xe;if(Z&&(xe=P&&P.onVnodeBeforeUnmount)&&Cn(xe,D,A),g&6)tt(A.component,_,H);else{if(g&128){A.suspense.unmount(_,H);return}re&&Fi(A,null,D,"beforeUnmount"),g&64?A.type.remove(A,D,_,ne,H):$&&!$.hasOnce&&(Q!==bt||x>0&&x&64)?oe($,D,_,!1,!0):(Q===bt&&x&384||!W&&g&16)&&oe(Y,D,_),H&&Ze(A)}(Z&&(xe=P&&P.onVnodeUnmounted)||re)&&nn(()=>{xe&&Cn(xe,D,A),re&&Fi(A,null,D,"unmounted")},_)},Ze=A=>{const{type:D,el:_,anchor:H,transition:W}=A;if(D===bt){et(_,H);return}if(D===ao){w(A);return}const Q=()=>{r(_),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(A.shapeFlag&1&&W&&!W.persisted){const{leave:P,delayLeave:R}=W,Y=()=>P(_,Q);R?R(A.el,Q,Y):Y()}else Q()},et=(A,D)=>{let _;for(;A!==D;)_=h(A),r(A),A=_;r(D)},tt=(A,D,_)=>{const{bum:H,scope:W,job:Q,subTree:P,um:R,m:Y,a:$}=A;Ic(Y),Ic($),H&&oo(H),W.stop(),Q&&(Q.flags|=8,Ve(P,A,D,_)),R&&nn(R,D),nn(()=>{A.isUnmounted=!0},D)},oe=(A,D,_,H=!1,W=!1,Q=0)=>{for(let P=Q;P<A.length;P++)Ve(A[P],D,_,H,W)},le=A=>{if(A.shapeFlag&6)return le(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const D=h(A.anchor||A.el),_=D&&D[Vh];return _?h(_):D};let ye=!1;const Be=(A,D,_)=>{A==null?D._vnode&&Ve(D._vnode,null,null,!0):S(D._vnode||null,A,D,null,null,null,_),D._vnode=A,ye||(ye=!0,Ec(),Lf(),ye=!1)},ne={p:S,um:Ve,m:we,r:Ze,mt:z,mc:k,pc:j,pbc:b,n:le,o:n};let ce,ze;return e&&([ce,ze]=e(ne)),{render:Be,hydrate:ce,createApp:cp(Be,ce)}}function ta({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Oi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Dp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Zf(n,e,t=!1){const i=n.children,r=e.children;if(ke(i)&&ke(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=bi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Zf(o,a)),a.type===Bo&&a.patchFlag!==-1&&(a.el=o.el),a.type===Ci&&!a.el&&(a.el=o.el)}}function Ip(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Jf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jf(e)}function Ic(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Qf=n=>n.__isSuspense;function Lp(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):zh(n)}const bt=Symbol.for("v-fgt"),Bo=Symbol.for("v-txt"),Ci=Symbol.for("v-cmt"),ao=Symbol.for("v-stc"),os=[];let rn=null;function Pe(n=!1){os.push(rn=n?null:[])}function Up(){os.pop(),rn=os[os.length-1]||null}let ms=1;function Lc(n,e=!1){ms+=n,n<0&&rn&&e&&(rn.hasOnce=!0)}function ed(n){return n.dynamicChildren=ms>0?rn||yr:null,Up(),ms>0&&rn&&rn.push(n),n}function Le(n,e,t,i,r,s){return ed(F(n,e,t,i,r,s,!0))}function Mr(n,e,t,i,r){return ed(mn(n,e,t,i,r,!0))}function td(n){return n?n.__v_isVNode===!0:!1}function Xr(n,e){return n.type===e.type&&n.key===e.key}const nd=({key:n})=>n??null,lo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||_t(n)||$e(n)?{i:hn,r:n,k:e,f:!!t}:n:null);function F(n,e=null,t=null,i=0,r=null,s=n===bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&nd(e),ref:e&&lo(e),scopeId:Nf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:hn};return a?(Ql(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),ms>0&&!o&&rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rn.push(l),l}const mn=Np;function Np(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===tp)&&(n=Ci),td(n)){const a=Ir(n,e,!0);return t&&Ql(a,t),ms>0&&!s&&rn&&(a.shapeFlag&6?rn[rn.indexOf(n)]=a:rn.push(a)),a.patchFlag=-2,a}if(qp(n)&&(n=n.__vccOpts),e){e=Fp(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=qt(a)),pt(l)&&(Io(l)&&!ke(l)&&(l=Lt({},l)),e.style=un(l))}const o=Rt(n)?1:Qf(n)?128:Hh(n)?64:pt(n)?4:$e(n)?2:0;return F(n,e,t,i,r,o,s,!0)}function Fp(n){return n?Io(n)||Xf(n)?Lt({},n):n:null}function Ir(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Bp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&nd(c),ref:e&&e.ref?t&&s?ke(s)?s.concat(lo(e)):[s,lo(e)]:lo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==bt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ir(n.ssContent),ssFallback:n.ssFallback&&Ir(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&jl(u,l.clone(u)),u}function Ar(n=" ",e=0){return mn(Bo,null,n,e)}function Op(n,e){const t=mn(ao,null,n);return t.staticCount=e,t}function xt(n="",e=!1){return e?(Pe(),Mr(Ci,null,n)):mn(Ci,null,n)}function Pn(n){return n==null||typeof n=="boolean"?mn(Ci):ke(n)?mn(bt,null,n.slice()):td(n)?bi(n):mn(Bo,null,String(n))}function bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ir(n)}function Ql(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ql(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Xf(e)?e._ctx=hn:r===3&&hn&&(hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:hn},t=32):(e=String(e),i&64?(t=16,e=[Ar(e)]):t=8);n.children=e,n.shapeFlag|=t}function Bp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=qt([e.class,i.class]));else if(r==="style")e.style=un([e.style,i.style]);else if(Ao(r)){const s=e[r],o=i[r];o&&s!==o&&!(ke(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Cn(n,e,t,i=null){On(n,e,7,[t,i])}const zp=kf();let kp=0;function Vp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||zp,s={uid:kp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$f(i,r),emitsOptions:Hf(i,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=gp.bind(null,s),n.ce&&n.ce(s),s}let jt=null;const id=()=>jt||hn;let yo,Ha;{const n=Po(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};yo=e("__VUE_INSTANCE_SETTERS__",t=>jt=t),Ha=e("__VUE_SSR_SETTERS__",t=>xs=t)}const Rs=n=>{const e=jt;return yo(n),n.scope.on(),()=>{n.scope.off(),yo(e)}},Uc=()=>{jt&&jt.scope.off(),yo(null)};function rd(n){return n.vnode.shapeFlag&4}let xs=!1;function Hp(n,e=!1,t=!1){e&&Ha(e);const{props:i,children:r}=n.vnode,s=rd(n);yp(n,i,s,e),wp(n,r,t||e);const o=s?Gp(n,e):void 0;return e&&Ha(!1),o}function Gp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,np);const{setup:i}=t;if(i){ii();const r=n.setupContext=i.length>1?Xp(n):null,s=Rs(n),o=Cs(i,n,0,[n.props,r]),a=sf(o);if(ri(),s(),(a||n.sp)&&!is(n)&&Ff(n),a){if(o.then(Uc,Uc),e)return o.then(l=>{Nc(n,l,e)}).catch(l=>{Lo(l,n,0)});n.asyncDep=o}else Nc(n,o,e)}else sd(n,e)}function Nc(n,e,t){$e(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=Pf(e)),sd(n,t)}let Fc;function sd(n,e,t){const i=n.type;if(!n.render){if(!e&&Fc&&!i.render){const r=i.template||Yl(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Lt(Lt({isCustomElement:s,delimiters:a},o),l);i.render=Fc(r,c)}}n.render=i.render||yn}{const r=Rs(n);ii();try{ip(n)}finally{ri(),r()}}}const Wp={get(n,e){return zt(n,"get",""),n[e]}};function Xp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Wp),slots:n.slots,emit:n.emit,expose:e}}function zo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Pf(Xl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in rs)return rs[t](n)},has(e,t){return t in e||t in rs}})):n.proxy}function qp(n){return $e(n)&&"__vccOpts"in n}const Qn=(n,e)=>Uh(n,e,xs),$p="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ga;const Oc=typeof window<"u"&&window.trustedTypes;if(Oc)try{Ga=Oc.createPolicy("vue",{createHTML:n=>n})}catch{}const od=Ga?n=>Ga.createHTML(n):n=>n,jp="http://www.w3.org/2000/svg",Yp="http://www.w3.org/1998/Math/MathML",qn=typeof document<"u"?document:null,Bc=qn&&qn.createElement("template"),Kp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?qn.createElementNS(jp,n):e==="mathml"?qn.createElementNS(Yp,n):t?qn.createElement(n,{is:t}):qn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>qn.createTextNode(n),createComment:n=>qn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>qn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Bc.innerHTML=od(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Bc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Zp=Symbol("_vtc");function Jp(n,e,t){const i=n[Zp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const zc=Symbol("_vod"),Qp=Symbol("_vsh"),em=Symbol(""),tm=/(?:^|;)\s*display\s*:/;function nm(n,e,t){const i=n.style,r=Rt(t);let s=!1;if(t&&!r){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&co(i,a,"")}else for(const o in e)t[o]==null&&co(i,o,"");for(const o in t)o==="display"&&(s=!0),co(i,o,t[o])}else if(r){if(e!==t){const o=i[em];o&&(t+=";"+o),i.cssText=t,s=tm.test(t)}}else e&&n.removeAttribute("style");zc in n&&(n[zc]=s?i.display:"",n[Qp]&&(i.display="none"))}const kc=/\s*!important$/;function co(n,e,t){if(ke(t))t.forEach(i=>co(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=im(n,e);kc.test(t)?n.setProperty(Di(i),t.replace(kc,""),"important"):n[i]=t}}const Vc=["Webkit","Moz","ms"],na={};function im(n,e){const t=na[e];if(t)return t;let i=wi(e);if(i!=="filter"&&i in n)return na[e]=i;i=lf(i);for(let r=0;r<Vc.length;r++){const s=Vc[r]+i;if(s in n)return na[e]=s}return e}const Hc="http://www.w3.org/1999/xlink";function Gc(n,e,t,i,r,s=rh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Hc,e.slice(6,e.length)):n.setAttributeNS(Hc,e,t):t==null||s&&!uf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Fn(t)?String(t):t)}function Wc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?od(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=uf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Mi(n,e,t,i){n.addEventListener(e,t,i)}function rm(n,e,t,i){n.removeEventListener(e,t,i)}const Xc=Symbol("_vei");function sm(n,e,t,i,r=null){const s=n[Xc]||(n[Xc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=om(e);if(i){const c=s[e]=cm(i,r);Mi(n,a,c,l)}else o&&(rm(n,a,o,l),s[e]=void 0)}}const qc=/(?:Once|Passive|Capture)$/;function om(n){let e;if(qc.test(n)){e={};let i;for(;i=n.match(qc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Di(n.slice(2)),e]}let ia=0;const am=Promise.resolve(),lm=()=>ia||(am.then(()=>ia=0),ia=Date.now());function cm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;On(um(i,t.value),e,5,[i])};return t.value=n,t.attached=lm(),t}function um(n,e){if(ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const $c=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,fm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Jp(n,i,o):e==="style"?nm(n,t,i):Ao(e)?Fl(e)||sm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dm(n,e,i,o))?(Wc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Rt(i))?Wc(n,wi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Gc(n,e,i,o))};function dm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&$c(e)&&$e(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return $c(e)&&Rt(t)?!1:e in n}const Lr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ke(e)?t=>oo(e,t):e};function hm(n){n.target.composing=!0}function jc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ei=Symbol("_assign");function Yc(n,e,t){return e&&(n=n.trim()),t&&(n=Ro(n)),n}const Ut={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[ei]=Lr(r);const s=i||r.props&&r.props.type==="number";Mi(n,e?"change":"input",o=>{o.target.composing||n[ei](Yc(n.value,t,s))}),(t||s)&&Mi(n,"change",()=>{n.value=Yc(n.value,t,s)}),e||(Mi(n,"compositionstart",hm),Mi(n,"compositionend",jc),Mi(n,"change",jc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[ei]=Lr(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Ro(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Kc={deep:!0,created(n,e,t){n[ei]=Lr(t),Mi(n,"change",()=>{const i=n._modelValue,r=gs(n),s=n.checked,o=n[ei];if(ke(i)){const a=Bl(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Br(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(ad(n,s))})},mounted:Zc,beforeUpdate(n,e,t){n[ei]=Lr(t),Zc(n,e,t)}};function Zc(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(ke(e))r=Bl(e,i.props.value)>-1;else if(Br(e))r=e.has(i.props.value);else{if(e===t)return;r=ws(e,ad(n,!0))}n.checked!==r&&(n.checked=r)}const Jc={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=Br(e);Mi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Ro(gs(o)):gs(o));n[ei](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,ql(()=>{n._assigning=!1})}),n[ei]=Lr(i)},mounted(n,{value:e}){Qc(n,e)},beforeUpdate(n,e,t){n[ei]=Lr(t)},updated(n,{value:e}){n._assigning||Qc(n,e)}};function Qc(n,e){const t=n.multiple,i=ke(e);if(!(t&&!i&&!Br(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=gs(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Bl(e,a)>-1}else o.selected=e.has(a);else if(ws(gs(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function gs(n){return"_value"in n?n._value:n.value}function ad(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const pm=["ctrl","shift","alt","meta"],mm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>pm.some(t=>n[`${t}Key`]&&!e.includes(t))},Nt=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=mm[e[o]];if(a&&a(r,e))return}return n(r,...s)})},xm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gm=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=r=>{if(!("key"in r))return;const s=Di(r.key);if(e.some(o=>o===s||xm[o]===s))return n(r)})},_m=Lt({patchProp:fm},Kp);let eu;function vm(){return eu||(eu=Rp(_m))}const Sm=(...n)=>{const e=vm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Mm(i);if(!r)return;const s=e._component;!$e(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,bm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function bm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Mm(n){return Rt(n)?document.querySelector(n):n}var ym=!1;/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ld;const ko=n=>ld=n,cd=Symbol();function Wa(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var as;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(as||(as={}));function Em(){const n=pf(!0),e=n.run(()=>Ue({}));let t=[],i=[];const r=Xl({install(s){ko(r),r._a=s,s.provide(cd,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return!this._a&&!ym?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const ud=()=>{};function tu(n,e,t,i=ud){n.push(e);const r=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),i())};return!t&&mf()&&oh(r),r}function nr(n,...e){n.slice().forEach(t=>{t(...e)})}const Tm=n=>n(),nu=Symbol(),ra=Symbol();function Xa(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];Wa(r)&&Wa(i)&&n.hasOwnProperty(t)&&!_t(i)&&!Jn(i)?n[t]=Xa(r,i):n[t]=i}return n}const Am=Symbol();function wm(n){return!Wa(n)||!n.hasOwnProperty(Am)}const{assign:gi}=Object;function Cm(n){return!!(_t(n)&&n.effect)}function Rm(n,e,t,i){const{state:r,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=r?r():{});const u=Ph(t.state.value[n]);return gi(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Xl(Qn(()=>{ko(t);const p=t._s.get(n);return o[h].call(p,p)})),f),{}))}return l=fd(n,c,e,t,i,!0),l}function fd(n,e,t={},i,r,s){let o;const a=gi({actions:{}},t),l={deep:!0};let c,u,f=[],h=[],p;const v=i.state.value[n];!s&&!v&&(i.state.value[n]={}),Ue({});let S;function m(k){let E;c=u=!1,typeof k=="function"?(k(i.state.value[n]),E={type:as.patchFunction,storeId:n,events:p}):(Xa(i.state.value[n],k),E={type:as.patchObject,payload:k,storeId:n,events:p});const b=S=Symbol();ql().then(()=>{S===b&&(c=!0)}),u=!0,nr(f,E,i.state.value[n])}const d=s?function(){const{state:E}=t,b=E?E():{};this.$patch(O=>{gi(O,b)})}:ud;function y(){o.stop(),f=[],h=[],i._s.delete(n)}const T=(k,E="")=>{if(nu in k)return k[ra]=E,k;const b=function(){ko(i);const O=Array.from(arguments),J=[],q=[];function z(B){J.push(B)}function se(B){q.push(B)}nr(h,{args:O,name:b[ra],store:I,after:z,onError:se});let G;try{G=k.apply(this&&this.$id===n?this:I,O)}catch(B){throw nr(q,B),B}return G instanceof Promise?G.then(B=>(nr(J,B),B)).catch(B=>(nr(q,B),Promise.reject(B))):(nr(J,G),G)};return b[nu]=!0,b[ra]=E,b},w={_p:i,$id:n,$onAction:tu.bind(null,h),$patch:m,$reset:d,$subscribe(k,E={}){const b=tu(f,k,E.detached,()=>O()),O=o.run(()=>Sn(()=>i.state.value[n],J=>{(E.flush==="sync"?u:c)&&k({storeId:n,type:as.direct,events:p},J)},gi({},l,E)));return b},$dispose:y},I=Pr(w);i._s.set(n,I);const U=(i._a&&i._a.runWithContext||Tm)(()=>i._e.run(()=>(o=pf()).run(()=>e({action:T}))));for(const k in U){const E=U[k];if(_t(E)&&!Cm(E)||Jn(E))s||(v&&wm(E)&&(_t(E)?E.value=v[k]:Xa(E,v[k])),i.state.value[n][k]=E);else if(typeof E=="function"){const b=T(E,k);U[k]=b,a.actions[k]=E}}return gi(I,U),gi(it(I),U),Object.defineProperty(I,"$state",{get:()=>i.state.value[n],set:k=>{m(E=>{gi(E,k)})}}),i._p.forEach(k=>{gi(I,o.run(()=>k({store:I,app:i._a,pinia:i,options:a})))}),v&&s&&t.hydrate&&t.hydrate(I.$state,v),c=!0,u=!0,I}/*! #__NO_SIDE_EFFECTS__ */function Pm(n,e,t){let i,r;const s=typeof e=="function";typeof n=="string"?(i=n,r=s?t:e):(r=n,i=n.id);function o(a,l){const c=fp();return a=a||(c?ss(cd,null):null),a&&ko(a),a=ld,a._s.has(i)||(s?fd(i,e,r,a):Rm(i,r,a)),a._s.get(i)}return o.$id=i,o}function _s(){return"id_"+Math.random().toString(36).substr(2,9)+"_"+Date.now()}function uo(n){return new Promise((e,t)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=t,i.readAsDataURL(n)})}const wr=Ue([]);function vr(n,e="info",t=3e3){console.log("📢 showToast called:",{message:n,type:e,timeout:t,currentToastsCount:wr.value.length});const i=_s(),r={id:i,message:n,type:e,timeout:t};return wr.value.push(r),console.log("📢 Toast added to array. New count:",wr.value.length,"Toast:",r),t>0&&setTimeout(()=>{console.log("⏰ Removing toast after timeout:",i),Dm(i)},t),i}function Dm(n){const e=wr.value.findIndex(t=>t.id===n);e>-1&&wr.value.splice(e,1)}const Bs="scene360_project";class Dn{static saveProject(e){try{const t=JSON.stringify(e);localStorage.setItem(Bs,t),console.log(`✅ Project saved: ${e.scenes.length} scenes`)}catch(t){if(t.name==="QuotaExceededError"){console.error("❌ localStorage full - trying to save without images");const i={...e,scenes:e.scenes.map(s=>({...s,imageUrl:""}))},r=JSON.stringify(i);localStorage.setItem(Bs,r),console.log("⚠️ Project saved without images due to storage limit")}else console.error("❌ Error saving project:",t)}}static loadProject(){try{const e=localStorage.getItem(Bs);if(!e)return console.log("⚠️ No project found in localStorage"),null;const t=JSON.parse(e);console.log(`✅ Loaded project: ${t.scenes.length} scenes`);const i=t.scenes.filter(r=>!r.imageUrl);return i.length>0&&console.log(`⚠️ ${i.length} scenes need images to be re-uploaded`),t}catch(e){return console.error("❌ Error loading project:",e),null}}static async loadProjectAsync(){return this.loadProject()}static deleteProject(){try{localStorage.removeItem(Bs),console.log("✅ Project deleted")}catch(e){console.error("Error deleting project:",e)}}static getProjectsList(){const e=this.loadProject();return e?[{id:e.id,name:e.name,lastModified:e.updatedAt||Date.now()}]:[]}static importProjectFromJSON(e){try{const t=JSON.parse(e);return t.project||t}catch(t){return console.error("Error importing project:",t),null}}}const Qi=Pm("project",()=>{const n=Ue(null),e=Ue(""),t=()=>{if(!n.value){console.error("❌ Cannot autoSave: project is null");return}const S=JSON.parse(JSON.stringify(n.value));console.log(`💾 AUTO-SAVING: ${S.scenes.length} scenes`),Dn.saveProject(S)},i=Qn(()=>n.value?n.value.scenes.find(S=>S.id===e.value):null),r=Qn(()=>{var S;return((S=n.value)==null?void 0:S.scenes)||[]});return{project:n,activeSceneId:e,activeScene:i,allScenes:r,createNewProject:(S,m="")=>{const d={id:_s(),name:S,description:m,scenes:[],activeSceneId:"",createdAt:Date.now(),updatedAt:Date.now()};return n.value=d,t(),d},loadProject:S=>{var y;const m=(S.scenes||[]).map(T=>{const w=(T.hotspots||[]).map(I=>({...I,radius:typeof I.radius=="number"&&Number.isFinite(I.radius)?I.radius:10,color:I.color||"#ff0000",visible:I.visible!==!1,hideCircle:I.hideCircle??!1,showIcon:I.showIcon??!0,iconSize:typeof I.iconSize=="number"&&Number.isFinite(I.iconSize)?I.iconSize:12,content:I.content||{}}));return{...T,hotspots:w}}),d={...S,scenes:m};n.value=d,e.value=d.activeSceneId||((y=m[0])==null?void 0:y.id)||"",d.activeSceneId=e.value},addScene:(S,m,d,y)=>{if(!n.value)return console.error("❌ Cannot add scene: project is null"),null;const T={id:_s(),name:S,description:m,imageUrl:d,imageFileName:y,hotspots:[],createdAt:Date.now(),updatedAt:Date.now()};return n.value.scenes.push(T),n.value.updatedAt=Date.now(),console.log(`✅ Scene added: ${S}. Total in memory: ${n.value.scenes.length} scenes`),e.value||(e.value=T.id,n.value.activeSceneId=T.id),console.log("🔄 Triggering autoSave..."),t(),console.log(`📝 After autoSave, project has ${n.value.scenes.length} scenes`),T},deleteScene:S=>{var d;if(!n.value)return;const m=n.value.scenes.findIndex(y=>y.id===S);m!==-1&&(n.value.scenes.splice(m,1),n.value.updatedAt=Date.now(),e.value===S&&(e.value=((d=n.value.scenes[0])==null?void 0:d.id)||"",n.value.activeSceneId=e.value),t())},renameScene:(S,m)=>{if(!n.value)return;const d=n.value.scenes.find(y=>y.id===S);d&&(d.name=m,d.updatedAt=Date.now(),n.value.updatedAt=Date.now(),t())},setActiveScene:S=>{n.value&&(e.value=S,n.value.activeSceneId=S,n.value.updatedAt=Date.now())},addHotspot:S=>{i.value&&(i.value.hotspots.push(S),i.value.updatedAt=Date.now(),n.value&&(n.value.updatedAt=Date.now(),t()))},updateHotspot:(S,m,d)=>{if(!n.value)return;const y=n.value.scenes.find(w=>w.id===S);if(!y)return;const T=y.hotspots.find(w=>w.id===m);T&&(Object.assign(T,d),y.updatedAt=Date.now(),n.value.updatedAt=Date.now(),t())},deleteHotspot:(S,m)=>{if(!n.value)return;const d=n.value.scenes.find(T=>T.id===S);if(!d)return;const y=d.hotspots.findIndex(T=>T.id===m);y!==-1&&(d.hotspots.splice(y,1),d.updatedAt=Date.now(),n.value.updatedAt=Date.now(),t())},reorderScenes:(S,m)=>{if(!n.value)return;const d=n.value.scenes,[y]=d.splice(S,1);d.splice(m,0,y),n.value.updatedAt=Date.now(),t(),console.log(`✅ Scène "${y.name}" déplacée de ${S} à ${m}`)}}}),Im=""+new URL("Logo-CEN-PC-2025-v3-36323b44.jpg",import.meta.url).href,Lm={class:"home-screen"},Um={class:"welcome-card"},Nm={class:"actions"},Fm={class:"modal"},Om={class:"modal-actions"},Bm=Ii({__name:"HomeScreen",emits:["create-project","load-project"],setup(n,{emit:e}){const t=e,i=Ue(!1),r=Ue(""),s=Ue(""),o=Ue(),a=Ue(null),l=()=>{r.value.trim()&&(t("create-project",r.value,s.value),i.value=!1,r.value="",s.value="")},c=()=>{var f;(f=o.value)==null||f.click()},u=f=>{var v;const h=(v=f.target.files)==null?void 0:v[0];if(!h)return;const p=new FileReader;p.onload=S=>{var y;const m=(y=S.target)==null?void 0:y.result,d=Dn.importProjectFromJSON(m);d&&(t("load-project",d),Dn.saveProject(d),a.value=d)},p.readAsText(h)};return No(()=>{const f=Dn.loadProject();f&&(a.value=f)}),(f,h)=>(Pe(),Le("div",Lm,[F("div",Um,[h[5]||(h[5]=F("h1",null,"360° Scene Editor",-1)),h[6]||(h[6]=F("p",null,"Créez des scènes interactives 360° avec des points d'intérêt cliquables interactifs.",-1)),F("div",Nm,[F("button",{onClick:h[0]||(h[0]=p=>i.value=!0),class:"btn btn-primary"}," ➕ Nouveau projet "),F("button",{onClick:c,class:"btn btn-secondary"}," 📂 Importer un projet (.json) ")]),h[7]||(h[7]=F("div",{class:"credits"},[F("a",{href:"https://pedagogie.ac-montpellier.fr/ressources-et-formation-du-cercle-detude-numerique-physique-chimie",target:"_blank",rel:"noopener noreferrer",class:"logo-link",title:"Vers la rubrique du CEN-PC sur le portail pédagogique de l'académie de Montpellier (PPA)"},[F("img",{src:Im,alt:"CEN-PC Logo",class:"logo"})]),F("p",null,"par C. HEYREND-CASANOVAS pour le CEN-PC de Montpellier"),F("p",null,"v-12-2025")],-1)),F("input",{ref_key:"fileInput",ref:o,type:"file",accept:".json",style:{display:"none"},onChange:u},null,544)]),i.value?(Pe(),Le("div",{key:0,class:"modal-overlay",onClick:h[4]||(h[4]=Nt(p=>i.value=!1,["self"]))},[F("div",Fm,[h[8]||(h[8]=F("h2",null,"Créer un Nouveau Projet",-1)),Tt(F("input",{"onUpdate:modelValue":h[1]||(h[1]=p=>r.value=p),type:"text",placeholder:"Nom du projet",class:"input",onKeyup:gm(l,["enter"])},null,544),[[Ut,r.value]]),Tt(F("textarea",{"onUpdate:modelValue":h[2]||(h[2]=p=>s.value=p),placeholder:"Description (optionnel)",class:"input",rows:"3"},null,512),[[Ut,s.value]]),F("div",Om,[F("button",{onClick:h[3]||(h[3]=p=>i.value=!1),class:"btn btn-secondary"},"Annuler"),F("button",{onClick:l,class:"btn btn-primary"},"Créer")])])])):xt("",!0)]))}});const Li=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},zm=Li(Bm,[["__scopeId","data-v-35474321"]]),km={class:"project-header"},Vm={class:"header-content"},Hm=Ii({__name:"ProjectHeader",setup(n){const e=Qi(),t=()=>{e.project=null},i=()=>{if(!e.project)return;const r=JSON.stringify(e.project,null,2),s=new Blob([r],{type:"application/json"}),o=URL.createObjectURL(s),a=document.createElement("a");a.href=o,a.download=`${e.project.name}.json`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(o)};return(r,s)=>{var o,a;return Pe(),Le("div",km,[F("div",Vm,[F("h2",null,gt((o=Qe(e).project)==null?void 0:o.name),1),F("p",null,gt((a=Qe(e).project)==null?void 0:a.description),1)]),F("div",{class:"header-actions"},[F("button",{onClick:t,class:"btn-small",title:"Retour à l'accueil"},"🏠 Accueil"),F("button",{onClick:i,class:"btn-small btn-save",title:"Sauvegarder le projet"},"💾 Sauvegarder le projet")])])}}});const Gm=Li(Hm,[["__scopeId","data-v-9b3c4c79"]]),Wm={class:"list-header"},Xm={class:"scenes-container"},qm=["onDragstart","onDragover","onDrop"],$m=["onClick","onContextmenu"],jm=["src","alt"],Ym={key:1,class:"no-image"},Km=["onClick"],Zm={class:"scene-name"},Jm={class:"scene-hotspots"},Qm=["onClick"],e0=["onClick"],t0={class:"modal delete-modal"},n0={class:"modal-actions"},i0={class:"modal"},r0={key:0,class:"preview-text"},s0={class:"modal-actions"},o0=["disabled"],a0=Ii({__name:"SceneList",setup(n){const e=Qi(),t=Ue(!1),i=Ue(""),r=Ue(""),s=Ue(""),o=Ue(""),a=Ue(),l=Ue(),c=Ue(null),u=Ue(""),f=Ue(!1),h=Ue(null),p=Ue(null),v=Ue(null),S=q=>{e.setActiveScene(q),c.value=null},m=async()=>{!i.value||!s.value||(console.log("Adding scene:",i.value),e.addScene(i.value,r.value,s.value,o.value),t.value=!1,i.value="",r.value="",s.value="",o.value="")},d=async q=>{var se;const z=(se=q.target.files)==null?void 0:se[0];z&&(o.value=z.name,s.value=await uo(z))},y=async q=>{var se;const z=(se=q.dataTransfer)==null?void 0:se.files;z&&(o.value=z[0].name,s.value=await uo(z[0]))},T=q=>{var z;u.value=q,(z=l.value)==null||z.click()},w=async q=>{var B;const z=(B=q.target.files)==null?void 0:B[0];if(!z||!u.value)return;const se=await uo(z),G=e.allScenes.find(j=>j.id===u.value);G&&(G.imageUrl=se,G.imageFileName=z.name,G.updatedAt=Date.now(),e.project.updatedAt=Date.now(),e.addHotspot({id:"",x:0,y:0,type:"text",content:""}),console.log(`✅ Image re-uploaded for scene: ${G.name}`)),u.value="",l.value&&(l.value.value="")},I=(q,z)=>{c.value={left:q.clientX+"px",top:q.clientY+"px",sceneId:z}},C=async q=>{const z=e.allScenes.find(G=>G.id===q);if(!z)return;const se=prompt("Nouveau nom:",z.name);se&&(console.log("Renaming scene to:",se),e.renameScene(q,se)),c.value=null},U=q=>{const z=e.allScenes.find(se=>se.id===q);z&&(h.value=z,f.value=!0,c.value=null)},k=()=>{h.value&&(console.log("Deleting scene:",h.value.id),e.deleteScene(h.value.id),f.value=!1,h.value=null)},E=(q,z)=>{p.value=z,q.dataTransfer&&(q.dataTransfer.effectAllowed="move")},b=(q,z)=>{q.preventDefault(),v.value=z},O=q=>{p.value!==null&&p.value!==q&&e.reorderScenes(p.value,q),p.value=null,v.value=null},J=()=>{p.value=null,v.value=null};return document.addEventListener("click",()=>{c.value=null}),(q,z)=>{var se;return Pe(),Le("div",{class:"scene-list",onWheel:z[11]||(z[11]=Nt(()=>{},["stop"]))},[F("div",Wm,[z[12]||(z[12]=F("h3",null,"Scènes",-1)),F("button",{onClick:z[0]||(z[0]=G=>t.value=!0),class:"btn-add",title:"Ajouter une scène"},"➕")]),F("div",Xm,[(Pe(!0),Le(bt,null,Si(Qe(e).allScenes,(G,B)=>(Pe(),Le("div",{key:G.id,class:qt(["scene-item",{active:G.id===Qe(e).activeSceneId,dragging:p.value===B}]),draggable:"true",onDragstart:j=>E(j,B),onDragover:Nt(j=>b(j,B),["prevent"]),onDrop:Nt(j=>O(B),["prevent"]),onDragend:J},[z[14]||(z[14]=F("div",{class:"drag-handle",title:"Glisser pour réorganiser"},"⋮⋮",-1)),F("div",{class:"scene-thumbnail",onClick:j=>S(G.id),onContextmenu:Nt(j=>I(j,G.id),["prevent"])},[G.imageUrl?(Pe(),Le("img",{key:0,src:G.imageUrl,alt:G.name},null,8,jm)):(Pe(),Le("div",Ym,[...z[13]||(z[13]=[F("span",null,"📸",-1),F("p",null,"Image manquante",-1)])]))],40,$m),F("div",{class:"scene-info",onClick:j=>S(G.id)},[F("div",Zm,gt(G.name),1),F("div",Jm,gt(G.hotspots.length)+" points",1)],8,Km),G.imageUrl?xt("",!0):(Pe(),Le("button",{key:0,onClick:Nt(j=>T(G.id),["stop"]),class:"btn-reupload",title:"Re-uploader l'image"}," 📤 ",8,Qm)),F("button",{onClick:Nt(j=>U(G.id),["stop"]),class:"btn-delete",title:"Supprimer la scène"}," ✕ ",8,e0)],42,qm))),128)),F("input",{ref_key:"reuploadInput",ref:l,type:"file",accept:"image/*",style:{display:"none"},onChange:w},null,544)]),c.value?(Pe(),Le("div",{key:0,class:"context-menu",style:un(c.value)},[F("button",{onClick:z[1]||(z[1]=G=>C(c.value.sceneId)),class:"menu-item"},"✏️ Renommer"),F("button",{onClick:z[2]||(z[2]=G=>U(c.value.sceneId)),class:"menu-item danger"},"🗑️ Supprimer")],4)):xt("",!0),f.value?(Pe(),Le("div",{key:1,class:"modal-overlay",onClick:z[4]||(z[4]=Nt(G=>f.value=!1,["self"]))},[F("div",t0,[z[17]||(z[17]=F("h3",null,"⚠️ Confirmer la suppression",-1)),F("p",null,[z[15]||(z[15]=Ar("Êtes-vous sûr de vouloir supprimer la scène ",-1)),F("strong",null,gt((se=h.value)==null?void 0:se.name),1),z[16]||(z[16]=Ar(" ?",-1))]),z[18]||(z[18]=F("p",{class:"warning-text"},"Cette action est irréversible.",-1)),F("div",n0,[F("button",{onClick:z[3]||(z[3]=G=>f.value=!1),class:"btn-secondary"},"Annuler"),F("button",{onClick:k,class:"btn-danger"},"Supprimer")])])])):xt("",!0),t.value?(Pe(),Le("div",{key:2,class:"modal-overlay",onClick:z[10]||(z[10]=Nt(G=>t.value=!1,["self"]))},[F("div",i0,[z[19]||(z[19]=F("h3",null,"Ajouter une Scène 360°",-1)),Tt(F("input",{"onUpdate:modelValue":z[5]||(z[5]=G=>i.value=G),type:"text",placeholder:"Nom de la scène",class:"input"},null,512),[[Ut,i.value]]),Tt(F("textarea",{"onUpdate:modelValue":z[6]||(z[6]=G=>r.value=G),placeholder:"Description",class:"input",rows:"2"},null,512),[[Ut,r.value]]),F("div",{class:"upload-area",onDrop:y,onDragover:z[8]||(z[8]=Nt(()=>{},["prevent"]))},[F("input",{ref_key:"fileInput",ref:a,type:"file",accept:"image/*",onChange:d,style:{display:"none"}},null,544),F("button",{onClick:z[7]||(z[7]=G=>{var B;return(B=a.value)==null?void 0:B.click()}),class:"upload-btn"}," 📸 Sélectionner Image 360° "),s.value?(Pe(),Le("p",r0,"✓ Image chargée")):xt("",!0)],32),F("div",s0,[F("button",{onClick:z[9]||(z[9]=G=>t.value=!1),class:"btn-secondary"},"Annuler"),F("button",{onClick:m,disabled:!i.value||!s.value,class:"btn-primary"},"Ajouter",8,o0)])])])):xt("",!0)],32)}}});const l0=Li(a0,[["__scopeId","data-v-534f7021"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="181",c0=0,iu=1,u0=2,dd=1,f0=2,Xn=3,Ri=0,kt=1,Yn=2,ti=0,Cr=1,ru=2,su=3,ou=4,d0=5,qi=100,h0=101,p0=102,m0=103,x0=104,g0=200,_0=201,v0=202,S0=203,qa=204,$a=205,b0=206,M0=207,y0=208,E0=209,T0=210,A0=211,w0=212,C0=213,R0=214,ja=0,Ya=1,Ka=2,Ur=3,Za=4,Ja=5,Qa=6,el=7,hd=0,P0=1,D0=2,Ai=0,I0=1,L0=2,U0=3,N0=4,F0=5,O0=6,B0=7,pd=300,Nr=301,Fr=302,tl=303,nl=304,Vo=306,il=1e3,Kn=1001,rl=1002,on=1003,z0=1004,zs=1005,pn=1006,sa=1007,ji=1008,oi=1009,md=1010,xd=1011,vs=1012,tc=1013,Zi=1014,Zn=1015,zr=1016,nc=1017,ic=1018,Ss=1020,gd=35902,_d=35899,vd=1021,Sd=1022,Mn=1023,bs=1026,Ms=1027,bd=1028,rc=1029,sc=1030,oc=1031,ac=1033,fo=33776,ho=33777,po=33778,mo=33779,sl=35840,ol=35841,al=35842,ll=35843,cl=36196,ul=37492,fl=37496,dl=37808,hl=37809,pl=37810,ml=37811,xl=37812,gl=37813,_l=37814,vl=37815,Sl=37816,bl=37817,Ml=37818,yl=37819,El=37820,Tl=37821,Al=36492,wl=36494,Cl=36495,Rl=36283,Pl=36284,Dl=36285,Il=36286,k0=3200,V0=3201,H0=0,G0=1,yi="",fn="srgb",Pi="srgb-linear",Eo="linear",ut="srgb",ir=7680,au=519,W0=512,X0=513,q0=514,Md=515,$0=516,j0=517,Y0=518,K0=519,lu=35044,cu="300 es",Ln=2e3,To=2001;function yd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Z0(){const n=ys("canvas");return n.style.display="block",n}const uu={};function fu(...n){const e="THREE."+n.shift();console.log(e,...n)}function qe(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Et(...n){const e="THREE."+n.shift();console.error(e,...n)}function Es(...n){const e=n.join(" ");e in uu||(uu[e]=!0,qe(...n))}function J0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let du=1234567;const ls=Math.PI/180,Ts=180/Math.PI;function Vr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function lc(n,e){return(n%e+e)%e}function Q0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ex(n,e,t){return n!==e?(t-n)/(e-n):0}function cs(n,e,t){return(1-t)*n+t*e}function tx(n,e,t,i){return cs(n,e,1-Math.exp(-t*i))}function nx(n,e=1){return e-Math.abs(lc(n,e*2)-e)}function ix(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function sx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ox(n,e){return n+Math.random()*(e-n)}function ax(n){return n*(.5-Math.random())}function lx(n){n!==void 0&&(du=n);let e=du+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cx(n){return n*ls}function ux(n){return n*Ts}function fx(n){return(n&n-1)===0&&n!==0}function dx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function hx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function px(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*p,a*u,a*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Sr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zt={DEG2RAD:ls,RAD2DEG:Ts,generateUUID:Vr,clamp:Ke,euclideanModulo:lc,mapLinear:Q0,inverseLerp:ex,lerp:cs,damp:tx,pingpong:nx,smoothstep:ix,smootherstep:rx,randInt:sx,randFloat:ox,randFloatSpread:ax,seededRandom:lx,degToRad:cx,radToDeg:ux,isPowerOfTwo:fx,ceilPowerOfTwo:dx,floorPowerOfTwo:hx,setQuaternionFromProperEuler:px,normalize:Wt,denormalize:Sr};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ps{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],p=s[o+1],v=s[o+2],S=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=S;return}if(f!==S||l!==h||c!==p||u!==v){let m=l*h+c*p+u*v+f*S;m<0&&(h=-h,p=-p,v=-v,S=-S,m=-m);let d=1-a;if(m<.9995){const y=Math.acos(m),T=Math.sin(y);d=Math.sin(d*y)/T,a=Math.sin(a*y)/T,l=l*d+h*a,c=c*d+p*a,u=u*d+v*a,f=f*d+S*a}else{l=l*d+h*a,c=c*d+p*a,u=u*d+v*a,f=f*d+S*a;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-a*p,e[t+2]=c*v+u*p+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,i=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new te,hu=new Ps;class je{constructor(e,t,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],S=r[0],m=r[3],d=r[6],y=r[1],T=r[4],w=r[7],I=r[2],C=r[5],U=r[8];return s[0]=o*S+a*y+l*I,s[3]=o*m+a*T+l*C,s[6]=o*d+a*w+l*U,s[1]=c*S+u*y+f*I,s[4]=c*m+u*T+f*C,s[7]=c*d+u*w+f*U,s[2]=h*S+p*y+v*I,s[5]=h*m+p*T+v*C,s[8]=h*d+p*w+v*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=t*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-a*t)*S,e[6]=p*S,e[7]=(i*l-c*t)*S,e[8]=(o*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new je,pu=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mu=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mx(){const n={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=ni(r.r),r.g=ni(r.g),r.b=ni(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yi?Eo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Pi]:{primaries:e,whitePoint:i,transfer:Eo,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}const rt=mx();function ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rr;class xx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rr===void 0&&(rr=ys("canvas")),rr.width=e.width,rr.height=e.height;const r=rr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ni(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ni(t[i]/255)*255):t[i]=ni(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gx=0;class cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(la(r[o].image)):s.push(la(r[o]))}else s=la(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let _x=0;const ca=new te;class Vt extends kr{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=Kn,r=Kn,s=pn,o=ji,a=Mn,l=oi,c=Vt.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Vr(),this.name="",this.source=new cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case il:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case il:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=pd;Vt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,w=(p+1)/2,I=(d+1)/2,C=(u+h)/4,U=(f+S)/4,k=(v+m)/4;return T>w&&T>I?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=U/i):w>I?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=C/r,s=k/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=U/s,r=k/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-v)*(m-v)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(f-S)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vx extends kr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Vt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new cc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends vx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ed extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sx extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ks.copy(i.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Vs.subVectors(this.max,qr),sr.subVectors(e.a,qr),or.subVectors(e.b,qr),ar.subVectors(e.c,qr),fi.subVectors(or,sr),di.subVectors(ar,or),Bi.subVectors(sr,ar);let t=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Bi.z,Bi.y,fi.z,0,-fi.x,di.z,0,-di.x,Bi.z,0,-Bi.x,-fi.y,fi.x,0,-di.y,di.x,0,-Bi.y,Bi.x,0];return!ua(t,sr,or,ar,Vs)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,sr,or,ar,Vs))?!1:(Hs.crossVectors(fi,di),t=[Hs.x,Hs.y,Hs.z],ua(t,sr,or,ar,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new te,new te,new te,new te,new te,new te,new te,new te],gn=new te,ks=new Ds,sr=new te,or=new te,ar=new te,fi=new te,di=new te,Bi=new te,qr=new te,Vs=new te,Hs=new te,zi=new te;function ua(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){zi.fromArray(n,s);const a=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),u=i.dot(zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bx=new Ds,$r=new te,fa=new te;class uc{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);const t=$r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector($r,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(fa)),this.expandByPoint($r.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const kn=new te,da=new te,Gs=new te,hi=new te,ha=new te,Ws=new te,pa=new te;class Td{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){da.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(da);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Gs),a=hi.dot(this.direction),l=-hi.dot(Gs),c=hi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const S=1/u;f*=S,h*=S,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(da).addScaledVector(Gs,h),p}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,r,s){ha.subVectors(t,e),Ws.subVectors(i,e),pa.crossVectors(ha,Ws);let o=this.direction.dot(pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);const l=a*this.direction.dot(Ws.crossVectors(hi,Ws));if(l<0)return null;const c=a*this.direction.dot(ha.cross(hi));if(c<0||l+c>o)return null;const u=-a*hi.dot(pa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,v,S,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,v,S,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,v,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/lr.setFromMatrixColumn(e,0).length(),s=1/lr.setFromMatrixColumn(e,1).length(),o=1/lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,v=a*u,S=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-S*c,t[9]=-a*l,t[2]=S-h*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,S=c*f;t[0]=h+S*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=S+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,S=c*f;t[0]=h-S*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=S-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=a*u,S=a*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,S=a*c;t[0]=l*u,t[4]=S-h*f,t[8]=v*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,S=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=o*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mx,e,yx)}lookAt(e,t,i){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),pi.crossVectors(i,en),pi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),pi.crossVectors(i,en)),pi.normalize(),Xs.crossVectors(en,pi),r[0]=pi.x,r[4]=Xs.x,r[8]=en.x,r[1]=pi.y,r[5]=Xs.y,r[9]=en.y,r[2]=pi.z,r[6]=Xs.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],S=i[6],m=i[10],d=i[14],y=i[3],T=i[7],w=i[11],I=i[15],C=r[0],U=r[4],k=r[8],E=r[12],b=r[1],O=r[5],J=r[9],q=r[13],z=r[2],se=r[6],G=r[10],B=r[14],j=r[3],fe=r[7],pe=r[11],we=r[15];return s[0]=o*C+a*b+l*z+c*j,s[4]=o*U+a*O+l*se+c*fe,s[8]=o*k+a*J+l*G+c*pe,s[12]=o*E+a*q+l*B+c*we,s[1]=u*C+f*b+h*z+p*j,s[5]=u*U+f*O+h*se+p*fe,s[9]=u*k+f*J+h*G+p*pe,s[13]=u*E+f*q+h*B+p*we,s[2]=v*C+S*b+m*z+d*j,s[6]=v*U+S*O+m*se+d*fe,s[10]=v*k+S*J+m*G+d*pe,s[14]=v*E+S*q+m*B+d*we,s[3]=y*C+T*b+w*z+I*j,s[7]=y*U+T*O+w*se+I*fe,s[11]=y*k+T*J+w*G+I*pe,s[15]=y*E+T*q+w*B+I*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],S=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+S*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],S=e[13],m=e[14],d=e[15],y=f*m*c-S*h*c+S*l*p-a*m*p-f*l*d+a*h*d,T=v*h*c-u*m*c-v*l*p+o*m*p+u*l*d-o*h*d,w=u*S*c-v*f*c+v*a*p-o*S*p-u*a*d+o*f*d,I=v*f*l-u*S*l-v*a*h+o*S*h+u*a*m-o*f*m,C=t*y+i*T+r*w+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/C;return e[0]=y*U,e[1]=(S*h*s-f*m*s-S*r*p+i*m*p+f*r*d-i*h*d)*U,e[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*d+i*l*d)*U,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*U,e[4]=T*U,e[5]=(u*m*s-v*h*s+v*r*p-t*m*p-u*r*d+t*h*d)*U,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*d-t*l*d)*U,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*U,e[8]=w*U,e[9]=(v*f*s-u*S*s-v*i*p+t*S*p+u*i*d-t*f*d)*U,e[10]=(o*S*s-v*a*s+v*i*c-t*S*c-o*i*d+t*a*d)*U,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*U,e[12]=I*U,e[13]=(u*S*r-v*f*r+v*i*h-t*S*h-u*i*m+t*f*m)*U,e[14]=(v*a*r-o*S*r-v*i*l+t*S*l+o*i*m-t*a*m)*U,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*U,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,v=s*f,S=o*u,m=o*f,d=a*f,y=l*c,T=l*u,w=l*f,I=i.x,C=i.y,U=i.z;return r[0]=(1-(S+d))*I,r[1]=(p+w)*I,r[2]=(v-T)*I,r[3]=0,r[4]=(p-w)*C,r[5]=(1-(h+d))*C,r[6]=(m+y)*C,r[7]=0,r[8]=(v+T)*U,r[9]=(m-y)*U,r[10]=(1-(h+S))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=lr.set(r[0],r[1],r[2]).length();const o=lr.set(r[4],r[5],r[6]).length(),a=lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const c=1/s,u=1/o,f=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,t.setFromRotationMatrix(_n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ln,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let v,S;if(l)v=s/(o-s),S=o*s/(o-s);else if(a===Ln)v=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===To)v=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ln,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let v,S;if(l)v=1/(o-s),S=o/(o-s);else if(a===Ln)v=-2/(o-s),S=-(o+s)/(o-s);else if(a===To)v=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const lr=new te,_n=new Ct,Mx=new te(0,0,0),yx=new te(1,1,1),pi=new te,Xs=new te,en=new te,xu=new Ct,gu=new Ps;class ai{constructor(e=0,t=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ex=0;const _u=new te,cr=new Ps,Vn=new Ct,qs=new te,jr=new te,Tx=new te,Ax=new Ps,vu=new te(1,0,0),Su=new te(0,1,0),bu=new te(0,0,1),Mu={type:"added"},wx={type:"removed"},ur={type:"childadded",child:null},ma={type:"childremoved",child:null};class an extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new te,t=new ai,i=new Ps,r=new te(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new je}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(vu,e)}rotateY(e){return this.rotateOnAxis(Su,e)}rotateZ(e){return this.rotateOnAxis(bu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vu,e)}translateY(e){return this.translateOnAxis(Su,e)}translateZ(e){return this.translateOnAxis(bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qs.copy(e):qs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(jr,qs,this.up):Vn.lookAt(qs,jr,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),cr.setFromRotationMatrix(Vn),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mu),ur.child=e,this.dispatchEvent(ur),ur.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wx),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mu),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,Tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,Ax,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new te(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new te,Hn=new te,xa=new te,Gn=new te,fr=new te,dr=new te,yu=new te,ga=new te,_a=new te,va=new te,Sa=new At,ba=new At,Ma=new At;class bn{constructor(e=new te,t=new te,i=new te){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vn.subVectors(r,t),Hn.subVectors(i,t),xa.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Hn),l=vn.dot(xa),c=Hn.dot(Hn),u=Hn.dot(xa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Sa.setScalar(0),ba.setScalar(0),Ma.setScalar(0),Sa.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,i),Ma.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Sa,s.x),o.addScaledVector(ba,s.y),o.addScaledVector(Ma,s.z),o}static isFrontFacing(e,t,i,r){return vn.subVectors(i,t),Hn.subVectors(e,t),vn.cross(Hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),vn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;fr.subVectors(r,i),dr.subVectors(s,i),ga.subVectors(e,i);const l=fr.dot(ga),c=dr.dot(ga);if(l<=0&&c<=0)return t.copy(i);_a.subVectors(e,r);const u=fr.dot(_a),f=dr.dot(_a);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(fr,o);va.subVectors(e,s);const p=fr.dot(va),v=dr.dot(va);if(v>=0&&p<=v)return t.copy(s);const S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(dr,a);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return yu.subVectors(s,r),a=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(yu,a);const d=1/(m+S+h);return o=S*d,a=h*d,t.copy(i).addScaledVector(fr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},$s={h:0,s:0,l:0};function ya(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=lc(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ya(o,s,e+1/3),this.g=ya(o,s,e),this.b=ya(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=fn){function i(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=Ad[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return rt.workingToColorSpace(Ot.copy(this),e),Math.round(Ke(Ot.r*255,0,255))*65536+Math.round(Ke(Ot.g*255,0,255))*256+Math.round(Ke(Ot.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=fn){rt.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL($s);const i=cs(mi.h,$s.h,t),r=cs(mi.s,$s.s,t),s=cs(mi.l,$s.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new ot;ot.NAMES=Ad;let Cx=0;class Ho extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=Cr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=$a,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qa&&(i.blendSrc=this.blendSrc),this.blendDst!==$a&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class us extends Ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new te,js=new at;let Rx=0;class Un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lu,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)js.fromBufferAttribute(this,t),js.applyMatrix3(e),this.setXY(t,js.x,js.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lu&&(e.usage=this.usage),e}}class wd extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cd extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Px=0;const cn=new Ct,Ea=new an,hr=new te,tn=new Ds,Yr=new Ds,It=new te;class ui extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yd(e)?Cd:wd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return Ea.lookAt(e),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(tn.min,Yr.min),tn.expandByPoint(It),It.addVectors(tn.max,Yr.max),tn.expandByPoint(It)):(tn.expandByPoint(Yr.min),tn.expandByPoint(Yr.max))}tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(hr.fromBufferAttribute(e,c),It.add(hr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new te,l[k]=new te;const c=new te,u=new te,f=new te,h=new at,p=new at,v=new at,S=new te,m=new te;function d(k,E,b){c.fromBufferAttribute(i,k),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,b),h.fromBufferAttribute(s,k),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,b),u.sub(c),f.sub(c),p.sub(h),v.sub(h);const O=1/(p.x*v.y-v.x*p.y);isFinite(O)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(O),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(O),a[k].add(S),a[E].add(S),a[b].add(S),l[k].add(m),l[E].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let k=0,E=y.length;k<E;++k){const b=y[k],O=b.start,J=b.count;for(let q=O,z=O+J;q<z;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const T=new te,w=new te,I=new te,C=new te;function U(k){I.fromBufferAttribute(r,k),C.copy(I);const E=a[k];T.copy(E),T.sub(I.multiplyScalar(I.dot(E))).normalize(),w.crossVectors(C,E);const O=w.dot(l[k])<0?-1:1;o.setXYZW(k,T.x,T.y,T.z,O)}for(let k=0,E=y.length;k<E;++k){const b=y[k],O=b.start,J=b.count;for(let q=O,z=O+J;q<z;q+=3)U(e.getX(q+0)),U(e.getX(q+1)),U(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new te,s=new te,o=new te,a=new te,l=new te,c=new te,u=new te,f=new te;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new Un(h,u,f)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ui,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eu=new Ct,ki=new Td,Ys=new uc,Tu=new te,Ks=new te,Zs=new te,Js=new te,Ta=new te,Qs=new te,Au=new te,eo=new te;class Tn extends an{constructor(e=new ui,t=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ta.fromBufferAttribute(f,e),o?Qs.addScaledVector(Ta,u):Qs.addScaledVector(Ta.sub(t),u))}t.add(Qs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(s),ki.copy(e.ray).recast(e.near),!(Ys.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Ys,Tu)===null||ki.origin.distanceToSquared(Tu)>(e.far-e.near)**2))&&(Eu.copy(s).invert(),ki.copy(e.ray).applyMatrix4(Eu),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const m=h[v],d=o[m.materialIndex],y=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=y,I=T;w<I;w+=3){const C=a.getX(w),U=a.getX(w+1),k=a.getX(w+2);r=to(this,d,e,i,c,u,f,C,U,k),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=v,d=S;m<d;m+=3){const y=a.getX(m),T=a.getX(m+1),w=a.getX(m+2);r=to(this,o,e,i,c,u,f,y,T,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=h.length;v<S;v++){const m=h[v],d=o[m.materialIndex],y=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=y,I=T;w<I;w+=3){const C=w,U=w+1,k=w+2;r=to(this,d,e,i,c,u,f,C,U,k),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=v,d=S;m<d;m+=3){const y=m,T=m+1,w=m+2;r=to(this,o,e,i,c,u,f,y,T,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Dx(n,e,t,i,r,s,o,a){let l;if(e.side===kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ri,a),l===null)return null;eo.copy(a),eo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:n}}function to(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ks),n.getVertexPosition(l,Zs),n.getVertexPosition(c,Js);const u=Dx(n,e,t,i,Ks,Zs,Js,Au);if(u){const f=new te;bn.getBarycoord(Au,Ks,Zs,Js,f),r&&(u.uv=bn.getInterpolatedAttribute(r,a,l,c,f,new at)),s&&(u.uv1=bn.getInterpolatedAttribute(s,a,l,c,f,new at)),o&&(u.normal=bn.getInterpolatedAttribute(o,a,l,c,f,new te),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new te,materialIndex:0};bn.getNormal(Ks,Zs,Js,h.normal),u.face=h,u.barycoord=f}return u}class Is extends ui{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(f,2));function v(S,m,d,y,T,w,I,C,U,k,E){const b=w/U,O=I/k,J=w/2,q=I/2,z=C/2,se=U+1,G=k+1;let B=0,j=0;const fe=new te;for(let pe=0;pe<G;pe++){const we=pe*O-q;for(let Ve=0;Ve<se;Ve++){const Ze=Ve*b-J;fe[S]=Ze*y,fe[m]=we*T,fe[d]=z,c.push(fe.x,fe.y,fe.z),fe[S]=0,fe[m]=0,fe[d]=C>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Ve/U),f.push(1-pe/k),B+=1}}for(let pe=0;pe<k;pe++)for(let we=0;we<U;we++){const Ve=h+we+se*pe,Ze=h+we+se*(pe+1),et=h+(we+1)+se*(pe+1),tt=h+(we+1)+se*pe;l.push(Ve,Ze,tt),l.push(Ze,et,tt),j+=6}a.addGroup(p,j,E),p+=j,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=Or(n[t]);for(const r in i)e[r]=i[r]}return e}function Ix(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Lx={clone:Or,merge:Xt};var Ux=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ux,this.fragmentShader=Nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=Ix(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pd extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new te,wu=new at,Cu=new at;class dn extends Pd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Cu),t.subVectors(Cu,wu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ls*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pr=-90,mr=1;class Fx extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(pr,mr,e,t);r.layers=this.layers,this.add(r);const s=new dn(pr,mr,e,t);s.layers=this.layers,this.add(s);const o=new dn(pr,mr,e,t);o.layers=this.layers,this.add(o);const a=new dn(pr,mr,e,t);a.layers=this.layers,this.add(a);const l=new dn(pr,mr,e,t);l.layers=this.layers,this.add(l);const c=new dn(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Dd extends Vt{constructor(e=[],t=Nr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ox extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Is(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:ti});s.uniforms.tEquirect.value=t;const o=new Tn(r,s),a=t.minFilter;return t.minFilter===ji&&(t.minFilter=pn),new Fx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class no extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bx={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new no,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new no,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new no,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new no;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class zx extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kx extends Vt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=on,u=on,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wa=new te,Vx=new te,Hx=new je;class Xi{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wa.subVectors(i,t).cross(Vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hx.getNormalMatrix(e),r=this.coplanarPoint(wa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new uc,Gx=new at(.5,.5),io=new te;class Id{constructor(e=new Xi,t=new Xi,i=new Xi,r=new Xi,s=new Xi,o=new Xi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],v=s[8],S=s[9],m=s[10],d=s[11],y=s[12],T=s[13],w=s[14],I=s[15];if(r[0].setComponents(c-o,p-u,d-v,I-y).normalize(),r[1].setComponents(c+o,p+u,d+v,I+y).normalize(),r[2].setComponents(c+a,p+f,d+S,I+T).normalize(),r[3].setComponents(c-a,p-f,d-S,I-T).normalize(),i)r[4].setComponents(l,h,m,w).normalize(),r[5].setComponents(c-l,p-h,d-m,I-w).normalize();else if(r[4].setComponents(c-l,p-h,d-m,I-w).normalize(),t===Ln)r[5].setComponents(c+l,p+h,d+m,I+w).normalize();else if(t===To)r[5].setComponents(l,h,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);const t=Gx.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(io.x=r.normal.x>0?e.max.x:e.min.x,io.y=r.normal.y>0?e.max.y:e.min.y,io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ld extends Vt{constructor(e,t,i=Zi,r,s,o,a=on,l=on,c,u=bs,f=1){if(u!==bs&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ud extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Go extends ui{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],v=[],S=[],m=[];for(let d=0;d<u;d++){const y=d*h-o;for(let T=0;T<c;T++){const w=T*f-s;v.push(w,-y,0),S.push(0,0,1),m.push(T/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const T=y+c*d,w=y+c*(d+1),I=y+1+c*(d+1),C=y+1+c*d;p.push(T,w,C),p.push(w,I,C)}this.setIndex(p),this.setAttribute("position",new Nn(v,3)),this.setAttribute("normal",new Nn(S,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.widthSegments,e.heightSegments)}}class fs extends ui{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new te,h=new te,p=[],v=[],S=[],m=[];for(let d=0;d<=i;d++){const y=[],T=d/i;let w=0;d===0&&o===0?w=.5/t:d===i&&l===Math.PI&&(w=-.5/t);for(let I=0;I<=t;I++){const C=I/t;f.x=-e*Math.cos(r+C*s)*Math.sin(o+T*a),f.y=e*Math.cos(o+T*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+T*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(C+w,1-T),y.push(c++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<t;y++){const T=u[d][y+1],w=u[d][y],I=u[d+1][y],C=u[d+1][y+1];(d!==0||o>0)&&p.push(T,w,C),(d!==i-1||l<Math.PI)&&p.push(w,I,C)}this.setIndex(p),this.setAttribute("position",new Nn(v,3)),this.setAttribute("normal",new Nn(S,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wx extends Ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xx extends Ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ca={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class qx{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const $x=new qx;class dc{constructor(e){this.manager=e!==void 0?e:$x,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}dc.DEFAULT_MATERIAL_NAME="__DEFAULT";const xr=new WeakMap;class jx extends dc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ca.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=xr.get(o);f===void 0&&(f=[],xr.set(o,f)),f.push({onLoad:t,onError:r})}return o}const a=ys("img");function l(){u(),t&&t(this);const f=xr.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}xr.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),Ca.remove(`image:${e}`);const h=xr.get(this)||[];for(let p=0;p<h.length;p++){const v=h[p];v.onError&&v.onError(f)}xr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ca.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Yx extends dc{constructor(e){super(e)}load(e,t,i,r){const s=new Vt,o=new jx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Kx extends Pd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zx extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ru=new Ct;class Jx{constructor(e,t,i=0,r=1/0){this.ray=new Td(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new fc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ru.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ru),this}intersectObject(e,t=!0,i=[]){return Ll(e,this,i,t),i.sort(Pu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ll(e[r],this,i,t);return i.sort(Pu),i}}function Pu(n,e){return n.distance-e.distance}function Ll(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Ll(s[o],e,t,!0)}}class br{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Du(n,e,t,i){const r=Qx(i);switch(t){case vd:return n*e;case bd:return n*e/r.components*r.byteLength;case rc:return n*e/r.components*r.byteLength;case sc:return n*e*2/r.components*r.byteLength;case oc:return n*e*2/r.components*r.byteLength;case Sd:return n*e*3/r.components*r.byteLength;case Mn:return n*e*4/r.components*r.byteLength;case ac:return n*e*4/r.components*r.byteLength;case fo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:case ll:return Math.max(n,16)*Math.max(e,8)/4;case sl:case al:return Math.max(n,8)*Math.max(e,8)/2;case cl:case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Al:case wl:case Cl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rl:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Dl:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qx(n){switch(n){case oi:case md:return{byteLength:1,components:1};case vs:case xd:case zr:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Zi:case tc:case Zn:return{byteLength:4,components:1};case gd:case _d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);/**
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
#endif`,kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vg=`#ifdef USE_FOG
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
}`,k_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V_=`#ifdef USE_SKINNING
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
}`,Ye={alphahash_fragment:tg,alphahash_pars_fragment:ng,alphamap_fragment:ig,alphamap_pars_fragment:rg,alphatest_fragment:sg,alphatest_pars_fragment:og,aomap_fragment:ag,aomap_pars_fragment:lg,batching_pars_vertex:cg,batching_vertex:ug,begin_vertex:fg,beginnormal_vertex:dg,bsdfs:hg,iridescence_fragment:pg,bumpmap_pars_fragment:mg,clipping_planes_fragment:xg,clipping_planes_pars_fragment:gg,clipping_planes_pars_vertex:_g,clipping_planes_vertex:vg,color_fragment:Sg,color_pars_fragment:bg,color_pars_vertex:Mg,color_vertex:yg,common:Eg,cube_uv_reflection_fragment:Tg,defaultnormal_vertex:Ag,displacementmap_pars_vertex:wg,displacementmap_vertex:Cg,emissivemap_fragment:Rg,emissivemap_pars_fragment:Pg,colorspace_fragment:Dg,colorspace_pars_fragment:Ig,envmap_fragment:Lg,envmap_common_pars_fragment:Ug,envmap_pars_fragment:Ng,envmap_pars_vertex:Fg,envmap_physical_pars_fragment:$g,envmap_vertex:Og,fog_vertex:Bg,fog_pars_vertex:zg,fog_fragment:kg,fog_pars_fragment:Vg,gradientmap_pars_fragment:Hg,lightmap_pars_fragment:Gg,lights_lambert_fragment:Wg,lights_lambert_pars_fragment:Xg,lights_pars_begin:qg,lights_toon_fragment:jg,lights_toon_pars_fragment:Yg,lights_phong_fragment:Kg,lights_phong_pars_fragment:Zg,lights_physical_fragment:Jg,lights_physical_pars_fragment:Qg,lights_fragment_begin:e_,lights_fragment_maps:t_,lights_fragment_end:n_,logdepthbuf_fragment:i_,logdepthbuf_pars_fragment:r_,logdepthbuf_pars_vertex:s_,logdepthbuf_vertex:o_,map_fragment:a_,map_pars_fragment:l_,map_particle_fragment:c_,map_particle_pars_fragment:u_,metalnessmap_fragment:f_,metalnessmap_pars_fragment:d_,morphinstance_vertex:h_,morphcolor_vertex:p_,morphnormal_vertex:m_,morphtarget_pars_vertex:x_,morphtarget_vertex:g_,normal_fragment_begin:__,normal_fragment_maps:v_,normal_pars_fragment:S_,normal_pars_vertex:b_,normal_vertex:M_,normalmap_pars_fragment:y_,clearcoat_normal_fragment_begin:E_,clearcoat_normal_fragment_maps:T_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:w_,opaque_fragment:C_,packing:R_,premultiplied_alpha_fragment:P_,project_vertex:D_,dithering_fragment:I_,dithering_pars_fragment:L_,roughnessmap_fragment:U_,roughnessmap_pars_fragment:N_,shadowmap_pars_fragment:F_,shadowmap_pars_vertex:O_,shadowmap_vertex:B_,shadowmask_pars_fragment:z_,skinbase_vertex:k_,skinning_pars_vertex:V_,skinning_vertex:H_,skinnormal_vertex:G_,specularmap_fragment:W_,specularmap_pars_fragment:X_,tonemapping_fragment:q_,tonemapping_pars_fragment:$_,transmission_fragment:j_,transmission_pars_fragment:Y_,uv_pars_fragment:K_,uv_pars_vertex:Z_,uv_vertex:J_,worldpos_vertex:Q_,background_vert:ev,background_frag:tv,backgroundCube_vert:nv,backgroundCube_frag:iv,cube_vert:rv,cube_frag:sv,depth_vert:ov,depth_frag:av,distanceRGBA_vert:lv,distanceRGBA_frag:cv,equirect_vert:uv,equirect_frag:fv,linedashed_vert:dv,linedashed_frag:hv,meshbasic_vert:pv,meshbasic_frag:mv,meshlambert_vert:xv,meshlambert_frag:gv,meshmatcap_vert:_v,meshmatcap_frag:vv,meshnormal_vert:Sv,meshnormal_frag:bv,meshphong_vert:Mv,meshphong_frag:yv,meshphysical_vert:Ev,meshphysical_frag:Tv,meshtoon_vert:Av,meshtoon_frag:wv,points_vert:Cv,points_frag:Rv,shadow_vert:Pv,shadow_frag:Dv,sprite_vert:Iv,sprite_frag:Lv},be={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},In={basic:{uniforms:Xt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Xt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Xt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Xt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Xt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Xt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Xt([be.points,be.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Xt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Xt([be.common,be.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Xt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Xt([be.sprite,be.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Xt([be.common,be.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Xt([be.lights,be.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};In.physical={uniforms:Xt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const ro={r:0,b:0,g:0},Hi=new ai,Uv=new Ct;function Nv(n,e,t,i,r,s,o){const a=new ot(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?t:e).get(w)),w}function S(T){let w=!1;const I=v(T);I===null?d(a,l):I&&I.isColor&&(d(I,1),w=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,w){const I=v(w);I&&(I.isCubeTexture||I.mapping===Vo)?(u===void 0&&(u=new Tn(new Is(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Or(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hi.copy(w.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(Hi)),u.material.toneMapped=rt.getTransfer(I.colorSpace)!==ut,(f!==I||h!==I.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=I,h=I.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Tn(new Go(2,2),new li({name:"BackgroundMaterial",uniforms:Or(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=rt.getTransfer(I.colorSpace)!==ut,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||h!==I.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=I,h=I.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,w){T.getRGB(ro,Rd(n)),i.buffers.color.setClear(ro.r,ro.g,ro.b,w,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),l=w,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(a,l)},render:S,addToRenderList:m,dispose:y}}function Fv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(b,O,J,q,z){let se=!1;const G=f(q,J,O);s!==G&&(s=G,c(s.object)),se=p(b,q,J,z),se&&v(b,q,J,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,w(b,O,J,q),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,O,J){const q=J.wireframe===!0;let z=i[b.id];z===void 0&&(z={},i[b.id]=z);let se=z[O.id];se===void 0&&(se={},z[O.id]=se);let G=se[q];return G===void 0&&(G=h(l()),se[q]=G),G}function h(b){const O=[],J=[],q=[];for(let z=0;z<t;z++)O[z]=0,J[z]=0,q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:J,attributeDivisors:q,object:b,attributes:{},index:null}}function p(b,O,J,q){const z=s.attributes,se=O.attributes;let G=0;const B=J.getAttributes();for(const j in B)if(B[j].location>=0){const pe=z[j];let we=se[j];if(we===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(we=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(we=b.instanceColor)),pe===void 0||pe.attribute!==we||we&&pe.data!==we.data)return!0;G++}return s.attributesNum!==G||s.index!==q}function v(b,O,J,q){const z={},se=O.attributes;let G=0;const B=J.getAttributes();for(const j in B)if(B[j].location>=0){let pe=se[j];pe===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor));const we={};we.attribute=pe,pe&&pe.data&&(we.data=pe.data),z[j]=we,G++}s.attributes=z,s.attributesNum=G,s.index=q}function S(){const b=s.newAttributes;for(let O=0,J=b.length;O<J;O++)b[O]=0}function m(b){d(b,0)}function d(b,O){const J=s.newAttributes,q=s.enabledAttributes,z=s.attributeDivisors;J[b]=1,q[b]===0&&(n.enableVertexAttribArray(b),q[b]=1),z[b]!==O&&(n.vertexAttribDivisor(b,O),z[b]=O)}function y(){const b=s.newAttributes,O=s.enabledAttributes;for(let J=0,q=O.length;J<q;J++)O[J]!==b[J]&&(n.disableVertexAttribArray(J),O[J]=0)}function T(b,O,J,q,z,se,G){G===!0?n.vertexAttribIPointer(b,O,J,z,se):n.vertexAttribPointer(b,O,J,q,z,se)}function w(b,O,J,q){S();const z=q.attributes,se=J.getAttributes(),G=O.defaultAttributeValues;for(const B in se){const j=se[B];if(j.location>=0){let fe=z[B];if(fe===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor)),fe!==void 0){const pe=fe.normalized,we=fe.itemSize,Ve=e.get(fe);if(Ve===void 0)continue;const Ze=Ve.buffer,et=Ve.type,tt=Ve.bytesPerElement,oe=et===n.INT||et===n.UNSIGNED_INT||fe.gpuType===tc;if(fe.isInterleavedBufferAttribute){const le=fe.data,ye=le.stride,Be=fe.offset;if(le.isInstancedInterleavedBuffer){for(let ne=0;ne<j.locationSize;ne++)d(j.location+ne,le.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ne=0;ne<j.locationSize;ne++)m(j.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ne=0;ne<j.locationSize;ne++)T(j.location+ne,we/j.locationSize,et,pe,ye*tt,(Be+we/j.locationSize*ne)*tt,oe)}else{if(fe.isInstancedBufferAttribute){for(let le=0;le<j.locationSize;le++)d(j.location+le,fe.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let le=0;le<j.locationSize;le++)m(j.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let le=0;le<j.locationSize;le++)T(j.location+le,we/j.locationSize,et,pe,we*tt,we/j.locationSize*le*tt,oe)}}else if(G!==void 0){const pe=G[B];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(j.location,pe);break;case 3:n.vertexAttrib3fv(j.location,pe);break;case 4:n.vertexAttrib4fv(j.location,pe);break;default:n.vertexAttrib1fv(j.location,pe)}}}}y()}function I(){k();for(const b in i){const O=i[b];for(const J in O){const q=O[J];for(const z in q)u(q[z].object),delete q[z];delete O[J]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const O=i[b.id];for(const J in O){const q=O[J];for(const z in q)u(q[z].object),delete q[z];delete O[J]}delete i[b.id]}function U(b){for(const O in i){const J=i[O];if(J[b.id]===void 0)continue;const q=J[b.id];for(const z in q)u(q[z].object),delete q[z];delete J[b.id]}}function k(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:k,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:S,enableAttribute:m,disableUnusedAttributes:y}}function Ov(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let S=0;S<f;S++)v+=u[S]*h[S];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(U){return!(U!==Mn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){const k=U===zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==oi&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Zn&&!k)}function l(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:w,vertexTextures:I,maxSamples:C}}function zv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Xi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,T=y*4;let w=d.clippingState||null;l.value=w,w=u(v,h,T,p);for(let I=0;I!==T;++I)w[I]=t[I];d.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const d=p+S*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,w=p;T!==S;++T,w+=4)o.copy(f[T]).applyMatrix4(y,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function kv(n){let e=new WeakMap;function t(o,a){return a===tl?o.mapping=Nr:a===nl&&(o.mapping=Fr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===tl||a===nl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ox(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ei=4,Iu=[.125,.215,.35,.446,.526,.582],$i=20,Vv=512,Kr=new Kx,Lu=new ot;let Ra=null,Pa=0,Da=0,Ia=!1;const Hv=new te;class Uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Hv}=s;Ra=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Pa,Da),this._renderer.xr.enabled=Ia,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:zr,format:Mn,colorSpace:Pi,depthBuffer:!1},r=Nu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Gv(s)),this._blurMaterial=Xv(s,e,t)}return r}_compileMaterial(e){const t=new Tn(new ui,e);this._renderer.compile(t,Kr)}_sceneToCubeUV(e,t,i,r,s){const l=new dn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Lu),f.toneMapping=Ai,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tn(new Is,new us({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let d=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,d=!0):(m.color.copy(Lu),d=!0);for(let T=0;T<6;T++){const w=T%3;w===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):w===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const I=this._cubeSize;gr(r,w*I,T>2?I:0,I,I),f.setRenderTarget(r),d&&f.render(S,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Nr||e.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Kr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){const y=3*Math.max(this._cubeSize,16),T=4*this._cubeSize;this._ggxMaterial=Wv(this._lodMax,y,T)}const o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=.05+c*.95,p=f*h,{_lodMax:v}=this,S=this._sizeLods[i],m=3*S*(i>v-Ei?i-v+Ei:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,gr(s,m,d,3*S,2*S),r.setRenderTarget(s),r.render(a,Kr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,gr(e,m,d,3*S,2*S),r.setRenderTarget(e),r.render(a,Kr)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$i-1),S=s/v,m=isFinite(s)?1+Math.floor(u*S):$i;m>$i&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const d=[];let y=0;for(let U=0;U<$i;++U){const k=U/S,E=Math.exp(-k*k/2);d.push(E),U===0?y+=E:U<m&&(y+=2*E)}for(let U=0;U<d.length;U++)d[U]=d[U]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=v,h.mipInt.value=T-i;const w=this._sizeLods[r],I=3*w*(r>T-Ei?r-T+Ei:0),C=4*(this._cubeSize-w);gr(t,I,C,3*w,2*w),l.setRenderTarget(t),l.render(f,Kr)}}function Gv(n){const e=[],t=[],i=[];let r=n;const s=n-Ei+1+Iu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Ei?l=Iu[o-n+Ei-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,S=3,m=2,d=1,y=new Float32Array(S*v*p),T=new Float32Array(m*v*p),w=new Float32Array(d*v*p);for(let C=0;C<p;C++){const U=C%3*2/3-1,k=C>2?0:-1,E=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];y.set(E,S*v*C),T.set(h,m*v*C);const b=[C,C,C,C,C,C];w.set(b,d*v*C)}const I=new ui;I.setAttribute("position",new Un(y,S)),I.setAttribute("uv",new Un(T,m)),I.setAttribute("faceIndex",new Un(w,d)),i.push(new Tn(I,null)),r>Ei&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Nu(n,e,t){const i=new Ji(n,e,t);return i.texture.mapping=Vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Wv(n,e,t){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Xv(n,e,t){const i=new Float32Array($i),r=new te(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Fu(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ou(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Wo(){return`

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
	`}function qv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===tl||l===nl,u=l===Nr||l===Fr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Uu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Uu(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function $v(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Es("WebGLRenderer: "+i+" extension not supported."),r}}}function jv(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,v=f.attributes.position;let S=0;if(p!==null){const y=p.array;S=p.version;for(let T=0,w=y.length;T<w;T+=3){const I=y[T+0],C=y[T+1],U=y[T+2];h.push(I,C,C,U,U,I)}}else if(v!==void 0){const y=v.array;S=v.version;for(let T=0,w=y.length/3-1;T<w;T+=3){const I=T+0,C=T+1,U=T+2;h.push(I,C,C,U,U,I)}}else return;const m=new(yd(h)?Cd:wd)(h,1);m.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Yv(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,h*o,v),t.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];t.update(m,i,1)}function f(h,p,v,S){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],S[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,S,0,v);let d=0;for(let y=0;y<v;y++)d+=p[y]*S[y];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Kv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Et("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Zv(n,e,t){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let T=0;p===!0&&(T=1),v===!0&&(T=2),S===!0&&(T=3);let w=a.attributes.position.count*T,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*I*4*f),U=new Ed(C,w,I,f);U.type=Zn,U.needsUpdate=!0;const k=T*4;for(let b=0;b<f;b++){const O=m[b],J=d[b],q=y[b],z=w*I*4*b;for(let se=0;se<O.count;se++){const G=se*k;p===!0&&(r.fromBufferAttribute(O,se),C[z+G+0]=r.x,C[z+G+1]=r.y,C[z+G+2]=r.z,C[z+G+3]=0),v===!0&&(r.fromBufferAttribute(J,se),C[z+G+4]=r.x,C[z+G+5]=r.y,C[z+G+6]=r.z,C[z+G+7]=0),S===!0&&(r.fromBufferAttribute(q,se),C[z+G+8]=r.x,C[z+G+9]=r.y,C[z+G+10]=r.z,C[z+G+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:U,size:new at(w,I)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Jv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Fd=new Vt,Bu=new Ld(1,1),Od=new Ed,Bd=new Sx,zd=new Dd,zu=[],ku=[],Vu=new Float32Array(16),Hu=new Float32Array(9),Gu=new Float32Array(4);function Hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=zu[r];if(s===void 0&&(s=new Float32Array(r),zu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xo(n,e){let t=ku[e];t===void 0&&(t=new Int32Array(e),ku[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Qv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function nS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function iS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Gu.set(i),n.uniformMatrix2fv(this.addr,!1,Gu),Dt(t,i)}}function rS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Hu.set(i),n.uniformMatrix3fv(this.addr,!1,Hu),Dt(t,i)}}function sS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Vu.set(i),n.uniformMatrix4fv(this.addr,!1,Vu),Dt(t,i)}}function oS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function aS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function lS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function cS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function uS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function dS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function hS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function pS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Bu.compareFunction=Md,s=Bu):s=Fd,t.setTexture2D(e||s,r)}function mS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bd,r)}function xS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||zd,r)}function gS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Od,r)}function _S(n){switch(n){case 5126:return Qv;case 35664:return eS;case 35665:return tS;case 35666:return nS;case 35674:return iS;case 35675:return rS;case 35676:return sS;case 5124:case 35670:return oS;case 35667:case 35671:return aS;case 35668:case 35672:return lS;case 35669:case 35673:return cS;case 5125:return uS;case 36294:return fS;case 36295:return dS;case 36296:return hS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return xS;case 36289:case 36303:case 36311:case 36292:return gS}}function vS(n,e){n.uniform1fv(this.addr,e)}function SS(n,e){const t=Hr(e,this.size,2);n.uniform2fv(this.addr,t)}function bS(n,e){const t=Hr(e,this.size,3);n.uniform3fv(this.addr,t)}function MS(n,e){const t=Hr(e,this.size,4);n.uniform4fv(this.addr,t)}function yS(n,e){const t=Hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ES(n,e){const t=Hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function TS(n,e){const t=Hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function AS(n,e){n.uniform1iv(this.addr,e)}function wS(n,e){n.uniform2iv(this.addr,e)}function CS(n,e){n.uniform3iv(this.addr,e)}function RS(n,e){n.uniform4iv(this.addr,e)}function PS(n,e){n.uniform1uiv(this.addr,e)}function DS(n,e){n.uniform2uiv(this.addr,e)}function IS(n,e){n.uniform3uiv(this.addr,e)}function LS(n,e){n.uniform4uiv(this.addr,e)}function US(n,e,t){const i=this.cache,r=e.length,s=Xo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fd,s[o])}function NS(n,e,t){const i=this.cache,r=e.length,s=Xo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Bd,s[o])}function FS(n,e,t){const i=this.cache,r=e.length,s=Xo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||zd,s[o])}function OS(n,e,t){const i=this.cache,r=e.length,s=Xo(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Od,s[o])}function BS(n){switch(n){case 5126:return vS;case 35664:return SS;case 35665:return bS;case 35666:return MS;case 35674:return yS;case 35675:return ES;case 35676:return TS;case 5124:case 35670:return AS;case 35667:case 35671:return wS;case 35668:case 35672:return CS;case 35669:case 35673:return RS;case 5125:return PS;case 36294:return DS;case 36295:return IS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return OS}}class zS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_S(t.type)}}class kS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BS(t.type)}}class VS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const La=/(\w+)(\])?(\[|\.)?/g;function Wu(n,e){n.seq.push(e),n.map[e.id]=e}function HS(n,e,t){const i=n.name,r=i.length;for(La.lastIndex=0;;){const s=La.exec(i),o=La.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wu(t,c===void 0?new zS(a,n,e):new kS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new VS(a),Wu(t,f)),t=f}}}class xo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);HS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Xu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const GS=37297;let WS=0;function XS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const qu=new je;function qS(n){rt._getMatrix(qu,rt.workingColorSpace,n);const e=`mat3( ${qu.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Eo:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $u(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+XS(n.getShaderSource(e),a)}else return s}function $S(n,e){const t=qS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jS(n,e){let t;switch(e){case I0:t="Linear";break;case L0:t="Reinhard";break;case U0:t="Cineon";break;case N0:t="ACESFilmic";break;case O0:t="AgX";break;case B0:t="Neutral";break;case F0:t="Custom";break;default:qe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const so=new te;function YS(){rt.getLuminanceCoefficients(so);const n=so.x.toFixed(4),e=so.y.toFixed(4),t=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function ZS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function JS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Jr(n){return n!==""}function ju(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(n){return n.replace(QS,tb)}const eb=new Map;function tb(n,e){let t=Ye[e];if(t===void 0){const i=eb.get(e);if(i!==void 0)t=Ye[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ul(t)}const nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(n){return n.replace(nb,ib)}function ib(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function rb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===f0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function sb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Nr:case Fr:e="ENVMAP_TYPE_CUBE";break;case Vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ob(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fr:e="ENVMAP_MODE_REFRACTION";break}return e}function ab(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case P0:e="ENVMAP_BLENDING_MIX";break;case D0:e="ENVMAP_BLENDING_ADD";break}return e}function lb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function cb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rb(t),c=sb(t),u=ob(t),f=ab(t),h=lb(t),p=KS(t),v=ZS(s),S=r.createProgram();let m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Jr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Jr).join(`
`),d.length>0&&(d+=`
`)):(m=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),d=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ai?jS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,$S("linearToOutputTexel",t.outputColorSpace),YS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),o=Ul(o),o=ju(o,t),o=Yu(o,t),a=Ul(a),a=ju(a,t),a=Yu(a,t),o=Ku(o),a=Ku(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=y+m+o,w=y+d+a,I=Xu(r,r.VERTEX_SHADER,T),C=Xu(r,r.FRAGMENT_SHADER,w);r.attachShader(S,I),r.attachShader(S,C),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function U(O){if(n.debug.checkShaderErrors){const J=r.getProgramInfoLog(S)||"",q=r.getShaderInfoLog(I)||"",z=r.getShaderInfoLog(C)||"",se=J.trim(),G=q.trim(),B=z.trim();let j=!0,fe=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,I,C);else{const pe=$u(r,I,"vertex"),we=$u(r,C,"fragment");Et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+se+`
`+pe+`
`+we)}else se!==""?qe("WebGLProgram: Program Info Log:",se):(G===""||B==="")&&(fe=!1);fe&&(O.diagnostics={runnable:j,programLog:se,vertexShader:{log:G,prefix:m},fragmentShader:{log:B,prefix:d}})}r.deleteShader(I),r.deleteShader(C),k=new xo(r,S),E=JS(r,S)}let k;this.getUniforms=function(){return k===void 0&&U(this),k};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(S,GS)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WS++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=I,this.fragmentShader=C,this}let ub=0;class fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new db(e),t.set(e,i)),i}}class db{constructor(e){this.id=ub++,this.code=e,this.usedTimes=0}}function hb(n,e,t,i,r,s,o){const a=new fc,l=new fb,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,O,J,q){const z=J.fog,se=q.geometry,G=E.isMeshStandardMaterial?J.environment:null,B=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),j=B&&B.mapping===Vo?B.image.height:null,fe=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&qe("WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const pe=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,we=pe!==void 0?pe.length:0;let Ve=0;se.morphAttributes.position!==void 0&&(Ve=1),se.morphAttributes.normal!==void 0&&(Ve=2),se.morphAttributes.color!==void 0&&(Ve=3);let Ze,et,tt,oe;if(fe){const lt=In[fe];Ze=lt.vertexShader,et=lt.fragmentShader}else Ze=E.vertexShader,et=E.fragmentShader,l.update(E),tt=l.getVertexShaderID(E),oe=l.getFragmentShaderID(E);const le=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Be=q.isInstancedMesh===!0,ne=q.isBatchedMesh===!0,ce=!!E.map,ze=!!E.matcap,A=!!B,D=!!E.aoMap,_=!!E.lightMap,H=!!E.bumpMap,W=!!E.normalMap,Q=!!E.displacementMap,P=!!E.emissiveMap,R=!!E.metalnessMap,Y=!!E.roughnessMap,$=E.anisotropy>0,g=E.clearcoat>0,x=E.dispersion>0,L=E.iridescence>0,K=E.sheen>0,re=E.transmission>0,Z=$&&!!E.anisotropyMap,xe=g&&!!E.clearcoatMap,he=g&&!!E.clearcoatNormalMap,Ae=g&&!!E.clearcoatRoughnessMap,Te=L&&!!E.iridescenceMap,ae=L&&!!E.iridescenceThicknessMap,me=K&&!!E.sheenColorMap,Fe=K&&!!E.sheenRoughnessMap,Re=!!E.specularMap,_e=!!E.specularColorMap,He=!!E.specularIntensityMap,N=re&&!!E.transmissionMap,Me=re&&!!E.thicknessMap,ve=!!E.gradientMap,Se=!!E.alphaMap,de=E.alphaTest>0,ue=!!E.alphaHash,De=!!E.extensions;let Xe=Ai;E.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const mt={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:Ze,fragmentShader:et,defines:E.defines,customVertexShaderID:tt,customFragmentShaderID:oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ne,batchingColor:ne&&q._colorsTexture!==null,instancing:Be,instancingColor:Be&&q.instanceColor!==null,instancingMorph:Be&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Pi,alphaToCoverage:!!E.alphaToCoverage,map:ce,matcap:ze,envMap:A,envMapMode:A&&B.mapping,envMapCubeUVHeight:j,aoMap:D,lightMap:_,bumpMap:H,normalMap:W,displacementMap:h&&Q,emissiveMap:P,normalMapObjectSpace:W&&E.normalMapType===G0,normalMapTangentSpace:W&&E.normalMapType===H0,metalnessMap:R,roughnessMap:Y,anisotropy:$,anisotropyMap:Z,clearcoat:g,clearcoatMap:xe,clearcoatNormalMap:he,clearcoatRoughnessMap:Ae,dispersion:x,iridescence:L,iridescenceMap:Te,iridescenceThicknessMap:ae,sheen:K,sheenColorMap:me,sheenRoughnessMap:Fe,specularMap:Re,specularColorMap:_e,specularIntensityMap:He,transmission:re,transmissionMap:N,thicknessMap:Me,gradientMap:ve,opaque:E.transparent===!1&&E.blending===Cr&&E.alphaToCoverage===!1,alphaMap:Se,alphaTest:de,alphaHash:ue,combine:E.combine,mapUv:ce&&S(E.map.channel),aoMapUv:D&&S(E.aoMap.channel),lightMapUv:_&&S(E.lightMap.channel),bumpMapUv:H&&S(E.bumpMap.channel),normalMapUv:W&&S(E.normalMap.channel),displacementMapUv:Q&&S(E.displacementMap.channel),emissiveMapUv:P&&S(E.emissiveMap.channel),metalnessMapUv:R&&S(E.metalnessMap.channel),roughnessMapUv:Y&&S(E.roughnessMap.channel),anisotropyMapUv:Z&&S(E.anisotropyMap.channel),clearcoatMapUv:xe&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:he&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:me&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&S(E.sheenRoughnessMap.channel),specularMapUv:Re&&S(E.specularMap.channel),specularColorMapUv:_e&&S(E.specularColorMap.channel),specularIntensityMapUv:He&&S(E.specularIntensityMap.channel),transmissionMapUv:N&&S(E.transmissionMap.channel),thicknessMapUv:Me&&S(E.thicknessMap.channel),alphaMapUv:Se&&S(E.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(W||$),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!se.attributes.uv&&(ce||Se),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:q.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ce&&E.map.isVideoTexture===!0&&rt.getTransfer(E.map.colorSpace)===ut,decodeVideoTextureEmissive:P&&E.emissiveMap.isVideoTexture===!0&&rt.getTransfer(E.emissiveMap.colorSpace)===ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Yn,flipSided:E.side===kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:De&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&E.extensions.multiDraw===!0||ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function d(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)b.push(O),b.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(y(b,E),T(b,E),b.push(n.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function y(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function T(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function w(E){const b=v[E.type];let O;if(b){const J=In[b];O=Lx.clone(J.uniforms)}else O=E.uniforms;return O}function I(E,b){let O;for(let J=0,q=u.length;J<q;J++){const z=u[J];if(z.cacheKey===b){O=z,++O.usedTimes;break}}return O===void 0&&(O=new cb(n,b,E,s),u.push(O)),O}function C(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function U(E){l.remove(E)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:I,releaseProgram:C,releaseShaderCache:U,programs:u,dispose:k}}function pb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function mb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ju(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,v,S,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:S,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=S,d.group=m),e++,d}function a(f,h,p,v,S,m){const d=o(f,h,p,v,S,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,v,S,m){const d=o(f,h,p,v,S,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||mb),i.length>1&&i.sort(h||Ju),r.length>1&&r.sort(h||Ju)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function xb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Qu,n.set(i,[o])):r>=s.length?(o=new Qu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function gb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new ot};break;case"SpotLight":t={position:new te,direction:new te,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new te,halfWidth:new te,halfHeight:new te};break}return n[e.id]=t,t}}}function _b(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let vb=0;function Sb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bb(n){const e=new gb,t=_b(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new te);const r=new te,s=new Ct,o=new Ct;function a(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,v=0,S=0,m=0,d=0,y=0,T=0,w=0,I=0,C=0,U=0;c.sort(Sb);for(let E=0,b=c.length;E<b;E++){const O=c[E],J=O.color,q=O.intensity,z=O.distance,se=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=J.r*q,f+=J.g*q,h+=J.b*q;else if(O.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(O.sh.coefficients[G],q);U++}else if(O.isDirectionalLight){const G=e.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const B=O.shadow,j=t.get(O);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=se,i.directionalShadowMatrix[p]=O.shadow.matrix,y++}i.directional[p]=G,p++}else if(O.isSpotLight){const G=e.get(O);G.position.setFromMatrixPosition(O.matrixWorld),G.color.copy(J).multiplyScalar(q),G.distance=z,G.coneCos=Math.cos(O.angle),G.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),G.decay=O.decay,i.spot[S]=G;const B=O.shadow;if(O.map&&(i.spotLightMap[I]=O.map,I++,B.updateMatrices(O),O.castShadow&&C++),i.spotLightMatrix[S]=B.matrix,O.castShadow){const j=t.get(O);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,i.spotShadow[S]=j,i.spotShadowMap[S]=se,w++}S++}else if(O.isRectAreaLight){const G=e.get(O);G.color.copy(J).multiplyScalar(q),G.halfWidth.set(O.width*.5,0,0),G.halfHeight.set(0,O.height*.5,0),i.rectArea[m]=G,m++}else if(O.isPointLight){const G=e.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity),G.distance=O.distance,G.decay=O.decay,O.castShadow){const B=O.shadow,j=t.get(O);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,j.shadowCameraNear=B.camera.near,j.shadowCameraFar=B.camera.far,i.pointShadow[v]=j,i.pointShadowMap[v]=se,i.pointShadowMatrix[v]=O.shadow.matrix,T++}i.point[v]=G,v++}else if(O.isHemisphereLight){const G=e.get(O);G.skyColor.copy(O.color).multiplyScalar(q),G.groundColor.copy(O.groundColor).multiplyScalar(q),i.hemi[d]=G,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const k=i.hash;(k.directionalLength!==p||k.pointLength!==v||k.spotLength!==S||k.rectAreaLength!==m||k.hemiLength!==d||k.numDirectionalShadows!==y||k.numPointShadows!==T||k.numSpotShadows!==w||k.numSpotMaps!==I||k.numLightProbes!==U)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=w+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=U,k.directionalLength=p,k.pointLength=v,k.spotLength=S,k.rectAreaLength=m,k.hemiLength=d,k.numDirectionalShadows=y,k.numPointShadows=T,k.numSpotShadows=w,k.numSpotMaps=I,k.numLightProbes=U,i.version=vb++)}function l(c,u){let f=0,h=0,p=0,v=0,S=0;const m=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const T=c[d];if(T.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),f++}else if(T.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const w=i.rectArea[v];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const w=i.point[h];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const w=i.hemi[S];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function ef(n){const e=new bb(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Mb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ef(n),e.set(r,[a])):s>=o.length?(a=new ef(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const yb=`void main() {
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
}`;function Tb(n,e,t){let i=new Id;const r=new at,s=new at,o=new At,a=new Wx({depthPacking:V0}),l=new Xx,c={},u=t.maxTextureSize,f={[Ri]:kt,[kt]:Ri,[Yn]:Yn},h=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:yb,fragmentShader:Eb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new ui;v.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Tn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dd;let d=this.type;this.render=function(C,U,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),b=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),J=n.state;J.setBlending(ti),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const q=d!==Xn&&this.type===Xn,z=d===Xn&&this.type!==Xn;for(let se=0,G=C.length;se<G;se++){const B=C[se],j=B.shadow;if(j===void 0){qe("WebGLShadowMap:",B,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const fe=j.getFrameExtents();if(r.multiply(fe),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,j.mapSize.y=s.y)),j.map===null||q===!0||z===!0){const we=this.type!==Xn?{minFilter:on,magFilter:on}:{};j.map!==null&&j.map.dispose(),j.map=new Ji(r.x,r.y,we),j.map.texture.name=B.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const pe=j.getViewportCount();for(let we=0;we<pe;we++){const Ve=j.getViewport(we);o.set(s.x*Ve.x,s.y*Ve.y,s.x*Ve.z,s.y*Ve.w),J.viewport(o),j.updateMatrices(B,we),i=j.getFrustum(),w(U,k,j.camera,B,this.type)}j.isPointLightShadow!==!0&&this.type===Xn&&y(j,k),j.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,b,O)};function y(C,U){const k=e.update(S);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ji(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(U,null,k,h,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(U,null,k,p,S,null)}function T(C,U,k,E){let b=null;const O=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)b=O;else if(b=k.isPointLight===!0?l:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const J=b.uuid,q=U.uuid;let z=c[J];z===void 0&&(z={},c[J]=z);let se=z[q];se===void 0&&(se=b.clone(),z[q]=se,U.addEventListener("dispose",I)),b=se}if(b.visible=U.visible,b.wireframe=U.wireframe,E===Xn?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:f[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const J=n.properties.get(b);J.light=k}return b}function w(C,U,k,E,b){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Xn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);const q=e.update(C),z=C.material;if(Array.isArray(z)){const se=q.groups;for(let G=0,B=se.length;G<B;G++){const j=se[G],fe=z[j.materialIndex];if(fe&&fe.visible){const pe=T(C,fe,E,b);C.onBeforeShadow(n,C,U,k,q,pe,j),n.renderBufferDirect(k,null,q,pe,C,j),C.onAfterShadow(n,C,U,k,q,pe,j)}}}else if(z.visible){const se=T(C,z,E,b);C.onBeforeShadow(n,C,U,k,q,se,null),n.renderBufferDirect(k,null,q,se,C,null),C.onAfterShadow(n,C,U,k,q,se,null)}}const J=C.children;for(let q=0,z=J.length;q<z;q++)w(J[q],U,k,E,b)}function I(C){C.target.removeEventListener("dispose",I);for(const k in c){const E=c[k],b=C.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const Ab={[ja]:Ya,[Ka]:Qa,[Za]:el,[Ur]:Ja,[Ya]:ja,[Qa]:Ka,[el]:Za,[Ja]:Ur};function wb(n,e){function t(){let N=!1;const Me=new At;let ve=null;const Se=new At(0,0,0,0);return{setMask:function(de){ve!==de&&!N&&(n.colorMask(de,de,de,de),ve=de)},setLocked:function(de){N=de},setClear:function(de,ue,De,Xe,mt){mt===!0&&(de*=Xe,ue*=Xe,De*=Xe),Me.set(de,ue,De,Xe),Se.equals(Me)===!1&&(n.clearColor(de,ue,De,Xe),Se.copy(Me))},reset:function(){N=!1,ve=null,Se.set(-1,0,0,0)}}}function i(){let N=!1,Me=!1,ve=null,Se=null,de=null;return{setReversed:function(ue){if(Me!==ue){const De=e.get("EXT_clip_control");ue?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Me=ue;const Xe=de;de=null,this.setClear(Xe)}},getReversed:function(){return Me},setTest:function(ue){ue?le(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(ue){ve!==ue&&!N&&(n.depthMask(ue),ve=ue)},setFunc:function(ue){if(Me&&(ue=Ab[ue]),Se!==ue){switch(ue){case ja:n.depthFunc(n.NEVER);break;case Ya:n.depthFunc(n.ALWAYS);break;case Ka:n.depthFunc(n.LESS);break;case Ur:n.depthFunc(n.LEQUAL);break;case Za:n.depthFunc(n.EQUAL);break;case Ja:n.depthFunc(n.GEQUAL);break;case Qa:n.depthFunc(n.GREATER);break;case el:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=ue}},setLocked:function(ue){N=ue},setClear:function(ue){de!==ue&&(Me&&(ue=1-ue),n.clearDepth(ue),de=ue)},reset:function(){N=!1,ve=null,Se=null,de=null,Me=!1}}}function r(){let N=!1,Me=null,ve=null,Se=null,de=null,ue=null,De=null,Xe=null,mt=null;return{setTest:function(lt){N||(lt?le(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(lt){Me!==lt&&!N&&(n.stencilMask(lt),Me=lt)},setFunc:function(lt,wn,xn){(ve!==lt||Se!==wn||de!==xn)&&(n.stencilFunc(lt,wn,xn),ve=lt,Se=wn,de=xn)},setOp:function(lt,wn,xn){(ue!==lt||De!==wn||Xe!==xn)&&(n.stencilOp(lt,wn,xn),ue=lt,De=wn,Xe=xn)},setLocked:function(lt){N=lt},setClear:function(lt){mt!==lt&&(n.clearStencil(lt),mt=lt)},reset:function(){N=!1,Me=null,ve=null,Se=null,de=null,ue=null,De=null,Xe=null,mt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],v=null,S=!1,m=null,d=null,y=null,T=null,w=null,I=null,C=null,U=new ot(0,0,0),k=0,E=!1,b=null,O=null,J=null,q=null,z=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,B=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=B>=1):j.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=B>=2);let fe=null,pe={};const we=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),Ze=new At().fromArray(we),et=new At().fromArray(Ve);function tt(N,Me,ve,Se){const de=new Uint8Array(4),ue=n.createTexture();n.bindTexture(N,ue),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<ve;De++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(Me+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ue}const oe={};oe[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(n.DEPTH_TEST),o.setFunc(Ur),H(!1),W(iu),le(n.CULL_FACE),D(ti);function le(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function ye(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Be(N,Me){return f[N]!==Me?(n.bindFramebuffer(N,Me),f[N]=Me,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Me),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ne(N,Me){let ve=p,Se=!1;if(N){ve=h.get(Me),ve===void 0&&(ve=[],h.set(Me,ve));const de=N.textures;if(ve.length!==de.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,De=de.length;ue<De;ue++)ve[ue]=n.COLOR_ATTACHMENT0+ue;ve.length=de.length,Se=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,Se=!0);Se&&n.drawBuffers(ve)}function ce(N){return v!==N?(n.useProgram(N),v=N,!0):!1}const ze={[qi]:n.FUNC_ADD,[h0]:n.FUNC_SUBTRACT,[p0]:n.FUNC_REVERSE_SUBTRACT};ze[m0]=n.MIN,ze[x0]=n.MAX;const A={[g0]:n.ZERO,[_0]:n.ONE,[v0]:n.SRC_COLOR,[qa]:n.SRC_ALPHA,[T0]:n.SRC_ALPHA_SATURATE,[y0]:n.DST_COLOR,[b0]:n.DST_ALPHA,[S0]:n.ONE_MINUS_SRC_COLOR,[$a]:n.ONE_MINUS_SRC_ALPHA,[E0]:n.ONE_MINUS_DST_COLOR,[M0]:n.ONE_MINUS_DST_ALPHA,[A0]:n.CONSTANT_COLOR,[w0]:n.ONE_MINUS_CONSTANT_COLOR,[C0]:n.CONSTANT_ALPHA,[R0]:n.ONE_MINUS_CONSTANT_ALPHA};function D(N,Me,ve,Se,de,ue,De,Xe,mt,lt){if(N===ti){S===!0&&(ye(n.BLEND),S=!1);return}if(S===!1&&(le(n.BLEND),S=!0),N!==d0){if(N!==m||lt!==E){if((d!==qi||w!==qi)&&(n.blendEquation(n.FUNC_ADD),d=qi,w=qi),lt)switch(N){case Cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ru:n.blendFunc(n.ONE,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ou:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",N);break}else switch(N){case Cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ru:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case su:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ou:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",N);break}y=null,T=null,I=null,C=null,U.set(0,0,0),k=0,m=N,E=lt}return}de=de||Me,ue=ue||ve,De=De||Se,(Me!==d||de!==w)&&(n.blendEquationSeparate(ze[Me],ze[de]),d=Me,w=de),(ve!==y||Se!==T||ue!==I||De!==C)&&(n.blendFuncSeparate(A[ve],A[Se],A[ue],A[De]),y=ve,T=Se,I=ue,C=De),(Xe.equals(U)===!1||mt!==k)&&(n.blendColor(Xe.r,Xe.g,Xe.b,mt),U.copy(Xe),k=mt),m=N,E=!1}function _(N,Me){N.side===Yn?ye(n.CULL_FACE):le(n.CULL_FACE);let ve=N.side===kt;Me&&(ve=!ve),H(ve),N.blending===Cr&&N.transparent===!1?D(ti):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Se=N.stencilWrite;a.setTest(Se),Se&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),P(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function W(N){N!==c0?(le(n.CULL_FACE),N!==O&&(N===iu?n.cullFace(n.BACK):N===u0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),O=N}function Q(N){N!==J&&(G&&n.lineWidth(N),J=N)}function P(N,Me,ve){N?(le(n.POLYGON_OFFSET_FILL),(q!==Me||z!==ve)&&(n.polygonOffset(Me,ve),q=Me,z=ve)):ye(n.POLYGON_OFFSET_FILL)}function R(N){N?le(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Y(N){N===void 0&&(N=n.TEXTURE0+se-1),fe!==N&&(n.activeTexture(N),fe=N)}function $(N,Me,ve){ve===void 0&&(fe===null?ve=n.TEXTURE0+se-1:ve=fe);let Se=pe[ve];Se===void 0&&(Se={type:void 0,texture:void 0},pe[ve]=Se),(Se.type!==N||Se.texture!==Me)&&(fe!==ve&&(n.activeTexture(ve),fe=ve),n.bindTexture(N,Me||oe[N]),Se.type=N,Se.texture=Me)}function g(){const N=pe[fe];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function K(){try{n.texSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function re(){try{n.texSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function he(){try{n.texStorage2D(...arguments)}catch(N){N("WebGLState:",N)}}function Ae(){try{n.texStorage3D(...arguments)}catch(N){N("WebGLState:",N)}}function Te(){try{n.texImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function ae(){try{n.texImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function me(N){Ze.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ze.copy(N))}function Fe(N){et.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),et.copy(N))}function Re(N,Me){let ve=c.get(Me);ve===void 0&&(ve=new WeakMap,c.set(Me,ve));let Se=ve.get(N);Se===void 0&&(Se=n.getUniformBlockIndex(Me,N.name),ve.set(N,Se))}function _e(N,Me){const Se=c.get(Me).get(N);l.get(Me)!==Se&&(n.uniformBlockBinding(Me,Se,N.__bindingPointIndex),l.set(Me,Se))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},fe=null,pe={},f={},h=new WeakMap,p=[],v=null,S=!1,m=null,d=null,y=null,T=null,w=null,I=null,C=null,U=new ot(0,0,0),k=0,E=!1,b=null,O=null,J=null,q=null,z=null,Ze.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:ye,bindFramebuffer:Be,drawBuffers:ne,useProgram:ce,setBlending:D,setMaterial:_,setFlipSided:H,setCullFace:W,setLineWidth:Q,setPolygonOffset:P,setScissorTest:R,activeTexture:Y,bindTexture:$,unbindTexture:g,compressedTexImage2D:x,compressedTexImage3D:L,texImage2D:Te,texImage3D:ae,updateUBOMapping:Re,uniformBlockBinding:_e,texStorage2D:he,texStorage3D:Ae,texSubImage2D:K,texSubImage3D:re,compressedTexSubImage2D:Z,compressedTexSubImage3D:xe,scissor:me,viewport:Fe,reset:He}}function Cb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(g,x){return p?new OffscreenCanvas(g,x):ys("canvas")}function S(g,x,L){let K=1;const re=$(g);if((re.width>L||re.height>L)&&(K=L/Math.max(re.width,re.height)),K<1)if(typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&g instanceof ImageBitmap||typeof VideoFrame<"u"&&g instanceof VideoFrame){const Z=Math.floor(K*re.width),xe=Math.floor(K*re.height);f===void 0&&(f=v(Z,xe));const he=x?v(Z,xe):f;return he.width=Z,he.height=xe,he.getContext("2d").drawImage(g,0,0,Z,xe),qe("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Z+"x"+xe+")."),he}else return"data"in g&&qe("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),g;return g}function m(g){return g.generateMipmaps}function d(g){n.generateMipmap(g)}function y(g){return g.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:g.isWebGL3DRenderTarget?n.TEXTURE_3D:g.isWebGLArrayRenderTarget||g.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(g,x,L,K,re=!1){if(g!==null){if(n[g]!==void 0)return n[g];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+g+"'")}let Z=x;if(x===n.RED&&(L===n.FLOAT&&(Z=n.R32F),L===n.HALF_FLOAT&&(Z=n.R16F),L===n.UNSIGNED_BYTE&&(Z=n.R8)),x===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.R8UI),L===n.UNSIGNED_SHORT&&(Z=n.R16UI),L===n.UNSIGNED_INT&&(Z=n.R32UI),L===n.BYTE&&(Z=n.R8I),L===n.SHORT&&(Z=n.R16I),L===n.INT&&(Z=n.R32I)),x===n.RG&&(L===n.FLOAT&&(Z=n.RG32F),L===n.HALF_FLOAT&&(Z=n.RG16F),L===n.UNSIGNED_BYTE&&(Z=n.RG8)),x===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RG8UI),L===n.UNSIGNED_SHORT&&(Z=n.RG16UI),L===n.UNSIGNED_INT&&(Z=n.RG32UI),L===n.BYTE&&(Z=n.RG8I),L===n.SHORT&&(Z=n.RG16I),L===n.INT&&(Z=n.RG32I)),x===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),L===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),L===n.UNSIGNED_INT&&(Z=n.RGB32UI),L===n.BYTE&&(Z=n.RGB8I),L===n.SHORT&&(Z=n.RGB16I),L===n.INT&&(Z=n.RGB32I)),x===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),L===n.UNSIGNED_INT&&(Z=n.RGBA32UI),L===n.BYTE&&(Z=n.RGBA8I),L===n.SHORT&&(Z=n.RGBA16I),L===n.INT&&(Z=n.RGBA32I)),x===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),x===n.RGBA){const xe=re?Eo:rt.getTransfer(K);L===n.FLOAT&&(Z=n.RGBA32F),L===n.HALF_FLOAT&&(Z=n.RGBA16F),L===n.UNSIGNED_BYTE&&(Z=xe===ut?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function w(g,x){let L;return g?x===null||x===Zi||x===Ss?L=n.DEPTH24_STENCIL8:x===Zn?L=n.DEPTH32F_STENCIL8:x===vs&&(L=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Zi||x===Ss?L=n.DEPTH_COMPONENT24:x===Zn?L=n.DEPTH_COMPONENT32F:x===vs&&(L=n.DEPTH_COMPONENT16),L}function I(g,x){return m(g)===!0||g.isFramebufferTexture&&g.minFilter!==on&&g.minFilter!==pn?Math.log2(Math.max(x.width,x.height))+1:g.mipmaps!==void 0&&g.mipmaps.length>0?g.mipmaps.length:g.isCompressedTexture&&Array.isArray(g.image)?x.mipmaps.length:1}function C(g){const x=g.target;x.removeEventListener("dispose",C),k(x),x.isVideoTexture&&u.delete(x)}function U(g){const x=g.target;x.removeEventListener("dispose",U),b(x)}function k(g){const x=i.get(g);if(x.__webglInit===void 0)return;const L=g.source,K=h.get(L);if(K){const re=K[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(g),Object.keys(K).length===0&&h.delete(L)}i.remove(g)}function E(g){const x=i.get(g);n.deleteTexture(x.__webglTexture);const L=g.source,K=h.get(L);delete K[x.__cacheKey],o.memory.textures--}function b(g){const x=i.get(g);if(g.depthTexture&&(g.depthTexture.dispose(),i.remove(g.depthTexture)),g.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let re=0;re<x.__webglFramebuffer[K].length;re++)n.deleteFramebuffer(x.__webglFramebuffer[K][re]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const L=g.textures;for(let K=0,re=L.length;K<re;K++){const Z=i.get(L[K]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(L[K])}i.remove(g)}let O=0;function J(){O=0}function q(){const g=O;return g>=r.maxTextures&&qe("WebGLTextures: Trying to use "+g+" texture units while this GPU supports only "+r.maxTextures),O+=1,g}function z(g){const x=[];return x.push(g.wrapS),x.push(g.wrapT),x.push(g.wrapR||0),x.push(g.magFilter),x.push(g.minFilter),x.push(g.anisotropy),x.push(g.internalFormat),x.push(g.format),x.push(g.type),x.push(g.generateMipmaps),x.push(g.premultiplyAlpha),x.push(g.flipY),x.push(g.unpackAlignment),x.push(g.colorSpace),x.join()}function se(g,x){const L=i.get(g);if(g.isVideoTexture&&R(g),g.isRenderTargetTexture===!1&&g.isExternalTexture!==!0&&g.version>0&&L.__version!==g.version){const K=g.image;if(K===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(L,g,x);return}}else g.isExternalTexture&&(L.__webglTexture=g.sourceTexture?g.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+x)}function G(g,x){const L=i.get(g);if(g.isRenderTargetTexture===!1&&g.version>0&&L.__version!==g.version){oe(L,g,x);return}else g.isExternalTexture&&(L.__webglTexture=g.sourceTexture?g.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+x)}function B(g,x){const L=i.get(g);if(g.isRenderTargetTexture===!1&&g.version>0&&L.__version!==g.version){oe(L,g,x);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+x)}function j(g,x){const L=i.get(g);if(g.version>0&&L.__version!==g.version){le(L,g,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+x)}const fe={[il]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[rl]:n.MIRRORED_REPEAT},pe={[on]:n.NEAREST,[z0]:n.NEAREST_MIPMAP_NEAREST,[zs]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[sa]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},we={[W0]:n.NEVER,[K0]:n.ALWAYS,[X0]:n.LESS,[Md]:n.LEQUAL,[q0]:n.EQUAL,[Y0]:n.GEQUAL,[$0]:n.GREATER,[j0]:n.NOTEQUAL};function Ve(g,x){if(x.type===Zn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===pn||x.magFilter===sa||x.magFilter===zs||x.magFilter===ji||x.minFilter===pn||x.minFilter===sa||x.minFilter===zs||x.minFilter===ji)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(g,n.TEXTURE_WRAP_S,fe[x.wrapS]),n.texParameteri(g,n.TEXTURE_WRAP_T,fe[x.wrapT]),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,fe[x.wrapR]),n.texParameteri(g,n.TEXTURE_MAG_FILTER,pe[x.magFilter]),n.texParameteri(g,n.TEXTURE_MIN_FILTER,pe[x.minFilter]),x.compareFunction&&(n.texParameteri(g,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(g,n.TEXTURE_COMPARE_FUNC,we[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===on||x.minFilter!==zs&&x.minFilter!==ji||x.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(g,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ze(g,x){let L=!1;g.__webglInit===void 0&&(g.__webglInit=!0,x.addEventListener("dispose",C));const K=x.source;let re=h.get(K);re===void 0&&(re={},h.set(K,re));const Z=z(x);if(Z!==g.__cacheKey){re[Z]===void 0&&(re[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),re[Z].usedTimes++;const xe=re[g.__cacheKey];xe!==void 0&&(re[g.__cacheKey].usedTimes--,xe.usedTimes===0&&E(x)),g.__cacheKey=Z,g.__webglTexture=re[Z].texture}return L}function et(g,x,L){return Math.floor(Math.floor(g/L)/x)}function tt(g,x,L,K){const Z=g.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,L,K,x.data);else{Z.sort((ae,me)=>ae.start-me.start);let xe=0;for(let ae=1;ae<Z.length;ae++){const me=Z[xe],Fe=Z[ae],Re=me.start+me.count,_e=et(Fe.start,x.width,4),He=et(me.start,x.width,4);Fe.start<=Re+1&&_e===He&&et(Fe.start+Fe.count-1,x.width,4)===_e?me.count=Math.max(me.count,Fe.start+Fe.count-me.start):(++xe,Z[xe]=Fe)}Z.length=xe+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ae=0,me=Z.length;ae<me;ae++){const Fe=Z[ae],Re=Math.floor(Fe.start/4),_e=Math.ceil(Fe.count/4),He=Re%x.width,N=Math.floor(Re/x.width),Me=_e,ve=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,He,N,Me,ve,L,K,x.data)}g.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function oe(g,x,L){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);const re=Ze(g,x),Z=x.source;t.bindTexture(K,g.__webglTexture,n.TEXTURE0+L);const xe=i.get(Z);if(Z.version!==xe.__version||re===!0){t.activeTexture(n.TEXTURE0+L);const he=rt.getPrimaries(rt.workingColorSpace),Ae=x.colorSpace===yi?null:rt.getPrimaries(x.colorSpace),Te=x.colorSpace===yi||he===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ae=S(x.image,!1,r.maxTextureSize);ae=Y(x,ae);const me=s.convert(x.format,x.colorSpace),Fe=s.convert(x.type);let Re=T(x.internalFormat,me,Fe,x.colorSpace,x.isVideoTexture);Ve(K,x);let _e;const He=x.mipmaps,N=x.isVideoTexture!==!0,Me=xe.__version===void 0||re===!0,ve=Z.dataReady,Se=I(x,ae);if(x.isDepthTexture)Re=w(x.format===Ms,x.type),Me&&(N?t.texStorage2D(n.TEXTURE_2D,1,Re,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Re,ae.width,ae.height,0,me,Fe,null));else if(x.isDataTexture)if(He.length>0){N&&Me&&t.texStorage2D(n.TEXTURE_2D,Se,Re,He[0].width,He[0].height);for(let de=0,ue=He.length;de<ue;de++)_e=He[de],N?ve&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,_e.width,_e.height,me,Fe,_e.data):t.texImage2D(n.TEXTURE_2D,de,Re,_e.width,_e.height,0,me,Fe,_e.data);x.generateMipmaps=!1}else N?(Me&&t.texStorage2D(n.TEXTURE_2D,Se,Re,ae.width,ae.height),ve&&tt(x,ae,me,Fe)):t.texImage2D(n.TEXTURE_2D,0,Re,ae.width,ae.height,0,me,Fe,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Re,He[0].width,He[0].height,ae.depth);for(let de=0,ue=He.length;de<ue;de++)if(_e=He[de],x.format!==Mn)if(me!==null)if(N){if(ve)if(x.layerUpdates.size>0){const De=Du(_e.width,_e.height,x.format,x.type);for(const Xe of x.layerUpdates){const mt=_e.data.subarray(Xe*De/_e.data.BYTES_PER_ELEMENT,(Xe+1)*De/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,Xe,_e.width,_e.height,1,me,mt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,ae.depth,me,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Re,_e.width,_e.height,ae.depth,0,_e.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ve&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,ae.depth,me,Fe,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Re,_e.width,_e.height,ae.depth,0,me,Fe,_e.data)}else{N&&Me&&t.texStorage2D(n.TEXTURE_2D,Se,Re,He[0].width,He[0].height);for(let de=0,ue=He.length;de<ue;de++)_e=He[de],x.format!==Mn?me!==null?N?ve&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,_e.width,_e.height,me,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Re,_e.width,_e.height,0,_e.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ve&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,_e.width,_e.height,me,Fe,_e.data):t.texImage2D(n.TEXTURE_2D,de,Re,_e.width,_e.height,0,me,Fe,_e.data)}else if(x.isDataArrayTexture)if(N){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Re,ae.width,ae.height,ae.depth),ve)if(x.layerUpdates.size>0){const de=Du(ae.width,ae.height,x.format,x.type);for(const ue of x.layerUpdates){const De=ae.data.subarray(ue*de/ae.data.BYTES_PER_ELEMENT,(ue+1)*de/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,ae.width,ae.height,1,me,Fe,De)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,me,Fe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ae.width,ae.height,ae.depth,0,me,Fe,ae.data);else if(x.isData3DTexture)N?(Me&&t.texStorage3D(n.TEXTURE_3D,Se,Re,ae.width,ae.height,ae.depth),ve&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,me,Fe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ae.width,ae.height,ae.depth,0,me,Fe,ae.data);else if(x.isFramebufferTexture){if(Me)if(N)t.texStorage2D(n.TEXTURE_2D,Se,Re,ae.width,ae.height);else{let de=ae.width,ue=ae.height;for(let De=0;De<Se;De++)t.texImage2D(n.TEXTURE_2D,De,Re,de,ue,0,me,Fe,null),de>>=1,ue>>=1}}else if(He.length>0){if(N&&Me){const de=$(He[0]);t.texStorage2D(n.TEXTURE_2D,Se,Re,de.width,de.height)}for(let de=0,ue=He.length;de<ue;de++)_e=He[de],N?ve&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,me,Fe,_e):t.texImage2D(n.TEXTURE_2D,de,Re,me,Fe,_e);x.generateMipmaps=!1}else if(N){if(Me){const de=$(ae);t.texStorage2D(n.TEXTURE_2D,Se,Re,de.width,de.height)}ve&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Fe,ae)}else t.texImage2D(n.TEXTURE_2D,0,Re,me,Fe,ae);m(x)&&d(K),xe.__version=Z.version,x.onUpdate&&x.onUpdate(x)}g.__version=x.version}function le(g,x,L){if(x.image.length!==6)return;const K=Ze(g,x),re=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,g.__webglTexture,n.TEXTURE0+L);const Z=i.get(re);if(re.version!==Z.__version||K===!0){t.activeTexture(n.TEXTURE0+L);const xe=rt.getPrimaries(rt.workingColorSpace),he=x.colorSpace===yi?null:rt.getPrimaries(x.colorSpace),Ae=x.colorSpace===yi||xe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Te=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,me=[];for(let ue=0;ue<6;ue++)!Te&&!ae?me[ue]=S(x.image[ue],!0,r.maxCubemapSize):me[ue]=ae?x.image[ue].image:x.image[ue],me[ue]=Y(x,me[ue]);const Fe=me[0],Re=s.convert(x.format,x.colorSpace),_e=s.convert(x.type),He=T(x.internalFormat,Re,_e,x.colorSpace),N=x.isVideoTexture!==!0,Me=Z.__version===void 0||K===!0,ve=re.dataReady;let Se=I(x,Fe);Ve(n.TEXTURE_CUBE_MAP,x);let de;if(Te){N&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,He,Fe.width,Fe.height);for(let ue=0;ue<6;ue++){de=me[ue].mipmaps;for(let De=0;De<de.length;De++){const Xe=de[De];x.format!==Mn?Re!==null?N?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,0,0,Xe.width,Xe.height,Re,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,He,Xe.width,Xe.height,0,Xe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,0,0,Xe.width,Xe.height,Re,_e,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,He,Xe.width,Xe.height,0,Re,_e,Xe.data)}}}else{if(de=x.mipmaps,N&&Me){de.length>0&&Se++;const ue=$(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,He,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ae){N?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,me[ue].width,me[ue].height,Re,_e,me[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,He,me[ue].width,me[ue].height,0,Re,_e,me[ue].data);for(let De=0;De<de.length;De++){const mt=de[De].image[ue].image;N?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,0,0,mt.width,mt.height,Re,_e,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,He,mt.width,mt.height,0,Re,_e,mt.data)}}else{N?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Re,_e,me[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,He,Re,_e,me[ue]);for(let De=0;De<de.length;De++){const Xe=de[De];N?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,0,0,Re,_e,Xe.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,He,Re,_e,Xe.image[ue])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),Z.__version=re.version,x.onUpdate&&x.onUpdate(x)}g.__version=x.version}function ye(g,x,L,K,re,Z){const xe=s.convert(L.format,L.colorSpace),he=s.convert(L.type),Ae=T(L.internalFormat,xe,he,L.colorSpace),Te=i.get(x),ae=i.get(L);if(ae.__renderTarget=x,!Te.__hasExternalTextures){const me=Math.max(1,x.width>>Z),Fe=Math.max(1,x.height>>Z);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,Z,Ae,me,Fe,x.depth,0,xe,he,null):t.texImage2D(re,Z,Ae,me,Fe,0,xe,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,g),P(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,re,ae.__webglTexture,0,Q(x)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,re,ae.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(g,x,L){if(n.bindRenderbuffer(n.RENDERBUFFER,g),x.depthBuffer){const K=x.depthTexture,re=K&&K.isDepthTexture?K.type:null,Z=w(x.stencilBuffer,re),xe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=Q(x);P(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,Z,x.width,x.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,g)}else{const K=x.textures;for(let re=0;re<K.length;re++){const Z=K[re],xe=s.convert(Z.format,Z.colorSpace),he=s.convert(Z.type),Ae=T(Z.internalFormat,xe,he,Z.colorSpace),Te=Q(x);L&&P(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Ae,x.width,x.height):P(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,Ae,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ne(g,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,g),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),se(x.depthTexture,0);const re=K.__webglTexture,Z=Q(x);if(x.depthTexture.format===bs)P(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(x.depthTexture.format===Ms)P(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ce(g){const x=i.get(g),L=g.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==g.depthTexture){const K=g.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const re=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",re)};K.addEventListener("dispose",re),x.__depthDisposeCallback=re}x.__boundDepthTexture=K}if(g.depthTexture&&!x.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const K=g.texture.mipmaps;K&&K.length>0?ne(x.__webglFramebuffer[0],g):ne(x.__webglFramebuffer,g)}else if(L){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=n.createRenderbuffer(),Be(x.__webglDepthbuffer[K],g,!1);else{const re=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,Z)}}else{const K=g.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Be(x.__webglDepthbuffer,g,!1);else{const re=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(g,x,L){const K=i.get(g);x!==void 0&&ye(K.__webglFramebuffer,g,g.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ce(g)}function A(g){const x=g.texture,L=i.get(g),K=i.get(x);g.addEventListener("dispose",U);const re=g.textures,Z=g.isWebGLCubeRenderTarget===!0,xe=re.length>1;if(xe||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,o.memory.textures++),Z){L.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[he]=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)L.__webglFramebuffer[he][Ae]=n.createFramebuffer()}else L.__webglFramebuffer[he]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)L.__webglFramebuffer[he]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(xe)for(let he=0,Ae=re.length;he<Ae;he++){const Te=i.get(re[he]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}if(g.samples>0&&P(g)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let he=0;he<re.length;he++){const Ae=re[he];L.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[he]);const Te=s.convert(Ae.format,Ae.colorSpace),ae=s.convert(Ae.type),me=T(Ae.internalFormat,Te,ae,Ae.colorSpace,g.isXRRenderTarget===!0),Fe=Q(g);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,me,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,L.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),g.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(L.__webglDepthRenderbuffer,g,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)ye(L.__webglFramebuffer[he][Ae],g,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae);else ye(L.__webglFramebuffer[he],g,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let he=0,Ae=re.length;he<Ae;he++){const Te=re[he],ae=i.get(Te);let me=n.TEXTURE_2D;(g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(me=g.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,ae.__webglTexture),Ve(me,Te),ye(L.__webglFramebuffer,g,Te,n.COLOR_ATTACHMENT0+he,me,0),m(Te)&&d(me)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(he=g.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,K.__webglTexture),Ve(he,x),x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)ye(L.__webglFramebuffer[Ae],g,x,n.COLOR_ATTACHMENT0,he,Ae);else ye(L.__webglFramebuffer,g,x,n.COLOR_ATTACHMENT0,he,0);m(x)&&d(he),t.unbindTexture()}g.depthBuffer&&ce(g)}function D(g){const x=g.textures;for(let L=0,K=x.length;L<K;L++){const re=x[L];if(m(re)){const Z=y(g),xe=i.get(re).__webglTexture;t.bindTexture(Z,xe),d(Z),t.unbindTexture()}}}const _=[],H=[];function W(g){if(g.samples>0){if(P(g)===!1){const x=g.textures,L=g.width,K=g.height;let re=n.COLOR_BUFFER_BIT;const Z=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(g),he=x.length>1;if(he)for(let Te=0;Te<x.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Ae=g.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Te=0;Te<x.length;Te++){if(g.resolveDepthBuffer&&(g.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),g.stencilBuffer&&g.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Te]);const ae=i.get(x[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,L,K,0,0,L,K,re,n.NEAREST),l===!0&&(_.length=0,H.length=0,_.push(n.COLOR_ATTACHMENT0+Te),g.depthBuffer&&g.resolveDepthBuffer===!1&&(_.push(Z),H.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Te=0;Te<x.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Te]);const ae=i.get(x[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(g.depthBuffer&&g.resolveDepthBuffer===!1&&l){const x=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Q(g){return Math.min(r.maxSamples,g.samples)}function P(g){const x=i.get(g);return g.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function R(g){const x=o.render.frame;u.get(g)!==x&&(u.set(g,x),g.update())}function Y(g,x){const L=g.colorSpace,K=g.format,re=g.type;return g.isCompressedTexture===!0||g.isVideoTexture===!0||L!==Pi&&L!==yi&&(rt.getTransfer(L)===ut?(K!==Mn||re!==oi)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",L)),x}function $(g){return typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement?(c.width=g.naturalWidth||g.width,c.height=g.naturalHeight||g.height):typeof VideoFrame<"u"&&g instanceof VideoFrame?(c.width=g.displayWidth,c.height=g.displayHeight):(c.width=g.width,c.height=g.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=J,this.setTexture2D=se,this.setTexture2DArray=G,this.setTexture3D=B,this.setTextureCube=j,this.rebindTextures=ze,this.setupRenderTarget=A,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=P}function Rb(n,e){function t(i,r=yi){let s;const o=rt.getTransfer(r);if(i===oi)return n.UNSIGNED_BYTE;if(i===nc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ic)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_d)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===md)return n.BYTE;if(i===xd)return n.SHORT;if(i===vs)return n.UNSIGNED_SHORT;if(i===tc)return n.INT;if(i===Zi)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===zr)return n.HALF_FLOAT;if(i===vd)return n.ALPHA;if(i===Sd)return n.RGB;if(i===Mn)return n.RGBA;if(i===bs)return n.DEPTH_COMPONENT;if(i===Ms)return n.DEPTH_STENCIL;if(i===bd)return n.RED;if(i===rc)return n.RED_INTEGER;if(i===sc)return n.RG;if(i===oc)return n.RG_INTEGER;if(i===ac)return n.RGBA_INTEGER;if(i===fo||i===ho||i===po||i===mo)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ho)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sl||i===ol||i===al||i===ll)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cl||i===ul||i===fl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===cl||i===ul)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dl||i===hl||i===pl||i===ml||i===xl||i===gl||i===_l||i===vl||i===Sl||i===bl||i===Ml||i===yl||i===El||i===Tl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===dl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ml)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_l)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ml)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===El)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===wl||i===Cl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Al)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rl||i===Pl||i===Dl||i===Il)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Il)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Pb=`
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

}`;class Ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ud(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new li({vertexShader:Pb,fragmentShader:Db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new Go(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lb extends kr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const S=typeof XRWebGLBinding<"u",m=new Ib,d={},y=t.getContextAttributes();let T=null,w=null;const I=[],C=[],U=new at;let k=null;const E=new dn;E.viewport=new At;const b=new dn;b.viewport=new At;const O=[E,b],J=new Zx;let q=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let le=I[oe];return le===void 0&&(le=new Aa,I[oe]=le),le.getTargetRaySpace()},this.getControllerGrip=function(oe){let le=I[oe];return le===void 0&&(le=new Aa,I[oe]=le),le.getGripSpace()},this.getHand=function(oe){let le=I[oe];return le===void 0&&(le=new Aa,I[oe]=le),le.getHandSpace()};function se(oe){const le=C.indexOf(oe.inputSource);if(le===-1)return;const ye=I[le];ye!==void 0&&(ye.update(oe.inputSource,oe.frame,c||o),ye.dispatchEvent({type:oe.type,data:oe.inputSource}))}function G(){r.removeEventListener("select",se),r.removeEventListener("selectstart",se),r.removeEventListener("selectend",se),r.removeEventListener("squeeze",se),r.removeEventListener("squeezestart",se),r.removeEventListener("squeezeend",se),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",B);for(let oe=0;oe<I.length;oe++){const le=C[oe];le!==null&&(C[oe]=null,I[oe].disconnect(le))}q=null,z=null,m.reset();for(const oe in d)delete d[oe];e.setRenderTarget(T),p=null,h=null,f=null,r=null,w=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",se),r.addEventListener("selectstart",se),r.addEventListener("selectend",se),r.addEventListener("squeeze",se),r.addEventListener("squeezestart",se),r.addEventListener("squeezeend",se),r.addEventListener("end",G),r.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(U),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Be=null,ne=null;y.depth&&(ne=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=y.stencil?Ms:bs,Be=y.stencil?Ss:Zi);const ce={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Ji(h.textureWidth,h.textureHeight,{format:Mn,type:oi,depthTexture:new Ld(h.textureWidth,h.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Ji(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(oe){for(let le=0;le<oe.removed.length;le++){const ye=oe.removed[le],Be=C.indexOf(ye);Be>=0&&(C[Be]=null,I[Be].disconnect(ye))}for(let le=0;le<oe.added.length;le++){const ye=oe.added[le];let Be=C.indexOf(ye);if(Be===-1){for(let ce=0;ce<I.length;ce++)if(ce>=C.length){C.push(ye),Be=ce;break}else if(C[ce]===null){C[ce]=ye,Be=ce;break}if(Be===-1)break}const ne=I[Be];ne&&ne.connect(ye)}}const j=new te,fe=new te;function pe(oe,le,ye){j.setFromMatrixPosition(le.matrixWorld),fe.setFromMatrixPosition(ye.matrixWorld);const Be=j.distanceTo(fe),ne=le.projectionMatrix.elements,ce=ye.projectionMatrix.elements,ze=ne[14]/(ne[10]-1),A=ne[14]/(ne[10]+1),D=(ne[9]+1)/ne[5],_=(ne[9]-1)/ne[5],H=(ne[8]-1)/ne[0],W=(ce[8]+1)/ce[0],Q=ze*H,P=ze*W,R=Be/(-H+W),Y=R*-H;if(le.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Y),oe.translateZ(R),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),ne[10]===-1)oe.projectionMatrix.copy(le.projectionMatrix),oe.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const $=ze+R,g=A+R,x=Q-Y,L=P+(Be-Y),K=D*A/g*$,re=_*A/g*$;oe.projectionMatrix.makePerspective(x,L,K,re,$,g),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function we(oe,le){le===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(le.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let le=oe.near,ye=oe.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),J.near=b.near=E.near=le,J.far=b.far=E.far=ye,(q!==J.near||z!==J.far)&&(r.updateRenderState({depthNear:J.near,depthFar:J.far}),q=J.near,z=J.far),J.layers.mask=oe.layers.mask|6,E.layers.mask=J.layers.mask&3,b.layers.mask=J.layers.mask&5;const Be=oe.parent,ne=J.cameras;we(J,Be);for(let ce=0;ce<ne.length;ce++)we(ne[ce],Be);ne.length===2?pe(J,E,b):J.projectionMatrix.copy(E.projectionMatrix),Ve(oe,J,Be)};function Ve(oe,le,ye){ye===null?oe.matrix.copy(le.matrixWorld):(oe.matrix.copy(ye.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(le.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(le.projectionMatrix),oe.projectionMatrixInverse.copy(le.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Ts*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(oe){l=oe,h!==null&&(h.fixedFoveation=oe),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=oe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(J)},this.getCameraTexture=function(oe){return d[oe]};let Ze=null;function et(oe,le){if(u=le.getViewerPose(c||o),v=le,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let Be=!1;ye.length!==J.cameras.length&&(J.cameras.length=0,Be=!0);for(let A=0;A<ye.length;A++){const D=ye[A];let _=null;if(p!==null)_=p.getViewport(D);else{const W=f.getViewSubImage(h,D);_=W.viewport,A===0&&(e.setRenderTargetTextures(w,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(w))}let H=O[A];H===void 0&&(H=new dn,H.layers.enable(A),H.viewport=new At,O[A]=H),H.matrix.fromArray(D.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(D.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(_.x,_.y,_.width,_.height),A===0&&(J.matrix.copy(H.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Be===!0&&J.cameras.push(H)}const ne=r.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const A=f.getDepthInformation(ye[0]);A&&A.isValid&&A.texture&&m.init(A,r.renderState)}if(ne&&ne.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let A=0;A<ye.length;A++){const D=ye[A].camera;if(D){let _=d[D];_||(_=new Ud,d[D]=_);const H=f.getCameraImage(D);_.sourceTexture=H}}}}for(let ye=0;ye<I.length;ye++){const Be=C[ye],ne=I[ye];Be!==null&&ne!==void 0&&ne.update(Be,le,c||o)}Ze&&Ze(oe,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),v=null}const tt=new Nd;tt.setAnimationLoop(et),this.setAnimationLoop=function(oe){Ze=oe},this.dispose=function(){}}}const Gi=new ai,Ub=new Ct;function Nb(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Rd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,T,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,w)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d),T=y.envMap,w=y.envMapRotation;T&&(m.envMap.value=T,Gi.copy(w),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(Ub.makeRotationFromEuler(Gi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const w=T.program;i.uniformBlockBinding(y,w)}function c(y,T){let w=r[y.id];w===void 0&&(v(y),w=u(y),r[y.id]=w,y.addEventListener("dispose",m));const I=T.program;i.updateUBOMapping(y,I);const C=e.render.frame;s[y.id]!==C&&(h(y),s[y.id]=C)}function u(y){const T=f();y.__bindingPointIndex=T;const w=n.createBuffer(),I=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,w),w}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const T=r[y.id],w=y.uniforms,I=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let C=0,U=w.length;C<U;C++){const k=Array.isArray(w[C])?w[C]:[w[C]];for(let E=0,b=k.length;E<b;E++){const O=k[E];if(p(O,C,E,I)===!0){const J=O.__offset,q=Array.isArray(O.value)?O.value:[O.value];let z=0;for(let se=0;se<q.length;se++){const G=q[se],B=S(G);typeof G=="number"||typeof G=="boolean"?(O.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,J+z,O.__data)):G.isMatrix3?(O.__data[0]=G.elements[0],O.__data[1]=G.elements[1],O.__data[2]=G.elements[2],O.__data[3]=0,O.__data[4]=G.elements[3],O.__data[5]=G.elements[4],O.__data[6]=G.elements[5],O.__data[7]=0,O.__data[8]=G.elements[6],O.__data[9]=G.elements[7],O.__data[10]=G.elements[8],O.__data[11]=0):(G.toArray(O.__data,z),z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,J,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,T,w,I){const C=y.value,U=T+"_"+w;if(I[U]===void 0)return typeof C=="number"||typeof C=="boolean"?I[U]=C:I[U]=C.clone(),!0;{const k=I[U];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return I[U]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function v(y){const T=y.uniforms;let w=0;const I=16;for(let U=0,k=T.length;U<k;U++){const E=Array.isArray(T[U])?T[U]:[T[U]];for(let b=0,O=E.length;b<O;b++){const J=E[b],q=Array.isArray(J.value)?J.value:[J.value];for(let z=0,se=q.length;z<se;z++){const G=q[z],B=S(G),j=w%I,fe=j%B.boundary,pe=j+fe;w+=fe,pe!==0&&I-pe<B.storage&&(w+=I-pe),J.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=B.storage}}}const C=w%I;return C>0&&(w+=I-C),y.__size=w,y.__cache={},this}function S(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",y),T}function m(y){const T=y.target;T.removeEventListener("dispose",m);const w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const Ob=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Wn=null;function Bb(){return Wn===null&&(Wn=new kx(Ob,32,32,sc,zr),Wn.minFilter=pn,Wn.magFilter=pn,Wn.wrapS=Kn,Wn.wrapT=Kn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}class zb{constructor(e={}){const{canvas:t=Z0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Set([ac,oc,rc]),S=new Set([oi,Zi,vs,Ss,nc,ic]),m=new Uint32Array(4),d=new Int32Array(4);let y=null,T=null;const w=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1;this._outputColorSpace=fn;let k=0,E=0,b=null,O=-1,J=null;const q=new At,z=new At;let se=null;const G=new ot(0);let B=0,j=t.width,fe=t.height,pe=1,we=null,Ve=null;const Ze=new At(0,0,j,fe),et=new At(0,0,j,fe);let tt=!1;const oe=new Id;let le=!1,ye=!1;const Be=new Ct,ne=new te,ce=new At,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function D(){return b===null?pe:1}let _=i;function H(M,V){return t.getContext(M,V)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ec}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",De,!1),_===null){const V="webgl2";if(_=H(V,M),_===null)throw H(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M("WebGLRenderer: "+M.message),M}let W,Q,P,R,Y,$,g,x,L,K,re,Z,xe,he,Ae,Te,ae,me,Fe,Re,_e,He,N,Me;function ve(){W=new $v(_),W.init(),He=new Rb(_,W),Q=new Bv(_,W,e,He),P=new wb(_,W),Q.reversedDepthBuffer&&h&&P.buffers.depth.setReversed(!0),R=new Kv(_),Y=new pb,$=new Cb(_,W,P,Y,Q,He,R),g=new kv(C),x=new qv(C),L=new eg(_),N=new Fv(_,L),K=new jv(_,L,R,N),re=new Jv(_,K,L,R),Fe=new Zv(_,Q,$),Te=new zv(Y),Z=new hb(C,g,x,W,Q,N,Te),xe=new Nb(C,Y),he=new xb,Ae=new Mb(W),me=new Nv(C,g,x,P,re,p,l),ae=new Tb(C,re,Q),Me=new Fb(_,R,Q,P),Re=new Ov(_,W,R),_e=new Yv(_,W,R),R.programs=Z.programs,C.capabilities=Q,C.extensions=W,C.properties=Y,C.renderLists=he,C.shadowMap=ae,C.state=P,C.info=R}ve();const Se=new Lb(C,_);this.xr=Se,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const M=W.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=W.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(M){M!==void 0&&(pe=M,this.setSize(j,fe,!1))},this.getSize=function(M){return M.set(j,fe)},this.setSize=function(M,V,ee=!0){if(Se.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,fe=V,t.width=Math.floor(M*pe),t.height=Math.floor(V*pe),ee===!0&&(t.style.width=M+"px",t.style.height=V+"px"),this.setViewport(0,0,M,V)},this.getDrawingBufferSize=function(M){return M.set(j*pe,fe*pe).floor()},this.setDrawingBufferSize=function(M,V,ee){j=M,fe=V,pe=ee,t.width=Math.floor(M*ee),t.height=Math.floor(V*ee),this.setViewport(0,0,M,V)},this.getCurrentViewport=function(M){return M.copy(q)},this.getViewport=function(M){return M.copy(Ze)},this.setViewport=function(M,V,ee,ie){M.isVector4?Ze.set(M.x,M.y,M.z,M.w):Ze.set(M,V,ee,ie),P.viewport(q.copy(Ze).multiplyScalar(pe).round())},this.getScissor=function(M){return M.copy(et)},this.setScissor=function(M,V,ee,ie){M.isVector4?et.set(M.x,M.y,M.z,M.w):et.set(M,V,ee,ie),P.scissor(z.copy(et).multiplyScalar(pe).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){P.setScissorTest(tt=M)},this.setOpaqueSort=function(M){we=M},this.setTransparentSort=function(M){Ve=M},this.getClearColor=function(M){return M.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(M=!0,V=!0,ee=!0){let ie=0;if(M){let X=!1;if(b!==null){const ge=b.texture.format;X=v.has(ge)}if(X){const ge=b.texture.type,Ee=S.has(ge),Ie=me.getClearColor(),Ce=me.getClearAlpha(),Ge=Ie.r,We=Ie.g,Ne=Ie.b;Ee?(m[0]=Ge,m[1]=We,m[2]=Ne,m[3]=Ce,_.clearBufferuiv(_.COLOR,0,m)):(d[0]=Ge,d[1]=We,d[2]=Ne,d[3]=Ce,_.clearBufferiv(_.COLOR,0,d))}else ie|=_.COLOR_BUFFER_BIT}V&&(ie|=_.DEPTH_BUFFER_BIT),ee&&(ie|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",De,!1),me.dispose(),he.dispose(),Ae.dispose(),Y.dispose(),g.dispose(),x.dispose(),re.dispose(),N.dispose(),Me.dispose(),Z.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",hc),Se.removeEventListener("sessionend",pc),Ui.stop()};function de(M){M.preventDefault(),fu("WebGLRenderer: Context Lost."),U=!0}function ue(){fu("WebGLRenderer: Context Restored."),U=!1;const M=R.autoReset,V=ae.enabled,ee=ae.autoUpdate,ie=ae.needsUpdate,X=ae.type;ve(),R.autoReset=M,ae.enabled=V,ae.autoUpdate=ee,ae.needsUpdate=ie,ae.type=X}function De(M){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Xe(M){const V=M.target;V.removeEventListener("dispose",Xe),mt(V)}function mt(M){lt(M),Y.remove(M)}function lt(M){const V=Y.get(M).programs;V!==void 0&&(V.forEach(function(ee){Z.releaseProgram(ee)}),M.isShaderMaterial&&Z.releaseShaderCache(M))}this.renderBufferDirect=function(M,V,ee,ie,X,ge){V===null&&(V=ze);const Ee=X.isMesh&&X.matrixWorld.determinant()<0,Ie=Gd(M,V,ee,ie,X);P.setMaterial(ie,Ee);let Ce=ee.index,Ge=1;if(ie.wireframe===!0){if(Ce=K.getWireframeAttribute(ee),Ce===void 0)return;Ge=2}const We=ee.drawRange,Ne=ee.attributes.position;let Je=We.start*Ge,ct=(We.start+We.count)*Ge;ge!==null&&(Je=Math.max(Je,ge.start*Ge),ct=Math.min(ct,(ge.start+ge.count)*Ge)),Ce!==null?(Je=Math.max(Je,0),ct=Math.min(ct,Ce.count)):Ne!=null&&(Je=Math.max(Je,0),ct=Math.min(ct,Ne.count));const Mt=ct-Je;if(Mt<0||Mt===1/0)return;N.setup(X,ie,Ie,ee,Ce);let yt,ft=Re;if(Ce!==null&&(yt=L.get(Ce),ft=_e,ft.setIndex(yt)),X.isMesh)ie.wireframe===!0?(P.setLineWidth(ie.wireframeLinewidth*D()),ft.setMode(_.LINES)):ft.setMode(_.TRIANGLES);else if(X.isLine){let Oe=ie.linewidth;Oe===void 0&&(Oe=1),P.setLineWidth(Oe*D()),X.isLineSegments?ft.setMode(_.LINES):X.isLineLoop?ft.setMode(_.LINE_LOOP):ft.setMode(_.LINE_STRIP)}else X.isPoints?ft.setMode(_.POINTS):X.isSprite&&ft.setMode(_.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Es("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))ft.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Oe=X._multiDrawStarts,vt=X._multiDrawCounts,nt=X._multiDrawCount,Jt=Ce?L.get(Ce).bytesPerElement:1,er=Y.get(ie).currentProgram.getUniforms();for(let Qt=0;Qt<nt;Qt++)er.setValue(_,"_gl_DrawID",Qt),ft.render(Oe[Qt]/Jt,vt[Qt])}else if(X.isInstancedMesh)ft.renderInstances(Je,Mt,X.count);else if(ee.isInstancedBufferGeometry){const Oe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,vt=Math.min(ee.instanceCount,Oe);ft.renderInstances(Je,Mt,vt)}else ft.render(Je,Mt)};function wn(M,V,ee){M.transparent===!0&&M.side===Yn&&M.forceSinglePass===!1?(M.side=kt,M.needsUpdate=!0,Us(M,V,ee),M.side=Ri,M.needsUpdate=!0,Us(M,V,ee),M.side=Yn):Us(M,V,ee)}this.compile=function(M,V,ee=null){ee===null&&(ee=M),T=Ae.get(ee),T.init(V),I.push(T),ee.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),M!==ee&&M.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights();const ie=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let Ee=0;Ee<ge.length;Ee++){const Ie=ge[Ee];wn(Ie,ee,X),ie.add(Ie)}else wn(ge,ee,X),ie.add(ge)}),T=I.pop(),ie},this.compileAsync=function(M,V,ee=null){const ie=this.compile(M,V,ee);return new Promise(X=>{function ge(){if(ie.forEach(function(Ee){Y.get(Ee).currentProgram.isReady()&&ie.delete(Ee)}),ie.size===0){X(M);return}setTimeout(ge,10)}W.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let xn=null;function Hd(M){xn&&xn(M)}function hc(){Ui.stop()}function pc(){Ui.start()}const Ui=new Nd;Ui.setAnimationLoop(Hd),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(M){xn=M,Se.setAnimationLoop(M),M===null?Ui.stop():Ui.start()},Se.addEventListener("sessionstart",hc),Se.addEventListener("sessionend",pc),this.render=function(M,V){if(V!==void 0&&V.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(V),V=Se.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,V,b),T=Ae.get(M,I.length),T.init(V),I.push(T),Be.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),oe.setFromProjectionMatrix(Be,Ln,V.reversedDepth),ye=this.localClippingEnabled,le=Te.init(this.clippingPlanes,ye),y=he.get(M,w.length),y.init(),w.push(y),Se.enabled===!0&&Se.isPresenting===!0){const ge=C.xr.getDepthSensingMesh();ge!==null&&qo(ge,V,-1/0,C.sortObjects)}qo(M,V,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(we,Ve),A=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,A&&me.addToRenderList(y,M),this.info.render.frame++,le===!0&&Te.beginShadows();const ee=T.state.shadowsArray;ae.render(ee,M,V),le===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=y.opaque,X=y.transmissive;if(T.setupLights(),V.isArrayCamera){const ge=V.cameras;if(X.length>0)for(let Ee=0,Ie=ge.length;Ee<Ie;Ee++){const Ce=ge[Ee];xc(ie,X,M,Ce)}A&&me.render(M);for(let Ee=0,Ie=ge.length;Ee<Ie;Ee++){const Ce=ge[Ee];mc(y,M,Ce,Ce.viewport)}}else X.length>0&&xc(ie,X,M,V),A&&me.render(M),mc(y,M,V);b!==null&&E===0&&($.updateMultisampleRenderTarget(b),$.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(C,M,V),N.resetDefaultState(),O=-1,J=null,I.pop(),I.length>0?(T=I[I.length-1],le===!0&&Te.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function qo(M,V,ee,ie){if(M.visible===!1)return;if(M.layers.test(V.layers)){if(M.isGroup)ee=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(V);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||oe.intersectsSprite(M)){ie&&ce.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Be);const Ee=re.update(M),Ie=M.material;Ie.visible&&y.push(M,Ee,Ie,ee,ce.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||oe.intersectsObject(M))){const Ee=re.update(M),Ie=M.material;if(ie&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ce.copy(M.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ce.copy(Ee.boundingSphere.center)),ce.applyMatrix4(M.matrixWorld).applyMatrix4(Be)),Array.isArray(Ie)){const Ce=Ee.groups;for(let Ge=0,We=Ce.length;Ge<We;Ge++){const Ne=Ce[Ge],Je=Ie[Ne.materialIndex];Je&&Je.visible&&y.push(M,Ee,Je,ee,ce.z,Ne)}}else Ie.visible&&y.push(M,Ee,Ie,ee,ce.z,null)}}const ge=M.children;for(let Ee=0,Ie=ge.length;Ee<Ie;Ee++)qo(ge[Ee],V,ee,ie)}function mc(M,V,ee,ie){const{opaque:X,transmissive:ge,transparent:Ee}=M;T.setupLightsView(ee),le===!0&&Te.setGlobalState(C.clippingPlanes,ee),ie&&P.viewport(q.copy(ie)),X.length>0&&Ls(X,V,ee),ge.length>0&&Ls(ge,V,ee),Ee.length>0&&Ls(Ee,V,ee),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function xc(M,V,ee,ie){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;T.state.transmissionRenderTarget[ie.id]===void 0&&(T.state.transmissionRenderTarget[ie.id]=new Ji(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?zr:oi,minFilter:ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ge=T.state.transmissionRenderTarget[ie.id],Ee=ie.viewport||q;ge.setSize(Ee.z*C.transmissionResolutionScale,Ee.w*C.transmissionResolutionScale);const Ie=C.getRenderTarget(),Ce=C.getActiveCubeFace(),Ge=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(G),B=C.getClearAlpha(),B<1&&C.setClearColor(16777215,.5),C.clear(),A&&me.render(ee);const We=C.toneMapping;C.toneMapping=Ai;const Ne=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),T.setupLightsView(ie),le===!0&&Te.setGlobalState(C.clippingPlanes,ie),Ls(M,ee,ie),$.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge),W.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ct=0,Mt=V.length;ct<Mt;ct++){const yt=V[ct],{object:ft,geometry:Oe,material:vt,group:nt}=yt;if(vt.side===Yn&&ft.layers.test(ie.layers)){const Jt=vt.side;vt.side=kt,vt.needsUpdate=!0,gc(ft,ee,ie,Oe,vt,nt),vt.side=Jt,vt.needsUpdate=!0,Je=!0}}Je===!0&&($.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge))}C.setRenderTarget(Ie,Ce,Ge),C.setClearColor(G,B),Ne!==void 0&&(ie.viewport=Ne),C.toneMapping=We}function Ls(M,V,ee){const ie=V.isScene===!0?V.overrideMaterial:null;for(let X=0,ge=M.length;X<ge;X++){const Ee=M[X],{object:Ie,geometry:Ce,group:Ge}=Ee;let We=Ee.material;We.allowOverride===!0&&ie!==null&&(We=ie),Ie.layers.test(ee.layers)&&gc(Ie,V,ee,Ce,We,Ge)}}function gc(M,V,ee,ie,X,ge){M.onBeforeRender(C,V,ee,ie,X,ge),M.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(C,V,ee,ie,M,ge),X.transparent===!0&&X.side===Yn&&X.forceSinglePass===!1?(X.side=kt,X.needsUpdate=!0,C.renderBufferDirect(ee,V,ie,X,M,ge),X.side=Ri,X.needsUpdate=!0,C.renderBufferDirect(ee,V,ie,X,M,ge),X.side=Yn):C.renderBufferDirect(ee,V,ie,X,M,ge),M.onAfterRender(C,V,ee,ie,X,ge)}function Us(M,V,ee){V.isScene!==!0&&(V=ze);const ie=Y.get(M),X=T.state.lights,ge=T.state.shadowsArray,Ee=X.state.version,Ie=Z.getParameters(M,X.state,ge,V,ee),Ce=Z.getProgramCacheKey(Ie);let Ge=ie.programs;ie.environment=M.isMeshStandardMaterial?V.environment:null,ie.fog=V.fog,ie.envMap=(M.isMeshStandardMaterial?x:g).get(M.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&M.envMap===null?V.environmentRotation:M.envMapRotation,Ge===void 0&&(M.addEventListener("dispose",Xe),Ge=new Map,ie.programs=Ge);let We=Ge.get(Ce);if(We!==void 0){if(ie.currentProgram===We&&ie.lightsStateVersion===Ee)return vc(M,Ie),We}else Ie.uniforms=Z.getUniforms(M),M.onBeforeCompile(Ie,C),We=Z.acquireProgram(Ie,Ce),Ge.set(Ce,We),ie.uniforms=Ie.uniforms;const Ne=ie.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ne.clippingPlanes=Te.uniform),vc(M,Ie),ie.needsLights=Xd(M),ie.lightsStateVersion=Ee,ie.needsLights&&(Ne.ambientLightColor.value=X.state.ambient,Ne.lightProbe.value=X.state.probe,Ne.directionalLights.value=X.state.directional,Ne.directionalLightShadows.value=X.state.directionalShadow,Ne.spotLights.value=X.state.spot,Ne.spotLightShadows.value=X.state.spotShadow,Ne.rectAreaLights.value=X.state.rectArea,Ne.ltc_1.value=X.state.rectAreaLTC1,Ne.ltc_2.value=X.state.rectAreaLTC2,Ne.pointLights.value=X.state.point,Ne.pointLightShadows.value=X.state.pointShadow,Ne.hemisphereLights.value=X.state.hemi,Ne.directionalShadowMap.value=X.state.directionalShadowMap,Ne.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ne.spotShadowMap.value=X.state.spotShadowMap,Ne.spotLightMatrix.value=X.state.spotLightMatrix,Ne.spotLightMap.value=X.state.spotLightMap,Ne.pointShadowMap.value=X.state.pointShadowMap,Ne.pointShadowMatrix.value=X.state.pointShadowMatrix),ie.currentProgram=We,ie.uniformsList=null,We}function _c(M){if(M.uniformsList===null){const V=M.currentProgram.getUniforms();M.uniformsList=xo.seqWithValue(V.seq,M.uniforms)}return M.uniformsList}function vc(M,V){const ee=Y.get(M);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.batchingColor=V.batchingColor,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.instancingMorph=V.instancingMorph,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function Gd(M,V,ee,ie,X){V.isScene!==!0&&(V=ze),$.resetTextureUnits();const ge=V.fog,Ee=ie.isMeshStandardMaterial?V.environment:null,Ie=b===null?C.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Pi,Ce=(ie.isMeshStandardMaterial?x:g).get(ie.envMap||Ee),Ge=ie.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,We=!!ee.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ne=!!ee.morphAttributes.position,Je=!!ee.morphAttributes.normal,ct=!!ee.morphAttributes.color;let Mt=Ai;ie.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Mt=C.toneMapping);const yt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ft=yt!==void 0?yt.length:0,Oe=Y.get(ie),vt=T.state.lights;if(le===!0&&(ye===!0||M!==J)){const Ht=M===J&&ie.id===O;Te.setState(ie,M,Ht)}let nt=!1;ie.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==vt.state.version||Oe.outputColorSpace!==Ie||X.isBatchedMesh&&Oe.batching===!1||!X.isBatchedMesh&&Oe.batching===!0||X.isBatchedMesh&&Oe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Oe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Oe.instancing===!1||!X.isInstancedMesh&&Oe.instancing===!0||X.isSkinnedMesh&&Oe.skinning===!1||!X.isSkinnedMesh&&Oe.skinning===!0||X.isInstancedMesh&&Oe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Oe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Oe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Oe.instancingMorph===!1&&X.morphTexture!==null||Oe.envMap!==Ce||ie.fog===!0&&Oe.fog!==ge||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Te.numPlanes||Oe.numIntersection!==Te.numIntersection)||Oe.vertexAlphas!==Ge||Oe.vertexTangents!==We||Oe.morphTargets!==Ne||Oe.morphNormals!==Je||Oe.morphColors!==ct||Oe.toneMapping!==Mt||Oe.morphTargetsCount!==ft)&&(nt=!0):(nt=!0,Oe.__version=ie.version);let Jt=Oe.currentProgram;nt===!0&&(Jt=Us(ie,V,X));let er=!1,Qt=!1,Gr=!1;const St=Jt.getUniforms(),Yt=Oe.uniforms;if(P.useProgram(Jt.program)&&(er=!0,Qt=!0,Gr=!0),ie.id!==O&&(O=ie.id,Qt=!0),er||J!==M){P.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),St.setValue(_,"projectionMatrix",M.projectionMatrix),St.setValue(_,"viewMatrix",M.matrixWorldInverse);const Kt=St.map.cameraPosition;Kt!==void 0&&Kt.setValue(_,ne.setFromMatrixPosition(M.matrixWorld)),Q.logarithmicDepthBuffer&&St.setValue(_,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&St.setValue(_,"isOrthographic",M.isOrthographicCamera===!0),J!==M&&(J=M,Qt=!0,Gr=!0)}if(X.isSkinnedMesh){St.setOptional(_,X,"bindMatrix"),St.setOptional(_,X,"bindMatrixInverse");const Ht=X.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),St.setValue(_,"boneTexture",Ht.boneTexture,$))}X.isBatchedMesh&&(St.setOptional(_,X,"batchingTexture"),St.setValue(_,"batchingTexture",X._matricesTexture,$),St.setOptional(_,X,"batchingIdTexture"),St.setValue(_,"batchingIdTexture",X._indirectTexture,$),St.setOptional(_,X,"batchingColorTexture"),X._colorsTexture!==null&&St.setValue(_,"batchingColorTexture",X._colorsTexture,$));const ln=ee.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Fe.update(X,ee,Jt),(Qt||Oe.receiveShadow!==X.receiveShadow)&&(Oe.receiveShadow=X.receiveShadow,St.setValue(_,"receiveShadow",X.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Yt.envMap.value=Ce,Yt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&V.environment!==null&&(Yt.envMapIntensity.value=V.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=Bb()),Qt&&(St.setValue(_,"toneMappingExposure",C.toneMappingExposure),Oe.needsLights&&Wd(Yt,Gr),ge&&ie.fog===!0&&xe.refreshFogUniforms(Yt,ge),xe.refreshMaterialUniforms(Yt,ie,pe,fe,T.state.transmissionRenderTarget[M.id]),xo.upload(_,_c(Oe),Yt,$)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(xo.upload(_,_c(Oe),Yt,$),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&St.setValue(_,"center",X.center),St.setValue(_,"modelViewMatrix",X.modelViewMatrix),St.setValue(_,"normalMatrix",X.normalMatrix),St.setValue(_,"modelMatrix",X.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Ht=ie.uniformsGroups;for(let Kt=0,$o=Ht.length;Kt<$o;Kt++){const Ni=Ht[Kt];Me.update(Ni,Jt),Me.bind(Ni,Jt)}}return Jt}function Wd(M,V){M.ambientLightColor.needsUpdate=V,M.lightProbe.needsUpdate=V,M.directionalLights.needsUpdate=V,M.directionalLightShadows.needsUpdate=V,M.pointLights.needsUpdate=V,M.pointLightShadows.needsUpdate=V,M.spotLights.needsUpdate=V,M.spotLightShadows.needsUpdate=V,M.rectAreaLights.needsUpdate=V,M.hemisphereLights.needsUpdate=V}function Xd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,V,ee){const ie=Y.get(M);ie.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),Y.get(M.texture).__webglTexture=V,Y.get(M.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ee,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,V){const ee=Y.get(M);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0};const qd=_.createFramebuffer();this.setRenderTarget=function(M,V=0,ee=0){b=M,k=V,E=ee;let ie=!0,X=null,ge=!1,Ee=!1;if(M){const Ce=Y.get(M);if(Ce.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(_.FRAMEBUFFER,null),ie=!1;else if(Ce.__webglFramebuffer===void 0)$.setupRenderTarget(M);else if(Ce.__hasExternalTextures)$.rebindTextures(M,Y.get(M.texture).__webglTexture,Y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ne=M.depthTexture;if(Ce.__boundDepthTexture!==Ne){if(Ne!==null&&Y.has(Ne)&&(M.width!==Ne.image.width||M.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(M)}}const Ge=M.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ee=!0);const We=Y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(We[V])?X=We[V][ee]:X=We[V],ge=!0):M.samples>0&&$.useMultisampledRTT(M)===!1?X=Y.get(M).__webglMultisampledFramebuffer:Array.isArray(We)?X=We[ee]:X=We,q.copy(M.viewport),z.copy(M.scissor),se=M.scissorTest}else q.copy(Ze).multiplyScalar(pe).floor(),z.copy(et).multiplyScalar(pe).floor(),se=tt;if(ee!==0&&(X=qd),P.bindFramebuffer(_.FRAMEBUFFER,X)&&ie&&P.drawBuffers(M,X),P.viewport(q),P.scissor(z),P.setScissorTest(se),ge){const Ce=Y.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ce.__webglTexture,ee)}else if(Ee){const Ce=V;for(let Ge=0;Ge<M.textures.length;Ge++){const We=Y.get(M.textures[Ge]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+Ge,We.__webglTexture,ee,Ce)}}else if(M!==null&&ee!==0){const Ce=Y.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ce.__webglTexture,ee)}O=-1},this.readRenderTargetPixels=function(M,V,ee,ie,X,ge,Ee,Ie=0){if(!(M&&M.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){P.bindFramebuffer(_.FRAMEBUFFER,Ce);try{const Ge=M.textures[Ie],We=Ge.format,Ne=Ge.type;if(!Q.textureFormatReadable(We)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ne)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=M.width-ie&&ee>=0&&ee<=M.height-X&&(M.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ie),_.readPixels(V,ee,ie,X,He.convert(We),He.convert(Ne),ge))}finally{const Ge=b!==null?Y.get(b).__webglFramebuffer:null;P.bindFramebuffer(_.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(M,V,ee,ie,X,ge,Ee,Ie=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce)if(V>=0&&V<=M.width-ie&&ee>=0&&ee<=M.height-X){P.bindFramebuffer(_.FRAMEBUFFER,Ce);const Ge=M.textures[Ie],We=Ge.format,Ne=Ge.type;if(!Q.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Je),_.bufferData(_.PIXEL_PACK_BUFFER,ge.byteLength,_.STREAM_READ),M.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ie),_.readPixels(V,ee,ie,X,He.convert(We),He.convert(Ne),0);const ct=b!==null?Y.get(b).__webglFramebuffer:null;P.bindFramebuffer(_.FRAMEBUFFER,ct);const Mt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await J0(_,Mt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Je),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,ge),_.deleteBuffer(Je),_.deleteSync(Mt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,V=null,ee=0){const ie=Math.pow(2,-ee),X=Math.floor(M.image.width*ie),ge=Math.floor(M.image.height*ie),Ee=V!==null?V.x:0,Ie=V!==null?V.y:0;$.setTexture2D(M,0),_.copyTexSubImage2D(_.TEXTURE_2D,ee,0,0,Ee,Ie,X,ge),P.unbindTexture()};const $d=_.createFramebuffer(),jd=_.createFramebuffer();this.copyTextureToTexture=function(M,V,ee=null,ie=null,X=0,ge=null){ge===null&&(X!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=X,X=0):ge=0);let Ee,Ie,Ce,Ge,We,Ne,Je,ct,Mt;const yt=M.isCompressedTexture?M.mipmaps[ge]:M.image;if(ee!==null)Ee=ee.max.x-ee.min.x,Ie=ee.max.y-ee.min.y,Ce=ee.isBox3?ee.max.z-ee.min.z:1,Ge=ee.min.x,We=ee.min.y,Ne=ee.isBox3?ee.min.z:0;else{const ln=Math.pow(2,-X);Ee=Math.floor(yt.width*ln),Ie=Math.floor(yt.height*ln),M.isDataArrayTexture?Ce=yt.depth:M.isData3DTexture?Ce=Math.floor(yt.depth*ln):Ce=1,Ge=0,We=0,Ne=0}ie!==null?(Je=ie.x,ct=ie.y,Mt=ie.z):(Je=0,ct=0,Mt=0);const ft=He.convert(V.format),Oe=He.convert(V.type);let vt;V.isData3DTexture?($.setTexture3D(V,0),vt=_.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?($.setTexture2DArray(V,0),vt=_.TEXTURE_2D_ARRAY):($.setTexture2D(V,0),vt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,V.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,V.unpackAlignment);const nt=_.getParameter(_.UNPACK_ROW_LENGTH),Jt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),er=_.getParameter(_.UNPACK_SKIP_PIXELS),Qt=_.getParameter(_.UNPACK_SKIP_ROWS),Gr=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,yt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,yt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ge),_.pixelStorei(_.UNPACK_SKIP_ROWS,We),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ne);const St=M.isDataArrayTexture||M.isData3DTexture,Yt=V.isDataArrayTexture||V.isData3DTexture;if(M.isDepthTexture){const ln=Y.get(M),Ht=Y.get(V),Kt=Y.get(ln.__renderTarget),$o=Y.get(Ht.__renderTarget);P.bindFramebuffer(_.READ_FRAMEBUFFER,Kt.__webglFramebuffer),P.bindFramebuffer(_.DRAW_FRAMEBUFFER,$o.__webglFramebuffer);for(let Ni=0;Ni<Ce;Ni++)St&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Y.get(M).__webglTexture,X,Ne+Ni),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Y.get(V).__webglTexture,ge,Mt+Ni)),_.blitFramebuffer(Ge,We,Ee,Ie,Je,ct,Ee,Ie,_.DEPTH_BUFFER_BIT,_.NEAREST);P.bindFramebuffer(_.READ_FRAMEBUFFER,null),P.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||Y.has(M)){const ln=Y.get(M),Ht=Y.get(V);P.bindFramebuffer(_.READ_FRAMEBUFFER,$d),P.bindFramebuffer(_.DRAW_FRAMEBUFFER,jd);for(let Kt=0;Kt<Ce;Kt++)St?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ln.__webglTexture,X,Ne+Kt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,ln.__webglTexture,X),Yt?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ht.__webglTexture,ge,Mt+Kt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ht.__webglTexture,ge),X!==0?_.blitFramebuffer(Ge,We,Ee,Ie,Je,ct,Ee,Ie,_.COLOR_BUFFER_BIT,_.NEAREST):Yt?_.copyTexSubImage3D(vt,ge,Je,ct,Mt+Kt,Ge,We,Ee,Ie):_.copyTexSubImage2D(vt,ge,Je,ct,Ge,We,Ee,Ie);P.bindFramebuffer(_.READ_FRAMEBUFFER,null),P.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Yt?M.isDataTexture||M.isData3DTexture?_.texSubImage3D(vt,ge,Je,ct,Mt,Ee,Ie,Ce,ft,Oe,yt.data):V.isCompressedArrayTexture?_.compressedTexSubImage3D(vt,ge,Je,ct,Mt,Ee,Ie,Ce,ft,yt.data):_.texSubImage3D(vt,ge,Je,ct,Mt,Ee,Ie,Ce,ft,Oe,yt):M.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,ge,Je,ct,Ee,Ie,ft,Oe,yt.data):M.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,ge,Je,ct,yt.width,yt.height,ft,yt.data):_.texSubImage2D(_.TEXTURE_2D,ge,Je,ct,Ee,Ie,ft,Oe,yt);_.pixelStorei(_.UNPACK_ROW_LENGTH,nt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Jt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,er),_.pixelStorei(_.UNPACK_SKIP_ROWS,Qt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Gr),ge===0&&V.generateMipmaps&&_.generateMipmap(vt),P.unbindTexture()},this.initRenderTarget=function(M){Y.get(M).__webglFramebuffer===void 0&&$.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?$.setTextureCube(M,0):M.isData3DTexture?$.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?$.setTexture2DArray(M,0):$.setTexture2D(M,0),P.unbindTexture()},this.resetState=function(){k=0,E=0,b=null,P.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const kb={class:"scene-viewer"},Vb={class:"viewer-hud"},Hb={class:"hud-info"},Gb={class:"hotspot-modal"},Wb={class:"modal-content"},Xb={key:0},qb={key:1},$b={key:0,style:{"text-align":"center",margin:"0 0 10px 0"}},jb=["src","alt"],Yb={key:2},Kb={style:{padding:"10px 0"}},Zb=["src"],Jb=["href"],Qb={key:3},eM={key:0,style:{"text-align":"center",margin:"0 0 10px 0"}},tM=["src"],nM={key:4},iM={key:0},rM={key:1},sM=["src"],tf=.09,nf=.92,oM=Ii({__name:"SceneViewer",emits:["equirect-click","hotspot-opened","hotspot-closed","fov-changed"],setup(n,{expose:e,emit:t}){const i=Qi(),r=t,s=Ue(90),o=Ue(null),a=Ue(null),l=ne=>{if(!ne)return"";let ce=String(ne).trim();if(!ce)return"";if(ce.includes("<iframe")){const _=ce.match(/src=['"]([^'">]+)['"]/i);_&&_[1]&&(ce=_[1])}const ze=ce.toLowerCase();if(ze.startsWith("javascript:")||ze.startsWith("data:"))return"";const D=(_=>{try{const H=new URL(_.startsWith("http")?_:"https://"+_),W=H.hostname.toLowerCase();if(W.includes("youtube.com")||W.includes("youtu.be")){if(H.pathname.includes("/embed/"))return H.href;let Q="";if(W.includes("youtu.be")?Q=H.pathname.replace("/","").split("/").filter(Boolean)[0]||"":H.pathname.startsWith("/shorts/")?Q=H.pathname.split("/").filter(Boolean)[1]||"":H.searchParams.get("v")&&(Q=H.searchParams.get("v")||""),Q)return`https://www.youtube-nocookie.com/embed/${Q}`}if(W.includes("vimeo.com")&&!W.includes("player.vimeo.com")){const Q=H.pathname.split("/").filter(Boolean).pop();if(Q)return`https://player.vimeo.com/video/${Q}`}return H.href}catch{return _}})(ce);try{const _=new URL(D);return encodeURI(_.href)}catch{try{const H=new URL("https://"+D);return encodeURI(H.href)}catch{try{return encodeURI(D)}catch{return""}}}},c=ne=>{try{return new URL(ne.startsWith("http")?ne:"https://"+ne).hostname||""}catch{return"example.com"}};Ue(null);const u=Ue(!1),f=Pr({}),h=Ue(null),p=Pr({}),v=Ue(!1),S=Ue(75);let m=null,d=null,y=null,T=new Jx,w=new at;const I=new Map;let C=null,U=0,k=0,E=0,b=0,O=!1,J=0,q=0;const z=()=>{if(!o.value)return;m=new zx;const ne=o.value.clientWidth||800,ce=o.value.clientHeight||600;d=new dn(75,ne/ce,.1,2e3),d.position.set(0,0,.1),y=new zb({antialias:!0}),y.setSize(ne,ce),y.setPixelRatio(window.devicePixelRatio||1),y.setClearColor(0),y.outputColorSpace=Pi,o.value.appendChild(y.domElement),se(),y.domElement.addEventListener("pointerdown",Ze),window.addEventListener("pointermove",et),window.addEventListener("pointerup",tt),window.addEventListener("wheel",oe,{passive:!1}),y.domElement.addEventListener("click",ye),window.addEventListener("resize",le),Be()},se=()=>{var ze;if(!((ze=i.activeScene)!=null&&ze.imageUrl)||!m)return;const ne=i.activeScene.imageUrl;console.log("loadPanorama: Loading image, URL length:",ne==null?void 0:ne.length),new Yx().load(ne,A=>{console.log("Texture loaded successfully"),m.children.slice().forEach(W=>m.remove(W));const D=new fs(500,60,40),_=D.getAttribute("uv");for(let W=0;W<_.count;W++)_.setX(W,1-_.getX(W));_.needsUpdate=!0,A.colorSpace=Pi;const H=new us({map:A,side:kt});C=new Tn(D,H),m.add(C),G()},void 0,A=>{console.error("Panorama load error",A),m.children.slice().forEach(H=>m.remove(H));const D=new fs(500,32,24),_=new us({color:2236962,side:kt});C=new Tn(D,_),m.add(C),G()})},G=()=>{if(!m)return;for(const ce of I.values())try{m.remove(ce)}catch{}I.clear();const ne=i.activeScene;ne&&ne.hotspots.forEach(ce=>{const ze=typeof ce.radius=="number"&&Number.isFinite(ce.radius)?ce.radius:10,A=500-1;let D;if(ce.dir&&typeof ce.dir.x=="number")D=new te(ce.dir.x,ce.dir.y,ce.dir.z).multiplyScalar(A);else{const Q=Zt.degToRad(90-ce.y),P=Zt.degToRad(-ce.x+s.value);D=new te().setFromSpherical(new br(A,Q,P))}v.value&&p[ce.id]&&D.applyQuaternion(p[ce.id]);const _=new fs(Math.max(2,ze/2.5),12,12),H=new us({color:new ot(ce.color||"#ff0000"),transparent:!0,opacity:.6}),W=new Tn(_,H);W.position.copy(D),W.userData={hotspotId:ce.id},m.add(W),I.set(ce.id,W)})},B=ne=>{if(!d||!y)return{left:"-9999px",top:"-9999px",display:"none"};const ce=new te(0,0,-1).applyQuaternion(d.quaternion),ze=ne.clone().normalize();if(ce.dot(ze)<0)return{left:"10px",top:y.domElement.clientHeight/2-15+"px"};const D=ne.clone().project(d),_=y.domElement,H=(D.x*.5+.5)*_.clientWidth,W=(-D.y*.5+.5)*_.clientHeight;return H<0||H>_.clientWidth||W<0||W>_.clientHeight?{left:"10px",top:_.clientHeight/2-15+"px"}:{left:H+"px",top:W+"px"}},j=ne=>{const ce=I.get(ne.id);if(ce&&d&&y)return B(ce.position);if(ne.dir&&typeof ne.dir.x=="number"){const _=new te(ne.dir.x,ne.dir.y,ne.dir.z).multiplyScalar(499);return B(_)}const ze=Zt.degToRad(90-ne.y),A=Zt.degToRad(-ne.x+s.value),D=new te().setFromSpherical(new br(500-1,ze,A));return B(D)},fe=ne=>{if(ne.dir&&typeof ne.dir.x=="number"){const ce=new te(ne.dir.x,ne.dir.y,ne.dir.z),ze=new br().setFromVector3(ce),A=ze.phi,D=ze.theta,_=90-Zt.radToDeg(A);return{x:((-Zt.radToDeg(D)+s.value)%360+360)%360,y:_}}return{x:ne.x,y:ne.y}},pe=()=>{if(!i.activeScene||!y||!d)return;const ne=y.domElement(i.activeScene.hotspots||[]).forEach(ce=>{const ze=fe(ce),D=((ze.x-U)%360+540)%360-180,_=ze.y-k;let H;if(ce.dir&&typeof ce.dir.x=="number")H=new te(ce.dir.x,ce.dir.y,ce.dir.z).multiplyScalar(500-1);else{const R=Zt.degToRad(90-ce.y),Y=Zt.degToRad(-ce.x+s.value);H=new te().setFromSpherical(new br(500-1,R,Y))}v.value&&p[ce.id]&&H.applyQuaternion(p[ce.id]);const W=H.clone().project(d),Q=(W.x*.5+.5)*ne.clientWidth,P=(-W.y*.5+.5)*ne.clientHeight;f[ce.id]={dx:Math.round(D),dy:Math.round(_),style:{left:Q+"px",top:P+"px"}},hotspotScreenPositions[ce.id]=j(ce)})},we=()=>{a.value=null,r("hotspot-closed")},Ve=ne=>{ne&&(i.setActiveScene(ne),a.value=null)},Ze=ne=>{O=!0,ne.clientX,ne.clientY,J=ne.clientX,q=ne.clientY},et=ne=>{if(!O)return;const ce=ne.clientX-J,ze=ne.clientY-q;E=ce*tf,b=ze*tf,U+=E,k+=b,k=Math.max(-85,Math.min(85,k)),J=ne.clientX,q=ne.clientY},tt=()=>{O=!1},oe=ne=>{ne.preventDefault(),d&&(d.fov=Math.max(30,Math.min(100,d.fov+ne.deltaY*.05)),S.value=d.fov,d.updateProjectionMatrix(),r("fov-changed",d.fov))},le=()=>{if(!o.value||!d||!y)return;const ne=o.value.clientWidth,ce=o.value.clientHeight;d.aspect=ne/ce,d.updateProjectionMatrix(),y.setSize(ne,ce)},ye=ne=>{var A,D,_;if(!y||!d)return;const ce=y.domElement.getBoundingClientRect();w.x=(ne.clientX-ce.left)/ce.width*2-1,w.y=-((ne.clientY-ce.top)/ce.height)*2+1,T.setFromCamera(w,d);const ze=T.intersectObjects(Array.from(I.values()));if(ze.length>0){const W=(A=ze[0].object.userData)==null?void 0:A.hotspotId;if(W){const Q=(D=i.activeScene)==null?void 0:D.hotspots.find(P=>P.id===W);if(!Q)return;u.value?(h.value=W,pe(),vr("Hotspot sélectionné pour calibration","info")):Q.type==="scene"?Ve((_=Q.content)==null?void 0:_.linkedSceneId):a.value=Q}}else{const H=T.ray.direction.clone().normalize(),W=new br().setFromVector3(H),Q=W.phi,P=W.theta,R=90-Zt.radToDeg(Q),$=((-Zt.radToDeg(P)+s.value)%360+360)%360;r("equirect-click",{x:$,y:R,dir:{x:H.x,y:H.y,z:H.z}})}},Be=()=>{if(requestAnimationFrame(Be),E*=nf,b*=nf,U+=E,k+=b,k=Math.max(-85,Math.min(85,k)),d&&(d.rotation.order="YXZ",d.rotation.y=Zt.degToRad(U),d.rotation.x=Zt.degToRad(k)),y&&m&&d)try{u.value&&pe(),y.render(m,d)}catch(ne){console.error("Render error",ne)}};return e({getHotspotScreenPosition:j,currentFov:S}),No(()=>{z()}),Fo(()=>{try{window.removeEventListener("pointermove",et),window.removeEventListener("pointerup",tt),window.removeEventListener("wheel",oe),window.removeEventListener("resize",le),y==null||y.domElement.removeEventListener("pointerdown",Ze),y==null||y.domElement.removeEventListener("click",ye),y&&(y.dispose(),y.forceContextLoss&&y.forceContextLoss())}catch(ne){console.warn("Cleanup error",ne)}}),Sn(()=>i.activeScene,()=>{var ne;((ne=i.activeScene)==null?void 0:ne.calibrationOffsetX)!==void 0?s.value=i.activeScene.calibrationOffsetX:s.value=90,se()}),Sn(()=>{var ne;return(ne=i.activeScene)==null?void 0:ne.hotspots},()=>{G()},{deep:!0}),(ne,ce)=>{var ze;return Pe(),Le("div",kb,[F("div",{ref_key:"viewerContainer",ref:o,class:"viewer-container"},null,512),F("div",Vb,[F("div",Hb,[F("h3",null,gt((ze=Qe(i).activeScene)==null?void 0:ze.name),1),ce[2]||(ce[2]=F("p",null,"🖱️ Cliquer + glisser pour naviguer | Scroll pour zoomer",-1))])]),a.value?(Pe(),Le("div",{key:0,class:"hotspot-modal-overlay",onClick:ce[1]||(ce[1]=Nt(A=>we(),["self"]))},[F("div",Gb,[F("button",{onClick:ce[0]||(ce[0]=A=>we()),class:"modal-close"},"✕"),F("div",Wb,[a.value.type==="text"?(Pe(),Le("div",Xb,[F("p",null,gt(a.value.content.text),1)])):a.value.type==="image"?(Pe(),Le("div",qb,[a.value.content.imageTitle?(Pe(),Le("h3",$b,gt(a.value.content.imageTitle),1)):xt("",!0),F("img",{src:a.value.content.imageUrl,alt:a.value.content.imageTitle},null,8,jb)])):a.value.type==="link"?(Pe(),Le("div",Yb,[F("div",Kb,[F("img",{src:"https://www.google.com/s2/favicons?sz=128&domain="+c(a.value.content.linkUrl),style:{width:"32px",height:"32px","margin-right":"10px",display:"inline-block"}},null,8,Zb),F("a",{href:a.value.content.linkUrl,target:"_blank",rel:"noopener noreferrer",style:{"font-size":"16px",color:"#0066cc","text-decoration":"underline"}},gt(a.value.content.title||"Ouvrir le lien"),9,Jb)])])):a.value.type==="iframe"?(Pe(),Le("div",Qb,[a.value.content.imageTitle?(Pe(),Le("h3",eM,gt(a.value.content.imageTitle),1)):xt("",!0),F("iframe",{src:l(a.value.content.iframeUrl),frameborder:"0",style:{width:"100%",height:"60vh"},referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,tM)])):a.value.type==="text-image"?(Pe(),Le("div",nM,[a.value.content.title?(Pe(),Le("h3",iM,gt(a.value.content.title),1)):xt("",!0),a.value.content.text?(Pe(),Le("p",rM,gt(a.value.content.text),1)):xt("",!0),a.value.content.imageUrl?(Pe(),Le("img",{key:2,src:a.value.content.imageUrl},null,8,sM)):xt("",!0)])):xt("",!0)])])])):xt("",!0)])}}});const aM=Li(oM,[["__scopeId","data-v-ec704e91"]]),lM={class:"scene-editor"},cM={class:"editor-canvas"},uM=["onMousedown","title"],fM={class:"hotspot-index"},dM={class:"info-header"},hM={class:"info-content"},pM={class:"form-group"},mM={key:0,class:"form-group"},xM={class:"form-group"},gM={class:"form-group"},_M={class:"image-upload-group"},vM={key:0,class:"image-preview"},SM=["src","alt"],bM={class:"form-group"},MM={class:"form-group"},yM={class:"form-group"},EM={class:"image-upload-group"},TM={key:0,class:"image-preview"},AM=["src","alt"],wM={class:"form-group"},CM={class:"form-group"},RM={class:"form-group"},PM={class:"form-group"},DM={class:"form-group"},IM={key:5,class:"form-group"},LM=["value"],UM={class:"form-group"},NM={class:"form-group"},FM={class:"color-picker-enhanced"},OM={class:"color-presets"},BM=["onClick","title"],zM={class:"color-picker-wrapper"},kM={class:"form-group",style:{display:"flex",gap:"20px"}},VM={style:{display:"flex","align-items":"center",gap:"8px",cursor:"pointer"}},HM={style:{display:"flex","align-items":"center",gap:"8px",cursor:"pointer"}},GM={class:"form-group"},WM={style:{display:"flex","align-items":"center",gap:"15px"}},XM={class:"current-icon-display",style:{"font-size":"26px"}},qM={class:"form-group"},$M={class:"toolbar"},jM={class:"modal icon-picker-modal"},YM={class:"modal-header"},KM={class:"header-controls"},ZM=["title"],JM={class:"icon-count"},QM=["onClick","title"],ey=Ii({__name:"SceneEditor",setup(n){const e=Qi(),t=Ue("select");Ue(!1);const i=Ue(!0);Ue(!1);const r=Ue(""),s=Ue(0),o=Ue(0),a=Ue(null),l=Ue(null),c=Ue(!1);Ue(null);const u=Ue(null),f=Ue(0),h=Ue("#ff0000"),p=Ue(null),v=Ue(""),S=Ue(!1),m=Ue(1),d=Ue(75),y=()=>{var P,R;return(R=(P=u.value)==null?void 0:P.currentFov)!=null&&R.value?u.value.currentFov.value:75},T=()=>{const P=y();return P>0?75/P:1},w=["#FF0000","#FF6B35","#FFA500","#FFD700","#00FF00","#00CED1","#0066FF","#6B35FF","#FF00FF","#FFFFFF","#808080","#000000"],I=["📍","📌","🧭","🗺️","🌍","⬆️","⬇️","⬅️","➡️","🌟","⭐","💫","✨","☀️","🏠","🏢","🎯","🔗","💡","🎥","📸","📷","📹","🎨","🎭","🎪","🎵","🎶","🎤","🎧","🎬","📺","📻","📡","🔍","🔎","⚠️","❓","❔","✅","❌","🏆","🥇","🥈","🥉","🎁","🎀","🎊","🎉","💝","👁️","👀","💬","💭","📢","📣","🔔","🔕","📝","📋","📄","📃","📊","📈","📉","🔧","🔨","🛠️","⚒️","🔑","🗝️","🚪","🪟","🏔️","⛰️","🌋","🏖️","🏝️","⛲","🌊"],C=["📍","📌","🧭","🗺️","🌎","🌏","🗾","🏕️","🏜️","🏞️","🏟️","🏛️","🏗️","🏘️","🏚️","🏠","🏡","🏢","🏣","🏤","🏥","🏦","🏨","🏩","🏪","🏫","🏬","🏭","🏯","🏰","💒","🗼","🗽","⛪","🕌","🛕","🕍","⛩️","🕋","⛺","🌁","🌃","🏙️","🌄","🌅","🌆","🌇","🌉","🎠","🎡","🎢","↗️","↘️","↙️","↖️","↕️","↔️","↩️","↪️","⤴️","⤵️","🔃","🔄","🔙","🔚","🔛","🔜","🔝","🔀","🔁","🔂","▶️","⏸️","⏹️","⏺️","⏭️","⏮️","⏪","⏩","⏏️","🌠","🔆","🔅","💥","💢","💦","💧","💨","🌀","🌈","🌤️","⛅","🌥️","☁️","🌦️","🌧️","⛈️","🌩️","🌨️","❄️","🔵","🟢","🟡","🟠","🔴","🟣","🟤","⚫","⚪","🟥","🟧","🟨","🟩","🟦","🟪","🟫","⬛","⬜","🔶","🔷","🔸","🔹","🔺","🔻","💠","🔘","🔳","🔲","◾","◽","◼️","◻️","🎞️","🖼️","🖌️","🖍️","🎼","🎹","🎺","🎷","🎸","🪕","🎻","🥁","🎏","🎐","🎌","🎃","🎆","🎇","🎫","🎖️","🔦","🏮","🔬","🔭","💎","💍","🔓","🔒","🔐","🔏","🛒","🛏️","🛋️","🪑","🛎️","💿","💾","💽","📀","🧿","🪡","🧵","🧶","🪒","🍎","🍊","🍋","🍌","🍉","🍇","🍓","🫐","🍈","🍒","🍑","🥭","🍍","🥥","🥑","🍅","🍆","🥔","🥕","🌽","🌶️","🥒","🥬","🥦","🧄","🧅","🍞","🥐","🥯","🍖","🍗","🥩","🍔","🍟","🍕","🌭","🥪","🌮","🌯","🥙","🧆","🍳","🍲","🥘","🥗","🍿","🥫","🍝","🍜","🍛","🍣","🍱","🥟","🦪","🍤","🍙","🍚","🍘","🍥","🥠","🥮","🍢","🍡","🍧","🍨","🍦","🍰","🎂","🧁","🍮","🍭","🍬","🍫","🍩","🍪","🌰","🍯","☕","🍵","🍶","🍾","🍷","🍸","🍹","🍺","🍻","🥂","🥃","🥤","🧋","🧃","🧉","🧊","🥢","🍽️","🍴","🥄","🔪","🧂","🧈","🚗","🚕","🚙","🚌","🚎","🏎️","🚓","🚑","🚒","🚐","🛻","🚚","🚛","🚜","🏍️","🛵","🦯","🦽","🦼","🛺","🚲","🛴","🛹","🛼","✈️","🛩️","💺","🛰️","🚁","🛶","⛵","🚤","🛳️","⛴️","🛥️","⛱️","📰","📓","📔","📒","📕","📗","📘","📙","📚","📖","🗨️","🗯️","📎","🖇️","✉️","📧","📨","📩","📤","📥","📦","🏷️","📪","📫","📬","📭","📮","📜","🧾","📇","🗃️","🗳️","🗂️","🗞️","🧷","🧸","❓","❔","❕","❗","‼️","⁉️","〰️","💯","✔️","❎","➕","➖","➗","✖️","🆕","🆓","🆙","🆗","🆒","🆖","🆘","🚫","🔞","📵","🚭","🚯","🚱","🚷","♻️","♿","🅿️","🈂️","🈷️","🈶️","🈯️","🈹️","🈚️","🈲️","🉐","🉑","㊙️","㊗️","🈴","🈵","🈸","🈺","🈻","💤","🕳️","👁️‍🗨️","🎙️","🎚️","🎛️","📱","☎️","📞","📟","📠","🔋","🔌","💻","🖥️","🖨️","⌨️","🖱️","🖲️","🧮","🎦","⏱️","⏲️","⏳","⌛","⏰","🕰️","⌚","📲","🕹️","🗜️","📼","🐕","🐶","🐩","🦮","🐈","🐓","🐔","🐣","🐤","🐥","🐦","🐧","🐨","🐘","🦛","🦏","🐪","🐫","🦒","🦓","🦍","🦧","🐒","🐵","🐱","🐭","🐹","🐰","🦊","🦝","🐗","🐴","🦄","🐝","🪱","🐛","🦋","🐌","🐞","🐜","🪰","🪳","🕷️","🦂","🐢","🐍","🦎","🦖","🦕","🐙","🦑","🦐","🦞","🦟","🦗","🕸️","🐚","🧲","⚗️","🧪","🧫","🧬","💉","💊","🛗","🪜","🧯","🚬","⚰️","⚱️","🏺","🔮","📿","💈","⚖️","🧰","🗡️","🔱","⚔️","🛡️","🔩","⛓️","🧱","🪝","⚙️","⚽","⚾","🥎","🎾","🏐","🏀","🏈","🏉","🪀","🏓","🏸","🏒","🏑","🥍","🏏","🪃","🥅","⛳","⛸️","🎣","🎽","🎿","⛷️","🏂","🪂","🛷","🥌","🪁","♠️","♥️","♦️","♣️","♟️","🧩","👋","🤚","🖐️","✋","🖖","👌","🤌","🤏","✌️","🤞","🫰","🤟","🤘","🤙","👍","👎","✊","👊","🤛","🤜","👏","🙌","👐","🤲","🤝","🙏","💅","💪","🦾","🦿","🦵","🦶","👂","👃","🧠","🦷","🦴","👅","👄","👨","👩","👦","👧","👶","👴","👵","🧒","🧓","🧑","🌬️","☔","🍏","🍐","🌐","🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘","🌙","🌚","🌛","🌜","🌝","🌞","☄️","👔","👕","👖","🧣","🧤","🧥","🧦","👗","👘","👚","👛","👜","👝","🎒","👞","👟","🥾","🥿","👠","👡","👢","👑","👒","🎩","🧢","💼","👓","🕶️","🥽","⛑️","🪖","🌲","🌳","🌴","🌵","🌾","🌿","🍀","🍁","🍂","🍃","🍄","🌺","🌻","🌼","🌷","🥀","🌹","🏵️","💐","🌸","⚘","🦀","🦞","🦐","🦑","🐠","🐟","🐡","🐬","🐳","🐋","🦈","🦭","🦦","🦥","🦨","🦡","🦘","🦌","🐂","🐃","🐄","🐅","🐆","🐇","🐉","🐊","🐋","🐏","🐐","🐑","🐀","🐁","🐂","🐃","🦬","🐖","🐷","🐽","🐏","🦙","🦌","🦒","🐎","🦓","🦬","🐕‍🦺","🐿️","🦔","🦦","🦇","🐻","🐻‍❄️","🐼","🦘","🦡","🦃","🦚","🦜","🦢","🦩","🕊️","🦅","🦆","🦉","🐓","🐈‍⬛","🦣","🦤","🦙","🐾","🐲","🌴","🎋","🎍","💮","🏮","🧧","🎐","✉️","💌","💝","💖","💗","💓","💞","💕","💟","❣️","💔","❤️","🧡","💛","💚","💙","💜","🤎","🖤","🤍","💯","💢","💬","👁️‍🗨️","🗨️","🗯️","💭","💤","💮","♨️","💈","🎃","🎄","🎆","🎇","🧨","✨","🎈","🎉","🎊","🎋","🎍","🎎","🎏","🎐","🎑","🧧","🎀","🎁","🎗️","🎟️","🎫","🎖️","🏆","🏅","🥇","🥈","🥉","⚽","⚾","🥎","🏀","🏐","🏈","🏉","🎾","🥏","🎳","🏏","🏑","🏒","🥍","🏓","🏸","🥊","🥋","🥅","⛳","⛸️","🎣","🤿","🎽","🎿","🛷","🥌","🎯","🪀","🪁","🎱","🔮","🪄","🧿","🎮","🕹️","🎰","🎲","🧩","🧸","🪅","🪆","🪡","🧵","🪢","🧶","🪢","👓","🕶️","🥽","🥼","🦺","👔","👕","👖","🧣","🧤","🧥","🧦","👗","👘","🥻","🩱","🩲","🩳","👙","👚","👛","👜","👝","🛍️","🎒","🩴","👞","👟","🥾","🥿","👠","👡","👢","👑","👒","🎩","🎓","🧢","🪖","⛑️","📿","💄","💍","💎","🔇","🔈","🔉","🔊","📢","📣","📯","🔔","🔕","🎼","🎵","🎶","🎙️","🎚️","🎛️","🎤","🎧","📻","🎷","🪗","🎸","🎹","🎺","🎻","🪕","🥁","🪘","📱","📲","☎️","📞","📟","📠","🔋","🔌","💻","🖥️","🖨️","⌨️","🖱️","🖲️","💽","💾","💿","📀","🧮","🎥","🎞️","📽️","🎬","📺","📷","📸","📹","📼","🔍","🔎","🕯️","💡","🔦","🏮","🪔","📔","📕","📖","📗","📘","📙","📚","📓","📒","📃","📜","📄","📰","🗞️","📑","🔖","🏷️","💰","🪙","💴","💵","💶","💷","💸","💳","🧾","💹","✉️","📧","📨","📩","📤","📥","📦","📫","📪","📬","📭","📮","🗳️","✏️","✒️","🖋️","🖊️","🖌️","🖍️","📝","💼","📁","📂","🗂️","📅","📆","🗒️","🗓️","📇","📈","📉","📊","📋","📌","📍","📎","🖇️","📏","📐","✂️","🗃️","🗄️","🗑️","🔒","🔓","🔏","🔐","🔑","🗝️","🔨","🪓","⛏️","⚒️","🛠️","🗡️","⚔️","🔫","🪃","🏹","🛡️","🪚","🔧","🪛","🔩","⚙️","🗜️","⚖️","🦯","🔗","⛓️","🪝","🧰","🧲","🪜","⚗️","🧪","🧫","🧬","🔬","🔭","📡","💉","🩸","💊","🩹","🩺","🩼","🚪","🪞","🪟","🛏️","🛋️","🪑","🚽","🪠","🚿","🛁","🪤","🪒","🧴","🧷","🧹","🧺","🧻","🪣","🧼","🪥","🧽","🧯","🛒","🚬","⚰️","🪦","⚱️","🗿","🪧","🏧","🚮","🚰","♿","🚹","🚺","🚻","🚼","🚾","🛗","⚠️","🚸","⛔","🚫","🚳","🚭","🚯","🚱","🚷","📵","🔞","☢️","☣️","⬆️","↗️","➡️","↘️","⬇️","↙️","⬅️","↖️","↕️","↔️","↩️","↪️","⤴️","⤵️","🔃","🔄","🔙","🔚","🔛","🔜","🔝","🛐","⚛️","🕉️","✡️","☸️","☯️","✝️","☦️","☪️","☮️","🕎","🔯","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","⛎","🔀","🔁","🔂","▶️","⏩","⏭️","⏯️","◀️","⏪","⏮️","🔼","⏫","🔽","⏬","⏸️","⏹️","⏺️","⏏️","🎦","🔅","🔆","📶","📳","📴","♀️","♂️","⚧️","✖️","➕","➖","➗","🟰","♾️","‼️","⁉️","❓","❔","❕","❗","〰️","💱","💲","⚕️","♻️","⚜️","🔱","📛","🔰","⭕","✅","☑️","✔️","❌","❎","➰","➿","〽️","✳️","✴️","❇️","©️","®️","™️","#️⃣","*️⃣","0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟","🔠","🔡","🔢","🔣","🔤","🅰️","🆎","🅱️","🆑","🆒","🆓","ℹ️","🆔","Ⓜ️","🆕","🆖","🅾️","🆗","🅿️","🆘","🆙","🆚","🈁","🈂️","🈷️","🈶","🈯","🉐","🈹","🈚","🈲","🉑","🈸","🈴","🈳","㊗️","㊙️","🈺","🈵","🔴","🟠","🟡","🟢","🔵","🟣","🟤","⚫","⚪","🟥","🟧","🟨","🟩","🟦","🟪","🟫","⬛","⬜","◼️","◻️","◾","◽","▪️","▫️","🔶","🔷","🔸","🔹","🔺","🔻","💠","🔘","🔳","🔲"],U=Ue(!1),k=Qn(()=>U.value?C:I),E=()=>{U.value=!U.value},b=P=>({text:"📄",image:"🖼️","text-image":"📰",link:"🔗",iframe:"💻",scene:"⬆️"})[P]||"📍",O=P=>10,J=P=>{if(!P)return O();const R=P.iconSize;return typeof R=="number"&&Number.isFinite(R)?R:O(P.type)},q=Qn(()=>(d.value,T()*3)),z=P=>{const R=typeof P=="number"?P:75;d.value=R,f.value++},se=(P,R)=>{P.button===0&&oe(R)},G=(P,R)=>{const Y=Zt.degToRad(90-R),$=Zt.degToRad(-P+90),g=new te().setFromSpherical(new br(1,Y,$));return{x:g.x,y:g.y,z:g.z}},B=Qn({get:()=>e.activeScene?e.activeScene.hotspots.find(P=>P.id===r.value):null,set:P=>{r.value=(P==null?void 0:P.id)||""}});Sn(()=>{var P;return(P=B.value)==null?void 0:P.color},P=>{P&&(h.value=P)}),Sn(h,P=>{B.value&&(B.value.color=P)}),Sn(()=>B.value,P=>{var R;if((P==null?void 0:P.type)==="iframe"){const $=(((R=P.content)==null?void 0:R.iframeUrl)||"").match(/src="([^"]+)"/);v.value=$?$[1]:""}else v.value=""},{deep:!0});const j=P=>{if(t.value!=="draw")return;const R=Math.max(0,Math.min(360,P.x)),Y=Math.max(-90,Math.min(90,P.y)),$={id:_s(),type:"text",x:R,y:Y,content:{text:"Nouveau point"},radius:10,iconSize:10,color:"#ff0000",visible:!0,hideCircle:!1,showIcon:!0,dir:{x:P.dir.x,y:P.dir.y,z:P.dir.z}};e.addHotspot($),e.project&&Dn.saveProject(e.project),B.value=$},fe=P=>{const R=P.currentTarget.getBoundingClientRect();s.value=P.clientX-R.left,o.value=P.clientY-R.top},pe=(P,R=.55)=>{const Y=(P||"#ff0000").trim();if(/^#([0-9a-fA-F]{6})$/.test(Y)){const $=parseInt(Y.slice(1,3),16),g=parseInt(Y.slice(3,5),16),x=parseInt(Y.slice(5,7),16);return`rgba(${$}, ${g}, ${x}, ${R})`}return Y},we=P=>{const R=P.color||"#ff0000",Y=P.hideCircle===!0;return{background:Y?"transparent":pe(R,.55),borderColor:Y?"transparent":R,borderWidth:Y?"0px":"3px",boxShadow:Y?"none":"0 0 0 2px #fff, 0 4px 10px rgba(0, 0, 0, 0.35)"}},Ve=P=>{var $,g;if(f.value,u.value){const x=u.value.getHotspotScreenPosition(P),L=y(),K=L>0?75/L:1,Z=P.radius*2*K*3;return m.value=K*3,P.id===((g=($=e.activeScene)==null?void 0:$.hotspots[0])==null?void 0:g.id)&&console.log(`FOV: ${L}, ZoomFactor: ${K}, ScaledSize: ${Z}`),{left:x.left,top:x.top,width:Z+"px",height:Z+"px",transform:"translate(-50%, -50%)",...we(P)}}const R=P.x/360*100,Y=(P.y+90)/180*100;return{left:R+"%",top:Y+"%",width:P.radius*2+"px",height:P.radius*2+"px",...we(P),display:"none",transform:"translate(-50%, -50%)"}},Ze=P=>P.icon?P.icon:b(P.type),et=P=>{var Y,$,g;if(console.log("[Tooltip Debug]",{type:P.type,linkedSceneId:(Y=P.content)==null?void 0:Y.linkedSceneId,content:P.content}),P.type==="scene"){const x=($=P.content)==null?void 0:$.linkedSceneId;if(x&&e.project){const L=e.project.scenes.find(K=>K.id===x);if(L)return`Aller vers ${L.name}`}return"Changer de scène (non configuré)"}return P.type==="text"?((g=P.content)==null?void 0:g.text)||"Nouveau point":{image:"Image","text-image":"Image et texte",link:"Lien",iframe:"Cadre intégré"}[P.type]||"Nouveau point"},tt=()=>{const P=v.value.trim();if(P){const R=`<iframe src="${P}" style="width: 100%; height: 600px; border: none; border-radius: 4px;"></iframe>`;B.value.content.iframeUrl=R}},oe=P=>{B.value=P},le=P=>{B.value=P,l.value=null},ye=P=>{const R={...P,id:_s(),x:P.x+10,y:P.y+10};e.addHotspot(R),e.project&&Dn.saveProject(e.project),l.value=null},Be=P=>{e.activeScene&&(e.deleteHotspot(e.activeScene.id,P.id),e.project&&Dn.saveProject(e.project)),l.value=null},ne=()=>{S.value=!1,U.value=!1},ce=P=>{B.value&&(B.value.icon=P,ne(),vr("✅ Logo modifié!","success"))},ze=()=>{if(B.value&&e.activeScene){const P={...B.value,dir:G(B.value.x,B.value.y)};e.updateHotspot(e.activeScene.id,B.value.id,P),e.project&&Dn.saveProject(e.project),vr("✅ Point d'intérêt enregistré!","success")}},A=()=>{B.value&&e.activeScene&&(e.deleteHotspot(e.activeScene.id,B.value.id),B.value=null,e.project&&Dn.saveProject(e.project),vr("🗑️ Point d'intérêt supprimé!","success"))},D=()=>{var P;(P=p.value)==null||P.click()},_=async P=>{var Y;const R=(Y=P.target.files)==null?void 0:Y[0];if(!(!R||!B.value))try{const $=await uo(R);B.value.content.imageUrl=$,e.activeScene&&(e.updateHotspot(e.activeScene.id,B.value.id,B.value),e.project&&Dn.saveProject(e.project)),vr("✅ Image chargée!","success")}catch($){console.error("Erreur lors du chargement de l'image:",$),vr("❌ Erreur lors du chargement de l'image","error")}};let H=null;const W=()=>{const P=()=>{f.value++,H=requestAnimationFrame(P)};H=requestAnimationFrame(P)},Q=()=>{H!==null&&(cancelAnimationFrame(H),H=null)};return Sn(()=>u.value,P=>{P?W():Q()}),Sn(()=>{var P,R;return(R=(P=u.value)==null?void 0:P.currentFov)==null?void 0:R.value},P=>{P!==void 0&&(d.value=P)}),Fo(()=>{Q()}),document.addEventListener("click",()=>{l.value=null}),(P,R)=>{var Y,$;return Pe(),Le("div",lM,[F("div",cM,[F("div",{class:"image-container",onMousemove:fe,onContextmenu:R[2]||(R[2]=Nt(g=>a.value=null,["prevent"]))},[(Y=Qe(e).activeScene)!=null&&Y.imageUrl?(Pe(),Mr(aM,{key:0,ref_key:"sceneViewerRef",ref:u,onEquirectClick:j,onHotspotOpened:R[0]||(R[0]=g=>c.value=!0),onHotspotClosed:R[1]||(R[1]=g=>c.value=!1),onFovChanged:z},null,512)):xt("",!0),F("div",{class:"grid-overlay",style:un({display:Qe(c)?"none":"block"})},[(Pe(),Le(bt,null,Si(37,g=>F("div",{key:"h"+g,class:"grid-line-h",style:un({left:g*100/36+"%"})},null,4)),64)),(Pe(),Le(bt,null,Si(19,g=>F("div",{key:"v"+g,class:"grid-line-v",style:un({top:g*100/18+"%"})},null,4)),64))],4),(Pe(!0),Le(bt,null,Si(($=Qe(e).activeScene)==null?void 0:$.hotspots,(g,x)=>(Pe(),Le("div",{key:g.id,class:qt(["hotspot-pin",{selected:Qe(r)===g.id}]),style:un({...Ve(g),display:Qe(c)?"none":"flex"}),onMousedown:Nt(L=>se(L,g),["stop"]),onContextmenu:Nt(()=>{},["prevent"]),draggable:"false",title:et(g)},[F("div",{class:qt(["hotspot-icon",{"hotspot-icon-scene":g.type==="scene"}]),style:un({fontSize:J(g)*q.value+"px"})},gt(Ze(g)),7),F("div",fM,gt(x+1),1)],46,uM))),128)),Qe(i)?(Pe(),Le("div",{key:1,class:"crosshair",style:un({left:Qe(s)+"px",top:Qe(o)+"px"})},null,4)):xt("",!0)],32),B.value?(Pe(),Le("div",{key:0,class:"hotspot-info",onWheel:R[22]||(R[22]=Nt(()=>{},["stop"]))},[F("div",dM,[R[29]||(R[29]=F("h3",null,"Point d'intérêt",-1)),F("button",{onClick:R[3]||(R[3]=g=>B.value=null),class:"btn-close"},"✕")]),F("div",hM,[F("div",pM,[R[31]||(R[31]=F("label",null,"Type",-1)),Tt(F("select",{"onUpdate:modelValue":R[4]||(R[4]=g=>B.value.type=g),class:"input"},[...R[30]||(R[30]=[Op('<option value="text" data-v-5797d234>📄 Texte</option><option value="image" data-v-5797d234>🖼️ Image</option><option value="text-image" data-v-5797d234>📰 Texte + Image</option><option value="link" data-v-5797d234>🔗 Lien</option><option value="iframe" data-v-5797d234>💻 IFrame</option><option value="scene" data-v-5797d234>⬆️ Autre Scène</option>',6)])],512),[[Jc,B.value.type]])]),B.value.type==="text"?(Pe(),Le("div",mM,[R[32]||(R[32]=F("label",null,"Texte",-1)),Tt(F("textarea",{"onUpdate:modelValue":R[5]||(R[5]=g=>B.value.content.text=g),class:"input",rows:"3"},null,512),[[Ut,B.value.content.text]])])):B.value.type==="image"?(Pe(),Le(bt,{key:1},[F("div",xM,[R[33]||(R[33]=F("label",null,"Titre (optionnel)",-1)),Tt(F("input",{"onUpdate:modelValue":R[6]||(R[6]=g=>B.value.content.imageTitle=g),type:"text",class:"input",placeholder:"Titre de l'image"},null,512),[[Ut,B.value.content.imageTitle]])]),F("div",gM,[R[34]||(R[34]=F("label",null,"Image",-1)),F("div",_M,[F("input",{ref_key:"imageFileInput",ref:p,type:"file",accept:"image/*",style:{display:"none"},onChange:_},null,544),F("button",{onClick:D,class:"btn-upload"}," 📤 Sélectionner une image "),B.value.content.imageUrl?(Pe(),Le("div",vM,[F("img",{src:B.value.content.imageUrl,alt:B.value.content.imageUrl},null,8,SM)])):xt("",!0)])])],64)):B.value.type==="text-image"?(Pe(),Le(bt,{key:2},[F("div",bM,[R[35]||(R[35]=F("label",null,"Titre",-1)),Tt(F("input",{"onUpdate:modelValue":R[7]||(R[7]=g=>B.value.content.title=g),type:"text",class:"input"},null,512),[[Ut,B.value.content.title]])]),F("div",MM,[R[36]||(R[36]=F("label",null,"Texte",-1)),Tt(F("textarea",{"onUpdate:modelValue":R[8]||(R[8]=g=>B.value.content.text=g),class:"input",rows:"2"},null,512),[[Ut,B.value.content.text]])]),F("div",yM,[R[37]||(R[37]=F("label",null,"Image",-1)),F("div",EM,[F("input",{ref_key:"imageFileInput",ref:p,type:"file",accept:"image/*",style:{display:"none"},onChange:_},null,544),F("button",{onClick:D,class:"btn-upload"}," 📤 Sélectionner une image "),B.value.content.imageUrl?(Pe(),Le("div",TM,[F("img",{src:B.value.content.imageUrl,alt:B.value.content.imageUrl},null,8,AM)])):xt("",!0)])])],64)):B.value.type==="link"?(Pe(),Le(bt,{key:3},[F("div",wM,[R[38]||(R[38]=F("label",null,"URL",-1)),Tt(F("input",{"onUpdate:modelValue":R[9]||(R[9]=g=>B.value.content.linkUrl=g),type:"text",class:"input",placeholder:"https://..."},null,512),[[Ut,B.value.content.linkUrl]])]),F("div",CM,[R[39]||(R[39]=F("label",null,"Texte du lien",-1)),Tt(F("input",{"onUpdate:modelValue":R[10]||(R[10]=g=>B.value.content.title=g),type:"text",class:"input",placeholder:"Cliquez ici"},null,512),[[Ut,B.value.content.title]])])],64)):B.value.type==="iframe"?(Pe(),Le(bt,{key:4},[F("div",RM,[R[40]||(R[40]=F("label",null,"Titre (optionnel)",-1)),Tt(F("input",{"onUpdate:modelValue":R[11]||(R[11]=g=>B.value.content.imageTitle=g),type:"text",class:"input",placeholder:"Titre du contenu"},null,512),[[Ut,B.value.content.imageTitle]])]),F("div",PM,[R[41]||(R[41]=F("label",null,"URL à intégrer",-1)),Tt(F("input",{"onUpdate:modelValue":R[12]||(R[12]=g=>_t(v)?v.value=g:null),type:"text",class:"input",placeholder:"https://exemple.com",onInput:tt},null,544),[[Ut,Qe(v)]]),R[42]||(R[42]=F("small",{style:{color:"#999","margin-top":"5px",display:"block"}},"Remplis ce champ pour générer automatiquement le code iframe",-1))]),F("div",DM,[R[43]||(R[43]=F("label",null,"Code IFrame (généré automatiquement ou personnalisé)",-1)),Tt(F("textarea",{"onUpdate:modelValue":R[13]||(R[13]=g=>B.value.content.iframeUrl=g),type:"text",class:"input",rows:"4",placeholder:"<iframe src='...'></iframe>"},null,512),[[Ut,B.value.content.iframeUrl]])])],64)):B.value.type==="scene"?(Pe(),Le("div",IM,[R[44]||(R[44]=F("label",null,"Scène liée",-1)),Tt(F("select",{"onUpdate:modelValue":R[14]||(R[14]=g=>B.value.content.linkedSceneId=g),class:"input"},[(Pe(!0),Le(bt,null,Si(Qe(e).allScenes,g=>(Pe(),Le("option",{key:g.id,value:g.id},gt(g.name),9,LM))),128))],512),[[Jc,B.value.content.linkedSceneId]])])):xt("",!0),F("div",UM,[R[45]||(R[45]=F("label",null,"Taille du cercle",-1)),Tt(F("input",{"onUpdate:modelValue":R[15]||(R[15]=g=>B.value.radius=g),type:"range",min:"5",max:"30",class:"input"},null,512),[[Ut,B.value.radius,void 0,{number:!0}]])]),F("div",NM,[R[47]||(R[47]=F("label",null,"Couleur du cercle",-1)),F("div",FM,[Tt(F("input",{"onUpdate:modelValue":R[16]||(R[16]=g=>_t(h)?h.value=g:null),type:"color",class:"color-input-hidden"},null,512),[[Ut,Qe(h)]]),F("div",OM,[(Pe(),Le(bt,null,Si(w,g=>F("button",{key:g,class:qt(["color-preset",{active:Qe(h).toLowerCase()===g.toLowerCase()}]),style:un({backgroundColor:g}),onClick:x=>h.value=g,title:g},null,14,BM)),64))]),F("label",zM,[R[46]||(R[46]=F("span",{class:"color-picker-text"},"Choisir une couleur personnalisée",-1)),Tt(F("input",{"onUpdate:modelValue":R[17]||(R[17]=g=>_t(h)?h.value=g:null),type:"color",class:"color-input-picker"},null,512),[[Ut,Qe(h)]])])])]),F("div",kM,[F("label",VM,[Tt(F("input",{type:"checkbox","onUpdate:modelValue":R[18]||(R[18]=g=>B.value.hideCircle=g),style:{width:"18px",height:"18px",cursor:"pointer"}},null,512),[[Kc,B.value.hideCircle]]),R[48]||(R[48]=F("span",null,"Masquer le cercle",-1))]),F("label",HM,[Tt(F("input",{type:"checkbox","onUpdate:modelValue":R[19]||(R[19]=g=>B.value.showIcon=g),style:{width:"18px",height:"18px",cursor:"pointer"}},null,512),[[Kc,B.value.showIcon]]),R[49]||(R[49]=F("span",null,"Afficher le logo",-1))])]),R[52]||(R[52]=F("div",{style:{"border-top":"1px solid #eee",margin:"15px 0"}},null,-1)),F("div",GM,[R[50]||(R[50]=F("label",null,"Logo",-1)),F("div",WM,[F("div",XM,gt(B.value.icon||b(B.value.type)),1),F("button",{onClick:R[20]||(R[20]=g=>S.value=!0),class:"btn-choose-icon"}," 🎨 Choisir un autre logo ")])]),F("div",qM,[R[51]||(R[51]=F("label",null,"Taille du logo",-1)),Tt(F("input",{"onUpdate:modelValue":R[21]||(R[21]=g=>B.value.iconSize=g),type:"range",min:"5",max:"70",step:"1",class:"input"},null,512),[[Ut,B.value.iconSize,void 0,{number:!0}]])]),F("div",{class:"form-actions"},[F("button",{onClick:ze,class:"btn-save"},"💾 Valider le point d'intérêt"),F("button",{onClick:A,class:"btn-delete"},"🗑️ Supprimer le point d'intérêt")])])],32)):xt("",!0)]),F("div",$M,[F("button",{onClick:R[23]||(R[23]=g=>t.value="draw"),class:qt([{active:Qe(t)==="draw"},"tool-btn"])}," ➕ Ajouter Point ",2),F("button",{onClick:R[24]||(R[24]=g=>t.value="select"),class:qt([{active:Qe(t)==="select"},"tool-btn"])}," 🔍 Sélectionner ",2)]),Qe(l)?(Pe(),Le("div",{key:0,class:"context-menu",style:un(Qe(l).position)},[F("button",{onClick:R[25]||(R[25]=g=>le(Qe(l).hotspot)),class:"menu-item"},"✏️ Éditer"),F("button",{onClick:R[26]||(R[26]=g=>ye(Qe(l).hotspot)),class:"menu-item"},"📋 Dupliquer"),F("button",{onClick:R[27]||(R[27]=g=>Be(Qe(l).hotspot)),class:"menu-item danger"},"🗑️ Supprimer")],4)):xt("",!0),Qe(S)?(Pe(),Le("div",{key:1,class:"modal-overlay",onClick:Nt(ne,["self"])},[F("div",jM,[F("div",YM,[R[53]||(R[53]=F("h3",null,"Choisir un logo pour ce point d'intérêt",-1)),F("div",KM,[k.value.length<C.length?(Pe(),Le("button",{key:0,onClick:E,class:"btn-show-more",title:Qe(U)?"Afficher les logos populaires":"Afficher tous les logos"},gt(Qe(U)?"⭐ Populaires":"➕ Plus de logos"),9,ZM)):xt("",!0),F("button",{onClick:ne,class:"btn-close"},"✕")])]),F("div",JM,gt(k.value.length)+" logos disponibles",1),F("div",{class:"icon-picker-grid",onWheel:R[28]||(R[28]=Nt(()=>{},["stop"]))},[(Pe(!0),Le(bt,null,Si(k.value,g=>(Pe(),Le("button",{key:g,class:qt(["icon-picker-option",{active:B.value&&(B.value.icon||b(B.value.type))===g}]),onClick:x=>ce(g),title:g},gt(g),11,QM))),128))],32)])])):xt("",!0)])}}});const ty=Li(ey,[["__scopeId","data-v-5797d234"]]);async function ny(){try{const n=await fetch("./three.min.js");if(!n.ok)throw new Error("Failed to load Three.js");return await n.text()}catch(n){return console.error("Error loading Three.js:",n),""}}class iy{static exportAsJSON(e){return JSON.stringify({version:"1.0.0",project:e,assets:{}},null,2)}static async exportAsHTMLStandalone(e,t,i){const r=await ny(),s=i!=null&&i.previewMode?3:1;let o=0;if(t){const l=e.scenes.findIndex(c=>c.id===t);l!==-1&&(o=l)}const a=e.scenes.map((l,c)=>({id:l.id,name:l.name,description:l.description,hotspots:l.hotspots,imageIndex:c,imageFileName:l.imageFileName||`scene-${c}.jpg`,imageUrl:l.imageUrl,calibrationOffsetX:l.calibrationOffsetX||90}));return`<!DOCTYPE html>
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
    `}}async function kd(n,e,t){return await iy.exportAsHTMLStandalone(n,e,t)}const ry={class:"export-panel"},sy={class:"export-container"},oy={class:"export-preview"},ay={class:"project-info"},ly={class:"info-row"},cy={class:"info-row"},uy={class:"info-row"},fy={class:"info-row"},dy=Ii({__name:"ExportPanel",setup(n){const e=Qi(),t=Qn(()=>{var s;return((s=e.project)==null?void 0:s.scenes.reduce((o,a)=>o+a.hotspots.length,0))||0}),i=Qn(()=>{if(!e.project)return"0 MB";const s=JSON.stringify(e.project);return(new Blob([s]).size/1024/1024).toFixed(2)+" MB"}),r=async()=>{if(!e.project)return;const s=await kd(e.project,void 0,{previewMode:!0}),o=new Blob([s],{type:"text/html"}),a=URL.createObjectURL(o),l=document.createElement("a");l.href=a,l.download="index.html",l.click(),URL.revokeObjectURL(a)};return(s,o)=>{var a,l;return Pe(),Le("div",ry,[F("div",sy,[o[8]||(o[8]=F("h2",null,"Exporter le Projet",-1)),F("div",oy,[o[4]||(o[4]=F("h3",null,"Apercu du Projet",-1)),F("div",ay,[F("div",ly,[o[0]||(o[0]=F("label",null,"Nom :",-1)),F("span",null,gt((a=Qe(e).project)==null?void 0:a.name),1)]),F("div",cy,[o[1]||(o[1]=F("label",null,"Scenes :",-1)),F("span",null,gt((l=Qe(e).project)==null?void 0:l.scenes.length),1)]),F("div",uy,[o[2]||(o[2]=F("label",null,"Hotspots :",-1)),F("span",null,gt(t.value),1)]),F("div",fy,[o[3]||(o[3]=F("label",null,"Taille approx :",-1)),F("span",null,gt(i.value),1)])])]),F("div",{class:"export-options"},[F("div",{class:"export-card"},[o[5]||(o[5]=F("div",{class:"card-icon"},"📄",-1)),o[6]||(o[6]=F("h3",null,"HTML Standalone",-1)),o[7]||(o[7]=F("p",null,"Génère un fichier index.html unique à lancer (de préférence avec Chrome pour assurer un maximum de compatibilité).",-1)),F("button",{onClick:r,class:"btn-export"},"Télécharger l'export HTML")])])])])}}});const hy=Li(dy,[["__scopeId","data-v-bbdbb857"]]),py={class:"export-viewer"},my=["srcdoc"],xy=Ii({__name:"ExportViewer",setup(n){const e=Qi(),t=Ue(null),i=Ue("");return pp(async()=>{if(e.project){const r=e.activeSceneId;i.value=await kd(e.project,r,{previewMode:!0})}else i.value=""}),(r,s)=>(Pe(),Le("div",py,[F("iframe",{ref_key:"iframeRef",ref:t,srcdoc:i.value,title:"Export Preview"},null,8,my)]))}});const gy=Li(xy,[["__scopeId","data-v-88cd004c"]]),_y={class:"app-container"},vy={class:"toasts-container"},Sy={key:1,class:"editor-layout"},by={class:"sidebar"},My={class:"main-content"},yy={class:"editor-tabs"},Ey=Ii({__name:"App",setup(n){const e=Qi(),t=Ue("editor"),i=(s,o)=>{e.createNewProject(s,o)},r=s=>{e.loadProject(s)};return No(async()=>{console.log("App initialized - showing HomeScreen")}),(s,o)=>(Pe(),Le("div",_y,[F("div",vy,[(Pe(!0),Le(bt,null,Si(Qe(wr),a=>(Pe(),Le("div",{key:a.id,class:qt(["toast",`toast-${a.type}`])},gt(a.message),3))),128))]),Qe(e).project?(Pe(),Le("div",Sy,[F("div",by,[mn(Gm),mn(l0,{class:qt({"scenelist-disabled":t.value==="export"})},null,8,["class"])]),F("div",My,[F("div",yy,[F("button",{class:qt([{active:t.value==="editor"},"tab-btn"]),onClick:o[0]||(o[0]=a=>t.value="editor")},[...o[3]||(o[3]=[Ar(" ✏️ ",-1),F("strong",null,"Éditeur",-1)])],2),F("button",{class:qt([{active:t.value==="export-viewer"},"tab-btn"]),onClick:o[1]||(o[1]=a=>t.value="export-viewer")},[...o[4]||(o[4]=[Ar(" 👀 ",-1),F("strong",null,"Apercu",-1)])],2),F("button",{class:qt([{active:t.value==="export"},"tab-btn"]),onClick:o[2]||(o[2]=a=>t.value="export")},[...o[5]||(o[5]=[Ar(" 💾 ",-1),F("strong",null,"Exporter",-1)])],2)]),t.value==="editor"?(Pe(),Le(bt,{key:0},[Qe(e).activeScene?(Pe(),Mr(ty,{key:0})):xt("",!0)],64)):t.value==="export"?(Pe(),Mr(hy,{key:1})):t.value==="export-viewer"?(Pe(),Le(bt,{key:2},[Qe(e).project?(Pe(),Mr(gy,{key:0})):xt("",!0)],64)):xt("",!0)])])):(Pe(),Mr(zm,{key:0,onCreateProject:i,onLoadProject:r}))]))}});const Ty=Li(Ey,[["__scopeId","data-v-a564610a"]]),Vd=Sm(Ty);Vd.use(Em());Vd.mount("#app");
