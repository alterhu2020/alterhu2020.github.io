---
title: Vue $on,$emit 父子组件不同组件时间通信
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 父子组件通信

## 不同组件通信

### 单组件通用使用



### 全局vue实例使用
1. 在vue的入口main.js中定义`$eventHub`
```js
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
```
2. 然后在vue的组件的生命周期函数中声明监听的事件
```js
beforeCreated(){
   this.$eventHub.$on('eventName',callback)
},
mounted() {
 this.$eventHub.$on('eventName',callback)
}

```
