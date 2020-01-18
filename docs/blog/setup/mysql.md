---
title: Debian MYSQL8安装及其环境配置
---

# 安装步骤如下命令：

::: warning mysql安装密码问题
1. 安装的时候注意选择legecal password,否则wordpress不能访问mysql8数据库
2. 如果是raspberry,则必须安装mariadb
:::


## 安装命令

 **1. mysql8安装**

``` 
$ apt-get install lsb-release
$ wget https://dev.mysql.com/get/mysql-apt-config_0.8.13-1_all.deb
$ sudo dpkg -i mysql-apt-config*
$ sudo apt-get update
$ sudo apt-get install mysql-server
```
**2. mariadb安装**

```
$ sudo apt update
$ sudo apt install mariadb-server
$ sudo systemctl status mariadb
// 如果不先设置mysql的密码策略登录的时候会包错误: ERROR 1698 (28000): Access denied for user 'root'@'localhost'
$ mysql -u root -p (直接不输入密码)

> SELECT User, Host, plugin FROM mysql.user;
> UPDATE user SET plugin='mysql_native_password' WHERE User='root';
> FLUSH PRIVILEGES;
> update mysql.user set authentication_string=PASSWORD('m3s1l@#3!'), plugin='mysql_native_password' where user='root';
> FLUSH PRIVILEGES;

```
## 配置mysql

在mysql或者mariadb上运行如下命令进行配置数据库:

```
$ sudo mysql_secure_installation

```

## 配置参数

**1. mysql配置**

```
$ sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```
**2. mariadb安装**

```
$ sudo /etc/mysql/mariadb.conf.d/50-server.cnf

```

**修改以上的配置文件,注意一定要在`mysqld`区域放入以下的配置信息:**

1. `master`主数据库写数据<通用配置>:

```
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

2. `slave`从数据库读数据库(可选):

```
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

# 设置默认户密码加密方式
default_authentication_plugin=mysql_native_password
log_bin_trust_function_creators=1
# 配置主从复制数据库,为了更好主从复制(io进程和sql进程的操作)低延迟，关闭binlog等
server-id=2
skip-log-bin
# 配置慢查询
slow_query_log = ON
slow_query_log_file = /logs/mysql/slow.log

```

## 添加数据库和用户(包括修改用户密码)

logged in mysql using `root / xxx`:

```
$ create database abc;
$ create user 'syscorer'@'%' identified by 'xxxxxx'; 
$ GRANT ALL PRIVILEGES ON *.* TO 'syscorer'@'%'; 

--- 以下可能是mysql通用的
$ GRANT ALL PRIVILEGES ON *.* TO 'syscorer'@'%' IDENTIFIED BY 'xxxxxx' WITH GRANT OPTION;
$ GRANT ALL PRIVILEGES ON heap_stack.* TO 'syscorer'@'%'  WITH GRANT OPTION;

更改mysql用户密码:
$ alter user 'syscorer'@'%' identified by 'xxxxxx1026A5yC1S';
$ flush privileges;
```

## 读写分离配置

1. 配置读写分离的数据库用户:

```
 1.1 master数据库中执行如下命令: 
 
 mysql>  CREATE USER 'repdev'@'%' IDENTIFIED WITH mysql_native_password BY 'xxx';
 mysql>  GRANT REPLICATION SLAVE ON *.* TO 'repdev'@'%';
 mysql>  flush privileges;
 
 mysql> SHOW MASTER STATUS;
+------------------+----------+--------------+------------------+-------------------+
| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+------------------+----------+--------------+------------------+-------------------+
| mysql-bin.000001 |     2035 |              |                  |                   |
+------------------+----------+--------------+------------------+-------------------+
1 row in set (0.00 sec)


 1.2 slave节点数据库:   注意MASTER_LOG_FILE和MASTER_LOG_POS是master的正确值,命令如下:

mysql>  CHANGE MASTER TO
MASTER_HOST='47.101.187.237',
MASTER_USER='repdev',
MASTER_PASSWORD='xxx',
MASTER_LOG_FILE='mysql-bin.000001',
MASTER_LOG_POS=2035;

mysql> start slave; 
mysql> show slave status\G;

如果显示的:  Seconds_Behind_Master(主从延时),  Slave_IO_Running=Yes, Slave_SQL_Running=Yes

# 修改对应的slave对应的master的log-bin文件
Mysql> CHANGE MASTER TO MASTER_LOG_FILE='mysql-bin.000003',MASTER_LOG_POS=342;
```

说明:  Seconds_Behind_Master参数值
NULL - 表示io_thread或是sql_thread有任何一个发生故障，也就是该线程的Running状态是No,而非Yes.
0 - 该值为零，是我们极为渴望看到的情况，表示主从复制良好，可以认为lag不存在。

## 卸载mysql操作

```
$ sudo apt remove mysql-server
$ sudo apt purge mysql-server
$ sudo apt autoremove
$ sudo find / -name mysql

```

## 安装错误异常

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