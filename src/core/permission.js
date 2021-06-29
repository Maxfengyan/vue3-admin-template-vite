/**
 * * * * * * * * * * * * * * *
 * author: 马丰彦
 * date: 2021-06-22
 * function: 全局权限
 * * * * * * * * * * * * * * *
 */

import { getToken } from "@/core/auth";
import { router } from "@/router/index";
import store from "@/store";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // css初始化
import getPageTitle from "./get-page-title";
const whiteList = ["/login"]; // 不重定向白名单
const powerType = import.meta.env.VITE_POWER_TYPE; // 权限类型

NProgress.configure({ showSpinner: false }); // 进度条

router.beforeEach(async (to, from, next) => {
  // 进度条开始
  NProgress.start();

  document.title = getPageTitle(to.meta.title);
  const token = getToken();

  // 有token，已经登录
  if (token) {
    // 动态路由权限
    if (powerType === "2") {
      const { routes } = store.getters;
      // 权限正常
      if (Array.isArray(routes) && routes.length > 0) {
        next();
      } else {
        // 已经登录但是强制刷新页面
        const result = await store.dispatch("GetUserInfo", token);
        if (Array.isArray(result) && result.length > 0) {
          // 与路由表过滤权限
          const routes = await store.dispatch("GenerateRoutes", result);
          routes.forEach((item) => router.addRoute(item));

          next({ ...to, replace: true });
        } else {
          alert("无权限");
          return false;
        }
      }
    } else {
      // 静态路由权限
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`); // 否则全部重定向到登录页
    }
  }
  NProgress.done();
});
