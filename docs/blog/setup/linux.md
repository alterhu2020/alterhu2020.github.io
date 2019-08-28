---
title: Debian Linux命令其环境配置
---


## Linux中Cache内存占用过高解决办法

文章来源: [解决Linux buffer/cache内存占用过高的办法](https://blog.csdn.net/ailice001/article/details/80353924)

1. 在Linux系统中，我们经常用free命令来查看系统内存的使用状态。
2. 如何回收cache？

```
$ echo 1 > /proc/sys/vm/drop_caches:表示清除pagecache。
$ echo 2 > /proc/sys/vm/drop_caches:表示清除回收slab分配器中的对象（包括目录项缓存和inode缓存）。slab分配器是内核中管理内存的一种机制，其中很多缓存数据实现都是用的pagecache。
$ echo 3 > /proc/sys/vm/drop_caches:表示清除pagecache和slab分配器中的缓存对象。
```

## 设置时区

参考设置连接: [Debian 8 设置时区和时间配置](https://www.cnblogs.com/yoyotl/p/8151409.html)

```
$ tzselect
```
