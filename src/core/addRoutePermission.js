import { asyncRoutes } from "@/router/index";
export default function filterAsyncRoutes(roles, routes = asyncRoutes) {
  const res = [];
  routes.forEach((route) => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(roles, tmp.children);
      }
      res.push(tmp);
    }
  });
  return res;
}

function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some((role) => role === route.meta.role);
  } else {
    return true;
  }
}
