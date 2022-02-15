import { createApp } from "vue";
import naiveUi from "./core/importNaiveUi.js";
import { router } from "./router";
import store from "./store";
import "./style/index.scss";
import App from "./App.jsx";
const app = createApp(App);
naiveUi(app);
app.use(router);
app.use(store);
app.mount("#app");
