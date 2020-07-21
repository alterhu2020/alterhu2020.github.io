---
title: Tomcat Linux安装及其环境配置
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>


[[toc]]

## apr安装配置

### 1. windows环境配置

如果springboot开启apr模式后报错如下:
```
Caused by: org.apache.catalina.LifecycleException: The configured protocol [org.apache.coyote.http11.Http11AprProtocol] requires the APR/native library which is not available
```
则需要在classpath中添加`tcnative-1.dll`文件，该文件存在tomcat的安装包中的`bin`目录下面也可以单独下载`tomcat-native`(http://archive.apache.org/dist/tomcat/tomcat-connectors/native/)包，推荐第一种方式下载tomcat安装包。

```
$ wget https://mirrors.gigenet.com/apache/tomcat/tomcat-9/v9.0.36/bin/apache-tomcat-9.0.36-windows-x64.zip
$ tar zxvf apache-tomcat-9.0.36-windows-x64.zip
$ cd apache-tomcat-9.0.36-windows-x64/bin
# 复制tcnative-1.dll到jdk的bin目录下，重启项目即可。
```

### 2. Linux环境配置

- 2.1 下载资源

1. 进入apr地址: <http://apr.apache.org/download.cgi>,里面有三个包： apr, apr-util,apr-iconv,把这三个包都安装了。

```
$ mkdir apr
$ wget https://mirrors.ocf.berkeley.edu/apache//apr/apr-1.7.0.tar.gz
$ wget https://mirrors.ocf.berkeley.edu/apache//apr/apr-util-1.6.1.tar.gz
$ wget https://mirrors.ocf.berkeley.edu/apache//apr/apr-iconv-1.2.2.tar.gz
#获取运行tomcat（无论内置还是外置，对应tomcat版本下的/bin/tomcat-native.tar.gz文件 ）
$ wget https://apache.osuosl.org/tomcat/tomcat-9/v9.0.36/bin/apache-tomcat-9.0.36.tar.gz

$ tar zxvf apr-1.7.0.tar.gz
$ tar zxvf apr-util-1.6.1.tar.gz
$ tar zxvf apr-iconv-1.2.2.tar.gz

$ tar zxvf apache-tomcat-9.0.36.tar.gz
$ cd apache-tomcat-9.0.36/bin
$ tar zxvf tomcat-native.tar.gz
```

- 2.2 安装APR

```
$ cd apr-1.7.0
$ ./configure --prefix=/usr/local/apr
$ make && make install

$ cd ../apr-util-1.6.1
$ ./configure --prefix=/usr/local/apr-util --with-apr=/usr/local/apr
#若报类似#include <expat.h>错误，需要复制expat下的lib到对应的apr-util-1.6.1/xml/expat/lib目录，命令如下:
$ wget https://github.com/libexpat/libexpat/releases/download/R_2_2_9/expat-2.2.9.tar.gz
$ tar zxvf expat-2.2.9.tar.gz
$ ./configure --prefix=/usr/local/expat/2_2_9
$ make && make install
// /usr/local/bin
# ln -s /usr/local/expat/2_2_9/bin/xmlwf /usr/local/bin/

// /usr/local/include
# ln -s /usr/local/expat/2_2_9/include/expat.h /usr/local/include/
# ln -s /usr/local/expat/2_2_9/include/expat_config.h /usr/local/include/
# ln -s /usr/local/expat/2_2_9/include/expat_external.h /usr/local/include/

// /usr/local/lib
# ln -s  /usr/local/expat/2_2_9/lib/libexpat.a /usr/local/lib/
# ln -s  /usr/local/expat/2_2_9/lib/libexpat.la /usr/local/lib/
# ln -s  /usr/local/expat/2_2_9/lib/libexpat.so /usr/local/lib/
# ln -s  /usr/local/expat/2_2_9/lib/libexpat.so.1 /usr/local/lib/
# ln -s  /usr/local/expat/2_2_9/lib/libexpat.so.1.6.9 /usr/local/lib/

// /usr/local/lib/pkgconfig
# ln -s /usr/local/expat/2_2_9/lib/pkgconfig/expat.pc /usr/local/lib/pkgconfig/

$ make && make install

$ cd ../apr-iconv-1.2.2
$ ./configure --prefix=/usr/local/apr-iconv --with-apr=/usr/local/apr
$ make && make install

$ sudo apt-get install libapr1-dev libssl-dev
$ cd ../apache-tomcat-9.0.36/bin/tomcat-native-1.2.24-src/native/
$ sudo make clean
$ ./configure --prefix=/usr/local/apr --with-apr=/usr/local/apr -with-ssl=yes --with-java-home=/opt/jdk/jdk-11.0.6+10
#若报类似#include <expat.h>错误，按照上面的操作安装expat
$ make && make install
#注意：要求系统OpenSSL library version >= 1.0.2
#若版本太低，安装native会报错。
  
openssl version
  
#以下是安装openssl操作。若版本已达到1.0.2可以不用参考。
#########################################################
下载openssl
wget https://www.openssl.org/source/openssl-1.0.2j.tar.gz
tar zxvf openssl-1.0.2j.tar.gz
cd openssl
./config --prefix=/usr/local/openssl -fPIC
make && make install
mv /usr/bin/openssl ~   //备份
ln -s /usr/local/openssl/bin/openssl /usr/bin/openssl //替换最新openssl执行文件
openssl version  //查看openssl版本是否已替换
  
#安装成功后，可再次执行tomcat-native

```

- 2.3配置环境变量

```
$ nano /etc/profile
#添加：export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/apr/lib

$ nano /etc/bashrc
#添加：export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/apr/lib

$ source /etc/profile
$ source /etc/bashrc

```

 ### 可能遇到的apr问题

apache.catalina.core.AprLifecycleListener [175] : Failed to initialize the SSLEngine.
org.apache.tomcat.jni.Error: 70023: This function has not been implemented on this platform

需要安装对应的包： `sudo apt-get install libapr1-dev libssl-dev`, 然后在`tomcat-native-1.2.24-src/native/`中重新编译：
```
$ sudo make clean
$ ./configure 
$ make && make install
```



## JDK 和 tomcat 安装[更新到2019年8月10日]


[JDK安装步骤参考](https://www.digitalocean.com/community/tutorials/install-tomcat-9-debian-9)

1. JDK11安装步骤
```
$ 进入Jenkins目录：https://github.com/AdoptOpenJDK/openjdk11-binaries/releases/download/jdk-11.0.8%2B10/OpenJDK11U-jdk_x64_linux_hotspot_11.0.8_10.tar.gz
$  tar -zxvf OpenJDK11U-jdk_x64_linux_hotspot_11.0.8_10.tar.gz
$ nano /etc/profile
export JAVA_HOME=/opt/jdk-11.0.8+10
export PATH=$JAVA_HOME/bin:$PATH

$ . /etc/profile
$ java -version
```

2. JDK8安装步骤
```shell
$  wget  https://download.oracle.com/otn-pub/java/jdk/8u191-b12/2787e4a523244c269598db4e85c51e0c/jdk-8u191-linux-x64.tar.gz
$  mkdir /opt/jdk
$  tar -C /opt/jdk  -zxf /home/jdk-8u191-linux-x64.tar.gz
$  update-alternatives --install /usr/bin/java java /opt/jdk/jdk1.8.0_191/bin/java 1
$  update-alternatives --install /usr/bin/javac javac /opt/jdk/jdk1.8.0_191/bin/javac 1
$  java -version
$  javac 
```


```
$  wget http://mirrors.advancedhosters.com/apache/tomcat/tomcat-9/v9.0.14/bin/apache-tomcat-9.0.14.tar.gz
$  useradd -rs /bin/false tomcat 注意如果部署到nginx最好这个用户是nginx的用户www-data用户，这样创建文件的时候UMask不会错误。
$  mkdir /opt/tomcat
$  chown -R www-data:www-data apache-tomcat
```

## tomcat启动脚本
```
[Unit]
Description=Tomcat9
After=network.target

[Service]
Type=forking
User=www-data
Group=www-data
# 创建文件的默认属性设置
UMask=0022

Environment=CATALINA_PID=/opt/tomcat/apache-tomcat-9.0.14/tomcat9.pid
Environment=TOMCAT_JAVA_HOME=/usr/bin/java
Environment=CATALINA_HOME=/opt/tomcat/apache-tomcat-9.0.14
Environment=CATALINA_BASE=/opt/tomcat/apache-tomcat-9.0.14
Environment=CATALINA_OPTS=
Environment="JAVA_OPTS=-Dfile.encoding=UTF-8 -Dnet.sf.ehcache.skipUpdateCheck=true -XX:+UseConcMarkSweepGC -XX:+CMSClassUnloadingEnabled -XX:+UseParNewGC -XX:MaxPermSize=528m -Xms512m -Xmx512m"

ExecStart=/opt/tomcat/apache-tomcat-9.0.14/bin/startup.sh
ExecStop=/bin/kill -15 $MAINPID

# 重启参数
RestartSec=10
Restart=always

[Install]
WantedBy=multi-user.target
```

## 查看tomcat启动状态

```
# systemctl daemon-reload
# systemctl start tomcat
# systemctl enable tomcat
# tail -f -n 150 /opt/tomcat/apache-tomcat-9.0.14/logs/catalina.2018-12-24.log

## Systemctl error
systemctl failed error log: 
> journalctl -xe
```

## `setenv.sh`文件 配置tomcat于`springboot`的profile参数

```
# REM 切换不同的spring环境
# SET JAVA_OPTS=%JAVA_OPTS% -Dspring.profiles.active=dev
#  ----------------------------------linux 配置脚本 -------------------------------------------------
# REM 参考地址： https://www.javacodegeeks.com/2012/06/spring-31-profiles-and-tomcat.html, 设置内存
JAVA_OPTS="$JAVA_OPTS -Xms2512M -Xmx2512M -XX:PermSize=64M -XX:MaxNewSize=128M -XX:MaxPermSize=128M -Dspring.profiles.active=prod"
# REM 参考文档： https://stackoverflow.com/questions/18812762/the-apr-based-apache-tomcat-native-library-was-not-found-on-the-java-library-pat
# REM 错误信息： The APR based Apache Tomcat Native library was not found on the java.library.path
# REM 配置脚本： 下面的是针对Linux环境的，默认安装apr和tomcat-native包后的地址，Linux安装步骤参考gist中说明
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/apr/lib
```

## tomcat的配置，配置BIO/NIO,也就是最大连接数和处理连接数的线程池的大小：
```
<?xml version="1.0" encoding="UTF-8"?>
<!--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<!-- Note:  A "Server" is not itself a "Container", so you may not
     define subcomponents such as "Valves" at this level.
     Documentation at /docs/config/server.html
 -->
<Server port="8005" shutdown="SHUTDOWN">
  <Listener className="org.apache.catalina.startup.VersionLoggerListener" />
  <!-- Security listener. Documentation at /docs/config/listeners.html
  <Listener className="org.apache.catalina.security.SecurityListener" />
  -->
  <!--APR library loader. Documentation at /docs/apr.html -->
  <Listener className="org.apache.catalina.core.AprLifecycleListener" SSLEngine="on" />
  <!-- Prevent memory leaks due to use of particular java/javax APIs-->
  <Listener className="org.apache.catalina.core.JreMemoryLeakPreventionListener" />
  <Listener className="org.apache.catalina.mbeans.GlobalResourcesLifecycleListener" />
  <Listener className="org.apache.catalina.core.ThreadLocalLeakPreventionListener" />

  <!-- Global JNDI resources
       Documentation at /docs/jndi-resources-howto.html
  -->
  <GlobalNamingResources>
    <!-- Editable user database that can also be used by
         UserDatabaseRealm to authenticate users
    -->
    <Resource name="UserDatabase" auth="Container"
              type="org.apache.catalina.UserDatabase"
              description="User database that can be updated and saved"
              factory="org.apache.catalina.users.MemoryUserDatabaseFactory"
              pathname="conf/tomcat-users.xml" />
  </GlobalNamingResources>

  <!-- A "Service" is a collection of one or more "Connectors" that share
       a single "Container" Note:  A "Service" is not itself a "Container",
       so you may not define subcomponents such as "Valves" at this level.
       Documentation at /docs/config/service.html
   -->
  <Service name="Catalina">
    <!-- <Executor name="tomcatThreadPool" 
        namePrefix="tomcat-thread-"
        maxThreads="200"
        minSpareThreads="4"/> -->
 
    <!-- A "Connector" represents an endpoint by which requests are received
         and responses are returned. Documentation at :
         Java HTTP Connector: /docs/config/http.html
         Java AJP  Connector: /docs/config/ajp.html
         APR (HTTP/AJP) Connector: /docs/apr.html
         Define a non-SSL/TLS HTTP/1.1 Connector on port 8080
         参考文档参数： https://tomcat.apache.org/tomcat-9.0-doc/config/http.html
         采用线程池的技术来控制tomcat，不用再重新开启一个线程针对每个http请求
          1. maxThreads default=200，代表初始的处理器请求的线程池大小，worker数量 ,并发数量
          2. minSpareThreads default=25, 空闲使用中的线程池数量
          3. maxConnections 允许的最多tcp连接数
          4. acceptCount 超过maxConnections后运行的最多客户端         
    -->
    <Connector 
               port="8080" protocol="org.apache.coyote.http11.Http11NioProtocol"
               maxConnections="20000"
               acceptCount="100"
               maxThreads="1000"
               minSpareThreads="4"
               connectionTimeout="20000"
               redirectPort="8443" />
    <!-- A "Connector" using the shared thread pool-->
    <!--
    <Connector executor="tomcatThreadPool"
               port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" />
    -->
    <!-- Define a SSL/TLS HTTP/1.1 Connector on port 8443
         This connector uses the NIO implementation. The default
         SSLImplementation will depend on the presence of the APR/native
         library and the useOpenSSL attribute of the
         AprLifecycleListener.
         Either JSSE or OpenSSL style configuration may be used regardless of
         the SSLImplementation selected. JSSE style configuration is used below.
    -->
    <!--
    <Connector port="8443" protocol="org.apache.coyote.http11.Http11NioProtocol"
               maxThreads="150" SSLEnabled="true">
        <SSLHostConfig>
            <Certificate certificateKeystoreFile="conf/localhost-rsa.jks"
                         type="RSA" />
        </SSLHostConfig>
    </Connector>
    -->
    <!-- Define a SSL/TLS HTTP/1.1 Connector on port 8443 with HTTP/2
         This connector uses the APR/native implementation which always uses
         OpenSSL for TLS.
         Either JSSE or OpenSSL style configuration may be used. OpenSSL style
         configuration is used below.
    -->
    <!--
    <Connector port="8443" protocol="org.apache.coyote.http11.Http11AprProtocol"
               maxThreads="150" SSLEnabled="true" >
        <UpgradeProtocol className="org.apache.coyote.http2.Http2Protocol" />
        <SSLHostConfig>
            <Certificate certificateKeyFile="conf/localhost-rsa-key.pem"
                         certificateFile="conf/localhost-rsa-cert.pem"
                         certificateChainFile="conf/localhost-rsa-chain.pem"
                         type="RSA" />
        </SSLHostConfig>
    </Connector>
    -->

    <!-- Define an AJP 1.3 Connector on port 8009 -->
    <Connector port="8009" protocol="AJP/1.3" redirectPort="8443" />


    <!-- An Engine represents the entry point (within Catalina) that processes
         every request.  The Engine implementation for Tomcat stand alone
         analyzes the HTTP headers included with the request, and passes them
         on to the appropriate Host (virtual host).
         Documentation at /docs/config/engine.html -->

    <!-- You should set jvmRoute to support load-balancing via AJP ie :
    <Engine name="Catalina" defaultHost="localhost" jvmRoute="jvm1">
    -->
    <Engine name="Catalina" defaultHost="localhost">

      <!--For clustering, please take a look at documentation at:
          /docs/cluster-howto.html  (simple how to)
          /docs/config/cluster.html (reference documentation) -->
      <!--
      <Cluster className="org.apache.catalina.ha.tcp.SimpleTcpCluster"/>
      -->

      <!-- Use the LockOutRealm to prevent attempts to guess user passwords
           via a brute-force attack -->
      <Realm className="org.apache.catalina.realm.LockOutRealm">
        <!-- This Realm uses the UserDatabase configured in the global JNDI
             resources under the key "UserDatabase".  Any edits
             that are performed against this UserDatabase are immediately
             available for use by the Realm.  -->
        <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
               resourceName="UserDatabase"/>
      </Realm>

      <Host name="localhost"  appBase="/www/yitieyilu.com/yitieyiluopen"
            unpackWARs="true" autoDeploy="true">

        <!-- SingleSignOn valve, share authentication between web applications
             Documentation at: /docs/config/valve.html -->
        <!--
        <Valve className="org.apache.catalina.authenticator.SingleSignOn" />
        -->

        <!-- Access log processes all example.
             Documentation at: /docs/config/valve.html
             Note: The pattern used is equivalent to using pattern="common" -->
        <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
               prefix="localhost_access_log" suffix=".txt"
               pattern="%h %l %u %t &quot;%r&quot; %s %b" />
        
        <!-- 对应所有的安装包文件, 此处不配置-->

      </Host>
    </Engine>
  </Service>
</Server>

```

https://linuxconfig.org/how-to-install-tomcat-9-on-debian-9-stretch-linux 推荐操作步骤
https://gist.github.com/jniltinho/a7bd30288342a5d352e6, 这里的tomcat.service中的`CATALINA_OPTS`配置可能导致不能启动tomcat

tomcat install failed:
```
 systemctl status tomcat
● tomcat.service - Tomcat9
   Loaded: loaded (/etc/systemd/system/tomcat.service; enabled; vendor preset: enabled)
   Active: failed (Result: exit-code) since Wed 2018-06-27 12:31:36 CST; 13s ago
  Process: 1289 ExecStart=/usr/local/tomcat9/bin/startup.sh (code=exited, status=2)

6月 27 12:31:36 BQA startup.sh[1289]: Using CATALINA_BASE:   /usr/local/tomcat9
6月 27 12:31:36 BQA startup.sh[1289]: Using CATALINA_HOME:   /usr/local/tomcat9
6月 27 12:31:36 BQA startup.sh[1289]: Using CATALINA_TMPDIR: /usr/local/tomcat9/temp
6月 27 12:31:36 BQA startup.sh[1289]: Using JRE_HOME:        /usr
6月 27 12:31:36 BQA startup.sh[1289]: Using CLASSPATH:       /usr/local/tomcat9/bin/bootstrap.jar:/usr/local/tomcat9/bin/tomcat-juli.jar
6月 27 12:31:36 BQA startup.sh[1289]: Using CATALINA_PID:    /tmp/tomcat/tomcat9.pid
6月 27 12:31:36 BQA systemd[1]: tomcat.service: Control process exited, code=exited status=2
6月 27 12:31:36 BQA systemd[1]: Failed to start Tomcat9.
6月 27 12:31:36 BQA systemd[1]: tomcat.service: Unit entered failed state.
6月 27 12:31:36 BQA systemd[1]: tomcat.service: Failed with result 'exit-code'.
root@BQA:/usr/local/tomcat9/bin# 
````

tomcat start,but met 404, 可能文件有问题,重新安装按照上面的操作步骤.
```
org.apache.jasper.JasperException: org.apache.jasper.JasperException: java.lang.ClassNotFoundException: org.apache.jsp.index_jsp
	org.apache.jasper.servlet.JspServletWrapper.handleJspException(JspServletWrapper.java:572)
	org.apache.jasper.servlet.JspServletWrapper.service(JspServletWrapper.java:390)
	org.apache.jasper.servlet.JspServlet.serviceJspFile(JspServlet.java:386)
	org.apache.jasper.servlet.JspServlet.service(JspServlet.java:330)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:741)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53)
