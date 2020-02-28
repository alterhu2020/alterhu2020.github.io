---
title: Uwsgi Linux安装及其环境配置
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## `uwsgi`Linux安装[更新到2019年8月10日]

[How to install uwsgi](https://uwsgi-docs.readthedocs.io/en/latest/Install.html#installing-from-source)

```shell script
$ sudo apt-get install build-essential python3-dev
# Install the latest stable release:
$ pip install uwsgi
# ... or if you want to install the latest LTS (long term support) release,
$ sudo pip install https://projects.unbit.it/downloads/uwsgi-lts.tar.gz
$ uwsgi --version
$ sudo mkdir /var/log/uwsgi
$ sudo mkdir /etc/uwsgi
$ sudo chown -R www-data:www-data  /var/log/uwsgi
$ sudo chmod a+x /etc/uwsgi
$ pip install uwsgitop

```

# 安装uwsgi服务

```
$ sudo nano /lib/systemd/system/uwsgi.service


[Unit]
Description=uWSGI Emperor service
After=syslog.target

[Service]
ExecStart=/usr/local/bin/uwsgi --master --ini /etc/uwsgi/emperor.ini
Restart=always
KillSignal=SIGQUIT
Type=notify
StandardError=syslog
NotifyAccess=all

[Install]
WantedBy=multi-user.target


```

## uwsgi参数

* chdir=/xxx/xxx # 指定项目目录
* home=/xxx/xxx # 指定虚拟环境变量
* wsgi-file=xxx # 指定加载WSGI文件
* socket=xxx # 指定uwsgi的客户端将要连接的socket的路径（使用UNIX socket的情况）或者地址（使用网络地址的情况）。
* callable=xxx # uWSGI加载的模块中哪个变量将被调用
* master=true # 指定启动主进程
* processes=4 # 设置工作进程的数量
* threads=2 # 设置每个工作进程的线程数
* vacuum=true # 当服务器退出时自动删除unix socket文件和pid文件
* logfile-chmod=644 # 指定日志文件的权限
* daemonize=%(chdir)/xxx.log # 进程在后台运行，并将日志打印到指定文件
* pidfile=%(chdir)/xxx.pid # 在失去权限前，将主进程pid写到指定的文件
* uid=xxx # uWSGI服务器运行时的用户id
* gid=xxx # uWSGI服务器运行时的用户组id
* procname-prefix-spaced=xxx # 指定工作进程名称的前缀


## 异常安装问题

-  Unknown distribution option: 'descriptions'

> 解决方法: apt-get install build-essential python3-dev