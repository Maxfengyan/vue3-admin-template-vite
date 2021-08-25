<template>
  <el-config-provider :locale="locale">
    <!-- <ColorPicker /> -->
    <router-view />
  </el-config-provider>
</template>

<script>
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { defineComponent } from "vue";
// import ColorPicker from "@/components/ColorPicker/index.vue";
export default defineComponent({
  name: "App",
  components: {
    // ColorPicker,
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    };
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