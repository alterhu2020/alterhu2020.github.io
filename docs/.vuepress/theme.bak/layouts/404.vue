<template>
  <div class="theme-container">
    <div class="content">
      <h1>找不到你要的资源</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">返回首页</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `找不到你要的资源`,
  `链接无法访问，请确认访问地址`,
  `我们也不确定你怎么会到这个页面`,
  `地址无效，无法查看页面内容`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
