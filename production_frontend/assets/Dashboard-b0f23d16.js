import{B as ie,m as me,q as _,T as at,ad as _t,ae as lt,af as it,W as De,ag as nt,j as ge,X as Me,k as x,ah as wt,ai as ot,l as m,E as O,A as zt,a1 as He,p as Y,aj as le,I as Pe,f as ue,s as rt,J as kt,K as ne,L as qt,M as pt,N as ve,O as ze,ak as Qe,al as ke,P as Le,S as qe,ac as Ct,am as pe,G as xt,H as Tt,an as je,y as It,D as $e,ao as Ot,o as he,ap as Bt,aq as Ce,i as Lt,h as xe,ar as $t,as as Dt,at as Ne,Y as Re,au as Mt,a5 as Pt,r as Fe,a as F,c as oe,w as $,b as T,Q as V,d as I,e as Et,n as Te,u as re,g as te,a8 as Ve,a7 as se,a4 as ae,a3 as Ue}from"./index-885abe90.js";import{d as At,Q as Ht,a as Qt,b as jt,c as Nt}from"./QLayout-d9e5a7a8.js";import{Q as fe,a as We,b as Ie,c as X}from"./QItemLabel-77d5cdaf.js";import{Q as Ye}from"./QList-8fc69e1f.js";import{Q as Xe}from"./QResizeObserver-8da5703a.js";import{g as Ke,s as Ge}from"./touch-5ff41afe.js";import{c as Rt}from"./selection-a1ce9765.js";import{u as Ft}from"./userAuthStore-92d431b7.js";const Vt=ie({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:u,emit:f}){let w=!1,t,l,o=null,a=null,d,v;function i(){t&&t(),t=null,w=!1,o!==null&&(clearTimeout(o),o=null),a!==null&&(clearTimeout(a),a=null),l!==void 0&&l.removeEventListener("transitionend",d),d=null}function k(c,q,S){q!==void 0&&(c.style.height=`${q}px`),c.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,w=!0,t=S}function h(c,q){c.style.overflowY=null,c.style.height=null,c.style.transition=null,i(),q!==v&&f(q)}function r(c,q){let S=0;l=c,w===!0?(i(),S=c.offsetHeight===c.scrollHeight?0:void 0):(v="hide",c.style.overflowY="hidden"),k(c,S,q),o=setTimeout(()=>{o=null,c.style.height=`${c.scrollHeight}px`,d=B=>{a=null,(Object(B)!==B||B.target===c)&&h(c,"show")},c.addEventListener("transitionend",d),a=setTimeout(d,e.duration*1.1)},100)}function y(c,q){let S;l=c,w===!0?i():(v="show",c.style.overflowY="hidden",S=c.scrollHeight),k(c,S,q),o=setTimeout(()=>{o=null,c.style.height=0,d=B=>{a=null,(Object(B)!==B||B.target===c)&&h(c,"hide")},c.addEventListener("transitionend",d),a=setTimeout(d,e.duration*1.1)},100)}return me(()=>{w===!0&&i()}),()=>_(at,{css:!1,appear:e.appear,onEnter:r,onLeave:y},u.default)}}),ee=_t({}),Ut=Object.keys(lt),Wt=ie({name:"QExpansionItem",props:{...lt,...it,...De,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:{},headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...nt,"click","afterShow","afterHide"],setup(e,{slots:u,emit:f}){const{proxy:{$q:w}}=ge(),t=Me(e,w),l=x(e.modelValue!==null?e.modelValue:e.defaultOpened),o=x(null),a=wt(),{show:d,hide:v,toggle:i}=ot({showing:l});let k,h;const r=m(()=>`q-expansion-item q-item-type q-expansion-item--${l.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),y=m(()=>e.contentInsetLevel===void 0?null:{["padding"+(w.lang.rtl===!0?"Right":"Left")]:e.contentInsetLevel*56+"px"}),c=m(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),q=m(()=>{const b={};return Ut.forEach(L=>{b[L]=e[L]}),b}),S=m(()=>c.value===!0||e.expandIconToggle!==!0),B=m(()=>e.expandedIcon!==void 0&&l.value===!0?e.expandedIcon:e.expandIcon||w.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),U=m(()=>e.disable!==!0&&(c.value===!0||e.expandIconToggle===!0)),K=m(()=>({expanded:l.value===!0,detailsId:a.value,toggle:i,show:d,hide:v})),H=m(()=>{const b=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:w.lang.label[l.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":l.value===!0?"true":"false","aria-controls":a.value,"aria-label":b}});O(()=>e.group,b=>{h!==void 0&&h(),b!==void 0&&Q()});function j(b){c.value!==!0&&i(b),f("click",b)}function R(b){b.keyCode===13&&W(b,!0)}function W(b,L){L!==!0&&o.value!==null&&o.value.focus(),i(b),rt(b)}function M(){f("afterShow")}function P(){f("afterHide")}function Q(){k===void 0&&(k=zt()),l.value===!0&&(ee[e.group]=k);const b=O(l,E=>{E===!0?ee[e.group]=k:ee[e.group]===k&&delete ee[e.group]}),L=O(()=>ee[e.group],(E,Z)=>{Z===k&&E!==void 0&&E!==k&&v()});h=()=>{b(),L(),ee[e.group]===k&&delete ee[e.group],h=void 0}}function z(){const b={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},L=[_(ue,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&l.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:B.value})];return U.value===!0&&(Object.assign(b,{tabindex:0,...H.value,onClick:W,onKeyup:R}),L.unshift(_("div",{ref:o,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),_(Ie,b,()=>L)}function D(){let b;return u.header!==void 0?b=[].concat(u.header(K.value)):(b=[_(Ie,()=>[_(We,{lines:e.labelLines},()=>e.label||""),e.caption?_(We,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&b[e.switchToggleSide===!0?"push":"unshift"](_(Ie,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>_(ue,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&b[e.switchToggleSide===!0?"unshift":"push"](z()),b}function s(){const b={ref:"item",style:e.headerStyle,class:e.headerClass,dark:t.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return S.value===!0&&(b.clickable=!0,b.onClick=j,Object.assign(b,c.value===!0?q.value:H.value)),_(fe,b,D)}function g(){return Y(_("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:y.value,id:a.value},Pe(u.default)),[[le,l.value]])}function C(){const b=[s(),_(Vt,{duration:e.duration,onShow:M,onHide:P},g)];return e.expandSeparator===!0&&b.push(_(He,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:t.value}),_(He,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:t.value})),b}return e.group!==void 0&&Q(),me(()=>{h!==void 0&&h()}),()=>_("div",{class:r.value},[_("div",{class:"q-expansion-item__container relative-position"},C())])}}),Yt=ie({props:["store","barStyle","verticalBarStyle","horizontalBarStyle"],setup(e){return()=>[_("div",{class:e.store.scroll.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:e.store.onVerticalMousedown}),_("div",{class:e.store.scroll.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:e.store.onHorizontalMousedown}),Y(_("div",{ref:e.store.scroll.vertical.ref,class:e.store.scroll.vertical.thumbClass.value,style:e.store.scroll.vertical.style.value,"aria-hidden":"true"}),e.store.thumbVertDir),Y(_("div",{ref:e.store.scroll.horizontal.ref,class:e.store.scroll.horizontal.thumbClass.value,style:e.store.scroll.horizontal.style.value,"aria-hidden":"true"}),e.store.thumbHorizDir)]}});function Oe(e,u,f){const w=Le(e);let t,l=w.left-u.event.x,o=w.top-u.event.y,a=Math.abs(l),d=Math.abs(o);const v=u.direction;v.horizontal===!0&&v.vertical!==!0?t=l<0?"left":"right":v.horizontal!==!0&&v.vertical===!0?t=o<0?"up":"down":v.up===!0&&o<0?(t="up",a>d&&(v.left===!0&&l<0?t="left":v.right===!0&&l>0&&(t="right"))):v.down===!0&&o>0?(t="down",a>d&&(v.left===!0&&l<0?t="left":v.right===!0&&l>0&&(t="right"))):v.left===!0&&l<0?(t="left",a<d&&(v.up===!0&&o<0?t="up":v.down===!0&&o>0&&(t="down"))):v.right===!0&&l>0&&(t="right",a<d&&(v.up===!0&&o<0?t="up":v.down===!0&&o>0&&(t="down")));let i=!1;if(t===void 0&&f===!1){if(u.event.isFirst===!0||u.event.lastDir===void 0)return{};t=u.event.lastDir,i=!0,t==="left"||t==="right"?(w.left-=l,a=0,l=0):(w.top-=o,d=0,o=0)}return{synthetic:i,payload:{evt:e,touch:u.event.mouse!==!0,mouse:u.event.mouse===!0,position:w,direction:t,isFirst:u.event.isFirst,isFinal:f===!0,duration:Date.now()-u.event.time,distance:{x:a,y:d},offset:{x:l,y:o},delta:{x:w.left-u.event.lastX,y:w.top-u.event.lastY}}}}let Xt=0;const ce=kt({name:"touch-pan",beforeMount(e,{value:u,modifiers:f}){if(f.mouse!==!0&&ne.has.touch!==!0)return;function w(l,o){f.mouse===!0&&o===!0?rt(l):(f.stop===!0&&ke(l),f.prevent===!0&&Qe(l))}const t={uid:"qvtp_"+Xt++,handler:u,modifiers:f,direction:Ke(f),noop:qt,mouseStart(l){Ge(l,t)&&pt(l)&&(ve(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Ge(l,t)){const o=l.target;ve(t,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,o){if(ne.is.firefox===!0&&ze(e,!0),t.lastEvt=l,o===!0||f.stop===!0){if(t.direction.all!==!0&&(o!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const v=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Qe(v),l.cancelBubble===!0&&ke(v),Object.assign(v,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:v}}ke(l)}const{left:a,top:d}=Le(l);t.event={x:a,y:d,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:d}},move(l){if(t.event===void 0)return;const o=Le(l),a=o.left-t.event.x,d=o.top-t.event.y;if(a===0&&d===0)return;t.lastEvt=l;const v=t.event.mouse===!0,i=()=>{w(l,v);let r;f.preserveCursor!==!0&&f.preservecursor!==!0&&(r=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),v===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Rt(),t.styleCleanup=y=>{if(t.styleCleanup=void 0,r!==void 0&&(document.documentElement.style.cursor=r),document.body.classList.remove("non-selectable"),v===!0){const c=()=>{document.body.classList.remove("no-pointer-events--children")};y!==void 0?setTimeout(()=>{c(),y()},50):c()}else y!==void 0&&y()}};if(t.event.detected===!0){t.event.isFirst!==!0&&w(l,t.event.mouse);const{payload:r,synthetic:y}=Oe(l,t,!1);r!==void 0&&(t.handler(r)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=r.position.left,t.event.lastY=r.position.top,t.event.lastDir=y===!0?void 0:r.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||v===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(l);return}const k=Math.abs(a),h=Math.abs(d);k!==h&&(t.direction.horizontal===!0&&k>h||t.direction.vertical===!0&&k<h||t.direction.up===!0&&k<h&&d<0||t.direction.down===!0&&k<h&&d>0||t.direction.left===!0&&k>h&&a<0||t.direction.right===!0&&k>h&&a>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,o){if(t.event!==void 0){if(qe(t,"temp"),ne.is.firefox===!0&&ze(e,!1),o===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Oe(l===void 0?t.lastEvt:l,t).payload);const{payload:a}=Oe(l===void 0?t.lastEvt:l,t,!0),d=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,f.mouse===!0){const l=f.mouseCapture===!0||f.mousecapture===!0?"Capture":"";ve(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}ne.has.touch===!0&&ve(t,"main",[[e,"touchstart","touchStart",`passive${f.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,u){const f=e.__qtouchpan;f!==void 0&&(u.oldValue!==u.value&&(typeof value!="function"&&f.end(),f.handler=u.value),f.direction=Ke(u.modifiers))},beforeUnmount(e){const u=e.__qtouchpan;u!==void 0&&(u.event!==void 0&&u.end(),qe(u,"main"),qe(u,"temp"),ne.is.firefox===!0&&ze(e,!1),u.styleCleanup!==void 0&&u.styleCleanup(),delete e.__qtouchpan)}}),Je=["vertical","horizontal"],Be={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ze={prevent:!0,mouse:!0,mouseAllDir:!0},et=e=>e>=250?50:Math.ceil(e/5),Kt=ie({name:"QScrollArea",props:{...De,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],verticalOffset:{type:Array,default:[0,0]},horizontalOffset:{type:Array,default:[0,0]},contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:u,emit:f}){const w=x(!1),t=x(!1),l=x(!1),o={vertical:x(0),horizontal:x(0)},a={vertical:{ref:x(null),position:x(0),size:x(0)},horizontal:{ref:x(null),position:x(0),size:x(0)}},{proxy:d}=ge(),v=Me(e,d.$q);let i=null,k;const h=x(null),r=m(()=>"q-scrollarea"+(v.value===!0?" q-scrollarea--dark":""));Object.assign(o,{verticalInner:m(()=>o.vertical.value-e.verticalOffset[0]-e.verticalOffset[1]),horizontalInner:m(()=>o.horizontal.value-e.horizontalOffset[0]-e.horizontalOffset[1])}),a.vertical.percentage=m(()=>{const s=a.vertical.size.value-o.vertical.value;if(s<=0)return 0;const g=X(a.vertical.position.value/s,0,1);return Math.round(g*1e4)/1e4}),a.vertical.thumbHidden=m(()=>(e.visible===null?l.value:e.visible)!==!0&&w.value===!1&&t.value===!1||a.vertical.size.value<=o.vertical.value+1),a.vertical.thumbStart=m(()=>e.verticalOffset[0]+a.vertical.percentage.value*(o.verticalInner.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=m(()=>Math.round(X(o.verticalInner.value*o.verticalInner.value/a.vertical.size.value,et(o.verticalInner.value),o.verticalInner.value))),a.vertical.style=m(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`,right:`${e.horizontalOffset[1]}px`})),a.vertical.thumbClass=m(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=m(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=m(()=>{const s=a.horizontal.size.value-o.horizontal.value;if(s<=0)return 0;const g=X(Math.abs(a.horizontal.position.value)/s,0,1);return Math.round(g*1e4)/1e4}),a.horizontal.thumbHidden=m(()=>(e.visible===null?l.value:e.visible)!==!0&&w.value===!1&&t.value===!1||a.horizontal.size.value<=o.horizontal.value+1),a.horizontal.thumbStart=m(()=>e.horizontalOffset[0]+a.horizontal.percentage.value*(o.horizontalInner.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=m(()=>Math.round(X(o.horizontalInner.value*o.horizontalInner.value/a.horizontal.size.value,et(o.horizontalInner.value),o.horizontalInner.value))),a.horizontal.style=m(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[d.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`,bottom:`${e.verticalOffset[1]}px`})),a.horizontal.thumbClass=m(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=m(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const y=m(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle);function c(){const s={};return Je.forEach(g=>{const C=a[g];Object.assign(s,{[g+"Position"]:C.position.value,[g+"Percentage"]:C.percentage.value,[g+"Size"]:C.size.value,[g+"ContainerSize"]:o[g].value,[g+"ContainerInnerSize"]:o[g+"Inner"].value})}),s}const q=Ct(()=>{const s=c();s.ref=d,f("scroll",s)},0);function S(s,g,C){if(Je.includes(s)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(s==="vertical"?je:pe)(h.value,g,C)}function B({height:s,width:g}){let C=!1;o.vertical.value!==s&&(o.vertical.value=s,C=!0),o.horizontal.value!==g&&(o.horizontal.value=g,C=!0),C===!0&&R()}function U({position:s}){let g=!1;a.vertical.position.value!==s.top&&(a.vertical.position.value=s.top,g=!0),a.horizontal.position.value!==s.left&&(a.horizontal.position.value=s.left,g=!0),g===!0&&R()}function K({height:s,width:g}){a.horizontal.size.value!==g&&(a.horizontal.size.value=g,R()),a.vertical.size.value!==s&&(a.vertical.size.value=s,R())}function H(s,g){const C=a[g];if(s.isFirst===!0){if(C.thumbHidden.value===!0)return;k=C.position.value,t.value=!0}else if(t.value!==!0)return;s.isFinal===!0&&(t.value=!1);const b=Be[g],L=(C.size.value-o[g].value)/(o[g+"Inner"].value-C.thumbSize.value),E=s.distance[b.dist],Z=k+(s.direction===b.dir?1:-1)*E*L;W(Z,g)}function j(s,g){const C=a[g];if(C.thumbHidden.value!==!0){const b=g==="vertical"?e.verticalOffset[0]:e.horizontalOffset[0],L=s[Be[g].offset]-b,E=C.thumbStart.value-b;if(L<E||L>E+C.thumbSize.value){const Z=L-C.thumbSize.value/2,be=X(Z/(o[g+"Inner"].value-C.thumbSize.value),0,1);W(be*Math.max(0,C.size.value-o[g].value),g)}C.ref.value!==null&&C.ref.value.dispatchEvent(new MouseEvent(s.type,s))}}function R(){w.value=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,w.value=!1},e.delay),e.onScroll!==void 0&&q()}function W(s,g){h.value[Be[g].scroll]=s}let M=null;function P(){M!==null&&clearTimeout(M),M=setTimeout(()=>{M=null,l.value=!0},d.$q.platform.is.ios?50:0)}function Q(){M!==null&&(clearTimeout(M),M=null),l.value=!1}let z=null;O(()=>d.$q.lang.rtl,s=>{h.value!==null&&pe(h.value,Math.abs(a.horizontal.position.value)*(s===!0?-1:1))}),xt(()=>{z={top:a.vertical.position.value,left:a.horizontal.position.value}}),Tt(()=>{if(z===null)return;const s=h.value;s!==null&&(pe(s,z.left),je(s,z.top))}),me(q.cancel),Object.assign(d,{getScrollTarget:()=>h.value,getScroll:c,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:S,setScrollPercentage(s,g,C){S(s,g*(a[s].size.value-o[s].value)*(s==="horizontal"&&d.$q.lang.rtl===!0?-1:1),C)}});const D={scroll:a,thumbVertDir:[[ce,s=>{H(s,"vertical")},void 0,{vertical:!0,...Ze}]],thumbHorizDir:[[ce,s=>{H(s,"horizontal")},void 0,{horizontal:!0,...Ze}]],onVerticalMousedown(s){j(s,"vertical")},onHorizontalMousedown(s){j(s,"horizontal")}};return()=>_("div",{class:r.value,onMouseenter:P,onMouseleave:Q},[_("div",{ref:h,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[_("div",{class:"q-scrollarea__content absolute",style:y.value},It(u.default,[_(Xe,{debounce:0,onResize:K})])),_(At,{axis:"both",onScroll:U})]),_(Xe,{debounce:0,onResize:B}),_(Yt,{store:D,barStyle:e.barStyle,verticalBarStyle:e.verticalBarStyle,horizontalBarStyle:e.horizontalBarStyle})])}}),Gt={ratio:[String,Number]};function Jt(e,u){return m(()=>{const f=Number(e.ratio||(u!==void 0?u.value:void 0));return isNaN(f)!==!0&&f>0?{paddingBottom:`${100/f}%`}:null})}const Zt=1.7778,ea=ie({name:"QImg",props:{...Gt,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Zt},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:u,emit:f}){const w=x(e.initialRatio),t=Jt(e,w),l=ge(),{registerTimeout:o,removeTimeout:a}=$e(),{registerTimeout:d,removeTimeout:v}=$e(),i=m(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),k=m(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),h=[x(null),x(i.value)],r=x(0),y=x(!1),c=x(!1),q=m(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),S=m(()=>({width:e.width,height:e.height})),B=m(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),U=m(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function K(){if(v(),e.loadingShowDelay===0){y.value=!0;return}d(()=>{y.value=!0},e.loadingShowDelay)}function H(){v(),y.value=!1}function j({target:z}){Ce(l)===!1&&(a(),w.value=z.naturalHeight===0?.5:z.naturalWidth/z.naturalHeight,R(z,1))}function R(z,D){D===1e3||Ce(l)===!0||(z.complete===!0?W(z):o(()=>{R(z,D+1)},50))}function W(z){Ce(l)!==!0&&(r.value=r.value^1,h[r.value].value=null,H(),z.getAttribute("__qerror")!=="true"&&(c.value=!1),f("load",z.currentSrc||z.src))}function M(z){a(),H(),c.value=!0,h[r.value].value=k.value,h[r.value^1].value=i.value,f("error",z)}function P(z){const D=h[z].value,s={key:"img_"+z,class:B.value,style:U.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...D};return r.value===z?Object.assign(s,{class:s.class+"current",onLoad:j,onError:M}):s.class+="loaded",_("div",{class:"q-img__container absolute-full",key:"img"+z},_("img",s))}function Q(){return y.value===!1?_("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},Pe(u[c.value===!0?"error":"default"])):_("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},u.loading!==void 0?u.loading():e.noSpinner===!0?void 0:[_(Bt,{color:e.spinnerColor,size:e.spinnerSize})])}{let z=function(){O(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,D=>{a(),c.value=!1,D===null?(H(),h[r.value^1].value=i.value):K(),h[r.value].value=D},{immediate:!0})};Ot.value===!0?he(z):z()}return()=>{const z=[];return t.value!==null&&z.push(_("div",{key:"filler",style:t.value})),h[0].value!==null&&z.push(P(0)),h[1].value!==null&&z.push(P(1)),z.push(_(at,{name:"q-transition--fade"},Q)),_("div",{key:"main",class:q.value,style:S.value,role:"img","aria-label":e.alt},z)}}}),tt=150,ta=ie({name:"QDrawer",inheritAttrs:!1,props:{...it,...De,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...nt,"onLayout","miniState"],setup(e,{slots:u,emit:f,attrs:w}){const t=ge(),{proxy:{$q:l}}=t,o=Me(e,l),{preventBodyScroll:a}=Mt(),{registerTimeout:d,removeTimeout:v}=$e(),i=Lt($t,xe);if(i===xe)return console.error("QDrawer needs to be child of QLayout"),xe;let k,h=null,r;const y=x(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),c=m(()=>e.mini===!0&&y.value!==!0),q=m(()=>c.value===!0?e.miniWidth:e.width),S=x(e.showIfAbove===!0&&y.value===!1?!0:e.modelValue===!0),B=m(()=>e.persistent!==!0&&(y.value===!0||Z.value===!0));function U(n,p){if(R(),n!==!1&&i.animate(),N(0),y.value===!0){const A=i.instances[C.value];A!==void 0&&A.belowBreakpoint===!0&&A.hide(!1),G(1),i.isContainer.value!==!0&&a(!0)}else G(0),n!==!1&&Se(!1);d(()=>{n!==!1&&Se(!0),p!==!0&&f("show",n)},tt)}function K(n,p){W(),n!==!1&&i.animate(),G(0),N(Q.value*q.value),_e(),p!==!0?d(()=>{f("hide",n)},tt):v()}const{show:H,hide:j}=ot({showing:S,hideOnRouteChange:B,handleShow:U,handleHide:K}),{addToHistory:R,removeFromHistory:W}=Dt(S,j,B),M={belowBreakpoint:y,hide:j},P=m(()=>e.side==="right"),Q=m(()=>(l.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),z=x(0),D=x(!1),s=x(!1),g=x(q.value*Q.value),C=m(()=>P.value===!0?"left":"right"),b=m(()=>S.value===!0&&y.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),L=m(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(P.value?"R":"L")!==-1||l.platform.is.ios===!0&&i.isContainer.value===!0),E=m(()=>e.overlay===!1&&S.value===!0&&y.value===!1),Z=m(()=>e.overlay===!0&&S.value===!0&&y.value===!1),be=m(()=>"fullscreen q-drawer__backdrop"+(S.value===!1&&D.value===!1?" hidden":"")),st=m(()=>({backgroundColor:`rgba(0,0,0,${z.value*.4})`})),Ee=m(()=>P.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),ut=m(()=>P.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),ct=m(()=>{const n={};return i.header.space===!0&&Ee.value===!1&&(L.value===!0?n.top=`${i.header.offset}px`:i.header.space===!0&&(n.top=`${i.header.size}px`)),i.footer.space===!0&&ut.value===!1&&(L.value===!0?n.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(n.bottom=`${i.footer.size}px`)),n}),dt=m(()=>{const n={width:`${q.value}px`,transform:`translateX(${g.value}px)`};return y.value===!0?n:Object.assign(n,ct.value)}),vt=m(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),ft=m(()=>`q-drawer q-drawer--${e.side}`+(s.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(o.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":S.value===!0?"":" q-layout--prevent-focus")+(y.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${c.value===!0?"mini":"standard"}`+(L.value===!0||E.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Ee.value===!0?" q-drawer--top-padding":""))),ht=m(()=>{const n=l.lang.rtl===!0?e.side:C.value;return[[ce,yt,void 0,{[n]:!0,mouse:!0}]]}),mt=m(()=>{const n=l.lang.rtl===!0?C.value:e.side;return[[ce,Ae,void 0,{[n]:!0,mouse:!0}]]}),gt=m(()=>{const n=l.lang.rtl===!0?C.value:e.side;return[[ce,Ae,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function ye(){St(y,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}O(y,n=>{n===!0?(k=S.value,S.value===!0&&j(!1)):e.overlay===!1&&e.behavior!=="mobile"&&k!==!1&&(S.value===!0?(N(0),G(0),_e()):H(!1))}),O(()=>e.side,(n,p)=>{i.instances[p]===M&&(i.instances[p]=void 0,i[p].space=!1,i[p].offset=0),i.instances[n]=M,i[n].size=q.value,i[n].space=E.value,i[n].offset=b.value}),O(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ye()}),O(()=>e.behavior+e.breakpoint,ye),O(i.isContainer,n=>{S.value===!0&&a(n!==!0),n===!0&&ye()}),O(i.scrollbarWidth,()=>{N(S.value===!0?0:void 0)}),O(b,n=>{J("offset",n)}),O(E,n=>{f("onLayout",n),J("space",n)}),O(P,()=>{N()}),O(q,n=>{N(),we(e.miniToOverlay,n)}),O(()=>e.miniToOverlay,n=>{we(n,q.value)}),O(()=>l.lang.rtl,()=>{N()}),O(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(bt(),i.animate())}),O(c,n=>{f("miniState",n)});function N(n){n===void 0?Ne(()=>{n=S.value===!0?0:q.value,N(Q.value*n)}):(i.isContainer.value===!0&&P.value===!0&&(y.value===!0||Math.abs(n)===q.value)&&(n+=Q.value*i.scrollbarWidth.value),g.value=n)}function G(n){z.value=n}function Se(n){const p=n===!0?"remove":i.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function bt(){h!==null&&clearTimeout(h),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),s.value=!0,h=setTimeout(()=>{h=null,s.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function yt(n){if(S.value!==!1)return;const p=q.value,A=X(n.distance.x,0,p);if(n.isFinal===!0){A>=Math.min(75,p)===!0?H():(i.animate(),G(0),N(Q.value*p)),D.value=!1;return}N((l.lang.rtl===!0?P.value!==!0:P.value)?Math.max(p-A,0):Math.min(0,A-p)),G(X(A/p,0,1)),n.isFirst===!0&&(D.value=!0)}function Ae(n){if(S.value!==!0)return;const p=q.value,A=n.direction===e.side,de=(l.lang.rtl===!0?A!==!0:A)?X(n.distance.x,0,p):0;if(n.isFinal===!0){Math.abs(de)<Math.min(75,p)===!0?(i.animate(),G(1),N(0)):j(),D.value=!1;return}N(Q.value*de),G(X(1-de/p,0,1)),n.isFirst===!0&&(D.value=!0)}function _e(){a(!1),Se(!0)}function J(n,p){i.update(e.side,n,p)}function St(n,p){n.value!==p&&(n.value=p)}function we(n,p){J("size",n===!0?e.miniWidth:p)}return i.instances[e.side]=M,we(e.miniToOverlay,q.value),J("space",E.value),J("offset",b.value),e.showIfAbove===!0&&e.modelValue!==!0&&S.value===!0&&e["onUpdate:modelValue"]!==void 0&&f("update:modelValue",!0),he(()=>{f("onLayout",E.value),f("miniState",c.value),k=e.showIfAbove===!0;const n=()=>{(S.value===!0?U:K)(!1,!0)};if(i.totalWidth.value!==0){Ne(n);return}r=O(i.totalWidth,()=>{r(),r=void 0,S.value===!1&&e.showIfAbove===!0&&y.value===!1?H(!1):n()})}),me(()=>{r!==void 0&&r(),h!==null&&(clearTimeout(h),h=null),S.value===!0&&_e(),i.instances[e.side]===M&&(i.instances[e.side]=void 0,J("size",0),J("offset",0),J("space",!1))}),()=>{const n=[];y.value===!0&&(e.noSwipeOpen===!1&&n.push(Y(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ht.value)),n.push(Re("div",{ref:"backdrop",class:be.value,style:st.value,"aria-hidden":"true",onClick:j},void 0,"backdrop",e.noSwipeBackdrop!==!0&&S.value===!0,()=>gt.value)));const p=c.value===!0&&u.mini!==void 0,A=[_("div",{...w,key:""+p,class:[vt.value,w.class]},p===!0?u.mini():Pe(u.default))];return e.elevated===!0&&S.value===!0&&A.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(Re("aside",{ref:"content",class:ft.value,style:dt.value},A,"contentclose",e.noSwipeClose!==!0&&y.value===!0,()=>mt.value)),_("div",{class:"q-drawer-container"},n)}}});const aa={class:"w-full flex justify-between md:hidden"},la={class:"flex gap-1 items-center"},ia={class:"hide-md-screen"},na=I("span",{class:"show-md-screen"}," Links ",-1),oa={class:"hide-md-screen"},ra=I("span",{class:"show-md-screen"}," Profile Details ",-1),sa={class:"hide-md-screen"},ua=I("span",{class:"show-md-screen"}," Preview ",-1),ca={key:0,class:"q-pa-none border-bottom-1"},da={style:{"padding-left":"8px"}},va={class:"absolute-bottom bg-transparent"},fa={class:"flex justify-between items-center"},ha=I("div",{class:"text-weight-bold"},"Menus",-1),ma=I("div",null,"Developed By Minhaj Sordar",-1),ga=[ha,ma],ba={class:"q-mini-drawer-hide"},xa={__name:"Dashboard",setup(e){const u=Ft();he(()=>{u.getUserDataFromSessionStorage()}),Pt();const f=x(!1),w=x(!0),t=[{title:"Dashboard",icon:"user",link:"/admin",permissionSlug:"viewDashboard"},{title:"User",icon:"person",sub:[{title:"Create User",link:"/admin/user/user_list/create",permissionSlug:"createUser"},{title:"User list",link:"/admin/user/user_list",permissionSlug:"viewUser"},{title:"Create Role",link:"/admin/role/role_list/create",permissionSlug:"createRole"},{title:"Role list",link:"/admin/role/role_list",permissionSlug:"viewRole"}]},{title:"User links",icon:"link",sub:[{title:"Create User link list",link:"/admin/user_links/user_link_list/create",permissionSlug:"createUserLinks"},{title:"User link list",link:"/admin/user_links/user_link_list",permissionSlug:"viewUserLinks"}]}];function l(d){f.value&&(f.value=!1,d.stopPropagation())}function o(d){var i,k,h,r,y;let v=!1;if(d.sub||(k=(i=u==null?void 0:u.userData)==null?void 0:i.permissions)!=null&&k.includes(`${d==null?void 0:d.permissionSlug}`)&&(v=!0),d.sub)for(let c=0;c<d.sub.length;c++)(y=(h=u==null?void 0:u.userData)==null?void 0:h.permissions)!=null&&y.includes(`${(r=d.sub[c])==null?void 0:r.permissionSlug}`)&&(v=!0);return v}function a(d){var i,k;let v=!1;return d&&(k=(i=u==null?void 0:u.userData)==null?void 0:i.permissions)!=null&&k.includes(`${d==null?void 0:d.permissionSlug}`)&&(v=!0),v}return he(()=>{u.getUserDataFromSessionStorage()}),(d,v)=>{const i=Fe("router-link"),k=Fe("router-view");return F(),oe(Ht,{view:"hHh Lpr lff",container:"",style:{height:"100vh"},class:"shadow-2"},{default:$(()=>[T(jt,{class:"bg-white text-primary",elevated:""},{default:$(()=>[T(Qt,null,{default:$(()=>{var h,r,y,c,q,S,B;return[T(V,{flat:"",onClick:v[0]||(v[0]=U=>w.value=!w.value),round:"",dense:"",icon:"menu"}),I("div",aa,[I("div",la,[I("div",null,[T(V,{to:"/",flat:"",icon:"link",dense:"",class:"text-white bg-primary rounded-md"})]),T(i,{to:"/",class:"show-md-screen text-black font-bold text-h6"},{default:$(()=>[Et(" Devlinks ")]),_:1})]),I("div",null,[T(V,{class:Te((h=d.$route.query)!=null&&h.t&&((r=d.$route.query)==null?void 0:r.t)=="profile-details"?"":"!bg-violet-200"),to:"/myprofile/"+((y=re(u).userData)==null?void 0:y.userName),flat:"","no-caps":""},{default:$(()=>[I("span",ia,[T(ue,{name:"link"})]),na]),_:1},8,["class","to"]),T(V,{class:Te((c=d.$route.query)!=null&&c.t&&((q=d.$route.query)==null?void 0:q.t)=="profile-details"?"!bg-violet-200":""),to:"/myprofile/"+((S=re(u).userData)==null?void 0:S.userName)+"?t=profile-details",flat:"","no-caps":""},{default:$(()=>[I("span",oa,[T(ue,{name:"account_circle"})]),ra]),_:1},8,["class","to"])]),I("div",null,[T(V,{to:"/profile/"+((B=re(u).userData)==null?void 0:B.userName),outline:""},{default:$(()=>[I("span",sa,[T(ue,{name:"visibility"})]),ua]),_:1},8,["to"])])])]}),_:1})]),_:1}),T(ta,{modelValue:w.value,"onUpdate:modelValue":v[3]||(v[3]=h=>w.value=h),"show-if-above":"",mini:!w.value||f.value,onClickCapture:l,width:265,breakpoint:500,bordered:"",class:Te(d.$q.dark.isActive?"bg-grey-9":"bg-grey-3")},{default:$(()=>[T(Kt,{"horizontal-thumb-style":{opacity:0},style:{height:"calc(100% - 68px)","margin-top":"68px","border-right":"1px solid #ddd"}},{default:$(()=>[T(Ye,{bordered:!1},{default:$(()=>{var h;return[(F(),te(se,null,Ve(t,(r,y)=>(F(),te(se,{key:y},[o(r)?(F(),te(se,{key:0},[r!=null&&r.content?(F(),te("div",ca,[Y(I("span",{style:{"padding-left":"18px"}},Ue(r.content),513),[[le,!f.value]])])):ae("",!0),!(r!=null&&r.sub)&&!(r!=null&&r.content)?(F(),oe(fe,{key:1,class:"q-pa-none border-bottom-1"},{default:$(()=>[T(V,{icon:r.icon,flat:"",to:(r==null?void 0:r.link)||"#",class:"full-width text-weight-bold",align:"left","no-caps":""},{default:$(()=>[Y(I("span",{style:{"padding-left":"8px"}},Ue(r.title),513),[[le,!f.value]])]),_:2},1032,["icon","to"])]),_:2},1024)):ae("",!0),r!=null&&r.sub&&!(r!=null&&r.content)?(F(),oe(Wt,{key:2,class:"border-bottom-1 text-weight-bold",group:"somegroup","expand-separator":"",icon:r==null?void 0:r.icon,label:r==null?void 0:r.title},{default:$(()=>[T(Ye,{bordered:!1,class:"border-top-1"},{default:$(()=>[(F(!0),te(se,null,Ve(r.sub,(c,q)=>(F(),te(se,{key:String(y)+String(q)},[a(c)?(F(),oe(fe,{key:0,class:"q-pa-none border-bottom-1"},{default:$(()=>[T(V,{flat:"",to:(c==null?void 0:c.link)||"#",label:c==null?void 0:c.title,class:"full-width text-weight-regular",align:"left","no-caps":"",style:{"padding-left":"48px"}},null,8,["to","label"])]),_:2},1024)):ae("",!0)],64))),128))]),_:2},1024)]),_:2},1032,["icon","label"])):ae("",!0)],64)):ae("",!0)],64))),64)),(h=re(u))!=null&&h.userData?(F(),oe(fe,{key:0,class:"q-pa-none border-bottom-1"},{default:$(()=>[T(V,{flat:"",class:"full-width text-weight-bold",align:"left","no-caps":"",icon:"logout",onClick:re(u).signOut},{default:$(()=>[Y(I("span",da,"Sign out",512),[[le,!f.value]])]),_:1},8,["onClick"])]),_:1})):ae("",!0)]}),_:1})]),_:1}),T(ea,{class:"absolute-top",src:"https://cdn.quasar.dev/img/material.png",style:{height:"68px"}},{default:$(()=>[I("div",va,[I("div",fa,[Y(I("div",null,ga,512),[[le,!f.value]]),Y(I("div",null,[T(V,{dense:"",round:"",unelevated:"",color:"transparent",icon:"keyboard_double_arrow_right",onClick:v[1]||(v[1]=h=>f.value=!0)})],512),[[le,f.value]]),I("div",ba,[T(V,{dense:"",round:"",unelevated:"",color:"transparent",icon:"keyboard_double_arrow_left",onClick:v[2]||(v[2]=h=>f.value=!0)})])])])]),_:1})]),_:1},8,["modelValue","mini","class"]),T(Nt,null,{default:$(()=>[T(k)]),_:1})]),_:1})}}};export{xa as default};
