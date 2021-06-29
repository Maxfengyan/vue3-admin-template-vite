<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar"
      class="hamburger-container"
      @changeActive="toggleSidebar"
    />
    <breadcrumb class="breadcrumb-container" />
    <userinfo />
  </div>
</template>

<script>
import { ref, computed, defineComponent } from "vue";
import { useStore, mapGetters } from "vuex";
import Hamburger from "./components/hamburger.vue";
import Breadcrumb from "./components/breadcrumb.vue";
import Userinfo from "./components/userInfo.vue";
export default defineComponent({
  components: {
    Hamburger,
    Breadcrumb,
    Userinfo,
  },
  setup() {
    const store = useStore();

    let sidebar = computed(() => {
      return store.getters.sidebar;
    });

    const toggleSidebar = () => {
      store.dispatch("ChangeSidebar");
    };

    return { sidebar, toggleSidebar };
  },
});
</script>

<style lang="stylus" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
</style>