import{a as M}from"./QSelect-a2f6a9be.js";import{j as L,k as E,l as c,am as W,s as Q,K as X,q as h,B as Y,aH as H,aI as J,aJ as G,aK as Z,aL as ee,aM as te,aN as K,aO as le,aP as ne,al as ae}from"./index-50a4d5a2.js";import{h as ie}from"./QItemLabel-fc8ef9d1.js";function y(e,f,x,F){const u=[];return e.forEach(s=>{F(s)===!0?u.push(s):f.push({failedPropValidation:x,file:s})}),u}function A(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),Q(e)}const ue={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},re=["rejected"];function se({editable:e,dnd:f,getFileInput:x,addFilesToQueue:F}){const{props:u,emit:s,proxy:p}=L(),b=E(null),z=c(()=>u.accept!==void 0?u.accept.split(",").map(t=>(t=t.trim(),t==="*"?"*/":(t.endsWith("/*")&&(t=t.slice(0,t.length-1)),t.toUpperCase()))):null),V=c(()=>parseInt(u.maxFiles,10)),N=c(()=>parseInt(u.maxTotalSize,10));function j(t){if(e.value)if(t!==Object(t)&&(t={target:null}),t.target!==null&&t.target.matches('input[type="file"]')===!0)t.clientX===0&&t.clientY===0&&W(t);else{const m=x();m&&m!==t.target&&m.click(t)}}function _(t){e.value&&t&&F(null,t)}function D(t,m,S,C){let n=Array.from(m||t.target.files);const d=[],g=()=>{d.length!==0&&s("rejected",d)};if(u.accept!==void 0&&z.value.indexOf("*/")===-1&&(n=y(n,d,"accept",a=>z.value.some(r=>a.type.toUpperCase().startsWith(r)||a.name.toUpperCase().endsWith(r))),n.length===0))return g();if(u.maxFileSize!==void 0){const a=parseInt(u.maxFileSize,10);if(n=y(n,d,"max-file-size",r=>r.size<=a),n.length===0)return g()}if(u.multiple!==!0&&n.length!==0&&(n=[n[0]]),n.forEach(a=>{a.__key=a.webkitRelativePath+a.lastModified+a.name+a.size}),C===!0){const a=S.map(r=>r.__key);n=y(n,d,"duplicate",r=>a.includes(r.__key)===!1)}if(n.length===0)return g();if(u.maxTotalSize!==void 0){let a=C===!0?S.reduce((r,T)=>r+T.size,0):0;if(n=y(n,d,"max-total-size",r=>(a+=r.size,a<=N.value)),n.length===0)return g()}if(typeof u.filter=="function"){const a=u.filter(n);n=y(n,d,"filter",r=>a.includes(r))}if(u.maxFiles!==void 0){let a=C===!0?S.length:0;if(n=y(n,d,"max-files",()=>(a++,a<=V.value)),n.length===0)return g()}if(g(),n.length!==0)return n}function I(t){A(t),f.value!==!0&&(f.value=!0)}function i(t){Q(t),(t.relatedTarget!==null||X.is.safari!==!0?t.relatedTarget!==b.value:document.elementsFromPoint(t.clientX,t.clientY).includes(b.value)===!1)===!0&&(f.value=!1)}function P(t){A(t);const m=t.dataTransfer.files;m.length!==0&&F(null,m),f.value=!1}function O(t){if(f.value===!0)return h("div",{ref:b,class:`q-${t}__dnd absolute-full`,onDragenter:A,onDragover:A,onDragleave:i,onDrop:P})}return Object.assign(p,{pickFiles:j,addFiles:_}),{pickFiles:j,addFiles:_,onDragover:I,onDragleave:i,processFiles:D,getDndNode:O,maxFilesNumber:V,maxTotalSizeNumber:N}}const de=Y({name:"QFile",inheritAttrs:!1,props:{...H,...J,...ue,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...G,...re],setup(e,{slots:f,emit:x,attrs:F}){const{proxy:u}=L(),s=Z(),p=E(null),b=E(!1),z=ee(e),{pickFiles:V,onDragover:N,onDragleave:j,processFiles:_,getDndNode:D}=se({editable:s.editable,dnd:b,getFileInput:R,addFilesToQueue:B}),I=te(e),i=c(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),P=c(()=>K(i.value)),O=c(()=>i.value.map(l=>l.name).join(", ")),t=c(()=>ie(i.value.reduce((l,o)=>l+o.size,0))),m=c(()=>({totalSize:t.value,filesNumber:i.value.length,maxFiles:e.maxFiles})),S=c(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:z.value,...F,id:s.targetUid.value,disabled:s.editable.value!==!0})),C=c(()=>"q-file q-field--auto-height"+(b.value===!0?" q-file--dnd":"")),n=c(()=>e.multiple===!0&&e.append===!0);function d(l){const o=i.value.slice();o.splice(l,1),a(o)}function g(l){const o=i.value.indexOf(l);o!==-1&&d(o)}function a(l){x("update:modelValue",e.multiple===!0?l:l[0])}function r(l){l.keyCode===13&&ae(l)}function T(l){(l.keyCode===13||l.keyCode===32)&&V(l)}function R(){return p.value}function B(l,o){const v=_(l,o,i.value,n.value),q=R();q!=null&&(q.value=""),v!==void 0&&((e.multiple===!0?e.modelValue&&v.every(w=>i.value.includes(w)):e.modelValue===v[0])||a(n.value===!0?i.value.concat(v):v))}function k(){return[h("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function U(){if(f.file!==void 0)return i.value.length===0?k():i.value.map((o,v)=>f.file({index:v,file:o,ref:this}));if(f.selected!==void 0)return i.value.length===0?k():f.selected({files:i.value,ref:this});if(e.useChips===!0)return i.value.length===0?k():i.value.map((o,v)=>h(M,{key:"file-"+v,removable:s.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{d(v)}},()=>h("span",{class:"ellipsis",textContent:o.name})));const l=e.displayValue!==void 0?e.displayValue:O.value;return l.length!==0?[h("div",{class:e.inputClass,style:e.inputStyle,textContent:l})]:k()}function $(){const l={ref:p,...S.value,...I.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:B};return e.multiple===!0&&(l.multiple=!0),h("input",l)}return Object.assign(s,{fieldClass:C,emitValue:a,hasValue:P,inputRef:p,innerValue:i,floatingLabel:c(()=>P.value===!0||K(e.displayValue)),computedCounter:c(()=>{if(e.counterLabel!==void 0)return e.counterLabel(m.value);const l=e.maxFiles;return`${i.value.length}${l!==void 0?" / "+l:""} (${t.value})`}),getControlChild:()=>D("file"),getControl:()=>{const l={ref:s.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return s.editable.value===!0&&Object.assign(l,{onDragover:N,onDragleave:j,onKeydown:r,onKeyup:T}),h("div",l,[$()].concat(U()))}}),Object.assign(u,{removeAtIndex:d,removeFile:g,getNativeElement:()=>p.value}),le(u,"nativeEl",()=>p.value),ne(s)}});export{de as Q};
