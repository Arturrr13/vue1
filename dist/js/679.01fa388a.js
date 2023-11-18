"use strict";(self["webpackChunkvue1"]=self["webpackChunkvue1"]||[]).push([[679],{4083:function(t,e,s){function i(t,e,s,i,a){document.querySelector(t).classList.remove("active"),document.querySelector(e).classList.remove("active"),document.querySelector(s).classList.remove("active"),document.querySelector(i).classList.remove("active"),document.querySelector(a).classList.add("active")}s.d(e,{t:function(){return i}})},5679:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var i=s(3396),a=s(7139),h=s(9242);const l=t=>((0,i.dD)("data-v-015e36a6"),t=t(),(0,i.Cn)(),t),n={key:0,class:"message",ref:"message"},o=l((()=>(0,i._)("h1",null,"CRYPTO",-1))),r={class:"graph__buttons"},c={class:"option"},g=["onClick"],u=["onClick"],d={id:"graph",ref:"graph"};function w(t,e,s,l,w,f){return(0,i.wg)(),(0,i.iD)("section",null,[null!==t.error?((0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("p",null,(0,a.zw)(t.error.message),1),(0,i._)("button",{onClick:e[0]||(e[0]=(...t)=>f.closeMessage&&f.closeMessage(...t))},"X")],512)):(0,i.kq)("",!0),o,(0,i._)("div",r,[(0,i._)("div",{class:(0,a.C_)(["select",{active:w.active}])},[(0,i.wy)((0,i._)("input",{type:"text",onClick:e[1]||(e[1]=(0,h.iM)(((...t)=>f.selectActive&&f.selectActive(...t)),["prevent"])),"onUpdate:modelValue":e[2]||(e[2]=e=>t.coin=e),readonly:""},null,512),[[h.nr,t.coin]]),(0,i._)("ul",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.getAllcoinSelect,((t,e)=>((0,i.wg)(),(0,i.iD)("li",{key:e,onClick:e=>f.setCoin(t)},(0,a.zw)(t),9,g)))),128))])],2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.buttonData,((t,e)=>((0,i.wg)(),(0,i.iD)("button",{key:e,class:"click",onClick:e=>f.setTime(t)},(0,a.zw)(t),9,u)))),128))]),(0,i._)("canvas",d,null,512)])}var f=s(4083),p=s(65),D={data(){return{width:null,height:null,active:!1}},setup(){return(0,f.t)("nav ul #home","nav ul #faq",".navigation .click","nav ul #about","nav ul #crypto")},computed:{...(0,p.rn)("GraphModules",["newsData","valueONpx","coinMin","coinMax","coinSelect","newCoin","coin","buttonData","error"]),...(0,p.Se)("GraphModules",["getAllDataGraph","getAllcoinSelect"]),...(0,p.Se)("UserModules",["getStatus"])},mounted(){!this.getStatus&&this.$router.push("/login"),this.getStatus&&this.getData()},methods:{...(0,p.nv)("GraphModules",["fetchDataGraph"]),...(0,p.OI)("GraphModules",["setNewCoin","setTimeAndSize","closeError"]),async getData(){this.height=this.$refs.graph.clientHeight,this.width=this.$refs.graph.clientWidth,await this.fetchDataGraph(),null!==this.error?this.messageError():this.graph()},messageError(){var t=document.getElementById("graph"),e=t.getContext("2d");t.width=this.width,t.height=this.height,e.beginPath(),e.font="bold 40px Raleway",e.fillStyle="#fffff3",e.textAlign="center",e.fillText(this.error,this.width,this.height/2),e.stroke(),e.closePath()},closeMessage(){this.$refs.message.animate([{transform:"translateX(0)",opacity:1},{transform:"translateX(100%)",opacity:0}],{duration:500,fill:"both"}),setTimeout((()=>this.closeError()),500)},graph(){var t=document.getElementById("graph"),e=t.getContext("2d");t.width=this.width,t.height=this.height,e.beginPath(),e.lineWidth=1,e.strokeStyle="#fffff3",e.font="bold 20px Raleway",e.fillStyle="#fffff3";for(let s=1;s<=5;s++){let t=(this.height-50)/5*s,i=t*this.valueONpx+parseInt(this.coinMin),a=i>100?i.toFixed(1):i<100&&i>10?i.toFixed(2):i<10&&i>1?i.toFixed(3):i.toFixed(4);e.fillText(a,5,this.height-t-25),e.moveTo(0,this.height-t-50),e.lineTo(this.width,this.height-t-50)}e.stroke(),e.closePath(),e.beginPath(),e.lineWidth=3,e.strokeStyle="#63AF8F";for(let s in this.newsData){let t=this.width/this.newsData.length*s,i=this.height-(this.newsData[this.newsData.length-s-1].close-this.coinMin)/this.valueONpx;e.lineTo(t,i-50)}e.stroke(),e.closePath(),e.beginPath(),e.lineWidth=2,e.strokeStyle="#5F3791",e.fillStyle="#5F3791";for(let s in this.newsData){let t=this.width/this.newsData.length*s,i=this.height-(this.newsData[this.newsData.length-s-1].close-this.coinMin)/this.valueONpx,a=this.newsData[this.newsData.length-s-1].datetime.length>10?this.newsData[this.newsData.length-s-1].datetime.substring(this.newsData[this.newsData.length-s-1].datetime.length-8):this.newsData[this.newsData.length-s-1].datetime,h=this.newsData[this.newsData.length-1].close>this.newsData[0].close?"red":"green",l=parseFloat(this.newsData[0].close)>100?parseFloat(this.newsData[0].close).toFixed(1):parseFloat(this.newsData[0].close)<100&&parseFloat(this.newsData[0].close)>10?parseFloat(this.newsData[0].close).toFixed(2):parseFloat(this.newsData[0].close)<10&&parseFloat(this.newsData[0].close)>1?parseFloat(this.newsData[0].close).toFixed(3):parseFloat(this.newsData[0].close).toFixed(4);s%(this.newsData.length/4)===0&&(e.moveTo(t,this.height-20),e.lineTo(t,i-50),e.fillText(a,t,this.height-5)),s==this.newsData.length-1&&(e.moveTo(t,this.height-20),e.lineTo(t,i-50),e.fillText(a,t-100,this.height-5),e.fillStyle=h,e.fillText(l,t-100,this.height-25))}e.stroke(),e.closePath()},setCoin(t){t!==this.coin&&(this.active=!1===this.active,this.setNewCoin(t),this.getData())},setTime(t){this.setTimeAndSize(t),this.getData()},selectActive(){this.active=!1===this.active}}},v=s(89);const m=(0,v.Z)(D,[["render",w],["__scopeId","data-v-015e36a6"]]);var y=m}}]);
//# sourceMappingURL=679.01fa388a.js.map