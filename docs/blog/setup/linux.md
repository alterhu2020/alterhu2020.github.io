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

## 查看本机打开的端口号

默认情况下Linux的1024以下端口是只有root用户才有权限占用,我们的tomcat,apache, nginx等等程序如果想要用普通用户来占用80端口的话就会抛出 java.net.BindException: Permission denied的异常。

```
查看指定的端口
$ sudo lsof -i:port

查看所有端口
$ sudo netstat -aptn
```

## 创建链接

在当前目录创建一个链接名称`python`,这个链接指向的位置是: `/usr/local/bin/python`,命令如下:
ln -s 源文件 目标目录
```
$ ln -s /usr/local/bin/python python
```

## 删除缓存的安装失败的包

进入目录`/var/cache/apt/archives`,删除下面的所有.deb文件即可

## 修改用户名

```
$ sudo passwd
```

## ssh登录失败

1. 进入谷歌云实例面板
2. 切换到root角色,命令: `sudo -i`
3. 修改SSH配置文件`/etc/ssh/sshd_config`为如下内容:

```
# Authentication:
PermitRootLogin yes //默认为no，需要开启root用户访问改为yes

# Change to no to disable tunnelled clear text passwords
PasswordAuthentication yes //默认为no，改为yes开启密码登陆
```

4. 给root用户设置密码 `passwd root`
5. 重启ssh服务:    `/etc/init.d/ssh restart`
6. 在xshell中，直接使用root账号密码登录。

在客户端或者服务端进行如下ssh链接,查看ssh登录失败的log:
```
> ssh -vvv alterhu2020@host 
```
On the server end, check the logs. `/var/log/auth.log` will give you a pretty good idea about what happens when you try to login, look for messages that contain sshd. There are a variety of reasons why authentication could be failing, ranging from simple (you aren't using the right username) to more complicated (sshd is configured to use the wrong authentication system).

如果以上还不行,直接通过root登录.

## 改变当前用户组

```
$ sudo usermod -g www-data alterhu2020   (需要重启机器生效)
$ groups alterhu2020
$ sudo nano /etc/sudoers


```

## unzip命令中文文件名乱码

采用最新的unzip命令没有参数`-O`，网上提到的使用参数`-O`可以指定编码，所以这个访问不能使用。所以使用`unar`命令:

```
$ sudo apt-get install unar

$ unar -e gb18030 gb18030.zip
```

## 配置linux并发最大打开文件数

进行目录`/etc/profile`添加如下配置信息:

```
# node环境变量
export PATH=/opt/node/node-v12.14.1-linux-armv7l/bin:$PATH

# java环境变量
export JAVA_HOME=/opt/jdk/jdk1.8.0_241
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
以上的配置如果用非root用户双概述可能会出现错误: `-bash: ulimit: max user processes: cannot modify limit: `. 需要修改对应配置文件: `/etc/security/limits.conf `, 在文件末尾增加如下配置信息(* 代表的是任意用户,比如root/pi),命令如下:

`$ sudo nano /etc/security/limits.conf`

```
* soft noproc 1048576
* hard noproc 1048576
* soft nofile 1048576
* hard nofile 1048576

```