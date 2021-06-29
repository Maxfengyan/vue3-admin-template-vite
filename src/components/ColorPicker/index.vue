<template>
  <div class="color-picker">
    <!-- <el-color-picker
      v-model="color"
      :predefine="predefineColors"
      @change="changeColor"
    /> -->
  </div>
</template>
<script>
import globalProperty from "@/mixin/global";
export default {
  mixins: [globalProperty],
  data() {
    return {
      // color: this.bgColor,
      color: "#2d3a4b",
      timer: null,
      predefineColors: [
        "#2d3a4b",
        "#000",
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "rgb(255, 120, 0)",
      ],
    };
  },
  methods: {
    changeColor(color) {
      this.$store.dispatch("skin/Changebgcolor", color);
    },
  },
};
</script>
<style scoped>
.color-picker {
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 1002;
}
</style>
