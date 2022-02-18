import { defineComponent } from "vue";
import { NScrollbar, NLayoutSider, NMenu } from "naive-ui";
import titleComponent from "./components/Title";
import SidebarUiCss from "./changeNaiveCss";
import style from "./Sidebar.module.scss";
const Sidebar = defineComponent({
  name: "Sidebar",
  components: {
    NMenu,
    NScrollbar,
    NLayoutSider,
    titleComponent,
  },
  setup() {
    const menuOptions = [
      {
        label: "模板管理",
        key: "pinball-1973",
        children: [
          {
            label: "鼠",
            key: "rat",
            children: [
              {
                label: "鼠",
                key: "rat",
              },
            ],
          },
        ],
      },
      {
        label: "导航管理",
        key: "a-wild-sheep-chase",
      },
    ];
    return () => {
      const title_component = import.meta.env.VITE_SYSTEM_SWITCH === "true" ? <title-component /> : null;
      return (
        <div class={style.sidebar_container}>
          {title_component}

          <n-layout-sider collapse-mode="width" collapsed={false} collapsed-width={64} width={SidebarUiCss.sidebarWidth} style={SidebarUiCss.sidebar}>
            <n-menu collapsed={false} collapsed-icon-size={22} options={menuOptions} style={SidebarUiCss.menu} />
          </n-layout-sider>
        </div>
      );
    };
  },
});
export default Sidebar;
