(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Hr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const q={},bt=[],Ae=()=>{},rs=()=>!1,as=/^on[^a-z]/,Dn=e=>as.test(e),Ur=e=>e.startsWith("onUpdate:"),te=Object.assign,Br=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},is=Object.prototype.hasOwnProperty,$=(e,t)=>is.call(e,t),R=Array.isArray,yt=e=>$n(e)==="[object Map]",Mi=e=>$n(e)==="[object Set]",L=e=>typeof e=="function",ne=e=>typeof e=="string",Yr=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",Fi=e=>X(e)&&L(e.then)&&L(e.catch),Ri=Object.prototype.toString,$n=e=>Ri.call(e),os=e=>$n(e).slice(8,-1),Li=e=>$n(e)==="[object Object]",Wr=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kn=Hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ss=/-(\w)/g,Ne=Hn(e=>e.replace(ss,(t,n)=>n?n.toUpperCase():"")),ls=/\B([A-Z])/g,Pt=Hn(e=>e.replace(ls,"-$1").toLowerCase()),Un=Hn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ar=Hn(e=>e?`on${Un(e)}`:""),In=(e,t)=>!Object.is(e,t),ir=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Sn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},fs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Sa;const gr=()=>Sa||(Sa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?ms(r):Kr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ne(e))return e;if(X(e))return e}}const cs=/;(?![^(]*\))/g,us=/:([^]+)/,ds=/\/\*[^]*?\*\//g;function ms(e){const t={};return e.replace(ds,"").split(cs).forEach(n=>{if(n){const r=n.split(us);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Vr(e){let t="";if(ne(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Vr(e[n]);r&&(t+=r+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ps="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hs=Hr(ps);function zi(e){return!!e||e===""}const gs=e=>ne(e)?e:e==null?"":R(e)||X(e)&&(e.toString===Ri||!L(e.toString))?JSON.stringify(e,ji,2):String(e),ji=(e,t)=>t&&t.__v_isRef?ji(e,t.value):yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Mi(t)?{[`Set(${t.size})`]:[...t.values()]}:X(t)&&!R(t)&&!Li(t)?String(t):t;let ye;class vs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function bs(e,t=ye){t&&t.active&&t.effects.push(e)}function ys(){return ye}const qr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Di=e=>(e.w&qe)>0,$i=e=>(e.n&qe)>0,xs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},_s=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Di(a)&&!$i(a)?a.delete(e):t[n++]=a,a.w&=~qe,a.n&=~qe}t.length=n}},vr=new WeakMap;let Ft=0,qe=1;const br=30;let _e;const lt=Symbol(""),yr=Symbol("");class Xr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bs(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=Ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Ke=!0,qe=1<<++Ft,Ft<=br?xs(this):Ta(this),this.fn()}finally{Ft<=br&&_s(this),qe=1<<--Ft,_e=this.parent,Ke=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Ta(this),this.onStop&&this.onStop(),this.active=!1)}}function Ta(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ke=!0;const Hi=[];function Ct(){Hi.push(Ke),Ke=!1}function It(){const e=Hi.pop();Ke=e===void 0?!0:e}function me(e,t,n){if(Ke&&_e){let r=vr.get(e);r||vr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=qr()),Ui(a)}}function Ui(e,t){let n=!1;Ft<=br?$i(e)||(e.n|=qe,n=!Di(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function ze(e,t,n,r,a,i){const o=vr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Wr(n)&&s.push(o.get("length")):(s.push(o.get(lt)),yt(e)&&s.push(o.get(yr)));break;case"delete":R(e)||(s.push(o.get(lt)),yt(e)&&s.push(o.get(yr)));break;case"set":yt(e)&&s.push(o.get(lt));break}if(s.length===1)s[0]&&xr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);xr(qr(l))}}function xr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Na(r);for(const r of n)r.computed||Na(r)}function Na(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ws=Hr("__proto__,__v_isRef,__isVue"),Bi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Yr)),ks=Jr(),As=Jr(!1,!0),Os=Jr(!0),Ma=Es();function Es(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ct();const r=H(this)[t].apply(this,n);return It(),r}}),e}function Ps(e){const t=H(this);return me(t,"has",e),t.hasOwnProperty(e)}function Jr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Bs:qi:t?Vi:Ki).get(r))return r;const o=R(r);if(!e){if(o&&$(Ma,a))return Reflect.get(Ma,a,i);if(a==="hasOwnProperty")return Ps}const s=Reflect.get(r,a,i);return(Yr(a)?Bi.has(a):ws(a))||(e||me(r,"get",a),t)?s:fe(s)?o&&Wr(a)?s:s.value:X(s)?e?Xi(s):Qr(s):s}}const Cs=Yi(),Is=Yi(!0);function Yi(e=!1){return function(n,r,a,i){let o=n[r];if(Bt(o)&&fe(o)&&!fe(a))return!1;if(!e&&(!_r(a)&&!Bt(a)&&(o=H(o),a=H(a)),!R(n)&&fe(o)&&!fe(a)))return o.value=a,!0;const s=R(n)&&Wr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?In(a,o)&&ze(n,"set",r,a):ze(n,"add",r,a)),l}}function Ss(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function Ts(e,t){const n=Reflect.has(e,t);return(!Yr(t)||!Bi.has(t))&&me(e,"has",t),n}function Ns(e){return me(e,"iterate",R(e)?"length":lt),Reflect.ownKeys(e)}const Wi={get:ks,set:Cs,deleteProperty:Ss,has:Ts,ownKeys:Ns},Ms={get:Os,set(e,t){return!0},deleteProperty(e,t){return!0}},Fs=te({},Wi,{get:As,set:Is}),Gr=e=>e,Bn=e=>Reflect.getPrototypeOf(e);function sn(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=Bn(a),s=r?Gr:n?na:ta;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function ln(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function fn(e,t=!1){return e=e.__v_raw,!t&&me(H(e),"iterate",lt),Reflect.get(e,"size",e)}function Fa(e){e=H(e);const t=H(this);return Bn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Ra(e,t){t=H(t);const n=H(this),{has:r,get:a}=Bn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?In(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function La(e){const t=H(this),{has:n,get:r}=Bn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function za(){const e=H(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function cn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?Gr:e?na:ta;return!e&&me(s,"iterate",lt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function un(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=yt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Gr:t?na:ta;return!t&&me(i,"iterate",l?yr:lt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Be(e){return function(...t){return e==="delete"?!1:this}}function Rs(){const e={get(i){return sn(this,i)},get size(){return fn(this)},has:ln,add:Fa,set:Ra,delete:La,clear:za,forEach:cn(!1,!1)},t={get(i){return sn(this,i,!1,!0)},get size(){return fn(this)},has:ln,add:Fa,set:Ra,delete:La,clear:za,forEach:cn(!1,!0)},n={get(i){return sn(this,i,!0)},get size(){return fn(this,!0)},has(i){return ln.call(this,i,!0)},add:Be("add"),set:Be("set"),delete:Be("delete"),clear:Be("clear"),forEach:cn(!0,!1)},r={get(i){return sn(this,i,!0,!0)},get size(){return fn(this,!0)},has(i){return ln.call(this,i,!0)},add:Be("add"),set:Be("set"),delete:Be("delete"),clear:Be("clear"),forEach:cn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=un(i,!1,!1),n[i]=un(i,!0,!1),t[i]=un(i,!1,!0),r[i]=un(i,!0,!0)}),[e,n,t,r]}const[Ls,zs,js,Ds]=Rs();function Zr(e,t){const n=t?e?Ds:js:e?zs:Ls;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const $s={get:Zr(!1,!1)},Hs={get:Zr(!1,!0)},Us={get:Zr(!0,!1)},Ki=new WeakMap,Vi=new WeakMap,qi=new WeakMap,Bs=new WeakMap;function Ys(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ws(e){return e.__v_skip||!Object.isExtensible(e)?0:Ys(os(e))}function Qr(e){return Bt(e)?e:ea(e,!1,Wi,$s,Ki)}function Ks(e){return ea(e,!1,Fs,Hs,Vi)}function Xi(e){return ea(e,!0,Ms,Us,qi)}function ea(e,t,n,r,a){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ws(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function xt(e){return Bt(e)?xt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function _r(e){return!!(e&&e.__v_isShallow)}function Ji(e){return xt(e)||Bt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function Gi(e){return Sn(e,"__v_skip",!0),e}const ta=e=>X(e)?Qr(e):e,na=e=>X(e)?Xi(e):e;function Vs(e){Ke&&_e&&(e=H(e),Ui(e.dep||(e.dep=qr())))}function qs(e,t){e=H(e);const n=e.dep;n&&xr(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Xs(e){return fe(e)?e.value:e}const Js={get:(e,t,n)=>Xs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Zi(e){return xt(e)?e:new Proxy(e,Js)}class Gs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Xr(t,()=>{this._dirty||(this._dirty=!0,qs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return Vs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Zs(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new Gs(r,a,i||!a,n)}function Ve(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Yn(i,t,n)}return a}function Oe(e,t,n,r){if(L(e)){const i=Ve(e,t,n,r);return i&&Fi(i)&&i.catch(o=>{Yn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Yn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ve(l,null,10,[e,o,s]);return}}Qs(e,n,a,r)}function Qs(e,t,n,r=!0){console.error(e)}let Yt=!1,wr=!1;const oe=[];let Se=0;const _t=[];let Re=null,at=0;const Qi=Promise.resolve();let ra=null;function el(e){const t=ra||Qi;return e?t.then(this?e.bind(this):e):t}function tl(e){let t=Se+1,n=oe.length;for(;t<n;){const r=t+n>>>1;Wt(oe[r])<e?t=r+1:n=r}return t}function aa(e){(!oe.length||!oe.includes(e,Yt&&e.allowRecurse?Se+1:Se))&&(e.id==null?oe.push(e):oe.splice(tl(e.id),0,e),eo())}function eo(){!Yt&&!wr&&(wr=!0,ra=Qi.then(no))}function nl(e){const t=oe.indexOf(e);t>Se&&oe.splice(t,1)}function rl(e){R(e)?_t.push(...e):(!Re||!Re.includes(e,e.allowRecurse?at+1:at))&&_t.push(e),eo()}function ja(e,t=Yt?Se+1:0){for(;t<oe.length;t++){const n=oe[t];n&&n.pre&&(oe.splice(t,1),t--,n())}}function to(e){if(_t.length){const t=[...new Set(_t)];if(_t.length=0,Re){Re.push(...t);return}for(Re=t,Re.sort((n,r)=>Wt(n)-Wt(r)),at=0;at<Re.length;at++)Re[at]();Re=null,at=0}}const Wt=e=>e.id==null?1/0:e.id,al=(e,t)=>{const n=Wt(e)-Wt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function no(e){wr=!1,Yt=!0,oe.sort(al);const t=Ae;try{for(Se=0;Se<oe.length;Se++){const n=oe[Se];n&&n.active!==!1&&Ve(n,null,14)}}finally{Se=0,oe.length=0,to(),Yt=!1,ra=null,(oe.length||_t.length)&&no()}}function il(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||q;v&&(a=n.map(w=>ne(w)?w.trim():w)),m&&(a=n.map(fs))}let s,l=r[s=ar(t)]||r[s=ar(Ne(t))];!l&&i&&(l=r[s=ar(Pt(t))]),l&&Oe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(c,e,6,a)}}function ro(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=ro(c,t,!0);d&&(s=!0,te(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(X(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):te(o,i),X(e)&&r.set(e,o),o)}function Wn(e,t){return!e||!Dn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Pt(t))||$(e,t))}let ce=null,ao=null;function Tn(e){const t=ce;return ce=e,ao=e&&e.type.__scopeId||null,t}function Rt(e,t=ce,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Xa(-1);const i=Tn(t);let o;try{o=e(...a)}finally{Tn(i),r._d&&Xa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function or(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:w,ctx:z,inheritAttrs:N}=e;let D,k;const O=Tn(e);try{if(n.shapeFlag&4){const I=a||r;D=Ie(d.call(I,I,m,i,w,v,z)),k=l}else{const I=t;D=Ie(I.length>1?I(i,{attrs:l,slots:s,emit:c}):I(i,null)),k=t.props?l:ol(l)}}catch(I){$t.length=0,Yn(I,e,1),D=G(kt)}let M=D;if(k&&N!==!1){const I=Object.keys(k),{shapeFlag:U}=M;I.length&&U&7&&(o&&I.some(Ur)&&(k=sl(k,o)),M=At(M,k))}return n.dirs&&(M=At(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),D=M,Tn(O),D}const ol=e=>{let t;for(const n in e)(n==="class"||n==="style"||Dn(n))&&((t||(t={}))[n]=e[n]);return t},sl=(e,t)=>{const n={};for(const r in e)(!Ur(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ll(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Da(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Wn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Da(r,o,c):!0:!!o;return!1}function Da(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Wn(n,i))return!0}return!1}function fl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const cl=e=>e.__isSuspense;function ul(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):rl(e)}const dn={};function An(e,t,n){return io(e,t,n)}function io(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=q){var s;const l=ys()===((s=re)==null?void 0:s.scope)?re:null;let c,d=!1,m=!1;if(fe(e)?(c=()=>e.value,d=_r(e)):xt(e)?(c=()=>e,r=!0):R(e)?(m=!0,d=e.some(I=>xt(I)||_r(I)),c=()=>e.map(I=>{if(fe(I))return I.value;if(xt(I))return ht(I);if(L(I))return Ve(I,l,2)})):L(e)?t?c=()=>Ve(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Oe(e,l,3,[w])}:c=Ae,t&&r){const I=c;c=()=>ht(I())}let v,w=I=>{v=O.onStop=()=>{Ve(I,l,4)}},z;if(Vt)if(w=Ae,t?n&&Oe(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const I=uf();z=I.__watcherHandles||(I.__watcherHandles=[])}else return Ae;let N=m?new Array(e.length).fill(dn):dn;const D=()=>{if(O.active)if(t){const I=O.run();(r||d||(m?I.some((U,ae)=>In(U,N[ae])):In(I,N)))&&(v&&v(),Oe(t,l,3,[I,N===dn?void 0:m&&N[0]===dn?[]:N,w]),N=I)}else O.run()};D.allowRecurse=!!t;let k;a==="sync"?k=D:a==="post"?k=()=>de(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),k=()=>aa(D));const O=new Xr(c,k);t?n?D():N=O.run():a==="post"?de(O.run.bind(O),l&&l.suspense):O.run();const M=()=>{O.stop(),l&&l.scope&&Br(l.scope.effects,O)};return z&&z.push(M),M}function dl(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?oo(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=re;Ot(this);const s=io(a,i.bind(r),n);return o?Ot(o):ft(),s}function oo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!X(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))ht(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(Mi(e)||yt(e))e.forEach(n=>{ht(n,t)});else if(Li(e))for(const n in e)ht(e[n],t);return e}function tt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ct(),Oe(l,n,8,[e.el,s,e,t]),It())}}function Kn(e,t){return L(e)?(()=>te({name:e.name},t,{setup:e}))():e}const jt=e=>!!e.type.__asyncLoader,so=e=>e.type.__isKeepAlive;function ml(e,t){lo(e,"a",t)}function pl(e,t){lo(e,"da",t)}function lo(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Vn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)so(a.parent.vnode)&&hl(r,t,n,a),a=a.parent}}function hl(e,t,n,r){const a=Vn(t,e,r,!0);fo(()=>{Br(r[t],a)},n)}function Vn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ct(),Ot(n);const s=Oe(t,n,e,o);return ft(),It(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=re)=>(!Vt||e==="sp")&&Vn(e,(...r)=>t(...r),n),gl=He("bm"),vl=He("m"),bl=He("bu"),yl=He("u"),xl=He("bum"),fo=He("um"),_l=He("sp"),wl=He("rtg"),kl=He("rtc");function Al(e,t=re){Vn("ec",e,t)}const co="components";function Ol(e,t){return Pl(co,e,!0,t)||e}const El=Symbol.for("v-ndc");function Pl(e,t,n=!0,r=!1){const a=ce||re;if(a){const i=a.type;if(e===co){const s=sf(i,!1);if(s&&(s===t||s===Ne(t)||s===Un(Ne(t))))return i}const o=$a(a[e]||i[e],t)||$a(a.appContext[e],t);return!o&&r?i:o}}function $a(e,t){return e&&(e[t]||e[Ne(t)]||e[Un(Ne(t))])}function Cl(e,t,n={},r,a){if(ce.isCE||ce.parent&&jt(ce.parent)&&ce.parent.isCE)return t!=="default"&&(n.name=t),G("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),Xn();const o=i&&uo(i(n)),s=ql(xe,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function uo(e){return e.some(t=>Fn(t)?!(t.type===kt||t.type===xe&&!uo(t.children)):!0)?e:null}const kr=e=>e?ko(e)?ca(e)||e.proxy:kr(e.parent):null,Dt=te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>kr(e.parent),$root:e=>kr(e.root),$emit:e=>e.emit,$options:e=>ia(e),$forceUpdate:e=>e.f||(e.f=()=>aa(e.update)),$nextTick:e=>e.n||(e.n=el.bind(e.proxy)),$watch:e=>dl.bind(e)}),sr=(e,t)=>e!==q&&!e.__isScriptSetup&&$(e,t),Il={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(sr(r,t))return o[t]=1,r[t];if(a!==q&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==q&&$(n,t))return o[t]=4,n[t];Ar&&(o[t]=0)}}const d=Dt[t];let m,v;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==q&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return sr(a,t)?(a[t]=n,!0):r!==q&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==q&&$(e,o)||sr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Dt,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ha(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ar=!0;function Sl(e){const t=ia(e),n=e.proxy,r=e.ctx;Ar=!1,t.beforeCreate&&Ua(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:w,updated:z,activated:N,deactivated:D,beforeDestroy:k,beforeUnmount:O,destroyed:M,unmounted:I,render:U,renderTracked:ae,renderTriggered:ie,errorCaptured:ve,serverPrefetch:ge,expose:Me,inheritAttrs:Tt,components:nn,directives:rn,filters:tr}=t;if(c&&Tl(c,r,null),o)for(const J in o){const Y=o[J];L(Y)&&(r[J]=Y.bind(n))}if(a){const J=a.call(n,n);X(J)&&(e.data=Qr(J))}if(Ar=!0,i)for(const J in i){const Y=i[J],Qe=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Ae,an=!L(Y)&&L(Y.set)?Y.set.bind(n):Ae,et=rt({get:Qe,set:an});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>et.value,set:Ee=>et.value=Ee})}if(s)for(const J in s)mo(s[J],r,n,J);if(l){const J=L(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{zl(Y,J[Y])})}d&&Ua(d,e,"c");function se(J,Y){R(Y)?Y.forEach(Qe=>J(Qe.bind(n))):Y&&J(Y.bind(n))}if(se(gl,m),se(vl,v),se(bl,w),se(yl,z),se(ml,N),se(pl,D),se(Al,ve),se(kl,ae),se(wl,ie),se(xl,O),se(fo,I),se(_l,ge),R(Me))if(Me.length){const J=e.exposed||(e.exposed={});Me.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:Qe=>n[Y]=Qe})})}else e.exposed||(e.exposed={});U&&e.render===Ae&&(e.render=U),Tt!=null&&(e.inheritAttrs=Tt),nn&&(e.components=nn),rn&&(e.directives=rn)}function Tl(e,t,n=Ae){R(e)&&(e=Or(e));for(const r in e){const a=e[r];let i;X(a)?"default"in a?i=On(a.from||r,a.default,!0):i=On(a.from||r):i=On(a),fe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ua(e,t,n){Oe(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function mo(e,t,n,r){const a=r.includes(".")?oo(n,r):()=>n[r];if(ne(e)){const i=t[e];L(i)&&An(a,i)}else if(L(e))An(a,e.bind(n));else if(X(e))if(R(e))e.forEach(i=>mo(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&An(a,i,e)}}function ia(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Nn(l,c,o,!0)),Nn(l,t,o)),X(t)&&i.set(t,l),l}function Nn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Nn(e,i,n,!0),a&&a.forEach(o=>Nn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Nl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Nl={data:Ba,props:Ya,emits:Ya,methods:Lt,computed:Lt,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:Lt,directives:Lt,watch:Fl,provide:Ba,inject:Ml};function Ba(e,t){return t?e?function(){return te(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Ml(e,t){return Lt(Or(e),Or(t))}function Or(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function Lt(e,t){return e?te(Object.create(null),e,t):t}function Ya(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:te(Object.create(null),Ha(e),Ha(t??{})):t}function Fl(e,t){if(!e)return t;if(!t)return e;const n=te(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function po(){return{app:null,config:{isNativeTag:rs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rl=0;function Ll(e,t){return function(r,a=null){L(r)||(r=te({},r)),a!=null&&!X(a)&&(a=null);const i=po(),o=new Set;let s=!1;const l=i.app={_uid:Rl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:df,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=G(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ca(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Mn=l;try{return c()}finally{Mn=null}}};return l}}let Mn=null;function zl(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function On(e,t,n=!1){const r=re||ce;if(r||Mn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Mn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function jl(e,t,n,r=!1){const a={},i={};Sn(i,Jn,1),e.propsDefaults=Object.create(null),ho(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ks(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Dl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Wn(e.emitsOptions,v))continue;const w=t[v];if(l)if($(i,v))w!==i[v]&&(i[v]=w,c=!0);else{const z=Ne(v);a[z]=Er(l,s,z,w,e,!1)}else w!==i[v]&&(i[v]=w,c=!0)}}}else{ho(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=Pt(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Er(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&ze(e,"set","$attrs")}function ho(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(kn(l))continue;const c=t[l];let d;a&&$(a,d=Ne(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Wn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=H(n),c=s||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Er(a,l,m,c[m],e,!$(c,m))}}return o}function Er(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ot(a),r=c[n]=l.call(null,t),ft())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Pt(n))&&(r=!0))}return r}function go(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,w]=go(m,t,!0);te(o,v),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return X(e)&&r.set(e,bt),bt;if(R(i))for(let d=0;d<i.length;d++){const m=Ne(i[d]);Wa(m)&&(o[m]=q)}else if(i)for(const d in i){const m=Ne(d);if(Wa(m)){const v=i[d],w=o[m]=R(v)||L(v)?{type:v}:te({},v);if(w){const z=qa(Boolean,w.type),N=qa(String,w.type);w[0]=z>-1,w[1]=N<0||z<N,(z>-1||$(w,"default"))&&s.push(m)}}}const c=[o,s];return X(e)&&r.set(e,c),c}function Wa(e){return e[0]!=="$"}function Ka(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Va(e,t){return Ka(e)===Ka(t)}function qa(e,t){return R(t)?t.findIndex(n=>Va(n,e)):L(t)&&Va(t,e)?0:-1}const vo=e=>e[0]==="_"||e==="$stable",oa=e=>R(e)?e.map(Ie):[Ie(e)],$l=(e,t,n)=>{if(t._n)return t;const r=Rt((...a)=>oa(t(...a)),n);return r._c=!1,r},bo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(vo(a))continue;const i=e[a];if(L(i))t[a]=$l(a,i,r);else if(i!=null){const o=oa(i);t[a]=()=>o}}},yo=(e,t)=>{const n=oa(t);e.slots.default=()=>n},Hl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),Sn(t,"_",n)):bo(t,e.slots={})}else e.slots={},t&&yo(e,t);Sn(e.slots,Jn,1)},Ul=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(te(a,t),!n&&s===1&&delete a._):(i=!t.$stable,bo(t,a)),o=t}else t&&(yo(e,t),o={default:1});if(i)for(const s in a)!vo(s)&&!(s in o)&&delete a[s]};function Pr(e,t,n,r,a=!1){if(R(e)){e.forEach((v,w)=>Pr(v,t&&(R(t)?t[w]:t),n,r,a));return}if(jt(r)&&!a)return;const i=r.shapeFlag&4?ca(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ne(c)?(d[c]=null,$(m,c)&&(m[c]=null)):fe(c)&&(c.value=null)),L(l))Ve(l,s,12,[o,d]);else{const v=ne(l),w=fe(l);if(v||w){const z=()=>{if(e.f){const N=v?$(m,l)?m[l]:d[l]:l.value;a?R(N)&&Br(N,i):R(N)?N.includes(i)||N.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?(z.id=-1,de(z,n)):z()}}}const de=ul;function Bl(e){return Yl(e)}function Yl(e,t){const n=gr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:w=Ae,insertStaticContent:z}=e,N=(f,u,p,g=null,h=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Mt(f,u)&&(g=on(f),Ee(f,h,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:P}=u;switch(b){case qn:D(f,u,p,g);break;case kt:k(f,u,p,g);break;case lr:f==null&&O(u,p,g,A);break;case xe:nn(f,u,p,g,h,x,A,y,_);break;default:P&1?U(f,u,p,g,h,x,A,y,_):P&6?rn(f,u,p,g,h,x,A,y,_):(P&64||P&128)&&b.process(f,u,p,g,h,x,A,y,_,dt)}S!=null&&h&&Pr(S,f&&f.ref,x,u||f,!u)},D=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},k=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},O=(f,u,p,g)=>{[f.el,f.anchor]=z(f.children,u,p,g,f.el,f.anchor)},M=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},I=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},U=(f,u,p,g,h,x,A,y,_)=>{A=A||u.type==="svg",f==null?ae(u,p,g,h,x,A,y,_):ge(f,u,h,x,A,y,_)},ae=(f,u,p,g,h,x,A,y)=>{let _,b;const{type:S,props:P,shapeFlag:T,transition:F,dirs:j}=f;if(_=f.el=o(f.type,x,P&&P.is,P),T&8?d(_,f.children):T&16&&ve(f.children,_,null,g,h,x&&S!=="foreignObject",A,y),j&&tt(f,null,g,"created"),ie(_,f,f.scopeId,A,g),P){for(const B in P)B!=="value"&&!kn(B)&&i(_,B,null,P[B],x,f.children,g,h,Fe);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Ce(b,g,f)}j&&tt(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;W&&F.beforeEnter(_),r(_,u,p),((b=P&&P.onVnodeMounted)||W||j)&&de(()=>{b&&Ce(b,g,f),W&&F.enter(_),j&&tt(f,null,g,"mounted")},h)},ie=(f,u,p,g,h)=>{if(p&&w(f,p),g)for(let x=0;x<g.length;x++)w(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;ie(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ve=(f,u,p,g,h,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const S=f[b]=y?We(f[b]):Ie(f[b]);N(null,S,u,p,g,h,x,A,y)}},ge=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:S}=u;_|=f.patchFlag&16;const P=f.props||q,T=u.props||q;let F;p&&nt(p,!1),(F=T.onVnodeBeforeUpdate)&&Ce(F,p,u,f),S&&tt(u,f,p,"beforeUpdate"),p&&nt(p,!0);const j=h&&u.type!=="foreignObject";if(b?Me(f.dynamicChildren,b,y,p,g,j,x):A||Y(f,u,y,null,p,g,j,x,!1),_>0){if(_&16)Tt(y,u,P,T,p,g,h);else if(_&2&&P.class!==T.class&&i(y,"class",null,T.class,h),_&4&&i(y,"style",P.style,T.style,h),_&8){const W=u.dynamicProps;for(let B=0;B<W.length;B++){const Q=W[B],be=P[Q],mt=T[Q];(mt!==be||Q==="value")&&i(y,Q,be,mt,h,f.children,p,g,Fe)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Tt(y,u,P,T,p,g,h);((F=T.onVnodeUpdated)||S)&&de(()=>{F&&Ce(F,p,u,f),S&&tt(u,f,p,"updated")},g)},Me=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],S=_.el&&(_.type===xe||!Mt(_,b)||_.shapeFlag&70)?m(_.el):p;N(_,b,S,null,g,h,x,A,!0)}},Tt=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==q)for(const y in p)!kn(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,Fe);for(const y in g){if(kn(y))continue;const _=g[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,h,x,Fe)}"value"in g&&i(f,"value",p.value,g.value)}},nn=(f,u,p,g,h,x,A,y,_)=>{const b=u.el=f?f.el:s(""),S=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:T,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,g),r(S,p,g),ve(u.children,p,S,h,x,A,y,_)):P>0&&P&64&&T&&f.dynamicChildren?(Me(f.dynamicChildren,T,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&xo(f,u,!0)):Y(f,u,p,S,h,x,A,y,_)},rn=(f,u,p,g,h,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,_):tr(u,p,g,h,x,A,_):Aa(f,u,_)},tr=(f,u,p,g,h,x,A)=>{const y=f.component=tf(f,g,h);if(so(f)&&(y.ctx.renderer=dt),nf(y),y.asyncDep){if(h&&h.registerDep(y,se),!f.el){const _=y.subTree=G(kt);k(null,_,u,p)}return}se(y,f,u,p,h,x,A)},Aa=(f,u,p)=>{const g=u.component=f.component;if(ll(f,u,p))if(g.asyncDep&&!g.asyncResolved){J(g,u,p);return}else g.next=u,nl(g.update),g.update();else u.el=f.el,g.vnode=u},se=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:P,u:T,parent:F,vnode:j}=f,W=S,B;nt(f,!1),S?(S.el=j.el,J(f,S,A)):S=j,P&&ir(P),(B=S.props&&S.props.onVnodeBeforeUpdate)&&Ce(B,F,S,j),nt(f,!0);const Q=or(f),be=f.subTree;f.subTree=Q,N(be,Q,m(be.el),on(be),f,h,x),S.el=Q.el,W===null&&fl(f,Q.el),T&&de(T,h),(B=S.props&&S.props.onVnodeUpdated)&&de(()=>Ce(B,F,S,j),h)}else{let S;const{el:P,props:T}=u,{bm:F,m:j,parent:W}=f,B=jt(u);if(nt(f,!1),F&&ir(F),!B&&(S=T&&T.onVnodeBeforeMount)&&Ce(S,W,u),nt(f,!0),P&&rr){const Q=()=>{f.subTree=or(f),rr(P,f.subTree,f,h,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=or(f);N(null,Q,p,g,f,h,x),u.el=Q.el}if(j&&de(j,h),!B&&(S=T&&T.onVnodeMounted)){const Q=u;de(()=>Ce(S,W,Q),h)}(u.shapeFlag&256||W&&jt(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&de(f.a,h),f.isMounted=!0,u=p=g=null}},_=f.effect=new Xr(y,()=>aa(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,nt(f,!0),b()},J=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Dl(f,u.props,g,p),Ul(f,u.children,p),Ct(),ja(),It()},Y=(f,u,p,g,h,x,A,y,_=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,P=u.children,{patchFlag:T,shapeFlag:F}=u;if(T>0){if(T&128){an(b,P,p,g,h,x,A,y,_);return}else if(T&256){Qe(b,P,p,g,h,x,A,y,_);return}}F&8?(S&16&&Fe(b,h,x),P!==b&&d(p,P)):S&16?F&16?an(b,P,p,g,h,x,A,y,_):Fe(b,h,x,!0):(S&8&&d(p,""),F&16&&ve(P,p,g,h,x,A,y,_))},Qe=(f,u,p,g,h,x,A,y,_)=>{f=f||bt,u=u||bt;const b=f.length,S=u.length,P=Math.min(b,S);let T;for(T=0;T<P;T++){const F=u[T]=_?We(u[T]):Ie(u[T]);N(f[T],F,p,null,h,x,A,y,_)}b>S?Fe(f,h,x,!0,!1,P):ve(u,p,g,h,x,A,y,_,P)},an=(f,u,p,g,h,x,A,y,_)=>{let b=0;const S=u.length;let P=f.length-1,T=S-1;for(;b<=P&&b<=T;){const F=f[b],j=u[b]=_?We(u[b]):Ie(u[b]);if(Mt(F,j))N(F,j,p,null,h,x,A,y,_);else break;b++}for(;b<=P&&b<=T;){const F=f[P],j=u[T]=_?We(u[T]):Ie(u[T]);if(Mt(F,j))N(F,j,p,null,h,x,A,y,_);else break;P--,T--}if(b>P){if(b<=T){const F=T+1,j=F<S?u[F].el:g;for(;b<=T;)N(null,u[b]=_?We(u[b]):Ie(u[b]),p,j,h,x,A,y,_),b++}}else if(b>T)for(;b<=P;)Ee(f[b],h,x,!0),b++;else{const F=b,j=b,W=new Map;for(b=j;b<=T;b++){const pe=u[b]=_?We(u[b]):Ie(u[b]);pe.key!=null&&W.set(pe.key,b)}let B,Q=0;const be=T-j+1;let mt=!1,Pa=0;const Nt=new Array(be);for(b=0;b<be;b++)Nt[b]=0;for(b=F;b<=P;b++){const pe=f[b];if(Q>=be){Ee(pe,h,x,!0);continue}let Pe;if(pe.key!=null)Pe=W.get(pe.key);else for(B=j;B<=T;B++)if(Nt[B-j]===0&&Mt(pe,u[B])){Pe=B;break}Pe===void 0?Ee(pe,h,x,!0):(Nt[Pe-j]=b+1,Pe>=Pa?Pa=Pe:mt=!0,N(pe,u[Pe],p,null,h,x,A,y,_),Q++)}const Ca=mt?Wl(Nt):bt;for(B=Ca.length-1,b=be-1;b>=0;b--){const pe=j+b,Pe=u[pe],Ia=pe+1<S?u[pe+1].el:g;Nt[b]===0?N(null,Pe,p,Ia,h,x,A,y,_):mt&&(B<0||b!==Ca[B]?et(Pe,p,Ia,2):B--)}}},et=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){et(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,dt);return}if(A===xe){r(x,u,p);for(let P=0;P<_.length;P++)et(_[P],u,p,g);r(f.anchor,u,p);return}if(A===lr){M(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),de(()=>y.enter(x),h);else{const{leave:P,delayLeave:T,afterLeave:F}=y,j=()=>r(x,u,p),W=()=>{P(x,()=>{j(),F&&F()})};T?T(x,j,W):W()}else r(x,u,p)},Ee=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:S,patchFlag:P,dirs:T}=f;if(y!=null&&Pr(y,null,p,f,!0),S&256){u.ctx.deactivate(f);return}const F=S&1&&T,j=!jt(f);let W;if(j&&(W=A&&A.onVnodeBeforeUnmount)&&Ce(W,u,f),S&6)ns(f.component,p,g);else{if(S&128){f.suspense.unmount(p,g);return}F&&tt(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,p,h,dt,g):b&&(x!==xe||P>0&&P&64)?Fe(b,u,p,!1,!0):(x===xe&&P&384||!h&&S&16)&&Fe(_,u,p),g&&Oa(f)}(j&&(W=A&&A.onVnodeUnmounted)||F)&&de(()=>{W&&Ce(W,u,f),F&&tt(f,null,u,"unmounted")},p)},Oa=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===xe){ts(p,g);return}if(u===lr){I(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,_=()=>A(p,x);y?y(f.el,x,_):_()}else x()},ts=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},ns=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&ir(g),h.stop(),x&&(x.active=!1,Ee(A,f,u,p)),y&&de(y,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Fe=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Ee(f[A],u,p,g,h)},on=f=>f.shapeFlag&6?on(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ea=(f,u,p)=>{f==null?u._vnode&&Ee(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),ja(),to(),u._vnode=f},dt={p:N,um:Ee,m:et,r:Oa,mt:tr,mc:ve,pc:Y,pbc:Me,n:on,o:e};let nr,rr;return t&&([nr,rr]=t(dt)),{render:Ea,hydrate:nr,createApp:Ll(Ea,nr)}}function nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function xo(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=We(a[i]),s.el=o.el),n||xo(o,s)),s.type===qn&&(s.el=o.el)}}function Wl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Kl=e=>e.__isTeleport,xe=Symbol.for("v-fgt"),qn=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),lr=Symbol.for("v-stc"),$t=[];let we=null;function Xn(e=!1){$t.push(we=e?null:[])}function Vl(){$t.pop(),we=$t[$t.length-1]||null}let Kt=1;function Xa(e){Kt+=e}function _o(e){return e.dynamicChildren=Kt>0?we||bt:null,Vl(),Kt>0&&we&&we.push(e),e}function sa(e,t,n,r,a,i){return _o(Xe(e,t,n,r,a,i,!0))}function ql(e,t,n,r,a){return _o(G(e,t,n,r,a,!0))}function Fn(e){return e?e.__v_isVNode===!0:!1}function Mt(e,t){return e.type===t.type&&e.key===t.key}const Jn="__vInternal",wo=({key:e})=>e??null,En=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ne(e)||fe(e)||L(e)?{i:ce,r:e,k:t,f:!!n}:e:null);function Xe(e,t=null,n=null,r=0,a=null,i=e===xe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wo(t),ref:t&&En(t),scopeId:ao,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ce};return s?(la(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Kt>0&&!o&&we&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&we.push(l),l}const G=Xl;function Xl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===El)&&(e=kt),Fn(e)){const s=At(e,t,!0);return n&&la(s,n),Kt>0&&!i&&we&&(s.shapeFlag&6?we[we.indexOf(e)]=s:we.push(s)),s.patchFlag|=-2,s}if(lf(e)&&(e=e.__vccOpts),t){t=Jl(t);let{class:s,style:l}=t;s&&!ne(s)&&(t.class=Vr(s)),X(l)&&(Ji(l)&&!R(l)&&(l=te({},l)),t.style=Kr(l))}const o=ne(e)?1:cl(e)?128:Kl(e)?64:X(e)?4:L(e)?2:0;return Xe(e,t,n,r,a,o,i,!0)}function Jl(e){return e?Ji(e)||Jn in e?te({},e):e:null}function At(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Zl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&wo(s),ref:t&&t.ref?n&&a?R(a)?a.concat(En(t)):[a,En(t)]:En(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&At(e.ssContent),ssFallback:e.ssFallback&&At(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Gl(e=" ",t=0){return G(qn,null,e,t)}function Ie(e){return e==null||typeof e=="boolean"?G(kt):R(e)?G(xe,null,e.slice()):typeof e=="object"?We(e):G(qn,null,String(e))}function We(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:At(e)}function la(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),la(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Jn in t)?t._ctx=ce:a===3&&ce&&(ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ce},n=32):(t=String(t),r&64?(n=16,t=[Gl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Zl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Vr([t.class,r.class]));else if(a==="style")t.style=Kr([t.style,r.style]);else if(Dn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ce(e,t,n,r=null){Oe(e,t,7,[n,r])}const Ql=po();let ef=0;function tf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Ql,i={uid:ef++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new vs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:go(r,a),emitsOptions:ro(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=il.bind(null,i),e.ce&&e.ce(i),i}let re=null,fa,pt,Ja="__VUE_INSTANCE_SETTERS__";(pt=gr()[Ja])||(pt=gr()[Ja]=[]),pt.push(e=>re=e),fa=e=>{pt.length>1?pt.forEach(t=>t(e)):pt[0](e)};const Ot=e=>{fa(e),e.scope.on()},ft=()=>{re&&re.scope.off(),fa(null)};function ko(e){return e.vnode.shapeFlag&4}let Vt=!1;function nf(e,t=!1){Vt=t;const{props:n,children:r}=e.vnode,a=ko(e);jl(e,n,a,t),Hl(e,r);const i=a?rf(e,t):void 0;return Vt=!1,i}function rf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Gi(new Proxy(e.ctx,Il));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?of(e):null;Ot(e),Ct();const i=Ve(r,e,0,[e.props,a]);if(It(),ft(),Fi(i)){if(i.then(ft,ft),t)return i.then(o=>{Ga(e,o,t)}).catch(o=>{Yn(o,e,0)});e.asyncDep=i}else Ga(e,i,t)}else Ao(e,t)}function Ga(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=Zi(t)),Ao(e,n)}let Za;function Ao(e,t,n){const r=e.type;if(!e.render){if(!t&&Za&&!r.render){const a=r.template||ia(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=te(te({isCustomElement:i,delimiters:s},o),l);r.render=Za(a,c)}}e.render=r.render||Ae}Ot(e),Ct(),Sl(e),It(),ft()}function af(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function of(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return af(e)},slots:e.slots,emit:e.emit,expose:t}}function ca(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Zi(Gi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dt)return Dt[n](e)},has(t,n){return n in t||n in Dt}}))}function sf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function lf(e){return L(e)&&"__vccOpts"in e}const rt=(e,t)=>Zs(e,t,Vt);function ff(e,t,n){const r=arguments.length;return r===2?X(t)&&!R(t)?Fn(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fn(n)&&(n=[n]),G(e,t,n))}const cf=Symbol.for("v-scx"),uf=()=>On(cf),df="3.3.4",mf="http://www.w3.org/2000/svg",it=typeof document<"u"?document:null,Qa=it&&it.createElement("template"),pf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?it.createElementNS(mf,e):it.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Qa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Qa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function hf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function gf(e,t,n){const r=e.style,a=ne(n);if(n&&!a){if(t&&!ne(t))for(const i in t)n[i]==null&&Cr(r,i,"");for(const i in n)Cr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ei=/\s*!important$/;function Cr(e,t,n){if(R(n))n.forEach(r=>Cr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=vf(e,t);ei.test(n)?e.setProperty(Pt(r),n.replace(ei,""),"important"):e[r]=n}}const ti=["Webkit","Moz","ms"],fr={};function vf(e,t){const n=fr[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return fr[t]=r;r=Un(r);for(let a=0;a<ti.length;a++){const i=ti[a]+r;if(i in e)return fr[t]=i}return t}const ni="http://www.w3.org/1999/xlink";function bf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ni,t.slice(6,t.length)):e.setAttributeNS(ni,t,n);else{const i=hs(t);n==null||i&&!zi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function yf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=zi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function xf(e,t,n,r){e.addEventListener(t,n,r)}function _f(e,t,n,r){e.removeEventListener(t,n,r)}function wf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=kf(t);if(r){const c=i[t]=Ef(r,a);xf(e,s,c,l)}else o&&(_f(e,s,o,l),i[t]=void 0)}}const ri=/(?:Once|Passive|Capture)$/;function kf(e){let t;if(ri.test(e)){t={};let r;for(;r=e.match(ri);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Pt(e.slice(2)),t]}let cr=0;const Af=Promise.resolve(),Of=()=>cr||(Af.then(()=>cr=0),cr=Date.now());function Ef(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(Pf(r,n.value),t,5,[r])};return n.value=e,n.attached=Of(),n}function Pf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ai=/^on[a-z]/,Cf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?hf(e,r,a):t==="style"?gf(e,n,r):Dn(t)?Ur(t)||wf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):If(e,t,r,a))?yf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),bf(e,t,r,a))};function If(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ai.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ai.test(t)&&ne(n)?!1:t in e}const Sf=te({patchProp:Cf},pf);let ii;function Tf(){return ii||(ii=Bl(Sf))}const Nf=(...e)=>{const t=Tf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Mf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Mf(e){return ne(e)?document.querySelector(e):e}const Ff={class:"circle-link"},Rf=["src"],Lf=Kn({__name:"CircleImg",props:{img:String},setup(e){return(t,n)=>(Xn(),sa("div",Ff,[Xe("img",{src:e.img},null,8,Rf)]))}});const zf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},jf=zf(Lf,[["__scopeId","data-v-d6a498eb"]]),Df=["href"],$f={class:"link-container"},Hf={class:"link-text"},mn=Kn({__name:"LinkItem",props:{url:String,text:String},setup(e){return(t,n)=>(Xn(),sa("a",{href:e.url,class:"link-item"},[Xe("div",$f,[Cl(t.$slots,"default"),Xe("div",Hf,gs(e.text),1)])],8,Df))}});const Uf={class:"root"},Bf={class:"flex-row name-row"},Yf=Xe("span",{class:"text-name"},"Alexandre PERROT",-1),Wf={class:"flex-row"},Kf=Kn({__name:"App",setup(e){return(t,n)=>{const r=Ol("font-awesome-icon");return Xn(),sa("div",Uf,[Xe("div",Bf,[G(jf,{img:"photo.jpg"}),Yf]),Xe("div",Wf,[G(mn,{url:"resources/CV_PERROT_2023.pdf",text:"Mon CV"},{default:Rt(()=>[G(r,{icon:"fa-solid fa-file",size:"10x",class:"link-icon"})]),_:1}),G(mn,{url:"http://github.com/AlexPerrot",text:"Github"},{default:Rt(()=>[G(r,{icon:"fa-brands fa-github",size:"10x",class:"link-icon"})]),_:1}),G(mn,{url:"https://www.linkedin.com/in/perrotalexandre/",text:"LinkedIn"},{default:Rt(()=>[G(r,{icon:"fa-brands fa-linkedin",size:"10x",class:"link-icon"})]),_:1}),G(mn,{url:"https://hal.science/search/index/?q=%2A&rows=30&authFullName_s=Alexandre+Perrot&labStructName_t=Laboratoire+Bordelais+de+Recherche+en+Informatique",text:"Mes articles"},{default:Rt(()=>[G(r,{icon:"fa-solid fa-book",size:"10x",class:"link-icon"})]),_:1})])])}}});function oi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oi(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Rn(e){"@babel/helpers - typeof";return Rn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rn(e)}function Vf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function si(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qf(e,t,n){return t&&si(e.prototype,t),n&&si(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ua(e,t){return Jf(e)||Zf(e,t)||Oo(e,t)||ec()}function Qt(e){return Xf(e)||Gf(e)||Oo(e)||Qf()}function Xf(e){if(Array.isArray(e))return Ir(e)}function Jf(e){if(Array.isArray(e))return e}function Gf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Oo(e,t){if(e){if(typeof e=="string")return Ir(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ir(e,t)}}function Ir(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Qf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ec(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var li=function(){},da={},Eo={},Po=null,Co={mark:li,measure:li};try{typeof window<"u"&&(da=window),typeof document<"u"&&(Eo=document),typeof MutationObserver<"u"&&(Po=MutationObserver),typeof performance<"u"&&(Co=performance)}catch{}var tc=da.navigator||{},fi=tc.userAgent,ci=fi===void 0?"":fi,Je=da,V=Eo,ui=Po,pn=Co;Je.document;var Ue=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",Io=~ci.indexOf("MSIE")||~ci.indexOf("Trident/"),hn,gn,vn,bn,yn,je="___FONT_AWESOME___",Sr=16,So="fa",To="svg-inline--fa",ct="data-fa-i2svg",Tr="data-fa-pseudo-element",nc="data-fa-pseudo-element-pending",ma="data-prefix",pa="data-icon",di="fontawesome-i2svg",rc="async",ac=["HTML","HEAD","STYLE","SCRIPT"],No=function(){try{return!0}catch{return!1}}(),K="classic",Z="sharp",ha=[K,Z];function en(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var qt=en((hn={},ee(hn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ee(hn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),hn)),Xt=en((gn={},ee(gn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(gn,Z,{solid:"fass",regular:"fasr",light:"fasl"}),gn)),Jt=en((vn={},ee(vn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(vn,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),vn)),ic=en((bn={},ee(bn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(bn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),bn)),oc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Mo="fa-layers-text",sc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,lc=en((yn={},ee(yn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(yn,Z,{900:"fass",400:"fasr",300:"fasl"}),yn)),Fo=[1,2,3,4,5,6,7,8,9,10],fc=Fo.concat([11,12,13,14,15,16,17,18,19,20]),cc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gt=new Set;Object.keys(Xt[K]).map(Gt.add.bind(Gt));Object.keys(Xt[Z]).map(Gt.add.bind(Gt));var uc=[].concat(ha,Qt(Gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY]).concat(Fo.map(function(e){return"".concat(e,"x")})).concat(fc.map(function(e){return"w-".concat(e)})),Ht=Je.FontAwesomeConfig||{};function dc(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function mc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V&&typeof V.querySelector=="function"){var pc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pc.forEach(function(e){var t=ua(e,2),n=t[0],r=t[1],a=mc(dc(n));a!=null&&(Ht[r]=a)})}var Ro={styleDefault:"solid",familyDefault:"classic",cssPrefix:So,replacementClass:To,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ht.familyPrefix&&(Ht.cssPrefix=Ht.familyPrefix);var Et=E(E({},Ro),Ht);Et.autoReplaceSvg||(Et.observeMutations=!1);var C={};Object.keys(Ro).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){Et[e]=n,Ut.forEach(function(r){return r(C)})},get:function(){return Et[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Et.cssPrefix=t,Ut.forEach(function(n){return n(C)})},get:function(){return Et.cssPrefix}});Je.FontAwesomeConfig=C;var Ut=[];function hc(e){return Ut.push(e),function(){Ut.splice(Ut.indexOf(e),1)}}var Ye=Sr,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gc(e){if(!(!e||!Ue)){var t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(t,r),e}}var vc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zt(){for(var e=12,t="";e-- >0;)t+=vc[Math.random()*62|0];return t}function St(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ga(e){return e.classList?St(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Lo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Lo(e[n]),'" ')},"").trim()}function Gn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function va(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function yc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function xc(e){var t=e.transform,n=e.width,r=n===void 0?Sr:n,a=e.height,i=a===void 0?Sr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Io?l+="translate(".concat(t.x/Ye-r/2,"em, ").concat(t.y/Ye-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ye,"em), calc(-50% + ").concat(t.y/Ye,"em)) "):l+="translate(".concat(t.x/Ye,"em, ").concat(t.y/Ye,"em) "),l+="scale(".concat(t.size/Ye*(t.flipX?-1:1),", ").concat(t.size/Ye*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var _c=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function zo(){var e=So,t=To,n=C.cssPrefix,r=C.replacementClass,a=_c;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var mi=!1;function ur(){C.autoAddCss&&!mi&&(gc(zo()),mi=!0)}var wc={mixout:function(){return{dom:{css:zo,insertCss:ur}}},hooks:function(){return{beforeDOMElementCreation:function(){ur()},beforeI2svg:function(){ur()}}}},De=Je||{};De[je]||(De[je]={});De[je].styles||(De[je].styles={});De[je].hooks||(De[je].hooks={});De[je].shims||(De[je].shims=[]);var ke=De[je],jo=[],kc=function e(){V.removeEventListener("DOMContentLoaded",e),Ln=1,jo.map(function(t){return t()})},Ln=!1;Ue&&(Ln=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),Ln||V.addEventListener("DOMContentLoaded",kc));function Ac(e){Ue&&(Ln?setTimeout(e,0):jo.push(e))}function tn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Lo(e):"<".concat(t," ").concat(bc(r),">").concat(i.map(tn).join(""),"</").concat(t,">")}function pi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Oc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},dr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Oc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Ec(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Nr(e){var t=Ec(e);return t.length===1?t[0].toString(16):null}function Pc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function hi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Mr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=hi(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,hi(t)):ke.styles[e]=E(E({},ke.styles[e]||{}),i),e==="fas"&&Mr("fa",t)}var xn,_n,wn,gt=ke.styles,Cc=ke.shims,Ic=(xn={},ee(xn,K,Object.values(Jt[K])),ee(xn,Z,Object.values(Jt[Z])),xn),ba=null,Do={},$o={},Ho={},Uo={},Bo={},Sc=(_n={},ee(_n,K,Object.keys(qt[K])),ee(_n,Z,Object.keys(qt[Z])),_n);function Tc(e){return~uc.indexOf(e)}function Nc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Tc(a)?a:null}var Yo=function(){var t=function(i){return dr(gt,function(o,s,l){return o[l]=dr(s,i,{}),o},{})};Do=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),$o=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Bo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in gt||C.autoFetchSvg,r=dr(Cc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ho=r.names,Uo=r.unicodes,ba=Zn(C.styleDefault,{family:C.familyDefault})};hc(function(e){ba=Zn(e.styleDefault,{family:C.familyDefault})});Yo();function ya(e,t){return(Do[e]||{})[t]}function Mc(e,t){return($o[e]||{})[t]}function st(e,t){return(Bo[e]||{})[t]}function Wo(e){return Ho[e]||{prefix:null,iconName:null}}function Fc(e){var t=Uo[e],n=ya("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ge(){return ba}var xa=function(){return{prefix:null,iconName:null,rest:[]}};function Zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=qt[r][e],i=Xt[r][e]||Xt[r][a],o=e in ke.styles?e:null;return i||o||null}var gi=(wn={},ee(wn,K,Object.keys(Jt[K])),ee(wn,Z,Object.keys(Jt[Z])),wn);function Qn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,K,"".concat(C.cssPrefix,"-").concat(K)),ee(t,Z,"".concat(C.cssPrefix,"-").concat(Z)),t),o=null,s=K;(e.includes(i[K])||e.some(function(c){return gi[K].includes(c)}))&&(s=K),(e.includes(i[Z])||e.some(function(c){return gi[Z].includes(c)}))&&(s=Z);var l=e.reduce(function(c,d){var m=Nc(C.cssPrefix,d);if(gt[d]?(d=Ic[s].includes(d)?ic[s][d]:d,o=d,c.prefix=d):Sc[s].indexOf(d)>-1?(o=d,c.prefix=Zn(d,{family:s})):m?c.iconName=m:d!==C.replacementClass&&d!==i[K]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Wo(c.iconName):{},w=st(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||w||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!gt.far&&gt.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},xa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(gt.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=st(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ge()||"fas"),l}var Rc=function(){function e(){Vf(this,e),this.definitions={}}return qf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Mr(s,o[s]);var l=Jt[K][s];l&&Mr(l,o[s]),Yo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),vi=[],vt={},wt={},Lc=Object.keys(wt);function zc(e,t){var n=t.mixoutsTo;return vi=e,vt={},Object.keys(wt).forEach(function(r){Lc.indexOf(r)===-1&&delete wt[r]}),vi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Rn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){vt[o]||(vt[o]=[]),vt[o].push(i[o])})}r.provides&&r.provides(wt)}),n}function Fr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=vt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ut(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=vt[e]||[];a.forEach(function(i){i.apply(null,n)})}function $e(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return wt[e]?wt[e].apply(null,t):void 0}function Rr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ge();if(t)return t=st(n,t)||t,pi(Ko.definitions,n,t)||pi(ke.styles,n,t)}var Ko=new Rc,jc=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,ut("noAuto")},Dc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ue?(ut("beforeI2svg",t),$e("pseudoElements2svg",t),$e("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Ac(function(){Hc({autoReplaceSvgRoot:n}),ut("watch",t)})}},$c={icon:function(t){if(t===null)return null;if(Rn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:st(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Zn(t[0]);return{prefix:r,iconName:st(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(oc))){var a=Qn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ge(),iconName:st(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ge();return{prefix:i,iconName:st(i,t)||t}}}},he={noAuto:jc,config:C,dom:Dc,parse:$c,library:Ko,findIconDefinition:Rr,toHtml:tn},Hc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(ke.styles).length>0||C.autoFetchSvg)&&Ue&&C.autoReplaceSvg&&he.dom.i2svg({node:r})};function er(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return tn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ue){var r=V.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Uc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(va(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Gn(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Bc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function _a(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,w=v===void 0?!1:v,z=r.found?r:n,N=z.width,D=z.height,k=a==="fak",O=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),M={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},I=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};w&&(M.attributes[ct]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||Zt())},children:[l]}),delete M.attributes.title);var U=E(E({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},I),m.styles)}),ae=r.found&&n.found?$e("generateAbstractMask",U)||{children:[],attributes:{}}:$e("generateAbstractIcon",U)||{children:[],attributes:{}},ie=ae.children,ve=ae.attributes;return U.children=ie,U.attributes=ve,s?Bc(U):Uc(U)}function bi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ct]="");var d=E({},o.styles);va(a)&&(d.transform=xc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Gn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Yc(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Gn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var mr=ke.styles;function Lr(e){var t=e[0],n=e[1],r=e.slice(4),a=ua(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Wc={found:!1,width:512,height:512};function Kc(e,t){!No&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zr(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=Ge()),new Promise(function(r,a){if($e("missingIconAbstract"),n==="fa"){var i=Wo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&mr[t]&&mr[t][e]){var o=mr[t][e];return r(Lr(o))}Kc(e,t),r(E(E({},Wc),{},{icon:C.showMissingIcons&&e?$e("missingIconAbstract")||{}:{}}))})}var yi=function(){},jr=C.measurePerformance&&pn&&pn.mark&&pn.measure?pn:{mark:yi,measure:yi},zt='FA "6.4.0"',Vc=function(t){return jr.mark("".concat(zt," ").concat(t," begins")),function(){return Vo(t)}},Vo=function(t){jr.mark("".concat(zt," ").concat(t," ends")),jr.measure("".concat(zt," ").concat(t),"".concat(zt," ").concat(t," begins"),"".concat(zt," ").concat(t," ends"))},wa={begin:Vc,end:Vo},Pn=function(){};function xi(e){var t=e.getAttribute?e.getAttribute(ct):null;return typeof t=="string"}function qc(e){var t=e.getAttribute?e.getAttribute(ma):null,n=e.getAttribute?e.getAttribute(pa):null;return t&&n}function Xc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function Jc(){if(C.autoReplaceSvg===!0)return Cn.replace;var e=Cn[C.autoReplaceSvg];return e||Cn.replace}function Gc(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function Zc(e){return V.createElement(e)}function qo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Gc:Zc:n;if(typeof e=="string")return V.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(qo(o,{ceFn:r}))}),a}function Qc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Cn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(qo(a),n)}),n.getAttribute(ct)===null&&C.keepOriginalSource){var r=V.createComment(Qc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ga(n).indexOf(C.replacementClass))return Cn.replace(t);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return tn(s)}).join(`
`);n.setAttribute(ct,""),n.innerHTML=o}};function _i(e){e()}function Xo(e,t){var n=typeof t=="function"?t:Pn;if(e.length===0)n();else{var r=_i;C.mutateApproach===rc&&(r=Je.requestAnimationFrame||_i),r(function(){var a=Jc(),i=wa.begin("mutate");e.map(a),i(),n()})}}var ka=!1;function Jo(){ka=!0}function Dr(){ka=!1}var zn=null;function wi(e){if(ui&&C.observeMutations){var t=e.treeCallback,n=t===void 0?Pn:t,r=e.nodeCallback,a=r===void 0?Pn:r,i=e.pseudoElementsCallback,o=i===void 0?Pn:i,s=e.observeMutationsRoot,l=s===void 0?V:s;zn=new ui(function(c){if(!ka){var d=Ge();St(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!xi(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&xi(m.target)&&~cc.indexOf(m.attributeName))if(m.attributeName==="class"&&qc(m.target)){var v=Qn(ga(m.target)),w=v.prefix,z=v.iconName;m.target.setAttribute(ma,w||d),z&&m.target.setAttribute(pa,z)}else Xc(m.target)&&a(m.target)})}}),Ue&&zn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function eu(){zn&&zn.disconnect()}function tu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function nu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Qn(ga(e));return a.prefix||(a.prefix=Ge()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Mc(a.prefix,e.innerText)||ya(a.prefix,Nr(e.innerText))),!a.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ru(e){var t=St(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||Zt()):(t["aria-hidden"]="true",t.focusable="false")),t}function au(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=nu(e),r=n.iconName,a=n.prefix,i=n.rest,o=ru(e),s=Fr("parseNodeAttributes",{},e),l=t.styleParser?tu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var iu=ke.styles;function Go(e){var t=C.autoReplaceSvg==="nest"?ki(e,{styleParser:!1}):ki(e);return~t.extra.classes.indexOf(Mo)?$e("generateLayersText",e,t):$e("generateSvgReplacementMutation",e,t)}var Ze=new Set;ha.map(function(e){Ze.add("fa-".concat(e))});Object.keys(qt[K]).map(Ze.add.bind(Ze));Object.keys(qt[Z]).map(Ze.add.bind(Ze));Ze=Qt(Ze);function Ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ue)return Promise.resolve();var n=V.documentElement.classList,r=function(m){return n.add("".concat(di,"-").concat(m))},a=function(m){return n.remove("".concat(di,"-").concat(m))},i=C.autoFetchSvg?Ze:ha.map(function(d){return"fa-".concat(d)}).concat(Object.keys(iu));i.includes("fa")||i.push("fa");var o=[".".concat(Mo,":not([").concat(ct,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ct,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=St(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=wa.begin("onTree"),c=s.reduce(function(d,m){try{var v=Go(m);v&&d.push(v)}catch(w){No||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Xo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function ou(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Go(e).then(function(n){n&&Xo([n],t)})}function su(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Rr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Rr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var lu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,w=n.titleId,z=w===void 0?null:w,N=n.classes,D=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,M=n.styles,I=M===void 0?{}:M;if(t){var U=t.prefix,ae=t.iconName,ie=t.icon;return er(E({type:"icon"},t),function(){return ut("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(v?O["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(z||Zt()):(O["aria-hidden"]="true",O.focusable="false")),_a({icons:{main:Lr(ie),mask:l?Lr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:ae,transform:E(E({},Te),a),symbol:o,title:v,maskId:d,titleId:z,extra:{attributes:O,styles:I,classes:D}})})}},fu={mixout:function(){return{icon:su(lu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ai,n.nodeCallback=ou,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,o=i===void 0?function(){}:i;return Ai(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(w,z){Promise.all([zr(a,s),d.iconName?zr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=ua(N,2),k=D[0],O=D[1];w([n,_a({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(z)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Gn(s);l.length>0&&(a.style=l);var c;return va(o)&&(c=$e("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},cu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return er({type:"layer"},function(){ut("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(Qt(i)).join(" ")},children:o}]})}}}},uu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return er({type:"counter",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),Yc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(Qt(s))}})})}}}},du={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,w=v===void 0?{}:v;return er({type:"text",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),bi({content:n,transform:E(E({},Te),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(C.cssPrefix,"-layers-text")].concat(Qt(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Io){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,bi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},mu=new RegExp('"',"ug"),Oi=[1105920,1112319];function pu(e){var t=e.replace(mu,""),n=Pc(t,0),r=n>=Oi[0]&&n<=Oi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Nr(a?t[0]:t),isSecondary:r||a}}function Ei(e,t){var n="".concat(nc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=St(e.children),o=i.filter(function(ie){return ie.getAttribute(Tr)===t})[0],s=Je.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(sc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:K,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Xt[v][l[2].toLowerCase()]:lc[v][c],z=pu(m),N=z.value,D=z.isSecondary,k=l[0].startsWith("FontAwesome"),O=ya(w,N),M=O;if(k){var I=Fc(N);I.iconName&&I.prefix&&(O=I.iconName,w=I.prefix)}if(O&&!D&&(!o||o.getAttribute(ma)!==w||o.getAttribute(pa)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var U=au(),ae=U.extra;ae.attributes[Tr]=t,zr(O,w).then(function(ie){var ve=_a(E(E({},U),{},{icons:{main:ie,mask:xa()},prefix:w,iconName:M,extra:ae,watchable:!0})),ge=V.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=ve.map(function(Me){return tn(Me)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function hu(e){return Promise.all([Ei(e,"::before"),Ei(e,"::after")])}function gu(e){return e.parentNode!==document.head&&!~ac.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Pi(e){if(Ue)return new Promise(function(t,n){var r=St(e.querySelectorAll("*")).filter(gu).map(hu),a=wa.begin("searchPseudoElements");Jo(),Promise.all(r).then(function(){a(),Dr(),t()}).catch(function(){a(),Dr(),n()})})}var vu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Pi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;C.searchPseudoElements&&Pi(a)}}},Ci=!1,bu={mixout:function(){return{dom:{unwatch:function(){Jo(),Ci=!0}}}},hooks:function(){return{bootstrap:function(){wi(Fr("mutationObserverCallbacks",{}))},noAuto:function(){eu()},watch:function(n){var r=n.observeMutationsRoot;Ci?Dr():wi(Fr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ii=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},yu={mixout:function(){return{parse:{transform:function(n){return Ii(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ii(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},pr={x:0,y:0,width:"100%",height:"100%"};function Si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function xu(e){return e.tag==="g"?e.children:[e]}var _u={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Qn(a.split(" ").map(function(o){return o.trim()})):xa();return i.prefix||(i.prefix=Ge()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,w=yc({transform:l,containerWidth:m,iconWidth:c}),z={tag:"rect",attributes:E(E({},pr),{},{fill:"white"})},N=d.children?{children:d.children.map(Si)}:{},D={tag:"g",attributes:E({},w.inner),children:[Si(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},N))]},k={tag:"g",attributes:E({},w.outer),children:[D]},O="mask-".concat(s||Zt()),M="clip-".concat(s||Zt()),I={tag:"mask",attributes:E(E({},pr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,k]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:xu(v)},I]};return r.push(U,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(O,")")},pr)}),{children:r,attributes:a}}}},wu={provides:function(t){var n=!1;Je.matchMedia&&(n=Je.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ku={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Au=[wc,fu,cu,uu,du,vu,bu,yu,_u,wu,ku];zc(Au,{mixoutsTo:he});he.noAuto;var Ou=he.config,Eu=he.library;he.dom;var $r=he.parse;he.findIconDefinition;he.toHtml;var Pu=he.icon;he.layer;he.text;he.counter;function Ti(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ti(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ti(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jn(e){"@babel/helpers - typeof";return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jn(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Iu(e,t){if(e==null)return{};var n=Cu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zo={exports:{}};(function(e){(function(t){var n=function(k,O,M){if(!c(O)||m(O)||v(O)||w(O)||l(O))return O;var I,U=0,ae=0;if(d(O))for(I=[],ae=O.length;U<ae;U++)I.push(n(k,O[U],M));else{I={};for(var ie in O)Object.prototype.hasOwnProperty.call(O,ie)&&(I[k(ie,M)]=n(k,O[ie],M))}return I},r=function(k,O){O=O||{};var M=O.separator||"_",I=O.split||/(?=[A-Z])/;return k.split(I).join(M)},a=function(k){return z(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,M){return M?M.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},v=function(k){return s.call(k)=="[object RegExp]"},w=function(k){return s.call(k)=="[object Boolean]"},z=function(k){return k=k-0,k===k},N=function(k,O){var M=O&&"process"in O?O.process:O;return typeof M!="function"?k:function(I,U){return M(I,k,U)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(Su)})(Zo);var Tu=Zo.exports,Nu=["class","style"];function Mu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Tu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Fu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Qo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Qo(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Fu(d);break;case"style":l.style=Mu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Iu(n,Nu);return ff(e.tag,Le(Le(Le({},t),{},{class:a.class,style:Le(Le({},a.style),o)},a.attrs),s),r)}var es=!1;try{es=!0}catch{}function Ru(){if(!es&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function hr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function Lu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ni(e){if(e&&jn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if($r.icon)return $r.icon(e);if(e===null)return null;if(jn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var zu=Kn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=rt(function(){return Ni(t.icon)}),i=rt(function(){return hr("classes",Lu(t))}),o=rt(function(){return hr("transform",typeof t.transform=="string"?$r.transform(t.transform):t.transform)}),s=rt(function(){return hr("mask",Ni(t.mask))}),l=rt(function(){return Pu(a.value,Le(Le(Le(Le({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});An(l,function(d){if(!d)return Ru("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=rt(function(){return l.value?Qo(l.value.abstract[0],{},r):null});return function(){return c.value}}}),ju={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]},Du={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},$u={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Hu={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};Eu.add(Hu,$u,ju,Du);Ou.styleDefault="solid";Nf(Kf).component("font-awesome-icon",zu).mount("#app");
