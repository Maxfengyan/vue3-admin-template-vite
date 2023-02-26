import { createApp } from "vue";
import App from "./App.vue";

import { router } from "./router/index"; // router

import store from "./store"; // store

import directive from "./directive/index"; // directive

import useElementUi from "./elementui"; // 按需引入element-ui

import "./core/permission"; // 动态校验路由

import "./stylus/index.styl"; // css文件

import svgIcon from "./plugin/icons/svgIcon.vue"; // svg文件

const app = createApp(App);

directive(app); // 放在mount上面，有顺序的

useElementUi(app); // 引用element-ui

app.component("svg-icon", svgIcon);

app.use(store);

app.use(router);

app.mount("#app");
