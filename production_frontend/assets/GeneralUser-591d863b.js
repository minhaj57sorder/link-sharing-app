import{o as Q,r as h,a as v,c as y,w as t,b as e,d as s,Q as o,e as x,n as w,u as r,f as l,a4 as D}from"./index-f707a690.js";import{Q as N,a as C,b as q,c as A}from"./QLayout-add3076b.js";import{u as B}from"./userAuthStore-e9d55b88.js";import"./QResizeObserver-02034282.js";const S={class:"w-full flex justify-between md:hidden"},U={class:"flex gap-1 items-center"},V={class:"hide-md-screen"},$=s("span",{class:"show-md-screen"}," Links ",-1),L={class:"hide-md-screen"},P=s("span",{class:"show-md-screen"}," Profile Details ",-1),G={class:"hide-md-screen"},H=s("span",{class:"show-md-screen"}," Admin ",-1),T={class:"hide-md-screen"},j=s("span",{class:"show-md-screen"}," Preview ",-1),K={__name:"GeneralUser",setup(z){const a=B();return Q(()=>{a.getUserDataFromSessionStorage()}),(n,F)=>{const b=h("router-link"),g=h("router-view");return v(),y(N,{view:"hHh Lpr lff",container:"",style:{height:"100vh"},class:"bg-grey-3"},{default:t(()=>[e(q,{class:"bg-white text-primary"},{default:t(()=>[e(C,null,{default:t(()=>{var i,c,d,u,_,m,p,f;return[s("div",S,[s("div",U,[s("div",null,[e(o,{to:"/",flat:"",icon:"link",dense:"",class:"text-white bg-primary rounded-md"})]),e(b,{to:"/",class:"show-md-screen text-black font-bold text-h6"},{default:t(()=>[x(" Devlinks ")]),_:1})]),s("div",null,[e(o,{class:w((i=n.$route.query)!=null&&i.t&&((c=n.$route.query)==null?void 0:c.t)=="profile-details"?"":"!bg-violet-200"),to:"/myprofile/"+((d=r(a).userData)==null?void 0:d.userName),flat:"","no-caps":""},{default:t(()=>[s("span",V,[e(l,{name:"link"})]),$]),_:1},8,["class","to"]),e(o,{class:w((u=n.$route.query)!=null&&u.t&&((_=n.$route.query)==null?void 0:_.t)=="profile-details"?"!bg-violet-200":""),to:"/myprofile/"+((m=r(a).userData)==null?void 0:m.userName)+"?t=profile-details",flat:"","no-caps":""},{default:t(()=>[s("span",L,[e(l,{name:"account_circle"})]),P]),_:1},8,["class","to"])]),s("div",null,[(p=r(a).userData)!=null&&p.roles.some(k=>k.slug=="superAdmin")?(v(),y(o,{key:0,class:"mr-2",to:"/admin",outline:""},{default:t(()=>[s("span",G,[e(l,{name:"visibility"})]),H]),_:1})):D("",!0),e(o,{to:"/profile/"+((f=r(a).userData)==null?void 0:f.userName),outline:""},{default:t(()=>[s("span",T,[e(l,{name:"visibility"})]),j]),_:1},8,["to"])])])]}),_:1})]),_:1}),e(A,null,{default:t(()=>[e(g)]),_:1})]),_:1})}}};export{K as default};
