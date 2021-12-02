import * as types from "./types";

export default {
  submitLoging({ commit }, userData) {
    commit(types.SUBMIT_LOGING, userData)
  },

  logout({ commit }) {
    commit(types.LOGOUT)
  },

  getPlayersList({ commit }) {
    commit(types.GET_PLAYERS_REQUEST);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) =>
        commit(types.GET_PLAYERS_SUCCESS, { playerList: response })
      )
      .catch((error) => commit(types.GET_PLAYERS_FAILURE, { error }));
  },

  checkedCard({ commit }, data) {
    commit(types.CHECK_CARD, data);
  },

  pushMoreCards({ commit }, data) {
    commit(types.PUSH_CARDS, data);
  },

  saveProfile({ commit }, user) {
    commit(types.SAVE_PROFILE, user);
  },
};
