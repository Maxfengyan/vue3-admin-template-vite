import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/components/Layout/index.vue";

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
    name: "index",
    redirect: "/dashboard/index",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Layout,
    redirect: "/dashboard/index",
    children: [
      {
        name: "Index",
        path: "index",
        component: () => import("@/views/dashboard/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
];

// 动态路由
export const asyncRoutes = [
  {
    path: "/nested",
    // hidden: true,
    component: Layout,
    name: "Nested",
    meta: {
      title: "Nested",
      icon: "nest",
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/template/create/index.vue"), // Parent router-view
        name: "Menu1",
        meta: {
          title: "Menu1",
        },
        children: [
          {
            path: "menu1-1",
            hidden: true,
            component: () =>
              import("@/views/template/create/index.vue"),
            name: "Menu1-1",
            meta: {
              title: "Menu1-1",
            },
          },
          {
            path: "menu1-2",
            component: () =>
              import("@/views/template/create/index.vue"),
            name: "Menu1-2",
            meta: {
              title: "Menu1-2",
            },
            children: [
              {
                path: "menu1-2-1",
                component: () =>
                  import("@/views/template/create/index.vue"),
                name: "Menu1-2-1",
                meta: {
                  title: "Menu1-2-1",
                },
              },
              {
                path: "menu1-2-2",
                component: () =>
                  import("@/views/template/create/index.vue"),
                name: "Menu1-2-2",
                meta: {
                  title: "Menu1-2-2",
                },
              },
            ],
          },
          {
            path: "menu1-3",
            component: () =>
              import("@/views/template/create/index.vue"),
            name: "Menu1-3",
            meta: {
              title: "Menu1-3",
            },
          },
        ],
      },
      {
        path: "menu2",
        component: () => import("@/views/template/create/index.vue"),
        meta: {
          title: "menu2",
        },
      },
    ],
  },
  {
    path: "/template",
    component: Layout,
    name: "Template",
    redirect: "/template/create",
    meta: {
      title: "模板管理",
      role: "template",
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
          role: "template-create",
        },
      },
      {
        path: "audit",
        name: "template-audit",
        component: () => import("@/views/template/audit/index.vue"),
        meta: {
          title: "模板审核",
          icon: "template-audit",
          role: "template-audit",
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
      role: "portal",
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
          role: "portal-create",
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

const allRouter =
  powerType == "1"
    ? constantRouters.concat(asyncRoutes)
    : constantRouters;

export const router = createRouter({
  history: createWebHashHistory(),
  routes: allRouter,
});
