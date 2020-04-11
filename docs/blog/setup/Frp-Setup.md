---
title: FRP内网穿透环境配置
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 服务端配置

## `frps.ini`配置文件
1. 配置执行文件
```
$  chmod +x frps
```
2. 直接修改`frps.ini`配置文件内容如下: 
```
[common]
bind_port = 7000

bind_udp_port = 7001
# kcp_bind_port = 7000


vhost_http_port = 8080
vhost_https_port = 4443


log_file = /opt/frp_0.31.1_linux_amd64/logs/frps.log
log_level = info
log_max_days = 3

custom_404_page = /opt/frp_0.31.1_linux_amd64/HTTP404.html

dashboard_port = 7500
dashboard_user = admin
dashboard_pwd = xxtestd231lx0)

# subdomain_host = pingbook.top

```


### 配置全局404错误页面

文件名为: `http404.html`,代码如下:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Simple HttpErrorPages | MIT License | https://github.com/AndiDittrich/HttpErrorPages -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>非法操作请求 | 404 - 没有找到资源</title>
    <style type="text/css">
      /*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */
      html {
        font-family: sans-serif;
        line-height: 1.15;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      body {
        margin: 0;
      }
      article,
      aside,
      footer,
      header,
      nav,
      section {
        display: block;
      }
      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      figcaption,
      figure,
      main {
        display: block;
      }
      figure {
        margin: 1em 40px;
      }
      hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }
      pre {
        font-family: monospace, monospace;
        font-size: 1em;
      }
      a {
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
      }
      a:active,
      a:hover {
        outline-width: 0;
      }
      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
      }
      b,
      strong {
        font-weight: inherit;
      }
      b,
      strong {
        font-weight: bolder;
      }
      code,
      kbd,
      samp {
        font-family: monospace, monospace;
        font-size: 1em;
      }
      dfn {
        font-style: italic;
      }
      mark {
        background-color: #ff0;
        color: #000;
      }
      small {
        font-size: 80%;
      }
      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }
      sub {
        bottom: -0.25em;
      }
      sup {
        top: -0.5em;
      }
      audio,
      video {
        display: inline-block;
      }
      audio:not([controls]) {
        display: none;
        height: 0;
      }
      img {
        border-style: none;
      }
      svg:not(:root) {
        overflow: hidden;
      }
      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: sans-serif;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }
      button,
      input {
        overflow: visible;
      }
      button,
      select {
        text-transform: none;
      }
      [type="reset"],
      [type="submit"],
      button,
      html [type="button"] {
        -webkit-appearance: button;
      }
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner,
      button::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }
      [type="button"]:-moz-focusring,
      [type="reset"]:-moz-focusring,
      [type="submit"]:-moz-focusring,
      button:-moz-focusring {
        outline: 1px dotted ButtonText;
      }
      fieldset {
        border: 1px solid silver;
        margin: 0 2px;
        padding: 0.35em 0.625em 0.75em;
      }
      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }
      progress {
        display: inline-block;
        vertical-align: baseline;
      }
      textarea {
        overflow: auto;
      }
      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }
      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        height: auto;
      }
      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }
      [type="search"]::-webkit-search-cancel-button,
      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }
      details,
      menu {
        display: block;
      }
      summary {
        display: list-item;
      }
      canvas {
        display: inline-block;
      }
      template {
        display: none;
      }
      [hidden] {
        display: none;
      } /*! Simple HttpErrorPages | MIT X11 License | https://github.com/AndiDittrich/HttpErrorPages */
      body,
      html {
        width: 100%;
        height: 100%;
        background-color: #21232a;
      }
      body {
        color: #fff;
        text-align: center;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        padding: 0;
        min-height: 100%;
        -webkit-box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.8);
        box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.8);
        display: table;
        font-family: "Open Sans", Arial, sans-serif;
      }
      h1 {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
        font-size: 36px;
      }
      h1 small {
        font-size: 68%;
        font-weight: 400;
        line-height: 1;
        color: #777;
      }
      a {
        text-decoration: none;
        color: #fff;
        font-size: inherit;
        border-bottom: dotted 1px #707070;
      }
      .lead {
        color: silver;
        font-size: 21px;
        line-height: 1.4;
      }
      .cover {
        display: table-cell;
        vertical-align: middle;
        padding: 0 20px;
      }
      footer {
        position: fixed;
        width: 100%;
        height: 40px;
        left: 0;
        bottom: 0;
        color: #a0a0a0;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div class="cover">
      <h1>没有找到资源 <small>错误代码: 404</small></h1>
      <p class="lead">
          当前访问的资源没有找到，您可以稍后尝试访问该资源查看是否存在！
        <!-- The requested resource could not be found but may be available again in
        the future. -->
      </p>
    </div>
  </body>
</html>

```

### 配置开机启动服务

开机启动脚本文件是: `frps.service`,复制到目录: `/lib/systemd/system`,代码如下:
```
[Unit]
Description=Frp Server Service
After=network.target

[Service]
Type=simple
User=root
Restart=on-failure
RestartSec=5s
ExecStart=/opt/frp_0.31.1_linux_amd64/frps -c /opt/frp_0.31.1_linux_amd64/frps.ini

[Install]
WantedBy=multi-user.target

```

## 客户端配置

## `frpc.ini`配置文件
1. 配置执行文件
```
$  chmod +x frpc
```
2. 直接修改`frpc.ini`配置文件内容如下: 
```
[common]
## 对应的您的服务器的ip地址和端口号，端口号是上面的`frps.ini`中配置的`port`参数
server_addr = 34.69.204.193
server_port = 7000
# 与服务器端通信协议
# 支持 tcp and kcp and websocket, 默认是 tcp
protocol = tcp
pool_count = 5

# 记录日志
log_file = /opt/frp/logs/frpc.log
log_level = info
log_max_days = 3


admin_port = 7400
admin_user = alterhu2020
admin_pwd = guchan102620
# ssh访问
[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 6000
# -----------------------------域名配置---------------------------
# 1. 通过域名访问设置,默认的remote_port已经在frps中设置
[www.http]
type = http
use_encryption = false
use_compression = true

local_ip = 127.0.0.1
local_port = 3000
custom_domains= www.pingbook.top,pingbook.top

# 2. blog.pingbook.top博客网站
[blog.http]
type = http
use_encryption = false
use_compression = true

local_ip = 127.0.0.1
local_port = 80
custom_domains= blog.pingbook.top

# 3. doc.pingbook.top文档网址
[doc.http]
type = http
use_encryption = false
use_compression = true

local_ip = 127.0.0.1
local_port = 3007
custom_domains= doc.pingbook.top

# 4. jvfast.pingbook.top演示网站
[jvfast.http]
type = http
use_encryption = false
use_compression = true

local_ip = 127.0.0.1
local_port = 3006
custom_domains= jvfast.pingbook.top

# 5. 后台接口open.pingbook.top配置
[open.http]
type = http
use_encryption = false
use_compression = true

local_ip = 127.0.0.1
local_port = 9090
custom_domains = open.pingbook.top

```