import { defineComponent, computed } from "vue";
import { NLayoutSider, NMenu, NEllipsis } from "naive-ui";
import { useRouter } from "vue-router";
import menuOptionss from "./components/SideOptions";
import titleComponent from "./components/Title";
import SidebarUiCss from "./changeNaiveCss";
import style from "./Sidebar.module.scss";
const Sidebar = defineComponent({
  name: "Sidebar",
  components: {
    NMenu,
    NEllipsis,
    NLayoutSider,
    titleComponent,
  },
  setup() {
    return () => {
      const title_component = import.meta.env.VITE_SYSTEM_SWITCH === "true" ? <title-component /> : null;
      return (
        <div class={style.sidebar_container}>
          {title_component}

          <n-layout-sider collapse-mode="width" collapsed={false} collapsed-width={64} width={SidebarUiCss.sidebarWidth} style={SidebarUiCss.sidebar}>
            <n-menu collapsed={false} indent={26} options={menuOptionss()} style={SidebarUiCss.menu} />
          </n-layout-sider>
        </div>
      );
    };
  },
});
export default Sidebar;
