const f={};function L(e){f.context=e}function W(){return{...f.context,id:`${f.context.id}${f.context.count++}-`,count:0}}const X=(e,t)=>e===t,re=Symbol("solid-proxy"),fe=Symbol("solid-track"),A={equals:X};let Q=I;const b=1,E=2,U={owned:null,cleanups:null,context:null,owner:null};var c=null;let y=null,u=null,a=null,w=null,B=0;function J(e,t){const n=u,s=c,i=e.length===0,o=i?U:{owned:null,cleanups:null,context:null,owner:t||s},r=i?e:()=>e(()=>v(()=>m(o)));c=o,u=null;try{return S(r,!0)}finally{u=n,c=s}}function ue(e,t){t=t?Object.assign({},A,t):A;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),j(n,i));return[_.bind(n),s]}function H(e,t,n){const s=k(e,t,!1,b);$(s)}function ce(e,t,n){n=n?Object.assign({},A,n):A;const s=k(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,$(s),_.bind(s)}function ae(e){return S(e,!1)}function v(e){const t=u;u=null;try{return e()}finally{u=t}}function he(e){return c===null||(c.cleanups===null?c.cleanups=[e]:c.cleanups.push(e)),e}function de(){return u}function _(){const e=y;if(this.sources&&(this.state||e))if(this.state===b||e)$(this);else{const t=a;a=null,S(()=>C(this),!1),a=t}if(u){const t=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(t)):(u.sources=[this],u.sourceSlots=[t]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function j(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&S(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],r=y&&y.running;r&&y.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?a.push(o):w.push(o),o.observers&&V(o)),r||(o.state=b)}if(a.length>1e6)throw a=[],new Error},!1)),t}function $(e){if(!e.fn)return;m(e);const t=c,n=u,s=B;u=c=e,Z(e,e.value,s),u=n,c=t}function Z(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=b,e.owned&&e.owned.forEach(m),e.owned=null),Y(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?j(e,s):e.value=s,e.updatedAt=n)}function k(e,t,n,s=b,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:c,context:null,pure:n};return c===null||c!==U&&(c.owned?c.owned.push(o):c.owned=[o]),o}function R(e){const t=y;if(e.state===0||t)return;if(e.state===E||t)return C(e);if(e.suspense&&v(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<B);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===b||t)$(e);else if(e.state===E||t){const i=a;a=null,S(()=>C(e,n[0]),!1),a=i}}function S(e,t){if(a)return e();let n=!1;t||(a=[]),w?n=!0:w=[],B++;try{const s=e();return z(n),s}catch(s){a||(w=null),Y(s)}}function z(e){if(a&&(I(a),a=null),e)return;const t=w;w=null,t.length&&S(()=>Q(t),!1)}function I(e){for(let t=0;t<e.length;t++)R(e[t])}function C(e,t){const n=y;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===b||n?i!==t&&R(i):(i.state===E||n)&&C(i,t))}}function V(e){const t=y;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=E,s.pure?a.push(s):w.push(s),s.observers&&V(s))}}function m(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),r=n.observerSlots.pop();s<i.length&&(o.sourceSlots[r]=s,i[s]=o,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)m(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ee(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Y(e){throw e=ee(e),e}let F=!1;function te(){F=!0}function ge(e,t){if(F&&f.context){const n=f.context;L(W());const s=v(()=>e(t||{}));return L(n),s}return v(()=>e(t||{}))}function ne(e,t,n){let s=n.length,i=t.length,o=s,r=0,l=0,h=t[i-1].nextSibling,d=null;for(;r<i||l<o;){if(t[r]===n[l]){r++,l++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===r){const g=o<s?l?n[l-1].nextSibling:n[o-l]:h;for(;l<o;)e.insertBefore(n[l++],g)}else if(o===l)for(;r<i;)(!d||!d.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[o-1]&&n[l]===t[i-1]){const g=t[--i].nextSibling;e.insertBefore(n[l++],t[r++].nextSibling),e.insertBefore(n[--o],g),t[i]=n[o]}else{if(!d){d=new Map;let p=l;for(;p<o;)d.set(n[p],p++)}const g=d.get(t[r]);if(g!=null)if(l<g&&g<o){let p=r,N=1,O;for(;++p<i&&p<o&&!((O=d.get(t[p]))==null||O!==g+N);)N++;if(N>g-l){const K=t[r];for(;l<g;)e.insertBefore(n[l++],K)}else e.replaceChild(n[l++],t[r++])}else r++;else t[r++].remove()}}}const P="_$DX_DELEGATE";function se(e,t,n,s={}){let i;return J(o=>{i=o,t===document?e():ie(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function pe(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function ye(e,t=window.document){const n=t[P]||(t[P]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,G))}}function we(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ie(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return T(e,t,s,n);H(i=>T(e,t(),i,n),s)}function le(e,t,n={}){f.completed=globalThis._$HY.completed,f.events=globalThis._$HY.events,f.load=globalThis._$HY.load,f.gather=i=>M(t,i),f.registry=new Map,f.context={id:n.renderId||"",count:0},M(t,n.renderId);const s=se(e,t,[...t.childNodes],n);return f.context=null,s}function be(e){let t,n;return!f.context||!(t=f.registry.get(n=oe()))?e.cloneNode(!0):(f.completed&&f.completed.add(t),f.registry.delete(n),t)}function xe(e){let t=e,n=0,s=[];if(f.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="#")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function Se(){f.events&&!f.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=f;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;G(s),t.shift()}}),f.events.queued=!0)}function G(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),f.registry&&!f.done&&(f.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function T(e,t,n,s,i){for(f.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(f.context)return n;if(o==="number"&&(t=t.toString()),r){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=x(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(f.context)return n;n=x(e,n,s)}else{if(o==="function")return H(()=>{let l=t();for(;typeof l=="function";)l=l();n=T(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],h=n&&Array.isArray(n);if(q(l,t,n,i))return H(()=>n=T(e,l,n,s,!0)),()=>n;if(f.context){if(!l.length)return n;for(let d=0;d<l.length;d++)if(l[d].parentNode)return n=l}if(l.length===0){if(n=x(e,n,s),r)return n}else h?n.length===0?D(e,l,s):ne(e,n,l):(n&&x(e),D(e,l));n=l}else if(t instanceof Node){if(f.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=x(e,n,s,t);x(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function q(e,t,n,s){let i=!1;for(let o=0,r=t.length;o<r;o++){let l=t[o],h=n&&n[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=q(e,l,h)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=q(e,Array.isArray(l)?l:[l],Array.isArray(h)?h:[h])||i}else e.push(l),i=!0;else{const d=String(l);h&&h.nodeType===3&&h.data===d?e.push(h):e.push(document.createTextNode(d))}}return i}function D(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function x(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(i!==l){const h=l.parentNode===e;!o&&!r?h?e.replaceChild(i,l):e.insertBefore(i,n):h&&l.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}function M(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],o=i.getAttribute("data-hk");(!t||o.startsWith(t))&&!f.registry.has(o)&&f.registry.set(o,i)}}function oe(){const e=f.context;return`${e.id}${e.count++}`}const Ae=(...e)=>(te(),le(...e));export{re as $,fe as a,ae as b,ue as c,ye as d,ce as e,be as f,de as g,H as h,ie as i,xe as j,ge as k,f as l,se as m,Ae as n,he as o,Se as r,we as s,pe as t};
