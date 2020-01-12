---
title: Debian Linux命令其环境配置
---


## Linux中Cache内存占用过高解决办法

文章来源: [解决Linux buffer/cache内存占用过高的办法](https://blog.csdn.net/ailice001/article/details/80353924)

1. 在Linux系统中，我们经常用free命令来查看系统内存的使用状态。
2. 如何回收cache？

```
$ echo 1 > /proc/sys/vm/drop_caches:表示清除pagecache。
$ echo 2 > /proc/sys/vm/drop_caches:表示清除回收slab分配器中的对象（包括目录项缓存和inode缓存）。slab分配器是内核中管理内存的一种机制，其中很多缓存数据实现都是用的pagecache。
$ echo 3 > /proc/sys/vm/drop_caches:表示清除pagecache和slab分配器中的缓存对象。
```

## 设置时区

参考设置连接: [Debian 8 设置时区和时间配置](https://www.cnblogs.com/yoyotl/p/8151409.html)

```
$ tzselect
```

## 查看文件夹各个文件大小

```
$ du -sh *
```

## 创建链接

在当前目录创建一个链接名称`python`,这个链接指向的位置是: `/usr/local/bin/python`,命令如下:
ln -s 源文件 目标目录
```
$ ln -s /usr/local/bin/python python
```

## 删除缓存的安装失败的包

进入目录`/var/cache/apt/archives`,删除下面的所有.deb文件即可

## 改变当前用户组

```
$ sudo usermod -g www-data alterhu2020   (需要重启机器生效)
$ groups alterhu2020

```

## 配置linux并发最大打开文件数

进行目录`/etc/profile`添加如下配置信息:

```
# node环境变量
export PATH=/opt/node/node-v12.14.1-linux-armv7l/bin:$PATH

# java环境变量
export JAVA_HOME=/opt/jdk/jdk1.8.0_231
export JRE_HOME=$JAVA_HOME/jre
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

# 设置pipenv
export PATH=$HOME/.local/bin:$PATH

# 设置最大文件数,mysql和websock最大连接数
ulimit -u 1048576
ulimit -n 1048576
ulimit -d unlimited
ulimit -m unlimited
ulimit -s unlimited
ulimit -t unlimited
ulimit -v unlimited

```
以上的配置如果用非root用户双概述可能会出现错误: `-bash: ulimit: max user processes: cannot modify limit: `. 需要修改对应配置文件: `/etc/security/limits.conf `, 在文件末尾增加如下配置信息(* 代表的是任意用户,比如root/pi):

```
* soft noproc 1048576
* hard noproc 1048576
* soft nofile 1048576
* hard nofile 1048576

```