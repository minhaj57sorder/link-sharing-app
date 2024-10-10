import{$,k as m,a5 as L,Z as J,o as j,E as M,ac as R,a as w,c as k,w as i,d as C,u as q,Q as _,a4 as V,b as n,a0 as G,a6 as P,e as I,aE as Z,p as v,aF as H}from"./index-f707a690.js";import{Q as K}from"./QPage-2c9f39c1.js";import{_ as W,T as X,C as b}from"./CompactQTable-39bb82ad.js";import{a as O}from"./axios-9a08b95f.js";import{i as g}from"./validationHelper-953dc1de.js";import{u as Y,g as S}from"./userAuthStore-e9d55b88.js";import{u as A}from"./use-quasar-23fac720.js";import"./QSkeleton-c74887fe.js";import"./QMarkupTable-a8bf2cae.js";import"./QSelect-7e4eca0f.js";import"./QItemLabel-2d8238a0.js";import"./selection-63b460cf.js";import"./rtl-36dd996b.js";import"./QList-e3c32291.js";const F={class:"w-full flex justify-end pb-3"},ee={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},se=C("div",{class:"text-h6"},"Medium",-1),he={__name:"UserLinksView",setup(ae){const e=$({sortBy:"createdAt",descending:!0,page:1,rowsPerPage:10,keywords:null,gte:null,lte:null,gtValue:null,ltValue:null,filterColumn:null,rangeColumn:null}),l=m(null),o=A(),y=Y(),c=m(!1),p=m(null),N=m(!1),s=L(),B=J(),x=a=>{e.keywords=a.keywords,e.gt=a.gt,e.lt=a.lt,e.gtValue=a.gtValue,e.ltValue=a.ltValue,e.filterColumn=a.filterColumn,e.rangeColumn=a.rangeColumn},U=a=>{e.page=a.page,e.rowsPerPage=a.rowsPerPage,e.descending=a.descending,e.sortBy=a.sortBy||"createdAt"},Q=a=>{B.push(`/admin/user_links/user_link_list/${a._id}`)},D=a=>{p.value=a._id,c.value=!0},f=async()=>{var r;const a={method:"GET",url:"api/user_links/user_link_lists",headers:{Authorization:`Bearer ${S("token")}`},params:{pageNumber:(e==null?void 0:e.page)||1,pageSize:(e==null?void 0:e.rowsPerPage)||10,descending:e==null?void 0:e.descending,sortBy:(e==null?void 0:e.sortBy)||"createdAt",select:" links"}};e!=null&&e.keywords&&(a.params.keywords=e.keywords),e!=null&&e.gt&&(a.params.gt=e.gt),e!=null&&e.lt&&(a.params.lt=e.lt),g(e==null?void 0:e.gtValue)&&(a.params.gtValue=e.gtValue),g(e==null?void 0:e.ltValue)&&(a.params.ltValue=e.ltValue),e!=null&&e.filterColumn&&(a.params.filterColumn=e.filterColumn),e!=null&&e.rangeColumn&&(a.params.rangeColumn=e.rangeColumn),o.loading.show();try{const t=await O.request(a),u={page:t.data.page,page:t.data.pages,userLinks:t.data.userLinks.map(d=>{const h=d.links.map(T=>T.linkType);return{...d,links:h.join(", ")}})};l.value=u,o.loading.hide()}catch(t){console.log(t),o.loading.hide(),((r=t==null?void 0:t.response)==null?void 0:r.status)==401?o.notify({message:t.response.data.message+", Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):o.notify({message:t.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]})}};j(()=>{var a,r,t,u;s.query.hasOwnProperty("pageNumber")&&(e.pageNumber=Number((a=s.query)==null?void 0:a.pageNumber)),s.query.hasOwnProperty("pageSize")&&(e.pageSize=Number((r=s.query)==null?void 0:r.pageSize)),s.query.hasOwnProperty("descending")&&(e.descending=JSON.parse((t=s.query)==null?void 0:t.descending)),s.query.hasOwnProperty("sortBy")&&(e.sortBy=String((u=s.query)==null?void 0:u.sortBy)),s.query.hasOwnProperty("keywords")&&s.query.keywords&&s.query.keywords!=="null"&&(e.keywords=s.query.keywords),s.query.hasOwnProperty("gt")&&s.query.gt&&s.query.gt!=="null"&&(e.gt=String(s.query.gt)),s.query.hasOwnProperty("lt")&&s.query.lt&&s.query.lt!=="null"&&(e.lt=String(s.query.lt)),s.query.hasOwnProperty("gtValue")&&g(s.query.gtValue)&&(e.gtValue=Number(s.query.gtValue)),s.query.hasOwnProperty("ltValue")&&g(s.query.ltValue)&&(e.ltValue=Number(s.query.ltValue)),s.query.hasOwnProperty("filterColumn")&&s.query.filterColumn&&s.query.filterColumn!=="null"&&(e.filterColumn=String(s.query.filterColumn)),s.query.hasOwnProperty("rangeColumn")&&s.query.rangeColumn&&s.query.rangeColumn!=="null"&&(e.rangeColumn=String(s.query.rangeColumn)),f()}),M(e,R(f,1e3));const E=async()=>{var r;const a={method:"delete",url:"api/user_links/user_link_lists/"+p.value,headers:{Authorization:`Bearer ${S("token")}`}};try{o.loading.show(),await O.request(a);const t=l==null?void 0:l.value.userLinks.filter(u=>u._id!==p.value);l.value={...JSON.parse(JSON.stringify(l==null?void 0:l.value)),userLinks:t},(l==null?void 0:l.value.userLinks.length)<5&&(l==null?void 0:l.value.pages)!==1&&f(),o.loading.hide(),c.value=!1,o.notify({message:"Deleted successfully!",color:"primary",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]})}catch(t){c.value=!1,((r=t==null?void 0:t.response)==null?void 0:r.status)==401?o.notify({message:t.response.data.message+". Login to try again.",color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}):o.notify({message:t.message,color:"red",position:"top",actions:[{icon:"close",color:"white",handler:()=>{}}]}),o.loading.hide(),console.error(t)}},z=[{name:"links",label:"Links",align:"left",field:"links",sortable:!0},{name:"action",label:"Action",field:"action"}];return(a,r)=>(w(),k(K,{padding:""},{default:i(()=>{var t,u,d;return[C("div",F,[q(y).checkShowOnPermission("createUserLinks")?(w(),k(_,{key:0,style:{background:"green",color:"white"},label:"New User links",to:"/admin/user_links/user_link_list/create"})):V("",!0)]),C("div",ee,[n(W,{columns:z,"data-list":((t=l.value)==null?void 0:t.userLinks)||[],page:((u=l.value)==null?void 0:u.page)||1,pages:((d=l.value)==null?void 0:d.pages)||1,onUpdatePaginate:U,onOnEdit:Q,onOnDelete:D,onOnFilter:x,showEdit:q(y).checkShowOnPermission("editUserLinks"),showDelete:q(y).checkShowOnPermission("deleteUserLinks")},null,8,["data-list","page","pages","showEdit","showDelete"]),N.value?(w(),k(X,{key:0})):V("",!0)]),n(H,{modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=h=>c.value=h)},{default:i(()=>[n(G,{style:{width:"300px","max-width":"80vw"}},{default:i(()=>[n(P,null,{default:i(()=>[se]),_:1}),n(P,{class:"q-pt-none"},{default:i(()=>[I(" Are you sure you want to delete this userLinks? ")]),_:1}),n(Z,{align:"right",class:"bg-white text-teal"},{default:i(()=>[v(n(_,{flat:"",label:"Cancel"},null,512),[[b]]),v(n(_,{flat:"",label:"Delete",onClick:E,color:"red"},null,512),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]}),_:1}))}};export{he as default};
