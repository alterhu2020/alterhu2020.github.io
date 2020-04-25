(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{314:function(t,a,s){"use strict";s.r(a);var n=s(9),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ClientOnly",[s("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#配置"}},[t._v("配置")])]),s("li",[s("a",{attrs:{href:"#使用"}},[t._v("使用")])]),s("li",[s("a",{attrs:{href:"#问题"}},[t._v("问题")]),s("ul",[s("li",[s("a",{attrs:{href:"#设置了-log-file-参数后控制台将不会产生日志？"}},[t._v("设置了LOG_FILE参数后控制台将不会产生日志？")])]),s("li",[s("a",{attrs:{href:"#通过-scrapyd-调度的egg执行的爬虫日志文件在哪里"}},[t._v("通过scrapyd调度的egg执行的爬虫日志文件在哪里?")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("settings.py")]),t._v("中配置对应的字段：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("log_day=datetime.datetime.now()\nlog_file_path= \"{}-{}-{}.log\".format(log_day.year,log_day.month,log_day.day)\n\nLOG_ENABLED = True\nLOG_ENCODING = 'utf-8'\nLOG_FILE = log_file_path\nLOG_FORMAT='%(asctime)s [%(name)s] %(levelname)s: %(message)s'\nLOG_STDOUT=False\nLOG_LEVEL = 'INFO'\n")])])]),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("使用方式有两种,一种是通过"),s("code",[t._v("logging")]),t._v("模块引用，一种是通过引用"),s("code",[t._v("scrapy")]),t._v("自带的"),s("code",[t._v("self.logger.")]),t._v("模块。如下：")]),t._v(" "),s("ol",[s("li",[t._v("方法一：")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logging\nlogger "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" logging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getLogger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlogger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("warning"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a warning"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("方法二：")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" scrapy\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySpider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrapy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Spider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myspider'")]),t._v("\n    start_urls "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://scrapinghub.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Parse function called on %s'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("h3",{attrs:{id:"设置了log-file参数后控制台将不会产生日志？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置了log-file参数后控制台将不会产生日志？"}},[t._v("#")]),t._v(" 设置了"),s("code",[t._v("LOG_FILE")]),t._v("参数后控制台将不会产生日志？")]),t._v(" "),s("p",[t._v("官方说明是设置了该参数后会重定向所有的日志到文件，所以控制台没有日志。如果需要控制台有日志，需要配置不同环境设置该参数为"),s("code",[t._v("None")]),t._v("或者文件目录。")]),t._v(" "),s("h3",{attrs:{id:"通过scrapyd调度的egg执行的爬虫日志文件在哪里"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过scrapyd调度的egg执行的爬虫日志文件在哪里"}},[t._v("#")]),t._v(" 通过"),s("code",[t._v("scrapyd")]),t._v("调度的egg执行的爬虫日志文件在哪里?")]),t._v(" "),s("p",[t._v("找到"),s("code",[t._v("scrapyd")]),t._v("的配置文件，通过如下命令：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('find / -name "default_scrapyd.conf"\n')])])]),s("p",[t._v("里面有一个配置"),s("code",[t._v("logs_dir = /logs")]),t._v(",这个配置对应的就是存放日志的目录，然后切换到该目录下面会找到对应的scrapyd项目下面的爬虫目录对应的日志文件。")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);