import Ads from './components/vue-google-adsense/VueGoogleAdsense'
export default ({ 
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer
 }) => {
  if (!isServer) {
    import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
      Vue.use(module.default)
    })
  }
  // Baidu autopsh integration
  if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
    (function() {
      var bp = document.createElement("script");

      var curProtocol = window.location.protocol.split(":")[0];
      if (curProtocol === "https") {
        bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
      } else {
        bp.src = "http://push.zhanzhang.baidu.com/push.js";
      }
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(bp, s);
    })();
  }
  // 配置谷歌广告
  Vue.use(require('vue-script2'))

  Vue.use(Ads.AutoAdsense, { adClient: 'ca-pub-1893384651266286' })
  Vue.use(Ads.Adsense)
  Vue.use(Ads.InArticleAdsense)
  Vue.use(Ads.InFeedAdsense)
}
