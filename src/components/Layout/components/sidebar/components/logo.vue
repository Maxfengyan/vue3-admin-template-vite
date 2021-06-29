<template>
  <div
    class="sidebar-logo-container"
    :class="{ collapse: collapse }"
    @click="jumpDashboard"
  >
    <transition name="fade">
      <div v-if="collapse">
        <svg-icon class="logo-account" :name="logo" />
        <span>{{ system_name }}</span>
      </div>
      <div v-else>
        <svg-icon class="logo-account" :name="logo" />
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  props: {
    collapse: {
      required: true,
      type: Boolean,
    },
  },
  setup(props) {
    const system_name = import.meta.env.VITE_SYSTEM_NAME;
    const logo = import.meta.env.VITE_SYSTEM_LOGO;
    const router = useRouter();
    const jumpDashboard = () => {
      router.push("/");
    };
    return { system_name, logo, jumpDashboard };
  },
});
</script>

<style lang="stylus" scoped>
.sidebar-logo-container {
  width: 100%;
  height: 50px;
  background: #3c90c3;
  color: #fff;
  cursor: pointer;

  & div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  }

  & span {
    font-weight: bold;
    font-size: 17px;
  }
}

.fade-enter-active {
  transition: opacity 0.8s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.logo-account {
  width: 28px;
  height: 28px;
  margin: 0 -14px !important;
}
</style>