import { localstorage } from "@/util/index.js";
export const app = {
  state: {},
  actions: {},
  mutations: {
    // 保存到Localstorage
    saveLocalstorage(state, data) {
      data.forEach(itemData => {
        localstorage.save(itemData["key"], itemData["value"]);
      });
    }
  }
};
