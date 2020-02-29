(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{311:function(s,e,a){"use strict";a.r(e);var t=a(9),n=Object(t.a)({},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ClientOnly",[a("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#安装命令"}},[s._v("安装命令")])]),a("li",[a("a",{attrs:{href:"#配置mysql"}},[s._v("配置mysql")])]),a("li",[a("a",{attrs:{href:"#配置参数"}},[s._v("配置参数")])]),a("li",[a("a",{attrs:{href:"#添加数据库和用户-包括修改用户密码"}},[s._v("添加数据库和用户(包括修改用户密码)")])]),a("li",[a("a",{attrs:{href:"#读写分离配置"}},[s._v("读写分离配置")])]),a("li",[a("a",{attrs:{href:"#卸载mysql操作"}},[s._v("卸载mysql操作")])]),a("li",[a("a",{attrs:{href:"#安装错误异常"}},[s._v("安装错误异常")])])])]),a("p"),s._v(" "),a("h1",{attrs:{id:"安装步骤如下命令："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤如下命令：","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装步骤如下命令：")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("mysql安装密码问题")]),s._v(" "),a("ol",[a("li",[s._v("安装的时候注意选择legecal password,否则wordpress不能访问mysql8数据库")]),s._v(" "),a("li",[s._v("如果是raspberry,则必须安装mariadb")])])]),s._v(" "),a("h2",{attrs:{id:"安装命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装命令")]),s._v(" "),a("p",[a("strong",[s._v("1. mysql8安装")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ apt-get install lsb-release\n$ wget https://dev.mysql.com/get/mysql-apt-config_0.8.13-1_all.deb\n$ sudo dpkg -i mysql-apt-config*\n$ sudo apt-get update\n$ sudo apt-get install mysql-server\n")])])]),a("p",[a("strong",[s._v("2. mariadb安装")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo apt update\n$ sudo apt install mariadb-server\n$ sudo systemctl status mariadb\n// 如果不先设置mysql的密码策略登录的时候会包错误: ERROR 1698 (28000): Access denied for user 'root'@'localhost'\n$ mysql -u root -p (直接不输入密码)\n\n> SELECT User, Host, plugin FROM mysql.user;\n> UPDATE user SET plugin='mysql_native_password' WHERE User='root';\n> FLUSH PRIVILEGES;\n> update mysql.user set authentication_string=PASSWORD('m3s1l@#3!'), plugin='mysql_native_password' where user='root';\n> FLUSH PRIVILEGES;\n\n")])])]),a("h2",{attrs:{id:"配置mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置mysql")]),s._v(" "),a("p",[s._v("在mysql或者mariadb上运行如下命令进行配置数据库:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo mysql_secure_installation\n\n")])])]),a("h2",{attrs:{id:"配置参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置参数","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置参数")]),s._v(" "),a("p",[a("strong",[s._v("1. mysql配置")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf\n")])])]),a("p",[a("strong",[s._v("2. mariadb安装")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo /etc/mysql/mariadb.conf.d/50-server.cnf\n\n")])])]),a("p",[a("strong",[s._v("修改以上的配置文件,注意一定要在"),a("code",[s._v("mysqld")]),s._v("区域放入以下的配置信息:")])]),s._v(" "),a("ol",[a("li",[a("code",[s._v("master")]),s._v("主数据库写数据<通用配置>:")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("default-time-zone='+08:00'\n# The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake. The default value is 10 seconds.\n# 所有的参数列表： https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html\nconnect_timeout =100\n# 默认 28800，8小时\n#当一个连接的空闲时间超过8小时后，MySQL 就会断开该连接，而 c3p0/dbcp 连接池则以为该被断开的连接依然有效。MySQL server has gone away\nwait_timeout=100\n#默认 28800，8小时\ninteractive_timeout=100\n# MySQL默认的最大连接数为100，MySQL服务器支持允许的最大连接数16384\n#对mysql初始化内存影响这么大\n# 如果设置的太小： 1040-Too many connections，例如当前Max_used_connections=98也会出现这个错误：\n# 所以合理的设置是： Max_used_connections / max_connections * 100% ≈ 85%\n# 参考\nmax_connections=1000\nmax_user_connections=850\n\n# 设置用户密码加密方式\ndefault_authentication_plugin=mysql_native_password\nlog_bin_trust_function_creators=1\n# 配置主从复制\nlog-bin=mysql-bin\nserver-id=1\n# 配置慢查询\nslow_query_log = ON\nslow_query_log_file = /logs/mysql/slow.log\n\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[s._v("slave")]),s._v("从数据库读数据库(可选):")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("default-time-zone='+08:00'\n# The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake. The default value is 10 seconds.\n# 所有的参数列表： https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html\nconnect_timeout =100\n# 默认 28800，8小时\n#当一个连接的空闲时间超过8小时后，MySQL 就会断开该连接，而 c3p0/dbcp 连接池则以为该被断开的连接依然有效。MySQL server has gone away\nwait_timeout=100\n#默认 28800，8小时\ninteractive_timeout=100\n# MySQL默认的最大连接数为100，MySQL服务器支持允许的最大连接数16384\n#对mysql初始化内存影响这么大\n# 如果设置的太小： 1040-Too many connections，例如当前Max_used_connections=98也会出现这个错误：\n# 所以合理的设置是： Max_used_connections / max_connections * 100% ≈ 85%\n# 参考\nmax_connections=1000\nmax_user_connections=850\n\n# 设置默认户密码加密方式\ndefault_authentication_plugin=mysql_native_password\nlog_bin_trust_function_creators=1\n# 配置主从复制数据库,为了更好主从复制(io进程和sql进程的操作)低延迟，关闭binlog等\nserver-id=2\nskip-log-bin\n# 配置慢查询\nslow_query_log = ON\nslow_query_log_file = /logs/mysql/slow.log\n\n")])])]),a("h2",{attrs:{id:"添加数据库和用户-包括修改用户密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加数据库和用户-包括修改用户密码","aria-hidden":"true"}},[s._v("#")]),s._v(" 添加数据库和用户(包括修改用户密码)")]),s._v(" "),a("p",[s._v("logged in mysql using "),a("code",[s._v("root / xxx")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ create database abc;\n$ create user 'syscorer'@'%' identified by 'xxxxxx'; \n$ GRANT ALL PRIVILEGES ON *.* TO 'syscorer'@'%'; \n\n--- 以下可能是mysql通用的\n$ GRANT ALL PRIVILEGES ON *.* TO 'syscorer'@'%' IDENTIFIED BY 'xxxxxx' WITH GRANT OPTION;\n$ GRANT ALL PRIVILEGES ON heap_stack.* TO 'syscorer'@'%'  WITH GRANT OPTION;\n\n更改mysql用户密码:\n$ alter user 'syscorer'@'%' identified by 'xxxxxx1026A5yC1S';\n$ flush privileges;\n")])])]),a("h2",{attrs:{id:"读写分离配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读写分离配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 读写分离配置")]),s._v(" "),a("ol",[a("li",[s._v("配置读写分离的数据库用户:")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" 1.1 master数据库中执行如下命令: \n \n mysql>  CREATE USER 'repdev'@'%' IDENTIFIED WITH mysql_native_password BY 'xxx';\n mysql>  GRANT REPLICATION SLAVE ON *.* TO 'repdev'@'%';\n mysql>  flush privileges;\n \n mysql> SHOW MASTER STATUS;\n+------------------+----------+--------------+------------------+-------------------+\n| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |\n+------------------+----------+--------------+------------------+-------------------+\n| mysql-bin.000001 |     2035 |              |                  |                   |\n+------------------+----------+--------------+------------------+-------------------+\n1 row in set (0.00 sec)\n\n\n 1.2 slave节点数据库:   注意MASTER_LOG_FILE和MASTER_LOG_POS是master的正确值,命令如下:\n\nmysql> stop slave;\n\nmysql>  CHANGE MASTER TO\nMASTER_HOST='47.101.187.237',\nMASTER_PORT=1876,\nMASTER_USER='repdev',\nMASTER_PASSWORD='xxx',\nMASTER_LOG_FILE='mysql-bin.000001',\nMASTER_LOG_POS=2035;\n\nmysql> start slave; \nmysql> show slave status\\G;\n\n如果显示的:  Seconds_Behind_Master(主从延时),  Slave_IO_Running=Yes, Slave_SQL_Running=Yes\n\n# 修改对应的slave对应的master的log-bin文件\nMysql> CHANGE MASTER TO MASTER_LOG_FILE='mysql-bin.000003',MASTER_LOG_POS=342;\n")])])]),a("p",[s._v("说明:  Seconds_Behind_Master参数值\nNULL - 表示io_thread或是sql_thread有任何一个发生故障，也就是该线程的Running状态是No,而非Yes.\n0 - 该值为零，是我们极为渴望看到的情况，表示主从复制良好，可以认为lag不存在。")]),s._v(" "),a("h2",{attrs:{id:"卸载mysql操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载mysql操作","aria-hidden":"true"}},[s._v("#")]),s._v(" 卸载mysql操作")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo apt remove mysql-server\n$ sudo apt purge mysql-server\n$ sudo apt autoremove\n$ sudo find / -name mysql\n\n")])])]),a("h2",{attrs:{id:"安装错误异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装错误异常","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装错误异常")]),s._v(" "),a("blockquote",[a("p",[s._v("error processing package mysql-community-server (--configure):\ndependency problems - leaving unconfigured")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo apt --yes autoremove --purge mysql-server\n$ sudo apt --yes autoremove --purge mysql-client\n$ sudo rm /var/lib/mysql/ -R\n$ sudo rm /etc/mysql/ -R\n$ sudo apt-get autoremove mysql* --purge\n$ sudo apt-get remove apparmor\n$ sudo apt-get install mysql-server mysql-common\n")])])])],1)},[],!1,null,null,null);e.default=n.exports}}]);