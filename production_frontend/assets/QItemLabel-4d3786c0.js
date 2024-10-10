import{B as v,W as L,ae as S,j as E,X as Q,d4 as K,k as b,l as u,q as c,v as $,s as R,av as j,I as k}from"./index-4107f029.js";const q=["B","KB","MB","GB","TB","PB"];function P(e,t=1){let a=0;for(;parseInt(e,10)>=1024&&a<q.length-1;)e/=1024,++a;return`${e.toFixed(t)}${q[a]}`}function T(e,t,a){return a<=t?t:Math.min(a,Math.max(t,e))}function z(e,t,a){if(a<=t)return t;const i=a-t+1;let l=t+(e-t)%i;return l<t&&(l=i+l),l===0?0:l}const A=v({name:"QItem",props:{...L,...S,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:a}){const{proxy:{$q:i}}=E(),l=Q(e,i),{hasLink:d,linkAttrs:h,linkClass:B,linkTag:_,navigateOnClick:g}=K(),o=b(null),r=b(null),m=u(()=>e.clickable===!0||d.value===!0||e.tag==="label"),s=u(()=>e.disable!==!0&&m.value===!0),y=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?B.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(s.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),x=u(()=>e.insetLevel===void 0?null:{["padding"+(i.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function I(n){s.value===!0&&(r.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===o.value?r.value.focus():document.activeElement===r.value&&o.value.focus()),g(n))}function w(n){if(s.value===!0&&$(n,[13,32])===!0){R(n),n.qKeyEvent=!0;const f=new MouseEvent("click",n);f.qKeyEvent=!0,o.value.dispatchEvent(f)}a("keyup",n)}function C(){const n=j(t.default,[]);return s.value===!0&&n.unshift(c("div",{class:"q-focus-helper",tabindex:-1,ref:r})),n}return()=>{const n={ref:o,class:y.value,style:x.value,role:"listitem",onClick:I,onKeyup:w};return s.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,h.value)):m.value===!0&&(n["aria-disabled"]="true"),c(_.value,n,C())}}}),D=v({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const a=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>c("div",{class:a.value},k(t.default))}}),F=v({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const a=u(()=>parseInt(e.lines,10)),i=u(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),l=u(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>c("div",{style:l.value,class:i.value},k(t.default))}});export{A as Q,F as a,D as b,T as c,P as h,z as n};
