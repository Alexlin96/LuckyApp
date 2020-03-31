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
import waterMark from "@/components/waterMark";
import { isMobile } from "@/util/module/util";
export default {
  name: "app",
  data() {
    return { inputText: "" };
  },
  components: { waterMark },
  watch: {},
  mounted() {},
  created() {
    this.inputText = `${this.formatDates(new Date(), "yyyy-MM-dd")} Alexlin`;
    this.init();
  },
  methods: {
    init() {
      this.localstorage.save("isMobile", isMobile()); // 存储当前设备是否为移动端
    }
  }
};
</script>

<style></style>
