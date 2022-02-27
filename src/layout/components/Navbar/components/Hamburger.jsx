import { defineComponent } from "vue";
import { useStore } from "vuex";
import style from "../Navbar.module.scss";
const Hamburger = defineComponent({
  name: "Hamburger",
  setup() {
    const store = useStore();
    const handleChangeCollapsed = () => {
      store.dispatch("HandleChangeCollapsed");
    };
    return () => {
      return (
        <div class={style.hamburger_icon} onClick={() => handleChangeCollapsed()}>
          <svg-icon name="tab" />
        </div>
      );
    };
  },
});
export default Hamburger;
