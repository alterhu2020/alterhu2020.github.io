/* eslint-disable no-unused-vars */
/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Becauseqa.Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
// Pages with lazy reloading,Vue-Router 懒加载,这样会导致chunkFileName多生成js文件
// see: https://vuejsdevelopers.com/2017/07/08/vue-js-3-ways-code-splitting-webpack/
// const Home = resolve => require(['@/pages/Home'], resolve)
// const HotRelease = resolve => require(['@/pages/HotRelease'], resolve)
// const HotReleaseDetail = resolve => require(['@/pages/HotReleaseDetail'], resolve)
import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import store from '../store'

import storeUtils from '../utils/StoreUtils'
import webconfig from '../../webconfig'

const NotFoundView = () => import(/* webpackChunkName: "common" */ '@/pages/404.vue').then(m => m.default)
const NoPermissionView = () => import(/* webpackChunkName: "common" */ '@/pages/401.vue').then(m => m.default)
const LoginView = () => import(/* webpackChunkName: "common" */ '@/pages/Login.vue').then(m => m.default)

const HomeLayoutView = () => import(/* webpackChunkName: "map" */ '@/components/HomeLayout.vue').then(m => m.default)
const MapAndMarkerView = () => import(/* webpackChunkName: "map" */ '@/pages/Map.vue').then(m => m.default)
const MarkerLayoutView = () => import(/* webpackChunkName: "map" */ '@/components/MarkerLayout.vue').then(m => m.default)
const MarkStep1View = () => import(/* webpackChunkName: "map" */ '@/pages/MarkerStep1.vue').then(m => m.default)
const MarkStep2View = () => import(/* webpackChunkName: "map" */ '@/pages/MarkerStep2.vue').then(m => m.default)

const PanoView = () => import(/* webpackChunkName: "pano" */ '@/pages/Pano.vue').then(m => m.default)
const ReleaseNoteDetailView = () => import(/* webpackChunkName: "release" */ '@/pages/ReleaseNoteDetail.vue').then(m => m.default)

const EasyPanoLayoutView = () => import(/* webpackChunkName: "easypano" */ '@/components/EasyPanoHomeLayout.vue').then(m => m.default)
const EasyPanoHomeView = () => import(/* webpackChunkName: "easypano" */ '@/pages/easypano/PanoHome.vue').then(m => m.default)
const EasyPanoUploadView = () => import(/* webpackChunkName: "easypano" */ '@/pages/easypano/PanoUpload.vue').then(m => m.default)

const EasyPanoUserCenterView = () => import(/* webpackChunkName: "easypano" */ '@/pages/easypano/PanoUserCenter.vue').then(m => m.default)
const EasyPanoPersonInfoView = () => import(/* webpackChunkName: "easypano" */ '@/pages/easypano/PanoPersonInfo.vue').then(m => m.default)
const EasyPanoUserCenterApproveView = () => import(/* webpackChunkName: "easypano" */ '@/pages/easypano/PanoUserCenterApprove.vue').then(m => m.default)
const EasyPanoUserCenterFavoriteView = () => import(/* webpackChunkName: "easypano" */ '@/pages/easypano/PanoUserCenterFavorite.vue').then(m => m.default)
const EasyPanoDetailCardView = () => import(/* webpackChunkName: "easypano" */ '@/pages/easypano/PanoDetailCard.vue').then(m => m.default)
const EasyPanoUserCardView = () => import(/* webpackChunkName: "easypano" */ '@/pages/easypano/UserCard.vue').then(m => m.default)

const EasyPanoLoginView = () => import(/* webpackChunkName: "easypano" */ '@/pages/easypano/PanoLogin.vue').then(m => m.default)

const EasyPanoHotView = () => import(/* webpackChunkName: "easypano" */ '@/pages/easypano/PanoHot.vue').then(m => m.default)


const SystemLayoutView = () => import(/* webpackChunkName: "admin" */ '@/components/SystemLayout.vue').then(m => m.default)
const QRcodeView = () => import(/* webpackChunkName: "admin" */ '@/pages/system/QRCode.vue').then(m => m.default)
const ReviewQRCodeView = () => import(/* webpackChunkName: "admin" */ '@/pages/system/ReviewCode.vue').then(m => m.default)
const NewSubCategoryView = () => import(/* webpackChunkName: "admin" */ '@/pages/system/SubCategory.vue').then(m => m.default)
const UserSettingView = () => import(/* webpackChunkName: "admin" */ '@/pages/system/UserSetting.vue').then(m => m.default)
const UsersView = () => import(/* webpackChunkName: "admin" */ '@/pages/system/Users.vue').then(m => m.default)
const ReleaseNoteView = () => import(/* webpackChunkName: "admin" */ '@/pages/system/ReleaseNote.vue').then(m => m.default)


