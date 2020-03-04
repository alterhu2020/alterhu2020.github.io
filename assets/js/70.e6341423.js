(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{325:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ClientOnly",[a("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#uwsgi-linux安装-更新到2019年8月10日"}},[t._v("uwsgiLinux安装[更新到2019年8月10日]")])]),a("li",[a("a",{attrs:{href:"#uwsgi参数"}},[t._v("uwsgi参数")])]),a("li",[a("a",{attrs:{href:"#异常安装问题"}},[t._v("异常安装问题")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"uwsgilinux安装-更新到2019年8月10日"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uwsgilinux安装-更新到2019年8月10日","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("uwsgi")]),t._v("Linux安装[更新到2019年8月10日]")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://uwsgi-docs.readthedocs.io/en/latest/Install.html#installing-from-source",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to install uwsgi"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" build-essential python3-dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install the latest stable release:")]),t._v("\n$ pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" uwsgi\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ... or if you want to install the latest LTS (long term support) release,")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" https://projects.unbit.it/downloads/uwsgi-lts.tar.gz\n$ uwsgi --version\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /var/log/uwsgi\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /etc/uwsgi\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R www-data:www-data  /var/log/uwsgi\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" a+x /etc/uwsgi\n$ pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" uwsgitop\n\n")])])]),a("h1",{attrs:{id:"安装uwsgi服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装uwsgi服务","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装uwsgi服务")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo nano /lib/systemd/system/uwsgi.service\n\n\n[Unit]\nDescription=uWSGI Emperor service\nAfter=syslog.target\n\n[Service]\nExecStart=/usr/local/bin/uwsgi --master --ini /etc/uwsgi/emperor.ini\nRestart=always\nKillSignal=SIGQUIT\nType=notify\nStandardError=syslog\nNotifyAccess=all\n\n[Install]\nWantedBy=multi-user.target\n\n\n")])])]),a("h2",{attrs:{id:"uwsgi参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uwsgi参数","aria-hidden":"true"}},[t._v("#")]),t._v(" uwsgi参数")]),t._v(" "),a("ul",[a("li",[t._v("chdir=/xxx/xxx # 指定项目目录")]),t._v(" "),a("li",[t._v("home=/xxx/xxx # 指定虚拟环境变量")]),t._v(" "),a("li",[t._v("wsgi-file=xxx # 指定加载WSGI文件")]),t._v(" "),a("li",[t._v("socket=xxx # 指定uwsgi的客户端将要连接的socket的路径（使用UNIX socket的情况）或者地址（使用网络地址的情况）。")]),t._v(" "),a("li",[t._v("callable=xxx # uWSGI加载的模块中哪个变量将被调用")]),t._v(" "),a("li",[t._v("master=true # 指定启动主进程")]),t._v(" "),a("li",[t._v("processes=4 # 设置工作进程的数量")]),t._v(" "),a("li",[t._v("threads=2 # 设置每个工作进程的线程数")]),t._v(" "),a("li",[t._v("vacuum=true # 当服务器退出时自动删除unix socket文件和pid文件")]),t._v(" "),a("li",[t._v("logfile-chmod=644 # 指定日志文件的权限")]),t._v(" "),a("li",[t._v("daemonize=%(chdir)/xxx.log # 进程在后台运行，并将日志打印到指定文件")]),t._v(" "),a("li",[t._v("pidfile=%(chdir)/xxx.pid # 在失去权限前，将主进程pid写到指定的文件")]),t._v(" "),a("li",[t._v("uid=xxx # uWSGI服务器运行时的用户id")]),t._v(" "),a("li",[t._v("gid=xxx # uWSGI服务器运行时的用户组id")]),t._v(" "),a("li",[t._v("procname-prefix-spaced=xxx # 指定工作进程名称的前缀")])]),t._v(" "),a("h2",{attrs:{id:"异常安装问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常安装问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 异常安装问题")]),t._v(" "),a("ul",[a("li",[t._v("Unknown distribution option: 'descriptions'")])]),t._v(" "),a("blockquote",[a("p",[t._v("解决方法: apt-get install build-essential python3-dev")])])],1)},[],!1,null,null,null);s.default=e.exports}}]);