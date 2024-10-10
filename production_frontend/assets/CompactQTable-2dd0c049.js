import{Q as U}from"./QSkeleton-f3878f1b.js";import{Q as Je}from"./QMarkupTable-fd27405c.js";import{J as Rt,cH as Tt,cI as Bt,v as $t,_ as Ft,a as H,c as Y,w as j,d as V,b as w,g as ge,a7 as Ot,a8 as Lt,B as W,q as s,j as te,l as g,I as be,aw as Et,f as We,ay as Dt,k as A,E as z,az as Nt,aA as Ue,bN as Ge,o as Re,H as jt,G as Ut,m as Xe,y as Ze,W as Ye,cJ as At,X as et,cK as Mt,cL as Qt,cM as Ae,cN as Ve,cO as Me,cP as Ht,au as tt,cQ as zt,cG as ee,aO as G,Q as L,a1 as It,a4 as Kt,Z as Jt,$ as Wt,u as Gt,a3 as de,a6 as Xt,a0 as Zt,a5 as ve,a9 as X,p as Yt,aG as el}from"./index-97890c42.js";import{u as tl,b as ll,c as lt,Q as me}from"./QSelect-3b944f24.js";import{Q as al}from"./QList-d248f901.js";import{u as nl}from"./use-quasar-8e1d4cd1.js";function Qe(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const a=parseInt(e,10);return isNaN(a)?0:a}const ol=Rt({name:"close-popup",beforeMount(e,{value:a}){const l={depth:Qe(a),handler(c){l.depth!==0&&setTimeout(()=>{const r=Tt(e);r!==void 0&&Bt(r,c,l.depth)})},handlerKey(c){$t(c,13)===!0&&l.handler(c)}};e.__qclosepopup=l,e.addEventListener("click",l.handler),e.addEventListener("keyup",l.handlerKey)},updated(e,{value:a,oldValue:l}){a!==l&&(e.__qclosepopup.depth=Qe(a))},beforeUnmount(e){const a=e.__qclosepopup;e.removeEventListener("click",a.handler),e.removeEventListener("keyup",a.handlerKey),delete e.__qclosepopup}}),rl={},il={class:"text-left",style:{width:"150px"}},sl={class:"text-right"},ul={class:"text-right"},cl={class:"text-right"},dl={class:"text-right"},vl={class:"text-right"},fl={class:"text-left"},gl={class:"text-right"},ml={class:"text-right"},bl={class:"text-right"},yl={class:"text-right"},hl={class:"text-right"};function pl(e,a){return H(),Y(Je,null,{default:j(()=>[V("thead",null,[V("tr",null,[V("th",il,[w(U,{animation:"blink",type:"text"})]),V("th",sl,[w(U,{animation:"blink",type:"text"})]),V("th",ul,[w(U,{animation:"blink",type:"text"})]),V("th",cl,[w(U,{animation:"blink",type:"text"})]),V("th",dl,[w(U,{animation:"blink",type:"text"})]),V("th",vl,[w(U,{animation:"blink",type:"text"})])])]),V("tbody",null,[(H(),ge(Ot,null,Lt(5,l=>V("tr",{key:l},[V("td",fl,[w(U,{animation:"blink",type:"text",width:"85px"})]),V("td",gl,[w(U,{animation:"blink",type:"text",width:"50px"})]),V("td",ml,[w(U,{animation:"blink",type:"text",width:"35px"})]),V("td",bl,[w(U,{animation:"blink",type:"text",width:"65px"})]),V("td",yl,[w(U,{animation:"blink",type:"text",width:"25px"})]),V("td",hl,[w(U,{animation:"blink",type:"text",width:"85px"})])])),64))])]),_:1})}const ga=Ft(rl,[["render",pl]]),Sl=W({name:"QSpace",setup(){const e=s("div",{class:"q-space"});return()=>e}}),_l=W({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:a}){const l=te(),c=g(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return s("td",{class:c.value},be(a.default));const r=l.vnode.key,v=(e.props.colsMap!==void 0?e.props.colsMap[r]:null)||e.props.col;if(v===void 0)return;const{row:i}=e.props;return s("td",{class:c.value+v.__tdClass(i),style:v.__tdStyle(i)},be(a.default))}}}),wl=W({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:l}){const c=te(),{proxy:{$q:r}}=c,v=i=>{l("click",i)};return()=>{if(e.props===void 0)return s("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:v},be(a.default));let i,d;const o=c.vnode.key;if(o){if(i=e.props.colsMap[o],i===void 0)return}else i=e.props.col;if(i.sortable===!0){const n=i.align==="right"?"unshift":"push";d=Et(a.default,[]),d[n](s(We,{class:i.__iconClass,name:r.iconSet.table.arrowUp}))}else d=be(a.default);const m={class:i.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:i.headerStyle,onClick:n=>{i.sortable===!0&&e.props.sort(i),v(n)}};return s("th",m,d)}}});function at(e,a){return s("div",e,[s("table",{class:"q-table"},a)])}const Cl={list:al,table:Je},kl=["list","table","__qtable"],Pl=W({name:"QVirtualScroll",props:{...tl,type:{type:String,default:"list",validator:e=>kl.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:Dt},setup(e,{slots:a,attrs:l}){let c;const r=A(null),v=g(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:i,localResetVirtualScroll:d,padVirtualScroll:o,onVirtualScrollEvt:m}=ll({virtualScrollLength:v,getVirtualScrollTarget:q,getVirtualScrollEl:x}),n=g(()=>{if(v.value===0)return[];const O=(E,B)=>({index:i.value.from+B,item:E});return e.itemsFn===void 0?e.items.slice(i.value.from,i.value.to).map(O):e.itemsFn(i.value.from,i.value.to-i.value.from).map(O)}),p=g(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),P=g(()=>e.scrollTarget!==void 0?{}:{tabindex:0});z(v,()=>{d()}),z(()=>e.scrollTarget,()=>{_(),C()});function x(){return r.value.$el||r.value}function q(){return c}function C(){c=Nt(x(),e.scrollTarget),c.addEventListener("scroll",m,Ue.passive)}function _(){c!==void 0&&(c.removeEventListener("scroll",m,Ue.passive),c=void 0)}function F(){let O=o(e.type==="list"?"div":"tbody",n.value.map(a.default));return a.before!==void 0&&(O=a.before().concat(O)),Ze(a.after,O)}return Ge(()=>{d()}),Re(()=>{C()}),jt(()=>{C()}),Ut(()=>{_()}),Xe(()=>{_()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?at({ref:r,class:"q-table__middle "+p.value},F()):s(Cl[e.type],{...l,ref:r,class:[l.class,p.value],...P.value},F)}}}),xl={xs:2,sm:4,md:6,lg:10,xl:14};function He(e,a,l){return{transform:a===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}const ql=W({name:"QLinearProgress",props:{...Ye,...At,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:l}=te(),c=et(e,l.$q),r=Mt(e,xl),v=g(()=>e.indeterminate===!0||e.query===!0),i=g(()=>e.reverse!==e.query),d=g(()=>({...r.value!==null?r.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),o=g(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=g(()=>He(e.buffer!==void 0?e.buffer:1,i.value,l.$q)),n=g(()=>`with${e.instantFeedback===!0?"out":""}-transition`),p=g(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${n.value} q-linear-progress__track--${c.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),P=g(()=>He(v.value===!0?1:e.value,i.value,l.$q)),x=g(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${n.value} q-linear-progress__model--${v.value===!0?"in":""}determinate`),q=g(()=>({width:`${e.value*100}%`})),C=g(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${n.value}`);return()=>{const _=[s("div",{class:p.value,style:m.value}),s("div",{class:x.value,style:P.value})];return e.stripe===!0&&v.value===!1&&_.push(s("div",{class:C.value,style:q.value})),s("div",{class:o.value,style:d.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ze(a.default,_))}}});let Z=0;const Vl={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Rl=["update:fullscreen","fullscreen"];function Tl(){const e=te(),{props:a,emit:l,proxy:c}=e;let r,v,i;const d=A(!1);Qt(e)===!0&&z(()=>c.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&n()}),z(()=>a.fullscreen,p=>{d.value!==p&&o()}),z(d,p=>{l("update:fullscreen",p),l("fullscreen",p)});function o(){d.value===!0?n():m()}function m(){d.value!==!0&&(d.value=!0,i=c.$el.parentNode,i.replaceChild(v,c.$el),document.body.appendChild(c.$el),Z++,Z===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:n},Ae.add(r))}function n(){d.value===!0&&(r!==void 0&&(Ae.remove(r),r=void 0),i.replaceChild(c.$el,v),d.value=!1,Z=Math.max(0,Z-1),Z===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),c.$el.scrollIntoView!==void 0&&setTimeout(()=>{c.$el.scrollIntoView()})))}return Ge(()=>{v=document.createElement("span")}),Re(()=>{a.fullscreen===!0&&m()}),Xe(n),Object.assign(c,{toggleFullscreen:o,setFullscreen:m,exitFullscreen:n}),{inFullscreen:d,toggleFullscreen:o}}function Bl(e,a){return new Date(e)-new Date(a)}const $l={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Fl(e,a,l,c){const r=g(()=>{const{sortBy:d}=a.value;return d&&l.value.find(o=>o.name===d)||null}),v=g(()=>e.sortMethod!==void 0?e.sortMethod:(d,o,m)=>{const n=l.value.find(x=>x.name===o);if(n===void 0||n.field===void 0)return d;const p=m===!0?-1:1,P=typeof n.field=="function"?x=>n.field(x):x=>x[n.field];return d.sort((x,q)=>{let C=P(x),_=P(q);return n.rawSort!==void 0?n.rawSort(C,_,x,q)*p:C==null?-1*p:_==null?1*p:n.sort!==void 0?n.sort(C,_,x,q)*p:Ve(C)===!0&&Ve(_)===!0?(C-_)*p:Me(C)===!0&&Me(_)===!0?Bl(C,_)*p:typeof C=="boolean"&&typeof _=="boolean"?(C-_)*p:([C,_]=[C,_].map(F=>(F+"").toLocaleString().toLowerCase()),C<_?-1*p:C===_?0:p)})});function i(d){let o=e.columnSortOrder;if(Ht(d)===!0)d.sortOrder&&(o=d.sortOrder),d=d.name;else{const p=l.value.find(P=>P.name===d);p!==void 0&&p.sortOrder&&(o=p.sortOrder)}let{sortBy:m,descending:n}=a.value;m!==d?(m=d,n=o==="da"):e.binaryStateSort===!0?n=!n:n===!0?o==="ad"?m=null:n=!1:o==="ad"?n=!0:m=null,c({sortBy:m,descending:n,page:1})}return{columnToSort:r,computedSortMethod:v,sort:i}}const Ol={filter:[String,Object],filterMethod:Function};function Ll(e,a){const l=g(()=>e.filterMethod!==void 0?e.filterMethod:(c,r,v,i)=>{const d=r?r.toLowerCase():"";return c.filter(o=>v.some(m=>{const n=i(m,o)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(d)!==-1}))});return z(()=>e.filter,()=>{tt(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function El(e,a){for(const l in a)if(a[l]!==e[l])return!1;return!0}function ze(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Dl={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Nl(e,a){const{props:l,emit:c}=e,r=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length!==0?l.rowsPerPageOptions[0]:5},l.pagination)),v=g(()=>{const n=l["onUpdate:pagination"]!==void 0?{...r.value,...l.pagination}:r.value;return ze(n)}),i=g(()=>v.value.rowsNumber!==void 0);function d(n){o({pagination:n,filter:l.filter})}function o(n={}){tt(()=>{c("request",{pagination:n.pagination||v.value,filter:n.filter||l.filter,getCellValue:a})})}function m(n,p){const P=ze({...v.value,...n});if(El(v.value,P)===!0){i.value===!0&&p===!0&&d(P);return}if(i.value===!0){d(P);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?c("update:pagination",P):r.value=P}return{innerPagination:r,computedPagination:v,isServerSide:i,requestServerInteraction:o,setPagination:m}}function jl(e,a,l,c,r,v){const{props:i,emit:d,proxy:{$q:o}}=e,m=g(()=>c.value===!0?l.value.rowsNumber||0:v.value),n=g(()=>{const{page:B,rowsPerPage:b}=l.value;return(B-1)*b}),p=g(()=>{const{page:B,rowsPerPage:b}=l.value;return B*b}),P=g(()=>l.value.page===1),x=g(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(m.value/l.value.rowsPerPage))),q=g(()=>p.value===0?!0:l.value.page>=x.value),C=g(()=>(i.rowsPerPageOptions.includes(a.value.rowsPerPage)?i.rowsPerPageOptions:[a.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(b=>({label:b===0?o.lang.table.allRows:""+b,value:b})));z(x,(B,b)=>{if(B===b)return;const f=l.value.page;B&&!f?r({page:1}):B<f&&r({page:B})});function _(){r({page:1})}function F(){const{page:B}=l.value;B>1&&r({page:B-1})}function O(){const{page:B,rowsPerPage:b}=l.value;p.value>0&&B*b<m.value&&r({page:B+1})}function E(){r({page:x.value})}return i["onUpdate:pagination"]!==void 0&&d("update:pagination",{...l.value}),{firstRowIndex:n,lastRowIndex:p,isFirstPage:P,isLastPage:q,pagesNumber:x,computedRowsPerPageOptions:C,computedRowsNumber:m,firstPage:_,prevPage:F,nextPage:O,lastPage:E}}const Ul={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Al=["update:selected","selection"];function Ml(e,a,l,c){const r=g(()=>{const q={};return e.selected.map(c.value).forEach(C=>{q[C]=!0}),q}),v=g(()=>e.selection!=="none"),i=g(()=>e.selection==="single"),d=g(()=>e.selection==="multiple"),o=g(()=>l.value.length!==0&&l.value.every(q=>r.value[c.value(q)]===!0)),m=g(()=>o.value!==!0&&l.value.some(q=>r.value[c.value(q)]===!0)),n=g(()=>e.selected.length);function p(q){return r.value[q]===!0}function P(){a("update:selected",[])}function x(q,C,_,F){a("selection",{rows:C,added:_,keys:q,evt:F});const O=i.value===!0?_===!0?C:[]:_===!0?e.selected.concat(C):e.selected.filter(E=>q.includes(c.value(E))===!1);a("update:selected",O)}return{hasSelectionMode:v,singleSelection:i,multipleSelection:d,allRowsSelected:o,someRowsSelected:m,rowsSelectedNumber:n,isRowSelected:p,clearSelection:P,updateSelection:x}}function Ie(e){return Array.isArray(e)?e.slice():[]}const Ql={expanded:Array},Hl=["update:expanded"];function zl(e,a){const l=A(Ie(e.expanded));z(()=>e.expanded,i=>{l.value=Ie(i)});function c(i){return l.value.includes(i)}function r(i){e.expanded!==void 0?a("update:expanded",i):l.value=i}function v(i,d){const o=l.value.slice(),m=o.indexOf(i);d===!0?m===-1&&(o.push(i),r(o)):m!==-1&&(o.splice(m,1),r(o))}return{isRowExpanded:c,setExpanded:r,updateExpanded:v}}const Il={visibleColumns:Array};function Kl(e,a,l){const c=g(()=>{if(e.columns!==void 0)return e.columns;const d=e.rows[0];return d!==void 0?Object.keys(d).map(o=>({name:o,label:o.toUpperCase(),field:o,align:Ve(d[o])?"right":"left",sortable:!0})):[]}),r=g(()=>{const{sortBy:d,descending:o}=a.value;return(e.visibleColumns!==void 0?c.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):c.value).map(n=>{const p=n.align||"right",P=`text-${p}`;return{...n,align:p,__iconClass:`q-table__sort-icon q-table__sort-icon--${p}`,__thClass:P+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===d?` sorted ${o===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>P+" "+n.classes:x=>P+" "+n.classes(x):()=>P}})}),v=g(()=>{const d={};return r.value.forEach(o=>{d[o.name]=o}),d}),i=g(()=>e.tableColspan!==void 0?e.tableColspan:r.value.length+(l.value===!0?1:0));return{colList:c,computedCols:r,computedColsMap:v,computedColspan:i}}const fe="q-table__bottom row items-center",nt={};lt.forEach(e=>{nt[e]={}});const Jl=W({name:"QTable",props:{rows:{type:Array,required:!0},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{},...nt,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...Ye,...Vl,...Il,...Ol,...Dl,...Ql,...Ul,...$l},emits:["request","virtualScroll",...Rl,...Hl,...Al],setup(e,{slots:a,emit:l}){const c=te(),{proxy:{$q:r}}=c,v=et(e,r),{inFullscreen:i,toggleFullscreen:d}=Tl(),o=g(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),m=A(null),n=A(null),p=g(()=>e.grid!==!0&&e.virtualScroll===!0),P=g(()=>" q-table__card"+(v.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),x=g(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":P.value)+(v.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(i.value===!0?" fullscreen scroll":"")),q=g(()=>x.value+(e.loading===!0?" q-table--loading":""));z(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+x.value,()=>{p.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:C,computedPagination:_,isServerSide:F,requestServerInteraction:O,setPagination:E}=Nl(c,K),{computedFilterMethod:B}=Ll(e,E),{isRowExpanded:b,setExpanded:f,updateExpanded:y}=zl(e,l),R=g(()=>{let t=e.rows;if(F.value===!0||t.length===0)return t;const{sortBy:u,descending:h}=_.value;return e.filter&&(t=B.value(t,e.filter,M.value,K)),ut.value!==null&&(t=ct.value(e.rows===t?t.slice():t,u,h)),t}),le=g(()=>R.value.length),N=g(()=>{let t=R.value;if(F.value===!0)return t;const{rowsPerPage:u}=_.value;return u!==0&&(ne.value===0&&e.rows!==t?t.length>oe.value&&(t=t.slice(0,oe.value)):t=t.slice(ne.value,oe.value)),t}),{hasSelectionMode:I,singleSelection:ot,multipleSelection:Te,allRowsSelected:rt,someRowsSelected:Be,rowsSelectedNumber:ye,isRowSelected:he,clearSelection:it,updateSelection:ae}=Ml(e,l,N,o),{colList:st,computedCols:M,computedColsMap:$e,computedColspan:Fe}=Kl(e,_,I),{columnToSort:ut,computedSortMethod:ct,sort:pe}=Fl(e,_,st,E),{firstRowIndex:ne,lastRowIndex:oe,isFirstPage:Se,isLastPage:_e,pagesNumber:re,computedRowsPerPageOptions:dt,computedRowsNumber:ie,firstPage:we,prevPage:Ce,nextPage:ke,lastPage:Pe}=jl(c,C,_,F,E,le),vt=g(()=>N.value.length===0),ft=g(()=>{const t={};return lt.forEach(u=>{t[u]=e[u]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function gt(){p.value===!0&&n.value.reset()}function mt(){if(e.grid===!0)return qt();const t=e.hideHeader!==!0?Ne:null;if(p.value===!0){const h=a["top-row"],S=a["bottom-row"],k={default:$=>Le($.item,a.body,$.index)};if(h!==void 0){const $=s("tbody",h({cols:M.value}));k.before=t===null?()=>$:()=>[t()].concat($)}else t!==null&&(k.before=t);return S!==void 0&&(k.after=()=>s("tbody",S({cols:M.value}))),s(Pl,{ref:n,class:e.tableClass,style:e.tableStyle,...ft.value,scrollTarget:e.virtualScrollTarget,items:N.value,type:"__qtable",tableColspan:Fe.value,onVirtualScroll:yt},k)}const u=[ht()];return t!==null&&u.unshift(t()),at({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},u)}function bt(t,u){if(n.value!==null){n.value.scrollTo(t,u);return}t=parseInt(t,10);const h=m.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(h!==null){const S=m.value.querySelector(".q-table__middle.scroll"),k=h.offsetTop-e.virtualScrollStickySizeStart,$=k<S.scrollTop?"decrease":"increase";S.scrollTop=k,l("virtualScroll",{index:t,from:0,to:C.value.rowsPerPage-1,direction:$})}}function yt(t){l("virtualScroll",t)}function Oe(){return[s(ql,{class:"q-table__linear-progress",color:e.color,dark:v.value,indeterminate:!0,trackColor:"transparent"})]}function Le(t,u,h){const S=o.value(t),k=he(S);if(u!==void 0)return u(Ee({key:S,row:t,pageIndex:h,__trClass:k?"selected":""}));const $=a["body-cell"],T=M.value.map(D=>{const ue=a[`body-cell-${D.name}`],ce=ue!==void 0?ue:$;return ce!==void 0?ce(pt({key:S,row:t,pageIndex:h,col:D})):s("td",{class:D.__tdClass(t),style:D.__tdStyle(t)},K(D,t))});if(I.value===!0){const D=a["body-selection"],ue=D!==void 0?D(St({key:S,row:t,pageIndex:h})):[s(ee,{modelValue:k,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(ce,Vt)=>{ae([S],[t],ce,Vt)}})];T.unshift(s("td",{class:"q-table--col-auto-width"},ue))}const Q={key:S,class:{selected:k}};return e.onRowClick!==void 0&&(Q.class["cursor-pointer"]=!0,Q.onClick=D=>{l("rowClick",D,t,h)}),e.onRowDblclick!==void 0&&(Q.class["cursor-pointer"]=!0,Q.onDblclick=D=>{l("rowDblclick",D,t,h)}),e.onRowContextmenu!==void 0&&(Q.class["cursor-pointer"]=!0,Q.onContextmenu=D=>{l("rowContextmenu",D,t,h)}),s("tr",Q,T)}function ht(){const t=a.body,u=a["top-row"],h=a["bottom-row"];let S=N.value.map((k,$)=>Le(k,t,$));return u!==void 0&&(S=u({cols:M.value}).concat(S)),h!==void 0&&(S=S.concat(h({cols:M.value}))),s("tbody",S)}function Ee(t){return xe(t),t.cols=t.cols.map(u=>G({...u},"value",()=>K(u,t.row))),t}function pt(t){return xe(t),G(t,"value",()=>K(t.col,t.row)),t}function St(t){return xe(t),t}function xe(t){Object.assign(t,{cols:M.value,colsMap:$e.value,sort:pe,rowIndex:ne.value+t.pageIndex,color:e.color,dark:v.value,dense:e.dense}),I.value===!0&&G(t,"selected",()=>he(t.key),(u,h)=>{ae([t.key],[t.row],u,h)}),G(t,"expand",()=>b(t.key),u=>{y(t.key,u)})}function K(t,u){const h=typeof t.field=="function"?t.field(u):u[t.field];return t.format!==void 0?t.format(h,u):h}const J=g(()=>({pagination:_.value,pagesNumber:re.value,isFirstPage:Se.value,isLastPage:_e.value,firstPage:we,prevPage:Ce,nextPage:ke,lastPage:Pe,inFullscreen:i.value,toggleFullscreen:d}));function _t(){const t=a.top,u=a["top-left"],h=a["top-right"],S=a["top-selection"],k=I.value===!0&&S!==void 0&&ye.value>0,$="q-table__top relative-position row items-center";if(t!==void 0)return s("div",{class:$},[t(J.value)]);let T;if(k===!0?T=S(J.value).slice():(T=[],u!==void 0?T.push(s("div",{class:"q-table__control"},[u(J.value)])):e.title&&T.push(s("div",{class:"q-table__control"},[s("div",{class:["q-table__title",e.titleClass]},e.title)]))),h!==void 0&&(T.push(s("div",{class:"q-table__separator col"})),T.push(s("div",{class:"q-table__control"},[h(J.value)]))),T.length!==0)return s("div",{class:$},T)}const De=g(()=>Be.value===!0?null:rt.value);function Ne(){const t=wt();return e.loading===!0&&a.loading===void 0&&t.push(s("tr",{class:"q-table__progress"},[s("th",{class:"relative-position",colspan:Fe.value},Oe())])),s("thead",t)}function wt(){const t=a.header,u=a["header-cell"];if(t!==void 0)return t(qe({header:!0})).slice();const h=M.value.map(S=>{const k=a[`header-cell-${S.name}`],$=k!==void 0?k:u,T=qe({col:S});return $!==void 0?$(T):s(wl,{key:S.name,props:T},()=>S.label)});if(ot.value===!0&&e.grid!==!0)h.unshift(s("th",{class:"q-table--col-auto-width"}," "));else if(Te.value===!0){const S=a["header-selection"],k=S!==void 0?S(qe({})):[s(ee,{color:e.color,modelValue:De.value,dark:v.value,dense:e.dense,"onUpdate:modelValue":je})];h.unshift(s("th",{class:"q-table--col-auto-width"},k))}return[s("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},h)]}function qe(t){return Object.assign(t,{cols:M.value,sort:pe,colsMap:$e.value,color:e.color,dark:v.value,dense:e.dense}),Te.value===!0&&G(t,"selected",()=>De.value,je),t}function je(t){Be.value===!0&&(t=!1),ae(N.value.map(o.value),N.value,t)}const se=g(()=>{const t=[e.iconFirstPage||r.iconSet.table.firstPage,e.iconPrevPage||r.iconSet.table.prevPage,e.iconNextPage||r.iconSet.table.nextPage,e.iconLastPage||r.iconSet.table.lastPage];return r.lang.rtl===!0?t.reverse():t});function Ct(){if(e.hideBottom===!0)return;if(vt.value===!0){if(e.hideNoData===!0)return;const h=e.loading===!0?e.loadingLabel||r.lang.table.loading:e.filter?e.noResultsLabel||r.lang.table.noResults:e.noDataLabel||r.lang.table.noData,S=a["no-data"],k=S!==void 0?[S({message:h,icon:r.iconSet.table.warning,filter:e.filter})]:[s(We,{class:"q-table__bottom-nodata-icon",name:r.iconSet.table.warning}),h];return s("div",{class:fe+" q-table__bottom--nodata"},k)}const t=a.bottom;if(t!==void 0)return s("div",{class:fe},[t(J.value)]);const u=e.hideSelectedBanner!==!0&&I.value===!0&&ye.value>0?[s("div",{class:"q-table__control"},[s("div",[(e.selectedRowsLabel||r.lang.table.selectedRecords)(ye.value)])])]:[];if(e.hidePagination!==!0)return s("div",{class:fe+" justify-end"},Pt(u));if(u.length!==0)return s("div",{class:fe},u)}function kt(t){E({page:1,rowsPerPage:t.value})}function Pt(t){let u;const{rowsPerPage:h}=_.value,S=e.paginationLabel||r.lang.table.pagination,k=a.pagination,$=e.rowsPerPageOptions.length>1;if(t.push(s("div",{class:"q-table__separator col"})),$===!0&&t.push(s("div",{class:"q-table__control"},[s("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||r.lang.table.recordsPerPage]),s(me,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:h,options:dt.value,displayValue:h===0?r.lang.table.allRows:h,dark:v.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":kt})])),k!==void 0)u=k(J.value);else if(u=[s("span",h!==0?{class:"q-table__bottom-item"}:{},[h?S(ne.value+1,Math.min(oe.value,ie.value),ie.value):S(1,le.value,ie.value)])],h!==0&&re.value>1){const T={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(T.size="sm"),re.value>2&&u.push(s(L,{key:"pgFirst",...T,icon:se.value[0],disable:Se.value,onClick:we})),u.push(s(L,{key:"pgPrev",...T,icon:se.value[1],disable:Se.value,onClick:Ce}),s(L,{key:"pgNext",...T,icon:se.value[2],disable:_e.value,onClick:ke})),re.value>2&&u.push(s(L,{key:"pgLast",...T,icon:se.value[3],disable:_e.value,onClick:Pe}))}return t.push(s("div",{class:"q-table__control"},u)),t}function xt(){const t=e.gridHeader===!0?[s("table",{class:"q-table"},[Ne()])]:e.loading===!0&&a.loading===void 0?Oe():void 0;return s("div",{class:"q-table__middle"},t)}function qt(){const t=a.item!==void 0?a.item:u=>{const h=u.cols.map(k=>s("div",{class:"q-table__grid-item-row"},[s("div",{class:"q-table__grid-item-title"},[k.label]),s("div",{class:"q-table__grid-item-value"},[k.value])]));if(I.value===!0){const k=a["body-selection"],$=k!==void 0?k(u):[s(ee,{modelValue:u.selected,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(T,Q)=>{ae([u.key],[u.row],T,Q)}})];h.unshift(s("div",{class:"q-table__grid-item-row"},$),s(It,{dark:v.value}))}const S={class:["q-table__grid-item-card"+P.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(S.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(S.onClick=k=>{l("RowClick",k,u.row,u.pageIndex)}),e.onRowDblclick!==void 0&&(S.onDblclick=k=>{l("RowDblclick",k,u.row,u.pageIndex)})),s("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(u.selected===!0?" q-table__grid-item--selected":"")},[s("div",S,h)])};return s("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},N.value.map((u,h)=>t(Ee({key:o.value(u),row:u,pageIndex:h}))))}return Object.assign(c.proxy,{requestServerInteraction:O,setPagination:E,firstPage:we,prevPage:Ce,nextPage:ke,lastPage:Pe,isRowSelected:he,clearSelection:it,isRowExpanded:b,setExpanded:f,sort:pe,resetVirtualScroll:gt,scrollTo:bt,getCellValue:K}),zt(c.proxy,{filteredSortedRows:()=>R.value,computedRows:()=>N.value,computedRowsNumber:()=>ie.value}),()=>{const t=[_t()],u={ref:m,class:q.value};return e.grid===!0?t.push(xt()):Object.assign(u,{class:[u.class,e.cardClass],style:e.cardStyle}),t.push(mt(),Ct()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),s("div",u,t)}}});function Ke(e){setTimeout(()=>{window.URL.revokeObjectURL(e.href)},1e4),e.remove()}function Wl(e,a,l={}){const{mimeType:c,byteOrderMark:r,encoding:v}=typeof l=="string"?{mimeType:l}:l,i=v!==void 0?new TextEncoder(v).encode([a]):a,d=r!==void 0?[r,i]:[i],o=new Blob(d,{type:c||"application/octet-stream"}),m=document.createElement("a");m.href=window.URL.createObjectURL(o),m.setAttribute("download",e),typeof m.download>"u"&&m.setAttribute("target","_blank"),m.classList.add("hidden"),m.style.position="fixed",document.body.appendChild(m);try{return m.click(),Ke(m),!0}catch(n){return Ke(m),n}}const Gl={class:"q-pa-md"},Xl={class:"flex justify-center items-center"},Zl={key:0},Yl={class:"inline-flex q-gutter-sm"},ea={key:1},ta=V("span",null,"Keyword Filter",-1),la=V("span",null,"Search by keyword",-1),aa=V("span",null,"Date Range Filter From",-1),na=V("span",null,"To",-1),oa=V("span",null,"Value Range Filter Field",-1),ra=V("span",null,"From ",-1),ia=V("span",null,"To ",-1),ma={__name:"CompactQTable",props:{dataList:Array,columns:Array,page:Number,pages:Number,showEdit:Boolean,showDelete:Boolean},emits:["updatePaginate","onFilter","onEdit","onDelete"],setup(e,{emit:a}){const l=e,c=Kt(),r=Jt(),v=A([]),i=A(!1),d=A(null),o=Wt({keywords:null,gt:null,lt:null,gtValue:null,ltValue:null,filterColumn:null,rangeColumn:null}),m=()=>{const b=JSON.parse(JSON.stringify(o));b!=null&&b.gtValue&&(b.gtValue=Number(b.gtValue)-1),b!=null&&b.ltValue&&(b.ltValue=Number(b.ltValue)+1),a("onFilter",b),O(b)},n=()=>{o.filterColumn=null,o.rangeColumn=null,o.keywords=null,o.gt=null,o.lt=null,o.gtValue=null,o.ltValue=null},p=()=>{n(),m()},P=A([]),x=nl(),q=A([]);Re(()=>{q.value=l.columns.map(b=>b.name),v.value=l.columns.filter(b=>b.name!=="action"),o.filterColumn=l.columns.map(b=>b.name)[0],o.rangeColumn=l.columns.map(b=>b.name)[0]});const C=A({sortBy:"createdAt",descending:!0,page:l.page||1,rowsPerPage:10}),_=b=>{b.sortBy||(b.sortBy="createdAt"),a("updatePaginate",b),O(b)},F=b=>{const f=JSON.parse(JSON.stringify(C.value));f!=null&&f.sortBy||(f.sortBy="createdAt"),f.page=b,_(f)},O=b=>{const f=new URLSearchParams(c.query),y={};for(const[N,I]of f)y[`${N}`]=I;const R=Object.keys(b);for(const N of R)y[`${N}`]=b[`${N}`];const le=new URLSearchParams(y);r.push(c.path+"?"+le.toString())};function E(b,f,y){let R=f!==void 0?f(b,y):b;return R=R==null?"":String(R),R=R.split('"').join('""'),`"${R}"`}function B(){const b=[l.columns.map(y=>E(y.label))].concat(l.dataList.map(y=>l.columns.map(R=>E(typeof R.field=="function"?R.field(y):y[R.field===void 0?R.name:R.field],R.format,y)).join(","))).join(`\r
`);Wl("table-export.csv",b,"text/csv")!==!0&&x.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}return(b,f)=>(H(),ge("div",Gl,[w(Jl,{ref_key:"tableRef",ref:d,flat:"",bordered:"",title:"Treats",rows:l.dataList,columns:l.columns,"row-key":"name",separator:"cell",selection:"multiple",selected:P.value,"onUpdate:selected":f[6]||(f[6]=y=>P.value=y),"visible-columns":q.value,pagination:C.value,"onUpdate:pagination":[f[7]||(f[7]=y=>C.value=y),f[8]||(f[8]=y=>_(y))],"rows-per-page-options":[5,10,15,20,25,30,50]},{"header-selection":j(y=>[V("div",Xl,[w(ee,{modelValue:y.selected,"onUpdate:modelValue":R=>y.selected=R},null,8,["modelValue","onUpdate:modelValue"])])]),"body-selection":j(y=>[w(ee,{modelValue:y.selected,"onUpdate:modelValue":R=>y.selected=R},null,8,["modelValue","onUpdate:modelValue"])]),top:j(()=>[w(L,{onClick:f[0]||(f[0]=y=>i.value=!0),flat:"",icon:"filter_alt",label:"Filter",dense:"",title:"open filter popup"}),w(L,{class:"q-mr-sm",icon:"clear",color:"red",onClick:p,dense:"",title:"clear filter"}),w(Sl),w(me,{modelValue:q.value,"onUpdate:modelValue":f[1]||(f[1]=y=>q.value=y),multiple:"",outlined:"",dense:"","options-dense":"","display-value":Gt(x).lang.table.columns,"emit-value":"","map-options":"",options:l.columns,"option-value":"name",title:"hide unhide columns","options-cover":"",style:{"max-width":"105px"}},null,8,["modelValue","display-value","options"]),w(L,{class:"q-px-sm q-ml-sm",color:"cyan-8","icon-right":"archive","no-caps":"",onClick:B,title:"Export as csv"})]),"body-cell":j(y=>[w(_l,{props:y},{default:j(()=>[y.col.name==="action"?(H(),ge("div",Zl,[V("div",Yl,[l.showEdit?(H(),Y(L,{key:0,label:"Edit",size:"sm",color:"green-9",onClick:R=>{a("onEdit",y.row)}},null,8,["onClick"])):de("",!0),l.showDelete?(H(),Y(L,{key:1,label:"Delete",size:"sm",color:"red-9",onClick:R=>{a("onDelete",y.row)}},null,8,["onClick"])):de("",!0)])])):(H(),ge("div",ea,Xt(y.value),1))]),_:2},1032,["props"])]),pagination:j(y=>[l.page!==1?(H(),Y(L,{key:0,icon:"first_page",color:"grey-8",round:"",dense:"",flat:"",disable:l.page===1,onClick:f[2]||(f[2]=()=>F(1))},null,8,["disable"])):de("",!0),w(L,{icon:"chevron_left",color:"grey-8",round:"",dense:"",flat:"",disable:l.page===1,onClick:f[3]||(f[3]=()=>F(l.page-1))},null,8,["disable"]),w(L,{icon:"chevron_right",color:"grey-8",round:"",dense:"",flat:"",disable:l.page==l.pages,onClick:f[4]||(f[4]=()=>F(l.page+1))},null,8,["disable"]),l.page<l.pages?(H(),Y(L,{key:1,icon:"last_page",color:"grey-8",round:"",dense:"",flat:"",disable:l.page==l.pages,onClick:f[5]||(f[5]=()=>F(l.pages))},null,8,["disable"])):de("",!0)]),_:1},8,["rows","columns","selected","visible-columns","pagination"]),w(el,{modelValue:i.value,"onUpdate:modelValue":f[16]||(f[16]=y=>i.value=y),persistent:""},{default:j(()=>[w(Zt,{style:{width:"400px","max-width":"80vw"}},{default:j(()=>[w(ve,null,{default:j(()=>[ta,w(me,{modelValue:o.filterColumn,"onUpdate:modelValue":f[9]||(f[9]=y=>o.filterColumn=y),outlined:"",dense:"","options-dense":"","emit-value":"","map-options":"",options:v.value,"option-value":"name",title:"filter key","options-cover":""},null,8,["modelValue","options"]),la,w(X,{"model-value":o.keywords,"onUpdate:modelValue":f[10]||(f[10]=y=>o.keywords=y),outlined:"",dense:"",type:"text",placeholder:"keyword filter...",debounce:"1000"},null,8,["model-value"])]),_:1}),w(ve,{class:"q-pt-none"},{default:j(()=>[V("div",null,[aa,w(X,{"model-value":o.gt,"onUpdate:modelValue":f[11]||(f[11]=y=>o.gt=y),outlined:"",dense:"",type:"date",debounce:"1000"},null,8,["model-value"]),na,w(X,{"model-value":o.lt,"onUpdate:modelValue":f[12]||(f[12]=y=>o.lt=y),outlined:"",dense:"",type:"date",debounce:"1000"},null,8,["model-value"])])]),_:1}),w(ve,{class:"q-pt-none"},{default:j(()=>[oa,V("div",null,[w(me,{modelValue:o.rangeColumn,"onUpdate:modelValue":f[13]||(f[13]=y=>o.rangeColumn=y),outlined:"",dense:"","options-dense":"","emit-value":"","map-options":"",options:v.value,"option-value":"name",title:"range filter key","options-cover":""},null,8,["modelValue","options"]),ra,w(X,{"model-value":o.gtValue,"onUpdate:modelValue":f[14]||(f[14]=y=>o.gtValue=y),outlined:"",dense:"",type:"number",debounce:"1000"},null,8,["model-value"]),ia,w(X,{"model-value":o.ltValue,"onUpdate:modelValue":f[15]||(f[15]=y=>o.ltValue=y),outlined:"",dense:"",type:"number",debounce:"1000"},null,8,["model-value"])])]),_:1}),w(ve,{class:"q-pt-none flex justify-end"},{default:j(()=>[Yt(w(L,{label:"Done",color:"primary",onClick:m},null,512),[[ol]]),w(L,{class:"q-ml-sm",label:"Clear",color:"red",onClick:n})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{ol as C,ga as T,ma as _};
