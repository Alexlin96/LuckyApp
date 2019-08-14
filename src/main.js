import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import {store} from './store'
import iView from 'iview'
import { localstorage,deepCopy} from "@/util/index";

// css引用
import 'iview/dist/styles/iview.css'
import '@/assets/css/reset.css'


// 全局注册
Vue.use(iView)

Vue.prototype.localstorage = localstorage;
Vue.prototype.deepCopy = deepCopy;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
