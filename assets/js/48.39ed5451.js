(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{306:function(t,e,a){"use strict";a.r(e);var s=a(9),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ClientOnly",[a("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#问题"}},[t._v("问题")])]),a("li",[a("a",{attrs:{href:"#操作步骤"}},[t._v("操作步骤")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("阿里云的对象存储采用的是自定义的let's Encrypt证书，而非官方的付费证书。每三个月需要手动进行切换证书。")]),t._v(" "),a("h2",{attrs:{id:"操作步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),a("ol",[a("li",[t._v("回到阿里云的"),a("strong",[t._v("域名解析服务")]),t._v("中,将对应的对象存储"),a("strong",[t._v("绑定的域名解析到服务器的ip")]),t._v("而"),a("strong",[t._v("非对应的对象存储设置的域名")]),t._v("，类似于: "),a("code",[t._v("xxx.com.w.kunlunca.com")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("res.yitieyilu.com.w.kunlunca.com\n\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("回到对应的服务器上将该域名证书进行续期：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ certbot renew\n")])])]),a("p",[t._v("根据提示找到对应的renew后新的公钥私钥文件，例如: "),a("code",[t._v("etc/letsencrypt/live/xxx.com")]),t._v(" 目录下面的公钥私钥文件: "),a("code",[t._v("fullchain.pem")]),t._v(", "),a("code",[t._v("privkey.pem")]),t._v(".")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("回到CDN配置页面： https://cdnnext.console.aliyun.com/overview，在对应的域名下点击“管理”进行配置页面")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20200819090154-2020-08-19.png",alt:"20200819090154-2020-08-19"}})]),t._v(" "),a("p",[t._v('切换到"HTTPS配置”，点击“修改配置”, 在弹出的对话框中选择“自定义上传（证书+私钥）”，在内容中输入'),a("code",[t._v("fullchain.pem")]),t._v("文件中的内容，在“私钥”中输入: "),a("code",[t._v("privkey.pem")]),t._v("中的内容。点击确认即可完成。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("重新回到阿里云的域名解析服务中,将上面配置的对应的对象存储"),a("strong",[t._v("绑定的域名解析到服务器的ip")]),t._v("改成"),a("strong",[t._v("对应的对象存储设置的域名")]),t._v("，例如：\n"),a("code",[t._v("res.yitieyilu.com.w.kunlunca.com")])])]),t._v(" "),a("li",[a("p",[t._v("回到对象存储页面点击一个上传的图片，通过自定义域名访问确认配置时候已经生效。")])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);