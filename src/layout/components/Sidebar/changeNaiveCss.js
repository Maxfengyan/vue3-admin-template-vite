import style from "@/style/variable.module.scss";
const SidebarUiCss = {
  sidebar: {
    "--n-color": style.sidebarBgColor,
  },
  sidebarWidth: style.sidebarWidth,
  menu: {
    "--n-item-text-color": style.sidebarTextColor,
    "--n-item-height": "54px",
    "--n-item-text-color": "#bfcbd9",
    "--n-item-text-color-hover": "#bfcbd9",
    "--n-item-text-color-child-active": "#bfcbd9",
    "--n-item-color-active": "#263345",
    "--n-item-text-color-active": style.navbarhovercolor,
    // "--n-item-text-color-child-active": "#409eff",
  },
};

export default SidebarUiCss;