const releasePath = process.env.RELEASEPATH
Vue.use(Meta) //设置页面的meta信息
Vue.use(VueRouter)

// simple history management
const history = window.sessionStorage
history.clear()

const routes = [
  {
    path: '/login/:type?',
    name: 'login',
    component: LoginView,
    hidden: true,
    meta: {description: '一帖一路, 登录中心'}
  },
  {
    path: '/(jianzu|huanbao|xiangcun|yumaoqiu|qijian)?',
    hidden: true,
    name: 'map',
    component: HomeLayoutView,
    children: [
      {
        path: 'home',
        alias: '',
        name: 'home',
        component: MapAndMarkerView,
        meta: {description: '二维码标记'}
      },
      {
        path: 'biaoji',
        name: 'marker',
        hidden: true,
        component: MapAndMarkerView,
        meta: {description: '二维码标记'}
      },
      {
        path: 'biaoji/new',
        component: MarkerLayoutView,
        name: 'markernew',
        redirect: {name: 'step1'},
        meta: {description: '二维码标记', requiresAuth: true},
        children: [
          {
            path: 'step1',
            component: MarkStep1View,
            name: 'step1',
            meta: {description: '二维码标记', requiresAuth: true},

          },
          {
            path: 'step2',
            component: MarkStep2View,
            name: 'step2',
            meta: {description: '二维码标记', requiresAuth: true},
          }
        ]
      },
      {
        name: 'notes',
        path: '/releases',
        component: ReleaseNoteDetailView,
        hidden: true,
        meta: {description: '二维码标记'}
      }
    ]
  },
  {
    name: 'pano',
    path: '/p/:uuid?',
    component: PanoView,
    hidden: true
  },
  {
    name: 'product',
    path: '/product',
    component: EasyPanoLayoutView,
    redirect: {name: 'producthome'},
    hidden: true,
    children: [
      {
        name: 'producthome',
        path: 'home',
        component: EasyPanoHomeView,
      },
      {
        name: 'hotproduct',
        path: 'hot',
        component: EasyPanoHotView,
      },
      {
        name: 'productupload',
        path: 'upload',
        component: EasyPanoUploadView,
      },
      {
        name: 'productusercenter',
        path: 'my',
        component: EasyPanoUserCenterView,
      },
      {
        name: 'productpersoninfo',
        path: 'userinfo',
        component: EasyPanoPersonInfoView,
      },
      {
        name: 'productusercard',
        path: 'card',
        component: EasyPanoUserCardView,
      },
      {
        name: 'productapprove',
        path: 'review',
        component: EasyPanoUserCenterApproveView,
      }, {
        name: 'productfavorite',
        path: 'favorite',
        component: EasyPanoUserCenterFavoriteView,
      },
      {
        name: 'productlogin',
        path: 'login',
        component: EasyPanoLoginView,
        meta: {description: '二维码标记',requiresAuth:true},
      },
      {
        name: 'productdetailcard',
        path: 'l/:locationid',
        component: EasyPanoDetailCardView,
        meta: {description: '二维码标记'},
      },

    ]
  },
  {
    path: '/system',
    name: 'system',
    component: SystemLayoutView,
    redirect: {name: 'dashboard'},
    iconCls: 'el-icon-date',
    meta: {description: '系统管理面板'},
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: QRcodeView,
        iconCls: 'el-icon-picture',//图标样式class
        name: 'dashboard',
        meta: {description: '我的二维码', requiresAuth: true}
      },
      {
        path: 'usersetting',
        component: UserSettingView,
        name: 'setting',
        iconCls: 'el-icon-setting',
        meta: {description: '用户中心', requiresAuth: true}
      },
      {
        path: 'review',
        component: ReviewQRCodeView,
        name: 'review',
        iconCls: 'el-icon-document',
        meta: {description: '二维码全景审核', requiresAuth: true, roles: ['admin']}
      },
      {
        path: 'category',
        component: NewSubCategoryView,
        name: 'subcategory',
        iconCls: 'el-icon-circle-plus-outline',
        meta: {description: '子目录创建', requiresAuth: true, roles: ['admin']}
      },
      {
        path: 'users',
        component: UsersView,
        name: 'users',
        iconCls: 'el-icon-service',
        meta: {description: '用户管理', requiresAuth: true, roles: ['admin']}
      },
      {
        path: 'releases',
        component: ReleaseNoteView,
        name: 'release',
        iconCls: 'el-icon-star-off',
        meta: {description: '版本发布', requiresAuth: true, roles: ['admin']}
      }
    ]
  },
  {
    name: 'nonono',
    path: '/401',
    hidden: true,
    component: NoPermissionView,
    meta: {description: '一帖一路,梦平台!'}
  },
  {
    name: 'globalUnhandleException',
    path: '*',
    hidden: true,
    component: NotFoundView,
    meta: {description: '一帖一路,梦平台!'}
  }
]

