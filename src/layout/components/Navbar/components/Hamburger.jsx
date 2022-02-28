import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import style from "../Navbar.module.scss";
const Hamburger = defineComponent({
  name: "Hamburger",
  setup() {
    const store = useStore();
    // 切换侧边栏
    const handleChangeCollapsed = () => {
      store.dispatch("HandleChangeCollapsed");
    };
    const collapsedIcon = computed(() => {
      return store.getters.collapsed ? "expand" : "fold";
    });
    return () => {
      return (
        <div class={style.hamburger_icon} onClick={() => handleChangeCollapsed()}>
          <svg-icon name={collapsedIcon.value} />
        </div>
      );
    };
  },
});
export default Hamburger;
