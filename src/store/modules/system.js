import { getCollapsed, setCollapsed } from "@/core/auth.js";
const state = {
  collapsed: getCollapsed() || false,
};

const mutations = {
  SET_COLLAPSED: (state) => {
    state.collapsed = !state.collapsed;
  },
};

const actions = {
  HandleChangeCollapsed(context) {
    setCollapsed(!state.collapsed);
    context.commit("SET_COLLAPSED", !state.collapsed);
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
