(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{306:function(r,e,a){"use strict";a.r(e);var t=a(6),n=Object(t.a)({},function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h2",{attrs:{id:"树莓派安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#树莓派安装","aria-hidden":"true"}},[r._v("#")]),r._v(" 树莓派安装")]),r._v(" "),a("ol",[a("li",[a("p",[r._v("从官方下载最新的镜像，推荐下载最新的镜像： "),a("a",{attrs:{href:"https://www.raspberrypi.org/downloads/raspbian/",target:"_blank",rel:"noopener noreferrer"}},[r._v("下载首页地址"),a("OutboundLink")],1),r._v(',在该网页中选择"\nRaspbian Buster Lite",截止到2019年8月12日，最新的树莓派版本是Buster版。此处选择的是最小镜像。')])]),r._v(" "),a("li",[a("p",[r._v("安装步骤参考官网： "),a("a",{attrs:{href:"https://www.raspberrypi.org/documentation/",target:"_blank",rel:"noopener noreferrer"}},[r._v("官方文档"),a("OutboundLink")],1),r._v(",使用的是工具是[Win32DiskImager].")])]),r._v(" "),a("li",[a("p",[r._v("安装结束后，你需要打开SD卡，也就是对应的Boot Folder,在该目录下放两个文件：")])])]),r._v(" "),a("p",[r._v("3.1 空文件"),a("code",[r._v("ssh")]),r._v(",没有后缀也没有任何内容，这个用于远程SSH登录。\n3.2 新建一个文件"),a("code",[r._v("wpa_supplicant.conf")]),r._v("文件，输入如下内容对应你的需要连接的wifi信息(此处我这里输入了两个WiFi配置信息）：")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v('ctrl_interface=/var/run/wpa_supplicant\nupdate_config=1\n\nnetwork={\n    ssid="FOffice"\n    psk="L0ngh)*%z2&r7p1"\n    priority=2\n}\n\nnetwork={\n    ssid="CMCC-MiniWifi"\n    psk="A5#$2a7&y1nr+"\n    priority=1\n}\n\n')])])]),a("p",[a("strong",[r._v("参考")]),r._v("：")]),r._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.raspberrypi.org/documentation/configuration/boot_folder.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("The Boot folder contents"),a("OutboundLink")],1)])]),r._v(" "),a("h2",{attrs:{id:"无线访问树莓派"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无线访问树莓派","aria-hidden":"true"}},[r._v("#")]),r._v(" 无线访问树莓派")]),r._v(" "),a("ol",[a("li",[r._v("官方给出了一些方案： "),a("a",{attrs:{href:"https://www.raspberrypi.org/documentation/remote-access/ip-address.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("官方文档方案无线连接树莓派"),a("OutboundLink")],1),r._v(",大致几种方案：")])]),r._v(" "),a("p",[r._v("1.1 首次安装后树莓派的名称是: "),a("code",[r._v("raspberrypi.local")]),r._v(",所以可以通过在同一个网站中直接ping：")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("$ ping raspberrypi.local\n")])])]),a("p",[r._v("1.2 通过手机端安装一个叫 Fing的app进行扫描局域网的所有机器，可以快速定位你的树莓派地址。")]),r._v(" "),a("p",[r._v("1.3 通过电脑端安装"),a("a",{attrs:{href:"https://www.advanced-ip-scanner.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Free Advanced IP Scanner"),a("OutboundLink")],1),r._v("或(Angry IP Scanner)[https://angryip.org/]扫描局域网的所有机器，也可以快速定位你的树莓派机器。（推荐此种方法）")]),r._v(" "),a("h2",{attrs:{id:"网页管理树莓派"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网页管理树莓派","aria-hidden":"true"}},[r._v("#")]),r._v(" 网页管理树莓派")]),r._v(" "),a("ol",[a("li",[r._v("访问"),a("a",{attrs:{href:"https://app.remote.it/web/",target:"_blank",rel:"noopener noreferrer"}},[r._v("remote.it网站"),a("OutboundLink")],1),r._v("，注册一个账号，然后安装指引在树莓派上安装如下命令：")])]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("sudo apt update\nsudo apt install connectd\nsudo connectd_installer\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[r._v("继续访问上面的网站就能看到自己的树莓派了。")])]),r._v(" "),a("h2",{attrs:{id:"jdk-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk-安装","aria-hidden":"true"}},[r._v("#")]),r._v(" jdk 安装")]),r._v(" "),a("ol",[a("li",[r._v("检查当前树莓派的系统版本： "),a("code",[r._v("cat /proc/cpuinfo")]),r._v(" 或者"),a("code",[r._v("uname –m")]),r._v(",我的树莓派3B+输出的是"),a("code",[r._v("armv7l")]),r._v(",查阅资料确认是32位的机器：\n"),a("a",{attrs:{href:"https://unix.stackexchange.com/questions/136407/is-my-linux-arm-32-or-64-bit",target:"_blank",rel:"noopener noreferrer"}},[r._v("检查树莓派是32位还是64位"),a("OutboundLink")],1),r._v(".")])]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("You can find the processor model in /proc/cpuinfo. For example:\n\n$ cat /proc/cpuinfo\nProcessor       : ARMv7 Processor rev 10 (v7l)\nARMv7 (and below) is 32-bit. ARMv8 introduces the 64-bit instruction set.\n\nIf you want to see whether your system supports 64-bit binaries, check the kernel architecture:\n\n$ uname -m\narmv7l\nOn a 64-bit processor, you'd see armv8 (or above).\n\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[r._v("确认了机器的型号，然后到官方的oracle网站，现在oracle已经提供了ARM架构的jdk安装包，叫做： Linux ARM 32 Hard Float ABI/Linux ARM 64 Hard Float ABI,此处我们选择： Linux ARM 32 Hard Float ABI，下载该安装包到对应的树莓派机器上。")])]),r._v(" "),a("li",[a("p",[r._v("复制该安装包"),a("code",[r._v("jdk-8u221-linux-arm32-vfp-hflt.tar.gz")]),r._v("执行如下命令安装 (注意将"),a("code",[r._v("/opt/jdk/jdk1.8.0_221")]),r._v("替换成你解压的目录)：")])])]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("$  tar -zxf jdk-8u221-linux-arm32-vfp-hflt.tar.gz\n$  sudo update-alternatives --install /usr/bin/java java /opt/jdk/jdk1.8.0_221/bin/java 1\n$  sudo update-alternatives --install /usr/bin/javac javac /opt/jdk/jdk1.8.0_221/bin/javac 1\n$  java -version\n$  javac \n")])])]),a("h1",{attrs:{id:"安装selenium及其对应的chrome-driver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装selenium及其对应的chrome-driver","aria-hidden":"true"}},[r._v("#")]),r._v(" 安装selenium及其对应的chrome driver")]),r._v(" "),a("p",[r._v("参考网站： https://www.raspberrypi.org/forums/viewtopic.php?t=194176")]),r._v(" "),a("h2",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤","aria-hidden":"true"}},[r._v("#")]),r._v(" 步骤")]),r._v(" "),a("ol",[a("li",[a("p",[r._v("下载文件： "),a("a",{attrs:{href:"http://security.debian.org/debian-security/pool/updates/main/c/chromium/chromium-driver_72.0.3626.122-1~deb9u1_armhf.deb",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://security.debian.org/debian-security/pool/updates/main/c/chromium/chromium-driver_72.0.3626.122-1~deb9u1_armhf.deb"),a("OutboundLink")],1)])]),r._v(" "),a("li",[a("p",[a("code",[r._v("sudo dpkg -i chromium-driver_72.0.3626.122-1~deb9u1_armhf.deb")])])])]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("        # sudo chmod +x /usr/local/bin/chromedriver\n        # sudo apt-get install libminizip1\n        # sudo apt-get install libwebpmux2\n        # sudo apt-get install libgtk-3-0\n\n")])])])])},[],!1,null,null,null);e.default=n.exports}}]);