import Vue from "vue";
import VueRouter from "vue-router";
import { routers } from "./router";
import ViewUI from "view-design";
import { isMobile } from "@/util/module/util";
Vue.use(VueRouter);

export const router = new VueRouter({
  routes: routers
});

// 路由守卫
router.beforeEach((to, from, next) => {
  // isMobile() === true && this.localstorage.save("isMobile", "true");
  // isMobile() === false && this.localstorage.save("isMobile", "false");
  ViewUI.LoadingBar.start();
  next();
});
router.afterEach(() => {
  ViewUI.LoadingBar.finish();
  window.scrollTo(0, 0);
});
