"use strict";(self["webpackChunkvue1"]=self["webpackChunkvue1"]||[]).push([[17],{1335:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var o=n(3396),a=n(7139),c=n.p+"img/close.d7479dad.svg",l=n.p+"img/open.0a4adca1.svg",s=n.p+"img/faq.a0ac8476.png";const i=e=>((0,o.dD)("data-v-c6f0e602"),e=e(),(0,o.Cn)(),e),r={class:"faq"},u={class:"section__wrapper"},p=i((()=>(0,o._)("h1",null,"FAQ",-1))),d=i((()=>(0,o._)("h2",null,"frequently asked question",-1))),m={class:"faq__wrapper"},g={class:"text__wrapper"},_=["onClick"],h=["onClick"],v=i((()=>(0,o._)("img",{src:s,class:"faq__fon",alt:""},null,-1)));function f(e,t,n,s,i,f){return(0,o.wg)(),(0,o.iD)("section",r,[(0,o._)("div",u,[p,d,(0,o._)("div",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.FAQdata,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t},[(0,o._)("div",{class:(0,a.C_)(`component--${t} components`)},[(0,o._)("div",g,[(0,o._)("h3",null,(0,a.zw)(e.title),1),(0,o._)("p",null,(0,a.zw)(e.info),1)]),(0,o._)("img",{src:c,alt:"",class:"close",onClick:e=>f.openClose(t,1)},null,8,_),(0,o._)("img",{src:l,alt:"",class:"open",onClick:e=>f.openClose(t,0)},null,8,h)],2)])))),128))])]),v])}var C=n(6265),k=n.n(C),q={data(){return{FAQdata:[],lastComponents:0}},name:"MyFAQ",created(){k().get("data/FAQ.json").then((e=>{this.FAQdata=e.data}))},methods:{openClose(e,t){let n=document.querySelector(`.component--${e}`).clientHeight;document.querySelector(`.component--${e}`).classList.toggle("active");let o=document.querySelector(`.component--${e}`).clientHeight;0===t?(document.querySelector(`.component--${e}`).animate([{height:"100px",background:"none"},{height:`${o}px`,background:"#323532"}],{duration:500}),document.querySelector(`.component--${e} .text__wrapper`).animate([{opacity:"0"},{opacity:"1"}],{delay:500,duration:500,fill:"both"})):document.querySelector(`.component--${e}`).animate([{height:`${n}px`,background:"#323532"},{height:`${o}px`,background:"none"}],{duration:500}),this.lastComponents!==e&&document.querySelector(`.component--${this.lastComponents}`).classList.remove("active"),this.lastComponents=e}}},y=n(89);const w=(0,y.Z)(q,[["render",f],["__scopeId","data-v-c6f0e602"]]);var $=w}}]);
//# sourceMappingURL=17.73554cf7.js.map