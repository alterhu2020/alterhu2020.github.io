webpackJsonp([20],{'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-1773f218","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/WeixinUploader.vue':function(e,o){},'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-79b35668","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vux/src/components/inline-loading/index.vue':function(e,o){},'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-97b1bcea","scoped":true,"hasInlineConfig":false}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/SuggestionFeedback.vue':function(e,o){},"./src/components/WeixinUploader.vue":function(e,o,s){"use strict";var t=s("./node_modules/babel-runtime/helpers/slicedToArray.js"),a=s.n(t),n=s("./node_modules/babel-runtime/core-js/object/entries.js"),l=s.n(n),i=s("./node_modules/babel-runtime/core-js/json/stringify.js"),r=s.n(i),d=s("./node_modules/vux/src/components/flexbox/flexbox.vue"),u=s("./node_modules/vux/src/components/flexbox/flexbox-item.vue"),c=s("./node_modules/vux/src/components/previewer/index.vue"),m={render:function(){var e=this.$createElement;return(this._self._c||e)("i",{staticClass:"weui-loading"})},staticRenderFns:[]};var p=s("./node_modules/vue-loader/lib/component-normalizer.js")({name:"inline-loading"},m,!1,function(e){s('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-79b35668","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vux/src/components/inline-loading/index.vue')},null,null).exports,v=s("./src/api/index.js"),x=(d.a,u.a,c.a,Array,Boolean,Boolean,Boolean,String,Number,Function,Function,Function,String,Object,Number,Boolean,{name:"WeixinUploader",components:{Flexbox:d.a,FlexboxItem:u.a,Previewer:c.a,InlineLoading:p},model:{prop:"images",event:"change"},props:{images:{type:Array,default:function(){return[]}},readonly:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!1},showUploadIcon:{type:Boolean,default:!1},title:{type:String,default:"图片上传"},max:{type:Number,default:20},beforeUpload:Function,onSuccess:Function,onRemoveImage:Function,url:{type:String,required:!0},data:{type:Object,default:function(){return{}}},span:{type:Number,default:4},preview:{type:Boolean,default:!0}},data:function(){return{loading:!1}},watch:{loading:function(e){e||(this.$refs.file.value="")}},methods:{onChooseImage:function(){if(this.images.length>=this.max)this.$vux.toast.show({text:"最多上传"+this.max+"个图片! "});else{var e=this;this.$device.isWechat?this.$wechat.chooseImage({count:1,sizeType:["original"],sourceType:["album"],success:function(o){var s=o.localIds[0];if(-1!==s.indexOf("wxlocalresource")&&(s=s.replace("wxlocalresource","wxLocalResource")),console.log("选择图片的第一张图片id是: "+s),e.beforeUpload&&"function"==typeof e.beforeUpload){var t=e.beforeUpload(s);t&&t.then?t.then(function(){e.uploadImage(s)}).catch(function(){e.onRemoveImage(null,s)}):!1===t?e.onRemoveImage(null,s):e.uploadImage(s)}else e.uploadImage(s)},cancel:function(){console.log("取消了选择图片操作!")},fail:function(e){alert("相机打开发生故障，请重试,错误代码:"+r()(e))}}):this.$vux.toast.show({type:"warn",time:6e3,text:"非法操作，上传文件只能在手机微信端操作！"})}},uploadImage:function(e){var o=this;this.loading=!0,e?setTimeout(function(){o.$wechat.uploadImage({localId:e.toString(),isShowProgressTips:1,success:function(e){var s=e.serverId,t=new FormData;l()(o.data).forEach(function(e){var o=a()(e,2),s=o[0],n=o[1];t.append(s,n)}),t.append("mediaid",s),v.b.post(o.url,t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){1e3===e.data.code&&(o.loading=!1,o.onSuccess(e.data,s,o.images))}).catch(function(e){o.loading=!1,alert("调用接口出错: "+r()(e)),o.onError(e,s)})},cancel:function(){o.loading=!1},fail:function(e){o.loading=!1,alert("上传图片错误: "+r()(e))}})},100):o.$vux.toast.show({time:4e3,width:"50em",text:"上传图片LocalId为空!"})},onProgress:function(){this.loading=!0},onPreview:function(e){this.preview&&this.$refs.previewer.show(e)},onError:function(e,o){this.$emit("error",e,o)}}}),h={render:function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("div",{staticClass:"vux-upload"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showHeader,expression:"showHeader"}],staticClass:"weui-uploader__hd"},[s("div",{staticClass:"weui-uploader__info"},[e._v(e._s(e.title)+"("+e._s(e.images.length)+"/"+e._s(e.max)+")")])]),e._v(" "),s("flexbox",{attrs:{gutter:0,wrap:"wrap"}},[e._l(e.images,function(o,t){return s("flexbox-item",{key:t,attrs:{span:e.span},nativeOn:{click:function(o){e.onPreview(t)}}},[s("div",{staticClass:"vux-upload-bg"},[s("div",{staticClass:"vux-upload-content",style:{backgroundImage:"url("+o.src+")"}},[e.readonly?e._e():s("svg",{staticClass:"vux-x-icon vux-x-icon-ios-close red",attrs:{type:"ios-close",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 512 512"},on:{click:function(s){e.onRemoveImage(t,o.name)}}},[s("path",{staticClass:"st0",attrs:{d:"M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0s-81.2 212.9 0 294.2c81.2 81.2 212.9 81.2 294.2 0s81.2-213 0-294.2zM352 340.2L340.2 352l-84.4-84.2-84 83.8-11.8-11.8 84-83.8-84-83.8 11.8-11.8 84 83.8 84.4-84.2 11.8 11.8-84.4 84.2 84.4 84.2z"}})])])])])}),e._v(" "),s("flexbox-item",{directives:[{name:"show",rawName:"v-show",value:!e.readonly&&e.images.length<e.max,expression:"!readonly && images.length < max"}],attrs:{span:e.span}},[s("div",{staticClass:"vux-upload-bg"},[s("div",{staticClass:"weui-uploader__input-box vux-upload-content",class:{loading:e.loading}},[s("button",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],ref:"file",staticClass:"weui-uploader__input",staticStyle:{width:"100%",height:"100%"},attrs:{value:"相机/相册"},on:{click:e.onChooseImage}},[e._v("\n            相机/相册\n          ")]),e._v(" "),s("inline-loading",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]})],1)])])],2),e._v(" "),s("previewer",{ref:"previewer",attrs:{list:e.images}})],1)},staticRenderFns:[]};var f=s("./node_modules/vue-loader/lib/component-normalizer.js")(x,h,!1,function(e){s('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-1773f218","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/WeixinUploader.vue')},null,null);o.a=f.exports},"./src/pages/SuggestionFeedback.vue":function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=s("./node_modules/vux/src/components/checklist/index.vue"),a=s("./node_modules/vux/src/components/group-title/index.vue"),n=s("./node_modules/vux/src/components/msg/index.vue"),l=s("./node_modules/vux/src/components/x-dialog/index.vue"),i=s("./node_modules/vux/src/components/x-header/index.vue"),r=s("./node_modules/vux/src/components/x-textarea/index.vue"),d=s("./src/components/WeixinUploader.vue"),u=s("./src/webconfig.js"),c=s("./src/api/index.js"),m=s("./src/utils/StoreUtils.js"),p=s("./src/utils/PlatformUtils.js"),v=s("./src/utils/ElectronUtils.js"),x=(i.a,a.a,t.a,r.a,d.a,l.a,n.a,{name:"SuggestionFeedback",metaInfo:{title:"意见反馈"},data:function(){return{type:null,description:"",uploadScreenshotUrl:u.a.ApiServerURI+"/v1/upload/file",uploadScreenshotParams:{type:7},screenshotImages:[],showSuccessDialog:!1}},components:{XHeader:i.a,GroupTitle:a.a,Checklist:t.a,XTextarea:r.a,Uploader:d.a,XDialog:l.a,Msg:n.a},methods:{handleScreenshotUploadRemove:function(e,o){var s=this;if("number"==typeof e){this.logoImages.splice(e,1);var t=u.a.ApiServerURI+"/v1/upload/delete/4/"+this.codetoken+"/"+o;c.b.delete(t).then(function(e){1e3===e.data.code&&s.$vux.toast.show({position:"middle",type:"success",text:"删除截图图片成功"})}).catch(function(e){console.log("删除截图图片失败 "+e)})}},handleScreenshotUploadSuccess:function(e,o){var s=e.data,t=s.filename;if("string"==typeof o){var a="https://www.yitieyilu.com"+s.url;this.screenshotImages.push({src:a,name:t})}else this.imageUrl=URL.createObjectURL(o.raw)},goBackButtonClick:function(){this.$store.dispatch("UpdateShowTabbar",!0),Object(p.b)()?this.$router.go(-1):Object(v.a)()},handleSubmitFeedback:function(){var e=this;if(null!==this.type)if(10<=this.description.length){var o={userid:m.a.get(u.a.StoreUserInfoKey).customerdata.userid,types:this.type,desc:this.description,screenshots:this.screenshotImages};c.b.post("/feedback",o).then(function(o){1e3===o.data.code&&(e.showSuccessDialog=!0)})}else this.$vux.toast.show({type:"warn",text:"请输入不少于10个字的描述"});else this.$vux.toast.show({type:"warn",text:"请选择你想反馈的问题点"})}},mounted:function(){this.$store.dispatch("UpdateShowTabbar",!1)}}),h={render:function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("div",[s("x-header",{attrs:{slot:"header","left-options":{showBack:!0,preventGoBack:!0},title:"意见反馈"},on:{"on-click-back":e.goBackButtonClick},slot:"header"},[s("span",{staticStyle:{"font-size":"18px !important","font-weight":"400"},attrs:{slot:"right"},on:{click:e.handleSubmitFeedback},slot:"right"},[e._v("\n          提交\n        ")])]),e._v(" "),s("checklist",{attrs:{title:"(必填)请选择你想反馈的问题点",required:"",options:[{key:"1",value:"功能异常",inlineDesc:"功能故障或者不可用"},{key:"2",value:"产品建议",inlineDesc:"用的不爽,我有建议"},{key:"3",value:"安全问题",inlineDesc:"密码,隐私,欺诈等"},{key:"4",value:"其它问题"}]},model:{value:e.type,callback:function(o){e.type=o},expression:"type"}}),e._v(" "),s("group",{attrs:{title:"(必填)请补充详细问题和意见"}},[s("x-textarea",{attrs:{max:240,"show-counter":!0,placeholder:"请输入不少于10个字的描述",rows:5,autosize:""},model:{value:e.description,callback:function(o){e.description=o},expression:"description"}})],1),e._v(" "),s("uploader",{attrs:{"show-header":"",title:"请提供相关问题的截图或照片",images:e.screenshotImages,data:e.uploadScreenshotParams,url:e.uploadScreenshotUrl,max:4,"on-success":e.handleScreenshotUploadSuccess,"on-remove":e.handleScreenshotUploadRemove}}),e._v(" "),s("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[s("x-dialog",{staticClass:"dialog-demo",attrs:{"hide-on-blur":""},on:{"on-hide":e.goBackButtonClick},model:{value:e.showSuccessDialog,callback:function(o){e.showSuccessDialog=o},expression:"showSuccessDialog"}},[s("msg",{attrs:{title:"您的宝贵意见我们已经收到,我们将尽快给您答复!",description:"感谢您一直以来的陪伴和支持,我们一直在努力更新完善中!"}}),e._v(" "),s("div",{staticStyle:{height:"40px"},on:{click:function(o){e.showSuccessDialog=!1}}},[s("p",[e._v("好的")])])],1)],1)],1)},staticRenderFns:[]};var f=s("./node_modules/vue-loader/lib/component-normalizer.js")(x,h,!1,function(e){s('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-97b1bcea","scoped":true,"hasInlineConfig":false}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/SuggestionFeedback.vue')},"data-v-97b1bcea",null);o.default=f.exports}});