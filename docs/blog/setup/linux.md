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
  local mysql_login="-u $MYSQL_UNAME" 
  if [ -n "$MYSQL_PWORD" ]; then
    local mysql_login+=" -p$MYSQL_PWORD" 
  fi
  echo $mysql_login
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
$ sudo chmod +x mysql-backup.sh
```
- 执行如下命令，测试脚本是否正常:

```shell
$ sudo ./mysql-backup.sh
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
# |  .------------- hour (0 - 23)
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

- 查看执行情况（crontab执行日志）

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
CTRL - a+d ->(常用退出切换到后台运行) detach，暂时离开当前session，将目前的 screen session (可能含有多个 windows) 丢到后台执行，并会回到还没进 screen 时的状态，此时在 screen session 里，每个 window 内运行的 process (无论是前台/后台)都在继续执行，即使 logout 也不影响。 
CTRL- a+z -> 把当前session放到后台执行，用 shell 的 fg 命令则可回去。




