---
title: Jetbrains IntelliJ IDEA
---

> 体验是很好，唯一的就是很耗内存，所以设置了堆的最大空间为如下,体验上还行，没有出现特别耗内存的情况：

```
-Xms750m
-Xmx750m
```

## 破解补丁

更新最新的破解补丁文档2020/03/10:[ jetbrains-agent 一手更新](https://zhile.io/2018/08/17/jetbrains-license-server-crack.html)

更新到最新显示版本：2019.3.3 ，截至时间为： 2020年3月8日。~~参考文档[IntelliJ IDEA 2019.3.3补丁失效问题](https://segmentfault.com/a/1190000021914963)~~。其实网上大多的补丁只要1353kb,而最新的却有2.1m

> 切记通过启动idea进行修改参数,不要直接修改idea64.exe.文件，在vmoptions文件增加如下参数（绝对路径）:

-javaagent:E:\ProgramFiles\JetBrains\IntelliJIDEA2019.2.1\bin\jetbrains-agent.jar