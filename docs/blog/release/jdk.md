---
title: JDK版本新特性
---

## JDK 11 新特性

> 重要通知，直接从oracle的官方下载的JDK11不再是免费的，若是你一旦不小心使用Java 11进行了具有商业性的行为，那么你很可能将接到Oracle的致电，并要求你提供大量的资金。

1. 删除jre运行库，不在需要配置`JRE_HOME`环境变量
2. 删除Java EE和CORBA模块，JavaFX已经被移除
3. 字符串API增加
- `String#repeat` ，例如`"abc".repeat(3)`
- `String#isBlank`, 例如 `" ".isBlank(); // true`
- `String#strip`， 例如 `" ".strip().isBlank()`
- `String#lines`, 将字符串实例拆分为单独行的`Stream<string>`流, 例如 `"foo\nbar".lines().forEach(System.out::println)`

## JDK 10 新特性

1. 局部变量类型判断
2. GC的优化以及内存管理

## JDK 9

1. 引入了新的HTTPClient操作接口
2. `jshell`交互命令引入,类python的代码块交互平台


## JDK 8

重要: 截止到2020年底不再进行JDK8的更新

1. Lambdas表达式与Functional接口
2. 接口的默认与静态方法
3. 新增方法的调用方式类似php
4. try catch resource
5. 优化了HashMap以及ConcurrentHashMap