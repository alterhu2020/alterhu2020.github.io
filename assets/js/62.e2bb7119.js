(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{318:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ClientOnly",[a("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#父组件向子组件传值"}},[t._v("父组件向子组件传值")])]),a("li",[a("a",{attrs:{href:"#子组件向父组件传值"}},[t._v("子组件向父组件传值")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"父组件向子组件传值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父组件向子组件传值"}},[t._v("#")]),t._v(" 父组件向子组件传值")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("props")]),t._v("属性传值，子组件"),a("code",[t._v("data")]),t._v("中定义一个新的副本，用来保存父组件传递过来的值。然后在"),a("code",[t._v("watch")]),t._v("中监听对应的props和data的属性值变化。")]),t._v(" "),a("h2",{attrs:{id:"子组件向父组件传值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子组件向父组件传值"}},[t._v("#")]),t._v(" 子组件向父组件传值")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("$emit")]),t._v("方法传值，可以用三种方式")]),t._v(" "),a("ul",[a("li",[t._v("直接$emit一个事件，然后父组件可以通过@事件获取对应的值")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子组件")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("直接"),a("code",[t._v("$emit")]),t._v("方法传递input方法，其实父组件此时通过@input获取了对应的值")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子组件")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("-直接"),a("code",[t._v("$emit")]),t._v("方法加上对应的"),a("code",[t._v("update:事件")]),t._v(",然后父组件可以用两种方式获取子组件的值：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子组件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update:show'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父组件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("show.sync")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("  或者 "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(":show @update:show")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);