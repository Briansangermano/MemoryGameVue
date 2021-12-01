import * as types from "./types";

export default {
  submitLoging({ commit }, userData) {
    commit(types.SUBMIT_LOGING, userData)
  },

  logout({ commit }) {
    commit(types.LOGOUT_REQUEST);
    try {
      commit(types.LOGOUT_SUCCESS)
    } catch (error) {
      commit(types.LOGOUT_FAILURE)
    }
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

  chackedCard({ commit }, data) {
    commit(types.CHECK_CARD, data)
  },

  pushMoreCards({ commit }, data) {
    commit(types.PUSH_CARDS_REQUEST);
    try {
      commit(types.PUSH_CARDS_SUCCESS, data)
    } catch (error) {
      commit(types.PUSH_CARDS_FAILURE)
    }
  },

  saveProfile({ commit }, user) {
    commit(types.SAVE_PROFILE_REQUEST);
    try {
      commit(types.SAVE_PROFILE_SUCCESS, user)
    } catch (error) {
      commit(types.SAVE_PROFILE_FAILURE)
    }
  },
};
