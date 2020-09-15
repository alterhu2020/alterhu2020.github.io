---
title: 阿里云OSS对象存储报错AccessDenied
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 阿里云oss对象存储报错AccessDenied



在外网访问任意的oss资源总是返回如下的报错信息: 
```

<Error>
<Code>AccessDenied</Code>
<Message>AccessDenied</Message>
<RequestId>5F52E0DF2980C63833C17934</RequestId>
<HostId>yanzhi-bucket.oss-cn-hangzhou.aliyuncs.com</HostId>
</Error>

```

官方提到的解决方法是： https://help.aliyun.com/knowledge_detail/42777.html ， 提到排除问题为：
说明访问OSS的用户没有当前操作的权限。请确认使用的AccessKeyID/AccessKeySecret是正确的。如果使用的是子帐号或临时账户（STS），请确认当前用户的权限。在访问控制管理控制台单击 用户管理，单击 需要确认权限的用户，单击 用户授权策略 > 加入组的授权策略查看该用户的权限，确认是否已经赋予当前用户Bucket或Object的操作权限。

但是其实相关的AccessKeyID/AccessKeySecret配置都是没有问题，用户也已经授权了。还是报这个错误。


## 解决方法

关闭“请求者付费”即可

![20200905085147-2020-09-05](https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20200905085147-2020-09-05.png)