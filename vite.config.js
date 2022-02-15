import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import ElementPlus from "unplugin-element-plus/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const path = require("path");

function _resolve(dir) {
  return path.resolve(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": _resolve("src"),
    },
  },
  plugins: [
    vue(),
    vueJsx({}),
    ElementPlus({
      importStyle: "sass",
      useSource: true,
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
