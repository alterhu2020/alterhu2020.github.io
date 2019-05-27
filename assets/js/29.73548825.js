(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{299:function(t,a,e){"use strict";e.r(a);var s=e(4),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("因为所有的写作的支持来源于"),e("code",[t._v("markdown")]),t._v("的强力驱动，所以有必要这里专门写下一些重要的"),e("code",[t._v("markdown")]),t._v("的语法，以便需要的时候参考。")])]),t._v(" "),e("p",[t._v("阅读导航目录\n"),e("TOC")],1),t._v(" "),e("h2",{attrs:{id:"表格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表格","aria-hidden":"true"}},[t._v("#")]),t._v(" 表格")]),t._v(" "),e("p",[t._v("如何生成一个markdown的表格")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("First Header")]),t._v(" "),e("th",[t._v("Second Header")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Content from cell 1")]),t._v(" "),e("td",[t._v("Content from cell 2")])]),t._v(" "),e("tr",[e("td",[t._v("Content in the first column")]),t._v(" "),e("td",[t._v("Content in the second column")])])])]),t._v(" "),e("h2",{attrs:{id:"如何更改github仓库的语言属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何更改github仓库的语言属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何更改github仓库的语言属性")]),t._v(" "),e("p",[t._v("当创建github项目的时候，github本身会根据提交文件的数量来自动推断工程的开发语言，有时这种推断结果会与实际情况不太相符。比如上传一个java的web工程，如果在工程里存在大量的html、javascript和css文件的话，该工程属性会被设置为javascript或html。")]),t._v(" "),e("p",[t._v("我们需要在工程根目录下手动增加一个.gitattributes文件来修正工程的语言属性，内容如下：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("*.js linguist-language"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Java\n*.css linguist-language"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Java\n*.html linguist-language"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Java\n\n")])])]),e("h2",{attrs:{id:"删除线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除线","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除线")]),t._v(" "),e("p",[e("s",[t._v("删除我吧")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("~~这是一段删除的文字~~\n")])])]),e("h2",{attrs:{id:"生成文档目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成文档目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成文档目录")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[[toc]]\n// or\n<TOC/>\n")])])]),e("h2",{attrs:{id:"注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注释","aria-hidden":"true"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),e("ul",[e("li",[t._v("vuepress注释")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\x3c!-- 这是注释--\x3e\n")])])]),e("ul",[e("li",[t._v("单行注释")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 单行注释\nvar str: String\n")])])]),e("ul",[e("li",[t._v("多行注释")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/*\n  多行注释的内容\n*/\n")])])]),e("h2",{attrs:{id:"静态图片的引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态图片的引用","aria-hidden":"true"}},[t._v("#")]),t._v(" 静态图片的引用")]),t._v(" "),e("ul",[e("li",[t._v("官方的vuepress提供的静态文件可以放在public文件夹下面，这里的图片是直接复制到生成目录下面的，可以这样使用。例如有一个图片文件路径类似 ./vuepress/public/img/test.png,那么可以这样使用：")])]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[t._v("\n "),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("![图片描述](/img/test.png)")]),t._v("\n\n")])])]),e("ul",[e("li",[t._v("如果觉得操作麻烦，可以将对应的图片放在你的"),e("code",[t._v("md")]),t._v("文件目录下面，例如：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("|-- video\n    |-- black-hawk-down.md\n    |-- game-of-the-thrones.md\n    |-- index.md\n    |-- img\n        |-- gameofthrones.png\n\n\n")])])]),e("p",[t._v("那么在markdown文件"),e("code",[t._v("game-of-the-thrones.md")]),t._v("中的静态图片可以这样使用：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  ![图片描述](./img/test.png)\n\n")])])]),e("h2",{attrs:{id:"文件目录树生成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件目录树生成","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件目录树生成")]),t._v(" "),e("blockquote",[e("p",[t._v("【参考】(https://blog.csdn.net/luyu13141314/article/details/83149198)(https://blog.csdn.net/luyu13141314/article/details/83149198)")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.安装: npm install mddir -g\n\n2.当前目录产生目录树: mddir\n\n3.绝对路径文件目录树: mddir /absolute/path\n\n4.相对路径文件目录树: mddir ~/Documents/whatever.\n\nThe md file gets generated in your working directory.\n\nCurrently ignores node_modules, and .git folders.\n")])])]),e("h2",{attrs:{id:"警告注意语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#警告注意语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 警告注意语法")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("这是警告标题")]),t._v(" "),e("p",[t._v("这是警告的内容部分")])]),t._v(" "),e("h2",{attrs:{id:"emoji语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emoji语法","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("code",[t._v("Emoji")]),t._v("语法")]),t._v(" "),e("p",[t._v("直接复制 [参考] "),e("a",{attrs:{href:"https://github.com/ikatyang/emoji-cheat-sheet",target:"_blank",rel:"noopener noreferrer"}},[t._v("emoji cheat sheet"),e("OutboundLink")],1),t._v(" 中的对应表情，或者也可以采用markdown语法来写表情，例如开心 :happy:")]),t._v(" "),e("h2",{attrs:{id:"主题配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主题配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 主题配置")]),t._v(" "),e("ul",[e("li",[t._v("[参考]"),e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/theme/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方默认主题配置"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("[参考] "),e("a",{attrs:{href:"https://github.com/openhab/openhab-docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("openhab doc主题"),e("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=r.exports}}]);