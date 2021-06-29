<template>
  <!-- <ColorPicker /> -->
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
// import ColorPicker from "@/components/ColorPicker/index.vue";
export default defineComponent({
  name: "App",
  components: {
    // ColorPicker,
  },
});
</script>
<style>
#app {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>