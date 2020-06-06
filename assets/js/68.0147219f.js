(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{324:function(n,t,e){"use strict";e.r(t);var o=e(9),i=Object(o.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("ClientOnly",[e("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),n._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#服务端配置"}},[n._v("服务端配置")])]),e("li",[e("a",{attrs:{href:"#frps-ini-配置文件"}},[n._v("frps.ini配置文件")]),e("ul",[e("li",[e("a",{attrs:{href:"#配置全局404错误页面"}},[n._v("配置全局404错误页面")])]),e("li",[e("a",{attrs:{href:"#配置开机启动服务"}},[n._v("配置开机启动服务")])])])]),e("li",[e("a",{attrs:{href:"#客户端配置"}},[n._v("客户端配置")])]),e("li",[e("a",{attrs:{href:"#frpc-ini-配置文件"}},[n._v("frpc.ini配置文件")])])])]),e("p"),n._v(" "),e("h2",{attrs:{id:"服务端配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务端配置"}},[n._v("#")]),n._v(" 服务端配置")]),n._v(" "),e("h2",{attrs:{id:"frps-ini配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frps-ini配置文件"}},[n._v("#")]),n._v(" "),e("code",[n._v("frps.ini")]),n._v("配置文件")]),n._v(" "),e("ol",[e("li",[n._v("配置执行文件")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$  chmod +x frps\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[n._v("直接修改"),e("code",[n._v("frps.ini")]),n._v("配置文件内容如下:")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("[common]\nbind_port = 7000\n\nbind_udp_port = 7001\n# kcp_bind_port = 7000\n\n\nvhost_http_port = 8080\nvhost_https_port = 4443\n\n\nlog_file = /opt/frp_0.31.1_linux_amd64/logs/frps.log\nlog_level = info\nlog_max_days = 3\n\ncustom_404_page = /opt/frp_0.31.1_linux_amd64/HTTP404.html\n\ndashboard_port = 7500\ndashboard_user = admin\ndashboard_pwd = xxtestd231lx0)\n\n# subdomain_host = pingbook.top\n\n")])])]),e("h3",{attrs:{id:"配置全局404错误页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置全局404错误页面"}},[n._v("#")]),n._v(" 配置全局404错误页面")]),n._v(" "),e("p",[n._v("文件名为: "),e("code",[n._v("http404.html")]),n._v(",代码如下:")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    \x3c!-- Simple HttpErrorPages | MIT License | https://github.com/AndiDittrich/HttpErrorPages --\x3e\n    <meta charset="utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>非法操作请求 | 404 - 没有找到资源</title>\n    <style type="text/css">\n      /*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n      html {\n        font-family: sans-serif;\n        line-height: 1.15;\n        -ms-text-size-adjust: 100%;\n        -webkit-text-size-adjust: 100%;\n      }\n      body {\n        margin: 0;\n      }\n      article,\n      aside,\n      footer,\n      header,\n      nav,\n      section {\n        display: block;\n      }\n      h1 {\n        font-size: 2em;\n        margin: 0.67em 0;\n      }\n      figcaption,\n      figure,\n      main {\n        display: block;\n      }\n      figure {\n        margin: 1em 40px;\n      }\n      hr {\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n      pre {\n        font-family: monospace, monospace;\n        font-size: 1em;\n      }\n      a {\n        background-color: transparent;\n        -webkit-text-decoration-skip: objects;\n      }\n      a:active,\n      a:hover {\n        outline-width: 0;\n      }\n      abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        text-decoration: underline dotted;\n      }\n      b,\n      strong {\n        font-weight: inherit;\n      }\n      b,\n      strong {\n        font-weight: bolder;\n      }\n      code,\n      kbd,\n      samp {\n        font-family: monospace, monospace;\n        font-size: 1em;\n      }\n      dfn {\n        font-style: italic;\n      }\n      mark {\n        background-color: #ff0;\n        color: #000;\n      }\n      small {\n        font-size: 80%;\n      }\n      sub,\n      sup {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n      sub {\n        bottom: -0.25em;\n      }\n      sup {\n        top: -0.5em;\n      }\n      audio,\n      video {\n        display: inline-block;\n      }\n      audio:not([controls]) {\n        display: none;\n        height: 0;\n      }\n      img {\n        border-style: none;\n      }\n      svg:not(:root) {\n        overflow: hidden;\n      }\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        font-family: sans-serif;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n      button,\n      input {\n        overflow: visible;\n      }\n      button,\n      select {\n        text-transform: none;\n      }\n      [type="reset"],\n      [type="submit"],\n      button,\n      html [type="button"] {\n        -webkit-appearance: button;\n      }\n      [type="button"]::-moz-focus-inner,\n      [type="reset"]::-moz-focus-inner,\n      [type="submit"]::-moz-focus-inner,\n      button::-moz-focus-inner {\n        border-style: none;\n        padding: 0;\n      }\n      [type="button"]:-moz-focusring,\n      [type="reset"]:-moz-focusring,\n      [type="submit"]:-moz-focusring,\n      button:-moz-focusring {\n        outline: 1px dotted ButtonText;\n      }\n      fieldset {\n        border: 1px solid silver;\n        margin: 0 2px;\n        padding: 0.35em 0.625em 0.75em;\n      }\n      legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n      progress {\n        display: inline-block;\n        vertical-align: baseline;\n      }\n      textarea {\n        overflow: auto;\n      }\n      [type="checkbox"],\n      [type="radio"] {\n        box-sizing: border-box;\n        padding: 0;\n      }\n      [type="number"]::-webkit-inner-spin-button,\n      [type="number"]::-webkit-outer-spin-button {\n        height: auto;\n      }\n      [type="search"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n      [type="search"]::-webkit-search-cancel-button,\n      [type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none;\n      }\n      ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n      details,\n      menu {\n        display: block;\n      }\n      summary {\n        display: list-item;\n      }\n      canvas {\n        display: inline-block;\n      }\n      template {\n        display: none;\n      }\n      [hidden] {\n        display: none;\n      } /*! Simple HttpErrorPages | MIT X11 License | https://github.com/AndiDittrich/HttpErrorPages */\n      body,\n      html {\n        width: 100%;\n        height: 100%;\n        background-color: #21232a;\n      }\n      body {\n        color: #fff;\n        text-align: center;\n        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n        padding: 0;\n        min-height: 100%;\n        -webkit-box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.8);\n        box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.8);\n        display: table;\n        font-family: "Open Sans", Arial, sans-serif;\n      }\n      h1 {\n        font-family: inherit;\n        font-weight: 500;\n        line-height: 1.1;\n        color: inherit;\n        font-size: 36px;\n      }\n      h1 small {\n        font-size: 68%;\n        font-weight: 400;\n        line-height: 1;\n        color: #777;\n      }\n      a {\n        text-decoration: none;\n        color: #fff;\n        font-size: inherit;\n        border-bottom: dotted 1px #707070;\n      }\n      .lead {\n        color: silver;\n        font-size: 21px;\n        line-height: 1.4;\n      }\n      .cover {\n        display: table-cell;\n        vertical-align: middle;\n        padding: 0 20px;\n      }\n      footer {\n        position: fixed;\n        width: 100%;\n        height: 40px;\n        left: 0;\n        bottom: 0;\n        color: #a0a0a0;\n        font-size: 14px;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="cover">\n      <h1>没有找到资源 <small>错误代码: 404</small></h1>\n      <p class="lead">\n          当前访问的资源没有找到，您可以稍后尝试访问该资源查看是否存在！\n        \x3c!-- The requested resource could not be found but may be available again in\n        the future. --\x3e\n      </p>\n    </div>\n  </body>\n</html>\n\n')])])]),e("h3",{attrs:{id:"配置开机启动服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置开机启动服务"}},[n._v("#")]),n._v(" 配置开机启动服务")]),n._v(" "),e("p",[n._v("开机启动脚本文件是: "),e("code",[n._v("frps.service")]),n._v(",复制到目录: "),e("code",[n._v("/lib/systemd/system")]),n._v(",代码如下:")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("[Unit]\nDescription=Frp Server Service\nAfter=network.target\n\n[Service]\nType=simple\nUser=root\nRestart=on-failure\nRestartSec=5s\nExecStart=/opt/frp_0.31.1_linux_amd64/frps -c /opt/frp_0.31.1_linux_amd64/frps.ini\n\n[Install]\nWantedBy=multi-user.target\n\n")])])]),e("h2",{attrs:{id:"客户端配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端配置"}},[n._v("#")]),n._v(" 客户端配置")]),n._v(" "),e("h2",{attrs:{id:"frpc-ini配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frpc-ini配置文件"}},[n._v("#")]),n._v(" "),e("code",[n._v("frpc.ini")]),n._v("配置文件")]),n._v(" "),e("ol",[e("li",[n._v("配置执行文件")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$  chmod +x frpc\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[n._v("直接修改"),e("code",[n._v("frpc.ini")]),n._v("配置文件内容如下:")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("[common]\n## 对应的您的服务器的ip地址和端口号，端口号是上面的`frps.ini`中配置的`port`参数\nserver_addr = 34.69.204.193\nserver_port = 7000\n# 与服务器端通信协议\n# 支持 tcp and kcp and websocket, 默认是 tcp\nprotocol = tcp\npool_count = 5\n\n# 记录日志\nlog_file = /opt/frp/logs/frpc.log\nlog_level = info\nlog_max_days = 3\n\n\nadmin_port = 7400\nadmin_user = alterhu2020\nadmin_pwd = guchan102620\n# ssh访问\n[ssh]\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 22\nremote_port = 6000\n# -----------------------------域名配置---------------------------\n# 1. 通过域名访问设置,默认的remote_port已经在frps中设置\n[www.http]\ntype = http\nuse_encryption = false\nuse_compression = true\n\nlocal_ip = 127.0.0.1\nlocal_port = 3000\ncustom_domains= www.pingbook.top,pingbook.top\n\n# 2. blog.pingbook.top博客网站\n[blog.http]\ntype = http\nuse_encryption = false\nuse_compression = true\n\nlocal_ip = 127.0.0.1\nlocal_port = 80\ncustom_domains= blog.pingbook.top\n\n# 3. doc.pingbook.top文档网址\n[doc.http]\ntype = http\nuse_encryption = false\nuse_compression = true\n\nlocal_ip = 127.0.0.1\nlocal_port = 3007\ncustom_domains= doc.pingbook.top\n\n# 4. jvfast.pingbook.top演示网站\n[jvfast.http]\ntype = http\nuse_encryption = false\nuse_compression = true\n\nlocal_ip = 127.0.0.1\nlocal_port = 3006\ncustom_domains= jvfast.pingbook.top\n\n# 5. 后台接口open.pingbook.top配置\n[open.http]\ntype = http\nuse_encryption = false\nuse_compression = true\n\nlocal_ip = 127.0.0.1\nlocal_port = 9090\ncustom_domains = open.pingbook.top\n\n")])])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);