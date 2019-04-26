const HighlightDsl = require('./public/js/highlight-dsl')
const HighlightRules = require('./public/js/highlight-rules')
const base = process.env.NODE_ENV === 'production' ? `/` : '/'
const sidebar = require('./sidebar')
module.exports = {
  title: "Walter博客",
  description: "点滴记录，贵在坚持",
  dest: "../pingbook-dist",
  host: "localhost",
  base: base,
  shouldPrefetch: () => false,
  head: [
    ['link', {rel: 'alternate', type: 'application/rss+xml', href: '/rss.xml', title: 'Walter博客'}],
    ['link', {rel: 'stylesheet', href: `/fonts/fonts.css`}],
    ['link', {rel: 'icon', href: `/favicon.ico`}],
    ['link', {rel: 'shortcut icon', href: `/favicon.ico`}],
    ['link', {rel: 'apple-touch-icon', href: `/logo.png`}],
    // ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Open+Sans:300,400` }],
    ['meta', {property: 'og:type', content: 'website'}],
    ['script', {
      id: 'cookieinfo',
      src: 'https://cookieinfoscript.com/js/cookieinfo.min.js',
      'data-message': "我们使用cookies来提高用户体验,继续浏览网站表示同意我们使用cookies.",
      'data-linkmsg': '了解更多',
      'data-bg': "#645862",
      'data-fg': "#FFFFFF",
      'data-link': "#F1D600",
      'data-cookie': "CookieInfoScript",
      'data-text-align': "left",
      'data-close-text': "知道了!"
    }]
  ],
  markdown: {
    config: md => {
      md.options.linkify = true
      const highlight = md.options.highlight
      md.options.highlight = (str, lang) => {
        /* Simple heuristics to detect rules & other openHAB DSL code snippets and override the language */
        if (str.match(/\b(?:Color|Contact|Dimmer|Group|Number|Player|Rollershutter|Switch|Location|Frame|Default|Text|Group|Selection|Setpoint|Slider|Colorpicker|Chart|Webview|Mapview|Image|Video|Item|Thing|Bridge|Time|Type|Sitemap|sitemap)\b/)) {
          lang = 'dsl'
        }
        if (str.match(/\b(?:String|DateTime)\b/) && lang !== 'java' && lang !== 'xml') {
          lang = 'dsl'
        }
        if ((str.match(/\brule\b/) && str.match(/\bwhen\b/) && str.match(/\bthen\b/) && str.match(/\bend\b/)) ||
          str.match(/received update/) || str.match(/changed.*(?:from|to)/) || str.match(/Channel.*triggered/) ||
          str.match(/\bval\b/) || str.match(/\bvar\b/) /* <-- dangerous! */) {

          if (lang !== 'nginx' && lang !== 'shell') lang = 'rules'
        }
        if (lang === 'shell' || lang === 'sh' || lang === 'shell_session') lang = 'bash'
        if (lang === 'conf') lang = 'dsl'
        if (lang === 'JSON') lang = 'json'
        // if (lang === 'xtend' || lang === 'text' || !lang) {
        //   console.log('Cannot determine language of code: ' + lang)
        //   console.log(str)
        // }

        if (!Prism.languages.dsl || !Prism.languages.rules) {
          Prism.languages.dsl = HighlightDsl
          Prism.languages.rules = HighlightRules
        }

        return highlight(str, lang)
      }
    }
  },
  serviceWorker: false,
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/sidebar.js'
  ],
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-122219517-1'
    }],
    ['vuepress-plugin-rss-support', {
      site_url: 'https://vrpano.yitieyilu.com/docs',
      filter: page => /^\/201.+/.test(page.path),
      copyright: '2019 Walter博客',
      count: 60
    }],
    ['@vssue/vuepress-plugin-vssue', {
      locale: 'zh',
      platform: 'github',
      owner: 'alterhu2020',
      repo: 'alterhu2020.github.io',
      state: 'Vssue',
      prefix: '[Walter博客]',
      labels: ['留言'],
      clientId: 'd9eac798d58806be2dbc',
      clientSecret: 'bf6cfe43d956baf67f6816a7a1f17a42c1064eec'
    }],
  ],
  themeConfig: {
    repo: 'alterhu2020/alterhu2020.github.io',
    docsDir: 'docs',
    docsBranch: 'develop',
    editLinks: true,
    editLinkText: '发现错误？想参与编辑？在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    algolia: {
      apiKey: 'd9708b4d74ba98295f2a87341fae3f0c',
      indexName: 'vrpano'
    },
    nav: [
      {
        text: '博客',
        link: '/blog/'
      },
      {
        text: '更新日志',
        link: '/CHANGELOG.html'
      },
      {
        text: '留言板',
        link: '/contact-me/'
      }
    ],
    sidebar: sidebar
  }
};
