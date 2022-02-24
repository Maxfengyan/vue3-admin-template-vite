import { h } from "vue";
import { asyncRoutes } from "@/router/index";
import svgIcon from "@/plugins/icons/svgIcon.jsx";
const menuOptions = () => {
  const powerType = import.meta.env.VITE_POWER_TYPE;
  let result = [];
  if (powerType === "1") {
    // 静态路由权限呈现
    result = filterRouter(asyncRoutes);
  }
  return result;
};
const filterRouter = (route) => {
  let target = [];
  // 有子路由
  if (Array.isArray(route) && route.length > 0) {
    route.forEach((item) => {
      // 确定命名title && 非隐藏
      if (!item.hidden) {
        let routeItem = {
          label: item?.meta?.title || item?.name,
          key: item?.name,
          icon: () => {
            return h(svgIcon, { name: item?.meta?.icon });
          },
        };
        if (Array.isArray(item.children)) {
          // 判断是否需要折叠唯一子路由
          if (item.children.length === 1 && !item.alwaysShow) {
            let onlyRouteResult = findLastRoute(item.children);
            if (Array.isArray(onlyRouteResult)) {
              routeItem.children = filterRouter(onlyRouteResult);
            } else {
              routeItem.label = onlyRouteResult?.meta?.title;
              routeItem.key = onlyRouteResult?.name || onlyRouteResult?.path;
              routeItem.icon = () => {
                return h(svgIcon, { name: onlyRouteResult?.meta?.icon });
              };
            }
          } else {
            routeItem.children = filterRouter(item.children);
          }
        }
        target.push(routeItem);
      }
    });
  }
  return target;
};

// 找出最终路由
const findLastRoute = (route) => {
  if (Array.isArray(route) && route.length == 1) {
    if (route[0].children) {
      return findLastRoute(route[0].children);
    } else {
      return route[0];
    }
  } else {
    return route;
  }
};

const isExternal = (path) => {
  return /^(https?:|mailto:|tel:)/.test(path);
};
export default menuOptions;
