import{o as k,r as b,a as x,c as Q,w as t,b as e,d as s,Q as r,e as g,n,u as o,f as i}from"./index-4107f029.js";import{Q as N,a as q,b as B,c as C}from"./QLayout-2692a81f.js";import{u as L}from"./userAuthStore-faafcce9.js";import"./QResizeObserver-d5edb675.js";const S={class:"w-full flex justify-between md:hidden"},$={class:"flex gap-1 items-center"},P={class:"hide-md-screen"},V=s("span",{class:"show-md-screen"}," Links ",-1),A={class:"hide-md-screen"},T=s("span",{class:"show-md-screen"}," Profile Details ",-1),U={class:"hide-md-screen"},j=s("span",{class:"show-md-screen"}," Preview ",-1),G={__name:"Default",setup(z){const a=L();return k(()=>{a.getUserDataFromSessionStorage()}),(l,F)=>{const y=b("router-link"),D=b("router-view");return x(),Q(N,{view:"hhh Lpr lff",container:"",style:{height:"100vh"},class:"shadow-2"},{default:t(()=>[e(B,{class:"md:!bg-[#4a21fb] bg-[#fff] text-primary md:p-4 p-0"},{default:t(()=>[e(q,{class:"bg-white md:rounded-md rounded-none"},{default:t(()=>{var d,c,u,_,f,m,h,p,v,w;return[s("div",S,[s("div",$,[s("div",null,[e(r,{to:"/",flat:"",icon:"link",dense:"",class:"text-white bg-primary rounded-md"})]),e(y,{to:"/",class:"show-md-screen text-black font-bold text-h6"},{default:t(()=>[g(" Devlinks ")]),_:1})]),s("div",{class:n([(d=o(a))!=null&&d.userData?"hidden":""])},[e(r,{class:"bg-white text-primary ml-2",to:"/login",outline:"",flat:""},{default:t(()=>[g("Login")]),_:1})],2),s("div",{class:n([(c=o(a))!=null&&c.userData?"":"hidden"])},[e(r,{class:n((u=l.$route.query)!=null&&u.t&&((_=l.$route.query)==null?void 0:_.t)=="profile-details"?"":"!bg-violet-200"),to:"/myprofile/"+((f=o(a).userData)==null?void 0:f.userName),flat:"","no-caps":""},{default:t(()=>[s("span",P,[e(i,{name:"link"})]),V]),_:1},8,["class","to"]),e(r,{class:n((m=l.$route.query)!=null&&m.t&&((h=l.$route.query)==null?void 0:h.t)=="profile-details"?"!bg-violet-200":""),to:"/myprofile/"+((p=o(a).userData)==null?void 0:p.userName)+"?t=profile-details",flat:"","no-caps":""},{default:t(()=>[s("span",A,[e(i,{name:"account_circle"})]),T]),_:1},8,["class","to"])],2),s("div",{class:n([(v=o(a))!=null&&v.userData?"":"hidden"])},[e(r,{to:"/profile/"+((w=o(a).userData)==null?void 0:w.userName),outline:""},{default:t(()=>[s("span",U,[e(i,{name:"visibility"})]),j]),_:1},8,["to"])],2)])]}),_:1})]),_:1}),e(C,null,{default:t(()=>[e(D)]),_:1})]),_:1})}}};export{G as default};
