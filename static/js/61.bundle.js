webpackJsonp([61],{'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-123b232c","scoped":true,"hasInlineConfig":false}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/EngineeringQuantity.vue':function(t,e){},"./src/pages/EngineeringQuantity.vue":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("./node_modules/babel-runtime/core-js/json/stringify.js"),n=a.n(i),o=a("./node_modules/vux/src/components/badge/index.vue"),s=a("./node_modules/vux/src/components/button-tab/button-tab.vue"),l=a("./node_modules/vux/src/components/button-tab/button-tab-item.vue"),r=a("./node_modules/vux/src/components/checklist/index.vue"),c=a("./node_modules/vux/src/components/flexbox/flexbox.vue"),u=a("./node_modules/vux/src/components/flexbox/flexbox-item.vue"),d=a("./node_modules/vux/src/components/form-preview/index.vue"),h=a("./node_modules/vux/src/components/grid/grid.vue"),p=a("./node_modules/vux/src/components/grid/grid-item.vue"),v=a("./node_modules/vux/src/components/group-title/index.vue"),m=a("./node_modules/vux/src/components/load-more/index.vue"),b=a("./node_modules/vux/src/components/popup/index.vue"),f=a("./node_modules/vux/src/components/previewer/index.vue"),y=a("./node_modules/vux/src/components/search/index.vue"),w=a("./node_modules/vux/src/components/swipeout/swipeout.vue"),g=a("./node_modules/vux/src/components/swipeout/swipeout-button.vue"),x=a("./node_modules/vux/src/components/swipeout/swipeout-item.vue"),_=a("./node_modules/vux/src/components/swiper/swiper.vue"),k=a("./node_modules/vux/src/components/swiper/swiper-item.vue"),q=a("./node_modules/vux/src/components/x-number/index.vue"),M=a("./node_modules/vux/src/components/x-switch/index.vue"),j=a("./node_modules/vux/src/components/x-textarea/index.vue"),C=a("./src/components/sticky.js"),P=a("./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js"),S=a("./src/webconfig.js"),N=a("./src/utils/StoreUtils.js"),U=a("./src/api/index.js"),B=a("./src/utils/StringUtils.js"),O=a("./src/components/SelectProjectDialog.vue"),$=a("./src/utils/PlatformUtils.js"),T=a("./src/utils/ElectronUtils.js"),Q=(C.a,s.a,l.a,P.d,b.a,q.a,M.a,j.a,m.a,h.a,p.a,v.a,_.a,k.a,x.a,g.a,w.a,o.a,c.a,u.a,f.a,r.a,d.a,y.a,O.a,{name:"EngineeringQuantity",metaInfo:{title:"工程量管理"},directives:{sticky:C.a},components:{ButtonTab:s.a,ButtonTabItem:l.a,PlusIcon:P.d,Popup:b.a,XNumber:q.a,XSwitch:M.a,XTextarea:j.a,LoadMore:m.a,Grid:h.a,GridItem:p.a,GroupTitle:v.a,Swiper:_.a,SwiperItem:k.a,SwipeoutItem:x.a,SwipeoutButton:g.a,Swipeout:w.a,Badge:o.a,Flexbox:c.a,FlexboxItem:u.a,Previewer:f.a,Checklist:r.a,FormPreview:d.a,Search:y.a,SelectProjectDialog:O.a},data:function(){return{menuOptions:!1,searchResults:[],searchModel:"",quantity:{unitid:null,content:"",price:0,quantity:0,contractid:null,completedid:null},showAddBtn:!1,canmaterial:!1,tab:N.a.get(S.a.StoreMaterialTab)?N.a.get(S.a.StoreMaterialTab):0,budgets:{count:0,items:[]},materials:{count:0,items:[]},audits:{count:0,items:[]},shouldHover:!0,headTitle:"投标工程量动态",showProjectSelectDlg:!1,project:{},quantityid:null,updateMaterialTitle:"",showUpdateMaterialDlg:!1,selectedUnitName:"请选择",showUnitPopup:!1,units:[],unitsModel:[],selectedTenderName:"请选择",showBudgetMaterialPopup:!1,budgetMaterials:[],filterBudgetMaterials:[],budgetMaterialsModel:[],selectedCompletedName:"请选择",showCompletedMaterialPopup:!1,completeds:[],filterCompleteds:[],completedsModel:[],disabledSaveUpdateBtn:!1}},methods:{clickMenuOptions:function(t){if("excel"===t)this.$router.push({name:"pquantities",params:{projectid:this.project.key}});else if("open"===t)if(Object($.b)()){var e=this,a=location.href+"/"+this.project.key.toString();this.$copyText(a).then(function(){e.$vux.alert.show({buttonText:"好的",title:"项目工程量动态提示",content:"地址复制成功! 你可在电脑端打开地址: "+a+" 进行工程量动态的操作!"})},function(t){alert("不支持复制功能！"),console.log(t)})}else this.$vux.toast.show({time:3e3,text:"暂不支持！"})},hideMenuOptions:function(){this.showAddBtn=this.canmaterial},searchFocus:function(){this.searchResults=[]},cancelSearch:function(){},clickSearchResult:function(t){1===this.tab?(this.filterBudgetMaterials=this.budgetMaterials.filter(function(e){return e.value===t.title}),this.budgetMaterialsModel=[this.filterBudgetMaterials[0].key],this.selectedTenderName=this.filterBudgetMaterials[0].value):2===this.tab&&(this.filterCompleteds=this.completeds.filter(function(e){return e.value===t.title}),this.completedsModel=[this.filterCompleteds[0].key],this.selectedCompletedName=this.filterCompleteds[0].value)},inputSearchChange:function(t){var e=this;e.searchResults=[],1===this.tab?this.budgetMaterials.forEach(function(a){Object(B.c)(a.value,t)&&e.searchResults.push({title:a.value,other:a.key})}):2===this.tab&&this.completeds.forEach(function(a){Object(B.c)(a.value,t)&&e.searchResults.push({title:a.value,other:a.key})})},deleteMaterial:function(t,e){var a=this,i="",n="";0===this.tab?(i="项目名称"+t.Content,n="/equantity/del/contract/"+t.Key):1===this.tab?(i="项目名称"+t.Content+"的完成量",n="/equantity/del/completed/"+t.Key):2===this.tab&&(i="项目名称"+t.Content+"的审核量",n="/equantity/del/audit/"+t.Key),this.$vux.confirm.show({title:"删除工程量提示",content:"确定删除"+i+"工程量?",onCancel:function(){},onConfirm:function(){U.b.delete(n).then(function(t){1e3===t.data.code&&(0===a.tab?(a.budgets.items.splice(e,1),--a.budgets.count):1===a.tab?(a.materials.items.splice(e,1),--a.materials.count):2===a.tab&&(a.audits.items.splice(e,1),--a.audits.count),a.$vux.toast.show({text:"删除"+i+"工程量成功!"}))})}})},updateMaterialDlg:function(t){this.showAddBtn=!1,this.showUpdateMaterialDlg=!0,this.quantityid=t.Key,0===this.tab?(this.updateMaterialTitle="合同工程量修改",t&&(this.quantity.content=t.Content,this.quantity.price=parseFloat(t.Price),this.quantity.quantity=parseFloat(t.Quantity),this.quantity.unitid=t.UnitKey,this.quantity.contractid=null,this.quantity.completedid=null,this.fetchUnits(this.quantity.unitid.toString()))):1===this.tab?(this.updateMaterialTitle="完成工程量修改",t&&(this.quantity.content=t.Content,this.quantity.price=parseFloat(t.Price),this.quantity.quantity=parseFloat(t.Quantity),this.quantity.unitid=null,this.quantity.contractid=t.ContractId,this.quantity.completedid=null,this.fetchContractsMaterials(this.quantity.contractid.toString()))):2===this.tab&&(this.updateMaterialTitle="审核工程量修改",t&&(this.quantity.content=t.Content,this.quantity.price=parseFloat(t.Price),this.quantity.quantity=parseFloat(t.Quantity),this.quantity.unitid=null,this.quantity.contractid=null,this.quantity.completedid=t.CompletedId,this.fetchCompleted(this.quantity.completedid.toString())))},showTenderOptionsDlg:function(){this.showBudgetMaterialPopup=!0},selectUnitChange:function(t,e){this.showUnitPopup=!1,0<t.length?(this.selectedUnitName=e[0],this.quantity.unitid=t[0]):this.selectedUnitName="请选择"},showCompletedOptionsDlg:function(){this.showCompletedMaterialPopup=!0},selectMaterialChange:function(t,e){this.showBudgetMaterialPopup=!1,0<t.length?(this.selectedTenderName=e[0],this.quantity.contractid=t[0]):this.selectedTenderName="请选择"},selectCompleteChange:function(t,e){this.showCompletedMaterialPopup=!1,0<t.length?(this.selectedCompletedName=e[0],this.quantity.completedid=t[0]):this.selectedCompletedName="请选择"},goNewBudgetPage:function(){this.$router.push({name:"pquantityadd",params:{projectid:this.project.key,type:0}})},goNewCompltedPage:function(){this.$router.push({name:"pquantityadd",params:{projectid:this.project.key,type:1}})},fetchUnits:function(t){var e=this;this.units=[],U.b.get("/equantity/units").then(function(a){1e3===a.data.code&&(a.data.data.forEach(function(t){e.units.push({key:t.PanoProjectEngineeringQuantityUnitKey.toString(),value:t.UnitName+"("+t.Description+")"})}),t&&(e.unitsModel=[t]))}).catch(function(t){alert("获取计量单位报错！"+t)})},fetchContractsMaterials:function(t){var e=this;this.project.key&&U.b.get("/equantity/contract/"+this.project.key).then(function(a){if(1e3===a.data.code){var i=a.data.data;i.items.forEach(function(t){var e=t.Content+"(计量单位: "+t.UnitName+")",a=t.Key;t.key=a.toString(),t.value=e}),e.budgetMaterials=i.items,e.budgetMaterialsModel=t?[t]:[e.budgetMaterials[0].key]}})},fetchCompleted:function(t){var e=this;this.project.key&&U.b.get("/equantity/completed/"+this.project.key).then(function(a){if(1e3===a.data.code){var i=a.data.data;i.items.forEach(function(t){var e=t.Content+"(计量单位: "+t.UnitName+")",a=t.Key;t.key=a.toString(),t.value=e}),e.completeds=i.items,e.completedsModel=t?[t]:[e.completeds[0].key]}})},saveMaterial:function(){var t=this,e={quantityid:this.quantityid,content:this.quantity.content,price:this.quantity.price,quantity:this.quantity.quantity,unitid:this.unitsModel[0]},a={quantityid:this.quantityid,contractid:this.budgetMaterialsModel[0],price:this.quantity.price,quantity:this.quantity.quantity},i={quantityid:this.quantityid,completedid:this.completedsModel[0],price:this.quantity.price,quantity:this.quantity.quantity},o={},s=!1;if(0===this.tab){var l="合同工程量提示";if(!(o=e).content||0>=o.content.length)return void this.$vux.alert.show({title:l,content:"合同项目名称不能为空!"});if(""===o.quantity||isNaN(o.quantity))return void this.$vux.alert.show({title:l,content:"投标工程量不能为空,必须大于等于零!"});if(!o.unitid)return void this.$vux.alert.show({title:l,content:"投标工程计量单位不能为空!"});s=0<o.content.length&&""!==o.quantity&&o.unitid}else if(1===this.tab){var r="完成工程量修改提示";if(null===(o=a).contractid)return void this.$vux.alert.show({title:r,content:"必须选择一个合同项目名称!"});if(""===o.quantity||isNaN(o.quantity))return void this.$vux.alert.show({title:r,content:"完成工程量不能为空,必须大于等于零!"});s=o.contractid&&""!==o.quantity}else if(2===this.tab){o=i,console.log("数据是: "+n()(o));var c="审核工程量修改提示";if(null===o.completedid)return void this.$vux.alert.show({title:c,content:"必须选择一个完成量对应的项目名称!"});if(""===o.quantity||isNaN(o.quantity))return void this.$vux.alert.show({title:c,content:"审核工程量不能为空,必须大于等于零!"});s=o.completedid&&""!==o.quantity}s?(this.disabledSaveUpdateBtn=!0,this.$vux.loading.show({text:"正在修改工程量..."}),U.b.post("/equantity/update",o).then(function(e){t.$vux.loading.hide(),1e3===e.data.code&&(N.a.remove(S.a.StoreQuantity),t.$vux.toast.show({text:"更新工程量信息成功,三秒后跳转到列表!"}),Object($.b)()?t.$router.go(0):Object(T.b)())}).catch(function(e){t.$vux.loading.hide(),t.disabledSaveUpdateBtn=!1,alert("修改工程量出错!"+e)})):(this.disabledSaveUpdateBtn=!1,this.$vux.alert.show({content:"请检查你的输入是否合法,项目名称,工程量必须大于等于零,价格不能为空!"}))},selectProject:function(t){this.project=t,this.showProjectSelectDlg=!1,this.showAddBtn=this.canmaterial,0===this.tab?this.fetchContract():1===this.tab?this.fetchComplate():2===this.tab&&this.fetchAudit()},addQuantity:function(){this.$router.push({name:"pquantityadd",params:{projectid:this.project.key,type:this.tab}})},clickTab:function(){0===this.tab?(this.fetchContract(),N.a.set(S.a.StoreMaterialTab,0)):1===this.tab?(this.fetchComplate(),N.a.set(S.a.StoreMaterialTab,1)):2===this.tab&&(this.fetchAudit(),N.a.set(S.a.StoreMaterialTab,2))},fetchContract:function(){var t=this;this.project.key&&U.b.get("/equantity/contract/"+this.project.key).then(function(e){if(1e3===e.data.code){var a=e.data.data;a.items.forEach(function(t){t["showmaterialb"+t.row]=!1}),t.budgets=a}})},fetchComplate:function(){var t=this;this.project.key&&U.b.get("/equantity/completed/"+this.project.key).then(function(e){if(1e3===e.data.code){var a=e.data.data;a.items.forEach(function(t){t["showmaterial"+t.row]=!1}),t.materials=a}})},fetchAudit:function(){var t=this;this.project.key&&U.b.get("/equantity/audit/"+this.project.key).then(function(e){if(1e3===e.data.code){var a=e.data.data;a.items.forEach(function(t){t["showmaterial"+t.row]=!1}),t.audits=a}})}},mounted:function(){this.$store.dispatch("UpdateShowHeader",!1),this.$store.dispatch("UpdateShowTabbar",!1);var t=N.a.get(S.a.StoreUserInfoKey);t&&(this.userid=t.customerdata.userid,this.canmaterial=t.customerdata.canmaterial,this.showmenuOptions=this.canmaterial,this.showAddBtn=this.canmaterial);var e=N.a.get(S.a.StoreProject);e?(this.project=e,0===this.tab?this.fetchContract():1===this.tab?this.fetchComplate():2===this.tab&&this.fetchAudit()):this.showProjectSelectDlg=!0}}),D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("x-header",{attrs:{slot:"header","left-options":{showBack:!0,backText:"返回"},title:"工程量动态管理"},slot:"header"},[a("span",{attrs:{slot:"right"},on:{click:function(e){t.menuOptions=!t.menuOptions,t.showAddBtn=!1}},slot:"right"},[a("svg",{staticClass:"vux-x-icon vux-x-icon-navicon",staticStyle:{fill:"#fff",position:"relative",top:"-8px",left:"-3px"},attrs:{type:"navicon",size:"35",xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M96 241h320v32H96zm0-96h320v32H96zm0 192h320v32H96z"}})])])]),t._v(" "),a("group-title",[t._v("当前单位工程:"+t._s(t.project.value?t.project.value:"未知")+"   "),a("a",{staticStyle:{color:"#00a7f5"},on:{click:function(e){e.preventDefault(),t.showProjectSelectDlg=!0,t.showAddBtn=!1}}},[t._v("切换单位工程")])]),t._v(" "),a("button-tab",{directives:[{name:"sticky",rawName:"v-sticky",value:{zIndex:100,stickyTop:46,className:"sticky-buttons"},expression:"{ zIndex: 100, stickyTop: 46, className: 'sticky-buttons' }"}],model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("button-tab-item",{on:{"on-item-click":function(e){t.clickTab()}}},[t._v("合同量")]),t._v(" "),a("button-tab-item",{on:{"on-item-click":function(e){t.clickTab()}}},[t._v("完成量")]),t._v(" "),a("button-tab-item",{on:{"on-item-click":function(e){t.clickTab()}}},[t._v("审核量")])],1),t._v(" "),t.showAddBtn?a("div",{staticClass:"fixbtn",class:[{hover:t.shouldHover}],on:{mouseenter:function(e){t.shouldHover=!0},mouseleave:function(e){t.shouldHover=!1},click:t.addQuantity}},[t._t("default",[a("plus-icon",{staticStyle:{color:"white"}})])],2):t._e(),t._v(" "),0==t.tab?[t.budgets.count>0?a("group",[a("group-title",{staticStyle:{"font-size":"13px"}},[t._v("共有"),a("b",[t._v(t._s(t.budgets.items.length))]),t._v("个合同量项目名称")]),t._v(" "),a("div",[a("swipeout",t._l(t.budgets.items,function(e,i){return a("swipeout-item",{key:i,attrs:{threshold:.5,"underlay-color":"#ccc"}},[t.canmaterial?a("div",{attrs:{slot:"right-menu"},slot:"right-menu"},[a("swipeout-button",{attrs:{type:"primary"},nativeOn:{click:function(a){t.updateMaterialDlg(e)}}},[t._v("修改")]),t._v(" "),a("swipeout-button",{attrs:{type:"warn"},nativeOn:{click:function(a){t.deleteMaterial(e,i)}}},[t._v("删除")])],1):t._e(),t._v(" "),a("div",{staticClass:"project-content vux-1px-tb",attrs:{slot:"content"},slot:"content"},[a("cell",{key:i,attrs:{title:"项目名称: "+e.Content+", 合同工程量: "+e.Quantity+e.UnitName+", 合同量单价: "+e.Price+"/"+e.UnitName+",合同量总价: "+(e.Price*e.Quantity).toFixed(3)+"元","inline-desc":"最后录入时间:"+e.ChangeDate,"is-link":"","border-intent":!1,"arrow-direction":e["showmaterialb"+e.row]?"up":"down"},nativeOn:{click:function(t){e["showmaterialb"+e.row]=!e["showmaterialb"+e.row]}}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e["showmaterialb"+e.row],expression:"material['showmaterialb'+material.row]"}]},[a("form-preview",{attrs:{"header-label":"项目名称","header-value":e.Content,"body-items":[{label:"计量单位",value:e.UnitName},{label:"合同工程量",value:e.Quantity},{label:"合同工程量单价",value:e.Price}]}})],1)],1)])}))],1)],1):t._e(),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.budgets.count,expression:"budgets.count === 0"}]},[a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("load-more",{attrs:{"show-loading":!1,tip:"当前单位工程合同量没有数据!","background-color":"#fbf9fe"}})],1)]:t._e(),t._v(" "),1==t.tab?[t.materials.count>0?a("group",[a("group-title",{staticStyle:{"font-size":"13px"}},[t._v("共有"),a("b",[t._v(t._s(t.materials.items.length))]),t._v("个完成量项目名称")]),t._v(" "),a("div",[a("swipeout",t._l(t.materials.items,function(e,i){return a("swipeout-item",{key:i,attrs:{threshold:.5,"underlay-color":"#ccc"}},[t.canmaterial?a("div",{attrs:{slot:"right-menu"},slot:"right-menu"},[a("swipeout-button",{attrs:{type:"primary"},nativeOn:{click:function(a){t.updateMaterialDlg(e,i)}}},[t._v("修改")]),t._v(" "),a("swipeout-button",{attrs:{type:"warn"},nativeOn:{click:function(a){t.deleteMaterial(e,i)}}},[t._v("删除")])],1):t._e(),t._v(" "),a("div",{staticClass:"project-content vux-1px-tb",attrs:{slot:"content"},slot:"content"},[a("cell",{key:i,attrs:{title:"项目名称: "+e.Content+", 完成工程量: "+e.Quantity+e.UnitName+", 完成量单价: "+e.Price+"/"+e.UnitName+",完成量总价: "+(e.Price*e.Quantity).toFixed(3)+"元","inline-desc":"最后录入时间:"+e.ChangeDate,"is-link":"","border-intent":!1,"arrow-direction":e["showmaterial"+e.row]?"up":"down"},nativeOn:{click:function(t){e["showmaterial"+e.row]=!e["showmaterial"+e.row]}}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e["showmaterial"+e.row],expression:"material['showmaterial'+material.row]"}]},[a("form-preview",{attrs:{"header-label":"项目名称","header-value":e.Content,"body-items":[{label:"状态(完成量-合同量)",value:e.Quantity-e.Quantity2<0?"进行中":"完成"},{label:"计量单位",value:e.UnitName},{label:"完成工程量",value:e.Quantity},{label:"完成单价",value:e.Price},{label:"合同工程量",value:e.Quantity2},{label:"合同工程量单价",value:e.Price2}]}})],1)],1)])}))],1)],1):t._e(),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.materials.count,expression:"materials.count === 0"}]},[a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("load-more",{attrs:{"show-loading":!1,tip:"当前单位工程完成量没有数据!","background-color":"#fbf9fe"}})],1)]:t._e(),t._v(" "),2==t.tab?[t.audits.count>0?a("group",[a("group-title",{staticStyle:{"font-size":"13px"}},[t._v("共有"),a("b",[t._v(t._s(t.audits.items.length))]),t._v("个审核量项目名称")]),t._v(" "),a("div",[a("swipeout",t._l(t.audits.items,function(e,i){return a("swipeout-item",{key:i,attrs:{threshold:.5,"underlay-color":"#ccc"}},[t.canmaterial?a("div",{attrs:{slot:"right-menu"},slot:"right-menu"},[a("swipeout-button",{attrs:{type:"primary"},nativeOn:{click:function(a){t.updateMaterialDlg(e,i)}}},[t._v("修改")]),t._v(" "),a("swipeout-button",{attrs:{type:"warn"},nativeOn:{click:function(a){t.deleteMaterial(e,i)}}},[t._v("删除")])],1):t._e(),t._v(" "),a("div",{staticClass:"project-content vux-1px-tb",attrs:{slot:"content"},slot:"content"},[a("cell",{key:i,attrs:{title:"项目名称: "+e.Content+", 审核工程量: "+e.Quantity+e.UnitName+", 审核量单价: "+e.Price+"/"+e.UnitName+",审核量总价: "+(e.Price*e.Quantity).toFixed(3)+"元","inline-desc":"最后录入时间:"+e.ChangeDate,"is-link":"","border-intent":!1,"arrow-direction":e["showmaterial"+e.row]?"up":"down"},nativeOn:{click:function(t){e["showmaterial"+e.row]=!e["showmaterial"+e.row]}}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e["showmaterial"+e.row],expression:"material['showmaterial'+material.row]"}]},[a("form-preview",{attrs:{"header-label":"项目名称","header-value":e.Content,"body-items":[{label:"状态(审核量-完成量)",value:e.Quantity-e.Quantity2<0?"进行中":"完成"},{label:"计量单位",value:e.UnitName},{label:"审核工程量",value:e.Quantity},{label:"审核单价",value:e.Price},{label:"完成工程量",value:e.Quantity2},{label:"完成工程量单价",value:e.Price2}]}})],1)],1)])}))],1)],1):t._e(),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.audits.count,expression:"audits.count === 0"}]},[a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("load-more",{attrs:{"show-loading":!1,tip:"当前单位工程审核量没有数据!","background-color":"#fbf9fe"}})],1)]:t._e(),t._v(" "),a("select-project-dialog",{attrs:{show:t.showProjectSelectDlg},on:{"on-click-back":function(e){t.showProjectSelectDlg=!1,t.showAddBtn=t.canmaterial},"on-select-project":t.selectProject,"on-click-empty-button":function(e){t.$router.push({name:"pupload"})}}}),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("popup",{attrs:{height:"100%"},model:{value:t.showUpdateMaterialDlg,callback:function(e){t.showUpdateMaterialDlg=e},expression:"showUpdateMaterialDlg"}},[a("x-header",{attrs:{"left-options":{showBack:!0,preventGoBack:!0}},on:{"on-click-back":function(e){t.showUpdateMaterialDlg=!1,t.showAddBtn=!0}}},[t._v("\n        "+t._s(t.updateMaterialTitle)+"\n      ")]),t._v(" "),0===t.tab?a("group",{attrs:{title:"合同量修改"}},[a("cell",{attrs:{title:"工程名称"}},[t._v(t._s(t.project.value))]),t._v(" "),a("x-input",{attrs:{title:"投标项目名称",type:"text",placeholder:"请输入该投标项目名称"},model:{value:t.quantity.content,callback:function(e){t.$set(t.quantity,"content",e)},expression:"quantity.content"}}),t._v(" "),a("cell",{attrs:{title:"选择一个计量单位",value:t.selectedUnitName,"is-link":""},nativeOn:{click:function(e){t.showUnitPopup=!0}}}),t._v(" "),a("x-input",{attrs:{title:"合同工程量"},model:{value:t.quantity.quantity,callback:function(e){t.$set(t.quantity,"quantity",e)},expression:"quantity.quantity"}}),t._v(" "),a("x-input",{attrs:{title:"合同量单价",placeholder:"请输入合同量单价"},model:{value:t.quantity.price,callback:function(e){t.$set(t.quantity,"price",e)},expression:"quantity.price"}}),t._v(" "),a("x-button",{attrs:{type:"primary","action-type":"button"},nativeOn:{click:function(e){return t.saveMaterial(e)}}},[t._v("保存")])],1):t._e(),t._v(" "),1===t.tab?a("group",{attrs:{title:"完成量修改"}},[a("cell",{attrs:{title:"工程名称"}},[t._v(t._s(t.project.value))]),t._v(" "),a("cell",{attrs:{title:"合同量项目名称",value:t.selectedTenderName}}),t._v(" "),a("x-input",{attrs:{title:"完成工程量"},model:{value:t.quantity.quantity,callback:function(e){t.$set(t.quantity,"quantity",e)},expression:"quantity.quantity"}}),t._v(" "),a("x-input",{attrs:{title:"完成量单价",placeholder:"请输入完成量单价(可选)"},model:{value:t.quantity.price,callback:function(e){t.$set(t.quantity,"price",e)},expression:"quantity.price"}}),t._v(" "),a("x-button",{attrs:{type:"primary","action-type":"button"},nativeOn:{click:function(e){return t.saveMaterial(e)}}},[t._v("保存")])],1):t._e(),t._v(" "),2===t.tab?a("group",{attrs:{title:"审核量修改"}},[a("cell",{attrs:{title:"工程名称"}},[t._v(t._s(t.project.value))]),t._v(" "),a("cell",{attrs:{title:"完成量项目名称",value:t.selectedCompletedName}}),t._v(" "),a("x-input",{attrs:{title:"审核工程量"},model:{value:t.quantity.quantity,callback:function(e){t.$set(t.quantity,"quantity",e)},expression:"quantity.quantity"}}),t._v(" "),a("x-input",{attrs:{title:"审核量单价",placeholder:"请输入审核量单价(可选)"},model:{value:t.quantity.price,callback:function(e){t.$set(t.quantity,"price",e)},expression:"quantity.price"}}),t._v(" "),a("x-button",{attrs:{type:"primary","action-type":"button",disabled:t.disabledSaveUpdateBtn},nativeOn:{click:function(e){return t.saveMaterial(e)}}},[t._v("保存")])],1):t._e()],1)],1),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("popup",{attrs:{height:"100%"},model:{value:t.showUnitPopup,callback:function(e){t.showUnitPopup=e},expression:"showUnitPopup"}},[a("x-header",{attrs:{"left-options":{showBack:!0,preventGoBack:!0}},on:{"on-click-back":function(e){t.showUnitPopup=!1}}},[t._v("\n        计量单位列表\n      ")]),t._v(" "),t.units.length>0?a("div",[a("checklist",{attrs:{title:"请勾选一个计量单位名称",max:1,options:t.units},on:{"on-change":t.selectUnitChange},model:{value:t.unitsModel,callback:function(e){t.unitsModel=e},expression:"unitsModel"}})],1):t._e()],1)],1),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("popup",{attrs:{height:"100%"},model:{value:t.showBudgetMaterialPopup,callback:function(e){t.showBudgetMaterialPopup=e},expression:"showBudgetMaterialPopup"}},[a("x-header",{attrs:{"left-options":{showBack:!0,preventGoBack:!0}},on:{"on-click-back":function(e){t.showBudgetMaterialPopup=!1}}},[t._v("\n        合同量项目名称列表\n      ")]),t._v(" "),t.budgetMaterials.length>0?a("div",[a("search",{ref:"search",attrs:{placeholder:"输入要查询的项目名称",position:"absolute","auto-scroll-to-top":"",top:"46px",results:t.searchResults},on:{"on-focus":t.searchFocus,"on-change":t.inputSearchChange,"on-result-click":t.clickSearchResult,"on-cancel":t.cancelSearch},model:{value:t.searchModel,callback:function(e){t.searchModel=e},expression:"searchModel"}}),t._v(" "),a("checklist",{attrs:{title:"勾选一个项目名称",max:1,options:t.budgetMaterials},on:{"on-change":t.selectMaterialChange},model:{value:t.budgetMaterialsModel,callback:function(e){t.budgetMaterialsModel=e},expression:"budgetMaterialsModel"}})],1):t._e(),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.budgetMaterials.length,expression:"budgetMaterials.length === 0"}]},[a("load-more",{staticStyle:{"padding-top":"30px"},attrs:{"show-loading":!1,tip:"当前单位工程没有任何合同量项目名称!","background-color":"#fbf9fe"}}),t._v(" "),a("flexbox",[a("flexbox-item",{attrs:{span:2}}),t._v(" "),a("flexbox-item",[a("x-button",{attrs:{type:"primary","action-type":"button"},nativeOn:{click:function(e){return t.goNewBudgetPage(e)}}},[t._v("新建合同量\n            ")])],1),t._v(" "),a("flexbox-item",{attrs:{span:2}})],1)],1)],1)],1),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("popup",{attrs:{height:"100%"},model:{value:t.showCompletedMaterialPopup,callback:function(e){t.showCompletedMaterialPopup=e},expression:"showCompletedMaterialPopup"}},[a("x-header",{attrs:{"left-options":{showBack:!0,preventGoBack:!0}},on:{"on-click-back":function(e){t.showCompletedMaterialPopup=!1}}},[t._v("\n        完成量项目名称列表\n      ")]),t._v(" "),t.completeds.length>0?a("div",[a("search",{ref:"search",attrs:{placeholder:"输入要查询的项目名称",position:"absolute","auto-scroll-to-top":"",top:"46px",results:t.searchResults},on:{"on-focus":t.searchFocus,"on-change":t.inputSearchChange,"on-result-click":t.clickSearchResult,"on-cancel":t.cancelSearch},model:{value:t.searchModel,callback:function(e){t.searchModel=e},expression:"searchModel"}}),t._v(" "),a("checklist",{attrs:{title:"勾选一个完成量项目名称",max:1,options:t.completeds},on:{"on-change":t.selectCompleteChange},model:{value:t.completedsModel,callback:function(e){t.completedsModel=e},expression:"completedsModel"}})],1):t._e(),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.completeds.length,expression:"completeds.length === 0"}]},[a("load-more",{staticStyle:{"padding-top":"30px"},attrs:{"show-loading":!1,tip:"当前单位工程没有任何完成量项目名称!","background-color":"#fbf9fe"}}),t._v(" "),a("flexbox",[a("flexbox-item",{attrs:{span:2}}),t._v(" "),a("flexbox-item",[a("x-button",{attrs:{type:"primary","action-type":"button"},nativeOn:{click:function(e){return t.goNewCompltedPage(e)}}},[t._v("新建完成量\n            ")])],1),t._v(" "),a("flexbox-item",{attrs:{span:2}})],1)],1)],1)],1),t._v(" "),a("actionsheet",{attrs:{menus:{open:"复制地址(电脑端编辑)",excel:"汇总统计"},"close-on-clicking-mask":!0,"show-cancel":""},on:{"on-click-menu":t.clickMenuOptions,"on-after-hide":t.hideMenuOptions},model:{value:t.menuOptions,callback:function(e){t.menuOptions=e},expression:"menuOptions"}})],2)},staticRenderFns:[]};var F=a("./node_modules/vue-loader/lib/component-normalizer.js")(Q,D,!1,function(t){a('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-123b232c","scoped":true,"hasInlineConfig":false}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/EngineeringQuantity.vue')},"data-v-123b232c",null);e.default=F.exports}});