(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{288:function(e,t,a){"use strict";a.r(t);var s=a(9),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"zookeeper-和dubbo整合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-和dubbo整合"}},[e._v("#")]),e._v(" zookeeper 和dubbo整合")]),e._v(" "),a("h3",{attrs:{id:"zookeeper-单机安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-单机安装配置"}},[e._v("#")]),e._v(" zookeeper 单机安装配置")]),e._v(" "),a("blockquote",[a("p",[e._v("参考文章: https://blog.csdn.net/pucao_cug/article/details/71240246")])]),e._v(" "),a("ul",[a("li",[e._v("下载安装 "),a("code",[e._v("wget http://mirror.bit.edu.cn/apache/zookeeper/current/apache-zookeeper-3.5.5-bin.tar.gz")])]),e._v(" "),a("li",[e._v("解压缩tar.gz到目录： "),a("code",[e._v("/opt/apache-zookeeper-3.5.5")])]),e._v(" "),a("li",[e._v("创建用户，通用方式：")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建用户和创建组，用户systemctl启动用")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# sudo groupadd zookeeper")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# sudo useradd -d /opt/apache-zookeeper-3.5.5-bin -s /bin/false -g zookeeper zookeeper")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 列出所有的用户组： cut -d: -f1 /etc/group | sort")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 列出所有的用户: sudo cat /etc/passwd")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 对应目录赋予权限： chown -R zookeeper:zookeeper /opt/apache-zookeeper-3.5.5-bin")]),e._v("\n")])])]),a("ul",[a("li",[e._v("进入"),a("code",[e._v("cnf")]),e._v("目录复制一份配置文件： "),a("code",[e._v("sudo cp zoo_sample.cfg zoo.cfg")])]),e._v(" "),a("li",[e._v("创建日志目录： "),a("code",[e._v("sudo mkdir /logs/zookeeper && chmod 777 -R /logs")])]),e._v(" "),a("li",[e._v("修改"),a("code",[e._v("zoo.cfg")]),e._v("配置信息：")])]),e._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The number of milliseconds of each tick")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 它用来控制心跳和超时，默认情况下最小的会话超时时间为两倍的 tickTime ，就是minSessionTimeout=")]),e._v("\ntickTime"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2000")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The number of ticks that the initial ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# synchronization phase can take")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 集群配置，此配置表示，允许 follower （相对于 leader 而言的“客户端”）连接并同步到 leader 的初始化连接时间，它以 tickTime 的倍数来表示。当超过设置倍数的 tickTime 时间，则连接失败。")]),e._v("\ninitLimit"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The number of ticks that can pass between ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# sending a request and getting an acknowledgement")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 集群配置，此配置表示， leader 与 follower 之间发送消息，请求和应答时间长度。如果 follower 在设置的时间内不能与leader 进行通信，那么此 follower 将被丢弃。")]),e._v("\nsyncLimit"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# the directory where the snapshot is stored.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# do not use /tmp for storage, /tmp here is just ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# example sakes.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 存储内存中数据库快照的位置")]),e._v("\ndataDir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("opt"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("apache"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("zookeeper"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.5")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("data\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 这个操作将管理机器把事务日志写入到“ dataLogDir ”所指定的目录，而不是“ dataDir ”所指定的目录。这将允许使用一个专用的日志设备并且帮助我们避免日志和快照之间的竞争")]),e._v("\ndataLogDir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("logs"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("zookeeper\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# the port at which the clients will connect")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 客户端连接的端口")]),e._v("\nclientPort"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2181")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# the maximum number of client connections.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# increase this if you need to handle more clients")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 这个操作将限制连接到 ZooKeeper 的客户端的数量，限制并发连接的数量，它通过 IP 来区分不同的客户端。此配置选项可以用来阻止某些类别的 Dos 攻击。将它设置为 0 或者忽略而不进行设置将会取消对并发连接的限制。")]),e._v("\nmaxClientCnxns"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Be sure to read the maintenance section of the ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# administrator guide before turning on autopurge.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The number of snapshots to retain in dataDir")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#autopurge.snapRetainCount=3")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Purge task interval in hours")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Set to "0" to disable auto purge feature')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#autopurge.purgeInterval=1")]),e._v("\n\n")])])]),a("p",[e._v("-- 配置环境变量："),a("code",[e._v("sudo nano /etc/profile")]),e._v(":")]),e._v(" "),a("blockquote",[a("p",[e._v("配置环境变量的目的是为了直接只用zookeeper中bin目录下的命令，如果不配置zookeeper的home路径，并不影响zookeeper启动")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export ZOOKEEPER_HOME=/opt/apache-zookeeper-3.5.5-bin\nexport PATH=$ZOOKEEPER_HOME/bin:$PATH\n")])])]),a("p",[e._v("-- 启动服务后台运行："),a("code",[e._v("/opt/apache-zookeeper-3.5.5-bin/bin/zkServer.sh start")]),e._v("\n-- 启动服务前台运行："),a("code",[e._v("/opt/apache-zookeeper-3.5.5-bin/bin/zkServer.sh start-foreground")]),e._v("\n-- 查看服务是否启动: "),a("code",[e._v("/opt/apache-zookeeper-3.5.5-bin/bin/zkServer.sh status")])]),e._v(" "),a("p",[e._v("-- 制作启动开机自启动: "),a("code",[e._v("sudo nano /lib/systemd/system/zookeeper.service")]),e._v("\n-- 设置开机启动: "),a("code",[e._v("sudo systemctl daemon-reload && systemctl enable zookeeper.service")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[Unit]\nDescription=zookeeper\nAfter=network.target remote-fs.target nss-lookup.target\n\n[Service]\nType=forking\n\nUser=zookeeper\nGroup=zookeeper\n\nExecStart=/opt/apache-zookeeper-3.5.5-bin/bin/zkServer.sh start\nExecReload=/opt/apache-zookeeper-3.5.5-bin/bin/zkServer.sh restart\nExecStop=/opt/apache-zookeeper-3.5.5-bin/bin/zkServer.sh stop\n\n[Install]\nWantedBy=multi-user.target\n\n")])])]),a("h3",{attrs:{id:"zookeeper启动问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper启动问题"}},[e._v("#")]),e._v(" zookeeper启动问题")]),e._v(" "),a("ol",[a("li",[e._v("执行"),a("code",[e._v("/zkServer.sh start")]),e._v("，看到启动正常，但是执行"),a("code",[e._v("zkServer.sh status")]),e._v("确报：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Error contacting service. It is probably not running\n")])])]),a("p",[e._v("这说明并没有启动成功.我们可以通过bin目录下面的"),a("code",[e._v("bin/zookeeper.out")]),e._v("来查看问题原因,但是没有找到这个文件,后来看到执行这个命令让命令在前台运行:\n"),a("code",[e._v("sudo ./zkServer.sh start-foreground")]),e._v(" :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/usr/bin/java\nZooKeeper JMX enabled by default\nUsing config: /opt/apache-zookeeper-3.5.5/bin/../conf/zoo.cfg\n错误: 找不到或无法加载主类 org.apache.zookeeper.server.quorum.QuorumPeerMain\n")])])]),a("p",[e._v("发现原来是自己下载的zookeeper版本是源码版本，正确的版本应该是: "),a("a",{attrs:{href:"http://mirror.bit.edu.cn/apache/zookeeper/current/apache-zookeeper-3.5.5-bin.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://mirror.bit.edu.cn/apache/zookeeper/current/apache-zookeeper-3.5.5-bin.tar.gz"),a("OutboundLink")],1)]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("执行"),a("code",[e._v("systemctl start zookeeper")]),e._v("报错: "),a("code",[e._v("zkServer.sh[985]: Error: JAVA_HOME is not set and java could not be found in PATH.")])])]),e._v(" "),a("blockquote",[a("p",[e._v("尽管配置了JAVA_HOME在"),a("code",[e._v("/etc/profile")]),e._v("中，但是还是需要下面的命令执行：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# update-alternatives --install /usr/bin/java java /opt/jdk1.8.0_211/bin/java 1\n# update-alternatives --install /usr/bin/javac javac /opt/jdk1.8.0_211/bin/javac 1\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);