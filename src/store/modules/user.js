import { login } from "@/api/epgms/account/login";
import { getUserInfo } from "@/api/epgms/account/getUserInfo";
import { logout } from "@/api/epgms/account/logout";
import filterAsyncRoutes from "@/core/addRoutePermission";
import {
  setToken,
  getToken,
  setUserName,
  getUserName,
  removeToken,
} from "@/core/auth";

const state = {
  token: getToken(),
  userName: getUserName(),
  account: "",
  avatar: "",
  sidebar: true,
  routes: [],
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, userName) => {
    state.userName = userName;
  },
  SET_ACCOUNT: (state, account) => {
    state.account = account;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_SIDEBAR: (state) => {
    state.sidebar = !state.sidebar;
  },
  SET_ROUTES: (state, routes) => {
    state.routes = routes;
  },
};

const actions = {
  // 登录
  async LoginAction(context, userInfo) {
    const { account, password } = userInfo;
    var result = await login({
      account: account.trim(),
      password: password.trim(),
    });
    const { data } = result;
    const { token, userName, avator, userAccount } = data;
    context.commit("SET_TOKEN", token);
    context.commit("SET_NAME", userName);
    context.commit("SET_AVATAR", avator);
    context.commit("SET_ACCOUNT", userAccount);
    setToken(token);
    setUserName(userName);
  },

  // 获取用户信息
  async GetUserInfo(context, token) {
    const result = await getUserInfo(token);
    const { data } = result;
    const { roles } = data;
    return roles;
  },

  // 退出登录
  async Logout(context) {
    logout().then(() => {
      context.commit("SET_TOKEN", "");
      context.commit("SET_NAME", "");
      context.commit("SET_AVATAR", "");
      context.commit("SET_ACCOUNT", "");
      removeToken();
    });
  },

  // sidebar status
  ChangeSidebar(context) {
    context.commit("SET_SIDEBAR");
  },

  async GenerateRoutes(context, roles) {
    const accessedRoutes = await filterAsyncRoutes(roles);
    context.commit("SET_ROUTES", accessedRoutes);
    return accessedRoutes;
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
