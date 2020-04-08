---
title: springboot List param或者http Get请求相同的参数名称覆盖不能发送
---

## 数组参数问题

我的服务器后台需要接受一个数组形式的参数,我想到的springboot形式的参数代码如下:
```
public listData(@RequestParam("pid") List<Long> projectIds)
```
所以这里我用了一个List来接受数组形式的参数,但是发现我再用前台发送类似下面的请求的时候,发现相同参数名称(这里是`pid`)会被覆盖,发送到服务器端只有一个参数,如下:

- 发送的GET类型的请求如下: `http://test.com?pid=123&pid=456`
- 实际发送的GET类型请求地址: `http://test.com?pid=456`

可以发现相同的参数请求时总是会覆盖相同的参数

## springboot 如何接受前台axios传过来的array数据,需要为POST方式,GET会覆盖相同的参数名称

默认情况下，axios传过来的array数据格式是: http://test.com/abc?params[]=test&params[]=testw3w3, 需要特殊转换springboot才能解析成对应的`List<String>` 格式的参数

- axios端传递的方法如下：

```js
  // 此处ids是数组类型，主要用到了paramsSerializer，或者设置地址: var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
      axios.post(urls.PERMISSION_BATCH_ID_URL, null, { params: { ids: ids },
        paramsSerializer: params => {
          const keys = Object.keys(params)
          let options = ''

          keys.forEach((key) => {
            const isParamTypeObject = typeof params[key] === 'object'
            const isParamTypeArray = isParamTypeObject && (params[key].length >= 0)

            if (!isParamTypeObject) {
              options += `${key}=${params[key]}&`
            }

            if (isParamTypeObject && isParamTypeArray) {
              params[key].forEach((element) => {
                options += `${key}=${element}&`
              })
            }
          })
          return options ? options.slice(0, -1) : options
        } }).then(res => {
      }).catch(error => {
        console.error(error)
      })

```

- `springboot`接受数组参数的方法如下，需要格式为`ids=123&ids=456&ids=8743434&ids=4546573424`：

```java
// 经测试此处的List<String> ids 也可以为 List[] ids
@PostMapping("/batch")
    public WebResponse deletePermissionsBatch(@RequestParam("ids") List<String> ids) {
        WebResponse response = WebResponse.getResponse();
        if (ids.size() > 0) {
            ServiceResponse serviceResponse = permissionService.removePermissionBatch(ids);
            boolean serviceResponseSuccess = serviceResponse.isSuccess();
            if (!serviceResponseSuccess) {
                response.fail(serviceResponse.getResponseCode());
            }
        } else {
            log.warn("至少输入一个权限ID: {}", ids.toString());
            response.fail(PermissionResponseCode.PERMISSION_BATCH_MISSING);
        }
        return response;
    }
```