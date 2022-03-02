/**
 * 动态解析权限并渲染路由: 通过router/index里预定的好的路由表asyncRoutes与后台接口返回的权限信息进行比对过滤
 * 路由表中meta对象里permission字段为路由权限唯一标识，不可重复
 * 后台API返回一维权限数组，所有权限不分层级，样例参考public/mock/userInfo.json
 * 此处权限配置比较灵活，如有特殊业务需求权限直接修改filterAsyncRoutes/hasPermission方法即可
 */

import { asyncRoutes } from "@/router"; // 获取路由表路由
/**
 *
 * @param {array} powers 后台API接口返回权限数组信息
 * @param {RouteRecordRaw} routes 动态路由表
 * @returns {RouteRecordRaw} 过滤后权限
 */
const filterAsyncRoutes = (powers, routes = asyncRoutes) => {
  const res = [];
  // 遍历路由表
  routes.forEach((route) => {
    const tmp = { ...route };
    if (hasPermission(powers, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(powers, tmp.children);
      }
      res.push(tmp);
    }
  });
  return res;
};

/**
 *
 * @param {*} powers 后台API接口返回权限数组信息
 * @param {*} route 当前路由表信息
 * @returns {boolean} 权限中是否包含此路由信息
 */
const hasPermission = (powers, route) => {
  if (route?.meta && route?.meta?.permission) {
    return powers.some((power) => power === route.meta.permission);
  } else {
    return true;
  }
};
export default filterAsyncRoutes;
