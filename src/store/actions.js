import * as types from "./types";

export default {
  submitLoging({ commit }, userData) {
    commit(types.SUBMIT_LOGING_REQUEST);
    try {
      commit(types.SUBMIT_LOGING_SUCCESS, userData)
    } catch (error) {
      commit(types.SUBMIT_LOGING_FAILURE)
    }
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
};
