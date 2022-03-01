import { defineComponent, ref } from "vue";
import { NLayout } from "naive-ui";
import appMain from "./components/Appmain/Appmain";
import navBar from "./components/Navbar/Navbar";
import sideBar from "./components/Sidebar/Sidebar";
import handleCollapsed from "./mixin";
import style from "./Layout.module.scss";
import variable from "@/style/variable.module.scss";
const Layout = defineComponent({
  name: "Layout",
  components: {
    NLayout,
    navBar,
    appMain,
    sideBar,
  },
  setup() {
    const { getCollapsedValue } = handleCollapsed();
    return () => {
      const mainContainerStyle = ref({});
      if (getCollapsedValue()) {
        mainContainerStyle.value = {
          width: `calc(100% - ${variable.sidebarCollapsedWidth})`,
          "margin-left": variable.sidebarCollapsedWidth,
        };
      } else {
        mainContainerStyle.value = {
          width: `calc(100% - ${variable.sidebarWidth})`,
          "margin-left": variable.sidebarWidth,
        };
      }
      return (
        <div class={style.app_wrapper}>
          <n-layout has-sider style="height:100%">
            <side-bar />
            <div class={style.main_container} style={mainContainerStyle.value}>
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
