import * as types from "./types";

export default {
  // LOGIN
  [types.SUBMIT_LOGING](state, userData) {
    state.fetchingData = false;
    state.error = null;
    const userLogged = state.users.find((user) => (user.email === userData.email) && (user.password === userData.password));
    if (userLogged) {
      state.userLogged = userLogged
      state.error = null;
    } else {
      state.userLogged = userLogged
      state.error = true;
    }
  },

  // LOGOUT
  [types.LOGOUT](state) {
    state.fetchingData = false;
    state.error = null;
    state.userLogged = {}
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

  // CHECK CARD
  [types.CHECK_CARD](state, { cardSelected }) {
    state.fetchingData = false;
    state.error = null;
    // Change the state of the card to Checked
    cardSelected.checked = !cardSelected.checked;
    // Filter the checked cards and push them to a new array
    state.cards.filter(c => c === cardSelected && state.selected.push(c))
    // Validate that the array has an even length
    if (state.selected.length % 2 === 0) {
      const Object1 = state.selected[state.selected.length - 2];
      const Object2 = state.selected[state.selected.length - 1];
      // Compare the penultimate object in the array with the last
      if (Object1.number === Object2.number) {
        // If they are the same, set these elements as memorized
        setTimeout(() => {
          return state.cards.forEach(element => {
            if (element === Object1 || element === Object2) return element.memorized = true
          });
        }, 1000);
      } else {
        console.log("PASO");
        state.cards.forEach(element => element.disabled = true);
        setTimeout(() => {
          state.cards.forEach(element => element.disabled = false);
          return state.cards.forEach(element => (element.memorized !== true) && (element.checked = false));
        }, 600);
      }
    }
  },

  // PUSH MORE CARDS
  [types.PUSH_CARDS](state, data) {
    state.fetchingData = false;
    state.error = null;
    state.cards = [...data];
  },

  // SAVE PROFILE
  [types.SAVE_PROFILE](state, user) {
    state.fetchingData = false;
    state.error = null;
    state.users.forEach(element => (element.id !== user.id) && (element = user));
  },
};
