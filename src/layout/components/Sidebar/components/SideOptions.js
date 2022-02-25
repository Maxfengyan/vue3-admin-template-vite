import { h } from "vue";
import { RouterLink } from "vue-router";
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

// 过滤处理路由
const filterRouter = (route) => {
  let target = [];
  // 有子路由
  if (Array.isArray(route) && route.length > 0) {
    route.forEach((item) => {
      // 确定命名title && 非隐藏
      if (!item.hidden) {
        let routeItem = {
          label: handleLabelRender(item),
          key: item?.name,
          icon: () => {
            return h(svgIcon, { name: item?.meta?.icon });
          },
        };
        if (Array.isArray(item.children)) {
          // 判断是否需要折叠唯一子路由
          if (item.children.length === 1 && !item.alwaysShow) {
            let onlyRouteResult = findLastRoute(item.children);
            // 返回数据说明最终节点有多个路由
            if (Array.isArray(onlyRouteResult)) {
              routeItem.children = filterRouter(onlyRouteResult);
            } else {
              // 返回对象说明找到最终节点替换原节点
              routeItem.label = handleLabelRender(onlyRouteResult);
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

const handleLabelRender = (route) => {
  // 如果有子节点，渲染文本
  if (Array.isArray(route.children) && route.children.length > 0) {
    return route?.meta?.title || route?.name;
  } else {
    // 无子节点
    // 判断是否是外链形式
    if (isExternal(route.path)) {
      return () => h("a", { href: route?.path }, route?.meta?.title || route?.name);
    } else {
      return () =>
        h(
          RouterLink,
          {
            to: {
              name: route.name,
            },
          },
          { default: () => route?.meta?.title || route?.name }
        );
    }
  }
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
