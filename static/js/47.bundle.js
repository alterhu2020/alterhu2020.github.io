webpackJsonp([47],{'./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6b909c92","scoped":true,"hasInlineConfig":false}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MaterialFundReport.vue':function(t,e){},"./src/components/MaterialFundReport.vue":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("./node_modules/vux/src/components/scroller/index.vue"),o=i("./src/utils/StringUtils.js"),l=(r.a,Object,Array,{name:"MaterialFundReport",components:{Scroller:r.a},data:function(){return{currentDetail:this.detail,currentWorkflows:this.workflows}},props:{detail:{type:Object,default:function(){return{partya:"",partyb:"",contractname:"",contractnumber:"",department:"",applydate:"",price:"",reason:"",note:""}}},workflows:{type:Array,default:function(){return[{title:"",key:"",name:"",signature:"",status:"",reason:""},{title:"",key:"",name:"",signature:"",status:"",reason:""},{title:"",key:"",name:"",signature:"",status:"",reason:""}]}}},watch:{detail:function(t){t&&(this.currentDetail=t)},workflows:function(t){t&&(this.currentWorkflows=t)}},computed:{uppercaseprice:function(){return Object(o.b)(this.currentDetail.price)}},methods:{}}),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"report"}},[t.currentDetail.partyb?i("p",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","font-size":"10.5pt","line-height":"200%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[i("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt"}},[t._v(t._s(t.currentDetail.partyb))])]):t._e(),t._v(" "),t._m(0),t._v(" "),i("div",{staticStyle:{"text-align":"center"}},[i("table",{staticStyle:{"border-collapse":"collapse",margin:"0 auto",width:"fit-content"},attrs:{cellspacing:"0",cellpadding:"0"}},[i("tr",{staticStyle:{height:"28.35pt"}},[t._m(1),t._v(" "),i("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"0.75pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"0.75pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"1.5pt","padding-left":"5.03pt","padding-right":"5.03pt","vertical-align":"middle",width:"156.8pt"},attrs:{colspan:"2"}},[i("p",{staticStyle:{"font-size":"10.5pt","line-height":"150%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"center",widows:"0"}},[i("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[t._v(t._s(t.currentDetail.contractname))])])]),t._v(" "),t._m(2),t._v(" "),i("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"0.75pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"1.5pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"1.5pt","padding-left":"5.03pt","padding-right":"4.65pt","vertical-align":"middle",width:"92.7pt"}},[i("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"center",widows:"0"}},[i("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[t._v(t._s(t.currentDetail.contractnumber))])])])]),t._v(" "),i("tr",{staticStyle:{height:"28.35pt"}},[t._m(3),t._v(" "),i("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"0.75pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"0.75pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"0.75pt","padding-left":"5.03pt","padding-right":"5.03pt","vertical-align":"middle",width:"156.8pt"},attrs:{colspan:"2"}},[i("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"center",widows:"0"}},[i("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[t._v(t._s(t.currentDetail.department))])])]),t._v(" "),t._m(4),t._v(" "),i("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"0.75pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"1.5pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"0.75pt","padding-left":"5.03pt","padding-right":"4.65pt","vertical-align":"middle",width:"92.7pt"}},[i("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"center",widows:"0"}},[i("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[t._v(t._s(t.currentDetail.applydate))])])])]),t._v(" "),i("tr",{staticStyle:{height:"28.35pt"}},[t._m(5),t._v(" "),i("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"0.75pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"1.5pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"0.75pt","padding-left":"5.03pt","padding-right":"4.65pt","vertical-align":"middle",width:"324pt"},attrs:{colspan:"4"}},[i("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[i("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt","vertical-align":"baseline"}},[t._v("大写")]),i("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[t._v(": "+t._s(t.uppercaseprice)+"\n                          ")]),i("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt","vertical-align":"baseline","margin-left":"20px"}},[t._v("￥")]),i("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[t._v("："+t._s(t.currentDetail.price))])])])]),t._v(" "),i("tr",{staticStyle:{height:"234.7pt"}},[t._m(6),t._v(" "),i("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"0.75pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"1.5pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"0.75pt","padding-left":"5.03pt","padding-right":"4.65pt","vertical-align":"top",width:"372.7pt"},attrs:{colspan:"5"}},[t._m(7),t._v(" "),i("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[i("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[t._v(t._s(t.currentDetail.reason))])]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20)])]),t._v(" "),t._l(t.currentWorkflows,function(e,r){return r>=1?i("tr",{key:r,staticStyle:{height:"36.85pt"}},[1===r?i("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"1.5pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"0.75pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"0.75pt","padding-left":"4.65pt","padding-right":"5.03pt","vertical-align":"middle",width:"35pt"},attrs:{rowspan:t.currentWorkflows.length-1}},[i("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"center",widows:"0"}},[i("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt","font-weight":"bold","vertical-align":"baseline"}},[t._v(t._s(t.currentDetail.partya?t.currentDetail.partya:"请输入项目名称"))])])]):t._e(),t._v(" "),i("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"0.75pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"0.75pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"0.75pt","padding-left":"5.03pt","padding-right":"5.03pt","vertical-align":"top",width:"67.2pt"},attrs:{colspan:"2"}},[i("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0",widows:"0"}},[i("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt","font-weight":"bold","vertical-align":"baseline"}},[t._v(t._s(e.title?e.title:"签字部门"))])])]),t._v(" "),i("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"0.75pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"1.5pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"0.75pt","padding-left":"5.03pt","padding-right":"4.65pt","vertical-align":"top",width:"294.7pt"},attrs:{colspan:"3"}},[i("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[i("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt"}},[t._v(t._s(e?e.reason:""))]),t._v(" "),e&&e.signature?i("img",{staticStyle:{"-aw-left-pos":"0pt","-aw-rel-hpos":"column","-aw-rel-vpos":"paragraph","-aw-top-pos":"0pt","-aw-wrap-type":"inline"},attrs:{src:e.signature,width:"200",height:"34",alt:"没有签名"}}):t._e()])])]):t._e()}),t._v(" "),i("tr",{staticStyle:{height:"49.7pt"}},[t._m(21),t._v(" "),i("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"1.5pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"0.75pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"1.5pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"0.75pt","padding-left":"5.03pt","padding-right":"4.65pt","vertical-align":"top",width:"372.7pt"},attrs:{colspan:"5"}},[i("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[i("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[t._v(t._s(t.currentDetail.note))])])])]),t._v(" "),t._m(22)],2)]),t._v(" "),t._m(23)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticStyle:{margin:"0pt",orphans:"0","page-break-after":"avoid","page-break-inside":"avoid","text-align":"center",widows:"0"}},[e("span",{staticStyle:{"font-family":"宋体","font-size":"16pt","font-weight":"bold"}},[this._v("材料请款报告")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"1.5pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"0.75pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"1.5pt","padding-left":"4.65pt","padding-right":"5.03pt","vertical-align":"middle",width:"83.7pt"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"font-size":"10.5pt","line-height":"150%",margin:"0pt 0pt 10pt 10.5pt",orphans:"0","text-align":"center",widows:"0"}},[e("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt","font-weight":"bold","vertical-align":"baseline"}},[this._v("材料")]),e("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","font-weight":"bold","vertical-align":"baseline"}},[this._v("/")]),e("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt","font-weight":"bold","vertical-align":"baseline"}},[this._v("合同名称")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"0.75pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"0.75pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"1.5pt","padding-left":"5.03pt","padding-right":"5.03pt","vertical-align":"middle",width:"52.9pt"}},[e("p",{staticStyle:{"font-size":"10.5pt","line-height":"150%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"center",widows:"0"}},[e("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt","font-weight":"bold","vertical-align":"baseline"}},[this._v("合同编号")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"1.5pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"0.75pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"0.75pt","padding-left":"4.65pt","padding-right":"5.03pt","vertical-align":"middle",width:"83.7pt"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"center",widows:"0"}},[e("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt","font-weight":"bold","vertical-align":"baseline"}},[this._v("申请单位")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"0.75pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"0.75pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"0.75pt","padding-left":"5.03pt","padding-right":"5.03pt","vertical-align":"middle",width:"52.9pt"}},[e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"center",widows:"0"}},[e("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt","font-weight":"bold","vertical-align":"baseline"}},[this._v("申请日期")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"1.5pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"0.75pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"0.75pt","padding-left":"4.65pt","padding-right":"5.03pt","vertical-align":"middle",width:"83.7pt"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"center",widows:"0"}},[e("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt","font-weight":"bold","vertical-align":"baseline"}},[this._v("请款金额")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"0.75pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"1.5pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"0.75pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"0.75pt","padding-left":"4.65pt","padding-right":"5.03pt","vertical-align":"middle",width:"35pt"}},[e("p",{staticStyle:{margin:"0pt 0pt 10pt 10.5pt",orphans:"0","text-align":"center",widows:"0"}},[e("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt","font-weight":"bold","vertical-align":"baseline"}},[this._v("情况理由")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[e("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[e("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[e("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[e("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[e("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[e("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[e("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[e("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[e("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[e("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[e("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[e("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt","vertical-align":"baseline"}},[this._v(" ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"14pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"center",widows:"0"}},[e("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt","font-weight":"bold","vertical-align":"baseline"}}),this._v(" "),e("span",{staticStyle:{"font-family":"宋体","font-size":"14pt","font-weight":"bold","vertical-align":"baseline"}},[this._v("申请单位：（签名）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0",widows:"0"}},[e("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt"}},[this._v("（明确合同履行情况、")]),e("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt"}},[this._v("材料供应")]),e("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt"}},[this._v("完成情况及符合合同哪项付款条件）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"border-bottom-color":"#000000","border-bottom-style":"solid","border-bottom-width":"1.5pt","border-left-color":"#000000","border-left-style":"solid","border-left-width":"1.5pt","border-right-color":"#000000","border-right-style":"solid","border-right-width":"0.75pt","border-top-color":"#000000","border-top-style":"solid","border-top-width":"0.75pt","padding-left":"4.65pt","padding-right":"5.03pt","vertical-align":"middle",width:"35pt"}},[e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"center",widows:"0"}},[e("span",{staticStyle:{"font-family":"宋体","font-size":"10.5pt","font-weight":"bold","vertical-align":"baseline"}},[this._v("备注")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticStyle:{height:"0pt"}},[e("td",{staticStyle:{width:"45.8pt",border:"none"}}),this._v(" "),e("td",{staticStyle:{width:"48.7pt",border:"none"}}),this._v(" "),e("td",{staticStyle:{width:"29.3pt",border:"none"}}),this._v(" "),e("td",{staticStyle:{width:"138.3pt",border:"none"}}),this._v(" "),e("td",{staticStyle:{width:"63.7pt",border:"none"}}),this._v(" "),e("td",{staticStyle:{width:"103.5pt",border:"none"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"10.5pt","line-height":"115%",margin:"0pt 0pt 10pt",orphans:"0","text-align":"justify",widows:"0"}},[e("span",{staticStyle:{"font-family":"Calibri","font-size":"10.5pt"}},[this._v(" ")])])}]};var a=i("./node_modules/vue-loader/lib/component-normalizer.js")(l,s,!1,function(t){i('./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6b909c92","scoped":true,"hasInlineConfig":false}!./node_modules/vux-loader/src/style-loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MaterialFundReport.vue')},"data-v-6b909c92",null);e.default=a.exports}});