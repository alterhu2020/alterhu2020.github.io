---
title: Python SQLAlchemy Linux安装及其环境配置
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## SQLAlchemy model code generator[更新到2019年8月10日]

Python环境下执行如下命令全局安装`sqlacodegen`

```shell script

$ pip install pymysql sqlacodegen
$ sqlacodegen --noviews --noindexes --nojoined --outfile models.py  mysql+pymysql://syscorer:s6s@#@!L0ngh@192.168.1.7:3306/heapstack 
$ sqlacodegen --noviews --noindexes --nojoined --noinflect --noclasses --outfile models.py  mysql+pymysql://syscorer:s6s@#@!L0ngh@192.168.1.7:3306/heapstack 
$ sqlacodegen --tables abc --noviews --noindexes --nojoined --noinflect --noclasses --outfile models.py  mysql+pymysql://syscorer:s6s@#@!L0ngh@192.168.1.7:3306/heapstack 

```