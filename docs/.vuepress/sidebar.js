module.exports ={
  '/blog/': [
    {
      title: '写在前面',
      collapsable: false,
      children: [
        '',
        'synax'
      ]
    },
    {
      title: '2019年',
      collapsable: false,
      children: [
        ['2019/04-26-what','4月26日笔记']
      ]
    },
    {
      title: '优秀电影电视作品',
      collapsable: false,
      path: '/blog/video/',
      children: [
        ['video/game-of-the-thrones','权利的游戏第八季(终结篇)']
      ],
    },
    {
      title: '精选资源',
      collapsable: false,
      children: [
        ['http://www.ruanyifeng.com/blog/','阮一峰博客'],
        ['https://github.com/vuejs/awesome-vue','awesome vue'],
        ['https://github.com/vueComponent/ant-design-vue-awesome','awesome ant-design-vue'],
        ['https://github.com/ulivz/awesome-vuepress','awesome-vuepress']
      ]
    }
  ]
}