const router = new VueRouter({
  base: releasePath ? `/${releasePath}` : __dirname,
  routes: routes,
  mode: 'history',
  fallback: false,  //禁止切换到hash模式
  linkExactActiveClass: 'active'
})

// 拦截器用于所有的路径请求
const vuexcustomerid = store.getters.userinfo // 刷新后store中的所有值都为空
const markerinfo = storeUtils.get(webconfig.storeLocationKey)
const locationcodetoken = storeUtils.get(webconfig.storeLocationCodeTokenKey)
const locationactiveindex = storeUtils.get(webconfig.storeLocationActiveIndexKey)
const whitelistUrl = ['/login', '/product/login']
// 注意这里,如果使用的是next({}),会拦截路由,下次的页面还会进入beforeEach,而next()则不会执行beforeEach直接进入到路由
router.beforeEach((to, from, next) => {
  // 增加页面切换的遮盖层
  let isFromProduct=false
  let localUserInfo= storeUtils.get(webconfig.storeUserInfoKey)
  if (to.path.indexOf('product') >= 0) {
    isFromProduct = true
    localUserInfo = storeUtils.get(webconfig.storeWeixinUserLoginInfo)
  }
  // store.dispatch('storeAppLoadingShow', true)
  // 验证用户是否需要认证和有权限访问页面
  const iswhitelistUrl = whitelistUrl.some(whitelist => to.path.indexOf(whitelist) >= 0)
  if (iswhitelistUrl) {
    store.dispatch('removeUserSession')
    store.dispatch('storeAppLoadingShow', false)
    next()
  } else {
    const requireAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requireAuth) {
      if (!localuserinfo || localuserinfo === '') {
        console.log('当前页面用户需要登录认证,请先登录才能进入该页面!')
        if (isFromProduct) {
          next({
            name: 'producthome'
          })
        } else {
          next({
            name: 'login'
          })
        }

      } else {
        // 判断用户的权限
        const userroles = localuserinfo.customerdata.roles
        const hasRolePermission = to.meta && to.meta.roles
        if (hasRolePermission) {
          const rolePermission = userroles.some(role => to.meta.roles.indexOf(role) >= 0)
          if (rolePermission) {
            store.dispatch('storeAppLoadingShow', false)
            next()
          } else {
            next({
              name: 'nonono'  //没权限啥都干不了
            })
          }
        }
        store.dispatch('storeAppLoadingShow', false)
        next()
      }
    } else {
      store.dispatch('storeAppLoadingShow', false)
      next()
    }
  }
})
// 拦截器用于所有的路径请求后的操作
router.afterEach((to, from, next) => {
  store.dispatch('storeAppLoadingShow', false)
})


// -------------------------------------------------------全局拦截防止刷新,解决vuex的问题--------------------------------------------------------------
// 拦截用户刷新页面进行保存对应的用户数据放置vuex丢失数据
const localuserinfo = storeUtils.get(webconfig.storeUserInfoKey)
if (localuserinfo && vuexcustomerid !== localuserinfo) {
  store.dispatch('storeUserSession', localuserinfo)
}
//全局设置对应的标记信息
if (markerinfo) {
  store.dispatch('storeMarkerLocation', markerinfo)
}
if(locationcodetoken){
  store.dispatch('storeMarkerCodeToken',locationcodetoken)
}
if(locationactiveindex){
  store.dispatch('storeActiveIndex',locationactiveindex)
}

// --------------------------------------------------------------以下代码不再使用-------------------------------------------------------
/**
 * 兼容微信设置页面的title
 */
const setDocumentTitle = function (title) {
  document.title = title
  let ua = navigator.userAgent
  if (/\bMicroMessenger\/([\d\.]+)/.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
    var i = document.createElement('iframe')
    i.src = '/static/img/favicon.ico'
    i.style.display = 'none'
    i.onload = function () {
      setTimeout(function () {
        i.remove()
      }, 9)
    }
    document.body.appendChild(i)
  }
}

const importcomponent = function (componentName, groupname) {
  const componentname = () => import(
    /* webpackChunkName: ${groupname} */
    /* webpackMode: "lazy" */
    `@/pages/${componentName}`
    )
  return componentname
}
export default router
