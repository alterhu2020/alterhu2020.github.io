webpackJsonp([10],{'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-01a254a2","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vux/src/components/masker/index.vue':function(e,t){},'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-443f5750","scoped":true,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/PanoHome.vue':function(e,t){},'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-c625a4a0","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vux/src/components/marquee/marquee.vue':function(e,t){},"./node_modules/vux/src/components/marquee/marquee-item.vue":function(e,t,o){"use strict";var s={render:function(){var e=this.$createElement;return(this._self._c||e)("li",[this._t("default")],2)},staticRenderFns:[]},n=o("./node_modules/vue-loader/lib/component-normalizer.js")({name:"marquee-item",mounted:function(){var e=this;this.$nextTick(function(){e.$parent.destroy(),e.$parent.init(),e.$parent.start()})}},s,!1,null,null,null);t.a=n.exports},"./node_modules/vux/src/components/marquee/marquee.vue":function(e,t,o){"use strict";Number,Number,String,Number;var s={name:"marquee",props:{interval:{type:Number,default:2e3},duration:{type:Number,default:300},direction:{type:String,default:"up"},itemHeight:Number},beforeDestroy:function(){this.destroy()},data:function(){return{currenTranslateY:0,height:"",length:0,currentIndex:0,noAnimate:!1}},methods:{destroy:function(){this.timer&&clearInterval(this.timer)},init:function(){this.destroy(),this.cloneNode&&this.$refs.box.removeChild(this.cloneNode),this.cloneNode=null;var e=this.$refs.box.firstElementChild;return!!e&&(this.length=this.$refs.box.children.length,this.height=this.itemHeight||e.offsetHeight,"up"===this.direction?(this.cloneNode=e.cloneNode(!0),this.$refs.box.appendChild(this.cloneNode)):(this.cloneNode=this.$refs.box.lastElementChild.cloneNode(!0),this.$refs.box.insertBefore(this.cloneNode,e)),!0)},start:function(){var e=this;"down"===this.direction&&this.go(!1),this.timer=setInterval(function(){"up"===e.direction?(e.currentIndex+=1,e.currenTranslateY=-e.currentIndex*e.height):(e.currentIndex-=1,e.currenTranslateY=-(e.currentIndex+1)*e.height),e.currentIndex===e.length?setTimeout(function(){e.go(!0)},e.duration):-1===e.currentIndex?setTimeout(function(){e.go(!1)},e.duration):e.noAnimate=!1},this.interval+this.duration)},go:function(e){this.noAnimate=!0,e?(this.currentIndex=0,this.currenTranslateY=0):(this.currentIndex=this.length-1,this.currenTranslateY=-(this.currentIndex+1)*this.height)}}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vux-marquee",style:{height:this.height+"px"}},[t("ul",{ref:"box",staticClass:"vux-marquee-box",style:{transform:"translate3d(0,"+this.currenTranslateY+"px,0)",transition:"transform "+(this.noAnimate?0:this.duration)+"ms"}},[this._t("default")],2)])},staticRenderFns:[]};var i=o("./node_modules/vue-loader/lib/component-normalizer.js")(s,n,!1,function(e){o('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-c625a4a0","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vux/src/components/marquee/marquee.vue')},null,null);t.a=i.exports},"./node_modules/vux/src/components/masker/index.vue":function(e,t,o){"use strict";function s(e){var t=parseInt(e,16);return[t>>16,255&t>>8,255&t]}String,Number,Boolean;var n={name:"masker",props:{color:{type:String,default:"0, 0, 0"},opacity:{type:Number,default:.5},fullscreen:{type:Boolean,default:!1}},computed:{style:function(){return{backgroundColor:"rgba("+(/,/.test(this.color)?this.color:s(this.color.replace("#","")).join(","))+","+this.opacity+")"}}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vux-masker-box"},[this._t("default"),this._v(" "),t("div",{staticClass:"vux-masker",class:{"vux-masker-fullscreen":this.fullscreen},style:this.style},[this._t("content")],2)],2)},staticRenderFns:[]};var a=o("./node_modules/vue-loader/lib/component-normalizer.js")(n,i,!1,function(e){o('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-01a254a2","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vux/src/components/masker/index.vue')},null,null);t.a=a.exports},"./src/pages/PanoHome.vue":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("./node_modules/vux/src/components/button-tab/button-tab.vue"),n=o("./node_modules/vux/src/components/button-tab/button-tab-item.vue"),i=o("./node_modules/vux/src/components/form-preview/index.vue"),a=o("./node_modules/vux/src/components/group-title/index.vue"),r=o("./node_modules/vux/src/components/load-more/index.vue"),l=o("./node_modules/vux/src/components/marquee/marquee.vue"),u=o("./node_modules/vux/src/components/marquee/marquee-item.vue"),d=o("./node_modules/vux/src/components/masker/index.vue"),c=o("./node_modules/vux/src/components/popup/index.vue"),m=o("./node_modules/vux/src/components/popup-radio/index.vue"),h=o("./node_modules/vux/src/components/previewer/index.vue"),v=o("./node_modules/vux/src/components/scroller/index.vue"),p=o("./node_modules/vux/src/components/swiper/swiper.vue"),f=o("./node_modules/vux/src/components/swiper/swiper-item.vue"),x=o("./node_modules/vux/src/components/tab/tab.vue"),_=o("./node_modules/vux/src/components/tab/tab-item.vue"),g=o("./node_modules/vux/src/components/x-header/index.vue"),y=o("./node_modules/vux/src/components/x-img/index.vue"),b=o("./node_modules/vux/src/components/x-textarea/index.vue"),w=o("./src/api/index.js"),P=o("./src/components/SwipePanoPanel.vue"),S=o("./src/utils/StoreUtils.js"),j=o("./src/webconfig.js"),k=o("./src/utils/DateUtils.js"),N=o("./src/components/sticky.js"),C=o("./node_modules/babel-runtime/core-js/json/stringify.js"),I=o.n(C),$=o("./src/utils/PlatformUtils.js"),L={data:function(){return{authuser:{}}},methods:{oAuthStoreWeixinOpenIdInfo:function(){var e=this,t=S.a.get(j.a.StoreOauthData),o=this;if(t)o.authuser=t,S.a.set(j.a.StoreOauthData,o.authuser);else{console.log("oauth认证，获取的用户信息是空，信息是： "+t);var s=this.$route.query.code;if(s&&""!==s){this.$vux.loading.show({text:"数据加载中..."}),console.log("oauth认证，已经找到oauth的code，保存中");var n="/wx/oauthcallback2?code="+s+"&userid="+S.a.get(j.a.StoreUserInfoKey).customerdata.userid;w.b.get(n).then(function(t){if(e.$vux.loading.hide(),1e3===t.data.code){var s=t.data.data;o.authuser=s,console.log("oauth认证，保存完成:"+I()(s)),S.a.set(j.a.StoreOauthData,o.authuser)}else console.log("oauth认证，保存提交失败: "+I()(t.data)),o.$vux.toast.show({type:"warn",text:"oauth认证，服务器端数据异常,返回错误码: "+I()(t.data)})}).catch(function(t){e.$vux.loading.hide(),console.log("oauth认证，调用oauth的callback回调失败: "+I()(t))})}else{console.log("oauth认证，获取的oauth携带的用户code是空，信息是： "+s);var i=encodeURIComponent(window.location.href);console.log("oauth认证，没有找到对应的oauth的code，重新定位页面"),location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx62e806a011647d8f&redirect_uri="+i+"&response_type=code&scope=snsapi_userinfo&state=yanzhi#wechat_redirect"}}}},mounted:function(){Object($.b)()&&this.oAuthStoreWeixinOpenIdInfo()}},M=o("./src/components/NoteDetail.vue"),T=(N.a,u.a,l.a,P.a,r.a,c.a,g.a,b.a,m.a,x.a,_.a,a.a,s.a,n.a,p.a,f.a,y.a,h.a,i.a,d.a,v.a,M.a,{name:"Home",metaInfo:{title:"动态管理"},directives:{sticky:N.a},mixins:[L],components:{MarqueeItem:u.a,Marquee:l.a,SwipePanel:P.a,LoadMore:r.a,Popup:c.a,XHeader:g.a,XTextarea:b.a,PopupRadio:m.a,Tab:x.a,TabItem:_.a,GroupTitle:a.a,ButtonTab:s.a,ButtonTabItem:n.a,Swiper:p.a,SwiperItem:f.a,XImg:y.a,Previewer:h.a,FormPreview:i.a,Masker:d.a,Scroller:v.a,NoteDetail:M.a},data:function(){return{tab:0,myPanoList:{count:0,items:[]},myStaticPanoList:{count:0,items:[]},myStaticPanoListPreviews:[],myNoteList:{count:0,items:[]},showNoteDetailDlg:!1,notedetail:{ConstructRegion:"",nickname:"",previewItems:[],Notes:"",PriviateRegion:"",MaterialSample:"",BusinessBill:[],DesignChangeBill:[],TechniqueChangeBill:[],ProjectVisaBill:[]},canpano:!1,userid:null,noPanoTip:"暂无任务实景数据",noteStartOffset:0,staticStartOffset:0,panoStartOffset:0,punishes:[]}},computed:{headerTransition:function(){return this.direction?"forward"===this.direction?"vux-header-fade-in-right":"vux-header-fade-in-left":""},todayPanoList:function(){return this.panolist.filter(function(e){var t=e.date,o=Object(k.d)(t,"YYYY-MM-DD");return Object(k.c)(new Date,o)})}},methods:{showPunishDetail:function(){},loadMorePano:function(){this.panoStartOffset=this.myPanoList.count,this.fetchMyPanos(this.panoStartOffset,10,!0)},refreshPano:function(){this.fetchMyPanos(0,10,!0)},loadMoreStatic:function(){this.staticStartOffset=this.myStaticPanoList.count,this.fetchMyStatics(this.staticStartOffset,10,!0)},refreshStatic:function(){this.fetchMyStatics(0,10,!0)},loadMoreNote:function(){this.noteStartOffset=this.myNoteList.count,this.fetchMyNotes(this.noteStartOffset,10,!0)},refreshNote:function(){this.fetchMyNotes(0,10,!0)},showPreviewStaticImages:function(e){var t=this;this.myStaticPanoListPreviews=[],e.result.forEach(function(e){var o={msrc:"https://static.yitieyilu.com"+e.url,src:"https://static.yitieyilu.com"+e.url,w:1200,h:900};t.myStaticPanoListPreviews.push(o)}),this.$refs.staticpreviewer.show(0)},openNoteDetail:function(e){"string"==typeof e.BusinessBill&&""!==e.BusinessBill&&(e.BusinessBill=JSON.parse(e.BusinessBill)),"string"==typeof e.DesignChangeBill&&""!==e.DesignChangeBill&&(e.DesignChangeBill=JSON.parse(e.DesignChangeBill)),"string"==typeof e.TechniqueChangeBill&&""!==e.TechniqueChangeBill&&(e.TechniqueChangeBill=JSON.parse(e.TechniqueChangeBill)),"string"==typeof e.ProjectVisaBill&&""!==e.ProjectVisaBill&&(e.ProjectVisaBill=JSON.parse(e.ProjectVisaBill)),this.showNoteDetailDlg=!0,this.notedetail=e,this.notedetail.previewItems=[],0===this.notedetail.previewItems.length&&(this.notedetail.ConstructRegion&&this.notedetail.previewItems.push({label:"施工部位",value:this.notedetail.ConstructRegion}),this.notedetail.Weather&&this.notedetail.previewItems.push({label:"气象",value:this.notedetail.Weather}),this.notedetail.QualityIssue&&this.notedetail.previewItems.push({label:"质量问题",value:this.notedetail.QualityIssue}),this.notedetail.SecurityIssue&&this.notedetail.previewItems.push({label:"安全问题",value:this.notedetail.SecurityIssue}),this.notedetail.date&&this.notedetail.previewItems.push({label:"发布时间",value:this.notedetail.date}))},clickTab:function(){0===this.tab?this.fetchMyPanos(0,10,!1):1===this.tab?this.fetchMyStatics(0,10,!1):2===this.tab&&this.fetchMyNotes(0,10,!1)},fetchMyPanos:function(e,t,o){var s=this;this.$vux.loading.show({text:"数据加载中..."});var n="/product/pano/"+this.userid+"/"+e+"/"+t;w.b.get(n).then(function(t){s.$vux.loading.hide();var n=t.data.code;if(1e3===n){var i=t.data.data;i.items.forEach(function(e){e.result.forEach(function(e){e.title=e.title?e.title:"无标题",e.desc=e.desc?e.desc:"无实景描述",e.datetime=e.nickname+"发布于"+e.date+", 任务开始时间: "+e.taskdate})}),0===e?s.myPanoList=i:(s.myPanoList.count+=i.count,s.myPanoList.items=s.myPanoList.items.concat(i.items)),o&&(s.$refs.panoscroller.donePullup(),s.$refs.panoscroller.donePulldown()),0===i.count&&(s.noPanoTip="无实景数据！")}else 1004===n&&o&&s.$vux.toast.show({text:"已经到底了，没有更多数据了！"})}).catch(function(e){s.$vux.loading.hide(),console.log(""+e),s.noPanoTip="网络连接异常，稍后点击重试！",s.$vux.toast.show({type:"warn",text:"网络连接异常，错误代码: "+e})})},fetchMyStatics:function(e,t,o){var s=this;this.$vux.loading.show({text:"数据加载中..."}),w.b.get("/product/static/"+this.userid+"/"+e+"/"+t).then(function(t){s.$vux.loading.hide();var n=t.data.code;if(1e3===n){var i=t.data.data;0===e?s.myStaticPanoList=i:(s.myStaticPanoList.count+=i.count,s.myStaticPanoList.items=s.myStaticPanoList.items.concat(i.items)),o&&(s.$refs.staticscroller.donePullup(),s.$refs.staticscroller.donePulldown())}else 1004===n&&o&&s.$vux.toast.show({text:"已经到底了，没有更多数据了！"})}).catch(function(e){s.$vux.loading.hide(),alert("获取静态图片列表出错: "+e)})},fetchMyNotes:function(e,t,o){var s=this;this.$vux.loading.show({text:"数据加载中..."}),w.b.get("/product/note/"+this.userid+"/"+e+"/"+t).then(function(t){s.$vux.loading.hide();var n=t.data.code;if(1e3===n){var i=t.data.data;if(0<i.count){s.myNoteList.count=i.count;var a=i.items;a.forEach(function(e,t){e.row=t,e["showlist"+e.row]=!0}),0===e?(s.myNoteList.count=i.count,s.myNoteList.items=a):(s.myNoteList.count+=i.count,s.myNoteList.items=s.myNoteList.items.concat(a))}o&&(s.$refs.notescroller.donePullup(),s.$refs.notescroller.donePulldown())}else 1004===n&&o&&s.$vux.toast.show({text:"已经到底了，没有更多数据了！"})}).catch(function(e){s.$vux.loading.hide(),alert("获取日志列表出错: "+e)})},fetchOthersPanoList:function(){},handleUpdatePano:function(){},saveUpdatePanoInfo:function(){},handledeletePano:function(){}},mounted:function(){this.$store.dispatch("UpdateShowHeader",!1),this.$store.dispatch("UpdateShowTabbar",!0);var e=S.a.get(j.a.StoreUserInfoKey);this.canpano=e.customerdata.canpano,this.userid=e.customerdata.userid,this.fetchMyPanos(0,10,!1)}}),B={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("group-title"),e._v(" "),o("group",{directives:[{name:"show",rawName:"v-show",value:"login"!==e.$route.name&&e.punishes.length>0,expression:"$route.name!=='login' && punishes.length>0"}]},[o("cell",{staticClass:"board",attrs:{title:"公告"}},[o("marquee",e._l(e.punishes,function(t,s){return o("marquee-item",{key:s,nativeOn:{click:function(t){e.showPunishDetail()}}},[e._v(e._s(t.detail))])}))],1)],1),e._v(" "),o("button-tab",{directives:[{name:"sticky",rawName:"v-sticky",value:{zIndex:100,stickyTop:0,className:"sticky-buttons"},expression:"{ zIndex: 100, stickyTop: 0, className: 'sticky-buttons' }"}],model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[o("button-tab-item",{on:{"on-item-click":function(t){e.clickTab()}}},[e._v("任务实景")]),e._v(" "),o("button-tab-item",{on:{"on-item-click":function(t){e.clickTab()}}},[e._v("任务照片")]),e._v(" "),o("button-tab-item",{on:{"on-item-click":function(t){e.clickTab()}}},[e._v("施工日志")])],1),e._v(" "),0===e.tab?o("div",[e.myPanoList.count>0?o("div",[o("group-title",{staticStyle:{"font-size":"12px"}},[e._v("当前共有"),o("b",[e._v(e._s(e.myPanoList.count))]),e._v("个实景动态(按职位排序)")]),e._v(" "),o("scroller",{ref:"panoscroller",staticStyle:{"margin-bottom":"20px"},attrs:{height:"-50","lock-x":"","scrollbar-y":"","use-pulldown":"","use-pullup":"","pullup-config":{content:"上拉加载更多",downContent:"松开进行加载",upContent:"上拉加载更多",loadingContent:"更新实景加载中...",clsPrefix:"xs-plugin-pullup-"},"pulldown-config":{content:"下拉刷新",downContent:"下拉刷新",upContent:"释放刷新",loadingContent:"加载实景中...",clsPrefix:"xs-plugin-pulldown-"}},on:{"on-pullup-loading":e.loadMorePano,"on-pulldown-loading":e.refreshPano}},[o("div",e._l(e.myPanoList.items,function(t,s){return o("div",{key:s},[o("h4",[o("span",{staticStyle:{"margin-left":"10px","font-weight":"bold","line-height":"1.5","font-family":"'PingFang SC','Helvetica Neue','Helvetica','Arial',sans-serif"}},[e._v("职位:  "+e._s(t.role))])]),e._v(" "),o("div",{staticStyle:{margin:"5px",overflow:"hidden"}},[o("swipe-panel",{attrs:{list:t.result}})],1)])}))])],1):e._e(),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:0===e.myPanoList.count,expression:"myPanoList.count === 0"}]},[o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("load-more",{attrs:{"show-loading":!1,tip:e.noPanoTip,"background-color":"#fbf9fe"},nativeOn:{click:function(t){e.fetchMyPanos(0,10,!1)}}})],1)]):e._e(),e._v(" "),1===e.tab?o("div",[e.myStaticPanoList.count>0?o("div",[o("scroller",{ref:"staticscroller",attrs:{height:"-50","lock-x":"","scrollbar-y":"","use-pulldown":"","use-pullup":"","pullup-config":{content:"上拉加载更多",downContent:"松开进行加载",upContent:"上拉加载更多",loadingContent:"更新静态图片加载中...",clsPrefix:"xs-plugin-pullup-"},"pulldown-config":{content:"下拉刷新",downContent:"下拉刷新",upContent:"释放刷新",loadingContent:"加载静态图片中...",clsPrefix:"xs-plugin-pulldown-"}},on:{"on-pullup-loading":e.loadMoreStatic,"on-pulldown-loading":e.refreshStatic}},[o("div",e._l(e.myStaticPanoList.items,function(t,s){return o("div",{key:s,staticStyle:{"margin-bottom":"5px","margin-top":"5px"}},[o("h4",[o("span",{staticStyle:{"margin-left":"10px","font-weight":"bold","line-height":"1.5","font-family":"'PingFang SC','Helvetica Neue','Helvetica','Arial',sans-serif"}},[e._v("职位: "+e._s(t.role))])]),e._v(" "),e._l(t.result,function(t,s){return o("div",{key:s,staticStyle:{margin:"10px",overflow:"hidden"}},[o("masker",{staticStyle:{"border-radius":"2px"},nativeOn:{click:function(o){e.showPreviewStaticImages(t,s)}}},[o("div",{staticClass:"m-img",style:{backgroundImage:"url(https://static.yitieyilu.com"+t.result[0].url+")"}}),e._v(" "),o("div",{staticClass:"m-title",attrs:{slot:"content"},slot:"content"},[e._v("\n                  "+e._s(t.result[0].data?JSON.parse(t.result[0].data).title:"")+"\n                  "),o("br"),e._v(" "),o("span",{staticClass:"m-time"},[e._v(e._s(t.result[0].date))])])])],1)}),e._v(" "),o("divider")],2)}))])],1):e._e(),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:0===e.myStaticPanoList.count,expression:"myStaticPanoList.count === 0"}]},[o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("load-more",{attrs:{"show-loading":!1,tip:"暂无静态图片数据","background-color":"#fbf9fe"}})],1)]):e._e(),e._v(" "),2===e.tab?o("div",[e.myNoteList.count>0?o("div",[o("group-title",{staticStyle:{"font-size":"13px"}},[e._v("当前共有"),o("b",[e._v(e._s(e.myNoteList.count))]),e._v("个施工日志(按职位排序)")]),e._v(" "),o("scroller",{ref:"notescroller",attrs:{height:"-50","lock-x":"","scrollbar-y":"","use-pulldown":"","use-pullup":"","pullup-config":{content:"上拉加载更多",downContent:"松开进行加载",upContent:"上拉加载更多",loadingContent:"更新施工日志加载中...",clsPrefix:"xs-plugin-pullup-"},"pulldown-config":{content:"下拉刷新",downContent:"下拉刷新",upContent:"释放刷新",loadingContent:"加载施工日志中...",clsPrefix:"xs-plugin-pulldown-"}},on:{"on-pullup-loading":e.loadMoreNote,"on-pulldown-loading":e.refreshNote}},[o("div",e._l(e.myNoteList.items,function(t,s){return o("div",{key:s},[o("cell",{key:s,staticStyle:{"margin-left":"10px","font-weight":"bold","line-height":"1.5","font-family":"'PingFang SC','Helvetica Neue','Helvetica','Arial',sans-serif"},attrs:{title:"职位:"+t.role,"is-link":"","border-intent":!1,"arrow-direction":t["showlist"+t.row]?"down":"up"},nativeOn:{click:function(e){t["showlist"+t.row]=!t["showlist"+t.row]}}}),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t["showlist"+t.row],expression:"note['showlist'+note.row]"}]},[e._l(t.result,function(t,s){return o("div",{key:s},[o("card",{staticStyle:{margin:"5px"}},[t.TaskName?o("div",{staticClass:"weui-panel__hd",staticStyle:{color:"green"},attrs:{slot:"header"},slot:"header"},[e._v(e._s(s+1)+". "+e._s(t.TaskName)+"\n                  ")]):e._e(),e._v(" "),o("p",{staticStyle:{padding:"15px"},attrs:{slot:"content"},slot:"content"},[t.TaskDate?o("b",[e._v("任务时间: ")]):e._e(),e._v(e._s(t.TaskDate)+" "+e._s(s+1)+". "+e._s(t.nickname+"上传于"+t.date)),o("br"),e._v(" "),o("b",[e._v("质量问题: ")]),e._v(e._s(t.QualityIssue?t.QualityIssue:"无")),o("br"),e._v(" "),o("b",[e._v("安全问题: ")]),e._v(e._s(t.SecurityIssue?t.SecurityIssue:"无")),o("br")]),e._v(" "),o("div",{staticStyle:{"margin-left":"15px"},attrs:{slot:"footer"},slot:"footer"},[o("a",{staticStyle:{color:"#586C94","font-size":"14px"},on:{click:function(o){e.openNoteDetail(t)}}},[e._v("查看更多")])])])],1)}),e._v(" "),o("br")],2)],1)}))]),e._v(" "),o("br")],1):e._e(),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:0===e.myNoteList.count,expression:"myNoteList.count === 0"}]},[o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("load-more",{attrs:{"show-loading":!1,tip:"暂无施工日志数据","background-color":"#fbf9fe"}})],1)]):e._e(),e._v(" "),o("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[o("previewer",{ref:"staticpreviewer",attrs:{list:e.myStaticPanoListPreviews}})],1),e._v(" "),o("note-detail",{attrs:{show:e.showNoteDetailDlg,data:e.notedetail},on:{"on-click-back":function(t){e.showNoteDetailDlg=!1,e.showAddBtn=!0}}})],1)},staticRenderFns:[]};var D=o("./node_modules/vue-loader/lib/component-normalizer.js")(T,B,!1,function(e){o('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-443f5750","scoped":true,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/PanoHome.vue')},"data-v-443f5750",null);t.default=D.exports}});