"use strict";(self["webpackChunkvue1"]=self["webpackChunkvue1"]||[]).push([[104],{1104:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var s=a(3396),r=a(7139),i=a(9242);const l=t=>((0,s.dD)("data-v-0fca321b"),t=t(),(0,s.Cn)(),t),n=l((()=>(0,s._)("h1",null,"Login",-1))),o={class:"input__wrapper"},u={class:"valueErr"},d={class:"input__wrapper"},c={class:"valueErr"},g={key:0,class:"userErr"},h=l((()=>(0,s._)("button",{type:"submit",title:"Submit",class:"button btn__style click"},"Login",-1))),m=(0,s.Uk)(" Register ");function p(t,e,a,l,p,v){const w=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",{class:"login__wrapper",style:(0,r.j5)({height:p.height+"px"})},[n,(0,s._)("form",{action:"#",method:"post",onSubmit:e[4]||(e[4]=(0,i.iM)(((...t)=>v.loginUser&&v.loginUser(...t)),["prevent"]))},[(0,s._)("div",o,[(0,s._)("span",null,(0,r.zw)(t.getError),1),(0,s._)("span",u,(0,r.zw)(p.textErr),1),(0,s.wy)((0,s._)("input",{type:"text",name:"mail","onUpdate:modelValue":e[0]||(e[0]=t=>p.mail=t),placeholder:"E-mail",onBlur:e[1]||(e[1]=(...t)=>v.validation&&v.validation(...t))},null,544),[[i.nr,p.mail]])]),(0,s._)("div",d,[(0,s._)("span",c,(0,r.zw)(p.textErr),1),(0,s.wy)((0,s._)("input",{type:"password",name:"password","onUpdate:modelValue":e[2]||(e[2]=t=>p.password=t),placeholder:"Password",onBlur:e[3]||(e[3]=(...t)=>v.validation&&v.validation(...t))},null,544),[[i.nr,p.password]])]),t.getError.length>0?((0,s.wg)(),(0,s.iD)("span",g,(0,r.zw)(t.getError),1)):(0,s.kq)("",!0),h],32),(0,s.Wm)(w,{rel:"nofollow",to:"/register",class:"button btn__style click"},{default:(0,s.w5)((()=>[m])),_:1})],4)}var v=a(65),w={data(){return{mail:"",password:"",height:0,textErr:"",validationStatusEm:!1,validationStatusPs:!1}},mounted(){this.height=document.querySelector("#app").clientHeight<document.body.clientHeight?document.body.clientHeight-(document.querySelector(".site__header").clientHeight+document.querySelector("footer").clientHeight):500},computed:{...(0,v.Se)("UserModules",["getToken","getStatus","getError"])},methods:{...(0,v.nv)("UserModules",["loginUserr"]),async loginUser(){this.validationStatusEm&&this.validationStatusPs&&(await this.loginUserr({mail:this.mail,password:this.password}),await this.$cookies.set("UserToken",this.getToken,"30d"),this.getStatus&&this.$router.push("/"))},validation(t){const e=e=>{t.target.parentElement.classList.add("activeValueErr"),this.textErr=e,"mail"===t.target.name?this.validationStatusEm=!1:this.validationStatusPs=!1,t.target.focus()},a=()=>{t.target.parentElement.classList.remove("activeValueErr"),"mail"===t.target.name?this.validationStatusEm=!0:this.validationStatusPs=!0};if("mail"!==t.target.name)if("password"!==t.target.name);else{const s=t=>!(t===t.toLowerCase());t.target.value.length>=8&&t.target.value.length<=40&&s(t.target.value)&&/[0-9]/.test(t.target.value)?(this.password=t.target.value,a()):t.target.value.length>1&&(t.target.value.length<8?e("Min 8 symbols"):t.target.value.length>40?e("Max 40 symbols"):/[0-9]/.test(t.target.value)?e("Password must contain a capital letter"):e("Password must contain a number"))}else t.target.value.length>0&&!1!==Boolean(t.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))?(this.mail=t.target.value,a()):e("Incorrect mail")}}},_=a(89);const E=(0,_.Z)(w,[["render",p],["__scopeId","data-v-0fca321b"]]);var b=E}}]);
//# sourceMappingURL=104.8deac15a.js.map