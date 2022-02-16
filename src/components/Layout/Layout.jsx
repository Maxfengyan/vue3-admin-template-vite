import { defineComponent } from "vue";
import { NLayout, NLayoutSider, NLayoutHeader } from "naive-ui";
import appMain from "./components/Appmain/Appmain";
import navBar from "./components/Navbar/Navbar";
import sideBar from "./components/Sidebar/Sidebar";
import style from "./Layout.module.scss";
import LayoutUiCss from "./changeNaiveCss.js";
const Layout = defineComponent({
  name: "Layout",
  components: {
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    navBar,
    sideBar,
    appMain,
  },
  setup() {
    return () => {
      return (
        <div class={style.app_wrapper}>
          <n-layout has-sider style="height:100%">
            <side-bar />
            <div class={style.main_container}>
              <nav-bar />
              <app-main />
            </div>
          </n-layout>
        </div>
      );
    };
  },
});
export default Layout;
