(self["webpackChunkvue1"]=self["webpackChunkvue1"]||[]).push([[33],{7296:function(e,t,n){n(1703),e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({8875:function(e,t,n){var r,i,u;(function(n,o){i=[],r=o,u="function"===typeof r?r.apply(t,i):r,void 0===u||(e.exports=u)})("undefined"!==typeof self&&self,(function(){function e(){var t=Object.getOwnPropertyDescriptor(document,"currentScript");if(!t&&"currentScript"in document&&document.currentScript)return document.currentScript;if(t&&t.get!==e&&document.currentScript)return document.currentScript;try{throw new Error}catch(p){var n,r,i,u=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,c=u.exec(p.stack)||o.exec(p.stack),s=c&&c[1]||!1,l=c&&c[2]||!1,a=document.location.href.replace(document.location.hash,""),f=document.getElementsByTagName("script");s===a&&(n=document.documentElement.outerHTML,r=new RegExp("(?:[^\\n]+?\\n){0,"+(l-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),i=n.replace(r,"$1").trim());for(var d=0;d<f.length;d++){if("interactive"===f[d].readyState)return f[d];if(f[d].src===s)return f[d];if(s===a&&f[d].innerHTML&&f[d].innerHTML.trim()===i)return f[d]}return null}}return e}))},"8bbf":function(e,t){e.exports=n(6866)},f264:function(e,t,n){},fb15:function(e,t,n){"use strict";if(n.r(t),"undefined"!==typeof window){var r=window.document.currentScript,i=n("8875");r=i(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:i});var u=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);u&&(n.p=u[1])}var o=n("8bbf");function c(e,t,n,r,i,u){return n.iso?(Object(o["openBlock"])(),Object(o["createBlock"])("span",{key:0,class:[u.flagIconClass,"flag-icon"],title:n.title||n.iso},null,10,["title"])):Object(o["createCommentVNode"])("",!0)}n("f264");var s={name:"country-flag",props:{iso:{required:!0,type:String},title:{default:null,type:String},mode:{default:null,type:String,validator:function(e){return-1!==["rounded","squared"].indexOf(e)}}},computed:{flagIconClass:function(){var e="";return e="flag-icon-"+this.iso.toLowerCase(),this.mode&&(e+=" flag-icon-"+this.mode),e}}};s.render=c;var l=s;t["default"]=l}})["default"]},6866:function(e,t,n){"use strict";n.r(t),n.d(t,{BaseTransition:function(){return r.P$},Comment:function(){return r.sv},EffectScope:function(){return r.Bj},Fragment:function(){return r.HY},KeepAlive:function(){return r.Ob},ReactiveEffect:function(){return r.qq},Static:function(){return r.qG},Suspense:function(){return r.n4},Teleport:function(){return r.lR},Text:function(){return r.xv},Transition:function(){return r.uT},TransitionGroup:function(){return r.W3},VueElement:function(){return r.a2},callWithAsyncErrorHandling:function(){return r.$d},callWithErrorHandling:function(){return r.KU},camelize:function(){return r._A},capitalize:function(){return r.kC},cloneVNode:function(){return r.Ho},compatUtils:function(){return r.ry},compile:function(){return i},computed:function(){return r.Fl},createApp:function(){return r.ri},createBlock:function(){return r.j4},createCommentVNode:function(){return r.kq},createElementBlock:function(){return r.iD},createElementVNode:function(){return r._},createHydrationRenderer:function(){return r.Eo},createPropsRestProxy:function(){return r.p1},createRenderer:function(){return r.Us},createSSRApp:function(){return r.vr},createSlots:function(){return r.Nv},createStaticVNode:function(){return r.uE},createTextVNode:function(){return r.Uk},createVNode:function(){return r.Wm},customRef:function(){return r.ZM},defineAsyncComponent:function(){return r.RC},defineComponent:function(){return r.aZ},defineCustomElement:function(){return r.MW},defineEmits:function(){return r.Bz},defineExpose:function(){return r.WY},defineProps:function(){return r.yb},defineSSRCustomElement:function(){return r.Ah},devtools:function(){return r.mW},effect:function(){return r.cE},effectScope:function(){return r.B},getCurrentInstance:function(){return r.FN},getCurrentScope:function(){return r.nZ},getTransitionRawChildren:function(){return r.Q6},guardReactiveProps:function(){return r.F4},h:function(){return r.h},handleError:function(){return r.S3},hydrate:function(){return r.ZB},initCustomFormatter:function(){return r.Mr},initDirectivesForSSR:function(){return r.Nd},inject:function(){return r.f3},isMemoSame:function(){return r.nQ},isProxy:function(){return r.X3},isReactive:function(){return r.PG},isReadonly:function(){return r.$y},isRef:function(){return r.dq},isRuntimeOnly:function(){return r.of},isShallow:function(){return r.yT},isVNode:function(){return r.lA},markRaw:function(){return r.Xl},mergeDefaults:function(){return r.u_},mergeProps:function(){return r.dG},nextTick:function(){return r.Y3},normalizeClass:function(){return r.C_},normalizeProps:function(){return r.vs},normalizeStyle:function(){return r.j5},onActivated:function(){return r.dl},onBeforeMount:function(){return r.wF},onBeforeUnmount:function(){return r.Jd},onBeforeUpdate:function(){return r.Xn},onDeactivated:function(){return r.se},onErrorCaptured:function(){return r.d1},onMounted:function(){return r.bv},onRenderTracked:function(){return r.bT},onRenderTriggered:function(){return r.Yq},onScopeDispose:function(){return r.EB},onServerPrefetch:function(){return r.vl},onUnmounted:function(){return r.SK},onUpdated:function(){return r.ic},openBlock:function(){return r.wg},popScopeId:function(){return r.Cn},provide:function(){return r.JJ},proxyRefs:function(){return r.WL},pushScopeId:function(){return r.dD},queuePostFlushCb:function(){return r.qb},reactive:function(){return r.qj},readonly:function(){return r.OT},ref:function(){return r.iH},registerRuntimeCompiler:function(){return r.Y1},render:function(){return r.sY},renderList:function(){return r.Ko},renderSlot:function(){return r.WI},resolveComponent:function(){return r.up},resolveDirective:function(){return r.Q2},resolveDynamicComponent:function(){return r.LL},resolveFilter:function(){return r.eq},resolveTransitionHooks:function(){return r.U2},setBlockTracking:function(){return r.qZ},setDevtoolsHook:function(){return r.ec},setTransitionHooks:function(){return r.nK},shallowReactive:function(){return r.Um},shallowReadonly:function(){return r.YS},shallowRef:function(){return r.XI},ssrContextKey:function(){return r.Uc},ssrUtils:function(){return r.G},stop:function(){return r.sT},toDisplayString:function(){return r.zw},toHandlerKey:function(){return r.hR},toHandlers:function(){return r.mx},toRaw:function(){return r.IU},toRef:function(){return r.Vh},toRefs:function(){return r.BK},transformVNodeArgs:function(){return r.C3},triggerRef:function(){return r.oR},unref:function(){return r.SU},useAttrs:function(){return r.l1},useCssModule:function(){return r.fb},useCssVars:function(){return r.sj},useSSRContext:function(){return r.Zq},useSlots:function(){return r.Rr},useTransitionState:function(){return r.Y8},vModelCheckbox:function(){return r.e8},vModelDynamic:function(){return r.YZ},vModelRadio:function(){return r.G2},vModelSelect:function(){return r.bM},vModelText:function(){return r.nr},vShow:function(){return r.F8},version:function(){return r.i8},warn:function(){return r.ZK},watch:function(){return r.YP},watchEffect:function(){return r.m0},watchPostEffect:function(){return r.Rh},watchSyncEffect:function(){return r.yX},withAsyncContext:function(){return r.mv},withCtx:function(){return r.w5},withDefaults:function(){return r.b9},withDirectives:function(){return r.wy},withKeys:function(){return r.D2},withMemo:function(){return r.MX},withModifiers:function(){return r.iM},withScopeId:function(){return r.HX}});var r=n(9242);const i=()=>{0}},9683:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(3396),i=n(9242),u=n(7139),o=n.p+"img/6.c1d09262.png";const c=e=>((0,r.dD)("data-v-4608f81c"),e=e(),(0,r.Cn)(),e),s={class:"presale"},l=c((()=>(0,r._)("div",{class:"blur__on__responsive"},null,-1))),a={class:"section__wrapper"},f=c((()=>(0,r._)("div",{class:"text__box"},[(0,r._)("h1",null,"Presale"),(0,r._)("span",null," We plan to conduct the presale of our token in Q1 2022. "),(0,r._)("ul",null,[(0,r._)("span",null,"The details are as given below:"),(0,r._)("li",null,"Token presale price - "),(0,r._)("li",null,"Discount you get in presale - "),(0,r._)("li",null,"Total number of whitelist spots ")]),(0,r._)("span",{class:"subtext"},"There are only two slabs available for buy. 0.5 BNB or 1 BNB.")],-1))),d={class:"input-wrapper"},p={class:"Wrapper--email"},h={class:"Wrapper--number"},m={class:"Wrapper--twitterID"},y={class:"Wrapper--telegramID"},g={class:"Wrapper--bep20"},b={class:"Wrapper--country",ref:"active"},v={class:"option"},k=["onClick"],I={class:"Wrapper--tweet"},D={class:"Wrapper--linkedIn"},w=c((()=>(0,r._)("button",{type:"submit",title:"Submit",id:"click"},"submit",-1))),S=c((()=>(0,r._)("img",{src:o,alt:""},null,-1)));function _(e,t,n,o,c,_){const E=(0,r.up)("CountryFlag");return(0,r.wg)(),(0,r.iD)("section",s,[l,(0,r._)("div",a,[f,(0,r._)("form",{action:"#",method:"post",onSubmit:t[16]||(t[16]=(0,i.iM)(((...e)=>_.checkingForm&&_.checkingForm(...e)),["prevent"]))},[(0,r._)("div",d,[(0,r._)("div",p,[(0,r._)("input",{type:"text",placeholder:"E-mail",title:"Enter your E-mail",ref:"email",onFocus:t[0]||(t[0]=e=>_.inputLabel("email")),onBlur:t[1]||(t[1]=e=>_.checkingInput("email"))},null,544)]),(0,r._)("div",h,[(0,r._)("input",{type:"number",placeholder:"Desired Invesment amount",title:"Enter investment amount",ref:"number",onFocus:t[2]||(t[2]=e=>_.inputLabel("number")),onBlur:t[3]||(t[3]=(0,i.iM)((e=>_.checkingInput("number")),["prevent"]))},null,544)]),(0,r._)("div",m,[(0,r._)("input",{type:"text",placeholder:"Twitter ID",title:"Enter your Twitter ID",id:"twitterID",onFocus:t[4]||(t[4]=e=>_.inputLabel("twitterID")),onBlur:t[5]||(t[5]=e=>_.checkingInput("twitterID"))},null,32)]),(0,r._)("div",y,[(0,r._)("input",{type:"text",placeholder:"Telegram ID",title:"Enter your Telegram ID",id:"telegramID",onFocus:t[6]||(t[6]=e=>_.inputLabel("telegramID")),onBlur:t[7]||(t[7]=e=>_.checkingInput("telegramID"))},null,32)])]),(0,r._)("div",g,[(0,r._)("input",{type:"text",placeholder:"BEP20 Address to receive UCF",title:"Enter your BEP20 Address",onFocus:t[8]||(t[8]=e=>_.inputLabel("bep20")),ref:"bep20",onBlur:t[9]||(t[9]=e=>_.checkingInput("bep20"))},null,544)]),(0,r._)("div",b,[(0,r._)("input",{type:"text",placeholder:"Country of residence",title:"Enter your country of residence",ref:"country",onKeyup:t[10]||(t[10]=(...e)=>_.search&&_.search(...e)),onClick:t[11]||(t[11]=(0,i.iM)(((...e)=>_.checkingCountry&&_.checkingCountry(...e)),["prevent"]))},null,544),(0,r._)("ul",v,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.selectData,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:t,ref_for:!0,ref:"option",onClick:t=>_.value(`${e.country}`)},[(0,r.Wm)(E,{iso:`${e.flag}`,mode:"squared"},null,8,["iso"]),(0,r.Uk)(" "+(0,u.zw)(e.country),1)],8,k)))),128))])],512),(0,r._)("div",I,[(0,r._)("input",{type:"text",placeholder:"Link to tweet",title:"Enter your link to tweet",id:"tweet",onFocus:t[12]||(t[12]=e=>_.inputLabel("tweet")),onBlur:t[13]||(t[13]=e=>_.checkingInput("tweet"))},null,32)]),(0,r._)("div",D,[(0,r._)("input",{type:"text",placeholder:"Link to LinkedIn post",title:"Enter your link to LinkedIn post",id:"linkedID",onFocus:t[14]||(t[14]=e=>_.inputLabel("linkedIn")),onBlur:t[15]||(t[15]=e=>_.checkingInput("linkedID"))},null,32)]),w],32),(0,r._)("div",{class:"message",style:(0,u.j5)(c.styleObject)},[(0,r._)("span",null,(0,u.zw)(c.textMessage),1)],4)]),S])}var E=n(7296),C=n.n(E),x=n(6265),B=n.n(x),T={data(){return{formData:null,styleObject:{background:"",display:"none"},BOT_API_ID:"5572284297:AAGcIYixFO0cFESbgoNVYlsHlEsSf5vDcpU",CHAT_ID:"-1001798307154",email:"",amount:"",twitterID:"",telegramID:"",country:"",bep20:"",urlTweet:"",urlLinked:"",textMessage:"",selectData:[]}},created(){B().get("data/select.json").then((e=>{function t(e,t){return e.country<t.country?-1:e.country>t.country?1:0}this.selectData=e.data.sort(t)}))},name:"MyPresale",components:{CountryFlag:C()},mounted(){0!==localStorage.length&&(this.userData=JSON.parse(localStorage.getItem("UserData")),0!==this.userData.length&&(this.$refs.email.value=this.userData[0],this.$refs.number.value=this.userData[1],this.$refs.bep20.value=this.userData[2],document.getElementById("twitterID").value=this.userData[3],document.getElementById("telegramID").value=this.userData[4],document.getElementById("country").value=this.userData[5],document.getElementById("tweet").value=this.userData[6],document.getElementById("linkedID").value=this.userData[7]))},methods:{search(){if(""===this.$refs.country.value)return this.$refs.country.style.border="1px solid red",void this.$refs.option.forEach((e=>e.style.display="block"));!0===/^[a-zA-Z]+$/.test(this.$refs.country.value)&&(this.$refs.country.style.border="none",this.$refs.option.forEach((e=>{let t=new RegExp(`${this.$refs.country.value}`,"gi");!0===t.test(e.innerText)?e.style.display="block":e.style.display="none"})))},value(e){this.$refs.country.value=e,this.$refs.active.classList.toggle("active")},checkingCountry(){this.$refs.active.classList.toggle("active")},inputLabel(e){null===document.querySelector(".label")||document.querySelector(".label").classList.remove("label"),document.querySelector(`.Wrapper--${e} input`).value="",document.querySelector(`.Wrapper--${e}`).style.position="relative",document.querySelector(`.Wrapper--${e}`).classList.add("label")},checkingInput(e){"email"===e?this.checkingEmail():"number"===e?this.checkingNumber():"bep20"===e?this.checkingBEP():"tweet"===e?this.checkingURL("tweet"):"linkedID"===e?this.checkingURL("linkedID"):"twitterID"===e?this.checkingIdAndCountry("twitterID"):"telegramID"===e?this.checkingIdAndCountry("telegramID"):"country"===e&&this.checkingIdAndCountry("country")},checkingEmail(){let e=this.$refs.email.value;if(!(e.length>0&&!1!==Boolean(e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))))return this.$refs.email.style.border="1px solid red",this.message("incorrect E-mail",!1),!1;this.$refs.email.style.border="none",this.styleObject.display="none",this.email=e},checkingNumber(){let e=this.$refs.number.value;if(!(""!==e&&e>0))return this.$refs.number.style.border="1px solid red",this.message("incorrect investment amount",!1),!1;this.$refs.number.style.border="none",this.styleObject.display="none",this.amount=e},checkingBEP(){let e=this.$refs.bep20.value,t=/^[A-Za-z 0-9]+$/;if(!(!1!==t.test(e)&&!1!==e.match(/[0-9]/)&&e.length>0))return this.$refs.bep20.style.border="1px solid red",this.message("incorrect BEP20 Address",!1),!1;this.$refs.bep20.style.border="none",this.styleObject.display="none",this.bep20=e},checkingURL(e){let t=document.getElementById(e).value,n=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");if(!1===n.test(t))return document.getElementById(e).style.border="1px solid red",this.message("incorrect "+e,!1),!1;document.getElementById(e).style.border="none",this.styleObject.display="none","tweet"===e?this.urlTweet=t:this.urlLinked=t},checkingIdAndCountry(e){let t=document.getElementById(e).value;if(""===t)return document.getElementById(e).style.border="1px solid red",this.message("incorrect "+e,!1),!1;document.getElementById(e).style.border="none",this.styleObject.display="none","twitterID"===e?this.twitterID=t:"telegramID"===e?this.telegramID=t:this.country=t},formSubmit(){const e="<i>Form data</i>%0a<b>Email: </b>"+this.email+"%0a<b>Amount: </b>"+this.amount+"%0a<b>TwitterID: </b>"+this.twitterID+"%0a<b>TelegramID: </b>"+this.telegramID+"%0a<b>BEP20: </b>"+this.bep20+"%0a<b>Country: </b>"+this.country+"%0a<b>URLTweet: </b>"+this.urlTweet+"%0a<b>URLLinked: </b>"+this.urlLinked;fetch(`https://api.telegram.org/bot${this.BOT_API_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${e}&parse_mode=HTML`)},checkingForm(){!1!==this.checkingEmail()&&!1!==this.checkingNumber()&&!1!==this.checkingIdAndCountry("twitterID")&&!1!==this.checkingIdAndCountry("telegramID")&&!1!==this.checkingBEP()&&!1!==this.checkingIdAndCountry("country")&&!1!==this.checkingURL("tweet")&&!1!==this.checkingURL("linkedID")&&(this.message("form submitted successfully",!0),this.formSubmit(),this.localStorage())},message(e,t){!0===t?(this.styleObject.background="rgba(11, 199, 4, 0.81)",this.styleObject.display="flex",this.textMessage=e):(this.styleObject.background="rgb(255 0 0 / 81%)",this.styleObject.display="flex",this.textMessage=e),setTimeout((()=>{this.styleObject.display="none"}),3e3)},localStorage(){this.userData.splice(0,8,this.email,this.amount,this.twitterID,this.telegramID,this.country,this.bep20,this.urlTweet,this.urlLinked),localStorage.setItem("UserData",JSON.stringify(this.userData))}}},R=n(89);const $=(0,R.Z)(T,[["render",_],["__scopeId","data-v-4608f81c"]]);var L=$}}]);
//# sourceMappingURL=33.409ba511.js.map