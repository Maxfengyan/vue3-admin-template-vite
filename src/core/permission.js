import { router } from "@/router";
import { getToken } from "./auth";
import store from "@/store";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // css初始化

const whiteList = ["/login"]; // 不重定向白名单
const powerType = import.meta.env.VITE_POWER_TYPE; // 权限类型

NProgress.configure({ showSpinner: false }); // 进度条

router.beforeEach(async (to, from, next) => {
  // 进度条开始
  NProgress.start();
  // document.title = getPageTitle(to.meta.title);
  const token = getToken();
  // 如果已经登录
  if (token) {
    // 动态权限
    if (powerType === "2") {
      const { routes, userPower } = store.getters;
      // 权限正常
      if (Array.isArray(routes) && routes.length > 0) {
        next();
      } else {
        // 已经登录但是可能强制刷新页面
        debugger;
        let result;
        if (Array.isArray(userPower) && userPower.length > 0) {
          result = userPower;
        } else {
          result = await store.dispatch("GetUserInfo", token);
        }
        if (Array.isArray(result) && result.length > 0) {
          // 与路由表比对过滤权限
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
      // 如果目标路由是登录页面重定向到默认页
      if (to.name === "Login") {
        next({ name: "Index" });
      } else {
        next();
      }
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
