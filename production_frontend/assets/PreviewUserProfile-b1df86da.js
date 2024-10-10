import{_ as $,a2 as B,X as I,j as p,Y as g,o as w,a as d,c as z,w as b,d as s,f,a4 as Q,a5 as _,a7 as S,a6 as j,b as h,Q as q,u as k,aa as A,ab as D}from"./index-bc379ee9.js";import{Q as E}from"./QPage-33f4308b.js";import{a as v,b as G}from"./axios-ac4caab3.js";import{u as C,g as y}from"./userAuthStore-250486a2.js";import{u as F}from"./use-quasar-34f4ed41.js";const O=u=>(A("data-v-e7f45607"),u=u(),D(),u),R={class:"p-1"},V={class:"flex justify-center -m-1 relative"},Y=O(()=>s("div",{class:"md:opacity-100 opacity-0 absolute top-0 left-0 bg-[#4a21fb] w-full h-[150px] rounded-bl-3xl rounded-br-3xl"},null,-1)),M={class:"relative z-1 w-[250px] p-1 md:pt-16 pt-10"},X={class:"bg-white !rounded-lg md:shadow-lg shadow-none"},H={class:"p-4"},J={class:""},K={class:"flex justify-center mb-2"},W={class:"border-4 border-violet-600 rounded-full"},Z=["src"],ee=["src"],se={class:"text-center mb-4"},ae={class:"text-h6 p-0 m-0 font-bold"},oe={class:"p-0 m-0 text-xs"},te={class:""},ie={class:"-m-1 flex flex-col"},re={class:"w-full flex items-center justify-between"},le={__name:"PreviewUserProfile",setup(u){const o=F();C();const m=B();I(),p([]);const N=p(null);p([]),p({});const a=g({id:null,firstName:"",lastName:"",userName:"",email:"",password:"",profilePicture:null,permissions:[],roles:[],links:[]}),t=g({firstName:"",lastName:"",userName:"",email:"",password:"",profilePicture:"",permissions:[],roles:[]}),x=[{label:"Youtube",value:"youtube",domain:/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/},{label:"Github",value:"github",domain:/^(https?:\/\/)?(www\.)?github\.com\/.+$/},{label:"Linkedin",value:"linkedin",domain:/^(https?:\/\/)?(www\.)?linkedin\.com\/.+$/},{label:"Facebook",value:"facebook",domain:/^(https?:\/\/)?(www\.)?facebook\.com\/.+$/},{label:"Instagram",value:"instagram",domain:/^(https?:\/\/)?(www\.)?instagram\.com\/.+$/}];function P(i){return{youtube:"mdi-youtube",github:"mdi-github",linkedin:"mdi-linkedin",facebook:"mdi-facebook",instagram:"mdi-instagram"}[i]||"mdi-web"}function L(i){return{youtube:"red-8",github:"black",linkedin:"blue-9",facebook:"blue-7",instagram:"orange-5"}[i]||"primary"}const T=async()=>{var r;if(m.params.id=="create")return;const i={method:"GET",url:"api/user/user_lists/userprofile/"+m.params.userName,headers:{Authorization:`Bearer ${y("token")}`}};try{o.loading.show();const e=await v.request(i);o.loading.hide(),a.id=e.data._id,a.firstName=e.data.firstName,t.firstName=e.data.firstName,a.lastName=e.data.lastName,t.lastName=e.data.lastName,a.userName=e.data.userName,t.userName=e.data.userName,a.email=e.data.email,t.email=e.data.email,a.password=e.data.password,t.password=e.data.password,t.profilePicture=e.data.profilePicture,a.roles=e.data.roles,t.roles=e.data.roles,a.permissions=e.data.permissions,t.permissions=e.data.permissions}catch(e){((r=e==null?void 0:e.response)==null?void 0:r.status)==401?o.notify({message:e.response.data.message+". Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):o.notify({message:e.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}),o.loading.hide(),console.error(e)}finally{}};w(()=>{T()});const U=async()=>{var r;if(m.params.id=="create")return;const i={method:"GET",url:"api/user_links/user_link_lists/userlinks/"+m.params.userName,headers:{Authorization:`Bearer ${y("token")}`}};try{o.loading.show();const e=await v.request(i);o.loading.hide(),a.links=e.data.links.map(l=>{const n=x.find(c=>c.value==l.linkType);return n?{...l,linkType:n}:l})}catch(e){((r=e==null?void 0:e.response)==null?void 0:r.status)==401?o.notify({message:e.response.data.message+". Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):o.notify({message:e.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}),o.loading.hide(),console.error(e)}};return w(()=>{U()}),(i,r)=>(d(),z(E,{class:""},{default:b(()=>[s("div",R,[s("div",V,[Y,s("div",M,[s("div",X,[s("div",null,[s("div",H,[s("div",J,[s("div",K,[s("div",W,[a.profilePicture?(d(),f("img",{key:0,class:"w-[5rem] rounded-full overflow-hidden",src:N.value,alt:""},null,8,Z)):(d(),f("img",{key:1,class:"w-[5rem] rounded-full overflow-hidden",src:Q(G)+"/"+t.profilePicture,alt:""},null,8,ee))])]),s("div",se,[s("h6",ae,_(a.firstName)+" "+_(a.lastName),1),s("p",oe,_(a.email),1)]),s("div",te,[s("div",ie,[(d(!0),f(j,null,S(a.links,e=>{var l;return d(),f("div",{class:"p-1",key:e._id},[h(q,{href:e.link,target:"_blank",class:"full-width text-left",size:"md",color:L((l=e.linkType)==null?void 0:l.value),unelevated:"","no-caps":""},{default:b(()=>{var n,c;return[s("div",re,[h(k,{name:P((n=e.linkType)==null?void 0:n.value),size:"xs"},null,8,["name"]),s("span",null,_((c=e.linkType)==null?void 0:c.label),1),h(k,{name:"trending_flat",size:"xs"})])]}),_:2},1032,["href","color"])])}),128))])])])])])])])])])]),_:1}))}},pe=$(le,[["__scopeId","data-v-e7f45607"]]);export{pe as default};
