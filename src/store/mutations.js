import * as types from "./types";

export default {
  // Loging
  [types.SUBMIT_LOGING](state, { emailUser }) {
    const userLogged = state.users.find((user) => user.email === emailUser);
    state.userLogged = userLogged
  },
};
