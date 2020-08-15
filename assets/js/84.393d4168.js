(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{338:function(e,s,t){"use strict";t.r(s);var a=t(9),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ClientOnly",[t("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#安装命令"}},[e._v("安装命令")])]),t("li",[t("a",{attrs:{href:"#mysqld-cnf配置参数"}},[e._v("mysqld.cnf配置参数")])]),t("li",[t("a",{attrs:{href:"#配置mysql的用户和密码"}},[e._v("配置mysql的用户和密码")])]),t("li",[t("a",{attrs:{href:"#mysql8数据表大小写敏感（可选-上面第二步已经设置）"}},[e._v("mysql8数据表大小写敏感（可选,上面第二步已经设置）")])]),t("li",[t("a",{attrs:{href:"#读写分离配置"}},[e._v("读写分离配置")]),t("ul",[t("li",[t("a",{attrs:{href:"#读写分离报错问题"}},[e._v("读写分离报错问题")])])])]),t("li",[t("a",{attrs:{href:"#忘记root密码重置root密码"}},[e._v("忘记root密码重置root密码")])]),t("li",[t("a",{attrs:{href:"#卸载mysql操作"}},[e._v("卸载mysql操作")])]),t("li",[t("a",{attrs:{href:"#安装错误异常"}},[e._v("安装错误异常")])]),t("li",[t("a",{attrs:{href:"#mysql8备份还原从数据文件，-backup-restore"}},[e._v("mysql8备份还原从数据文件， backup, restore")])]),t("li",[t("a",{attrs:{href:"#navicat连接mysql-navicat-received-invalid-response-to-ssl-negotiation-j"}},[e._v("navicat连接mysql: navicat received invalid response to SSL negotiation: j")])]),t("li",[t("a",{attrs:{href:"#mysql字符集和排序规则"}},[e._v("mysql字符集和排序规则")])]),t("li",[t("a",{attrs:{href:"#mysql密码策略不满足"}},[e._v("mysql密码策略不满足")])]),t("li",[t("a",{attrs:{href:"#could-not-open-or-create-the-system-tablespace-if-you-tried-to-add-new-data-files-to-the-system-tablespace-and-it-failed-here-you-should-now-edit-innodb-data-file-path-in-my-cnf-back-to-what-it-was-and-remove-the-new-ibdata-files-innodb-created-in-this-failed-attempt-innodb-only-wrote-those-files-full-of-zeros-but-did-not-yet-use-them-in-any-way-but-be-careful-do-not-remove-old-data-files-which-contain-your-precious-data"}},[e._v("Could not open or create the system tablespace. If you tried to add new data files to the system tablespace, and it failed here, you should now edit innodbdatafile_path in my.cnf back to what it was, and remove the new ibdata files InnoDB created in this failed attempt. InnoDB only wrote those files full of zeros, but did not yet use them in any way. But be careful: do not remove old data files which contain your precious data")])]),t("li",[t("a",{attrs:{href:"#mysql-shell-脚本using-a-password-on-the-command-line-interface-can-be-insecure"}},[e._v("mysql shell 脚本Using a password on the command line interface can be insecure")])])])]),t("p"),e._v(" "),t("h1",{attrs:{id:"安装步骤如下命令："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤如下命令："}},[e._v("#")]),e._v(" 安装步骤如下命令：")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("mysql安装密码问题")]),e._v(" "),t("ol",[t("li",[e._v("安装的时候注意选择legecal password,否则wordpress不能访问mysql8数据库")]),e._v(" "),t("li",[e._v("如果是raspberry,则必须安装mariadb")])])]),e._v(" "),t("h2",{attrs:{id:"安装命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装命令"}},[e._v("#")]),e._v(" 安装命令")]),e._v(" "),t("p",[t("strong",[e._v("1. mysql8安装，注意配置大小写安装")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ apt-get install lsb-release\n$ wget https://dev.mysql.com/get/mysql-apt-config_0.8.13-1_all.deb\n$ sudo dpkg -i mysql-apt-config*\n$ sudo apt-get update\n$ sudo apt-get install mysql-server mysql-common\n// 配置数据库表大小写敏感配置\n$ sudo systemctl stop mysql.service\n$ sudo rm -rf /var/lib/mysql\n$ 此处需要执行命令: `sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf`,添加下方的配置: ` lower_case_table_names = 1`\n$ sudo systemctl start mysql.service\n\n")])])]),t("p",[t("strong",[e._v("2. mariadb安装")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo apt update\n$ sudo apt install mariadb-server\n$ sudo systemctl status mariadb\n\n")])])]),t("h2",{attrs:{id:"mysqld-cnf配置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysqld-cnf配置参数"}},[e._v("#")]),e._v(" mysqld.cnf配置参数")]),e._v(" "),t("p",[t("strong",[e._v("1. mysql配置文件")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf\n")])])]),t("p",[t("strong",[e._v("2. mariadb配置文件")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo /etc/mysql/mariadb.conf.d/50-server.cnf\n\n")])])]),t("p",[t("strong",[e._v("修改以上的配置文件,注意一定要在"),t("code",[e._v("mysqld")]),e._v("区域放入以下的配置信息:")])]),e._v(" "),t("ol",[t("li",[t("code",[e._v("**master**")]),e._v("主数据库写数据<通用配置>:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("port = 1876\n# 数据表以小写保存，但是比较数据表的时候不区分大小写\nlower_case_table_names=1\ndefault-time-zone='+08:00'\n# The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake. The default value is 10 seconds.\n# 所有的参数列表： https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html\nconnect_timeout =100\n# 默认 28800，8小时\n#当一个连接的空闲时间超过8小时后，MySQL 就会断开该连接，而 c3p0/dbcp 连接池则以为该被断开的连接依然有效。MySQL server has gone away\nwait_timeout=100\n#默认 28800，8小时\ninteractive_timeout=100\n# MySQL默认的最大连接数为100，MySQL服务器支持允许的最大连接数16384\n#对mysql初始化内存影响这么大\n# 如果设置的太小： 1040-Too many connections，例如当前Max_used_connections=98也会出现这个错误：\n# 所以合理的设置是： Max_used_connections / max_connections * 100% ≈ 85%\n# 参考\nmax_connections=1000\nmax_user_connections=850\n\n# 设置用户密码加密方式\ndefault_authentication_plugin=mysql_native_password\nlog_bin_trust_function_creators=1\n# 配置主从复制\nlog-bin=mysql-bin\nserver-id=1\n# 配置慢查询\nslow_query_log = ON\nslow_query_log_file = /logs/mysql/slow.log\n\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[e._v("**slave**")]),e._v("从数据库读数据库(可选):")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("port = 1876\n# 数据表以小写保存，但是比较数据表的时候不区分大小写\nlower_case_table_names=1\ndefault-time-zone='+08:00'\n# The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake. The default value is 10 seconds.\n# 所有的参数列表： https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html\nconnect_timeout =100\n# 默认 28800，8小时\n#当一个连接的空闲时间超过8小时后，MySQL 就会断开该连接，而 c3p0/dbcp 连接池则以为该被断开的连接依然有效。MySQL server has gone away\nwait_timeout=100\n#默认 28800，8小时\ninteractive_timeout=100\n# MySQL默认的最大连接数为100，MySQL服务器支持允许的最大连接数16384\n#对mysql初始化内存影响这么大\n# 如果设置的太小： 1040-Too many connections，例如当前Max_used_connections=98也会出现这个错误：\n# 所以合理的设置是： Max_used_connections / max_connections * 100% ≈ 85%\n# 参考\nmax_connections=1000\nmax_user_connections=850\n\n# 设置默认户密码加密方式\ndefault_authentication_plugin=mysql_native_password\nlog_bin_trust_function_creators=1\n# 配置主从复制数据库,为了更好主从复制(io进程和sql进程的操作)低延迟，关闭binlog等\nserver-id=2\nskip-log-bin\n# 1062 Duplicate entry\n# slave-skip-errors=1062,1053,1146 #跳过指定error no类型的错误\nslave-skip-errors=all #跳过所有错误，这个一定要配置，避免不必要的错误导致主从复制失败\n# 配置慢查询\nslow_query_log = 1\nslow_query_log_file = /logs/mysql/slow.log\nlong_query_time = 5\n")])])]),t("h2",{attrs:{id:"配置mysql的用户和密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置mysql的用户和密码"}},[e._v("#")]),e._v(" 配置mysql的用户和密码")]),e._v(" "),t("p",[e._v("在mysql或者mariadb上运行如下命令进行配置数据库，注意禁止: "),t("strong",[e._v("VALIDATE PASSWORD COMPONENT")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1. 初始化配置数据库\n#  sudo mysql_secure_installation\n\n注意：\n1.  VALIDATE PASSWORD COMPONENT选择为no，这样不用验证password的加密程度\n2.  此处root密码可以随便设置一个，因为下面的第三步会重新设置root密码\n\n-----------------------------------------------\n// 如果不先设置mysql的密码策略登录的时候会包错误: ERROR 1698 (28000): Access denied for user 'root'@'localhost'\n$ mysql -u root -p (直接不输入密码)\n\n2. 查看用户密码设置方式\n> use mysql;\n> SELECT User, Host, plugin FROM mysql.user;\n\n3. 修改root用户密码插件和密码,参考文档： \n1. 推荐文档： https://www.tecmint.com/reset-root-password-in-mysql-8/\n2. 官方文档： https://dev.mysql.com/doc/refman/8.0/en/resetting-permissions.html\n> use mysql;\n> UPDATE mysql.user SET plugin='mysql_native_password' WHERE User='root';\n> ALTER USER 'root'@'localhost' IDENTIFIED BY 'Evxx@90&2qvGJ6Q=';\n> FLUSH PRIVILEGES;\n\n")])])]),t("ClientOnly",[t("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),e._v("\n## 添加数据库和用户(包括修改用户密码)\n"),t("p",[e._v("logged in mysql using "),t("code",[e._v("root / xxx")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1. 创建用户\n> create user 'syscorer'@'%' identified by 'test%'; \n> FLUSH PRIVILEGES;\n\n2. 用户权限赋值\nWITH GRANT OPTION 这个选项表示该用户可以将自己拥有的权限授权给别人。注意：经常有人在创建操作用户的时候不指定WITH GRANT OPTION选项导致后来该用户不能使用GRANT命令创建用户或者给其它用户授权。\n如果不想这个用户有这个grant的权限，可以不加这句\n\n> GRANT ALL PRIVILEGES ON *.* TO 'syscorer'@'%'; \n> GRANT ALL PRIVILEGES ON *.* TO 'syscorer'@'%' WITH GRANT OPTION;\n> FLUSH PRIVILEGES;\n\n3. (可选)修改普通用户密码:\n> update user set password=PASSWORD('cTpofe3IwUuzzuqk5Hw2fg=P*&35XO2@o)=0') where user='tester';\n> FLUSH PRIVILEGES;\n\n4. 授权特定数据库访问权限，例如数据库testdb\n\n> GRANT ALL PRIVILEGES ON wp_data.* TO 'syscorer'@'%' WITH GRANT OPTION;\n> FLUSH PRIVILEGES;\n")])])]),t("h2",{attrs:{id:"mysql8数据表大小写敏感（可选-上面第二步已经设置）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql8数据表大小写敏感（可选-上面第二步已经设置）"}},[e._v("#")]),e._v(" mysql8数据表大小写敏感（可选,上面第二步已经设置）")]),e._v(" "),t("p",[e._v("查看大小写配置，大小写是否敏感:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("show variables where Variable_name='lower_case_table_names';\n\n")])])]),t("p",[e._v("设置"),t("code",[e._v("lower_case_table_names = 1")]),e._v("，以便在数据库中使用不区分大小写的表名。 我编辑了"),t("code",[e._v("/etc/mysql/mysql.conf.d/mysqld.cnf")]),e._v("，并在[mysqld]下添加了上面的配置。收到以下错误:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Job for mysql.service failed because the control process exited with error code.\nSee "systemctl status mysql.service" and "journalctl -xe" for details.\n')])])]),t("p",[e._v("查看mysql的日志文件: "),t("code",[e._v("tail -f -n 100 /var/log/mysql/error.log")]),e._v(",查看MySQL官方文档，有记录：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("lower_case_table_names can only be configured when initializing the server. Changing the lower_case_table_names setting after the server is initialized is prohibited.\n")])])]),t("p",[e._v("只有在初始化的时候设置 lower_case_table_names=1才有效，比如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("--initialize --lower-case-table-names=1\n")])])]),t("h2",{attrs:{id:"读写分离配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读写分离配置"}},[e._v("#")]),e._v(" 读写分离配置")]),e._v(" "),t("ol",[t("li",[e._v("配置读写分离的数据库用户:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" 1.1 master数据库中执行如下命令: \n \n mysql>  CREATE USER 'repdev'@'%' IDENTIFIED WITH mysql_native_password BY 'testh';\n mysql>  GRANT REPLICATION SLAVE ON *.* TO 'repdev'@'%';\n mysql>  flush privileges;\n \n mysql> SHOW MASTER STATUS;\n+------------------+----------+--------------+------------------+-------------------+\n| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |\n+------------------+----------+--------------+------------------+-------------------+\n| mysql-bin.000001 |     2035 |              |                  |                   |\n+------------------+----------+--------------+------------------+-------------------+\n1 row in set (0.00 sec)\n\n\n 1.2 slave节点数据库:   注意MASTER_LOG_FILE和MASTER_LOG_POS是master的正确值,命令如下:\n\nmysql> stop slave;\n\nmysql>  CHANGE MASTER TO\nMASTER_HOST='47.101.187.237',\nMASTER_PORT=1876,\nMASTER_USER='repdev',\nMASTER_PASSWORD='testh',\nMASTER_LOG_FILE='mysql-bin.000009',\nMASTER_LOG_POS=17975043;\n\nmysql> start slave; \nmysql> show slave status\\G;\n\n如果显示的:  Seconds_Behind_Master(主从延时),  Slave_IO_Running=Yes, Slave_SQL_Running=Yes\n\n# 修改对应的slave对应的master的log-bin文件\nMysql> CHANGE MASTER TO MASTER_LOG_FILE='mysql-bin.000003',MASTER_LOG_POS=342;\n")])])]),t("p",[e._v("说明:  Seconds_Behind_Master参数值\nNULL - 表示io_thread或是sql_thread有任何一个发生故障，也就是该线程的Running状态是No,而非Yes.\n0 - 该值为零，是我们极为渴望看到的情况，表示主从复制良好，可以认为lag不存在。")]),e._v(" "),t("h3",{attrs:{id:"读写分离报错问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读写分离报错问题"}},[e._v("#")]),e._v(" 读写分离报错问题")]),e._v(" "),t("p",[e._v("1.记录删除失败 "),t("code",[e._v("Could not execute Delete_rows event on table cvr.sys_user; Can't find record in 'sys_user', Error_code: 1032; handler error HA_ERR_KEY_NOT_FOUND; the event's master log mysql-bin.000005, end_log_pos 46653957")]),e._v("错误\n解决方法：master要删除一条记录，而slave上找不到报错，这种情况主都已经删除了，那么从机可以直接跳过指定数量的错误。\n#将同步指针向下移动一个，如果多次不同步可以重复操作：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("stop slave;set global sql_slave_skip_counter=1;SELECT SLEEP(5);start slave;\n")])])]),t("p",[e._v("If the error is still there, set a bigger value in sql_slave_skip_counter like:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> set global sql_slave_skip_counter=1000;\n")])])]),t("p",[e._v("Again, check the status of the slave.")]),e._v(" "),t("p",[e._v("If you find the skip_sql value is non zero in the slave status then stop the slave again and do:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> set global sql_slave_skip_counter=0;\nmysql> start slave;\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("主键重复"),t("code",[e._v("Last_SQL_Error: Could not execute Write_rows event on table hcy.t1; Duplicate entry '2' for key 'PRIMARY', Error_code: 1062; handler error HA_ERR_FOUND_DUPP_KEY; the event's master log mysql-bin.000006, end_log_pos 924")])])]),e._v(" "),t("p",[e._v("在slave已经有该记录，又在master上插入了同一条记录。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Last_SQL_Error: Could not execute Write_rows event on table hcy.t1; Duplicate entry '2' for key 'PRIMARY', Error_code: 1062; handler error HA_ERR_FOUND_DUPP_KEY; the event's master log mysql-bin.000006, end_log_pos 924\n\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("终极解决所有的主从错误同步问题")])]),e._v(" "),t("p",[e._v("直接在"),t("code",[e._v("mysqld.cnf")]),e._v("文件中配置如下忽略所有的错误:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("slave-skip-errors=all\n")])])]),t("h2",{attrs:{id:"忘记root密码重置root密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#忘记root密码重置root密码"}},[e._v("#")]),e._v(" 忘记root密码重置root密码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo systemctl  stop mysql\nsudo mysqld_safe --skip-grant-tables --skip-networking &\n# 重启一个命令行窗口执行如下命令\nmysql -u root;\nuse mysql;\nSELECT User, Host, plugin FROM mysql.user;\nupdate user set plugin='mysql_native_password' where user='root';\nflush privileges;\nALTER USER 'root'@'localhost' IDENTIFIED BY 'cTpofe3IwUuzzuOq0k5Hw2fg=';\nflush privileges;\n\nreboot\n")])])]),t("p",[e._v("如果报： "),t("code",[e._v("ERROR 1290 (HY000): The MySQL server is running with the --skip-grant-tables option so it cannot execute this statement")]),e._v(",需要执行一下命令: "),t("code",[e._v("flush privileges")]),e._v(",然后再重新执行命令就好了。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# mysql_config_editor set \\\n    --login-path=dev\\\n    --host=localhost \\\n    --user=root \\\n    --password\n# mysql --login-path=dev\n")])])]),t("h2",{attrs:{id:"卸载mysql操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载mysql操作"}},[e._v("#")]),e._v(" 卸载mysql操作")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cd /var/lib/dpkg\n$ sudo mv info info.bak\n$ sudo mkdir info\n$ sudo dpkg --configure -a\n$ sudo apt-get install -f\n$ sudo mv /var/lib/dpkg/info/* /var/lib/dpkg/info.bak\n$ sudo rm -rf /var/lib/dpkg/info\n$ sudo mv /var/lib/dpkg/info.bak /var/lib/dpkg/info\n$ sudo apt remove --purge mysql*\n\n$ sudo apt remove mysql-server\n$ sudo apt purge mysql-server\n$ sudo apt autoremove\n$ sudo find / -name mysql\n\n")])])]),t("h2",{attrs:{id:"安装错误异常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装错误异常"}},[e._v("#")]),e._v(" 安装错误异常")]),e._v(" "),t("blockquote",[t("p",[e._v("error processing package mysql-community-server (--configure):\ndependency problems - leaving unconfigured")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo apt --yes autoremove --purge mysql-server\n$ sudo apt --yes autoremove --purge mysql-client\n$ sudo rm /var/lib/mysql/ -R\n$ sudo rm /etc/mysql/ -R\n$ sudo apt-get autoremove mysql* --purge\n$ sudo apt-get remove apparmor\n$ sudo apt-get install mysql-server mysql-common\n")])])]),t("h2",{attrs:{id:"mysql8备份还原从数据文件，-backup-restore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql8备份还原从数据文件，-backup-restore"}},[e._v("#")]),e._v(" mysql8备份还原从数据文件， backup, restore")]),e._v(" "),t("ol",[t("li",[e._v("（"),t("s",[e._v("以下的操作没有成功")]),e._v("）通常mysql的数据库文件目录为: "),t("strong",[e._v("/var/lib/mysql")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo systemctl stop mysql\n# 复制数据盘的mysql的数据库文件夹（例如：cvr)到新的mysql数据库目录： /var/lib/mysql\n$ sudo cp -R /opt/mysql/cvr /var/lib/mysql/\n# 配置权限\n$ sudo chown -R mysql:mysql /var/lib/mysql/cvr\n$ sudo chmod -R 660 /var/lib/mysql/cvr\n$ sudo chown  mysql:mysql /var/lib/mysql/cvr \n$ sudo chmod 700 /var/lib/mysql/cvr\n\n$ sudo systemctl restart mysql\n$ sudo mysql -u root -p\n> show databases;\n\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("采用sql文件进行恢复数据库,注意不同数据库记得切换下")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ mysql -u root -p cvr < cvr.sql\n")])])]),t("h2",{attrs:{id:"navicat连接mysql-navicat-received-invalid-response-to-ssl-negotiation-j"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navicat连接mysql-navicat-received-invalid-response-to-ssl-negotiation-j"}},[e._v("#")]),e._v(" navicat连接mysql: navicat received invalid response to SSL negotiation: j")]),e._v(" "),t("p",[e._v("最近通过navicat连接mysql遇到一个提示问题： "),t("code",[e._v("navicat received invalid response to SSL negotiation: j")]),e._v(",而通过其他的mysql客户端可以正常连接，比如 dbforge for MYSQL。 很奇怪，所以确定是navicat那里配置出了问题。")]),e._v(" "),t("p",[e._v("网上查了一下一下这个问题，有的说在连接对话框中，查看下SSL和SSH是否勾选了。查了下确认没有勾选，如下：\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20200718092633-2020-07-18.png",alt:"20200718092633-2020-07-18"}}),e._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20200718092659-2020-07-18.png",alt:"20200718092659-2020-07-18"}})]),e._v(" "),t("p",[e._v("我就很奇怪了，于是删除这个连接，重新新建一个连接。点击“测试连接”，居然可以正常连接访问mysql。所以遇到问题时，千万不要钻牛角尖，换个思路看看，没准柳暗花明。")]),e._v(" "),t("h2",{attrs:{id:"mysql字符集和排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql字符集和排序规则"}},[e._v("#")]),e._v(" mysql字符集和排序规则")]),e._v(" "),t("p",[e._v("navicat中新建数据库中回选择对应的"),t("strong",[e._v("字符集")]),e._v("和"),t("strong",[e._v("排序规则")]),e._v("。")]),e._v(" "),t("ul",[t("li",[e._v("字符集，这里只要关注两个：utf8和utf8mb4。字符集以_ci（大小写不敏感）、_cs（大小写敏感）或_bin（二元）结束。")]),e._v(" "),t("li",[e._v("mysql(字符串)排序规则区别")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("名称")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("utf8_bin （utf8mb4_bin）")]),e._v(" "),t("td",[e._v("将字符串中的每一个字符用二进制数据存储，区分大小写。")])]),e._v(" "),t("tr",[t("td",[e._v("utf8_general_ci（utf8mb4_general_ci）")]),e._v(" "),t("td",[e._v("不区分大小写，ci为case insensitive的缩写，即大小写不敏感。")])]),e._v(" "),t("tr",[t("td",[e._v("utf8_general_cs（utf8mb4_general_cs）")]),e._v(" "),t("td",[e._v("区分大小写，cs为case sensitive的缩写，即大小写敏感。")])])])]),e._v(" "),t("p",[e._v("code varchar(20) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '唯一码'")]),e._v(" "),t("h2",{attrs:{id:"mysql密码策略不满足"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql密码策略不满足"}},[e._v("#")]),e._v(" mysql密码策略不满足")]),e._v(" "),t("p",[e._v("ERROR 1819 (HY000): Your password does not satisfy the current policy requirements")]),e._v(" "),t("p",[e._v("使用如下的命令检查mysql密码的验证策略：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SHOW VARIABLES LIKE 'validate_password%';\n")])])]),t("p",[e._v("然后会输出类似如下的结果：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+--------------------------------------+-------+\n| Variable_name                        | Value |\n+--------------------------------------+-------+\n| validate_password.check_user_name    | ON    |\n| validate_password.dictionary_file    |       |\n| validate_password.length             | 8     |\n| validate_password.mixed_case_count   | 1     |\n| validate_password.number_count       | 1     |\n| validate_password.policy             |MEDIUM |\n| validate_password.special_char_count | 1     |\n+--------------------------------------+-------+\n")])])]),t("p",[e._v("如果需要删除这个校验规则，执行如下命令：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> uninstall plugin validate_password;\n")])])]),t("h2",{attrs:{id:"could-not-open-or-create-the-system-tablespace-if-you-tried-to-add-new-data-files-to-the-system-tablespace-and-it-failed-here-you-should-now-edit-innodb-data-file-path-in-my-cnf-back-to-what-it-was-and-remove-the-new-ibdata-files-innodb-created-in-this-failed-attempt-innodb-only-wrote-those-files-full-of-zeros-but-did-not-yet-use-them-in-any-way-but-be-careful-do-not-remove-old-data-files-which-contain-your-precious-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#could-not-open-or-create-the-system-tablespace-if-you-tried-to-add-new-data-files-to-the-system-tablespace-and-it-failed-here-you-should-now-edit-innodb-data-file-path-in-my-cnf-back-to-what-it-was-and-remove-the-new-ibdata-files-innodb-created-in-this-failed-attempt-innodb-only-wrote-those-files-full-of-zeros-but-did-not-yet-use-them-in-any-way-but-be-careful-do-not-remove-old-data-files-which-contain-your-precious-data"}},[e._v("#")]),e._v(" Could not open or create the system tablespace. If you tried to add new data files to the system tablespace, and it failed here, you should now edit innodb_data_file_path in my.cnf back to what it was, and remove the new ibdata files InnoDB created in this failed attempt. InnoDB only wrote those files full of zeros, but did not yet use them in any way. But be careful: do not remove old data files which contain your precious data")]),e._v(" "),t("p",[e._v("进入mysql的数据目录,注意备份：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cd  /var/lib/mysql\n$ rm -rf ib_logfile*\n$ rm -rf ibdata1\n")])])]),t("h2",{attrs:{id:"mysql-shell-脚本using-a-password-on-the-command-line-interface-can-be-insecure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-shell-脚本using-a-password-on-the-command-line-interface-can-be-insecure"}},[e._v("#")]),e._v(" mysql shell 脚本Using a password on the command line interface can be insecure")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);