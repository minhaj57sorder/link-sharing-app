import{d6 as g,k as l,Z as m}from"./index-97890c42.js";const S=function(e,s){localStorage.setItem(`${e}`,s)},k=function(e){const s=localStorage.getItem(e);if(s)return s},f=function(e){localStorage.removeItem(e)},p=g("user auth store",()=>{const e=l(null),s=m(),u=()=>{const t=sessionStorage.getItem("auth-user");t?e.value=JSON.parse(t):s.push("/login")},a=()=>{sessionStorage.removeItem("auth-user"),f("token"),s.push("/login")},i=()=>{const t=sessionStorage.getItem("auth-user");t&&(e.value=JSON.parse(t))};function c(t){var n,r;let o=!1;return t&&(r=(n=e.value)==null?void 0:n.permissions)!=null&&r.includes(`${t}`)&&(o=!0),o}return{userData:e,checkLogin:u,signOut:a,getUserDataFromSessionStorage:i,checkShowOnPermission:c}});export{k as g,S as s,p as u};
