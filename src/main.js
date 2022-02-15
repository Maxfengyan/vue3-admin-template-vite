import { createApp } from "vue";
import { router } from "./router/index";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "./style/index.scss";
import App from "./App.jsx";
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router);
app.mount("#app");
