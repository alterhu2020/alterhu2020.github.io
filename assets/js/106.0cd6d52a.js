(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{364:function(e,t,r){"use strict";r.r(t);var a=r(9),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("ClientOnly",[r("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#下载安装"}},[e._v("下载安装")])]),r("li",[r("a",{attrs:{href:"#配置使用"}},[e._v("配置使用")])])])]),r("p"),e._v(" "),r("p",[e._v("最新更新： 推荐直接使用 "),r("a",{attrs:{href:"https://github.com/PowerShell/PowerShell/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerShell 7 "),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"下载安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[e._v("#")]),e._v(" 下载安装")]),e._v(" "),r("ol",[r("li",[e._v("官方提示需要先安装： "),r("a",{attrs:{href:"https://www.microsoft.com/en-us/download/details.aspx?id=53175",target:"_blank",rel:"noopener noreferrer"}},[e._v("Desktop Bridge VC++ v14 Redistributable Package"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("在"),r("a",{attrs:{href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"}},[e._v("microsoft/terminal"),r("OutboundLink")],1),e._v("仓库下载对应的terminal文件，打开"),r("code",[e._v("powershell")]),e._v("命令行执行命令如下安装:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("> Add-AppxPackage .\\Microsoft.WindowsTerminalPreview_1.3.2382.0_8wekyb3d8bbwe.msixbundle\n")])])]),r("h2",{attrs:{id:"配置使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置使用"}},[e._v("#")]),e._v(" 配置使用")]),e._v(" "),r("p",[e._v("WT 好处都有啥？\n根据官方介绍，Windows Terminal 是一个"),r("strong",[e._v("面向命令行用户的全新、现代化、功能丰富的高性能终端应用程序")]),e._v("。它在实现了社区用户热切期望的许多功能的同时（包括多标签页、富文本、全球化、可配置性、对主题与样式的支持等），依然保持快速与高效，不会消耗大量的内存或电量。")]),e._v(" "),r("p",[e._v("安装完成后可以直接在开始菜单中找到，“Window Terminal Preview”.")]),e._v(" "),r("ol",[r("li",[e._v("添加右键菜单")])]),e._v(" "),r("p",[e._v("2020年0915日最新更新： 参考此脚本： https://github.com/lextm/windowsterminal-shell")]),e._v(" "),r("p",[e._v("不过我还是比较习惯传统的右键菜单「在这里打开终端」的方式。WT 目前还没有内置这一功能，想要手动添加也比较麻烦（下文参考了这个 "),r("a",{attrs:{href:"https://github.com/microsoft/terminal/issues/1060",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue "),r("OutboundLink")],1),e._v("中的方法）。")]),e._v(" "),r("p",[e._v("以管理员权限打开 PowerShell，运行以下命令：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('$basePath = "Registry::HKEY_CLASSES_ROOT\\Directory\\Background\\shell"\nNew-Item -Path "$basePath\\wt" -Force -Value "Windows Terminal here"\nNew-ItemProperty -Path "$basePath\\wt" -Force -Name "Icon" -PropertyType ExpandString -Value "%LOCALAPPDATA%\\Microsoft\\WindowsApps\\terminal.ico"\nNew-Item -Path "$basePath\\wt\\command" -Force -Type ExpandString -Value \'"%LOCALAPPDATA%\\Microsoft\\WindowsApps\\wt.exe" -p Ubuntu -d "%V"\'\n\n')])])]),r("p",[e._v("如果你足够熟练，也可以自行通过其他方式修改注册表，反正就那么些字段，路径正确就行了。Windows Terminal 的图标可以在 "),r("a",{attrs:{href:"https://raw.githubusercontent.com/microsoft/terminal/master/res/terminal.ico",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),r("OutboundLink")],1),e._v(" 获取 。")]),e._v(" "),r("blockquote",[r("p",[e._v("2020/03/14 更新：Windows Terminal 0.9 版本之后添加了 wt.exe 的命令行参数，可以直接指定启动目录，不需要再修改 profiles.json 中的 "),r("code",[e._v("startingDirectory")]),e._v(" 字段了。")])]),e._v(" "),r("p",[e._v("另外 wt.exe 支持通过"),r("code",[e._v("-p")]),e._v("参数指定要打开的 Profile，所以除了 WSL，我还添加了一个在当前目录下打开 PowerShell 的菜单项（注册表中添加一个 Extended 项可以让该右键菜单项仅在按住 Shift 右键时才显示）。你甚至可以通过二级菜单的方式实现更多功能，具体可以参考上面给出的 issue 中的讨论。")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);