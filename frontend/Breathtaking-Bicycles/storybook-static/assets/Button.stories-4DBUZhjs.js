import{f as W}from"./index-BW375jh7.js";import{j}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{g as F}from"./_commonjsHelpers-CqkleIqs.js";var l={exports:{}},m,g;function I(){if(g)return m;g=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return m=t,m}var d,b;function w(){if(b)return d;b=1;var t=I();function o(){}function n(){}return n.resetWarningCache=o,d=function(){function e(L,V,D,U,H,E){if(E!==t){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function r(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:o};return a.PropTypes=a,a},d}var h;function z(){return h||(h=1,l.exports=w()()),l.exports}var N=z();const s=F(N),y=({primary:t=!1,backgroundColor:o=null,size:n="medium",label:e,...r})=>{const a=t?"storybook-button--primary":"storybook-button--secondary";return j.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${n}`,a].join(" "),style:o&&{backgroundColor:o},...r,children:e})};y.propTypes={primary:s.bool,backgroundColor:s.string,size:s.oneOf(["small","medium","large"]),label:s.string.isRequired,onClick:s.func};y.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"bool"},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},label:{description:"Button contents",type:{name:"string"},required:!0},onClick:{description:"Optional click handler",type:{name:"func"},required:!1}}};const J={title:"Example/Button",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:W()}},p={args:{primary:!0,label:"Button"}},i={args:{label:"Button"}},c={args:{size:"large",label:"Button"}},u={args:{size:"small",label:"Button"}};var T,S,v;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(v=(S=p.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var P,R,k;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(k=(R=i.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var _,B,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(q=(B=c.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var x,O,C;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(C=(O=u.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};const K=["Primary","Secondary","Large","Small"];export{c as Large,p as Primary,i as Secondary,u as Small,K as __namedExportsOrder,J as default};
