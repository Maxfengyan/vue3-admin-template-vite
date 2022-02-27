import { computed, defineComponent, watch, ref } from "vue";
import { NLayoutSider, NMenu, NEllipsis } from "naive-ui";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import menuOptions from "./components/SideOptions";
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
    const store = useStore();
    const collapsed = computed(() => {
      return store.getters.collapsed;
    });
    const route = useRoute();
    const currentRouteName = computed(() => {
      return route.name;
    });

    return () => {
      const title_component =
        import.meta.env.VITE_SYSTEM_SWITCH === "true" ? <title-component /> : null;
      return (
        <div class={style.sidebar_container}>
          {title_component}
          <n-layout-sider
            collapse-mode="width"
            collapsed={collapsed.value}
            collapsed-width={64}
            width={SidebarUiCss.sidebarWidth}
            style={SidebarUiCss.sidebar}
          >
            <n-menu
              default-value={currentRouteName.value}
              watch-props={["defaultValue"]}
              collapsed={collapsed.value}
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
