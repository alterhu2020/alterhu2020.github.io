(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{346:function(a,e,s){"use strict";s.r(e);var t=s(9),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("ClientOnly",[s("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#环境配置"}},[a._v("环境配置")])]),s("li",[s("a",{attrs:{href:"#_1-测试环境运行调试"}},[a._v("1. 测试环境运行调试")])]),s("li",[s("a",{attrs:{href:"#_2-生产环境项目部署"}},[a._v("2. 生产环境项目部署")])]),s("li",[s("a",{attrs:{href:"#_3-重新发布-新版发布"}},[a._v("3. 重新发布/新版发布")])]),s("li",[s("a",{attrs:{href:"#_4-发布到npmjs-com中使用jsdelivr-cdn加速"}},[a._v("4. 发布到npmjs.com中使用jsDelivr CDN加速")])]),s("li",[s("a",{attrs:{href:"#安装-node-sass-报错"}},[a._v("安装node-sass 报错")])]),s("li",[s("a",{attrs:{href:"#执行-yarn-create-nuxt-app-jvfast-site-报错-文件名、目录名或卷标语法不正确"}},[a._v("执行yarn create nuxt-app jvfast-site报错文件名、目录名或卷标语法不正确")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[a._v("#")]),a._v(" 环境配置")]),a._v(" "),s("ul",[s("li",[a._v("下载"),s("code",[a._v("node")]),a._v(",并执行命令安装node配置"),s("code",[a._v("PATH")]),a._v("路径:")])]),a._v(" "),s("div",{staticClass:"language-$shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ cat /proc/cpuinfo \nProcessor       : ARMv7 Processor rev 10 (v7l)\nARMv7 (and below) is 32-bit. ARMv8 introduces the 64-bit instruction set.\nIf you want to see whether your system supports 64-bit binaries, check the kernel architecture:\n$ uname -m\n此处树莓派4是ARMv7架构\n\n$ 树莓派: wget https://nodejs.org/dist/v12.14.1/node-v12.14.1-linux-armv7l.tar.xz\n$ amd64: wget https://nodejs.org/dist/v12.14.1/node-v12.14.1-linux-x64.tar.xz\n$ tar xvf node-v12.14.1-linux-armv7l.tar.xz\n$ tar xvf node-v12.14.1-linux-x64.tar.xz\n$ mv node-v12.14.1-linux-armv7l /opt/\n$ sudo nano /etc/profile\n增加对应的node的PATH路径,例如如下:\nexport PATH=/opt/node-v12.14.1-linux-armv7l/bin:$PATH\nexport PATH=/opt/node-v12.14.1-linux-x64/bin:$PATH\n执行如下命令使上面的PATH配置生效\n$ source /etc/profile \n\n执行如下命令确认node环境变量配置成功\n$ node -v\n$ npm -v \n\n设置npm和yarn的镜像为淘宝镜像\n$ npm config set prefix E:\\nodejs\\node_global\n$ npm config set cache E:\\nodejs\\node_cache\n$ npm config set registry https://registry.npm.taobao.org\n$ npm config list\n")])])]),s("ul",[s("li",[a._v("安装node的包管理器"),s("code",[a._v("yarn")]),a._v("(当然此处也可以不安装,直接使用node内置的"),s("code",[a._v("npm")]),a._v("来管理包):")])]),a._v(" "),s("div",{staticClass:"language-$shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ npm i yarn -g\n$ yarn config set registry https://registry.npm.taobao.org\n")])])]),s("ul",[s("li",[a._v("安装"),s("code",[a._v("pm2")]),a._v("命令用于后台服务静默执行:")])]),a._v(" "),s("div",{staticClass:"language-$shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ npm i pm2 -g\n\n配置pm2开机启动脚本\n$ pm2 startup \n")])])]),s("h2",{attrs:{id:"_1-测试环境运行调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-测试环境运行调试"}},[a._v("#")]),a._v(" 1. 测试环境运行调试")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# install dependencies")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# serve with hot reload at localhost:3000")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" dev\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# build for production and launch server")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" build\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" start\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# generate static project")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" generate\n")])])]),s("h2",{attrs:{id:"_2-生产环境项目部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-生产环境项目部署"}},[a._v("#")]),a._v(" 2. 生产环境项目部署")]),a._v(" "),s("ul",[s("li",[a._v("复制当前所有包文件,解压,然后在当前文件夹下执行命令安装编译工程:")])]),a._v(" "),s("div",{staticClass:"language-$shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ yarn \n$ yarn build\n\n编译程序, 然后配置pm2程序\n$ pm2 start  ecosystem.config.js --watch\n$ pm2 save\n")])])]),s("h2",{attrs:{id:"_3-重新发布-新版发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-重新发布-新版发布"}},[a._v("#")]),a._v(" 3. 重新发布/新版发布")]),a._v(" "),s("div",{staticClass:"language-$shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 首先复制源码目录文件到对应的服务器,然后直接如下命令:\n$ yarn build\n$ pm2 reload name| all\n$ pm2 restart all\n$ pm2 logs\n$ pm2 delete all\n\n")])])]),s("ul",[s("li",[a._v("执行pm2相关命令确认程序启动没有问题:")])]),a._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ pm2 list    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看所有的pm2程序")]),a._v("\n$ pm2 monit   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看pm2的所有程序的监控面板")]),a._v("\n$ pm2 reload\n")])])]),s("p",[a._v("如果上述配置都没有问题,可以访问地址: "),s("code",[a._v("http://127.0.0.0:3000")]),a._v("查看启动程序,然后我们只需要在nginx配置\n将所有请求反转到"),s("code",[a._v("nginx")]),a._v(",参考配置如下:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" # proxy for  project\n location  / {\n          alias   /www/the project folder/;\n          proxy_pass http://127.0.0.1:3000/;\n          \n          include nginxconfig.io/proxy.conf;\n }\n")])])]),s("h2",{attrs:{id:"_4-发布到npmjs-com中使用jsdelivr-cdn加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-发布到npmjs-com中使用jsdelivr-cdn加速"}},[a._v("#")]),a._v(" 4. 发布到npmjs.com中使用jsDelivr CDN加速")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> npm login --registry=https://registry.npmjs.com/\n> npm publish --registry=https://registry.npmjs.com/\n")])])]),s("hr"),a._v(" "),s("h1",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),s("h2",{attrs:{id:"安装node-sass-报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装node-sass-报错"}},[a._v("#")]),a._v(" 安装"),s("code",[a._v("node-sass")]),a._v(" 报错")]),a._v(" "),s("p",[a._v("首先要知道的是，安装"),s("code",[a._v("node-sass")]),a._v("时在"),s("code",[a._v("node scripts/install")]),a._v("阶段会从 github.com 上下载一个.node文件，大部分安装不成功的原因都源自这里，因为 GitHub Releases 里的文件都托管在"),s("code",[a._v("s3.amazonaws.com")]),a._v("上面，而这个网址在国内总是_网络不稳定_，所以我们需要通过第三方服务器下载这个文件。（顺带一提，你可以看看"),s("a",{attrs:{href:"https://github.com/sass/node-sass/commit/b8050efbe0effb68b0617d28276c72eef1fb15ef",target:"_blank",rel:"noopener noreferrer"}},[a._v("这个好玩的 commit"),s("OutboundLink")],1),a._v("）")]),a._v(" "),s("ol",[s("li",[a._v("方法一：")])]),a._v(" "),s("p",[a._v("直接翻墙安装；")]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("方法二：")])]),a._v(" "),s("p",[a._v("2.1 查看当前环境适用的binding.node")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("node -p \"[process.platform, process.arch, process.versions.modules].join('-')\"\n")])])]),s("p",[a._v("2.2  到"),s("a",{attrs:{href:"https://github.com/sass/node-sass/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),s("OutboundLink")],1),a._v("下载对应版本的文件。链接地址: https://github.com/sass/node-sass/releases\n2.3 将下载好的文件放入缓存目录中,查看缓存目录命令：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> PS C:\\Users\\Administrator> npm config get cache\nE:\\nodejs\\node_cache\n\n")])])]),s("p",[a._v("2.3.1 通常yarn缓存目录：C:Users\\你的用户名\\AppData\\Local\\Yarn\\Cache\n2.3.2 通常npm缓存目录：C:Users\\你的用户名\\AppData\\Roaming\\npm-cache\\node-sass\n此处我的下载文件目录是："),s("code",[a._v('"E:\\nodejs\\node_cache\\node-sass\\4.13.1\\win32-x64-72_binding.node"')])]),a._v(" "),s("p",[a._v("到这里去根据版本号、系统环境，选择下载 .node 文件，然后安装时，指定变量 sass_binary_path，如：\nhttps://github.com/sass/node-sass/releases/download/v4.13.0/win32-x64-72_binding.node")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm i node-sass --sass_binary_path=D:/win32-x64-72_binding.node\n")])])]),s("p",[a._v("按上面这么做确实没错，而且也是必须，但是当你再次去创建ionic项目时还是会提示同样的错误(如果不报错说明你运气好，那下面就不用看了)，那么原因到底是为什么呢？那是因为你的确安装了sass而且也成功下载了相关文件了，只是你在执行时候可能是因为运气不好或者当前软件没设计好的原因没给你自动添加sass的环境变量，所以这是我们得自己手动添加一下系统的环境变量(怎么添加系统环境变量我这就不提了，因为我认为很多人应该都会的，这里我只提一下要加什么环境变量，大概路径)，例如我的环境变量如下：(这里提醒一下配置的路径最好是根据你的实际情况，因为每个人安装nodejs的方式都不一样)")]),a._v(" "),s("p",[a._v("解决方法设置环境变量：")]),a._v(" "),s("ol",[s("li",[a._v("设置系统变量名称: "),s("code",[a._v("SASS_BINARY_PATH")])]),a._v(" "),s("li",[a._v("系统变量值："),s("code",[a._v("E:\\nodejs\\node_cache\\node-sass\\4.13.1\\win32-x64-72_binding.node")])])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdn.net/20180106162556616?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGY5ODEwMTE1MTI=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:"图片"}})]),a._v(" "),s("h2",{attrs:{id:"执行yarn-create-nuxt-app-jvfast-site报错文件名、目录名或卷标语法不正确"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行yarn-create-nuxt-app-jvfast-site报错文件名、目录名或卷标语法不正确"}},[a._v("#")]),a._v(" 执行"),s("code",[a._v("yarn create nuxt-app jvfast-site")]),a._v("报错"),s("code",[a._v("文件名、目录名或卷标语法不正确")])]),a._v(" "),s("p",[a._v("报错信息如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('yarn create v1.21.1\n[1/4] Resolving packages...\ninfo There appears to be trouble with your network connection. Retrying...\n[2/4] Fetching packages...\n[3/4] Linking dependencies...\n[4/4] Building fresh packages...\nsuccess Installed "create-nuxt-app@2.14.0" with binaries:\n      - create-nuxt-app\n文件名、目录名或卷标语法不正确。\nerror Command failed.\nExit code: 1\nCommand: E:\\nodejs\\node_global\\bin\\create-nuxt-app\nArguments: jvfast-site\nDirectory: D:\\Workspace\\jvfast\\jvfast-site\nOutput:\n')])])]),s("p",[a._v("可以根据提示找到对应的命令目录："),s("code",[a._v("Command: E:\\nodejs\\node_global\\bin\\create-nuxt-app")]),a._v(",打开对应的目录文件："),s("code",[a._v('"E:\\nodejs\\node_global\\bin\\create-nuxt-app.cmd"')]),a._v("。查看到源码是: "),s("code",[a._v('@"%~dp0\\C:\\Users\\Administrator\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\.bin\\create-nuxt-app.cmd" %*')]),a._v(",所以看到实际调用的是： "),s("code",[a._v("C:\\Users\\Administrator\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\.bin\\create-nuxt-app.cmd")]),a._v(". 继续找到该文件: "),s("code",[a._v("\\C:\\Users\\Administrator\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\.bin\\create-nuxt-app.cmd")]),a._v(",打开该文件查看源码如下:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('@IF EXIST "%~dp0\\node.exe" (\n  "%~dp0\\node.exe"  "%~dp0\\..\\create-nuxt-app\\cli.js" %*\n) ELSE (\n  @SETLOCAL\n  @SET PATHEXT=%PATHEXT:;.JS;=;%\n  node  "%~dp0\\..\\create-nuxt-app\\cli.js" %*\n)\n')])])]),s("p",[a._v("所以知道真正调用的命令是: "),s("code",[a._v('node "%~dp0\\..\\create-nuxt-app\\cli.js" %*')]),a._v(", 所以构造后的命令行是:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("node C:\\Users\\Administrator\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\create-nuxt-app\\cli.js 你的nuxt项目名称\n")])])]),s("p",[a._v("执行以上的命令按照提示操作即可。")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);