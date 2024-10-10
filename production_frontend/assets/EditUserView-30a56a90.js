import{a5 as T,Z as z,k as N,$ as S,o as D,a as c,c as O,w as F,d as i,b as m,a2 as y,g as f,a3 as h,a4 as g,u as G,f as j,Q as I}from"./index-4107f029.js";import{Q as J}from"./QFile-ee6707b4.js";import{Q as $}from"./QSelect-bcefac27.js";import{Q as M}from"./QPage-a53363da.js";import{a as w,b as Y}from"./axios-9a08b95f.js";import{u as Z,g as _}from"./userAuthStore-faafcce9.js";import{u as H}from"./use-quasar-04dc5867.js";import{v as K,c as W,e as b}from"./validationHelper-953dc1de.js";import"./QItemLabel-4d3786c0.js";import"./selection-57802642.js";import"./rtl-36dd996b.js";const X=i("div",{class:"pb-6"},[i("h6",{class:"text-h6"},"Create/Edit User")],-1),ee={class:"mb-6"},se={class:"mb-6"},oe={key:0,class:"text-red-8 text-xs q-pl-sm"},ae={class:"mb-6"},le={key:0,class:"text-red-8 text-xs q-pl-sm"},te={class:"mb-6"},ie={key:0,class:"text-red-8 text-xs q-pl-sm"},re={class:"mb-6"},ne=i("div",{class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Previous File ",-1),de=["src"],me=i("div",{class:"py-6"},null,-1),ue={class:"mb-6"},pe={key:0,class:"text-red-8 text-xs q-pl-sm"},ce={class:"mb-6"},fe={key:0,class:"text-red-8 text-xs q-pl-sm"},Pe={__name:"EditUserView",setup(he){const t=H();Z();const v=T(),A=z(),V=N([]),x=N([]),r=N({}),s=S({fullName:"",userName:"",email:"",password:"",profilePicture:null,permissions:[],roles:[]}),u=S({fullName:"",userName:"",email:"",password:"",profilePicture:"",permissions:[],roles:[]}),C=async()=>{var o;if(v.params.id=="create"){U(),k();return}const d={method:"GET",url:"api/user/user_lists/"+v.params.id,headers:{Authorization:`Bearer ${_("token")}`}};try{t.loading.show();const e=await w.request(d);t.loading.hide(),s.fullName=e.data.fullName,u.fullName=e.data.fullName,s.userName=e.data.userName,u.userName=e.data.userName,s.email=e.data.email,u.email=e.data.email,s.password=e.data.password,u.password=e.data.password,u.profilePicture=e.data.profilePicture,s.roles=e.data.roles,u.roles=e.data.roles,s.permissions=e.data.permissions,u.permissions=e.data.permissions}catch(e){((o=e==null?void 0:e.response)==null?void 0:o.status)==401?t.notify({message:e.response.data.message+". Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):t.notify({message:e.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}),t.loading.hide(),console.error(e)}finally{U(),k()}};D(()=>{C()});const U=async()=>{var o;const d={method:"GET",url:"api/permissions/",headers:{Authorization:`Bearer ${_("token")}`}};try{t.loading.show();const e=await w.request(d);t.loading.hide(),V.value=e.data.permissions.map(l=>(l.label=l.name,l.value=l._id,l)),console.log("Form data permission: ",s.permissions),s.permissions=s.permissions.map(l=>{const a=e.data.permissions.find(p=>p._id==l);return console.log("ob ",a),a.label=a.name,a.value=a._id,a})}catch(e){((o=e==null?void 0:e.response)==null?void 0:o.status)==401?t.notify({message:e.response.data.message+". Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):t.notify({message:e.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}),t.loading.hide(),console.error(e)}finally{}},k=async()=>{var o;const d={method:"GET",url:"api/roles/",headers:{Authorization:`Bearer ${_("token")}`}};try{t.loading.show();const e=await w.request(d);t.loading.hide(),x.value=e.data.roles.map(l=>(l.label=l.name,l.value=l._id,l)),console.log("Form data roles: ",s.roles),s.roles=s.roles.map(l=>{const a=e.data.roles.find(p=>p._id==l);return console.log("ob ",a),a.label=a.name,a.value=a._id,a})}catch(e){((o=e==null?void 0:e.response)==null?void 0:o.status)==401?t.notify({message:e.response.data.message+". Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):t.notify({message:e.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}),t.loading.hide(),console.error(e)}finally{}},R=async d=>{var l;d.preventDefault(),r.value={};const o={};if(s.userName&&(o.userName=s.userName,K(s.userName)||(r.value.userName="Username Not Valid. Your username should be like this "+W(s.userName))),b(s.userName)||(r.value.userName="Required feild"),s.fullName&&(o.fullName=s.fullName),s.email&&(o.email=s.email),b(s.email)||(r.value.email="Required feild"),s.password&&(o.password=s.password),b(s.password)||(r.value.password="Required feild"),s.profilePicture&&s.profilePicture.name&&s.profilePicture.lastModified&&(o.profilePicture=s.profilePicture),o.roles=JSON.stringify(s.roles.map(a=>a._id)),o.permissions=JSON.stringify(s.permissions.map(a=>a._id)),Object.keys(r.value).length!==0)return;if(Object.keys(o).length<=0){t.notify({message:"Empty Form Submission Not Allowed",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]});return}const e={headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${_("token")}`},data:o};v.params.id=="create"?(e.method="post",e.url="api/user/user_lists"):(e.method="put",e.url="api/user/user_lists/"+v.params.id);try{const a=await w.request(e);A.push("/admin/user/user_list"),t.notify({message:"Updated Successfully!",color:"primary",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]})}catch(a){((l=a==null?void 0:a.response)==null?void 0:l.status)==401?t.notify({message:a.response.data.message+". Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):t.notify({message:a.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}),console.error(a)}};return(d,o)=>(c(),O(M,{padding:""},{default:F(()=>{var e,l,a,p,P,q,Q,B,E,L;return[X,i("div",null,[i("div",ee,[m(y,{label:"Full name ",type:"text",placeholder:"Full name",modelValue:s.fullName,"onUpdate:modelValue":o[0]||(o[0]=n=>s.fullName=n),outlined:"",dense:""},null,8,["modelValue"])]),i("div",se,[m(y,{label:"User name ",type:"text",placeholder:"User name",modelValue:s.userName,"onUpdate:modelValue":o[1]||(o[1]=n=>s.userName=n),outlined:"",dense:""},null,8,["modelValue"]),(e=r.value)!=null&&e.userName?(c(),f("div",oe,[i("span",null,h((l=r.value)==null?void 0:l.userName),1)])):g("",!0)]),i("div",ae,[m(y,{label:"Email *",type:"email",placeholder:"name@example.com",modelValue:s.email,"onUpdate:modelValue":o[2]||(o[2]=n=>s.email=n),outlined:"",dense:""},null,8,["modelValue"]),(a=r.value)!=null&&a.email?(c(),f("div",le,[i("span",null,h((p=r.value)==null?void 0:p.email),1)])):g("",!0)]),i("div",te,[m(y,{label:"Password *",type:"text",placeholder:"Password",modelValue:s.password,"onUpdate:modelValue":o[3]||(o[3]=n=>s.password=n),outlined:"",dense:""},null,8,["modelValue"]),(P=r.value)!=null&&P.password?(c(),f("div",ie,[i("span",null,h((q=r.value)==null?void 0:q.password),1)])):g("",!0)]),i("div",re,[ne,i("img",{class:"w-64",src:G(Y)+"/"+u.profilePicture,alt:""},null,8,de),me,m(J,{outlined:"",dense:"",modelValue:s.profilePicture,"onUpdate:modelValue":o[4]||(o[4]=n=>s.profilePicture=n),label:"Upload Profile picture file "},{prepend:F(()=>[m(j,{name:"attach_file"})]),_:1},8,["modelValue"])]),i("div",ue,[m($,{label:"Select an option for Permission *",placeholder:"Value",modelValue:s.permissions,"onUpdate:modelValue":o[5]||(o[5]=n=>s.permissions=n),options:[...V.value],outlined:"",dense:"",multiple:"","use-chips":""},null,8,["modelValue","options"]),(Q=r.value)!=null&&Q.permissions?(c(),f("div",pe,[i("span",null,h((B=r.value)==null?void 0:B.permissions),1)])):g("",!0)]),i("div",ce,[m($,{label:"Select an option for Permission *",placeholder:"Value",modelValue:s.roles,"onUpdate:modelValue":o[6]||(o[6]=n=>s.roles=n),options:[...x.value],outlined:"",dense:"",multiple:"","use-chips":""},null,8,["modelValue","options"]),(E=r.value)!=null&&E.roles?(c(),f("div",fe,[i("span",null,h((L=r.value)==null?void 0:L.roles),1)])):g("",!0)]),m(I,{label:d.$route.params.id==="create"?"Create User":"Update User",color:"green",onClick:R},null,8,["label"])])]}),_:1}))}};export{Pe as default};
