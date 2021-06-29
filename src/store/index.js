import { createStore } from "vuex";
import getters from "./getters";
import skin from "./modules/skin";
import user from "./modules/user";

export default createStore({
  modules: {
    skin,
    user
  },
  getters,
});
