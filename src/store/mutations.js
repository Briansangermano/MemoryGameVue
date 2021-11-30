import * as types from "./types";

export default {
  // LOGIN
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

  // LOGOUT
  [types.LOGOUT_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.LOGOUT_SUCCESS](state) {
    state.fetchingData = false;
    state.error = null;
    state.userLogged = {}
  },

  [types.LOGOUT_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },

  // GET PLAYERS
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
