import{k as g,ap as y,o as d,B as z,j as w,m as f,L as O,au as v,q as x,aA as b}from"./index-44f619a7.js";function L(){const o=g(!y.value);return o.value===!1&&d(()=>{o.value=!0}),{isHydrated:o}}const h=typeof ResizeObserver<"u",m=h===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},H=z({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(o,{emit:p}){let n=null,t,r={width:-1,height:-1};function s(e){e===!0||o.debounce===0||o.debounce==="0"?u():n===null&&(n=setTimeout(u,o.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:e,offsetHeight:i}=t;(e!==r.width||i!==r.height)&&(r={width:e,height:i},p("resize",r))}}const{proxy:l}=w();if(l.trigger=s,h===!0){let e;const i=a=>{t=l.$el.parentNode,t?(e=new ResizeObserver(s),e.observe(t),u()):a!==!0&&v(()=>{i(!0)})};return d(()=>{i()}),f(()=>{n!==null&&clearTimeout(n),e!==void 0&&(e.disconnect!==void 0?e.disconnect():t&&e.unobserve(t))}),O}else{let a=function(){n!==null&&(clearTimeout(n),n=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",s,b.passive),i=void 0)},c=function(){a(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",s,b.passive),u())};const{isHydrated:e}=L();let i;return d(()=>{v(()=>{t=l.$el,t&&c()})}),f(a),()=>{if(e.value===!0)return x("object",{class:"q--avoid-card-border",style:m.style,tabindex:-1,type:"text/html",data:m.url,"aria-hidden":"true",onLoad:c})}}}});export{H as Q};
