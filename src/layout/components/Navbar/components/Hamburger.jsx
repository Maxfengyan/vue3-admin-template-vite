import { defineComponent } from "vue";
import style from "../Navbar.module.scss";
const Hamburger = defineComponent({
  name: "Hamburger",
  setup() {
    return () => {
      return (
        <div class={style.hamburger_icon}>
          <svg-icon name="tab" />
        </div>
      );
    };
  },
});
export default Hamburger;
