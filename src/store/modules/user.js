import { login, userInfo } from "@/api/user";
import { setToken, getToken, getUserName, setUserName } from "@/core/auth";
import filterAsyncRoutes from "@/core/addRoutePermission";
const state = {
  token: getToken() || "", // 用户token
  userName: getUserName() || "", // 用户名
  userPower: [], // 用户权限
  routes: [], // 用户动态路由表
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USERNAME: (state, userName) => {
    state.userName = userName;
  },
  SET_USERPOWER: (state, userPower) => {
    state.userPower = userPower;
  },
  SET_ROUTES: (state, routes) => {
    state.routes = routes;
  },
};

const actions = {
  // 登录
  LoginAction(context, userInfo) {
    return new Promise(async (resolve, reject) => {
      const { account, password } = userInfo;
      let result = await login({ account, password });
      const { dataCode, dataMessage } = result;
      const token = result?.data?.token;
      if (dataCode === "0000" && token) {
        context.commit("SET_TOKEN", token);
        setToken(token);
        resolve(token);
      } else {
        reject(dataMessage || "无权限");
      }
    });
  },

  // 获取用户信息及权限
  GetUserInfo(context, token) {
    return new Promise(async (resolve, reject) => {
      let result = await userInfo({ token: token });
      const { dataCode, dataMessage } = result;
      const infoResult = result?.data;
      if (dataCode === "0000") {
        context.commit("SET_USERNAME", infoResult?.name);
        context.commit("SET_USERPOWER", infoResult?.power);
        setUserName(infoResult?.name);
        resolve(infoResult?.power);
      } else {
        reject(dataMessage || "无权限");
      }
    });
  },

  // 过滤权限
  async GenerateRoutes(context, powers) {
    const accessedRoutes = await filterAsyncRoutes(powers);
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
