---
title: springboot List param或者http Get请求相同的参数名称覆盖不能发送
---

## 问题

我的服务器后台需要接受一个数组形式的参数,我想到的springboot形式的参数代码如下:
```
public listData(@RequestParam("pid") List<Long> projectIds)
```
所以这里我用了一个List来接受数组形式的参数,但是发现我再用前台发送类似下面的请求的时候,发现相同参数名称(这里是`pid`)会被覆盖,发送到服务器端只有一个参数,如下:

- 发送的GET类型的请求如下: `http://test.com?pid=123&pid=456`
- 实际发送的GET类型请求地址: `http://test.com?pid=456`

可以发现相同的参数请求时总是会覆盖相同的参数,