const getters = {
  bgColor: (state) => state.skin.bgColor,
  token: (state) => state.user.token,
  userName: (state) => state.user.userName,
  account: (state) => state.user.account,
  avatar: (state) => state.user.avatar,
  routes: (state) => state.user.routes,
  sidebar: (state) => state.user.sidebar,
};

export default getters;
