window.SnipcartSettings={publicApiKey:"MzliN2NhZDEtOWNjOC00NWYzLTk5YWUtNmNlNDI3ZDBhMmY1NjM4MDkzMTY2MzQ5NjA2NDk0",loadStrategy:"on-user-interaction",modalStyle:"side"};(function(){var l;(l=window.SnipcartSettings).version!=null||(l.version="3.0");var u;(u=window.SnipcartSettings).timeoutDuration!=null||(u.timeoutDuration=2750);var c;(c=window.SnipcartSettings).domain!=null||(c.domain="cdn.snipcart.com");var d;(d=window.SnipcartSettings).protocol!=null||(d.protocol="https");var p;(p=window.SnipcartSettings).loadCSS!=null||(p.loadCSS=!0);var m=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,S=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=i,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t();function t(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(S.forEach(function(e){return document.addEventListener(e,i)}),setTimeout(i,window.SnipcartSettings.timeoutDuration)):i()}var n=!1;function i(){if(n)return;n=!0;let e=document.getElementsByTagName("head")[0],o=document.querySelector("#snipcart"),r=document.querySelector('src[src^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][src$="snipcart.js"]')),a=document.querySelector('link[href^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][href$="snipcart.css"]'));o||(o=document.createElement("div"),o.id="snipcart",o.setAttribute("hidden","true"),document.body.appendChild(o)),s(o),r||(r=document.createElement("script"),r.src="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.js"),r.async=!0,e.appendChild(r)),!a&&window.SnipcartSettings.loadCSS&&(a=document.createElement("link"),a.rel="stylesheet",a.type="text/css",a.href="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.css"),e.prepend(a)),S.forEach(function(w){return document.removeEventListener(w,i)})}function s(e){!m||(e.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(e.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(e.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(e.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(e.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();{let l=function(t,n,i,s){const{display:e,fontSize:o,gridAutoFlow:r,flexDirection:a}=t,{display:w}=n,h=w.includes("inline"),g=e.includes("flex"),y=e.includes("grid"),f=a.includes("row"),E=r.includes("column");[h,g&&f,y&&E].some(v=>v===!0)&&(i.style.width=`${parseInt(o)*s}px`,i.style.height="auto")},u=function(t,n,i,s){const{display:e,fontSize:o,gridAutoFlow:r,flexDirection:a}=t,{display:w}=n,h=w.includes("block"),g=e.includes("flex"),y=e.includes("grid"),f=a.includes("column"),E=r.includes("row");[h,y&&E,g&&f].some(v=>v===!0)&&(i.style.width="auto",i.style.height=`${parseInt(o)*s}px`)},c=function(t,n){if(!t)throw new Error(`A gap must exist between two elements check for ${n} `)},d=function(t,n){if(!t)throw new Error(`A gap must exist between two elements check for ${n} `)},p=function(t,n,i){const s=t.hasAttribute("data-id")||i.hasAttribute("data-id"),e=t.getAttribute("data-id"),o=n.getAttribute("data-id"),r=i.getAttribute("data-id");if(s)throw new Error(`Two gaps cannot exist between each other , Check for these id's  ${e} ${o} ${r} `)};const m="[data-id='gap']";document.querySelectorAll(m).forEach(function(t){const[n,i]=[parseInt(t.getAttribute("data-spaces")),t.getAttribute("data-color")],s=t.parentElement,e=getComputedStyle(s),{nextElementSibling:o,previousElementSibling:r}=t;t.setAttribute("data-id",`gap${Math.ceil(Math.random()*Date.now())}`),d(r,t.dataset.id),c(o,t.dataset.id),p(r,t,o);const a=getComputedStyle(r);l(e,a,t,n),u(e,a,t,n),t.style.backgroundColor=i})}const D=document.getElementById("app-transition-overlay"),I=window.getComputedStyle(D),A=parseInt(I.getPropertyValue("--speed").replace("ms"),10)||500,T=document.getElementsByTagName("a");for(let l=0,u=T.length;l<u;l++){const c=T[l].getAttribute("href");if(c?.length){const d=T[l],p=c[0]!=="#",m=d.getAttribute("target")!=="_blank",S=c?.startsWith("http")===!1,t=c?.startsWith("mailto:")===!1,n=c?.startsWith("tel:")===!1;[p,m,S,t,n].every(s=>s===!0)&&d.addEventListener("click",s=>{s.preventDefault(),d.classList.add("has-been-clicked"),setTimeout(()=>d.classList.remove("has-been-clicked"),A*2),D.classList.toggle("is-visible"),document.body.setAttribute("data-is-top","true"),setTimeout(()=>{window.location=c},A)})}}
