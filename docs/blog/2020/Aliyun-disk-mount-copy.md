---
title: 阿里云云盘挂载和挂载后复制数据文件
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]


## 创建一个磁盘（云盘）

参考： https://help.aliyun.com/document_detail/32317.html

## 实例挂载磁盘

参考： https://help.aliyun.com/document_detail/25446.html

## 实例查看挂载的磁盘

参考： https://www.cnblogs.com/fangts/p/10253887.html

查看设备号后挂载指定的设备到一个文件夹目录上

```
$ fdisk -l
$ mount /dev/vdb1 /opt
$ df 
```

## 数据盘的卸载

输入 `umount /dev/vdb1`
如果提示设备忙，无法挂载

```
fuser -km /dev/vdb1
umount /dev/vdb1
```

再删除/etc/fstab文件中，如下的数据

```
/dev/vdb1  /data ext3    defaults    0  0
```