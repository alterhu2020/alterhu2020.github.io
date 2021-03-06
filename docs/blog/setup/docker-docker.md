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
$ sudo curl -sSL https://get.docker.com/ | sh
$ sudo curl -L --fail https://github.com/docker/compose/releases/download/1.28.5/run.sh -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
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

### docker的tcp连接 

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

### docker的alpine和slim镜像

Alpine 是众多 Linux 发行版中的一员，和 CentOS、Ubuntu、Archlinux 之类一样，只是一个发行版的名字，号称小巧安全，有自己的包管理工具 apk。

与 CentOS 和 Ubuntu 不同，Alpine 并没有像 Red Hat 或 Canonical 之类的大公司为其提供维护支持，软件包的数量也比这些发行版少很多（如果只看开箱即用的默认软件仓库，Alpine 只有 10000 个软件包，而 Ubuntu、Debian 和 Fedora 的软件包数量均大于 50000。）
容器崛起之前，Alpine 还是个无名之辈，可能是因为大家并不是很关心操作系统本身的大小，毕竟大家只关心业务数据和文档，程序、库文件和系统本身的大小通常可以忽略不计。

容器技术席卷整个软件产业之后，大家都注意到了一个问题，那就是容器的镜像太大了，浪费磁盘空间，拉取镜像的时间也很长。于是，人们开始寻求适用于容器的更小的镜像。对于那些耳熟能详的发行版（例如 Ubuntu、Debian、Fedora）来说，只能通过删除某些工具（例如 ifconfig 和 netstat）将镜像体积控制在 100M 以下。而对于 Alpine 而言，什么都不用删除，镜像大小也就只有 5M 而已。

**Alpine 镜像的另一个优势是包管理工具的执行速度非常快**，安装软件体验非常顺滑。诚然，在传统的虚拟机上不需要太关心软件包的安装速度，同一个包只需要装一次即可，无需不停重复安装。容器就不一样了，你可能会定期构建新镜像，也可能会在运行的容器中临时安装某些调试工具，如果软件包的安装速度很慢，会很快消磨掉我们的耐心。

上面说的这么多，但是alpine镜像还是有很多坑，所以推荐使用如下Debian基础镜像：

```shell
FROM debian:buster-slim
```

### docker相关语法命令

- 1. 环境变量ENV 指令的格式如下：

```shell
ENV <key>=<value> ...
```
ENV 指令还允许另一种语法 ENV <key> <value>，省略了中间的等号。例如：

```shell
ENV MY_VAR my-value
```
**支持这种替代语法为了向后兼容，但由于上述原因不鼓励使用，可能会在将来的版本中删除**。 所以推荐使用带加号的。

- 2. `ENTRYPOINT`和`CMD`区别

 为容器指定默认执行命令。 有两种格式的配置， 分别是：

```bash
ENTRYPOINT ["executable", "param1", "param2"] (exec 格式, 推荐)
ENTRYPOINT command param1 param2 (shell 格式)
```
注意：Note: The exec form is parsed as a JSON array, which means that you must use double-quotes (“) around words not single-quotes (‘). **exec格式的会作为json格式解析，所以必需是双引号，而不是单引号。否则单引号会报错误：entrypoint file not found**

CMD命令当后面加上一个命令，比如 docker run -it [image] /bin/bash，CMD 会被忽略掉，命令 bash 将被执行：

ENTRYPOINT 看上去与 CMD 很像，它们都可以指定要执行的命令及其参数。不同的地方在于 **ENTRYPOINT 不会被忽略，一定会被执行，即使运行 docker run 时指定了其他命令**。docker run **传入的参数会附加到 ENTRYPOINT 之后， 前提是使用了 exec 格式** 。

所以CMD可以作为容器的默认执行命令，而ENTRYPOINT不可以替换默认的执行命令。

- 3. `ADD`和`COPY`的区别

1. add 和 copy 都是复制文件 / 文件夹
2. add 可以从网络 / 本地复制; copy 仅从本地复制, 语义更明确, 推荐使用 copy。

