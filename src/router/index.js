import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/Layout.jsx";
const powerType = import.meta.env.VITE_POWER_TYPE; // 权限类型
/**
 * hidden: true                   如果为true，侧边栏显示，否则是为通用隐藏路由(默认false)
 * alwaysShow: true               如果为true，将总显示子菜单，如果为false，当子菜单为一个时默认替换掉父菜单(默认false)
 *                                如果设置了,路由数量必须大于1
 * redirect: noRedirect           如果设置noRedirect，面包屑不重定向标题
 * meta : {
    permission: 'admin'           路由权限唯一标识
    title: 'title'                路由标题，菜单展示标题/面包屑展示标题
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
        meta: { title: "首页" },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/login.jsx"),
    meta: { title: "登录" },
  },
];

export const asyncRoutes = [
  {
    path: "/template",
    component: Layout,
    name: "Template",
    redirect: "/template/create",
    meta: {
      title: "模板管理",
      permission: "template",
      icon: "template",
    },
    children: [
      {
        path: "create",
        name: "template-create",
        component: () => import("@/views/template/create/index.vue"),
        meta: {
          title: "模板创建",
          icon: "template-create",
          permission: "template-create",
        },
      },
      {
        path: "audit",
        name: "template-audit",
        component: () => import("@/views/template/audit/index.vue"),
        meta: {
          title: "模板审核",
          icon: "template-audit",
          permission: "template-audit",
        },
      },
    ],
  },
  {
    path: "/portal",
    component: Layout,
    name: "Portal",
    redirect: "/portal/create",
    meta: {
      permission: "portal",
      title: "门户管理",
      icon: "portal",
    },
    children: [
      {
        path: "create",
        name: "portal-create",
        component: () => import("@/views/portal/create/index.vue"),
        meta: {
          title: "门户创建",
          icon: "portal-create",
          permission: "portal-create",
        },
      },
    ],
  },
  {
    path: "/extra",
    name: "Extra",
    component: () => import("@/views/404/index.vue"),
    children: [
      {
        path: "https://github.com/Maxfengyan/vue3-admin-template-vite",
        meta: {
          title: "外链",
          icon: "link",
        },
      },
    ],
  },
  // 重定向放最后
  {
    path: "/:pathMatch(.*)*",
    hidden: true,
    name: "404",
    component: () => import("@/views/404/index.vue"),
  },
];

const allRouter = powerType == "1" ? constantRouters.concat(asyncRoutes) : constantRouters;

export const router = createRouter({
  history: createWebHashHistory(),
  routes: allRouter,
});
