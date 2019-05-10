module.exports ={
  '/blog/': [
    {
      title: '前序',
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
        '2019/05-10-what',
        '2019/05-09-what',
        '2019/05-06-what',
        '2019/05-04-what',
        '2019/05-02-what',
        '2019/04-30-what',
        '2019/04-29-what',
        '2019/04-28-what',
        '2019/04-26-what'
      ]
    },
    {
      title: '开发工具',
      collapsable: false,
      children: [
          'tools/idea',
          'tools/vscode',
          'tools/ps'
      ]
    },
    {
      title: '优秀影视作品集',
      collapsable: false,
      path: '/blog/video/',
      children: [
        'video/arctic',
        'video/as-far-as-my-feet-carry-me',
        ['video/game-of-the-thrones','权利的游戏(终结篇)']
      ],
    },
    {
      title: '友情链接',
      collapsable: false,
      children: [
        ['http://www.ruanyifeng.com/blog/','阮一峰博客'],
        ['https://github.com/vuejs/awesome-vue','awesome vue'],
        ['https://ionicframework.com/docs/components','Ionic Vue Components'],
        ['https://github.com/vueComponent/ant-design-vue-awesome','awesome ant-design-vue'],
        ['https://github.com/ulivz/awesome-vuepress','awesome-vuepress']
      ]
    }
  ]
}
