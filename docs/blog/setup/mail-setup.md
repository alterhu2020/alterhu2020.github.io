---
title: 各种主流邮件服务商配置发送服务
---

相关参考模板说明： [freemarker使用](https://juejin.im/post/5b598eccf265da0f4e62dfbc)

1. 变量语法类似于javascript中的${} 语法

## Gmail

用户密码设置：

发件服务器地址：

SMTP 服务器地址：smtp.gmail.com 端口: 25， SSL 加密端口: 465

Port for TLS/STARTTLS: 587
Port for SSL: 465

```
 # gmail：
    protocol: smtp
    host: smtp.gmail.com
    # ssl: 465 ,or 25
    port: 465
    username: alterhu2020@gmail.com
    password: ENC(84rFTtest3pgmYMtestcwQxWWPXOZqjLqHq5wIbh0fCiqNM=)

```


## QQ

参考配置文档： https://blog.csdn.net/qq_37991944/article/details/103651197

在开启服务中选择开启POP3/SMTP服务，并将产生的smtp授权码（发送邮件的代码中会用到）复制


## 阿里云邮箱

参考地址是： 

* https://help.aliyun.com/knowledge_detail/36576.html?spm=a2c4g.11186631.2.3.433744fdFk5ywM

* https://help.aliyun.com/knowledge_detail/36687.html?spm=a2c4g.11186623.4.1.11d95ed8Bnx84N

企业云邮箱各个服务器地址及端口信息如下：

1. 收件服务器地址：

1.1 POP 服务器地址：pop3.mxhichina.com 端口110，SSL 加密端口995

或

1.2 IMAP 服务器地址：imap.mxhichina.com 端口143，SSL 加密端口993

2. 发件服务器地址：

2.1 SMTP 服务器地址：smtp.mxhichina.com 端口: 25， SSL 加密端口: 465
