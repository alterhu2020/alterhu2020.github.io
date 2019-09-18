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

root / m6s1l@#2!
$ create user 'syscorer'@'%' identified by 's6s@#@!L0ngh'; 
$ GRANT ALL PRIVILEGES ON *.* TO 'syscorer'@'%'; 
$ GRANT ALL PRIVILEGES ON *.* TO 'syscorer'@'%' IDENTIFIED BY 's6s@#@!L0ngh' WITH GRANT OPTION;
$ GRANT ALL PRIVILEGES ON heap_stack.* TO 'syscorer'@'%'  WITH GRANT OPTION;
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