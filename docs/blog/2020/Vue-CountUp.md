---
title: Vue CountUp组件使用及其配置
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 简介
> Vue.js component wrap for CountUp.js

## 安装`countup.js`

```bash
$ npm install --save countup.js 
```

## 封装的一个vue版本的countup.js组件(文件位置: `/components/vue-countup/index`)

组件源码参考: [vue-countup-v2](https://github.com/xlsdg/vue-countup-v2)

```js
<template>
  <span />
</template>

<script>
import { CountUp } from 'countup.js'

const typeOf = type => object => Object.prototype.toString.call(object) === `[object ${type}]`

// const isString = typeOf('String');
// const isObject = typeOf('Object');
const isFunction = typeOf('Function')

export default {
  __countup__: CountUp,
  name: 'VueCountUp',
  props: {
    delay: {
      type: Number,
      required: false,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    options: {
      type: Object,
      required: false,
      default: () => {
        return {
          duration: 2,
          useEasing: true,
          useGrouping: true
        }
      }
    }
  },
  data () {
    return {
      instance: null
    }
  },
  // computed: {},
  watch: {
    endVal: {
      handler (value) {
        const that = this

        if (that.instance && isFunction(that.instance.update)) {
          that.instance.update(value)
        }
      },
      deep: false
    }
  },
  // beforeCreate() {
  //   const that = this;
  //   console.log('beforeCreate');
  // },
  // created() {
  //   const that = this;
  //   console.log('created');
  // },
  // beforeMount() {
  //   const that = this;
  //   console.log('beforeMount');
  // },
  mounted () {
    const that = this
    // console.log('mounted');
    that.create()
  },
  // beforeUpdate() {
  //   const that = this;
  //   console.log('beforeUpdate');
  // },
  // updated() {
  //   const that = this;
  //   console.log('updated');
  // },
  // activated() {
  //   const that = this;
  //   console.log('activated');
  // },
  // deactivated() {
  //   const that = this;
  //   console.log('deactivated');
  // },
  beforeDestroy () {
    const that = this
    // console.log('beforeDestroy');
    that.destroy()
  },
  methods: {
    create () {
      const that = this
      if (that.instance) {
        return
      }

      const dom = that.$el
      const instance = new CountUp(
        dom,
        that.endVal,
        that.options
      )

      if (instance.error) {
        // error
        return
      }

      that.instance = instance

      if (that.delay < 0) {
        that.$emit('ready', instance, CountUp)
        return
      }

      setTimeout(() => instance.start(() => that.$emit('ready', instance, CountUp)), that.delay)
    },
    destroy () {
      const that = this
      that.instance = null
    },
    printValue (value) {
      const that = this

      if (that.instance && isFunction(that.instance.printValue)) {
        return that.instance.printValue(value)
      }
    },
    start (callback) {
      const that = this

      if (that.instance && isFunction(that.instance.start)) {
        return that.instance.start(callback)
      }
    },
    pauseResume () {
      const that = this

      if (that.instance && isFunction(that.instance.pauseResume)) {
        return that.instance.pauseResume()
      }
    },
    reset () {
      const that = this

      if (that.instance && isFunction(that.instance.reset)) {
        return that.instance.reset()
      }
    },
    update (newEndVal) {
      const that = this

      if (that.instance && isFunction(that.instance.update)) {
        return that.instance.update(newEndVal)
      }
    }
  }
  // destroyed() {
  //   const that = this;
  //   console.log('destroyed');
  // },
  // errorCaptured(err, vm, info) {
  //   const that = this;
  //   console.log('errorCaptured');
  //   return true;
  // },
}
</script>

<style lang="less" scoped>
</style>

```
## `plugins/nuxt-countup`配置

```js
import Vue from 'vue'
import CountUp from '@/components/vue-countup/index'
export default () => {
// register component to use
  Vue.component('CountUp', CountUp)
}
```

## `nuxt.config.js`中配置参数如下：

```js
 plugins: [{ src: '~/plugins/nuxt-countup', ssr: false }]
```
