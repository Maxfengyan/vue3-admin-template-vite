import style from "@/style/variable.module.scss";
const SidebarUiCss = {
  sidebar: {
    "--n-color": style.sidebarBgColor,
  },
  sidebarWidth: style.sidebarWidth,
  sidebarCollapsedWidth: style.sidebarCollapsedWidth,
  menu: {
    "--n-border-radius": "8px",
    "--n-item-text-color": style.sidebarTextColor, // 文字颜色
    "--n-item-text-color-hover": style.sidebartextactivecolor, // hover文字颜色
    "--n-item-color-active": style.sidebartextactivebgcolor, // 选中后背景颜色
    "--n-item-text-color-active": style.sidebartextactivecolor, // 选中后文字颜色
    "--n-item-text-color-child-active": style.sidebartextactivecolor, // 选中后父节点文字颜色
    "--n-item-height": "50px", // 高度
  },
};

export default SidebarUiCss;
