webpackJsonp([21],{'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-561edeb7","scoped":true,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/PanoLogin.vue':function(e,t){},'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-57d15e14","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vux/src/components/blur/index.vue':function(e,t){},"./src/mixins/release.js":function(e,t,i){"use strict";i.d(t,"a",function(){return o});var o={computed:{buildRevisionNumber:{get:function(){return"2019-03-27 23:10:26"}}}}},"./src/pages/PanoLogin.vue":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("./node_modules/babel-runtime/core-js/object/assign.js"),n=i.n(o),s=i("./node_modules/babel-runtime/core-js/object/keys.js"),r=i.n(s),a=/\s+/;function l(){}l.prototype.on=function(e,t,i){var o,n;if(!t)return this;for(o=this.__events||(this.__events={}),e=e.split(a);n=e.shift();)(o[n]||(o[n]=[])).push(t,i);return this},l.prototype.once=function(e,t,i){var o=this,n=function(){o.off(e,n),t.apply(i||o,arguments)};return this.on(e,n,i)},l.prototype.off=function(e,t,i){var o,n,s,r;if(!(o=this.__events))return this;if(!(e||t||i))return delete this.__events,this;for(e=e?e.split(a):u(o);n=e.shift();)if(s=o[n]){if(!t&&!i){delete o[n];continue}for(r=s.length-2;0<=r;r-=2)t&&s[r]!==t||i&&s[r+1]!==i||s.splice(r,2)}return this},l.prototype.trigger=function(e){var t,i,o,n,s,r,l=[],u=!0;if(!(t=this.__events))return this;for(e=e.split(a),s=1,r=arguments.length;s<r;s++)l[s-1]=arguments[s];for(;i=e.shift();)(o=t.all)&&(o=o.slice()),(n=t[i])&&(n=n.slice()),"all"!==i&&(u=d(n,l,this)&&u),u=d(o,[i].concat(l),this)&&u;return u},l.prototype.emit=l.prototype.trigger;var u=r.a;function d(e,t,i){var o=!0;if(e){var n=0,s=e.length,r=t[0],a=t[1],l=t[2];switch(t.length){case 0:for(;n<s;n+=2)o=!1!==e[n].call(e[n+1]||i)&&o;break;case 1:for(;n<s;n+=2)o=!1!==e[n].call(e[n+1]||i,r)&&o;break;case 2:for(;n<s;n+=2)o=!1!==e[n].call(e[n+1]||i,r,a)&&o;break;case 3:for(;n<s;n+=2)o=!1!==e[n].call(e[n+1]||i,r,a,l)&&o;break;default:for(;n<s;n+=2)o=!1!==e[n].apply(e[n+1]||i,t)&&o}}return o}u||(u=function(e){var t=[];for(var i in e)e.hasOwnProperty(i)&&t.push(i);return t}),l.mixTo=function(e){function t(t){e[t]=function(){return i[t].apply(n,Array.prototype.slice.call(arguments)),this}}var i=l.prototype;if(function(e){return"[object Function]"===Object.prototype.toString.call(e)}(e))for(var o in i)i.hasOwnProperty(o)&&(e.prototype[o]=i[o]);else{var n=new l;for(var s in i)i.hasOwnProperty(s)&&t(s)}};var c=l,p=function(){return"_"+Math.random().toString(36).substr(2,9)},h={svgns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",createElement:function(e,t){var i=document.createElementNS(h.svgns,e);return t&&h.setAttr(i,t),i},setAttr:function(e,t){for(var i in t)"href"==i?e.setAttributeNS(h.xlink,i,t[i]):e.setAttribute(i,t[i]);return e}},v=function(e,t){this.internalID=p(),this.element=e,this.width=e.offsetWidth,this.height=e.offsetHeight,this.element=e,this.parent=this.element.parentNode,this.options=n()({},v.DEFAULTS,t),this.overlayEl=this.createOverlay(),this.blurredImage=null,this.attachListeners(),this.generateBlurredImage(this.options.url)};v.VERSION="0.0.1",c.mixTo(v),v.DEFAULTS={url:"",blurAmount:10,imageClass:"",overlayClass:"",duration:!1,opacity:1},v.prototype.setBlurAmount=function(e){this.options.blurAmount=e},v.prototype.attachListeners=function(){this.on("ui.blur.loaded",this.fadeIn.bind(this)),this.on("ui.blur.unload",this.fadeOut.bind(this))},v.prototype.fadeIn=function(){},v.prototype.fadeOut=function(){},v.prototype.generateBlurredImage=function(e){var t=this.blurredImage;this.internalID=p(),t&&t.parentNode.removeChild(t),this.blurredImage=this.createSVG(e,this.width,this.height)},v.prototype.createOverlay=function(){if(this.options.overlayClass&&""!==this.options.overlayClass){var e=document.createElement("div");return e.classList.add(this.options.overlayClass),this.parent.insertBefore(e,this.element),e}return!1},v.prototype.createSVG=function(e,t,i){var o=this,n=h.createElement("svg",{xmlns:h.svgns,version:"1.1",width:t,height:i,id:"blurred"+this.internalID,class:this.options.imageClass,viewBox:"0 0 "+t+" "+i,preserveAspectRatio:"none"}),s="blur"+this.internalID,r=h.createElement("filter",{id:s}),a=h.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:this.options.blurAmount}),l=h.createElement("image",{x:0,y:0,width:t,height:i,externalResourcesRequired:"true",href:e,style:"filter:url(#"+s+")",preserveAspectRatio:"none"});return l.addEventListener("load",function(){o.emit("ui.blur.loaded")},!0),l.addEventListener("SVGLoad",function(){o.emit("ui.blur.loaded")},!0),r.appendChild(a),n.appendChild(r),n.appendChild(l),o.options.duration&&0<o.options.duration&&(n.style.opacity=0,window.setTimeout(function(){"0"===f(n,"opacity")&&(n.style.opacity=1)},this.options.duration+100)),this.element.insertBefore(n,this.element.firstChild),n},v.prototype.createIMG=function(e,t,i){var o=this,n=this.prependImage(e),s={filter:"progid:DXImageTransform.Microsoft.Blur(pixelradius="+(100<2*this.options.blurAmount?100:2*this.options.blurAmount)+") ",top:2.5*-this.options.blurAmount,left:2.5*-this.options.blurAmount,width:t+2.5*this.options.blurAmount,height:i+2.5*this.options.blurAmount};for(var r in s)n.style[r]=s[r];return n.setAttribute("id",this.internalID),n.onload=function(){o.trigger("ui.blur.loaded")},this.options.duration&&0<this.options.duration&&window.setTimeout(function(){"0"===f(n,"opacity")&&(n.style.opacity=1)},this.options.duration+100),n},v.prototype.prependImage=function(e){var t=document.createElement("img");return t.url=e,t.setAttribute("id",this.internalID),t.classList.add(this.options.imageClass),this.overlayEl?this.parent.insertBefore(t,this.overlayEl):this.parent.insertBefore(t,this.parent.firstChild),t};var m=v;function f(e,t){return window.getComputedStyle(e,null).getPropertyValue(t)}Number,String,Number;var g={name:"blur",mounted:function(){var e=this;this.$nextTick(function(){e._blur=new m(e.$el,{url:e.url,blurAmount:e.blurAmount,imageClass:"vux-bg-blur",duration:100,opacity:1})})},props:{blurAmount:{type:Number,default:10},url:{type:String,required:!0},height:{type:Number,default:200}},watch:{blurAmount:function(e){this._blur.setBlurAmount(e),this._blur.generateBlurredImage(this.url)},url:function(e){this._blur.generateBlurredImage(e)}}},b={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{style:{height:this.height+"px",position:"relative",overflow:"hidden"}},[this._t("default")],2)},staticRenderFns:[]};var x=i("./node_modules/vue-loader/lib/component-normalizer.js")(g,b,!1,function(e){i('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-57d15e14","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vux/src/components/blur/index.vue')},null,null).exports,_=i("./node_modules/vux/src/components/check-icon/index.vue"),w=i("./node_modules/vux/src/components/flexbox/flexbox.vue"),y=i("./node_modules/vux/src/components/flexbox/flexbox-item.vue"),k=i("./node_modules/vux/src/components/grid/grid.vue"),j=i("./node_modules/vux/src/components/grid/grid-item.vue"),D=i("./node_modules/vux/src/components/popup/index.vue"),C=i("./node_modules/vux/src/components/x-dialog/index.vue"),S=i("./src/api/index.js"),I=i("./src/webconfig.js"),A=i("./src/utils/StoreUtils.js"),E=i("./src/mixins/release.js"),L=i("./src/utils/PlatformUtils.js"),$=(w.a,y.a,_.a,k.a,j.a,D.a,C.a,E.a,{name:"PanoLogin",metaInfo:{title:"用户登录"},components:{Flexbox:w.a,FlexboxItem:y.a,CheckIcon:_.a,Grid:k.a,GridItem:j.a,Popup:D.a,Blur:x,XDialog:C.a},mixins:[E.a],data:function(){return{newVersion:I.a.buildBaseVersion,mobileHeight:document.documentElement.clientHeight+64,showlogin:!0,showRegistrationDlg:!1,showForgetpwd:!1,signin:{phonenumber:"",password:""},loginDisabled:!0,responseError:"",forgetpwd:{phonenumber:"",verifycode:"",verifycodepassed:!1,newpassword:""},signupDisabled:!0,verificationbtnDisabled:!1,verificationCountDown:60,agreeup:!0,weixinOauthLink:"",weiboOauthLink:"",showUpdateDialog:!A.a.get(I.a.StoreNotShowUpdate)}},computed:{},methods:{sendVerificationCode:function(){var e=this;this.verificationbtnDisabled=!0;var t=setInterval(function(){0<e.verificationCountDown?e.verificationCountDown--:(clearInterval(t),e.verificationbtnDisabled=!1,e.verificationCountDown=60)},1e3)},setLoginDisabled:function(){this.loginDisabled=!(2<=this.signin.phonenumber.length&&6<=this.signin.password.length),console.log("登录合法检查: "+this.loginDisabled)},Login:function(){var e=this,t=this.signin,i=t.phonenumber,o=t.password,n=i.replace(/\s+/g,"");if(""!==n&&""!==o){var s=this;this.$vux.loading.show({text:"正在登录"}),S.b.post("/user/login",{username:n,password:o}).then(function(t){var i=t.data;if(1e3!==i.code)return s.responseError=2001===i.code?"密码错误，请重新输入!":2002===i.code?"用户账号已经被冻结无法登陆，请联系管理员!":2003===i.code?"用户账号不存在，请重新输入合法的账号!":1001===i.code?"用户名或者密码不能为空!":2010===i.code?"公司用户账号已经过期,无法登陆!":"无法处理你的请求请稍后重试！",e.$vux.loading.hide(),void e.$vux.toast.show({text:s.responseError,type:"warn"});if(i.data){e.$vux.loading.hide();var o=i.data;o={customerdata:o,username:n},s.$store.dispatch("UpdateUserSession",o),e.$vux.toast.show({time:6e3,text:"登录成功!"}),s.$route.params.path?s.$router.push({path:s.$route.params.path}):Object(L.b)()?s.$router.push({name:"home"}):s.$router.push({name:"ucenter"}),A.a.set(I.a.StoreNotShowUpdate,!1)}}).catch(function(t){e.$vux.loading.hide(),e.$vux.toast.show({text:"登录异常请稍后重试,错误代码: "+t,type:"warn"})})}else this.$vux.alert.show({title:"登录提示",content:"用户名或者密码不能为空!"})},findMyPasswordSubmit:function(){var e=this,t={phonenumber:this.forgetpwd.phonenumber,verifycode:this.forgetpwd.verifycode};S.b.post("/user/sendcode",t).then(function(t){1e3===t.data.code&&(e.$vux.toast.show({text:"新的临时登录密码已经发送到您的手机,请注意查收!"}),e.forgetpwd.phonenumber="",e.forgetpwd.verifycode="",e.showRegistrationDlg=!1)}).catch(function(e){console.log("找回密码失败:"+e)})},backLoginPage:function(){this.showRegistrationDlg=!1,this.showlogin=!0}},mounted:function(){}}),O={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("blur",{attrs:{height:e.mobileHeight,"blur-amount":1050,url:"../../static/img/login_background.jpg"}},[e.showlogin?o("div",[o("div",{staticClass:"center"},[o("img",{attrs:{src:i("./static/img/loginavata.png")}}),e._v(" "),o("br"),e._v(" "),o("span",{staticStyle:{"text-align":"center"}},[e._v("工程VR实景系统")])]),e._v(" "),o("group",[o("x-input",{ref:"signinphonenumber",attrs:{required:"",type:"text",placeholder:"输入用户名/手机号","should-toast-error":!1},on:{"on-change":e.setLoginDisabled},model:{value:e.signin.phonenumber,callback:function(t){e.$set(e.signin,"phonenumber","string"==typeof t?t.trim():t)},expression:"signin.phonenumber"}}),e._v(" "),o("x-input",{ref:"signinpassword",attrs:{type:"password",placeholder:"输入登录密码","should-toast-error":!1},on:{"on-change":e.setLoginDisabled},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.Login(t):null}},model:{value:e.signin.password,callback:function(t){e.$set(e.signin,"password","string"==typeof t?t.trim():t)},expression:"signin.password"}})],1),e._v(" "),o("divider"),e._v(" "),o("box",{attrs:{gap:"30px 10px"}},[o("x-button",{staticStyle:{"border-radius":"99px"},attrs:{type:"primary","action-type":"submit",disabled:e.loginDisabled},nativeOn:{click:function(t){return e.Login(t)}}},[e._v("\n        登录\n      ")])],1),e._v(" "),o("box",[o("a",{staticClass:"forgetlink",on:{click:function(t){e.showRegistrationDlg=!0}}},[e._v("忘记密码?")])]),e._v(" "),o("divider"),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[o("el-button",{attrs:{type:"text"},nativeOn:{click:function(t){e.showRegistrationDlg=!0}}},[e._v("立即注册")]),e._v(" "),o("el-button",{staticStyle:{float:"right"},attrs:{type:"text"},nativeOn:{click:function(t){e.showRegistrationDlg=!0}}},[e._v("忘记密码?")])],1),e._v(" "),o("divider",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v("第三方登录")]),e._v(" "),o("grid",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{"show-lr-borders":!1,"show-vertical-dividers":!1}},[o("grid-item",{attrs:{link:e.weixinOauthLink}},[o("svg",{staticClass:"icon",staticStyle:{width:"100px"},attrs:{"aria-hidden":"true"}},[o("use",{attrs:{"xlink:href":"#WEIXIN"}})])]),e._v(" "),o("grid-item",{attrs:{link:e.weiboOauthLink}},[o("svg",{staticClass:"icon",staticStyle:{width:"100px"},attrs:{"aria-hidden":"true"}},[o("use",{attrs:{"xlink:href":"#weibo"}})])])],1)],1):e._e(),e._v(" "),o("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[o("popup",{attrs:{height:"100%"},model:{value:e.showRegistrationDlg,callback:function(t){e.showRegistrationDlg=t},expression:"showRegistrationDlg"}},[o("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"100"},attrs:{title:"找回密码","left-options":{showBack:!0,backText:"",preventGoBack:!0}},on:{"on-click-back":function(t){e.showRegistrationDlg=!1}}}),e._v(" "),o("div",{staticStyle:{"margin-top":"64px"}},[o("group",[o("x-input",{ref:"forgetphonenumber",attrs:{mask:"99999999999",keyboard:"number",max:13,required:"","is-type":"china-mobile",placeholder:"输入注册时的手机号码"},model:{value:e.forgetpwd.phonenumber,callback:function(t){e.$set(e.forgetpwd,"phonenumber","string"==typeof t?t.trim():t)},expression:"forgetpwd.phonenumber"}}),e._v(" "),o("x-input",{staticClass:"weui-vcode",attrs:{placeholder:"输入六位短信验证码",max:50,required:""},model:{value:e.forgetpwd.verifycode,callback:function(t){e.$set(e.forgetpwd,"verifycode","string"==typeof t?t.trim():t)},expression:"forgetpwd.verifycode"}},[o("x-button",{attrs:{slot:"right",type:"primary",mini:"",disabled:e.verificationbtnDisabled},nativeOn:{click:function(t){return e.sendVerificationCode(t)}},slot:"right"},[e.verificationbtnDisabled?o("span",[e._v(e._s(e.verificationCountDown+"秒"))]):e._e(),e._v(" "),e.verificationbtnDisabled?e._e():o("span",[e._v("发送")])])],1)],1),e._v(" "),o("divider"),e._v(" "),o("box",{attrs:{gap:"10px 10px"}},[o("x-button",{staticStyle:{"border-radius":"99px"},attrs:{type:"primary",disabled:!(11===this.forgetpwd.phonenumber.length&&6===this.forgetpwd.verifycode.length)},nativeOn:{click:function(t){return e.findMyPasswordSubmit(t)}}},[e._v("\n            找回密码\n          ")])],1)],1)],1),e._v(" "),o("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[o("x-dialog",{staticClass:"dialog-update",attrs:{"hide-on-blur":""},model:{value:e.showUpdateDialog,callback:function(t){e.showUpdateDialog=t},expression:"showUpdateDialog"}},[o("div",{staticClass:"version-box"},[o("h2",{staticClass:"header"},[e._v("工程VR实景系统")]),e._v(" "),o("h3",{staticClass:"header-msg",staticStyle:{"margin-top":"10px"}},[e._v("检测到新的更新版本")]),e._v(" "),o("ul",{staticStyle:{"text-align":"left","margin-left":"15px","list-style":"none"}},[o("li",[o("b",[e._v("主版本号 ")]),e._v(e._s(e.newVersion))]),e._v(" "),o("li",[o("b",[e._v("发布时间 ")]),e._v(e._s(e.buildRevisionNumber))])]),e._v(" "),o("h4",{staticStyle:{margin:"4px 15px","text-align":"left"}},[e._v("请重新登录以体验最新功能特性")])]),e._v(" "),o("span",{staticStyle:{"text-align":"right","font-size":"12px",color:"#2e82ff","text-decoration":"none"}},[o("a",{on:{click:function(t){e.$router.push({name:"note"}),e.showUpdateDialog=!1}}},[e._v("更新修复内容")])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"weui-dialog__ft"},[o("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",on:{click:function(t){e.showUpdateDialog=!1}}},[e._v("关闭")])])])],1)],1)])},staticRenderFns:[]};var R=i("./node_modules/vue-loader/lib/component-normalizer.js")($,O,!1,function(e){i('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-561edeb7","scoped":true,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/PanoLogin.vue')},"data-v-561edeb7",null);t.default=R.exports},"./static/img/loginavata.png":function(e,t,i){e.exports=i.p+"static/img/loginavata.bundle.png"}});