Root Cause

org.apache.jasper.JasperException: java.lang.ClassNotFoundException: org.apache.jsp.index_jsp
```
###  SEVERE: Could not contact [localhost:8005] (base port [8005] and offset [0])
>

### initial-server-setup-with-debian-9 初始化debian系统
> 建用户和ufw

### -----------------------------------------------------错误参数------------------------------------------

### Caused by: org.springframework.jmx.export.UnableToRegisterMBeanException: Unable to register MBean [HikariDataSource (null)] with key 'dataSource'; nested exception is javax.management.InstanceAlreadyExistsException: com.zaxxer.hikari:name=dataSource,type=HikariDataSource

### Unable to register MBean [HikariDataSource (null)] with key 'dataSource'; nested exception is javax.management.InstanceAlreadyExistsException:

spring.jmx.enabled=true
spring.jmx.default-domain=com.yitieyilu.core

### The web application to have started a thread named [Abandoned connection cleanup thread] but has failed to stop it. This is very likely to create a memory leak. Stack trace of thread:

> 将jdbcjar改成provide放在tomcat的lib目录

### tomcat this web application instance has been stopped already. Could not load []. The following stack trace is thrown for debugging purposes as well as to attempt to terminate the thread which caused the illegal access.

> 重启tomcat，缓存的问题

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>
