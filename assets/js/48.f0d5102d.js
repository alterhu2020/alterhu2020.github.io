(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{304:function(t,s,a){"use strict";a.r(s);var e=a(9),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ClientOnly",[a("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#为什么github下载速度这么慢？"}},[t._v("为什么github下载速度这么慢？")])]),a("li",[a("a",{attrs:{href:"#如何提高github的下载速度？"}},[t._v("如何提高github的下载速度？")]),a("ul",[a("li",[a("a",{attrs:{href:"#第一步：获取github的global-ssl-fastly地址"}},[t._v("第一步：获取github的global.ssl.fastly地址")])]),a("li",[a("a",{attrs:{href:"#第二步：获取github-com地址"}},[t._v("第二步：获取github.com地址")])]),a("li",[a("a",{attrs:{href:"#第三步：修改host文件"}},[t._v("第三步：修改host文件")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"为什么github下载速度这么慢？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么github下载速度这么慢？"}},[t._v("#")]),t._v(" 为什么github下载速度这么慢？")]),t._v(" "),a("p",[t._v("github的cdn被墙屏蔽了")]),t._v(" "),a("h2",{attrs:{id:"如何提高github的下载速度？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何提高github的下载速度？"}},[t._v("#")]),t._v(" 如何提高github的下载速度？")]),t._v(" "),a("p",[t._v("手动把cdn和ip地址绑定。")]),t._v(" "),a("h3",{attrs:{id:"第一步：获取github的global-ssl-fastly地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步：获取github的global-ssl-fastly地址"}},[t._v("#")]),t._v(" 第一步：获取github的global.ssl.fastly地址")]),t._v(" "),a("p",[t._v("访问："),a("a",{attrs:{href:"http://github.global.ssl.fastly.net.ipaddress.com/#ipinfo",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://github.global.ssl.fastly.net.ipaddress.com/#ipinfo"),a("OutboundLink")],1),t._v("\n获取cdn和ip域名：\n"),a("img",{attrs:{src:"http://p1.pstatp.com/large/pgc-image/04bff14df4a24b27a3c560790365fa23",alt:"无法显示"}})]),t._v(" "),a("p",[t._v("得到：199.232.69.194 \thttps://github.global.ssl.fastly.net")]),t._v(" "),a("h3",{attrs:{id:"第二步：获取github-com地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步：获取github-com地址"}},[t._v("#")]),t._v(" 第二步：获取github.com地址")]),t._v(" "),a("p",[t._v("访问：https://github.com.ipaddress.com/#ipinfo\n获取cdn和ip：\n"),a("img",{attrs:{src:"http://p1.pstatp.com/large/pgc-image/a746a0ec88294a668cd6446437021310",alt:"无法显示图片"}})]),t._v(" "),a("p",[t._v("得到：140.82.114.4 http://github.com")]),t._v(" "),a("h3",{attrs:{id:"第三步：修改host文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三步：修改host文件"}},[t._v("#")]),t._v(" 第三步：修改host文件")]),t._v(" "),a("p",[t._v("windows系统：")]),t._v(" "),a("p",[t._v("1、修改"),a("a",{attrs:{href:"C:%5CWindows%5CSystem32%5Cdrivers%5Cetc%5Chosts"}},[t._v("C:\\Windows\\System32\\drivers\\etc\\hosts")]),t._v("文件的权限，指定可写入：")]),t._v(" "),a("p",[t._v("右击->hosts->属性->安全->编辑->点击Users->在Users的权限“写入”后面打勾。如下：\n"),a("img",{attrs:{src:"http://p3.pstatp.com/large/pgc-image/67de012d4d5d45b4bc52873c0f3199f8",alt:"无法显示"}})]),t._v(" "),a("p",[t._v("然后点击确定。")]),t._v(" "),a("p",[t._v("2、右击->hosts->打开方式->选定记事本（或者你喜欢的编辑器）->在末尾处添加以下内容：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("199.232.69.194 https://github.global.ssl.fastly.net\n\n140.82.114.4 https://github.com\n")])])])],1)}),[],!1,null,null,null);s.default=i.exports}}]);