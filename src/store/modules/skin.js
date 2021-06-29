const state = {
  bgColor: "#2d3a4b",
  contentColor: "#fff",
};

const mutations = {
  SET_BGCOLOR: (state, bgcolor) => {
    state.bgColor = bgcolor;
  },
};

const actions = {
  Changebgcolor(context, bgColor) {
    context.commit("SET_BGCOLOR", bgColor);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
