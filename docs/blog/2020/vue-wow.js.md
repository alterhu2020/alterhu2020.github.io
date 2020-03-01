---
title: WOW.js在页面滚动时展现动感的元素动画效果
---

> 插件描述：WOW.js 是一款帮助你实现滚动页面时触发CSS 动画效果的插件

在一些网页上，当你滚动页面的时候会看到各式各样的元素动画效果，非常动感。WOW.js 就是一款帮助你实现这种 CSS 动画效果的插件，很容易定制，你可以改变动画设置喜欢的风格、延迟、长度、偏移和迭代等。

Github仓库: [https://github.com/matthieua/WOW](https://github.com/matthieua/WOW)

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

# Vue中使用方法

由于其依赖于animate.css，所以可以不用再安装[animate.css](https://github.com/daneden/animate.css)
- NPM
```
npm install wowjs
```
- YARN
```
yarn add wowjs
```

1. 引入文件
```	
<link rel="stylesheet" href="css/animate.min.css">
```

2. 然后直接在html中使用如下代码：
```
<div class="wow slideInLeft"></div>
<div class="wow slideInRight"></div>
```
可以加入 data-wow-duration（动画持续时间）和 data-wow-delay（动画延迟时间）属性，如：
```
<div class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s"></div>
<div class="wow slideInRight" data-wow-offset="10"  data-wow-iteration="10"></div>
```
3. JavaScript
```js
 import {WOW} from 'wowjs';
 mounted() { 
     new WOW().init()
 },
 watch: {
    cases() {
        this.$nextTick(() => { // 在dom渲染完后,再执行动画
            const wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: false
            })
            wow.init()
        })
    }
 }
```
4. 配置


```js
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         false,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
```

# nuxt中使用方法

Vue和Nuxt中最大的差别是在Nuxt中不可以直接使用window和document对象，因为在Nuxt中代码要经过两遍打包，一遍是在客户端，client端是有window和document对象的，一遍是在server端，但是server端中是没有window和document对象的，打包就会报错。而Vue中不是，Vue只在client端打包一次，所以有window，不会报错。

参考配置: [https://zhuanlan.zhihu.com/p/67312908](https://zhuanlan.zhihu.com/p/67312908)

在Nuxt中判断当前环境是不是clinet环境有一个变量 `process.browser` ,返回值为true 表示当前是`client`环境，false表示不是。

1. js中使用

```js
 // <script>
        if (process.browser) { // 在这里根据环境引入wow.js
            const {WOW} = require('wowjs')
        }
        export default {
            name: "index",
            data() {
                return {}
            },
            mounted() {
                if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
                    new WOW({
                        live: false, 
                        offset: 0
                    }).init()
                }
            }
        }
    // </script>
```

其他参考： [How to use WOW.js with nuxt(https://github.com/nuxt/nuxt.js/issues/1064)](https://github.com/nuxt/nuxt.js/issues/1064)

# 问题

温馨提示：live为true时，浏览器调试器会弹出警告： [参考：WOW.js cannot detect dom mutations, please call .sync() after loading new content. · Issue #166 · matthieua/WOW](参考：WOW.js cannot detect dom mutations, please call .sync() after loading new content. · Issue #166 · matthieua/WOW)