---
title: Debian MYSQL8安装及其环境配置
---

## 安装步骤如下命令：
```
$ apt-get install lsb-release
$ wget https://dev.mysql.com/get/mysql-apt-config_0.8.13-1_all.deb
$ sudo dpkg -i mysql-apt-config*
$ sudo apt-get update
$ sudo apt-get install mysql-server

root / m6s1l@#2!
$ create user 'syscorer'@'%' identified by 's6s@#@!L0ngh'; 
$ GRANT ALL PRIVILEGES ON *.* TO 'syscorer'@'%'; 
$ GRANT ALL PRIVILEGES ON *.* TO 'syscorer'@'%' WITH GRANT OPTION;
$ flush privileges;
```