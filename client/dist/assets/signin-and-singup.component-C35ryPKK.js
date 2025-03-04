import{j as s,h as y,C as h,i as N,k as b,l as C,m as I}from"./index-BV3ZVM9J.js";import{e as x,d as j,r as w}from"./redux-7jweKlMH.js";import"./react-CWc6w16D.js";import"./stripe-C_Do2TC3.js";import"./reduxPersist-B0J8RTns.js";import"./workbox-BXWtuYvb.js";const l=({handleChange:n,label:a,...e})=>s.jsxs("div",{className:"group",children:[s.jsx("input",{className:"form-input",onChange:n,...e}),a?s.jsxs("label",{className:`${e.value.length?"shrink":""} form-input-label`,children:[" ",a," "]}):null]}),P=({emailSignInStart:n,googleSignInStart:a,formError:e})=>{const[t,d]=w.useState({email:"",password:""}),{email:c,password:p}=t,u=r=>{r.preventDefault();const{email:o,password:i}=t;n(o,i)},m=r=>{const{value:o,name:i}=r.target;d({...t,[i]:o})};return s.jsxs("div",{className:"sign-in",children:[s.jsx("h2",{children:"I currently have an account"}),s.jsx("span",{children:"Sign in with your email and password"}),s.jsxs("form",{onSubmit:u,autoComplete:"off",children:[s.jsx(l,{name:"email",type:"email",value:c,handleChange:m,label:"Email",required:!0}),s.jsx(l,{name:"password",type:"password",value:p,handleChange:m,label:"Password",required:!0}),s.jsxs("div",{className:"buttons",children:[s.jsx(h,{type:"submit",children:"Sign In"}),s.jsx(h,{type:"button",onClick:a,isGoogleSignIn:!0,children:"Sign in with Google"})]}),e&&s.jsx("div",{className:"form-error",children:e})]})]})},q=j({formError:y}),D=n=>({googleSignInStart:()=>n(b()),emailSignInStart:(a,e)=>n(N({email:a,password:e}))}),E=x(q,D)(P),U=({signupStart:n,formError:a})=>{const[e,t]=w.useState({displayName:"",email:"",password:"",confirmPassword:""}),{displayName:d,email:c,password:p,confirmPassword:u}=e,m=async o=>{o.preventDefault();const{displayName:i,email:g,password:S,confirmPassword:f}=e;if(S!==f){alert("The Password does not match the Password Confirmation.");return}try{n(i,g,S)}catch(v){console.error(v)}},r=o=>{const{name:i,value:g}=o.target;t({...e,[i]:g})};return s.jsxs("div",{className:"sign-up",children:[s.jsx("h2",{className:"title",children:"I don't have an account"}),s.jsx("span",{children:"Sign up with your email and password"}),s.jsxs("form",{className:"sign-up-form",onSubmit:m,autoComplete:"off",children:[s.jsx(l,{type:"text",name:"displayName",value:d,handleChange:r,label:"Name",required:!0}),s.jsx(l,{type:"text",name:"email",value:c,handleChange:r,label:"Email",required:!0}),s.jsx(l,{type:"password",name:"password",value:p,handleChange:r,label:"Password",required:!0}),s.jsx(l,{type:"password",name:"confirmPassword",value:u,handleChange:r,label:"Password Confirmation",required:!0}),a&&s.jsx("div",{className:"form-error",children:a}),s.jsx(h,{type:"submit",children:"Sign up"})]})]})},T=j({formError:C}),$=n=>({signupStart:(a,e,t)=>n(I({displayName:a,email:e,password:t}))}),k=x(T,$)(U),R=()=>s.jsxs("div",{className:"sign-in-and-sign-up ",children:[s.jsx(E,{}),s.jsx(k,{})]});export{R as default};
