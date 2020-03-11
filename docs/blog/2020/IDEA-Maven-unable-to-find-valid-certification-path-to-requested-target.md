---
title: IDEA maven安装包报错 unable to find valid certification path to requested target
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## IDEA maven安装包报错 unable to find valid certification path to requested target

报错信息:
```sh
Could not transfer artifact org.apache.maven.plugins:maven-install-plugin:pom:2.4 from/to alimaven (https://maven.aliyun.com/repository/central): sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
```
解决

添加参数

`-Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true`
![](https://img2018.cnblogs.com/i-beta/1391561/201912/1391561-20191224125111091-1607460807.png)