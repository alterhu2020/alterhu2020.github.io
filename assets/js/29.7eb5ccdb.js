(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{289:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"fiddler抓包手机app及其微信小程序请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fiddler抓包手机app及其微信小程序请求","aria-hidden":"true"}},[t._v("#")]),t._v(" fiddler抓包手机app及其微信小程序请求")]),t._v(" "),s("p",[t._v("参考文档： https://www.jianshu.com/p/b0344958186f")]),t._v(" "),s("p",[t._v("需要注意两点：")]),t._v(" "),s("ol",[s("li",[t._v("fiddler安装在windows上，而被抓包的手机可以是任意手机，不管是Android 的还是苹果的。")]),t._v(" "),s("li",[t._v("苹果的注意以下几步：\n2.1 设置WiFi手动代理；\n2.2 下载fiddler证书；\n2.3 描述文件证书验证，通用 - 描述文件与设备管理 - DO_NOT_TRUEST_FIDDLERROOT;\n2.4 证书设置信任， 这一部分也是重要的一步，不少人就是因为没设置为受信任的证书而失败的\n设置-通用-关于本机-证书信任设置；")])]),t._v(" "),s("p",[t._v("如下为一个成功抓包的请求：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET https://geque.yzzisha.com/guifan/api/index.php?m=home&c=User&a=getIndex1&page=1&pageSize=20&class_id=132&keyword= HTTP/1.1\nHost: geque.yzzisha.com\nContent-Type: application/json\nConnection: keep-alive\nAccept: */*\nUser-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.4(0x17000428) NetType/WIFI Language/zh_CN\nReferer: https://servicewechat.com/wx930cfdbaa071134a/12/page-frame.html\nAccept-Language: zh-cn\nAccept-Encoding: br, gzip, deflate\n\n\n")])])]),s("h2",{attrs:{id:"unable-to-obtain-localdatetime-from-temporalaccessor-iso-resolved-to-2018-04-30-of-type-java-tim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-obtain-localdatetime-from-temporalaccessor-iso-resolved-to-2018-04-30-of-type-java-tim","aria-hidden":"true"}},[t._v("#")]),t._v(" Unable to obtain LocalDateTime from TemporalAccessor: {},ISO resolved to 2018-04-30 of type java.tim")]),t._v(" "),s("blockquote",[s("p",[t._v("原因日期格式的时间不能转化为LocalDateTime")])]),t._v(" "),s("p",[t._v("可采用如下方法解决：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDateTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" dateStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTimeFormatter")]),t._v(" baseDateTimeFormatter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTimeFormatter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofPattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyyy-MM-dd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTimeFormatter")]),t._v(" dateTimeFormatter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTimeFormatterBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baseDateTimeFormatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseDefaulting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChronoField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HOUR_OF_DAY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseDefaulting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChronoField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MINUTE_OF_HOUR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseDefaulting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChronoField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SECOND_OF_MINUTE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFormatter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDateTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dateStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dateTimeFormatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"mysql快速重命名数据库名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql快速重命名数据库名称","aria-hidden":"true"}},[t._v("#")]),t._v(" mysql快速重命名数据库名称")]),t._v(" "),s("blockquote",[s("p",[t._v("参考文档: "),s("a",{attrs:{href:"https://chartio.com/resources/tutorials/how-to-rename-a-database-in-mysql/",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Rename a Database in MySQL"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("-- 数据库数据导入\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# mysqldump -u root -p"m6s1l@#2!" -R bestphoto > bestphoto.sql')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# mysqladmin -u root -p"m6s1l@#2!" create yitieyilu_bp')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# mysql -u root -p"m6s1l@#2!" yitieyilu_bp < bestphoto.sql')]),t._v("\n\n-- 用户权限赋予\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# mysql -u root -p"m6s1l@#2!";')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" GRANT ALL PRIVILEGES ON yitieyilu_bp.* TO "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'syscorer'")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" GRANT EXECUTE ON PROCEDURE yitieyilu_bp.* TO "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'syscorer'")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" flush privileges"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -------------------------------------------------------------------")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# mysqldump -u root -p"m6s1l@#2!" -R yanzhi > yanzhi.sql')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# mysqladmin -u root -p"m6s1l@#2!" create yitieyilu_vrpano')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# mysql -u root -p"m6s1l@#2!" yitieyilu_vrpano < yanzhi.sql')]),t._v("\n\n-- 用户权限赋予\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# mysql -u root -p"m6s1l@#2!";')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" GRANT ALL PRIVILEGES ON yitieyilu_vrpano.* TO "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'syscorer'")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" GRANT EXECUTE ON PROCEDURE yitieyilu_vrpano.* TO "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'syscorer'")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" flush privileges"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"mysql单索引和联合索引的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql单索引和联合索引的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" mysql单索引和联合索引的区别")]),t._v(" "),s("blockquote",[s("p",[t._v("靠左原则")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/Abysscarry/article/details/80792876",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("索引如何建立，及其如何使用，参考： https://www.toutiao.com/i6695892976922526212/")])])},[],!1,null,null,null);a.default=e.exports}}]);