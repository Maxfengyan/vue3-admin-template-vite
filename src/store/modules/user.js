import { login } from "@/api/login";
import { setToken, getToken } from "@/core/auth";

const state = {
  token: getToken(),
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {
  LoginAction(context, userInfo) {
    return new Promise(async (resolve, reject) => {
      const { account, password } = userInfo;
      let result = await login({ account, password });
      const dataCode = result?.dataCode;
      const dataMessage = result?.dataMessage;
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
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
