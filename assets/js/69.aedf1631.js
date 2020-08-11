(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{325:function(t,e,a){"use strict";a.r(e);var s=a(9),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ClientOnly",[a("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#介绍"}},[t._v("介绍")])]),a("li",[a("a",{attrs:{href:"#安装"}},[t._v("安装")])]),a("li",[a("a",{attrs:{href:"#命令参考"}},[t._v("命令参考")]),a("ul",[a("li",[a("a",{attrs:{href:"#普通下载"}},[t._v("普通下载")])]),a("li",[a("a",{attrs:{href:"#下载最好的音视频格式"}},[t._v("下载最好的音视频格式")])]),a("li",[a("a",{attrs:{href:"#输出文件的名字"}},[t._v("输出文件的名字")])]),a("li",[a("a",{attrs:{href:"#使用代理下载"}},[t._v("使用代理下载")])]),a("li",[a("a",{attrs:{href:"#其他下载选项"}},[t._v("其他下载选项")])])])]),a("li",[a("a",{attrs:{href:"#国内的-youtube-dl：-you-get"}},[t._v("国内的 youtube-dl： You-Get")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("youtube-dl 是一个命令行工具，对我所知的大部分视频网站有不错的支持，你可以选择下载视频，或是将视频流直接导出到自己想使用的播放器中，也可以以JSON的形式获取可下载资源的URL。")]),t._v(" "),a("p",[t._v("使用方便、足够简洁，这是我在这里推荐的理由。")]),t._v(" "),a("p",[t._v("youtube-dl 的 GitHub 页面：https://github.com/rg3/youtube-dl（喜欢的话给作者star哦~）")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("ul",[a("li",[t._v("window用户：")])]),t._v(" "),a("ol",[a("li",[t._v("下载文件"),a("a",{attrs:{href:"https://yt-dl.org/latest/youtube-dl.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("youtube-dl.exe"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("li",[t._v("下载对应的ffmpeg.exe将youtube-dl.exe放到ffmpeg的bin目录下面，ffmpeg官网：http://ffmpeg.org/")]),t._v(" "),a("li",[t._v("配置环境变量切换到ffmpeg的bin目录")])]),t._v(" "),a("ul",[a("li",[t._v("Linux用户：")])]),t._v(" "),a("ol",[a("li",[t._v("因为是python开发的所以直接安装对应的python包： "),a("code",[t._v("sudo -H pip install --upgrade youtube-dl")])]),t._v(" "),a("li",[t._v("下载对应的ffmpeg包,访问官网: http://ffmpeg.org/,下载对应的debian的deb包："),a("code",[t._v("https://tracker.debian.org/pkg/ffmpeg")]),t._v("，命令行：")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ffmpeg\n$ ffmpeg -version\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --upgrade youtube-dl\n\n")])])]),a("h2",{attrs:{id:"命令参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令参考"}},[t._v("#")]),t._v(" 命令参考")]),t._v(" "),a("p",[t._v("参数： "),a("code",[t._v("--ffmpeg-location")]),t._v("可以用来设置ffmpeg的路径，可以是可执行文件路径或者对应的执行文件路径的文件夹")]),t._v(" "),a("h3",{attrs:{id:"普通下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通下载"}},[t._v("#")]),t._v(" 普通下载")]),t._v(" "),a("p",[t._v("通过 Youtube-dl 下载视频十分简洁，例如你需要下载http://www.bilibili.com/video/av11728123/ 你可以这样：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("youtube-dl "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.bilibili.com/video/av11728123/'")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"下载最好的音视频格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载最好的音视频格式"}},[t._v("#")]),t._v(" 下载最好的音视频格式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> youtube-dl -F https://www.youtube.com/watch?v=zbGZufWXJDA\n会显示不同的格式和质量的视频,然后执行下方命令下载对应的质量视频\n\n> youtube-dl -f 22 https://www.youtube.com/watch?v=zbGZufWXJDA\n\n\nyoutube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/bestvideo+bestaudio' --merge-output-format mp4  https://www.youtube.com/watch?v=zbGZufWXJDA\n")])])]),a("h3",{attrs:{id:"输出文件的名字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出文件的名字"}},[t._v("#")]),t._v(" 输出文件的名字")]),t._v(" "),a("p",[t._v("如果你想指定输出文件的名字（有时对批量下载的人来说十分重要），你可以使用"),a("code",[t._v("-o")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("youtube-dl "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.bilibili.com/video/av11728123/'")]),t._v(" -o "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你要的名字'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载至文件：你要的名字 (无后缀)")]),t._v("\n")])])]),a("p",[t._v("当然，请注意你选择的名字的拓展名，youtube-dl 并不会自动修改你所指定的后缀名。youtube-dl 同时也支持 OUTPUT TEMPLATE，你可以利用 "),a("code",[t._v("%(title)s")]),t._v("等参数（参考 Python 的字符串形式）将文件命名，例如：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("youtube-dl "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.bilibili.com/video/av11728123/'")]),t._v(" -o "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%(title)s.%(ext)s'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载至文件：【全明星freestyle】音浪.mp4")]),t._v("\n")])])]),a("h3",{attrs:{id:"使用代理下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用代理下载"}},[t._v("#")]),t._v(" 使用代理下载")]),t._v(" "),a("p",[t._v("youtube-dl 提供了使用代理的参数，你可以简单地将自己代理的地址填入：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("youtube-dl --proxy "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:1087 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.youtube.com/watch\\?v\\=_fc_TLg3eQ4'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 成功通过ss在国内下载某不存在网站的视频")]),t._v("\n")])])]),a("h3",{attrs:{id:"其他下载选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他下载选项"}},[t._v("#")]),t._v(" 其他下载选项")]),t._v(" "),a("p",[t._v("youtube-dl 还提供很多其他的下载选项，如挑选合适的分辨率，下载一个播放列表等，你可以研究并自定义如何下载一个文件。")]),t._v(" "),a("h2",{attrs:{id:"国内的-youtube-dl：-you-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#国内的-youtube-dl：-you-get"}},[t._v("#")]),t._v(" 国内的 youtube-dl： You-Get")]),t._v(" "),a("p",[t._v("You-Get的GitHub地址：https://github.com/soimort/you-get")]),t._v(" "),a("p",[t._v("事实上而言，我发现You-Get对国内视频网站的支持更加全面，但是由于作者已经有大约两个月的时间没有维护了，我在这里不作推荐。但是如果你遇到无法使用youtube-dl下载的视频页面，不妨试试这个同类小工具。")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);