import{B as n,W as d,j as u,X as i,l as t,q as c,I as g}from"./index-50a4d5a2.js";const q=["ul","ol"],p=n({name:"QList",props:{...d,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const s=u(),r=i(e,s.proxy.$q),o=t(()=>q.includes(e.tag)?null:"list"),l=t(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>c(e.tag,{class:l.value,role:o.value},g(a.default))}});export{p as Q};