COPY对于文件而言可以直接将文件复制到镜像中，代码如下：

```shell
COPY ${JAR_FILE} /usr/local/oas/
```
对于目录而言，该命令只复制目录中的内容而不包含目录自身，代码如下：

```shell

COPY nickdir .
WORKDIR /usr/local/oas/
```

ADD命令相对于COPY命令，可以解压缩文件并把它们添加到镜像中的功能，如果我们有一个压缩文件包，并且需要把这个压缩包中的文件添加到镜像中。需不需要先解开压缩包然后执行 COPY 命令呢？当然不需要！我们可以通过 ADD 命令一次搞定：

```shell
ADD nickdir.tar.gz .
WORKDIR /usr/local/oas/
```
同时ADD还可以从 url 拷贝文件到镜像中，但官方不推荐这样使用，官方建议我们当需要从远程复制文件时，最好使用 curl 或 wget 命令来代替 ADD 命令。原因是，当使用 ADD 命令时，会创建更多的镜像层，当然镜像的 size 也会更大，代码如下：

```shell
ADD http://example.com/big.tar.xz /usr/src/things/
RUN tar -xJf /usr/src/things/big.tar.xz -C /usr/src/things

```

所以ADD命令官方推荐只有在解压缩文件并把它们添加到镜像中时才需要。

其他情况推荐都使用COPY命令。



## 1. nginx部署


**注意：推荐nginx不用docker部署，直接采用宿主机器安装。以下的安装方式不推荐**

参考安装步骤链接： <https://www.digitalocean.com/community/tutorials/how-to-run-nginx-in-a-docker-container-on-ubuntu-14-04>

执行如下命令：

```shell
$ sudo docker pull nginx

$ mkdir -p /opt/html
$ cd /opt

$ sudo docker run --name nginx -d -p 80:80 -v /etc/nginx:/etc/nginx -v $(pwd)/html:/usr/share/nginx/html nginx

$ sudo docker run --name nginx -d -p 80:80 -v /etc/nginx:/etc/nginx -v $PWD/html:/usr/share/nginx/html nginx

$ docker logs nginx
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
$ sudo docker run -d -p 8888:8080 -p 50000:50000 --privileged=true  -v /opt/jenkins_home:/var/jenkins_home --name jenkins  jenkins/jenkins:lts
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
# docker pull adoptopenjdk/openjdk11:jdk-11.0.10_9-slim
# docker pull adoptopenjdk/openjdk11:jdk-11.0.10_9-debianslim
# docker pull adoptopenjdk/openjdk11:jdk-11.0.10_9-debianslim-slim

# jdk15
# docker pull adoptopenjdk/openjdk15:jdk-15.0.2_7-slim
# docker pull adoptopenjdk/openjdk15:jdk-15.0.2_7-debianslim
# docker pull adoptopenjdk/openjdk15:jdk-15.0.2_7-debianslim-slim

```
推荐一个博客介绍的几种docker镜像大小的对比，<https://technology.amis.nl/continuous-delivery/containers/the-size-of-docker-images-containing-openjdk-11-0-6/>
如下图所示：

![docker](https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20210305092831.png)

**如何退出jshell命令？答案：输入`/exit`命令**


3.1 配置springboot的一个安装包的`Dockerfile`脚本：

```shell
FROM adoptopenjdk/openjdk11:jdk-11.0.10_9-slim
WORKDIR /opt

# entrypoint script
COPY entrypoint.sh /opt/
ENTRYPOINT ["/opt/entrypoint.sh"]
```


## 4. python应用程序部署

此处推荐的基础镜像是：

```shell
# python 3.10
$ docker pull python:3.10.0a6-slim
```

## 5. vue应用程序部署


```shell
FROM node:10

# Create app directory
WORKDIR /app
ADD . /app/

# global install & update
RUN npm i -g npm && npm i -g yarn

RUN rm yarn.lock
RUN yarn
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "yarn", "start" ]

```

## 6. selenium测试环境部署


