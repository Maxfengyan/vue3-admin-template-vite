<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script>
import { computed, defineComponent } from "vue";
export default defineComponent({
  setup() {},
});
</script>

<style scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 10px;
}
.fixed-header + .app-main {
  padding-top: 50px;
  height: 100vh;
  overflow: auto;
}
</style>
