(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{415:function(t,a,e){t.exports=e.p+"assets/img/pi-install.231b1fe8.png"},433:function(t,a,e){"use strict";e.r(a);var s=e(10),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("blockquote",[s("p",[t._v("因为树莓派的SD卡不能读文件，需要重新安装对应的树莓派，开始了今天的折腾记。。。")])]),t._v(" "),s("h2",{attrs:{id:"树莓派的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#树莓派的安装"}},[t._v("#")]),t._v(" 树莓派的安装")]),t._v(" "),s("ol",[s("li",[t._v("下载对应的镜像，看到官方新推了一种镜像，只有基本的桌面的镜像，不像以前的安装很多推荐的软件占了不少空间。。。。")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.raspberrypi.org/downloads/raspbian/",target:"_blank",rel:"noopener noreferrer"}},[t._v("镜像地址Raspbian Stretch with desktop"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.sdcard.org/downloads/formatter_4/eula_windows/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("格式化SD Card Format"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://etcher.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("镜像写入工具 Etcher "),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("官方安装指南")]),t._v(" "),s("p",[t._v("安装地址参考： https://www.raspberrypi.org/documentation/installation/installing-images/windows.md")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("("),s("strong",[t._v("注意这一步骤")]),t._v(")开启SSH, 新建 一个"),s("code",[t._v("ssh")]),t._v("空文件（无后缀）放在从树莓派拿下的SD卡，连接到电脑上并打开后的Boot目录:")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(415),alt:"目录"}})]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("新建一个连接wifi的文件，文件名为: "),s("code",[t._v("wpa_supplicant.conf")]),t._v("同样放在从树莓派拿下的SD卡，连接到电脑上并打开显示的Boot目录下, ,With this file in place, Raspbian will move it in "),s("code",[t._v("/etc/wpa_supplicant/")]),t._v(" when the system is booted. "),s("code",[t._v("wpa_supplicant.conf")]),t._v("文件内容格式如下:")])]),t._v(" "),s("div",{staticClass:"language-conf extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('ctrl_interface=/var/run/wpa_supplicant GROUP=netdev\nupdate_config=1\n\nnetwork={\n    ssid="FOffice"\n    psk="L0ngh)*%z2&r7p1"\n}\n')])])]),s("p",[t._v("或者"),s("code",[t._v("sudo nano /etc/wpa_supplicant/wpa_supplicant.conf")]),t._v(" 登录后修改查看")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("初次使用树莓派系统时，默认用户是"),s("code",[t._v("pi")]),t._v(" ，密码为"),s("code",[t._v("raspberry")])])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" status\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" root@127.0.0.1\n\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("查看系统架构 which debian architecture  used")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("> dpkg --print-architecture\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[t._v("更新软件源 ："),s("code",[t._v("sudo nano /etc/apt/source.list")]),t._v(" 源更新")])]),t._v(" "),s("blockquote",[s("p",[t._v("http://www.shumeipaiba.com/wanpai/jiaocheng/16.html")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ sudo nano /etc/apt/sources.list #编辑sources.list 文件，写上下面的镜像路径\n\ndeb http://mirrors.aliyun.com/raspbian/raspbian/ wheezy main non-free contrib\ndeb-src http://mirrors.aliyun.com/raspbian/raspbian/ wheezy main non-free contrib\n\ndeb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main contrib non-free rpi\ndeb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main contrib non-free rpi\n\n\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[t._v("配置树莓派")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ sudo raspi-config\n")])])]),s("p",[t._v("Once prompted, you should select the first option, “1. Expand File System”, hit Enter on your keyboard, arrow down to the “” button, and then reboot your Pi:\nAfter rebooting, your file system should have been expanded to include all available space on your micro-SD card. You can verify that the disk has been expanded by executing df -h and examining the output:")]),t._v(" "),s("ul",[s("li",[t._v("改变hostname名称(可选，上面的raspi-config也可以配置)\nEdit the Hostname File. Next type: sudo nano /etc/hostname (and then hit enter) ...\nCommit the changes. ...\nChange the /boot/hostnames file. ...\nReboot the Pi.")])]),t._v(" "),s("blockquote",[s("p",[t._v("这里注意还需要修改 /etc/hosts里面的配置否则会报无法解析host的错误:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" $ sudo nano /etc/hosts \n 127.0.1.1       PI \n")])])]),s("ul",[s("li",[t._v("改变密码 pi/root（可选，上面的raspi-config也可以配置)")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo passwd pi\nsudo passwd root\nsudo passwd --unlock root  \n")])])]),s("ol",{attrs:{start:"8"}},[s("li",[t._v("terminal下不同用户切换")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 切换到root用户\n `sudo su -`\n# 从root切换到特定的用户\n`sudo su - pi`\n\nwhoami\n\n")])])]),s("ol",{attrs:{start:"9"}},[s("li",[t._v("树莓派mysql安装和配置")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\nsudo apt-get install mysql-server\n\nDuring the installation, you’ll be asked to set a root password (leaving the spot blank means you’ll have no password).\n\n\nsudo mysql_secure_installation\n\n\nIn this stage, you’ll have the option to change your root password. Since you only just set it, you might as well say no. Say yes to everything else.\n\n")])])]),s("p",[t._v("安装完成后，远程是禁止访问的需要注释下面的一行代码：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('注释掉skip-networking选项来开启远程访问.\n注释bind-address项，该项表示运行哪些IP地址的机器连接，允许所有远程的机器连接\n但是配置文件这么多，这两选项究竟在哪呢？这个时候使用grep在/etc/mysql/目录中的所有文件中递归查找，看哪个文件中含有这个字符串\n我们输入：\ngrep -rn "skip-networking" *\n')])])]),s("h2",{attrs:{id:"迁移公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迁移公众号"}},[t._v("#")]),t._v(" 迁移公众号")]),t._v(" "),s("blockquote",[s("p",[t._v("在关注者与公众号产生消息交互后，公众号可获得关注者的OpenID（加密后的微信号，每个用户对每个公众号的OpenID是唯一的。对于不同公众号，同一用户的openid不同）。公众号可通过本接口来根据OpenID获取用户基本信息，包括昵称、头像、性别、所在城市、语言和关注时间。\n也就是openid不唯一，比如A用户在x公众号的openid为o80v00ZiTb7H2Y2z9xLJQUpDeXLc，A用户在Y公众号的openid为o6_bmjrPTlm6_2sgVt7hMZOPfL2M。")])]),t._v(" "),s("h2",{attrs:{id:"在ion-content中加入背景图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在ion-content中加入背景图片"}},[t._v("#")]),t._v(" 在ion-content中加入背景图片")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ion-content {\n    --background: url('/assets/img/background/background.png') no-repeat 100% 100%;\n}\n\nion-content{\n    --background: #fff url('../../assets/images/cover.jpg') no-repeat center center / cover;\n}\n\n\nion-content {\n    --background: none;\n    background-image: url('/assets/imgs/page_bg.jpg');\n    background-position: center top;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n")])])]),s("h2",{attrs:{id:"ps-去水印方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ps-去水印方法"}},[t._v("#")]),t._v(" PS 去水印方法")]),t._v(" "),s("blockquote",[s("p",[t._v("暂无")])]),t._v(" "),s("h2",{attrs:{id:"ionic居中元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ionic居中元素"}},[t._v("#")]),t._v(" ionic居中元素")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" margin: 0 auto;\n")])])]),s("h2",{attrs:{id:"type-number没有弹出数字键盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-number没有弹出数字键盘"}},[t._v("#")]),t._v(" "),s("code",[t._v("type=number")]),t._v("没有弹出数字键盘")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v('  type="tel" pattern="[0-9]*"\n\n')])])]),s("h2",{attrs:{id:"ionic的键盘会将内容弹到顶部-布局混乱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ionic的键盘会将内容弹到顶部-布局混乱"}},[t._v("#")]),t._v(" ionic的键盘会将内容弹到顶部，布局混乱")]),t._v(" "),s("p",[t._v("it's bug in ionic, once you focus on any input the keyboard will show up and will add padding-bottom for the scroll-content class to lift the for above the keyboard and it doesn't remove the padding-bottom after you close the keyboard. I tried to check if I have any JS event on the mobile keyboard but we don't so my work around is to set a fixed padding-bottom for the scroll-content class to prevent changing it on the runtime.\n参考： https://stackoverflow.com/questions/47239562/the-keyboard-pushes-a-div-up-out-of-the-screen")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".scroll-content {\n    padding-bottom: 0 !important;\n }\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);