---
title: 阿里云对象存储自定义证书切换操作步骤
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 问题

阿里云的对象存储采用的是自定义的let's Encrypt证书，而非官方的付费证书。每三个月需要手动进行切换证书。

## 操作步骤

1. 回到阿里云的**域名解析服务**中,将对应的对象存储**绑定的域名解析到服务器的ip**而**非对应的对象存储设置的域名**，类似于: `xxx.com.w.kunlunca.com`

```
res.yitieyilu.com.w.kunlunca.com

```
2. 回到对应的服务器上将该域名证书进行续期： 

```
$ certbot renew
```

根据提示找到对应的renew后新的公钥私钥文件，例如: `etc/letsencrypt/live/xxx.com` 目录下面的公钥私钥文件: `fullchain.pem`, `privkey.pem`.

3. 回到CDN配置页面： https://cdnnext.console.aliyun.com/overview，在对应的域名下点击“管理”进行配置页面

![20200819090154-2020-08-19](https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20200819090154-2020-08-19.png)

切换到"HTTPS配置”，点击“修改配置”, 在弹出的对话框中选择“自定义上传（证书+私钥）”，在内容中输入`fullchain.pem`文件中的内容，在“私钥”中输入: `privkey.pem`中的内容。点击确认即可完成。


4. 重新回到阿里云的域名解析服务中,将上面配置的对应的对象存储**绑定的域名解析到服务器的ip**改成**对应的对象存储设置的域名**，例如： 
`res.yitieyilu.com.w.kunlunca.com`

5. 回到对象存储页面点击一个上传的图片，通过自定义域名访问确认配置时候已经生效。


