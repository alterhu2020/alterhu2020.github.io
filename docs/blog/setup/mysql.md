---
title: Debian MYSQL8安装及其环境配置
---

## 安装步骤如下命令：
安装的时候注意选择legecal password,否则wordpress不能访问mysql8数据库

```
$ apt-get install lsb-release
$ wget https://dev.mysql.com/get/mysql-apt-config_0.8.13-1_all.deb
$ sudo dpkg -i mysql-apt-config*
$ sudo apt-get update
$ sudo apt-get install mysql-server

```
`$ sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf`

```
# 修改数据
port        = 4792
default-time-zone='+08:00'
# The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake. The default value is 10 seconds.
# 所有的参数列表： https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html
connect_timeout =100
# 默认 28800，8小时
#当一个连接的空闲时间超过8小时后，MySQL 就会断开该连接，而 c3p0/dbcp 连接池则以为该被断开的连接依然有效。MySQL server has gone away
wait_timeout=100
#默认 28800，8小时
interactive_timeout=100
# MySQL默认的最大连接数为100，MySQL服务器支持允许的最大连接数16384
#对mysql初始化内存影响这么大
# 如果设置的太小： 1040-Too many connections，例如当前Max_used_connections=98也会出现这个错误：
# 所以合理的设置是： Max_used_connections / max_connections * 100% ≈ 85%
# 参考
max_connections=1000
max_user_connections=850

# 设置用户密码加密方式
default_authentication_plugin=mysql_native_password
log_bin_trust_function_creators=1
# 配置主从复制
log-bin=mysql-bin
server-id=1
# 配置慢查询
slow_query_log = ON
slow_query_log_file = /logs/mysql/slow.log

```

## 添加数据库和用户(包括修改用户密码)

logged in mysql using `root / xxx`:
```
$ create user 'syscorer'@'%' identified by 'xxxxxx'; 
$ GRANT ALL PRIVILEGES ON *.* TO 'syscorer'@'%'; 
$ GRANT ALL PRIVILEGES ON *.* TO 'syscorer'@'%' IDENTIFIED BY 'xxxxxx' WITH GRANT OPTION;
$ GRANT ALL PRIVILEGES ON heap_stack.* TO 'syscorer'@'%'  WITH GRANT OPTION;
更改mysql用户密码:
$ alter user 'syscorer'@'%' identified by 'xxxxxx1026A5yC1S';
$ flush privileges;
```

## 卸载操作

```
$ sudo apt remove mysql-server
$ sudo apt purge mysql-server
$ sudo apt autoremove
$ sudo find / -name mysql

```


> error processing package mysql-community-server (--configure):
 dependency problems - leaving unconfigured

 ```
 $ sudo apt --yes autoremove --purge mysql-server
 $ sudo apt --yes autoremove --purge mysql-client
 $ sudo rm /var/lib/mysql/ -R
 $ sudo rm /etc/mysql/ -R
 $ sudo apt-get autoremove mysql* --purge
 $ sudo apt-get remove apparmor
 $ sudo apt-get install mysql-server mysql-common
 ```