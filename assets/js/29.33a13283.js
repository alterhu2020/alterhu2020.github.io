(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{286:function(r,t,e){"use strict";e.r(t);var n=e(9),a=Object(n.a)({},function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h2",{attrs:{id:"网站主题更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网站主题更新","aria-hidden":"true"}},[r._v("#")]),r._v(" 网站主题更新")]),r._v(" "),e("p",[r._v("今天抽點空想自定義一下"),e("code",[r._v("vuepress")]),r._v("的主題,主要是修改footer的部分。增加了了不蒜子统计网站流量。")]),r._v(" "),e("h2",{attrs:{id:"迅雷流氓后台程序禁用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#迅雷流氓后台程序禁用","aria-hidden":"true"}},[r._v("#")]),r._v(" 迅雷流氓后台程序禁用")]),r._v(" "),e("p",[r._v("一直没有让win10干啥活儿，今儿个安装了个迅雷极速版，发现启动电脑进入桌面后有点卡顿。温Win7的故而知Win10的\n新，过去的招儿今天一试，依然管用。拿来复习一下。")]),r._v(" "),e("p",[r._v("一、禁用XLServicePlatform服务("),e("s",[r._v("已经不可用")]),r._v(")")]),r._v(" "),e("p",[r._v("打开：运行→键入SERVICES.MSC→鼠标双击XLServicePlatform→运行改成：停止→启动改成：禁用→点击：应用，OK\n；")]),r._v(" "),e("p",[r._v("二、修改注册表")]),r._v(" "),e("p",[r._v("仅在【服务】里头【关闭】、【禁用】XLServicePlatform服务没用，重启电脑它会自己改回来的。\n打开：运行→键入regedit；找到并打开下面这个子项：\nHKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services"),e("br"),r._v("\n将里面的下列子项的值进行修改\nXLGuard  将start的值修改为4\nXLServicePlatform  将start的值修改为3\nXLWFP  将start的值修改为4")]),r._v(" "),e("p",[r._v("三、禁用服务")]),r._v(" "),e("p",[r._v("打开注册表，定位到“HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\XLservicePlatform”，\n在“XLservicePlatform”右侧选中所有数值，然后删除！删除后服务里迅雷的服务已经消失，现在需要修改权限避免迅雷修改注册表。\n选中XLservicePlatform项，右键选择权限，高级权限，更改所有者，将所有者改为超级管理员Administrators，然后禁用继承，\n点确定，如果无法禁用继承，就对每个帐户选用权限拒绝即可！这样迅雷启动时就无法修改注册表达到自动启动服务的目的了，因为权限被我们禁用！")]),r._v(" "),e("p",[r._v("重新启动电脑，OK了")]),r._v(" "),e("ul",[e("li",[r._v("脚本如下，保存为"),e("code",[r._v(".reg")]),r._v("格式即可:")])]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v('Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\XLGuard]\n"Start"=dword:00000004\n\n[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\XLServicePlatform]\n"Type"=dword:00000010\n"Start"=dword:00000003\n\n\n[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\XLWFP]\n"Type"=dword:00000001\n"Start"=dword:00000004\n\n')])])])])},[],!1,null,null,null);t.default=a.exports}}]);