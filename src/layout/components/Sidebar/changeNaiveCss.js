import style from "@/style/variable.module.scss";
const SidebarUiCss = {
  sidebar: {
    "--n-color": style.sidebarBgColor,
  },
  sidebarWidth: style.sidebarWidth,
  menu: {
    "--n-item-text-color": style.sidebarTextColor,
    "--n-item-height": "54px",
    "--n-item-text-color-hover": style.navbarhovercolor,
    "--n-item-text-color-child-active": style.sidebarTextColor,
    "--n-item-color-active": style.sidebarhoverbgcolor,
    "--n-item-text-color-active": style.navbarhovercolor,
  },
};

export default SidebarUiCss;
