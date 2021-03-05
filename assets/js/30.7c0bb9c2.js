(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{447:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"生成环境java内存占用很高排查-尚未解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成环境java内存占用很高排查-尚未解决"}},[t._v("#")]),t._v(" 生成环境java内存占用很高排查 （尚未解决）")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("命令"),s("code",[t._v("top")]),t._v("查看对应的java进程的"),s("code",[t._v("pid")]),t._v(",记录下该数值（16066）")])]),t._v(" "),s("li",[s("p",[t._v("定位线程问题（通过命令查看16066进程的线程情况），命令："),s("code",[t._v("ps p 16066 -L -o pcpu,pmem,pid,tid,time,tname,cmd")])])]),t._v(" "),s("li",[s("p",[t._v("输出堆栈信息,将PID为16066的堆栈信息打印到jstack.log中，命令："),s("code",[t._v("jstack -l 16066 > /logs/jvm/jstack.log")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("jvm运行时会生成一个目录hsperfdata_$USER($USER是启动java进程的用户)，在linux中默认是/tmp。目录下会有些pid文件，存放jvm进程信息。\njps、jstack等工具读取/tmp/hsperfdata_$USER下的pid文件获取连接信息。jstack报错：Unable to open socket file。是因为这个java进程的pid文件删除了。")])]),t._v(" "),s("p",[t._v("为什么会被删除呢？这是因为linux操作系统为了防止/tmp目录文件过多，有个删除管理机制：tmpwatch。")]),t._v(" "),s("p",[t._v("查看关键配置"),s("code",[t._v("/etc/cron.daily/tmpwatch")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("flags")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("-umc /usr/sbin/tmpwatch "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$flags")]),t._v('"')]),t._v(" \n-x /tmp/.X11-unix -x /tmp/.XIM-unix "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" \n -x /tmp/.font-unix -x /tmp/.ICE-unix \n-x /tmp/.Test-unix "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),t._v(" /tmp /usr/sbin/tmpwatch "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$flags")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("720")]),t._v(" /var/tmp \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" /var/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cache/man,catman"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cat?,X11R6/cat?,local/cat?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$d")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" /usr/sbin/tmpwatch "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$flags")]),t._v('"')]),t._v(" -f "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("720")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$d")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])]),s("p",[t._v("系统每天会用tmpwatch命令检查并删除 /tmp 下超过240小时未访问过的文件和目录。")]),t._v(" "),s("h3",{attrs:{id:"解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),s("p",[t._v("修改tmpwatch设置\n排查对应的/tmp/hsperfdata_*的目录，让jvm自己来管理，保证jps,jstat等命令可用。\n修改"),s("code",[t._v("/etc/cron.daily/tmpwatch")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("/usr/sbin/tmpwatch "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$flags")]),t._v('"')]),t._v(" -x /tmp/hsperfdata_* -x /tmp/.X11-unix -x /tmp/.XIM-unix\n -x /tmp/.font-unix -x /tmp/.ICE-unix -x /tmp/.Test-unix "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),t._v(" /tmp\n")])])]),s("h2",{attrs:{id:"idea占用内存太高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea占用内存太高"}},[t._v("#")]),t._v(" idea占用内存太高")]),t._v(" "),s("h3",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ol",[s("li",[t._v("https://blog.csdn.net/zzzgd_666/article/details/81126822")])]),t._v(" "),s("ul",[s("li",[t._v("首先修改和idea64.exe文件同目录的idea64.exe.vmoptions文件（32位的文件名为idea.exe.vmoptions），开启server模式并加大最大内存，内容如下：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# custom IntelliJ IDEA VM options\n-server\n-Xms1825m\n-Xmx1825m\n-XX:ReservedCodeCacheSize=240m\n-XX:+UseConcMarkSweepGC\n-XX:SoftRefLRUPolicyMSPerMB=50\n-ea\n-Dsun.io.useCanonCaches=false\n-Djava.net.preferIPv4Stack=true\n-Djdk.http.auth.tunneling.disabledSchemes=""\n-XX:+HeapDumpOnOutOfMemoryError\n-XX:-OmitStackTraceInFastThrow\n\n')])])]),s("ul",[s("li",[t._v("点击 File -> Invalidate Caches / Restart...菜单，然后点击 Invalidate and Restart按钮清空并重建索引，然后重启。再次启动程序之后，会首先重建索引和缓存。")])]),t._v(" "),s("h2",{attrs:{id:"jackson-反序列化报错-invaliddefinitionexception-cannot-construct-instance-ofcom-xxx-problem-java-lang-nullpointerexception"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jackson-反序列化报错-invaliddefinitionexception-cannot-construct-instance-ofcom-xxx-problem-java-lang-nullpointerexception"}},[t._v("#")]),t._v(" jackson 反序列化报错 "),s("code",[t._v("InvalidDefinitionException: Cannot construct instance of")]),t._v("com.xxx"),s("code",[t._v(", problem:")]),t._v("java.lang.NullPointerException`")]),t._v(" "),s("blockquote",[s("p",[t._v("jackson 反序列化的时候，对象需要有一个默认方法，否则无法构建对象")])]),t._v(" "),s("h2",{attrs:{id:"navicat-premium-激活"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navicat-premium-激活"}},[t._v("#")]),t._v(" navicat premium 激活")]),t._v(" "),s("p",[t._v("参考： https://www.jianshu.com/p/5f693b4c9468")]),t._v(" "),s("h2",{attrs:{id:"unit测试中threadpooltaskexecutor中任务退出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unit测试中threadpooltaskexecutor中任务退出"}},[t._v("#")]),t._v(" Unit测试中"),s("code",[t._v("ThreadPoolTaskExecutor")]),t._v("中任务退出")]),t._v(" "),s("blockquote",[s("p",[t._v("因为@Test中的主线程已经退出，所以其他的异步线程池不能继续进行。")])]),t._v(" "),s("h2",{attrs:{id:"dell-选择u盘启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dell-选择u盘启动"}},[t._v("#")]),t._v(" Dell 选择U盘启动")]),t._v(" "),s("blockquote",[s("p",[t._v("参考文档： http://www.udaxia.com/upqd/11688.html")])])])}),[],!1,null,null,null);a.default=n.exports}}]);