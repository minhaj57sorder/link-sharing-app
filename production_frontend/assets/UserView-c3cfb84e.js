import{$,k as m,a5 as T,Z as J,o as G,E as M,ad as R,a as p,c as h,w as i,d as C,u as w,Q as q,a4 as _,b as u,a0 as j,a6 as P,e as I,aF as Z,p as v,aG as H}from"./index-e193b915.js";import{Q as K}from"./QPage-fca11b56.js";import{_ as W,T as X,C as b}from"./CompactQTable-3926b46c.js";import{a as k}from"./axios-55c0125c.js";import{i as d}from"./validationHelper-953dc1de.js";import{u as Y,g as N}from"./userAuthStore-a6e63dbf.js";import{u as L}from"./use-quasar-5e1ea3bd.js";import"./QSkeleton-3ee6c8ec.js";import"./QMarkupTable-733355cf.js";import"./QSelect-4c9931a7.js";import"./QItemLabel-bdb82c54.js";import"./selection-4001ba41.js";import"./rtl-36dd996b.js";import"./QList-b9927002.js";const A={class:"w-full flex justify-end pb-3"},F={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},ee=C("div",{class:"text-h6"},"Medium",-1),pe={__name:"UserView",setup(se){const e=$({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:10,keywords:null,gte:null,lte:null,gtValue:null,ltValue:null,filterColumn:null,rangeColumn:null}),r=m(null),t=L(),g=Y(),c=m(!1),y=m(null),O=m(!1),s=T(),S=J(),B=a=>{e.keywords=a.keywords,e.gt=a.gt,e.lt=a.lt,e.gtValue=a.gtValue,e.ltValue=a.ltValue,e.filterColumn=a.filterColumn,e.rangeColumn=a.rangeColumn},U=a=>{e.page=a.page,e.rowsPerPage=a.rowsPerPage,e.descending=a.descending,e.sortBy=a.sortBy||"createdAt"},x=a=>{S.push(`/admin/user/user_list/${a._id}`)},Q=a=>{y.value=a._id,c.value=!0},f=async()=>{var o;const a={method:"GET",url:"api/user/user_lists",headers:{Authorization:`Bearer ${N("token")}`},params:{pageNumber:(e==null?void 0:e.page)||1,pageSize:(e==null?void 0:e.rowsPerPage)||10,descending:e==null?void 0:e.descending,sortBy:(e==null?void 0:e.sortBy)||"createdAt",select:"fullName userName email"}};e!=null&&e.keywords&&(a.params.keywords=e.keywords),e!=null&&e.gt&&(a.params.gt=e.gt),e!=null&&e.lt&&(a.params.lt=e.lt),d(e==null?void 0:e.gtValue)&&(a.params.gtValue=e.gtValue),d(e==null?void 0:e.ltValue)&&(a.params.ltValue=e.ltValue),e!=null&&e.filterColumn&&(a.params.filterColumn=e.filterColumn),e!=null&&e.rangeColumn&&(a.params.rangeColumn=e.rangeColumn),t.loading.show();try{const l=await k.request(a);r.value=l.data,t.loading.hide()}catch(l){console.log(l),t.loading.hide(),((o=l==null?void 0:l.response)==null?void 0:o.status)==401?t.notify({message:l.response.data.message+", Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):t.notify({message:l.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]})}};G(()=>{var a,o,l,n;s.query.hasOwnProperty("pageNumber")&&(e.pageNumber=Number((a=s.query)==null?void 0:a.pageNumber)),s.query.hasOwnProperty("pageSize")&&(e.pageSize=Number((o=s.query)==null?void 0:o.pageSize)),s.query.hasOwnProperty("descending")&&(e.descending=JSON.parse((l=s.query)==null?void 0:l.descending)),s.query.hasOwnProperty("sortBy")&&(e.sortBy=String((n=s.query)==null?void 0:n.sortBy)),s.query.hasOwnProperty("keywords")&&s.query.keywords&&s.query.keywords!=="null"&&(e.keywords=s.query.keywords),s.query.hasOwnProperty("gt")&&s.query.gt&&s.query.gt!=="null"&&(e.gt=String(s.query.gt)),s.query.hasOwnProperty("lt")&&s.query.lt&&s.query.lt!=="null"&&(e.lt=String(s.query.lt)),s.query.hasOwnProperty("gtValue")&&d(s.query.gtValue)&&(e.gtValue=Number(s.query.gtValue)),s.query.hasOwnProperty("ltValue")&&d(s.query.ltValue)&&(e.ltValue=Number(s.query.ltValue)),s.query.hasOwnProperty("filterColumn")&&s.query.filterColumn&&s.query.filterColumn!=="null"&&(e.filterColumn=String(s.query.filterColumn)),s.query.hasOwnProperty("rangeColumn")&&s.query.rangeColumn&&s.query.rangeColumn!=="null"&&(e.rangeColumn=String(s.query.rangeColumn)),f()}),M(e,R(f,1e3));const D=async()=>{var o;const a={method:"delete",url:"api/user/user_lists/"+y.value,headers:{Authorization:`Bearer ${N("token")}`}};try{t.loading.show(),await k.request(a);const l=r==null?void 0:r.value.users.filter(n=>n._id!==y.value);r.value={...JSON.parse(JSON.stringify(r==null?void 0:r.value)),users:l},(r==null?void 0:r.value.users.length)<5&&(r==null?void 0:r.value.pages)!==1&&f(),t.loading.hide(),c.value=!1,t.notify({message:"Deleted successfully!",color:"primary",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]})}catch(l){c.value=!1,((o=l==null?void 0:l.response)==null?void 0:o.status)==401?t.notify({message:l.response.data.message+". Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):t.notify({message:l.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}),t.loading.hide(),console.error(l)}},E=[{name:"fullName",label:"Full name",align:"left",field:"fullName",sortable:!0},{name:"userName",label:"User name",align:"left",field:"userName",sortable:!0},{name:"email",label:"Email",align:"left",field:"email",sortable:!0},{name:"action",label:"Action",field:"action"}];return(a,o)=>(p(),h(K,{padding:""},{default:i(()=>{var l,n,V;return[C("div",A,[w(g).checkShowOnPermission("createUser")?(p(),h(q,{key:0,style:{background:"green",color:"white"},label:"New User",to:"/admin/user/user_list/create"})):_("",!0)]),C("div",F,[u(W,{columns:E,"data-list":((l=r.value)==null?void 0:l.users)||[],page:((n=r.value)==null?void 0:n.page)||1,pages:((V=r.value)==null?void 0:V.pages)||1,onUpdatePaginate:U,onOnEdit:x,onOnDelete:Q,onOnFilter:B,showEdit:w(g).checkShowOnPermission("editUser"),showDelete:w(g).checkShowOnPermission("deleteUser")},null,8,["data-list","page","pages","showEdit","showDelete"]),O.value?(p(),h(X,{key:0})):_("",!0)]),u(H,{modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=z=>c.value=z)},{default:i(()=>[u(j,{style:{width:"300px","max-width":"80vw"}},{default:i(()=>[u(P,null,{default:i(()=>[ee]),_:1}),u(P,{class:"q-pt-none"},{default:i(()=>[I(" Are you sure you want to delete this user? ")]),_:1}),u(Z,{align:"right",class:"bg-white text-teal"},{default:i(()=>[v(u(q,{flat:"",label:"Cancel"},null,512),[[b]]),v(u(q,{flat:"",label:"Delete",onClick:D,color:"red"},null,512),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]}),_:1}))}};export{pe as default};
