import{d as n,u as s,a as d,j as t}from"./index-BV3ZVM9J.js";import{b as l,e as p,d as m}from"./redux-7jweKlMH.js";import"./react-CWc6w16D.js";import"./stripe-C_Do2TC3.js";import"./reduxPersist-B0J8RTns.js";import"./workbox-BXWtuYvb.js";const x=e=>e.directory,g=l([x],e=>e.sections),u=n.div`
  height: ${({size:e})=>e?"380px":"240px"};
  min-width: 30%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  @media screen and (max-width: 800px) {
    height: 200px;
  }
`,h=n.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageurl:e})=>`url(${e})`};
`,f=n.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`,b=n.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`,y=n.span`
  font-weight: lighter;
  font-size: 16px;
`,j=({title:e,imageUrl:o,size:i,linkUrl:r})=>{const a=s(),c=d();return t.jsxs(u,{size:i,onClick:()=>a(`${c.pathname}${r}`),children:[t.jsx(h,{className:"background-image",imageurl:o}),t.jsxs(f,{className:"content",children:[t.jsx(b,{children:e.toUpperCase()}),t.jsx(y,{children:"SHOP NOW"})]})]})},w=n.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`,v=({sections:e})=>t.jsx(w,{children:e.map(({id:o,...i})=>t.jsx(j,{...i},o))}),k=m({sections:g}),C=p(k)(v),S=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
    @media screen and (max-width: 800px) {
      padding: 0;
    }
`,I=()=>t.jsx(S,{children:t.jsx(C,{})});export{I as default};
