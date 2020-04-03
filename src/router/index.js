import Vue from 'vue'
import VueRouter from 'vue-router'
import { routers } from './router'
import ViewUI from 'view-design'
Vue.use(VueRouter)

export const router = new VueRouter({
  routes: routers
})

// 路由守卫
router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start()
  next()
})
router.afterEach(() => {
  ViewUI.LoadingBar.finish()
  window.scrollTo(0, 0)
})
