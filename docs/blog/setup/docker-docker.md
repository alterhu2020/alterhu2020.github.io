---
title: Docker容器化技术
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## Docker安装配置

从现在开始所有的部署相关的都docker化，不再使用以前的人工部署方式。

那么如何安装docker呢？

### 方法一（推荐）

参考链接： <https://www.digitalocean.com/community/tutorials/how-to-run-nginx-in-a-docker-container-on-ubuntu-14-04>

只需要执行一个命令即可：

```shell
sudo curl -sSL https://get.docker.com/ | sh
```

### 方法二

服务器端采用的是debian系统，安装如下步骤：
<https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-debian-10>

```shell
$ sudo apt update
$ sudo apt install apt-transport-https ca-certificates curl gnupg2 software-properties-common
$ curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
$ sudo apt update
$ apt-cache policy docker-ce
$ sudo apt install docker-ce
$ sudo systemctl status docker
$ docker info
```

通过上面的`docker info`发现对应的`Registry Mirrors`是官方的镜像，所以我们在使用`docker pull`命令下载到本地的时候会比较缓慢，所以我们需要修改对应的镜像。修改命令如下：

```shell
$ nano /etc/docker/daemon.json
```

修改为如下：

```json
{
  "registry-mirrors": ["https://jbj2tyqj.mirror.aliyuncs.com"]
}
```

-----------------------------------------**分割线**---------------------------------------------------

docker默认只提供本地unix，sock文件的连接方式，让docker能够监听tcp端口还需要进行一些配置。
1.1 首先编辑docker的宿主机文件: `nano /lib/systemd/system/docker.service`

```shell
# #ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
ExecStart=/usr/bin/dockerd -H unix:///var/run/docker.sock -H tcp://0.0.0.0:2375
```
保存配置。

1.2 重新加载系统服务配置文件（包含刚刚修改的文件）

```shell
systemctl daemon-reload
```

重启docker服务

```shell
systemctl restart docker
```

1.3 防火墙添加开放2375端口

1.4 在Windows系统上测试端口是否可以使用:

```shell
curl http://localhost:2375/version
```



## 1. nginx部署


**注意：推荐nginx不用docker部署，直接采用宿主机器安装。以下的安装方式不推荐**

参考安装步骤链接： <https://www.digitalocean.com/community/tutorials/how-to-run-nginx-in-a-docker-container-on-ubuntu-14-04>

执行如下命令：

```shell
$ sudo docker pull nginx
$ mkdir -p ~/opt/html
cd /opt/html

$ sudo docker run -d -p 80:80 -v /etc/nginx:/etc/nginx -v /opt/html:/usr/share/nginx/html --name nginx nginx

```


## 2. jenkins部署

参考文档： <https://developpaper.com/docker-installs-the-latest-version-of-jenkins/>

命令如下：

```shell
$ docker pull jenkins/jenkins:lts
$ docker images   # 查看对应的下载的jenkins镜像的jenkins版本
$ docker inspect <jenkins image id>
```

![20210305170845](https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20210305170845.png)

```shell
#Create data mount directory
$ mkdir /opt/jenkins_home
#The data directory is authorized. Otherwise, an error is reported. There is no such file directory
$ chmod 777 /opt/jenkins_home/
```

```shell
$ sudo docker run -p 8888:8080 -p 50000:50000 --privileged=true  -v /opt/jenkins_home:/var/jenkins_home --name jenkins  jenkins/jenkins:lts
```
检查是否jenkins正常启动：

```shell
#View containers all containers
docker ps -a
​
#View running containers
docker ps

```

输入对应的ip地址和端口号即可访问对应的jenkins服务了，需要输入对应的初始化的管理员密码，密码是在容器里面的，使用下面的命令得到初始化的密码，或者直接在宿主机器加载的目录：`/opt/jenkins_home/`获取对应的信息：

```shell
#[image ID] the image ID of the container
docker exec -it [IMAGE ID] bash
​
#Get the password by command
cat /var/jenkins_home/secrets/initialAdminPassword
```

安装完毕。

其他配置和插件安装参考：


## 3. java应用程序部署

此处推荐的几个基础jdk镜像：

```shell
# jdk11
# docker pull adoptopenjdk/openjdk11:jdk-11.0.10_9-debianslim
# docker pull adoptopenjdk/openjdk11:jdk-11.0.10_9-debianslim-slim

# jdk15
# docker pull adoptopenjdk/openjdk15:jdk-15.0.2_7-debianslim
# docker pull adoptopenjdk/openjdk15:jdk-15.0.2_7-debianslim-slim

```
推荐一个博客介绍的几种docker镜像大小的对比，<https://technology.amis.nl/continuous-delivery/containers/the-size-of-docker-images-containing-openjdk-11-0-6/>
如下图所示：

![docker](https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20210305092831.png)


3.1 配置springboot的一个安装包的`Dockerfile`脚本：

```shell

```


## 4. python应用程序部署


## 5. vue应用程序部署


## 6. selenium测试环境部署


