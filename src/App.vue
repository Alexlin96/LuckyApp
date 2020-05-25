<template>
  <div id="App">
    <router-view />
    <waterMark
      v-if="0"
      :inputText="inputText"
      :inputColor="`rgba(121, 56, 30, 0.4)`"
    />
  </div>
</template>

<script>
import waterMark from '@/components/waterMark'
import { isMobile } from '@/util/module/util'
export default {
  name: 'App',
  components: { waterMark },
  data() {
    return { inputText: '' }
  },
  watch: {},
  mounted() {},
  created() {
    this.inputText = `${this.formatDates(new Date(), 'yyyy-MM-dd')} Alexlin`
    this.init()
  },
  methods: {
    init() {
      this.localstorage.save('isMobile', isMobile()) // 存储当前设备是否为移动端
      window.addEventListener('touchstart', event => {
        if (event.touches.length > 1) {
          // 当前位于屏幕上的所有手指的一个列表
          event.preventDefault()
        }
      })
      let lastTouchEnd = 0
      window.addEventListener(
        'touchend',
        event => {
          const now = new Date().getTime()
          if (now - lastTouchEnd <= 300) {
            event.preventDefault()
          }
          lastTouchEnd = now
        },
        false
      )
    }
  }
}
</script>

<style></style>
