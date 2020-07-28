const HighlightDsl = require('./public/js/highlight-dsl')
const HighlightRules = require('./public/js/highlight-rules')
const base = process.env.NODE_ENV === 'production' ? `/` : '/'
const sidebar = require('./sidebar')
module.exports = {
    title: "评布客博客",
    description: "人生处万类，知识最为贤。 —— 韩愈",
    dest: "../pingbook-dist",
    host: "localhost",
    base: base,
    shouldPrefetch: () => false,
    head: [
        ['link', { rel: 'alternate', type: 'application/rss+xml', href: '/rss.xml', title: '评布客博客' }],
        ['link', { rel: 'stylesheet', href: `/fonts/fonts.css` }],
        ['link', { rel: 'icon', href: `/favicon.ico` }],
        ['link', { rel: 'shortcut icon', href: `/img/favicon.ico` }],
        ['link', { rel: 'apple-touch-icon', href: `/img/logo.png` }],
        ['meta', { name: 'keywords', content: '评布客,评布客博客,java,python,vue,技术培训,前端培训,后端培训,ionic,springboot,vue,小程序,安卓app,苹果App,技术博客,分享,vuejs,python,灵鸽,爬虫,python爬虫' }],
        ['meta', { name: 'description', content: '评布客博客，点滴记录贵在坚持' }],
        ['meta', { name: "google-site-verification", content: "pyUtZja0WJ34YSL_6K0FkcYBU7pDR56XMU92nvDtz7k" }],
        // ['script', {
        //     id: 'cookieinfo',
        //     src: 'https://cookieinfoscript.com/js/cookieinfo.min.js',
        //     'data-message': "我们使用cookies来提高用户体验,继续浏览网站表示同意我们使用cookies.",
        //     'data-linkmsg': '了解更多',
        //     'data-bg': "#645862",
        //     'data-fg': "#FFFFFF",
        //     'data-link': "#F1D600",
        //     'data-cookie': "CookieInfoScript",
        //     'data-text-align': "left",
        //     'data-close-text': "知道了!"
        // }],
        ['script', { async: true, src: "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js" }],
        ['script', { async: true, src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" }],
        ['script', {},
            "(adsbygoogle = window.adsbygoogle || []).push({  google_ad_client: 'ca-pub-1893384651266286',  enable_page_level_ads: true });"
        ]
    ],
    markdown: {
        config: md => {
            md.lineNumbers = true
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
                    str.match(/\bval\b/) || str.match(/\bvar\b/) /* <-- dangerous! */ ) {

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
        ['vuepress-plugin-seo', {
            siteTitle: (_, $site) => $site.title,
            title: $page => $page.title,
            description: $page => $page.frontmatter.description,
            author: (_, $site) => $site.themeConfig.author,
            tags: $page => $page.frontmatter.tags,
            twitterCard: _ => 'summary_large_image',
            type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
            url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
            image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
            publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
            modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
        }],
        ['@vuepress/search', {
            search: true,
            searchMaxSuggestions: 10
        }],
        ['@vuepress/google-analytics', {
            ga: 'UA-122219517-1'
        }],
        ['vuepress-plugin-sitemap', {
            hostname: 'https://code.pingbook.top'
        }],
        ['vuepress-plugin-rss-support', {
            site_url: 'https://code.pingbook.top',
            filter: page => /^\/201.+/.test(page.path),
            copyright: '2020 评布客博客',
            count: 60
        }],
        ['vuepress-plugin-zooming', {
            // selector for images that you want to be zoomable
            // default: '.content img'
            selector: '.content img',
            // make imgaes zoomable with delay after entering a page
            // default: 500
            delay: 500,
            // options of zooming
            // default: {}
            options: {
                bgColor: 'black',
                zIndex: 10000,
            },
        }],
        ['@vuepress/back-to-top', true],
        ['@vssue/vuepress-plugin-vssue', {
            // locale: 'en',
            platform: 'github',
            owner: 'alterhu2020',
            repo: 'alterhu2020.github.io',
            state: 'Vssue',
            prefix: '[评布客博客]',
            labels: ['留言'],
            clientId: 'd9eac798d58806be2dbc',
            clientSecret: 'bf6cfe43d956baf67f6816a7a1f17a42c1064eec'
        }],
    ],
    // extend: '@vuepress/theme-default',
    themeConfig: {
        // repo: 'alterhu2020/alterhu2020.github.io',
        // logo: '/img/logo.png',
        docsDir: 'docs',
        docsBranch: 'develop',
        sidebarDepth: 2, // 侧边栏目录对应的 Markdown 标题，从二级标题开始显示两级。
        editLinks: true,
        editLinkText: '发现错误？想参与编辑？在 GitHub 上编辑此页',
        lastUpdated: '最后更新',
        nav: [{
                text: '博客',
                link: '/blog/'
            },
            {
                text: '留言板',
                link: '/contact-me/'
            },
            {
                text: '历史更新',
                link: '/CHANGELOG.html'
            },
            {
                text: 'JVFast管理框架',
                link: 'https://pingbook.top'
            },
            {
                text: 'ant-design-vue',
                link: 'https://code.pingbook.top/ant-design-vue'
            },
            {
                text: 'ionic-vue',
                link: 'https://code.pingbook.top/ionic-vue'
            }
        ],
        sidebar: sidebar
    }
};