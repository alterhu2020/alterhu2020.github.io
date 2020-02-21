## Scrapy爬虫配置

## 1. 开发环境

### 1.1 需要安装如下必需的开发包：`pipenv`,类库包如下：

```
$ pip install pipenv
$ pipenv install scrapy scrapyd-client
$ pipenv install requests pymysql beautifulsoup4 lxml js2py selenium  
```

* 数据库主机、数据库名称、用户名、密码等信息在`settings.py`文件中配置；
* 配置好数据库后，cmd进入程序所在目录，运行`scrapy crawl 项目名称即可；
* 使用`scrapyd-client`中的`scrapyd-deploy`命令行工具可以将脚本部署到指定的`scrapyd`服务上；

### 1.2 配置对应的`scrapy.cfg`文件中的`scrapyd`服务器(如果使用下面的gerapy则不需要配置这个部分),该部分主要是为了`scrapyd-deploy`使用：

```
[deploy:cvr_news]
# url = http://localhost:6800/
# project = spider_test
# username = deployer
# password = eaafbbdbe1494810b48a90651xe3452cd95f
```

## 2. 分布式脚本执行部署环境

>>> 参考文档: [scrapy部署， Gerapy 分布式爬虫管理部署使用](https://blog.csdn.net/qq_38003892/article/details/80427278)

>>> 参考文档： [gerapy+scrapyd组合管理分布式爬虫](https://www.cnblogs.com/sxqjava/p/10037731.html)

### 2.1 `gerapy`服务器环境配置

- 安装`scrapy`部署服务,也是一个远程服务。是运行`scrapy`爬虫的服务端程序,它支持以`http`接口命令方式发布、删除、启动、停止爬虫程序。
- 在电脑任意位置新建一个文件夹,打开cmd，进入到这个文件夹下，输入命令`gerapy init`.安装`Gerapy`. 
初始化完成后会生成一个文件夹`gerapy`，该文件夹下面会生成一个`projects`文件夹.进入到该创建的`gerapy`文件夹下，再输入`gerapy migrate`完成`gerapy`初始化工作. 将scrapy脚本项目放到`projects`目录下,利用`gerapy runserver`，启动`gerapy`. 刷新即可看到部署的脚本。

```
$ mkdir spider-gerapy
$ cd spider-gerapy
$ pip install gerapy
$ gerapy init
$ cd gerapy
$ gerapy migrate 
初始化数据库
$ gerapy createsuperuser
创建超级用户，用于登录界面
$ gerapy runserver
后台静默运行gerapy服务,注意一定要切换到新创建的gerapy目录下面
$ nohup gerapy runserver 0.0.0.0:6000 &
```
### 2.2 `scrapyd`脚本执行机器环境配置

* `scrapyd`不需要设置目录，可以同时管理多个爬虫,每个爬虫还可以有多个版本： 

```
$ pip install scrapyd
一般安装在类似目录： `/usr/local/lib/python3.8/dist-packages/scrapyd`
$ find / -name "default_scrapyd.conf"
$ nano default_scrapyd.conf
1. 修改scrapyd服务的端口号，默认端口是`6800`
2. 设置远程访问端口可以放行（`bind_address`由`127.0.0.1`改成0.0.0.0）
3. 修改日志存放目录
```

上面需要修改的配置文件内容如下：
```
eggs_dir    = /www/spider/eggs
logs_dir    = /logs
items_dir   = /www/spider/items

bind_address = 0.0.0.0
http_port   = 6800

username = deployer
password = eaafbbdbe1494810b48a9065152cd95f245dz
```
* 上面的配置修改成功后执行以下脚本运行`scrapyd`后台启动服务：
```
$ nohup scrapyd &
```
* 脚本运行端需要安装对应的`scrapy`开发环境中提到的所有库，执行如下命令安装:
```
pip install scrapy requests pymysql beautifulsoup4 lxml js2py selenium   
```
