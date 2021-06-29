import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import store from "./store";
import directive from "./directive/index";
import useElementUi from "./elementui";
import "./core/permission";
import "./stylus/index.styl";
import svgIcon from "@/plugin/icons/svgIcon.vue";

const app = createApp(App);

directive(app); // 放在mount上面，有顺序的

useElementUi(app); // 引用element-ui

app.component("svg-icon", svgIcon);

app.use(store);

app.use(router);

app.mount("#app");
