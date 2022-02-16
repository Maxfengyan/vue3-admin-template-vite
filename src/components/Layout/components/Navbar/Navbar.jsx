import { defineComponent } from "vue";
import { NLayoutHeader } from "naive-ui";

import style from "./Navbar.module.scss";
const Navbar = defineComponent({
  name: "Navbar",
  components: {
    NLayoutHeader,
  },
  setup() {
    return () => {
      return <n-layout-header class={style.navbar}>头部导航</n-layout-header>;
    };
  },
});
export default Navbar;
