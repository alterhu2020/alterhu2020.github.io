(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{309:function(t,e,s){"use strict";s.r(e);var a=s(6),i=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("我的服务器后台需要接受一个数组形式的参数,我想到的springboot形式的参数代码如下:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('public listData(@RequestParam("pid") List<Long> projectIds)\n')])])]),s("p",[t._v("所以这里我用了一个List来接受数组形式的参数,但是发现我再用前台发送类似下面的请求的时候,发现相同参数名称(这里是"),s("code",[t._v("pid")]),t._v(")会被覆盖,发送到服务器端只有一个参数,如下:")]),t._v(" "),s("ul",[s("li",[t._v("发送的GET类型的请求如下: "),s("code",[t._v("http://test.com?pid=123&pid=456")])]),t._v(" "),s("li",[t._v("实际发送的GET类型请求地址: "),s("code",[t._v("http://test.com?pid=456")])])]),t._v(" "),s("p",[t._v("可以发现相同的参数请求时总是会覆盖相同的参数,")])])},[],!1,null,null,null);e.default=i.exports}}]);