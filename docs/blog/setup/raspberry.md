---
title: Raspberry Linux安装及其环境配置
---

## 树莓派安装

1. 从官方下载最新的镜像，推荐下载最新的镜像： [下载首页地址](https://www.raspberrypi.org/downloads/raspbian/),在该网页中选择"
Raspbian Buster Lite",截止到2019年8月12日，最新的树莓派版本是Buster版。此处选择的是最小镜像。

2. 安装步骤参考官网： [官方文档](https://www.raspberrypi.org/documentation/),使用的是工具是[Win32DiskImager].

3. 安装结束后，你需要打开SD卡，也就是对应的Boot Folder,在该目录下放两个文件：

3.1 空文件`ssh`,没有后缀也没有任何内容，这个用于远程SSH登录。
3.2 新建一个文件`wpa_supplicant.conf`文件，输入如下内容对应你的需要连接的wifi信息(此处我这里输入了两个WiFi配置信息）：

```
ctrl_interface=/var/run/wpa_supplicant
update_config=1

network={
    ssid="FOffice"
    psk="L0ngh)*%z2&r7p1"
    priority=2
}

network={
    ssid="CMCC-MiniWifi"
    psk="A5#$2a7&y1nr+"
    priority=1
}

```



**参考**：

* [The Boot folder contents](https://www.raspberrypi.org/documentation/configuration/boot_folder.md)

## 无线访问树莓派



1. 官方给出了一些方案： [官方文档方案无线连接树莓派](https://www.raspberrypi.org/documentation/remote-access/ip-address.md),大致几种方案：

1.1 首次安装后树莓派的名称是: `raspberrypi.local`,所以可以通过在同一个网站中直接ping：

```
$ ping raspberrypi.local
```
1.2 通过手机端安装一个叫 Fing的app进行扫描局域网的所有机器，可以快速定位你的树莓派地址。

1.3 通过电脑端安装[Free Advanced IP Scanner](https://www.advanced-ip-scanner.com/)或(Angry IP Scanner)[https://angryip.org/]扫描局域网的所有机器，也可以快速定位你的树莓派机器。（推荐此种方法）

## 网页管理树莓派

1. 访问[remote.it网站](https://app.remote.it/web/)，注册一个账号，然后安装指引在树莓派上安装如下命令：

```
sudo apt update
sudo apt install connectd
sudo connectd_installer
```
2. 继续访问上面的网站就能看到自己的树莓派了。



## jdk 安装

1. 检查当前树莓派的系统版本： `cat /proc/cpuinfo` 或者`uname –m`,我的树莓派3B+输出的是`armv7l`,查阅资料确认是32位的机器：
[检查树莓派是32位还是64位](https://unix.stackexchange.com/questions/136407/is-my-linux-arm-32-or-64-bit).

```
You can find the processor model in /proc/cpuinfo. For example:

$ cat /proc/cpuinfo
Processor       : ARMv7 Processor rev 10 (v7l)
ARMv7 (and below) is 32-bit. ARMv8 introduces the 64-bit instruction set.

If you want to see whether your system supports 64-bit binaries, check the kernel architecture:

$ uname -m
armv7l
On a 64-bit processor, you'd see armv8 (or above).

```
2. 确认了机器的型号，然后到官方的oracle网站，现在oracle已经提供了ARM架构的jdk安装包，叫做： Linux ARM 32 Hard Float ABI/Linux ARM 64 Hard Float ABI,此处我们选择： Linux ARM 32 Hard Float ABI，下载该安装包到对应的树莓派机器上。

3. 复制该安装包`jdk-8u221-linux-arm32-vfp-hflt.tar.gz`执行如下命令安装 (注意将`/opt/jdk/jdk1.8.0_221`替换成你解压的目录)：

```
$  tar -zxf jdk-8u221-linux-arm32-vfp-hflt.tar.gz
$  sudo update-alternatives --install /usr/bin/java java /opt/jdk/jdk1.8.0_221/bin/java 1
$  sudo update-alternatives --install /usr/bin/javac javac /opt/jdk/jdk1.8.0_221/bin/javac 1
$  java -version
$  javac 
```

# 安装selenium及其对应的chrome driver

参考网站： https://www.raspberrypi.org/forums/viewtopic.php?t=194176

## 步骤
1. 下载文件： [http://security.debian.org/debian-security/pool/updates/main/c/chromium/chromium-driver_72.0.3626.122-1~deb9u1_armhf.deb](http://security.debian.org/debian-security/pool/updates/main/c/chromium/chromium-driver_72.0.3626.122-1~deb9u1_armhf.deb)

2. `sudo dpkg -i chromium-driver_72.0.3626.122-1~deb9u1_armhf.deb`

```
        # sudo chmod +x /usr/local/bin/chromedriver
        # sudo apt-get install libminizip1
        # sudo apt-get install libwebpmux2
        # sudo apt-get install libgtk-3-0

```