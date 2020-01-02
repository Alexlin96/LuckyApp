// 路由配置
export const routers = [
  {
    path: "/",
    redirect: "/setting"
  },
  {
    path: "/setting",
    title: "设置页面",
    name: "setting",
    component: resolve => {
      require(["@/views/setting.vue"], resolve);
    }
  },
  {
    path: "/lucky",
    title: "抽奖页面",
    name: "lucky",
    component: resolve => {
      require(["@/views/lucky.vue"], resolve);
    }
  },
  {
    path: "*", // 路径不对时 默认重定向进入抽奖页面
    redirect: "/setting"
  }
];
