const ip = require("ip");

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { svgBuilder } from "./src/plugin/icons/svgBuilder";

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
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    svgBuilder("./src/plugin/icons/svg/"),
  ],
  server: {
    port: 9000,
    cors: true,
    host: ip.address(),
  },
});
