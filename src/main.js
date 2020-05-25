import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'
import ViewUI from 'view-design'
import './util/rem'
import { localstorage, deepCopy, formatDates } from '@/util/index'
import './assets/js/tagcanvas.min'

Vue.prototype.TagCanvas = window.TagCanvas

// css引用
import 'view-design/dist/styles/iview.css'
import '@/assets/css/reset.css'

// 全局注册
Vue.use(ViewUI)

Vue.prototype.localstorage = localstorage
Vue.prototype.deepCopy = deepCopy
Vue.prototype.formatDates = formatDates

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
