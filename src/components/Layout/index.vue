<template>
  <div :class="{ hideSidebar: !sidebar }" class="app-wrapper">
    <!-- 侧边导航 -->
    <sidebar class="sidebar-container" />

    <!-- 显示内容区域 -->
    <div class="main-container">
      <navbar />
      <appmain />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import Sidebar from "./components/sidebar/index.vue";
import Navbar from "./components/navbar/index.vue";
import Appmain from "./components/appmain/index.vue";
// import globalProperty from "@/mixin/global";
export default defineComponent({
  // mixins: [globalProperty],
  components: {
    Sidebar,
    Navbar,
    Appmain,
  },
  setup() {
    const store = useStore();
    const sidebar = computed(() => {
      return store.getters.sidebar;
    });
    return {
      sidebar,
    };
  },
});
</script>

<style lang="stylus" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>