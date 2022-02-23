import { defineComponent } from "vue";
import { NLayoutHeader } from "naive-ui";
import hamburgerComponent from "./components/Hamburger";
import breadComponent from "./components/Bread";
import userComponent from "./components/User";
import style from "./Navbar.module.scss";
const Navbar = defineComponent({
  name: "Navbar",
  components: {
    NLayoutHeader,
    breadComponent,
    userComponent,
    hamburgerComponent,
  },
  setup() {
    return () => {
      return (
        <n-layout-header class={style.navbar}>
          <hamburger-component />
          <bread-component />
          <user-component />
        </n-layout-header>
      );
    };
  },
});
export default Navbar;
