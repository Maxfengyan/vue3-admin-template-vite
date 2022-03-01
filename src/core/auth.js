/**
 * * * * * * * * * * * * * * *
 * author: 马丰彦
 * date: 2022-02-15
 * function: 缓存相关（浏览器隐私模式下localstorage和sessionstorage可能会失效,暂时放弃）
 * * * * * * * * * * * * * * *
 */

import Cookies from "js-cookie";

const Token = "vue3-token";
const Collapsed = "vue3-collapsed";

export const getToken = () => {
  return Cookies.get(Token);
};

export const setToken = (token) => {
  Cookies.set(Token, token);
};

export const removeToken = () => {
  Cookies.remove(Token);
};

export const getCollapsed = () => {
  return Cookies.get(Collapsed) === "true" ? true : false;
};

export const setCollapsed = (collapsedValue) => {
  Cookies.set(Collapsed, collapsedValue);
};
