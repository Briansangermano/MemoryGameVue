import * as types from "./types";

export default {
  // Loging
  [types.SUBMIT_LOGING_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.SUBMIT_LOGING_SUCCESS](state, userData) {
    state.fetchingData = false;
    state.error = null;
    const userLogged = state.users.find((user) => (user.email === userData.email) && (user.password === userData.password));
    state.userLogged = userLogged
  },

  [types.SUBMIT_LOGING_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },

  // Get Players
  [types.GET_PLAYERS_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.GET_PLAYERS_SUCCESS](state, { playerList }) {
    state.fetchingData = false;
    state.error = null;
    state.playerList = [...playerList];
  },

  [types.GET_PLAYERS_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },
};
