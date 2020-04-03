import { localstorage } from '@/util/index.js'
import { isMobile } from '@/util/module/util'
export const app = {
  state: {
    isMobile: false
  },
  actions: {
    checkIsMobile({ commit }, data) {
      commit('CHECK_ISMOBILE', data)
    }
  },
  mutations: {
    // 保存到Localstorage
    saveLocalstorage(state, data) {
      data.forEach(itemData => {
        localstorage.save(itemData['key'], itemData['value'])
      })
    },
    CHECK_ISMOBILE() {
      const oldISMOBILE = localstorage.fetch('isMobile')
      const newISMOBILE = isMobile()
      if (oldISMOBILE !== newISMOBILE) {
        localstorage.save('isMobile', newISMOBILE)
      }
    }
  }
}
