(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{315:function(a,r,t){"use strict";t.r(r);var e=t(9),n=Object(e.a)({},function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("ClientOnly",[t("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#树莓派安装"}},[a._v("树莓派安装")])]),t("li",[t("a",{attrs:{href:"#无线访问树莓派"}},[a._v("无线访问树莓派")])]),t("li",[t("a",{attrs:{href:"#网页管理树莓派"}},[a._v("网页管理树莓派")])]),t("li",[t("a",{attrs:{href:"#软件镜像源切换"}},[a._v("软件镜像源切换")])]),t("li",[t("a",{attrs:{href:"#jdk-安装"}},[a._v("jdk 安装")])]),t("li",[t("a",{attrs:{href:"#步骤"}},[a._v("步骤")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"树莓派安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#树莓派安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 树莓派安装")]),a._v(" "),t("blockquote",[t("p",[a._v("3b和3b+虽然是arm64 v8的芯片，但是raspbian是32的，所以只能安装arm v7的包")])]),a._v(" "),t("ol",[t("li",[t("p",[a._v("从官方下载最新的镜像，推荐下载最新的镜像： "),t("a",{attrs:{href:"https://www.raspberrypi.org/downloads/raspbian/",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载首页地址"),t("OutboundLink")],1),a._v(',在该网页中选择"\nRaspbian Buster Lite",截止到2019年8月12日，最新的树莓派版本是Buster版。此处选择的是最小镜像。')])]),a._v(" "),t("li",[t("p",[a._v("安装步骤参考官网： "),t("a",{attrs:{href:"https://www.raspberrypi.org/documentation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),t("OutboundLink")],1),a._v(",使用的是工具是[Win32DiskImager].")])]),a._v(" "),t("li",[t("p",[a._v("安装结束后，你需要打开SD卡，也就是对应的Boot Folder,在该目录下放两个文件：")])])]),a._v(" "),t("p",[a._v("3.1 空文件"),t("code",[a._v("ssh")]),a._v(",没有后缀也没有任何内容，这个用于远程SSH登录。\n3.2 新建一个文件"),t("code",[a._v("wpa_supplicant.conf")]),a._v("文件，输入如下内容对应你的需要连接的wifi信息(此处我这里输入了两个WiFi配置信息）：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('ctrl_interface=/var/run/wpa_supplicant\nupdate_config=1\n\nnetwork={\n    ssid="FOffice"\n    psk="L0ngh)*%z2&r7p1"\n    priority=2\n}\n\nnetwork={\n    ssid="CMCC-MiniWifi"\n    psk="A5#$2a7&y1nr+"\n    priority=1\n}\n\n')])])]),t("p",[t("strong",[a._v("参考")]),a._v("：")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.raspberrypi.org/documentation/configuration/boot_folder.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("The Boot folder contents"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"无线访问树莓派"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无线访问树莓派","aria-hidden":"true"}},[a._v("#")]),a._v(" 无线访问树莓派")]),a._v(" "),t("ol",[t("li",[a._v("官方给出了一些方案： "),t("a",{attrs:{href:"https://www.raspberrypi.org/documentation/remote-access/ip-address.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档方案无线连接树莓派"),t("OutboundLink")],1),a._v(",大致几种方案：")])]),a._v(" "),t("p",[a._v("1.1 首次安装后树莓派的名称是: "),t("code",[a._v("raspberrypi.local")]),a._v(",所以可以通过在同一个网站中直接ping：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ ping raspberrypi.local\n")])])]),t("p",[a._v("1.2 通过手机端安装一个叫 Fing的app进行扫描局域网的所有机器，可以快速定位你的树莓派地址。")]),a._v(" "),t("p",[a._v("1.3 通过电脑端安装"),t("a",{attrs:{href:"https://www.advanced-ip-scanner.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Free Advanced IP Scanner"),t("OutboundLink")],1),a._v("或(Angry IP Scanner)[https://angryip.org/]扫描局域网的所有机器，也可以快速定位你的树莓派机器。（推荐此种方法）")]),a._v(" "),t("h2",{attrs:{id:"网页管理树莓派"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网页管理树莓派","aria-hidden":"true"}},[a._v("#")]),a._v(" 网页管理树莓派")]),a._v(" "),t("ol",[t("li",[a._v("访问"),t("a",{attrs:{href:"https://app.remote.it/web/",target:"_blank",rel:"noopener noreferrer"}},[a._v("remote.it网站"),t("OutboundLink")],1),a._v("，注册一个账号，然后安装指引在树莓派上安装如下命令：")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt update\nsudo apt install connectd\nsudo connectd_installer\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("继续访问上面的网站就能看到自己的树莓派了。")])]),a._v(" "),t("h2",{attrs:{id:"软件镜像源切换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件镜像源切换","aria-hidden":"true"}},[a._v("#")]),a._v(" 软件镜像源切换")]),a._v(" "),t("p",[a._v("为了方便今后软件的安装，我们需要将软件源更换为国内源：\n输入以下代码")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo nano /etc/apt/sources.list\n")])])]),t("p",[a._v("内容修改为如下:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main contrib non-free rpi\ndeb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ buster main contrib non-free rpi\n\n# deb http://raspbian.raspberrypi.org/raspbian/ buster main contrib non-free rpi\n# Uncomment line below then 'apt-get update' to enable 'apt-get source'\n#deb-src http://raspbian.raspberrypi.org/raspbian/ buster main contrib non-free rpi\n\n")])])]),t("p",[a._v("ctrl+o键进行保存，回车确认，再ctrl+x退出.输入sodu reboot重启，待重启后再重新用PuTTY进行ssh连接。输入以下代码进行系统文件更新：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt-get update\n")])])]),t("h2",{attrs:{id:"jdk-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk-安装","aria-hidden":"true"}},[a._v("#")]),a._v(" jdk 安装")]),a._v(" "),t("ol",[t("li",[a._v("检查当前树莓派的系统版本： "),t("code",[a._v("cat /proc/cpuinfo")]),a._v(" 或者"),t("code",[a._v("uname –m")]),a._v(",我的树莓派3B+输出的是"),t("code",[a._v("armv7l")]),a._v(",查阅资料确认是32位的机器：\n"),t("a",{attrs:{href:"https://unix.stackexchange.com/questions/136407/is-my-linux-arm-32-or-64-bit",target:"_blank",rel:"noopener noreferrer"}},[a._v("检查树莓派是32位还是64位"),t("OutboundLink")],1),a._v(".")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("You can find the processor model in /proc/cpuinfo. For example:\n\n$ cat /proc/cpuinfo\nProcessor       : ARMv7 Processor rev 10 (v7l)\nARMv7 (and below) is 32-bit. ARMv8 introduces the 64-bit instruction set.\n\nIf you want to see whether your system supports 64-bit binaries, check the kernel architecture:\n\n$ uname -m\narmv7l\nOn a 64-bit processor, you'd see armv8 (or above).\n\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[a._v("确认了机器的型号，然后到官方的oracle网站，现在oracle已经提供了ARM架构的jdk安装包，叫做： Linux ARM 32 Hard Float ABI/Linux ARM 64 Hard Float ABI,此处我们选择： Linux ARM 32 Hard Float ABI，下载该安装包到对应的树莓派机器上。")])]),a._v(" "),t("li",[t("p",[a._v("复制该安装包"),t("code",[a._v("jdk-8u221-linux-arm32-vfp-hflt.tar.gz")]),a._v("执行如下命令安装 (注意将"),t("code",[a._v("/opt/jdk/jdk1.8.0_221")]),a._v("替换成你解压的目录)：")])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$  tar -zxf jdk-8u221-linux-arm32-vfp-hflt.tar.gz\n$  sudo update-alternatives --install /usr/bin/java java /opt/jdk/jdk1.8.0_221/bin/java 1\n$  sudo update-alternatives --install /usr/bin/javac javac /opt/jdk/jdk1.8.0_221/bin/javac 1\n$  java -version\n$  javac \n")])])]),t("h1",{attrs:{id:"爬虫-安装selenium及其对应的chrome-driver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#爬虫-安装selenium及其对应的chrome-driver","aria-hidden":"true"}},[a._v("#")]),a._v(" 爬虫, 安装selenium及其对应的chrome driver")]),a._v(" "),t("p",[a._v("参考网站： https://www.raspberrypi.org/forums/viewtopic.php?t=194176")]),a._v(" "),t("h2",{attrs:{id:"步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤","aria-hidden":"true"}},[a._v("#")]),a._v(" 步骤")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("下载文件： "),t("a",{attrs:{href:"http://security.debian.org/debian-security/pool/updates/main/c/chromium/chromium-driver_72.0.3626.122-1~deb9u1_armhf.deb",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://security.debian.org/debian-security/pool/updates/main/c/chromium/chromium-driver_72.0.3626.122-1~deb9u1_armhf.deb"),t("OutboundLink")],1)])]),a._v(" "),t("li",[t("p",[t("code",[a._v("sudo dpkg -i chromium-driver_72.0.3626.122-1~deb9u1_armhf.deb")])])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# sudo chmod +x /usr/local/bin/chromedriver\n# sudo apt-get install libminizip1\n# sudo apt-get install libwebpmux2\n# sudo apt-get install libgtk-3-0\n\n")])])])],1)},[],!1,null,null,null);r.default=n.exports}}]);