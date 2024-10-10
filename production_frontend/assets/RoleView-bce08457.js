import{$ as F,k as g,a4 as ee,Z as oe,o as se,E as te,ad as le,a as d,c as b,w as h,d as m,u as V,Q as k,a3 as q,b as p,n as U,g as f,a7 as Q,a8 as D,a0 as ae,a5 as T,e as re,aF as ne,p as G,aG as ie,a6 as M,cG as ue}from"./index-97890c42.js";import{Q as ce}from"./QMarkupTable-fd27405c.js";import{Q as de}from"./QPage-da56d4c4.js";import{_ as me,T as pe,C as J}from"./CompactQTable-2dd0c049.js";import{a as P}from"./axios-ac4caab3.js";import{i as x}from"./validationHelper-2bc20ab1.js";import{u as ge,g as O}from"./userAuthStore-c37dfcbd.js";import{u as ye}from"./use-quasar-8e1d4cd1.js";import"./QSkeleton-f3878f1b.js";import"./QSelect-3b944f24.js";import"./QItemLabel-3f07903c.js";import"./selection-e219bc35.js";import"./rtl-36dd996b.js";import"./QList-d248f901.js";const he={class:"w-full flex justify-end pb-3"},fe={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},we={class:"q-pa-md"},ve={key:0,class:"q-pa-md"},be=m("th",{class:"text-left",style:{position:"sticky","z-index":"1",left:"0px","background-color":"white","border-right":"1px solid rgba(0, 0, 0, 0.12)"}}," Role ",-1),ke=m("th",{class:"text-right",style:{position:"sticky","z-index":"1",right:"0px","background-color":"white","border-left":"1px solid rgba(0, 0, 0, 0.12)"}}," Action ",-1),qe={style:{position:"sticky","z-index":"1",left:"0px","background-color":"white","border-right":"1px solid rgba(0, 0, 0, 0.12)"}},_e={class:"q-pa-md"},Ce={class:"text-right",style:{position:"sticky","z-index":"1",right:"0px","background-color":"white","border-left":"1px solid rgba(0, 0, 0, 0.12)"}},Ve=m("div",{class:"text-h6"},"Medium",-1),Je={__name:"RoleView",setup(Pe){const e=F({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:10,keywords:null,gte:null,lte:null,gtValue:null,ltValue:null,filterColumn:null,rangeColumn:null}),w=g("roles"),E=g({}),l=g(null),S=g([]),v=g([]),N=g([]),r=ye(),C=ge(),_=g(!1),B=g(null),j=g(!1),t=ee(),$=oe(),L=s=>{e.keywords=s.keywords,e.gt=s.gt,e.lt=s.lt,e.gtValue=s.gtValue,e.ltValue=s.ltValue,e.filterColumn=s.filterColumn,e.rangeColumn=s.rangeColumn},Z=s=>{e.page=s.page,e.rowsPerPage=s.rowsPerPage,e.descending=s.descending,e.sortBy=s.sortBy||"createdAt"},H=s=>{$.push(`/admin/role/role_list/${s._id}`)},I=s=>{B.value=s._id,_.value=!0},R=async()=>{var n;const s={method:"GET",url:"api/roles",headers:{Authorization:`Bearer ${O("token")}`},params:{pageNumber:(e==null?void 0:e.page)||1,pageSize:(e==null?void 0:e.rowsPerPage)||10,descending:e==null?void 0:e.descending,sortBy:(e==null?void 0:e.sortBy)||"createdAt",select:" "}};e!=null&&e.keywords&&(s.params.keywords=e.keywords),e!=null&&e.gt&&(s.params.gt=e.gt),e!=null&&e.lt&&(s.params.lt=e.lt),x(e==null?void 0:e.gtValue)&&(s.params.gtValue=e.gtValue),x(e==null?void 0:e.ltValue)&&(s.params.ltValue=e.ltValue),e!=null&&e.filterColumn&&(s.params.filterColumn=e.filterColumn),e!=null&&e.rangeColumn&&(s.params.rangeColumn=e.rangeColumn),r.loading.show();try{const o=await P.request(s);l.value=o.data,r.loading.hide()}catch(o){console.log(o),r.loading.hide(),((n=o==null?void 0:o.response)==null?void 0:n.status)==401?r.notify({message:o.response.data.message+", Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):r.notify({message:o.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]})}finally{K()}};se(()=>{var s,n,o,u;t.query.hasOwnProperty("pageNumber")&&(e.pageNumber=Number((s=t.query)==null?void 0:s.pageNumber)),t.query.hasOwnProperty("pageSize")&&(e.pageSize=Number((n=t.query)==null?void 0:n.pageSize)),t.query.hasOwnProperty("descending")&&(e.descending=JSON.parse((o=t.query)==null?void 0:o.descending)),t.query.hasOwnProperty("sortBy")&&(e.sortBy=String((u=t.query)==null?void 0:u.sortBy)),t.query.hasOwnProperty("keywords")&&t.query.keywords&&t.query.keywords!=="null"&&(e.keywords=t.query.keywords),t.query.hasOwnProperty("gt")&&t.query.gt&&t.query.gt!=="null"&&(e.gt=String(t.query.gt)),t.query.hasOwnProperty("lt")&&t.query.lt&&t.query.lt!=="null"&&(e.lt=String(t.query.lt)),t.query.hasOwnProperty("gtValue")&&x(t.query.gtValue)&&(e.gtValue=Number(t.query.gtValue)),t.query.hasOwnProperty("ltValue")&&x(t.query.ltValue)&&(e.ltValue=Number(t.query.ltValue)),t.query.hasOwnProperty("filterColumn")&&t.query.filterColumn&&t.query.filterColumn!=="null"&&(e.filterColumn=String(t.query.filterColumn)),t.query.hasOwnProperty("rangeColumn")&&t.query.rangeColumn&&t.query.rangeColumn!=="null"&&(e.rangeColumn=String(t.query.rangeColumn)),R()});const K=async()=>{var n;const s={method:"GET",url:"api/permissions/",headers:{Authorization:`Bearer ${O("token")}`}};try{r.loading.show();const o=await P.request(s);r.loading.hide(),S.value=o.data.permissions.map(a=>(a.label=a.name,a.value=a._id,a));const u=[];for(let a=0;a<l.value.roles.length;a++){console.log(l.value.roles[a].permissions);for(let c=0;c<o.data.permissions.length;c++){const i=!!l.value.roles[a].permissions.find(y=>y._id===o.data.permissions[c]._id);u[a]?u[a].push(i):u.push([i])}}console.log("Permission Role Map: ",u),v.value=u,N.value=o.data.permissions.map(a=>a._id),console.log(u,N.value)}catch(o){((n=o==null?void 0:o.response)==null?void 0:n.status)==401?r.notify({message:o.response.data.message+". Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):r.notify({message:o.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}),r.loading.hide(),console.error(o)}finally{}},W=async(s,n)=>{var c;E.value={};const o={},u=[];for(let i=0;i<v.value[s].length;i++)v.value[s][i]&&u.push(N.value[i]);if(console.log(u),o.permissions=JSON.stringify(u),Object.keys(E.value).length!==0)return;if(console.log(o),Object.keys(o).length<=0){r.notify({message:"Empty Form Submission Not Allowed",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]});return}const a={headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${O("token")}`},data:o};a.method="put",a.url="api/roles/"+n;try{const i=await P.request(a);$.push("/admin/role/role_list"),r.notify({message:"Updated Successfully!",color:"primary",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]})}catch(i){((c=i==null?void 0:i.response)==null?void 0:c.status)==401?r.notify({message:i.response.data.message+". Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):r.notify({message:i.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}),console.error(i)}};te(e,le(R,1e3));const X=async()=>{var n;const s={method:"delete",url:"api/roles/"+B.value,headers:{Authorization:`Bearer ${O("token")}`}};try{r.loading.show(),await P.request(s);const o=l==null?void 0:l.value.units.filter(u=>u._id!==B.value);l.value={...JSON.parse(JSON.stringify(l==null?void 0:l.value)),units:o},(l==null?void 0:l.value.units.length)<5&&(l==null?void 0:l.value.pages)!==1&&R(),r.loading.hide(),_.value=!1,r.notify({message:"Deleted successfully!",color:"primary",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]})}catch(o){_.value=!1,((n=o==null?void 0:o.response)==null?void 0:n.status)==401?r.notify({message:o.response.data.message+". Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):r.notify({message:o.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}),r.loading.hide(),console.error(o)}},Y=[{name:"name",label:"Name",align:"left",field:"name",sortable:!0},{name:"slug",label:"Slug",align:"left",field:"slug",sortable:!0},{name:"description",label:"Description",align:"left",field:"description",sortable:!0},{name:"action",label:"Action",field:"action"}];return(s,n)=>(d(),b(de,{padding:""},{default:h(()=>{var o,u,a;return[m("div",he,[V(C).checkShowOnPermission("createRole")?(d(),b(k,{key:0,style:{background:"green",color:"white"},label:"New Role",to:"/admin/role/role_list/create","no-caps":""})):q("",!0)]),m("div",fe,[m("div",we,[p(k,{class:U([w.value=="roles"?"bg-primary":"bg-secondary","text-white"]),label:"Roles",onClick:n[0]||(n[0]=c=>w.value="roles"),"no-caps":""},null,8,["class"]),p(k,{class:U([w.value=="rolespermission"?"bg-primary":"bg-secondary","text-white q-ml-sm"]),label:"Grid View",onClick:n[1]||(n[1]=c=>w.value="rolespermission"),"no-caps":""},null,8,["class"])]),w.value==="rolespermission"?(d(),f("div",ve,[p(ce,{flat:"",bordered:"",separator:"cell"},{default:h(()=>{var c;return[m("thead",null,[m("tr",null,[be,(d(!0),f(Q,null,D(S.value,(i,y)=>(d(),f("th",{key:y,class:"text-left"},M(i.name),1))),128)),ke])]),m("tbody",null,[(d(!0),f(Q,null,D(((c=l.value)==null?void 0:c.roles)||[],(i,y)=>(d(),f("tr",{key:"roles"+y,class:"text-left"},[m("td",qe,M(i.name),1),(d(!0),f(Q,null,D(S.value,(xe,z)=>(d(),f("td",{key:"permission"+z,class:"text-left"},[m("div",_e,[v.value.length>0?(d(),b(ue,{key:0,modelValue:v.value[y][z],"onUpdate:modelValue":A=>v.value[y][z]=A},null,8,["modelValue","onUpdate:modelValue"])):q("",!0)])]))),128)),m("td",Ce,[V(C).checkShowOnPermission("editRole")?(d(),b(k,{key:0,label:"Update",onClick:()=>W(y,i._id),size:"sm",color:"primary"},null,8,["onClick"])):q("",!0)])]))),128))])]}),_:1})])):q("",!0),w.value==="roles"?(d(),b(me,{key:1,columns:Y,"data-list":((o=l.value)==null?void 0:o.roles)||[],page:((u=l.value)==null?void 0:u.page)||1,pages:((a=l.value)==null?void 0:a.pages)||1,onUpdatePaginate:Z,onOnEdit:H,onOnDelete:I,onOnFilter:L,showEdit:V(C).checkShowOnPermission("editRole"),showDelete:V(C).checkShowOnPermission("deleteRole")},null,8,["data-list","page","pages","showEdit","showDelete"])):q("",!0),j.value?(d(),b(pe,{key:2})):q("",!0)]),p(ie,{modelValue:_.value,"onUpdate:modelValue":n[2]||(n[2]=c=>_.value=c)},{default:h(()=>[p(ae,{style:{width:"300px","max-width":"80vw"}},{default:h(()=>[p(T,null,{default:h(()=>[Ve]),_:1}),p(T,{class:"q-pt-none"},{default:h(()=>[re(" Are you sure you want to delete this unit? ")]),_:1}),p(ne,{align:"right",class:"bg-white text-teal"},{default:h(()=>[G(p(k,{flat:"",label:"Cancel"},null,512),[[J]]),G(p(k,{flat:"",label:"Delete",onClick:X,color:"red"},null,512),[[J]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]}),_:1}))}};export{Je as default};
