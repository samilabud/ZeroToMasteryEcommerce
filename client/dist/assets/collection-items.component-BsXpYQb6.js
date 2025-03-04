import{b as i,e as l}from"./redux-7jweKlMH.js";import{g as d}from"./react-CWc6w16D.js";import{r as p}from"./lodash-CFtYj7Ga.js";import{j as o,S as m,d as n,C as h,c as x}from"./index-BV3ZVM9J.js";var u=p();const g=d(u),s=t=>t.shop,C=i([s],t=>t.collections),w=i([s],t=>t.collections),P=g(t=>i([C],e=>e?e[t]:null)),W=i([w],t=>t?Object.keys(t).map(e=>t[e]):[]),_=i([s],t=>t.isFetching),$=i([s],t=>!!t.collections),A=t=>({isLoading:e,...a})=>e?o.jsx(m,{}):o.jsx(t,{...a}),b=n.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`,j=n(h)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`,y=n.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({imageurl:t})=>`url(${t})`};
`,f=n.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`,v=n.span`
  width: 90%;
  margin-bottom: 15px;
`,I=n.span`
  width: 10%;
  text-align: right;
`,S=({item:t,addItem:e})=>{const{name:a,price:c,imageUrl:r}=t;return o.jsxs(b,{children:[o.jsx(y,{className:"image",imageurl:r}),o.jsxs(f,{children:[o.jsx(v,{children:a}),o.jsx(I,{children:c})]}),o.jsx(j,{onClick:()=>e(t),inverted:"true",children:"Add to cart"})]})},k=t=>({addItem:e=>t(x(e))}),D=l(null,k)(S);export{D as C,A as W,_ as a,P as b,$ as c,W as s};
