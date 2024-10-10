import{a5 as L,Z as N,k as Q,$ as S,o as $,a as p,c as A,w as D,d as l,b as c,a9 as v,g as f,a3 as h,a4 as y,Q as P}from"./index-641bf2f0.js";import{Q as T}from"./QSelect-7eadf8d9.js";import{Q as z}from"./QPage-6ba95ee2.js";import{a as _}from"./axios-9a08b95f.js";import{u as O,g as V}from"./userAuthStore-17333cf0.js";import{u as j}from"./use-quasar-4932ff0b.js";import{e as b}from"./validationHelper-953dc1de.js";import"./QItemLabel-9aa519c5.js";import"./selection-21f49378.js";import"./rtl-36dd996b.js";const F=l("div",{class:"pb-6"},[l("h6",{class:"text-h6"},"Create/Edit User Role")],-1),G={class:"mb-6"},I={key:0,class:"text-red-8 text-xs q-pl-sm"},J={class:"mb-6"},M={key:0,class:"text-red-8 text-xs q-pl-sm"},Z={class:"mb-6"},H={key:0,class:"text-red-8 text-xs q-pl-sm"},K={class:"mb-6"},W={key:0,class:"text-red-8 text-xs q-pl-sm"},de={__name:"EditRoleView",setup(X){const a=j();O();const m=L(),U=N(),i=Q({}),w=Q([]),s=S({name:"",slug:"",permissions:[],description:""}),u=S({name:"",slug:"",permissions:[],description:""}),E=async()=>{var o;if(m.params.id=="create"){k();return}const r={method:"GET",url:"api/roles/"+m.params.id,headers:{Authorization:`Bearer ${V("token")}`}};try{a.loading.show();const e=await _.request(r);a.loading.hide(),s.name=e.data.name,u.name=e.data.name,s.slug=e.data.slug,u.slug=e.data.slug,s.permissions=e.data.permissions,u.permissions=e.data.permissions,s.description=e.data.description,u.description=e.data.description}catch(e){((o=e==null?void 0:e.response)==null?void 0:o.status)==401?a.notify({message:e.response.data.message+". Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):a.notify({message:e.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}),a.loading.hide(),console.error(e)}finally{k()}};$(()=>{E()});const k=async()=>{var o;const r={method:"GET",url:"api/permissions/",headers:{Authorization:`Bearer ${V("token")}`}};try{a.loading.show();const e=await _.request(r);a.loading.hide(),w.value=e.data.permissions.map(n=>(n.label=n.name,n.value=n._id,n)),console.log("Form data permission: ",s.permissions),s.permissions=s.permissions.map(n=>{const t=e.data.permissions.find(g=>g._id==n);return console.log("ob ",t),t.label=t.name,t.value=t._id,t})}catch(e){((o=e==null?void 0:e.response)==null?void 0:o.status)==401?a.notify({message:e.response.data.message+". Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):a.notify({message:e.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}),a.loading.hide(),console.error(e)}finally{}},C=async r=>{var n;r.preventDefault(),i.value={};const o={};if(s.name&&(o.name=s.name),b(s.name)||(i.value.name="Required feild"),s.slug&&(o.slug=s.slug),b(s.slug)||(i.value.slug="Required feild"),s.permissions&&(o.permissions=JSON.stringify(s.permissions.map(t=>t._id))),s.description&&(o.description=s.description),b(s.description)||(i.value.description="Required feild"),Object.keys(i.value).length!==0)return;if(console.log(o),Object.keys(o).length<=0){a.notify({message:"Empty Form Submission Not Allowed",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]});return}const e={headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${V("token")}`},data:o};m.params.id=="create"?(e.method="post",e.url="api/roles"):(e.method="put",e.url="api/roles/"+m.params.id);try{const t=await _.request(e);U.push("/admin/role/role_list"),a.notify({message:"Updated Successfully!",color:"primary",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]})}catch(t){((n=t==null?void 0:t.response)==null?void 0:n.status)==401?a.notify({message:t.response.data.message+". Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):a.notify({message:t.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}),console.error(t)}};return(r,o)=>(p(),A(z,{padding:""},{default:D(()=>{var e,n,t,g,x,q,R,B;return[F,l("div",null,[l("div",G,[c(v,{label:"Name role",placeholder:"Value",modelValue:s.name,"onUpdate:modelValue":o[0]||(o[0]=d=>s.name=d),outlined:"",dense:""},null,8,["modelValue"]),(e=i.value)!=null&&e.name?(p(),f("div",I,[l("span",null,h((n=i.value)==null?void 0:n.name),1)])):y("",!0)]),l("div",J,[c(T,{label:"Select an option for Permission *",placeholder:"Value",modelValue:s.permissions,"onUpdate:modelValue":o[1]||(o[1]=d=>s.permissions=d),options:[...w.value],outlined:"",dense:"",multiple:"","use-chips":""},null,8,["modelValue","options"]),(t=i.value)!=null&&t.permissions?(p(),f("div",M,[l("span",null,h((g=i.value)==null?void 0:g.permissions),1)])):y("",!0)]),l("div",Z,[c(v,{label:"Slug *",placeholder:"Value",modelValue:s.slug,"onUpdate:modelValue":o[2]||(o[2]=d=>s.slug=d),outlined:"",dense:""},null,8,["modelValue"]),(x=i.value)!=null&&x.slug?(p(),f("div",H,[l("span",null,h((q=i.value)==null?void 0:q.slug),1)])):y("",!0)]),l("div",K,[c(v,{label:"Description role",placeholder:"Value",modelValue:s.description,"onUpdate:modelValue":o[3]||(o[3]=d=>s.description=d),outlined:"",dense:""},null,8,["modelValue"]),(R=i.value)!=null&&R.description?(p(),f("div",W,[l("span",null,h((B=i.value)==null?void 0:B.description),1)])):y("",!0)]),c(P,{label:r.$route.params.id==="create"?"Create Role":"Update Role",color:"green",onClick:C},null,8,["label"])])]}),_:1}))}};export{de as default};
