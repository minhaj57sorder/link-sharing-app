import{o as _,r as y,a as b,c as x,w as o,b as t,d as r,n as p,u as c,Q as m,e as f}from"./index-885abe90.js";import{Q as v,a as g,b as w,c as C}from"./QLayout-d9e5a7a8.js";import{u as Q}from"./use-quasar-c1f80122.js";import{u as k}from"./userAuthStore-92d431b7.js";import"./QResizeObserver-8da5703a.js";const T={class:"w-full flex justify-between"},P={__name:"Public",setup(S){const a=k();_(()=>{a.getUserDataFromSessionStorage()});const n=Q();function h(){const s=location.href;if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(s).then(()=>{console.log("Text copied to clipboard!"),n.notify({message:"Link copied to clipboard",color:"primary",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]})}).catch(e=>{console.error("Failed to copy text: ",e)});else{const e=document.createElement("textarea");e.value=s,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select();try{document.execCommand("copy"),console.log("Text copied to clipboard!"),n.notify({message:"Link copied to clipboard",color:"primary",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]})}catch(i){console.error("Failed to copy text: ",i)}document.body.removeChild(e)}}return(s,e)=>{const i=y("router-view");return b(),x(v,{view:"hhh Lpr lff",container:"",style:{height:"100vh"},class:"bg-white overflow-x-hidden"},{default:o(()=>[t(w,{class:"md:!bg-[#4a21fb] bg-[#fff] text-primary md:p-4 p-0"},{default:o(()=>[t(g,{class:"bg-white md:rounded-md rounded-none"},{default:o(()=>{var l,d,u;return[r("div",T,[r("div",{class:p([(l=c(a))!=null&&l.userData?"":"hidden"])},[t(m,{to:"/myprofile/"+((d=c(a).userData)==null?void 0:d.userName),outline:"","no-caps":""},{default:o(()=>[f("Back To Editor")]),_:1},8,["to"])],2),r("div",{class:p([(u=c(a))!=null&&u.userData?"hidden":""])},null,2),r("div",null,[t(m,{color:"primary","no-caps":"",onClick:h},{default:o(()=>[f("Share Link")]),_:1})])])]}),_:1})]),_:1}),t(C,null,{default:o(()=>[t(i)]),_:1})]),_:1})}}};export{P as default};
