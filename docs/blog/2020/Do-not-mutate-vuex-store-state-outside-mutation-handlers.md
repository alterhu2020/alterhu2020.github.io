---
title: Vuex Do not mutate vuex store state outside mutation handlers
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>


[[toc]]

## 报错： Do not mutate vuex store state outside mutation handlers

直接引用vuex中的getter属性，然后放在`v-model`的时候，如果有更新会设置vuex的getter属性，而在vuex的**strict mode**下就会报上面的错误。

推荐参考： http://shzhangji.com/blog/2018/04/17/form-handling-in-vuex-strict-mode/

两种解决方式：
一种是了解到v-model是一个语法糖，所以设置了v-model后设置下对应的input和change事件，然后在事件里面调用vuex的action进行更新，而不是组件里面的v-model自动的更新。

一种是使用：[ `vuex-map-fields`]( https://github.com/maoberlehner/vuex-map-fields) 可以实现vuex的双向绑定。


## Vue.set 向响应式对象中添加响应式属性，及设置数组元素触发视图更新

一、为什么需要使用Vue.set？

　　vue中不能检测到数组和对象的两种变化：

　　1、数组长度的变化 vm.arr.length = 4

　　2、**数组通过索引值修改内容 vm.arr[1] = ‘aa’**

　　Vue.$set(target,key,value)：可以动态的给数组、对象添加和修改数据，并更新视图中数据的显示。

　　vue在构造函数new Vue()时，就通过Object.defineProperty中的getter和setter 这两个方法，完成了对数据的绑定。所以直接通过vm.arr[1] = ‘aa’的方法，无法修改值去触发vue中视图的更新，必须还得通过Object.defineProperty的方法去改变，而Vue.$set（）就封装了js底层的Object.defineProperty方法。

　　所以我们需要利用Vue.set() 响应式新增与修改数据。

二、Vue.set使用

　　Vue不能检测到对象属性的添加或删除。

　　由于Vue会在初始化实例时对属性执行getter/setter转化过程，所以属性必须在data对象上存在才能让Vue转换它，这样才能是响应式的。例如：


所以注意两点：

1. 对于数据中某一个数组的修改，需要使用Vue.set，或者$set， 这个数组数据可以是**data属性**或者是**vuex中的state属性**。例如修改数组this.array[1]这种方式是不起作用的。
2. 对于数据中的某一个对象的属性添加或者删除，

