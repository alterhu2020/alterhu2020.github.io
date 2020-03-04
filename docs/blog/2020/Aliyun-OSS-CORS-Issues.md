---
title: 如何提高国内访问Github的速度
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 问题

阿里云的oss对象存储遇到CORS跨域请求的问题，导致字体文件`woff,woff2,ttf`等格式不能访问，但是图片却在OSS可以访问。原因是OSS中配置对应的跨域请求配置`来源`参数不正确。来源参数应该是配置完整的请求地址，需要加上对应的`http://`或者`https://`.如果不能确定域名，可以打开浏览器的调试功能，查看Header中的`Origin`。

### 配置项

CORS的配置方法一般是针对每个访问来源单独配置规则，勿将多个来源加到一个规则，多个规则之间不要有覆盖冲突。其它的选项只开放需要的权限即可。CORS配置有以下几项。

- 来源（AllowedOrigin）：允许跨域请求的来源，可以同时指定多个来源。配置时需带上完整的域信息，例如：http://10.X.X.100:8001或https://www.aliyun.com。注意，不要遗漏了协议名http或https，如果端口不是默认的80，还需要带上端口。如果不能确定域名，可以打开浏览器的调试功能，查看Header中的Origin。域名支持*通配符，每个域名中允许最多使用一个*，例如https://*.aliyun.com。如果来源指定为*，则表示允许所有来源的跨域请求。
- 允许 Methods：按照需求开通对应的方法即可，调试时可以全部选择。
- 允许 Headers：允许的跨域请求Header。允许配置多条匹配规则，以回车间隔。在Access-Control-Request-Headers中指定的每个Header，都必须在Allowed Header中有对应项。Header容易遗漏，没有特殊需求的情况下，建议设置为*，表示允许所有，大小写不敏感。
- 暴露 Headers：暴露给浏览器的Header列表，即用户从应用程序中访问的响应头，例如一个Javascript的XMLHttpRequest对象。不允许使用通配符。具体的配置需要根据应用的需求确定，只暴露需要使用的Header。如果不需要暴露可以不填。大小写不敏感。该项是可选配置项。
缓存时间（MaxAgeSeconds）：浏览器对特定资源的预取请求（OPTIONS请求）返回结果的缓存时间，单位为秒。如果没有特殊情况可以稍大一点，比如60秒。该项是可选配置项。