import { computed, defineComponent } from "vue";
import { NLayoutSider, NMenu } from "naive-ui";
import { useRoute } from "vue-router";
import handleCollapsed from "../../mixin";
import menuOptions from "./SideOptions";
import titleComponent from "./components/Title";
import SidebarUiCss from "./changeNaiveCss";
import style from "./Sidebar.module.scss";
const Sidebar = defineComponent({
  name: "Sidebar",
  components: {
    NMenu,
    NLayoutSider,
    titleComponent,
  },
  setup() {
    const { getCollapsedValue } = handleCollapsed();
    const route = useRoute();
    const currentRouteName = computed(() => {
      return route.name;
    });

    return () => {
      const title_component = import.meta.env.VITE_SYSTEM_SWITCH === "true" ? <title-component collapsed-value={getCollapsedValue()} /> : null;
      return (
        <div class={style.sidebar_container}>
          {title_component}
          <n-layout-sider
            collapse-mode="width"
            collapsed={getCollapsedValue()}
            collapsed-width={parseInt(SidebarUiCss.sidebarCollapsedWidth)}
            width={SidebarUiCss.sidebarWidth}
            style={SidebarUiCss.sidebar}
          >
            <n-menu
              default-value={currentRouteName.value}
              watch-props={["defaultValue"]}
              collapsed={getCollapsedValue()}
              indent={26}
              options={menuOptions()}
              style={SidebarUiCss.menu}
            />
          </n-layout-sider>
        </div>
      );
    };
  },
});
export default Sidebar;
