---
title: artipub多平台博客发布工具使用搭建
---

ArtiPub (Article Publisher的简称，意为"文章发布者")是一款开源的一文多发平台，可以帮助文章作者将编写好的文章自动发布到掘金、SegmentFault、CSDN、知乎、开源中国等技术媒体平台，传播优质知识，获取最大的曝光度。ArtiPub安装简单，提供了多种安装方式，可以一键安装使用，安装一般只要5分钟。

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

### 通过源码安装

**克隆Github Repo**

```bash
git clone https://github.com/crawlab-team/artipub
```

**安装npm包**

```bash
cd artipub
npm install
```

**启动前端**

```bash
npm run start:frontend
```

**启动后端**

```bash
npm run start:backend
```

**配置数据库**

数据库的配置在`./config.js`中，可以按情况配置。

**配置后端API地址**

如果您部署的服务不在本机，需要在`./src/config/config.ts`中将`apiEndpoint`改成对应的IP地址+端口。

