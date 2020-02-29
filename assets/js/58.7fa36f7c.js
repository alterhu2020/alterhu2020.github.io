(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{314:function(a,e,t){"use strict";t.r(e);var s=t(9),r=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"scrapy爬虫配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrapy爬虫配置","aria-hidden":"true"}},[a._v("#")]),a._v(" Scrapy爬虫配置")]),a._v(" "),t("ClientOnly",[t("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#scrapy爬虫配置"}},[a._v("Scrapy爬虫配置")])]),t("li",[t("a",{attrs:{href:"#_1-开发环境"}},[a._v("1. 开发环境")]),t("ul",[t("li",[t("a",{attrs:{href:"#_1-1-需要安装如下必需的开发包：-pipenv-类库包如下："}},[a._v("1.1 需要安装如下必需的开发包：pipenv,类库包如下：")])]),t("li",[t("a",{attrs:{href:"#_1-2-配置对应的-scrapy-cfg-文件中的-scrapyd-服务器-如果使用下面的gerapy则不需要配置这个部分-该部分主要是为了-scrapyd-deploy-使用："}},[a._v("1.2 配置对应的scrapy.cfg文件中的scrapyd服务器(如果使用下面的gerapy则不需要配置这个部分),该部分主要是为了scrapyd-deploy使用：")])])])]),t("li",[t("a",{attrs:{href:"#_2-分布式脚本执行部署环境"}},[a._v("2. 分布式脚本执行部署环境")]),t("ul",[t("li",[t("a",{attrs:{href:"#_2-1-gerapy-服务器环境配置"}},[a._v("2.1 gerapy服务器环境配置")])]),t("li",[t("a",{attrs:{href:"#_2-2-scrapyd-脚本执行机器环境配置"}},[a._v("2.2 scrapyd脚本执行机器环境配置")])])])]),t("li",[t("a",{attrs:{href:"#问题"}},[a._v("问题")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"_1-开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-开发环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 开发环境")]),a._v(" "),t("h3",{attrs:{id:"_1-1-需要安装如下必需的开发包：pipenv-类库包如下："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-需要安装如下必需的开发包：pipenv-类库包如下：","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.1 需要安装如下必需的开发包："),t("code",[a._v("pipenv")]),a._v(",类库包如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ pip install pipenv\n$ pipenv install scrapy scrapyd-client\n$ pipenv install requests pymysql beautifulsoup4 lxml js2py selenium  \n")])])]),t("ul",[t("li",[a._v("数据库主机、数据库名称、用户名、密码等信息在"),t("code",[a._v("settings.py")]),a._v("文件中配置；")]),a._v(" "),t("li",[a._v("配置好数据库后，cmd进入程序所在目录，运行`scrapy crawl 项目名称即可；")]),a._v(" "),t("li",[a._v("使用"),t("code",[a._v("scrapyd-client")]),a._v("中的"),t("code",[a._v("scrapyd-deploy")]),a._v("命令行工具可以将脚本部署到指定的"),t("code",[a._v("scrapyd")]),a._v("服务上；")])]),a._v(" "),t("h3",{attrs:{id:"_1-2-配置对应的scrapy-cfg文件中的scrapyd服务器-如果使用下面的gerapy则不需要配置这个部分-该部分主要是为了scrapyd-deploy使用："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-配置对应的scrapy-cfg文件中的scrapyd服务器-如果使用下面的gerapy则不需要配置这个部分-该部分主要是为了scrapyd-deploy使用：","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.2 配置对应的"),t("code",[a._v("scrapy.cfg")]),a._v("文件中的"),t("code",[a._v("scrapyd")]),a._v("服务器(如果使用下面的gerapy则不需要配置这个部分),该部分主要是为了"),t("code",[a._v("scrapyd-deploy")]),a._v("使用：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[deploy:cvr_news]\n# url = http://localhost:6800/\n# project = spider_test\n# username = deployer\n# password = eaafbbdbe1494810b48a90651xe3452cd95f\n")])])]),t("h2",{attrs:{id:"_2-分布式脚本执行部署环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-分布式脚本执行部署环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 分布式脚本执行部署环境")]),a._v(" "),t("blockquote",[t("blockquote",[t("blockquote",[t("p",[a._v("参考文档: "),t("a",{attrs:{href:"https://blog.csdn.net/qq_38003892/article/details/80427278",target:"_blank",rel:"noopener noreferrer"}},[a._v("scrapy部署， Gerapy 分布式爬虫管理部署使用"),t("OutboundLink")],1)])])])]),a._v(" "),t("blockquote",[t("blockquote",[t("blockquote",[t("p",[a._v("参考文档： "),t("a",{attrs:{href:"https://www.cnblogs.com/sxqjava/p/10037731.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("gerapy+scrapyd组合管理分布式爬虫"),t("OutboundLink")],1)])])])]),a._v(" "),t("h3",{attrs:{id:"_2-1-gerapy服务器环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-gerapy服务器环境配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.1 "),t("code",[a._v("gerapy")]),a._v("服务器环境配置")]),a._v(" "),t("ul",[t("li",[a._v("安装"),t("code",[a._v("scrapy")]),a._v("部署服务,也是一个远程服务。是运行"),t("code",[a._v("scrapy")]),a._v("爬虫的服务端程序,它支持以"),t("code",[a._v("http")]),a._v("接口命令方式发布、删除、启动、停止爬虫程序。")]),a._v(" "),t("li",[a._v("在电脑任意位置新建一个文件夹,打开cmd，进入到这个文件夹下，输入命令"),t("code",[a._v("gerapy init")]),a._v(".安装"),t("code",[a._v("Gerapy")]),a._v(".\n初始化完成后会生成一个文件夹"),t("code",[a._v("gerapy")]),a._v("，该文件夹下面会生成一个"),t("code",[a._v("projects")]),a._v("文件夹.进入到该创建的"),t("code",[a._v("gerapy")]),a._v("文件夹下，再输入"),t("code",[a._v("gerapy migrate")]),a._v("完成"),t("code",[a._v("gerapy")]),a._v("初始化工作. 将scrapy脚本项目放到"),t("code",[a._v("projects")]),a._v("目录下,利用"),t("code",[a._v("gerapy runserver")]),a._v("，启动"),t("code",[a._v("gerapy")]),a._v(". 刷新即可看到部署的脚本。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ mkdir spider-gerapy\n$ cd spider-gerapy\n$ pip install gerapy\n$ gerapy init\n$ cd gerapy\n$ gerapy migrate \n初始化数据库\n$ gerapy createsuperuser\n创建超级用户，用于登录界面\n$ gerapy runserver\n后台静默运行gerapy服务,注意一定要切换到新创建的gerapy目录下面\n$ nohup gerapy runserver 0.0.0.0:6000 &\n")])])]),t("h4",{attrs:{id:"安装问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装问题","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("strong",[a._v("安装问题")])]),a._v(" "),t("ol",[t("li",[a._v("无法安装"),t("code",[a._v("gevent")]),a._v(",直接下载编译好的安装包： https://www.lfd.uci.edu/~gohlke/pythonlib")])]),a._v(" "),t("h3",{attrs:{id:"_2-2-scrapyd脚本执行机器环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-scrapyd脚本执行机器环境配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2 "),t("code",[a._v("scrapyd")]),a._v("脚本执行机器环境配置")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("scrapyd")]),a._v("不需要设置目录，可以同时管理多个爬虫,每个爬虫还可以有多个版本：")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('$ pip install scrapyd\n一般安装在类似目录： `/usr/local/lib/python3.9/site-packages/scrapyd`\n$ find / -name "default_scrapyd.conf"\n$ nano default_scrapyd.conf\n1. 修改scrapyd服务的端口号，默认端口是`6800`\n2. 设置远程访问端口可以放行（`bind_address`由`127.0.0.1`改成0.0.0.0）\n3. 修改日志存放目录\n')])])]),t("p",[a._v("上面提到配置，需要修改的配置文件内容如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("eggs_dir    = /www/spider/eggs\nlogs_dir    = /logs\nitems_dir   = /www/spider/items\n\nbind_address = 0.0.0.0\nhttp_port   = 6800\n\nusername = deployer\npassword = eaafbbdbe1494810b48a9065152cd95f245dz\n")])])]),t("ul",[t("li",[a._v("上面的配置修改成功后执行以下脚本运行"),t("code",[a._v("scrapyd")]),a._v("后台启动服务：")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ nohup scrapyd &\n")])])]),t("ul",[t("li",[a._v("脚本运行端需要安装对应的"),t("code",[a._v("scrapy")]),a._v("开发环境中提到的所有库，执行如下命令安装:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pip install scrapy requests pymysql beautifulsoup4 lxml js2py selenium   \n")])])]),t("p",[a._v("所有的安装包默认安装在目录: "),t("code",[a._v("/usr/local/lib/python3.8/site-packages")])]),a._v(" "),t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),t("ol",[t("li",[a._v("在"),t("code",[a._v("gerapy")]),a._v("安装中安装的lxml会出现错误： make sure the development packages of libxml2 and libxslt are installed")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt-get install libxml2-dev libxslt-dev\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("执行"),t("code",[a._v("gerapy init")]),a._v("命令出现错误：")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# gerapy init\n:0: UserWarning: You do not have a working installation of the service_identity module: 'cannot import name 'opentype''.  Please install it from <https://pypi.python.org/pypi/service_identity> and make sure all of its dependencies are satisfied.  Without the service_identity module, Twisted can perform only rudimentary TLS client hostname verification.  Many valid certificate/hostname mappings may be rejected.\nInitialized workspace gerapy\n\n")])])]),t("p",[a._v("原因是：本机上的service_identity模块太老旧，而通过install安装的时候不会更新到最新版本\n解决方法：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("强制升级,执行命令:  "),t("code",[a._v("pip install service_identity --force --upgrade")])])]),a._v(" "),t("li",[t("p",[a._v("或者是找到最新版的安装包进行手动安装，最新包下载地址: "),t("code",[a._v("https://pypi.org/project/service_identity/#files")]),a._v(",下载对应的whl文件安装即可。")])])]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("执行"),t("code",[a._v("pipenv install")]),a._v("出现错误：ImportError: cannot import name 'Mapping' from 'collections'")])]),a._v(" "),t("p",[a._v("原因是执行的包错误，重新安装即可")]),a._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[a._v("在gerapy中添加机器报错: "),t("code",[a._v("the JSON object must be str, not 'bytes'")]),a._v("\n可能是对应的scrapyd服务没有启动")])]),a._v(" "),t("li",[t("p",[a._v("执行scrapyd命令出错: "),t("code",[a._v("Failed to load application: No module named '_sqlite3'")])])])]),a._v(" "),t("p",[a._v("原因是python采用编译安装的，导致没有加载对应的sqlite模块，重新编译安装加载sqlite模块，命令如下:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("./configure --enable-optimizations --enable-ipv6 --enable-loadable-sqlite-extensions\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[a._v("执行"),t("code",[a._v("pip -V")]),a._v("出错: "),t("code",[a._v("ModuleNotFoundError: No module named 'pip._internal.cli.main'")])])]),a._v(" "),t("p",[a._v("解决方法，修复pip，执行命令: "),t("code",[a._v("python -m pip install --upgrade pip")]),a._v("，或者如下命令:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py\npython3 get-pip.py --force-reinstall\n")])])]),t("ol",{attrs:{start:"7"}},[t("li",[a._v("执行命令: "),t("code",[a._v("sudo add-apt-repository ppa:deadsnakes/ppa")]),a._v(" ,报错："),t("code",[a._v("add-apt-repository gpg: keyserver receive failed: No dirmngr")]),a._v(",执行如下命令安装：dirmngr:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt install dirmngr\n")])])]),t("p",[a._v("8.执行"),t("code",[a._v("apt update")]),a._v("命令报错:"),t("code",[a._v("Updating from such a repository can't be done securely, and is therefore disabled by default")]),a._v(",执行如下命令更新包：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ sudo apt-get update --allow-unauthenticated\n")])])]),t("ol",{attrs:{start:"9"}},[t("li",[t("p",[a._v("安装scrapy中twisted安装报错\n解决方法，切换到目录： https://www.lfd.uci.edu/~gohlke/pythonlibs/#twisted，直接下载对应的whl包")])]),a._v(" "),t("li",[t("p",[a._v("如何设置scrapy的默认的user-agent和proxy代理\n在脚本目录下方有一个配置文件: "),t("code",[a._v("settings.py")]),a._v(", 如下配置：")])])]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("DOWNLOADER_MIDDLEWARES "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'spider_yanzhi.middlewares.UserAgentMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("401")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'spider_yanzhi.middlewares.CookiesMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("402")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("第二个参数可以参考"),t("code",[a._v("DOWNLOADER_MIDDLEWARES_BASE")]),a._v("里面的默认数值：")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'scrapy.downloadermiddlewares.robotstxt.RobotsTxtMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'scrapy.downloadermiddlewares.httpauth.HttpAuthMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("300")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'scrapy.downloadermiddlewares.downloadtimeout.DownloadTimeoutMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("350")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'scrapy.downloadermiddlewares.defaultheaders.DefaultHeadersMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("400")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("500")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'scrapy.downloadermiddlewares.retry.RetryMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("550")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'scrapy.downloadermiddlewares.ajaxcrawl.AjaxCrawlMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("560")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'scrapy.downloadermiddlewares.redirect.MetaRefreshMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("580")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'scrapy.downloadermiddlewares.httpcompression.HttpCompressionMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("590")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'scrapy.downloadermiddlewares.redirect.RedirectMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'scrapy.downloadermiddlewares.cookies.CookiesMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("700")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("750")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'scrapy.downloadermiddlewares.stats.DownloaderStats'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("850")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'scrapy.downloadermiddlewares.httpcache.HttpCacheMiddleware'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("900")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])])],1)},[],!1,null,null,null);e.default=r.exports}}]);