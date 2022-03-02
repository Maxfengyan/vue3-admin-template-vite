import { login, userInfo } from "@/api/user";
import { setToken, getToken, getUserName, setUserName } from "@/core/auth";
import filterAsyncRoutes from "@/core/addRoutePermission";
const state = {
  token: getToken() || "",
  userName: getUserName() || "",
  userPower: [],
  routes: [],
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
