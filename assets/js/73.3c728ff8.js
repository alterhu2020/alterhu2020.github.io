(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{330:function(e,t,a){"use strict";a.r(t);var n=a(9),o=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("ClientOnly",[a("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#jdk-和-tomcat-安装-更新到2019年8月10日"}},[e._v("JDK 和 tomcat 安装[更新到2019年8月10日]")]),a("ul",[a("li",[a("a",{attrs:{href:"#tomcat启动脚本"}},[e._v("tomcat启动脚本")])])])]),a("li",[a("a",{attrs:{href:"#查看tomcat启动状态"}},[e._v("查看tomcat启动状态")])]),a("li",[a("a",{attrs:{href:"#setenv-sh-文件-配置tomcat于-springboot-的profile参数"}},[e._v("setenv.sh文件 配置tomcat于springboot的profile参数")])]),a("li",[a("a",{attrs:{href:"#tomcat的配置，配置bio-nio-也就是最大连接数和处理连接数的线程池的大小："}},[e._v("tomcat的配置，配置BIO/NIO,也就是最大连接数和处理连接数的线程池的大小：")]),a("ul",[a("li",[a("a",{attrs:{href:"#severe-could-not-contact-localhost-8005-base-port-8005-and-offset-0"}},[e._v("SEVERE: Could not contact [localhost:8005] (base port [8005] and offset [0])")])]),a("li",[a("a",{attrs:{href:"#initial-server-setup-with-debian-9-初始化debian系统"}},[e._v("initial-server-setup-with-debian-9 初始化debian系统")])]),a("li",[a("a",{attrs:{href:"#caused-by-org-springframework-jmx-export-unabletoregistermbeanexception-unable-to-register-mbean-hikaridatasource-null-with-key-datasource-nested-exception-is-javax-management-instancealreadyexistsexception-com-zaxxer-hikari-name-datasource-type-hikaridatasource"}},[e._v("Caused by: org.springframework.jmx.export.UnableToRegisterMBeanException: Unable to register MBean [HikariDataSource (null)] with key 'dataSource'; nested exception is javax.management.InstanceAlreadyExistsException: com.zaxxer.hikari:name=dataSource,type=HikariDataSource")])]),a("li",[a("a",{attrs:{href:"#the-web-application-to-have-started-a-thread-named-abandoned-connection-cleanup-thread-but-has-failed-to-stop-it-this-is-very-likely-to-create-a-memory-leak-stack-trace-of-thread"}},[e._v("The web application to have started a thread named [Abandoned connection cleanup thread] but has failed to stop it. This is very likely to create a memory leak. Stack trace of thread:")])]),a("li",[a("a",{attrs:{href:"#tomcat-this-web-application-instance-has-been-stopped-already-could-not-load-the-following-stack-trace-is-thrown-for-debugging-purposes-as-well-as-to-attempt-to-terminate-the-thread-which-caused-the-illegal-access"}},[e._v("tomcat this web application instance has been stopped already. Could not load []. The following stack trace is thrown for debugging purposes as well as to attempt to terminate the thread which caused the illegal access.")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"jdk-和-tomcat-安装-更新到2019年8月10日"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk-和-tomcat-安装-更新到2019年8月10日","aria-hidden":"true"}},[e._v("#")]),e._v(" JDK 和 tomcat 安装[更新到2019年8月10日]")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/install-tomcat-9-debian-9",target:"_blank",rel:"noopener noreferrer"}},[e._v("JDK安装步骤参考"),a("OutboundLink")],1)]),e._v(" "),a("ol",[a("li",[e._v("JDK11安装步骤")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ 进入Jenkins目录：https://ci.adoptopenjdk.net/job/build-scripts/job/jobs/job/jdk11u/job/jdk11u-linux-x64-hotspot/\n$ wget https://github.com/AdoptOpenJDK/openjdk11-binaries/releases/download/jdk-11.0.4%2B11/OpenJDK11U-jdk_x64_linux_hotspot_11.0.4_11.tar.gz\n$  tar -zxvf OpenJDK11U-jdk_x64_linux_hotspot_11.0.4_11.tar.gz \n$ nano /etc/profile\nexport JAVA_HOME=/home/jdk-11.0.4+11\nexport PATH=$JAVA_HOME/bin:$PATH\n\n$ . /etc/profile\n$ java -version\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("JDK8安装步骤")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v("  https://download.oracle.com/otn-pub/java/jdk/8u191-b12/2787e4a523244c269598db4e85c51e0c/jdk-8u191-linux-x64.tar.gz\n$  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" /opt/jdk\n$  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -C /opt/jdk  -zxf /home/jdk-8u191-linux-x64.tar.gz\n$  update-alternatives --install /usr/bin/java java /opt/jdk/jdk1.8.0_191/bin/java 1\n$  update-alternatives --install /usr/bin/javac javac /opt/jdk/jdk1.8.0_191/bin/javac 1\n$  java -version\n$  javac \n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$  wget http://mirrors.advancedhosters.com/apache/tomcat/tomcat-9/v9.0.14/bin/apache-tomcat-9.0.14.tar.gz\n$  useradd -rs /bin/false tomcat 注意如果部署到nginx最好这个用户是nginx的用户www-data用户，这样创建文件的时候UMask不会错误。\n$  mkdir /opt/tomcat\n$  chown -R www-data:www-data apache-tomcat\n")])])]),a("h3",{attrs:{id:"tomcat启动脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat启动脚本","aria-hidden":"true"}},[e._v("#")]),e._v(" tomcat启动脚本")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[Unit]\nDescription=Tomcat9\nAfter=network.target\n\n[Service]\nType=forking\nUser=www-data\nGroup=www-data\n# 创建文件的默认属性设置\nUMask=0022\n\nEnvironment=CATALINA_PID=/opt/tomcat/apache-tomcat-9.0.14/tomcat9.pid\nEnvironment=TOMCAT_JAVA_HOME=/usr/bin/java\nEnvironment=CATALINA_HOME=/opt/tomcat/apache-tomcat-9.0.14\nEnvironment=CATALINA_BASE=/opt/tomcat/apache-tomcat-9.0.14\nEnvironment=CATALINA_OPTS=\nEnvironment="JAVA_OPTS=-Dfile.encoding=UTF-8 -Dnet.sf.ehcache.skipUpdateCheck=true -XX:+UseConcMarkSweepGC -XX:+CMSClassUnloadingEnabled -XX:+UseParNewGC -XX:MaxPermSize=528m -Xms512m -Xmx512m"\n\nExecStart=/opt/tomcat/apache-tomcat-9.0.14/bin/startup.sh\nExecStop=/bin/kill -15 $MAINPID\n\n# 重启参数\nRestartSec=10\nRestart=always\n\n[Install]\nWantedBy=multi-user.target\n')])])]),a("h2",{attrs:{id:"查看tomcat启动状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看tomcat启动状态","aria-hidden":"true"}},[e._v("#")]),e._v(" 查看tomcat启动状态")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# systemctl daemon-reload\n# systemctl start tomcat\n# systemctl enable tomcat\n# tail -f -n 150 /opt/tomcat/apache-tomcat-9.0.14/logs/catalina.2018-12-24.log\n\n## Systemctl error\nsystemctl failed error log: \n> journalctl -xe\n")])])]),a("h2",{attrs:{id:"setenv-sh文件-配置tomcat于springboot的profile参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setenv-sh文件-配置tomcat于springboot的profile参数","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("setenv.sh")]),e._v("文件 配置tomcat于"),a("code",[e._v("springboot")]),e._v("的profile参数")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# REM 切换不同的spring环境\n# SET JAVA_OPTS=%JAVA_OPTS% -Dspring.profiles.active=dev\n#  ----------------------------------linux 配置脚本 -------------------------------------------------\n# REM 参考地址： https://www.javacodegeeks.com/2012/06/spring-31-profiles-and-tomcat.html, 设置内存\nJAVA_OPTS="$JAVA_OPTS -Xms2512M -Xmx2512M -XX:PermSize=64M -XX:MaxNewSize=128M -XX:MaxPermSize=128M -Dspring.profiles.active=prod"\n# REM 参考文档： https://stackoverflow.com/questions/18812762/the-apr-based-apache-tomcat-native-library-was-not-found-on-the-java-library-pat\n# REM 错误信息： The APR based Apache Tomcat Native library was not found on the java.library.path\n# REM 配置脚本： 下面的是针对Linux环境的，默认安装apr和tomcat-native包后的地址，Linux安装步骤参考gist中说明\nexport LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/apr/lib\n')])])]),a("h2",{attrs:{id:"tomcat的配置，配置bio-nio-也就是最大连接数和处理连接数的线程池的大小："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat的配置，配置bio-nio-也就是最大连接数和处理连接数的线程池的大小：","aria-hidden":"true"}},[e._v("#")]),e._v(" tomcat的配置，配置BIO/NIO,也就是最大连接数和处理连接数的线程池的大小：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n  Licensed to the Apache Software Foundation (ASF) under one or more\n  contributor license agreements.  See the NOTICE file distributed with\n  this work for additional information regarding copyright ownership.\n  The ASF licenses this file to You under the Apache License, Version 2.0\n  (the "License"); you may not use this file except in compliance with\n  the License.  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an "AS IS" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n--\x3e\n\x3c!-- Note:  A "Server" is not itself a "Container", so you may not\n     define subcomponents such as "Valves" at this level.\n     Documentation at /docs/config/server.html\n --\x3e\n<Server port="8005" shutdown="SHUTDOWN">\n  <Listener className="org.apache.catalina.startup.VersionLoggerListener" />\n  \x3c!-- Security listener. Documentation at /docs/config/listeners.html\n  <Listener className="org.apache.catalina.security.SecurityListener" />\n  --\x3e\n  \x3c!--APR library loader. Documentation at /docs/apr.html --\x3e\n  <Listener className="org.apache.catalina.core.AprLifecycleListener" SSLEngine="on" />\n  \x3c!-- Prevent memory leaks due to use of particular java/javax APIs--\x3e\n  <Listener className="org.apache.catalina.core.JreMemoryLeakPreventionListener" />\n  <Listener className="org.apache.catalina.mbeans.GlobalResourcesLifecycleListener" />\n  <Listener className="org.apache.catalina.core.ThreadLocalLeakPreventionListener" />\n\n  \x3c!-- Global JNDI resources\n       Documentation at /docs/jndi-resources-howto.html\n  --\x3e\n  <GlobalNamingResources>\n    \x3c!-- Editable user database that can also be used by\n         UserDatabaseRealm to authenticate users\n    --\x3e\n    <Resource name="UserDatabase" auth="Container"\n              type="org.apache.catalina.UserDatabase"\n              description="User database that can be updated and saved"\n              factory="org.apache.catalina.users.MemoryUserDatabaseFactory"\n              pathname="conf/tomcat-users.xml" />\n  </GlobalNamingResources>\n\n  \x3c!-- A "Service" is a collection of one or more "Connectors" that share\n       a single "Container" Note:  A "Service" is not itself a "Container",\n       so you may not define subcomponents such as "Valves" at this level.\n       Documentation at /docs/config/service.html\n   --\x3e\n  <Service name="Catalina">\n    \x3c!-- <Executor name="tomcatThreadPool" \n        namePrefix="tomcat-thread-"\n        maxThreads="200"\n        minSpareThreads="4"/> --\x3e\n \n    \x3c!-- A "Connector" represents an endpoint by which requests are received\n         and responses are returned. Documentation at :\n         Java HTTP Connector: /docs/config/http.html\n         Java AJP  Connector: /docs/config/ajp.html\n         APR (HTTP/AJP) Connector: /docs/apr.html\n         Define a non-SSL/TLS HTTP/1.1 Connector on port 8080\n         参考文档参数： https://tomcat.apache.org/tomcat-9.0-doc/config/http.html\n         采用线程池的技术来控制tomcat，不用再重新开启一个线程针对每个http请求\n          1. maxThreads default=200，代表初始的处理器请求的线程池大小，worker数量 ,并发数量\n          2. minSpareThreads default=25, 空闲使用中的线程池数量\n          3. maxConnections 允许的最多tcp连接数\n          4. acceptCount 超过maxConnections后运行的最多客户端         \n    --\x3e\n    <Connector \n               port="8080" protocol="org.apache.coyote.http11.Http11NioProtocol"\n               maxConnections="20000"\n               acceptCount="100"\n               maxThreads="1000"\n               minSpareThreads="4"\n               connectionTimeout="20000"\n               redirectPort="8443" />\n    \x3c!-- A "Connector" using the shared thread pool--\x3e\n    \x3c!--\n    <Connector executor="tomcatThreadPool"\n               port="8080" protocol="HTTP/1.1"\n               connectionTimeout="20000"\n               redirectPort="8443" />\n    --\x3e\n    \x3c!-- Define a SSL/TLS HTTP/1.1 Connector on port 8443\n         This connector uses the NIO implementation. The default\n         SSLImplementation will depend on the presence of the APR/native\n         library and the useOpenSSL attribute of the\n         AprLifecycleListener.\n         Either JSSE or OpenSSL style configuration may be used regardless of\n         the SSLImplementation selected. JSSE style configuration is used below.\n    --\x3e\n    \x3c!--\n    <Connector port="8443" protocol="org.apache.coyote.http11.Http11NioProtocol"\n               maxThreads="150" SSLEnabled="true">\n        <SSLHostConfig>\n            <Certificate certificateKeystoreFile="conf/localhost-rsa.jks"\n                         type="RSA" />\n        </SSLHostConfig>\n    </Connector>\n    --\x3e\n    \x3c!-- Define a SSL/TLS HTTP/1.1 Connector on port 8443 with HTTP/2\n         This connector uses the APR/native implementation which always uses\n         OpenSSL for TLS.\n         Either JSSE or OpenSSL style configuration may be used. OpenSSL style\n         configuration is used below.\n    --\x3e\n    \x3c!--\n    <Connector port="8443" protocol="org.apache.coyote.http11.Http11AprProtocol"\n               maxThreads="150" SSLEnabled="true" >\n        <UpgradeProtocol className="org.apache.coyote.http2.Http2Protocol" />\n        <SSLHostConfig>\n            <Certificate certificateKeyFile="conf/localhost-rsa-key.pem"\n                         certificateFile="conf/localhost-rsa-cert.pem"\n                         certificateChainFile="conf/localhost-rsa-chain.pem"\n                         type="RSA" />\n        </SSLHostConfig>\n    </Connector>\n    --\x3e\n\n    \x3c!-- Define an AJP 1.3 Connector on port 8009 --\x3e\n    <Connector port="8009" protocol="AJP/1.3" redirectPort="8443" />\n\n\n    \x3c!-- An Engine represents the entry point (within Catalina) that processes\n         every request.  The Engine implementation for Tomcat stand alone\n         analyzes the HTTP headers included with the request, and passes them\n         on to the appropriate Host (virtual host).\n         Documentation at /docs/config/engine.html --\x3e\n\n    \x3c!-- You should set jvmRoute to support load-balancing via AJP ie :\n    <Engine name="Catalina" defaultHost="localhost" jvmRoute="jvm1">\n    --\x3e\n    <Engine name="Catalina" defaultHost="localhost">\n\n      \x3c!--For clustering, please take a look at documentation at:\n          /docs/cluster-howto.html  (simple how to)\n          /docs/config/cluster.html (reference documentation) --\x3e\n      \x3c!--\n      <Cluster className="org.apache.catalina.ha.tcp.SimpleTcpCluster"/>\n      --\x3e\n\n      \x3c!-- Use the LockOutRealm to prevent attempts to guess user passwords\n           via a brute-force attack --\x3e\n      <Realm className="org.apache.catalina.realm.LockOutRealm">\n        \x3c!-- This Realm uses the UserDatabase configured in the global JNDI\n             resources under the key "UserDatabase".  Any edits\n             that are performed against this UserDatabase are immediately\n             available for use by the Realm.  --\x3e\n        <Realm className="org.apache.catalina.realm.UserDatabaseRealm"\n               resourceName="UserDatabase"/>\n      </Realm>\n\n      <Host name="localhost"  appBase="/www/yitieyilu.com/yitieyiluopen"\n            unpackWARs="true" autoDeploy="true">\n\n        \x3c!-- SingleSignOn valve, share authentication between web applications\n             Documentation at: /docs/config/valve.html --\x3e\n        \x3c!--\n        <Valve className="org.apache.catalina.authenticator.SingleSignOn" />\n        --\x3e\n\n        \x3c!-- Access log processes all example.\n             Documentation at: /docs/config/valve.html\n             Note: The pattern used is equivalent to using pattern="common" --\x3e\n        <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"\n               prefix="localhost_access_log" suffix=".txt"\n               pattern="%h %l %u %t &quot;%r&quot; %s %b" />\n        \n        \x3c!-- 对应所有的安装包文件, 此处不配置--\x3e\n\n      </Host>\n    </Engine>\n  </Service>\n</Server>\n\n')])])]),a("p",[e._v("https://linuxconfig.org/how-to-install-tomcat-9-on-debian-9-stretch-linux 推荐操作步骤\nhttps://gist.github.com/jniltinho/a7bd30288342a5d352e6, 这里的tomcat.service中的"),a("code",[e._v("CATALINA_OPTS")]),e._v("配置可能导致不能启动tomcat")]),e._v(" "),a("p",[e._v("tomcat install failed:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" systemctl status tomcat\n● tomcat.service - Tomcat9\n   Loaded: loaded (/etc/systemd/system/tomcat.service; enabled; vendor preset: enabled)\n   Active: failed (Result: exit-code) since Wed 2018-06-27 12:31:36 CST; 13s ago\n  Process: 1289 ExecStart=/usr/local/tomcat9/bin/startup.sh (code=exited, status=2)\n\n6月 27 12:31:36 BQA startup.sh[1289]: Using CATALINA_BASE:   /usr/local/tomcat9\n6月 27 12:31:36 BQA startup.sh[1289]: Using CATALINA_HOME:   /usr/local/tomcat9\n6月 27 12:31:36 BQA startup.sh[1289]: Using CATALINA_TMPDIR: /usr/local/tomcat9/temp\n6月 27 12:31:36 BQA startup.sh[1289]: Using JRE_HOME:        /usr\n6月 27 12:31:36 BQA startup.sh[1289]: Using CLASSPATH:       /usr/local/tomcat9/bin/bootstrap.jar:/usr/local/tomcat9/bin/tomcat-juli.jar\n6月 27 12:31:36 BQA startup.sh[1289]: Using CATALINA_PID:    /tmp/tomcat/tomcat9.pid\n6月 27 12:31:36 BQA systemd[1]: tomcat.service: Control process exited, code=exited status=2\n6月 27 12:31:36 BQA systemd[1]: Failed to start Tomcat9.\n6月 27 12:31:36 BQA systemd[1]: tomcat.service: Unit entered failed state.\n6月 27 12:31:36 BQA systemd[1]: tomcat.service: Failed with result 'exit-code'.\nroot@BQA:/usr/local/tomcat9/bin# \n")])])]),a("p",[e._v("tomcat start,but met 404, 可能文件有问题,重新安装按照上面的操作步骤.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("org.apache.jasper.JasperException: org.apache.jasper.JasperException: java.lang.ClassNotFoundException: org.apache.jsp.index_jsp\n\torg.apache.jasper.servlet.JspServletWrapper.handleJspException(JspServletWrapper.java:572)\n\torg.apache.jasper.servlet.JspServletWrapper.service(JspServletWrapper.java:390)\n\torg.apache.jasper.servlet.JspServlet.serviceJspFile(JspServlet.java:386)\n\torg.apache.jasper.servlet.JspServlet.service(JspServlet.java:330)\n\tjavax.servlet.http.HttpServlet.service(HttpServlet.java:741)\n\torg.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53)\nRoot Cause\n\norg.apache.jasper.JasperException: java.lang.ClassNotFoundException: org.apache.jsp.index_jsp\n")])])]),a("h3",{attrs:{id:"severe-could-not-contact-localhost-8005-base-port-8005-and-offset-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#severe-could-not-contact-localhost-8005-base-port-8005-and-offset-0","aria-hidden":"true"}},[e._v("#")]),e._v(" SEVERE: Could not contact [localhost:8005] (base port [8005] and offset [0])")]),e._v(" "),a("blockquote"),e._v(" "),a("h3",{attrs:{id:"initial-server-setup-with-debian-9-初始化debian系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-server-setup-with-debian-9-初始化debian系统","aria-hidden":"true"}},[e._v("#")]),e._v(" initial-server-setup-with-debian-9 初始化debian系统")]),e._v(" "),a("blockquote",[a("p",[e._v("建用户和ufw")])]),e._v(" "),a("h4",{attrs:{id:"错误参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误参数","aria-hidden":"true"}},[e._v("#")]),e._v(" -----------------------------------------------------错误参数-----------------------------------------------------------------------------------")]),e._v(" "),a("h3",{attrs:{id:"caused-by-org-springframework-jmx-export-unabletoregistermbeanexception-unable-to-register-mbean-hikaridatasource-null-with-key-datasource-nested-exception-is-javax-management-instancealreadyexistsexception-com-zaxxer-hikari-name-datasource-type-hikaridatasource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caused-by-org-springframework-jmx-export-unabletoregistermbeanexception-unable-to-register-mbean-hikaridatasource-null-with-key-datasource-nested-exception-is-javax-management-instancealreadyexistsexception-com-zaxxer-hikari-name-datasource-type-hikaridatasource","aria-hidden":"true"}},[e._v("#")]),e._v(" Caused by: org.springframework.jmx.export.UnableToRegisterMBeanException: Unable to register MBean [HikariDataSource (null)] with key 'dataSource'; nested exception is javax.management.InstanceAlreadyExistsException: com.zaxxer.hikari:name=dataSource,type=HikariDataSource")]),e._v(" "),a("h1",{attrs:{id:"同一个tomcat容器部署多个war包报错：-unable-to-register-mbean-hikaridatasource-null-with-key-datasource-nested-exception-is-javax-management-instancealreadyexistsexception"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同一个tomcat容器部署多个war包报错：-unable-to-register-mbean-hikaridatasource-null-with-key-datasource-nested-exception-is-javax-management-instancealreadyexistsexception","aria-hidden":"true"}},[e._v("#")]),e._v(" 同一个tomcat容器部署多个war包报错： : Unable to register MBean [HikariDataSource (null)] with key 'dataSource'; nested exception is javax.management.InstanceAlreadyExistsException:")]),e._v(" "),a("p",[e._v("spring.jmx.enabled=true\nspring.jmx.default-domain=com.yitieyilu.core")]),e._v(" "),a("h3",{attrs:{id:"the-web-application-to-have-started-a-thread-named-abandoned-connection-cleanup-thread-but-has-failed-to-stop-it-this-is-very-likely-to-create-a-memory-leak-stack-trace-of-thread"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-web-application-to-have-started-a-thread-named-abandoned-connection-cleanup-thread-but-has-failed-to-stop-it-this-is-very-likely-to-create-a-memory-leak-stack-trace-of-thread","aria-hidden":"true"}},[e._v("#")]),e._v(" The web application to have started a thread named [Abandoned connection cleanup thread] but has failed to stop it. This is very likely to create a memory leak. Stack trace of thread:")]),e._v(" "),a("blockquote",[a("p",[e._v("将jdbcjar改成provide放在tomcat的lib目录")])]),e._v(" "),a("h3",{attrs:{id:"tomcat-this-web-application-instance-has-been-stopped-already-could-not-load-the-following-stack-trace-is-thrown-for-debugging-purposes-as-well-as-to-attempt-to-terminate-the-thread-which-caused-the-illegal-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat-this-web-application-instance-has-been-stopped-already-could-not-load-the-following-stack-trace-is-thrown-for-debugging-purposes-as-well-as-to-attempt-to-terminate-the-thread-which-caused-the-illegal-access","aria-hidden":"true"}},[e._v("#")]),e._v(" tomcat this web application instance has been stopped already. Could not load []. The following stack trace is thrown for debugging purposes as well as to attempt to terminate the thread which caused the illegal access.")]),e._v(" "),a("blockquote",[a("p",[e._v("重启tomcat，缓存的问题")])])],1)},[],!1,null,null,null);t.default=o.exports}}]);