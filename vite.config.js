import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { svgBuilder } from "./src/plugins/icons/svgBuilder";
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
  plugins: [vue(), svgBuilder("./src/plugins/icons/svg/"), vueJsx({})],
});
