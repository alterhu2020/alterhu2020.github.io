webpackJsonp([15],{'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-1d27e031","scoped":true,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/CheckingInReport.vue':function(e,t){},'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6ac06bd6","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vux/src/components/checker/checker-item.vue':function(e,t){},'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-be506736","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vux/src/components/checker/checker.vue':function(e,t){},"./node_modules/vux/src/components/checker/checker-item.vue":function(e,t,s){"use strict";var a=s("./node_modules/babel-runtime/core-js/json/stringify.js"),o=s.n(a),n=s("./node_modules/babel-runtime/helpers/typeof.js"),i=s.n(n);String,Number,Object,Boolean;var l={name:"checker-item",props:{value:{type:[String,Number,Object],required:!0},disabled:Boolean},watch:{disabled:function(e){e&&"radio"===this.$parent.type&&this.value===this.$parent.currentValue&&(this.$parent.currentValue="")}},computed:{classNames:function(){var e=this,t="string"==typeof this.value||"number"==typeof this.value,s={"vux-tap-active":!this.disabled};if(this.$parent.defaultItemClass&&(s[this.$parent.defaultItemClass]=!0),this.$parent.selectedItemClass){var a=!1;if("radio"===this.$parent.type)t&&this.$parent.currentValue===this.value?a=!0:"object"===i()(this.value)&&r(this.$parent.currentValue,this.value)&&(a=!0);else if("string"==typeof this.value)-1<this.$parent.currentValue.indexOf(this.value)&&(a=!0);else if(this.$parent.currentValue&&this.$parent.currentValue.length){a=0<this.$parent.currentValue.filter(function(t){return r(t,e.value)}).length}s[this.$parent.selectedItemClass]=a}return this.$parent.disabledItemClass&&(s[this.$parent.disabledItemClass]=this.disabled),s}},methods:{select:function(){"radio"===this.$parent.type?this.selectRadio():this.selectCheckbox()},selectRadio:function(){this.disabled||(this.$parent.currentValue===this.value?!this.$parent.radioRequired&&(this.$parent.currentValue=""):this.$parent.currentValue=this.value),this.$emit("on-item-click",this.value,this.disabled)},selectCheckbox:function(){this.$parent.currentValue&&null!==this.$parent.currentValue||(this.$parent.currentValue=[]);var e="string"==typeof this.value||"number"==typeof this.value;if(!this.disabled){var t;-1<(t=e?this.$parent.currentValue.indexOf(this.value):this.$parent.currentValue.map(function(e){return o()(e)}).indexOf(o()(this.value)))?this.$parent.currentValue.splice(t,1):(!this.$parent.max||this.$parent.max&&null!==this.$parent.currentValue&&this.$parent.currentValue.length<this.$parent.max)&&((!this.$parent.currentValue||!this.$parent.currentValue.length)&&(this.$parent.currentValue=[]),this.$parent.currentValue.push(this.value))}this.$emit("on-item-click",this.value,this.disabled)}}};function r(e,t){return o()(e)===o()(t)}var c={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"vux-checker-item",class:this.classNames,on:{click:this.select}},[this._t("default")],2)},staticRenderFns:[]};var u=s("./node_modules/vue-loader/lib/component-normalizer.js")(l,c,!1,function(e){s('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6ac06bd6","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vux/src/components/checker/checker-item.vue')},null,null);t.a=u.exports},"./node_modules/vux/src/components/checker/checker.vue":function(e,t,s){"use strict";String,String,String,String,String,Number,Array,Object,Number,Boolean;var a={name:"checker",props:{defaultItemClass:String,selectedItemClass:String,disabledItemClass:String,type:{type:String,default:"radio"},value:[String,Number,Array,Object],max:Number,radioRequired:Boolean},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e),this.$emit("on-change",e)}},data:function(){return{currentValue:this.value}}},o={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"vux-checker-box"},[this._t("default")],2)},staticRenderFns:[]};var n=s("./node_modules/vue-loader/lib/component-normalizer.js")(a,o,!1,function(e){s('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-be506736","scoped":false,"hasInlineConfig":false}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vux/src/components/checker/checker.vue')},null,null);t.a=n.exports},"./src/pages/CheckingInReport.vue":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("./node_modules/vux/src/components/actionsheet/index.vue"),o=s("./node_modules/vux/src/components/badge/index.vue"),n=s("./node_modules/vux/src/components/checker/checker.vue"),i=s("./node_modules/vux/src/components/checker/checker-item.vue"),l=s("./node_modules/vux/src/components/checklist/index.vue"),r=s("./node_modules/vux/src/components/datetime/index.vue"),c=s("./node_modules/vux/src/components/divider/index.vue"),u=s("./node_modules/vux/src/components/flexbox/flexbox.vue"),d=s("./node_modules/vux/src/components/flexbox/flexbox-item.vue"),v=s("./node_modules/vux/src/components/form-preview/index.vue"),h=s("./node_modules/vux/src/components/group-title/index.vue"),p=s("./node_modules/vux/src/components/icon/index.vue"),m=s("./node_modules/vux/src/components/load-more/index.vue"),_=s("./node_modules/vux/src/components/popup/index.vue"),f=s("./node_modules/vux/src/components/tab/tab.vue"),k=s("./node_modules/vux/src/components/tab/tab-item.vue"),x=s("./node_modules/vux/src/components/x-header/index.vue"),b=s("./src/api/index.js"),w=s("./src/components/sticky.js"),g=s("./src/webconfig.js"),y=s("./src/utils/StoreUtils.js"),C=s("./src/utils/DateUtils.js"),j=s("./src/utils/PlatformUtils.js"),I=(x.a,f.a,k.a,v.a,c.a,_.a,o.a,h.a,n.a,i.a,m.a,u.a,d.a,p.a,a.a,r.a,l.a,w.a,{name:"CheckInReport",components:{XHeader:x.a,Tab:f.a,TabItem:k.a,FormPreview:v.a,Divider:c.a,Popup:_.a,Badge:o.a,GroupTitle:h.a,Checker:n.a,CheckerItem:i.a,LoadMore:m.a,Flexbox:u.a,FlexboxItem:d.a,Icon:p.a,Actionsheet:a.a,Datetime:r.a,Checklist:l.a},directives:{sticky:w.a},data:function(){return{badRecordIndex:"",badRecord:[],showBadRecordPopup:!1,showRoleBtn:!0,showRolePopup:!1,selectedRole:"请选择",rolebtntype:"primary",userbtntype:"default",defaultEndDateStartDate:"",menuOptions:!1,userid:null,roleid:null,checkInRoles:[],checkInRolesModel:[],checkInUsers:[],checkinCycleTokens:[],currentSelectedUserName:"",showSingleCheckInDlg:!1,basicQuestionDlog:!1,showQuestion1:!1,checkInUsersModel:null,totalHours:0,startdate:y.a.get(g.a.StoreCheckinStartDate)?y.a.get(g.a.StoreCheckinStartDate):Object(C.b)("YYYY-MM-DD"),enddate:y.a.get(g.a.StoreCheckinEndDate)?y.a.get(g.a.StoreCheckinEndDate):Object(C.b)("YYYY-MM-DD")}},methods:{switchRoleView:function(){this.rolebtntype="primary",this.userbtntype="default",this.showRoleBtn=!0,this.fetchTopRoles()},switchUserView:function(){this.rolebtntype="default",this.userbtntype="primary",this.showRoleBtn=!1,this.fetchAvailableUsersAll()},changeStartDate:function(e){y.a.set(g.a.StoreCheckinStartDate,e),this.defaultEndDateStartDate=e},changeEndDate:function(e){y.a.set(g.a.StoreCheckinEndDate,e)},clickMenuOptions:function(e){if("statistic"===e)this.$router.push({name:"pcheckinplot",params:{userid:this.userid,startdate:this.startdate,enddate:this.enddate}});else if("excel"===e)this.$router.push({name:"pcheckinexcel",params:{userid:this.userid,startdate:this.startdate,enddate:this.enddate}});else if("open"===e)if(Object(j.b)()){var t=this,s=location.href;this.$copyText(s).then(function(){t.$vux.alert.show({buttonText:"好的",title:"考勤统计表提示",content:"地址复制成功! 你可在电脑端打开地址: "+s+" 查看该考勤统计表!"})},function(e){alert("Can not copy"),console.log(e)})}else this.$vux.toast.show({time:3e3,text:"暂不支持桌面版操作！"})},fetchTopRoles:function(){var e=this,t=this.userid;this.checkInRoles=[],b.b.get("/role/belowroles/"+t).then(function(t){if(1e3===t.data.code){var s=t.data.data;s.forEach(function(e){var t=e.name,s=e.roleid;e.key=s,e.value=t}),e.checkInRoles=s,e.checkInRolesModel=[e.checkInRoles[0].key],e.fetchAvailableUsers(e.checkInRoles[0].key)}})},selectRoleChange:function(e,t){this.showRolePopup=!1,this.selectedRole=t[0];var s=e[0];this.fetchAvailableUsers(s)},fetchAvailableUsers:function(e){var t=this;this.checkInUsers=[],b.b.get("/role/belowusers/"+e).then(function(e){1e3===e.data.code&&(t.checkInUsers=e.data.data)})},fetchAvailableUsersAll:function(){var e=this;this.checkInUsers=[];var t="/user/users/"+this.userid;b.b.get(t).then(function(t){1e3===t.data.code&&(e.checkInUsers=t.data.data)})},showUserCheckInDlg:function(e){var t=this;this.showSingleCheckInDlg=!0,this.currentSelectedUserName=e.name,this.totalHours=0,this.checkinCycleTokens=[];var s="/checkin/user/"+e.userid+"/"+this.startdate+"/"+this.enddate;b.b.get(s).then(function(e){1e3===e.data.code&&(t.checkinCycleTokens=e.data.data,t.checkinCycleTokens.forEach(function(e){var s=e.result;if(2===s.length){var a=parseFloat(t.calcularHours(s[0].changedate,s[1].changedate));t.totalHours+=a}}))})},calcularHours:function(e,t){var s=Math.abs,a=Object(C.d)(e,"YYYY-MM-DD HH:mm:ss"),o=Object(C.d)(t,"YYYY-MM-DD HH:mm:ss").getTime()-a.getTime();return 0>=o?s(o):s(o/1e3/60/60).toFixed(2)},getAllLocations:function(e){var t=[];return e.forEach(function(e){t.push(e.location)}),t.join(" , ")},getAllValid:function(e){var t=!1;return 0<e.filter(function(e){return 0===e.valid}).length&&(t=!0),t},showBadRecord:function(e,t){var s=this;this.showBadRecordPopup=!0;var a="/checkin/cycletoken/"+e[0].cycletoken;b.b.get(a).then(function(e){1e3===e.data.code&&(s.badRecord=e.data.data,s.badRecordIndex=t)})},openbasicQuestionDlg:function(){this.basicQuestionDlog=!0}},mounted:function(){this.$store.dispatch("UpdateShowTabbar",!1);var e=y.a.get(g.a.StoreUserInfoKey).customerdata;this.userid=e.userid,this.roleid=e.roleid,this.fetchTopRoles()}}),R={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("x-header",{attrs:{"left-options":{showBack:!0,preventGoBack:!1},title:"考勤统计"}},[s("span",{attrs:{slot:"right"},on:{click:function(t){e.menuOptions=!e.menuOptions}},slot:"right"},[s("svg",{staticClass:"vux-x-icon vux-x-icon-navicon",staticStyle:{fill:"#fff",position:"relative",top:"-8px",left:"-3px"},attrs:{type:"navicon",size:"35",xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 512 512"}},[s("path",{attrs:{d:"M96 241h320v32H96zm0-96h320v32H96zm0 192h320v32H96z"}})])])]),e._v(" "),s("actionsheet",{attrs:{menus:{excel:"实时考勤报表",statistic:"实时考勤图"},"close-on-clicking-mask":!0,"show-cancel":""},on:{"on-click-menu":e.clickMenuOptions},model:{value:e.menuOptions,callback:function(t){e.menuOptions=t},expression:"menuOptions"}}),e._v(" "),s("group",[s("datetime",{attrs:{"min-year":2018,"year-row":"{value}年","month-row":"{value}月","day-row":"{value}日",title:"开始时间"},on:{"on-change":e.changeStartDate},model:{value:e.startdate,callback:function(t){e.startdate=t},expression:"startdate"}}),e._v(" "),s("datetime",{attrs:{"min-year":2018,"start-date":e.defaultEndDateStartDate,"year-row":"{value}年","month-row":"{value}月","day-row":"{value}日",title:"结束时间"},on:{"on-change":e.changeEndDate},model:{value:e.enddate,callback:function(t){e.enddate=t},expression:"enddate"}}),e._v(" "),s("cell",{attrs:{title:"查询类型","inline-desc":"按职位或者按账号进行查询"}},[s("span",{staticStyle:{"padding-top":"2px"}},[s("x-button",{attrs:{mini:"",type:e.rolebtntype},nativeOn:{click:function(t){return e.switchRoleView(t)}}},[e._v("按职位")]),e._v(" "),s("x-button",{attrs:{mini:"",type:e.userbtntype},nativeOn:{click:function(t){return e.switchUserView(t)}}},[e._v("按账号")])],1)]),e._v(" "),s("cell",{directives:[{name:"show",rawName:"v-show",value:e.showRoleBtn,expression:"showRoleBtn"}],attrs:{title:"选择一个职位",value:e.selectedRole,"is-link":""},nativeOn:{click:function(t){e.showRolePopup=!0}}}),e._v(" "),e.checkInUsers.length>0?s("div",{staticStyle:{padding:"10px 10px 40px 10px"}},[s("p",{staticStyle:{padding:"5px 5px 5px 2px",color:"#888"}},[e._v("点击对应的账号查看工时统计(共计"+e._s(e.checkInUsers.length)+"人)")]),e._v(" "),s("br"),e._v(" "),e.checkInUsers.length>0?s("checker",{attrs:{"default-item-class":"userid-item","selected-item-class":"userid-item-selected","disabled-item-class":"userid-item-disabled"},model:{value:e.checkInUsersModel,callback:function(t){e.checkInUsersModel=t},expression:"checkInUsersModel"}},e._l(e.checkInUsers,function(t,a){return s("span",{key:a},[s("checker-item",{staticStyle:{"margin-top":"8px"},attrs:{value:a},nativeOn:{click:function(s){e.showUserCheckInDlg(t)}}},[e._v(e._s(t.name)+"\n          ")]),e._v(" "),(a+1)%2==0?s("span",[s("br")]):e._e()],1)})):e._e()],1):s("div",[s("load-more",{staticStyle:{"padding-top":"30px"},attrs:{slot:"title","show-loading":!1,tip:"当前职位没有对应的员工,暂无数据!","background-color":"#fbf9fe"},slot:"title"})],1)],1),e._v(" "),s("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[s("popup",{attrs:{height:"100%"},model:{value:e.showRolePopup,callback:function(t){e.showRolePopup=t},expression:"showRolePopup"}},[s("x-header",{attrs:{"left-options":{showBack:!0,preventGoBack:!0}},on:{"on-click-back":function(t){e.showRolePopup=!1}}},[e._v("\n        可查看的职位列表\n      ")]),e._v(" "),e.checkInRoles.length>0?s("div",[s("checklist",{attrs:{title:"至少勾选一个职位",max:1,options:e.checkInRoles},on:{"on-change":e.selectRoleChange},model:{value:e.checkInRolesModel,callback:function(t){e.checkInRolesModel=t},expression:"checkInRolesModel"}})],1):e._e(),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0===e.checkInRoles.length,expression:"checkInRoles.length === 0"}]},[s("load-more",{staticStyle:{"padding-top":"30px"},attrs:{slot:"title","show-loading":!1,tip:"没有查到任何职位记录!","background-color":"#fbf9fe"},slot:"title"})],1)],1)],1),e._v(" "),s("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[s("popup",{attrs:{height:"100%"},model:{value:e.showSingleCheckInDlg,callback:function(t){e.showSingleCheckInDlg=t},expression:"showSingleCheckInDlg"}},[s("x-header",{attrs:{"left-options":{showBack:!0,preventGoBack:!0},title:e.currentSelectedUserName},on:{"on-click-back":function(t){e.showSingleCheckInDlg=!1}}},[e._v("\n        "+e._s(e.checkinCycleTokens.length>0?e.checkinCycleTokens[0].result[0].nickname:e.currentSelectedUserName)+"考勤列表\n      ")]),e._v(" "),s("group",{directives:[{name:"show",rawName:"v-show",value:parseInt(e.totalHours)>0,expression:"parseInt(totalHours)>0"}]},[s("cell",{attrs:{title:"总工时(单位小时)"}},[s("span",{staticStyle:{color:"green"}},[e._v(e._s(parseFloat(e.totalHours).toFixed(2)))])])],1),e._v(" "),s("group",{directives:[{name:"show",rawName:"v-show",value:e.checkinCycleTokens.length>0,expression:"checkinCycleTokens.length>0"}]},[s("cell",{attrs:{title:e.checkinCycleTokens.length>0?e.checkinCycleTokens[0].result[0].nickname:"",value:e.checkinCycleTokens.length>0?e.checkinCycleTokens[0].result[0].role:""}})],1),e._v(" "),s("divider",[e._v("工时详情列表")]),e._v(" "),e._l(e.checkinCycleTokens,function(t,a){return e.checkinCycleTokens.length>0?s("div",{key:a},[s("div",{staticClass:"vux-form-preview weui-form-preview"},[s("div",{staticClass:"weui-form-preview__hd"},[s("label",{staticClass:"weui-form-preview__label"},[e._v("工时"+e._s(a+1)+"总工时")]),e._v(" "),s("em",{staticClass:"weui-form-preview__value"},[e._v(e._s(2===t.result.length?e.calcularHours(t.result[0].changedate,t.result[1].changedate):"0.00"))])]),e._v(" "),s("div",{staticClass:"weui-form-preview__bd"},[s("div",{staticClass:"weui-form-preview__item"},[s("label",{staticClass:"weui-form-preview__label"},[e._v("上班打卡时间")]),e._v(" "),s("span",{staticClass:"weui-form-preview__value"},[e._v(e._s(t.result.filter(function(e){return 1==e.am}).length>0?t.result.filter(function(e){return 1==e.am})[0].changedate:"无"))])]),e._v(" "),s("div",{staticClass:"weui-form-preview__item"},[s("label",{staticClass:"weui-form-preview__label"},[e._v("下班打卡时间")]),e._v(" "),s("span",{staticClass:"weui-form-preview__value"},[e._v(e._s(t.result.filter(function(e){return 1==e.pm}).length>0?t.result.filter(function(e){return 1==e.pm})[0].changedate:"无"))])]),e._v(" "),s("div",{staticClass:"weui-form-preview__item"},[s("label",{staticClass:"weui-form-preview__label"},[e._v("打卡位置")]),e._v(" "),s("span",{staticClass:"weui-form-preview__value"},[s("b",[e._v(e._s(e.getAllLocations(t.result)))])])]),e._v(" "),s("div",{staticClass:"weui-form-preview__item"},[s("label",{staticClass:"weui-form-preview__label"},[e._v("是否有违规打卡记录")]),e._v(" "),s("span",{staticClass:"weui-form-preview__value",style:{color:e.getAllValid(t.result)?"red":"green"}},[s("b",[e._v(e._s(e.getAllValid(t.result)?"是":"否"))])]),e._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:e.getAllValid(t.result),expression:"getAllValid(cycletoken.result)"}],on:{click:function(s){s.preventDefault(),e.showBadRecord(t.result,a+1)}}},[e._v("查看违规记录详情")])])])]),e._v(" "),s("br")]):e._e()}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0===e.checkinCycleTokens.length,expression:"checkinCycleTokens.length === 0"}]},[s("br"),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("load-more",{staticStyle:{"padding-top":"30px"},attrs:{"show-loading":!1,tip:"当前查询条件下员工没有对应打卡记录!","background-color":"#fbf9fe"}})],1)],2)],1),e._v(" "),s("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[s("popup",{attrs:{height:"100%"},model:{value:e.basicQuestionDlog,callback:function(t){e.basicQuestionDlog=t},expression:"basicQuestionDlog"}},[s("x-header",{attrs:{"left-options":{showBack:!0,preventGoBack:!0}},on:{"on-click-back":function(t){e.basicQuestionDlog=!1}}},[e._v("\n        我的客服\n      ")]),e._v(" "),s("group",{attrs:{title:"猜你想要的问题"}},[s("cell",{attrs:{"is-link":"",title:"员工职位列表中为什么看不到我的下属部门?","border-intent":!1,"arrow-direction":e.showQuestion1?"up":"down"},nativeOn:{click:function(t){e.showQuestion1=!e.showQuestion1}}}),e._v(" "),e.showQuestion1?[s("p",{staticStyle:{"margin-left":"12px","margin-top":"5px",color:"#304156"}},[e._v("\n            如果当前时间段的下属部门员工没有任何考勤记录,那么该下属部门将不会显示在下属职位列表中.")]),s("br")]:e._e()],2)],1)],1),e._v(" "),s("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[s("popup",{attrs:{height:"100%"},model:{value:e.showBadRecordPopup,callback:function(t){e.showBadRecordPopup=t},expression:"showBadRecordPopup"}},[s("x-header",{attrs:{"left-options":{showBack:!0,preventGoBack:!0}},on:{"on-click-back":function(t){e.showBadRecordPopup=!1}}},[e._v("\n        工时"+e._s(e.badRecordIndex)+"违规记录详情\n      ")]),e._v(" "),e._l(e.badRecord,function(t,a){return e.badRecord.length>0?s("div",{key:a},[s("div",{staticClass:"vux-form-preview weui-form-preview"},[s("div",{staticClass:"weui-form-preview__hd"},[s("label",{staticClass:"weui-form-preview__label"},[e._v("打卡账号")]),e._v(" "),s("em",{staticClass:"weui-form-preview__value"},[e._v(e._s(t.nickname+"(微信号:"+t.realuser+")"))])]),e._v(" "),s("div",{staticClass:"weui-form-preview__bd"},[s("div",{staticClass:"weui-form-preview__item"},[s("label",{staticClass:"weui-form-preview__label"},[e._v(e._s(1===t.am?"上班打卡时间":"下班打卡时间"))]),e._v(" "),s("span",{staticClass:"weui-form-preview__value"},[e._v(e._s(t.changedate))])]),e._v(" "),s("div",{staticClass:"weui-form-preview__item"},[s("label",{staticClass:"weui-form-preview__label"},[e._v("打卡位置")]),e._v(" "),s("span",{staticClass:"weui-form-preview__value"},[e._v(e._s(t.location))])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.valid,expression:"cycletoken.valid==0"}],staticClass:"weui-form-preview__item"},[s("label",{staticClass:"weui-form-preview__label"},[e._v("违规打卡微信号")]),e._v(" "),s("span",{staticClass:"weui-form-preview__value",staticStyle:{color:"red"}},[e._v(e._s(""===t.baduser?"未知微信号":t.baduser))])])])]),e._v(" "),s("br")]):e._e()})],2)],1)],1)},staticRenderFns:[]};var S=s("./node_modules/vue-loader/lib/component-normalizer.js")(I,R,!1,function(e){s('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-1d27e031","scoped":true,"hasInlineConfig":false}!./node_modules/vux-loader/src/after-less-loader.js!./node_modules/less-loader/index.js?{"minimize":true,"sourceMap":true}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/CheckingInReport.vue')},"data-v-1d27e031",null);t.default=S.exports}});