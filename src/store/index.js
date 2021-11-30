import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fetchingData: true,
    error: null,
    playerList: [],
    users: [
      {
        id: 1,
        name: "Brian",
        email: "test@test",
        password: "1234",
      },
      {
        id: 2,
        name: "Juan",
        email: "juan@gmail.com",
        password: "1234",
      }
    ],
    userLogged: {},
    cards: [],
    selected: [],
  },
  mutations,
  actions,
  modules: {},
});
