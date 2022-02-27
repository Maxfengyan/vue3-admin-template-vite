const state = {
  collapsed: false,
};

const mutations = {
  SET_COLLAPSED: (state) => {
    state.collapsed = !state.collapsed;
  },
};

const actions = {
  HandleChangeCollapsed(context) {
    context.commit("SET_COLLAPSED", !state.collapsed);
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
