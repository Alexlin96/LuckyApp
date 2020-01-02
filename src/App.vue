<template>
  <div id="App">
    <router-view />
    <waterMark :inputText="inputText" :inputColor="`rgba(121, 56, 30, 0.4)`" />
  </div>
</template>

<script>
import waterMark from "@/components/waterMark";
export default {
  name: "app",
  data() {
    return { inputText: "" };
  },
  components: { waterMark },
  watch: {},
  created() {
    this.inputText = `${this.formatDates(new Date(), "yyyy-MM-dd")} Alexlin`;
  },
  methods: {},
  mounted() {}
};
</script>

<style></style>
