import Vue from 'vue'
import VueRouter from 'vue-router'
import {routers} from './router'
import iView from 'iview'
Vue.use(VueRouter)

export const router = new VueRouter(
    {
        routes: routers
    }
)

// 路由守卫
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next()
})
router.afterEach( to => {
    iView.LoadingBar.finish()
    window.scrollTo(0,0);
})
