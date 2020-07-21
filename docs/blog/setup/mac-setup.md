---
title: Mac机器或者虚拟机相关配置配置
---

相关参考模板说明： [freemarker使用](https://juejin.im/post/5b598eccf265da0f4e62dfbc)

1. 变量语法类似于javascript中的${} 语法

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 允许来自任何地方的软件安装

先查看"设置”->"安全性与隐私"中是不是"允许任何来源",如果不存在该选项。

1. 在终端中输入`sudo spctl --master-disable`指令
2. 验证密码之后即可重新开启"允许任何来源"的选项
3. 最后可以重启后重试

## 增强工具安装失败

1. 查看安装日志文件`/private/var/log/install.log`,或者“访达”-》“应用工具”-》“实用工具”-> "控制台"-》“日志报告”

目前没有找到解决方法，直接使用百度网盘暂时。

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>
