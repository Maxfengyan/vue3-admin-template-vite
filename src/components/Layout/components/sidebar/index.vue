<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        mode="vertical"
        :default-active="path"
        :collapse="!isCollapse"
        background-color="#304156"
        text-color="#bfcbd9"
        :unique-opened="false"
        active-text-color="#409EFF"
      >
        <sidebar-item
          v-for="route in handleChildren(routes)"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import Logo from "./components/logo.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { asyncRoutes } from "@/router/index";
import SidebarItem from "./sidebarItem.vue";
import handleChildren from "./components/filterRouter";
export default defineComponent({
  components: {
    SidebarItem,
    Logo,
  },
  setup() {
    const showLogo = JSON.parse(import.meta.env.VITE_SYSTEM_SWITCH);

    const store = useStore();

    const isCollapse = computed(() => {
      return store.getters.sidebar;
    });

    const routes = computed(() => {
      const powerType = import.meta.env.VITE_POWER_TYPE;
      return powerType === "1" ? asyncRoutes : store.getters.routes;
    });
    const { path } = useRoute();

    return {
      isCollapse,
      routes,
      path,
      showLogo,
      handleChildren,
    };
  },
});
</script>

<style></style>
