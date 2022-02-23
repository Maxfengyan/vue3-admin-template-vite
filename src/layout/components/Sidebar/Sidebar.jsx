import { defineComponent } from "vue";
import { NLayoutSider, NMenu } from "naive-ui";
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
    const menuOptions = [
      {
        label: "模板管理",
        key: "pinball-1973",
        icon: () => {
          return <svg-icon name="template" />;
        },
        children: [
          {
            label: "模板创建",
            key: "rat",
            icon: () => {
              return <svg-icon name="template-create" />;
            },
          },
          {
            label: "模板审核",
            key: "rats",
            icon: () => {
              return <svg-icon name="template-audit" />;
            },
            children: [
              {
                label: "模板创建",
                key: "r2at",
                icon: () => {
                  return <svg-icon name="template-create" />;
                },
                children: [
                  {
                    label: "模板创建",
                    key: "r22at",
                    icon: () => {
                      return <svg-icon name="template-create" />;
                    },
                  },
                ],
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
      const title_component =
        import.meta.env.VITE_SYSTEM_SWITCH === "true" ? (
          <title-component />
        ) : null;
      return (
        <div class={style.sidebar_container}>
          {title_component}

          <n-layout-sider
            collapse-mode="width"
            collapsed={false}
            collapsed-width={64}
            width={SidebarUiCss.sidebarWidth}
            style={SidebarUiCss.sidebar}
          >
            <n-menu
              collapsed={false}
              indent={26}
              options={menuOptions}
              style={SidebarUiCss.menu}
            />
          </n-layout-sider>
        </div>
      );
    };
  },
});
export default Sidebar;
