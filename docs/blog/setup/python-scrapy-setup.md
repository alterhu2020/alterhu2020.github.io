## Scrapy爬虫配置

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

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

### 操作步骤

1.创建项目

在开始爬取之前，我们必须创建一个新的Scrapy项目，我这里命名为jianshu_article。打开Mac终端，cd到你打算存储代码的目录中，运行下列命令:
```sh
// 安装scrapy
pip install scrapy
scrapy --help
//Mac终端运行如下命令：
scrapy startproject spider_pingbook
```
2.创建爬虫程序
```shell
//cd到上面创建的文件目录
cd spider_pingbook
//创建爬虫程序
scrapy genspider jianshu jianshu.com
/*
文件说明：
  scrapy.cfg  项目的配置信息，主要为Scrapy命令行工具提供一个基础的配置信息。（真正爬虫相关的配置信息在settings.py文件中）
  items.py    设置数据存储模型，用于结构化数据，如：Django的Model
  pipelines    数据处理行为，如：一般结构化的数据持久化
  settings.py 配置文件，如：USER_AGENT(模拟浏览器，应对网站反爬)，递归的层数、并发数，延迟下载等
  spiders      爬虫目录，如：创建文件，编写爬虫规则
*/
```
为了方便编写程序，我们用Pycharm打开项目，执行完上面的命令程序会自动创建目录及文件，其中生成了一个jianshu.py的文件，后面我们主要逻辑都将写在此文件中。

3.设置数据模型
双击items.py文件。
找到你想爬取的简书作者首页，如我自己的首页https://www.jianshu.com/u/6b14223f1b58，用谷歌浏览器打开，空白处鼠标右击，单击“检查”进入控制台开发者模式：
通过分析网页源码，我们大概需要这些内容：
```py
# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy

class JianshuArticalItem(scrapy.Item):
    avatar = scrapy.Field()     #头像
    nickname = scrapy.Field()      #昵称
    time = scrapy.Field()   #发表时间
    wrap_img = scrapy.Field()   #封面（缺省值）
    title = scrapy.Field()     #标题
    abstract = scrapy.Field()   #正文部分显示
    read = scrapy.Field()   #查看人数
    comments = scrapy.Field()   #评论数
    like = scrapy.Field()   #喜欢（点赞）
    detail = scrapy.Field()   #文章详情url
    pass

```
如此数据模型就创建好了，后面运行爬虫的时候，我得到的数据将存进模型对应的位置。

