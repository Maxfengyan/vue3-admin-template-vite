import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/Layout.jsx";
const powerType = import.meta.env.VITE_POWER_TYPE; // 权限类型
/**
 * hidden: true                   如果为true，侧边栏显示，否则是为通用隐藏路由
 * alwaysShow: true               如果为true，将总显示
 *                                如果设置了,路由数量必须大于1
 * redirect: noRedirect           如果设置noRedirect，面包屑不重定向标题
 * meta : {
    role: 'admin'                 路由权限唯一标识
    title: 'title'                路由标题，面包屑展示标题
    icon: 'svg-name'              路由图标
    breadcrumb: false             如果为false，面包屑标题隐藏
  }
 */

// 静态路由
const constantRouters = [
  {
    path: "/",
    name: "Dashboard",
    redirect: "/index",
    component: Layout,
    children: [
      {
        name: "Index",
        path: "index",
        component: () => import("@/views/index/index.jsx"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/login.jsx"),
  },
];

const asyncRoutes = [];

const allRouter =
  powerType == "1" ? constantRouters.concat(asyncRoutes) : constantRouters;
export const router = createRouter({
  history: createWebHashHistory(),
  routes: allRouter,
});
