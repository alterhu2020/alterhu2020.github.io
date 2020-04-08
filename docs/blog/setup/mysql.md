---
title: Debian MYSQL8安装及其环境配置
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

# 安装步骤如下命令：

::: warning mysql安装密码问题
1. 安装的时候注意选择legecal password,否则wordpress不能访问mysql8数据库
2. 如果是raspberry,则必须安装mariadb
:::


## 安装命令

 **1. mysql8安装，注意配置大小写安装**

``` 
$ apt-get install lsb-release
$ wget https://dev.mysql.com/get/mysql-apt-config_0.8.13-1_all.deb
$ sudo dpkg -i mysql-apt-config*
$ sudo apt-get update
$ sudo apt-get install mysql-server mysql-common
// 配置数据库表大小写敏感配置
$ sudo systemctl stop mysql.service
$ sudo rm -rf /var/lib/mysql
$ 此处需要执行命令: `sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf`,添加下方的配置: ` lower_case_table_names = 1`
$ sudo systemctl start mysql.service
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
port = 1876
# 数据表以小写保存，但是比较数据表的时候不区分大小写
lower_case_table_names=1
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
port = 1876
# 数据表以小写保存，但是比较数据表的时候不区分大小写
lower_case_table_names=1
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
# 1062 Duplicate entry
slave-skip-errors=1062,1053,1146 #跳过指定error no类型的错误
#slave-skip-errors=all #跳过所有错误
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
$ GRANT ALL PRIVILEGES ON *.* TO 'syscorer'@'%'  WITH GRANT OPTION;

更改mysql用户密码:
$ alter user 'syscorer'@'%' identified by 'xxxxxx1026A5yC1S';
$ flush privileges;
```

## mysql8数据表大小写敏感

查看大小写配置，大小写是否敏感:
```
show variables where Variable_name='lower_case_table_names';

```

设置`lower_case_table_names = 1`，以便在数据库中使用不区分大小写的表名。 我编辑了`/etc/mysql/mysql.conf.d/mysqld.cnf`，并在[mysqld]下添加了上面的配置。收到以下错误:

```
Job for mysql.service failed because the control process exited with error code.
See "systemctl status mysql.service" and "journalctl -xe" for details.
```
查看mysql的日志文件: `tail -f -n 100 /var/log/mysql/error.log`,查看MySQL官方文档，有记录：
```
lower_case_table_names can only be configured when initializing the server. Changing the lower_case_table_names setting after the server is initialized is prohibited.
```
只有在初始化的时候设置 lower_case_table_names=1才有效，比如：
```
--initialize --lower-case-table-names=1
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

mysql> stop slave;

mysql>  CHANGE MASTER TO
MASTER_HOST='47.101.187.237',
MASTER_PORT=1876,
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

### 读写分离报错问题

1.记录删除失败 `Could not execute Delete_rows event on table cvr.sys_user; Can't find record in 'sys_user', Error_code: 1032; handler error HA_ERR_KEY_NOT_FOUND; the event's master log mysql-bin.000005, end_log_pos 46653957`错误
解决方法：master要删除一条记录，而slave上找不到报错，这种情况主都已经删除了，那么从机可以直接跳过。
#将同步指针向下移动一个，如果多次不同步可以重复操作
```
stop slave;set global sql_slave_skip_counter=1;start slave;
```
If the error is still there, set a bigger value in sql_slave_skip_counter like:
```
mysql> set global sql_slave_skip_counter=1000;
```
Again, check the status of the slave.

If you find the skip_sql value is non zero in the slave status then stop the slave again and do:

```
mysql> set global sql_slave_skip_counter=0;
mysql> start slave;
```

2. 主键重复`Last_SQL_Error: Could not execute Write_rows event on table hcy.t1; Duplicate entry '2' for key 'PRIMARY', Error_code: 1062; handler error HA_ERR_FOUND_DUPP_KEY; the event's master log mysql-bin.000006, end_log_pos 924`

在slave已经有该记录，又在master上插入了同一条记录。
```
Last_SQL_Error: Could not execute Write_rows event on table hcy.t1; Duplicate entry '2' for key 'PRIMARY', Error_code: 1062; handler error HA_ERR_FOUND_DUPP_KEY; the event's master log mysql-bin.000006, end_log_pos 924

```
## 忘记root密码重置root密码

```
sudo systemctl  stop mysql
sudo mysqld_safe --skip-grant-tables --skip-networking &
# 重启一个命令行窗口执行如下命令
mysql -u root;
use mysql;
SELECT User, Host, plugin FROM mysql.user;
update user set plugin='mysql_native_password' where user='root';
flush privileges;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'm6s1l@#2!';
flush privileges;
```
如果报： `ERROR 1290 (HY000): The MySQL server is running with the --skip-grant-tables option so it cannot execute this statement`,需要执行一下命令: `flush privileges`,然后再重新执行命令就好了。

## 卸载mysql操作

```
$ cd /var/lib/dpkg
$ sudo mv info info.bak
$ sudo mkdir info
$ sudo dpkg --configure -a
$ sudo apt-get install -f
$ sudo mv /var/lib/dpkg/info/* /var/lib/dpkg/info.bak
$ sudo rm -rf /var/lib/dpkg/info
$ sudo mv /var/lib/dpkg/info.bak /var/lib/dpkg/info
$ sudo apt remove --purge mysql*

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