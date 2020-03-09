---
title: Vue 父子组件双向绑定
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 父组件向子组件传值
通过`props`属性传值，子组件`data`中定义一个新的副本，用来保存父组件传递过来的值。然后在`watch`中监听对应的props和data的属性值变化。

## 子组件向父组件传值
通过`$emit`方法传值，可以用三种方式
- 直接$emit一个事件，然后父组件可以通过@事件获取对应的值
```js
// 子组件
 this.$emit('click', newValue)
```
- 直接`$emit`方法传递input方法，其实父组件此时通过@input获取了对应的值
```js
// 子组件
 this.$emit('input',newValue)
```
-直接`$emit`方法加上对应的`update:事件`,然后父组件可以用两种方式获取子组件的值：
```js
// 子组件
this.$emit('update:show',newValue)
// 父组件
`show.sync`  或者 `:show @update:show`
```