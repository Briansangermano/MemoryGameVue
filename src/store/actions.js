import * as types from "./types";

export default {
  submitLoging({ commit }, emailUser) {
    commit(types.SUBMIT_LOGING, { emailUser })
  },
};
