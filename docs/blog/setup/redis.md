---
title: Redis Linux安装及其环境配置
---

## 安装

```
$ sudo apt-get install redis-server -y
```
## 修改配置文件

只需要修改配置文件中的密码

## 卸载redis

您只需在终端中键入以下命令即可。这将删除 `redis-server` 软件包和不再需要的其他相关软件包（因为 `--auto-remove` 参数）。它还会删除 redis-server 的本地/配置文件（因为 purge 参数）。
```
sudo apt-get purge --auto-remove redis-server
```