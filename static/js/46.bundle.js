webpackJsonp([46],{'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6c0adcb4","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/LaborsLayout.vue':function(e,t){},"./src/components/LaborsLayout.vue":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("./node_modules/babel-runtime/helpers/extends.js"),n=o.n(s),r=o("./node_modules/vuex/dist/vuex.esm.js"),a=(n()({},Object(r.c)({route:function(e){return e.route},path:function(e){return e.route.path},ScrollTop:function(e){return e.vux.scrolltotop},isLoading:function(e){return e.vux.isloading},direction:function(e){return e.vux.direction},showHeader:function(e){return e.vux.showHeader},showTabbar:function(e){return e.vux.showTabbar}}),{viewTransition:function(){return this.direction?"vux-pop-"+("forward"===this.direction?"in":"out"):""}}),n()({},Object(r.b)({updateTopPosition:"UpdateTopPosition"})),{name:"LaborsLayout",metaInfo:{title:"工程VR实景",titleTemplate:"%s"},data:function(){return{}},computed:n()({},Object(r.c)({route:function(e){return e.route},path:function(e){return e.route.path},ScrollTop:function(e){return e.vux.scrolltotop},isLoading:function(e){return e.vux.isloading},direction:function(e){return e.vux.direction},showHeader:function(e){return e.vux.showHeader},showTabbar:function(e){return e.vux.showTabbar}}),{viewTransition:function(){return this.direction?"vux-pop-"+("forward"===this.direction?"in":"out"):""}}),methods:n()({},Object(r.b)({updateTopPosition:"UpdateTopPosition"})),activated:function(){this.updateTopPosition(10)}}),i={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{height:"100%"}},[o("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[o("loading",{model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}})],1),e._v(" "),o("view-box",{ref:"viewBox",attrs:{"body-padding-top":e.showHeader?"35px":"0","body-padding-bottom":"105px"}},[o("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated zoomIn","leave-active-class":"animated bounceOutDown"}},[o("keep-alive",[o("router-view",{ref:"child",staticClass:"router-view"})],1)],1),e._v(" "),o("tabbar",{directives:[{name:"show",rawName:"v-show",value:e.showTabbar,expression:"showTabbar"}],attrs:{slot:"bottom","icon-class":"vux-center"},slot:"bottom"},[o("tabbar-item",{attrs:{link:{name:"laborhome"},selected:"laborhome"===e.route.name}},[o("span",{staticStyle:{position:"relative",top:"-2px"},attrs:{slot:"icon"},slot:"icon"},[o("svg",{staticClass:"icon",staticStyle:{height:"30px",width:"30px"},attrs:{slot:"icon","aria-hidden":"true"},slot:"icon"},[o("use",{attrs:{"xlink:href":"#mylabor"}})])]),e._v(" "),o("span",{attrs:{slot:"label"},slot:"label"},[e._v("我的")])]),e._v(" "),o("tabbar-item",{attrs:{link:{name:"laborlist"},selected:"laborlist"===e.route.name}},[o("svg",{staticClass:"icon",staticStyle:{height:"30px",width:"30px"},attrs:{slot:"icon","aria-hidden":"true"},slot:"icon"},[o("use",{attrs:{"xlink:href":"#transaction"}})]),e._v(" "),o("span",{attrs:{slot:"label"},slot:"label"},[e._v("明细")])])],1)],1)],1)},staticRenderFns:[]};var l=o("./node_modules/vue-loader/lib/component-normalizer.js")(a,i,!1,function(e){o('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6c0adcb4","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/LaborsLayout.vue')},null,null);t.default=l.exports}});