import{$ as v,a as D,g as C,b as K,c as T,o as z,d as F,e as M,f as L,r as I,t as W}from"./web.a41de305.js";import{u as q}from"./index.bf8a10de.js";const j=Symbol("store-raw"),$=Symbol("store-node"),H=Symbol("store-name");function N(e,n){let l=e[v];if(!l&&(Object.defineProperty(e,v,{value:l=new Proxy(e,Y)}),!Array.isArray(e))){const o=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let i=0,r=o.length;i<r;i++){const u=o[i];s[u].get&&Object.defineProperty(e,u,{enumerable:s[u].enumerable,get:s[u].get.bind(l)})}}return l}function w(e){let n;return e!=null&&typeof e=="object"&&(e[v]||!(n=Object.getPrototypeOf(e))||n===Object.prototype||Array.isArray(e))}function y(e,n=new Set){let l,o,s,i;if(l=e!=null&&e[j])return l;if(!w(e)||n.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):n.add(e);for(let r=0,u=e.length;r<u;r++)s=e[r],(o=y(s,n))!==s&&(e[r]=o)}else{Object.isFrozen(e)?e=Object.assign({},e):n.add(e);const r=Object.keys(e),u=Object.getOwnPropertyDescriptors(e);for(let f=0,t=r.length;f<t;f++)i=r[f],!u[i].get&&(s=e[i],(o=y(s,n))!==s&&(e[i]=o))}return e}function S(e){let n=e[$];return n||Object.defineProperty(e,$,{value:n={}}),n}function m(e,n,l){return e[n]||(e[n]=k(l))}function V(e,n){const l=Reflect.getOwnPropertyDescriptor(e,n);return!l||l.get||!l.configurable||n===v||n===$||n===H||(delete l.value,delete l.writable,l.get=()=>e[v][n]),l}function R(e){if(C()){const n=S(e);(n._||(n._=k()))()}}function X(e){return R(e),Reflect.ownKeys(e)}function k(e){const[n,l]=T(e,{equals:!1,internal:!0});return n.$=l,n}const Y={get(e,n,l){if(n===j)return e;if(n===v)return l;if(n===D)return R(e),l;const o=S(e),s=o.hasOwnProperty(n);let i=s?o[n]():e[n];if(n===$||n==="__proto__")return i;if(!s){const r=Object.getOwnPropertyDescriptor(e,n);C()&&(typeof i!="function"||e.hasOwnProperty(n))&&!(r&&r.get)&&(i=m(o,n,i)())}return w(i)?N(i):i},has(e,n){return n===j||n===v||n===D||n===$||n==="__proto__"?!0:(this.get(e,n,e),n in e)},set(){return!0},deleteProperty(){return!0},ownKeys:X,getOwnPropertyDescriptor:V};function h(e,n,l,o=!1){if(!o&&e[n]===l)return;const s=e[n],i=e.length;l===void 0?delete e[n]:e[n]=l;let r=S(e),u;(u=m(r,n,s))&&u.$(()=>l),Array.isArray(e)&&e.length!==i&&(u=m(r,"length",i))&&u.$(e.length),(u=r._)&&u.$()}function E(e,n){const l=Object.keys(n);for(let o=0;o<l.length;o+=1){const s=l[o];h(e,s,n[s])}}function B(e,n){if(typeof n=="function"&&(n=n(e)),n=y(n),Array.isArray(n)){if(e===n)return;let l=0,o=n.length;for(;l<o;l++){const s=n[l];e[l]!==s&&h(e,l,s)}h(e,"length",o)}else E(e,n)}function A(e,n,l=[]){let o,s=e;if(n.length>1){o=n.shift();const r=typeof o,u=Array.isArray(e);if(Array.isArray(o)){for(let f=0;f<o.length;f++)A(e,[o[f]].concat(n),l);return}else if(u&&r==="function"){for(let f=0;f<e.length;f++)o(e[f],f)&&A(e,[f].concat(n),l);return}else if(u&&r==="object"){const{from:f=0,to:t=e.length-1,by:c=1}=o;for(let d=f;d<=t;d+=c)A(e,[d].concat(n),l);return}else if(n.length>1){A(e[o],n,[o].concat(l));return}s=e[o],l=[o].concat(l)}let i=n[0];typeof i=="function"&&(i=i(s,l),i===s)||o===void 0&&i==null||(i=y(i),o===void 0||w(s)&&w(i)&&!Array.isArray(i)?E(s,i):h(e,o,i))}function G(...[e,n]){const l=y(e||{}),o=Array.isArray(l),s=N(l);function i(...r){K(()=>{o&&r.length===1?B(l,r[0]):A(l,r)})}return[s,i]}const P=Symbol("store-root");function p(e,n,l,o,s){const i=n[l];if(e===i)return;if(!w(e)||!w(i)||s&&e[s]!==i[s]){if(e!==i){if(l===P)return e;h(n,l,e)}return}if(Array.isArray(e)){if(e.length&&i.length&&(!o||s&&e[0]&&e[0][s]!=null)){let f,t,c,d,a,b,_,g;for(c=0,d=Math.min(i.length,e.length);c<d&&(i[c]===e[c]||s&&i[c]&&e[c]&&i[c][s]===e[c][s]);c++)p(e[c],i,c,o,s);const O=new Array(e.length),x=new Map;for(d=i.length-1,a=e.length-1;d>=c&&a>=c&&(i[d]===e[a]||s&&i[c]&&e[c]&&i[d][s]===e[a][s]);d--,a--)O[a]=i[d];if(c>a||c>d){for(t=c;t<=a;t++)h(i,t,e[t]);for(;t<e.length;t++)h(i,t,O[t]),p(e[t],i,t,o,s);i.length>e.length&&h(i,"length",e.length);return}for(_=new Array(a+1),t=a;t>=c;t--)b=e[t],g=s&&b?b[s]:b,f=x.get(g),_[t]=f===void 0?-1:f,x.set(g,t);for(f=c;f<=d;f++)b=i[f],g=s&&b?b[s]:b,t=x.get(g),t!==void 0&&t!==-1&&(O[t]=i[f],t=_[t],x.set(g,t));for(t=c;t<e.length;t++)t in O?(h(i,t,O[t]),p(e[t],i,t,o,s)):h(i,t,e[t])}else for(let f=0,t=e.length;f<t;f++)p(e[f],i,f,o,s);i.length>e.length&&h(i,"length",e.length);return}const r=Object.keys(e);for(let f=0,t=r.length;f<t;f++)p(e[r[f]],i,r[f],o,s);const u=Object.keys(i);for(let f=0,t=u.length;f<t;f++)e[u[f]]===void 0&&h(i,u[f],void 0)}function J(e,n={}){const{merge:l,key:o="id"}=n,s=y(e);return i=>{if(!w(i)||!w(s))return s;const r=p(s,{[P]:i},P,l,o);return r===void 0?i:r}}function Q(e){let n=e.get(),[l,o]=U(n),s=e.subscribe(o);return z(()=>s()),l}function U(e){let[n,l]=G({value:e});return[()=>n.value,o=>{let s=y(n.value);return typeof o=="function"&&(o=o(s)),l("value",J(o)),n.value}]}const Z=W('<div class="fixed top-0 bottom-0 left-0 z-50 w-4/6 hidd navbar-menu sm:max-w-xs"><div class="fixed inset-0 bg-black navbar-backdrop opacity-30"></div><nav class="relative z-10 h-full pt-8 overflow-y-auto bg-yellow-400 bg-opacity-75 backdrop-blur-sm px-9"><div class="flex flex-wrap justify-between h-full"><div class="w-full"><div class="flex items-center justify-between -m-2"><div class="w-auto p-2"><a class="inline-block" href="#"><img src="flaro-assets/logos/flaro-logo-black.svg" alt=""></a></div><div class="w-auto p-2"><a class="navbar-burger" href="#"><svg width="24" height="24" view-box="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div></div></div><div class="flex flex-col justify-center w-full py-16"><ul><li class="mb-12"><a class="font-medium hover:text-gray-700" href="#">Features</a></li><li class="mb-12"><a class="font-medium hover:text-gray-700" href="#">Solutions</a></li><li class="mb-12"><a class="font-medium hover:text-gray-700" href="#">Resources</a></li><li><a class="font-medium hover:text-gray-700" href="#">Pricing</a></li></ul></div><div class="flex flex-col justify-end w-full pb-8"><div class="flex flex-wrap"><div class="w-full"><div class="block"><button class="w-full px-5 py-3 font-semibold text-white transition duration-200 ease-in-out bg-green-600 border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 hover:bg-indigo-700" type="button">Try 14 Days Free Trial</button></div></div></div></div></div></nav></div>');function ie(e){const{menuState:n,closeMenu:l}=q(),o=Q(n);return M((()=>{const s=M(()=>!!o().isOpen);return()=>s()&&(()=>{const i=L(Z),r=i.firstChild,u=r.nextSibling,f=u.firstChild,t=f.firstChild,c=t.firstChild,d=c.firstChild,a=d.nextSibling,b=a.firstChild;return b.$$click=()=>l(),I(),i})()})())}F(["click"]);export{ie as default};