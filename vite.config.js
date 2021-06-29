const { resolve } = require("path");
const ip = require("ip");

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import { svgBuilder } from "./src/plugin/icons/svgBuilder";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
    },
  },
  plugins: [
    vue(),
    svgBuilder("./src/plugin/icons/svg/"),
    styleImport({
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        },
      ],
    }),
  ],
  server: {
    port: 9000,
    cors: true,
    host: ip.address(),
    /* proxy: {
      "/epgms": {
        target: "http://10.10.8.14:9999/mock/5f23d33facd7311a719430ed/epgms/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/epgms/, ""),
      },
    }, */
  },
});
