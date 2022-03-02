const getters = {
  collapsed: (state) => state.system.collapsed,
  token: (state) => state.user.token,
  userName: (state) => state.user.userName,
  userPower: (state) => state.user.userPower,
  routes: (state) => state.user.routes,
};

export default getters;
