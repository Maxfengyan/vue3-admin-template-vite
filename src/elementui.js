import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElIcon,
  ElColorPicker,
  ElTag,
  ElScrollbar,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from "element-plus";
// import "dayjs/locale/zh-cn";
// import lang from "@/plugin/language/zh-cn";
// 设置语言
// locale(lang);

const useElementUi = (app) => {
  app.component(ElButton.name, ElButton);
  app.component(ElForm.name, ElForm);
  app.component(ElFormItem.name, ElFormItem);
  app.component(ElInput.name, ElInput);
  app.component(ElIcon.name, ElIcon);
  app.component(ElColorPicker.name, ElColorPicker);
  app.component(ElTag.name, ElTag);
  app.component(ElScrollbar.name, ElScrollbar);
  app.component(ElMenu.name, ElMenu);
  app.component(ElMenuItem.name, ElMenuItem);
  app.component(ElSubmenu.name, ElSubmenu);
  app.component(ElBreadcrumb.name, ElBreadcrumb);
  app.component(ElBreadcrumbItem.name, ElBreadcrumbItem);
  app.component(ElDropdown.name, ElDropdown);
  app.component(ElDropdownItem.name, ElDropdownItem);
  app.component(ElDropdownMenu.name, ElDropdownMenu);
};

export default useElementUi;
