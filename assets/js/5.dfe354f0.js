(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{264:function(t,s,a){t.exports=a.p+"assets/img/android-sdk.d57dd67e.png"},273:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"新技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新技术","aria-hidden":"true"}},[t._v("#")]),t._v(" 新技术")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("基于JavaScript的web端流程图："),e("a",{attrs:{href:"https://gojs.net/latest/samples/flowchart.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("flowchart"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("无意搜到一个博客: "),e("a",{attrs:{href:"https://www.finen.top",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.finen.top"),e("OutboundLink")],1),t._v(",采用了vuepress为平台，代码托管在： "),e("a",{attrs:{href:"https://github.com/hirCodd/vuepress-blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/hirCodd/vuepress-blog"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("整理了一个"),e("code",[t._v("ionic-vue")]),t._v("的项目，可以访问demo地址: "),e("a",{attrs:{href:"https://pingbook.top/ionic-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("ionic-vue"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"vuepress主题修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress主题修改","aria-hidden":"true"}},[t._v("#")]),t._v(" vuepress主题修改")]),t._v(" "),e("ul",[e("li",[t._v("基本上面的评论由"),e("code",[t._v('"@vssue/vuepress-plugin-vssue')]),t._v("转为"),e("code",[t._v("valine")]),t._v(",有时间再弄。。。")])]),t._v(" "),e("h2",{attrs:{id:"capacitor-初探"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#capacitor-初探","aria-hidden":"true"}},[t._v("#")]),t._v(" Capacitor 初探")]),t._v(" "),e("p",[t._v("折腾到使用安卓，然后重新安装对应的android sdk 和模拟器镜像:(强迫症作祟。。。)")]),t._v(" "),e("ol",[e("li",[t._v("下载sdk-windows.exe文件，然后运行SDK Manager下载： SDK Platform tool, SDK build tool,Android SDK Platform 28 ,Google Play Intel x86 Atom_64 System Image ，重新制作了一个\nAndroid的镜像文件。打开idea配置相关的所有工具和update site信息：")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(264),alt:"android sdk windows配置信息"}})]),t._v(" "),e("p",[t._v("::: warining 镜像文件\n推荐安装不带Google Play的镜像，否则可能不能安装未知来源的apk文件,坑啊，千万不要使用\n:::\n2. 如下为对应的"),e("code",[t._v("capacitor.config.json")]),t._v("配置信息:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"appId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.github.app"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"appName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.github.vue-mobile"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bundledWebRuntime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"webDir"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"npmClient"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yarn"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"windowsAndroidStudioPath"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"E:\\\\Program Files\\\\JetBrains\\\\IntelliJ IDEA 2019.1\\\\bin\\\\idea64.exe"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"android"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowMixedContent"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"captureInput"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"webContentsDebuggingEnabled"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ios"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cordovaSwiftVersion"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minVersion"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.3"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("capacitor中使用的Android SDK是Android SDK 27，不是最新的Android SDK 28, 所以这里使用Android 27的镜像，对应的是Android 8.1")])]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("IDEA的SDK Manager和直接使用的Android SDK Manager")]),t._v(" "),e("p",[t._v("使用了Android sdk manager后以前的Android sdk manager将不能直接通过双击 "),e("code",[t._v("sdk manager.exe")]),t._v(" 打开,原因是idea 进行了相关的替换操作，\n参考： "),e("a",{attrs:{href:"https://blog.csdn.net/wang295689649/article/details/60960953",target:"_blank",rel:"noopener noreferrer"}},[t._v("android SDK SDK Manager.exe 无法打开，一闪而过最终解决办法"),e("OutboundLink")],1),t._v("\n所以后面的新建镜像，还有下载SDK什么的都最好直接在IDEA 里面进行操作，不再使用Android SDK Manager")])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("通过"),e("code",[t._v("this.$router.push()")]),t._v("访问子路由没有问题，但是通过刷新页面访问嵌套的子路由，总是报如下的错误:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Uncaught SyntaxError: Unexpected token <\n\n")])])]),e("p",[t._v("参考错误: "),e("a",{attrs:{href:"https://stackoverflow.com/questions/49276879/second-level-vue-route-throws-error-when-accessed-directly",target:"_blank",rel:"noopener noreferrer"}},[t._v("Uncaught SyntaxError: Unexpected token <"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("原因分析： 仔细查看对应的html的文件，会发现所有的生成的js文件的路径为如下："),e("code",[t._v("js/app.js")]),t._v(",实际上应该是: "),e("code",[t._v("/js/app.js")]),t._v(", 所以应该是对应的"),e("code",[t._v("vue.config.js")]),t._v("里面的"),e("code",[t._v("publicPath")]),t._v("设置出问题：\n"),e("code",[t._v("publicPath: process.env.NODE_ENV === 'development' ? './' : '/',")]),t._v(", 注意我在这里设置的路径开发下是./ ,这个设置是因为在Vue Cli2中为了配置静态路径这样做的，现在的Vue Cli3不需要这样配置了，所以修改成: "),e("code",[t._v("publicPath: process.env.NODE_ENV === 'development' ? '/' : '/'")]),t._v(".")])])},[],!1,null,null,null);s.default=r.exports}}]);