4.分析网页源码，编写爬虫
推荐一款chrome的xpath自动选择生成工具[ChroPath](https://www.crx4chrome.com/extensions/ljngjbnaijcbncmcnjfhigebomdlkcjo/)这里给出XPath表达式的例子及对应的含义:

- `/html/head/title`: 选择HTML文档中 <head> 标签内的 <title> 元素
- `/html/head/title/text()`: 选择上面提到的 <title> 元素的文字
- `//td` `//li`: 选择所有的 <td> 元素
- `//div[@class="mine"]`: 选择所有具有 class="mine" 属性的 div 元素

上边仅仅是几个简单的XPath例子，XPath实际上要比这远远强大的多。 如果您想了解的更多，我们推荐 这篇XPath教程 。
通过上面的介绍，相信你可以做接下来的爬虫工作了，下面贴上jianshu.py的全部代码，以供参考：

```python
# -*- coding: utf-8 -*-
import scrapy
from jianshu_article.items import JianshuArticleItem


class JianshuSpider(scrapy.Spider):
    name = 'jianshu'
    allowed_domains = ['jianshu.com']
    user_id = "1b4c832fb2ca" #替换此用户ID可获取你需要的数据，或者放开下一行的注释
    #user_id = input('请输入作者id：\n')
    url = "https://www.jianshu.com/u/{0}?page=1".format(user_id)
    start_urls = [
        url,
    ]

    def parse(self, response):
        # [关注,粉丝,文章]
        a = response.xpath('//div[@class="main-top"]/div[@class="info"]/ul/li/div/a/p/text()').extract()
        print(a)
        # [字数,收获喜欢]
        b = response.xpath('//div[@class="main-top"]/div[@class="info"]/ul/li/div/p/text()').extract()
        print(b)
        # 大头像
        c = response.xpath('//div[@class="main-top"]/a[@class="avatar"]/img/@src').extract_first()
        print(c)
        # 用户名
        d = response.xpath('//div[@class="main-top"]/div[@class="title"]/a/text()').extract_first()
        print(d)
        # 性别
        e = response.xpath('//div[@class="main-top"]/div[@class="title"]/i/@class').extract_first()
        print(e)

        # 获取文章总数，计算页数。（简书网站默认每页是9组数据）
        temp = int(a[2])
        if (temp % 9 > 0):
            count = temp // 9 + 1
        else:
            count = temp // 9
        print("总共" + str(count) + "页")

        base_url = "https://www.jianshu.com/u/{0}?page={1}"
        for i in range(1, count + 1):
            i = count + 1 - i  #理论上正序1~count就是按顺序获取的，但是获取的数据是倒置的，所以我们获取count~1的数据，得到的数组就是按照网页形式1~count页码排序的了
            yield scrapy.Request(base_url.format(self.user_id, i), dont_filter=True, callback=self.parse_page)

    #迭代返回每页的内容
    def parse_page(self, response):
        for sel in response.xpath('//div[@id="list-container"]/ul/li'):
            item = JianshuArticleItem()
            item['wrap_img'] = sel.xpath('a/img/@src').extract_first()
            item['avatar'] = sel.xpath('div//a[@class="avatar"]/img/@src').extract_first()
            item['nickname'] = sel.xpath('div//a[@class="nickname"]/text()').extract_first()
            item['time'] = sel.xpath('div//span[@class="time"]/@data-shared-at').extract_first()
            item['title'] = sel.xpath('div/a[@class="title"]/text()').extract_first()
            item['abstract'] = sel.xpath('div/p[@class="abstract"]/text()').extract_first()
            item['read'] = sel.xpath('div/div[@class="meta"]/a[1]/text()').extract()[1]
            item['comments'] = sel.xpath('div/div[@class="meta"]/a[2]/text()').extract()[1]
            item['like'] = sel.xpath('div/div[@class="meta"]/span/text()').extract_first()
            item['detail'] = sel.xpath('div/a[@class="title"]/@href').extract_first()
            yield item

至此爬虫代码编写完毕，如果要把获取的数据保存下来，你可以终端执行如下命令：

/*
此命令用于把爬取的数据保存为json文件格式，当然你也可以保存为别的文件格式。
Scrapy官方列出的文件格式有如下几种：('json', 'jsonlines', 'jl', 'csv', 'xml', 'marshal', 'pickle')。
温馨提示：如果要再次爬取，最好换一个文件名或者清空数据再爬取，因为第二还是写入上一个文件，数据不会覆盖，
会堆积在上次获取的下面，造成json文件格式报错。
*/
scrapy crawl jianshu -o data.json
```

程序执行完后，我们可以在文件目录看到新生成的data.json文件，双击可以看到我们要获取的全部数据：

如果需要存放到数据库中，需要注释`settings.py`文件中`ITEM_PIPELINES`的如下代码：
```python
ITEM_PIPELINES = {
   'spider_pingbook.pipelines.SpiderPingbookPipeline': 300,
}
```


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
#### **安装问题**

1. 无法安装`gevent`,直接下载编译好的安装包： https://www.lfd.uci.edu/~gohlke/pythonlib

### 2.2 `scrapyd`脚本执行机器环境配置

* `scrapyd`不需要设置目录，可以同时管理多个爬虫,每个爬虫还可以有多个版本： 

```
$ pip install scrapyd
一般安装在类似目录： `/usr/local/lib/python3.9/site-packages/scrapyd`
$ find / -name "default_scrapyd.conf"
$ nano default_scrapyd.conf
1. 修改scrapyd服务的端口号，默认端口是`6800`
2. 设置远程访问端口可以放行（`bind_address`由`127.0.0.1`改成0.0.0.0）
3. 修改日志存放目录
```

上面提到配置，需要修改的配置文件内容如下：
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


所有的安装包默认安装在目录: `/usr/local/lib/python3.8/site-packages`

## 问题整理

1. 在`gerapy`安装中安装的lxml会出现错误： make sure the development packages of libxml2 and libxslt are installed 
```
sudo apt-get install libxml2-dev libxslt-dev
```

2. 执行`gerapy init`命令出现错误：
```
# gerapy init
:0: UserWarning: You do not have a working installation of the service_identity module: 'cannot import name 'opentype''.  Please install it from <https://pypi.python.org/pypi/service_identity> and make sure all of its dependencies are satisfied.  Without the service_identity module, Twisted can perform only rudimentary TLS client hostname verification.  Many valid certificate/hostname mappings may be rejected.
Initialized workspace gerapy

```
原因是：本机上的service_identity模块太老旧，而通过install安装的时候不会更新到最新版本
解决方法：

- 强制升级,执行命令:  `pip install service_identity --force --upgrade`

- 或者是找到最新版的安装包进行手动安装，最新包下载地址: `https://pypi.org/project/service_identity/#files`,下载对应的whl文件安装即可。


3. 执行`pipenv install`出现错误：ImportError: cannot import name 'Mapping' from 'collections'

原因是执行的包错误，重新安装即可

4. 在gerapy中添加机器报错: `the JSON object must be str, not 'bytes'`
可能是对应的scrapyd服务没有启动

5. 执行scrapyd命令出错: `Failed to load application: No module named '_sqlite3'`

原因是python采用编译安装的，导致没有加载对应的sqlite模块，重新编译安装加载sqlite模块，命令如下:
```
./configure --enable-optimizations --enable-ipv6 --enable-loadable-sqlite-extensions
```

6. 执行`pip -V`出错: `ModuleNotFoundError: No module named 'pip._internal.cli.main'`

解决方法，修复pip，执行命令: `python -m pip install --upgrade pip`，或者如下命令: 
```
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py --force-reinstall
```

7. 执行命令: `sudo add-apt-repository ppa:deadsnakes/ppa` ,报错：` add-apt-repository gpg: keyserver receive failed: No dirmngr`,执行如下命令安装：dirmngr:
```
sudo apt install dirmngr
```
8.执行`apt update`命令报错:` Updating from such a repository can't be done securely, and is therefore disabled by default`,执行如下命令更新包：
```
$ sudo apt-get update --allow-unauthenticated
```

9. 安装scrapy中twisted安装报错
解决方法，切换到目录： https://www.lfd.uci.edu/~gohlke/pythonlibs/#twisted，直接下载对应的whl包


10. 如何设置scrapy的默认的user-agent和proxy代理
在脚本目录下方有一个配置文件: `settings.py`, 如下配置：
```python
DOWNLOADER_MIDDLEWARES = {
  'spider_yanzhi.middlewares.UserAgentMiddleware': 401,
  'spider_yanzhi.middlewares.CookiesMiddleware': 402
}
```
第二个参数可以参考`DOWNLOADER_MIDDLEWARES_BASE`里面的默认数值：
```python
{
    'scrapy.downloadermiddlewares.robotstxt.RobotsTxtMiddleware': 100,
    'scrapy.downloadermiddlewares.httpauth.HttpAuthMiddleware': 300,
    'scrapy.downloadermiddlewares.downloadtimeout.DownloadTimeoutMiddleware': 350,
    'scrapy.downloadermiddlewares.defaultheaders.DefaultHeadersMiddleware': 400,
    'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware': 500,
    'scrapy.downloadermiddlewares.retry.RetryMiddleware': 550,
    'scrapy.downloadermiddlewares.ajaxcrawl.AjaxCrawlMiddleware': 560,
    'scrapy.downloadermiddlewares.redirect.MetaRefreshMiddleware': 580,
    'scrapy.downloadermiddlewares.httpcompression.HttpCompressionMiddleware': 590,
    'scrapy.downloadermiddlewares.redirect.RedirectMiddleware': 600,
    'scrapy.downloadermiddlewares.cookies.CookiesMiddleware': 700,
    'scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware': 750,
    'scrapy.downloadermiddlewares.stats.DownloaderStats': 850,
    'scrapy.downloadermiddlewares.httpcache.HttpCacheMiddleware': 900,
}

```

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

